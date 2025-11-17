goog.provide('rcprojectsdir.pages.home_page');
rcprojectsdir.pages.home_page.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
rcprojectsdir.pages.home_page.navbar = (function rcprojectsdir$pages$home_page$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.text-xl","div.navbar.text-xl",-1791243160),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"RC Projects"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-12","div.mx-12",1924763827),"test: the value of the counter is :",cljs.core.deref(rcprojectsdir.pages.home_page.counter)], null)], null);
});
rcprojectsdir.pages.home_page.update_project = (function rcprojectsdir$pages$home_page$update_project(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.w-full.px-16","form.w-full.px-16",-1827883275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

var c__35125__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35126__auto__ = (function (){var switch__35008__auto__ = (function (state_39845){
var state_val_39846 = (state_39845[(1)]);
if((state_val_39846 === (1))){
var inst_39834 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_39835 = [new cljs.core.Keyword(null,"project-description","project-description",-1105609541)];
var inst_39836 = ["hello"];
var inst_39837 = cljs.core.PersistentHashMap.fromArrays(inst_39835,inst_39836);
var inst_39838 = [inst_39837];
var inst_39839 = cljs.core.PersistentHashMap.fromArrays(inst_39834,inst_39838);
var inst_39840 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/newProject",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_39839], 0));
var state_39845__$1 = state_39845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39845__$1,(2),inst_39840);
} else {
if((state_val_39846 === (2))){
var inst_39842 = (state_39845[(2)]);
var inst_39843 = console.log(inst_39842);
var state_39845__$1 = state_39845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39845__$1,inst_39843);
} else {
return null;
}
}
});
return (function() {
var rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto__ = null;
var rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto____0 = (function (){
var statearr_39847 = [null,null,null,null,null,null,null];
(statearr_39847[(0)] = rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto__);

(statearr_39847[(1)] = (1));

return statearr_39847;
});
var rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto____1 = (function (state_39845){
while(true){
var ret_value__35010__auto__ = (function (){try{while(true){
var result__35011__auto__ = switch__35008__auto__(state_39845);
if(cljs.core.keyword_identical_QMARK_(result__35011__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35011__auto__;
}
break;
}
}catch (e39848){var ex__35012__auto__ = e39848;
var statearr_39849_39852 = state_39845;
(statearr_39849_39852[(2)] = ex__35012__auto__);


if(cljs.core.seq((state_39845[(4)]))){
var statearr_39850_39853 = state_39845;
(statearr_39850_39853[(1)] = cljs.core.first((state_39845[(4)])));

} else {
throw ex__35012__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35010__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39854 = state_39845;
state_39845 = G__39854;
continue;
} else {
return ret_value__35010__auto__;
}
break;
}
});
rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto__ = function(state_39845){
switch(arguments.length){
case 0:
return rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto____0.call(this);
case 1:
return rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto____1.call(this,state_39845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto__.cljs$core$IFn$_invoke$arity$0 = rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto____0;
rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto__.cljs$core$IFn$_invoke$arity$1 = rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto____1;
return rcprojectsdir$pages$home_page$update_project_$_state_machine__35009__auto__;
})()
})();
var state__35127__auto__ = (function (){var statearr_39851 = f__35126__auto__();
(statearr_39851[(6)] = c__35125__auto__);

return statearr_39851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35127__auto__);
}));

return c__35125__auto__;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input.input-bordered.w-full","input.input.input-bordered.w-full",61387221),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Tell us about your project"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-box.w-full.justify-end","h-box.w-full.justify-end",44396129),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.mx-1.my-4","button.btn.btn-primary.mx-1.my-4",-1399252254),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Create"], null)], null)], null);
});
rcprojectsdir.pages.home_page.featured = (function rcprojectsdir$pages$home_page$featured(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-64.w-full.bg-base-300.my-2","div.h-64.w-full.bg-base-300.my-2",1832978538),"Featured"], null);
});
rcprojectsdir.pages.home_page.feed = (function rcprojectsdir$pages$home_page$feed(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-grow.bg-base-300.my-4","div.flex-grow.bg-base-300.my-4",1005379276),"Feed"], null);
});
rcprojectsdir.pages.home_page.home_page = (function rcprojectsdir$pages$home_page$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box.w-screen.w-screen.items-center.h-screen","v-box.w-screen.w-screen.items-center.h-screen",1008361917),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v-box.w-screen.h-full.max-w-5xl","v-box.w-screen.h-full.max-w-5xl",1960183492),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcprojectsdir.pages.home_page.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcprojectsdir.pages.home_page.update_project], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcprojectsdir.pages.home_page.featured], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcprojectsdir.pages.home_page.feed], null)], null)], null);
});

//# sourceMappingURL=rcprojectsdir.pages.home_page.js.map
