let homep=require('../pages/homepage')

describe('Protractor Demo App', function() {
  
  beforeAll(function() {
    homep.get('http://juliemr.github.io/protractor-demo/');
  });


    it('addition', function() {
      homep.enterFirstName('5');
      homep.enterSecondName('1');
      homep.click();
      homep.verifyResult('4');
    });

    it('substraction', function() {
      homep.enterFirstName('4');
      browser.sleep(1000);
      homep.clickOperator();
      browser.sleep(1000);
      homep.selectOperator('SUBTRACTION');
      homep.enterSecondName('1');
      homep.click();
      homep.verifyResult('3');
    });

    it('multiplication', function() {
      homep.enterFirstName('4');
      browser.sleep(1000);
      homep.clickOperator();
      browser.sleep(1000);
      homep.selectOperator('MULTIPLICATION');
      homep.enterSecondName('1');
      homep.click();
      homep.verifyResult('4');
    });
  });