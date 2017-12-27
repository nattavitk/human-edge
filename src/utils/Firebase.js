import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD8dQw_tHW5g8SFSSWMtUxSSjEMvV8_j3o',
  authDomain: 'citizen-api-bd10d.firebaseapp.com',
  databaseURL: 'https://citizen-api-bd10d.firebaseio.com',
  projectId: 'citizen-api-bd10d',
  storageBucket: 'citizen-api-bd10d.appspot.com',
  messagingSenderId: '764277610221',
};

firebase.initializeApp(firebaseConfig);

export const signInWithEmail = (email, password, callback) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('errorCode', errorCode);
      console.log('errorMessage', errorMessage);

      callback(error);
    });
};

export default {
  signInWithEmail,
};
