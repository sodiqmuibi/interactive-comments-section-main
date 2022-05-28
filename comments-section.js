//Vote
const plus = document.querySelectorAll('.voteUp')
const minus = document.querySelectorAll('.voteDown')
const voteNumber = document.querySelectorAll('.voteNumber')

for (let i=0; i<plus.length; i++) {
    plus[i].addEventListener('click', function() {
        voteNumber[i].textContent=parseFloat(voteNumber[i].textContent) + 1
    })
}


for (let i=0; i<minus.length; i++) {
    minus[i].addEventListener('click', function() {
        voteNumber[i].textContent=parseFloat(voteNumber[i].textContent) - 1
    })
}

//Reply
const replyButton = document.querySelectorAll('.reply')
const commentBox = document.querySelectorAll('.replySection')
const text = document.querySelectorAll('textarea')
const replyComment = document.querySelectorAll('.replyBtn')
const userName = document.querySelectorAll('.userName')
const commentContainer = document.getElementById('commentContainer')

for (let i=0; i<replyButton.length; i++) {
    replyButton[i].addEventListener('click', function() {
        commentBox[i].classList.toggle('active')
        replyComment[i].addEventListener('click', function() {
            let replyBox = document.createElement('div')
            replyBox.className='row'
            replyBox.innerHTML= `<div class="line"></div>
            <div class="card">
              <div class="voteCount">
                <div class="vote-icon voteUp">
                  <img src="images/icon-plus.svg" alt="icon-plus" />
                </div>
                <p class="voteNumber">0</p>
                <div class="vote-icon voteDown">
                  <img src="images/icon-minus.svg" alt="icon-minus" />
                </div>
              </div>
              <div class="profile">
                <div class="userAvatar">
                  <img src="images/avatars/image-juliusomo.png" alt="" />
                </div>
                <p class="userName">juliusomo <span class="user-label">you</span></p>
                <p class="date">just now</p>
              </div>
              <div class="icon">
                <div class="delete" onclick="showModule()">
                  <img src="images/icon-delete.svg" alt="" />
                  <p>Delete</p>
                </div>
                <div class="edit" onclick="editComment()">
                  <img src="images/icon-edit.svg" alt="" />
                  <p>Edit</p>
                </div>
              </div>
              <div class="content">
                <span class="initial">@${userName[i].textContent}</span> ${text[i].value}
              </div>
            </div>`;
            commentContainer.appendChild(replyBox)
            commentBox[i].classList.remove('active')
            text[i].value=""

        })

    })
}

// Delete
const module = document.querySelector(".module-delete");

function showModule() {
  module.classList.add("show-module");
}

const btnCancelModule = document.querySelector(".btn-cancel");
const btnDeleteModule = document.querySelector(".btn-delete");

btnCancelModule.onclick = () => {
  module.classList.remove("show-module");
};

btnDeleteModule.onclick = () => {
  const deletebutton = document.querySelector(".delete");
  const card = deletebutton.parentElement;
  card.parentElement.remove();
  module.classList.remove("show-module");
};

function editComment() {
  const editbutton = document.querySelector(".edit");
  const deletebutton = document.querySelector(".delete");
  const content = editbutton.parentElement.nextElementSibling;
  const textArea = content.innerText;
  editbutton.style.opacity = "0.6";
  deletebutton.style.opacity = "0.6";
  editbutton.style.cursor = "not-allowed";
  deletebutton.style.cursor = "not-allowed";
  content.innerHTML = `<textarea rows="4" cols="50" class="editedComment">${textArea} </textarea>
  <div class="btn-update-wrapper" ><button class="btn btn-update">UPDATE</button></div>`;

  const updateButton = document.querySelector(".btn-update");
  const newTextArea = document.querySelector(".editedComment");
  updateButton.onclick = () => {
    content.innerHTML = `${newTextArea.value}`;
    editbutton.style.opacity = "1";
    deletebutton.style.opacity = "1";
    editbutton.style.cursor = "pointer";
    deletebutton.style.cursor = "pointer";
  };
}

const btnSendComment = document.querySelector(".sendBtn");
btnSendComment.onclick = () => {
  const newRow = document.createElement("div");
  const textArea = btnSendComment.previousElementSibling;
  if (textArea.value == "") return;
  newRow.className = "row";
  newRow.innerHTML = `<div class="card">
          <div class="vote">
            <div class="vote-icon voteUp">
              <img src="images/icon-plus.svg" alt="icon-plus" />
            </div>
            <p class="voteNumber">0</p>
            <div class="vote-icon voteDown">
              <img src="images/icon-minus.svg" alt="icon-minus" />
            </div>
          </div>
          <div class="profile">
            <div class="userAvatar">
              <img src="images/avatars/image-juliusomo.png" alt="" />
            </div>
            <p class="name">juliusomo</p>
            <p class="date">just now</p>
          </div>
          <div class="icon">
              <div class="delete" onclick="showModule()">
                <img src="images/icon-delete.svg" alt="" />
                <p>Delete</p>
              </div>
              <div class="edit" onclick="editComment()">
                <img src="images/icon-edit.svg" alt="" />
                <p>Edit</p>
              </div>
          </div>
          <div class="content">
            ${textArea.value}
          </div>
          
        </div>`;

  const btnParrent = btnSendComment.parentElement.parentElement;
  const cardWrapper = document.querySelector(".card-wrapper");

  cardWrapper.insertBefore(newRow, btnParrent);
  textArea.value = "";
};

