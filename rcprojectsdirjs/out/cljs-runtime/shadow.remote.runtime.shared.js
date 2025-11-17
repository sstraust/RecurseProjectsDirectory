goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__30882){
var map__30886 = p__30882;
var map__30886__$1 = cljs.core.__destructure_map(map__30886);
var runtime = map__30886__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30886__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31028 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31028)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__30887 = runtime;
var G__30888 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31028);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__30887,G__30888) : shadow.remote.runtime.shared.process.call(null, G__30887,G__30888));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__30889,res){
var map__30894 = p__30889;
var map__30894__$1 = cljs.core.__destructure_map(map__30894);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30894__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30894__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__30895 = res;
var G__30895__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30895,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__30895);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30895__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__30895__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__30902 = arguments.length;
switch (G__30902) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__30905,msg,handlers,timeout_after_ms){
var map__30906 = p__30905;
var map__30906__$1 = cljs.core.__destructure_map(map__30906);
var runtime = map__30906__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30906__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5766__auto___31042 = arguments.length;
var i__5767__auto___31043 = (0);
while(true){
if((i__5767__auto___31043 < len__5766__auto___31042)){
args__5772__auto__.push((arguments[i__5767__auto___31043]));

var G__31044 = (i__5767__auto___31043 + (1));
i__5767__auto___31043 = G__31044;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30916,ev,args){
var map__30917 = p__30916;
var map__30917__$1 = cljs.core.__destructure_map(map__30917);
var runtime = map__30917__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30917__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__30918 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30921 = null;
var count__30922 = (0);
var i__30923 = (0);
while(true){
if((i__30923 < count__30922)){
var ext = chunk__30921.cljs$core$IIndexed$_nth$arity$2(null, i__30923);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31059 = seq__30918;
var G__31060 = chunk__30921;
var G__31061 = count__30922;
var G__31062 = (i__30923 + (1));
seq__30918 = G__31059;
chunk__30921 = G__31060;
count__30922 = G__31061;
i__30923 = G__31062;
continue;
} else {
var G__31063 = seq__30918;
var G__31064 = chunk__30921;
var G__31065 = count__30922;
var G__31066 = (i__30923 + (1));
seq__30918 = G__31063;
chunk__30921 = G__31064;
count__30922 = G__31065;
i__30923 = G__31066;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30918);
if(temp__5720__auto__){
var seq__30918__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30918__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__30918__$1);
var G__31067 = cljs.core.chunk_rest(seq__30918__$1);
var G__31068 = c__5565__auto__;
var G__31069 = cljs.core.count(c__5565__auto__);
var G__31070 = (0);
seq__30918 = G__31067;
chunk__30921 = G__31068;
count__30922 = G__31069;
i__30923 = G__31070;
continue;
} else {
var ext = cljs.core.first(seq__30918__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31071 = cljs.core.next(seq__30918__$1);
var G__31072 = null;
var G__31073 = (0);
var G__31074 = (0);
seq__30918 = G__31071;
chunk__30921 = G__31072;
count__30922 = G__31073;
i__30923 = G__31074;
continue;
} else {
var G__31075 = cljs.core.next(seq__30918__$1);
var G__31076 = null;
var G__31077 = (0);
var G__31078 = (0);
seq__30918 = G__31075;
chunk__30921 = G__31076;
count__30922 = G__31077;
i__30923 = G__31078;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq30909){
var G__30910 = cljs.core.first(seq30909);
var seq30909__$1 = cljs.core.next(seq30909);
var G__30911 = cljs.core.first(seq30909__$1);
var seq30909__$2 = cljs.core.next(seq30909__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30910,G__30911,seq30909__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__30929,p__30930){
var map__30932 = p__30929;
var map__30932__$1 = cljs.core.__destructure_map(map__30932);
var runtime = map__30932__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30932__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30933 = p__30930;
var map__30933__$1 = cljs.core.__destructure_map(map__30933);
var msg = map__30933__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30933__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__30934 = cljs.core.deref(state_ref);
var map__30934__$1 = cljs.core.__destructure_map(map__30934);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30934__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30934__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__30935,msg){
var map__30936 = p__30935;
var map__30936__$1 = cljs.core.__destructure_map(map__30936);
var runtime = map__30936__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30936__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__30947,key,p__30948){
var map__30952 = p__30947;
var map__30952__$1 = cljs.core.__destructure_map(map__30952);
var state = map__30952__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30952__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__30953 = p__30948;
var map__30953__$1 = cljs.core.__destructure_map(map__30953);
var spec = map__30953__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30953__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30953__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__30963,key,spec){
var map__30964 = p__30963;
var map__30964__$1 = cljs.core.__destructure_map(map__30964);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30964__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__30968_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__30968_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__30971_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__30971_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__30972_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__30972_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__30973_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__30973_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__30974_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__30974_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__30978,key){
var map__30979 = p__30978;
var map__30979__$1 = cljs.core.__destructure_map(map__30979);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30979__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__30983,msg){
var map__30985 = p__30983;
var map__30985__$1 = cljs.core.__destructure_map(map__30985);
var runtime = map__30985__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30985__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__30986,p__30987){
var map__30988 = p__30986;
var map__30988__$1 = cljs.core.__destructure_map(map__30988);
var runtime = map__30988__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30988__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30989 = p__30987;
var map__30989__$1 = cljs.core.__destructure_map(map__30989);
var msg = map__30989__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30989__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30989__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__30994 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30996 = null;
var count__30997 = (0);
var i__30998 = (0);
while(true){
if((i__30998 < count__30997)){
var map__31003 = chunk__30996.cljs$core$IIndexed$_nth$arity$2(null, i__30998);
var map__31003__$1 = cljs.core.__destructure_map(map__31003);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31003__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__31124 = seq__30994;
var G__31125 = chunk__30996;
var G__31126 = count__30997;
var G__31127 = (i__30998 + (1));
seq__30994 = G__31124;
chunk__30996 = G__31125;
count__30997 = G__31126;
i__30998 = G__31127;
continue;
} else {
var G__31128 = seq__30994;
var G__31129 = chunk__30996;
var G__31130 = count__30997;
var G__31131 = (i__30998 + (1));
seq__30994 = G__31128;
chunk__30996 = G__31129;
count__30997 = G__31130;
i__30998 = G__31131;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__30994);
if(temp__5720__auto__){
var seq__30994__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30994__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__30994__$1);
var G__31132 = cljs.core.chunk_rest(seq__30994__$1);
var G__31133 = c__5565__auto__;
var G__31134 = cljs.core.count(c__5565__auto__);
var G__31135 = (0);
seq__30994 = G__31132;
chunk__30996 = G__31133;
count__30997 = G__31134;
i__30998 = G__31135;
continue;
} else {
var map__31004 = cljs.core.first(seq__30994__$1);
var map__31004__$1 = cljs.core.__destructure_map(map__31004);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31004__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__31141 = cljs.core.next(seq__30994__$1);
var G__31142 = null;
var G__31143 = (0);
var G__31144 = (0);
seq__30994 = G__31141;
chunk__30996 = G__31142;
count__30997 = G__31143;
i__30998 = G__31144;
continue;
} else {
var G__31149 = cljs.core.next(seq__30994__$1);
var G__31150 = null;
var G__31151 = (0);
var G__31152 = (0);
seq__30994 = G__31149;
chunk__30996 = G__31150;
count__30997 = G__31151;
i__30998 = G__31152;
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
