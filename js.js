let comment = document.getElementById('comment-btn')
  .addEventListener('click', function () {
    // console.log("Button is clicked");
    const commentSection = document.getElementById('comment-section')

    const cmtTxtArea = document.getElementById('comment-textarea')
    const commentText = cmtTxtArea.value;
    console.log(commentText);

    // Clear comment box after saving it
    cmtTxtArea.value = ''

    const newComment = document.createElement('p')
    newComment.innerText = commentText;

    commentSection.appendChild(newComment)


  })
// console.log(comment);