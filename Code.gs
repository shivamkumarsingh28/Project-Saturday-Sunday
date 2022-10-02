function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1e6oQE-zpfXvt714SZ3iD1TtXbWwZ9-LAkRJFzmmTlwg/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Data");

  ws.appendRow([
    formObject.first_name,
    formObject.last_name,
    formObject.gender,
    formObject.dateOfBirth,
    formObject.email,
    formObject.phone

  ]);
}
