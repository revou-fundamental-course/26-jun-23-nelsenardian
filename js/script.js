function validateForm() {
  let name = document.forms["message-form"]["name"].value;
  let email = document.forms["message-form"]["email"].value;
  let phone = document.forms["message-form"]["phone"].value;
  let message = document.forms["message-form"]["message"].value;

  if (name == "") {
    alert('Please enter your name');
    return false;
  }
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }
  if (phone == "") {
    alert.log('Please enter your phone number');
    return false;
  }
  if (message == "") {
    alert('Please enter your message');
    return false;
  }

  alert('Form submitted successfully');
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
  return true;
}


let slideIndex = 0;
const slides = document.getElementsByClassName("banner-slide");
showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 2000);
}