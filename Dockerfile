FROM node:15-alpine

COPY test.js ./

CMD ["node", "test.js"]
