const readField = async (fieldDets, document) => {
  let returnText = "";
  let docElement = {};
  console.log("reading a field: " + JSON.stringify(fieldDets));
  if (fieldDets.selectorType === "queryselector") {
    docElement = document.querySelector(fieldDets.selectorForRead);
    console.log("Found query selector: " + fieldDets.selectorForRead);
    if (docElement && docElement !== undefined) {
      returnText = docElement.innerText.trim();
    }
  } else if (fieldDets.selectorType === "xpathselector") {
    docElement = document.xPathSelector(fieldDets.selectorForRead);
    console.log("Found query selector: " + fieldDets.selectorForRead);
    if (docElement && docElement !== undefined) {
      returnText = docElement.innerText.trim();
    }
  }
  return returnText;
};

const doRead = async (page, actionDets, logArray) => {
  try {
    //await navigationPromise;
    logArray.push("About to read fields ");

    let outTemp = await page.evaluate(async actionDets => {
      console.log(
        "[CHROME] Request received to read " +
          actionDets.readFieldsList.length +
          " fields."
      );
      let returnObj = {};
      if (actionDets && actionDets !== undefined) {
        for (let i = 0; i < actionDets.readFieldsList.length; i++) {
          let fieldDets = actionDets.readFieldsList[i];

          console.log("[CHROME] Reading field " + fieldDets.fieldName);

          let fieldText = "";
          if (fieldDets.selectorType === "queryselector") {
            docElement = await document.querySelector(
              fieldDets.selectorForRead
            );

            if (docElement && docElement !== undefined) {
              console.log(
                "[CHROME] Found query selector: " + fieldDets.selectorForRead
              );
              fieldText = docElement.innerText.trim();
            } else {
              console.log(
                "[CHROME] Could not find query selector: " +
                  fieldDets.selectorForRead
              );
            }
          } else if (fieldDets.selectorType === "xpathselector") {
            docElement = await document.xPathSelector(
              fieldDets.selectorForRead
            );

            if (docElement && docElement !== undefined) {
              console.log(
                "[CHROME] Found xpath selector: " + fieldDets.selectorForRead
              );
              fieldText = docElement.innerText.trim();
            } else {
              console.log(
                "[CHROME] Could not find xpath selector: " +
                  fieldDets.selectorForRead
              );
            }
          }

          returnObj[fieldDets.fieldName] = fieldText;
        }

        console.log("[CHROME] Fields received for read, returning results");
        return { pageData: returnObj, error: "" };
      } else {
        console.log("[CHROME] No fields received for read, returning empty");
        return { pageData: returnObj, error: "" };
      }
    }, actionDets);

    if (outTemp && outTemp !== undefined) {
      logArray.push("Chrome Read finished ");
    } else {
      logArray.push("Chrome Read finished, received back undefined.");
      outTemp = {};
    }
    return outTemp;
  } catch (err) {
    logArray.push("Could not find Fields for read, Error: " + err);
    return { pageData: {}, error: err };
  }
};

module.exports = doRead;
