document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inquiryForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      // Form is valid, submit it
      this.submit();
    }
  });

  function validateForm(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    let isValid = true;

    if (name === "") {
      showError("name", "Please enter your name");
      isValid = false;
    } else {
      hideError("name");
    }

    if (email === "") {
      showError("email", "Please enter your email");
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError("email", "Please enter a valid email address");
      isValid = false;
    } else {
      hideError("email");
    }

    if (subject === "") {
      showError("subject", "Please enter a subject");
      isValid = false;
    } else {
      hideError("subject");
    }

    if (message === "") {
      showError("message", "Please enter your message");
      isValid = false;
    } else {
      hideError("message");
    }
    alert(`${name}, Your message has been received.`);
    e.preventDefault();
    return isValid;
  }

  function showError(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorElement = field.nextElementSibling;
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
  }

  function hideError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = field.nextElementSibling;
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }

  function isValidEmail(email) {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});

function openModal(imgSrc) {
  document.getElementById("modalImg").src = imgSrc;
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function navMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function displayProjectDetails(name){
  alert(`These are more details about ${name}.`);
  // e.preventDefault();
}