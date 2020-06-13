
// When delete button on post is clicked, show the delete modal
function deletePopUp(){
    var deleteModal = document.getElementById("delete-modal"); 
   deleteModal.style.display = "block";
}


// When Yes button of delete-post modal is clicked
function yesClick() {
    var deleteModal = document.getElementById("delete-modal"); 
   deleteModal.style.display = "none";
}

// When No button of delete-post modal is clicked
function noClick() {
    var deleteModal = document.getElementById("delete-modal"); 
   deleteModal.style.display = "none";
    postToDelete = null;
}
