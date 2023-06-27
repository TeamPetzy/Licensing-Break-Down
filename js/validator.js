function validate() {
  var fieldsWithoutValue = [];
  var fieldsWithValue = [];

  var customerName = document.getElementById("customerName").value;

  var dateInput = document.getElementById("dateInput").value;
  var timeInput = document.getElementById("timeInput").value;

  var stockNumber = document.getElementById("stockNumber").value;

  var newPlates = document.getElementById("newPlates").checked;
  var transfer = document.getElementById("transfer").checked;
  var setayLease = document.getElementById("setayLease").checked;
  var gMFLLease = document.getElementById("gMFLLease").checked;

  var passenger = document.getElementById("passenger").checked;
  var commercial = document.getElementById("commercial").checked;
  var business = document.getElementById("business").checked;
  var personal = document.getElementById("personal").checked;

  var weight = document.getElementById("weight").value;

  var yes = document.getElementById("yes").checked;
  var no = document.getElementById("no").checked;

  var thirtyTwo = document.getElementById("thirtyTwo").checked;
  var fiftyNine = document.getElementById("fiftyNine").checked;
  var sixtyFour = document.getElementById("sixtyFour").checked;

  var otherLicensePrice = document.getElementById("otherLicensePrice").value;

  var insuranceProvider = document.getElementById("insuranceProvider").value;

  var salesConsultant = document.getElementById("salesConsultant").value;
  var businessManager = document.getElementById("businessManager").value;

  if (customerName === "") {
    fieldsWithoutValue.push("Customer Name");
  } else {
    fieldsWithValue.push("Customer Name");
  }

  if (dateInput === "") {
    fieldsWithoutValue.push("Date");
  } else {
    fieldsWithValue.push("Date");
  }
  if (timeInput === "") {
    fieldsWithoutValue.push("Time");
  } else {
    fieldsWithValue.push("Time");
  }

  if (stockNumber === "") {
    fieldsWithoutValue.push("Stock Number");
  } else {
    fieldsWithValue.push("Stock Number");
  }

  if (newPlates === false && transfer === false) {
    fieldsWithoutValue.push("New Plates or Transfer");
  } else {
    fieldsWithValue.push("New Plates or Transfer");
  }
  if (setayLease === false && gMFLLease === false) {
    fieldsWithoutValue.push("Setay Lease or GMFL Lease");
  } else {
    fieldsWithValue.push("Setay Lease or GMFL Lease");
  }

  if (
    passenger === false &&
    commercial === false &&
    business === false &&
    personal === false
  ) {
    fieldsWithoutValue.push("Plate Type");
  } else {
    fieldsWithValue.push("Plate Type");
  }

  if (weight === "") {
    fieldsWithoutValue.push("Weight");
  } else {
    fieldsWithValue.push("Weight");
  }

  if (yes === false && no === false) {
    fieldsWithoutValue.push("Insurance Information Procvided");
  } else {
    fieldsWithValue.push("Insurance Information Procvided");
  }

  if (
    thirtyTwo === false &&
    fiftyNine === false &&
    sixtyFour === false &&
    otherLicensePrice === ""
  ) {
    fieldsWithoutValue.push("Licensing Price");
  } else {
    fieldsWithValue.push("Licensing Price");
  }

  if (yes && insuranceProvider === "") {
    fieldsWithoutValue.push("Insurance Provider");
  } else if (yes && insuranceProvider !== "") {
    fieldsWithValue.push("Insurance Provider");
  }

  if (salesConsultant === "") {
    fieldsWithoutValue.push("Sales Consultant");
  } else {
    fieldsWithValue.push("Sales Consultant");
  }
  if (businessManager === "") {
    fieldsWithoutValue.push("Business Manager");
  } else {
    fieldsWithValue.push("Business Manager");
  }

  if (fieldsWithValue.length > 0) {
    return true;
  }

  return false;
}
