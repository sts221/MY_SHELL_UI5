sap.ui.controller("my_shell_ui5.view1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf my_shell_ui5.view1
*/
onInit: function() {
	    // ONE WAY BINDING
	    // We define the model here because we want the model to be created only once
        // this.myModel = new sap.ui.model.json.JSONModel();
        // this will make the variable global. Otherwise (var) is a local variable
        // END of ONE way Binding
	
	    // TWO WAY BINDING: ui => model => ui
	    myModel = new sap.ui.model.json.JSONModel();
	    var json = {};
	    json.typedWord = sap.ui.getCore().byId(this.createId("secretId")).getValue();
	    myModel.setData(json);
	    
	    // myModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
	    sap.ui.getCore().setModel(myModel);
	    
	
	
},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf my_shell_ui5.view1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf my_shell_ui5.view1
*/
   //onAfterRendering: function() {
	//  console.log(this.getView().byId());
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf my_shell_ui5.view1
*/
//	onExit: function() {
//
//	}

	navigateToPage2: function(view) {
		/* ONE WAY BINDING: ui(view) => logic => model => ui(view)
		var json = {};
		json.word = sap.ui.getCore().byId(this.createId("secretId")).getValue();
		this.myModel.setData(json); 
		// set the model globally so that it can be accessed from any view
		sap.ui.getCore().setModel(this.myModel);
		*/ 
		
		var oRouter =  sap.ui.core.routing.Router.getRouter("appRouter");
		oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
		oHashChanger.setHash(oRouter.getURL(view));
		
	    
	}

});