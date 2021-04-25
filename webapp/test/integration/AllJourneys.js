sap.ui.define([
  "sap/ui/test/Opa5",
  "p36/snacktime/test/integration/arrangements/Startup",
  "p36/snacktime/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
