const resource = [

  /* --- CSS --- */
  '/PROJECT_NAME/assets/css/style.css',

  /* --- PWA --- */
  '/PROJECT_NAME/app.js',
  '/PROJECT_NAME/sw.js',

  /* --- HTML --- */
  '/PROJECT_NAME/index.html',
  '/PROJECT_NAME/404.html',
  
    '/PROJECT_NAME/categories/',
  
    '/PROJECT_NAME/tags/',
  
    '/PROJECT_NAME/archives/',
  
    '/PROJECT_NAME/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/PROJECT_NAME/assets/img/favicons/android-chrome-192x192.png',
    '/PROJECT_NAME/assets/img/favicons/android-chrome-512x512.png',
    '/PROJECT_NAME/assets/img/favicons/apple-touch-icon.png',
    '/PROJECT_NAME/assets/img/favicons/favicon-16x16.png',
    '/PROJECT_NAME/assets/img/favicons/favicon-32x32.png',
    '/PROJECT_NAME/assets/img/favicons/favicon.ico',
    '/PROJECT_NAME/assets/img/favicons/mstile-150x150.png',
    '/PROJECT_NAME/assets/js/dist/categories.min.js',
    '/PROJECT_NAME/assets/js/dist/commons.min.js',
    '/PROJECT_NAME/assets/js/dist/home.min.js',
    '/PROJECT_NAME/assets/js/dist/misc.min.js',
    '/PROJECT_NAME/assets/js/dist/page.min.js',
    '/PROJECT_NAME/assets/js/dist/post.min.js',
    '/PROJECT_NAME/assets/js/dist/pvreport.min.js'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

