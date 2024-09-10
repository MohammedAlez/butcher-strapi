import favicon from "./extensions/favicon.png"


const config = {
  locales: [
    'ar',
    'fr',
  ],
  translations: {
    en: {
      "Auth.form.welcome.title": "Welcome to Selecta Beef",
      "Auth.form.welcome.subtitle": "Connect to your account",
    },
    fr: {
      "Auth.form.welcome.title": "Bienvenue sur Selecta Beef",
      "Auth.form.welcome.subtitle": "Contactez-vous à votre compte",
    },
    ar: {
      "Auth.form.welcome.title": "مرحبا بك في Selecta Beef",
      "Auth.form.welcome.subtitle": "سجل الدخول الى حسابك",
    },
  },

  head:{
    favicon
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
