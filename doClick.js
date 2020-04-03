const doInput = async (page, actionDets, logArray) => {
  try {
    if (actionDets.selectorType === "selector") {
      await page.waitForSelector(actionDets.selectorForClick);
      logArray.push(
        "Found Field " +
          actionDets.fieldCaption +
          " [" +
          actionDets.selectorForClick +
          "]"
      );
    } else if (actionDets.selectorType === "xpath") {
      await page.waitForXpath(actionDets.selectorForClick);
      logArray.push(
        "Found Field " +
          actionDets.fieldCaption +
          " [" +
          actionDets.selectorForClick +
          "]"
      );
    }

    await page.click(actionDets.selectorForClick);
    logArray.push("Clicked on " + actionDets.fieldCaption);

    if (actionDets.selectorForWait && actionDets.selectorForWait !== "") {
      await page.waitForSelector(actionDets.selectorForWait);
      logArray.push(
        "Wait for field " + actionDets.selectorForWait + " completed"
      );
    }
  } catch (err) {
    logArray.push(
      "Could not find Field for click " +
        actionDets.fieldCaption +
        " [" +
        actionDets.selectorForClick +
        "]. Error is: " +
        err
    );
  }
};

module.exports = doInput;
