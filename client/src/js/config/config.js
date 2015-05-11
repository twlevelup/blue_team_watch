var Config = {};

if(process.env.NODE_ENV === 'production') {
  Config.firebaseUrl = 'https://blue-watch-prod.firebaseIO.com';
} else {
  Config.firebaseUrl = 'https://blue-watch-dev.firebaseIO.com';
}

module.exports = Config;
