window.addEventListener(
  "load",
  function () {
    var newPlates = document.getElementById("newPlates");
    var transfer = document.getElementById("transfer");

    var setayLease = document.getElementById("setayLease");
    var gMFLLease = document.getElementById("gMFLLease");

    var passenger = document.getElementById("passenger");
    var commercial = document.getElementById("commercial");
    var business = document.getElementById("business");
    var personal = document.getElementById("personal");

    var yes = document.getElementById("yes");
    var no = document.getElementById("no");

    var thirtyTwo = document.getElementById("thirtyTwo");
    var fiftyNine = document.getElementById("fiftyNine");
    var sixtyFour = document.getElementById("sixtyFour");

    newPlates.addEventListener("change", function () {
      if (newPlates.checked) {
        transfer.checked = false;
      }
    });
    transfer.addEventListener("change", function () {
      if (transfer.checked) {
        newPlates.checked = false;
      }
    });

    setayLease.addEventListener("change", function () {
      if (setayLease.checked) {
        gMFLLease.checked = false;
      }
    });
    gMFLLease.addEventListener("change", function () {
      if (gMFLLease.checked) {
        setayLease.checked = false;
      }
    });

    passenger.addEventListener("change", function () {
      if (passenger.checked) {
        commercial.checked = false;
        business.checked = false;
        personal.checked = false;
      }
    });
    commercial.addEventListener("change", function () {
      if (commercial.checked) {
        business.checked = true;

        passenger.checked = false;
        personal.checked = false;
      } else if (!commercial.checked) {
        business.checked = false;
      }
    });
    business.addEventListener("change", function () {
      if (business.checked) {
        commercial.checked = true;

        passenger.checked = false;
        personal.checked = false;
      } else if (!business.checked) {
        commercial.checked = false;
      }
    });
    personal.addEventListener("change", function () {
      if (personal.checked) {
        passenger.checked = false;
        commercial.checked = false;
        business.checked = false;
      }
    });

    yes.addEventListener("change", function () {
      if (yes.checked) {
        no.checked = false;
      }
    });
    no.addEventListener("change", function () {
      if (no.checked) {
        yes.checked = false;
      }
    });

    thirtyTwo.addEventListener("change", function () {
      if (thirtyTwo.checked) {
        fiftyNine.checked = false;
        sixtyFour.checked = false;
      }
    });
    fiftyNine.addEventListener("change", function () {
      if (fiftyNine.checked) {
        thirtyTwo.checked = false;
        sixtyFour.checked = false;
      }
    });
    sixtyFour.addEventListener("change", function () {
      if (sixtyFour.checked) {
        thirtyTwo.checked = false;
        fiftyNine.checked = false;
      }
    });
  },
  false
);
