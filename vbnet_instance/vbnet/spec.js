const jsdom = require("jsdom");
                         const fs = require('fs');
                         const path = require('path');
                         const Get_Text = new Map();
                        const Get_Attribute = new Map();
                         describe('vbnet', function() { 

it('a11_testcase1' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : a11');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page1.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page2.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page3.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/h2`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[1]/h2 is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/h2 is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
});
it('varimpact_testcase2' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : varimpact');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page4.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page5.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page6.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(19)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(19)), delay);
element.all(by.xpath(`//span`)).get(19).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(19).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[19]`, text);
    }
else
    {
    Get_Text.set(`//span[19]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(19).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[19]`, text);
    }
else
    {
    Get_Attribute.set(`//span[19]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page7.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(19).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-impact/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-impact/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-impact/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-impact/div[3]/div[3]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-impact/div[3]/div[3]/button is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-impact/div[3]/div[3]/button is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-impact/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-impact/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-impact/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="searchFilter"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="searchFilter"]`)).clear();
element(by.xpath(`//input[@id="searchFilter"]`)).getText().then(function(text){
console.log('test_step_inputuser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page8.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="searchFilter"]`)).sendKeys(`user`);
element.all(by.xpath(` //input[@id="searchFilter"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="searchFilter"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="searchFilter"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="searchFilter"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="searchFilter"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="searchFilter"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="searchButton"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="searchButton"]`))), delay);
element(by.xpath(` //button[@id="searchButton"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="searchButton"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="searchButton"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="searchButton"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="searchButton"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="searchButton"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="searchButton"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page9.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="searchButton"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-impact/div[3]/div[8]/div/table/thead/tr/th[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-impact/div[3]/div[8]/div/table/thead/tr/th[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-impact/div[3]/div[8]/div/table/thead/tr/th[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page10.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('xrefclearsearch_testcase3' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : xrefclearsearch');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page11.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page12.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page13.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/xrefApplicationReport"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/xrefApplicationReport"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/xrefApplicationReport"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/xrefApplicationReport"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/xrefApplicationReport"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/xrefApplicationReport"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/xrefApplicationReport"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/xrefApplicationReport"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/xrefApplicationReport"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page14.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/xrefApplicationReport"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page15.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page16.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="searchFilter"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="searchFilter"]`)).clear();
element(by.xpath(`//input[@id="searchFilter"]`)).getText().then(function(text){
console.log('test_step_inputcode');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page17.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="searchFilter"]`)).sendKeys(`code`);
element.all(by.xpath(` //input[@id="searchFilter"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="searchFilter"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="searchFilter"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="searchFilter"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="searchFilter"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="searchFilter"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="searchButton"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="searchButton"]`))), delay);
element(by.xpath(` //button[@id="searchButton"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="searchButton"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="searchButton"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="searchButton"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="searchButton"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="searchButton"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="searchButton"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page18.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="searchButton"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="clearButton"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="clearButton"]`))), delay);
element(by.xpath(` //button[@id="clearButton"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="clearButton"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="clearButton"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="clearButton"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="clearButton"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="clearButton"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="clearButton"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page19.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="clearButton"]`)).click();

browser.sleep(2000);
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[2]/input`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == ``){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[2]/input is equal to. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[2]/input But has . :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page20.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('xref_testcase4' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : xref');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page21.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page22.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page23.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(2)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(2)), delay);
element.all(by.xpath(`//span`)).get(2).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(2).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[2]`, text);
    }
else
    {
    Get_Text.set(`//span[2]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(2).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[2]`, text);
    }
else
    {
    Get_Attribute.set(`//span[2]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page24.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(2).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[3]/div[2]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-x-ref-application/div[3]/div[2]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[3]/div[2]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page25.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[3]/div[4]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-x-ref-application/div[3]/div[4]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-x-ref-application/div[3]/div[4]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page26.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(5000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[5]/label`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Total no of records: 87`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[5]/label contain Total no of records: 87. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[5]/label But has Total no of records: 87. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[7]/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[7]/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[7]/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[2]/input`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[2]/input is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[2]/input is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[8]/div/table/thead/tr/th[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[8]/div/table/thead/tr/th[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[8]/div/table/thead/tr/th[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[8]/div/table/thead/tr/th[3]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[8]/div/table/thead/tr/th[3] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[8]/div/table/thead/tr/th[3] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[8]/div/table/thead/tr/th[4]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[8]/div/table/thead/tr/th[4] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[4]/div[8]/div/table/thead/tr/th[4] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page27.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('varimpactnotpresence_testcase5' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : varimpactnotpresence');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page28.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page29.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page30.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(19)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(19)), delay);
element.all(by.xpath(`//span`)).get(19).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(19).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[19]`, text);
    }
else
    {
    Get_Text.set(`//span[19]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(19).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[19]`, text);
    }
else
    {
    Get_Attribute.set(`//span[19]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page31.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(19).click();

browser.sleep(2000);element(by.xpath(`/html/body/app-root/app-layout/section/app-impact/div[3]/div[6]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-impact/div[3]/div[6]/button is present in current page. :Assertion Failed`);
//browser.quit();
}else{
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-impact/div[3]/div[6]/button is not present in current page. :Assertion Passed');
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page32.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('varimpact1_testcase6' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : varimpact1');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page33.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page34.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page35.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(19)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(19)), delay);
element.all(by.xpath(`//span`)).get(19).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(19).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[19]`, text);
    }
else
    {
    Get_Text.set(`//span[19]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(19).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[19]`, text);
    }
else
    {
    Get_Attribute.set(`//span[19]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page36.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(19).click();

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="searchFilter"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="searchFilter"]`)).clear();
element(by.xpath(`//input[@id="searchFilter"]`)).getText().then(function(text){
console.log('test_step_inputuser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page37.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="searchFilter"]`)).sendKeys(`user`);
element.all(by.xpath(` //input[@id="searchFilter"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="searchFilter"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="searchFilter"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="searchFilter"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="searchFilter"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="searchFilter"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="searchButton"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="searchButton"]`))), delay);
element(by.xpath(` //button[@id="searchButton"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="searchButton"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="searchButton"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="searchButton"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="searchButton"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="searchButton"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="searchButton"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page38.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="searchButton"]`)).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-impact/div[3]/div[4]/label`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Total results found: 10`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-impact/div[3]/div[4]/label contain Total results found: 10. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-impact/div[3]/div[4]/label But has Total results found: 10. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="summaryView"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="summaryView"]`))), delay);
element(by.xpath(` //button[@id="summaryView"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="summaryView"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="summaryView"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="summaryView"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="summaryView"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="summaryView"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="summaryView"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page39.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="summaryView"]`)).click();

browser.sleep(3000);
var value = element.all(by.className(`class="ng-tns-c9-24 ng-star-inserted highlight"`)).reduce(function(acc, elem) {
return elem.getText().then(function(text) {
var text2=`identitymodels.vb`;
if( typeof text ==='object')
    {
    assert=text[0].toLowerCase();
    }
else    
    {
    assert=text.toLowerCase();
    }  
if(assert.indexOf(text2)!== -1){
console.log('Assertion Passed: Expected [IdentityModels.vb] got [',assert,']. :Assertion Passed');
}
else{
console.log('Assertion Failed: Expected [IdentityModels.vb] got [',assert,']. :Assertion Failed');
}
});
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page40.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('userguidehyperlink_testcase7' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : userguidehyperlink');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page41.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page42.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page43.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(24)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(24)), delay);
element.all(by.xpath(`//span`)).get(24).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(24).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[24]`, text);
    }
else
    {
    Get_Text.set(`//span[24]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(24).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[24]`, text);
    }
else
    {
    Get_Attribute.set(`//span[24]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page44.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(24).click();

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/section/app-charts/p`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page45.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/section/app-charts/p`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page46.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('spiderdgrm_testcase8' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : spiderdgrm');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page47.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page48.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page49.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/spiderchartApp"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/spiderchartApp"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/spiderchartApp"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/spiderchartApp"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page50.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page51.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay);
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page52.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay);
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page53.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="filter"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="filter"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="filter"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="filter"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="filter"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="filter"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="filter"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page54.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="filter"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page55.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(2000);element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[4]/ngx-graph/ngx-charts-chart/div/svg/g/g[3]/g[2]/g/text`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-spiderfilterapp/div[4]/ngx-graph/ngx-charts-chart/div/svg/g/g[3]/g[2]/g/text is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[4]/ngx-graph/ngx-charts-chart/div/svg/g/g[3]/g[2]/g/text is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page56.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('userguide_testcase9' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : userguide');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page57.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page58.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page59.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(24)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(24)), delay);
element.all(by.xpath(`//span`)).get(24).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(24).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[24]`, text);
    }
else
    {
    Get_Text.set(`//span[24]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(24).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[24]`, text);
    }
else
    {
    Get_Attribute.set(`//span[24]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page60.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(24).click();

browser.sleep(5000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-charts/div/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `User Guide`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-charts/div/app-page-header/div/div/ol/li[2] contain User Guide. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-charts/div/app-page-header/div/div/ol/li[2] But has User Guide. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-charts/p`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-charts/p is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-charts/p is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-charts/pdf-viewer/div/div/div[1]/div[2]/span[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-charts/pdf-viewer/div/div/div[1]/div[2]/span[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-charts/pdf-viewer/div/div/div[1]/div[2]/span[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/section/app-charts/div/app-page-header/div/div/ol/li[1]/a`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page61.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/section/app-charts/div/app-page-header/div/div/ol/li[1]/a`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page62.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('textnp_testcase10' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : textnp');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page63.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page64.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page65.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(1)), delay);
element.all(by.xpath(`//span`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[1]`, text);
    }
else
    {
    Get_Text.set(`//span[1]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[1]`, text);
    }
else
    {
    Get_Attribute.set(`//span[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page66.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(1).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page67.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page68.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //td`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //td`))), delay);
element(by.xpath(` //td`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //td`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //td`, text);
    }
else
    {
    Get_Text.set(` //td`, text[0]);
    }  
});
element.all(by.xpath(` //td`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//td`, text);
    }
else
    {
    Get_Attribute.set(` //td`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page69.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //td`)).click();

browser.sleep(2000);var assert='';
element(by.xpath(`/html/body/ngb-modal-window/div/div/div[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == ``){
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/ngb-modal-window/div/div/div[2] and has same value . :Assertion Failed`);
//browser.quit();
}else{
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/ngb-modal-window/div/div/div[2] contain . :Assertion Passed` );
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(27)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(27)), delay);
element.all(by.xpath(`//span`)).get(27).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(27).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[27]`, text);
    }
else
    {
    Get_Text.set(`//span[27]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(27).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[27]`, text);
    }
else
    {
    Get_Attribute.set(`//span[27]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page70.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(27).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page71.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('spiderautofill_testcase11' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : spiderautofill');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page72.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page73.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page74.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(2)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(2)), delay);
element.all(by.xpath(`//span`)).get(2).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(2).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[2]`, text);
    }
else
    {
    Get_Text.set(`//span[2]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(2).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[2]`, text);
    }
else
    {
    Get_Attribute.set(`//span[2]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page75.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(2).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page76.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page77.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/spiderchartApp"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/spiderchartApp"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/spiderchartApp"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/spiderchartApp"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page78.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[2]/div/div[2]/select`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-spiderfilterapp/div[2]/div/div[2]/select is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[2]/div/div[2]/select is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[4]/select`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[4]/select is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[4]/select is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[2]/select`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[2]/select is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[2]/select is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[2]/div/div[4]/select`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-spiderfilterapp/div[2]/div/div[4]/select is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[2]/div/div[4]/select is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page79.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page80.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('spider_testcase12' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : spider');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page81.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page82.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page83.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/spiderchartApp"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/spiderchartApp"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/spiderchartApp"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/spiderchartApp"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page84.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[2]/div/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-spiderfilterapp/div[2]/div/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[2]/div/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page85.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay);
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page86.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay);
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page87.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="filter"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="filter"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="filter"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="filter"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="filter"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="filter"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="filter"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page88.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="filter"]//option[@value="All"]`)).click();
element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[5]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[5]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-spiderfilterapp/div[3]/div/div[5]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page89.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page90.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('screenval_testcase13' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : screenval');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page91.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page92.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page93.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(14)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(14)), delay);
element.all(by.xpath(`//span`)).get(14).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(14).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[14]`, text);
    }
else
    {
    Get_Text.set(`//span[14]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(14).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[14]`, text);
    }
else
    {
    Get_Attribute.set(`//span[14]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page94.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(14).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(16)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(16)), delay);
element.all(by.xpath(`//span`)).get(16).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(16).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[16]`, text);
    }
else
    {
    Get_Text.set(`//span[16]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(16).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[16]`, text);
    }
else
    {
    Get_Attribute.set(`//span[16]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page95.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(16).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[4]/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[4]/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[4]/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[4]/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[4]/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[4]/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[3]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[3] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[3] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[5]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[5] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[5] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[6]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[6] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[6] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[4]/div[5]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[4]/div[5]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[4]/div[5]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[5]/a[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Last`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[5]/a[4] contain Last. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[5]/div[1]/div/div/div[5]/a[4] But has Last. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page96.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('screenharvest_testcase14' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : screenharvest');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page97.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page98.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page99.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(10)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(10)), delay);
element.all(by.xpath(`//span`)).get(10).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(10).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[10]`, text);
    }
else
    {
    Get_Text.set(`//span[10]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(10).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[10]`, text);
    }
else
    {
    Get_Attribute.set(`//span[10]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page100.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(10).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(12)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(12)), delay);
element.all(by.xpath(`//span`)).get(12).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(12).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[12]`, text);
    }
else
    {
    Get_Text.set(`//span[12]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(12).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[12]`, text);
    }
else
    {
    Get_Attribute.set(`//span[12]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page101.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(12).click();

browser.sleep(5000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Screenfield Harvesting Report`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2] contain Screenfield Harvesting Report. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2] But has Screenfield Harvesting Report. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[2]/label/input`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[2]/label/input is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[2]/label/input is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[2]/table/tbody/tr/td`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `No data available in table`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[2]/table/tbody/tr/td contain No data available in table. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[2]/table/tbody/tr/td But has No data available in table. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page102.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`))), delay);
element(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="fileln"]//option[@value="About.aspx"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="fileln"]//option[@value="About.aspx"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="fileln"]//option[@value="About.aspx"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="fileln"]//option[@value="About.aspx"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page103.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`)).click();

browser.sleep(2000);element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[5]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[5]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[5]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page104.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Showing 1 to 1 of 1 entries`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4] contain Showing 1 to 1 of 1 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4] But has Showing 1 to 1 of 1 entries. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[5]/a[4]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[5]/a[4] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[5]/a[4] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[1]/a`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page105.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[1]/a`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page106.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('screendef_testcase15' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : screendef');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page107.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page108.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page109.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(14)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(14)), delay);
element.all(by.xpath(`//span`)).get(14).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(14).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[14]`, text);
    }
else
    {
    Get_Text.set(`//span[14]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(14).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[14]`, text);
    }
else
    {
    Get_Attribute.set(`//span[14]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page110.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(14).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(15)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(15)), delay);
element.all(by.xpath(`//span`)).get(15).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(15).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[15]`, text);
    }
else
    {
    Get_Text.set(`//span[15]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(15).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[15]`, text);
    }
else
    {
    Get_Attribute.set(`//span[15]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page111.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(15).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[2]/label/input`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[2]/label/input is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[2]/label/input is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page112.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[7]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[7] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[7] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`))), delay);
element(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="fileln"]//option[@value="About.aspx"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="fileln"]//option[@value="About.aspx"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="fileln"]//option[@value="About.aspx"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="fileln"]//option[@value="About.aspx"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page113.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="fileln"]//option[@value="About.aspx"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[5]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[5]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-cicsscreen-app/div[4]/div[5]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page114.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[5]/a[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[5]/a[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[5]/a[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[4]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[4] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[3]/div[1]/div/table/thead/tr/th[4] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Showing 1 to 1 of 1 entries`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4] contain Showing 1 to 1 of 1 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[5]/div[1]/div/div/div[4] But has Showing 1 to 1 of 1 entries. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page115.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('sankey1_testcase16' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : sankey1');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page116.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page117.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page118.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(13)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(13)), delay);
element.all(by.xpath(`//span`)).get(13).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(13).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[13]`, text);
    }
else
    {
    Get_Text.set(`//span[13]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(13).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[13]`, text);
    }
else
    {
    Get_Attribute.set(`//span[13]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page119.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(13).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page120.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`))), delay);
element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="inbound"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="inbound"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="pgmName"]//option[@value="inbound"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="pgmName"]//option[@value="inbound"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page121.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page122.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-sankey/div[2]/div[6]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-sankey/div[2]/div[6]/button is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-sankey/div[2]/div[6]/button is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/section/app-sankey/div[1]/app-page-header/div/div/ol/li[1]/a`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page123.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/section/app-sankey/div[1]/app-page-header/div/div/ol/li[1]/a`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page124.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('schld_testcase17' , function() {browser.ignoreSynchronization =true;
                        browser.driver.manage().window().maximize();
                        browser.get("https://www.saucedemo.com/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(` //div[@id="login_credentials"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //div[@id="login_credentials"]`))), delay);
element(by.xpath(` //div[@id="login_credentials"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //div[@id="login_credentials"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //div[@id="login_credentials"]`, text);
    }
else
    {
    Get_Text.set(` //div[@id="login_credentials"]`, text[0]);
    }  
});
element.all(by.xpath(` //div[@id="login_credentials"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[@id="login_credentials"]`, text);
    }
else
    {
    Get_Attribute.set(` //div[@id="login_credentials"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page125.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //div[@id="login_credentials"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(`//input[@name="user-name"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@name="user-name"]`)).clear();
element(by.xpath(`//input[@name="user-name"]`)).getText().then(function(text){
console.log('test_step_inputstandard_user');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page126.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@name="user-name"]`)).sendKeys(`standard_user`);
element.all(by.xpath(` //input[@name="user-name"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@name="user-name"]`, text);
    }
else
    {
    Get_Text.set(` //input[@name="user-name"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@name="user-name"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@name="user-name"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@name="user-name"]`, text[0]);
    }  
});


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(12)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(12)), delay);
element.all(by.xpath(`//div`)).get(12).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(12).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[12]`, text);
    }
else
    {
    Get_Text.set(`//div[12]`, text[0]);
    }  
});
element.all(by.xpath(`//div`)).get(12).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[12]`, text);
    }
else
    {
    Get_Attribute.set(`//div[12]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page127.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(12).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(12)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(12)), delay);
element.all(by.xpath(`//div`)).get(12).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(12).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[12]`, text);
    }
else
    {
    Get_Text.set(`//div[12]`, text[0]);
    }  
});
element.all(by.xpath(`//div`)).get(12).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[12]`, text);
    }
else
    {
    Get_Attribute.set(`//div[12]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page128.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(12).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(14)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(14)), delay);
element.all(by.xpath(`//div`)).get(14).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(14).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[14]`, text);
    }
else
    {
    Get_Text.set(`//div[14]`, text[0]);
    }  
});
element.all(by.xpath(`//div`)).get(14).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[14]`, text);
    }
else
    {
    Get_Attribute.set(`//div[14]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page129.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(14).click();

browser.wait(until.presenceOf(element(by.xpath(`//input[@name="password"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@name="password"]`)).clear();
element(by.xpath(`//input[@name="password"]`)).getText().then(function(text){
console.log('test_step_inputsecret_sauce');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page130.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@name="password"]`)).sendKeys(`secret_sauce`);
element.all(by.xpath(` //input[@name="password"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@name="password"]`, text);
    }
else
    {
    Get_Text.set(` //input[@name="password"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@name="password"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@name="password"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@name="password"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //input[@name="login-button"]`))), delay, 'Element taking too long to appear in the DOM');

element(by.xpath(` //input[@name="login-button"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //input[@name="login-button"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@name="login-button"]`, text);
    }
else
    {
    Get_Text.set(` //input[@name="login-button"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@name="login-button"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//input[@name="login-button"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@name="login-button"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page131.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@name="login-button"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(27)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(27)), delay);
element.all(by.xpath(`//div`)).get(27).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(27).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[27]`, text);
    }
else
    {
    Get_Text.set(`//div[27]`, text[0]);
    }  
});
element.all(by.xpath(`//div`)).get(27).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[27]`, text);
    }
else
    {
    Get_Attribute.set(`//div[27]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page132.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(27).click();
});
it('sankeynosubmit_testcase18' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : sankeynosubmit');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page133.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page134.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page135.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(13)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(13)), delay);
element.all(by.xpath(`//span`)).get(13).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(13).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[13]`, text);
    }
else
    {
    Get_Text.set(`//span[13]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(13).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[13]`, text);
    }
else
    {
    Get_Attribute.set(`//span[13]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page136.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(13).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page137.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`))), delay);
element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="inbound"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="inbound"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="pgmName"]//option[@value="inbound"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="pgmName"]//option[@value="inbound"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page138.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-sankey/div[2]/div[5]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-sankey/div[2]/div[5]/button is present in current page. :Assertion Failed`);
//browser.quit();
}else{
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-sankey/div[2]/div[5]/button is not present in current page. :Assertion Passed');
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page139.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('rulesreport_testcase19' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : rulesreport');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page140.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page141.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page142.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(8)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(8)), delay);
element.all(by.xpath(`//span`)).get(8).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(8).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[8]`, text);
    }
else
    {
    Get_Text.set(`//span[8]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(8).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[8]`, text);
    }
else
    {
    Get_Attribute.set(`//span[8]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page143.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(8).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(9)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(9)), delay);
element.all(by.xpath(`//span`)).get(9).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(9).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[9]`, text);
    }
else
    {
    Get_Text.set(`//span[9]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(9).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[9]`, text);
    }
else
    {
    Get_Attribute.set(`//span[9]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page144.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(9).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[5]/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[5]/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[5]/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[5]/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[5]/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[5]/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[6]/div[3]/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[6]/div[3]/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[6]/div[3]/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[5]/div[5]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-bre/div[5]/div[5]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-bre/div[5]/div[5]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[5]/a[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[5]/a[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[5]/a[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[4]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[4] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[4] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[2]/label/input`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[2]/label/input is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[7]/div/div/div/div[2]/label/input is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page145.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('sankey_testcase20' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : sankey');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page146.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page147.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page148.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(13)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(13)), delay);
element.all(by.xpath(`//span`)).get(13).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(13).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[13]`, text);
    }
else
    {
    Get_Text.set(`//span[13]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(13).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[13]`, text);
    }
else
    {
    Get_Attribute.set(`//span[13]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page149.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(13).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-sankey/div[2]/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-sankey/div[2]/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-sankey/div[2]/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-sankey/div[2]/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-sankey/div[2]/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-sankey/div[2]/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-sankey/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-sankey/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-sankey/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page150.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`))), delay);
element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="inbound"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="inbound"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="pgmName"]//option[@value="inbound"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="pgmName"]//option[@value="inbound"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page151.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="pgmName"]//option[@value="inbound"]`)).click();

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page152.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-sankey/div[2]/div[6]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-sankey/div[2]/div[6]/button is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-sankey/div[2]/div[6]/button is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page153.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('ruleharvest_testcase21' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : ruleharvest');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page154.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page155.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page156.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(10)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(10)), delay);
element.all(by.xpath(`//span`)).get(10).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(10).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[10]`, text);
    }
else
    {
    Get_Text.set(`//span[10]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(10).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[10]`, text);
    }
else
    {
    Get_Attribute.set(`//span[10]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page157.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(10).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(11)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(11)), delay);
element.all(by.xpath(`//span`)).get(11).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(11).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[11]`, text);
    }
else
    {
    Get_Text.set(`//span[11]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(11).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[11]`, text);
    }
else
    {
    Get_Attribute.set(`//span[11]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page158.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(11).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Rule Harvesting`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] contain Rule Harvesting. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] But has Rule Harvesting. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[5]/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[5]/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[5]/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[5]/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[5]/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[5]/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[7]/div[3]/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[7]/div[3]/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[7]/div[3]/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[6]/div[2]/select`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[6]/div[2]/select is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[6]/div[2]/select is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page159.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`))), delay);
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page160.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`))), delay);
element(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="screen"]//option[@value="Label1"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="screen"]//option[@value="Label1"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="screen"]//option[@value="Label1"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="screen"]//option[@value="Label1"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page161.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`)).click();

browser.sleep(2000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[6]/div[3]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-bre/div[6]/div[3]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-bre/div[6]/div[3]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page162.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[6]/div[4]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[6]/div[4]/button is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[6]/div[4]/button is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `Showing 1 to 1 of 1 entries`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[4] is equal toShowing 1 to 1 of 1 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[4] But has Showing 1 to 1 of 1 entries. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[5]/a[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[5]/a[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[5]/a[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[3]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[3] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[8]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[3] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page163.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('ruleharvest1_testcase22' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : ruleharvest1');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page164.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page165.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page166.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(10)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(10)), delay);
element.all(by.xpath(`//span`)).get(10).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(10).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[10]`, text);
    }
else
    {
    Get_Text.set(`//span[10]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(10).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[10]`, text);
    }
else
    {
    Get_Attribute.set(`//span[10]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page167.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(10).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(11)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(11)), delay);
element.all(by.xpath(`//span`)).get(11).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(11).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[11]`, text);
    }
else
    {
    Get_Text.set(`//span[11]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(11).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[11]`, text);
    }
else
    {
    Get_Attribute.set(`//span[11]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page168.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(11).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page169.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`))), delay);
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page170.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`))), delay);
element(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="screen"]//option[@value="Label1"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="screen"]//option[@value="Label1"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="screen"]//option[@value="Label1"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="screen"]//option[@value="Label1"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page171.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="screen"]//option[@value="Label1"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page172.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//td`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//td`)).get(1)), delay);
element.all(by.xpath(`//td`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//td`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//td[1]`, text);
    }
else
    {
    Get_Text.set(`//td[1]`, text[0]);
    }  
});
element.all(by.xpath(`//td`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//td[1]`, text);
    }
else
    {
    Get_Attribute.set(`//td[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page173.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//td`)).get(1).click();

browser.sleep(2000);element(by.xpath(`/html/body/ngb-modal-window/div/div/div[1]/div/button[1]`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/ngb-modal-window/div/div/div[1]/div/button[1] is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/ngb-modal-window/div/div/div[1]/div/button[1] is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="paraCodeBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="paraCodeBtn"]`))), delay);
element(by.xpath(` //button[@id="paraCodeBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="paraCodeBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="paraCodeBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="paraCodeBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="paraCodeBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="paraCodeBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="paraCodeBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page174.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="paraCodeBtn"]`)).click();

browser.sleep(2000);element(by.xpath(`/html/body/ngb-modal-window/div/div/div[1]/div/button[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log(`Assertion Failed: Expected element xpath/html/body/ngb-modal-window/div/div/div[1]/div/button[1] is present in current page. :Assertion Failed`);
//browser.quit();
}else{
console.log('Assertion Passed: Expected element xpath /html/body/ngb-modal-window/div/div/div[1]/div/button[1] is not present in current page. :Assertion Passed');
}
});
element(by.xpath(`/html/body/ngb-modal-window/div/div/div[1]/div/button[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/ngb-modal-window/div/div/div[1]/div/button[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/ngb-modal-window/div/div/div[1]/div/button[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(27)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(27)), delay);
element.all(by.xpath(`//span`)).get(27).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(27).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[27]`, text);
    }
else
    {
    Get_Text.set(`//span[27]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(27).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[27]`, text);
    }
else
    {
    Get_Attribute.set(`//span[27]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page175.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(27).click();

browser.sleep(2000);
browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page176.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('processflowdwnld_testcase23' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : processflowdwnld');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page177.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page178.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page179.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(4)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(4)), delay);
element.all(by.xpath(`//span`)).get(4).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(4).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[4]`, text);
    }
else
    {
    Get_Text.set(`//span[4]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(4).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[4]`, text);
    }
else
    {
    Get_Attribute.set(`//span[4]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page180.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(4).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(7)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(7)), delay);
element.all(by.xpath(`//span`)).get(7).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(7).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[7]`, text);
    }
else
    {
    Get_Text.set(`//span[7]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(7).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[7]`, text);
    }
else
    {
    Get_Attribute.set(`//span[7]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page181.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(7).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page182.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`))), delay);
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page183.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`))), delay);
element(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="extCall"]//option[@value="btnMinus_Click"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page184.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page185.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(2000);element(by.xpath(`/html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[4]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[4]/button is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[4]/button is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(2000);
var download_directory= `C:\\Users\\SR00780448\\Downloads\\`;
var glob = require("glob");
var dir = download_directory;
const sorted_files=[];
browser.driver.wait(function () {
var filesArray = glob.sync(download_directory+"*");
if (typeof filesArray !== 'undefined' && filesArray.length > 0) 
    {
    return filesArray;
    }
}, 40000).then(function (filesArray) {
var filename = filesArray[0];
var files = fs.readdirSync(dir).map(function(v) { 
return { 	name:v,
time:fs.statSync(dir + v).mtime.getTime()
}; 
}).sort(function(a, b) { return a.time - b.time; }).map(function(v) { 
sorted_files.push(v.name); 
});
if(sorted_files[sorted_files.length-1].includes(``)){
console.log("Assertion Passed: Expected file containing   in it's filename ",sorted_files[sorted_files.length-1]," is downloaded. :Assertion Passed");
}else{
console.log('Assertion Failed: Expected file with the filename containing  is not downloaded. :Assertion Failed');
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page186.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('processflow_testcase24' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : processflow');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page187.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page188.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page189.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(4)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(4)), delay);
element.all(by.xpath(`//span`)).get(4).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(4).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[4]`, text);
    }
else
    {
    Get_Text.set(`//span[4]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(4).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[4]`, text);
    }
else
    {
    Get_Attribute.set(`//span[4]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page190.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(4).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(7)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(7)), delay);
element.all(by.xpath(`//span`)).get(7).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(7).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[7]`, text);
    }
else
    {
    Get_Text.set(`//span[7]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(7).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[7]`, text);
    }
else
    {
    Get_Attribute.set(`//span[7]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page191.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(7).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-programprocessflowext/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-programprocessflowext/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-programprocessflowext/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-programprocessflowext/div[4]/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-programprocessflowext/div[4]/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-programprocessflowext/div[4]/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-programprocessflowext/div[4]/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-programprocessflowext/div[4]/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-programprocessflowext/div[4]/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-programprocessflowext/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-programprocessflowext/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-programprocessflowext/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="ANONYMOUS"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="ANONYMOUS"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page192.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="ANONYMOUS"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`))), delay);
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page193.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="pgmName"]//option[@value="BookDetails.aspx.vb"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`))), delay);
element(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="extCall"]//option[@value="btnMinus_Click"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page194.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="extCall"]//option[@value="btnMinus_Click"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[3]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[3]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[3]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page195.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[4]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[4]/button is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-programprocessflowext/div[6]/div[4]/button is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-programprocessflowext/div[4]/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-programprocessflowext/div[4]/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-programprocessflowext/div[4]/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page196.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('mipage_testcase25' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : mipage');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page197.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page198.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page199.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(3000);

browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(1)), delay);
element.all(by.xpath(`//span`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[1]`, text);
    }
else
    {
    Get_Text.set(`//span[1]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[1]`, text);
    }
else
    {
    Get_Attribute.set(`//span[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page200.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(1).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[3]/div[2]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-masterinvapp/div[3]/div[2]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[3]/div[2]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page201.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page202.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page203.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('orphan_testcase26' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : orphan');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page204.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page205.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page206.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(22)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(22)), delay);
element.all(by.xpath(`//span`)).get(22).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(22).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[22]`, text);
    }
else
    {
    Get_Text.set(`//span[22]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(22).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[22]`, text);
    }
else
    {
    Get_Attribute.set(`//span[22]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page207.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(22).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(23)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(23)), delay);
element.all(by.xpath(`//span`)).get(23).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(23).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[23]`, text);
    }
else
    {
    Get_Text.set(`//span[23]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(23).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[23]`, text);
    }
else
    {
    Get_Attribute.set(`//span[23]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page208.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(23).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-orphanapp/div[3]/div[2]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-orphanapp/div[3]/div[2]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-orphanapp/div[3]/div[2]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[2]/label/input`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[2]/label/input is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[2]/label/input is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page209.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-orphanapp/div[3]/div[4]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-orphanapp/div[3]/div[4]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-orphanapp/div[3]/div[4]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page210.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(5000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Showing 1 to 10 of 15 entries`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[4] contain Showing 1 to 10 of 15 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[4] But has Showing 1 to 10 of 15 entries. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[5]/a[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[5]/a[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-orphanapp/div[4]/div/div/div/div[5]/a[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page211.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('navelement_testcase27' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : navelement');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page212.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page213.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page214.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(5000);
browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[2]`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page215.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[2]`)).click();

browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[3]`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page216.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[3]`)).click();

browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[4]`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page217.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[4]`)).click();

browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[5]`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page218.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[5]`)).click();

browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[7]`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page219.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[7]`)).click();

browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[7]`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page220.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/a[7]`)).click();

browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/div[5]/a`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page221.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/div[5]/a`)).click();

browser.wait(until.presenceOf(element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/div[3]/a`))), delay, 'Element taking too long to appear in the DOM');
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page222.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[1]/div[3]/a`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page223.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('missing_testcase28' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : missing');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page224.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_input4demouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page225.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`4demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page226.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(1)), delay);
element.all(by.xpath(`//div`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[1]`, text);
    }
else
    {
    Get_Text.set(`//div[1]`, text[0]);
    }  
});
element.all(by.xpath(`//div`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[1]`, text);
    }
else
    {
    Get_Attribute.set(`//div[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page227.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(1).click();

browser.wait(until.presenceOf(element(by.xpath(` //input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');

element(by.xpath(` //input[@id="Upwd"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page228.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(1)), delay);
element.all(by.xpath(`//div`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[1]`, text);
    }
else
    {
    Get_Text.set(`//div[1]`, text[0]);
    }  
});
element.all(by.xpath(`//div`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[1]`, text);
    }
else
    {
    Get_Attribute.set(`//div[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page229.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(1).click();

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page230.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page231.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(20)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(20)), delay);
element.all(by.xpath(`//span`)).get(20).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(20).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[20]`, text);
    }
else
    {
    Get_Text.set(`//span[20]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(20).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[20]`, text);
    }
else
    {
    Get_Attribute.set(`//span[20]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page232.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(20).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-missingcompapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-missingcompapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-missingcompapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-missingcompapp/div[2]/div[2]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-missingcompapp/div[2]/div[2]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-missingcompapp/div[2]/div[2]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page233.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-missingcompapp/div[2]/div[4]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-missingcompapp/div[2]/div[4]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-missingcompapp/div[2]/div[4]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page234.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(5000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Showing 1 to 2 of 2 entries`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[4] contain Showing 1 to 2 of 2 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[4] But has Showing 1 to 2 of 2 entries. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[5]/a[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[5]/a[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[5]/a[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-missingcompapp/div[3]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-missingcompapp/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-missingcompapp/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-missingcompapp/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page235.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('miexceldwnld_testcase29' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : miexceldwnld');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page236.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page237.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page238.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(1)), delay);
element.all(by.xpath(`//span`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[1]`, text);
    }
else
    {
    Get_Text.set(`//span[1]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[1]`, text);
    }
else
    {
    Get_Attribute.set(`//span[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page239.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(1).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page240.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page241.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //td`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //td`))), delay);
element(by.xpath(` //td`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //td`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //td`, text);
    }
else
    {
    Get_Text.set(` //td`, text[0]);
    }  
});
element.all(by.xpath(` //td`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//td`, text);
    }
else
    {
    Get_Attribute.set(` //td`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page242.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //td`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(27)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(27)), delay);
element.all(by.xpath(`//span`)).get(27).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(27).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[27]`, text);
    }
else
    {
    Get_Text.set(`//span[27]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(27).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[27]`, text);
    }
else
    {
    Get_Attribute.set(`//span[27]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page243.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(27).click();

browser.sleep(2000);
browser.wait(until.presenceOf(element(by.xpath(` //img[@id="exportImg"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //img[@id="exportImg"]`))), delay);
element(by.xpath(` //img[@id="exportImg"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //img[@id="exportImg"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //img[@id="exportImg"]`, text);
    }
else
    {
    Get_Text.set(` //img[@id="exportImg"]`, text[0]);
    }  
});
element.all(by.xpath(` //img[@id="exportImg"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//img[@id="exportImg"]`, text);
    }
else
    {
    Get_Attribute.set(` //img[@id="exportImg"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page244.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //img[@id="exportImg"]`)).click();

browser.sleep(2000);
var download_directory= `C:\\Users\\SR00780448\\Downloads\\`;
var glob = require("glob");
var dir = download_directory;
const sorted_files=[];
browser.driver.wait(function () {
var filesArray = glob.sync(download_directory+"*");
if (typeof filesArray !== 'undefined' && filesArray.length > 0) 
    {
    return filesArray;
    }
}, 40000).then(function (filesArray) {
var filename = filesArray[0];
var files = fs.readdirSync(dir).map(function(v) { 
return { 	name:v,
time:fs.statSync(dir + v).mtime.getTime()
}; 
}).sort(function(a, b) { return a.time - b.time; }).map(function(v) { 
sorted_files.push(v.name); 
});
if(sorted_files[sorted_files.length-1].includes(``)){
console.log("Assertion Passed: Expected file containing   in it's filename ",sorted_files[sorted_files.length-1]," is downloaded. :Assertion Passed");
}else{
console.log('Assertion Failed: Expected file with the filename containing  is not downloaded. :Assertion Failed');
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page245.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('masterinventory1_testcase30' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : masterinventory1');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page246.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page247.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page248.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(1)), delay);
element.all(by.xpath(`//span`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[1]`, text);
    }
else
    {
    Get_Text.set(`//span[1]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[1]`, text);
    }
else
    {
    Get_Attribute.set(`//span[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page249.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(1).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page250.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[5]/a[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[5]/a[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[5]/a[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page251.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page252.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('glossary1_testcase31' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : glossary1');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page253.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page254.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page255.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/glossary"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/glossary"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/glossary"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/glossary"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/glossary"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/glossary"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/glossary"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page256.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[3]/div[7]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[3]/div[7]/button is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[3]/div[7]/button is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/div/div[2]/label/input`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/div/div[2]/label/input is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/div/div[2]/label/input is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Showing 1 to 10 of 296 entries`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/div/div[4] contain Showing 1 to 10 of 296 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/div/div[4] But has Showing 1 to 10 of 296 entries. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/div/div[5]/a[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/div/div[5]/a[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[4]/div[1]/div/div/div[5]/a[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[4]/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[4]/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[4]/div[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page257.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('masterinventory_testcase32' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : masterinventory');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page258.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page259.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page260.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(1)), delay);
element.all(by.xpath(`//span`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[1]`, text);
    }
else
    {
    Get_Text.set(`//span[1]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[1]`, text);
    }
else
    {
    Get_Attribute.set(`//span[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page261.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(1).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[3]/div[4]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-masterinvapp/div[3]/div[4]/button is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[3]/div[4]/button is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page262.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[2]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[2]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[2]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[4]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[4] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[4] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page263.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page264.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('logout_testcase33' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : logout');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page265.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page266.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page267.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(3000);

browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(1)), delay);
element.all(by.xpath(`//span`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[1]`, text);
    }
else
    {
    Get_Text.set(`//span[1]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[1]`, text);
    }
else
    {
    Get_Attribute.set(`//span[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page268.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(1).click();
element(by.xpath(`/html/body/app-root/app-layout/app-header/nav/div/ul/li/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/app-header/nav/div/ul/li/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/app-header/nav/div/ul/li/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page269.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('inputfield_testcase34' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : inputfield');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page270.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page271.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`//input[@id="Uname"]`)).sendKeys(`demouser`);

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page272.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page273.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(`//input[@id="Upwd"]`)).sendKeys(`demouser1`);

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page274.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page275.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('glossaryspin_testcase35' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : glossaryspin');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page276.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page277.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page278.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/glossary"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/glossary"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/glossary"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/glossary"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/glossary"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/glossary"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/glossary"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page279.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="updateBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="updateBtn"]`))), delay);
element(by.xpath(` //button[@id="updateBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="updateBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="updateBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="updateBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="updateBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="updateBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="updateBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page280.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="updateBtn"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[3]/div[5]/i`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[3]/div[5]/i is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[3]/div[5]/i is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//i`)).get(29)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//i`)).get(29)), delay);
element.all(by.xpath(`//i`)).get(29).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//i`)).get(29).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//i[29]`, text);
    }
else
    {
    Get_Text.set(`//i[29]`, text[0]);
    }  
});
element.all(by.xpath(`//i`)).get(29).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//i[29]`, text);
    }
else
    {
    Get_Attribute.set(`//i[29]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page281.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//i`)).get(29).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[3]/div[4]/span`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[3]/div[4]/span is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[3]/div[4]/span is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page282.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('controlflowautofill_testcase36' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : controlflowautofill');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page283.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page284.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page285.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(4)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(4)), delay);
element.all(by.xpath(`//span`)).get(4).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(4).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[4]`, text);
    }
else
    {
    Get_Text.set(`//span[4]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(4).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[4]`, text);
    }
else
    {
    Get_Attribute.set(`//span[4]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page286.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(4).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(5)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(5)), delay);
element.all(by.xpath(`//span`)).get(5).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(5).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[5]`, text);
    }
else
    {
    Get_Text.set(`//span[5]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(5).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[5]`, text);
    }
else
    {
    Get_Attribute.set(`//span[5]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page287.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(5).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page288.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay);
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page289.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay);
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page290.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`))), delay);
element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="parent"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="parent"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="filter"]//option[@value="parent"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="filter"]//option[@value="parent"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page291.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page292.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(6)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(6)), delay);
element.all(by.xpath(`//span`)).get(6).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(6).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[6]`, text);
    }
else
    {
    Get_Text.set(`//span[6]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(6).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[6]`, text);
    }
else
    {
    Get_Attribute.set(`//span[6]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page293.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(6).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-controlflowapp/div[2]/div/div[2]/select`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-controlflowapp/div[2]/div/div[2]/select is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-controlflowapp/div[2]/div/div[2]/select is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[2]/select`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[2]/select is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[2]/select is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page294.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(2000);element(by.xpath(`/html/body/app-root/app-layout/section/app-controlflowapp/div[4]/ngx-graph/ngx-charts-chart/div/svg/g/g[3]/g[1]/g/text`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-controlflowapp/div[4]/ngx-graph/ngx-charts-chart/div/svg/g/g[3]/g[1]/g/text is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-controlflowapp/div[4]/ngx-graph/ngx-charts-chart/div/svg/g/g[3]/g[1]/g/text is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page295.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('glossary_testcase37' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : glossary');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page296.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(1)), delay);
element.all(by.xpath(`//div`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[1]`, text);
    }
else
    {
    Get_Text.set(`//div[1]`, text[0]);
    }  
});
element.all(by.xpath(`//div`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[1]`, text);
    }
else
    {
    Get_Attribute.set(`//div[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page297.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(1).click();

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page298.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page299.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(5000);
browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/glossary"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/glossary"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/glossary"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/glossary"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/glossary"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/glossary"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/glossary"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page300.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[3]/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[3]/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[3]/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[3]/div[3]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[3]/div[3]/button is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[3]/div[3]/button is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page301.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('frwdcallchain_testcase38' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : frwdcallchain');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page302.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page303.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page304.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(4)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(4)), delay);
element.all(by.xpath(`//span`)).get(4).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(4).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[4]`, text);
    }
else
    {
    Get_Text.set(`//span[4]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(4).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[4]`, text);
    }
else
    {
    Get_Attribute.set(`//span[4]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page305.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(4).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(5)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(5)), delay);
element.all(by.xpath(`//span`)).get(5).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(5).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[5]`, text);
    }
else
    {
    Get_Text.set(`//span[5]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(5).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[5]`, text);
    }
else
    {
    Get_Attribute.set(`//span[5]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page306.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(5).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page307.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page308.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(2000);
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[7]/label`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `Please select all values`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[7]/label is equal toPlease select all values. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[7]/label But has Please select all values. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay);
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page309.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay);
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page310.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="filter"]//option[@value="child"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="filter"]//option[@value="child"]`))), delay);
element(by.xpath(` //select[@id="filter"]//option[@value="child"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="filter"]//option[@value="child"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="child"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="child"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="filter"]//option[@value="child"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="filter"]//option[@value="child"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="filter"]//option[@value="child"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page311.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="filter"]//option[@value="child"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page312.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(2000);
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[7]/label`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `Data not available for selected component!`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[7]/label is equal toData not available for selected component!. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[7]/label But has Data not available for selected component!. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page313.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('fileupload_testcase39' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : fileupload');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page314.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page315.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page316.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(18)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(18)), delay);
element.all(by.xpath(`//span`)).get(18).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(18).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[18]`, text);
    }
else
    {
    Get_Text.set(`//span[18]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(18).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[18]`, text);
    }
else
    {
    Get_Attribute.set(`//span[18]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page317.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(18).click();

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="fileUploader"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="fileUploader"]`)).clear();
element(by.xpath(`//input[@id="fileUploader"]`)).getText().then(function(text){
console.log('test_step_inputC:\fakepath\iTAPjava.xlsx');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page318.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="fileUploader"]`)).sendKeys(`C:\fakepath\iTAPjava.xlsx`);
element.all(by.xpath(` //input[@id="fileUploader"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="fileUploader"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="fileUploader"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="fileUploader"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="fileUploader"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="fileUploader"]`, text[0]);
    }  
});
element(by.xpath(`//input[@id="fileUploader"]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath //input[@id="fileUploader"] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath//input[@id="fileUploader"] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(2000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[3]/div[2]/input`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[3]/div[2]/input is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[3]/div[2]/input is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="uploadBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="uploadBtn"]`))), delay);
element(by.xpath(` //button[@id="uploadBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="uploadBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="uploadBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="uploadBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="uploadBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="uploadBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="uploadBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page319.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="uploadBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page320.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('dashboardtext_testcase40' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : dashboardtext');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(4)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(4)), delay);
element.all(by.xpath(`//div`)).get(4).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(4).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[4]`, text);
    }
else
    {
    Get_Text.set(`//div[4]`, text[0]);
    }  
});
element.all(by.xpath(`//div`)).get(4).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[4]`, text);
    }
else
    {
    Get_Attribute.set(`//div[4]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page321.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(4).click();

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page322.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page323.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page324.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(5000);
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `45`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2 is equal to45. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2 But has 45. :Assertion Failed`);
//browser.quit();
}
});
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[2]/a/app-stat/div/div/div/div[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `2104`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[2]/a/app-stat/div/div/div/div[2] contain 2104. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[2]/a/app-stat/div/div/div/div[2] But has 2104. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div/div/div[2]/div[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div/div/div[2]/div[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div/div/div[2]/div[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div/div/div[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `No of Tables`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div/div/div[2] contain No of Tables. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[3]/a/app-stat/div/div/div/div[2] But has No of Tables. :Assertion Failed`);
//browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `15`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2 is equal to15. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2 But has 15. :Assertion Failed`);
//browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div/div/div[2]/div[2]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `Missing Components`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div/div/div[2]/div[2] is equal toMissing Components. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[2]/a/app-stat/div/div/div/div[2]/div[2] But has Missing Components. :Assertion Failed`);
//browser.quit();
}
});

var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div/div/div[2]/div[1]/h2`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `7`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div/div/div[2]/div[1]/h2 is equal to7. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[4]/div[3]/a/app-stat/div/div/div/div[2]/div[1]/h2 But has 7. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page325.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('dashboard_testcase41' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : dashboard');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page326.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page327.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page328.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/app-header/nav/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/app-header/nav/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/app-header/nav/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/h2`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Dashboard - LCaaS`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/h2 contain Dashboard - LCaaS. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/h2 But has Dashboard - LCaaS. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[3]/div/div/div[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[3]/div/div/div[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[3]/div/div/div[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[4]/div[1]/div/div[2]/div/canvas`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[4]/div[1]/div/div[2]/div/canvas is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[4]/div[1]/div/div[2]/div/canvas is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[4]/div[2]/div/div[2]/canvas`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[4]/div[2]/div/div[2]/canvas is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[4]/div[2]/div/div[2]/canvas is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[5]/div[1]/div/div[2]/canvas`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[5]/div[1]/div/div[2]/canvas is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[5]/div[1]/div/div[2]/canvas is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[5]/div[2]/div/div[2]/div/canvas`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[5]/div[2]/div/div[2]/div/canvas is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[5]/div[2]/div/div[2]/div/canvas is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[6]/div[1]/div/div[2]/canvas`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[6]/div[1]/div/div[2]/canvas is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[6]/div[1]/div/div[2]/canvas is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[8]/div/div/div[2]/canvas`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-dashboard/div[8]/div/div/div[2]/canvas is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-dashboard/div[8]/div/div/div[2]/canvas is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[7]/div[2]/div/div[1]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `Application wise Business Rules `){
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[7]/div[2]/div/div[1] and has same value Application wise Business Rules . :Assertion Failed`);
//browser.quit();
}else{
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[7]/div[2]/div/div[1] contain Application wise Business Rules . :Assertion Passed` );
}
});

browser.sleep(5000);
browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page329.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('crud1_testcase42' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : crud1');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page330.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page331.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page332.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/CRUD"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/CRUD"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/CRUD"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/CRUD"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/CRUD"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/CRUD"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/CRUD"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/CRUD"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/CRUD"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page333.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/CRUD"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page334.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page335.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(3000);
var value = element.all(by.className(`ng-tns-c13-10 ng-star-inserted`)).reduce(function(acc, elem) {
return elem.getText().then(function(text) {
var text2=`create`;
if( typeof text ==='object')
    {
    assert=text[0].toLowerCase();
    }
else    
    {
    assert=text.toLowerCase();
    }  
if(assert.indexOf(text2)!== -1){
console.log('Assertion Passed: Expected [CREATE] got [',assert,']. :Assertion Passed');
}
else{
console.log('Assertion Failed: Expected [CREATE] got [',assert,']. :Assertion Failed');
}
});
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page336.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('crud_testcase43' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : crud');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page337.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page338.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page339.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/CRUD"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/CRUD"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/CRUD"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/CRUD"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/CRUD"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/CRUD"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/CRUD"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/CRUD"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/CRUD"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page340.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/CRUD"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[2]/label/input`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[2]/label/input is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[2]/label/input is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[3]/div[2]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-formapp/div[3]/div[2]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-formapp/div[3]/div[2]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page341.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[3]/div[4]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-formapp/div[3]/div[4]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-formapp/div[3]/div[4]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page342.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(5000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Showing 1 to 10 of 18 entries`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[4] contain Showing 1 to 10 of 18 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[4] But has Showing 1 to 10 of 18 entries. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[5]/a[3]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[5]/a[3] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[5]/a[3] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-formapp/div[4]/div/div/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page343.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('component_testcase44' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : component');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page344.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page345.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page346.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(3000);
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert == `45`){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2 is equal to45. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div/div/div[2]/div[1]/h2 But has 45. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//h2`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//h2`)).get(1)), delay);
element.all(by.xpath(`//h2`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//h2`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//h2[1]`, text);
    }
else
    {
    Get_Text.set(`//h2[1]`, text[0]);
    }  
});
element.all(by.xpath(`//h2`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//h2[1]`, text);
    }
else
    {
    Get_Attribute.set(`//h2[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page347.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//h2`)).get(1).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page348.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page349.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Showing 1 to 10 of 45 entries`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[4] contain Showing 1 to 10 of 45 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[4]/div/div/div/div[4] But has Showing 1 to 10 of 45 entries. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page350.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('controlflow_testcase45' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : controlflow');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page351.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page352.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page353.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(4)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(4)), delay);
element.all(by.xpath(`//span`)).get(4).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(4).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[4]`, text);
    }
else
    {
    Get_Text.set(`//span[4]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(4).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[4]`, text);
    }
else
    {
    Get_Attribute.set(`//span[4]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page354.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(4).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(6)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(6)), delay);
element.all(by.xpath(`//span`)).get(6).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(6).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[6]`, text);
    }
else
    {
    Get_Text.set(`//span[6]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(6).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[6]`, text);
    }
else
    {
    Get_Attribute.set(`//span[6]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page355.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(6).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-controlflowapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-controlflowapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-controlflowapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-controlflowapp/div[2]/div/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-controlflowapp/div[2]/div/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-controlflowapp/div[2]/div/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-controlflowapp/div[2]/div/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-controlflowapp/div[2]/div/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-controlflowapp/div[2]/div/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-controlflowapp/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-controlflowapp/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-controlflowapp/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page356.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay);
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page357.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay);
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page358.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[3]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[3]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[3]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page359.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[4]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[4]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-controlflowapp/div[3]/div/div[4]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page360.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('comment_testcase46' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : comment');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page361.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});


browser.wait(until.presenceOf(element.all(by.xpath(`//div`)).get(2)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//div`)).get(2)), delay);
element.all(by.xpath(`//div`)).get(2).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//div`)).get(2).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//div[2]`, text);
    }
else
    {
    Get_Text.set(`//div[2]`, text[0]);
    }  
});
element.all(by.xpath(`//div`)).get(2).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//div[2]`, text);
    }
else
    {
    Get_Attribute.set(`//div[2]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page362.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//div`)).get(2).click();

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page363.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page364.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(21)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(21)), delay);
element.all(by.xpath(`//span`)).get(21).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(21).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[21]`, text);
    }
else
    {
    Get_Text.set(`//span[21]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(21).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[21]`, text);
    }
else
    {
    Get_Attribute.set(`//span[21]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page365.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(21).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[2]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[2]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[2]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/a/img`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/a/img is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/a/img is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page366.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[4]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[4]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-commentedlinesapp/div[3]/div[4]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page367.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[1] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[2]/label/input`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[2]/label/input is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[2]/label/input is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[3]/div[1]/div/table/thead/tr/th[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[4]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if (assert.indexOf( `Showing 1 to 10 of 45 entries`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[4] contain Showing 1 to 10 of 45 entries. :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[4] But has Showing 1 to 10 of 45 entries. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[4]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[4] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[4]/div/div/div/div[5]/a[4] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page368.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('colortest_testcase47' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : colortest');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page369.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page370.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page371.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.sleep(3000);var assert='';
element(by.xpath(`/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div`)).getCssValue('color').then(function (text) {
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }
if(!assert.includes("a")){
var assert1=assert.split("(");
assert=assert1.join("a(");
}
if (assert.indexOf( `rgba(40, 167, 69, 1)`)!== -1){
console.log('Assertion Passed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div containsrgba(40, 167, 69, 1). :Assertion Passed` );
}else{
console.log('Assertion Failed: Expected', assert, `for the Xpath/html/body/app-root/app-layout/section/app-dashboard/div[1]/div[2]/div[1]/a/app-stat/div/div not contain rgba(40, 167, 69, 1). :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page372.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('callchaindgrm_testcase48' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : callchaindgrm');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page373.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page374.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page375.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(4)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(4)), delay);
element.all(by.xpath(`//span`)).get(4).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(4).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[4]`, text);
    }
else
    {
    Get_Text.set(`//span[4]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(4).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[4]`, text);
    }
else
    {
    Get_Attribute.set(`//span[4]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page376.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(4).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(5)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(5)), delay);
element.all(by.xpath(`//span`)).get(5).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(5).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[5]`, text);
    }
else
    {
    Get_Text.set(`//span[5]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(5).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[5]`, text);
    }
else
    {
    Get_Attribute.set(`//span[5]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page377.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(5).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page378.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay);
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page379.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay);
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page380.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`))), delay);
element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="parent"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="parent"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="filter"]//option[@value="parent"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="filter"]//option[@value="parent"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page381.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page382.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(2000);element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[4]/ngx-graph/ngx-charts-chart/div/svg/g/g[3]/g[1]/g/text`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-callchainapp/div[4]/ngx-graph/ngx-charts-chart/div/svg/g/g[3]/g[1]/g/text is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-callchainapp/div[4]/ngx-graph/ngx-charts-chart/div/svg/g/g[3]/g[1]/g/text is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page383.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('collapsebar_testcase49' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : collapsebar');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page384.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page385.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page386.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(25)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(25)), delay);
element.all(by.xpath(`//span`)).get(25).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(25).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[25]`, text);
    }
else
    {
    Get_Text.set(`//span[25]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(25).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[25]`, text);
    }
else
    {
    Get_Attribute.set(`//span[25]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page387.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(25).click();

browser.sleep(2000);element(by.xpath(`/html/body/app-root/app-layout/app-sidebar/nav/div[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/app-sidebar/nav/div[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/app-sidebar/nav/div[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //i[@id="collapseExpand"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //i[@id="collapseExpand"]`))), delay);
element(by.xpath(` //i[@id="collapseExpand"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //i[@id="collapseExpand"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //i[@id="collapseExpand"]`, text);
    }
else
    {
    Get_Text.set(` //i[@id="collapseExpand"]`, text[0]);
    }  
});
element.all(by.xpath(` //i[@id="collapseExpand"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//i[@id="collapseExpand"]`, text);
    }
else
    {
    Get_Attribute.set(` //i[@id="collapseExpand"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page388.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //i[@id="collapseExpand"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page389.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('callchain_testcase50' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : callchain');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page390.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page391.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page392.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //i[@id="expandMinimize2"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //i[@id="expandMinimize2"]`))), delay);
element(by.xpath(` //i[@id="expandMinimize2"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //i[@id="expandMinimize2"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //i[@id="expandMinimize2"]`, text);
    }
else
    {
    Get_Text.set(` //i[@id="expandMinimize2"]`, text[0]);
    }  
});
element.all(by.xpath(` //i[@id="expandMinimize2"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//i[@id="expandMinimize2"]`, text);
    }
else
    {
    Get_Attribute.set(` //i[@id="expandMinimize2"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page393.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //i[@id="expandMinimize2"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(5)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(5)), delay);
element.all(by.xpath(`//span`)).get(5).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(5).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[5]`, text);
    }
else
    {
    Get_Text.set(`//span[5]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(5).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[5]`, text);
    }
else
    {
    Get_Attribute.set(`//span[5]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page394.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(5).click();

browser.sleep(5000);element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-callchainapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-callchainapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[1]/app-page-header/div/div/ol/li[1]/a`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-callchainapp/div[1]/app-page-header/div/div/ol/li[1]/a is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-callchainapp/div[1]/app-page-header/div/div/ol/li[1]/a is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[2]/div/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-callchainapp/div[2]/div/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-callchainapp/div[2]/div/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[1]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[1]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[1]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});
element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[2]/div/div[3]/label`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-callchainapp/div[2]/div/div[3]/label is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-callchainapp/div[2]/div/div[3]/label is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(5000);
browser.wait(until.presenceOf(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="appln"]//option[@value="All"]`))), delay);
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="appln"]//option[@value="All"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="appln"]//option[@value="All"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page395.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="appln"]//option[@value="All"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`))), delay);
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmp"]//option[@value="CODEBEHIND"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page396.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmp"]//option[@value="CODEBEHIND"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`))), delay);
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page397.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="cmpName"]//option[@value="About.aspx.vb"]`)).click();

browser.wait(until.presenceOf(element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`))), delay);
element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="parent"]`, text);
    }
else
    {
    Get_Text.set(` //select[@id="filter"]//option[@value="parent"]`, text[0]);
    }  
});
element.all(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//select[@id="filter"]//option[@value="parent"]`, text);
    }
else
    {
    Get_Attribute.set(` //select[@id="filter"]//option[@value="parent"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page398.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //select[@id="filter"]//option[@value="parent"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[5]/button`)).isEnabled().then(function(text){
if( typeof text ==='object')
    {
    assert=text[0];
    }
else
    {
    assert=text;
    }  
if(assert==true)
    {
    console.log(`Assertion Passed:  /html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[5]/button is enabled. :Assertion Passed`);
    }
if(assert==false)
    {
    console.log(`Assertion Failed: /html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[5]/button is disabled. :Assertion Failed`);
//browser.quit();
    }
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="submitBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="submitBtn"]`))), delay);
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="submitBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="submitBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="submitBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="submitBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page399.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="submitBtn"]`)).click();

browser.sleep(3000);element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[6]/button`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[6]/button is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-callchainapp/div[3]/div/div[6]/button is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.sleep(3000);
browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page400.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
it('allreport_testcase51' , function() {browser.ignoreSynchronization =true;
						console.log('Application_name : vbnet, Scenario_name : allreport');
                        browser.driver.manage().window().maximize();
                        browser.get("https://lcaas.techmahindra.com/vbnet/");
                        browser.waitForAngularEnabled(false);
                        browser.sleep(10);
                        var until = protractor.ExpectedConditions;
                        var delay = 60000;
                        function hexToRgbA(hex){
                                            var c;
                                            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
                                                c= hex.substring(1).split('');
                                                if(c.length== 3){
                                                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                                                }
                                                c= '0x'+c.join('');
                                                return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(', ')+', 1)';
                                            }
                                            throw new Error('Bad Hex');
                                        }
        

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Uname"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Uname"]`)).clear();
element(by.xpath(`//input[@id="Uname"]`)).getText().then(function(text){
console.log('test_step_inputdemouser');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page401.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Uname"]`)).sendKeys(`demouser`);
element.all(by.xpath(` //input[@id="Uname"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Uname"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Uname"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Uname"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(`//input[@id="Upwd"]`))), delay, 'Element taking too long to appear in the DOM');
element(by.xpath(`//input[@id="Upwd"]`)).clear();
element(by.xpath(`//input[@id="Upwd"]`)).getText().then(function(text){
console.log('test_step_inputdemouser1');});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page402.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //input[@id="Upwd"]`)).sendKeys(`demouser1`);
element.all(by.xpath(` //input[@id="Upwd"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Text.set(` //input[@id="Upwd"]`, text[0]);
    }  
});
element.all(by.xpath(` //input[@id="Upwd"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text);
    }
else
    {
    Get_Attribute.set(` //input[@id="Upwd"]`, text[0]);
    }  
});

browser.wait(until.presenceOf(element(by.xpath(` //button[@id="loginBtn"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //button[@id="loginBtn"]`))), delay);
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //button[@id="loginBtn"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Text.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
element.all(by.xpath(` //button[@id="loginBtn"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//button[@id="loginBtn"]`, text);
    }
else
    {
    Get_Attribute.set(` //button[@id="loginBtn"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page403.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //button[@id="loginBtn"]`)).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(1)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(1)), delay);
element.all(by.xpath(`//span`)).get(1).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(1).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[1]`, text);
    }
else
    {
    Get_Text.set(`//span[1]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(1).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[1]`, text);
    }
else
    {
    Get_Attribute.set(`//span[1]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page404.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(1).click();

browser.sleep(2000);element(by.xpath(`/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-masterinvapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(2)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(2)), delay);
element.all(by.xpath(`//span`)).get(2).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(2).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[2]`, text);
    }
else
    {
    Get_Text.set(`//span[2]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(2).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[2]`, text);
    }
else
    {
    Get_Attribute.set(`//span[2]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page405.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(2).click();

browser.sleep(2000);element(by.xpath(`/html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-x-ref-application/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/spiderchartApp"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/spiderchartApp"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/spiderchartApp"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/spiderchartApp"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page406.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/spiderchartApp"]`)).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-spiderfilterapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(4)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(4)), delay);
element.all(by.xpath(`//span`)).get(4).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(4).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[4]`, text);
    }
else
    {
    Get_Text.set(`//span[4]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(4).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[4]`, text);
    }
else
    {
    Get_Attribute.set(`//span[4]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page407.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(4).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(5)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(5)), delay);
element.all(by.xpath(`//span`)).get(5).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(5).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[5]`, text);
    }
else
    {
    Get_Text.set(`//span[5]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(5).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[5]`, text);
    }
else
    {
    Get_Attribute.set(`//span[5]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page408.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(5).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-callchainapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-callchainapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-callchainapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(6)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(6)), delay);
element.all(by.xpath(`//span`)).get(6).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(6).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[6]`, text);
    }
else
    {
    Get_Text.set(`//span[6]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(6).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[6]`, text);
    }
else
    {
    Get_Attribute.set(`//span[6]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page409.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(6).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-controlflowapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-controlflowapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-controlflowapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(7)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(7)), delay);
element.all(by.xpath(`//span`)).get(7).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(7).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[7]`, text);
    }
else
    {
    Get_Text.set(`//span[7]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(7).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[7]`, text);
    }
else
    {
    Get_Attribute.set(`//span[7]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page410.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(7).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-programprocessflowext/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-programprocessflowext/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-programprocessflowext/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(8)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(8)), delay);
element.all(by.xpath(`//span`)).get(8).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(8).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[8]`, text);
    }
else
    {
    Get_Text.set(`//span[8]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(8).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[8]`, text);
    }
else
    {
    Get_Attribute.set(`//span[8]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page411.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(8).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(9)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(9)), delay);
element.all(by.xpath(`//span`)).get(9).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(9).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[9]`, text);
    }
else
    {
    Get_Text.set(`//span[9]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(9).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[9]`, text);
    }
else
    {
    Get_Attribute.set(`//span[9]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page412.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(9).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(10)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(10)), delay);
element.all(by.xpath(`//span`)).get(10).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(10).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[10]`, text);
    }
else
    {
    Get_Text.set(`//span[10]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(10).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[10]`, text);
    }
else
    {
    Get_Attribute.set(`//span[10]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page413.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(10).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(11)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(11)), delay);
element.all(by.xpath(`//span`)).get(11).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(11).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[11]`, text);
    }
else
    {
    Get_Text.set(`//span[11]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(11).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[11]`, text);
    }
else
    {
    Get_Attribute.set(`//span[11]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page414.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(11).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(12)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(12)), delay);
element.all(by.xpath(`//span`)).get(12).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(12).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[12]`, text);
    }
else
    {
    Get_Text.set(`//span[12]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(12).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[12]`, text);
    }
else
    {
    Get_Attribute.set(`//span[12]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page415.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(12).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(13)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(13)), delay);
element.all(by.xpath(`//span`)).get(13).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(13).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[13]`, text);
    }
else
    {
    Get_Text.set(`//span[13]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(13).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[13]`, text);
    }
else
    {
    Get_Attribute.set(`//span[13]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page416.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(13).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-sankey/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-sankey/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-sankey/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//a`)).get(15)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//a`)).get(15)), delay);
element.all(by.xpath(`//a`)).get(15).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//a`)).get(15).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//a[15]`, text);
    }
else
    {
    Get_Text.set(`//a[15]`, text[0]);
    }  
});
element.all(by.xpath(`//a`)).get(15).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[15]`, text);
    }
else
    {
    Get_Attribute.set(`//a[15]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page417.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//a`)).get(15).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(15)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(15)), delay);
element.all(by.xpath(`//span`)).get(15).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(15).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[15]`, text);
    }
else
    {
    Get_Text.set(`//span[15]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(15).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[15]`, text);
    }
else
    {
    Get_Attribute.set(`//span[15]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page418.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(15).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsscreen-app/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(16)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(16)), delay);
element.all(by.xpath(`//span`)).get(16).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(16).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[16]`, text);
    }
else
    {
    Get_Text.set(`//span[16]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(16).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[16]`, text);
    }
else
    {
    Get_Attribute.set(`//span[16]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page419.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(16).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-cicsvalidation-app/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-cicsvalidation-app/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/CRUD"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/CRUD"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/CRUD"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/CRUD"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/CRUD"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/CRUD"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/CRUD"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/CRUD"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/CRUD"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page420.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/CRUD"]`)).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-formapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/glossary"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/glossary"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/glossary"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/glossary"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/glossary"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/glossary"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/glossary"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page421.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/glossary"]`)).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-bre/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(19)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(19)), delay);
element.all(by.xpath(`//span`)).get(19).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(19).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[19]`, text);
    }
else
    {
    Get_Text.set(`//span[19]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(19).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[19]`, text);
    }
else
    {
    Get_Attribute.set(`//span[19]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page422.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(19).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-impact/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-impact/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-impact/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/commentedlinesApp"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/commentedlinesApp"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/commentedlinesApp"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/commentedlinesApp"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/commentedlinesApp"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/commentedlinesApp"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/commentedlinesApp"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/commentedlinesApp"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/commentedlinesApp"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page423.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/commentedlinesApp"]`)).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-commentedlinesapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(22)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(22)), delay);
element.all(by.xpath(`//span`)).get(22).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(22).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[22]`, text);
    }
else
    {
    Get_Text.set(`//span[22]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(22).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[22]`, text);
    }
else
    {
    Get_Attribute.set(`//span[22]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page424.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(22).click();


browser.wait(until.presenceOf(element.all(by.xpath(`//span`)).get(23)), delay, 'Element taking too long to appear in the DOM');

browser.wait(until.elementToBeClickable(element.all(by.xpath(`//span`)).get(23)), delay);
element.all(by.xpath(`//span`)).get(23).getText().then(function(text){
var description =''; 
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element.all(by.xpath(`//span`)).get(23).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(`//span[23]`, text);
    }
else
    {
    Get_Text.set(`//span[23]`, text[0]);
    }  
});
element.all(by.xpath(`//span`)).get(23).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//span[23]`, text);
    }
else
    {
    Get_Attribute.set(`//span[23]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page425.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element.all(by.xpath(`//span`)).get(23).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-orphanapp/div[1]/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/userguide"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/userguide"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/userguide"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/userguide"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/userguide"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/userguide"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/userguide"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/userguide"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/userguide"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page426.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/userguide"]`)).click();

browser.sleep(1000);element(by.xpath(`/html/body/app-root/app-layout/section/app-charts/div/app-page-header/div/div/ol/li[2]`)).isPresent().then(function (text) {
console.log("presence");
if (text == true){
console.log('Assertion Passed: Expected element xpath /html/body/app-root/app-layout/section/app-charts/div/app-page-header/div/div/ol/li[2] is present in current page. :Assertion Passed');
}else{
console.log(`Assertion Failed: Expected element xpath/html/body/app-root/app-layout/section/app-charts/div/app-page-header/div/div/ol/li[2] is not present in current page. :Assertion Failed`);
//browser.quit();
}
});

browser.wait(until.presenceOf(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay, 'Element taking too long to appear in the DOM');
browser.wait(until.elementToBeClickable(element(by.xpath(` //a[@href="/vbnet/login"]`))), delay);
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function(text){  
var description ='';  
    if( typeof text ==='object')
    { description=text[0];}
    else{ description=text;} 
console.log('test_step_click',description);});
element(by.xpath(` //a[@href="/vbnet/login"]`)).getText().then(function (text) {
if( typeof text ==='object')
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Text.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
element.all(by.xpath(` //a[@href="/vbnet/login"]`)).getAttribute('value').then(function (text) {
if( typeof text ==='object')
    {
    Get_Attribute.set(`//a[@href="/vbnet/login"]`, text);
    }
else
    {
    Get_Attribute.set(` //a[@href="/vbnet/login"]`, text[0]);
    }  
});
browser.takeScreenshot().then(function (png) {var dir="vbnet";
var fname="page427.png"; var stream1 = fs.createWriteStream(path.join(dir, fname));
                        stream1.write(new Buffer(png, 'base64'));
                        stream1.end();});
element(by.xpath(` //a[@href="/vbnet/login"]`)).click();
});
afterEach(function(){
	console.log("it completed");
});
});