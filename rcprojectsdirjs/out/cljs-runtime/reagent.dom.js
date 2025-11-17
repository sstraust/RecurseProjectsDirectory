goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__45555 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__45556 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__45556);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__45557 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__45558 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__45558);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__45557);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__45555);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__45560 = arguments.length;
switch (G__45560) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__45561 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45561,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45561,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__45564_45581 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__45565_45582 = null;
var count__45566_45583 = (0);
var i__45567_45584 = (0);
while(true){
if((i__45567_45584 < count__45566_45583)){
var vec__45574_45585 = chunk__45565_45582.cljs$core$IIndexed$_nth$arity$2(null, i__45567_45584);
var container_45586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45574_45585,(0),null);
var comp_45587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45574_45585,(1),null);
reagent.dom.re_render_component(comp_45587,container_45586);


var G__45588 = seq__45564_45581;
var G__45589 = chunk__45565_45582;
var G__45590 = count__45566_45583;
var G__45591 = (i__45567_45584 + (1));
seq__45564_45581 = G__45588;
chunk__45565_45582 = G__45589;
count__45566_45583 = G__45590;
i__45567_45584 = G__45591;
continue;
} else {
var temp__5720__auto___45592 = cljs.core.seq(seq__45564_45581);
if(temp__5720__auto___45592){
var seq__45564_45593__$1 = temp__5720__auto___45592;
if(cljs.core.chunked_seq_QMARK_(seq__45564_45593__$1)){
var c__5565__auto___45594 = cljs.core.chunk_first(seq__45564_45593__$1);
var G__45595 = cljs.core.chunk_rest(seq__45564_45593__$1);
var G__45596 = c__5565__auto___45594;
var G__45597 = cljs.core.count(c__5565__auto___45594);
var G__45598 = (0);
seq__45564_45581 = G__45595;
chunk__45565_45582 = G__45596;
count__45566_45583 = G__45597;
i__45567_45584 = G__45598;
continue;
} else {
var vec__45577_45599 = cljs.core.first(seq__45564_45593__$1);
var container_45600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577_45599,(0),null);
var comp_45601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45577_45599,(1),null);
reagent.dom.re_render_component(comp_45601,container_45600);


var G__45602 = cljs.core.next(seq__45564_45593__$1);
var G__45603 = null;
var G__45604 = (0);
var G__45605 = (0);
seq__45564_45581 = G__45602;
chunk__45565_45582 = G__45603;
count__45566_45583 = G__45604;
i__45567_45584 = G__45605;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
