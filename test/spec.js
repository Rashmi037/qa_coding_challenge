describe('Product and Services', function() {
    it('navigation to product and services', function() {
     browser.waitForAngularEnabled(false);
     browser.get('http://www.isentia.com/');
     expect(browser.getTitle()).toEqual('Media Monitoring & Analysis Tools & Services +Social Australia | Isentia');
    });
});

describe('Navigation to isentia.mediaportal', function() {
    it('isentia.mediaportal', function(){
    browser.waitForAngularEnabled(false);
    browser.get('http://www.isentia.com/');

    element(by.linkText('PRODUCTS & SERVICES')).click();
    element(by.linkText('isentia.mediaportal')).click();
    expect(browser.getCurrentUrl()).toEqual('http://www.isentia.com/tools/mediaportal');
    });
});

describe('Verifying modules of isentia.mediaportal', function() {
    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://www.isentia.com/');

        element(by.linkText('PRODUCTS & SERVICES')).click();
        element(by.linkText('isentia.mediaportal')).click();

        expect(browser.getCurrentUrl()).toEqual('http://www.isentia.com/tools/mediaportal');    
    });

    it('verifying modules count in isentia.mediaportal', function(){
     var modules = element(by.css('.site')).all(by.css('.col-md-4'));
     expect(modules.count()).toEqual(3);
    });

    it('verifying module names in isentia.mediaportal', function(){
    var moduleNames =   element(by.css('.site')).all(by.css('.col-md-4 strong')).getText();   
    expect(moduleNames).toContain('Connect', 'Social', 'News and Analytics');
    });
});

