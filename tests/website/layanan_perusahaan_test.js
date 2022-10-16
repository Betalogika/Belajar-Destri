Feature('website_layanan_perusahaan');

Scenario('Melihat halaman layanan perusahaan di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to layanan perusahaan
    I.see('Layanan Perusahaan');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[1]');
    I.click('//*[@id="header"]/div/div[1]/div/div/div/a[1]');
    I.wait('5');

    //check header
    I.see('Klinik Pintar')
    I.seeElement('//*[@id="header"]/div/div[1]/a');
    I.see('Layanan Perusahaan');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[1]');
    I.see('Kemitraan Klinik');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.see('Pengadaan Farmalkes');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[3]');
    //button info layanan
    I.seeElement('//*[@id="btn-options-menu"]');
    //check hero
    I.see('Layanan Perusahaan');
    I.see('Layanan Kesehatan Primer Perusahaan yang Lengkap, Komprehensif dan Tepat Sasaran');
    I.see('Klinik Pintar membangun sistem end-to-end terintegrasi untuk mengoptimalkan operasional pelayanan kesehatan dan memberikan akses kesehatan yang lebih baik kepada seluruh karyawan');
    I.seeElement('//*[@id="hero"]/img');
    I.seeElement('//*[@id="main"]/main/section[1]/div/div[1]/div[2]/a[1]');
    I.seeElement('//*[@id="main"]/main/section[1]/div/div[1]/div[2]/a[2]');

    //check privilege section
    I.say('Melihat section privilege halaman layanan perusahaan');
    I.scrollTo('//*[@id="main"]/main/section[3]', 5, 5);
    I.wait(2);
    I.see('MENGAPA KLINIK PINTAR');
    I.see('Solusi total layanan kesehatan primer perusahaan Anda');
    I.see('Layanan Primer');
    I.see('Konsultasi umum, pemeriksaan fisik, kajian awal kesehatan karyawan, hingga terapi obat')
    I.seeElement('//*[@id="main"]/main/section[3]/div/div[3]/div[1]/img')
    I.see('Health Gatekeeper');
    I.see('Pengendalian biaya perawatan dan penentuan rujukan perawatan lanjutan');
    I.seeElement('//*[@id="main"]/main/section[3]/div/div[3]/div[2]/img');
    I.see('Layanan Penunjang');
    I.see('Konsultasi spesialis, medical check-up, laboratorium, radiologi, hingga kirim obat');
    I.seeElement('//*[@id="main"]/main/section[3]/div/div[3]/div[3]/img');
    I.see('Ekosistem Terintegrasi');
    I.see('Terhubung dengan 120+ jaringan klinik, rumah sakit, lab, apotek, dan mitra asuransi');
    I.seeElement('//*[@id="main"]/main/section[3]/div/div[3]/div[4]/img');
    I.see('Kemudahan Penggunaan');
    I.see('Platform mudah digunakan dan dibangun berdasarkan riset terhadap karyawan');
    I.seeElement('//*[@id="main"]/main/section[3]/div/div[3]/div[5]/img');
    I.see('Laporan Kesehatan Aktual');
    I.see('Monitor utilisasi dan akses ringkasan data secara melalui portal perusahaan');
    I.seeElement('//*[@id="main"]/main/section[3]/div/div[3]/div[6]/img');

    //check benefit section
    I.say('Melihat section benefit halaman layanan perusahaan');
    I.scrollTo('//*[@id="manfaat_layanan"]');
    I.see('KLINIK VIRTUAL PERUSAHAAN ANDA');
    I.see('Akses layanan kesehatan untuk karyawan di manapun, kapanpun');
    I.see('Layanan kesehatan primer lengkap');
    I.see('Kami siap menjadi klinik virtual perusahaan dan menyediakan layanan preventif, promotif, dan kuratif terstandarisasi di jaringan klinik kami didukung teknologi digital');
    I.seeElement('//*[@id="img-accordion-layanan-0"]/img');
    I.seeElement('//*[@id="content-manfaat-perusahaan"]/div[1]/div[2]/button[1]');
    I.see('Rencana perawatan terbaik bagi karyawan');
    I.seeElement('//*[@id="content-manfaat-perusahaan"]/div[1]/div[2]/button[2]');
    I.see('Biaya kesehatan lebih terkendali');
    I.seeElement('//*[@id="content-manfaat-perusahaan"]/div[1]/div[2]/button[3]');

});

Scenario('Melihat pricing dan steps pada halaman layanan perusahaan di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to layanan perusahaan
    I.see('Layanan Perusahaan');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[1]');
    I.click('//*[@id="header"]/div/div[1]/div/div/div/a[1]');
    I.wait('5');

    //check pricing section
    I.say('Melihat section pricing halaman layanan perusahaan');
    I.scrollTo('//*[@id="content-manfaat-perusahaan"]/div[2]/div/div', 5, 5);
    I.wait(2);
    I.see('Mulai Dari');
    I.see('Rp88.000*');
    I.see('per karyawan, per bulan (di luar PPn)');
    I.see('*Harga untuk 100 karyawan');
    I.see('*Harga menyesuaikan jumlah karyawan');
    I.see('SUDAH TERMASUK');
    I.see('Telekonsultasi dokter umum tanpa batas')
    I.seeElement('//*[@id="content-manfaat-perusahaan"]/div[2]/div/div/div/div[2]/div[2]/div[1]/img');
    I.see('Health Gatekeeper perusahaan');
    I.seeElement('//*[@id="content-manfaat-perusahaan"]/div[2]/div/div/div/div[2]/div[2]/div[2]/img');
    I.see('Layanan promotif berkala (health talk, event, dan artikel kesehatan)');
    I.seeElement('//*[@id="content-manfaat-perusahaan"]/div[2]/div/div/div/div[2]/div[2]/div[3]/img');
    I.see('Asesmen resiko kesehatan lingkungan kerja');
    I.seeElement('//*[@id="content-manfaat-perusahaan"]/div[2]/div/div/div/div[2]/div[2]/div[4]/img');
    I.see('Telekonsultasi pasca medical checkup');
    I.seeElement('//*[@id="content-manfaat-perusahaan"]/div[2]/div/div/div/div[2]/div[2]/div[5]/img');
    I.see('Resep obat dan surat rekomendasi (keterangan sakit, surat rujukan lab, rujukan radiologi, dan rujukan spesialis)');
    I.seeElement('//*[@id="content-manfaat-perusahaan"]/div[2]/div/div/div/div[2]/div[2]/div[6]/img');

    //check steps section
    I.say('Melihat section steps halaman layanan perusahaan');
    I.seeElement('//*[@id="content-manfaat-perusahaan"]/div[2]')
    I.scrollTo('//*[@id="content-manfaat-perusahaan"]/div[2]', 5, 5);
    I.wait(2);
    I.see('LAYANAN PENDUKUNG');
    I.see('Berbagai layanan kesehatan menyeluruh untuk karyawan Anda');
    //check filter layanan
    I.seeElement('//*[@id="jenis_layanan"]/div/div[3]/div');
    //check guide steps
    I.seeElement('//*[@id="jenis_layanan"]/div/div[4]');
    //check card Medicine Delivery
    I.seeElement('//*[@id="jenis_layanan"]/div/div[4]/div[1]');
    //tombol contact
    I.see('Perusahaan Anda membutuhkan program lain?');
    I.seeElement('//*[@id="jenis_layanan"]/div/div[5]/a');

});

Scenario('Melihat dashboard, ecosystem, comparasion pada halaman layanan perusahaan di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to layanan perusahaan
    I.see('Layanan Perusahaan');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[1]');
    I.click('//*[@id="header"]/div/div[1]/div/div/div/a[1]');
    I.wait('5');

    //check dashboard section
    I.say('Melihat section dashboard halaman layanan perusahaan');
    I.seeElement('//*[@id="keunggulan_layanan"]');
    I.scrollTo('//*[@id="keunggulan_layanan"]', 5, 5);
    I.wait(2);
    I.see('DASHBOARD PERUSAHAAN');
    I.see('Satu platform untuk memantau dan mengelola data kesehatan karyawan');
    //dashboard tag
    I.seeElement('//*[@id="keunggulan_layanan"]/div[2]');
    //card dashboard Summary Kesehatan
    I.see('Summary Kesehatan');
    I.see('Memberikan gambaran umum kondisi dan aktivitas kesehatan terkini dari semua karyawan');
    I.seeElement('//*[@id="content-dashboard-summary-kesehatan"]/div/div[2]/img');

    //check ecosystem section
    I.say('Melihat section dashboard halaman layanan perusahaan');
    I.seeElement('//*[@id="main"]/main/section[9]');
    I.scrollTo('//*[@id="main"]/main/section[9]', 5, 5);
    I.wait(2);
    I.see('EKOSISTEM TERINTEGRASI');
    I.see('Mengoptimalkan operasional klinik melalui manajemen profesional dan ekosistem pendukung');
    I.seeElement('//*[@id="main"]/main/section[9]/div/div[3]/div/img');
    I.see('180+');
    I.see('Klinik Mitra');
    I.see('60+');
    I.see('Kota di Indonesia');
    I.see('750+');
    I.see('Tenaga Kesehatan');
    I.see('25');
    I.see('Laboratorium Rekanan');
    I.see('8');
    I.see('Rumah Sakit Rekanan');
    //check icon partner
    I.seeElement('//*[@id="main"]/main/section[9]/div/div[5]/div/div[1]/img');
    I.seeElement('//*[@id="main"]/main/section[9]/div/div[5]/div/div[2]/img');
    I.seeElement('//*[@id="main"]/main/section[9]/div/div[5]/div/div[3]/img');
    I.seeElement('//*[@id="main"]/main/section[9]/div/div[5]/div/div[4]/img');
    I.seeElement('//*[@id="main"]/main/section[9]/div/div[5]/div/div[5]/img');
    I.seeElement('//*[@id="main"]/main/section[9]/div/div[5]/div/div[6]/img');
    I.seeElement('//*[@id="main"]/main/section[9]/div/div[5]/div/div[7]/img');

    //check comparasion section
    I.say('Melihat section comparasion halaman layanan perusahaan');
    I.seeElement('//*[@id="mengapa_kami"]');
    I.scrollTo('//*[@id="mengapa_kami"]', 5, 5);
    I.wait(2);
    I.see('KOMPARASI DENGAN PENYEDIA LAYANAN LAIN');
    I.see('Bersama kami, berikan layanan terbaik untuk kesehatan karyawan Anda');
    //comparasion item 1
    I.see('PADA UMUMNYA');
    I.see('Banyak Rekanan: Perusahaan umumnya menggunakan banyak rekanan.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[2]/div[1]/div/img');
    I.see('Bekerja Konvensional: Data kesehatan tidak tercatat dengan baik karena masih menggunakan cara manual.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[3]/div[1]/div/img');
    I.see('Akses Layanan Terbatas: Pilihan layanan dan cara mendapatkan layanan terbatas hanya secara tatap muka.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[4]/div[1]/div/img');
    I.see('Rekam Medis Terpisah: Setiap rekanan memiliki rekam medis nya sendiri dan tidak terhubung satu dan lainnya.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[5]/div[1]/div/img');
    I.see('Minim Insight Bisnis: Data medis tidak diolah dengan baik dan tidak ada tindak lanjut dari data medis yang tersedia.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[6]/div[1]/div/img');
    I.see('Beban Biaya Tinggi: Cenderung fokus pada layanan bersifat kuratif yang memiliki beban biaya lebih besar.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[7]/div[1]/div/img');
    //comparasion item 2
    I.see('BERSAMA KLINIK PINTAR');
    I.see('Satu Manajemen: Cukup melalui Klinik Pintar dapat terhubung dengan berbagai rekanan.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[2]/div[2]/div/img');
    I.see('Berbasis Data: Klinik Pintar mengakomodir pencatatan data kesehatan dengan baik yang mempermudah pengawasan dan pengendalian.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[3]/div[2]/div/img');
    I.see('Opsi Layanan Offline dan Online: Klinik Pintar menyediakan pilihan layanan yang dapat diakses langsung baik offline maupun online.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[4]/div[2]/div/img');
    I.see('Integrasi Data: Data rekam medis yang didapatkan dan diolah oleh Klinik Pintar telah terhubung dan mempermudah pengelolaan kesehatan secara agregat.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[5]/div[2]/div/img');
    I.see('Pemberian Insight Bisnis: Hasil olahan data agregat Klinik Pintar melalui dashboard sebagai acuan kebijakan kesehatan perusahaan yang tepat sasaran.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[6]/div[2]/div/img');
    I.see('Mendukung Efisiensi Biaya: Klinik Pintar turut mendorong terjadinya penekanan biaya melalui layanan yang bersifat preventif dan promotif.');
    I.seeElement('//*[@id="mengapa_kami"]/div/div[3]/div/div[7]/div[2]/div/img');

});

Scenario('Melihat faq, registration, news pada halaman layanan perusahaan di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to layanan perusahaan
    I.see('Layanan Perusahaan');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[1]');
    I.click('//*[@id="header"]/div/div[1]/div/div/div/a[1]');
    I.wait('5');

    //check faq section
    I.say('Melihat section faq halaman layanan perusahaan');
    I.seeElement('//*[@id="faq"]');
    I.scrollTo('//*[@id="faq"]', 5, 5);
    I.wait(2);
    I.see('Pertanyaan Umum');
    I.see('Bagaimana cara mendaftar layanan perusahaan ini?');
    I.seeElement('//*[@id="faq"]/div/div[2]/div/button[1]');
    I.see('Apakah harga layanan bisa disesuaikan?');
    I.seeElement('//*[@id="faq"]/div/div[2]/div/button[2]');
    I.see('Jika saya memesan paket tertentu adakah benefit lain yang bisa saya dapatkan?');
    I.seeElement('//*[@id="faq"]/div/div[2]/div/button[3]');
    I.see('Bisakah saya memesan layanan lain sesuai kebutuhan?');
    I.seeElement('//*[@id="faq"]/div/div[2]/div/button[4]');

    //check registration section
    I.say('Melihat section registration halaman layanan perusahaan');
    I.seeElement('//*[@id="section-form-pendaftaran"]');
    I.scrollTo('//*[@id="section-form-pendaftaran"]', 5, 5);
    I.wait(2);
    I.see('FORMULIR KERJASAMA');
    //form pendaftaran
    I.seeElement('//*[@id="form_formulir_pendaftaran_layanan_perusahaan"]/div/iframe');

    //Check news section
    I.say("Melihat section news halaman layanan perusahaan");
    I.seeElement('//*[@id="main"]/main/section[14]');
    I.scrollTo('//*[@id="main"]/main/section[14]', 5, 5);
    I.wait(2);
    I.see('Info Terbaru');
    I.see('Semua Artikel');
    I.seeElement('//*[@id="main"]/main/section[14]/div/div[1]/a');
    //Horizontal list/Glider
    I.seeElement('//*[@id="main"]/main/section[14]/div/div[2]');
    //item1
    I.seeElement('//*[@id="main"]/main/section[14]/div/div[2]/a');
});

Scenario('Melihat footer pada halaman layanan perusahaan di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to layanan perusahaan
    I.see('Layanan Perusahaan');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[1]');
    I.click('//*[@id="header"]/div/div[1]/div/div/div/a[1]');
    I.wait('5');

    //check footer section
    I.say('Melihat section footer halaman layanan perusahaan');
    I.scrollTo('//*[@id="main"]/footer', 5, 5);
    I.wait(3);
    I.see('LAYANAN');
    I.see('Tes COVID');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[1]');
    I.see('Vaksinasi Anak & Dewasa');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.see('Pemeriksaan Lab');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[3]');
    I.see('Direktori');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[4]');

    I.see('SOLUSI');
    I.see('Layanan Perusahaan');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[1]');
    I.see('Layanan Ke Rumah');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[2]');
    I.see('Kemitraan Klinik');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[3]');
    I.see('Teknologi di Klinik');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
    I.see('Pengadaan Farmalkes');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[5]');

    I.see('TENTANG');
    I.see('Tentang Kami');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[3]/a[1]');
    I.see('Karir');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[3]/a[2]');
    I.see('Blog');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[3]/a[3]');
    I.see('Kebijakan Privasi');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[3]/a[4]');
    I.see('Syarat dan Ketentuan');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[3]/a[5]');

    I.see('KONTAK');
    I.see('+62 811 841 335');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/address/div[1]/div[2]/a');
    I.see('hello@klinikpintar.id');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/address/div[2]/div[2]/a');
    I.see('Jl. Senayan No. 67 Blok S, Rawa Barat, Kebayoran Baru, Jakarta Selatan');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/address/div[3]/div[2]/a');
    I.see('+62 21 27899818');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/address/div[4]/div[2]/div[2]/a');
    //Instagram
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/div/div/a[1]');
    //Linkedin
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/div/div/a[2]');

});


