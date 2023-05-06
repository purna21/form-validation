const form = document.querySelector('form');
const buttonEl = document.querySelector('button');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('.message');


let isValid = false;

function validateForm() {
    isValid = form.checkValidity();    // Check Validity is a Form Validity Constraint
    if (isValid) {
        if (passwordEl.value == confirmPasswordEl.value) {
            messageContainer.style.borderColor = 'green';
            message.style.color = 'green';
            message.textContent = 'Form Submitted Successfully!';

            const formData = new FormData(form);


            for (let [key, value] of formData.entries()) {
                formData[key] = value;
            }


            form.reset();
        } else {
            messageContainer.style.borderColor = 'red';
            message.style.color = 'red';
            message.textContent = 'Make Sure Passwords Match!';
            confirmPasswordEl.style.borderColor = 'red';
            confirmPasswordEl.value = '';
        }
    } else {
        messageContainer.style.borderColor = 'red';
        message.style.color = 'red';
        message.textContent = 'Make Sure You Enter Correct Details!';
    }

}



function processFormData(e) {
    e.preventDefault();
    validateForm();
}


form.addEventListener('submit', processFormData);

