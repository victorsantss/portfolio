const Prismic = require('@prismicio/client');

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  return prismic;
}
