goog.provide('rcprojectsdir.core');
rcprojectsdir.core.load_main_page = (function rcprojectsdir$core$load_main_page(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcprojectsdir.pages.home_page.home_page], null),document.getElementById("main-app"));
});
rcprojectsdir.core.load_page = (function rcprojectsdir$core$load_page(){
var G__39855 = window.location.pathname;
switch (G__39855) {
case "/":
return rcprojectsdir.core.load_main_page();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39855)].join('')));

}
});
goog.exportSymbol('rcprojectsdir.core.load_page', rcprojectsdir.core.load_page);
rcprojectsdir.core.load_page();
rcprojectsdir.core.curr_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
rcprojectsdir.core.reload_stylesheets = (function rcprojectsdir$core$reload_stylesheets(){
var c__35125__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35126__auto__ = (function (){var switch__35008__auto__ = (function (state_39872){
var state_val_39873 = (state_39872[(1)]);
if((state_val_39873 === (1))){
var inst_39856 = cljs.core.rand_int((1000000));
var inst_39857 = ["/resources/global_output.css?v=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39856)].join('');
var inst_39858 = cljs_http.client.get(inst_39857);
var state_39872__$1 = state_39872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39872__$1,(2),inst_39858);
} else {
if((state_val_39873 === (2))){
var inst_39861 = (state_39872[(7)]);
var inst_39860 = (state_39872[(2)]);
var inst_39861__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_39860);
var inst_39862 = cljs.core.deref(rcprojectsdir.core.curr_css);
var inst_39863 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39862,inst_39861__$1);
var inst_39864 = (!(inst_39863));
var state_39872__$1 = (function (){var statearr_39874 = state_39872;
(statearr_39874[(7)] = inst_39861__$1);

return statearr_39874;
})();
if(inst_39864){
var statearr_39875_39886 = state_39872__$1;
(statearr_39875_39886[(1)] = (3));

} else {
var statearr_39876_39887 = state_39872__$1;
(statearr_39876_39887[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (3))){
var inst_39866 = reloadStylesheets();
var state_39872__$1 = state_39872;
var statearr_39877_39888 = state_39872__$1;
(statearr_39877_39888[(2)] = inst_39866);

(statearr_39877_39888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (4))){
var state_39872__$1 = state_39872;
var statearr_39878_39889 = state_39872__$1;
(statearr_39878_39889[(2)] = null);

(statearr_39878_39889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39873 === (5))){
var inst_39861 = (state_39872[(7)]);
var inst_39869 = (state_39872[(2)]);
var inst_39870 = cljs.core.reset_BANG_(rcprojectsdir.core.curr_css,inst_39861);
var state_39872__$1 = (function (){var statearr_39879 = state_39872;
(statearr_39879[(8)] = inst_39869);

return statearr_39879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39872__$1,inst_39870);
} else {
return null;
}
}
}
}
}
});
return (function() {
var rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto__ = null;
var rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto____0 = (function (){
var statearr_39880 = [null,null,null,null,null,null,null,null,null];
(statearr_39880[(0)] = rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto__);

(statearr_39880[(1)] = (1));

return statearr_39880;
});
var rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto____1 = (function (state_39872){
while(true){
var ret_value__35010__auto__ = (function (){try{while(true){
var result__35011__auto__ = switch__35008__auto__(state_39872);
if(cljs.core.keyword_identical_QMARK_(result__35011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35011__auto__;
}
break;
}
}catch (e39881){var ex__35012__auto__ = e39881;
var statearr_39882_39890 = state_39872;
(statearr_39882_39890[(2)] = ex__35012__auto__);


if(cljs.core.seq((state_39872[(4)]))){
var statearr_39883_39891 = state_39872;
(statearr_39883_39891[(1)] = cljs.core.first((state_39872[(4)])));

} else {
throw ex__35012__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39892 = state_39872;
state_39872 = G__39892;
continue;
} else {
return ret_value__35010__auto__;
}
break;
}
});
rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto__ = function(state_39872){
switch(arguments.length){
case 0:
return rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto____0.call(this);
case 1:
return rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto____1.call(this,state_39872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto__.cljs$core$IFn$_invoke$arity$0 = rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto____0;
rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto__.cljs$core$IFn$_invoke$arity$1 = rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto____1;
return rcprojectsdir$core$reload_stylesheets_$_state_machine__35009__auto__;
})()
})();
var state__35127__auto__ = (function (){var statearr_39884 = f__35126__auto__();
(statearr_39884[(6)] = c__35125__auto__);

return statearr_39884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35127__auto__);
}));

return c__35125__auto__;
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
