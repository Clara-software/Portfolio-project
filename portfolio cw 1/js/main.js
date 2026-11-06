//menu
const menu = document.querySelector('.navbar__Links');
const menuButton = document.querySelector('.navbar__icons');
const overlay = document.querySelector('#overlay');

if (menuButton && menu && overlay) {
  menuButton.addEventListener('click', ()=> {
   menu.classList.toggle('navbar__open');
   menuButton.classList.toggle('open');
   overlay.classList.toggle("show");
  });


  overlay.addEventListener("click", () => {
   menu.classList.toggle("navbar__open");
   menuButton.classList.toggle("open");
   overlay.classList.toggle("show");
  });

} 
// FORM VALIDATION =

// matching email 

function checkEmails() {
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm-email');
 
    
    if (email.value !== confirmEmail.value) {
        alert(" ERROR: Email and Confirm Email do not match!");
        return false;
    }
    return true;
}


// check date
function checkDates() {
    const dateInput = document.getElementById ('date')

    if (!dateInput|| !dateInput.value ){
        alert(" Please select a project date!");
        return false;

    }

// check tomorrow date

    const selectedDate = new Date(dateInput.value);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); 
    tomorrow.setHours(0, 0, 0, 0);

    if (selectedDate < tomorrow) {
        alert("Date must be at least 25 hours in the future!");
        return false;
    }
    
    return true;

}
//const currentDate = new Date();
//console.log(currentDate.toString());


// validateForm 
function validateForm(event) {
    event.preventDefault();

    if (!checkEmails()){
        return false;
    }

    if (!checkDates()){
        return false;
    }

    showPopup();
    return false;
}

//  show Popup with form infor and my Aston email
function showPopup(){
    const popup = document.getElementById('simple-popup');

    // colected data from form 

    const formdata={
        firstName: document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value ||"not provided" ,
        date:document.getElementById('date').value,
        description:document.getElementById('description').value 

    };

    popup.innerHTML = `
    <h3>Form Submitted</h3>
    <p><strong>My email:</strong> 250204346@aston.ac.uk</p><br>
    <p><strong> Name:</strong>${formdata.firstName}</p><br>
    <p><strong>Email:</strong>${formdata.email}</p><br>
    <p><strong>Date:</strong>${formdata.date}</p><br>
    <p><strong>Description:</strong>${formdata.description}</p>
    <p>Thank you for contacting me!</p>
    <button class="close" onclick="closePopup()">Close</button>
  `;

   

    // how the popup showed
    popup.style.display = 'flex';

}

// close popup 

function closePopup() {
    const popup = document.getElementById('simple-popup');
    if (popup) {
        popup.style.display = 'none';
    }

    const form = document.getElementById('contact-form');
    if (form) {
        form.reset();
    }
}


document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
        console.log("✅ Contact form ready!");
    }

    const currentDate = new Date();
    console.log("Page loaded at: " + currentDate.toString());
});

// Thanks you 