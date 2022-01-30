import { initializeApp }  from 'firebase/app';
import {getStorage} from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGdtY7gdgReTj4ldZzzA5BVnGXMB1Q5Cw",
  authDomain: "wanabana-io.firebaseapp.com",
  projectId: "wanabana-io",
  storageBucket: "wanabana-io.appspot.com",
  messagingSenderId: "518051462219",
  appId: "1:518051462219:web:280a614baf5b1be38de1ce",
  measurementId: "G-3FHX46XN0T"
};

initializeApp(firebaseConfig);
const storage = getStorage();

export { storage }
