import Firebase from 'firebase'

  const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyDRrCAhLMpGWrcVeh3qtEbZlS3hykTJIUU",
    authDomain: "stripe-f-11089.firebaseapp.com",
    databaseURL: "https://stripe-f-11089-default-rtdb.firebaseio.com",
    projectId: "stripe-f-11089",
    storageBucket: "stripe-f-11089.appspot.com",
    messagingSenderId: "418002644922",
    appId: "1:418002644922:web:bad5a1e3a63c3d1264b783",
    measurementId: "G-L88FR7KZ5S"

});
// Export the database for components to use.
export const db = firebaseApp.database();
