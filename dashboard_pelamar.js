document.addEventListener('DOMContentLoaded', function() {
    const loggedInUserEmail = sessionStorage.getItem('loggedInUserEmail');
    if (!loggedInUserEmail) {
        alert('Sesi Anda telah berakhir. Silakan login kembali.');
        window.location.href = 'login_pelamar.html';
        return;
    }

    const welcomeMessage = document.getElementById('welcomeMessage');
    const applicationStatusBody = document.getElementById('applicationStatusBody');
    const logoutButton = document.getElementById('logoutButton');

    welcomeMessage.textContent = `Selamat Datang, ${loggedInUserEmail}!`;

    function renderApplicationHistory() {
        const applications = JSON.parse(localStorage.getItem(loggedInUserEmail)) || [];
        applicationStatusBody.innerHTML = '';

        if (applications.length === 0) {
            applicationStatusBody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Anda belum mengirim lamaran apapun.</td></tr>';
            return;
        }

        applications.forEach(app => {
            let actionButton = '';
            if (app.statusCode === 'low') {
                actionButton = `<button class="btn-action" onclick="startPsychoTest('${app.jobTitle}')">Mulai Psikotes</button>`;
            } else if (app.statusCode === 'high') {
                actionButton = '<span>Menunggu Jadwal</span>';
            }

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${app.jobTitle}</td>
                <td>${new Date(app.date).toLocaleDateString('id-ID')}</td>
                <td><span class="status ${app.statusClass}">${app.status}</span></td>
                <td>${actionButton}</td>
            `;document.addEventListener('DOMContentLoaded', function() {
                try {
                    // === LOGIKA DIPERBARUI: Cek sesi login di awal ===
                    const loggedInUserEmail = sessionStorage.getItem('loggedInUserEmail');
                    
                    // Jika tidak ada data login, langsung hentikan dan arahkan kembali
                    if (!loggedInUserEmail) {
                        // Kita tidak perlu alert di sini karena bisa mengganggu jika pengguna sengaja membuka halaman ini
                        console.error("Akses ditolak: Tidak ada sesi login.");
                        window.location.href = 'login_pelamar.html';
                        return; // Hentikan eksekusi skrip
                    }
            
                    // Jika ada sesi, baru lanjutkan ke logika dasbor
                    console.log(`Pengguna login sebagai: ${loggedInUserEmail}`);
            
                    // Ambil elemen-elemen dari DOM
                    const welcomeMessage = document.getElementById('welcomeMessage');
                    const applicationStatusBody = document.getElementById('applicationStatusBody');
                    const logoutButton = document.getElementById('logoutButton');
            
                    // Tampilkan pesan selamat datang
                    welcomeMessage.textContent = `Selamat Datang, ${loggedInUserEmail}!`;
            
                    // Fungsi untuk menampilkan riwayat lamaran dari localStorage
                    function renderApplicationHistory() {
                        const applications = JSON.parse(localStorage.getItem(loggedInUserEmail)) || [];
                        applicationStatusBody.innerHTML = '';
            
                        if (applications.length === 0) {
                            applicationStatusBody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Anda belum mengirim lamaran apapun.</td></tr>';
                            return;
                        }
            
                        applications.forEach(app => {
                            let actionButton = '';
                            if (app.statusCode === 'low') {
                                actionButton = `<button class="btn-action" onclick="startPsychoTest('${app.jobTitle}')">Mulai Psikotes</button>`;
                            } else if (app.statusCode === 'high') {
                                actionButton = '<span>Menunggu Jadwal</span>';
                            }
            
                            const row = document.createElement('tr');
                            row.innerHTML = `
                                <td>${app.jobTitle}</td>
                                <td>${new Date(app.date).toLocaleDateString('id-ID')}</td>
                                <td><span class="status ${app.statusClass}">${app.status}</span></td>
                                <td>${actionButton}</td>
                            `;
                            applicationStatusBody.appendChild(row);
                        });
                    }
            
                    // Tampilkan riwayat saat halaman pertama kali dimuat
                    renderApplicationHistory();
            
                    // Event listener untuk tombol logout
                    logoutButton.addEventListener('click', function() {
                        sessionStorage.removeItem('loggedInUserEmail'); // Hapus sesi login
                        window.location.href = 'login_pelamar.html';
                    });
            
                } catch (error) {
                    console.error("Terjadi error di dashboard:", error);
                }
            });
            
            // Fungsi global dummy untuk tombol psikotes
            function startPsychoTest(jobTitle) {
                alert(`Memulai psikotes digital untuk posisi ${jobTitle}... (Ini adalah simulasi)`);
            }
            applicationStatusBody.appendChild(row);
        });
    }

    renderApplicationHistory();

    logoutButton.addEventListener('click', function() {
        sessionStorage.removeItem('loggedInUserEmail');
        window.location.href = 'login_pelamar.html';
    });
});

function startPsychoTest(jobTitle) {
    alert(`Memulai psikotes digital untuk posisi ${jobTitle}... (Ini adalah simulasi)`);
}