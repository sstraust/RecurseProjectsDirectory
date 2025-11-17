goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__38009__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38010__i = 0, G__38010__a = new Array(arguments.length -  0);
while (G__38010__i < G__38010__a.length) {G__38010__a[G__38010__i] = arguments[G__38010__i + 0]; ++G__38010__i;}
  args = new cljs.core.IndexedSeq(G__38010__a,0,null);
} 
return G__38009__delegate.call(this,args);};
G__38009.cljs$lang$maxFixedArity = 0;
G__38009.cljs$lang$applyTo = (function (arglist__38011){
var args = cljs.core.seq(arglist__38011);
return G__38009__delegate(args);
});
G__38009.cljs$core$IFn$_invoke$arity$variadic = G__38009__delegate;
return G__38009;
})()
);

(o.error = (function() { 
var G__38012__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38013__i = 0, G__38013__a = new Array(arguments.length -  0);
while (G__38013__i < G__38013__a.length) {G__38013__a[G__38013__i] = arguments[G__38013__i + 0]; ++G__38013__i;}
  args = new cljs.core.IndexedSeq(G__38013__a,0,null);
} 
return G__38012__delegate.call(this,args);};
G__38012.cljs$lang$maxFixedArity = 0;
G__38012.cljs$lang$applyTo = (function (arglist__38014){
var args = cljs.core.seq(arglist__38014);
return G__38012__delegate(args);
});
G__38012.cljs$core$IFn$_invoke$arity$variadic = G__38012__delegate;
return G__38012;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
