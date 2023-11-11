document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question-wrapper');

    questions.forEach(function (question) {
        const dropdownTrigger = question.querySelector('.dropdown-trigger');
        const dropdownCardContent = question.querySelector('.dropdown-card-content');
        const questionContent = question.querySelector('.question');

        dropdownTrigger.addEventListener('click', function (event) {
            event.stopPropagation();
            questionContent.classList.toggle('clicked');
            dropdownCardContent.style.display = (dropdownCardContent.style.display === 'block') ? 'none' : 'block';
        });
    });

    document.addEventListener('click', function () {
        questions.forEach(function (q) {
            const questionContent = q.querySelector('.question');
            questionContent.classList.remove('clicked');
            const dropdownCardContent = q.querySelector('.dropdown-card-content');
            if (dropdownCardContent) {
                dropdownCardContent.style.display = 'none';
            }
        });
    });
});
