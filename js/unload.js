window.onload = function () {
  window.addEventListener("beforeunload", function (e) {
    if (!validate()) {
      return undefined;
    }

    var confirmationMessage =
      "It looks like you have been editing something. " +
      "If you leave before saving, your changes will be lost.";

    (e || window.event).returnValue = confirmationMessage;
    return confirmationMessage;
  });
};
