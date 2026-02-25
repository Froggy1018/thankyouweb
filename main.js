document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const submitBtn = document.getElementById('submit');

    if (!input) return; 

    function checkPassword() {
        const val = input.value ? input.value.trim() : '';
        const valLower = val.toLowerCase();

        if (valLower === 'mr. e' || valLower === 'mr.e') {
            window.location.href = 'mrepart.html';
            return;
        }

        if (valLower === 'mrs. kawada' || valLower === 'nami') {
            window.location.href = 'naminami.html';
            return;
        }

        if (valLower === 'gs19th') {
            window.location.href = 'class.html';
            return;
        }
        window.location.href = 'uhoh.html';
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            checkPassword();
        });
    }

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            checkPassword();
        }
    });
});