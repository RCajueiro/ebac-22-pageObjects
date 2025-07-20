FROM cypress/included:13.13.2

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["npx", "cypress", "run"]