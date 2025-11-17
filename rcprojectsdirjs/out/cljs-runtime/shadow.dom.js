goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_42212 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_42212(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_42219 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_42219(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__40839 = coll;
var G__40840 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40839,G__40840) : shadow.dom.lazy_native_coll_seq.call(null, G__40839,G__40840));
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
var G__40860 = arguments.length;
switch (G__40860) {
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
var G__40865 = arguments.length;
switch (G__40865) {
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
var G__40878 = arguments.length;
switch (G__40878) {
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
var G__40888 = arguments.length;
switch (G__40888) {
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
var G__40906 = arguments.length;
switch (G__40906) {
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
var G__40922 = arguments.length;
switch (G__40922) {
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
}catch (e40929){if((e40929 instanceof Object)){
var e = e40929;
return console.log("didnt support attachEvent",el,e);
} else {
throw e40929;

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
var seq__40942 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__40943 = null;
var count__40944 = (0);
var i__40945 = (0);
while(true){
if((i__40945 < count__40944)){
var el = chunk__40943.cljs$core$IIndexed$_nth$arity$2(null, i__40945);
var handler_42278__$1 = ((function (seq__40942,chunk__40943,count__40944,i__40945,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__40942,chunk__40943,count__40944,i__40945,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42278__$1);


var G__42279 = seq__40942;
var G__42280 = chunk__40943;
var G__42281 = count__40944;
var G__42282 = (i__40945 + (1));
seq__40942 = G__42279;
chunk__40943 = G__42280;
count__40944 = G__42281;
i__40945 = G__42282;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__40942);
if(temp__5720__auto__){
var seq__40942__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40942__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__40942__$1);
var G__42283 = cljs.core.chunk_rest(seq__40942__$1);
var G__42284 = c__5565__auto__;
var G__42285 = cljs.core.count(c__5565__auto__);
var G__42286 = (0);
seq__40942 = G__42283;
chunk__40943 = G__42284;
count__40944 = G__42285;
i__40945 = G__42286;
continue;
} else {
var el = cljs.core.first(seq__40942__$1);
var handler_42287__$1 = ((function (seq__40942,chunk__40943,count__40944,i__40945,el,seq__40942__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__40942,chunk__40943,count__40944,i__40945,el,seq__40942__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42287__$1);


var G__42288 = cljs.core.next(seq__40942__$1);
var G__42289 = null;
var G__42290 = (0);
var G__42291 = (0);
seq__40942 = G__42288;
chunk__40943 = G__42289;
count__40944 = G__42290;
i__40945 = G__42291;
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
var G__41035 = arguments.length;
switch (G__41035) {
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
var seq__41049 = cljs.core.seq(events);
var chunk__41050 = null;
var count__41051 = (0);
var i__41052 = (0);
while(true){
if((i__41052 < count__41051)){
var vec__41079 = chunk__41050.cljs$core$IIndexed$_nth$arity$2(null, i__41052);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41079,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42327 = seq__41049;
var G__42329 = chunk__41050;
var G__42331 = count__41051;
var G__42333 = (i__41052 + (1));
seq__41049 = G__42327;
chunk__41050 = G__42329;
count__41051 = G__42331;
i__41052 = G__42333;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__41049);
if(temp__5720__auto__){
var seq__41049__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41049__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__41049__$1);
var G__42340 = cljs.core.chunk_rest(seq__41049__$1);
var G__42341 = c__5565__auto__;
var G__42342 = cljs.core.count(c__5565__auto__);
var G__42343 = (0);
seq__41049 = G__42340;
chunk__41050 = G__42341;
count__41051 = G__42342;
i__41052 = G__42343;
continue;
} else {
var vec__41085 = cljs.core.first(seq__41049__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41085,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42344 = cljs.core.next(seq__41049__$1);
var G__42345 = null;
var G__42346 = (0);
var G__42347 = (0);
seq__41049 = G__42344;
chunk__41050 = G__42345;
count__41051 = G__42346;
i__41052 = G__42347;
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
var seq__41099 = cljs.core.seq(styles);
var chunk__41100 = null;
var count__41101 = (0);
var i__41102 = (0);
while(true){
if((i__41102 < count__41101)){
var vec__41163 = chunk__41100.cljs$core$IIndexed$_nth$arity$2(null, i__41102);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41163,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41163,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42348 = seq__41099;
var G__42349 = chunk__41100;
var G__42350 = count__41101;
var G__42351 = (i__41102 + (1));
seq__41099 = G__42348;
chunk__41100 = G__42349;
count__41101 = G__42350;
i__41102 = G__42351;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__41099);
if(temp__5720__auto__){
var seq__41099__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41099__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__41099__$1);
var G__42359 = cljs.core.chunk_rest(seq__41099__$1);
var G__42360 = c__5565__auto__;
var G__42361 = cljs.core.count(c__5565__auto__);
var G__42362 = (0);
seq__41099 = G__42359;
chunk__41100 = G__42360;
count__41101 = G__42361;
i__41102 = G__42362;
continue;
} else {
var vec__41194 = cljs.core.first(seq__41099__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41194,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42363 = cljs.core.next(seq__41099__$1);
var G__42364 = null;
var G__42365 = (0);
var G__42366 = (0);
seq__41099 = G__42363;
chunk__41100 = G__42364;
count__41101 = G__42365;
i__41102 = G__42366;
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
var G__41214_42367 = key;
var G__41214_42368__$1 = (((G__41214_42367 instanceof cljs.core.Keyword))?G__41214_42367.fqn:null);
switch (G__41214_42368__$1) {
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
var ks_42401 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_42401,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_42401,"aria-");
}
})())){
el.setAttribute(ks_42401,value);
} else {
(el[ks_42401] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__41277){
var map__41278 = p__41277;
var map__41278__$1 = cljs.core.__destructure_map(map__41278);
var props = map__41278__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41278__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__41289 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41289,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41289,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41289,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__41292 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__41292,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__41292;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__41296 = arguments.length;
switch (G__41296) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__41316){
var vec__41323 = p__41316;
var seq__41324 = cljs.core.seq(vec__41323);
var first__41325 = cljs.core.first(seq__41324);
var seq__41324__$1 = cljs.core.next(seq__41324);
var nn = first__41325;
var first__41325__$1 = cljs.core.first(seq__41324__$1);
var seq__41324__$2 = cljs.core.next(seq__41324__$1);
var np = first__41325__$1;
var nc = seq__41324__$2;
var node = vec__41323;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41337 = nn;
var G__41338 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41337,G__41338) : create_fn.call(null, G__41337,G__41338));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41340 = nn;
var G__41341 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41340,G__41341) : create_fn.call(null, G__41340,G__41341));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__41345 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41345,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41345,(1),null);
var seq__41349_42428 = cljs.core.seq(node_children);
var chunk__41350_42429 = null;
var count__41351_42430 = (0);
var i__41352_42431 = (0);
while(true){
if((i__41352_42431 < count__41351_42430)){
var child_struct_42432 = chunk__41350_42429.cljs$core$IIndexed$_nth$arity$2(null, i__41352_42431);
var children_42434 = shadow.dom.dom_node(child_struct_42432);
if(cljs.core.seq_QMARK_(children_42434)){
var seq__41409_42435 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42434));
var chunk__41411_42436 = null;
var count__41412_42437 = (0);
var i__41413_42438 = (0);
while(true){
if((i__41413_42438 < count__41412_42437)){
var child_42442 = chunk__41411_42436.cljs$core$IIndexed$_nth$arity$2(null, i__41413_42438);
if(cljs.core.truth_(child_42442)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42442);


var G__42443 = seq__41409_42435;
var G__42444 = chunk__41411_42436;
var G__42445 = count__41412_42437;
var G__42446 = (i__41413_42438 + (1));
seq__41409_42435 = G__42443;
chunk__41411_42436 = G__42444;
count__41412_42437 = G__42445;
i__41413_42438 = G__42446;
continue;
} else {
var G__42448 = seq__41409_42435;
var G__42449 = chunk__41411_42436;
var G__42450 = count__41412_42437;
var G__42451 = (i__41413_42438 + (1));
seq__41409_42435 = G__42448;
chunk__41411_42436 = G__42449;
count__41412_42437 = G__42450;
i__41413_42438 = G__42451;
continue;
}
} else {
var temp__5720__auto___42452 = cljs.core.seq(seq__41409_42435);
if(temp__5720__auto___42452){
var seq__41409_42457__$1 = temp__5720__auto___42452;
if(cljs.core.chunked_seq_QMARK_(seq__41409_42457__$1)){
var c__5565__auto___42458 = cljs.core.chunk_first(seq__41409_42457__$1);
var G__42459 = cljs.core.chunk_rest(seq__41409_42457__$1);
var G__42460 = c__5565__auto___42458;
var G__42461 = cljs.core.count(c__5565__auto___42458);
var G__42462 = (0);
seq__41409_42435 = G__42459;
chunk__41411_42436 = G__42460;
count__41412_42437 = G__42461;
i__41413_42438 = G__42462;
continue;
} else {
var child_42463 = cljs.core.first(seq__41409_42457__$1);
if(cljs.core.truth_(child_42463)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42463);


var G__42464 = cljs.core.next(seq__41409_42457__$1);
var G__42465 = null;
var G__42466 = (0);
var G__42467 = (0);
seq__41409_42435 = G__42464;
chunk__41411_42436 = G__42465;
count__41412_42437 = G__42466;
i__41413_42438 = G__42467;
continue;
} else {
var G__42468 = cljs.core.next(seq__41409_42457__$1);
var G__42469 = null;
var G__42470 = (0);
var G__42471 = (0);
seq__41409_42435 = G__42468;
chunk__41411_42436 = G__42469;
count__41412_42437 = G__42470;
i__41413_42438 = G__42471;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42434);
}


var G__42472 = seq__41349_42428;
var G__42473 = chunk__41350_42429;
var G__42474 = count__41351_42430;
var G__42475 = (i__41352_42431 + (1));
seq__41349_42428 = G__42472;
chunk__41350_42429 = G__42473;
count__41351_42430 = G__42474;
i__41352_42431 = G__42475;
continue;
} else {
var temp__5720__auto___42477 = cljs.core.seq(seq__41349_42428);
if(temp__5720__auto___42477){
var seq__41349_42478__$1 = temp__5720__auto___42477;
if(cljs.core.chunked_seq_QMARK_(seq__41349_42478__$1)){
var c__5565__auto___42479 = cljs.core.chunk_first(seq__41349_42478__$1);
var G__42480 = cljs.core.chunk_rest(seq__41349_42478__$1);
var G__42481 = c__5565__auto___42479;
var G__42482 = cljs.core.count(c__5565__auto___42479);
var G__42483 = (0);
seq__41349_42428 = G__42480;
chunk__41350_42429 = G__42481;
count__41351_42430 = G__42482;
i__41352_42431 = G__42483;
continue;
} else {
var child_struct_42488 = cljs.core.first(seq__41349_42478__$1);
var children_42489 = shadow.dom.dom_node(child_struct_42488);
if(cljs.core.seq_QMARK_(children_42489)){
var seq__41445_42490 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42489));
var chunk__41447_42491 = null;
var count__41448_42492 = (0);
var i__41449_42493 = (0);
while(true){
if((i__41449_42493 < count__41448_42492)){
var child_42494 = chunk__41447_42491.cljs$core$IIndexed$_nth$arity$2(null, i__41449_42493);
if(cljs.core.truth_(child_42494)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42494);


var G__42496 = seq__41445_42490;
var G__42497 = chunk__41447_42491;
var G__42498 = count__41448_42492;
var G__42499 = (i__41449_42493 + (1));
seq__41445_42490 = G__42496;
chunk__41447_42491 = G__42497;
count__41448_42492 = G__42498;
i__41449_42493 = G__42499;
continue;
} else {
var G__42501 = seq__41445_42490;
var G__42502 = chunk__41447_42491;
var G__42503 = count__41448_42492;
var G__42504 = (i__41449_42493 + (1));
seq__41445_42490 = G__42501;
chunk__41447_42491 = G__42502;
count__41448_42492 = G__42503;
i__41449_42493 = G__42504;
continue;
}
} else {
var temp__5720__auto___42505__$1 = cljs.core.seq(seq__41445_42490);
if(temp__5720__auto___42505__$1){
var seq__41445_42506__$1 = temp__5720__auto___42505__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41445_42506__$1)){
var c__5565__auto___42507 = cljs.core.chunk_first(seq__41445_42506__$1);
var G__42508 = cljs.core.chunk_rest(seq__41445_42506__$1);
var G__42509 = c__5565__auto___42507;
var G__42510 = cljs.core.count(c__5565__auto___42507);
var G__42511 = (0);
seq__41445_42490 = G__42508;
chunk__41447_42491 = G__42509;
count__41448_42492 = G__42510;
i__41449_42493 = G__42511;
continue;
} else {
var child_42513 = cljs.core.first(seq__41445_42506__$1);
if(cljs.core.truth_(child_42513)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42513);


var G__42514 = cljs.core.next(seq__41445_42506__$1);
var G__42515 = null;
var G__42516 = (0);
var G__42517 = (0);
seq__41445_42490 = G__42514;
chunk__41447_42491 = G__42515;
count__41448_42492 = G__42516;
i__41449_42493 = G__42517;
continue;
} else {
var G__42518 = cljs.core.next(seq__41445_42506__$1);
var G__42519 = null;
var G__42520 = (0);
var G__42521 = (0);
seq__41445_42490 = G__42518;
chunk__41447_42491 = G__42519;
count__41448_42492 = G__42520;
i__41449_42493 = G__42521;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42489);
}


var G__42522 = cljs.core.next(seq__41349_42478__$1);
var G__42523 = null;
var G__42524 = (0);
var G__42525 = (0);
seq__41349_42428 = G__42522;
chunk__41350_42429 = G__42523;
count__41351_42430 = G__42524;
i__41352_42431 = G__42525;
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
var seq__41497 = cljs.core.seq(node);
var chunk__41498 = null;
var count__41499 = (0);
var i__41500 = (0);
while(true){
if((i__41500 < count__41499)){
var n = chunk__41498.cljs$core$IIndexed$_nth$arity$2(null, i__41500);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__42526 = seq__41497;
var G__42527 = chunk__41498;
var G__42528 = count__41499;
var G__42529 = (i__41500 + (1));
seq__41497 = G__42526;
chunk__41498 = G__42527;
count__41499 = G__42528;
i__41500 = G__42529;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__41497);
if(temp__5720__auto__){
var seq__41497__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41497__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__41497__$1);
var G__42530 = cljs.core.chunk_rest(seq__41497__$1);
var G__42531 = c__5565__auto__;
var G__42532 = cljs.core.count(c__5565__auto__);
var G__42533 = (0);
seq__41497 = G__42530;
chunk__41498 = G__42531;
count__41499 = G__42532;
i__41500 = G__42533;
continue;
} else {
var n = cljs.core.first(seq__41497__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__42537 = cljs.core.next(seq__41497__$1);
var G__42538 = null;
var G__42539 = (0);
var G__42540 = (0);
seq__41497 = G__42537;
chunk__41498 = G__42538;
count__41499 = G__42539;
i__41500 = G__42540;
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
var G__41524 = arguments.length;
switch (G__41524) {
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
var G__41528 = arguments.length;
switch (G__41528) {
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
var G__41545 = arguments.length;
switch (G__41545) {
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
var len__5766__auto___42648 = arguments.length;
var i__5767__auto___42649 = (0);
while(true){
if((i__5767__auto___42649 < len__5766__auto___42648)){
args__5772__auto__.push((arguments[i__5767__auto___42649]));

var G__42650 = (i__5767__auto___42649 + (1));
i__5767__auto___42649 = G__42650;
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
var seq__41595_42658 = cljs.core.seq(nodes);
var chunk__41596_42660 = null;
var count__41597_42662 = (0);
var i__41598_42664 = (0);
while(true){
if((i__41598_42664 < count__41597_42662)){
var node_42668 = chunk__41596_42660.cljs$core$IIndexed$_nth$arity$2(null, i__41598_42664);
fragment.appendChild(shadow.dom._to_dom(node_42668));


var G__42669 = seq__41595_42658;
var G__42670 = chunk__41596_42660;
var G__42671 = count__41597_42662;
var G__42672 = (i__41598_42664 + (1));
seq__41595_42658 = G__42669;
chunk__41596_42660 = G__42670;
count__41597_42662 = G__42671;
i__41598_42664 = G__42672;
continue;
} else {
var temp__5720__auto___42673 = cljs.core.seq(seq__41595_42658);
if(temp__5720__auto___42673){
var seq__41595_42674__$1 = temp__5720__auto___42673;
if(cljs.core.chunked_seq_QMARK_(seq__41595_42674__$1)){
var c__5565__auto___42675 = cljs.core.chunk_first(seq__41595_42674__$1);
var G__42680 = cljs.core.chunk_rest(seq__41595_42674__$1);
var G__42681 = c__5565__auto___42675;
var G__42682 = cljs.core.count(c__5565__auto___42675);
var G__42683 = (0);
seq__41595_42658 = G__42680;
chunk__41596_42660 = G__42681;
count__41597_42662 = G__42682;
i__41598_42664 = G__42683;
continue;
} else {
var node_42685 = cljs.core.first(seq__41595_42674__$1);
fragment.appendChild(shadow.dom._to_dom(node_42685));


var G__42687 = cljs.core.next(seq__41595_42674__$1);
var G__42688 = null;
var G__42689 = (0);
var G__42690 = (0);
seq__41595_42658 = G__42687;
chunk__41596_42660 = G__42688;
count__41597_42662 = G__42689;
i__41598_42664 = G__42690;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq41580){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41580));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__41623_42705 = cljs.core.seq(scripts);
var chunk__41624_42706 = null;
var count__41625_42707 = (0);
var i__41626_42708 = (0);
while(true){
if((i__41626_42708 < count__41625_42707)){
var vec__41660_42709 = chunk__41624_42706.cljs$core$IIndexed$_nth$arity$2(null, i__41626_42708);
var script_tag_42710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41660_42709,(0),null);
var script_body_42711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41660_42709,(1),null);
eval(script_body_42711);


var G__42716 = seq__41623_42705;
var G__42717 = chunk__41624_42706;
var G__42718 = count__41625_42707;
var G__42719 = (i__41626_42708 + (1));
seq__41623_42705 = G__42716;
chunk__41624_42706 = G__42717;
count__41625_42707 = G__42718;
i__41626_42708 = G__42719;
continue;
} else {
var temp__5720__auto___42720 = cljs.core.seq(seq__41623_42705);
if(temp__5720__auto___42720){
var seq__41623_42721__$1 = temp__5720__auto___42720;
if(cljs.core.chunked_seq_QMARK_(seq__41623_42721__$1)){
var c__5565__auto___42722 = cljs.core.chunk_first(seq__41623_42721__$1);
var G__42723 = cljs.core.chunk_rest(seq__41623_42721__$1);
var G__42724 = c__5565__auto___42722;
var G__42725 = cljs.core.count(c__5565__auto___42722);
var G__42726 = (0);
seq__41623_42705 = G__42723;
chunk__41624_42706 = G__42724;
count__41625_42707 = G__42725;
i__41626_42708 = G__42726;
continue;
} else {
var vec__41667_42727 = cljs.core.first(seq__41623_42721__$1);
var script_tag_42728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41667_42727,(0),null);
var script_body_42729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41667_42727,(1),null);
eval(script_body_42729);


var G__42731 = cljs.core.next(seq__41623_42721__$1);
var G__42732 = null;
var G__42733 = (0);
var G__42734 = (0);
seq__41623_42705 = G__42731;
chunk__41624_42706 = G__42732;
count__41625_42707 = G__42733;
i__41626_42708 = G__42734;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__41670){
var vec__41672 = p__41670;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41672,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41672,(1),null);
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
var G__41688 = arguments.length;
switch (G__41688) {
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
var seq__41725 = cljs.core.seq(style_keys);
var chunk__41726 = null;
var count__41727 = (0);
var i__41728 = (0);
while(true){
if((i__41728 < count__41727)){
var it = chunk__41726.cljs$core$IIndexed$_nth$arity$2(null, i__41728);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42770 = seq__41725;
var G__42771 = chunk__41726;
var G__42772 = count__41727;
var G__42773 = (i__41728 + (1));
seq__41725 = G__42770;
chunk__41726 = G__42771;
count__41727 = G__42772;
i__41728 = G__42773;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__41725);
if(temp__5720__auto__){
var seq__41725__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41725__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__41725__$1);
var G__42774 = cljs.core.chunk_rest(seq__41725__$1);
var G__42775 = c__5565__auto__;
var G__42776 = cljs.core.count(c__5565__auto__);
var G__42777 = (0);
seq__41725 = G__42774;
chunk__41726 = G__42775;
count__41727 = G__42776;
i__41728 = G__42777;
continue;
} else {
var it = cljs.core.first(seq__41725__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42778 = cljs.core.next(seq__41725__$1);
var G__42779 = null;
var G__42780 = (0);
var G__42781 = (0);
seq__41725 = G__42778;
chunk__41726 = G__42779;
count__41727 = G__42780;
i__41728 = G__42781;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k41745,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__41759 = k41745;
var G__41759__$1 = (((G__41759 instanceof cljs.core.Keyword))?G__41759.fqn:null);
switch (G__41759__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41745,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__41761){
var vec__41763 = p__41761;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41763,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41763,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41744){
var self__ = this;
var G__41744__$1 = this;
return (new cljs.core.RecordIter((0),G__41744__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41746,other41747){
var self__ = this;
var this41746__$1 = this;
return (((!((other41747 == null)))) && ((((this41746__$1.constructor === other41747.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41746__$1.x,other41747.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41746__$1.y,other41747.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41746__$1.__extmap,other41747.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k41745){
var self__ = this;
var this__5347__auto____$1 = this;
var G__41788 = k41745;
var G__41788__$1 = (((G__41788 instanceof cljs.core.Keyword))?G__41788.fqn:null);
switch (G__41788__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41745);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__41744){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__41795 = cljs.core.keyword_identical_QMARK_;
var expr__41796 = k__5349__auto__;
if(cljs.core.truth_((pred__41795.cljs$core$IFn$_invoke$arity$2 ? pred__41795.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__41796) : pred__41795.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__41796)))){
return (new shadow.dom.Coordinate(G__41744,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41795.cljs$core$IFn$_invoke$arity$2 ? pred__41795.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__41796) : pred__41795.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__41796)))){
return (new shadow.dom.Coordinate(self__.x,G__41744,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__41744),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__41744){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41744,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41751){
var extmap__5382__auto__ = (function (){var G__41812 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41751,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41751)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41812);
} else {
return G__41812;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41751),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41751),null,cljs.core.not_empty(extmap__5382__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k41826,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__41869 = k41826;
var G__41869__$1 = (((G__41869 instanceof cljs.core.Keyword))?G__41869.fqn:null);
switch (G__41869__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41826,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__41888){
var vec__41889 = p__41888;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41889,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41889,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41825){
var self__ = this;
var G__41825__$1 = this;
return (new cljs.core.RecordIter((0),G__41825__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41827,other41828){
var self__ = this;
var this41827__$1 = this;
return (((!((other41828 == null)))) && ((((this41827__$1.constructor === other41828.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41827__$1.w,other41828.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41827__$1.h,other41828.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41827__$1.__extmap,other41828.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k41826){
var self__ = this;
var this__5347__auto____$1 = this;
var G__41902 = k41826;
var G__41902__$1 = (((G__41902 instanceof cljs.core.Keyword))?G__41902.fqn:null);
switch (G__41902__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41826);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__41825){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__41903 = cljs.core.keyword_identical_QMARK_;
var expr__41904 = k__5349__auto__;
if(cljs.core.truth_((pred__41903.cljs$core$IFn$_invoke$arity$2 ? pred__41903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__41904) : pred__41903.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__41904)))){
return (new shadow.dom.Size(G__41825,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41903.cljs$core$IFn$_invoke$arity$2 ? pred__41903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__41904) : pred__41903.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__41904)))){
return (new shadow.dom.Size(self__.w,G__41825,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__41825),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__41825){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__41825,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__41842){
var extmap__5382__auto__ = (function (){var G__41914 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41842,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__41842)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41914);
} else {
return G__41914;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__41842),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41842),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var G__42838 = (i + (1));
var G__42839 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__42838;
ret = G__42839;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41937){
var vec__41938 = p__41937;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41938,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__41944 = arguments.length;
switch (G__41944) {
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
var G__42845 = ps;
var G__42846 = (i + (1));
el__$1 = G__42845;
i = G__42846;
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
var vec__41989 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41989,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41989,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41989,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__41996_42848 = cljs.core.seq(props);
var chunk__41997_42849 = null;
var count__41998_42850 = (0);
var i__41999_42851 = (0);
while(true){
if((i__41999_42851 < count__41998_42850)){
var vec__42014_42852 = chunk__41997_42849.cljs$core$IIndexed$_nth$arity$2(null, i__41999_42851);
var k_42853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42014_42852,(0),null);
var v_42854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42014_42852,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_42853);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42853),v_42854);


var G__42859 = seq__41996_42848;
var G__42860 = chunk__41997_42849;
var G__42861 = count__41998_42850;
var G__42862 = (i__41999_42851 + (1));
seq__41996_42848 = G__42859;
chunk__41997_42849 = G__42860;
count__41998_42850 = G__42861;
i__41999_42851 = G__42862;
continue;
} else {
var temp__5720__auto___42863 = cljs.core.seq(seq__41996_42848);
if(temp__5720__auto___42863){
var seq__41996_42864__$1 = temp__5720__auto___42863;
if(cljs.core.chunked_seq_QMARK_(seq__41996_42864__$1)){
var c__5565__auto___42866 = cljs.core.chunk_first(seq__41996_42864__$1);
var G__42867 = cljs.core.chunk_rest(seq__41996_42864__$1);
var G__42868 = c__5565__auto___42866;
var G__42869 = cljs.core.count(c__5565__auto___42866);
var G__42870 = (0);
seq__41996_42848 = G__42867;
chunk__41997_42849 = G__42868;
count__41998_42850 = G__42869;
i__41999_42851 = G__42870;
continue;
} else {
var vec__42018_42871 = cljs.core.first(seq__41996_42864__$1);
var k_42872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42018_42871,(0),null);
var v_42873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42018_42871,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_42872);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42872),v_42873);


var G__42877 = cljs.core.next(seq__41996_42864__$1);
var G__42878 = null;
var G__42879 = (0);
var G__42880 = (0);
seq__41996_42848 = G__42877;
chunk__41997_42849 = G__42878;
count__41998_42850 = G__42879;
i__41999_42851 = G__42880;
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
var vec__42036 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42036,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42036,(1),null);
var seq__42040_42885 = cljs.core.seq(node_children);
var chunk__42042_42886 = null;
var count__42043_42887 = (0);
var i__42044_42888 = (0);
while(true){
if((i__42044_42888 < count__42043_42887)){
var child_struct_42892 = chunk__42042_42886.cljs$core$IIndexed$_nth$arity$2(null, i__42044_42888);
if((!((child_struct_42892 == null)))){
if(typeof child_struct_42892 === 'string'){
var text_42893 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42893),child_struct_42892].join(''));
} else {
var children_42894 = shadow.dom.svg_node(child_struct_42892);
if(cljs.core.seq_QMARK_(children_42894)){
var seq__42093_42895 = cljs.core.seq(children_42894);
var chunk__42095_42896 = null;
var count__42096_42897 = (0);
var i__42097_42898 = (0);
while(true){
if((i__42097_42898 < count__42096_42897)){
var child_42899 = chunk__42095_42896.cljs$core$IIndexed$_nth$arity$2(null, i__42097_42898);
if(cljs.core.truth_(child_42899)){
node.appendChild(child_42899);


var G__42900 = seq__42093_42895;
var G__42901 = chunk__42095_42896;
var G__42902 = count__42096_42897;
var G__42903 = (i__42097_42898 + (1));
seq__42093_42895 = G__42900;
chunk__42095_42896 = G__42901;
count__42096_42897 = G__42902;
i__42097_42898 = G__42903;
continue;
} else {
var G__42904 = seq__42093_42895;
var G__42905 = chunk__42095_42896;
var G__42906 = count__42096_42897;
var G__42907 = (i__42097_42898 + (1));
seq__42093_42895 = G__42904;
chunk__42095_42896 = G__42905;
count__42096_42897 = G__42906;
i__42097_42898 = G__42907;
continue;
}
} else {
var temp__5720__auto___42908 = cljs.core.seq(seq__42093_42895);
if(temp__5720__auto___42908){
var seq__42093_42909__$1 = temp__5720__auto___42908;
if(cljs.core.chunked_seq_QMARK_(seq__42093_42909__$1)){
var c__5565__auto___42910 = cljs.core.chunk_first(seq__42093_42909__$1);
var G__42911 = cljs.core.chunk_rest(seq__42093_42909__$1);
var G__42912 = c__5565__auto___42910;
var G__42913 = cljs.core.count(c__5565__auto___42910);
var G__42914 = (0);
seq__42093_42895 = G__42911;
chunk__42095_42896 = G__42912;
count__42096_42897 = G__42913;
i__42097_42898 = G__42914;
continue;
} else {
var child_42918 = cljs.core.first(seq__42093_42909__$1);
if(cljs.core.truth_(child_42918)){
node.appendChild(child_42918);


var G__42919 = cljs.core.next(seq__42093_42909__$1);
var G__42920 = null;
var G__42921 = (0);
var G__42922 = (0);
seq__42093_42895 = G__42919;
chunk__42095_42896 = G__42920;
count__42096_42897 = G__42921;
i__42097_42898 = G__42922;
continue;
} else {
var G__42923 = cljs.core.next(seq__42093_42909__$1);
var G__42924 = null;
var G__42925 = (0);
var G__42926 = (0);
seq__42093_42895 = G__42923;
chunk__42095_42896 = G__42924;
count__42096_42897 = G__42925;
i__42097_42898 = G__42926;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42894);
}
}


var G__42927 = seq__42040_42885;
var G__42928 = chunk__42042_42886;
var G__42929 = count__42043_42887;
var G__42930 = (i__42044_42888 + (1));
seq__42040_42885 = G__42927;
chunk__42042_42886 = G__42928;
count__42043_42887 = G__42929;
i__42044_42888 = G__42930;
continue;
} else {
var G__42931 = seq__42040_42885;
var G__42932 = chunk__42042_42886;
var G__42933 = count__42043_42887;
var G__42934 = (i__42044_42888 + (1));
seq__42040_42885 = G__42931;
chunk__42042_42886 = G__42932;
count__42043_42887 = G__42933;
i__42044_42888 = G__42934;
continue;
}
} else {
var temp__5720__auto___42936 = cljs.core.seq(seq__42040_42885);
if(temp__5720__auto___42936){
var seq__42040_42937__$1 = temp__5720__auto___42936;
if(cljs.core.chunked_seq_QMARK_(seq__42040_42937__$1)){
var c__5565__auto___42938 = cljs.core.chunk_first(seq__42040_42937__$1);
var G__42939 = cljs.core.chunk_rest(seq__42040_42937__$1);
var G__42940 = c__5565__auto___42938;
var G__42941 = cljs.core.count(c__5565__auto___42938);
var G__42942 = (0);
seq__42040_42885 = G__42939;
chunk__42042_42886 = G__42940;
count__42043_42887 = G__42941;
i__42044_42888 = G__42942;
continue;
} else {
var child_struct_42943 = cljs.core.first(seq__42040_42937__$1);
if((!((child_struct_42943 == null)))){
if(typeof child_struct_42943 === 'string'){
var text_42944 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42944),child_struct_42943].join(''));
} else {
var children_42945 = shadow.dom.svg_node(child_struct_42943);
if(cljs.core.seq_QMARK_(children_42945)){
var seq__42118_42946 = cljs.core.seq(children_42945);
var chunk__42120_42947 = null;
var count__42121_42948 = (0);
var i__42122_42949 = (0);
while(true){
if((i__42122_42949 < count__42121_42948)){
var child_42954 = chunk__42120_42947.cljs$core$IIndexed$_nth$arity$2(null, i__42122_42949);
if(cljs.core.truth_(child_42954)){
node.appendChild(child_42954);


var G__42956 = seq__42118_42946;
var G__42957 = chunk__42120_42947;
var G__42958 = count__42121_42948;
var G__42959 = (i__42122_42949 + (1));
seq__42118_42946 = G__42956;
chunk__42120_42947 = G__42957;
count__42121_42948 = G__42958;
i__42122_42949 = G__42959;
continue;
} else {
var G__42960 = seq__42118_42946;
var G__42961 = chunk__42120_42947;
var G__42962 = count__42121_42948;
var G__42963 = (i__42122_42949 + (1));
seq__42118_42946 = G__42960;
chunk__42120_42947 = G__42961;
count__42121_42948 = G__42962;
i__42122_42949 = G__42963;
continue;
}
} else {
var temp__5720__auto___42964__$1 = cljs.core.seq(seq__42118_42946);
if(temp__5720__auto___42964__$1){
var seq__42118_42965__$1 = temp__5720__auto___42964__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42118_42965__$1)){
var c__5565__auto___42966 = cljs.core.chunk_first(seq__42118_42965__$1);
var G__42967 = cljs.core.chunk_rest(seq__42118_42965__$1);
var G__42968 = c__5565__auto___42966;
var G__42969 = cljs.core.count(c__5565__auto___42966);
var G__42970 = (0);
seq__42118_42946 = G__42967;
chunk__42120_42947 = G__42968;
count__42121_42948 = G__42969;
i__42122_42949 = G__42970;
continue;
} else {
var child_42971 = cljs.core.first(seq__42118_42965__$1);
if(cljs.core.truth_(child_42971)){
node.appendChild(child_42971);


var G__42972 = cljs.core.next(seq__42118_42965__$1);
var G__42973 = null;
var G__42974 = (0);
var G__42975 = (0);
seq__42118_42946 = G__42972;
chunk__42120_42947 = G__42973;
count__42121_42948 = G__42974;
i__42122_42949 = G__42975;
continue;
} else {
var G__42976 = cljs.core.next(seq__42118_42965__$1);
var G__42977 = null;
var G__42978 = (0);
var G__42979 = (0);
seq__42118_42946 = G__42976;
chunk__42120_42947 = G__42977;
count__42121_42948 = G__42978;
i__42122_42949 = G__42979;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42945);
}
}


var G__42981 = cljs.core.next(seq__42040_42937__$1);
var G__42982 = null;
var G__42983 = (0);
var G__42984 = (0);
seq__42040_42885 = G__42981;
chunk__42042_42886 = G__42982;
count__42043_42887 = G__42983;
i__42044_42888 = G__42984;
continue;
} else {
var G__42986 = cljs.core.next(seq__42040_42937__$1);
var G__42987 = null;
var G__42988 = (0);
var G__42989 = (0);
seq__42040_42885 = G__42986;
chunk__42042_42886 = G__42987;
count__42043_42887 = G__42988;
i__42044_42888 = G__42989;
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
var len__5766__auto___42994 = arguments.length;
var i__5767__auto___42997 = (0);
while(true){
if((i__5767__auto___42997 < len__5766__auto___42994)){
args__5772__auto__.push((arguments[i__5767__auto___42997]));

var G__42998 = (i__5767__auto___42997 + (1));
i__5767__auto___42997 = G__42998;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq42145){
var G__42146 = cljs.core.first(seq42145);
var seq42145__$1 = cljs.core.next(seq42145);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42146,seq42145__$1);
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
var G__42161 = arguments.length;
switch (G__42161) {
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
var c__37390__auto___43000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_42169){
var state_val_42170 = (state_42169[(1)]);
if((state_val_42170 === (1))){
var state_42169__$1 = state_42169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42169__$1,(2),once_or_cleanup);
} else {
if((state_val_42170 === (2))){
var inst_42163 = (state_42169[(2)]);
var inst_42164 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_42169__$1 = (function (){var statearr_42171 = state_42169;
(statearr_42171[(7)] = inst_42163);

return statearr_42171;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42169__$1,inst_42164);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36740__auto__ = null;
var shadow$dom$state_machine__36740__auto____0 = (function (){
var statearr_42173 = [null,null,null,null,null,null,null,null];
(statearr_42173[(0)] = shadow$dom$state_machine__36740__auto__);

(statearr_42173[(1)] = (1));

return statearr_42173;
});
var shadow$dom$state_machine__36740__auto____1 = (function (state_42169){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_42169);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e42174){var ex__36743__auto__ = e42174;
var statearr_42175_43003 = state_42169;
(statearr_42175_43003[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_42169[(4)]))){
var statearr_42176_43004 = state_42169;
(statearr_42176_43004[(1)] = cljs.core.first((state_42169[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43005 = state_42169;
state_42169 = G__43005;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
shadow$dom$state_machine__36740__auto__ = function(state_42169){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36740__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36740__auto____1.call(this,state_42169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36740__auto____0;
shadow$dom$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36740__auto____1;
return shadow$dom$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_42178 = f__37391__auto__();
(statearr_42178[(6)] = c__37390__auto___43000);

return statearr_42178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
