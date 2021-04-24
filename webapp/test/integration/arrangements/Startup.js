sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("p36.snacktime.snacktime.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "p36.snacktime.snacktime",
          async: true,
          manifest: true
        }
      });
    }

  });
});
