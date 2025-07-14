
    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const answer = this.parentElement.querySelector('.faq-answer');
            const icon = this.querySelector('.faq-icon');
            const isOpen = answer.style.display === 'block';
            // Hide all
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            document.querySelectorAll('.faq-icon').forEach(i => i.textContent = '+');
            // Toggle this one
            if (!isOpen) {
                answer.style.display = 'block';
                icon.textContent = '×';
            }
        });
    });
