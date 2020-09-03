var url = "https://docs.google.com/spreadsheets/d/1tEHSm0C2IDS_6rL3Motj-Q5SX_Sxx1ezJ11Ck26F5eE/edit#gid=0";

function doGet()
{
  /* My Application Options.*/
  
  var SpreadSheet = SpreadsheetApp.openByUrl(url);
  var workSheet = SpreadSheet.getSheetByName("options");
  var list = workSheet.getRange(1,1,workSheet.getRange("A1").getDataRegion().getLastRow(),1).getValues();

  var htmlListArray = list.map(function(r){ return "<option>"+ r[0] +"</option>";}).join("");

  var tmp = HtmlService.createTemplateFromFile("index");
  tmp.list = htmlListArray;
  
  return tmp.evaluate();
}

function newClicked(userInfo)
{ 
  
  var SpreadSheet = SpreadsheetApp.openByUrl(url);
  var workSheet = SpreadSheet.getSheetByName("form");
  
  workSheet.appendRow([userInfo.FirstName,userInfo.LastName,userInfo.App,new Date()]); 
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


