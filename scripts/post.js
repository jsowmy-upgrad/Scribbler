// makes Text BoX look Editable when user clicks
function editButtonClick() {
    var postTitle = document.getElementById('post-title');
    var postText = document.getElementById('post-text');
    var btnText = document.getElementById('btn-text');


    if (postTitle.contentEditable != "true") {
        postTitle.classList.add("txt-edit-highlight");
        postText.classList.add("txt-edit-highlight");
        postTitle.contentEditable = "true";
        postText.contentEditable = "true";
        btnText.innerHTML = 'Save <i class="fa fa-floppy-o" id="btn-icon"></i>';
    } else {
        postTitle.classList.remove("txt-edit-highlight");
        postText.classList.remove("txt-edit-highlight");
        postTitle.contentEditable = "false";
        postText.contentEditable = "false";
        btnText.innerHTML = 'Edit <i class="fa fa-pencil-square-o" id="btn-icon"></i>';
    }
}

// like button increment function
var numberOfClicks = 0;
function postLikes() {
    numberOfClicks += 1;
    if (numberOfClicks != 0) {
        var likeMsg = document.getElementById("like-msg");
        if (numberOfClicks == 1) {
            likeMsg.innerHTML = numberOfClicks + " person likes this!";
        } else {
            likeMsg.innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}
// Add Latest User Comment on the top 
function addComment() {
    var edtComment = document.getElementById('edit-comment');
    var commentText = edtComment.value;

    if (commentText != "") {
        var commentList = document.getElementById('comment-list');
        var newDiv = document.createElement("div");
        newDiv.classList.add("comment-text");
        var newContent = document.createTextNode(commentText);
        newDiv.appendChild(newContent);
        commentList.insertAdjacentElement('afterbegin', newDiv);
        edtComment.value = edtComment.defaultValue;
    }
}
