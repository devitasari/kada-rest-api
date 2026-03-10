# ---------- Stage 1 : dependencies ----------
FROM node:18-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci


# ---------- Stage 2 : build ----------
FROM node:18-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm prune


# ---------- Stage 3 : production ----------
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["node","src/app.js"]