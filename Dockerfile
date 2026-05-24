FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY apps/web/main/package*.json ./apps/web/main/
COPY packages/*/package*.json ./packages/
RUN npm install --include=dev
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--workspace=main"]
