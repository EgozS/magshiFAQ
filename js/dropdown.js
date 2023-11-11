document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(function (question) {
        const dropdownTrigger = question.querySelector('.dropdown-trigger');
        const dropdownCardContent = document.querySelector('.dropdown-card-content');

        dropdownTrigger.addEventListener('click', function (event) {
            event.stopPropagation();
            question.classList.toggle('clicked');
            dropdownCardContent.style.display = (dropdownCardContent.style.display === 'block') ? 'none' : 'block';
        });
    });

    document.addEventListener('click', function () {
        questions.forEach(function (q) {
            q.classList.remove('clicked');
            const dropdownCardContent = document.querySelector('.dropdown-card-content');
            if (dropdownCardContent) {
                dropdownCardContent.style.display = 'none';
            }
        });
    });
});
