const parsePage = require("./invoker.js");

(async () => {
  //console.log("starting parsePage");
  let siteActions = {
    goToUrl: "https://www.cmcmarketsstockbroking.com.au/",
    actionsList: [
      {
        actionType: "input",
        selectorType: "selector",
        selectorForInput: ".row #logonAccount",
        selectorForWait: "",
        valueForInput: "normanka1802",
        fieldCaption: "Login ID"
      },
      {
        actionType: "input",
        selectorType: "selector",
        selectorForInput: ".row #logonPassword",
        selectorForWait: "",
        valueForInput: "Psos=1808",
        fieldCaption: "Password"
      },
      {
        actionType: "click",
        selectorType: "selector",
        selectorForClick: ".row #loginButton",
        selectorForWait: "",
        fieldCaption: "Login Button"
      },
      {
        actionType: "click",
        selectorType: "selector",
        selectorForClick: "#navigation > div:nth-child(2) > a",
        selectorForWait:
          "#TradingAccountsController > div > div:nth-child(4) > div.offset-top-10.content-min-height-500 > table > tbody > tr.ng-scope > td:nth-child(1) > a",
        fieldCaption: "Account Menu"
      },
      {
        actionType: "read",
        isTable: true,
        readFieldsList: [
          {
            fieldName: "accountId",
            selectorType: "queryselector",
            selectorForRead:
              "#TradingAccountsController > div > div:nth-child(4) > div.offset-top-10.content-min-height-500 > table > tbody > tr.ng-scope > td:nth-child(1) > a"
          },
          {
            fieldName: "accountName",
            selectorType: "queryselector",
            selectorForRead:
              "#TradingAccountsController > div > div:nth-child(4) > div.offset-top-10.content-min-height-500 > table > tbody > tr.ng-scope > td:nth-child(2)"
          }
        ]
      }
    ]
  };
  let returnData = await parsePage(siteActions);
  console.log(JSON.stringify(returnData));
})();
