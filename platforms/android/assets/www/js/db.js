var db;
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady() {
  db = window.openDatabase("test", "1.0", "Test DB", 1000000);
  db.transaction(createDB, errorCB, successCB);   
}

function createDB(tx) {
	tx.executeSql('DROP TABLE IF EXISTS WELEND');
	tx.executeSql('CREATE TABLE IF NOT EXISTS WELEND (id unique, data)');
}

function errorCB(tx, err) {
	console.log("Error processing SQL: "+err);
}

function successCB() {
  console.log("DB Creation success!");
}