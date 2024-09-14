module.exports = [
  'strapi::logger',
  'strapi::errors',
  // ============ this config for cloudinary, if you want to enable it remove the above 'strapi::security' and uncomment the code:
  // {
  //   name: 'strapi::security',
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         'connect-src': ["'self'", 'https:'],
  //         'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
  //         'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
