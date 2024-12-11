# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 安装pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 复制package文件
COPY package*.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制源代码
COPY . .

# 构建应用
RUN pnpm build

# 生产阶段
FROM node:18-alpine AS runner

WORKDIR /app

# 安装pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 复制package文件
COPY package*.json pnpm-lock.yaml ./

# 只安装生产依赖
RUN pnpm install --frozen-lockfile --prod

# 从构建阶段复制构建产物
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/i18n ./i18n

# 设置环境变量
ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["pnpm", "start"] 