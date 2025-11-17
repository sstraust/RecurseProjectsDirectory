goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__37261){
var map__37262 = p__37261;
var map__37262__$1 = cljs.core.__destructure_map(map__37262);
var runtime = map__37262__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37262__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_37419 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_37419)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__37265 = runtime;
var G__37266 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_37419);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__37265,G__37266) : shadow.remote.runtime.shared.process.call(null, G__37265,G__37266));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__37268,res){
var map__37269 = p__37268;
var map__37269__$1 = cljs.core.__destructure_map(map__37269);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37269__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37269__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__37271 = res;
var G__37271__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37271,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__37271);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37271__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__37271__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__37274 = arguments.length;
switch (G__37274) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__37277,msg,handlers,timeout_after_ms){
var map__37278 = p__37277;
var map__37278__$1 = cljs.core.__destructure_map(map__37278);
var runtime = map__37278__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37278__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___37443 = arguments.length;
var i__5767__auto___37444 = (0);
while(true){
if((i__5767__auto___37444 < len__5766__auto___37443)){
args__5772__auto__.push((arguments[i__5767__auto___37444]));

var G__37445 = (i__5767__auto___37444 + (1));
i__5767__auto___37444 = G__37445;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__37294,ev,args){
var map__37295 = p__37294;
var map__37295__$1 = cljs.core.__destructure_map(map__37295);
var runtime = map__37295__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37295__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__37296 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37299 = null;
var count__37300 = (0);
var i__37301 = (0);
while(true){
if((i__37301 < count__37300)){
var ext = chunk__37299.cljs$core$IIndexed$_nth$arity$2(null, i__37301);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37449 = seq__37296;
var G__37450 = chunk__37299;
var G__37451 = count__37300;
var G__37452 = (i__37301 + (1));
seq__37296 = G__37449;
chunk__37299 = G__37450;
count__37300 = G__37451;
i__37301 = G__37452;
continue;
} else {
var G__37453 = seq__37296;
var G__37454 = chunk__37299;
var G__37455 = count__37300;
var G__37456 = (i__37301 + (1));
seq__37296 = G__37453;
chunk__37299 = G__37454;
count__37300 = G__37455;
i__37301 = G__37456;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37296);
if(temp__5720__auto__){
var seq__37296__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37296__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37296__$1);
var G__37457 = cljs.core.chunk_rest(seq__37296__$1);
var G__37458 = c__5565__auto__;
var G__37459 = cljs.core.count(c__5565__auto__);
var G__37460 = (0);
seq__37296 = G__37457;
chunk__37299 = G__37458;
count__37300 = G__37459;
i__37301 = G__37460;
continue;
} else {
var ext = cljs.core.first(seq__37296__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__37462 = cljs.core.next(seq__37296__$1);
var G__37463 = null;
var G__37464 = (0);
var G__37465 = (0);
seq__37296 = G__37462;
chunk__37299 = G__37463;
count__37300 = G__37464;
i__37301 = G__37465;
continue;
} else {
var G__37466 = cljs.core.next(seq__37296__$1);
var G__37467 = null;
var G__37468 = (0);
var G__37469 = (0);
seq__37296 = G__37466;
chunk__37299 = G__37467;
count__37300 = G__37468;
i__37301 = G__37469;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq37289){
var G__37290 = cljs.core.first(seq37289);
var seq37289__$1 = cljs.core.next(seq37289);
var G__37291 = cljs.core.first(seq37289__$1);
var seq37289__$2 = cljs.core.next(seq37289__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37290,G__37291,seq37289__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__37313,p__37314){
var map__37315 = p__37313;
var map__37315__$1 = cljs.core.__destructure_map(map__37315);
var runtime = map__37315__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37315__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37316 = p__37314;
var map__37316__$1 = cljs.core.__destructure_map(map__37316);
var msg = map__37316__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37316__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__37318 = cljs.core.deref(state_ref);
var map__37318__$1 = cljs.core.__destructure_map(map__37318);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37318__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37318__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__37324,msg){
var map__37325 = p__37324;
var map__37325__$1 = cljs.core.__destructure_map(map__37325);
var runtime = map__37325__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37325__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__37334,key,p__37335){
var map__37337 = p__37334;
var map__37337__$1 = cljs.core.__destructure_map(map__37337);
var state = map__37337__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37337__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__37339 = p__37335;
var map__37339__$1 = cljs.core.__destructure_map(map__37339);
var spec = map__37339__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37339__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37339__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__37343,key,spec){
var map__37346 = p__37343;
var map__37346__$1 = cljs.core.__destructure_map(map__37346);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__37349_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__37349_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__37350_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__37350_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__37351_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__37351_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__37352_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__37352_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__37353_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__37353_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__37363,key){
var map__37364 = p__37363;
var map__37364__$1 = cljs.core.__destructure_map(map__37364);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37364__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__37366,msg){
var map__37367 = p__37366;
var map__37367__$1 = cljs.core.__destructure_map(map__37367);
var runtime = map__37367__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37367__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__37368,p__37369){
var map__37370 = p__37368;
var map__37370__$1 = cljs.core.__destructure_map(map__37370);
var runtime = map__37370__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37370__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__37371 = p__37369;
var map__37371__$1 = cljs.core.__destructure_map(map__37371);
var msg = map__37371__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__37384 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__37386 = null;
var count__37387 = (0);
var i__37388 = (0);
while(true){
if((i__37388 < count__37387)){
var map__37402 = chunk__37386.cljs$core$IIndexed$_nth$arity$2(null, i__37388);
var map__37402__$1 = cljs.core.__destructure_map(map__37402);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37402__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__37485 = seq__37384;
var G__37486 = chunk__37386;
var G__37487 = count__37387;
var G__37488 = (i__37388 + (1));
seq__37384 = G__37485;
chunk__37386 = G__37486;
count__37387 = G__37487;
i__37388 = G__37488;
continue;
} else {
var G__37489 = seq__37384;
var G__37490 = chunk__37386;
var G__37491 = count__37387;
var G__37492 = (i__37388 + (1));
seq__37384 = G__37489;
chunk__37386 = G__37490;
count__37387 = G__37491;
i__37388 = G__37492;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37384);
if(temp__5720__auto__){
var seq__37384__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37384__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37384__$1);
var G__37498 = cljs.core.chunk_rest(seq__37384__$1);
var G__37499 = c__5565__auto__;
var G__37500 = cljs.core.count(c__5565__auto__);
var G__37501 = (0);
seq__37384 = G__37498;
chunk__37386 = G__37499;
count__37387 = G__37500;
i__37388 = G__37501;
continue;
} else {
var map__37403 = cljs.core.first(seq__37384__$1);
var map__37403__$1 = cljs.core.__destructure_map(map__37403);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37403__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__37504 = cljs.core.next(seq__37384__$1);
var G__37505 = null;
var G__37506 = (0);
var G__37507 = (0);
seq__37384 = G__37504;
chunk__37386 = G__37505;
count__37387 = G__37506;
i__37388 = G__37507;
continue;
} else {
var G__37508 = cljs.core.next(seq__37384__$1);
var G__37509 = null;
var G__37510 = (0);
var G__37511 = (0);
seq__37384 = G__37508;
chunk__37386 = G__37509;
count__37387 = G__37510;
i__37388 = G__37511;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
