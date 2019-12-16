var config = {
  
    siteTitle: "OAuth App",
    dbLocation: "mongodb+srv://user:123@cluster0-jkmtu.mongodb.net/test?retryWrites=true",
  
    facebookConfig: {
      appID: '1898036960240703',
      appSecret: '346b72bd7f340223fe6d0818ca1c5d8d',
      callbackUrl: "http://localhost:3000/auth/login/facebook/callback"
    },
  
    googleConfig: {
      appID: '430175608680-k5rm1a736a4lmgp04ti8hukff7pjpa89.apps.googleusercontent.com',
      appSecret: '2qSI3qNebIGxGtK0XUeYbA5l',
      callbackUrl: "http://localhost:3000/auth/login/google/callback"
    },

    jwtSecret: "myLittlePony"
  
  }
  
  module.exports = config;