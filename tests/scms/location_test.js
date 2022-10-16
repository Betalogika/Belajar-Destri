Feature('scms_location');

Scenario('Saya sebagai super admin melaksanakan skenario melihat daftar location', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(10);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman daftar location');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Location');
    //tombol sub tab location
    I.click('//*[@id="Location"]');
    I.wait(10);
    //tombol add location
    I.seeElement('//*[@id="id-AddLocation"]');
    //input search
    I.seeElement('//*[@id="FilterSearch"]');
    //tabel daftar location
    I.seeElement('//*[@id="table-location"]');
    I.see('CODE');
    I.see('TYPE');
    I.see('COMPANY');
    I.see('WAREHOUSE');
    I.see('LOCATION');
    // I.see('Shortname');
    I.see('LOCATION CODE');
    I.see('REMARK');

    I.say('Saya sebagai super admin menyaring daftar location berdasarkan nama perusahaan');
    //PT Distribusi Teknologi Kesehatan
    I.fillField('FilterSearch', 'PT Distribusi Teknologi Kesehatan');
    I.wait(5);
    I.see('PT Distribusi Teknologi Kesehatan');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario menambah data location', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(10);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman daftar location');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Location');
    //tombol sub tab location
    I.click('//*[@id="Location"]');
    I.wait(10);
    
    I.say('Saya sebagai super admin mengakses halaman tambah location');
    I.click('AddLocation');
    I.wait(5);
    I.see('Location Type');
    I.seeElement('//*[@id="BtnOpen-LocationType"]');
    I.see('Company Name');
    I.seeElement('//*[@id="company"]');
    I.see('Warehouse Name');
    I.seeElement('//*[@id="WarehouseName"]');
    I.see('Location');
    I.seeElement('//*[@id="location"]');
    I.see('Location Code');
    I.seeElement('//*[@id="code"]');
    I.see('Short Name');
    I.seeElement('//*[@id="ShortName"]');
    I.see('Remark');
    I.seeElement('//*[@id="remark"]');
    I.seeElement('//*[@id="id-BtnCancel"]');
    I.seeElement('//*[@id="id-BtnStore"]');
    I.click('BtnCancel');
    I.wait(10);

    I.say('Saya sebagai super admin menambah data location');
    I.click('AddLocation');
    I.wait(2);
    I.click('BtnOpen-LocationType');
    I.wait(2);
    I.click('//*[@id="Option-0"]');
    I.wait(2);
    I.seeElement('//*[@id="BtnClear-LocationType"]');
    I.clearField('company');
    I.fillField('company', 'QA Company');
    I.wait(2);
    I.clearField('WarehouseName');
    I.fillField('WarehouseName', 'QA Warehouse');
    I.wait(2);
    I.clearField('location');
    I.fillField('location', 'QA Location');
    I.wait(2);
    I.clearField('code');
    //location code must unique
    const d = new Date();
    I.fillField('code', 'QA' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds());
    I.wait(2);
    I.clearField('ShortName');
    I.fillField('ShortName', 'QA ShortName');
    I.wait(2);
    I.clearField('remark');
    I.fillField('remark', 'QA Remark');
    I.wait(2);
    I.click('BtnStore');
    I.wait(15);

    I.say('Saya sebagai super admin menyaring daftar location berdasarkan nama perusahaan dari data yang baru ditambahkan');
    I.fillField('FilterSearch', 'QA Company');
    I.wait(5);
    I.see('QA Company');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario mengubah data location', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(10);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman daftar location');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Location');
    //tombol sub tab location
    I.click('//*[@id="Location"]');
    I.wait(10);
    
    I.say('Saya sebagai super admin menyaring daftar location berdasarkan nama perusahaan dari data yang baru ditambahkan');
    I.fillField('FilterSearch', 'QA Company');
    I.wait(5);
    I.see('QA Company');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin mengakses halaman ubah data');
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    I.see('Location Type');
    I.seeElement('//*[@id="BtnClear-LocationType"]');
    I.see('Company Name');
    I.seeElement('//*[@id="company"]');
    I.see('Warehouse Name');
    I.seeElement('//*[@id="WarehouseName"]');
    I.seeInField('WarehouseName', 'QA Warehouse');
    I.see('Location');
    I.seeElement('//*[@id="location"]');
    I.seeInField('location', 'QA Location');
    I.see('Location Code');
    I.seeElement('//*[@id="code"]');
    I.see('Short Name');
    I.seeElement('//*[@id="ShortName"]');
    I.seeInField('ShortName', 'QA ShortName');
    I.see('Remark');
    I.seeElement('//*[@id="remark"]');
    I.seeInField('remark', 'QA Remark');
    I.seeElement('//*[@id="id-BtnCancel"]');
    I.seeElement('//*[@id="id-BtnStore"]');
    I.click('BtnCancel');
    I.wait(10);

    I.say('Saya sebagai super admin mengubah data yang baru ditambahkan');
    I.fillField('FilterSearch', 'QA Company');
    I.wait(5);
    I.see('QA Company');
    I.seeElement('//*[@id="MenuItem-0"]');
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    I.clearField('company');
    I.fillField('company', 'QA Companies');
    I.wait(2);
    I.click('BtnStore');
    I.wait(10);
    
    I.say('Saya sebagai super admin menyaring daftar location berdasarkan nama perusahaan dari data yang baru diubah');
    I.fillField('FilterSearch', 'QA Companies');
    I.wait(5);
    I.see('QA Companies');
    I.seeElement('//*[@id="MenuItem-0"]');
    I.say('Saya sebagai super admin mengubah data yang baru diubah');
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    I.clearField('company');
    I.fillField('company', 'QA Company');
    I.wait(2);
    I.click('BtnStore');
    I.wait(10);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario menghapus data location', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(10);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman daftar location');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Location');
    //tombol sub tab location
    I.click('//*[@id="Location"]');
    I.wait(10);
    
    I.say('Saya sebagai super admin menyaring daftar location berdasarkan nama perusahaan dari data yang baru diubah');
    I.fillField('FilterSearch', 'QA Company');
    I.wait(5);
    I.see('QA Company');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin menghapus data location');
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    I.click('//*[@id="DeleteItem-0"]');
    I.wait(5);
    //popup
    I.see('Are you sure?')
    //tombol setuju delete
    I.click("//button[contains(text(),'Yes, delete it!')]");
    I.wait(10);
    
    I.say('Saya sebagai super admin menyaring daftar location berdasarkan nama perusahaan dari data yang baru dihapus');
    I.fillField('FilterSearch', 'QA Company');
    I.wait(5);
    I.dontSee('QA Companies');
    I.dontSeeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});