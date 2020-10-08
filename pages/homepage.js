let homePage = function () {
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let operator = element(by.model('operator'));
    let goButton = element(by.id('gobutton'));

    this.get = function (url) {
        browser.get(url);
    }

    this.enterFirstName = function (first) {
        firstNumber_input.sendKeys(first);
    }

    this.enterSecondName = function (second) {
        secondNumber_input.sendKeys(second);
    }

    this.clickOperator = function () {
        operator.click();
    }

    this.click = function () {
        goButton.click();
    }

    this.verifyResult = function (result) {
        let output = element(by.binding('latest'));
        expect(output.getText()).toEqual(result);
    }

    this.selectOperator = function (value) {
        element(by.css('option[value="' + value + '"]')).click();
    }
};

module.exports = new homePage();