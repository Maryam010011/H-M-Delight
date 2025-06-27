/*************** Press Page ****************/
document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll(".line");
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeIn");
                observer.unobserve(entry.target);
            }
        });
    };
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    articles.forEach(article => {
        observer.observe(article);
    });
});


/*************** Reservation Page ****************/
function validateForm(event) {
    event.preventDefault();
    const email = document.getElementById('form_email').value
    const fname = document.querySelector('#first_name').value
    const lname = document.querySelector('#last_name').value
    const ph_number = document.querySelector('#ph_no').value
    const no_people = document.querySelector('#no_people').value
    const Event_date = document.querySelector('#form_eventDate').value
    const Alt_date = document.querySelector('#form_alternateDate').value
    const Event_time = document.querySelector('#form_eventTime').value

    const err_email = document.querySelector('#email_error')
    const err_fname = document.querySelector('#fname_error')
    const err_lname = document.querySelector('#lname_error')
    const err_ph_number = document.querySelector('#ph_error')
    const err_no_people = document.querySelector('#no_ppl_error')
    const err_Event_date = document.querySelector('#date_error')
    const err_Alt_date = document.querySelector('#alt_date_error')
    const err_Event_time = document.querySelector('#time_error')

    err_email.textContent = "";
    err_fname.textContent = "";
    err_lname.textContent = "";
    err_ph_number.textContent = "";
    err_no_people.textContent = "";
    err_Event_date.textContent = "";
    err_Alt_date.textContent = "";
    err_Event_time.textContent = "";

    let isValid = true;

    if (email === '' || !email.includes("@")) {
        err_email.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (fname === '') {
        err_fname.textContent = "First Name is a required field.";
        isValid = false;
    }
    if (ph_number === '' || ph_number.length < 11) {
        err_ph_number.textContent = "Please enter a valid Phone number";
        isValid = false;
    }
    if (no_people === '' || parseInt(no_people) > 15) {
        err_no_people.textContent = "The number of people should not exceed 15 people";
        isValid = false;
    }
    if (Event_date === '') {
        err_Event_date.textContent = "The Event date is a required field";
        isValid = false;
    }
    if (Alt_date === '') {
        err_Alt_date.textContent = "The Alternate date is a required field";
        isValid = false;
    }
    if (Event_time === '') {
        err_Event_time.textContent = "The Event time is a required field";
        isValid = false;
    }
    if (isValid) {
        document.querySelector('form').submit();
        alert("Form Submitted Succesfuly");
        document.querySelector('form').reset();
    }
}

const form = document.querySelector("form");
form.addEventListener('submit', validateForm);