const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})


// get the form elements
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const usernameInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');

// add a submit event listener to the form
form.addEventListener('submit', (e) => {
  // prevent the form from submitting
  e.preventDefault();

  // get the values from the form elements
  const email = emailInput.value;
  const password = passwordInput.value;
  const username = usernameInput.value;

  // validate the form values
  if (!email) {
    alert('Please enter an email address');
  } else if (!password) {
    alert('Please enter a password');
  } else if (form.classList.contains('form--signup') && !username) {
    alert('Please enter a username');
  } else {
    // the form is valid, you can submit it
    alert('Form is valid, you can submit it');
  }
});
