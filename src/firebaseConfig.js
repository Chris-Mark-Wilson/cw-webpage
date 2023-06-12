
import {initializeApp} from 'firebase/app';

import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDtsegIp0u2X2B6eVtiKE4ro-bq5r7aNi8",
  authDomain: "cw-webpage-1686390194073.firebaseapp.com",
  projectId: "cw-webpage-1686390194073",
  storageBucket: "cw-webpage-1686390194073.appspot.com",
  messagingSenderId: "751299865282",
  appId: "1:751299865282:web:fd1e83b31c040af0b6695b",
  measurementId: "G-3EC528K5J2"  
};

const app=initializeApp(firebaseConfig);

 const storage=getStorage(app);
 export {storage};