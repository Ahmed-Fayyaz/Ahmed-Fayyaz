const doSelect = async (page, actionDets, logArray) => {
  try {
    if (actionDets.selectorType === "selector") {
      await page.waitForSelector(actionDets.selectorForInput);
      logArray.push(
        "Found Field " +
          actionDets.fieldCaption +
          " [" +
          actionDets.selectorForInput +
          "]"
      );
    } else if (actionDets.selectorType === "xpath") {
      await page.waitForXpath(actionDets.selectorForInput);
      logArray.push(
        "Found Field " +
          actionDets.fieldCaption +
          " [" +
          actionDets.selectorForInput +
          "]"
      );
    }

    // await page.click(actionDets.selectorForInput);
    // logArray.push("Clicked on " + actionDets.fieldCaption);

    await page.select(actionDets.selectorForInput, actionDets.valueForInput);
    logArray.push("Select for field " + actionDets.fieldCaption + " completed");

    if (actionDets.selectorForWait && actionDets.selectorForWait !== "") {
      await page.waitForSelector(actionDets.selectorForWait);
      logArray.push(
        "Wait for field " + actionDets.selectorForWait + " completed"
      );
    }
  } catch (err) {
    logArray.push(
      "Could not find Field for input " +
        actionDets.fieldCaption +
        " [" +
        actionDets.selectorForInput +
        "]"
    );
  }
};

module.exports = doSelect;
