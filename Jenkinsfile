pipeline {
  agent any

  stages {

    stage('Clone Repo') {
      steps {
        git url: 'https://github.com/devitasari/kada-rest-api.git',
        branch: 'main'
      }
    }

    stage('Inject ENV') {
      steps {
        withCredentials([file(credentialsId: 'env-file', variable: 'ENVFILE')]) {
          sh 'cp $ENVFILE .env'
        }
      }
    }

    stage('Build Docker') {
      steps {
        sh 'docker compose build'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
        docker compose down || true
        docker compose up -d --build
        docker ps
        '''
      }
    }
  }
}