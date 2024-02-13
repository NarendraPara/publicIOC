(function () {
    emailjs.init("yXqtw2rrSP86pkLiZ"); // Replace 'your_user_id' with your actual EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Send the email
    emailjs.sendForm('service_sskxrpq', 'template_1120wll', this)
        .then(function () {
            console.log('SUCCESS!');
            alert('Your message has been sent successfully.');
        }, function (error) {
            console.log('FAILED...', error);
            alert('Failed to send the message, please try again.');
        });
});