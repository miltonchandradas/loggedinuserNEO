sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.UserInfo.controller.App", {
		onInit: function () {

			this._userModel = this.getOwnerComponent().getModel("userModel");

			let me = this;

			fetch("/services/userapi/currentUser")
				.then(res => res.json())
				.then(data => {
					me._userModel.setProperty("/", data);
					console.log(me._userModel.getProperty("/"));
				})
				.catch(err => console.log(err));
		}
	});
});