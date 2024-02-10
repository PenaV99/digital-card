const card = document.querySelector(".card");
const body = document.querySelector("body");
const cardFront = card.innerHTML;
const bodyFront = body.innerHTML;
const header = document.querySelector(".header");
const introduceSelf = header.textContent;

card.addEventListener("click", () => {
    header.textContent = "My Pleasure";
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
    body.className = "body-back"
});
card.addEventListener("mouseleave", () => {
    header.textContent = introduceSelf;
    card.innerHTML = cardFront;
    card.className = "card";
    body.className = "";
});