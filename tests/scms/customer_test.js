Feature('scms_md_customer');

Scenario('Saya sebagai super admin melaksanakan skenario melihat daftar customer', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman master data customer');
    I.see('Master Data');
    //tombol tab master data
    I.click('#MasterData');
    I.see('Customer');
    I.wait(2);
    //tombol sub tab customer
    I.click('#Customer');
    I.wait(7);
    //tombol add customer
    I.seeElement('#id-AddCustomer');
    //dropdown status
    I.seeElement('#BtnOpenSelect-FilterStatus');
    //input search
    I.seeElement('#FilterSearchCodeOrCompany');
    //tabel daftar customer
    I.seeElement('#table-customer');
    I.see('Code');
    I.see('Type Vendor');
    I.see('Company Name');
    I.see('ADDRESS');
    I.see('Country');
    I.see('Province');
    I.see('City');
    I.see('Phone');
    I.see('Has Apj');
    I.see('Website');
    I.see('Email');
    I.see('STATUS');
    I.wait(2);

    I.say('Saya sebagai super admin menyaring customer berdasarkan code/company name');
    I.fillField('#FilterSearchCodeOrCompany', 'KPB01');
    I.wait(5);
    I.see('KPB01');
    I.clearField('#FilterSearchCodeOrCompany');
    I.wait(5);
    I.fillField('#FilterSearchCodeOrCompany', 'Klinik Permata Bunda');
    I.wait(5);
    I.see('Klinik Permata Bunda');
    I.clearField('#FilterSearchCodeOrCompany');
    I.wait(5);

    I.say('Saya sebagai super admin menyaring daftar customer berdasarkan status');
    I.click('#BtnOpenSelect-FilterStatus');
    //tombol pilihan aktif
    I.click('#Select-FilterStatus-0');
    I.wait(5);
    I.fillField('#FilterSearchCodeOrCompany', 'Klinik Permata Bunda');
    I.wait(5);
    I.see('Klinik Permata Bunda');
    I.wait(3);
    I.clearField('#FilterSearchCodeOrCompany');
    I.wait(5);
    //tombol clear dropdwon
    I.click('#BtnClearSelect-FilterStatus');
    I.wait(5);
    //tombol pilihan tidak aktif
    I.click('#Select-FilterStatus-1');
    I.wait(5);
    I.fillField('#FilterSearchCodeOrCompany', 'Klinik Permata Bunda');
    I.wait(5);
    I.dontSee('Klinik Permata Bunda');
    I.wait(3);
    I.clearField('#FilterSearchCodeOrCompany');
    I.wait(5);
    //tombol clear dropdwon
    I.click('#BtnClearSelect-FilterStatus');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('#user_logout');
    I.wait(7);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario membuat data customer baru', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman master data customer');
    I.see('Master Data');
    //tombol tab master data
    I.click('#MasterData');
    I.see('Customer');
    I.wait(2);
    //tombol sub tab customer
    I.click('#Customer');
    I.wait(7);

    I.say('Saya sebagai super admin mengakses halaman tambah customer');
    //tombol add customer
    I.click('#id-AddCustomer');
    I.wait(7);
    I.see('Type Customer');
    I.seeElement('#BtnOpenSelect-type_customer');
    I.see('Vendor Code');
    I.see('Company Name');
    I.seeElement('#company_name');
    I.see('SIPA No');
    I.seeElement('#sipa_no');
    I.see('SIA No');
    I.seeElement('#sia_no');
    I.see('Apj Name');
    I.seeElement('#apj_name');
    I.see('Vat No');
    I.seeElement('#vat_no');
    I.see('Address');
    I.seeElement('#address');
    I.see('Has Apj');
    I.see('Country');
    I.seeElement('#country');
    I.see('Province');
    I.seeElement('#province');
    I.see('City');
    I.seeElement('#city');
    I.see('Phone');
    I.seeElement('#phone');
    I.see('Website');
    I.seeElement('#website');
    I.see('Email');
    I.seeElement('#email');
    I.see('Password');
    I.seeElement('#password');
    I.see('Password Confirmation');
    I.seeElement('#passwordConfirmation');
    I.seeElement('#id-BtnSubmit');
    I.seeElement('#id-BtnCancel');
    //tombol cancel
    I.click('#id-BtnCancel');
    I.wait(7);

    I.say('Saya sebagai super admin menambah data customer baru');
    //tombol add customer
    I.click('#id-AddCustomer');
    I.wait(7);
    I.click('#BtnOpenSelect-type_customer'); 
    I.wait(5);
    I.click('#Select-type_customer-0');
    I.wait(5);
    I.fillField('#company_name', 'Klinik QA Ceria');
    I.wait(5);
    I.fillField('#sipa_no', '-');
    I.wait(5);
    I.fillField('#sia_no', '-');
    I.wait(5);
    I.fillField('#apj_name', '-');
    I.wait(5);
    I.fillField('#vat_no', '-');
    I.wait(5);
    I.fillField('#address', 'Jalan Sudirman No 300');
    I.wait(5);
    I.fillField('#country', 'Indonesia');
    I.wait(5);
    I.fillField('#province', 'DKI Jakarta');
    I.wait(5);
    I.fillField('#city', 'Jakarta');
    I.wait(5);
    I.fillField('#phone', '212111333');
    I.wait(5);
    I.fillField('#website', 'qaceria.com');
    I.wait(5);
    //customer email must unique
    const d = new Date();
    I.fillField('#email', 'qa' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds() + '@gmail.com');
    I.wait(5);
    I.fillField('#password', 'QaTeam12345');
    I.wait(5);
    I.fillField('#passwordConfirmation', 'QaTeam12345');
    I.wait(5);
    //tombol save
    I.click('#id-BtnSubmit');
    I.wait(7);

    I.fillField('#FilterSearchCodeOrCompany', 'Klinik QA Ceria');
    I.wait(5);
    I.see('Klinik QA Ceria');
    I.clearField('#FilterSearchCodeOrCompany');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('#user_logout');
    I.wait(7);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario memperbarui data customer', ({I}) => {
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

    I.say('Saya sebagai super admin mengakses halaman master data customer');
    I.see('Master Data');
    //tombol tab master data
    I.click('#MasterData');
    I.see('Customer');
    I.wait(2);
    //tombol sub tab customer
    I.click('#Customer');
    I.wait(7);
    
    I.fillField('#FilterSearchCodeOrCompany', 'Klinik QA Ceria');
    I.wait(5);
    I.see('Klinik QA Ceria');
    I.clearField('#FilterSearchCodeOrCompany');
    I.wait(5);

    I.say('Saya sebagai super admin mengakses halaman ubah data customer');
    //tombol action
    I.click('#MenuItem-0');
    I.wait(5);
    I.click('#EditItem-0');
    I.wait(7);
    I.see('Type Customer');
    I.seeElement('#BtnClearSelect-type_customer');
    I.see('Vendor Code');
    I.seeElement('#code');
    I.see('Company Name');
    I.seeElement('#company_name');
    I.seeInField('#company_name', 'Klinik QA Ceria');
    I.see('SIPA No');
    I.seeElement('#sipa_no');
    I.seeInField('#sipa_no', '-');
    I.see('SIA No');
    I.seeElement('#sia_no');
    I.seeInField('#sia_no', '-');
    I.see('Apj Name');
    I.seeElement('#apj_name');
    I.seeInField('#apj_name', '-');
    I.see('Vat No');
    I.seeElement('#vat_no');
    I.seeInField('#vat_no', '-');
    I.see('Address');
    I.seeElement('#address');
    I.seeInField('#address', 'Jalan Sudirman No 300');
    I.see('Has Apj');
    I.see('Country');
    I.seeElement('#country');
    I.seeInField('#country', 'Indonesia');
    I.see('Province');
    I.seeElement('#province');
    I.seeInField('#province', 'DKI Jakarta');
    I.see('City');
    I.seeElement('#city');
    I.seeInField('#city', 'Jakarta');
    I.see('Phone');
    I.seeElement('#phone');
    I.seeInField('#phone', '212111333');
    I.see('Website');
    I.seeElement('#website');
    I.seeInField('#website', 'qaceria.com')
    I.see('Email');
    I.seeElement('#email');
    I.see('Password');
    I.seeElement('#password');
    I.see('Password Confirmation');
    I.seeElement('#passwordConfirmation');
    I.seeElement('#id-BtnSubmit');
    I.seeElement('#id-BtnCancel');
    //tombol cancel
    I.click('#id-BtnCancel');
    I.wait(7);

    I.fillField('#FilterSearchCodeOrCompany', 'Klinik QA Ceria');
    I.wait(5);
    I.see('Klinik QA Ceria');
    I.clearField('#FilterSearchCodeOrCompany');
    I.wait(5);

    I.say('Saya sebagai super admin mengakses halaman ubah data customer');
    //tombol action
    I.click('#MenuItem-0');
    I.wait(5);
    I.click('#EditItem-0');
    I.wait(7);
    I.clearField('#company_name');
    I.wait(5);
    I.fillField('#company_name', 'Klinik QA Semangat');
    I.wait(5);
    I.clearField('#sipa_no');
    I.wait(5);
    I.fillField('#sipa_no', 'SIPA123456');
    I.wait(5);
    I.clearField('#sia_no');
    I.wait(5);
    I.fillField('#sia_no', 'SIA123456');
    I.wait(5);
    I.clearField('#apj_name');
    I.wait(5);
    I.fillField('#apj_name', 'Mawar Melati');
    I.wait(5);
    I.clearField('#vat_no');
    I.wait(5);
    I.fillField('#vat_no', 'VAT123456');
    I.wait(5);
    I.click('//*[@id="customer"]/div[1]/div[9]/div/div/div/div/div/div/div/label');
    I.wait(5);
    I.fillField('#password', 'QaTeam12345');
    I.wait(5);
    I.fillField('#passwordConfirmation', 'QaTeam12345');
    I.wait(5);
    //tombol update
    I.click('#id-BtnSubmit');
    I.wait(7);

    I.fillField('#FilterSearchCodeOrCompany', 'Klinik QA Semangat');
    I.wait(5);
    I.see('Klinik QA Semangat');
    I.clearField('#FilterSearchCodeOrCompany');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('#user_logout');
    I.wait(7);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario menghapus data customer', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman master data customer');
    I.see('Master Data');
    //tombol tab master data
    I.click('#MasterData');
    I.see('Customer');
    I.wait(2);
    //tombol sub tab customer
    I.click('#Customer');
    I.wait(7);

    I.fillField('#FilterSearchCodeOrCompany', 'Klinik QA Semangat');
    I.wait(5);
    I.see('Klinik QA Semangat');
    I.wait(5);

    I.say('Saya sebagai super admin menghapus data customer');
    //tombol action
    I.click('#MenuItem-0');
    I.wait(5);
    I.click('#DeleteItem-0');
    I.wait(5);
    I.click("//button[contains(text(),'Yes, delete it!')]");
    I.wait(7);

    I.fillField('#FilterSearchCodeOrCompany', 'Klinik QA Semangat');
    I.wait(5);
    I.dontSee('Klinik QA Semangat');
    I.clearField('#FilterSearchCodeOrCompany');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('#user_logout');
    I.wait(7);
    I.see('Supply Chain Management System');
});