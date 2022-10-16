Feature('scms_md_supplier');

Scenario('Saya sebagai super admin melaksanakan skenario melihat daftar supplier', ({ I }) => {
    I.amOnPage("https://admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');
    I.see('Masuk ke akun Anda');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(7);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman master data supplier');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Supplier');
    I.wait(2);
    //tombol sub tab supplier
    I.click('#Supplier');
    I.wait(7);
    //tombol add supplier
    I.seeElement('#id-AddSupplier');
    //dropdown status
    I.seeElement('#BtnOpenSelect-FilterStatus');
    //input search
    I.seeElement('#FilterSearch');
    //tabel daftar supplier
    I.seeElement('//*[@id="table-undefined"]');
    I.see('CODE');
    I.see('COMPANY NAME');
    I.see('ADDRESS');
    I.see('Country');
    I.see('Province');
    I.see('Phone');
    I.see('Website');
    I.see('Email');
    I.see('STATUS');
    I.wait(2);

    I.say('Saya sebagai super admin menyaring daftar supplier berdasarkan code/company name');
    I.fillField('#FilterSearch', 'BGP');
    I.wait(5);
    I.see('BGP');
    I.clearField('#FilterSearch');
    I.wait(5);
    I.fillField('#FilterSearch', 'PT. Bunda Global');
    I.wait(5);
    I.see('PT. Bunda Global Pharma');
    I.clearField('#FilterSearch');
    I.wait(5);

    I.say('Saya sebagai super admin menyaring daftar supplier berdasarkan status');
    I.click('#BtnOpenSelect-FilterStatus');
    //tombol pilihan aktif
    I.click('#Select-FilterStatus-0');
    I.wait(5);
    I.fillField('#FilterSearch', 'PT. Bunda Global');
    I.wait(5);
    I.see('PT. Bunda Global Pharma');
    I.wait(2);
    I.clearField('#FilterSearch');
    I.wait(5);
    //tombol clear dropdwon
    I.click('#BtnClearSelect-FilterStatus');
    I.wait(5);
    //tombol pilihan tidak aktif
    I.click('#Select-FilterStatus-1');
    I.wait(5);
    I.fillField('#FilterSearch', 'PT. Bunda Global');
    I.wait(5);
    I.dontSee('PT. Bunda Global Pharma');
    I.wait(2);
    I.clearField('#FilterSearch');
    I.wait(5);
    //tombol clear dropdwon
    I.click('#BtnClearSelect-FilterStatus');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');
})

Scenario('Saya sebagai super admin melaksanakan skenario membuat data supplier baru', ({ I }) => {
    I.amOnPage("https://admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');
    I.see('Masuk ke akun Anda');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(7);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman master data supplier');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Supplier');
    //tombol sub tab supplier
    I.click('#Supplier');
    I.wait(7);

    I.say('Saya sebagai super admin membuat data supplier baru');
     //tombol add supplier
     I.click('#id-AddSupplier');
     I.wait(7);
     I.see('Company Name');
     I.seeElement('#company_name');
     I.wait(1);
     I.see('Vendor Code');
     I.seeElement('#vendor_code');
     I.wait(1);
     I.see('SIPA No')
     I.seeElement('#sipa_no');
     I.wait(1);
     I.see('SIA No');
     I.seeElement('#sia_no');
     I.wait(1);
     I.see('APJ Name');
     I.seeElement('#apj_name');
     I.wait(1);
     I.see('Vat No');
     I.seeElement('#vat_no');
     I.wait(1);
     I.see('Address');
     I.seeElement('#address');
     I.wait(1);
     I.see('Country');
     I.seeElement('#country');
     I.wait(1);
     I.see('Province');
     I.seeElement('#province');
     I.wait(1);
     I.see('City');
     I.seeElement('#city');
     I.wait(1);
     I.see('Phone');
     I.seeElement('#phone');
     I.wait(1);
     I.see('Website');
     I.seeElement('#website');
     I.wait(1);
     I.see('Email');
     I.seeElement('#email');
     I.wait(1);
     //tombol save
     I.seeElement('#id-BtnStore');
     I.seeElement('#id-BtnCancel');
     I.wait(1);
     I.click('#id-BtnCancel');
     I.wait(7);
    
    //tombol add supplier
    I.click('#id-AddSupplier');
    I.wait(7);
    I.fillField('#company_name', 'test ceria');
    I.wait(5);
    I.fillField('#company_name', 'test ceria');
    I.wait(5);
    //time
    const d = new Date();
    I.fillField('#vendor_code', 'TC' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds());
    I.wait(5);
    I.fillField('#sipa_no', '-');
    I.wait(5);
    I.fillField('#sia_no', '-');
    I.wait(5);
    I.fillField('#apj_name', '-');
    I.wait(5);
    I.fillField('#vat_no', '-');
    I.wait(5);
    //toggle as account
    I.click('//*[@id="supplier"]/div[1]/div[7]/div/div/div/div/div/div/div/label');
    I.wait(5);
    I.fillField('#sia_no', '-');
    I.wait(5);
    I.fillField('#apj_name', '-');
    I.wait(5);
    I.fillField('#vat_no', '-');
    I.wait(5);
    //toggle as account
    I.click('//*[@id="supplier"]/div[1]/div[7]/div/div/div/div/div/div/div/label');
    I.wait(5);
    I.fillField('#address', 'Jalan Jambu Blok A Nomor 201');
    I.wait(5);
    I.fillField('#country', 'Indonesia');
    I.wait(5);
    I.fillField('#province', 'Jawa Barat');
    I.wait(5);
    I.fillField('#city', 'Bandung');
    I.wait(5);
    I.fillField('#phone', '021222333');
    I.wait(5);
    I.fillField('#website', 'ceria.com');
    I.wait(5);
    I.fillField('#email', 'ceria@gmail.com');
    I.wait(5);
    I.click('#id-BtnStore');
    I.wait(7);

    I.fillField('#FilterSearch', 'test ceria');
    I.wait(5);
    I.see('test ceria');
    I.wait(5);  
    I.clearField('#FilterSearch');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');
})

Scenario('Saya sebagai super admin melaksanakan skenario memperbarui data supplier', ({I}) => {
    I.amOnPage("https://admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');
    I.see('Masuk ke akun Anda');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(7);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman master data supplier');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Supplier');
    //tombol sub tab supplier
    I.click('#Supplier');
    I.wait(7);

    I.fillField('#FilterSearch', 'test');
    I.wait(5);
    //tombol actions
    I.click('#MenuItem-0');
    I.wait(5);
    //tombol edit
    I.click('#EditItem-0');
    I.wait(7);
    //I.see('Edit Supplier')
    I.see('Company Name');
    I.seeElement('#company_name');
    I.wait(1);
    I.see('Vendor Code');
    I.seeElement('#vendor_code');
    I.wait(1);
    I.see('SIPA No')
    I.seeElement('#sipa_no');
    I.seeInField('sipa_no', '-');
    I.wait(1);
    I.see('SIA No');
    I.seeElement('#sia_no');
    I.seeInField('sia_no', '-');
    I.wait(1);
    I.see('APJ Name');
    I.seeElement('#apj_name');
    I.seeInField('apj_name', '-');
    I.wait(1);
    I.see('Vat No');
    I.seeElement('#vat_no');
    I.seeInField('vat_no', '-');
    I.wait(1);
    I.see('Address');
    I.seeElement('#address');
    I.seeInField('address', 'Jalan Jambu Blok A Nomor 201');
    I.wait(1);
    I.see('Country');
    I.seeElement('#country');
    I.seeInField('country', 'Indonesia');
    I.wait(1);
    I.see('Province');
    I.seeElement('#province');
    I.seeInField('province', 'Jawa Barat');
    I.wait(1);
    I.see('City');
    I.seeElement('#city');
    I.seeInField('city', 'Bandung');
    I.wait(1);
    I.see('Phone');
    I.seeElement('#phone');
    I.seeInField('phone', '021222333')
    I.wait(1);
    I.see('Website');
    I.seeElement('#website');
    I.seeInField('website', 'ceria.com');
    I.wait(1);
    I.see('Email');
    I.seeElement('#email');
    I.seeInField('email', 'ceria@gmail.com');
    I.wait(1);
    //tombol save
    I.seeElement('#id-BtnStore');
    I.seeElement('#id-BtnCancel');
    I.wait(1);
    I.click('#id-BtnCancel');
    I.wait(7);

    I.fillField('#FilterSearch', 'test');
    I.wait(5);
    //tombol actions
    I.click('#MenuItem-0');
    I.wait(5);
    //tombol edit
    I.click('#EditItem-0');
    I.wait(7);
    //I.see('Edit Supplier')
    I.see('Company Name');
    I.seeElement('#company_name');
    I.wait(1);
    I.see('Vendor Code');
    I.seeElement('#vendor_code');
    I.wait(1);
    I.see('SIPA No')
    I.seeElement('#sipa_no');
    I.seeInField('sipa_no', '-');
    I.wait(1);
    I.see('SIA No');
    I.seeElement('#sia_no');
    I.seeInField('sia_no', '-');
    I.wait(1);
    I.see('APJ Name');
    I.seeElement('#apj_name');
    I.seeInField('apj_name', '-');
    I.wait(1);
    I.see('Vat No');
    I.seeElement('#vat_no');
    I.seeInField('vat_no', '-');
    I.wait(1);
    I.see('Address');
    I.seeElement('#address');
    I.seeInField('address', 'Jalan Jambu Blok A Nomor 201');
    I.wait(1);
    I.see('Country');
    I.seeElement('#country');
    I.seeInField('country', 'Indonesia');
    I.wait(1);
    I.see('Province');
    I.seeElement('#province');
    I.seeInField('province', 'Jawa Barat');
    I.wait(1);
    I.see('City');
    I.seeElement('#city');
    I.seeInField('city', 'Bandung');
    I.wait(1);
    I.see('Phone');
    I.seeElement('#phone');
    I.seeInField('phone', '021222333')
    I.wait(1);
    I.see('Website');
    I.seeElement('#website');
    I.seeInField('website', 'ceria.com');
    I.wait(1);
    I.see('Email');
    I.seeElement('#email');
    I.seeInField('email', 'ceria@gmail.com');
    I.wait(1);
    //tombol save
    I.seeElement('#id-BtnStore');
    I.seeElement('#id-BtnCancel');
    I.wait(1);
    I.click('#id-BtnCancel');
    I.wait(7);

    I.say('Saya sebagai super admin memperbarui data supplier');
    I.fillField('#FilterSearch', 'test');
    I.wait(5);
    //tombol actions
    I.click('#MenuItem-0');
    I.wait(5);
    //tombol edit
    I.click('#EditItem-0');
    I.wait(7);
    //I.see('Edit Supplier')
    I.clearField('#company_name');
    I.wait(5);
    I.fillField('#company_name', 'PT. Test');
    I.wait(5);
    I.clearField('#address');
    I.wait(5);
    I.fillField('#address', 'Jalan Gajah Mada, No 17B');
    I.wait(5);
    I.clearField('#country');
    I.wait(5);
    I.fillField('#country', 'Indonesia');
    I.wait(5);
    I.clearField('#province');
    I.wait(5);
    I.fillField('#province', 'Jawa Tengah');
    I.wait(5);
    I.clearField('#city');
    I.wait(5);
    I.fillField('#city', 'Semarang');
    I.wait(5);
    I.clearField('#phone');
    I.wait(5);
    I.fillField('#phone', '212000222');
    I.wait(5);
    I.clearField('#website');
    I.wait(5);
    I.fillField('#website', 'test.id');
    I.clearField('#email');
    I.wait(5);
    I.fillField('#email', 'test@gmail.id');
    I.wait(5);
    //tombol update
    I.click('#id-BtnStore');
    I.wait(7);

    I.fillField('#FilterSearch', 'PT. Test');
    I.wait(5);
    I.see('PT. Test');
    I.wait(5);  
    I.clearField('#FilterSearch');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');
})

Scenario('Saya sebagai super admin melaksanakan skenario menghapus data supplier', ({ I }) => {
    I.amOnPage("https://admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');
    I.see('Masuk ke akun Anda');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(7);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman master data supplier');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Supplier');
    //tombol sub tab supplier
    I.click('#Supplier');
    I.wait(7);

    I.say('Saya sebagai super admin menghapus data supplier');
    //buat supplier baru terlebih dahulu untuk running scenario ini
    I.fillField('#FilterSearch', 'PT. Test');
    I.wait(5);
    //tombol actions
    I.click('#MenuItem-0');
    I.wait(5);
    //tombol delete
    I.click('#DeleteItem-0');
    I.wait(7);
    //popup
    I.see('Are you sure?')
    //tombol setuju delete
    I.click("//button[contains(text(),'Yes, delete it!')]");
    I.wait(7);

    I.fillField('#FilterSearch', 'PT. Test');
    I.wait(5);
    I.dontSee('PT. Test');
    I.wait(3);
    I.clearField('#FilterSearch');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');
});
