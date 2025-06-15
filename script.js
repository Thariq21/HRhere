document.addEventListener('DOMContentLoaded', function() {

    // Smooth scroll untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Periksa apakah link adalah bagian dari role-actions, jika ya, jangan smooth scroll
            if (this.closest('.role-actions')) {
                return; // Biarkan perilaku default untuk link login/signup
            }
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) { // Pastikan bukan hanya "#"
                try {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                } catch (error) {
                    console.warn('Elemen untuk smooth scroll tidak ditemukan:', targetId, error);
                }
            }
        });
    });

    // Set tahun sekarang di footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Handle Contact Form Submission (Simulasi)
    const contactForm = document.getElementById('contactForm');
    const contactMessageDiv = document.getElementById('contactMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            contactMessageDiv.textContent = ''; // Clear previous message
            contactMessageDiv.style.color = '';

            const name = this.name.value.trim();
            const email = this.email.value.trim();
            const message = this.message.value.trim();

            if (!name || !email || !message) {
                contactMessageDiv.textContent = 'Semua kolom harus diisi.';
                contactMessageDiv.style.color = 'red';
                return;
            }

            // Simulasi pengiriman
            contactMessageDiv.textContent = 'Mengirim pesan Anda...';
            contactMessageDiv.style.color = 'var(--primary-color)';

            setTimeout(() => {
                contactMessageDiv.textContent = 'Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda.';
                contactMessageDiv.style.color = 'var(--secondary-color)';
                contactForm.reset();
            }, 1500);

            // Di aplikasi nyata, Anda akan mengirim data ke server di sini
            // Contoh:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ name, email, message })
            // })
            // .then(response => response.json())
            // .then(data => { /* handle response */ })
            // .catch(error => { /* handle error */ });
        });
    }

    // Navigasi aktif berdasarkan section yang terlihat (opsional, bisa lebih kompleks)
    const sections = document.querySelectorAll('main section');
    const navLi = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', ()=> {
        let current = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach( a => {
            a.classList.remove('active');
            if(a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });


    console.log("Landing page script loaded.");
    // Placeholder untuk ikon jika menggunakan font ikon atau SVG sprite
    // Ganti 'placeholder_hr_icon.png', 'placeholder_applicant_icon.png', dll dengan path gambar Anda
});