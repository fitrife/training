FROM node:22-bullseye
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps --prefer-offline
COPY . .
ENV NODE_OPTIONS="--max_old_space_size=4096"
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "dev"]

