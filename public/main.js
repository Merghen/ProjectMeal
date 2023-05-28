const submitBtn = document.querySelector("#submitButton");
const userName = document.querySelector("#Username");
const surName = document.querySelector("#Surname");
const comment = document.querySelector("#comment");
const count = document.querySelector(".count");
const commentsCont = document.querySelector(".comments__container");

submitBtn.addEventListener("click", submitFeedback);

function submitFeedback(e) {
  const userNameForm = userName.value;
  const surNameForm = surName.value;
  const commentForm = comment.value;

  console.log(userNameForm, surNameForm);

   addComment();

  e.preventDefault(); // sayfanın yenilenmesini engeller.
}

function addComment() {
    if(userName.value !="" && surName.value != "" && comment.value != "" ){
        const newDiv = document.createElement("div");

        let letter = userName.value.charAt(0);
      
        newDiv.innerHTML = `
        <div class="everyComment">
        <div class="resim">
            ${letter}
            </div>
            <div class="commentUsername">
              <small class="nickname">
              ${userName.value} ${surName.value}
              </small>
              <p class="commentText">
              ${comment.value}
              </p>
            </div>
      </div>
        
          `;
          document.getElementById("div1").appendChild(newDiv)
    }
    else{
        alert("lütfen boş bir alan bırakmayın");
    }
  
}
