import{B as e,c as t}from"./ui.mjs";class i extends e{constructor(){super()}init(e){return this.el=e,this.$el=t(this.el),this.$inputs=this.$el.find("input"),this.isCheckbox=this.checkIfCheckbox(),this.isRequired=this.checkIfRequired(),this.isCheckbox&&this.isRequired&&this.on("change",this.handleChange),this}checkIfCheckbox(){return!!this.$inputs.filter('[type="checkbox"]').length}checkIfRequired(){return!!this.$inputs.filter("[required]").length}checkIfAnyChecked(){return!!this.$inputs.filter(":checked").length}handleChange(){this.checkIfAnyChecked()?this.$inputs.removeAttr("required"):this.$inputs.attr("required",!0)}}export{i as default};
