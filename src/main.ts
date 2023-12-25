import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ88LjpLXtUCNCuDvJYFteVy6YzNcHTE4",
  authDomain: "angular-96009.firebaseapp.com",
  projectId: "angular-96009",
  storageBucket: "angular-96009.appspot.com",
  messagingSenderId: "179940281562",
  appId: "1:179940281562:web:c5a6bd789146311e1529e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
