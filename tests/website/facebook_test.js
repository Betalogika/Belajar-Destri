Feature('website_facebook');

Scenario('Melihat halaman facebook', ({ I }) => {
    I.amOnPage("web.facebook.com");
    I.wait(5);
    I.seeElement('//*[@id="content"]/div/div/div/div[1]/div/img');
    I.see('Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.');
    I.seeAttributesOnElements('//*[@id="content"]/div/div/div/div[1]/h2', {class: '_8eso'});
    //form pendaftaran
    I.seeElement('//*[@id="email"]');
    I.seeElement('//*[@id="pass"]');
    I.see('Masuk');
    //cek2
    I.see('Lupa Kata Sandi?');
    I.seeElement('//html/body/div[1]/div[1]/div[1]/div/div/div/div[2]/div/div[1]/form/div[3]/a')
    I.see('Buat Akun Baru');
    I.see('Buat Halaman');
    I.seeAttributesOnElements('//*[@id="reg_pages_msg"]/a', {href: 'https://web.facebook.com/pages/create/?ref_type=registration_form', class: '_8esh'});
    I.see('untuk selebriti, merek, atau bisnis.');


});