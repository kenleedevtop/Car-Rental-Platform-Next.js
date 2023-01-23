/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const { i18n } = require('./next-i18next.config');

module.exports = withFonts({
  reactStrictMode: true,
  i18n,
});
