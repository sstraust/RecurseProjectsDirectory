goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34773){
var map__34778 = p__34773;
var map__34778__$1 = cljs.core.__destructure_map(map__34778);
var m = map__34778__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34778__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34778__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34779_35051 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34780_35052 = null;
var count__34781_35053 = (0);
var i__34782_35054 = (0);
while(true){
if((i__34782_35054 < count__34781_35053)){
var f_35055 = chunk__34780_35052.cljs$core$IIndexed$_nth$arity$2(null, i__34782_35054);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35055], 0));


var G__35056 = seq__34779_35051;
var G__35057 = chunk__34780_35052;
var G__35058 = count__34781_35053;
var G__35059 = (i__34782_35054 + (1));
seq__34779_35051 = G__35056;
chunk__34780_35052 = G__35057;
count__34781_35053 = G__35058;
i__34782_35054 = G__35059;
continue;
} else {
var temp__5720__auto___35060 = cljs.core.seq(seq__34779_35051);
if(temp__5720__auto___35060){
var seq__34779_35061__$1 = temp__5720__auto___35060;
if(cljs.core.chunked_seq_QMARK_(seq__34779_35061__$1)){
var c__5565__auto___35062 = cljs.core.chunk_first(seq__34779_35061__$1);
var G__35063 = cljs.core.chunk_rest(seq__34779_35061__$1);
var G__35064 = c__5565__auto___35062;
var G__35065 = cljs.core.count(c__5565__auto___35062);
var G__35066 = (0);
seq__34779_35051 = G__35063;
chunk__34780_35052 = G__35064;
count__34781_35053 = G__35065;
i__34782_35054 = G__35066;
continue;
} else {
var f_35067 = cljs.core.first(seq__34779_35061__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35067], 0));


var G__35068 = cljs.core.next(seq__34779_35061__$1);
var G__35069 = null;
var G__35070 = (0);
var G__35071 = (0);
seq__34779_35051 = G__35068;
chunk__34780_35052 = G__35069;
count__34781_35053 = G__35070;
i__34782_35054 = G__35071;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35072 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35072], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35072)))?cljs.core.second(arglists_35072):arglists_35072)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34785_35073 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34786_35074 = null;
var count__34787_35075 = (0);
var i__34788_35076 = (0);
while(true){
if((i__34788_35076 < count__34787_35075)){
var vec__34801_35077 = chunk__34786_35074.cljs$core$IIndexed$_nth$arity$2(null, i__34788_35076);
var name_35078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35077,(0),null);
var map__34804_35079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801_35077,(1),null);
var map__34804_35080__$1 = cljs.core.__destructure_map(map__34804_35079);
var doc_35081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34804_35080__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34804_35080__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35078], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35082], 0));

if(cljs.core.truth_(doc_35081)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35081], 0));
} else {
}


var G__35083 = seq__34785_35073;
var G__35084 = chunk__34786_35074;
var G__35085 = count__34787_35075;
var G__35086 = (i__34788_35076 + (1));
seq__34785_35073 = G__35083;
chunk__34786_35074 = G__35084;
count__34787_35075 = G__35085;
i__34788_35076 = G__35086;
continue;
} else {
var temp__5720__auto___35087 = cljs.core.seq(seq__34785_35073);
if(temp__5720__auto___35087){
var seq__34785_35088__$1 = temp__5720__auto___35087;
if(cljs.core.chunked_seq_QMARK_(seq__34785_35088__$1)){
var c__5565__auto___35089 = cljs.core.chunk_first(seq__34785_35088__$1);
var G__35090 = cljs.core.chunk_rest(seq__34785_35088__$1);
var G__35091 = c__5565__auto___35089;
var G__35092 = cljs.core.count(c__5565__auto___35089);
var G__35093 = (0);
seq__34785_35073 = G__35090;
chunk__34786_35074 = G__35091;
count__34787_35075 = G__35092;
i__34788_35076 = G__35093;
continue;
} else {
var vec__34807_35094 = cljs.core.first(seq__34785_35088__$1);
var name_35095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807_35094,(0),null);
var map__34810_35096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807_35094,(1),null);
var map__34810_35097__$1 = cljs.core.__destructure_map(map__34810_35096);
var doc_35098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810_35097__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810_35097__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35095], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35099], 0));

if(cljs.core.truth_(doc_35098)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35098], 0));
} else {
}


var G__35100 = cljs.core.next(seq__34785_35088__$1);
var G__35101 = null;
var G__35102 = (0);
var G__35103 = (0);
seq__34785_35073 = G__35100;
chunk__34786_35074 = G__35101;
count__34787_35075 = G__35102;
i__34788_35076 = G__35103;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34811 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34812 = null;
var count__34813 = (0);
var i__34814 = (0);
while(true){
if((i__34814 < count__34813)){
var role = chunk__34812.cljs$core$IIndexed$_nth$arity$2(null, i__34814);
var temp__5720__auto___35104__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35104__$1)){
var spec_35105 = temp__5720__auto___35104__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35105)], 0));
} else {
}


var G__35106 = seq__34811;
var G__35107 = chunk__34812;
var G__35108 = count__34813;
var G__35109 = (i__34814 + (1));
seq__34811 = G__35106;
chunk__34812 = G__35107;
count__34813 = G__35108;
i__34814 = G__35109;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__34811);
if(temp__5720__auto____$1){
var seq__34811__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34811__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__34811__$1);
var G__35110 = cljs.core.chunk_rest(seq__34811__$1);
var G__35111 = c__5565__auto__;
var G__35112 = cljs.core.count(c__5565__auto__);
var G__35113 = (0);
seq__34811 = G__35110;
chunk__34812 = G__35111;
count__34813 = G__35112;
i__34814 = G__35113;
continue;
} else {
var role = cljs.core.first(seq__34811__$1);
var temp__5720__auto___35114__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35114__$2)){
var spec_35115 = temp__5720__auto___35114__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35115)], 0));
} else {
}


var G__35116 = cljs.core.next(seq__34811__$1);
var G__35117 = null;
var G__35118 = (0);
var G__35119 = (0);
seq__34811 = G__35116;
chunk__34812 = G__35117;
count__34813 = G__35118;
i__34814 = G__35119;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35125 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35126 = cljs.core.ex_cause(t);
via = G__35125;
t = G__35126;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34891 = datafied_throwable;
var map__34891__$1 = cljs.core.__destructure_map(map__34891);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34891__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34892 = cljs.core.last(via);
var map__34892__$1 = cljs.core.__destructure_map(map__34892);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34892__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34893 = data;
var map__34893__$1 = cljs.core.__destructure_map(map__34893);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34893__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34893__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34893__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34894 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34894__$1 = cljs.core.__destructure_map(map__34894);
var top_data = map__34894__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34894__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34898 = phase;
var G__34898__$1 = (((G__34898 instanceof cljs.core.Keyword))?G__34898.fqn:null);
switch (G__34898__$1) {
case "read-source":
var map__34899 = data;
var map__34899__$1 = cljs.core.__destructure_map(map__34899);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34900 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34900__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34900,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34900);
var G__34900__$2 = (cljs.core.truth_((function (){var fexpr__34919 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34919.cljs$core$IFn$_invoke$arity$1 ? fexpr__34919.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34919.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34900__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34900__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34900__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34900__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34928 = top_data;
var G__34928__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34928,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34928);
var G__34928__$2 = (cljs.core.truth_((function (){var fexpr__34929 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34929.cljs$core$IFn$_invoke$arity$1 ? fexpr__34929.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34929.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34928__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34928__$1);
var G__34928__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34928__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34928__$2);
var G__34928__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34928__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34928__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34928__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34928__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34930 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34930,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34930,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34930,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34930,(3),null);
var G__34933 = top_data;
var G__34933__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34933,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34933);
var G__34933__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34933__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34933__$1);
var G__34933__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34933__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34933__$2);
var G__34933__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34933__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34933__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34933__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34933__$4;
}

break;
case "execution":
var vec__34940 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34940,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34940,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34940,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34940,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34871_SHARP_){
var or__5043__auto__ = (p1__34871_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__34947 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34947.cljs$core$IFn$_invoke$arity$1 ? fexpr__34947.cljs$core$IFn$_invoke$arity$1(p1__34871_SHARP_) : fexpr__34947.call(null, p1__34871_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__34948 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34948__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34948,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34948);
var G__34948__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34948__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34948__$1);
var G__34948__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34948__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34948__$2);
var G__34948__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34948__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34948__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34948__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34948__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34898__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34971){
var map__34972 = p__34971;
var map__34972__$1 = cljs.core.__destructure_map(map__34972);
var triage_data = map__34972__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34972__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34972__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34972__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34972__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34972__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34972__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34972__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34972__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34979 = phase;
var G__34979__$1 = (((G__34979 instanceof cljs.core.Keyword))?G__34979.fqn:null);
switch (G__34979__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34984 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34985 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34986 = loc;
var G__34987 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34996_35130 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34997_35131 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34998_35132 = true;
var _STAR_print_fn_STAR__temp_val__34999_35133 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34998_35132);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34999_35133);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34965_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34965_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34997_35131);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34996_35130);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34984,G__34985,G__34986,G__34987) : format.call(null, G__34984,G__34985,G__34986,G__34987));

break;
case "macroexpansion":
var G__35004 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35005 = cause_type;
var G__35006 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35007 = loc;
var G__35008 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35004,G__35005,G__35006,G__35007,G__35008) : format.call(null, G__35004,G__35005,G__35006,G__35007,G__35008));

break;
case "compile-syntax-check":
var G__35009 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35010 = cause_type;
var G__35011 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35012 = loc;
var G__35013 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35009,G__35010,G__35011,G__35012,G__35013) : format.call(null, G__35009,G__35010,G__35011,G__35012,G__35013));

break;
case "compilation":
var G__35015 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35016 = cause_type;
var G__35017 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35018 = loc;
var G__35019 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35015,G__35016,G__35017,G__35018,G__35019) : format.call(null, G__35015,G__35016,G__35017,G__35018,G__35019));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35025 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35026 = symbol;
var G__35027 = loc;
var G__35028 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35033_35135 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35034_35136 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35035_35137 = true;
var _STAR_print_fn_STAR__temp_val__35036_35138 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35035_35137);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35036_35138);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34966_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34966_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35034_35136);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35033_35135);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35025,G__35026,G__35027,G__35028) : format.call(null, G__35025,G__35026,G__35027,G__35028));
} else {
var G__35041 = "Execution error%s at %s(%s).\n%s\n";
var G__35042 = cause_type;
var G__35043 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35044 = loc;
var G__35045 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35041,G__35042,G__35043,G__35044,G__35045) : format.call(null, G__35041,G__35042,G__35043,G__35044,G__35045));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34979__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
