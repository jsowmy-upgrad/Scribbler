
// SignUp Modal Variables
var modal = document.getElementById("signUp-Modal");
var btn = document.getElementById("signUp-Btn");
var span = document.getElementsByClassName("close")[0];

// SignIn Modal Variables
var signInModal = document.getElementById("signIn-Modal");
var signInBtn = document.getElementById("signIn-Btn");
var signInSpan = document.getElementsByClassName("signIn-Close")[0];
var redirecToSignUpPage = document.getElementsByClassName("redirecToSignUpPage")[0];
// Posts Modal Variables
var postsModal = document.getElementById("posts-Modal");
var createPostBtn = document.getElementById("create-post-btn");
var createPostSpan = document.getElementsByClassName("createPost-Close")[0];

// SignUp Modal Code 
// When the user clicks the sign up button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the signup modal
span.onclick = function() {
  modal.style.display = "none";
}


// SignIn Modal Code 
// When the user clicks the signIn button, open the modal 
signInBtn.onclick = function() {
  signInModal.style.display = "block";
}
// When the user clicks on <span> (x), close the signIn modal
signInSpan.onclick = function() {
  signInModal.style.display = "none";
}
// When the user clicks signup hyperlink , redirect to signUp modal
redirecToSignUpPage.onclick = function(){
  signInModal.style.display = "none";
  modal.style.display = "block";
}

// All Posts Modal Code 
// When the user clicks the sign in button, open the modal 
createPostBtn.onclick = function() {
  postsModal.style.display = "block";
}
// When the user clicks on <span> (x), close the signup modal
createPostSpan.onclick = function() {
  postsModal.style.display = "none";
}


// Common Modal Code For User Clicks Outside Modal
window.onclick = function(event) {
  // When the user clicks anywhere outside of the signup modal, close it
  if (event.target == postsModal) {
    postsModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the signup modal, close it
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
  // When the user clicks anywhere outside of the signup modal, close it
  if (event.target == modal) {
    modal.style.display = "none";
  }

}

function redirecToAllPostsPg() {
  window.open("./html/postslist.html", "_self");
}

function signUpUser(name, username, pwd, confirmpwd) {}

function inputValidation(inputTxt) {
  if (inputTxt.value == "") {
    console.log(inputTxt.value);
    inputTxt.focus();
  }
}


