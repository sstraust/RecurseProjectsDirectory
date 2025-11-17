goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35444 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null, this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35444(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35449 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null, this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35449(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34323 = coll;
var G__34324 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34323,G__34324) : shadow.dom.lazy_native_coll_seq.call(null, G__34323,G__34324));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34350 = arguments.length;
switch (G__34350) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34394 = arguments.length;
switch (G__34394) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34396 = arguments.length;
switch (G__34396) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34398 = arguments.length;
switch (G__34398) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34419 = arguments.length;
switch (G__34419) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34422 = arguments.length;
switch (G__34422) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e34432){if((e34432 instanceof Object)){
var e = e34432;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34432;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34433 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34434 = null;
var count__34435 = (0);
var i__34436 = (0);
while(true){
if((i__34436 < count__34435)){
var el = chunk__34434.cljs$core$IIndexed$_nth$arity$2(null, i__34436);
var handler_35474__$1 = ((function (seq__34433,chunk__34434,count__34435,i__34436,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__34433,chunk__34434,count__34435,i__34436,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35474__$1);


var G__35476 = seq__34433;
var G__35477 = chunk__34434;
var G__35478 = count__34435;
var G__35479 = (i__34436 + (1));
seq__34433 = G__35476;
chunk__34434 = G__35477;
count__34435 = G__35478;
i__34436 = G__35479;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34433);
if(temp__5720__auto__){
var seq__34433__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34433__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__34433__$1);
var G__35480 = cljs.core.chunk_rest(seq__34433__$1);
var G__35481 = c__5565__auto__;
var G__35482 = cljs.core.count(c__5565__auto__);
var G__35483 = (0);
seq__34433 = G__35480;
chunk__34434 = G__35481;
count__34435 = G__35482;
i__34436 = G__35483;
continue;
} else {
var el = cljs.core.first(seq__34433__$1);
var handler_35484__$1 = ((function (seq__34433,chunk__34434,count__34435,i__34436,el,seq__34433__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__34433,chunk__34434,count__34435,i__34436,el,seq__34433__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35484__$1);


var G__35485 = cljs.core.next(seq__34433__$1);
var G__35486 = null;
var G__35487 = (0);
var G__35488 = (0);
seq__34433 = G__35485;
chunk__34434 = G__35486;
count__34435 = G__35487;
i__34436 = G__35488;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34441 = arguments.length;
switch (G__34441) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34446 = cljs.core.seq(events);
var chunk__34447 = null;
var count__34448 = (0);
var i__34449 = (0);
while(true){
if((i__34449 < count__34448)){
var vec__34468 = chunk__34447.cljs$core$IIndexed$_nth$arity$2(null, i__34449);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35493 = seq__34446;
var G__35494 = chunk__34447;
var G__35495 = count__34448;
var G__35496 = (i__34449 + (1));
seq__34446 = G__35493;
chunk__34447 = G__35494;
count__34448 = G__35495;
i__34449 = G__35496;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34446);
if(temp__5720__auto__){
var seq__34446__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34446__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__34446__$1);
var G__35497 = cljs.core.chunk_rest(seq__34446__$1);
var G__35498 = c__5565__auto__;
var G__35499 = cljs.core.count(c__5565__auto__);
var G__35500 = (0);
seq__34446 = G__35497;
chunk__34447 = G__35498;
count__34448 = G__35499;
i__34449 = G__35500;
continue;
} else {
var vec__34475 = cljs.core.first(seq__34446__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34475,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35503 = cljs.core.next(seq__34446__$1);
var G__35504 = null;
var G__35505 = (0);
var G__35506 = (0);
seq__34446 = G__35503;
chunk__34447 = G__35504;
count__34448 = G__35505;
i__34449 = G__35506;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34478 = cljs.core.seq(styles);
var chunk__34479 = null;
var count__34480 = (0);
var i__34481 = (0);
while(true){
if((i__34481 < count__34480)){
var vec__34488 = chunk__34479.cljs$core$IIndexed$_nth$arity$2(null, i__34481);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34488,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35507 = seq__34478;
var G__35508 = chunk__34479;
var G__35509 = count__34480;
var G__35510 = (i__34481 + (1));
seq__34478 = G__35507;
chunk__34479 = G__35508;
count__34480 = G__35509;
i__34481 = G__35510;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34478);
if(temp__5720__auto__){
var seq__34478__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34478__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__34478__$1);
var G__35511 = cljs.core.chunk_rest(seq__34478__$1);
var G__35512 = c__5565__auto__;
var G__35513 = cljs.core.count(c__5565__auto__);
var G__35514 = (0);
seq__34478 = G__35511;
chunk__34479 = G__35512;
count__34480 = G__35513;
i__34481 = G__35514;
continue;
} else {
var vec__34493 = cljs.core.first(seq__34478__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34493,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34493,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35516 = cljs.core.next(seq__34478__$1);
var G__35517 = null;
var G__35518 = (0);
var G__35519 = (0);
seq__34478 = G__35516;
chunk__34479 = G__35517;
count__34480 = G__35518;
i__34481 = G__35519;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34499_35521 = key;
var G__34499_35522__$1 = (((G__34499_35521 instanceof cljs.core.Keyword))?G__34499_35521.fqn:null);
switch (G__34499_35522__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35527 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_35527,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_35527,"aria-");
}
})())){
el.setAttribute(ks_35527,value);
} else {
(el[ks_35527] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34551){
var map__34552 = p__34551;
var map__34552__$1 = cljs.core.__destructure_map(map__34552);
var props = map__34552__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34552__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34554 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34554,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34554,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34554,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34557 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34557,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34557;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34567 = arguments.length;
switch (G__34567) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34570){
var vec__34571 = p__34570;
var seq__34572 = cljs.core.seq(vec__34571);
var first__34573 = cljs.core.first(seq__34572);
var seq__34572__$1 = cljs.core.next(seq__34572);
var nn = first__34573;
var first__34573__$1 = cljs.core.first(seq__34572__$1);
var seq__34572__$2 = cljs.core.next(seq__34572__$1);
var np = first__34573__$1;
var nc = seq__34572__$2;
var node = vec__34571;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34593 = nn;
var G__34594 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34593,G__34594) : create_fn.call(null, G__34593,G__34594));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34601 = nn;
var G__34602 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34601,G__34602) : create_fn.call(null, G__34601,G__34602));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34607 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34607,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34607,(1),null);
var seq__34613_35531 = cljs.core.seq(node_children);
var chunk__34614_35532 = null;
var count__34615_35533 = (0);
var i__34616_35534 = (0);
while(true){
if((i__34616_35534 < count__34615_35533)){
var child_struct_35535 = chunk__34614_35532.cljs$core$IIndexed$_nth$arity$2(null, i__34616_35534);
var children_35536 = shadow.dom.dom_node(child_struct_35535);
if(cljs.core.seq_QMARK_(children_35536)){
var seq__34708_35537 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35536));
var chunk__34710_35538 = null;
var count__34711_35539 = (0);
var i__34712_35540 = (0);
while(true){
if((i__34712_35540 < count__34711_35539)){
var child_35541 = chunk__34710_35538.cljs$core$IIndexed$_nth$arity$2(null, i__34712_35540);
if(cljs.core.truth_(child_35541)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35541);


var G__35542 = seq__34708_35537;
var G__35543 = chunk__34710_35538;
var G__35544 = count__34711_35539;
var G__35545 = (i__34712_35540 + (1));
seq__34708_35537 = G__35542;
chunk__34710_35538 = G__35543;
count__34711_35539 = G__35544;
i__34712_35540 = G__35545;
continue;
} else {
var G__35546 = seq__34708_35537;
var G__35547 = chunk__34710_35538;
var G__35548 = count__34711_35539;
var G__35549 = (i__34712_35540 + (1));
seq__34708_35537 = G__35546;
chunk__34710_35538 = G__35547;
count__34711_35539 = G__35548;
i__34712_35540 = G__35549;
continue;
}
} else {
var temp__5720__auto___35550 = cljs.core.seq(seq__34708_35537);
if(temp__5720__auto___35550){
var seq__34708_35551__$1 = temp__5720__auto___35550;
if(cljs.core.chunked_seq_QMARK_(seq__34708_35551__$1)){
var c__5565__auto___35552 = cljs.core.chunk_first(seq__34708_35551__$1);
var G__35553 = cljs.core.chunk_rest(seq__34708_35551__$1);
var G__35554 = c__5565__auto___35552;
var G__35555 = cljs.core.count(c__5565__auto___35552);
var G__35556 = (0);
seq__34708_35537 = G__35553;
chunk__34710_35538 = G__35554;
count__34711_35539 = G__35555;
i__34712_35540 = G__35556;
continue;
} else {
var child_35557 = cljs.core.first(seq__34708_35551__$1);
if(cljs.core.truth_(child_35557)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35557);


var G__35558 = cljs.core.next(seq__34708_35551__$1);
var G__35559 = null;
var G__35560 = (0);
var G__35561 = (0);
seq__34708_35537 = G__35558;
chunk__34710_35538 = G__35559;
count__34711_35539 = G__35560;
i__34712_35540 = G__35561;
continue;
} else {
var G__35562 = cljs.core.next(seq__34708_35551__$1);
var G__35563 = null;
var G__35564 = (0);
var G__35565 = (0);
seq__34708_35537 = G__35562;
chunk__34710_35538 = G__35563;
count__34711_35539 = G__35564;
i__34712_35540 = G__35565;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35536);
}


var G__35566 = seq__34613_35531;
var G__35567 = chunk__34614_35532;
var G__35568 = count__34615_35533;
var G__35569 = (i__34616_35534 + (1));
seq__34613_35531 = G__35566;
chunk__34614_35532 = G__35567;
count__34615_35533 = G__35568;
i__34616_35534 = G__35569;
continue;
} else {
var temp__5720__auto___35570 = cljs.core.seq(seq__34613_35531);
if(temp__5720__auto___35570){
var seq__34613_35571__$1 = temp__5720__auto___35570;
if(cljs.core.chunked_seq_QMARK_(seq__34613_35571__$1)){
var c__5565__auto___35572 = cljs.core.chunk_first(seq__34613_35571__$1);
var G__35573 = cljs.core.chunk_rest(seq__34613_35571__$1);
var G__35574 = c__5565__auto___35572;
var G__35575 = cljs.core.count(c__5565__auto___35572);
var G__35576 = (0);
seq__34613_35531 = G__35573;
chunk__34614_35532 = G__35574;
count__34615_35533 = G__35575;
i__34616_35534 = G__35576;
continue;
} else {
var child_struct_35577 = cljs.core.first(seq__34613_35571__$1);
var children_35578 = shadow.dom.dom_node(child_struct_35577);
if(cljs.core.seq_QMARK_(children_35578)){
var seq__34731_35579 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35578));
var chunk__34733_35580 = null;
var count__34734_35581 = (0);
var i__34735_35582 = (0);
while(true){
if((i__34735_35582 < count__34734_35581)){
var child_35583 = chunk__34733_35580.cljs$core$IIndexed$_nth$arity$2(null, i__34735_35582);
if(cljs.core.truth_(child_35583)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35583);


var G__35584 = seq__34731_35579;
var G__35585 = chunk__34733_35580;
var G__35586 = count__34734_35581;
var G__35587 = (i__34735_35582 + (1));
seq__34731_35579 = G__35584;
chunk__34733_35580 = G__35585;
count__34734_35581 = G__35586;
i__34735_35582 = G__35587;
continue;
} else {
var G__35588 = seq__34731_35579;
var G__35589 = chunk__34733_35580;
var G__35590 = count__34734_35581;
var G__35591 = (i__34735_35582 + (1));
seq__34731_35579 = G__35588;
chunk__34733_35580 = G__35589;
count__34734_35581 = G__35590;
i__34735_35582 = G__35591;
continue;
}
} else {
var temp__5720__auto___35592__$1 = cljs.core.seq(seq__34731_35579);
if(temp__5720__auto___35592__$1){
var seq__34731_35593__$1 = temp__5720__auto___35592__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34731_35593__$1)){
var c__5565__auto___35594 = cljs.core.chunk_first(seq__34731_35593__$1);
var G__35595 = cljs.core.chunk_rest(seq__34731_35593__$1);
var G__35596 = c__5565__auto___35594;
var G__35597 = cljs.core.count(c__5565__auto___35594);
var G__35598 = (0);
seq__34731_35579 = G__35595;
chunk__34733_35580 = G__35596;
count__34734_35581 = G__35597;
i__34735_35582 = G__35598;
continue;
} else {
var child_35599 = cljs.core.first(seq__34731_35593__$1);
if(cljs.core.truth_(child_35599)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35599);


var G__35600 = cljs.core.next(seq__34731_35593__$1);
var G__35601 = null;
var G__35602 = (0);
var G__35603 = (0);
seq__34731_35579 = G__35600;
chunk__34733_35580 = G__35601;
count__34734_35581 = G__35602;
i__34735_35582 = G__35603;
continue;
} else {
var G__35604 = cljs.core.next(seq__34731_35593__$1);
var G__35605 = null;
var G__35606 = (0);
var G__35607 = (0);
seq__34731_35579 = G__35604;
chunk__34733_35580 = G__35605;
count__34734_35581 = G__35606;
i__34735_35582 = G__35607;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35578);
}


var G__35608 = cljs.core.next(seq__34613_35571__$1);
var G__35609 = null;
var G__35610 = (0);
var G__35611 = (0);
seq__34613_35531 = G__35608;
chunk__34614_35532 = G__35609;
count__34615_35533 = G__35610;
i__34616_35534 = G__35611;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34749 = cljs.core.seq(node);
var chunk__34750 = null;
var count__34751 = (0);
var i__34752 = (0);
while(true){
if((i__34752 < count__34751)){
var n = chunk__34750.cljs$core$IIndexed$_nth$arity$2(null, i__34752);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__35618 = seq__34749;
var G__35619 = chunk__34750;
var G__35620 = count__34751;
var G__35621 = (i__34752 + (1));
seq__34749 = G__35618;
chunk__34750 = G__35619;
count__34751 = G__35620;
i__34752 = G__35621;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34749);
if(temp__5720__auto__){
var seq__34749__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34749__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__34749__$1);
var G__35622 = cljs.core.chunk_rest(seq__34749__$1);
var G__35623 = c__5565__auto__;
var G__35624 = cljs.core.count(c__5565__auto__);
var G__35625 = (0);
seq__34749 = G__35622;
chunk__34750 = G__35623;
count__34751 = G__35624;
i__34752 = G__35625;
continue;
} else {
var n = cljs.core.first(seq__34749__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__35626 = cljs.core.next(seq__34749__$1);
var G__35627 = null;
var G__35628 = (0);
var G__35629 = (0);
seq__34749 = G__35626;
chunk__34750 = G__35627;
count__34751 = G__35628;
i__34752 = G__35629;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34759 = arguments.length;
switch (G__34759) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34770 = arguments.length;
switch (G__34770) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34784 = arguments.length;
switch (G__34784) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35641 = arguments.length;
var i__5767__auto___35642 = (0);
while(true){
if((i__5767__auto___35642 < len__5766__auto___35641)){
args__5772__auto__.push((arguments[i__5767__auto___35642]));

var G__35643 = (i__5767__auto___35642 + (1));
i__5767__auto___35642 = G__35643;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34815_35644 = cljs.core.seq(nodes);
var chunk__34816_35645 = null;
var count__34817_35646 = (0);
var i__34818_35647 = (0);
while(true){
if((i__34818_35647 < count__34817_35646)){
var node_35648 = chunk__34816_35645.cljs$core$IIndexed$_nth$arity$2(null, i__34818_35647);
fragment.appendChild(shadow.dom._to_dom(node_35648));


var G__35649 = seq__34815_35644;
var G__35650 = chunk__34816_35645;
var G__35651 = count__34817_35646;
var G__35652 = (i__34818_35647 + (1));
seq__34815_35644 = G__35649;
chunk__34816_35645 = G__35650;
count__34817_35646 = G__35651;
i__34818_35647 = G__35652;
continue;
} else {
var temp__5720__auto___35653 = cljs.core.seq(seq__34815_35644);
if(temp__5720__auto___35653){
var seq__34815_35654__$1 = temp__5720__auto___35653;
if(cljs.core.chunked_seq_QMARK_(seq__34815_35654__$1)){
var c__5565__auto___35655 = cljs.core.chunk_first(seq__34815_35654__$1);
var G__35656 = cljs.core.chunk_rest(seq__34815_35654__$1);
var G__35657 = c__5565__auto___35655;
var G__35658 = cljs.core.count(c__5565__auto___35655);
var G__35659 = (0);
seq__34815_35644 = G__35656;
chunk__34816_35645 = G__35657;
count__34817_35646 = G__35658;
i__34818_35647 = G__35659;
continue;
} else {
var node_35660 = cljs.core.first(seq__34815_35654__$1);
fragment.appendChild(shadow.dom._to_dom(node_35660));


var G__35661 = cljs.core.next(seq__34815_35654__$1);
var G__35662 = null;
var G__35663 = (0);
var G__35664 = (0);
seq__34815_35644 = G__35661;
chunk__34816_35645 = G__35662;
count__34817_35646 = G__35663;
i__34818_35647 = G__35664;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34805){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34805));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34829_35667 = cljs.core.seq(scripts);
var chunk__34830_35668 = null;
var count__34831_35669 = (0);
var i__34832_35670 = (0);
while(true){
if((i__34832_35670 < count__34831_35669)){
var vec__34840_35674 = chunk__34830_35668.cljs$core$IIndexed$_nth$arity$2(null, i__34832_35670);
var script_tag_35675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34840_35674,(0),null);
var script_body_35676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34840_35674,(1),null);
eval(script_body_35676);


var G__35677 = seq__34829_35667;
var G__35678 = chunk__34830_35668;
var G__35679 = count__34831_35669;
var G__35680 = (i__34832_35670 + (1));
seq__34829_35667 = G__35677;
chunk__34830_35668 = G__35678;
count__34831_35669 = G__35679;
i__34832_35670 = G__35680;
continue;
} else {
var temp__5720__auto___35681 = cljs.core.seq(seq__34829_35667);
if(temp__5720__auto___35681){
var seq__34829_35682__$1 = temp__5720__auto___35681;
if(cljs.core.chunked_seq_QMARK_(seq__34829_35682__$1)){
var c__5565__auto___35683 = cljs.core.chunk_first(seq__34829_35682__$1);
var G__35684 = cljs.core.chunk_rest(seq__34829_35682__$1);
var G__35685 = c__5565__auto___35683;
var G__35686 = cljs.core.count(c__5565__auto___35683);
var G__35687 = (0);
seq__34829_35667 = G__35684;
chunk__34830_35668 = G__35685;
count__34831_35669 = G__35686;
i__34832_35670 = G__35687;
continue;
} else {
var vec__34843_35688 = cljs.core.first(seq__34829_35682__$1);
var script_tag_35689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34843_35688,(0),null);
var script_body_35690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34843_35688,(1),null);
eval(script_body_35690);


var G__35691 = cljs.core.next(seq__34829_35682__$1);
var G__35692 = null;
var G__35693 = (0);
var G__35694 = (0);
seq__34829_35667 = G__35691;
chunk__34830_35668 = G__35692;
count__34831_35669 = G__35693;
i__34832_35670 = G__35694;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34856){
var vec__34857 = p__34856;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34887 = arguments.length;
switch (G__34887) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34903 = cljs.core.seq(style_keys);
var chunk__34904 = null;
var count__34905 = (0);
var i__34906 = (0);
while(true){
if((i__34906 < count__34905)){
var it = chunk__34904.cljs$core$IIndexed$_nth$arity$2(null, i__34906);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35707 = seq__34903;
var G__35708 = chunk__34904;
var G__35709 = count__34905;
var G__35710 = (i__34906 + (1));
seq__34903 = G__35707;
chunk__34904 = G__35708;
count__34905 = G__35709;
i__34906 = G__35710;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__34903);
if(temp__5720__auto__){
var seq__34903__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34903__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__34903__$1);
var G__35711 = cljs.core.chunk_rest(seq__34903__$1);
var G__35712 = c__5565__auto__;
var G__35713 = cljs.core.count(c__5565__auto__);
var G__35714 = (0);
seq__34903 = G__35711;
chunk__34904 = G__35712;
count__34905 = G__35713;
i__34906 = G__35714;
continue;
} else {
var it = cljs.core.first(seq__34903__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35715 = cljs.core.next(seq__34903__$1);
var G__35716 = null;
var G__35717 = (0);
var G__35718 = (0);
seq__34903 = G__35715;
chunk__34904 = G__35716;
count__34905 = G__35717;
i__34906 = G__35718;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k34925,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__34949 = k34925;
var G__34949__$1 = (((G__34949 instanceof cljs.core.Keyword))?G__34949.fqn:null);
switch (G__34949__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34925,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__34957){
var vec__34958 = p__34957;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34958,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null, ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34924){
var self__ = this;
var G__34924__$1 = this;
return (new cljs.core.RecordIter((0),G__34924__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34926,other34927){
var self__ = this;
var this34926__$1 = this;
return (((!((other34927 == null)))) && ((((this34926__$1.constructor === other34927.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34926__$1.x,other34927.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34926__$1.y,other34927.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34926__$1.__extmap,other34927.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k34925){
var self__ = this;
var this__5347__auto____$1 = this;
var G__34978 = k34925;
var G__34978__$1 = (((G__34978 instanceof cljs.core.Keyword))?G__34978.fqn:null);
switch (G__34978__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34925);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__34924){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__34993 = cljs.core.keyword_identical_QMARK_;
var expr__34994 = k__5349__auto__;
if(cljs.core.truth_((pred__34993.cljs$core$IFn$_invoke$arity$2 ? pred__34993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34994) : pred__34993.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__34994)))){
return (new shadow.dom.Coordinate(G__34924,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34993.cljs$core$IFn$_invoke$arity$2 ? pred__34993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34994) : pred__34993.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__34994)))){
return (new shadow.dom.Coordinate(self__.x,G__34924,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__34924),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__34924){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34924,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34939){
var extmap__5382__auto__ = (function (){var G__35046 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34939,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34939)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35046);
} else {
return G__35046;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34939),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34939),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k35121,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__35128 = k35121;
var G__35128__$1 = (((G__35128 instanceof cljs.core.Keyword))?G__35128.fqn:null);
switch (G__35128__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35121,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__35139){
var vec__35140 = p__35139;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null, ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35120){
var self__ = this;
var G__35120__$1 = this;
return (new cljs.core.RecordIter((0),G__35120__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35122,other35123){
var self__ = this;
var this35122__$1 = this;
return (((!((other35123 == null)))) && ((((this35122__$1.constructor === other35123.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35122__$1.w,other35123.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35122__$1.h,other35123.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35122__$1.__extmap,other35123.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k35121){
var self__ = this;
var this__5347__auto____$1 = this;
var G__35147 = k35121;
var G__35147__$1 = (((G__35147 instanceof cljs.core.Keyword))?G__35147.fqn:null);
switch (G__35147__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35121);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__35120){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__35149 = cljs.core.keyword_identical_QMARK_;
var expr__35150 = k__5349__auto__;
if(cljs.core.truth_((pred__35149.cljs$core$IFn$_invoke$arity$2 ? pred__35149.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35150) : pred__35149.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__35150)))){
return (new shadow.dom.Size(G__35120,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35149.cljs$core$IFn$_invoke$arity$2 ? pred__35149.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35150) : pred__35149.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__35150)))){
return (new shadow.dom.Size(self__.w,G__35120,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__35120),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__35120){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35120,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35124){
var extmap__5382__auto__ = (function (){var G__35156 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35124,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35124)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35156);
} else {
return G__35156;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35124),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35124),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__35778 = (i + (1));
var G__35779 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35778;
ret = G__35779;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35181){
var vec__35182 = p__35181;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35182,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35182,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35186 = arguments.length;
switch (G__35186) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35781 = ps;
var G__35782 = (i + (1));
el__$1 = G__35781;
i = G__35782;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35217 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35217,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35217,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35217,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35220_35783 = cljs.core.seq(props);
var chunk__35221_35784 = null;
var count__35222_35785 = (0);
var i__35223_35786 = (0);
while(true){
if((i__35223_35786 < count__35222_35785)){
var vec__35231_35787 = chunk__35221_35784.cljs$core$IIndexed$_nth$arity$2(null, i__35223_35786);
var k_35788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35231_35787,(0),null);
var v_35789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35231_35787,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_35788);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35788),v_35789);


var G__35790 = seq__35220_35783;
var G__35791 = chunk__35221_35784;
var G__35792 = count__35222_35785;
var G__35793 = (i__35223_35786 + (1));
seq__35220_35783 = G__35790;
chunk__35221_35784 = G__35791;
count__35222_35785 = G__35792;
i__35223_35786 = G__35793;
continue;
} else {
var temp__5720__auto___35794 = cljs.core.seq(seq__35220_35783);
if(temp__5720__auto___35794){
var seq__35220_35795__$1 = temp__5720__auto___35794;
if(cljs.core.chunked_seq_QMARK_(seq__35220_35795__$1)){
var c__5565__auto___35796 = cljs.core.chunk_first(seq__35220_35795__$1);
var G__35797 = cljs.core.chunk_rest(seq__35220_35795__$1);
var G__35798 = c__5565__auto___35796;
var G__35799 = cljs.core.count(c__5565__auto___35796);
var G__35800 = (0);
seq__35220_35783 = G__35797;
chunk__35221_35784 = G__35798;
count__35222_35785 = G__35799;
i__35223_35786 = G__35800;
continue;
} else {
var vec__35235_35801 = cljs.core.first(seq__35220_35795__$1);
var k_35802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35235_35801,(0),null);
var v_35803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35235_35801,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_35802);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35802),v_35803);


var G__35804 = cljs.core.next(seq__35220_35795__$1);
var G__35805 = null;
var G__35806 = (0);
var G__35807 = (0);
seq__35220_35783 = G__35804;
chunk__35221_35784 = G__35805;
count__35222_35785 = G__35806;
i__35223_35786 = G__35807;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35245 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35245,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35245,(1),null);
var seq__35251_35808 = cljs.core.seq(node_children);
var chunk__35253_35809 = null;
var count__35254_35810 = (0);
var i__35255_35811 = (0);
while(true){
if((i__35255_35811 < count__35254_35810)){
var child_struct_35812 = chunk__35253_35809.cljs$core$IIndexed$_nth$arity$2(null, i__35255_35811);
if((!((child_struct_35812 == null)))){
if(typeof child_struct_35812 === 'string'){
var text_35813 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35813),child_struct_35812].join(''));
} else {
var children_35814 = shadow.dom.svg_node(child_struct_35812);
if(cljs.core.seq_QMARK_(children_35814)){
var seq__35270_35815 = cljs.core.seq(children_35814);
var chunk__35272_35816 = null;
var count__35273_35817 = (0);
var i__35274_35818 = (0);
while(true){
if((i__35274_35818 < count__35273_35817)){
var child_35819 = chunk__35272_35816.cljs$core$IIndexed$_nth$arity$2(null, i__35274_35818);
if(cljs.core.truth_(child_35819)){
node.appendChild(child_35819);


var G__35820 = seq__35270_35815;
var G__35821 = chunk__35272_35816;
var G__35822 = count__35273_35817;
var G__35823 = (i__35274_35818 + (1));
seq__35270_35815 = G__35820;
chunk__35272_35816 = G__35821;
count__35273_35817 = G__35822;
i__35274_35818 = G__35823;
continue;
} else {
var G__35824 = seq__35270_35815;
var G__35825 = chunk__35272_35816;
var G__35826 = count__35273_35817;
var G__35827 = (i__35274_35818 + (1));
seq__35270_35815 = G__35824;
chunk__35272_35816 = G__35825;
count__35273_35817 = G__35826;
i__35274_35818 = G__35827;
continue;
}
} else {
var temp__5720__auto___35828 = cljs.core.seq(seq__35270_35815);
if(temp__5720__auto___35828){
var seq__35270_35829__$1 = temp__5720__auto___35828;
if(cljs.core.chunked_seq_QMARK_(seq__35270_35829__$1)){
var c__5565__auto___35830 = cljs.core.chunk_first(seq__35270_35829__$1);
var G__35831 = cljs.core.chunk_rest(seq__35270_35829__$1);
var G__35832 = c__5565__auto___35830;
var G__35833 = cljs.core.count(c__5565__auto___35830);
var G__35834 = (0);
seq__35270_35815 = G__35831;
chunk__35272_35816 = G__35832;
count__35273_35817 = G__35833;
i__35274_35818 = G__35834;
continue;
} else {
var child_35835 = cljs.core.first(seq__35270_35829__$1);
if(cljs.core.truth_(child_35835)){
node.appendChild(child_35835);


var G__35836 = cljs.core.next(seq__35270_35829__$1);
var G__35837 = null;
var G__35838 = (0);
var G__35839 = (0);
seq__35270_35815 = G__35836;
chunk__35272_35816 = G__35837;
count__35273_35817 = G__35838;
i__35274_35818 = G__35839;
continue;
} else {
var G__35840 = cljs.core.next(seq__35270_35829__$1);
var G__35841 = null;
var G__35842 = (0);
var G__35843 = (0);
seq__35270_35815 = G__35840;
chunk__35272_35816 = G__35841;
count__35273_35817 = G__35842;
i__35274_35818 = G__35843;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35814);
}
}


var G__35844 = seq__35251_35808;
var G__35845 = chunk__35253_35809;
var G__35846 = count__35254_35810;
var G__35847 = (i__35255_35811 + (1));
seq__35251_35808 = G__35844;
chunk__35253_35809 = G__35845;
count__35254_35810 = G__35846;
i__35255_35811 = G__35847;
continue;
} else {
var G__35848 = seq__35251_35808;
var G__35849 = chunk__35253_35809;
var G__35850 = count__35254_35810;
var G__35851 = (i__35255_35811 + (1));
seq__35251_35808 = G__35848;
chunk__35253_35809 = G__35849;
count__35254_35810 = G__35850;
i__35255_35811 = G__35851;
continue;
}
} else {
var temp__5720__auto___35852 = cljs.core.seq(seq__35251_35808);
if(temp__5720__auto___35852){
var seq__35251_35853__$1 = temp__5720__auto___35852;
if(cljs.core.chunked_seq_QMARK_(seq__35251_35853__$1)){
var c__5565__auto___35854 = cljs.core.chunk_first(seq__35251_35853__$1);
var G__35855 = cljs.core.chunk_rest(seq__35251_35853__$1);
var G__35856 = c__5565__auto___35854;
var G__35857 = cljs.core.count(c__5565__auto___35854);
var G__35858 = (0);
seq__35251_35808 = G__35855;
chunk__35253_35809 = G__35856;
count__35254_35810 = G__35857;
i__35255_35811 = G__35858;
continue;
} else {
var child_struct_35859 = cljs.core.first(seq__35251_35853__$1);
if((!((child_struct_35859 == null)))){
if(typeof child_struct_35859 === 'string'){
var text_35860 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35860),child_struct_35859].join(''));
} else {
var children_35861 = shadow.dom.svg_node(child_struct_35859);
if(cljs.core.seq_QMARK_(children_35861)){
var seq__35276_35862 = cljs.core.seq(children_35861);
var chunk__35278_35863 = null;
var count__35279_35864 = (0);
var i__35280_35865 = (0);
while(true){
if((i__35280_35865 < count__35279_35864)){
var child_35866 = chunk__35278_35863.cljs$core$IIndexed$_nth$arity$2(null, i__35280_35865);
if(cljs.core.truth_(child_35866)){
node.appendChild(child_35866);


var G__35867 = seq__35276_35862;
var G__35868 = chunk__35278_35863;
var G__35869 = count__35279_35864;
var G__35870 = (i__35280_35865 + (1));
seq__35276_35862 = G__35867;
chunk__35278_35863 = G__35868;
count__35279_35864 = G__35869;
i__35280_35865 = G__35870;
continue;
} else {
var G__35871 = seq__35276_35862;
var G__35872 = chunk__35278_35863;
var G__35873 = count__35279_35864;
var G__35874 = (i__35280_35865 + (1));
seq__35276_35862 = G__35871;
chunk__35278_35863 = G__35872;
count__35279_35864 = G__35873;
i__35280_35865 = G__35874;
continue;
}
} else {
var temp__5720__auto___35875__$1 = cljs.core.seq(seq__35276_35862);
if(temp__5720__auto___35875__$1){
var seq__35276_35877__$1 = temp__5720__auto___35875__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35276_35877__$1)){
var c__5565__auto___35878 = cljs.core.chunk_first(seq__35276_35877__$1);
var G__35879 = cljs.core.chunk_rest(seq__35276_35877__$1);
var G__35880 = c__5565__auto___35878;
var G__35881 = cljs.core.count(c__5565__auto___35878);
var G__35882 = (0);
seq__35276_35862 = G__35879;
chunk__35278_35863 = G__35880;
count__35279_35864 = G__35881;
i__35280_35865 = G__35882;
continue;
} else {
var child_35884 = cljs.core.first(seq__35276_35877__$1);
if(cljs.core.truth_(child_35884)){
node.appendChild(child_35884);


var G__35887 = cljs.core.next(seq__35276_35877__$1);
var G__35888 = null;
var G__35889 = (0);
var G__35890 = (0);
seq__35276_35862 = G__35887;
chunk__35278_35863 = G__35888;
count__35279_35864 = G__35889;
i__35280_35865 = G__35890;
continue;
} else {
var G__35891 = cljs.core.next(seq__35276_35877__$1);
var G__35892 = null;
var G__35893 = (0);
var G__35894 = (0);
seq__35276_35862 = G__35891;
chunk__35278_35863 = G__35892;
count__35279_35864 = G__35893;
i__35280_35865 = G__35894;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35861);
}
}


var G__35895 = cljs.core.next(seq__35251_35853__$1);
var G__35896 = null;
var G__35897 = (0);
var G__35898 = (0);
seq__35251_35808 = G__35895;
chunk__35253_35809 = G__35896;
count__35254_35810 = G__35897;
i__35255_35811 = G__35898;
continue;
} else {
var G__35899 = cljs.core.next(seq__35251_35853__$1);
var G__35900 = null;
var G__35901 = (0);
var G__35902 = (0);
seq__35251_35808 = G__35899;
chunk__35253_35809 = G__35900;
count__35254_35810 = G__35901;
i__35255_35811 = G__35902;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35905 = arguments.length;
var i__5767__auto___35906 = (0);
while(true){
if((i__5767__auto___35906 < len__5766__auto___35905)){
args__5772__auto__.push((arguments[i__5767__auto___35906]));

var G__35908 = (i__5767__auto___35906 + (1));
i__5767__auto___35906 = G__35908;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35284){
var G__35285 = cljs.core.first(seq35284);
var seq35284__$1 = cljs.core.next(seq35284);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35285,seq35284__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35298 = arguments.length;
switch (G__35298) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__30817__auto___35919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_35380){
var state_val_35384 = (state_35380[(1)]);
if((state_val_35384 === (1))){
var state_35380__$1 = state_35380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35380__$1,(2),once_or_cleanup);
} else {
if((state_val_35384 === (2))){
var inst_35344 = (state_35380[(2)]);
var inst_35346 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35380__$1 = (function (){var statearr_35417 = state_35380;
(statearr_35417[(7)] = inst_35344);

return statearr_35417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35380__$1,inst_35346);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30312__auto__ = null;
var shadow$dom$state_machine__30312__auto____0 = (function (){
var statearr_35421 = [null,null,null,null,null,null,null,null];
(statearr_35421[(0)] = shadow$dom$state_machine__30312__auto__);

(statearr_35421[(1)] = (1));

return statearr_35421;
});
var shadow$dom$state_machine__30312__auto____1 = (function (state_35380){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_35380);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e35425){var ex__30315__auto__ = e35425;
var statearr_35426_35923 = state_35380;
(statearr_35426_35923[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_35380[(4)]))){
var statearr_35427_35924 = state_35380;
(statearr_35427_35924[(1)] = cljs.core.first((state_35380[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35926 = state_35380;
state_35380 = G__35926;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
shadow$dom$state_machine__30312__auto__ = function(state_35380){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30312__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30312__auto____1.call(this,state_35380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30312__auto____0;
shadow$dom$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30312__auto____1;
return shadow$dom$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_35428 = f__30818__auto__();
(statearr_35428[(6)] = c__30817__auto___35919);

return statearr_35428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
