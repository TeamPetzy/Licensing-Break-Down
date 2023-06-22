window.addEventListener(
  "load",
  function () {
    document.getElementById("print").onclick = function () {
      document.body.style.cursor = "wait";

      document.getElementById("bottom").style.display = "none";
      document.getElementsByTagName("footer")[0].style.marginBottom = "25px";

      window.print();

      document.getElementById("bottom").style.display = "block";
      document.getElementsByTagName("footer")[0].style.marginBottom = "0";

      document.body.style.cursor = "default";
    };
  },
  false
);
