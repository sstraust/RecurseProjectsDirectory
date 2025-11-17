// Compiled by ClojureScript 1.11.54 {:optimizations :none}
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
var G__625__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__625 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__626__i = 0, G__626__a = new Array(arguments.length -  0);
while (G__626__i < G__626__a.length) {G__626__a[G__626__i] = arguments[G__626__i + 0]; ++G__626__i;}
  args = new cljs.core.IndexedSeq(G__626__a,0,null);
} 
return G__625__delegate.call(this,args);};
G__625.cljs$lang$maxFixedArity = 0;
G__625.cljs$lang$applyTo = (function (arglist__627){
var args = cljs.core.seq(arglist__627);
return G__625__delegate(args);
});
G__625.cljs$core$IFn$_invoke$arity$variadic = G__625__delegate;
return G__625;
})()
);

(o.error = (function() { 
var G__628__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__629__i = 0, G__629__a = new Array(arguments.length -  0);
while (G__629__i < G__629__a.length) {G__629__a[G__629__i] = arguments[G__629__i + 0]; ++G__629__i;}
  args = new cljs.core.IndexedSeq(G__629__a,0,null);
} 
return G__628__delegate.call(this,args);};
G__628.cljs$lang$maxFixedArity = 0;
G__628.cljs$lang$applyTo = (function (arglist__630){
var args = cljs.core.seq(arglist__630);
return G__628__delegate(args);
});
G__628.cljs$core$IFn$_invoke$arity$variadic = G__628__delegate;
return G__628;
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
