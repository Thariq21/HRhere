document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginPelamarForm');
    const messageDiv = document.getElementById('messagePelamar');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('emailPelamar').value.trim();
            const password = document.getElementById('passwordPelamar').value;

            messageDiv.textContent = '';
            messageDiv.className = 'message';

            if (email === '' || password === '') {
                displayMessage('Email dan password tidak boleh kosong.', 'error');
                return;
            }

            // === LOGIKA DIPERBARUI ===
            const savedPassword = localStorage.getItem(email);

            // Cek jika email ada dan password cocok
            if (savedPassword && savedPassword === password) {
                // 1. Tampilkan pesan sukses
                displayMessage('Login berhasil! Mengarahkan ke dashboard...', 'success');

                // 2. Simpan sesi login ke sessionStorage
                sessionStorage.setItem('loggedInUserEmail', email);

                // 3. Arahkan ke halaman dashboard setelah jeda singkat
                setTimeout(() => {
                    window.location.href = 'dashboard_pelamar.html';
                }, 1500); // Beri waktu 1.5 detik agar pesan terbaca

            } else {
                // Jika email tidak ditemukan atau password salah
                displayMessage('Email atau password salah.', 'error');
            }
        });
    }

    function displayMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.classList.add(type);
    }
});