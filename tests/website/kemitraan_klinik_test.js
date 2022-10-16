Feature('website_kemitraan_klinik');

Scenario('Melihat halaman kemitraan klinik di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to kemitraan klinik
    I.see('Kemitraan Klinik');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.click('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
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
    I.see('KEMITRAAN KLINIK');
    I.see('Membantu Klinik Anda Fokus ke Pasien');
    I.see('Kami membantu klinik menyediakan pelayanan kesehatan terbaik bagi pasien melalui digitalisasi operasional, kerjasama layanan, dan pengembangan usaha.');
    I.seeElement('//*[@id="tentang_kami"]/div[2]/div/div/div/div[2]/a[1]');
    I.seeElement('//*[@id="tentang_kami"]/div[2]/div/div/div/div[2]/a[2]');
    
    //check previlege section
    I.say('Melihat section previlege halaman kemitraan klinik')
    I.scrollTo('//*[@id="main"]/main/section[2]', 5, 5);
    I.wait(2);
    I.see('Jaringan Klinik Digital #1 di Indonesia');
    I.see('Kami memberdayakan klinik melalui digitalisasi operasional, kerjasama layanan, dan penyediaan obat dan alkes untuk meningkatkan layanan kesehatan primer di Indonesia.');
    I.see('Sejak 2019 hingga kini, mitra klinik kami sudah tersebar di seluruh Indonesia, dari Aceh hingga Papua.');
    I.see('150+');
    I.see('Klinik Mitra');
    I.see('60+');
    I.see('Kota di Indonesia');
    I.see('750+');
    I.see('Tenaga Kesehatan');
    I.see('100k+');
    I.see('Pasien');
    I.seeElement('//*[@id="main"]/main/section[2]/div[2]/div/div[1]');
    I.seeElement('//*[@id="main"]/main/section[2]/div[2]/div/div[2]');
    I.seeElement('//*[@id="main"]/main/section[2]/div[2]/div/div[3]');
    I.seeElement('//*[@id="main"]/main/section[2]/div[2]/div/div[4]');
    //slide banner
    I.seeElement('//*[@id="main"]/main/section[2]/div[3]/div[3]/div[1]/div');
    
    //check benefit section
    I.say('Melihat section benefit halaman kemitraan klinik')
    I.scrollTo('//*[@id="manfaat_kemitraan"]', 5, 5);
    I.wait(2);
    I.see('MANFAAT KEMITRAAN');
    I.see('Kami siap mengatasi masalah operasional klinik Anda');
    I.see('Pengelolaan masih konvensional');
    I.see('Mengurus operasional klinik dari pendaftaran hingga pelaporan terasa sangat merepotkan');
    I.seeElement('//*[@id="manfaat_kemitraan"]/div/div[3]');
    I.seeElement('//*[@id="manfaat_kemitraan"]/div/div[3]/div[8]/div/a');
    I.see('Standar pelayanan belum optimal');
    I.see('Pengelolaan operasional berjalan seadanya dan tidak optimal, sehingga belum sesuai standar akreditasi');
    I.seeElement('//*[@id="manfaat_kemitraan"]/div/div[4]');
    I.seeElement('//*[@id="manfaat_kemitraan"]/div/div[4]/div[6]/div/a');
    I.see('Usaha stagnan, tidak berkembang');
    I.see('Kurangnya pemahaman pengembangan bisnis faskes menyebabkan pemasukan klinik cenderung stagnan');
    I.seeElement('//*[@id="manfaat_kemitraan"]/div/div[5]');
    I.seeElement('//*[@id="manfaat_kemitraan"]/div/div[5]/div[7]/div/a');
});


Scenario('Melihat langkah bermitra pada halaman kemitraan klinik di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to kemitraan klinik
    I.see('Kemitraan Klinik');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.click('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.wait('5');
    
    //check steps section
    I.say('Melihat section langkah kemitraan halaman kemitraan klinik')
    I.scrollTo('//*[@id="langkah_kemitraan"]', 5, 5);
    I.wait(2);
    I.see('LANGKAH KEMITRAAN');
    I.see('Kami siap mengatasi masalah operasional klinik Anda');
    //check guide steps
    I.seeElement('//*[@id="langkah_kemitraan"]/div/div[3]');
    I.see('KONSULTASI KLINIK');
    I.see('Konsultasikan kebutuhan klinik Anda');
    I.seeElement('//*[@id="konsultasi_klinik"]');
    //check tombol registrasi
    I.seeElement('//*[@id="konsultasi_klinik"]/div[1]/a');

    I.see('Bersama Anda, kami menentukan tingkat kemitraan terbaik untuk klinik');

    //check level section
    I.say('Melihat section level kemitraan halaman kemitraan klinik')
    //level virtua
    I.seeElement('//*[@id="digitalisasi_operasional"]');
    I.scrollTo('//*[@id="digitalisasi_operasional"]', 5, 5);
    I.wait(2);
    I.see('LEVEL VIRTUA');
    I.see('Digitalisasi operasional');
    I.see('Klinik mendapatkan sistem aplikasi secara GRATIS untuk operasional sehari-hari. Klinik juga mendapat akses ke pendanaan melalui mitra kami.');
    I.see('GRATIS Aplikasi Klinik OS');
    I.see('Fitur aplikasi lengkap & ter-update');
    I.see('Training penggunaan aplikasi');
    I.see('Keamanan data klinik terjamin');
    I.see('Akses ke pendanaan klinik');
    //check gambar
    I.seeElement('//*[@id="digitalisasi_operasional"]/div[2]/img');
    //level prima
    I.seeElement('//*[@id="kerjasama_layanan"]');
    I.scrollTo('//*[@id="kerjasama_layanan"]', 5, 5);
    I.wait(2);
    I.see('LEVEL PRIMA');
    I.see('Kerjasama operasional layanan');
    I.see('Kami membantu mendatangkan pasien dengan menambah berbagai layanan seperti Tes COVID, virtual clinic, vaksinasi, cek laboratorium)');
    I.see('Semua benefit level Virtua');
    I.see('Kerjasama berbagai layanan baru');
    I.see('Peningkatan standar layanan berjalan');
    I.see('Dukungan proses akreditasi klinik');
    I.see('Pengadaan obat dan alkes');
    //check gambar
    I.seeElement('//*[@id="kerjasama_layanan"]/div[2]/img');
    //level paripurna
    I.seeElement('//*[@id="tumbuh_bersama"]');
    I.scrollTo('//*[@id="tumbuh_bersama"]', 5, 5);
    I.wait(2);
    I.see('LEVEL PARIPURNA');
    I.see('Tumbuh bersama');
    I.see('Klinik Pintar melalukan investasi terhadap klinik mulai dari renovasi tampilan klinik, pengadaan lab dan alkes, hingga promosi layanan klinik.');
    I.see('Semua benefit Virtua dan Prima');
    I.see('Peningkatan infrastruktur klinik');
    I.see('Investasi renovasi tampilan klinik');
    I.see('Terhubung ke pasien perusahaan');
    I.see('Marketing dan promosi klinik');
    //check slide gambar
    I.seeElement('//*[@id="tumbuh_bersama"]/div[2]/div/div/div/div/div[2]');
    //check tombol hubungi kami
    I.seeElement('//*[@id="langkah_kemitraan"]/div/div[9]/a');
    I.scrollTo('//*[@id="langkah_kemitraan"]/div/div[9]/a', 5, 5);
    I.wait(2);
    I.see('Hubungi Kami');
    I.seeAttributesOnElements('//*[@id="langkah_kemitraan"]/div/div[9]/a', {href: 'https://staging.web.klinikpintar.id/untuk-klinik/registrasi', class: 'rounded-[4px] flex-none text-white py-4 px-8 bg-primary font-bold text-base leading-6'});
});

Scenario('Melihat transformasi, prinsip, dan testimoni pada halaman kemitraan klinik di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to kemitraan klinik
    I.see('Kemitraan Klinik');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.click('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.wait('5');

    //check transformation section
    I.say('Melihat section transformasi klinik halaman kemitraan klinik');
    I.seeElement('//*[@id="main"]/main/section[7]');
    I.scrollTo('//*[@id="main"]/main/section[7]', 5, 5);
    I.wait(2);
    I.see('TRANSFORMASI KLINIK');
    I.see('Kami siap membantu tampilan klinik menjadi lebih prima');
    //check contoh klinik
    I.seeElement('//*[@id="main"]/main/section[7]/div/div[3]/div[2]/div[1]/a');
    //check slider
    I.seeElement('//*[@id="main"]/main/section[7]/div/div[3]/div[1]');
    //tombol back slider
    I.seeElement('//*[@id="main"]/main/section[7]/div/div[3]/div[2]/div[2]/div[1]');
    //tombol next slider
    I.seeElement('//*[@id="main"]/main/section[7]/div/div[3]/div[2]/div[2]/div[2]');
    I.seeElement('//*[@id="klinikPermataBunda_transformasi_0"]');
    //check item slide kedua
    I.click('//*[@id="main"]/main/section[7]/div/div[3]/div[2]/div[2]/div[2]');
    I.wait(1);
    I.seeElement('//*[@id="klinikPermataBunda_transformasi_1"]');
    //check item slide ketiga
    I.click('//*[@id="main"]/main/section[7]/div/div[3]/div[2]/div[2]/div[2]');
    I.wait(1);
    I.seeElement('//*[@id="klinikPermataBunda_transformasi_2"]');
    //check tombol back slider
    I.click('//*[@id="main"]/main/section[7]/div/div[3]/div[2]/div[2]/div[1]');
    I.wait(1);
    I.click('//*[@id="main"]/main/section[7]/div/div[3]/div[2]/div[2]/div[1]');
    I.wait(1);
    I.seeElement('//*[@id="klinikPermataBunda_transformasi_0"]');

    //check principle section
    I.say('Melihat section prinsip kemitraan halaman kemitraan klinik')
    I.seeElement('//*[@id="app"]/section[1]');
    I.scrollTo('//*[@id="app"]/section[1]', 5, 5);
    I.wait(2);
    I.see('PRINSIP KEMITRAAN');
    I.see('Kemitraan yang adil, transparan,dan optimal');
    I.see('Sistem bagi hasil yang adil');
    I.see('Kami menerapkan sistem bagi hasil dari pendapatan klinik yang dihasilkan oleh kerjasama layanan sesuai level kemitraan.');
    I.seeElement('//*[@id="app"]/section[1]/div/div[3]/div[1]/img');
    I.see('Kerjasama jelas dan transparan');
    I.see('Semua syarat dan ketentuan kemitraan akan dijelaskan sebelum Klinik Pintar dan klinik Anda resmi bermitra.');
    I.seeElement('//*[@id="app"]/section[1]/div/div[3]/div[2]/img');
    I.see('Optimalkan sumber daya klinik');
    I.see('Kami percaya utilisasi sumber daya yang telah dimiliki klinik, mulai dari staf hingga bangunan, selalu bisa ditingkatkan.');
    I.seeElement('//*[@id="app"]/section[1]/div/div[3]/div[3]/img');

    //check testimony section
    I.say('Melihat section testimoni halaman kemitraan klinik')
    I.seeElement('//*[@id="testimoni_kemitraan"]');
    I.scrollTo('//*[@id="testimoni_kemitraan"]', 5, 5);
    I.wait(5);
    I.see('TESTIMONI MITRA');
    I.see('Apa yang klinik rasakan setelah bermitra?');
    //check testimony card
    I.seeElement('//*[@id="testimoni_kemitraan"]/div/div/div[1]/div[3]/div[1]/div/div[3]/div');
    I.see('Lebih dikenal masyarakat');
    I.see('Sistem lebih tertata sesuai alur SOP, desain dan interior klinik lebih baik. Klinik Permata Bunda juga jadi lebih dikenal di masyarakat.');
    I.see('dr. Sumiyati');
    I.see('Dokter');
    I.see('Klinik Permata Bunda');
    //testimony profile photo
    I.seeElement('//*[@id="testimoni_kemitraan"]/div/div/div[1]/div[3]/div[1]/div/div[3]/div/div[2]/img');
    //link klinik
    I.seeElement('//*[@id="testimoni_kemitraan"]/div/div/div[1]/div[3]/div[1]/div/div[3]/div/div[2]/div/a');
    //testimony items
    I.see('↑+10%');
    I.see('Kapitasi BPJS naik');
    I.seeElement('//*[@id="testimoni_kemitraan"]/div/div/div[2]/div[1]/img');
    I.see('Rp100 juta');
    I.see('Pendapatan rata-rata Klinik Paripurna');
    I.seeElement('//*[@id="testimoni_kemitraan"]/div/div/div[2]/div[2]/img');
    I.see('Rp30 juta per bulan');
    I.see('Kontribusi dari layanan Tes COVID');
    I.seeElement('//*[@id="testimoni_kemitraan"]/div/div/div[2]/div[3]/img');
    I.see('★ 9,4/10');
    I.see('Rata-rata rating mitra klinik di Traveloka');
    I.seeElement('//*[@id="testimoni_kemitraan"]/div/div/div[2]/div[4]/img');
    I.see('Pelayanan 5 menit lebih cepat');
    I.see('Karena rekam medis digital');
    I.seeElement('//*[@id="testimoni_kemitraan"]/div/div/div[2]/div[5]/img');
});

Scenario('Melihat faq dan support ecosystem pada halaman kemitraan klinik di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to kemitraan klinik
    I.see('Kemitraan Klinik');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.click('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.wait('5');

    //check faq section
    I.say('Melihat section faq halaman kemitraan klinik')
    I.seeElement('//*[@id="faq"]');
    I.scrollTo('//*[@id="faq"]', 5, 5);
    I.wait(2);
    I.see('Sering Ditanyakan');
    //check faq items
    //card
    I.seeElement('//*[@id="faq"]/div/div[2]/div[1]');
    //question icon
    I.seeElement('//*[@id="faq"]/div/div[2]/div[1]/div[1]/img');
    I.see('Apakah bergabung dengan Klinik Pintar dipungut biaya?');
    //answer icon
    I.seeElement('//*[@id="faq"]/div/div[2]/div[1]/div[2]/img');
    I.see('Bergabung menjadi mitra Klinik Pintar tidak dipungut biaya. Klinik bisa melakukan kerja sama tanpa membayar kepada Klinik Pintar.');
    I.seeElement('//*[@id="faq"]/div/div[2]/div[2]');
    I.seeElement('//*[@id="faq"]/div/div[2]/div[2]/div[1]/img');
    I.see('Apakah klinik yang belum memiliki izin beroperasi boleh mendaftar kemitraan?');
    I.seeElement('//*[@id="faq"]/div/div[2]/div[2]/div[2]/img');
    I.see('Klinik harus sudah memiliki izin operasional dari pemerintah sebelum mendaftar sebagai mitra Klinik Pintar.');
    I.seeElement('//*[@id="faq"]/div/div[2]/div[3]');
    I.seeElement('//*[@id="faq"]/div/div[2]/div[3]/div[1]/img');
    I.see('Apakah kemitraan terbuka untuk klinik di luar Pulau Jawa?');
    I.seeElement('//*[@id="faq"]/div/div[2]/div[3]/div[2]/img');
    I.see('Kemitraan Klinik Pintar terbuka untuk semua klinik di seluruh Indonesia, baik di dalam Pulau Jawa, atau pun di luar Pulau Jawa.');
    I.seeElement('//*[@id="faq"]/div/div[2]/div[4]');
    I.seeElement('//*[@id="faq"]/div/div[2]/div[4]/div[1]/img');
    I.see('Jika klinik belum memiliki dokter spesialis, apakah klinik bisa mendaftar kemitraan?');
    I.seeElement('//*[@id="faq"]/div/div[2]/div[4]/div[2]/img');
    I.see('Boleh. Selama klinik memiliki izin operasional, maka klinik bisa mendaftar sebagai mitra Klinik Pintar.');

    //check ecosystem section
    I.say('Melihat section support ecosystem halaman kemitraan klinik')
    I.seeElement('//*[@id="app"]/section[5]');
    I.scrollTo('//*[@id="app"]/section[5]', 5, 5);
    I.wait(2);
    I.see('EKOSISTEM PENDUKUNG');
    I.see('Nikmati akses ke berbagai layanan dan teknologi pendukung');
    //check ecosystem items
    //item one
    I.seeElement('//*[@id="app"]/section[5]/div/div[3]/div[1]');
    I.see('Aplikasi');
    I.seeAttributesOnElements('//*[@id="app"]/section[5]/div/div[3]/div[1]/p[1]', {class: 'text-[#444444] text-sm md:text-base leading-5 md:leading-6 pb-1 border-b-2 border-b[#F0F0F0] max-w-max'});
    I.see('Memperkenalkan Klinik OS — Aplikasi operasional klinik lengkap, mudah, dan gratis');
    I.seeAttributesOnElements('//*[@id="app"]/section[5]/div/div[3]/div[1]/p[2]', {class: 'text-[#444444] font-bold text-base md:text-lg leading-6 md:leading-[26px] my-4'});
    //button info
    I.seeElement('//*[@id="app"]/section[5]/div/div[3]/div[1]/a');
    I.seeAttributesOnElements('//*[@id="app"]/section[5]/div/div[3]/div[1]/a', {href: 'https://staging.web.klinikpintar.id/aplikasiklinik'});
    //image
    I.seeElement('//*[@id="app"]/section[5]/div/div[3]/div[1]/div/img');
    //item two
    I.seeElement('//*[@id="app"]/section[5]/div/div[3]/div[2]');
    I.see('Farmalkes');
    I.seeAttributesOnElements('//*[@id="app"]/section[5]/div/div[3]/div[2]/p[1]', {class: 'text-[#444444] text-sm md:text-base leading-5 md:leading-6 pb-1 border-b-2 border-b[#F0F0F0] max-w-max'});
    I.see('Pengadaan obat dan alkes klinik kini bisa lebih praktis bersama Farmasi Pintar');
    I.seeAttributesOnElements('//*[@id="app"]/section[5]/div/div[3]/div[2]/p[2]', {class: 'text-[#444444] font-bold text-base md:text-lg leading-6 md:leading-[26px] my-4'});
    //button info
    I.seeElement('//*[@id="app"]/section[5]/div/div[3]/div[2]/a');
    I.seeAttributesOnElements('//*[@id="app"]/section[5]/div/div[3]/div[2]/a', {href: 'https://staging.web.klinikpintar.id/farmalkes'});
    //image
    I.seeElement('//*[@id="app"]/section[5]/div/div[3]/div[2]/div/img');
});

Scenario('Melihat registrasi dan artikel pada halaman kemitraan klinik di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to kemitraan klinik
    I.see('Kemitraan Klinik');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.click('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.wait('5');

    //check registration section
    I.say('Melihat section registration halaman kemitraan klinik')
    I.seeElement('//*[@id="app"]/section[7]');
    I.scrollTo('//*[@id="app"]/section[7]', 5, 5);
    I.wait(2);
    I.see('Ingin bertanya, konsultasi, atau segera bermitra?');
    I.seeAttributesOnElements('//*[@id="app"]/section[7]/div/div/div', {class: 'text-primary leading-8 text-xl md:text-2xl font-bold w-full text-center'});
    I.see('Segera hubungi kami untuk mendapatkan kemitraan terbaik bagi klinik Anda');
    I.seeAttributesOnElements('//*[@id="app"]/section[7]/div/div/p', {class: 'text-[#757575] text-sm md:text-base leading-5 md:leading-6 mt-4 text-center'});
    //tombol contact
    I.seeElement('//*[@id="app"]/section[7]/div/div/a');
    I.seeAttributesOnElements('//*[@id="app"]/section[7]/div/div/a', {href: 'https://staging.web.klinikpintar.id/untuk-klinik/registrasi'});

    //check news section
    I.say("Melihat section news halaman kemitraan klinik");
    I.seeElement('//*[@id="app"]/section[8]');
    I.scrollTo('//*[@id="app"]/section[8]', 5, 5);
    I.wait(2);
    I.see('Seputar Pengelolaan Klinik');
    I.seeAttributesOnElements('//*[@id="app"]/section[8]/div/div[1]/span', {class: 'text-[#444444] text-base md:text-[20px] font-bold leading-6'});
    I.see('Semua Artikel');
    I.seeElement('//*[@id="app"]/section[8]/div/div[1]/a');
    I.seeAttributesOnElements('//*[@id="app"]/section[8]/div/div[1]/a', {href: 'https://staging.web.klinikpintar.id/blog'});
    //Horizontal list/Glider
    I.seeElement('//*[@id="app"]/section[8]/div/div[2]');
    //item1
    I.seeElement('//*[@id="app"]/section[8]/div/div[2]/div[1]');
    //item2
    I.seeElement('//*[@id="app"]/section[8]/div/div[2]/div[2]');
});

Scenario('Melihat footer pada halaman kemitraan klinik di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to kemitraan klinik
    I.see('Kemitraan Klinik');
    I.seeElement('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.click('//*[@id="header"]/div/div[1]/div/div/div/a[2]');
    I.wait('5');

    //check footer section
    I.say('Melihat section footer halaman kemitraan klinik');
    I.seeElement('//*[@id="app"]/footer');
    I.scrollTo('//*[@id="app"]/footer', 5, 5);
    I.wait(2);
    I.see('LAYANAN');
    I.see('Tes COVID');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[1]/a[1]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[1]/a[1]', {href: 'https://staging.web.klinikpintar.id/landing/covid', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Vaksinasi Anak & Dewasa');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[1]/a[2]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[1]/a[2]', {href: 'https://staging.web.klinikpintar.id/landing/vaksin', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Pemeriksaan Lab');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[1]/a[3]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[1]/a[3]', {href: 'https://staging.web.klinikpintar.id/landing/lab', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Direktori');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[1]/a[4]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[1]/a[4]', {href: 'https://staging.web.klinikpintar.id/direktori', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});

    I.see('SOLUSI');
    I.see('Layanan Perusahaan');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[2]/a[1]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[2]/a[1]', {href: 'https://staging.web.klinikpintar.id/layanan-perusahaan', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Layanan Ke Rumah');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[2]/a[2]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[2]/a[2]', {href: 'https://staging.web.klinikpintar.id/home-service', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Kemitraan Klinik');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[2]/a[3]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[2]/a[3]', {href: 'https://staging.web.klinikpintar.id/kemitraan-klinik', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Teknologi di Klinik');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[2]/a[4]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[2]/a[4]', {href: 'https://staging.web.klinikpintar.id/aplikasiklinik', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Pengadaan Farmalkes');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[2]/a[5]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[2]/a[5]', {href: 'https://staging.web.klinikpintar.id/farmalkes', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});

    I.see('TENTANG');
    I.see('Tentang Kami');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[3]/a[1]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[3]/a[1]', {href: 'https://staging.web.klinikpintar.id/tentang', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Karir');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[3]/a[2]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[3]/a[2]', {href: 'https://recruitment.talenta.co/klinikpintar', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Blog');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[3]/a[3]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[3]/a[3]', {href: 'https://staging.web.klinikpintar.id/blog', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Kebijakan Privasi');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[3]/a[4]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[3]/a[4]', {href: 'https://staging.web.klinikpintar.id/kebijakan-privasi', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Syarat dan Ketentuan');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[3]/a[5]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[3]/a[5]', {href: 'https://staging.web.klinikpintar.id/syarat-dan-ketentuan', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});

    I.see('KONTAK');
    I.see('+62 811 841 335');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[4]/address/div[1]/div[2]/a');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[4]/address/div[1]/div[2]/a', {href: 'https://wa.me/62811841335', class: 'text-green hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('hello@klinikpintar.id');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[4]/address/div[2]/div[2]/a');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[4]/address/div[2]/div[2]/a', {href: 'mailto:hello@klinikpintar.id', class: 'text-primary hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Jl. Senayan No. 67 Blok S, Rawa Barat, Kebayoran Baru, Jakarta Selatan');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[4]/address/div[3]/div[2]/a');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[4]/address/div[3]/div[2]/a', {href: 'https://goo.gl/maps/ECzTHprJJia1MSLA7', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('+62 21 27899818');
    I.seeElement('//*[@id="app"]/footer/div[1]/div[4]/address/div[4]/div[2]/div[2]/a');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[4]/address/div[4]/div[2]/div[2]/a', {href: 'tel:+622127899818', class: 'text-primary hover:underline underline-offset-medium underline-thickness-thin'});
    //Instagram
    I.seeElement('//*[@id="app"]/footer/div[1]/div[4]/div/div/a[1]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[4]/div/div/a[1]', {href: 'https://www.instagram.com/klinikpintar/'});
    //Linkedin
    I.seeElement('//*[@id="app"]/footer/div[1]/div[4]/div/div/a[2]');
    I.seeAttributesOnElements('//*[@id="app"]/footer/div[1]/div[4]/div/div/a[2]', {href: 'https://www.linkedin.com/company/klinikpintar/'});
});