
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMxfTsVsYcbfwTdxFXeChtyIANNUacbBY",
    authDomain: "class-93-d53ec.firebaseapp.com",
    databaseURL: "https://class-93-d53ec-default-rtdb.firebaseio.com",
    projectId: "class-93-d53ec",
    storageBucket: "class-93-d53ec.appspot.com",
    messagingSenderId: "972298041982",
    appId: "1:972298041982:web:fa7b659b1b49114385362f",
    measurementId: "G-Y18WVMS956"
  };
  
  
  
  firebase.initializeApp(firebaseConfig);



  function adduser(){
    user_name= document.getElementById("user_name1").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding_user"
    });
  }
  