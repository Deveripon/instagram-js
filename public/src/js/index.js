//post comment input field intaraction
const commentInput = document.querySelector("#comment");
const commentSubmit = document.querySelector("#submit");

commentInput.oninput = (e) => {
  let val = e.target.value;
  if (val.length > 0) {
    commentSubmit.style.opacity = 1;
  } else {
    commentSubmit.style.opacity = 0;
  }
};

//create post upload file intaraction

const media = document.getElementById("media");
const imagePreview = document.querySelector(".media-preview img");
const mediaUploader = document.querySelector(".media-uploader");
const nextButton = document.querySelector(".next");
const modal = document.querySelector(".modal");
const postContent = document.querySelector(".post-content");
const modalBody = document.querySelector(".modal-body");
const shareButton = document.querySelector("input[type=submit]");
const createPostForm = document.querySelector(".create-post-form");
const creatButton = document.getElementById("createButton");
const createPostModal = document.querySelector(".create-post-modal");
//image preview
media.onchange = (e) => {
  e.preventDefault();
  const file = e.target.files[0];
  let fileUrl = URL.createObjectURL(file);
  imagePreview.setAttribute("src", fileUrl);
  mediaUploader.style.display = "none";
  nextButton.style.opacity = "1";
  nextButton.style.cursor = "pointer";
};
//goto next option
nextButton.onclick = (e) => {
  e.preventDefault();
  modalBody.style.display = "flex";
  modal.style.width = "60vw";
  postContent.style.display = "block";
  e.target.style.display = "none";
};

//submit the form
createPostForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const objectData = Object.fromEntries(formData);
  console.log(objectData);
});

//modal show hide
creatButton.onclick = (e) => {
  e.preventDefault();
  createPostModal.style.display = "block";
};
