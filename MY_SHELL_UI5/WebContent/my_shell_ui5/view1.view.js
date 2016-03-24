sap.ui.jsview("my_shell_ui5.view1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf my_shell_ui5.view1
	*/ 
	getControllerName : function() {
		return "my_shell_ui5.view1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf my_shell_ui5.view1
	*/ 
	createContent : function(oController) {
          var oText = new sap.ui.commons.TextView({
        	  text: "Enter word: "
          });
         
          var oInput = new sap.ui.commons.TextField(this.createId("secretId"), {
        	 // value: "from_page_one" 
        	 // for two way binding you have to bind to the model
        	    value: "{/typedWord}"
          });
          
          var oButton = new sap.ui.commons.Button({
        	 text: "Submit",
        	 press: function() {
        		 oController.navigateToPage2("view2");
        	 }
          });
          
          var element = [oText, oInput, oButton];
          return element;
	}

});
