// External javascript for form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '') {
        alert('Name is required');
        return;
    }

    if (email === '') {
        alert('Email is required');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (phone === '') {
        alert('Phone number is required');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number');
        return;
    }

    if (message === '') {
        alert('Message is required');
        return;
    }
    else{
    alert('Form submitted successfully!');
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^\d{10}$/;
    return re.test(phone);
}

