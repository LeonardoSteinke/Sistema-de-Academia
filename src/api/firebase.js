import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDHNX3LYp7aYz15da5dzNTKflk4Hx8dOfg',
  authDomain: 'man-academia.firebaseapp.com',
  projectId: 'man-academia',
  storageBucket: 'man-academia.appspot.com',
  messagingSenderId: '95161809668',
  appId: '1:95161809668:web:19580ab128952e97246e51',
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
