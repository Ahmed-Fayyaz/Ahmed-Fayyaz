const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const navigationPromise = page.waitForNavigation();

  try {
    await page.goto("https://www.nabtrade.com.au/investor/home");
    //await page.waitFor(1000);

    await page.setViewport({ width: 1024, height: 867 });
    await navigationPromise;
    //await page.waitFor(1000);

    await page.waitForSelector(".container > #navbar #toggle-login");
    await page.click(".container > #navbar #toggle-login");
    await navigationPromise;
    //await page.waitFor(1000);

    await page.waitForSelector(".parbase #usernameField");
    await page.focus(".parbase #usernameField");
    await page.type(".parbase #usernameField", "85143898");
    //await page.waitFor(1000);
    await navigationPromise;

    //   await browser.close();
    //#passwordField

    await page.focus(".parbase #passwordField");
    await page.type("#passwordField", "sharedPass11");
    //await page.waitFor(1000);
    await navigationPromise;

    await page.waitForSelector(
      ".parbase > .login-frame > #client-login-redesign > p > .btn"
    );
    await page.click(
      ".parbase > .login-frame > #client-login-redesign > p > .btn"
    );
    //await page.waitFor(1000);
    await navigationPromise;
    console.log("log in completed, about to click on account transfer");
    await page.waitForSelector(
      "#dvMenu > div:nth-child(1) > div:nth-child(6) > a"
    );

    await page.click("#dvMenu > div:nth-child(1) > div:nth-child(6) > a");
    console.log("Clicked on cash transfers");
    await page.waitForSelector(
      ".formElement > #transferDateTypeImmediate #TransferDateImmediate"
    );

    //#dvMenu > div:nth-child(1) > div:nth-child(6) > a

    await page.click(
      ".formElement > #transferDateTypeImmediate #TransferDateImmediate"
    );

    await page.waitForSelector(
      ".formElement > #transferDateTypeImmediate #TransferDateImmediate"
    );
    await page.click(
      ".formElement > #transferDateTypeImmediate #TransferDateImmediate"
    );

    await page.waitForSelector(
      ".formElement > .formElementContents > .formElementContent > .hideScroll > .selectedTxt"
    );
    await page.click(
      ".formElement > .formElementContents > .formElementContent > .hideScroll > .selectedTxt"
    );

    await page.waitForSelector(
      ".scroll-panel > .newListSelected > .newList > li:nth-child(3) > a"
    );
    await page.click(
      ".scroll-panel > .newListSelected > .newList > li:nth-child(3) > a"
    );

    await page.waitForSelector(
      ".formElement > #toAccountDropdownAjax > .formElementContent > .newListSelected > .selectedTxt"
    );
    await page.click(
      ".formElement > #toAccountDropdownAjax > .formElementContent > .newListSelected > .selectedTxt"
    );

    await page.waitForSelector(
      "#toAccountDropdownAjax > .formElementContent > .newListSelected > .newList > li:nth-child(3) > a"
    );
    await page.click(
      "#toAccountDropdownAjax > .formElementContent > .newListSelected > .newList > li:nth-child(3) > a"
    );

    await page.waitForSelector(".formElement #Amount");
    await page.click(".formElement #Amount");

    await page.waitForSelector(
      ".layoutStandardForm > .formWrapper > .nonnml:nth-child(7) > .formElement:nth-child(2) > .formElementContent"
    );
    await page.click(
      ".layoutStandardForm > .formWrapper > .nonnml:nth-child(7) > .formElement:nth-child(2) > .formElementContent"
    );

    await page.waitForSelector(".formElement #RemitterName");
    await page.click(".formElement #RemitterName");

    await page.waitForSelector(".formElement #Description");
    await page.click(".formElement #Description");

    await page.waitForSelector(
      ".fnzportlet > #\31 547411327 > #transferForm > .layoutStandardForm > .formWrapper"
    );
    await page.click(
      ".fnzportlet > #\31 547411327 > #transferForm > .layoutStandardForm > .formWrapper"
    );

    await page.waitForSelector(
      "#\31 547411327 > #transferForm > .lightboxButtons > #nextButton > span"
    );
    await page.click(
      "#\31 547411327 > #transferForm > .lightboxButtons > #nextButton > span"
    );

    await page.waitForSelector(
      "#transferForm > .pre-help-wrapper > .lightboxButtons > #nextButton > span"
    );
    await page.click(
      "#transferForm > .pre-help-wrapper > .lightboxButtons > #nextButton > span"
    );

    await page.waitForSelector(".formElement #PIN");
    await page.click(".formElement #PIN");

    await page.waitForSelector(
      "#\31 547411327 > #transferForm > .lightboxButtons > #confirmButton > span"
    );
    await page.click(
      "#\31 547411327 > #transferForm > .lightboxButtons > #confirmButton > span"
    );

    await page.waitForSelector(
      "#\31 547411327 > #confirmClose > .buttonContainer > #closeButton > span"
    );
    await page.click(
      "#\31 547411327 > #confirmClose > .buttonContainer > #closeButton > span"
    );
    await navigationPromise;
  } catch (err) {
    console.log("some error: " + err);
  } finally {
    await browser.close();
  }
})();
