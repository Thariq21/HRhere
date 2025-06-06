document.addEventListener('DOMContentLoaded', function() {
    // Pastikan ada sesi login sebelum mengizinkan upload
    const loggedInUserEmail = sessionStorage.getItem('loggedInUserEmail');
    if (!loggedInUserEmail) {
        alert("Anda harus login terlebih dahulu untuk melamar pekerjaan.");
        window.location.href = 'login_pelamar.html';
        return;
    }

    const applicantForm = document.getElementById('applicantForm');
    const applyMessage = document.getElementById('applyMessage');

    applicantForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const jobTitle = document.getElementById('jobTitle').value;
        const cvFile = document.getElementById('cv').files[0];

        if (!jobTitle || !cvFile) {
            displayMessage('Harap pilih jabatan dan unggah CV Anda.', 'error');
            return;
        }

        // Cek jika CV adalah PDF
        if (cvFile.type !== "application/pdf") {
            displayMessage('Format CV harus PDF.', 'error');
            return;
        }

        displayMessage('Memproses lamaran...', 'info');

        // Simulasi proses backend dan penilaian AI
        setTimeout(() => {
            const aiScore = Math.floor(Math.random() * (98 - 40 + 1)) + 40;
            let status = '', statusClass = '', statusCode = '';

            if (aiScore >= 80) {
                status = 'Selamat! Anda Diundang Wawancara';
                statusClass = 'status-high';
                statusCode = 'high';
            } else {
                status = 'Langkah Selanjutnya: Psikotes Online';
                statusClass = 'status-low';
                statusCode = 'low';
            }

            const newApplication = {
                jobTitle: jobTitle,
                date: new Date().toISOString(),
                status: status,
                statusClass: statusClass,
                statusCode: statusCode
            };

            // Ambil data lama, tambahkan data baru, simpan kembali
            const applications = JSON.parse(localStorage.getItem(loggedInUserEmail)) || [];
            applications.push(newApplication);
            localStorage.setItem(loggedInUserEmail, JSON.stringify(applications));

            // Arahkan kembali ke dashboard untuk melihat status terbaru
            window.location.href = 'dashboard_pelamar.html';
        }, 2000); // Jeda 2 detik untuk simulasi
    });

    function displayMessage(message, type) {
        applyMessage.textContent = message;
        applyMessage.className = 'message ' + type;
    }
});