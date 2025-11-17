goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__43532,p__43533){
var map__43534 = p__43532;
var map__43534__$1 = cljs.core.__destructure_map(map__43534);
var svc = map__43534__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43534__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43534__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43534__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43535 = p__43533;
var map__43535__$1 = cljs.core.__destructure_map(map__43535);
var msg = map__43535__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43535__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43535__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43535__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43535__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__43555,p__43556){
var map__43558 = p__43555;
var map__43558__$1 = cljs.core.__destructure_map(map__43558);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43558__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__43559 = p__43556;
var map__43559__$1 = cljs.core.__destructure_map(map__43559);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43559__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__43570,p__43571){
var map__43573 = p__43570;
var map__43573__$1 = cljs.core.__destructure_map(map__43573);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43573__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43573__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43574 = p__43571;
var map__43574__$1 = cljs.core.__destructure_map(map__43574);
var msg = map__43574__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43574__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__43592,tid){
var map__43602 = p__43592;
var map__43602__$1 = cljs.core.__destructure_map(map__43602);
var svc = map__43602__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43602__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__43645 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__43646 = null;
var count__43647 = (0);
var i__43648 = (0);
while(true){
if((i__43648 < count__43647)){
var vec__43708 = chunk__43646.cljs$core$IIndexed$_nth$arity$2(null, i__43648);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43708,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43708,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43847 = seq__43645;
var G__43848 = chunk__43646;
var G__43849 = count__43647;
var G__43850 = (i__43648 + (1));
seq__43645 = G__43847;
chunk__43646 = G__43848;
count__43647 = G__43849;
i__43648 = G__43850;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__43645);
if(temp__5720__auto__){
var seq__43645__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43645__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__43645__$1);
var G__43851 = cljs.core.chunk_rest(seq__43645__$1);
var G__43852 = c__5565__auto__;
var G__43853 = cljs.core.count(c__5565__auto__);
var G__43854 = (0);
seq__43645 = G__43851;
chunk__43646 = G__43852;
count__43647 = G__43853;
i__43648 = G__43854;
continue;
} else {
var vec__43740 = cljs.core.first(seq__43645__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43740,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43740,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43855 = cljs.core.next(seq__43645__$1);
var G__43856 = null;
var G__43857 = (0);
var G__43858 = (0);
seq__43645 = G__43855;
chunk__43646 = G__43856;
count__43647 = G__43857;
i__43648 = G__43858;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__43631_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__43631_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__43632_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__43632_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__43633_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__43633_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__43634_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__43634_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__43799){
var map__43800 = p__43799;
var map__43800__$1 = cljs.core.__destructure_map(map__43800);
var svc = map__43800__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43800__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43800__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
