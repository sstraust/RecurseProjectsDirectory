// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5457__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5457__auto__)){
var req = temp__5457__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__5189){
var vec__5190 = p__5189;
var k = cljs.core.nth.call(null,vec__5190,(0),null);
var v = cljs.core.nth.call(null,vec__5190,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__5193 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__5193)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__5193)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__5193)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__5193)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__5193)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__5193)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5193)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__5194){
var map__5195 = p__5194;
var map__5195__$1 = cljs.core.__destructure_map.call(null,map__5195);
var request = map__5195__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__5195__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__5195__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__5195__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__5196 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__5196,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__5196,response_type);

G__5196.setTimeoutInterval(timeout);

G__5196.setWithCredentials(send_credentials);

return G__5196;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__5197){
var map__5198 = p__5197;
var map__5198__$1 = cljs.core.__destructure_map.call(null,map__5198);
var request = map__5198__$1;
var request_method = cljs.core.get.call(null,map__5198__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__5198__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__5198__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__5198__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__5198__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__5043__auto__ = request_method;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__3238__auto___5221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_5209){
var state_val_5210 = (state_5209[(1)]);
if((state_val_5210 === (1))){
var state_5209__$1 = state_5209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5209__$1,(2),cancel);
} else {
if((state_val_5210 === (2))){
var inst_5200 = (state_5209[(2)]);
var inst_5201 = xhr.isComplete();
var inst_5202 = cljs.core.not.call(null,inst_5201);
var state_5209__$1 = (function (){var statearr_5211 = state_5209;
(statearr_5211[(7)] = inst_5200);

return statearr_5211;
})();
if(inst_5202){
var statearr_5212_5222 = state_5209__$1;
(statearr_5212_5222[(1)] = (3));

} else {
var statearr_5213_5223 = state_5209__$1;
(statearr_5213_5223[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5210 === (3))){
var inst_5204 = xhr.abort();
var state_5209__$1 = state_5209;
var statearr_5214_5224 = state_5209__$1;
(statearr_5214_5224[(2)] = inst_5204);

(statearr_5214_5224[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5210 === (4))){
var state_5209__$1 = state_5209;
var statearr_5215_5225 = state_5209__$1;
(statearr_5215_5225[(2)] = null);

(statearr_5215_5225[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5210 === (5))){
var inst_5207 = (state_5209[(2)]);
var state_5209__$1 = state_5209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5209__$1,inst_5207);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__3165__auto__ = null;
var cljs_http$core$xhr_$_state_machine__3165__auto____0 = (function (){
var statearr_5216 = [null,null,null,null,null,null,null,null];
(statearr_5216[(0)] = cljs_http$core$xhr_$_state_machine__3165__auto__);

(statearr_5216[(1)] = (1));

return statearr_5216;
});
var cljs_http$core$xhr_$_state_machine__3165__auto____1 = (function (state_5209){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_5209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e5217){var ex__3168__auto__ = e5217;
var statearr_5218_5226 = state_5209;
(statearr_5218_5226[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_5209[(4)]))){
var statearr_5219_5227 = state_5209;
(statearr_5219_5227[(1)] = cljs.core.first.call(null,(state_5209[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5228 = state_5209;
state_5209 = G__5228;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__3165__auto__ = function(state_5209){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__3165__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__3165__auto____1.call(this,state_5209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__3165__auto____0;
cljs_http$core$xhr_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__3165__auto____1;
return cljs_http$core$xhr_$_state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_5220 = f__3239__auto__.call(null);
(statearr_5220[(6)] = c__3238__auto___5221);

return statearr_5220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__5229){
var map__5230 = p__5229;
var map__5230__$1 = cljs.core.__destructure_map.call(null,map__5230);
var request = map__5230__$1;
var timeout = cljs.core.get.call(null,map__5230__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__5230__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__5230__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__5230__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_5243 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_5243], null));

if(cljs.core.truth_(cancel)){
var c__3238__auto___5244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_5235){
var state_val_5236 = (state_5235[(1)]);
if((state_val_5236 === (1))){
var state_5235__$1 = state_5235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5235__$1,(2),cancel);
} else {
if((state_val_5236 === (2))){
var inst_5232 = (state_5235[(2)]);
var inst_5233 = jsonp.cancel(req_5243);
var state_5235__$1 = (function (){var statearr_5237 = state_5235;
(statearr_5237[(7)] = inst_5232);

return statearr_5237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5235__$1,inst_5233);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__3165__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__3165__auto____0 = (function (){
var statearr_5238 = [null,null,null,null,null,null,null,null];
(statearr_5238[(0)] = cljs_http$core$jsonp_$_state_machine__3165__auto__);

(statearr_5238[(1)] = (1));

return statearr_5238;
});
var cljs_http$core$jsonp_$_state_machine__3165__auto____1 = (function (state_5235){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_5235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e5239){var ex__3168__auto__ = e5239;
var statearr_5240_5245 = state_5235;
(statearr_5240_5245[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_5235[(4)]))){
var statearr_5241_5246 = state_5235;
(statearr_5241_5246[(1)] = cljs.core.first.call(null,(state_5235[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5247 = state_5235;
state_5235 = G__5247;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__3165__auto__ = function(state_5235){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__3165__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__3165__auto____1.call(this,state_5235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__3165__auto____0;
cljs_http$core$jsonp_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__3165__auto____1;
return cljs_http$core$jsonp_$_state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_5242 = f__3239__auto__.call(null);
(statearr_5242[(6)] = c__3238__auto___5244);

return statearr_5242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__5248){
var map__5249 = p__5248;
var map__5249__$1 = cljs.core.__destructure_map.call(null,map__5249);
var request = map__5249__$1;
var request_method = cljs.core.get.call(null,map__5249__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
