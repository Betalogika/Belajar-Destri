Feature('scms_auth');

Scenario('Saya sebagai user gagal login di scm system karena email tidak terdaftar', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');
    I.see('Username');
    I.fillField('email', 'johntest@klinikpintar.id');
    I.see('Password');
    I.fillField('password', secret('Medigo###'));
    I.click('signin');
    I.wait(2);
    I.see('Warning');
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai user gagal login di scm system karena password salah', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');
    I.see('Username');
    I.fillField('email', 'superior@klinikpintar.id');
    I.see('Password');
    I.clearField('password');
    I.fillField('password', secret('johntest'));
    I.click('signin');
    I.wait(2);
    I.see('Warning');
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai superior login dan logout di scm system', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');
    I.see('Username');
    I.fillField('email', 'superior@klinikpintar.id');
    I.see('Password');
    I.fillField('password', secret('Medigo###'));
    I.click('signin');
    I.wait(5);
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(5);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai purchase user login dan logout di scm system', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');
    I.see('Username');
    I.fillField('email', 'purchase@klinikpintar.id');
    I.see('Password');
    I.fillField('password', secret('Medigo###'));
    I.click('signin');
    I.wait(10);
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin login dan logout di scm system', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
    I.wait(5);
    I.see('Supply Chain Management System');
    I.see('Username');
    I.fillField('email', 'dtk@klinikpintar.id');
    I.see('Password');
    I.fillField('password', secret('Medigo###'));
    I.click('signin');
    I.wait(10);
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(10);
    I.see('Supply Chain Management System');
});