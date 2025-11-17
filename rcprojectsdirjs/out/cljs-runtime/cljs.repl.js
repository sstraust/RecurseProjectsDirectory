goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42190){
var map__42191 = p__42190;
var map__42191__$1 = cljs.core.__destructure_map(map__42191);
var m = map__42191__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42191__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42191__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__42195_42616 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42196_42617 = null;
var count__42197_42618 = (0);
var i__42198_42619 = (0);
while(true){
if((i__42198_42619 < count__42197_42618)){
var f_42621 = chunk__42196_42617.cljs$core$IIndexed$_nth$arity$2(null, i__42198_42619);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42621], 0));


var G__42623 = seq__42195_42616;
var G__42624 = chunk__42196_42617;
var G__42625 = count__42197_42618;
var G__42626 = (i__42198_42619 + (1));
seq__42195_42616 = G__42623;
chunk__42196_42617 = G__42624;
count__42197_42618 = G__42625;
i__42198_42619 = G__42626;
continue;
} else {
var temp__5720__auto___42627 = cljs.core.seq(seq__42195_42616);
if(temp__5720__auto___42627){
var seq__42195_42628__$1 = temp__5720__auto___42627;
if(cljs.core.chunked_seq_QMARK_(seq__42195_42628__$1)){
var c__5565__auto___42630 = cljs.core.chunk_first(seq__42195_42628__$1);
var G__42631 = cljs.core.chunk_rest(seq__42195_42628__$1);
var G__42632 = c__5565__auto___42630;
var G__42633 = cljs.core.count(c__5565__auto___42630);
var G__42634 = (0);
seq__42195_42616 = G__42631;
chunk__42196_42617 = G__42632;
count__42197_42618 = G__42633;
i__42198_42619 = G__42634;
continue;
} else {
var f_42638 = cljs.core.first(seq__42195_42628__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42638], 0));


var G__42639 = cljs.core.next(seq__42195_42628__$1);
var G__42640 = null;
var G__42641 = (0);
var G__42642 = (0);
seq__42195_42616 = G__42639;
chunk__42196_42617 = G__42640;
count__42197_42618 = G__42641;
i__42198_42619 = G__42642;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42643 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42643], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42643)))?cljs.core.second(arglists_42643):arglists_42643)], 0));
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
var seq__42208_42654 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42209_42655 = null;
var count__42210_42656 = (0);
var i__42211_42657 = (0);
while(true){
if((i__42211_42657 < count__42210_42656)){
var vec__42228_42659 = chunk__42209_42655.cljs$core$IIndexed$_nth$arity$2(null, i__42211_42657);
var name_42661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42228_42659,(0),null);
var map__42231_42663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42228_42659,(1),null);
var map__42231_42665__$1 = cljs.core.__destructure_map(map__42231_42663);
var doc_42666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42231_42665__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42231_42665__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42661], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42667], 0));

if(cljs.core.truth_(doc_42666)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42666], 0));
} else {
}


var G__42676 = seq__42208_42654;
var G__42677 = chunk__42209_42655;
var G__42678 = count__42210_42656;
var G__42679 = (i__42211_42657 + (1));
seq__42208_42654 = G__42676;
chunk__42209_42655 = G__42677;
count__42210_42656 = G__42678;
i__42211_42657 = G__42679;
continue;
} else {
var temp__5720__auto___42684 = cljs.core.seq(seq__42208_42654);
if(temp__5720__auto___42684){
var seq__42208_42686__$1 = temp__5720__auto___42684;
if(cljs.core.chunked_seq_QMARK_(seq__42208_42686__$1)){
var c__5565__auto___42691 = cljs.core.chunk_first(seq__42208_42686__$1);
var G__42692 = cljs.core.chunk_rest(seq__42208_42686__$1);
var G__42693 = c__5565__auto___42691;
var G__42694 = cljs.core.count(c__5565__auto___42691);
var G__42695 = (0);
seq__42208_42654 = G__42692;
chunk__42209_42655 = G__42693;
count__42210_42656 = G__42694;
i__42211_42657 = G__42695;
continue;
} else {
var vec__42235_42696 = cljs.core.first(seq__42208_42686__$1);
var name_42697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42235_42696,(0),null);
var map__42238_42698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42235_42696,(1),null);
var map__42238_42699__$1 = cljs.core.__destructure_map(map__42238_42698);
var doc_42700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42238_42699__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42238_42699__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42697], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42701], 0));

if(cljs.core.truth_(doc_42700)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42700], 0));
} else {
}


var G__42712 = cljs.core.next(seq__42208_42686__$1);
var G__42713 = null;
var G__42714 = (0);
var G__42715 = (0);
seq__42208_42654 = G__42712;
chunk__42209_42655 = G__42713;
count__42210_42656 = G__42714;
i__42211_42657 = G__42715;
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

var seq__42247 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42248 = null;
var count__42249 = (0);
var i__42250 = (0);
while(true){
if((i__42250 < count__42249)){
var role = chunk__42248.cljs$core$IIndexed$_nth$arity$2(null, i__42250);
var temp__5720__auto___42730__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___42730__$1)){
var spec_42735 = temp__5720__auto___42730__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42735)], 0));
} else {
}


var G__42736 = seq__42247;
var G__42737 = chunk__42248;
var G__42738 = count__42249;
var G__42739 = (i__42250 + (1));
seq__42247 = G__42736;
chunk__42248 = G__42737;
count__42249 = G__42738;
i__42250 = G__42739;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__42247);
if(temp__5720__auto____$1){
var seq__42247__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42247__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42247__$1);
var G__42744 = cljs.core.chunk_rest(seq__42247__$1);
var G__42745 = c__5565__auto__;
var G__42746 = cljs.core.count(c__5565__auto__);
var G__42747 = (0);
seq__42247 = G__42744;
chunk__42248 = G__42745;
count__42249 = G__42746;
i__42250 = G__42747;
continue;
} else {
var role = cljs.core.first(seq__42247__$1);
var temp__5720__auto___42748__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___42748__$2)){
var spec_42749 = temp__5720__auto___42748__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42749)], 0));
} else {
}


var G__42751 = cljs.core.next(seq__42247__$1);
var G__42752 = null;
var G__42753 = (0);
var G__42754 = (0);
seq__42247 = G__42751;
chunk__42248 = G__42752;
count__42249 = G__42753;
i__42250 = G__42754;
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
var G__42768 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__42769 = cljs.core.ex_cause(t);
via = G__42768;
t = G__42769;
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
var map__42409 = datafied_throwable;
var map__42409__$1 = cljs.core.__destructure_map(map__42409);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42409__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42409__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42409__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42410 = cljs.core.last(via);
var map__42410__$1 = cljs.core.__destructure_map(map__42410);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42410__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42410__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42410__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42411 = data;
var map__42411__$1 = cljs.core.__destructure_map(map__42411);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42411__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42411__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42411__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42412 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42412__$1 = cljs.core.__destructure_map(map__42412);
var top_data = map__42412__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42412__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42414 = phase;
var G__42414__$1 = (((G__42414 instanceof cljs.core.Keyword))?G__42414.fqn:null);
switch (G__42414__$1) {
case "read-source":
var map__42417 = data;
var map__42417__$1 = cljs.core.__destructure_map(map__42417);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42417__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42417__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42418 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42418__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42418,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42418);
var G__42418__$2 = (cljs.core.truth_((function (){var fexpr__42419 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42419.cljs$core$IFn$_invoke$arity$1 ? fexpr__42419.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42419.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42418__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42418__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42418__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42418__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42425 = top_data;
var G__42425__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42425,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42425);
var G__42425__$2 = (cljs.core.truth_((function (){var fexpr__42427 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42427.cljs$core$IFn$_invoke$arity$1 ? fexpr__42427.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42427.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42425__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42425__$1);
var G__42425__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42425__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42425__$2);
var G__42425__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42425__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42425__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42425__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42425__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42439 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42439,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42439,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42439,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42439,(3),null);
var G__42447 = top_data;
var G__42447__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42447,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42447);
var G__42447__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42447__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42447__$1);
var G__42447__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42447__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42447__$2);
var G__42447__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42447__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42447__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42447__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42447__$4;
}

break;
case "execution":
var vec__42485 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42485,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42485,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42485,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42485,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42408_SHARP_){
var or__5043__auto__ = (p1__42408_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__42500 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42500.cljs$core$IFn$_invoke$arity$1 ? fexpr__42500.cljs$core$IFn$_invoke$arity$1(p1__42408_SHARP_) : fexpr__42500.call(null, p1__42408_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__42512 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42512__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42512,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42512);
var G__42512__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42512__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42512__$1);
var G__42512__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42512__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42512__$2);
var G__42512__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42512__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42512__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42512__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42512__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42414__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42550){
var map__42551 = p__42550;
var map__42551__$1 = cljs.core.__destructure_map(map__42551);
var triage_data = map__42551__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42551__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__42559 = phase;
var G__42559__$1 = (((G__42559 instanceof cljs.core.Keyword))?G__42559.fqn:null);
switch (G__42559__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42560 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42561 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42562 = loc;
var G__42563 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42565_42820 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42566_42821 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42567_42822 = true;
var _STAR_print_fn_STAR__temp_val__42568_42823 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42567_42822);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42568_42823);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42534_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42534_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42566_42821);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42565_42820);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42560,G__42561,G__42562,G__42563) : format.call(null, G__42560,G__42561,G__42562,G__42563));

break;
case "macroexpansion":
var G__42570 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42571 = cause_type;
var G__42572 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42573 = loc;
var G__42574 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42570,G__42571,G__42572,G__42573,G__42574) : format.call(null, G__42570,G__42571,G__42572,G__42573,G__42574));

break;
case "compile-syntax-check":
var G__42575 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42576 = cause_type;
var G__42577 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42578 = loc;
var G__42579 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42575,G__42576,G__42577,G__42578,G__42579) : format.call(null, G__42575,G__42576,G__42577,G__42578,G__42579));

break;
case "compilation":
var G__42580 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42581 = cause_type;
var G__42582 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42583 = loc;
var G__42584 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42580,G__42581,G__42582,G__42583,G__42584) : format.call(null, G__42580,G__42581,G__42582,G__42583,G__42584));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42587 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42588 = symbol;
var G__42589 = loc;
var G__42590 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42591_42834 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42592_42835 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42593_42836 = true;
var _STAR_print_fn_STAR__temp_val__42594_42837 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42593_42836);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42594_42837);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42547_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42547_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42592_42835);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42591_42834);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42587,G__42588,G__42589,G__42590) : format.call(null, G__42587,G__42588,G__42589,G__42590));
} else {
var G__42597 = "Execution error%s at %s(%s).\n%s\n";
var G__42598 = cause_type;
var G__42599 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42600 = loc;
var G__42601 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42597,G__42598,G__42599,G__42600,G__42601) : format.call(null, G__42597,G__42598,G__42599,G__42600,G__42601));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42559__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
