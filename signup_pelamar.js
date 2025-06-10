document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupPelamarForm');
    const messageDiv = document.getElementById('messageSignupPelamar');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const fullName = document.getElementById('fullNamePelamar').value.trim();
            const email = document.getElementById('emailPelamar').value.trim();
            const password = document.getElementById('passwordPelamar').value;
            const confirmPassword = document.getElementById('confirmPasswordPelamar').value;

            messageDiv.textContent = '';
            messageDiv.className = 'message';

            if (!fullName || !email || !password || !confirmPassword) {
                displayMessage('Semua kolom wajib diisi.', 'error');
                return;
            }
            if (password !== confirmPassword) {
                displayMessage('Password dan konfirmasi password tidak cocok.', 'error');
                return;
            }

            // === LOGIKA BARU UNTUK MENYIMPAN DATA ===
            // Cek jika email sudah terdaftar di localStorage
            if (localStorage.getItem(email)) {
                displayMessage('Email ini sudah terdaftar. Silakan gunakan email lain.', 'error');
                return;
            }
            
            // Simpan data pengguna baru ke localStorage.
            // Kunci: email, Nilai: password.
            // PERINGATAN: Ini tidak aman untuk produksi!
            localStorage.setItem(email, password);
            console.log(`Pengguna baru disimpan: { Email: ${email}, Password: ${password} }`);

            // Simulasi proses pendaftaran berhasil
            displayMessage('Pendaftaran berhasil! Anda akan diarahkan ke halaman login.', 'success');
            signupForm.reset();

            // Arahkan ke halaman login setelah 2 detik
            setTimeout(() => {
                window.location.href = 'login_pelamar.html';
            }, 2000);
        });
    }

    function displayMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.classList.add(type);
    }
});