document.addEventListener('DOMContentLoaded', function () {
    // --- Ambil data HR yang login dari sessionStorage ---
    const loggedInHREmail = sessionStorage.getItem('loggedInHREmail');
    const loggedInHRName = sessionStorage.getItem('loggedInHRName');

    // Jika tidak ada sesi login, kembalikan ke halaman login
    if (!loggedInHREmail) {
        alert('Sesi Anda telah berakhir. Silakan login kembali.');
        window.location.href = 'login_hr.html';
        return;
    }

    // Tampilkan nama dan email HR di header
    document.getElementById('hrName').textContent = loggedInHRName || 'Admin HR';
    document.getElementById('hrEmail').textContent = loggedInHREmail;

    // --- Data Pelamar Palsu (Dummy Data) ---
    const dummyApplicants = [
        // ... (data pelamar palsu seperti sebelumnya)
        { name: 'Budi Hartono', job: 'Software Engineer', date: '2025-06-01' },
        { name: 'Citra Lestari', job: 'UI/UX Designer', date: '2025-06-02' },
        { name: 'Agus Wijaya', job: 'Software Engineer', date: '2025-06-02' },
    ];

    const applicantTableBody = document.getElementById('applicantTableBody');

    function processApplicants(applicants) {
        // ... (fungsi processApplicants seperti sebelumnya)
        return applicants.map(applicant => {
            const aiScore = Math.floor(Math.random() * (98 - 40 + 1)) + 40;
            let status = '', statusClass = '';
            if (aiScore >= 85) { status = 'Skor Tinggi (Jadwal Interview Otomatis)'; statusClass = 'status-high'; }
            else if (aiScore >= 60) { status = 'Skor Cukup (Menunggu Psikotes)'; statusClass = 'status-pending'; }
            else { status = 'Skor Rendah (Disarankan Ditolak)'; statusClass = 'status-low'; }
            return { ...applicant, aiScore, status, statusClass };
        });
    }

    function renderTable(applicants) {
        // ... (fungsi renderTable seperti sebelumnya)
        applicantTableBody.innerHTML = '';
        if (applicants.length === 0) {
            applicantTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">Tidak ada data.</td></tr>`;
            return;
        }
        applicants.forEach(applicant => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${applicant.name}</td><td>${applicant.job}</td><td>${applicant.date}</td><td><strong>${applicant.aiScore}</strong></td><td><span class="status ${applicant.statusClass}">${applicant.status}</span></td><td><button class="action-btn btn-view">Lihat CV</button></td>`;
            applicantTableBody.appendChild(row);
        });
    }

    const processedData = processApplicants(dummyApplicants);
    renderTable(processedData);

    const filterJobSelect = document.getElementById('filterJob');
    filterJobSelect.addEventListener('change', function() {
        const selectedJob = this.value;
        if (selectedJob === 'semua') { renderTable(processedData); }
        else { renderTable(processedData.filter(app => app.job === selectedJob)); }
    });

    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            sessionStorage.removeItem('loggedInHREmail');
            sessionStorage.removeItem('loggedInHRName');
            alert('Anda telah logout.');
            window.location.href = 'login_hr.html';
        });
    }
});