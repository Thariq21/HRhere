document.addEventListener('DOMContentLoaded', function() {
    const loginHRForm = document.getElementById('loginHRForm');
    const messageDiv = document.getElementById('messageLoginHR');

    if (loginHRForm) {
        loginHRForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('emailHR').value.trim();
            const password = document.getElementById('passwordHR').value;

            messageDiv.textContent = '';
            messageDiv.className = 'message';

            if (email === '' || password === '') {
                displayMessage('Email dan password tidak boleh kosong.', 'error');
                return;
            }

            displayMessage('Mengecek kredensial...', 'info');

            // Simulasi pengecekan
            setTimeout(() => {
                const userKey = 'hr_' + email;
                const userDataString = localStorage.getItem(userKey);

                if (userDataString) {
                    const userData = JSON.parse(userDataString);
                    
                    if (userData.password === password) {
                        displayMessage(`Login berhasil! Mengarahkan ke dashboard...`, 'success');
                        
                        // === INI BAGIAN PENTING UNTUK MENGHUBUNGKAN HALAMAN ===
                        // Simpan sesi login HR (opsional, tapi praktik yang baik)
                        sessionStorage.setItem('loggedInHREmail', email);
                        sessionStorage.setItem('loggedInHRName', userData.fullName);

                        // Arahkan ke dashboard HR setelah 1.5 detik
                        setTimeout(() => {
                            window.location.href = 'dashboard_hr.html'; 
                        }, 1500);

                    } else {
                        displayMessage('Password HR yang Anda masukkan salah.', 'error');
                    }
                } else {
                    displayMessage('Tidak ada akun HR yang terdaftar dengan email ini.', 'error');
                }
            }, 1000);
        });
    }

    function displayMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.classList.add(type);
    }
});