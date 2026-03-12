pipeline {
  agent any

  environment {
    GOOGLE_CLIENT_ID = credentials('GOOGLE_CLIENT_ID')
    GOOGLE_CLIENT_SECRET = credentials('GOOGLE_CLIENT_SECRET')
    EMAIL_PASS = credentials('EMAIL_PASS')
    MONGO_URI = credentials('MONGO_URI')
  }

  stages {
    stage('Clone Repo') {
      steps {
          git url: 'https://github.com/devitasari/kada-rest-api.git',
          branch: 'main'
      }
    }

    stage('Create ENV') {
      steps {
        sh '''
        cat <<EOF > .env
GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET
EMAIL_PASS=$EMAIL_PASS
PORT=3000
MONGO_URI=$MONGO_URI
EOF
        '''
      }
    }

    stage('Build Docker') {
      steps {
        sh 'docker compose build'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker compose down'
        sh 'docker compose up -d'
      }
    }

  }
}