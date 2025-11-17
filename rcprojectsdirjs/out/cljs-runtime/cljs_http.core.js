goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = (function (){var fexpr__46122 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__46122.cljs$core$IFn$_invoke$arity$1 ? fexpr__46122.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__46122.call(null, channel));
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
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46131){
var vec__46132 = p__46131;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46132,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__46138 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__46138)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__46138)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__46138)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__46138)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__46138)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__46138)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46138)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__46155){
var map__46156 = p__46155;
var map__46156__$1 = cljs.core.__destructure_map(map__46156);
var request = map__46156__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46156__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46156__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46156__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__46162 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__46162,default_headers);

cljs_http.core.apply_response_type_BANG_(G__46162,response_type);

G__46162.setTimeoutInterval(timeout);

G__46162.setWithCredentials(send_credentials);

return G__46162;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__46174){
var map__46175 = p__46174;
var map__46175__$1 = cljs.core.__destructure_map(map__46175);
var request = map__46175__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46175__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46175__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46175__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46175__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46175__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
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
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__46182 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__46182) : cljs_http.core.error_kw.call(null, G__46182));
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
var c__37390__auto___46237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_46193){
var state_val_46194 = (state_46193[(1)]);
if((state_val_46194 === (1))){
var state_46193__$1 = state_46193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46193__$1,(2),cancel);
} else {
if((state_val_46194 === (2))){
var inst_46184 = (state_46193[(2)]);
var inst_46185 = xhr.isComplete();
var inst_46186 = cljs.core.not(inst_46185);
var state_46193__$1 = (function (){var statearr_46195 = state_46193;
(statearr_46195[(7)] = inst_46184);

return statearr_46195;
})();
if(inst_46186){
var statearr_46196_46238 = state_46193__$1;
(statearr_46196_46238[(1)] = (3));

} else {
var statearr_46197_46239 = state_46193__$1;
(statearr_46197_46239[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (3))){
var inst_46188 = xhr.abort();
var state_46193__$1 = state_46193;
var statearr_46198_46240 = state_46193__$1;
(statearr_46198_46240[(2)] = inst_46188);

(statearr_46198_46240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (4))){
var state_46193__$1 = state_46193;
var statearr_46199_46241 = state_46193__$1;
(statearr_46199_46241[(2)] = null);

(statearr_46199_46241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46194 === (5))){
var inst_46191 = (state_46193[(2)]);
var state_46193__$1 = state_46193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46193__$1,inst_46191);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__36740__auto__ = null;
var cljs_http$core$xhr_$_state_machine__36740__auto____0 = (function (){
var statearr_46202 = [null,null,null,null,null,null,null,null];
(statearr_46202[(0)] = cljs_http$core$xhr_$_state_machine__36740__auto__);

(statearr_46202[(1)] = (1));

return statearr_46202;
});
var cljs_http$core$xhr_$_state_machine__36740__auto____1 = (function (state_46193){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_46193);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e46204){var ex__36743__auto__ = e46204;
var statearr_46205_46244 = state_46193;
(statearr_46205_46244[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_46193[(4)]))){
var statearr_46207_46245 = state_46193;
(statearr_46207_46245[(1)] = cljs.core.first((state_46193[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46246 = state_46193;
state_46193 = G__46246;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__36740__auto__ = function(state_46193){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__36740__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__36740__auto____1.call(this,state_46193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__36740__auto____0;
cljs_http$core$xhr_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__36740__auto____1;
return cljs_http$core$xhr_$_state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_46211 = f__37391__auto__();
(statearr_46211[(6)] = c__37390__auto___46237);

return statearr_46211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__46216){
var map__46217 = p__46216;
var map__46217__$1 = cljs.core.__destructure_map(map__46217);
var request = map__46217__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46217__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46217__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46217__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46217__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_46248 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_46248], null));

if(cljs.core.truth_(cancel)){
var c__37390__auto___46251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_46225){
var state_val_46226 = (state_46225[(1)]);
if((state_val_46226 === (1))){
var state_46225__$1 = state_46225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46225__$1,(2),cancel);
} else {
if((state_val_46226 === (2))){
var inst_46222 = (state_46225[(2)]);
var inst_46223 = jsonp.cancel(req_46248);
var state_46225__$1 = (function (){var statearr_46228 = state_46225;
(statearr_46228[(7)] = inst_46222);

return statearr_46228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46225__$1,inst_46223);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__36740__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__36740__auto____0 = (function (){
var statearr_46229 = [null,null,null,null,null,null,null,null];
(statearr_46229[(0)] = cljs_http$core$jsonp_$_state_machine__36740__auto__);

(statearr_46229[(1)] = (1));

return statearr_46229;
});
var cljs_http$core$jsonp_$_state_machine__36740__auto____1 = (function (state_46225){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_46225);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e46231){var ex__36743__auto__ = e46231;
var statearr_46232_46253 = state_46225;
(statearr_46232_46253[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_46225[(4)]))){
var statearr_46233_46254 = state_46225;
(statearr_46233_46254[(1)] = cljs.core.first((state_46225[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46255 = state_46225;
state_46225 = G__46255;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__36740__auto__ = function(state_46225){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__36740__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__36740__auto____1.call(this,state_46225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__36740__auto____0;
cljs_http$core$jsonp_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__36740__auto____1;
return cljs_http$core$jsonp_$_state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_46234 = f__37391__auto__();
(statearr_46234[(6)] = c__37390__auto___46251);

return statearr_46234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__46235){
var map__46236 = p__46235;
var map__46236__$1 = cljs.core.__destructure_map(map__46236);
var request = map__46236__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46236__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
