/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const { i18n } = require('./next-i18next.config');

module.exports = withFonts({
  reactStrictMode: false,
  i18n,
  images: {
    domains: ['devapi.brotherhoodhouse.com', 'localhost'],
  },
});
