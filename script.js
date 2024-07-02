let container = document.getElementById("container");

container.addEventListener("click", function (e) {
  let isBtnReply = e.target;
  if (isBtnReply.innerText === "Reply") {
    createReplyContainer(e);
  } else {
    let isBtnPost = e.target;
    if (isBtnPost.classList.contains("post")) {
      createComment(e);
    }
  }
});

function createComment(e) {
  console.log(e.target);
  let inputText = e.target.parentNode.children[0].value;
  let commentContainer = document.createElement("div");
  commentContainer.setAttribute("class", "comment_container");
  commentContainer.innerHTML = `<div class="comment-card"><div class="comment">${inputText}</div><button class="reply-btn">Reply</button>`;
  let mainParent = e.target.parentNode.parentNode;
  mainParent.replaceChild(commentContainer, e.target.parentNode);
}

function createReplyContainer(e) {
  let replyContainer = document.createElement("div");
  let input = document.createElement("input");
  let btn = document.createElement("button");
  replyContainer.setAttribute("class", "reply-container");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Type your Comment Here");
  btn.setAttribute("class", "post");
  btn.setAttribute("type", "submit");
  btn.innerText = "Post Comment";
  replyContainer.appendChild(input);
  replyContainer.appendChild(btn);
  e.target.parentNode.appendChild(replyContainer);
}
