Feature('scms_um');

Scenario('Saya sebagai super admin melaksanakan skenario melihat daftar user', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(5);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman daftar user');
    I.see('User Management');
    //tombol tab user management
    I.click('//*[@id="UserManagement"]');
    I.see('Users');
    //tombol sub tab user
    I.click('//*[@id="Users"]');
    I.wait(5);
    //tombol add user
    I.seeElement('//*[@id="usersAddForm"]');
    //dropdown status
    I.seeElement('//*[@id="BtnOpenSelect-UsersFilterStatus"]');
    //input search
    I.seeElement('//*[@id="usersFilterSearch"]');
    //tabel daftar user
    I.seeElement('//*[@id="table-users"]');
    I.see('ID');
    I.see('NAME');
    I.see('EMAIL');
    I.see('STATUS');

    I.say('Saya sebagai super admin menyaring daftar user berdasarkan name/email');
    I.fillField('usersFilterSearch', 'dtk@klinikpintar.id');
    I.wait(3);
    I.see('dtk@klinikpintar.id');
    I.clearField('usersFilterSearch');
    I.fillField('usersFilterSearch', 'QA Cakep');
    I.wait(3);
    I.see('QA Cakep');
    I.clearField('usersFilterSearch');
    I.wait(1);

    I.say('Saya sebagai super admin menyaring daftar user berdasarkan status');
    I.click('BtnOpenSelect-UsersFilterStatus');
    //tombol pilihan aktif
    I.click('//*[@id="Select-UsersFilterStatus-0"]');
    I.wait(3);
    I.fillField('usersFilterSearch', 'dtk@klinikpintar.id');
    I.wait(3);
    I.see('dtk@klinikpintar.id');
    I.clearField('usersFilterSearch');
    I.wait(3);
    //tombol clear dropdwon
    I.click('#BtnClearSelect-UsersFilterStatus');
    I.wait(3);
    //tombol pilihan tidak aktif
    I.click('//*[@id="Select-UsersFilterStatus-1"]');
    I.wait(3);
    I.fillField('usersFilterSearch', 'dtk@klinikpintar.id');
    I.wait(3);
    I.dontSee('dtk@klinikpintar.id');
    //tombol clear dropdwon
    I.click('#BtnClearSelect-UsersFilterStatus');
    I.fillField('usersFilterSearch', 'dtk@klinikpintar.id');
    I.wait(3);
    I.see('dtk@klinikpintar.id');
    I.clearField('usersFilterSearch');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario memperbarui data user', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(5);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman daftar user');
    I.see('User Management');
    //tombol tab user management
    I.click('//*[@id="UserManagement"]');
    I.see('Users');
    //tombol sub tab user
    I.click('//*[@id="Users"]');
    I.wait(5);

    I.say('Saya sebagai super admin dapat update data user');
    I.fillField('usersFilterSearch', 'qat@klinikpintar.id');
    I.wait(3);
    I.see('qat@klinikpintar.id');
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    I.see('Name');
    I.seeElement('//*[@id="name"]');
    I.see('Email');
    I.seeElement('//*[@id="email"]');
    I.seeInField('email', 'qat@klinikpintar.id');
    I.see('Password');
    I.seeElement('//*[@id="password"]');
    I.see('Password Confirmation');
    I.seeElement('//*[@id="passwordConfirmation"]');
    I.click('cancel');
    I.wait(5);
    I.fillField('usersFilterSearch', 'qat@klinikpintar.id');
    I.wait(3);
    I.see('qat@klinikpintar.id');
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    I.see('Name');
    I.seeElement('//*[@id="name"]');
    I.see('Email');
    I.seeElement('//*[@id="email"]');
    I.seeInField('email', 'qat@klinikpintar.id');
    I.see('Password');
    I.seeElement('//*[@id="password"]');
    I.see('Password Confirmation');
    I.seeElement('//*[@id="passwordConfirmation"]');
    I.clearField('name');
    I.fillField('name', 'QA Test');
    I.clearField('password');
    I.fillField('password', secret('QaTeam12345'));
    I.clearField('passwordConfirmation');
    I.fillField('passwordConfirmation', secret('QaTeam12345'));
    I.click('submit');
    I.wait(5);
    I.fillField('usersFilterSearch', 'qat@klinikpintar.id');
    I.wait(3);
    I.see('qat@klinikpintar.id');
    I.see('QA Test');
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    I.click('//*[@id="EditItem-0"]');
    I.wait(5);
    I.clearField('name');
    I.fillField('name', 'QA Account');
    I.clearField('password');
    I.fillField('password', secret('QaTeam12345'));
    I.clearField('passwordConfirmation');
    I.fillField('passwordConfirmation', secret('QaTeam12345'));
    I.click('submit');
    I.wait(5);
    I.fillField('usersFilterSearch', 'qat@klinikpintar.id');
    I.wait(3);
    I.see('qat@klinikpintar.id');
    I.see('QA Account');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario memperbarui role user', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(5);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman daftar user');
    I.see('User Management');
    //tombol tab user management
    I.click('//*[@id="UserManagement"]');
    I.see('Users');
    //tombol sub tab user
    I.click('//*[@id="Users"]');
    I.wait(5);

    I.say('Saya sebagai super admin dapat update role user');
    I.fillField('usersFilterSearch', 'qat@klinikpintar.id');
    I.wait(3);
    I.see('qat@klinikpintar.id');
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    I.click('//*[@id="AccessModule-0"]');
    I.wait(5);
    //Dropdown status
    I.seeElement('//*[@id="BtnOpenSelect-UserAccessGroupFilterStatus"]');
    //Input search
    I.seeElement('//*[@id="UserAccessGroupFilterSearch"]');
    //Button back
    I.seeElement('//*[@id="BtnBack"]');

    //filter by uncheck
    I.see('Procurement User');
    I.click('BtnOpenSelect-UserAccessGroupFilterStatus');
    I.wait(1);
    I.click('//*[@id="Select-UserAccessGroupFilterStatus-1"]');
    I.wait(3);
    I.dontSee('Procurement User');
    I.click('#BtnClearSelect-UserAccessGroupFilterStatus');
    I.wait(3);
    I.see('Procurement User');
    I.uncheckOption('CheckBoxGroupAccess-2-ProcurementUser');
    I.click('BtnOpenSelect-UserAccessGroupFilterStatus');
    I.wait(1);
    I.click('//*[@id="Select-UserAccessGroupFilterStatus-1"]');
    I.wait(3);
    I.see('Procurement User');
    I.click('#BtnClearSelect-UserAccessGroupFilterStatus');
    I.wait(3);
    I.click('//*[@id="BtnBack"]');
    I.wait(5);

    I.fillField('usersFilterSearch', 'qat@klinikpintar.id');
    I.wait(3);
    I.see('qat@klinikpintar.id');
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    I.click('//*[@id="AccessModule-0"]');
    I.wait(5);
    I.click('BtnOpenSelect-UserAccessGroupFilterStatus');
    I.wait(1);
    I.click('//*[@id="Select-UserAccessGroupFilterStatus-1"]');
    I.wait(3);
    I.see('Procurement User');
    I.click('#BtnClearSelect-UserAccessGroupFilterStatus');
    I.wait(3);
    I.see('Procurement User');
    I.checkOption('CheckBoxGroupAccess-2-ProcurementUser');
    I.click('BtnOpenSelect-UserAccessGroupFilterStatus');
    I.wait(1);
    I.click('//*[@id="Select-UserAccessGroupFilterStatus-1"]');
    I.wait(3);
    I.dontSee('Procurement User');
    I.click('#BtnClearSelect-UserAccessGroupFilterStatus');
    I.wait(3);
    I.click('//*[@id="BtnBack"]');
    I.wait(5);

    I.fillField('usersFilterSearch', 'qat@klinikpintar.id');
    I.wait(3);
    I.see('qat@klinikpintar.id');
    I.click('//*[@id="MenuItem-0"]');
    I.wait(3);
    I.click('//*[@id="AccessModule-0"]');
    I.wait(5);
    I.see('Procurement User');
    I.click('BtnOpenSelect-UserAccessGroupFilterStatus');
    I.wait(1);
    I.click('//*[@id="Select-UserAccessGroupFilterStatus-1"]');
    I.wait(3);
    I.dontSee('Procurement User');

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(5);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario memperbarui akses role', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');

    I.say('Saya sebagai super admin melakukan login');
    I.see('Username');
    I.fillField('//*[@id="email"]', 'qa@klinikpintar.id');
    I.see('Password');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('signin');
    I.wait(5);
    I.see('Dashboard');

    I.say('Saya sebagai super admin mengakses halaman daftar role');
    I.see('User Management');
    //tombol tab user management
    I.click('//*[@id="UserManagement"]');
    I.see('Group Access');
    //tombol sub tab roles
    I.click('//*[@id="GroupAccess"]');
    I.wait(5);
    //input search
    I.seeElement('//*[@id="GroupAccessFilterSearch"]');
    //table daftar role
    I.seeElement('//*[@id="table-groupaccess"]');
    I.see('NAME');

    I.say('Saya sebagai super admin memberikan akses menu User management pada procurement');
    I.click('Btn-Detail-1');
    I.wait('3');
    I.see('User Management');
    I.dontSeeCheckboxIsChecked('access-50');
    I.checkOption('access-50');
    I.seeCheckboxIsChecked('access-50');

    I.say('Saya sebagai super admin menghilangkan akses menu User management pada procurement');
    //tombol sub tab user
    I.click('//*[@id="Users"]');
    I.wait(5);
    //tombol sub tab roles
    I.click('//*[@id="GroupAccess"]');
    I.wait(5);
    I.click('Btn-Detail-1');
    I.wait('3');
    I.see('User Management');
    I.seeCheckboxIsChecked('access-50');
    I.uncheckOption('access-50');
    I.dontSeeCheckboxIsChecked('access-50');

    //tombol sub tab user
    I.click('//*[@id="Users"]');
    I.wait(5);
    //tombol sub tab roles
    I.click('//*[@id="GroupAccess"]');
    I.wait(5);
    I.click('Btn-Detail-1');
    I.wait('3');
    I.see('User Management');
    I.dontSeeCheckboxIsChecked('access-50');
    
    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');

    I.say('Saya sebagai super admin dapat membuat user baru (skipped)');
    I.say('Saya sebagai user baru dapat login (skipped)');
});