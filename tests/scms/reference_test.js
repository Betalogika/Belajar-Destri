Feature('scms_reference');

Scenario('Saya sebagai super admin melaksanakan skenario melihat daftar reference', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman daftar reference');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Reference');
    //tombol sub tab reference
    I.click('//*[@id="Reference"]');
    I.wait(10);
    //tombol add reference
    I.seeElement('//*[@id="id-AddReference"]');
    //input search
    I.seeElement('//*[@id="FilterSearchReference"]');
    //tabel daftar reference
    I.seeElement('//*[@id="table-reference"]');
    I.see('NAME');
    I.see('DESCRIPTION');

    I.say('Saya sebagai super admin menyaring daftar reference berdasarkan nama');
    I.fillField('FilterSearchReference', 'Payment Term');
    I.wait(5);
    I.see('Payment Term');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario menambah data reference', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman daftar reference');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Reference');
    //tombol sub tab reference
    I.click('//*[@id="Reference"]');
    I.wait(10);
    
    I.say('Saya sebagai super admin mengakses halaman tambah reference');
    //tombol add reference
    I.click('AddReference');
    I.wait(5);
    I.see('Reference Name');
    I.seeElement('//*[@id="name"]');
    I.see('Description Of Name Reference');
    I.seeElement('//*[@id="description"]');
    //tombol cancel
    I.seeElement('//*[@id="id-BtnCancel"]');
    //tombol save
    I.seeElement('//*[@id="id-BtnStore"]');
    I.click('BtnCancel');
    I.wait(10);

    I.say('Saya sebagai super admin menambah data reference');
    //tombol add reference
    I.click('AddReference');
    I.wait(5);
    //name
    I.clearField('name');
    I.fillField('name', 'QA Reference');
    I.wait(2);
    //description
    I.clearField('description');
    I.fillField('description', 'QA Reference Description');
    I.wait(2);
    //tombol save
    I.click('BtnStore');
    I.wait(15);

    I.say('Saya sebagai super admin menyaring daftar reference berdasarkan nama dari data yang baru ditambahkan');
    I.fillField('FilterSearchReference', 'QA Reference');
    I.wait(5);
    I.see('QA Reference');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario mengubah data reference', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman daftar reference');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Reference');
    //tombol sub tab reference
    I.click('//*[@id="Reference"]');
    I.wait(10);
    
    I.say('Saya sebagai super admin menyaring daftar reference berdasarkan nama dari data yang baru ditambahkan');
    I.fillField('FilterSearchReference', 'QA Reference');
    I.wait(5);
    I.see('QA Reference');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin mengakses halaman ubah data');
    //menu action item
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    //menu edit action item
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    I.see('Reference Name');
    I.seeElement('//*[@id="name"]');
    I.seeInField('name', 'QA Reference');
    I.see('Description Of Name Reference');
    I.seeElement('//*[@id="description"]');
    I.seeInField('description', 'QA Reference Description');
    //tombol cancel
    I.seeElement('//*[@id="id-BtnCancel"]');
    //tombol save
    I.seeElement('//*[@id="id-BtnStore"]');
    I.click('BtnCancel');
    I.wait(10);

    I.say('Saya sebagai super admin mengubah data yang baru ditambahkan');
    I.fillField('FilterSearchReference', 'QA Reference');
    I.wait(5);
    I.see('QA Reference');
    I.seeElement('//*[@id="MenuItem-0"]');
    //menu action item
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    //menu edit action item
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    //reference name
    I.clearField('name');
    I.fillField('name', 'QA Reference Data');
    I.wait(2);
    //tombil save
    I.click('BtnStore');
    I.wait(15);
    
    I.say('Saya sebagai super admin menyaring daftar reference berdasarkan nama dari data yang baru diubah');
    I.fillField('FilterSearchReference', 'QA Reference Data');
    I.wait(5);
    I.see('QA Reference Data');
    I.seeElement('//*[@id="MenuItem-0"]');
    //menu action item
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    //menu edit action item
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    //reference name
    I.clearField('name');
    I.fillField('name', 'QA Reference');
    I.wait(2);
    //tombil save
    I.click('BtnStore');
    I.wait(15);

    I.say('Saya sebagai super admin mengecek data yang baru diubah');
    I.fillField('FilterSearchReference', 'QA Reference');
    I.wait(5);
    I.see('QA Reference');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario menambah reference item', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman daftar reference');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Reference');
    //tombol sub tab reference
    I.click('//*[@id="Reference"]');
    I.wait(10);
    
    I.say('Saya sebagai super admin menyaring daftar reference berdasarkan nama dari data yang baru ditambahkan');
    I.fillField('FilterSearchReference', 'QA Reference');
    I.wait(5);
    I.see('QA Reference');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin mengakses halaman rincian data');
    //menu action item
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    //menu detail action item
    I.click('//*[@id="Detail-0"]');
    I.wait(5);
    //Input search
    I.seeElement('//*[@id="FilterSearchReferenceItem"]');
    //tombol back
    I.seeElement('//*[@id="id-BackReferenceItem"]');
    //tombol add reference item
    I.seeElement('//*[@id="id-AddReferenceItem"]');
    //tabel daftar reference item
    I.seeElement('//*[@id="table-reference-item"]');
    I.see('ID');
    I.see('ITEM NAME');
    I.see('DESCRIPTION');
    I.see('STATUS');
    
    I.say('Saya sebagai super admin mengakses halaman tambah reference item');
    //tombol add reference item
    I.click('AddReferenceItem');
    I.wait(5);
    I.see('Reference Item Name');
    I.seeElement('//*[@id="item"]');
    I.see('Abbreviation');
    I.seeElement('//*[@id="abbreviation"]');
    I.see('Description');
    I.seeElement('//*[@id="description"]');
    //tombol cancel
    I.seeElement('//*[@id="id-BtnCancel"]');
    //tombol save
    I.seeElement('//*[@id="id-BtnStore"]');
    I.click('BtnCancel');
    I.wait(10);

    I.say('Saya sebagai super admin menambah data reference item');
    //tombol add reference
    I.click('AddReferenceItem');
    I.wait(5);
    //name
    I.clearField('item');
    I.fillField('item', 'QA Reference Item');
    I.wait(2);
    //abbreviation
    I.clearField('abbreviation');
    I.fillField('abbreviation', 'QARI');
    I.wait(2);
    //description
    I.clearField('description');
    I.fillField('description', 'QA Reference Item Description');
    I.wait(2);
    //tombol save
    I.click('BtnStore');
    I.wait(15);

    I.say('Saya sebagai super admin menyaring daftar reference item berdasarkan nama dari data yang baru ditambahkan');
    I.fillField('FilterSearchReferenceItem', 'QA Reference Item');
    I.wait(5);
    I.see('QA Reference Item');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario mengubah reference item yang baru ditambahkan', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman daftar reference');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Reference');
    //tombol sub tab reference
    I.click('//*[@id="Reference"]');
    I.wait(10);
    
    I.say('Saya sebagai super admin menyaring daftar reference berdasarkan nama dari data yang baru ditambahkan');
    I.fillField('FilterSearchReference', 'QA Reference');
    I.wait(5);
    I.see('QA Reference');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin mengakses halaman rincian data');
    //menu action item
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    //menu detail action item
    I.click('//*[@id="Detail-0"]');
    I.wait(5);
    
    I.say('Saya sebagai super admin menyaring daftar reference item berdasarkan nama dari data yang baru ditambahkan');
    I.fillField('FilterSearchReferenceItem', 'QA Reference Item');
    I.wait(5);
    I.see('QA Reference Item');
    I.seeElement('//*[@id="MenuItem-0"]');
    
    I.say('Saya sebagai super admin mengakses halaman ubah data');
    //menu action item
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    //menu edit action item
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    I.see('Reference Item Name');
    I.seeElement('//*[@id="item"]');
    I.seeInField('item', 'QA Reference Item');
    I.see('Abbreviation');
    I.seeElement('//*[@id="abbreviation"]');
    I.seeInField('abbreviation', 'QARI');
    I.see('Description');
    I.seeElement('//*[@id="description"]');
    I.seeInField('description', 'QA Reference Item Description');
    //tombol cancel
    I.seeElement('//*[@id="id-BtnCancel"]');
    //tombol save
    I.seeElement('//*[@id="id-BtnStore"]');
    I.click('BtnCancel');
    I.wait(15);

    I.say('Saya sebagai super admin mengubah data reference item yang baru ditambahkan');
    I.fillField('FilterSearchReferenceItem', 'QA Reference Item');
    I.wait(5);
    I.see('QA Reference Item');
    I.seeElement('//*[@id="MenuItem-0"]');
    //menu action item
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    //menu edit action item
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    //name
    I.clearField('item');
    I.fillField('item', 'QA Reference Item Data');
    I.wait(2);
    //tombol save
    I.click('BtnStore');
    I.wait(15);

    I.say('Saya sebagai super admin menyaring daftar reference item berdasarkan nama dari data yang baru diubah');
    I.fillField('FilterSearchReferenceItem', 'QA Reference Item Data');
    I.wait(5);
    I.see('QA Reference Item Data');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin mengubah data reference item yang baru diubah');
    //menu action item
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    //menu edit action item
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    //name
    I.clearField('item');
    I.fillField('item', 'QA Reference Item');
    I.wait(2);
    //tombol save
    I.click('BtnStore');
    I.wait(15);

    I.say('Saya sebagai super admin menyaring daftar reference item berdasarkan nama dari data yang baru diubah');
    I.fillField('FilterSearchReferenceItem', 'QA Reference Item');
    I.wait(5);
    I.see('QA Reference Item');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario menghapus data reference item', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman daftar reference');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Reference');
    //tombol sub tab reference
    I.click('//*[@id="Reference"]');
    I.wait(10);
    
    I.say('Saya sebagai super admin menyaring daftar reference berdasarkan nama dari data yang baru ditambahkan');
    I.fillField('FilterSearchReference', 'QA Reference');
    I.wait(5);
    I.see('QA Reference');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin mengakses halaman rincian data');
    //menu action item
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    //menu detail action item
    I.click('//*[@id="Detail-0"]');
    I.wait(5);
    
    I.say('Saya sebagai super admin menyaring daftar reference item berdasarkan nama dari data yang baru ditambahkan');
    I.fillField('FilterSearchReferenceItem', 'QA Reference Item');
    I.wait(5);
    I.see('QA Reference Item');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin menghapus data reference item');
    //menu action item
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    //menu delete action item
    I.click('//*[@id="DeleteItem-0"]');
    I.wait(5);
    //popup
    I.see('Are you sure?')
    //tombol setuju delete
    I.click("//button[contains(text(),'Yes, delete it!')]");
    I.wait(15);
    
    I.say('Saya sebagai super admin menyaring daftar reference item berdasarkan nama reference item dari data yang baru dihapus');
    I.fillField('FilterSearchReferenceItem', 'QA Reference Item');
    I.wait(5);
    I.dontSee('QA Reference Item');
    I.dontSeeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario menghapus data reference', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman daftar reference');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Reference');
    //tombol sub tab reference
    I.click('//*[@id="Reference"]');
    I.wait(10);
    
    I.say('Saya sebagai super admin menyaring daftar reference berdasarkan nama dari data yang baru ditambahkan');
    I.fillField('FilterSearchReference', 'QA Reference');
    I.wait(5);
    I.see('QA Reference');
    I.seeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin menghapus data reference');
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    I.click('//*[@id="DeleteItem-0"]');
    I.wait(5);
    //popup
    I.see('Are you sure?')
    //tombol setuju delete
    I.click("//button[contains(text(),'Yes, delete it!')]");
    I.wait(10);
    
    I.say('Saya sebagai super admin menyaring daftar reference berdasarkan nama reference dari data yang baru dihapus');
    I.fillField('FilterSearchReference', 'QA Reference');
    I.wait(5);
    I.dontSee('QA Reference');
    I.dontSeeElement('//*[@id="MenuItem-0"]');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});