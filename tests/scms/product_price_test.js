Feature('scms_product_price');

Scenario('Saya sebagai super admin melaksanakan skenario melihat daftar product price', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
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

    I.say('Saya sebagai super admin mengakses halaman master data product price');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Product Price List');
    I.wait(3);
    //tombol sub tab product price
    I.click('#ProductPriceList');
    I.wait(7);
    //tombol add product price
    I.seeElement('#id-AddPriceList');
    //dropdown supplier
    I.seeElement('#Input-FilterBySupplier');
    //input search
    I.seeElement('#FilterSearchBrandNameOrComposition');
    //tombol download product price
    I.seeElement('#id-DownloadDataProduct');
    //tombol upload product price
    I.seeElement('#id-UploadDataProduct');
    //tombol set global margin
    I.seeElement('#id-SetGlobalMargin');
    //tabel daftar product price
    I.seeElement('#table-product-price-list');
    I.see('ID');
    I.see('CODE');
    I.see('BRAND NAME');
    I.see('COMPOSITION');
    I.see('MA HOLDER');
    I.see('UOM');
    I.see('SUPPLIER / VENDOR');
    I.see('PURCHASE PRICE');
    I.see('OTHER COST');
    I.see('COGS');
    I.see('GLOBAL MARGIN STATUS');
    I.see('PRICE WITH APJ');
    I.see('PRICE WITHOUT APJ');
    I.see('LAST EDITED BY');
    I.see('LAST MODIFIED');
    I.wait(2);

    I.say('Saya sebagai super admin menyaring daftar product price berdasarkan code/composition/brand name');
    I.fillField('#FilterSearchBrandNameOrComposition', 'PHORL000082');
    I.wait(5);
    I.see('PHORL000082');
    I.clearField('#FilterSearchBrandNameOrComposition');
    I.wait(5);
    I.fillField('#FilterSearchBrandNameOrComposition', 'BUSCOPAN PLUS TABLET');
    I.wait(5);
    I.see('BUSCOPAN PLUS TABLET');
    I.clearField('#FilterSearchBrandNameOrComposition');
    I.wait(5);
    I.fillField('#FilterSearchBrandNameOrComposition', 'HYOSCINE BUTYLBROMIDE 10 MG + PARACETAMOL 500 MG');
    I.wait(5);
    I.see('HYOSCINE BUTYLBROMIDE 10 MG + PARACETAMOL 500 MG');
    I.clearField('#FilterSearchBrandNameOrComposition');
    I.wait(5);

    I.say('Saya sebagai super admin menyaring daftar product price berdasarkan supplier/vendor');
    I.click('#BtnOpen-FilterBySupplier');
    I.wait(3);
    //tombol pilih vendor bunda pratama
    I.click('#Option-1');
    I.wait(5);
    I.see('PT. Bunda Global Pharma');
    I.wait(2);
    //tombol clear dropdwon
    I.click('#BtnClear-FilterBySupplier');
    I.wait(5);
    I.click('#BtnOpen-FilterBySupplier');
    I.wait(3);
    //tombol pilihan vendor lain
    I.click('#Option-0');
    I.wait(5);
    I.dontSee('PT. Bunda Global Pharma');
    I.wait(2);
    //tombol clear dropdwon
    I.click('#BtnClear-FilterBySupplier');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario menambah data product price', ({ I }) => {
    I.amOnPage("admin.staging.farmasipintar.id");
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

    I.say('Saya sebagai super admin mengakses halaman master data product price');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Product Price List');
    I.wait(3);
    //tombol sub tab product price
    I.click('#ProductPriceList');
    I.wait(7);

    I.say('Saya sebagai super admin mengakses halaman tambah product price');
    //tombol add product price
    I.click('AddPriceList');
    I.wait(7);
    I.see('Supplier / Vendor');
    I.seeElement('#Input-supplier');
    I.seeElement('#BtnOpen-supplier');
    I.see('Product');
    I.seeElement('#Input-product');
    I.seeElement('#BtnOpen-product');
    I.see('Purchase Price');
    I.seeElement('#purchase_price');
    I.see('Other Cost');
    I.seeElement('#other_cost');
    I.see('Cogs Rp.');
    I.seeElement('#cogs');
    I.see('With Margin Global');
    I.seeElement('#BtnOpenSelect-global_margin_status');
    I.see('Margin Has Apj Rp.');
    I.seeElement('#margin_has_apj');
    I.see('Margin No Apj Rp.');
    I.seeElement('#margin_no_apj');
    I.see('Price Has Apj Rp.');
    I.seeElement('#price_has_apj');
    I.see('Price No Apj Rp.');
    I.seeElement('#price_no_apj');
    I.seeElement('#id-SaveButton');
    I.seeElement('#id-CancelButton');
    I.click('CancelButton');
    I.wait(7);

    I.say('Saya sebagai super admin menambah data product price baru');
    //tombol add product price
    I.click('AddPriceList');
    I.wait(7);
    I.click('BtnOpen-supplier');
    I.wait(3);
    I.click('#Option-0');
    I.wait(2);
    I.click('BtnOpen-product');
    I.wait(2);
    I.fillField('#Input-product', 'BUSCOPAN PLUS TABLET');
    I.wait(3);
    I.click('#Option-0');
    I.wait(2);
    I.fillField('#purchase_price', 5000);
    I.wait(1);
    I.fillField('#other_cost', 5000);
    I.pressKey('Tab');
    I.wait(3);
    I.see('10,000', '#cogs');
    //set global margin status false
    I.click('BtnOpenSelect-global_margin_status');
    I.wait(2);
    I.click('#Select-global_margin_status-1');
    I.wait(3);
    I.see('Percent Has APJ (%)');
    I.seeElement('#percent_has_apj');
    I.see('Percent No APJ (%)');
    I.seeElement('#percent_no_apj');
    //set apj 10 percent
    I.fillField('#percent_has_apj', 10);
    I.wait(1);
    I.fillField('#percent_no_apj', 10);
    I.pressKey('Tab');
    I.wait(3);
    I.see('1,000', '#margin_has_apj');
    I.see('1,100', '#margin_no_apj');
    I.see('11,000', '#price_has_apj');
    I.see('12,100', '#price_no_apj');
    //set global margin status true
    I.click('BtnOpenSelect-global_margin_status');
    I.wait(2);
    I.click('#Select-global_margin_status-0');
    I.wait(3);
    I.see('500', '#margin_has_apj');
    I.see('525', '#margin_no_apj');
    I.see('10,500', '#price_has_apj');
    I.see('11,025', '#price_no_apj');
    I.wait(5);
    //tombol save
    I.click('SaveButton');
    I.wait(10);

    I.say('Saya sebagai super admin mengecek data product price yang baru ditambahkan');
    I.click('#BtnOpen-FilterBySupplier');
    I.wait(3);
    //tombol pilih vendor test
    I.click('#Option-0');
    I.fillField('#FilterSearchBrandNameOrComposition', 'BUSCOPAN PLUS TABLET');
    I.wait(5);
    I.see('BUSCOPAN PLUS TABLET');
    I.see('10,500');
    I.see('11,025');
    I.see('QA Cakep');
    I.clearField('#FilterSearchBrandNameOrComposition');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario memperbarui data product price', ({I}) => {
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

    I.say('Saya sebagai super admin mengakses halaman master data product price');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Product');
    I.wait(3);
    //tombol sub tab product price
    I.click('#ProductPriceList');
    I.wait(7);

    I.say('Saya sebagai super admin mengakses halaman update product price');
    I.click('#BtnOpen-FilterBySupplier');
    I.wait(3);
    //tombol pilih vendor test
    I.click('#Option-0');
    I.fillField('#FilterSearchBrandNameOrComposition', 'BUSCOPAN PLUS TABLET');
    I.wait(5);
    I.see('BUSCOPAN PLUS TABLET');
    I.see('10,500');
    I.see('11,025');
    I.see('QA Cakep');
    //tombol actions
    I.click('#MenuItem-0');
    I.wait(3);
    //tombol edit
    I.click('#UpdatePrice-0');
    I.wait(7);
    I.see('Supplier / Vendor');
    I.seeElement('#Input-supplier');
    I.seeElement('#BtnOpen-supplier');
    I.seeInField('#Input-supplier', '[ aaa ] - test aja');
    I.see('Product');
    I.seeElement('#Input-product');
    I.seeElement('#BtnOpen-product');
    I.seeInField('#Input-product', '[ PHORL000081 ] - BUSCOPAN PLUS TABLET - BOX');
    I.see('Purchase Price');
    I.seeElement('#purchase_price');
    I.seeInField('#purchase_price', '5,000');
    I.see('Other Cost');
    I.seeElement('#other_cost');
    I.seeInField('#other_cost', '5,000');
    I.see('Cogs Rp.');
    I.seeElement('#cogs');
    I.see('With Margin Global');
    I.seeElement('#BtnOpenSelect-global_margin_status');
    I.seeInField('#other_cost', '5,000');
    I.see('Margin Has Apj Rp.');
    I.seeElement('#margin_has_apj');
    I.see('Margin No Apj Rp.');
    I.seeElement('#margin_no_apj');
    I.see('Price Has Apj Rp.');
    I.seeElement('#price_has_apj');
    I.see('Price No Apj Rp.');
    I.seeElement('#price_no_apj');
    I.seeElement('#id-UpdateButton');
    I.seeElement('#id-CancelButton');
    I.click('CancelButton');
    I.wait(7);

    I.say('Saya sebagai super admin memperbarui data product price');
    I.click('#BtnOpen-FilterBySupplier');
    I.wait(3);
    //tombol pilih vendor test
    I.click('#Option-0');
    I.fillField('#FilterSearchBrandNameOrComposition', 'BUSCOPAN PLUS TABLET');
    I.wait(5);
    I.see('BUSCOPAN PLUS TABLET');
    I.see('10,500');
    I.see('11,025');
    I.see('QA Cakep');
    //tombol actions
    I.click('#MenuItem-0');
    I.wait(3);
    //tombol edit
    I.click('#UpdatePrice-0');
    I.wait(7);
    I.clearField('#purchase_price');
    I.clearField('#other_cost');
    I.wait(1);
    I.fillField('#purchase_price', 10000);
    I.wait(1);
    I.fillField('#other_cost', 10000);
    I.pressKey('Tab');
    I.wait(3);
    I.see('20,000', '#cogs');
    I.click('BtnOpenSelect-global_margin_status');
    I.wait(2);
    I.click('#Select-global_margin_status-0');
    I.wait(3);
    I.see('1,000', '#margin_has_apj');
    I.see('1,050', '#margin_no_apj');
    I.see('21,000', '#price_has_apj');
    I.see('22,050', '#price_no_apj');
    //tombol update
    I.click('#id-UpdateButton');
    I.wait(7);

    I.say('Saya sebagai super admin mengecek data product price yang baru diubah');
    I.click('#BtnOpen-FilterBySupplier');
    I.wait(3);
    //tombol pilih vendor test
    I.click('#Option-0');
    I.fillField('#FilterSearchBrandNameOrComposition', 'BUSCOPAN PLUS TABLET');
    I.wait(5);
    I.see('BUSCOPAN PLUS TABLET');
    I.see('21,000');
    I.see('22,050');
    I.see('QA Cakep');
    I.wait(3);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');

    I.say('Saya sebagai super admin dapat mengatur global margin price (pending)');
});

Scenario('Saya sebagai super admin melaksanakan skenario menghapus data product price', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman master data product price');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Product');
    I.wait(3);
    //tombol sub tab product price
    I.click('#ProductPriceList');
    I.wait(7);

    I.say('Saya sebagai super admin menghapus data product price');
    //buat product price baru terlebih dahulu untuk running scenario ini
    I.click('#BtnOpen-FilterBySupplier');
    I.wait(3);
    //tombol pilih vendor test
    I.click('#Option-0');
    I.fillField('#FilterSearchBrandNameOrComposition', 'BUSCOPAN PLUS TABLET');
    I.wait(5);
    //tombol actions
    I.click('#MenuItem-0');
    I.wait(3);
    //tombol delete
    I.click('#DeletePrice-0');
    I.wait(7);
    //popup
    I.see('Are you sure?')
    //tombol setuju delete
    I.click("//button[contains(text(),'Yes, delete it!')]");
    I.wait(7);

    I.click('#BtnOpen-FilterBySupplier');
    I.wait(3);
    //tombol pilih vendor test
    I.click('#Option-0');
    I.fillField('#FilterSearchBrandNameOrComposition', 'BUSCOPAN PLUS TABLET');
    I.wait(5);
    I.dontSee('BUSCOPAN PLUS TABLET');
    I.wait(3);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');

    I.say('Saya sebagai super admin dapat mengunduh data product price (skipped)');
    I.say('Saya sebagai super admin dapat mengunggah data product price (skipped)');
});