// config.js

// Environment configuration
const ENV = {
    production: false,
    development: true,
    testing: false
};

// Domain configuration
const DOMAIN = {
    api: "https://api.example.com",
    website: "https://www.example.com"
};

module.exports = { ENV, DOMAIN };