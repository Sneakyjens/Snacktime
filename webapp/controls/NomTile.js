sap.ui.define(["sap/ui/core/Control"], function (Control) {
  "use strict";

  let nomTile = Control.extend("p36.snacktime.controls.nomTile", {
    metadata: {
      properties: {
        title: {
          type: "string",
        },
        description: {
          type: "string",
        },
        icon: {
          type: "string",
        },
        foodType: {
          type: "string",
        },
      },
      events: {
        press: {},
      },
    },

    init: function () {
      Control.prototype.init.apply(this, arguments);
    },

    renderer: {
      apiVersion: 2,
      render: (rm, control) => {
        rm.openStart("div", control)
          .class("nomTile")
          .class("flexContainer")
          .openEnd();

        rm.openStart("h1").class("nomTileTitle").openEnd().close();
        rm.text(control.getTitle());
        rm.close("h1");

        rm.openStart("h3").class("nomTileDescription").openEnd().close();
        rm.text(control.getDescription());
        rm.close("h3");

        rm.close("div");
      },
    },
  });

  return nomTile;
});
