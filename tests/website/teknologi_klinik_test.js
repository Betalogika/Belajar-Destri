Feature('website_teknologi_klinik');

Scenario('Melihat halaman teknologi klinik di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to teknologi di klinik
    I.see('Teknologi di Klinik');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
    I.click('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
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
    I.see('KLINIK OS');
    I.see('Aplikasi Klinik Lengkap, Mudah, dan Gratis');
    I.see('Aplikasi Klinik OS siap mempermudah operasional klinik Anda. Mulai dari pendaftaran pasien, input rekam medis digital, inventori obat, hingga pembayaran online.');
    //button try
    I.seeElement('//*[@id="main"]/main/section[1]/div/div[1]/div[2]/a[1]');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[1]/div/div[1]/div[2]/a[1]', {href: 'https://staging.web.klinikpintar.id/untuk-klinik/registrasi', class: 'whitespace-nowrap md:w-full flex justify-center items-center cursor-pointer text-white font-bold text-base leading-6 px-8 py-4 bg-primary border border-primary rounded-md'});
    //button all features
    I.seeElement('//*[@id="main"]/main/section[1]/div/div[1]/div[2]/a[2]');
    //ini kasus menarik
    I.seeAttributesOnElements('//*[@id="main"]/main/section[1]/div/div[1]/div[2]/a[2]', {href: 'https://staging.web.klinikpintar.id/aplikasiklinik#fiturklinik', class: 'whitespace-nowrap md:w-full flex justify-center items-center cursor-pointer text-primary font-bold text-base leading-6 px-8 py-4 bg-white border border-primary  rounded-md'});
    
    //check problem section
    I.say('Melihat section problem halaman teknologi klinik')
    I.scrollTo('//*[@id="main"]/main/section[3]', 5, 5);
    I.wait(2);
    I.see('MASALAH KLINIK');
    I.see('Apakah klinik Anda mengalami masalah terkait operasional?');
    //card operational
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[1]', {class: 'w-full bg-white p-5 md:p-10 border border-[#F0F0F0] rounded-lg bx-shadow'});
    I.see('Operasional klinik masih manual');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[1]/div[1]', {class: 'font-bold text-base md:text-lg leading-[24px] md:leading-[26px] text-[#444444] mt-4'});
    I.see('Data pasien tidak lengkap, sulit dicari');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[1]/div[2]/span', {class: 'text-[#444444] text-base leading-6'});
    I.see('Rekam medis pasien masih di kertas');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[1]/div[3]/span', {class: 'text-[#444444] text-base leading-6'});
    I.see('Laporan pendapatan dibuat manual');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[1]/div[4]/span', {class: 'text-[#444444] text-base leading-6'});
    I.see('Sulit pantau stok obat secara akurat');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[1]/div[5]/span', {class: 'text-[#444444] text-base leading-6'});
    //card system
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[2]', {class: 'w-full bg-white p-5 md:p-10 border border-[#F0F0F0] rounded-lg bx-shadow'});
    I.see('Sudah ada sistem, tapi kurang membantu');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[2]/div[1]', {class: 'font-bold text-base md:text-lg leading-[24px] md:leading-[26px] text-[#444444] mt-4'});
    I.see('Sistem aplikasi sulit digunakan');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[2]/div[2]/span', {class: 'text-[#444444] text-base leading-6'});
    I.see('Belum terhubung ke PCare BPJS');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[2]/div[3]/span', {class: 'text-[#444444] text-base leading-6'});
    I.see('Fitur aplikasi tidak berkembang');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[2]/div[4]/span', {class: 'text-[#444444] text-base leading-6'});
    I.see('Kurang IT support dan bantuan');
    I.seeAttributesOnElements('//*[@id="main"]/main/section[3]/div/div[3]/div[2]/div[5]/span', {class: 'text-[#444444] text-base leading-6'});
});


Scenario('Melihat fitur klinik os pada halaman teknologi klinik di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to teknologi di klinik
    I.see('Teknologi di Klinik');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
    I.click('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
    I.wait('5');
    
    //check features section
    I.say('Melihat section fitur klinik os halaman teknologi klinik')
    I.scrollTo('//*[@id="fiturklinik"]', 5, 5);
    I.wait(2);
    I.see('FITUR KLINIK OS');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[1]/div[1]', {class:'text-[#757575] leading-5 font-bold uppercase text-center w-full text-xs md:text-sm'});
    I.see('Digitalisasi operasional klinik Anda cukup dengan satu aplikasi');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[1]/div[2]', {class:'text-primary leading-8 text-2xl font-bold mt-4 w-full text-center'});

    //check for admission & farmasi features
    I.say('Melihat section fitur untuk admisi dan farmasi halaman teknologi klinik')
    I.see('UNTUK ADMISI DAN FARMASI');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[2]/div[1]', {class:'text-[#757575] leading-5 font-bold uppercase text-center w-full text-xs md:text-sm'});
    I.see('Melayani Pasien Lebih Cepat dan Mudah');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[2]/div[2]', {class:'text-[#444444] leading-8 text-xl font-bold mt-4 w-full text-center'});
    //image
    I.seeElement('//*[@id="fiturklinik"]/div[2]/div[3]/div[1]');
    //feature one
    I.seeElement('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[1]');
    I.see('Pendaftaran & antrian online');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[1]/span', {class:'block pr-8'});
    I.click('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[1]');
    I.wait(1);
    I.see('Pasien cukup daftar dan check-in online, admin tidak perlu repot isi data pasien.');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/div[1]/p', {class:'text-[#757575] text-base leading-6 break-words'});
    //feature two
    I.seeElement('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[2]');
    I.see('Akses Berkas Pasien Online');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[2]/span', {class:'block pr-8'});
    I.click('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[2]');
    I.wait(1);
    I.see('Memberikan informasi hasil pemeriksaan, rekam medis, dan resep obat untuk pasien secara online, tanpa perlu banyak kertas.');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/div[2]/p', {class:'text-[#757575] text-base leading-6 break-words'});
    //feature three
    I.seeElement('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[3]');
    I.see('Pembayaran Digital');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[3]/span', {class:'block pr-8'});
    I.click('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[3]');
    I.wait(1);
    I.see('Pembayaran aman, cepat, dan mudah karena dilakukan secara online.');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/div[3]/p', {class:'text-[#757575] text-base leading-6 break-words'});
    //feature four
    I.seeElement('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[4]');
    I.see('Telekonsultasi dokter');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[4]/span', {class:'block pr-8'});
    I.click('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[4]');
    I.wait(1);
    I.see('Layanan telekonsultasi dokter via video call yang terhubung dengan rekam medis pasien');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/div[4]/p', {class:'text-[#757575] text-base leading-6 break-words'});
    //close expanded features
    I.click('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[1]');
    I.click('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[2]');
    I.click('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[3]');
    I.click('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[4]');
    I.wait(2);

    //check for doctor & staff features
    I.say('Melihat section fitur untuk dokter dan staf halaman teknologi klinik')
    I.scrollTo('//*[@id="fiturklinik"]/div[3]', 5, 5);
    I.see('UNTUK DOKTER DAN STAF');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[3]/div[1]', {class:'text-[#757575] leading-5 font-bold uppercase text-center w-full text-xs md:text-sm'});
    I.see('Mengelola Data Secara Aman dan Terintegrasi');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[3]/div[2]', {class:'text-[#444444] leading-8 text-xl font-bold mt-4 w-full text-center'});
    //image
    I.seeElement('//*[@id="fiturklinik"]/div[3]/div[3]/div[1]');
    //feature one
    I.seeElement('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[1]');
    I.see('Rekam medis elektronik');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[1]/span', {class:'block pr-8'});
    I.click('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[1]');
    I.wait(1);
    I.see('Mencari riwayat kesehatan, penyakit, dan pengobatan pasien dapat dilakukan secara cepat dan aman');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/div[1]/p', {class:'text-[#757575] text-base leading-6 break-words'});
    //feature two
    I.seeElement('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[2]');
    I.see('Pengelolaan stok & harga');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[2]/span', {class:'block pr-8'});
    I.click('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[2]');
    I.wait(1);
    I.see('Meminimalisir fraud melalui sistem pencatatan penerimaan stok, penggunaan stok, hingga perhitungan harga otomatis berdasarkan harga pembelian');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/div[2]/p', {class:'text-[#757575] text-base leading-6 break-words'});
    //feature three
    I.seeElement('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[3]');
    I.see('Pengelolaan jadwal dokter');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[3]/span', {class:'block pr-8'});
    I.click('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[3]');
    I.wait(1);
    I.see('Kelola jadwal reguler dokter dan atur perubahan jadwal dengan mudah melalui sistem');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/div[3]/p', {class:'text-[#757575] text-base leading-6 break-words'});
    //feature four
    I.seeElement('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[4]');
    I.see('Integrasi ke Pcare BPJS');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[2]/div[3]/div[2]/button[4]/span', {class:'block pr-8'});
    I.click('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[4]');
    I.wait(1);
    I.see('Pendaftaran dan kunjungan pasien BPJS cukup dicatat di Klinik OS, sistem yang akan mengirim data ke Pcare BPJS');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/div[4]/p', {class:'text-[#757575] text-base leading-6 break-words'});
    //close expanded features
    I.click('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[1]');
    I.click('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[2]');
    I.click('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[3]');
    I.click('//*[@id="fiturklinik"]/div[3]/div[3]/div[2]/button[4]');
    I.wait(2);

    //check for owner features
    I.say('Melihat section fitur untuk pemilik halaman teknologi klinik')
    I.scrollTo('//*[@id="fiturklinik"]/div[4]', 5, 5);
    I.see('UNTUK PEMILIK KLINIK');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[4]/div[1]', {class:'text-[#757575] leading-5 font-bold uppercase text-center w-full text-xs md:text-sm'});
    I.see('Memantau dan Meningkatkan Performa Melalui Data');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[4]/div[2]', {class:'text-[#444444] leading-8 text-xl font-bold mt-4 w-full text-center'});
    //image
    I.seeElement('//*[@id="fiturklinik"]/div[4]/div[3]/div[1]');
    //feature one
    I.seeElement('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[1]');
    I.see('Laporan pendapatan aktual');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[1]/span', {class:'block pr-8'});
    I.click('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[1]');
    I.wait(1);
    I.see('Data pendapatan klinik ditampilkan secara real-time di Dashboard, dan dapat terhitung otomatis per bulannya.');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/div[1]/p', {class:'text-[#757575] text-base leading-6 break-words'});
    //feature two
    I.seeElement('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[2]');
    I.see('Laporan penyakit untuk dinkes');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[2]/span', {class:'block pr-8'});
    I.click('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[2]');
    I.wait(1);
    I.see('Laporan diagnosa penyakit dapat diunduh untuk dilaporkan ke dinas kesehatan setempat');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/div[2]/p', {class:'text-[#757575] text-base leading-6 break-words'});
    //feature three
    I.seeElement('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[3]');
    I.see('Laporan penggunaan obat & layanan');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[3]/span', {class:'block pr-8'});
    I.click('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[3]');
    I.wait(1);
    I.see('Laporan penggunaan obat dan layanan yang terjadi di klinik dapat dikelola dan diunduh untuk laporan bulanan');
    I.seeAttributesOnElements('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/div[3]/p', {class:'text-[#757575] text-base leading-6 break-words'});
    //close expanded features
    I.click('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[1]');
    I.click('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[2]');
    I.click('//*[@id="fiturklinik"]/div[4]/div[3]/div[2]/button[3]');
    I.wait(2);
});

Scenario('Melihat infrastruktur pada halaman teknologi klinik di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to teknologi di klinik
    I.see('Teknologi di Klinik');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
    I.click('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
    I.wait('5');

    //check infrastructure section
    I.say('Melihat section infrastructure halaman teknologi klinik')
    I.scrollTo('//*[@id="app"]/section[4]', 5, 5);
    I.wait(2);
    I.see('BERBASIS CLOUD');
    I.seeAttributesOnElements('//*[@id="app"]/section[4]/div/div[1]', {class:'text-[#757575] leading-5 font-bold uppercase text-center w-full text-xs md:text-sm'});
    I.see('Tanpa install, selalu update, dan bebas maintenance');
    I.seeAttributesOnElements('//*[@id="app"]/section[4]/div/div[2]', {class:'text-primary leading-8 text-2xl font-bold mt-4 w-full text-center'});
    //check item one
    I.see('Cukup pakai browser');
    I.seeAttributesOnElements('//*[@id="app"]/section[4]/div/div[3]/div[1]/div', {class:'font-bold text-lg leading-[26px] text-[#444444] mt-4 text-center'});
    I.see('Tanpa ribet instalasi, bisa diakses saat desktop & mobile');
    I.seeAttributesOnElements('//*[@id="app"]/section[4]/div/div[3]/div[1]/span', {class:'text-[#444444] text-base leading-6 mt-2 text-center'});
    //check item two
    I.see('Update Otomatis');
    I.seeAttributesOnElements('//*[@id="app"]/section[4]/div/div[3]/div[2]/div', {class:'font-bold text-lg leading-[26px] text-[#444444] mt-4 text-center'});
    I.see('Tanpa ribet instalasi, bisa diakses saat desktop & mobile');
    I.seeAttributesOnElements('//*[@id="app"]/section[4]/div/div[3]/div[2]/span', {class:'text-[#444444] text-base leading-6 mt-2 text-center'});
    //check item three
    I.see('Bebas Maintenance');
    I.seeAttributesOnElements('//*[@id="app"]/section[4]/div/div[3]/div[3]/div', {class:'font-bold text-lg leading-[26px] text-[#444444] mt-4 text-center'});
    I.see('Tidak perlu bayar atau investasi ruang server di klinik.');
    I.seeAttributesOnElements('//*[@id="app"]/section[4]/div/div[3]/div[3]/span', {class:'text-[#444444] text-base leading-6 mt-2 text-center'});
    //check item four
    I.see('Bantuan Pengguna');
    I.seeAttributesOnElements('//*[@id="app"]/section[4]/div/div[3]/div[4]/div', {class:'font-bold text-lg leading-[26px] text-[#444444] mt-4 text-center'});
    I.see('Dilengkapi training, panduan, dan bantuan penggunaan');
    I.seeAttributesOnElements('//*[@id="app"]/section[4]/div/div[3]/div[4]/span', {class:'text-[#444444] text-base leading-6 mt-2 text-center'});
});

Scenario('Melihat registrasi dan artikel pada halaman teknologi klinik di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to teknologi di klinik
    I.see('Teknologi di Klinik');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
    I.click('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
    I.wait('5');

    //check registration section
    I.say('Melihat section registration halaman teknologi klinik')
    I.seeElement('//*[@id="app"]/section[7]');
    I.scrollTo('//*[@id="app"]/section[7]', 5, 5);
    I.wait(2);
    I.see('Ingin bertanya atau mencoba aplikasi Klinik OS?');
    I.seeAttributesOnElements('//*[@id="app"]/section[7]/div/div/div', {class: 'text-primary leading-8 text-xl md:text-2xl font-bold w-full text-center'});
    I.see('Saat ini Klinik OS dapat digunakan oleh mitra klinik yang telah bekerja sama.');
    I.seeAttributesOnElements('//*[@id="app"]/section[7]/div/div/p[1]', {class: 'text-[#757575] text-sm md:text-base leading-5 md:leading-6 mt-4 text-center'});
    I.see('Hubungi kami untuk bermitra dan mendapatkan demo aplikasi di klinik Anda.');
    //ini kasus menarik
    I.seeAttributesOnElements('//*[@id="app"]/section[7]/div/div/p[2]', {class: 'text-[#757575] text-sm md:text-base leading-5 md:leading-6 mt-0 text-center'});
    //tombol contact
    I.seeAttributesOnElements('//*[@id="app"]/section[7]/div/div/a', {href: 'https://staging.web.klinikpintar.id/untuk-klinik/registrasi'});

    //check news section
    I.say("Melihat section news halaman teknologi klinik");
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

Scenario('Melihat footer pada halaman teknologi klinik di website', ({ I }) => {
    I.amOnPage("staging.web.klinikpintar.id");
    I.wait(5);
    I.seeElement('//*[@id="popup-annoucment"]/div/img[1]');
    I.click('//*[@id="popup-annoucment"]/div/img[1]');
    //navigate to teknologi di klinik
    I.see('Teknologi di Klinik');
    I.seeElement('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
    I.click('//*[@id="main"]/footer/div[1]/div[2]/a[4]');
    I.wait('5');

    //check footer section
    I.say('Melihat section footer halaman teknologi klinik');
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