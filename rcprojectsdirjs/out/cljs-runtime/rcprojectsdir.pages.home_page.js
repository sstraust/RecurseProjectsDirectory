goog.provide('rcprojectsdir.pages.home_page');
rcprojectsdir.pages.home_page.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
rcprojectsdir.pages.home_page.navbar = (function rcprojectsdir$pages$home_page$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.text-xl","div.navbar.text-xl",-1791243160),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"RC Projects"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mx-12","div.mx-12",1924763827),"test: the value of the counter is :",cljs.core.deref(rcprojectsdir.pages.home_page.counter)], null)], null);
});
rcprojectsdir.pages.home_page.update_project = (function rcprojectsdir$pages$home_page$update_project(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.w-full.px-16","form.w-full.px-16",-1827883275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

var c__30817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_41433){
var state_val_41434 = (state_41433[(1)]);
if((state_val_41434 === (1))){
var inst_41422 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_41423 = [new cljs.core.Keyword(null,"project-description","project-description",-1105609541)];
var inst_41424 = ["hello"];
var inst_41425 = cljs.core.PersistentHashMap.fromArrays(inst_41423,inst_41424);
var inst_41426 = [inst_41425];
var inst_41427 = cljs.core.PersistentHashMap.fromArrays(inst_41422,inst_41426);
var inst_41428 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/newProject",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41427], 0));
var state_41433__$1 = state_41433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41433__$1,(2),inst_41428);
} else {
if((state_val_41434 === (2))){
var inst_41430 = (state_41433[(2)]);
var inst_41431 = console.log(inst_41430);
var state_41433__$1 = state_41433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41433__$1,inst_41431);
} else {
return null;
}
}
});
return (function() {
var rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto__ = null;
var rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto____0 = (function (){
var statearr_41435 = [null,null,null,null,null,null,null];
(statearr_41435[(0)] = rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto__);

(statearr_41435[(1)] = (1));

return statearr_41435;
});
var rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto____1 = (function (state_41433){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_41433);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e41436){var ex__30315__auto__ = e41436;
var statearr_41437_41440 = state_41433;
(statearr_41437_41440[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_41433[(4)]))){
var statearr_41438_41441 = state_41433;
(statearr_41438_41441[(1)] = cljs.core.first((state_41433[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41442 = state_41433;
state_41433 = G__41442;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto__ = function(state_41433){
switch(arguments.length){
case 0:
return rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto____0.call(this);
case 1:
return rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto____1.call(this,state_41433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto____0;
rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto____1;
return rcprojectsdir$pages$home_page$update_project_$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_41439 = f__30818__auto__();
(statearr_41439[(6)] = c__30817__auto__);

return statearr_41439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));

return c__30817__auto__;
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
