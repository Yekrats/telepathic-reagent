// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('telepathic.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.pprint');
goog.require('telepathic.logic');
cljs.core.println.call(null,"This text is printed from src/telepathic/core.cljs. Go ahead and edit it and see reloading in action.");
if((typeof telepathic !== 'undefined') && (typeof telepathic.core !== 'undefined') && (typeof telepathic.core.app_state !== 'undefined')){
} else {
telepathic.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color-player","color-player",1325985236),telepathic.logic.condition_cards.call(null,telepathic.logic.colors),new cljs.core.Keyword(null,"shape-player","shape-player",1423711301),telepathic.logic.condition_cards.call(null,telepathic.logic.shapes),new cljs.core.Keyword(null,"board","board",-1907017633),telepathic.logic.sls.call(null),new cljs.core.Keyword(null,"actions","actions",-812656882),telepathic.logic.initiate_actions.call(null)], null));
}
telepathic.core.get_app_element = (function telepathic$core$get_app_element(){
return goog.dom.getElement("app");
});
telepathic.core.hello_world = (function telepathic$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.pprint.pprint.call(null,cljs.core.deref.call(null,telepathic.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this in src/telepathic/core.cljs and watch it change!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.map.call(null,(function (row){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.call(null,(function (card){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),["/images/",telepathic.logic.asset_name.call(null,card)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"card-image"], null)], null)], null);
}),row)], null);
}),cljs.core.partition.call(null,(4),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,telepathic.core.app_state))))], null)], null);
});
telepathic.core.mount = (function telepathic$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [telepathic.core.hello_world], null),el);
});
telepathic.core.mount_app_element = (function telepathic$core$mount_app_element(){
var temp__5720__auto__ = telepathic.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return telepathic.core.mount.call(null,el);
} else {
return null;
}
});
telepathic.core.mount_app_element.call(null);
telepathic.core.on_reload = (function telepathic$core$on_reload(){
return telepathic.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
