document.addEventListener('DOMContentLoaded', function() {
    const signupHRForm = document.getElementById('signupHRForm');
    const messageDiv = document.getElementById('messageSignupHR');

    if (signupHRForm) {
        signupHRForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const fullName = document.getElementById('fullNameHR').value.trim();
            const companyName = document.getElementById('companyName').value.trim();
            const email = document.getElementById('emailHR').value.trim();
            const password = document.getElementById('passwordHR').value;
            const confirmPassword = document.getElementById('confirmPasswordHR').value;

            // Reset pesan
            messageDiv.textContent = '';
            messageDiv.className = 'message';

            // Validasi
            if (!fullName || !companyName || !email || !password || !confirmPassword) {
                displayMessage('Semua kolom wajib diisi.', 'error');
                return;
            }
            if (password.length < 6) {
                displayMessage('Password minimal harus 6 karakter.', 'error');
                return;
            }
            if (password !== confirmPassword) {
                displayMessage('Password dan konfirmasi password tidak cocok.', 'error');
                return;
            }

            // Cek jika email sudah terdaftar di localStorage
            // (Untuk membedakan dengan pelamar, kita bisa tambahkan prefix)
            const userKey = 'hr_' + email; // Contoh: hr_user@company.com
            if (localStorage.getItem(userKey)) {
                displayMessage('Email ini sudah terdaftar untuk akun HR.', 'error');
                return;
            }
            
            // Simpan data pengguna HR baru ke localStorage.
            // PERINGATAN: Ini tidak aman untuk produksi!
            const userData = {
                password: password,
                fullName: fullName,
                companyName: companyName
            };
            localStorage.setItem(userKey, JSON.stringify(userData)); // Simpan sebagai objek JSON string

            console.log(`Akun HR baru disimpan: Key: ${userKey}, Data:`, userData);

            // Tampilkan pesan sukses dan arahkan ke halaman login
            displayMessage('Pendaftaran akun HR berhasil! Anda akan diarahkan ke halaman login.', 'success');
            signupHRForm.reset();
            
            setTimeout(() => {
                window.location.href = 'login_hr.html';
            }, 2500); // Tunggu 2.5 detik
        });
    }

    function displayMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.classList.add(type);
    }
});