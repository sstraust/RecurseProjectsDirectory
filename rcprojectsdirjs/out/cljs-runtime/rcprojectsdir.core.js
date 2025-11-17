goog.provide('rcprojectsdir.core');
rcprojectsdir.core.load_main_page = (function rcprojectsdir$core$load_main_page(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcprojectsdir.pages.home_page.home_page], null),document.getElementById("main-app"));
});
rcprojectsdir.core.load_page = (function rcprojectsdir$core$load_page(){
var G__41443 = window.location.pathname;
switch (G__41443) {
case "/":
return rcprojectsdir.core.load_main_page();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41443)].join('')));

}
});
goog.exportSymbol('rcprojectsdir.core.load_page', rcprojectsdir.core.load_page);
rcprojectsdir.core.load_page();
rcprojectsdir.core.curr_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
rcprojectsdir.core.reload_stylesheets = (function rcprojectsdir$core$reload_stylesheets(){
var c__30817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_41460){
var state_val_41461 = (state_41460[(1)]);
if((state_val_41461 === (1))){
var inst_41444 = cljs.core.rand_int((1000000));
var inst_41445 = ["/resources/global_output.css?v=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41444)].join('');
var inst_41446 = cljs_http.client.get(inst_41445);
var state_41460__$1 = state_41460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41460__$1,(2),inst_41446);
} else {
if((state_val_41461 === (2))){
var inst_41449 = (state_41460[(7)]);
var inst_41448 = (state_41460[(2)]);
var inst_41449__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_41448);
var inst_41450 = cljs.core.deref(rcprojectsdir.core.curr_css);
var inst_41451 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41450,inst_41449__$1);
var inst_41452 = (!(inst_41451));
var state_41460__$1 = (function (){var statearr_41462 = state_41460;
(statearr_41462[(7)] = inst_41449__$1);

return statearr_41462;
})();
if(inst_41452){
var statearr_41463_41474 = state_41460__$1;
(statearr_41463_41474[(1)] = (3));

} else {
var statearr_41464_41475 = state_41460__$1;
(statearr_41464_41475[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (3))){
var inst_41454 = reloadStylesheets();
var state_41460__$1 = state_41460;
var statearr_41465_41476 = state_41460__$1;
(statearr_41465_41476[(2)] = inst_41454);

(statearr_41465_41476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (4))){
var state_41460__$1 = state_41460;
var statearr_41466_41477 = state_41460__$1;
(statearr_41466_41477[(2)] = null);

(statearr_41466_41477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41461 === (5))){
var inst_41449 = (state_41460[(7)]);
var inst_41457 = (state_41460[(2)]);
var inst_41458 = cljs.core.reset_BANG_(rcprojectsdir.core.curr_css,inst_41449);
var state_41460__$1 = (function (){var statearr_41467 = state_41460;
(statearr_41467[(8)] = inst_41457);

return statearr_41467;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41460__$1,inst_41458);
} else {
return null;
}
}
}
}
}
});
return (function() {
var rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto__ = null;
var rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto____0 = (function (){
var statearr_41468 = [null,null,null,null,null,null,null,null,null];
(statearr_41468[(0)] = rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto__);

(statearr_41468[(1)] = (1));

return statearr_41468;
});
var rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto____1 = (function (state_41460){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_41460);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e41469){var ex__30315__auto__ = e41469;
var statearr_41470_41478 = state_41460;
(statearr_41470_41478[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_41460[(4)]))){
var statearr_41471_41479 = state_41460;
(statearr_41471_41479[(1)] = cljs.core.first((state_41460[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41480 = state_41460;
state_41460 = G__41480;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto__ = function(state_41460){
switch(arguments.length){
case 0:
return rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto____0.call(this);
case 1:
return rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto____1.call(this,state_41460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto____0;
rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto____1;
return rcprojectsdir$core$reload_stylesheets_$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_41472 = f__30818__auto__();
(statearr_41472[(6)] = c__30817__auto__);

return statearr_41472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));

return c__30817__auto__;
});
rcprojectsdir.core.reload_css = (function rcprojectsdir$core$reload_css(){
return setInterval((function (){
return rcprojectsdir.core.reload_stylesheets();
}),(500));
});
setTimeout((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"dev")){
return rcprojectsdir.core.reload_css();
} else {
return null;
}
}),(3000));

//# sourceMappingURL=rcprojectsdir.core.js.map
