# ---------- STAGE 1: builder ----------
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY src ./src

# ---------- STAGE 2: runtime ----------
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY package*.json ./

EXPOSE 3000

CMD ["npm", "start"]