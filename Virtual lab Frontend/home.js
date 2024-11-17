function launchLab() {
    const labOutput = document.getElementById("lab-output");
    labOutput.innerHTML = "<p>Virtual Lab is launching... (simulation of interactive content)</p>";
    labOutput.classList.add("zoom-in");
}
function exploreFreelance() {
    const freelanceOutput = document.getElementById("freelance-output");
    freelanceOutput.innerHTML = "<p>Exploring Freelance Projects... (simulation of available projects)</p>";
    freelanceOutput.classList.add("zoom-in");
}
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}. Your message has been sent!`);
});
