import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB9E0uoOVb3WPwONWo2la91U_1XkzE4I2o",
    authDomain: "ecommerce-e2f1a.firebaseapp.com",
    projectId: "ecommerce-e2f1a",
  storageBucket: "ecommerce-e2f1a.appspot.com",
  messagingSenderId: "376112064213",
  appId: "1:376112064213:web:a14069e19de835c2b7e45c"
};

firebase.initializeApp(firebaseConfig);


