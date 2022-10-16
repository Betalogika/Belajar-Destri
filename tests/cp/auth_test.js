Feature('cp_auth');

Scenario('Saya sebagai user mengakses halaman login dan forgot password di corporate portal', ({ I }) => {
    I.amOnPage("staging.company.klinikpintar.id/login");
    I.wait(5);
    I.see('Masuk ke akun Anda');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/p', {class: 'mb-4 text-primary font-bold text-xl'});
    //check username
    I.see('Email / Username');
    I.seeElement('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[1]/label/div/div[1]/strong');
    I.seeAttributesOnElements('//*[@id="username"]', {placeholder: 'Masukkan email / username', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    //check password
    I.see('Password');
    I.seeElement('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/label/div/div[1]/strong');
    I.seeAttributesOnElements('//*[@id="password"]', {placeholder: 'Masukkan password', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    //check forgot password
    I.see('Lupa password?');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/label/div/div[2]/a', {href: 'https://staging.company.klinikpintar.id/forgot-password'});
    //check tombol login
    I.see('Masuk');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/button', {class: 'px-4 py-2 rounded-md bg-primary text-white w-full border border-transparent mt-4'});
    //check footer
    I.see('Ketentuan Penggunaan');
    I.see('Kebijakan Privasi');

    I.say('Saya sebagai user mengakses halaman forgot password');
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/label/div/div[2]/a');
    I.wait(3);
    I.see('Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/div', {class: 'mb-4 text-sm text-gray-600'});
    //check email
    I.see('Email');
    I.seeElement('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[1]/label/div/div[1]/strong');
    I.seeAttributesOnElements('//*[@id="email"]', {placeholder: 'Masukkan email anda', class: 'w-full form-input rounded-md border-gray-300 focus:border-primary'});
    //check tombol kembali
    I.see('Kembali');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/button[1]', {class: 'px-4 py-2 border border-primary rounded-md text-gray-600'});
    //check tombol reset password
    I.see('Email Password Reset Link');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/button[2]', {class: 'px-4 py-2 rounded-md bg-primary text-white border border-transparent'});
    //check footer
    I.see('Ketentuan Penggunaan');
    I.see('Kebijakan Privasi');
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/button[1]');
    I.wait(3);
    I.see('Masuk ke akun Anda');
});

Scenario('Saya sebagai user gagal login di corporate portal karena email/username dan password tidak diisi', ({ I }) => {
    I.amOnPage("staging.company.klinikpintar.id/login");
    I.wait(5);
    I.see('Masuk ke akun Anda');
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/button');
    I.wait(3);
    I.see('The username field is required.');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[1]/div[2]/p', {class: 'text-sm text-red-600'});
    I.see('The password field is required.');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/div[2]/p', {class: 'text-sm text-red-600'});
});

Scenario('Saya sebagai user gagal login di corporate portal karena email/username tidak terdaftar', ({ I }) => {
    I.amOnPage("staging.company.klinikpintar.id/login");
    I.wait(5);
    I.see('Masuk ke akun Anda');
    I.fillField('//*[@id="username"]', 'johntest');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/button');
    I.wait(3);
    I.see('These credentials do not match our records.');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[1]/div[2]/p', {class: 'text-sm text-red-600'});
});

Scenario('Saya sebagai user gagal login di corporate portal karena password salah', ({ I }) => {
    I.amOnPage("staging.company.klinikpintar.id/login");
    I.wait(5);
    I.see('Masuk ke akun Anda');
    I.fillField('//*[@id="username"]', 'qacakep');
    I.fillField('//*[@id="password"]', secret('jhontest'));
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/button');
    I.wait(3);
    I.see('These credentials do not match our records.');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/div[2]/p', {class: 'text-sm text-red-600'});
});

Scenario('Saya sebagai user login dan logout di corporate portal', ({ I }) => {
    I.amOnPage("staging.company.klinikpintar.id/login");
    I.wait(5);
    I.see('Masuk ke akun Anda');
    I.fillField('//*[@id="username"]', 'qacakep');
    I.fillField('//*[@id="password"]', secret('QaTeam12345'));
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/button');
    I.wait(3);
    I.see('Company Portal');
    //bottom menu
    I.click('//*[@id="app"]/div/div[1]/div[2]/div[1]/div/div[2]');
    I.click('//*[@id="app"]/div/div[1]/div[2]/div[3]/div/button');
    I.wait(5);
    I.see('Masuk ke akun Anda');
});

Scenario('Saya sebagai user melakukan reset password di corporate portal', ({ I }) => {
    I.amOnPage("staging.company.klinikpintar.id/login");
    I.wait(5);
    I.see('Masuk ke akun Anda');
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/label/div/div[2]/a');
    I.wait(3);

    I.say('Saya sebagai user tidak bisa melakukan reset password dengan tidak mengisi email');
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/button[2]');
    I.wait(3);
    I.see('The email field is required.');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[1]/div[2]/p', {class: 'text-sm text-red-600'});

    I.say('Saya sebagai user tidak bisa melakukan reset password dengan email yang tidak terdaftar');
    I.fillField('//*[@id="email"]', 'qat@klinikpintar.id');
    I.wait(1);
    I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/button[2]');
    I.wait(3);
    I.see('We can\'t find a user with that email address.');
    I.seeAttributesOnElements('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[1]/div[2]/p', {class: 'text-sm text-red-600'});

    //lengkapi detect success case ketika forgot password udah diperbaiki
    // I.say('Saya sebagai user bisa melakukan reset password dengan email yang terdaftar');
    // I.fillField('//*[@id="email"]', 'suryo@klinikpintar.id');
    // I.wait(1);
    // I.click('//*[@id="app"]/div/div[2]/div/div/div[1]/div/form/div[2]/button[2]');
    // I.wait(3);
});