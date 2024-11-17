document.addEventListener('DOMContentLoaded', () => {
    const jobs = [
        { title: "Web Developer", description: "Build and maintain websites.", company: "Tech Corp" },
        { title: "Graphic Designer", description: "Create visual content for various media.", company: "Design Studio" },
    ];
    const jobList = document.getElementById('job-list');
    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-item';
        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.description}</p>
            <p><strong>Company:</strong> ${job.company}</p>
        `;
        jobList.appendChild(jobElement);
    });
    document.getElementById('home-btn').addEventListener('click', () => {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('jobs-btn').addEventListener('click', () => {
        document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('profile-btn').addEventListener('click', () => {
        document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('profile-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const bio = document.getElementById('bio').value;
        alert(`Profile Updated:\nName: ${name}\nEmail: ${email}\nBio: ${bio}`);
    });
});
