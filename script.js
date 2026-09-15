document.getElementById("enquiryForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const type = document.getElementById("type").value;
    const bike = document.getElementById("bike").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        "Hello New City Auto Consulting,%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Enquiry Type: " + encodeURIComponent(type) + "%0A" +
        "Bike Model: " + encodeURIComponent(bike) + "%0A" +
        "Message: " + encodeURIComponent(message);

    const whatsappURL =
        "https://wa.me/919786937644?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");

});