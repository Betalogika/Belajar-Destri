Feature('cp_company_employees');

Scenario('Saya sebagai admin melihat daftar laporan karyawan di corporate portal', ({ I }) => {
    I.amOnPage("staging.company.klinikpintar.id/login");
    I.wait(5);
    I.see('Masuk ke akun Anda');
    I.fillField('//*[@id="username"]', 'qacakep');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/button');
    I.wait(3);
    I.see('Company Portal');

    //navigate to klinik pintar company page
    I.seeElement('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[1]/div[2]/div/input');
    I.fillField('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[1]/div[2]/div/input', 'Klinik Pintar');
    I.wait(3);
    I.seeElement('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[2]/div/div/div/table/tbody/tr/td[3]/div/a[1]');
    I.click('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[2]/div/div/div/table/tbody/tr/td[3]/div/a[1]');
    I.wait(10);

    //navigate to employee report page
    I.see('Laporan Karyawan');
    I.click('//*[@id="app"]/div/div[1]/div[1]/div[2]/a[2]');
    I.wait(5);
    //tombol import
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div[1]/div[2]/button', {class: 'px-4 py-2 rounded-md order-5 sm:order-3 sm:mr-4 bg-white border text-primary'});
    //tombol download/export
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div[1]/div[2]/a[1]', {href: 'https://staging.company.klinikpintar.id/employee/export', class: 'px-4 py-2 rounded-md order-5 sm:order-3 sm:mr-4 bg-white border text-primary'});
    //tombol tambah karyawan
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div[1]/div[2]/a[2]', {href: 'https://staging.company.klinikpintar.id/employee/new', class: 'px-4 py-2 rounded-md order-5 sm:order-3 sm:mr-4 bg-primary text-white'});
    //tombol filter
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[1]/div[1]/div/div[1]/button', {class: 'px-4 py-2 rounded-md bg-white border border-borderGreyLighter'});
    //input search
    I.seeAttributesOnElements('//*[@id="text"]', {placeholder: 'Cari nama atau NIP...', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary pr-8'});
    //table
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[2]/div/div/div/table', {class: 'min-w-full divide-y divide-gray-200 bg-white'});

    I.say('Saya sebagai admin melihat daftar laporan karyawan berdasarkan nama');
    I.fillField('//*[@id="text"]', 'Suryo Satrio');
    I.wait(5);
    I.see('Suryo Satrio');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[2]/div/div/div/table/tbody/tr/td[6]/div/a', {href: 'https://staging.company.klinikpintar.id/employee/543'});
    //tombol reset filter
    I.click('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[1]/div[3]/button');
    I.wait(5);

    I.say('Saya sebagai admin melihat daftar laporan karyawan berdasarkan filter divisi');
    I.click('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[1]/div[1]/div/div[1]/button');
    I.wait(2);
    I.seeAttributesOnElements('//*[@id="division_id"]', {placeholder: 'Pilih divisi', class: 'w-full form-select rounded-md border-gray-300 focus:border-primary'});
    I.selectOption('//*[@id="division_id"]', 'Operation');
    I.wait(5);
    I.fillField('//*[@id="text"]', 'Rizki');
    I.wait(5);
    I.see('Dwi Rizki Sabarkhah');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[2]/div/div/div/table/tbody/tr/td[6]/div/a', {href: 'https://staging.company.klinikpintar.id/employee/475'});
    //clear filter
    I.click('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[1]/div[1]/div/div[1]/button');
    I.wait(2);
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[1]/div[1]/div/div[3]/div/div/div[2]/div[1]', {class: 'text-primary font-bold'});
    I.click('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[1]/div[1]/div/div[3]/div/div/div[2]/div[1]');
    I.wait(5);

    I.say('Saya sebagai admin melihat rincian laporan karyawan');
    I.fillField('//*[@id="text"]', 'Suryo Satrio');
    I.wait(5);
    I.click('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[2]/div/div/div/table/tbody/tr/td[6]/div/a');
    I.wait(5);
    I.see('Info Karyawan');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div[2]/div[1]/span', {class: 'font-bold'});
    I.see('Edit');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div[2]/div[1]/div/a', {href: 'https://staging.company.klinikpintar.id/employee/543/update', class: 'flex items-center space-x-2 border-r pr-5'});
    I.see('Nama');
    I.see('Suryo Satrio');
    I.see('Tanggal Lahir');
    I.see('14 December 1993');
    I.see('Jenis Kelamin');
    I.see('Laki-laki');
    I.see('No. Induk Pegawai');
    I.see('MTK049');
    I.see('Nomor Identitas');
    I.see('3201291412930000');
    I.see('ID Polis Asuransi');
    I.see('3201291412930000');
    I.see('Cabang');
    I.see('-');
    I.see('Division');
    I.see('Protech');
    I.see('Email');
    I.see('suryo@klinikpintar.id');
    I.see('Nomor Telepon');
    I.see('+62');
    I.see('81278102985');
    I.see('Alamat');
    I.see('Bukit Asri Blok C 12 No.17 Rt.02/13 Kel. Pagelaran Kec. Ciomas, Bogor');

    I.see('Histori Pemeriksaan');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div[3]/div[1]/span', {class: 'font-bold'});
    I.see('Total Biaya:');
    //filter tanggal
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div[3]/div[2]/div[1]/div[1]/div/div/div/input', {class: 'dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg'});
    //filter layanan
    I.seeAttributesOnElements('//*[@id="service"]', {class: 'w-full form-select rounded-md border-gray-300 focus:border-primary p-2 py-1'});
    //table histori pemeriksaan
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div[3]/fieldset/div[2]/div/div/div/table', {class: 'min-w-full divide-y divide-gray-200 bg-white'});

    //logout
    I.click('//*[@id="app"]/div/div[1]/div[2]/div[1]/div/div[2]');
    I.wait(1);
    I.click('//*[@id="app"]/div/div[1]/div[2]/div[3]/div/button[2]');
    I.wait(5);
    I.see('Masuk ke akun Anda');
});

Scenario('Saya sebagai admin mengakses halaman tambah karyawan di corporate portal', ({ I }) => {
    I.amOnPage("staging.company.klinikpintar.id/login");
    I.wait(5);
    I.see('Masuk ke akun Anda');
    I.fillField('//*[@id="username"]', 'qacakep');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/button');
    I.wait(3);
    I.see('Company Portal');

    //navigate to klinik pintar company page
    I.seeElement('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[1]/div[2]/div/input');
    I.fillField('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[1]/div[2]/div/input', 'Klinik Pintar');
    I.wait(3);
    I.seeElement('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[2]/div/div/div/table/tbody/tr/td[3]/div/a[1]');
    I.click('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[2]/div/div/div/table/tbody/tr/td[3]/div/a[1]');
    I.wait(10);

    //navigate to employee report page
    I.see('Laporan Karyawan');
    I.click('//*[@id="app"]/div/div[1]/div[1]/div[2]/a[2]');
    I.wait(5);
    
    I.say('Saya sebagai admin mengakses halaman tambah karyawan');
    I.click('//*[@id="app"]/div/div[2]/div[1]/div[2]/a[2]');
    I.wait(3);
    I.see('Info');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div[2]/div[1]/span', {class: 'font-bold'});
    I.see('Nama Pegawai');
    I.seeAttributesOnElements('//*[@id="name"]', {placeholder: 'Masukkan nama pegawai', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.see('Cabang');
    I.seeAttributesOnElements('//*[@id="branch_id"]', {placeholder: 'Pilih cabang', class: 'w-full form-select rounded-md border-gray-300 focus:border-primary'});
    I.see('Kartu Identitas');
    I.seeAttributesOnElements('//*[@id="id_types"]', {placeholder: 'Pilih jenis kartu ID', class: 'w-full form-select rounded-md border-gray-300 focus:border-primary'});
    I.seeAttributesOnElements('//*[@id="card_number"]', {class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.see('Divisi');
    I.seeAttributesOnElements('//*[@id="division_id"]', {placeholder: 'Pilih divisi', class: 'w-full form-select rounded-md border-gray-300 focus:border-primary'});
    I.see('Jenis kelamin');
    I.seeAttributesOnElements('//*[@id="male"]', {class: 'form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'});
    I.seeAttributesOnElements('//*[@id="female"]', {class: 'form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'});
    I.see('ID Pegawai');
    I.seeAttributesOnElements('//*[@id="nip"]', {placeholder: 'Masukkan id pegawai', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.see('Email');
    I.seeAttributesOnElements('//*[@id="email"]', {placeholder: 'Masukkan email pegawai', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.see('No Polis Asuransi');
    I.seeAttributesOnElements('//*[@id="guarantor_member_id"]', {placeholder: 'Masukkan no polis asuransi', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.see('Tanggal lahir');
    I.seeAttributesOnElements('//*[@id="birth_date"]', {class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.see('No Hp');
    I.seeAttributesOnElements('//*[@id="phone_code"]', {class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.seeAttributesOnElements('//*[@id="phone_number"]', {placeholder: 'Masukkan nomor telepon', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.see('Alamat');
    I.seeAttributesOnElements('//*[@id="address"]', {placeholder: 'Masukkan alamat pegawai', class: 'form-input rounded-md border-gray-300 focus:border-primary w-full'});
    I.see('Simpan');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div[2]/div[2]/form/div[2]/button', {class: 'px-4 py-2 rounded-md bg-primary text-white border border-transparent ml-4'});

    //logout
    I.click('//*[@id="app"]/div/div[1]/div[2]/div[1]/div/div[2]');
    I.wait(1);
    I.click('//*[@id="app"]/div/div[1]/div[2]/div[3]/div/button[2]');
    I.wait(5);
    I.see('Masuk ke akun Anda');

    I.say('Saya sebagai admin dapat menambah data karyawan (skipped)');
});

Scenario('Saya sebagai admin mengubah data karyawan di corporate portal', ({ I }) => {
    I.amOnPage("staging.company.klinikpintar.id/login");
    I.wait(5);
    I.see('Masuk ke akun Anda');
    I.fillField('//*[@id="username"]', 'qacakep');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/button');
    I.wait(3);
    I.see('Company Portal');

    //navigate to klinik pintar company page
    I.seeElement('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[1]/div[2]/div/input');
    I.fillField('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[1]/div[2]/div/input', 'Klinik Pintar');
    I.wait(3);
    I.seeElement('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[2]/div/div/div/table/tbody/tr/td[3]/div/a[1]');
    I.click('//*[@id="app"]/div/div[2]/div[2]/div/fieldset/div[2]/div/div/div/table/tbody/tr/td[3]/div/a[1]');
    I.wait(10);

    //navigate to employee report page
    I.see('Laporan Karyawan');
    I.click('//*[@id="app"]/div/div[1]/div[1]/div[2]/a[2]');
    I.wait(5);
    
    I.say('Saya sebagai admin mengakses halaman ubah karyawan');
    I.fillField('//*[@id="text"]', 'Suryo Satrio');
    I.wait(5);
    I.click('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[2]/div/div/div/table/tbody/tr/td[6]/div/a');
    I.wait(5);
    I.click('//*[@id="app"]/div/div[2]/div/div[2]/div[1]/div/a');
    I.wait(5);
    //breadcrumbs laporan karyawan
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div[1]/div/a[1]', {href: 'https://staging.company.klinikpintar.id/employee', class: 'font-bold text-primary'});
    I.see('Info');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div[2]/div[1]/span', {class: 'font-bold'});
    I.see('Nama Pegawai');
    I.seeAttributesOnElements('//*[@id="name"]', {placeholder: 'Masukkan nama pegawai', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.seeInField('//*[@id="name"]', 'Suryo Satrio');
    I.see('Cabang');
    I.seeAttributesOnElements('//*[@id="branch_id"]', {placeholder: 'Pilih cabang', class: 'w-full form-select rounded-md border-gray-300 focus:border-primary'});
    I.see('Kartu Identitas');
    I.seeAttributesOnElements('//*[@id="id_types"]', {placeholder: 'Pilih jenis kartu ID', class: 'w-full form-select rounded-md border-gray-300 focus:border-primary'});
    I.seeAttributesOnElements('//*[@id="card_number"]', {class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.seeInField('//*[@id="id_types"]', 'KTP');
    I.seeInField('//*[@id="card_number"]', '3201291412930000');
    I.see('Divisi');
    I.seeAttributesOnElements('//*[@id="division_id"]', {placeholder: 'Pilih divisi', class: 'w-full form-select rounded-md border-gray-300 focus:border-primary'});
    I.seeInField('//*[@id="division_id"]', '13');
    I.see('Jenis kelamin');
    I.seeAttributesOnElements('//*[@id="male"]', {class: 'form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'});
    I.seeAttributesOnElements('//*[@id="female"]', {class: 'form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'});
    I.seeCheckboxIsChecked('//*[@id="male"]');
    I.see('ID Pegawai');
    I.seeAttributesOnElements('//*[@id="nip"]', {placeholder: 'Masukkan id pegawai', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.seeInField('//*[@id="nip"]', 'MTK049');
    I.see('Email');
    I.seeAttributesOnElements('//*[@id="email"]', {placeholder: 'Masukkan email pegawai', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.seeInField('//*[@id="email"]', 'suryo@klinikpintar.id');
    I.see('No Polis Asuransi');
    I.seeAttributesOnElements('//*[@id="guarantor_member_id"]', {placeholder: 'Masukkan no polis asuransi', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.seeInField('//*[@id="guarantor_member_id"]', '3201291412930000');
    I.see('Tanggal lahir');
    I.seeAttributesOnElements('//*[@id="birth_date"]', {class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    //enable when find the way
    //I.seeInField('//*[@id="birth_date"]', '14/12/1993');
    I.see('No Hp');
    I.seeAttributesOnElements('//*[@id="phone_code"]', {class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.seeAttributesOnElements('//*[@id="phone_number"]', {placeholder: 'Masukkan nomor telepon', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    I.seeInField('//*[@id="phone_code"]', '+62');
    I.seeInField('//*[@id="phone_number"]', '81278102985');
    I.see('Alamat');
    I.seeAttributesOnElements('//*[@id="address"]', {placeholder: 'Masukkan alamat pegawai', class: 'form-input rounded-md border-gray-300 focus:border-primary w-full'});
    I.seeInField('//*[@id="address"]', 'Bukit Asri Blok C 12 No.17 Rt.02/13 Kel. Pagelaran Kec. Ciomas, Bogor');
    I.see('Simpan');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div[2]/div[2]/form/div[2]/button', {class: 'px-4 py-2 rounded-md bg-primary text-white border border-transparent ml-4'});

    I.say('Saya sebagai admin mengubah data karyawan');
    I.clearField('//*[@id="name"]');
    I.fillField('//*[@id="name"]', 'QA Account');
    I.wait(1);
    I.checkOption('//*[@id="female"]');
    I.wait(1);
    I.clearField('//*[@id="guarantor_member_id"]');
    I.fillField('//*[@id="guarantor_member_id"]', '3201291412930023');
    I.wait(1);
    I.clearField('//*[@id="address"]');
    I.fillField('//*[@id="address"]', 'Perumahan dosen blok s, Kambu, Kendari, Sulawesi Tenggara');
    I.wait(1);
    I.click('//*[@id="app"]/div/div[2]/div/div[2]/div[2]/form/div[2]/button');
    I.wait(5);
    

    I.say('Saya sebagai admin mengecek data karyawan yang baru diubah');
    //breadcrumbs laporan karyawan
    I.click('//*[@id="app"]/div/div[2]/div/div[1]/div/a[1]');
    I.wait(5);
    I.fillField('//*[@id="text"]', 'Suryo Satrio');
    I.wait(5);
    I.dontSee('Suryo Satrio');
    I.fillField('//*[@id="text"]', 'QA Account');
    I.wait(5);
    I.see('QA Account');
    I.click('//*[@id="app"]/div/div[2]/div[2]/fieldset/div[2]/div/div/div/table/tbody/tr/td[6]/div/a');
    I.wait(5);
    I.click('//*[@id="app"]/div/div[2]/div/div[2]/div[1]/div/a');
    I.wait(5);
    I.seeInField('//*[@id="name"]', 'QA Account');
    I.seeCheckboxIsChecked('//*[@id="female"]');
    I.seeInField('//*[@id="guarantor_member_id"]', '3201291412930023');
    I.seeInField('//*[@id="address"]', 'Perumahan dosen blok s, Kambu, Kendari, Sulawesi Tenggara');
    I.wait(2);

    I.say('Saya sebagai admin mengubah kembali data karyawan yang baru diubah');
    I.clearField('//*[@id="name"]');
    I.fillField('//*[@id="name"]', 'Suryo Satrio');
    I.wait(1);
    I.checkOption('//*[@id="male"]');
    I.wait(1);
    I.clearField('//*[@id="guarantor_member_id"]');
    I.fillField('//*[@id="guarantor_member_id"]', '3201291412930000');
    I.wait(1);
    I.clearField('//*[@id="address"]');
    I.fillField('//*[@id="address"]', 'Bukit Asri Blok C 12 No.17 Rt.02/13 Kel. Pagelaran Kec. Ciomas, Bogor');
    I.wait(1);
    I.click('//*[@id="app"]/div/div[2]/div/div[2]/div[2]/form/div[2]/button');
    I.wait(5);

    I.say('Saya sebagai admin mengecek data karyawan yang telah diubah kembali');
    //breadcrumbs laporan karyawan
    I.click('//*[@id="app"]/div/div[2]/div/div[1]/div/a[1]');
    I.wait(5);
    I.fillField('//*[@id="text"]', 'Suryo Satrio');
    I.wait(5);
    I.see('Suryo Satrio');

    //logout
    I.click('//*[@id="app"]/div/div[1]/div[2]/div[1]/div/div[2]');
    I.wait(1);
    I.click('//*[@id="app"]/div/div[1]/div[2]/div[3]/div/button[2]');
    I.wait(5);
    I.see('Masuk ke akun Anda');

    I.say('Saya sebagai admin dapat menyaring daftar layanan yang digunakan karyawan (skipped)');
});
