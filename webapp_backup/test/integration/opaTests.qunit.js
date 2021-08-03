/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "p36/snacktime/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
