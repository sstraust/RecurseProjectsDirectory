goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___37622 = arguments.length;
var i__5767__auto___37623 = (0);
while(true){
if((i__5767__auto___37623 < len__5766__auto___37622)){
args__5772__auto__.push((arguments[i__5767__auto___37623]));

var G__37624 = (i__5767__auto___37623 + (1));
i__5767__auto___37623 = G__37624;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37138){
var G__37139 = cljs.core.first(seq37138);
var seq37138__$1 = cljs.core.next(seq37138);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37139,seq37138__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37147 = cljs.core.seq(sources);
var chunk__37148 = null;
var count__37149 = (0);
var i__37150 = (0);
while(true){
if((i__37150 < count__37149)){
var map__37164 = chunk__37148.cljs$core$IIndexed$_nth$arity$2(null, i__37150);
var map__37164__$1 = cljs.core.__destructure_map(map__37164);
var src = map__37164__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37164__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37165){var e_37625 = e37165;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37625);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37625.message)].join('')));
}

var G__37626 = seq__37147;
var G__37627 = chunk__37148;
var G__37628 = count__37149;
var G__37629 = (i__37150 + (1));
seq__37147 = G__37626;
chunk__37148 = G__37627;
count__37149 = G__37628;
i__37150 = G__37629;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37147);
if(temp__5720__auto__){
var seq__37147__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37147__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37147__$1);
var G__37633 = cljs.core.chunk_rest(seq__37147__$1);
var G__37634 = c__5565__auto__;
var G__37635 = cljs.core.count(c__5565__auto__);
var G__37636 = (0);
seq__37147 = G__37633;
chunk__37148 = G__37634;
count__37149 = G__37635;
i__37150 = G__37636;
continue;
} else {
var map__37173 = cljs.core.first(seq__37147__$1);
var map__37173__$1 = cljs.core.__destructure_map(map__37173);
var src = map__37173__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37173__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37173__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37173__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37173__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37175){var e_37639 = e37175;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37639);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37639.message)].join('')));
}

var G__37640 = cljs.core.next(seq__37147__$1);
var G__37641 = null;
var G__37642 = (0);
var G__37643 = (0);
seq__37147 = G__37640;
chunk__37148 = G__37641;
count__37149 = G__37642;
i__37150 = G__37643;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37178 = cljs.core.seq(js_requires);
var chunk__37179 = null;
var count__37180 = (0);
var i__37181 = (0);
while(true){
if((i__37181 < count__37180)){
var js_ns = chunk__37179.cljs$core$IIndexed$_nth$arity$2(null, i__37181);
var require_str_37644 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37644);


var G__37645 = seq__37178;
var G__37646 = chunk__37179;
var G__37647 = count__37180;
var G__37648 = (i__37181 + (1));
seq__37178 = G__37645;
chunk__37179 = G__37646;
count__37180 = G__37647;
i__37181 = G__37648;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37178);
if(temp__5720__auto__){
var seq__37178__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37178__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37178__$1);
var G__37649 = cljs.core.chunk_rest(seq__37178__$1);
var G__37650 = c__5565__auto__;
var G__37651 = cljs.core.count(c__5565__auto__);
var G__37652 = (0);
seq__37178 = G__37649;
chunk__37179 = G__37650;
count__37180 = G__37651;
i__37181 = G__37652;
continue;
} else {
var js_ns = cljs.core.first(seq__37178__$1);
var require_str_37653 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37653);


var G__37654 = cljs.core.next(seq__37178__$1);
var G__37655 = null;
var G__37656 = (0);
var G__37657 = (0);
seq__37178 = G__37654;
chunk__37179 = G__37655;
count__37180 = G__37656;
i__37181 = G__37657;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37185){
var map__37186 = p__37185;
var map__37186__$1 = cljs.core.__destructure_map(map__37186);
var msg = map__37186__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37187(s__37188){
return (new cljs.core.LazySeq(null,(function (){
var s__37188__$1 = s__37188;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37188__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__37201 = cljs.core.first(xs__6277__auto__);
var map__37201__$1 = cljs.core.__destructure_map(map__37201);
var src = map__37201__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37201__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37201__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__37188__$1,map__37201,map__37201__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37186,map__37186__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37187_$_iter__37189(s__37190){
return (new cljs.core.LazySeq(null,((function (s__37188__$1,map__37201,map__37201__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37186,map__37186__$1,msg,info,reload_info){
return (function (){
var s__37190__$1 = s__37190;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__37190__$1);
if(temp__5720__auto____$1){
var s__37190__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37190__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__37190__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__37192 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__37191 = (0);
while(true){
if((i__37191 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__37191);
cljs.core.chunk_append(b__37192,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37660 = (i__37191 + (1));
i__37191 = G__37660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37192),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37187_$_iter__37189(cljs.core.chunk_rest(s__37190__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37192),null);
}
} else {
var warning = cljs.core.first(s__37190__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37187_$_iter__37189(cljs.core.rest(s__37190__$2)));
}
} else {
return null;
}
break;
}
});})(s__37188__$1,map__37201,map__37201__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37186,map__37186__$1,msg,info,reload_info))
,null,null));
});})(s__37188__$1,map__37201,map__37201__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37186,map__37186__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37187(cljs.core.rest(s__37188__$1)));
} else {
var G__37661 = cljs.core.rest(s__37188__$1);
s__37188__$1 = G__37661;
continue;
}
} else {
var G__37662 = cljs.core.rest(s__37188__$1);
s__37188__$1 = G__37662;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37215_37664 = cljs.core.seq(warnings);
var chunk__37216_37665 = null;
var count__37217_37666 = (0);
var i__37218_37667 = (0);
while(true){
if((i__37218_37667 < count__37217_37666)){
var map__37221_37669 = chunk__37216_37665.cljs$core$IIndexed$_nth$arity$2(null, i__37218_37667);
var map__37221_37670__$1 = cljs.core.__destructure_map(map__37221_37669);
var w_37671 = map__37221_37670__$1;
var msg_37672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37221_37670__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37221_37670__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37221_37670__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37221_37670__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37675)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37673),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37674),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37672__$1)].join(''));


var G__37678 = seq__37215_37664;
var G__37679 = chunk__37216_37665;
var G__37680 = count__37217_37666;
var G__37681 = (i__37218_37667 + (1));
seq__37215_37664 = G__37678;
chunk__37216_37665 = G__37679;
count__37217_37666 = G__37680;
i__37218_37667 = G__37681;
continue;
} else {
var temp__5720__auto___37682 = cljs.core.seq(seq__37215_37664);
if(temp__5720__auto___37682){
var seq__37215_37683__$1 = temp__5720__auto___37682;
if(cljs.core.chunked_seq_QMARK_(seq__37215_37683__$1)){
var c__5565__auto___37684 = cljs.core.chunk_first(seq__37215_37683__$1);
var G__37685 = cljs.core.chunk_rest(seq__37215_37683__$1);
var G__37686 = c__5565__auto___37684;
var G__37687 = cljs.core.count(c__5565__auto___37684);
var G__37688 = (0);
seq__37215_37664 = G__37685;
chunk__37216_37665 = G__37686;
count__37217_37666 = G__37687;
i__37218_37667 = G__37688;
continue;
} else {
var map__37223_37689 = cljs.core.first(seq__37215_37683__$1);
var map__37223_37690__$1 = cljs.core.__destructure_map(map__37223_37689);
var w_37691 = map__37223_37690__$1;
var msg_37692__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223_37690__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223_37690__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223_37690__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223_37690__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37695)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37693),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37694),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37692__$1)].join(''));


var G__37696 = cljs.core.next(seq__37215_37683__$1);
var G__37697 = null;
var G__37698 = (0);
var G__37699 = (0);
seq__37215_37664 = G__37696;
chunk__37216_37665 = G__37697;
count__37217_37666 = G__37698;
i__37218_37667 = G__37699;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37184_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37184_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37228){
var map__37229 = p__37228;
var map__37229__$1 = cljs.core.__destructure_map(map__37229);
var msg = map__37229__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37229__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37229__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37230 = cljs.core.seq(updates);
var chunk__37232 = null;
var count__37233 = (0);
var i__37234 = (0);
while(true){
if((i__37234 < count__37233)){
var path = chunk__37232.cljs$core$IIndexed$_nth$arity$2(null, i__37234);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37438_37736 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37442_37737 = null;
var count__37443_37738 = (0);
var i__37444_37739 = (0);
while(true){
if((i__37444_37739 < count__37443_37738)){
var node_37740 = chunk__37442_37737.cljs$core$IIndexed$_nth$arity$2(null, i__37444_37739);
if(cljs.core.not(node_37740.shadow$old)){
var path_match_37741 = shadow.cljs.devtools.client.browser.match_paths(node_37740.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37741)){
var new_link_37742 = (function (){var G__37481 = node_37740.cloneNode(true);
G__37481.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37741),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37481;
})();
(node_37740.shadow$old = true);

(new_link_37742.onload = ((function (seq__37438_37736,chunk__37442_37737,count__37443_37738,i__37444_37739,seq__37230,chunk__37232,count__37233,i__37234,new_link_37742,path_match_37741,node_37740,path,map__37229,map__37229__$1,msg,updates,reload_info){
return (function (e){
var seq__37483_37743 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37485_37744 = null;
var count__37486_37745 = (0);
var i__37487_37746 = (0);
while(true){
if((i__37487_37746 < count__37486_37745)){
var map__37492_37747 = chunk__37485_37744.cljs$core$IIndexed$_nth$arity$2(null, i__37487_37746);
var map__37492_37748__$1 = cljs.core.__destructure_map(map__37492_37747);
var task_37749 = map__37492_37748__$1;
var fn_str_37750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37492_37748__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37492_37748__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37754 = goog.getObjectByName(fn_str_37750,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37751)].join(''));

(fn_obj_37754.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37754.cljs$core$IFn$_invoke$arity$2(path,new_link_37742) : fn_obj_37754.call(null, path,new_link_37742));


var G__37755 = seq__37483_37743;
var G__37756 = chunk__37485_37744;
var G__37757 = count__37486_37745;
var G__37758 = (i__37487_37746 + (1));
seq__37483_37743 = G__37755;
chunk__37485_37744 = G__37756;
count__37486_37745 = G__37757;
i__37487_37746 = G__37758;
continue;
} else {
var temp__5720__auto___37761 = cljs.core.seq(seq__37483_37743);
if(temp__5720__auto___37761){
var seq__37483_37762__$1 = temp__5720__auto___37761;
if(cljs.core.chunked_seq_QMARK_(seq__37483_37762__$1)){
var c__5565__auto___37763 = cljs.core.chunk_first(seq__37483_37762__$1);
var G__37764 = cljs.core.chunk_rest(seq__37483_37762__$1);
var G__37765 = c__5565__auto___37763;
var G__37766 = cljs.core.count(c__5565__auto___37763);
var G__37767 = (0);
seq__37483_37743 = G__37764;
chunk__37485_37744 = G__37765;
count__37486_37745 = G__37766;
i__37487_37746 = G__37767;
continue;
} else {
var map__37493_37768 = cljs.core.first(seq__37483_37762__$1);
var map__37493_37769__$1 = cljs.core.__destructure_map(map__37493_37768);
var task_37770 = map__37493_37769__$1;
var fn_str_37771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37493_37769__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37493_37769__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37773 = goog.getObjectByName(fn_str_37771,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37772)].join(''));

(fn_obj_37773.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37773.cljs$core$IFn$_invoke$arity$2(path,new_link_37742) : fn_obj_37773.call(null, path,new_link_37742));


var G__37774 = cljs.core.next(seq__37483_37762__$1);
var G__37775 = null;
var G__37776 = (0);
var G__37777 = (0);
seq__37483_37743 = G__37774;
chunk__37485_37744 = G__37775;
count__37486_37745 = G__37776;
i__37487_37746 = G__37777;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37740);
});})(seq__37438_37736,chunk__37442_37737,count__37443_37738,i__37444_37739,seq__37230,chunk__37232,count__37233,i__37234,new_link_37742,path_match_37741,node_37740,path,map__37229,map__37229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37741], 0));

goog.dom.insertSiblingAfter(new_link_37742,node_37740);


var G__37779 = seq__37438_37736;
var G__37780 = chunk__37442_37737;
var G__37781 = count__37443_37738;
var G__37782 = (i__37444_37739 + (1));
seq__37438_37736 = G__37779;
chunk__37442_37737 = G__37780;
count__37443_37738 = G__37781;
i__37444_37739 = G__37782;
continue;
} else {
var G__37783 = seq__37438_37736;
var G__37784 = chunk__37442_37737;
var G__37785 = count__37443_37738;
var G__37786 = (i__37444_37739 + (1));
seq__37438_37736 = G__37783;
chunk__37442_37737 = G__37784;
count__37443_37738 = G__37785;
i__37444_37739 = G__37786;
continue;
}
} else {
var G__37787 = seq__37438_37736;
var G__37788 = chunk__37442_37737;
var G__37789 = count__37443_37738;
var G__37790 = (i__37444_37739 + (1));
seq__37438_37736 = G__37787;
chunk__37442_37737 = G__37788;
count__37443_37738 = G__37789;
i__37444_37739 = G__37790;
continue;
}
} else {
var temp__5720__auto___37791 = cljs.core.seq(seq__37438_37736);
if(temp__5720__auto___37791){
var seq__37438_37793__$1 = temp__5720__auto___37791;
if(cljs.core.chunked_seq_QMARK_(seq__37438_37793__$1)){
var c__5565__auto___37795 = cljs.core.chunk_first(seq__37438_37793__$1);
var G__37796 = cljs.core.chunk_rest(seq__37438_37793__$1);
var G__37797 = c__5565__auto___37795;
var G__37798 = cljs.core.count(c__5565__auto___37795);
var G__37799 = (0);
seq__37438_37736 = G__37796;
chunk__37442_37737 = G__37797;
count__37443_37738 = G__37798;
i__37444_37739 = G__37799;
continue;
} else {
var node_37800 = cljs.core.first(seq__37438_37793__$1);
if(cljs.core.not(node_37800.shadow$old)){
var path_match_37803 = shadow.cljs.devtools.client.browser.match_paths(node_37800.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37803)){
var new_link_37804 = (function (){var G__37494 = node_37800.cloneNode(true);
G__37494.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37803),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37494;
})();
(node_37800.shadow$old = true);

(new_link_37804.onload = ((function (seq__37438_37736,chunk__37442_37737,count__37443_37738,i__37444_37739,seq__37230,chunk__37232,count__37233,i__37234,new_link_37804,path_match_37803,node_37800,seq__37438_37793__$1,temp__5720__auto___37791,path,map__37229,map__37229__$1,msg,updates,reload_info){
return (function (e){
var seq__37495_37805 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37497_37806 = null;
var count__37498_37807 = (0);
var i__37499_37808 = (0);
while(true){
if((i__37499_37808 < count__37498_37807)){
var map__37504_37809 = chunk__37497_37806.cljs$core$IIndexed$_nth$arity$2(null, i__37499_37808);
var map__37504_37810__$1 = cljs.core.__destructure_map(map__37504_37809);
var task_37811 = map__37504_37810__$1;
var fn_str_37812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37504_37810__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37504_37810__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37814 = goog.getObjectByName(fn_str_37812,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37813)].join(''));

(fn_obj_37814.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37814.cljs$core$IFn$_invoke$arity$2(path,new_link_37804) : fn_obj_37814.call(null, path,new_link_37804));


var G__37815 = seq__37495_37805;
var G__37816 = chunk__37497_37806;
var G__37817 = count__37498_37807;
var G__37818 = (i__37499_37808 + (1));
seq__37495_37805 = G__37815;
chunk__37497_37806 = G__37816;
count__37498_37807 = G__37817;
i__37499_37808 = G__37818;
continue;
} else {
var temp__5720__auto___37819__$1 = cljs.core.seq(seq__37495_37805);
if(temp__5720__auto___37819__$1){
var seq__37495_37820__$1 = temp__5720__auto___37819__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37495_37820__$1)){
var c__5565__auto___37823 = cljs.core.chunk_first(seq__37495_37820__$1);
var G__37824 = cljs.core.chunk_rest(seq__37495_37820__$1);
var G__37825 = c__5565__auto___37823;
var G__37826 = cljs.core.count(c__5565__auto___37823);
var G__37827 = (0);
seq__37495_37805 = G__37824;
chunk__37497_37806 = G__37825;
count__37498_37807 = G__37826;
i__37499_37808 = G__37827;
continue;
} else {
var map__37505_37828 = cljs.core.first(seq__37495_37820__$1);
var map__37505_37829__$1 = cljs.core.__destructure_map(map__37505_37828);
var task_37830 = map__37505_37829__$1;
var fn_str_37831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37505_37829__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37505_37829__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37833 = goog.getObjectByName(fn_str_37831,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37832)].join(''));

(fn_obj_37833.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37833.cljs$core$IFn$_invoke$arity$2(path,new_link_37804) : fn_obj_37833.call(null, path,new_link_37804));


var G__37834 = cljs.core.next(seq__37495_37820__$1);
var G__37835 = null;
var G__37836 = (0);
var G__37837 = (0);
seq__37495_37805 = G__37834;
chunk__37497_37806 = G__37835;
count__37498_37807 = G__37836;
i__37499_37808 = G__37837;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37800);
});})(seq__37438_37736,chunk__37442_37737,count__37443_37738,i__37444_37739,seq__37230,chunk__37232,count__37233,i__37234,new_link_37804,path_match_37803,node_37800,seq__37438_37793__$1,temp__5720__auto___37791,path,map__37229,map__37229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37803], 0));

goog.dom.insertSiblingAfter(new_link_37804,node_37800);


var G__37838 = cljs.core.next(seq__37438_37793__$1);
var G__37839 = null;
var G__37840 = (0);
var G__37841 = (0);
seq__37438_37736 = G__37838;
chunk__37442_37737 = G__37839;
count__37443_37738 = G__37840;
i__37444_37739 = G__37841;
continue;
} else {
var G__37842 = cljs.core.next(seq__37438_37793__$1);
var G__37843 = null;
var G__37844 = (0);
var G__37845 = (0);
seq__37438_37736 = G__37842;
chunk__37442_37737 = G__37843;
count__37443_37738 = G__37844;
i__37444_37739 = G__37845;
continue;
}
} else {
var G__37846 = cljs.core.next(seq__37438_37793__$1);
var G__37847 = null;
var G__37848 = (0);
var G__37849 = (0);
seq__37438_37736 = G__37846;
chunk__37442_37737 = G__37847;
count__37443_37738 = G__37848;
i__37444_37739 = G__37849;
continue;
}
}
} else {
}
}
break;
}


var G__37851 = seq__37230;
var G__37852 = chunk__37232;
var G__37853 = count__37233;
var G__37854 = (i__37234 + (1));
seq__37230 = G__37851;
chunk__37232 = G__37852;
count__37233 = G__37853;
i__37234 = G__37854;
continue;
} else {
var G__37855 = seq__37230;
var G__37856 = chunk__37232;
var G__37857 = count__37233;
var G__37858 = (i__37234 + (1));
seq__37230 = G__37855;
chunk__37232 = G__37856;
count__37233 = G__37857;
i__37234 = G__37858;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37230);
if(temp__5720__auto__){
var seq__37230__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37230__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__37230__$1);
var G__37859 = cljs.core.chunk_rest(seq__37230__$1);
var G__37860 = c__5565__auto__;
var G__37861 = cljs.core.count(c__5565__auto__);
var G__37862 = (0);
seq__37230 = G__37859;
chunk__37232 = G__37860;
count__37233 = G__37861;
i__37234 = G__37862;
continue;
} else {
var path = cljs.core.first(seq__37230__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37509_37863 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37513_37864 = null;
var count__37514_37865 = (0);
var i__37515_37866 = (0);
while(true){
if((i__37515_37866 < count__37514_37865)){
var node_37867 = chunk__37513_37864.cljs$core$IIndexed$_nth$arity$2(null, i__37515_37866);
if(cljs.core.not(node_37867.shadow$old)){
var path_match_37868 = shadow.cljs.devtools.client.browser.match_paths(node_37867.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37868)){
var new_link_37869 = (function (){var G__37543 = node_37867.cloneNode(true);
G__37543.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37868),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37543;
})();
(node_37867.shadow$old = true);

(new_link_37869.onload = ((function (seq__37509_37863,chunk__37513_37864,count__37514_37865,i__37515_37866,seq__37230,chunk__37232,count__37233,i__37234,new_link_37869,path_match_37868,node_37867,path,seq__37230__$1,temp__5720__auto__,map__37229,map__37229__$1,msg,updates,reload_info){
return (function (e){
var seq__37544_37872 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37546_37873 = null;
var count__37547_37874 = (0);
var i__37548_37875 = (0);
while(true){
if((i__37548_37875 < count__37547_37874)){
var map__37552_37876 = chunk__37546_37873.cljs$core$IIndexed$_nth$arity$2(null, i__37548_37875);
var map__37552_37877__$1 = cljs.core.__destructure_map(map__37552_37876);
var task_37878 = map__37552_37877__$1;
var fn_str_37879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37552_37877__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37552_37877__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37883 = goog.getObjectByName(fn_str_37879,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37880)].join(''));

(fn_obj_37883.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37883.cljs$core$IFn$_invoke$arity$2(path,new_link_37869) : fn_obj_37883.call(null, path,new_link_37869));


var G__37884 = seq__37544_37872;
var G__37885 = chunk__37546_37873;
var G__37886 = count__37547_37874;
var G__37887 = (i__37548_37875 + (1));
seq__37544_37872 = G__37884;
chunk__37546_37873 = G__37885;
count__37547_37874 = G__37886;
i__37548_37875 = G__37887;
continue;
} else {
var temp__5720__auto___37888__$1 = cljs.core.seq(seq__37544_37872);
if(temp__5720__auto___37888__$1){
var seq__37544_37889__$1 = temp__5720__auto___37888__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37544_37889__$1)){
var c__5565__auto___37890 = cljs.core.chunk_first(seq__37544_37889__$1);
var G__37891 = cljs.core.chunk_rest(seq__37544_37889__$1);
var G__37892 = c__5565__auto___37890;
var G__37893 = cljs.core.count(c__5565__auto___37890);
var G__37894 = (0);
seq__37544_37872 = G__37891;
chunk__37546_37873 = G__37892;
count__37547_37874 = G__37893;
i__37548_37875 = G__37894;
continue;
} else {
var map__37553_37895 = cljs.core.first(seq__37544_37889__$1);
var map__37553_37896__$1 = cljs.core.__destructure_map(map__37553_37895);
var task_37897 = map__37553_37896__$1;
var fn_str_37898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37553_37896__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37553_37896__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37901 = goog.getObjectByName(fn_str_37898,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37899)].join(''));

(fn_obj_37901.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37901.cljs$core$IFn$_invoke$arity$2(path,new_link_37869) : fn_obj_37901.call(null, path,new_link_37869));


var G__37902 = cljs.core.next(seq__37544_37889__$1);
var G__37903 = null;
var G__37904 = (0);
var G__37905 = (0);
seq__37544_37872 = G__37902;
chunk__37546_37873 = G__37903;
count__37547_37874 = G__37904;
i__37548_37875 = G__37905;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37867);
});})(seq__37509_37863,chunk__37513_37864,count__37514_37865,i__37515_37866,seq__37230,chunk__37232,count__37233,i__37234,new_link_37869,path_match_37868,node_37867,path,seq__37230__$1,temp__5720__auto__,map__37229,map__37229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37868], 0));

goog.dom.insertSiblingAfter(new_link_37869,node_37867);


var G__37908 = seq__37509_37863;
var G__37909 = chunk__37513_37864;
var G__37910 = count__37514_37865;
var G__37911 = (i__37515_37866 + (1));
seq__37509_37863 = G__37908;
chunk__37513_37864 = G__37909;
count__37514_37865 = G__37910;
i__37515_37866 = G__37911;
continue;
} else {
var G__37912 = seq__37509_37863;
var G__37913 = chunk__37513_37864;
var G__37914 = count__37514_37865;
var G__37915 = (i__37515_37866 + (1));
seq__37509_37863 = G__37912;
chunk__37513_37864 = G__37913;
count__37514_37865 = G__37914;
i__37515_37866 = G__37915;
continue;
}
} else {
var G__37916 = seq__37509_37863;
var G__37917 = chunk__37513_37864;
var G__37918 = count__37514_37865;
var G__37919 = (i__37515_37866 + (1));
seq__37509_37863 = G__37916;
chunk__37513_37864 = G__37917;
count__37514_37865 = G__37918;
i__37515_37866 = G__37919;
continue;
}
} else {
var temp__5720__auto___37922__$1 = cljs.core.seq(seq__37509_37863);
if(temp__5720__auto___37922__$1){
var seq__37509_37923__$1 = temp__5720__auto___37922__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37509_37923__$1)){
var c__5565__auto___37924 = cljs.core.chunk_first(seq__37509_37923__$1);
var G__37925 = cljs.core.chunk_rest(seq__37509_37923__$1);
var G__37926 = c__5565__auto___37924;
var G__37927 = cljs.core.count(c__5565__auto___37924);
var G__37928 = (0);
seq__37509_37863 = G__37925;
chunk__37513_37864 = G__37926;
count__37514_37865 = G__37927;
i__37515_37866 = G__37928;
continue;
} else {
var node_37929 = cljs.core.first(seq__37509_37923__$1);
if(cljs.core.not(node_37929.shadow$old)){
var path_match_37930 = shadow.cljs.devtools.client.browser.match_paths(node_37929.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37930)){
var new_link_37931 = (function (){var G__37554 = node_37929.cloneNode(true);
G__37554.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37930),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37554;
})();
(node_37929.shadow$old = true);

(new_link_37931.onload = ((function (seq__37509_37863,chunk__37513_37864,count__37514_37865,i__37515_37866,seq__37230,chunk__37232,count__37233,i__37234,new_link_37931,path_match_37930,node_37929,seq__37509_37923__$1,temp__5720__auto___37922__$1,path,seq__37230__$1,temp__5720__auto__,map__37229,map__37229__$1,msg,updates,reload_info){
return (function (e){
var seq__37555_37933 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37557_37934 = null;
var count__37558_37935 = (0);
var i__37559_37936 = (0);
while(true){
if((i__37559_37936 < count__37558_37935)){
var map__37566_37937 = chunk__37557_37934.cljs$core$IIndexed$_nth$arity$2(null, i__37559_37936);
var map__37566_37938__$1 = cljs.core.__destructure_map(map__37566_37937);
var task_37939 = map__37566_37938__$1;
var fn_str_37940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37566_37938__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37566_37938__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37944 = goog.getObjectByName(fn_str_37940,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37941)].join(''));

(fn_obj_37944.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37944.cljs$core$IFn$_invoke$arity$2(path,new_link_37931) : fn_obj_37944.call(null, path,new_link_37931));


var G__37947 = seq__37555_37933;
var G__37948 = chunk__37557_37934;
var G__37949 = count__37558_37935;
var G__37950 = (i__37559_37936 + (1));
seq__37555_37933 = G__37947;
chunk__37557_37934 = G__37948;
count__37558_37935 = G__37949;
i__37559_37936 = G__37950;
continue;
} else {
var temp__5720__auto___37951__$2 = cljs.core.seq(seq__37555_37933);
if(temp__5720__auto___37951__$2){
var seq__37555_37952__$1 = temp__5720__auto___37951__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37555_37952__$1)){
var c__5565__auto___37953 = cljs.core.chunk_first(seq__37555_37952__$1);
var G__37954 = cljs.core.chunk_rest(seq__37555_37952__$1);
var G__37955 = c__5565__auto___37953;
var G__37956 = cljs.core.count(c__5565__auto___37953);
var G__37957 = (0);
seq__37555_37933 = G__37954;
chunk__37557_37934 = G__37955;
count__37558_37935 = G__37956;
i__37559_37936 = G__37957;
continue;
} else {
var map__37567_37958 = cljs.core.first(seq__37555_37952__$1);
var map__37567_37959__$1 = cljs.core.__destructure_map(map__37567_37958);
var task_37960 = map__37567_37959__$1;
var fn_str_37961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37567_37959__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37567_37959__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37963 = goog.getObjectByName(fn_str_37961,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37962)].join(''));

(fn_obj_37963.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37963.cljs$core$IFn$_invoke$arity$2(path,new_link_37931) : fn_obj_37963.call(null, path,new_link_37931));


var G__37965 = cljs.core.next(seq__37555_37952__$1);
var G__37966 = null;
var G__37967 = (0);
var G__37968 = (0);
seq__37555_37933 = G__37965;
chunk__37557_37934 = G__37966;
count__37558_37935 = G__37967;
i__37559_37936 = G__37968;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37929);
});})(seq__37509_37863,chunk__37513_37864,count__37514_37865,i__37515_37866,seq__37230,chunk__37232,count__37233,i__37234,new_link_37931,path_match_37930,node_37929,seq__37509_37923__$1,temp__5720__auto___37922__$1,path,seq__37230__$1,temp__5720__auto__,map__37229,map__37229__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37930], 0));

goog.dom.insertSiblingAfter(new_link_37931,node_37929);


var G__37969 = cljs.core.next(seq__37509_37923__$1);
var G__37970 = null;
var G__37971 = (0);
var G__37972 = (0);
seq__37509_37863 = G__37969;
chunk__37513_37864 = G__37970;
count__37514_37865 = G__37971;
i__37515_37866 = G__37972;
continue;
} else {
var G__37973 = cljs.core.next(seq__37509_37923__$1);
var G__37974 = null;
var G__37975 = (0);
var G__37976 = (0);
seq__37509_37863 = G__37973;
chunk__37513_37864 = G__37974;
count__37514_37865 = G__37975;
i__37515_37866 = G__37976;
continue;
}
} else {
var G__37978 = cljs.core.next(seq__37509_37923__$1);
var G__37979 = null;
var G__37980 = (0);
var G__37981 = (0);
seq__37509_37863 = G__37978;
chunk__37513_37864 = G__37979;
count__37514_37865 = G__37980;
i__37515_37866 = G__37981;
continue;
}
}
} else {
}
}
break;
}


var G__37983 = cljs.core.next(seq__37230__$1);
var G__37984 = null;
var G__37985 = (0);
var G__37986 = (0);
seq__37230 = G__37983;
chunk__37232 = G__37984;
count__37233 = G__37985;
i__37234 = G__37986;
continue;
} else {
var G__37987 = cljs.core.next(seq__37230__$1);
var G__37988 = null;
var G__37989 = (0);
var G__37990 = (0);
seq__37230 = G__37987;
chunk__37232 = G__37988;
count__37233 = G__37989;
i__37234 = G__37990;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__37582){
var map__37583 = p__37582;
var map__37583__$1 = cljs.core.__destructure_map(map__37583);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37583__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37585,done,error){
var map__37586 = p__37585;
var map__37586__$1 = cljs.core.__destructure_map(map__37586);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37586__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37587,done,error){
var map__37588 = p__37587;
var map__37588__$1 = cljs.core.__destructure_map(map__37588);
var msg = map__37588__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37588__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37588__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37588__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37589){
var map__37590 = p__37589;
var map__37590__$1 = cljs.core.__destructure_map(map__37590);
var src = map__37590__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37590__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37591 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37591) : done.call(null, G__37591));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37592){
var map__37593 = p__37592;
var map__37593__$1 = cljs.core.__destructure_map(map__37593);
var msg__$1 = map__37593__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37593__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e37596){var ex = e37596;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37597){
var map__37598 = p__37597;
var map__37598__$1 = cljs.core.__destructure_map(map__37598);
var env = map__37598__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37598__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37614){
var map__37615 = p__37614;
var map__37615__$1 = cljs.core.__destructure_map(map__37615);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37615__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37615__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37619){
var map__37620 = p__37619;
var map__37620__$1 = cljs.core.__destructure_map(map__37620);
var svc = map__37620__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37620__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
