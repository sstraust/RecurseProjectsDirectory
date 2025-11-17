goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = (function (){var fexpr__38269 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__38269.cljs$core$IFn$_invoke$arity$1 ? fexpr__38269.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__38269.call(null, channel));
})();
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38270){
var vec__38271 = p__38270;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38271,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38271,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__38274 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__38274)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__38274)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__38274)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__38274)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__38274)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38274)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38274)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__38277){
var map__38278 = p__38277;
var map__38278__$1 = cljs.core.__destructure_map(map__38278);
var request = map__38278__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38278__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38278__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38278__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__38279 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__38279,default_headers);

cljs_http.core.apply_response_type_BANG_(G__38279,response_type);

G__38279.setTimeoutInterval(timeout);

G__38279.setWithCredentials(send_credentials);

return G__38279;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__38283){
var map__38284 = p__38283;
var map__38284__$1 = cljs.core.__destructure_map(map__38284);
var request = map__38284__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38284__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38284__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38284__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38284__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38284__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5043__auto__ = request_method;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__38286 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__38286) : cljs_http.core.error_kw.call(null, G__38286));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__30817__auto___38341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_38299){
var state_val_38300 = (state_38299[(1)]);
if((state_val_38300 === (1))){
var state_38299__$1 = state_38299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38299__$1,(2),cancel);
} else {
if((state_val_38300 === (2))){
var inst_38290 = (state_38299[(2)]);
var inst_38291 = xhr.isComplete();
var inst_38292 = cljs.core.not(inst_38291);
var state_38299__$1 = (function (){var statearr_38301 = state_38299;
(statearr_38301[(7)] = inst_38290);

return statearr_38301;
})();
if(inst_38292){
var statearr_38302_38344 = state_38299__$1;
(statearr_38302_38344[(1)] = (3));

} else {
var statearr_38303_38345 = state_38299__$1;
(statearr_38303_38345[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38300 === (3))){
var inst_38294 = xhr.abort();
var state_38299__$1 = state_38299;
var statearr_38304_38346 = state_38299__$1;
(statearr_38304_38346[(2)] = inst_38294);

(statearr_38304_38346[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38300 === (4))){
var state_38299__$1 = state_38299;
var statearr_38305_38347 = state_38299__$1;
(statearr_38305_38347[(2)] = null);

(statearr_38305_38347[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38300 === (5))){
var inst_38297 = (state_38299[(2)]);
var state_38299__$1 = state_38299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38299__$1,inst_38297);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__30312__auto__ = null;
var cljs_http$core$xhr_$_state_machine__30312__auto____0 = (function (){
var statearr_38306 = [null,null,null,null,null,null,null,null];
(statearr_38306[(0)] = cljs_http$core$xhr_$_state_machine__30312__auto__);

(statearr_38306[(1)] = (1));

return statearr_38306;
});
var cljs_http$core$xhr_$_state_machine__30312__auto____1 = (function (state_38299){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_38299);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e38307){var ex__30315__auto__ = e38307;
var statearr_38308_38353 = state_38299;
(statearr_38308_38353[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_38299[(4)]))){
var statearr_38309_38354 = state_38299;
(statearr_38309_38354[(1)] = cljs.core.first((state_38299[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38355 = state_38299;
state_38299 = G__38355;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__30312__auto__ = function(state_38299){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__30312__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__30312__auto____1.call(this,state_38299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__30312__auto____0;
cljs_http$core$xhr_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__30312__auto____1;
return cljs_http$core$xhr_$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_38310 = f__30818__auto__();
(statearr_38310[(6)] = c__30817__auto___38341);

return statearr_38310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__38312){
var map__38315 = p__38312;
var map__38315__$1 = cljs.core.__destructure_map(map__38315);
var request = map__38315__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38315__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38315__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38315__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38315__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_38356 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_38356], null));

if(cljs.core.truth_(cancel)){
var c__30817__auto___38357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_38323){
var state_val_38324 = (state_38323[(1)]);
if((state_val_38324 === (1))){
var state_38323__$1 = state_38323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38323__$1,(2),cancel);
} else {
if((state_val_38324 === (2))){
var inst_38320 = (state_38323[(2)]);
var inst_38321 = jsonp.cancel(req_38356);
var state_38323__$1 = (function (){var statearr_38328 = state_38323;
(statearr_38328[(7)] = inst_38320);

return statearr_38328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38323__$1,inst_38321);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__30312__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__30312__auto____0 = (function (){
var statearr_38329 = [null,null,null,null,null,null,null,null];
(statearr_38329[(0)] = cljs_http$core$jsonp_$_state_machine__30312__auto__);

(statearr_38329[(1)] = (1));

return statearr_38329;
});
var cljs_http$core$jsonp_$_state_machine__30312__auto____1 = (function (state_38323){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_38323);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e38330){var ex__30315__auto__ = e38330;
var statearr_38331_38359 = state_38323;
(statearr_38331_38359[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_38323[(4)]))){
var statearr_38332_38360 = state_38323;
(statearr_38332_38360[(1)] = cljs.core.first((state_38323[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38361 = state_38323;
state_38323 = G__38361;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__30312__auto__ = function(state_38323){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__30312__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__30312__auto____1.call(this,state_38323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__30312__auto____0;
cljs_http$core$jsonp_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__30312__auto____1;
return cljs_http$core$jsonp_$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_38333 = f__30818__auto__();
(statearr_38333[(6)] = c__30817__auto___38357);

return statearr_38333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__38334){
var map__38335 = p__38334;
var map__38335__$1 = cljs.core.__destructure_map(map__38335);
var request = map__38335__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38335__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
