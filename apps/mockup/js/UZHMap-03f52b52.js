import{B as i,c as t}from"./ui.mjs";import{l as a}from"./LoadExternalScript-1424c4ca.js";class e extends i{constructor(){super()}init(i){return this.el=i,this.$el=t(this.el),window.UZHMap||(window.UZHMap=[]),window.UZHMap.push({buildingCode:this.$el.data("map-building"),elementId:this.$el.find(".js-Map--canvas").attr("id"),zoomLevel:this.$el.data("map-zoom")||6}),a("https://ziplaene.uzh.ch/minimap/minimap.js"),this}}function s(){return new e}export{s as default};
