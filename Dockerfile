FROM node:22-alpine AS base
WORKDIR /app

RUN npm install -g pnpm

FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN pnpm install --frozen-lockfile

FROM base AS builder

COPY --from=deps /app /app
RUN pnpm run build

FROM base AS pruner

COPY --from=builder /app /app

RUN pnpm prune --prod


FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN npm install -g pnpm

COPY --from=pruner /app/node_modules ./node_modules
COPY --from=pruner /app/apps ./apps
COPY --from=pruner /app/packages ./packages
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

EXPOSE 3000
EXPOSE 8080

CMD [ "pnpm", "start" ]
