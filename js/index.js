const card = document.querySelector(".card");
const body = document.querySelector("body");
const cardFront = card.innerHTML;
const bodyFront = body.innerHTML;
const header = document.querySelector(".header");
const introduceSelf = header.textContent;
const servicesSection = document.querySelector(".services-section");

card.addEventListener("click", () => {
    header.textContent = "Have a great rest of your day!";
    card.innerHTML =  "<div class='social-buttons'>\
        <a href = ''><img src= 'images/contact/png/phone.png'></a>\
        <a href = 'mailto:vhpc24@pm.me'><img src= 'images/contact/png/email.png' /></a>\
        <a href = 'https://victorp.netlify.app/'><img src= 'images/contact/png/website.png' /></a>\
    </div>\
    <div class='social-buttons'>\
        <a href='https://github.com/PenaV99'  target= '_blank'>\
        <img src= 'images/github-mark/github-mark.png'></a>\
        <a href='https://www.linkedin.com/in/victor-pena-b22077147' target= '_blank'>\
        <img src= 'images/LinkedIn-Logos/LI-In-Bug.png'></a>\
        <a href='https://teamtreehouse.com/profiles/victorpena2' target= '_blank'>\
        <img src='images/treehouse.png'/></a>\
    </div>";
    card.className = "back";
    body.className = "body-back";
    servicesSection.className = "services-back";
});
card.addEventListener("mouseleave", () => {
    header.textContent = introduceSelf;
    card.innerHTML = cardFront;
    card.className = "card";
    body.className = "";
    servicesSection.className = "services-section";
});

//typing effect 
const encourageElement = document.getElementById("encouraging-text");
const encouragement = [ "get started on the web", "handle SEO", "get more clicks", "be creative"]; // The text
const typingSpeed = 65; // Corrected variable name

let currentTextIndex = 0; // Initialize the index

function typeNextEncouragementText() {
    const currentEncouragementText = encouragement[currentTextIndex];
    let charIndex = 0;

    function typeCharacter() {
        if (charIndex < currentEncouragementText.length) {
            encourageElement.textContent += currentEncouragementText.charAt(charIndex);
            charIndex++;
            setTimeout(typeCharacter, typingSpeed);
        } else {
            // Move to the next quote
            currentTextIndex = (currentTextIndex + 1) % encouragement.length;
            setTimeout(clearText, 1500); // Corrected function name
        }
    }

    typeCharacter();
}

function clearText() {
    encourageElement.innerHTML = "";
    setTimeout(typeNextEncouragementText, 0); // Delay before typing the next quote
}

// Start the quote rotation
typeNextEncouragementText();