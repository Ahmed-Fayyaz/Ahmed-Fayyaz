const parsePage = require("./invoker.js");

(async () => {
  //console.log("starting parsePage");
  let siteActions = {
    goToUrl: "https://nabtrade.com.au/onboarding",
    actionsList: [
      {
        actionType: "click",
        fieldCaption: "Click Individual",
        selectorForClick:
          "#onboard-wizard-stage1 > div:nth-child(6) > div > span",
        selectorForInput: "",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: ""
      },
      {
        actionType: "click",
        fieldCaption: "Continue Stage2",
        selectorForClick: "#stage1continue > span",
        selectorForInput: "",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: ""
      },
      {
        actionType: "click",
        fieldCaption: "Nabtrade Cash Account",
        selectorForClick:
          "#account-funding-body > div.portlet-entity-wizard-type.selected > div > span",
        selectorForInput: "",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: ""
      },
      {
        actionType: "click",
        fieldCaption: "Continue Stage3",
        selectorForClick: "#stage2continue > span",
        selectorForInput: "",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: ""
      },
      {
        actionType: "click",
        fieldCaption: "No existing account",
        selectorForClick: ".entity-wizard-type-noaccount",
        selectorForInput: "",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: ""
      },
      {
        actionType: "input",
        fieldCaption: "Given Name",
        selectorForClick: "",
        selectorForInput: "#GivenName",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: "Fayyaz"
      },
      {
        actionType: "input",
        fieldCaption: "Family Name",
        selectorForClick: "",
        selectorForInput: "#FamilyName",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: "Ahmed"
      },
      {
        actionType: "input",
        fieldCaption: "Email",
        selectorForClick: "",
        selectorForInput: "#Email",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: "ahmed_fayyaz@outlook.com"
      },
      {
        actionType: "input",
        fieldCaption: "Confirm Email",
        selectorForClick: "",
        selectorForInput: "#ConfirmEmail",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: "ahmed_fayyaz@outlook.com"
      },
      {
        actionType: "input",
        fieldCaption: "Mobile Number",
        selectorForClick: "",
        selectorForInput: "#Mobile",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: "0406566223"
      },
      {
        actionType: "input",
        fieldCaption: "Confirm Mobile Number",
        selectorForClick: "",
        selectorForInput: "#ConfirmMobile",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: "0406566223"
      },
      {
        actionType: "click",
        fieldCaption: "Start Application",
        selectorForClick: "#Submit > span",
        selectorForInput: "#ConfirmMobile",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: "0406566223"
      },
      {
        actionType: "select",
        fieldCaption: "Title",
        selectorForClick: "",
        selectorForInput: "#ConfirmMobile",
        selectorForSelect: "#MainTitle",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: "Mr"
      },
      {
        actionType: "select",
        fieldCaption: "DOB Date",
        selectorForClick: "",
        selectorForInput: "#ConfirmMobile",
        selectorForSelect: "#DateOfBirthDay",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: "24"
      },
      {
        actionType: "select",
        fieldCaption: "DOB Month",
        selectorForClick: "",
        selectorForInput: "#ConfirmMobile",
        selectorForSelect: "#DateOfBirthMonth",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: "09"
      },
      {
        actionType: "select",
        fieldCaption: "DOB Year",
        selectorForClick: "",
        selectorForInput: "#ConfirmMobile",
        selectorForSelect: "#DateOfBirthYear",
        selectorForWait: "",
        selectorType: "selector",
        valueForInput: "1978"
      }
    ]
  };
  let returnData = await parsePage(siteActions);
  console.log(JSON.stringify(returnData));
})();
