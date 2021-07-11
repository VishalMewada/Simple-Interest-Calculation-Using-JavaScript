function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RPysmAICN4":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var principleAmountExternal = player.GetVar("principleAmount");
var interestRateExternal = player.GetVar("rateOfInterest");
var yearExternal = player.GetVar("year");

var simpleInterestExternal = (principleAmountExternal * yearExternal * interestRateExternal) / 100;

player.SetVar("simpleInterest", simpleInterestExternal);
}

