const puppeteer = require("puppeteer");
const doInput = require("./doInput");
const doClick = require("./doClick");
const doRead = require("./doRead");
const doSelect = require("./doSelect");

this.notifyUi = (chromeLogObj, logArray) => {
  if (chromeLogObj && chromeLogObj._type !== "warning") {
    //console.log(chromeLogObj._text);
    logArray.push(chromeLogObj._text);
  }
};

const parsePage = async siteActions => {
  let logArray = [];
  const browser = await puppeteer.launch({ headless: false });
  logArray.push("Chrome Launch completed");
  const page = await browser.newPage();
  logArray.push("Opened new page");

  page.on("console", (...args) => {
    this.notifyUi(args[0], logArray);
  });

  try {
    let outTemp = {};
    await page.goto(siteActions.goToUrl);
    logArray.push("Goto URL completed[" + siteActions.goToUrl + "]");

    for (let i = 0; i < siteActions.actionsList.length; i++) {
      let actionDets = siteActions.actionsList[i];
      if (actionDets.actionType === "input") {
        await doInput(page, actionDets, logArray);
      } else if (actionDets.actionType === "click") {
        await doClick(page, actionDets, logArray);
      } else if (actionDets.actionType === "read") {
        outTemp = await doRead(page, actionDets, logArray);
      } else if (actionDets.actionType === "select") {
        outTemp = await doSelect(page, actionDets, logArray);
      }
    }

    return {
      pageData: outTemp.pageData,
      errorMessage: outTemp.error,
      actionDetails: logArray
    };
  } catch (err) {
    return {
      pageData: {},
      errorMessage: err,
      actionDetails: logArray
    };
  } finally {
    await browser.close();
  }
};

module.exports = parsePage;
