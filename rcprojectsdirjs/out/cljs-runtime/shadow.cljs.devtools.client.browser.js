goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___44889 = arguments.length;
var i__5767__auto___44890 = (0);
while(true){
if((i__5767__auto___44890 < len__5766__auto___44889)){
args__5772__auto__.push((arguments[i__5767__auto___44890]));

var G__44891 = (i__5767__auto___44890 + (1));
i__5767__auto___44890 = G__44891;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq44501){
var G__44502 = cljs.core.first(seq44501);
var seq44501__$1 = cljs.core.next(seq44501);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44502,seq44501__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__44505 = cljs.core.seq(sources);
var chunk__44506 = null;
var count__44507 = (0);
var i__44508 = (0);
while(true){
if((i__44508 < count__44507)){
var map__44520 = chunk__44506.cljs$core$IIndexed$_nth$arity$2(null, i__44508);
var map__44520__$1 = cljs.core.__destructure_map(map__44520);
var src = map__44520__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44520__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44520__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44520__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44520__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44523){var e_44892 = e44523;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44892);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44892.message)].join('')));
}

var G__44893 = seq__44505;
var G__44894 = chunk__44506;
var G__44895 = count__44507;
var G__44896 = (i__44508 + (1));
seq__44505 = G__44893;
chunk__44506 = G__44894;
count__44507 = G__44895;
i__44508 = G__44896;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__44505);
if(temp__5720__auto__){
var seq__44505__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44505__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__44505__$1);
var G__44897 = cljs.core.chunk_rest(seq__44505__$1);
var G__44898 = c__5565__auto__;
var G__44899 = cljs.core.count(c__5565__auto__);
var G__44900 = (0);
seq__44505 = G__44897;
chunk__44506 = G__44898;
count__44507 = G__44899;
i__44508 = G__44900;
continue;
} else {
var map__44524 = cljs.core.first(seq__44505__$1);
var map__44524__$1 = cljs.core.__destructure_map(map__44524);
var src = map__44524__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44524__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44524__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44524__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44524__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e44525){var e_44901 = e44525;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44901);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44901.message)].join('')));
}

var G__44902 = cljs.core.next(seq__44505__$1);
var G__44903 = null;
var G__44904 = (0);
var G__44905 = (0);
seq__44505 = G__44902;
chunk__44506 = G__44903;
count__44507 = G__44904;
i__44508 = G__44905;
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
var seq__44526 = cljs.core.seq(js_requires);
var chunk__44527 = null;
var count__44528 = (0);
var i__44529 = (0);
while(true){
if((i__44529 < count__44528)){
var js_ns = chunk__44527.cljs$core$IIndexed$_nth$arity$2(null, i__44529);
var require_str_44906 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44906);


var G__44907 = seq__44526;
var G__44908 = chunk__44527;
var G__44909 = count__44528;
var G__44910 = (i__44529 + (1));
seq__44526 = G__44907;
chunk__44527 = G__44908;
count__44528 = G__44909;
i__44529 = G__44910;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__44526);
if(temp__5720__auto__){
var seq__44526__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44526__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__44526__$1);
var G__44911 = cljs.core.chunk_rest(seq__44526__$1);
var G__44912 = c__5565__auto__;
var G__44913 = cljs.core.count(c__5565__auto__);
var G__44914 = (0);
seq__44526 = G__44911;
chunk__44527 = G__44912;
count__44528 = G__44913;
i__44529 = G__44914;
continue;
} else {
var js_ns = cljs.core.first(seq__44526__$1);
var require_str_44915 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44915);


var G__44916 = cljs.core.next(seq__44526__$1);
var G__44917 = null;
var G__44918 = (0);
var G__44919 = (0);
seq__44526 = G__44916;
chunk__44527 = G__44917;
count__44528 = G__44918;
i__44529 = G__44919;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__44536){
var map__44537 = p__44536;
var map__44537__$1 = cljs.core.__destructure_map(map__44537);
var msg = map__44537__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44537__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44537__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44538(s__44539){
return (new cljs.core.LazySeq(null,(function (){
var s__44539__$1 = s__44539;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__44539__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__44544 = cljs.core.first(xs__6277__auto__);
var map__44544__$1 = cljs.core.__destructure_map(map__44544);
var src = map__44544__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44544__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44544__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__44539__$1,map__44544,map__44544__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__44537,map__44537__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44538_$_iter__44540(s__44541){
return (new cljs.core.LazySeq(null,((function (s__44539__$1,map__44544,map__44544__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__44537,map__44537__$1,msg,info,reload_info){
return (function (){
var s__44541__$1 = s__44541;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__44541__$1);
if(temp__5720__auto____$1){
var s__44541__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44541__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__44541__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__44543 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__44542 = (0);
while(true){
if((i__44542 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__44542);
cljs.core.chunk_append(b__44543,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__44922 = (i__44542 + (1));
i__44542 = G__44922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44543),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44538_$_iter__44540(cljs.core.chunk_rest(s__44541__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44543),null);
}
} else {
var warning = cljs.core.first(s__44541__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44538_$_iter__44540(cljs.core.rest(s__44541__$2)));
}
} else {
return null;
}
break;
}
});})(s__44539__$1,map__44544,map__44544__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__44537,map__44537__$1,msg,info,reload_info))
,null,null));
});})(s__44539__$1,map__44544,map__44544__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__44537,map__44537__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__44538(cljs.core.rest(s__44539__$1)));
} else {
var G__44923 = cljs.core.rest(s__44539__$1);
s__44539__$1 = G__44923;
continue;
}
} else {
var G__44924 = cljs.core.rest(s__44539__$1);
s__44539__$1 = G__44924;
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
var seq__44545_44925 = cljs.core.seq(warnings);
var chunk__44546_44926 = null;
var count__44547_44927 = (0);
var i__44548_44928 = (0);
while(true){
if((i__44548_44928 < count__44547_44927)){
var map__44551_44929 = chunk__44546_44926.cljs$core$IIndexed$_nth$arity$2(null, i__44548_44928);
var map__44551_44930__$1 = cljs.core.__destructure_map(map__44551_44929);
var w_44931 = map__44551_44930__$1;
var msg_44932__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44551_44930__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44551_44930__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44551_44930__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44551_44930__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44935)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44933),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44934),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44932__$1)].join(''));


var G__44936 = seq__44545_44925;
var G__44937 = chunk__44546_44926;
var G__44938 = count__44547_44927;
var G__44939 = (i__44548_44928 + (1));
seq__44545_44925 = G__44936;
chunk__44546_44926 = G__44937;
count__44547_44927 = G__44938;
i__44548_44928 = G__44939;
continue;
} else {
var temp__5720__auto___44940 = cljs.core.seq(seq__44545_44925);
if(temp__5720__auto___44940){
var seq__44545_44941__$1 = temp__5720__auto___44940;
if(cljs.core.chunked_seq_QMARK_(seq__44545_44941__$1)){
var c__5565__auto___44942 = cljs.core.chunk_first(seq__44545_44941__$1);
var G__44943 = cljs.core.chunk_rest(seq__44545_44941__$1);
var G__44944 = c__5565__auto___44942;
var G__44945 = cljs.core.count(c__5565__auto___44942);
var G__44946 = (0);
seq__44545_44925 = G__44943;
chunk__44546_44926 = G__44944;
count__44547_44927 = G__44945;
i__44548_44928 = G__44946;
continue;
} else {
var map__44552_44947 = cljs.core.first(seq__44545_44941__$1);
var map__44552_44948__$1 = cljs.core.__destructure_map(map__44552_44947);
var w_44949 = map__44552_44948__$1;
var msg_44950__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44552_44948__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44552_44948__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44552_44948__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44552_44948__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44953)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44951),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44952),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44950__$1)].join(''));


var G__44954 = cljs.core.next(seq__44545_44941__$1);
var G__44955 = null;
var G__44956 = (0);
var G__44957 = (0);
seq__44545_44925 = G__44954;
chunk__44546_44926 = G__44955;
count__44547_44927 = G__44956;
i__44548_44928 = G__44957;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__44535_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__44535_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__44564){
var map__44565 = p__44564;
var map__44565__$1 = cljs.core.__destructure_map(map__44565);
var msg = map__44565__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44565__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44565__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__44566 = cljs.core.seq(updates);
var chunk__44568 = null;
var count__44569 = (0);
var i__44570 = (0);
while(true){
if((i__44570 < count__44569)){
var path = chunk__44568.cljs$core$IIndexed$_nth$arity$2(null, i__44570);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44703_44958 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44707_44959 = null;
var count__44708_44960 = (0);
var i__44709_44961 = (0);
while(true){
if((i__44709_44961 < count__44708_44960)){
var node_44962 = chunk__44707_44959.cljs$core$IIndexed$_nth$arity$2(null, i__44709_44961);
if(cljs.core.not(node_44962.shadow$old)){
var path_match_44963 = shadow.cljs.devtools.client.browser.match_paths(node_44962.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44963)){
var new_link_44964 = (function (){var G__44747 = node_44962.cloneNode(true);
G__44747.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44963),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44747;
})();
(node_44962.shadow$old = true);

(new_link_44964.onload = ((function (seq__44703_44958,chunk__44707_44959,count__44708_44960,i__44709_44961,seq__44566,chunk__44568,count__44569,i__44570,new_link_44964,path_match_44963,node_44962,path,map__44565,map__44565__$1,msg,updates,reload_info){
return (function (e){
var seq__44748_44965 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44750_44966 = null;
var count__44751_44967 = (0);
var i__44752_44968 = (0);
while(true){
if((i__44752_44968 < count__44751_44967)){
var map__44759_44969 = chunk__44750_44966.cljs$core$IIndexed$_nth$arity$2(null, i__44752_44968);
var map__44759_44970__$1 = cljs.core.__destructure_map(map__44759_44969);
var task_44971 = map__44759_44970__$1;
var fn_str_44972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44759_44970__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44759_44970__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44974 = goog.getObjectByName(fn_str_44972,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44973)].join(''));

(fn_obj_44974.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44974.cljs$core$IFn$_invoke$arity$2(path,new_link_44964) : fn_obj_44974.call(null, path,new_link_44964));


var G__44975 = seq__44748_44965;
var G__44976 = chunk__44750_44966;
var G__44977 = count__44751_44967;
var G__44978 = (i__44752_44968 + (1));
seq__44748_44965 = G__44975;
chunk__44750_44966 = G__44976;
count__44751_44967 = G__44977;
i__44752_44968 = G__44978;
continue;
} else {
var temp__5720__auto___44979 = cljs.core.seq(seq__44748_44965);
if(temp__5720__auto___44979){
var seq__44748_44980__$1 = temp__5720__auto___44979;
if(cljs.core.chunked_seq_QMARK_(seq__44748_44980__$1)){
var c__5565__auto___44981 = cljs.core.chunk_first(seq__44748_44980__$1);
var G__44982 = cljs.core.chunk_rest(seq__44748_44980__$1);
var G__44983 = c__5565__auto___44981;
var G__44984 = cljs.core.count(c__5565__auto___44981);
var G__44985 = (0);
seq__44748_44965 = G__44982;
chunk__44750_44966 = G__44983;
count__44751_44967 = G__44984;
i__44752_44968 = G__44985;
continue;
} else {
var map__44763_44986 = cljs.core.first(seq__44748_44980__$1);
var map__44763_44987__$1 = cljs.core.__destructure_map(map__44763_44986);
var task_44988 = map__44763_44987__$1;
var fn_str_44989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44763_44987__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44763_44987__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44991 = goog.getObjectByName(fn_str_44989,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44990)].join(''));

(fn_obj_44991.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44991.cljs$core$IFn$_invoke$arity$2(path,new_link_44964) : fn_obj_44991.call(null, path,new_link_44964));


var G__44992 = cljs.core.next(seq__44748_44980__$1);
var G__44993 = null;
var G__44994 = (0);
var G__44995 = (0);
seq__44748_44965 = G__44992;
chunk__44750_44966 = G__44993;
count__44751_44967 = G__44994;
i__44752_44968 = G__44995;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44962);
});})(seq__44703_44958,chunk__44707_44959,count__44708_44960,i__44709_44961,seq__44566,chunk__44568,count__44569,i__44570,new_link_44964,path_match_44963,node_44962,path,map__44565,map__44565__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44963], 0));

goog.dom.insertSiblingAfter(new_link_44964,node_44962);


var G__44996 = seq__44703_44958;
var G__44997 = chunk__44707_44959;
var G__44998 = count__44708_44960;
var G__44999 = (i__44709_44961 + (1));
seq__44703_44958 = G__44996;
chunk__44707_44959 = G__44997;
count__44708_44960 = G__44998;
i__44709_44961 = G__44999;
continue;
} else {
var G__45000 = seq__44703_44958;
var G__45001 = chunk__44707_44959;
var G__45002 = count__44708_44960;
var G__45003 = (i__44709_44961 + (1));
seq__44703_44958 = G__45000;
chunk__44707_44959 = G__45001;
count__44708_44960 = G__45002;
i__44709_44961 = G__45003;
continue;
}
} else {
var G__45004 = seq__44703_44958;
var G__45005 = chunk__44707_44959;
var G__45006 = count__44708_44960;
var G__45007 = (i__44709_44961 + (1));
seq__44703_44958 = G__45004;
chunk__44707_44959 = G__45005;
count__44708_44960 = G__45006;
i__44709_44961 = G__45007;
continue;
}
} else {
var temp__5720__auto___45008 = cljs.core.seq(seq__44703_44958);
if(temp__5720__auto___45008){
var seq__44703_45009__$1 = temp__5720__auto___45008;
if(cljs.core.chunked_seq_QMARK_(seq__44703_45009__$1)){
var c__5565__auto___45010 = cljs.core.chunk_first(seq__44703_45009__$1);
var G__45011 = cljs.core.chunk_rest(seq__44703_45009__$1);
var G__45012 = c__5565__auto___45010;
var G__45013 = cljs.core.count(c__5565__auto___45010);
var G__45014 = (0);
seq__44703_44958 = G__45011;
chunk__44707_44959 = G__45012;
count__44708_44960 = G__45013;
i__44709_44961 = G__45014;
continue;
} else {
var node_45015 = cljs.core.first(seq__44703_45009__$1);
if(cljs.core.not(node_45015.shadow$old)){
var path_match_45016 = shadow.cljs.devtools.client.browser.match_paths(node_45015.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45016)){
var new_link_45017 = (function (){var G__44768 = node_45015.cloneNode(true);
G__44768.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45016),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44768;
})();
(node_45015.shadow$old = true);

(new_link_45017.onload = ((function (seq__44703_44958,chunk__44707_44959,count__44708_44960,i__44709_44961,seq__44566,chunk__44568,count__44569,i__44570,new_link_45017,path_match_45016,node_45015,seq__44703_45009__$1,temp__5720__auto___45008,path,map__44565,map__44565__$1,msg,updates,reload_info){
return (function (e){
var seq__44769_45021 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44771_45022 = null;
var count__44772_45023 = (0);
var i__44773_45024 = (0);
while(true){
if((i__44773_45024 < count__44772_45023)){
var map__44777_45025 = chunk__44771_45022.cljs$core$IIndexed$_nth$arity$2(null, i__44773_45024);
var map__44777_45026__$1 = cljs.core.__destructure_map(map__44777_45025);
var task_45027 = map__44777_45026__$1;
var fn_str_45028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44777_45026__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44777_45026__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45030 = goog.getObjectByName(fn_str_45028,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45029)].join(''));

(fn_obj_45030.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45030.cljs$core$IFn$_invoke$arity$2(path,new_link_45017) : fn_obj_45030.call(null, path,new_link_45017));


var G__45031 = seq__44769_45021;
var G__45032 = chunk__44771_45022;
var G__45033 = count__44772_45023;
var G__45034 = (i__44773_45024 + (1));
seq__44769_45021 = G__45031;
chunk__44771_45022 = G__45032;
count__44772_45023 = G__45033;
i__44773_45024 = G__45034;
continue;
} else {
var temp__5720__auto___45035__$1 = cljs.core.seq(seq__44769_45021);
if(temp__5720__auto___45035__$1){
var seq__44769_45036__$1 = temp__5720__auto___45035__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44769_45036__$1)){
var c__5565__auto___45037 = cljs.core.chunk_first(seq__44769_45036__$1);
var G__45039 = cljs.core.chunk_rest(seq__44769_45036__$1);
var G__45040 = c__5565__auto___45037;
var G__45041 = cljs.core.count(c__5565__auto___45037);
var G__45042 = (0);
seq__44769_45021 = G__45039;
chunk__44771_45022 = G__45040;
count__44772_45023 = G__45041;
i__44773_45024 = G__45042;
continue;
} else {
var map__44778_45043 = cljs.core.first(seq__44769_45036__$1);
var map__44778_45044__$1 = cljs.core.__destructure_map(map__44778_45043);
var task_45045 = map__44778_45044__$1;
var fn_str_45046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44778_45044__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44778_45044__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45048 = goog.getObjectByName(fn_str_45046,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45047)].join(''));

(fn_obj_45048.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45048.cljs$core$IFn$_invoke$arity$2(path,new_link_45017) : fn_obj_45048.call(null, path,new_link_45017));


var G__45049 = cljs.core.next(seq__44769_45036__$1);
var G__45050 = null;
var G__45051 = (0);
var G__45052 = (0);
seq__44769_45021 = G__45049;
chunk__44771_45022 = G__45050;
count__44772_45023 = G__45051;
i__44773_45024 = G__45052;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45015);
});})(seq__44703_44958,chunk__44707_44959,count__44708_44960,i__44709_44961,seq__44566,chunk__44568,count__44569,i__44570,new_link_45017,path_match_45016,node_45015,seq__44703_45009__$1,temp__5720__auto___45008,path,map__44565,map__44565__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45016], 0));

goog.dom.insertSiblingAfter(new_link_45017,node_45015);


var G__45053 = cljs.core.next(seq__44703_45009__$1);
var G__45054 = null;
var G__45055 = (0);
var G__45056 = (0);
seq__44703_44958 = G__45053;
chunk__44707_44959 = G__45054;
count__44708_44960 = G__45055;
i__44709_44961 = G__45056;
continue;
} else {
var G__45057 = cljs.core.next(seq__44703_45009__$1);
var G__45058 = null;
var G__45059 = (0);
var G__45060 = (0);
seq__44703_44958 = G__45057;
chunk__44707_44959 = G__45058;
count__44708_44960 = G__45059;
i__44709_44961 = G__45060;
continue;
}
} else {
var G__45061 = cljs.core.next(seq__44703_45009__$1);
var G__45062 = null;
var G__45063 = (0);
var G__45064 = (0);
seq__44703_44958 = G__45061;
chunk__44707_44959 = G__45062;
count__44708_44960 = G__45063;
i__44709_44961 = G__45064;
continue;
}
}
} else {
}
}
break;
}


var G__45065 = seq__44566;
var G__45066 = chunk__44568;
var G__45067 = count__44569;
var G__45068 = (i__44570 + (1));
seq__44566 = G__45065;
chunk__44568 = G__45066;
count__44569 = G__45067;
i__44570 = G__45068;
continue;
} else {
var G__45069 = seq__44566;
var G__45070 = chunk__44568;
var G__45071 = count__44569;
var G__45072 = (i__44570 + (1));
seq__44566 = G__45069;
chunk__44568 = G__45070;
count__44569 = G__45071;
i__44570 = G__45072;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__44566);
if(temp__5720__auto__){
var seq__44566__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44566__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__44566__$1);
var G__45073 = cljs.core.chunk_rest(seq__44566__$1);
var G__45074 = c__5565__auto__;
var G__45075 = cljs.core.count(c__5565__auto__);
var G__45076 = (0);
seq__44566 = G__45073;
chunk__44568 = G__45074;
count__44569 = G__45075;
i__44570 = G__45076;
continue;
} else {
var path = cljs.core.first(seq__44566__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44780_45077 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44784_45078 = null;
var count__44785_45079 = (0);
var i__44786_45080 = (0);
while(true){
if((i__44786_45080 < count__44785_45079)){
var node_45081 = chunk__44784_45078.cljs$core$IIndexed$_nth$arity$2(null, i__44786_45080);
if(cljs.core.not(node_45081.shadow$old)){
var path_match_45082 = shadow.cljs.devtools.client.browser.match_paths(node_45081.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45082)){
var new_link_45083 = (function (){var G__44825 = node_45081.cloneNode(true);
G__44825.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45082),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44825;
})();
(node_45081.shadow$old = true);

(new_link_45083.onload = ((function (seq__44780_45077,chunk__44784_45078,count__44785_45079,i__44786_45080,seq__44566,chunk__44568,count__44569,i__44570,new_link_45083,path_match_45082,node_45081,path,seq__44566__$1,temp__5720__auto__,map__44565,map__44565__$1,msg,updates,reload_info){
return (function (e){
var seq__44826_45086 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44828_45087 = null;
var count__44829_45088 = (0);
var i__44830_45089 = (0);
while(true){
if((i__44830_45089 < count__44829_45088)){
var map__44834_45090 = chunk__44828_45087.cljs$core$IIndexed$_nth$arity$2(null, i__44830_45089);
var map__44834_45091__$1 = cljs.core.__destructure_map(map__44834_45090);
var task_45092 = map__44834_45091__$1;
var fn_str_45093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44834_45091__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44834_45091__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45095 = goog.getObjectByName(fn_str_45093,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45094)].join(''));

(fn_obj_45095.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45095.cljs$core$IFn$_invoke$arity$2(path,new_link_45083) : fn_obj_45095.call(null, path,new_link_45083));


var G__45096 = seq__44826_45086;
var G__45097 = chunk__44828_45087;
var G__45098 = count__44829_45088;
var G__45099 = (i__44830_45089 + (1));
seq__44826_45086 = G__45096;
chunk__44828_45087 = G__45097;
count__44829_45088 = G__45098;
i__44830_45089 = G__45099;
continue;
} else {
var temp__5720__auto___45100__$1 = cljs.core.seq(seq__44826_45086);
if(temp__5720__auto___45100__$1){
var seq__44826_45101__$1 = temp__5720__auto___45100__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44826_45101__$1)){
var c__5565__auto___45102 = cljs.core.chunk_first(seq__44826_45101__$1);
var G__45103 = cljs.core.chunk_rest(seq__44826_45101__$1);
var G__45104 = c__5565__auto___45102;
var G__45105 = cljs.core.count(c__5565__auto___45102);
var G__45106 = (0);
seq__44826_45086 = G__45103;
chunk__44828_45087 = G__45104;
count__44829_45088 = G__45105;
i__44830_45089 = G__45106;
continue;
} else {
var map__44836_45107 = cljs.core.first(seq__44826_45101__$1);
var map__44836_45108__$1 = cljs.core.__destructure_map(map__44836_45107);
var task_45109 = map__44836_45108__$1;
var fn_str_45110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44836_45108__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44836_45108__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45112 = goog.getObjectByName(fn_str_45110,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45111)].join(''));

(fn_obj_45112.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45112.cljs$core$IFn$_invoke$arity$2(path,new_link_45083) : fn_obj_45112.call(null, path,new_link_45083));


var G__45113 = cljs.core.next(seq__44826_45101__$1);
var G__45114 = null;
var G__45115 = (0);
var G__45116 = (0);
seq__44826_45086 = G__45113;
chunk__44828_45087 = G__45114;
count__44829_45088 = G__45115;
i__44830_45089 = G__45116;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45081);
});})(seq__44780_45077,chunk__44784_45078,count__44785_45079,i__44786_45080,seq__44566,chunk__44568,count__44569,i__44570,new_link_45083,path_match_45082,node_45081,path,seq__44566__$1,temp__5720__auto__,map__44565,map__44565__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45082], 0));

goog.dom.insertSiblingAfter(new_link_45083,node_45081);


var G__45117 = seq__44780_45077;
var G__45118 = chunk__44784_45078;
var G__45119 = count__44785_45079;
var G__45120 = (i__44786_45080 + (1));
seq__44780_45077 = G__45117;
chunk__44784_45078 = G__45118;
count__44785_45079 = G__45119;
i__44786_45080 = G__45120;
continue;
} else {
var G__45121 = seq__44780_45077;
var G__45122 = chunk__44784_45078;
var G__45123 = count__44785_45079;
var G__45124 = (i__44786_45080 + (1));
seq__44780_45077 = G__45121;
chunk__44784_45078 = G__45122;
count__44785_45079 = G__45123;
i__44786_45080 = G__45124;
continue;
}
} else {
var G__45125 = seq__44780_45077;
var G__45126 = chunk__44784_45078;
var G__45127 = count__44785_45079;
var G__45128 = (i__44786_45080 + (1));
seq__44780_45077 = G__45125;
chunk__44784_45078 = G__45126;
count__44785_45079 = G__45127;
i__44786_45080 = G__45128;
continue;
}
} else {
var temp__5720__auto___45129__$1 = cljs.core.seq(seq__44780_45077);
if(temp__5720__auto___45129__$1){
var seq__44780_45130__$1 = temp__5720__auto___45129__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44780_45130__$1)){
var c__5565__auto___45131 = cljs.core.chunk_first(seq__44780_45130__$1);
var G__45132 = cljs.core.chunk_rest(seq__44780_45130__$1);
var G__45133 = c__5565__auto___45131;
var G__45134 = cljs.core.count(c__5565__auto___45131);
var G__45135 = (0);
seq__44780_45077 = G__45132;
chunk__44784_45078 = G__45133;
count__44785_45079 = G__45134;
i__44786_45080 = G__45135;
continue;
} else {
var node_45136 = cljs.core.first(seq__44780_45130__$1);
if(cljs.core.not(node_45136.shadow$old)){
var path_match_45137 = shadow.cljs.devtools.client.browser.match_paths(node_45136.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45137)){
var new_link_45138 = (function (){var G__44841 = node_45136.cloneNode(true);
G__44841.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45137),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44841;
})();
(node_45136.shadow$old = true);

(new_link_45138.onload = ((function (seq__44780_45077,chunk__44784_45078,count__44785_45079,i__44786_45080,seq__44566,chunk__44568,count__44569,i__44570,new_link_45138,path_match_45137,node_45136,seq__44780_45130__$1,temp__5720__auto___45129__$1,path,seq__44566__$1,temp__5720__auto__,map__44565,map__44565__$1,msg,updates,reload_info){
return (function (e){
var seq__44843_45139 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44845_45140 = null;
var count__44846_45141 = (0);
var i__44847_45142 = (0);
while(true){
if((i__44847_45142 < count__44846_45141)){
var map__44852_45143 = chunk__44845_45140.cljs$core$IIndexed$_nth$arity$2(null, i__44847_45142);
var map__44852_45144__$1 = cljs.core.__destructure_map(map__44852_45143);
var task_45145 = map__44852_45144__$1;
var fn_str_45146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44852_45144__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44852_45144__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45148 = goog.getObjectByName(fn_str_45146,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45147)].join(''));

(fn_obj_45148.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45148.cljs$core$IFn$_invoke$arity$2(path,new_link_45138) : fn_obj_45148.call(null, path,new_link_45138));


var G__45149 = seq__44843_45139;
var G__45150 = chunk__44845_45140;
var G__45151 = count__44846_45141;
var G__45152 = (i__44847_45142 + (1));
seq__44843_45139 = G__45149;
chunk__44845_45140 = G__45150;
count__44846_45141 = G__45151;
i__44847_45142 = G__45152;
continue;
} else {
var temp__5720__auto___45153__$2 = cljs.core.seq(seq__44843_45139);
if(temp__5720__auto___45153__$2){
var seq__44843_45154__$1 = temp__5720__auto___45153__$2;
if(cljs.core.chunked_seq_QMARK_(seq__44843_45154__$1)){
var c__5565__auto___45155 = cljs.core.chunk_first(seq__44843_45154__$1);
var G__45156 = cljs.core.chunk_rest(seq__44843_45154__$1);
var G__45157 = c__5565__auto___45155;
var G__45158 = cljs.core.count(c__5565__auto___45155);
var G__45159 = (0);
seq__44843_45139 = G__45156;
chunk__44845_45140 = G__45157;
count__44846_45141 = G__45158;
i__44847_45142 = G__45159;
continue;
} else {
var map__44855_45160 = cljs.core.first(seq__44843_45154__$1);
var map__44855_45161__$1 = cljs.core.__destructure_map(map__44855_45160);
var task_45162 = map__44855_45161__$1;
var fn_str_45163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44855_45161__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44855_45161__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45165 = goog.getObjectByName(fn_str_45163,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45164)].join(''));

(fn_obj_45165.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45165.cljs$core$IFn$_invoke$arity$2(path,new_link_45138) : fn_obj_45165.call(null, path,new_link_45138));


var G__45166 = cljs.core.next(seq__44843_45154__$1);
var G__45167 = null;
var G__45168 = (0);
var G__45169 = (0);
seq__44843_45139 = G__45166;
chunk__44845_45140 = G__45167;
count__44846_45141 = G__45168;
i__44847_45142 = G__45169;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45136);
});})(seq__44780_45077,chunk__44784_45078,count__44785_45079,i__44786_45080,seq__44566,chunk__44568,count__44569,i__44570,new_link_45138,path_match_45137,node_45136,seq__44780_45130__$1,temp__5720__auto___45129__$1,path,seq__44566__$1,temp__5720__auto__,map__44565,map__44565__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45137], 0));

goog.dom.insertSiblingAfter(new_link_45138,node_45136);


var G__45170 = cljs.core.next(seq__44780_45130__$1);
var G__45171 = null;
var G__45172 = (0);
var G__45173 = (0);
seq__44780_45077 = G__45170;
chunk__44784_45078 = G__45171;
count__44785_45079 = G__45172;
i__44786_45080 = G__45173;
continue;
} else {
var G__45174 = cljs.core.next(seq__44780_45130__$1);
var G__45175 = null;
var G__45176 = (0);
var G__45177 = (0);
seq__44780_45077 = G__45174;
chunk__44784_45078 = G__45175;
count__44785_45079 = G__45176;
i__44786_45080 = G__45177;
continue;
}
} else {
var G__45178 = cljs.core.next(seq__44780_45130__$1);
var G__45179 = null;
var G__45180 = (0);
var G__45181 = (0);
seq__44780_45077 = G__45178;
chunk__44784_45078 = G__45179;
count__44785_45079 = G__45180;
i__44786_45080 = G__45181;
continue;
}
}
} else {
}
}
break;
}


var G__45182 = cljs.core.next(seq__44566__$1);
var G__45183 = null;
var G__45184 = (0);
var G__45185 = (0);
seq__44566 = G__45182;
chunk__44568 = G__45183;
count__44569 = G__45184;
i__44570 = G__45185;
continue;
} else {
var G__45186 = cljs.core.next(seq__44566__$1);
var G__45187 = null;
var G__45188 = (0);
var G__45189 = (0);
seq__44566 = G__45186;
chunk__44568 = G__45187;
count__44569 = G__45188;
i__44570 = G__45189;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__44865){
var map__44866 = p__44865;
var map__44866__$1 = cljs.core.__destructure_map(map__44866);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44866__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44867,done,error){
var map__44868 = p__44867;
var map__44868__$1 = cljs.core.__destructure_map(map__44868);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44868__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44869,done,error){
var map__44870 = p__44869;
var map__44870__$1 = cljs.core.__destructure_map(map__44870);
var msg = map__44870__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44870__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44870__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44870__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44871){
var map__44872 = p__44871;
var map__44872__$1 = cljs.core.__destructure_map(map__44872);
var src = map__44872__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44872__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44873 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44873) : done.call(null, G__44873));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44874){
var map__44875 = p__44874;
var map__44875__$1 = cljs.core.__destructure_map(map__44875);
var msg__$1 = map__44875__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44875__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e44876){var ex = e44876;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44877){
var map__44878 = p__44877;
var map__44878__$1 = cljs.core.__destructure_map(map__44878);
var env = map__44878__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44878__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__44881){
var map__44882 = p__44881;
var map__44882__$1 = cljs.core.__destructure_map(map__44882);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44882__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44882__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__44883){
var map__44884 = p__44883;
var map__44884__$1 = cljs.core.__destructure_map(map__44884);
var svc = map__44884__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
