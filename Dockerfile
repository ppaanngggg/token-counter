FROM node:20-bookworm-slim

WORKDIR /app

ENV NODE_ENV production

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the Next.js application
COPY . .
RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "start"]