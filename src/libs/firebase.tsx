import { getDatabase } from '@firebase/database';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyCui8Bi5nwScwTsHHq8vdDxi33w9gc3qDs',
  authDomain: 'cloneflix-8b673.firebaseapp.com',
  projectId: 'cloneflix-8b673',
  storageBucket: 'cloneflix-8b673.appspot.com',
  messagingSenderId: '1016542187563',
  appId: '1:1016542187563:web:0f012a062dec14cc8f5a6e',
});

export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
