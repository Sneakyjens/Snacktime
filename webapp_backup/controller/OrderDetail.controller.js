sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("p36.snacktime.controller.Main", {
    onInit: function () {
      this.router = sap.ui.core.UIComponent.getRouterFor(this);
      this.router.attachRouteMatched(this.onRouteMatched, this);
    },

    onAfterRendering: async function () {},

    onRouteMatched: function (event) {
      let orderpath = event.getParameter("arguments").orderpath;
      this.getView().bindElement({
        path: `/suppliers/${orderpath}`,
        model: "order",
      });
    },
  });
});
