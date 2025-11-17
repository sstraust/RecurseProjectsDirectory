// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('rcprojectsdir.core');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('easyreagent.components');
goog.require('reagent.core');
rcprojectsdir.core.load_main_page = (function rcprojectsdir$core$load_main_page(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hi from reagent"], null),document.getElementById("main-app"));
});
rcprojectsdir.core.load_page = (function rcprojectsdir$core$load_page(){
var G__2570 = window.location.pathname;
switch (G__2570) {
case "/":
return rcprojectsdir.core.load_main_page.call(null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2570)].join('')));

}
});
goog.exportSymbol('rcprojectsdir.core.load_page', rcprojectsdir.core.load_page);
rcprojectsdir.core.load_page.call(null);
rcprojectsdir.core.curr_css = cljs.core.atom.call(null,null);
rcprojectsdir.core.reload_stylesheets = (function rcprojectsdir$core$reload_stylesheets(){
var c__2420__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2421__auto__ = (function (){var switch__2397__auto__ = (function (state_2588){
var state_val_2589 = (state_2588[(1)]);
if((state_val_2589 === (1))){
var inst_2572 = cljs.core.rand_int.call(null,(1000000));
var inst_2573 = ["resources/global_output.css?v=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_2572)].join('');
var inst_2574 = cljs_http.client.get.call(null,inst_2573);
var state_2588__$1 = state_2588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2588__$1,(2),inst_2574);
} else {
if((state_val_2589 === (2))){
var inst_2577 = (state_2588[(7)]);
var inst_2576 = (state_2588[(2)]);
var inst_2577__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_2576);
var inst_2578 = cljs.core.deref.call(null,rcprojectsdir.core.curr_css);
var inst_2579 = cljs.core._EQ_.call(null,inst_2578,inst_2577__$1);
var inst_2580 = (!(inst_2579));
var state_2588__$1 = (function (){var statearr_2590 = state_2588;
(statearr_2590[(7)] = inst_2577__$1);

return statearr_2590;
})();
if(inst_2580){
var statearr_2591_2601 = state_2588__$1;
(statearr_2591_2601[(1)] = (3));

} else {
var statearr_2592_2602 = state_2588__$1;
(statearr_2592_2602[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2589 === (3))){
var inst_2582 = reloadStylesheets();
var state_2588__$1 = state_2588;
var statearr_2593_2603 = state_2588__$1;
(statearr_2593_2603[(2)] = inst_2582);

(statearr_2593_2603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2589 === (4))){
var state_2588__$1 = state_2588;
var statearr_2594_2604 = state_2588__$1;
(statearr_2594_2604[(2)] = null);

(statearr_2594_2604[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2589 === (5))){
var inst_2577 = (state_2588[(7)]);
var inst_2585 = (state_2588[(2)]);
var inst_2586 = cljs.core.reset_BANG_.call(null,rcprojectsdir.core.curr_css,inst_2577);
var state_2588__$1 = (function (){var statearr_2595 = state_2588;
(statearr_2595[(8)] = inst_2585);

return statearr_2595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2588__$1,inst_2586);
} else {
return null;
}
}
}
}
}
});
return (function() {
var rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto__ = null;
var rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto____0 = (function (){
var statearr_2596 = [null,null,null,null,null,null,null,null,null];
(statearr_2596[(0)] = rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto__);

(statearr_2596[(1)] = (1));

return statearr_2596;
});
var rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto____1 = (function (state_2588){
while(true){
var ret_value__2399__auto__ = (function (){try{while(true){
var result__2400__auto__ = switch__2397__auto__.call(null,state_2588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2400__auto__;
}
break;
}
}catch (e2597){var ex__2401__auto__ = e2597;
var statearr_2598_2605 = state_2588;
(statearr_2598_2605[(2)] = ex__2401__auto__);


if(cljs.core.seq.call(null,(state_2588[(4)]))){
var statearr_2599_2606 = state_2588;
(statearr_2599_2606[(1)] = cljs.core.first.call(null,(state_2588[(4)])));

} else {
throw ex__2401__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2399__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2607 = state_2588;
state_2588 = G__2607;
continue;
} else {
return ret_value__2399__auto__;
}
break;
}
});
rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto__ = function(state_2588){
switch(arguments.length){
case 0:
return rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto____0.call(this);
case 1:
return rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto____1.call(this,state_2588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto__.cljs$core$IFn$_invoke$arity$0 = rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto____0;
rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto__.cljs$core$IFn$_invoke$arity$1 = rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto____1;
return rcprojectsdir$core$reload_stylesheets_$_state_machine__2398__auto__;
})()
})();
var state__2422__auto__ = (function (){var statearr_2600 = f__2421__auto__.call(null);
(statearr_2600[(6)] = c__2420__auto__);

return statearr_2600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2422__auto__);
}));

return c__2420__auto__;
});
rcprojectsdir.core.reload_css = (function rcprojectsdir$core$reload_css(){
return setInterval((function (){
return rcprojectsdir.core.reload_stylesheets.call(null);
}),(500));
});
setTimeout((function (){
if(cljs.core._EQ_.call(null,mode,"dev")){
return rcprojectsdir.core.reload_css.call(null);
} else {
return null;
}
}),(3000));

//# sourceMappingURL=core.js.map
