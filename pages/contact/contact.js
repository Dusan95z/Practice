// CONTACT FORM VALIDATION STYLING /////////////////////////////////////////////////////////////////////

const contactForm = document.querySelector('.contact-form');
const yourNameInput = document.getElementById('yourName');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const selectInput = document.getElementById('subject');
const formBtn = document.querySelector('.contact-form-btn');

formBtn.addEventListener('click', (e) => {
  if (!yourNameInput.checkValidity()) {
    yourNameInput.style.border = '3px solid red';
  } else {
    yourNameInput.style.border = '3px solid green';
  }
  if (!emailInput.checkValidity()) {
    emailInput.style.border = '3px solid red';
  } else {
    emailInput.style.border = '3px solid green';
  }
  if (!messageInput.checkValidity()) {
    messageInput.style.border = '3px solid red';
  } else {
    messageInput.style.border = '3px solid green';
  }
  if (!subject.checkValidity()) {
    subject.style.border = '3px solid red';
  } else {
    subject.style.border = '3px solid green';
  }
  if (!contactForm.checkValidity()) {
    formBtn.style.backgroundColor = 'red';
  }
  if (contactForm.checkValidity()) {
    formBtn.textContent = 'Please wait...';
    setTimeout(() => {
      formBtn.textContent = 'Send message';
    }, 5000);
  }
});

formBtn.addEventListener('mouseover', (e) => {
  if (!contactForm.checkValidity()) {
    formBtn.style.backgroundColor = 'red';
  } else {
    formBtn.style.backgroundColor = '#55a155';
  }
});

formBtn.addEventListener('mouseout', (e) => {
  formBtn.style.backgroundColor = '#8b2a2a';
});

//   ////////////////////////////////////////////////////////////////////////////////////////