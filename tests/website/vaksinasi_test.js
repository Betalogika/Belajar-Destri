Feature('website_vaksinasi');

Scenario('Melihat halaman vaksinasi di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to vaksinasi
    I.see('Vaksinasi Anak & Dewasa');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.click('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.wait('5');
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');

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
    I.see('Layanan Vaksinasi Anak dan Dewasa');
    I.see('Ketahanan tubuh terhadap penyakit semakin penting, terutama di masa pandemi. Jangan tunda lagi, segera jadwalkan vaksinasi Anda bersama kami. Melayani area DKI Jakarta, Bekasi, Depok, dan Tangerang.');
    //button all vaksinasi
    I.seeElement('//*[@id="hero"]/div/section/div/div[1]/div/a');
    I.seeAttributesOnElements('//*[@id="hero"]/div/section/div/div[1]/div/a', {href: 'https://staging.web.klinikpintar.id/landing/vaksin#virtual-clinic', class: 'py-4 px-8 rounded border font-bold text-white bg-primary border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 '});
    
    //check type section
    I.say('Melihat section type halaman vaksinasi');
    I.scrollTo('//*[@id="langkah"]', 5, 5);
    I.wait(2);
    I.see('Dapatkan Vaksinasi Sesuai Keperluan');
    I.seeAttributesOnElements('//*[@id="langkah"]/div/h2', {class: 'font-bold text-xl text-black text-center mb-10'});
    //card item
    I.seeAttributesOnElements('//*[@id="layanancard"]', {class: 'overflow-hidden showcard'});
    I.see('Vaksin Persiapan Hamil');
    I.seeAttributesOnElements('//*[@id="layanancard"]/div/div/h3', {class: 'font-bold text-black'});
    //ini kasus menarik semua item attribute sama
    I.seeAttributesOnElements('//*[@id="layanancard"]', {class: 'overflow-hidden showcard'});
    I.see('Vaksinasi Dewasa');
    I.seeAttributesOnElements('//*[@id="layanancard"]/div/div/h3', {class: 'font-bold text-black'});
});

Scenario('Melihat related service dan benefit pada halaman vaksinasi di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to vaksinasi
    I.see('Vaksinasi Anak & Dewasa');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.click('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.wait('5');
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');

    //check related service section
    I.say('Melihat section related service halaman vaksinasi');
    I.seeElement('//*[@id="main"]/main/section[3]');
    I.scrollTo('//*[@id="main"]/main/section[3]', 5, 5);
    I.wait(2);
    I.see('Layanan Terkait');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[1]/h2', {class: 'font-bold text-xl text-black'});
    I.see('Lihat Semua');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[1]/a', {href: 'https://staging.web.klinikpintar.id/direktori', class: 'font-bold text-primary text-center underline underline-offset-medium underline-thickness-thin'});
    //Horizontal list/Glider
    I.seeElement('//*[@id="glider-product"]');
    //item1
    I.seeElement('//*[@id="glider-product"]/div/div[1]');
    //item2
    I.seeElement('//*[@id="glider-product"]/div/div[2]');

    //enable when id changed
    // //check benefit section
    // I.say("Melihat section benefit halaman vaksinasi");
    // //id masih sama
    // I.seeElement('//*[@id="langkah"]');
    // I.scrollTo('//*[@id="langkah"]', 5, 5);
    // I.wait(2);
    // I.see('Keunggulan Vaksinasi Kami');
    // I.seeAttributesOnElements('//*[@id="langkah"]/div/h2', {class: 'font-bold text-xl text-black text-center mb-10'});
    // //card item
    // I.seeAttributesOnElements('//*[@id="langkah"]/div/div/div[1]', {class: 'rounded overflow-hidden'});
    // I.see('Aman Sesuai Standar');
    // I.seeAttributesOnElements('//*[@id="langkah"]/div/div/div[1]/div/div/h3', {class:'font-bold text-black'});
    // I.see('Petugas terlatih dan berizin');
    // I.see('APD petugas sekali pakai');
    // I.see('Prosedur sesuai standar IDI');
    // I.seeAttributesOnElements('//*[@id="langkah"]/div/div/div[2]', {class: 'rounded overflow-hidden'});
    // I.see('Penjadwalan Mudah');
    // I.seeAttributesOnElements('//*[@id="langkah"]/div/div/div[2]/div/div/h3', {class:'font-bold text-black'});
    // I.see('Pendaftaran via website');
    // I.see('Lokasi bisa di klinik dan di rumah');
    // I.see('Menerima pembayaran online');
    // I.seeAttributesOnElements('//*[@id="langkah"]/div/div/div[3]', {class: 'rounded overflow-hidden'});
    // I.see('Lengkap dan Terhubung');
    // I.seeAttributesOnElements('//*[@id="langkah"]/div/div/div[3]/div/div/h3', {class:'font-bold text-black'});
    // I.see('Tersedia tes antigen dan PCR');
    // I.see('Rekam medis tersimpan digital');
    // I.see('Melayani pasien perusahaan');
});

Scenario('Melihat steps pada halaman vaksinasi di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to vaksinasi
    I.see('Vaksinasi Anak & Dewasa');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.click('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.wait('5');
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');

    //enable when id changed
    // //check steps section
    // I.say('Melihat section steps to order halaman vaksinasi');
    // //id masih sama
    // I.seeElement('//*[@id="langkah"]');
    // I.scrollTo('//*[@id="langkah"]', 5, 5);
    // I.wait(2);
    // I.see('Langkah Pemesanan Vaksinasi');
    // I.seeAttributesOnElements('//*[@id="langkah"]/div/h2', {class: 'font-bold text-xl text-black text-center mb-10'});
    
    // //check tab button
    // I.see('Ke Rumah');
    // I.seeElement('//*[@id="langkah"]/div/div/div[1]/nav/button[1]');
    // I.seeAttributesOnElements('//*[@id="langkah"]/div/div/div[1]/nav/button[1]', {class:'tablangkah active font-bold flex justify-center align-center py-5 px-5 text-black focus:outline-none'});
    // I.see('Ke Klinik');
    // I.seeElement('//*[@id="langkah"]/div/div/div[1]/nav/button[2]');
    // I.seeAttributesOnElements('//*[@id="langkah"]/div/div/div[1]/nav/button[2]', {class:'tablangkah active font-bold flex justify-center align-center py-5 px-5 text-black focus:outline-none'});

    // //check home tab
    // I.click('//*[@id="langkah"]/div/div/div[1]/nav/button[1]');
    // //steps 1
    // I.see('Pilih Vaksinasi');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[1]/div/div[1]/div/div/h3', {class: 'font-bold text-black'});
    // I.see('Pilih jenis vaksinasi yang akan dilakukan di rumah. Lalu pilih jadwal dan isi data pasien pada ');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[1]/div/div[1]/div/div/p', {class: 'text-black'});
    // I.see('formulir');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[1]/div/div[1]/div/div/p/a', {href: 'https://pasien.klinikpintar.id/inquiry/', class: 'text-primary font-bold underline'});
    // //steps 2
    // I.see('Konfirmasi via WhatsApp');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[1]/div/div[3]/div/div/h3', {class: 'font-bold text-black'});
    // I.see('Kami akan memberikan rincian biaya, dan cara pembayaran. Pembayaran wajib dilakukan sebelum');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[1]/div/div[3]/div/div/p', {class: 'text-black'});
    // //steps 3
    // I.see('Jalani Vaksinasi di Rumah');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[1]/div/div[5]/div/div/h3', {class: 'font-bold text-black'});
    // I.see('Mohon tunggu kedatangan perawat sesuai jadwal. Vaksinasi dilakukan perawat sesuai protokol');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[1]/div/div[5]/div/div/p', {class: 'text-black'});
    // //steps 4
    // I.see('Vaksinasi Tercatat');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[1]/div/div[7]/div/div/h3', {class: 'font-bold text-black'});
    // I.see('Vaksinasi akan dicatat di rekam medis pasien secara digital dan di buku riyawat vaksin milik');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[1]/div/div[7]/div/div/p', {class: 'text-black'});

    // //check clinic tab
    // I.click('//*[@id="langkah"]/div/div/div[1]/nav/button[2]');
    // //steps 1
    // I.see('Pilih Vaksinasi');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[2]/div/div[1]/div/div/h3', {class: 'font-bold text-black'});
    // I.see('Pilih jenis vaksinasi yang akan dilakukan di klinik. Lalu ');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[2]/div/div[1]/div/div/p', {class: 'text-black'});
    // I.see('pilih klinik tujuan');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[2]/div/div[1]/div/div/p/a', {href: 'https://klinikpintar.id/partner', class: 'text-primary font-bold underline'});
    // I.see(' dan daftar online pada halaman klinik terkait.');
    // //steps 2
    // I.see('Konfirmasi via WhatsApp');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[2]/div/div[3]/div/div/h3', {class: 'font-bold text-black'});
    // I.see('Kami akan memberikan rincian biaya, dan cara pembayaran. Pembayaran wajib dilakukan sebelum');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[2]/div/div[3]/div/div/p', {class: 'text-black'});
    // //steps 3
    // I.see('Jalani Vaksinasi di Klinik');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[2]/div/div[5]/div/div/h3', {class: 'font-bold text-black'});
    // I.see('Mohon datang ke klinik tujuan sesuai jadwal. Vaksinasi dilakukan dokter umum sesuai protokol COVID.');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[2]/div/div[5]/div/div/p', {class: 'text-black'});
    // //steps 4
    // I.see('Vaksinasi Tercatat');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[2]/div/div[7]/div/div/h3', {class: 'font-bold text-black'});
    // I.see('Vaksinasi akan dicatat di rekam medis pasien secara digital dan di buku riyawat vaksin milik');
    // I.seeAttributesOnElements('//*[@id="panels"]/div[2]/div/div[7]/div/div/p', {class: 'text-black'});

    // I.click('//*[@id="langkah"]/div/div/div[1]/nav/button[1]');
    // I.dontSee('//*[@id="panels"]/div[2]');

    // I.seeElement('//*[@id="movie_player"]/div[3]/div[2]/div/a', {href:'https://www.youtube.com/watch?v=6IMDOD-iJ34', class: 'ytp-title-link yt-uix-sessionlink'});
});

Scenario('Melihat faq dan mitra pada halaman vaksinasi di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to vaksinasi
    I.see('Vaksinasi Anak & Dewasa');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.click('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.wait('5');
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');

    //check faq section
    I.say('Melihat section faq halaman vaksinasi');
    I.seeElement('//*[@id="main"]/main/section[7]');
    I.scrollTo('//*[@id="main"]/main/section[7]', 5, 5);
    I.wait(2);
    I.see('Sering Ditanyakan');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[1]/h2', {class: 'font-bold text-xl text-black'});
    I.see('Lihat Semua');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[1]/a', {href: 'https://staging.web.klinikpintar.id/blog/faq-kemitraan-klinik', class: 'font-bold text-primary text-center underline underline-offset-medium underline-thickness-thin'});
    //item one
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[1]', {class:'p-6 space-y-4 rounded border border-lighter-grey '});
    I.see('Bayi saya batuk pilek, apa tetap boleh vaksinasi?');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[1]/div[1]/p', {class:'font-bold text-black'});
    I.see('Boleh. Batuk pilek ringan tanpa demam boleh imunisasi, kecuali bila bayi terasa sedang sangat rewel, imunisasi sebaiknya ditunda satu sampai dua minggu kemudian.');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[1]/div[2]/p', {class:'text-black'});
    //item two
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[2]', {class:'p-6 space-y-4 rounded border border-lighter-grey '});
    I.see('Setelah vaksinasi, apa pasti tidak kena penyakit itu?');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[2]/div[1]/p', {class:'font-bold text-black'});
    I.see('Bayi atau anak yang telah imunisasi, masih dapat tertular penyakit tersebut, walaupun kemungkinannya kecil dan jauh lebih ringan dibanding terkena secara alami.');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[2]/div[2]/p', {class:'text-black'});
    //item three
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[3]', {class:'p-6 space-y-4 rounded border border-lighter-grey '});
    I.see('Beberapa vaksinasi dilakukan sekaligus, apakah bahaya?');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[3]/div[1]/p', {class:'font-bold text-black'});
    I.see('Tidak berbahaya, asalkan dilakukan di bagian tubuh berbeda (misalnya paha atau lengan kiri dan kanan), dengan alat suntik sekali pakai dan sesuai standar medis.');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[3]/div[2]/p', {class:'text-black'});
    //item four
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[4]', {class:'p-6 space-y-4 rounded border border-lighter-grey '});
    I.see('Adakah efek samping dari vaksinasi?');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[4]/div[1]/p', {class:'font-bold text-black'});
    I.see('Tiap vaksin dapat memiliki efek samping tertentu seperti demam, diare, reaksi kemerahan dan bengkak pada tempat penyuntikan bahkan dapat terjadi renjatan.');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[7]/div/div[2]/div[4]/div[2]/p', {class:'text-black'});

    //check mitra section
    I.say('Melihat section mitra halaman vaksinasi');
    I.seeElement('//*[@id="section-klinik"]');
    I.scrollTo('//*[@id="section-klinik"]', 5, 5);
    I.wait(2);
    I.see('Klinik Penyedia');
    I.seeAttributesOnElements('//*[@id="section-klinik"]/div/div[1]/div[1]/div/h2', {class: 'font-bold text-xl text-black mr-4 min-w-max'});
    I.see('Lihat Semua');
    I.seeAttributesOnElements('//*[@id="section-klinik"]/div/div[1]/div[2]/a', {href: 'https://staging.web.klinikpintar.id/direktori?tab=klinik', class: 'font-bold text-primary text-center underline underline-offset-medium underline-thickness-thin'});
    //check dropdown filter
    I.seeAttributesOnElements('//*[@id="section-klinik"]/div/div[1]/div[1]/div/div/select', {class:'w-full py-1 pl-10 rounded border border-lighter-grey focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'});
    //Horizontal list/Glider
    I.seeElement('//*[@id="glider-clinic"]');
    //item1
    I.seeElement('//*[@id="glider-clinic"]/div/div[1]');
    I.seeAttributesOnElements('//*[@id="glider-clinic"]/div/div[1]',{class:'h-full flex flex-col rounded overflow-hidden border border-lighter-grey bg-white showcardklinik glider-slide active left-1 visible'});
    //item2
    I.seeElement('//*[@id="glider-clinic"]/div/div[2]');
    //ini kasus menarik, enable when have solution
    // I.seeAttributesOnElements('//*[@id="glider-clinic"]/div/div[2]',{class:'h-full flex flex-col rounded overflow-hidden border border-lighter-grey bg-white showcardklinik glider-slide visible center'});
});

Scenario('Melihat registrasi dan artikel pada halaman vaksinasi di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to vaksinasi
    I.see('Vaksinasi Anak & Dewasa');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.click('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.wait('5');
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');

    //check registration section
    I.say('Melihat section registration halaman vaksinasi');
    I.seeElement('//*[@id="main"]/main/section[9]');
    I.scrollTo('//*[@id="main"]/main/section[9]', 5, 5);
    I.wait(2);
    //item one
    I.seeAttributesOnElements('//*[@id="main"]/main/section[9]/div/div/div[1]', {class:'rounded border border-lighter-grey overflow-hidden showcard'});
    I.see('Ingin rencanakan vaksinasi anak Anda?');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[9]/div/div/div[1]/div/div/h3', {class:'text-l text-black border-bottom max-w-max'});
    I.see('Dapatkan E-Book Panduan Vaksinasi Sesuai Usia Anak');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[9]/div/div/div[1]/div/div/p', {class:'text-black font-bold text-lg mt-4'});
    I.see('Booking Layanan');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[9]/div/div/div[1]/div/div/div/a', {href:'https://staging.web.klinikpintar.id/kemitraan-klinik', class:'py-2 px-6 rounded border font-bold text-primary border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 inline-flex max-w-max'});
    //item two
    I.seeAttributesOnElements('//*[@id="main"]/main/section[9]/div/div/div[2]', {class:'rounded border border-lighter-grey overflow-hidden showcard'});
    I.see('Vaksinasi anak Anda terlewat?');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[9]/div/div/div[2]/div/div/h3', {class:'text-l text-black border-bottom max-w-max'});
    I.see('Konsultasikan ke Tim Dokter Spesialis Anak Kami');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[9]/div/div/div[2]/div/div/p', {class:'text-black font-bold text-lg mt-4'});
    I.see('Lihat Layanan');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[9]/div/div/div[2]/div/div/div/a', {href:'mailto:bisnis@klinikpintar.id', class:'py-2 px-6 rounded border font-bold text-primary border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 inline-flex max-w-max'});

    //check article section
    I.say('Melihat section artikel halaman vaksinasi');
    I.seeElement('//*[@id="main"]/main/section[10]');
    I.scrollTo('//*[@id="main"]/main/section[10]', 5, 5);
    I.wait(2);
    I.see('Seputar Vaksinasi');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[10]/div/div[1]/h2', {class: 'font-bold text-xl text-black'});
    I.see('Semua Artikel');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[10]/div/div[1]/a', {href: 'https://staging.web.klinikpintar.id/blog', class: 'font-bold text-primary text-center underline underline-offset-medium underline-thickness-thin'});
    //Horizontal list/Glider
    I.seeElement('//*[@id="glider-info"]');
    //item1
    I.seeElement('//*[@id="glider-info"]/div/a[1]');
    I.seeAttributesOnElements('//*[@id="glider-info"]/div/a[1]/div',{class:'rounded overflow-hidden border border-lighter-grey bg-white hover-card'});
    //item2
    I.seeElement('//*[@id="glider-info"]/div/a[2]');
    I.seeAttributesOnElements('//*[@id="glider-info"]/div/a[2]/div',{class:'rounded overflow-hidden border border-lighter-grey bg-white hover-card'});
});

Scenario('Melihat footer pada halaman vaksinasi di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to vaksinasi
    I.see('Vaksinasi Anak & Dewasa');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.click('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.wait('5');
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');

    //check footer section
    I.say('Melihat section footer halaman vaksinasi');
    I.seeElement('//*[@id="main"]/footer');
    I.scrollTo('//*[@id="main"]/footer', 5, 5);
    I.wait(2);
    I.see('LAYANAN');
    I.see('Tes COVID');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[1]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[1]/a[1]', {href: 'https://staging.web.klinikpintar.id/landing/covid', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Vaksinasi Anak & Dewasa');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[2]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[1]/a[2]', {href: 'https://staging.web.klinikpintar.id/landing/vaksin', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Pemeriksaan Lab');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[3]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[1]/a[3]', {href: 'https://staging.web.klinikpintar.id/landing/lab', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Direktori');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[1]/a[4]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[1]/a[4]', {href: 'https://staging.web.klinikpintar.id/direktori', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});

    I.see('SOLUSI');
    I.see('Layanan Perusahaan');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[1]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[2]/a[1]', {href: 'https://staging.web.klinikpintar.id/layanan-perusahaan', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Layanan Ke Rumah');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[2]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[2]/a[2]', {href: 'https://staging.web.klinikpintar.id/home-service', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Kemitraan Klinik');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[3]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[2]/a[3]', {href: 'https://staging.web.klinikpintar.id/kemitraan-klinik', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Teknologi di Klinik');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[2]/a[4]', {href: 'https://staging.web.klinikpintar.id/aplikasiklinik', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Pengadaan Farmalkes');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[5]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[2]/a[5]', {href: 'https://staging.web.klinikpintar.id/farmalkes', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});

    I.see('TENTANG');
    I.see('Tentang Kami');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[3]/a[1]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[3]/a[1]', {href: 'https://staging.web.klinikpintar.id/tentang', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Karir');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[3]/a[2]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[3]/a[2]', {href: 'https://recruitment.talenta.co/klinikpintar', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Blog');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[3]/a[3]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[3]/a[3]', {href: 'https://staging.web.klinikpintar.id/blog', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Kebijakan Privasi');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[3]/a[4]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[3]/a[4]', {href: 'https://staging.web.klinikpintar.id/kebijakan-privasi', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Syarat dan Ketentuan');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[3]/a[5]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[3]/a[5]', {href: 'https://staging.web.klinikpintar.id/syarat-dan-ketentuan', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});

    I.see('KONTAK');
    I.see('+62 811 841 335');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/address/div[1]/div[2]/a');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[4]/address/div[1]/div[2]/a', {href: 'https://wa.me/62811841335', class: 'text-green hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('hello@klinikpintar.id');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/address/div[2]/div[2]/a');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[4]/address/div[2]/div[2]/a', {href: 'mailto:hello@klinikpintar.id', class: 'text-primary hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('Jl. Senayan No. 67 Blok S, Rawa Barat, Kebayoran Baru, Jakarta Selatan');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/address/div[3]/div[2]/a');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[4]/address/div[3]/div[2]/a', {href: 'https://goo.gl/maps/ECzTHprJJia1MSLA7', class: 'text-black hover:underline underline-offset-medium underline-thickness-thin'});
    I.see('+62 21 27899818');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/address/div[4]/div[2]/div[2]/a');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[4]/address/div[4]/div[2]/div[2]/a', {href: 'tel:+622127899818', class: 'text-primary hover:underline underline-offset-medium underline-thickness-thin'});
    //Instagram
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/div/div/a[1]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[4]/div/div/a[1]', {href: 'https://www.instagram.com/klinikpintar/'});
    //Linkedin
    I.seeElement('//*[@id="main"]/footer/div[1]/div[4]/div/div/a[2]');
    I.seeAttributesOnElements('//*[@id="main"]/footer/div[1]/div[4]/div/div/a[2]', {href: 'https://www.linkedin.com/company/klinikpintar/'});
});