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
