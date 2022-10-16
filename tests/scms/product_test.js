Feature('scms_product');

Scenario('Saya sebagai super admin melaksanakan skenario melihat daftar product', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman master data product');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Product');
    I.wait(3);
    //tombol sub tab product
    I.click('#Product');
    I.wait(7);
    //tombol add product
    I.seeElement('#Product');
    //dropdown status
    I.seeElement('#BtnOpenSelect-FilterStatus');
    //dropdown product category
    I.seeElement('#Input-FilterByCategory');
    //input search
    I.seeElement('#FilterItemCodeOrBrandName');
    //tabel daftar product
    I.seeElement('#table-product');
    I.see('Code');
    I.see('Brand Name');
    I.see('Category');
    I.see('Type Product');
    I.see('Variant');
    I.see('Packing');
    I.see('UoM');
    I.see('Convertion');
    I.see('COMPOSITION');
    I.see('MA HOLDER');
    I.see('STATUS');
    I.see('LAST EDITED BY');
    I.see('LAST MODIFIED');
    I.wait(2);

    I.say('Saya sebagai super admin menyaring daftar product berdasarkan code/brand name');
    I.fillField('#FilterItemCodeOrBrandName', 'PHORL000082');
    I.wait(5);
    I.see('PHORL000082');
    I.clearField('#FilterItemCodeOrBrandName');
    I.wait(5);
    I.fillField('#FilterItemCodeOrBrandName', 'BUSCOPAN PLUS TABLET');
    I.wait(5);
    I.see('BUSCOPAN PLUS TABLET');
    I.clearField('#FilterItemCodeOrBrandName');
    I.wait(5);

    I.say('Saya sebagai super admin menyaring daftar product berdasarkan status');
    I.click('#BtnOpenSelect-FilterStatus');
    I.wait(5);
    //tombol pilihan aktif
    I.click('#Select-FilterStatus-0');
    I.wait(5);
    I.fillField('#FilterItemCodeOrBrandName', 'BUSCOPAN PLUS TABLET');
    I.wait(5);
    I.see('BUSCOPAN PLUS TABLET');
    I.wait(2);
    I.clearField('#FilterItemCodeOrBrandName');
    I.wait(5);
    //tombol clear dropdwon
    I.click('#BtnClearSelect-FilterStatus');
    I.wait(5);
    //tombol pilihan tidak aktif
    I.click('#Select-FilterStatus-1');
    I.wait(5);
    I.fillField('#FilterItemCodeOrBrandName', 'PT. Bunda Global');
    I.wait(5);
    I.dontSee('BUSCOPAN PLUS TABLET');
    I.wait(2);
    I.clearField('#FilterItemCodeOrBrandName');
    I.wait(5);
    //tombol clear dropdwon
    I.click('#BtnClearSelect-FilterStatus');
    I.wait(5);
    
    I.say('Saya sebagai super admin menyaring daftar product berdasarkan product category');
    I.click('#Input-FilterByCategory');
    I.wait(3);
    I.click('#BtnOpen-FilterByCategory');
    I.wait(5);
    //tombol pilihan product category
    I.click('#Option-0');
    I.wait(5);
    I.fillField('#FilterItemCodeOrBrandName', 'BUSCOPAN PLUS TABLET');
    I.wait(5);
    I.see('BUSCOPAN PLUS TABLET');
    I.wait(5);
    I.clearField('#FilterItemCodeOrBrandName');
    I.wait(5);
    //tombol clear dropdwon
    I.click('#BtnClear-FilterByCategory');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario membuat data product', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman master data product');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Product');
    I.wait(3);
    //tombol sub tab product
    I.click('#Product');
    I.wait(7);

    I.say('Saya sebagai super admin mengakses halaman tambah product');
    //tombol add product
    I.click('#AddProduct');
    I.wait(7);
    I.see('Category Product');
    I.seeElement('#Input-product_category');
    I.seeElement('#AddProductCategoryButton');
    I.see('Type Product');
    I.seeElement('#Input-type_product');
    I.seeElement('#AddTypeProductButton');
    I.see('Variant Product');
    I.seeElement('#Input-product_variant');
    I.seeElement('#AddProductVariantButton');
    I.see('Brand Name');
    I.seeElement('#brandName');
    I.see('Product Packing');
    I.seeElement('#packing');
    I.see('Composition');
    I.seeElement('#composition');
    I.see('Dosage');
    I.seeElement('#dosage');
    I.see('UoM');
    I.seeElement('#Input-product_uom');
    I.seeElement('#AddProductUomButton');
    I.see('Conversion');
    I.seeElement('#conversion');
    I.see('Reg No');
    I.seeElement('#reg_no');
    I.see('MA Holder');
    I.seeElement('#Input-product_ma_holder');
    I.seeElement('#AddProductMaHolderButton');
    I.seeElement('#id-BtnSubmit');
    I.seeElement('#id-BtnCancel');

    I.say('Saya sebagai super admin mengakses halaman tambah reference item product category');
    I.click('#AddProductCategoryButton');
    I.wait(7);
    I.see('Product Category');
    I.seeElement('#FilterSearchReferenceItem');
    I.seeElement('#id-BackReferenceItem');
    I.seeElement('#id-AddReferenceItem');
    I.see('ID');
    I.see('ITEM NAME');
    I.see('DESCRIPTION');
    I.see('STATUS');
    I.click('#id-BackReferenceItem');
    I.wait(7);
    //tombol cancel
    I.click('#id-BtnCancel');
    I.wait(7);

    I.say('Saya sebagai super admin menambah data product baru');
    //tombol add product
    I.click('#AddProduct');
    I.wait(7);
    I.click('#BtnOpen-product_category');
    I.wait(5);
    I.click('#Option-0');
    I.wait(5);
    I.click('#BtnOpen-type_product');
    I.wait(5);
    I.click('#Option-1');
    I.wait(5);
    I.click('#BtnOpen-product_variant');
    I.wait(5);
    I.click('#Option-2');
    I.wait(5);
    I.fillField('#brandName', 'Product QA Test');
    I.wait(5);
    I.fillField('#packing', '@10 Strip');
    I.wait(5);
    I.fillField('#composition', 'Composition Test');
    I.wait(5);
    I.click('#BtnOpen-product_uom');
    I.wait(5);
    I.click('#Option-6');
    I.wait(5);
    I.fillField('#conversion', '1000');
    I.wait(5);
    I.fillField('#reg_no', 'REG123456');
    I.wait(5);
    I.click('#BtnOpen-product_ma_holder');
    I.wait(5);
    I.click('#Option-1');
    I.wait(5);
    //tombol save
    I.click('#id-BtnSubmit');
    I.wait(7);

    I.fillField('#FilterItemCodeOrBrandName', 'Product QA Test');
    I.wait(5);
    I.see('Product QA Test');
    I.clearField('#FilterItemCodeOrBrandName');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario memperbarui data product', ({I}) => {
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

    I.say('Saya sebagai super admin mengakses halaman master data product');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Supplier');
    //tombol sub tab product
    I.click('#Product');
    I.wait(7);

    I.fillField('#FilterItemCodeOrBrandName', 'Product QA Test');
    I.wait(5);
    //tombol actions
    I.click('#MenuItem-0');
    I.wait(3);
    //tombol edit
    I.click('#EditItem-0');
    I.wait(7);

    I.say('Saya sebagai super admin mengakses halaman update product');
    I.see('Category Product');
    I.seeElement('#Input-product_category');
    I.seeInField('#Input-product_category', 'PHARMACEUTICAL');
    I.wait(1);
    I.see('Type Product');
    I.seeElement('#Input-type_product');
    I.seeInField('#Input-type_product', 'TOPICAL');
    I.wait(1);
    I.see('Variant Product')
    I.seeElement('#Input-product_variant');
    I.seeInField('#Input-product_variant', 'Branded');
    I.wait(1);
    I.see('Brand Name');
    I.seeElement('#brandName');
    I.seeInField('#brandName', 'Product QA Test');
    I.wait(1);
    I.see('Product Packing');
    I.seeElement('#packing');
    I.seeInField('#packing', '@10 Strip');
    I.wait(1);
    I.see('Composition');
    I.seeElement('#composition');
    I.seeInField('#composition', 'Composition Test');
    I.wait(1);
    I.see('Dosage');
    I.seeElement('#dosage');
    I.see('UoM');
    I.seeElement('#Input-product_uom');
    I.seeInField('#Input-product_uom', 'BOTTLE');
    I.wait(1);
    I.see('Conversion');
    I.seeElement('#conversion');
    I.seeInField('#conversion', '1,000');
    I.wait(1);
    I.see('Reg No');
    I.seeElement('#reg_no');
    I.seeInField('#reg_no', 'REG123456');
    I.wait(1);
    I.see('MA Holder');
    I.seeElement('#Input-product_ma_holder');
    I.wait(1);
    //tombol save
    I.seeElement('#id-BtnSubmit');
    //tombol cancel
    I.seeElement('#id-BtnCancel');
    I.wait(1);
    I.click('#id-BtnCancel');
    I.wait(7);

    I.say('Saya sebagai super admin memperbarui data product');
    I.fillField('#FilterItemCodeOrBrandName', 'Product QA Test');
    I.wait(5);
    //tombol actions
    I.click('#MenuItem-0');
    I.wait(5);
    //tombol edit
    I.click('#EditItem-0');
    I.wait(5);
    
    I.clearField('#brandName');
    I.wait(5);
    I.fillField('#brandName', 'Blopress - QA Test');
    I.wait(5);
    I.click('#BtnClear-product_uom');
    I.wait(5);
    I.click('#BtnOpen-product_uom');
    I.wait(5);
    I.click('#Option-3');
    I.wait(5);
    //tombol update
    I.click('#id-BtnSubmit');
    I.wait(7);

    I.fillField('#FilterItemCodeOrBrandName', 'Blopress - QA Test');
    I.wait(5);
    I.see('Blopress - QA Test');
    I.wait(5);  
    I.clearField('#FilterItemCodeOrBrandName');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');
});

Scenario('Saya sebagai super admin melaksanakan skenario menghapus data product', ({ I }) => {
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

    I.say('Saya sebagai super admin mengakses halaman master data product');
    I.see('Master Data');
    //tombol tab master data
    I.click('//*[@id="MasterData"]');
    I.see('Product');
    //tombol sub tab product
    I.click('#Product');
    I.wait(7);

    I.say('Saya sebagai super admin menghapus data product');
    //buat product baru terlebih dahulu untuk running scenario ini
    I.fillField('#FilterItemCodeOrBrandName', 'Blopress - QA Test');
    I.wait(5);
    //tombol actions
    I.click('#MenuItem-0');
    I.wait(3);
    //tombol delete
    I.click('#DeleteItem-0');
    I.wait(7);
    //popup
    I.see('Are you sure?')
    //tombol setuju delete
    I.click("//button[contains(text(),'Yes, delete it!')]");
    I.wait(7);

    I.fillField('#FilterItemCodeOrBrandName', 'Blopress - QA Test');
    I.wait(5);
    I.dontSee('Blopress - QA Test');
    I.wait(5);
    I.clearField('#FilterItemCodeOrBrandName');
    I.wait(5);

    I.say('Saya sebagai super admin melakukan logout');
    I.click('//*[@id="UserMenu"]');
    I.click('//*[@id="user_logout"]');
    I.wait(7);
    I.see('Supply Chain Management System');
});