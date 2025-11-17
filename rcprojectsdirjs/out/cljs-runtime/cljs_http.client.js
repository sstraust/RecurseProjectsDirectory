goog.provide('cljs_http.client');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__5041__auto__ = v;
if(cljs.core.truth_(and__5041__auto__)){
return (v > (0));
} else {
return and__5041__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if((!(clojure.string.blank_QMARK_(s)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38343_SHARP_,p2__38342_SHARP_){
var vec__38350 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__38342_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38350,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38343_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if((!(clojure.string.blank_QMARK_(url)))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params(cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [no.en.core.url_encode(cljs.core.name(k)),"=",no.en.core.url_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38358_SHARP_){
return cljs_http.client.encode_val(k,p1__38358_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__38364){
var vec__38365 = p__38364;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38365,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38365,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38368_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38368_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__5041__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type","")));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__38373 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38373) : client.call(null, G__38373));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__38377_SHARP_){
return cljs_http.client.decode_body(p1__38377_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38549 = arguments.length;
var i__5767__auto___38550 = (0);
while(true){
if((i__5767__auto___38550 < len__5766__auto___38549)){
args__5772__auto__.push((arguments[i__5767__auto___38550]));

var G__38551 = (i__5767__auto___38550 + (1));
i__5767__auto___38550 = G__38551;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38381){
var vec__38382 = p__38381;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38382,(0),null);
return (function (request){
var temp__5718__auto__ = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var default_headers__$1 = temp__5718__auto__;
var G__38385 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38385) : client.call(null, G__38385));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
}));

(cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq38378){
var G__38379 = cljs.core.first(seq38378);
var seq38378__$1 = cljs.core.next(seq38378);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38379,seq38378__$1);
}));

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38554 = arguments.length;
var i__5767__auto___38555 = (0);
while(true){
if((i__5767__auto___38555 < len__5766__auto___38554)){
args__5772__auto__.push((arguments[i__5767__auto___38555]));

var G__38556 = (i__5767__auto___38555 + (1));
i__5767__auto___38555 = G__38556;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38389){
var vec__38390 = p__38389;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38390,(0),null);
return (function (request){
var temp__5718__auto__ = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var accept__$1 = temp__5718__auto__;
var G__38393 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38393) : client.call(null, G__38393));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
}));

(cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq38386){
var G__38387 = cljs.core.first(seq38386);
var seq38386__$1 = cljs.core.next(seq38386);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38387,seq38386__$1);
}));

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38557 = arguments.length;
var i__5767__auto___38558 = (0);
while(true){
if((i__5767__auto___38558 < len__5766__auto___38557)){
args__5772__auto__.push((arguments[i__5767__auto___38558]));

var G__38559 = (i__5767__auto___38558 + (1));
i__5767__auto___38558 = G__38559;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38396){
var vec__38397 = p__38396;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38397,(0),null);
return (function (request){
var temp__5718__auto__ = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var content_type__$1 = temp__5718__auto__;
var G__38400 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38400) : client.call(null, G__38400));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
}));

(cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq38394){
var G__38395 = cljs.core.first(seq38394);
var seq38394__$1 = cljs.core.next(seq38394);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38395,seq38394__$1);
}));

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
var map__38401 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__38401__$1 = cljs.core.__destructure_map(map__38401);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38401__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38401__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__38402 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38402) : client.call(null, G__38402));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__38405 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__38405__$1 = cljs.core.__destructure_map(map__38405);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38405__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38405__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = (function (p1__38403_SHARP_){
return cljs_http.util.transit_decode(p1__38403_SHARP_,decoding,decoding_opts);
});
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__38404_SHARP_){
return cljs_http.client.decode_body(p1__38404_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var params = temp__5718__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__38406 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode(params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38406) : client.call(null, G__38406));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__38407_SHARP_){
return cljs_http.client.decode_body(p1__38407_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__38408){
var map__38409 = p__38408;
var map__38409__$1 = cljs.core.__destructure_map(map__38409);
var req = map__38409__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38409__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
var G__38410 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38410) : client.call(null, G__38410));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null, req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__38411){
var map__38412 = p__38411;
var map__38412__$1 = cljs.core.__destructure_map(map__38412);
var request = map__38412__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38412__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38412__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38412__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__5041__auto__ = form_params;
if(cljs.core.truth_(and__5041__auto__)){
var fexpr__38415 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null);
return (fexpr__38415.cljs$core$IFn$_invoke$arity$1 ? fexpr__38415.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__38415.call(null, request_method));
} else {
return and__5041__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__38416 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string(form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38416) : client.call(null, G__38416));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__38421_38560 = cljs.core.seq(params);
var chunk__38422_38561 = null;
var count__38423_38562 = (0);
var i__38424_38563 = (0);
while(true){
if((i__38424_38563 < count__38423_38562)){
var vec__38435_38564 = chunk__38422_38561.cljs$core$IIndexed$_nth$arity$2(null, i__38424_38563);
var k_38565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38435_38564,(0),null);
var v_38566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38435_38564,(1),null);
if(cljs.core.coll_QMARK_(v_38566)){
form_data.append(cljs.core.name(k_38565),cljs.core.first(v_38566),cljs.core.second(v_38566));
} else {
form_data.append(cljs.core.name(k_38565),v_38566);
}


var G__38567 = seq__38421_38560;
var G__38568 = chunk__38422_38561;
var G__38569 = count__38423_38562;
var G__38570 = (i__38424_38563 + (1));
seq__38421_38560 = G__38567;
chunk__38422_38561 = G__38568;
count__38423_38562 = G__38569;
i__38424_38563 = G__38570;
continue;
} else {
var temp__5720__auto___38571 = cljs.core.seq(seq__38421_38560);
if(temp__5720__auto___38571){
var seq__38421_38572__$1 = temp__5720__auto___38571;
if(cljs.core.chunked_seq_QMARK_(seq__38421_38572__$1)){
var c__5565__auto___38573 = cljs.core.chunk_first(seq__38421_38572__$1);
var G__38574 = cljs.core.chunk_rest(seq__38421_38572__$1);
var G__38575 = c__5565__auto___38573;
var G__38576 = cljs.core.count(c__5565__auto___38573);
var G__38577 = (0);
seq__38421_38560 = G__38574;
chunk__38422_38561 = G__38575;
count__38423_38562 = G__38576;
i__38424_38563 = G__38577;
continue;
} else {
var vec__38438_38578 = cljs.core.first(seq__38421_38572__$1);
var k_38579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38438_38578,(0),null);
var v_38580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38438_38578,(1),null);
if(cljs.core.coll_QMARK_(v_38580)){
form_data.append(cljs.core.name(k_38579),cljs.core.first(v_38580),cljs.core.second(v_38580));
} else {
form_data.append(cljs.core.name(k_38579),v_38580);
}


var G__38581 = cljs.core.next(seq__38421_38572__$1);
var G__38582 = null;
var G__38583 = (0);
var G__38584 = (0);
seq__38421_38560 = G__38581;
chunk__38422_38561 = G__38582;
count__38423_38562 = G__38583;
i__38424_38563 = G__38584;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__38441){
var map__38443 = p__38441;
var map__38443__$1 = cljs.core.__destructure_map(map__38443);
var request = map__38443__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38443__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38443__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__5041__auto__ = multipart_params;
if(cljs.core.truth_(and__5041__auto__)){
var fexpr__38444 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null);
return (fexpr__38444.cljs$core$IFn$_invoke$arity$1 ? fexpr__38444.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__38444.call(null, request_method));
} else {
return and__5041__auto__;
}
})())){
var G__38445 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38445) : client.call(null, G__38445));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5718__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
var G__38447 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38447) : client.call(null, G__38447));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null, req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__38449_SHARP_){
var G__38450 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38449_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38450) : client.call(null, G__38450));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__38456){
var map__38457 = p__38456;
var map__38457__$1 = cljs.core.__destructure_map(map__38457);
var req = map__38457__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38457__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5718__auto__ = cljs_http.client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5718__auto__)){
var spec = temp__5718__auto__;
var G__38459 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),(function (p1__38455_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__38455_SHARP_,query_params], 0));
}));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38459) : client.call(null, G__38459));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null, req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38585 = arguments.length;
var i__5767__auto___38586 = (0);
while(true){
if((i__5767__auto___38586 < len__5766__auto___38585)){
args__5772__auto__.push((arguments[i__5767__auto___38586]));

var G__38587 = (i__5767__auto___38586 + (1));
i__5767__auto___38586 = G__38587;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38462){
var vec__38463 = p__38462;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38463,(0),null);
return (function (req){
var credentials__$1 = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return credentials;
}
})();
if((!(cljs.core.empty_QMARK_(credentials__$1)))){
var G__38466 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38466) : client.call(null, G__38466));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null, req));
}
});
}));

(cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq38460){
var G__38461 = cljs.core.first(seq38460);
var seq38460__$1 = cljs.core.next(seq38460);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38461,seq38460__$1);
}));

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5718__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5718__auto__)){
var oauth_token = temp__5718__auto__;
var G__38473 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__38473) : client.call(null, G__38473));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null, req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5718__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5718__auto__)){
var custom_channel = temp__5718__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null, request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38588 = arguments.length;
var i__5767__auto___38589 = (0);
while(true){
if((i__5767__auto___38589 < len__5766__auto___38588)){
args__5772__auto__.push((arguments[i__5767__auto___38589]));

var G__38590 = (i__5767__auto___38589 + (1));
i__5767__auto___38589 = G__38590;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38476){
var vec__38477 = p__38476;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38477,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.delete$.cljs$lang$applyTo = (function (seq38474){
var G__38475 = cljs.core.first(seq38474);
var seq38474__$1 = cljs.core.next(seq38474);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38475,seq38474__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38591 = arguments.length;
var i__5767__auto___38592 = (0);
while(true){
if((i__5767__auto___38592 < len__5766__auto___38591)){
args__5772__auto__.push((arguments[i__5767__auto___38592]));

var G__38593 = (i__5767__auto___38592 + (1));
i__5767__auto___38592 = G__38593;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38482){
var vec__38483 = p__38482;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38483,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.get.cljs$lang$applyTo = (function (seq38480){
var G__38481 = cljs.core.first(seq38480);
var seq38480__$1 = cljs.core.next(seq38480);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38481,seq38480__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38594 = arguments.length;
var i__5767__auto___38595 = (0);
while(true){
if((i__5767__auto___38595 < len__5766__auto___38594)){
args__5772__auto__.push((arguments[i__5767__auto___38595]));

var G__38596 = (i__5767__auto___38595 + (1));
i__5767__auto___38595 = G__38596;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38488){
var vec__38489 = p__38488;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38489,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.head.cljs$lang$applyTo = (function (seq38486){
var G__38487 = cljs.core.first(seq38486);
var seq38486__$1 = cljs.core.next(seq38486);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38487,seq38486__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38598 = arguments.length;
var i__5767__auto___38599 = (0);
while(true){
if((i__5767__auto___38599 < len__5766__auto___38598)){
args__5772__auto__.push((arguments[i__5767__auto___38599]));

var G__38600 = (i__5767__auto___38599 + (1));
i__5767__auto___38599 = G__38600;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38494){
var vec__38495 = p__38494;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38495,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq38492){
var G__38493 = cljs.core.first(seq38492);
var seq38492__$1 = cljs.core.next(seq38492);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38493,seq38492__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38601 = arguments.length;
var i__5767__auto___38602 = (0);
while(true){
if((i__5767__auto___38602 < len__5766__auto___38601)){
args__5772__auto__.push((arguments[i__5767__auto___38602]));

var G__38603 = (i__5767__auto___38602 + (1));
i__5767__auto___38602 = G__38603;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38500){
var vec__38501 = p__38500;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38501,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.move.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.move.cljs$lang$applyTo = (function (seq38498){
var G__38499 = cljs.core.first(seq38498);
var seq38498__$1 = cljs.core.next(seq38498);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38499,seq38498__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38607 = arguments.length;
var i__5767__auto___38608 = (0);
while(true){
if((i__5767__auto___38608 < len__5766__auto___38607)){
args__5772__auto__.push((arguments[i__5767__auto___38608]));

var G__38609 = (i__5767__auto___38608 + (1));
i__5767__auto___38608 = G__38609;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38508){
var vec__38509 = p__38508;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38509,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.options.cljs$lang$applyTo = (function (seq38504){
var G__38505 = cljs.core.first(seq38504);
var seq38504__$1 = cljs.core.next(seq38504);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38505,seq38504__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38610 = arguments.length;
var i__5767__auto___38611 = (0);
while(true){
if((i__5767__auto___38611 < len__5766__auto___38610)){
args__5772__auto__.push((arguments[i__5767__auto___38611]));

var G__38612 = (i__5767__auto___38611 + (1));
i__5767__auto___38611 = G__38612;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38516){
var vec__38517 = p__38516;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38517,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.patch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.patch.cljs$lang$applyTo = (function (seq38513){
var G__38514 = cljs.core.first(seq38513);
var seq38513__$1 = cljs.core.next(seq38513);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38514,seq38513__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38613 = arguments.length;
var i__5767__auto___38614 = (0);
while(true){
if((i__5767__auto___38614 < len__5766__auto___38613)){
args__5772__auto__.push((arguments[i__5767__auto___38614]));

var G__38615 = (i__5767__auto___38614 + (1));
i__5767__auto___38614 = G__38615;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38526){
var vec__38527 = p__38526;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38527,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.post.cljs$lang$applyTo = (function (seq38520){
var G__38521 = cljs.core.first(seq38520);
var seq38520__$1 = cljs.core.next(seq38520);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38521,seq38520__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__5772__auto__ = [];
var len__5766__auto___38616 = arguments.length;
var i__5767__auto___38617 = (0);
while(true){
if((i__5767__auto___38617 < len__5766__auto___38616)){
args__5772__auto__.push((arguments[i__5767__auto___38617]));

var G__38618 = (i__5767__auto___38617 + (1));
i__5767__auto___38617 = G__38618;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38536){
var vec__38537 = p__38536;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38537,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.put.cljs$lang$applyTo = (function (seq38534){
var G__38535 = cljs.core.first(seq38534);
var seq38534__$1 = cljs.core.next(seq38534);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38535,seq38534__$1);
}));


//# sourceMappingURL=cljs_http.client.js.map
