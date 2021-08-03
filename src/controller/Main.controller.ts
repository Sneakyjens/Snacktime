import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
import Event from "sap/ui/base/Event";
import Control from "sap/ui/core/Control";

export class UIController extends Controller {
    public router: any;
    public layoutModel: JSONModel;
    public orderModel: JSONModel;

    public onInit() : void {
      this.router = UIComponent.getRouterFor(this);
    }

    public async onAfterRendering(): Promise<void>{
      //set the fcl layout model
      this.layoutModel = this.getView().getModel() as JSONModel;
      this.layoutModel.setProperty("/layout", "OneColumn");
      this.orderModel = this.getView().getModel("order") as JSONModel;
      await this.orderModel.loadData(
        sap.ui.require.toUrl(
          "p36/snacktime/resources/localData/supplierData.json"
        )
      );
    }

    private onPressSupplier(event:Event){
      let bindingControl = event.getSource() as Control;
      let bindingPath = bindingControl.getBindingContext("order").getPath();
      this.router.navTo("OrderDetail", {
        orderpath: bindingPath.split("/")[2],
      });
      this.layoutModel.setProperty("/layout", "TwoColumnsMidExpanded");
    }
}



