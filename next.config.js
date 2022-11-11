/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

module.exports = withFonts({
  reactStrictMode: true,
  pageExtensions: ['tsx'],
});
