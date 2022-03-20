// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAGxcb4PNWUcYYWSY_2ynmsV04VxgVJRgo",
    authDomain: "letschatapp-4ad5b.firebaseapp.com",
    databaseURL: "https://letschatapp-4ad5b-default-rtdb.firebaseio.com",
    projectId: "letschatapp-4ad5b",
    storageBucket: "letschatapp-4ad5b.appspot.com",
    messagingSenderId: "672201901333",
    appId: "1:672201901333:web:d0fcb44660b2e8ec19951c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML  = "Welcome,"+ user_name + "!";
function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Names -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "/index.html";
}
