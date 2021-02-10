// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__9939__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9940__i = 0, G__9940__a = new Array(arguments.length -  0);
while (G__9940__i < G__9940__a.length) {G__9940__a[G__9940__i] = arguments[G__9940__i + 0]; ++G__9940__i;}
  args = new cljs.core.IndexedSeq(G__9940__a,0,null);
} 
return G__9939__delegate.call(this,args);};
G__9939.cljs$lang$maxFixedArity = 0;
G__9939.cljs$lang$applyTo = (function (arglist__9941){
var args = cljs.core.seq(arglist__9941);
return G__9939__delegate(args);
});
G__9939.cljs$core$IFn$_invoke$arity$variadic = G__9939__delegate;
return G__9939;
})()
);

(o.error = (function() { 
var G__9942__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9943__i = 0, G__9943__a = new Array(arguments.length -  0);
while (G__9943__i < G__9943__a.length) {G__9943__a[G__9943__i] = arguments[G__9943__i + 0]; ++G__9943__i;}
  args = new cljs.core.IndexedSeq(G__9943__a,0,null);
} 
return G__9942__delegate.call(this,args);};
G__9942.cljs$lang$maxFixedArity = 0;
G__9942.cljs$lang$applyTo = (function (arglist__9944){
var args = cljs.core.seq(arglist__9944);
return G__9942__delegate(args);
});
G__9942.cljs$core$IFn$_invoke$arity$variadic = G__9942__delegate;
return G__9942;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
