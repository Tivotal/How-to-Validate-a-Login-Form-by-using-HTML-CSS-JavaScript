/* Created by Tivotal */

let form = document.querySelector("form");
let eField = document.querySelector(".email");
let eInput = eField.querySelector("input");
let pField = document.querySelector(".password");
let pInput = pField.querySelector("input");

form.onsubmit = (e) => {
  //preventing form to submit
  e.preventDefault();

  //if email or password value is empty, adding shake class to fields
  if (eInput.value == "") {
    eField.classList.add("shake", "error");
  } else {
    checkEmail();
  }

  if (pInput.value == "") {
    pField.classList.add("shake", "error");
  } else {
    checkPass();
  }

  //removing shake class after some interval
  setInterval(() => {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = () => {
    //function to  check email
    checkEmail();
  };

  pInput.onkeyup = () => {
    //function to  check password
    checkPass();
  };

  function checkEmail() {
    //pattern to validate email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    //if entered email do not match with pattern
    if (!eInput.value.match(emailPattern)) {
      //adding error class to field
      eField.classList.add("error");

      let errorTxt = eField.querySelector(".error-txt");
      eInput.value == ""
        ? (errorTxt.innerText = "Email can't be empty")
        : (errorTxt.innerText = "Enter valid email");
    } else {
      //removing error class to field
      eField.classList.remove("error");
    }
  }

  function checkPass() {
    //if password is empty
    if (pInput.value == "") {
      //adding error class to field
      pField.classList.add("error");
    } else {
      //removing error class to field
      pField.classList.remove("error");
    }
  }

  //if eField and pField do not have error class, then submitting the form
  if (
    !eField.classList.contains("error") &&
    !pField.classList.contains("error")
  ) {
    alert("Form Submitted");
    eInput.value = "";
    pInput.value = "";
  }
};
