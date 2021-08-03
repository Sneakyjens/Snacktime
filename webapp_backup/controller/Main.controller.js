sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("p36.snacktime.controller.Main", {
    onInit: function () {
      this.router = sap.ui.core.UIComponent.getRouterFor(this);
    },

    onAfterRendering: async function () {
      //set the fcl layout model
      this.layoutModel = this.getView().getModel();
      this.layoutModel.setProperty("/layout", "OneColumn");
      this.orderModel = this.getView().getModel("order");
      await this.orderModel.loadData(
        sap.ui.require.toUrl(
          "p36/snacktime/resources/localData/supplierData.json"
        )
      );
    },

    onPressSupplier: function (event) {
      let bindingPath = event.getSource().getBindingContext("order").getPath();
      this.router.navTo("OrderDetail", {
        orderpath: bindingPath.split("/")[2],
      });
      this.layoutModel.setProperty("/layout", "TwoColumnsMidExpanded");
    },
  });
});
