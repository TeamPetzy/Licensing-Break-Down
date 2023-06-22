window.addEventListener(
  "load",
  function () {
    document.getElementById("pdf").onclick = function () {
      document.body.style.cursor = "wait";
      document.getElementById("bottom").style.display = "none";
      document.getElementsByTagName("footer")[0].style.marginBottom = "25px";

      var source = window.document.getElementsByClassName("printContainer")[0];

      var width = source.clientWidth;

      var opt = {
        // margin: [0, 100, 100, 100],
        margin: 0,
        filename: `${document.getElementById("customerName").value} - ${
          document.getElementById("dateInput").value
        }.pdf`,
        image: { type: "jpeg", quality: 1.0 },
        html2canvas: { scale: 1, width: width },
        jsPDF: { unit: "pt", format: "letter", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all"] },
      };

      setTimeout(function () {
        html2pdf().set(opt).from(source).save();
      }, 1000);

      document.getElementById("bottom").style.display = "block";
      document.getElementsByTagName("footer")[0].style.marginBottom = "0";

      document.body.style.cursor = "default";
    };
  },
  false
);
