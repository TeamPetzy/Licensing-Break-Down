window.addEventListener(
  "load",
  function () {
    function clear() {
      document.getElementById("customerName").value = "";

      document.getElementById("dateInput").value = "";
      document.getElementById("timeInput").value = "";

      document.getElementById("newPlates").checked = false;
      document.getElementById("transfer").checked = false;
      document.getElementById("setayLease").checked = false;
      document.getElementById("gMFLLease").checked = false;

      document.getElementById("passenger").checked = false;
      document.getElementById("commercial").checked = false;
      document.getElementById("business").checked = false;
      document.getElementById("personal").checked = false;

      document.getElementById("weight").value = "";

      document.getElementById("yes").checked = false;
      document.getElementById("no").checked = false;

      document.getElementById("thirtyTwo").checked = false;
      document.getElementById("fiftyNine").checked = false;
      document.getElementById("sixtyFour").checked = false;

      document.getElementById("insuranceProvider").value = "";
      document.getElementById("rIN").value = "";

      document.getElementById("notes").value = "";

      document.getElementById("salesConsultant").value = "";
      document.getElementById("businessManager").value = "";
    }

    document.getElementById("clear").onclick = function () {
      confirm("This will clear the form") ? clear() : null;
    };
  },
  false
);
