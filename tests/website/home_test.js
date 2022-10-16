Feature('website_home');

Scenario('Melihat halaman home di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    //pop up annoucment
    I.seeElement('//*[@id="popup-annoucment"]');
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
    I.see('Cara Pintar untuk');
    I.seeElement('//*[@id="main"]/main/section[1]/div/div[1]/div');

    I.say('Melihat section hero halaman home page');
    //input search
    I.seeElement('//*[@id="search-input"]');
    //Hero
    I.see('Vaksin Anak');
    I.seeElement('//*[@id="glider-tags"]/div/a[1]');
    I.see('Vaksin Dewasa');
    I.seeElement('//*[@id="glider-tags"]/div/a[2]');
    I.see('Lab Penyakit Dalam');
    I.seeElement('//*[@id="glider-tags"]/div/a[3]');
    I.see('Lab Screening');
    I.seeElement('//*[@id="glider-tags"]/div/a[4]');
    I.see('Test PCR');
    I.seeElement('//*[@id="glider-tags"]/div/a[5]');
    I.see('Test Antigen');
    I.seeElement('//*[@id="glider-tags"]/div/a[6]');

    I.say("Melihat section promo halaman home page");
    I.scrollTo('//*[@id="main"]/main/section[2]', 5, 5);
    I.wait(3);
    I.see('Promo Terbaru');
    I.see('Lihat Semua');
    I.seeElement('//*[@id="main"]/main/section[2]/div/div[1]/a');
    //Horizontal list/Glider
    I.seeElement('//*[@id="glider-promo"]');
    //promo1
    I.seeElement('//*[@id="glider-promo"]/div/a[1]');
    //promo2
    I.seeElement('//*[@id="glider-promo"]/div/a[2]');

    I.say('Melihat section related service halaman home page');
    I.scrollTo('//*[@id="main"]/main/section[3]', 5, 5);
    I.wait(3);
    I.see('Layanan Terkait');
    I.see('Lihat Semua');
    I.seeElement('//*[@id="main"]/main/section[3]/div/div[1]/a');
    //Horizontal list/Glider
    I.seeElement('//*[@id="glider-product"]');
    //card telokonsultasi
    I.seeElement('//*[@id="glider-product"]/div/div[1]');
    //card woman health screening
    I.seeElement('//*[@id="glider-product"]/div/div[2]');

    I.say('Melihat section mitra halaman home page');
    I.scrollTo('//*[@id="section-klinik"]', 5, 5)
    I.wait(3);
    I.see('Mitra Klinik')
    //dropdown provinsi
    I.seeElement('//*[@id="section-klinik"]/div/div[1]/div[1]/div/div');
    I.see('Lihat Semua');
    I.seeElement('//*[@id="section-klinik"]/div/div[1]/div[2]/a');
    //Horizontal list/Glider
    I.seeElement('//*[@id="glider-clinic"]');
    //klinik permata bunda
    I.seeElement('//*[@id="glider-clinic"]/div/div[1]');
    //klinik bhakti insani
    I.seeElement('//*[@id="glider-clinic"]/div/div[2]');

    I.say('Melihat section service halaman home page');
    I.scrollTo('//*[@id="main"]/main/section[5]', 5, 5);
    I.wait(3);
    I.see('Dapatkan Layanan Sesuai Kebutuhan');
    //Horizontal list/Glider
    I.seeElement('//*[@id="glider-layanan"]');
    //test layanan
    I.seeElement('//*[@id="glider-layanan"]/div/div[1]');
    //layanan perusahan testing
    I.seeElement('//*[@id="glider-layanan"]/div/div[2]');

    I.say('Melihat section customer service halaman home page');
    I.scrollTo('//*[@id="main"]/main/section[6]', 5, 5);
    I.wait(3);
    I.see('Mari Bergabung Bersama Kami');
    //Horizontal list/Glider
    I.seeElement('//*[@id="main"]/main/section[6]/div/div');
    //kemitraan klinik
    I.seeElement('//*[@id="main"]/main/section[6]/div/div/div[1]');
    //kemitraan bisnis
    I.seeElement('//*[@id="main"]/main/section[6]/div/div/div[2]');

    I.say('Melihat section career halaman home page');
    I.scrollTo('//*[@id="main"]/main/section[7]', 5, 5);
    I.wait(3);
    I.see('Mari berkarir di Klinik Pintar dan bersama wujudkan');
    //tombol lihat lowongan
    I.seeElement('//*[@id="main"]/main/section[7]/div/div/div/div[2]/div[2]/a');

    I.say('Melihat section news halaman home page');
    I.scrollTo('//*[@id="main"]/main/section[8]', 5, 5);
    I.wait(3);
    I.see('Info Terbaru');
    I.see('Semua Artikel');
    I.seeElement('//*[@id="main"]/main/section[8]/div/div[1]/a');
    //Horizontal list/Glider
    I.seeElement('//*[@id="glider-info"]');
    //card example 1
    I.seeElement('//*[@id="glider-info"]/div/a[1]');
    //card example 2
    I.seeElement('//*[@id="glider-info"]/div/a[2]');

    I.say('Melihat section footer halaman home page');
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
