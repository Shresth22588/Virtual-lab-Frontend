document.addEventListener('DOMContentLoaded', () => {
    const gradeButtons = document.querySelectorAll('.grade-btn');
    const gradeContent = document.getElementById('grade-content');
    gradeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const grade = button.dataset.grade;
            displayGradeContent(grade);
        });
    });
    function displayGradeContent(grade) {
        gradeContent.innerHTML = `<h3>Content for Grade ${grade}</h3>
                                  <p>Interactive experiments and learning materials for Grade ${grade}.</p>`;
    }
    document.getElementById('home-btn').addEventListener('click', () => {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('grades-btn').addEventListener('click', () => {
        document.getElementById('grades').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('about-btn').addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
});
