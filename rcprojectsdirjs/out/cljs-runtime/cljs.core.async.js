goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37559 = (function (f,blockable,meta37560){
this.f = f;
this.blockable = blockable;
this.meta37560 = meta37560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37561,meta37560__$1){
var self__ = this;
var _37561__$1 = this;
return (new cljs.core.async.t_cljs$core$async37559(self__.f,self__.blockable,meta37560__$1));
}));

(cljs.core.async.t_cljs$core$async37559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37561){
var self__ = this;
var _37561__$1 = this;
return self__.meta37560;
}));

(cljs.core.async.t_cljs$core$async37559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37560","meta37560",-41226207,null)], null);
}));

(cljs.core.async.t_cljs$core$async37559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37559");

(cljs.core.async.t_cljs$core$async37559.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37559.
 */
cljs.core.async.__GT_t_cljs$core$async37559 = (function cljs$core$async$__GT_t_cljs$core$async37559(f,blockable,meta37560){
return (new cljs.core.async.t_cljs$core$async37559(f,blockable,meta37560));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37550 = arguments.length;
switch (G__37550) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async37559(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37575 = arguments.length;
switch (G__37575) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37584 = arguments.length;
switch (G__37584) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37595 = arguments.length;
switch (G__37595) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_40726 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40726) : fn1.call(null, val_40726));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40726) : fn1.call(null, val_40726));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37611 = arguments.length;
switch (G__37611) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___40731 = n;
var x_40732 = (0);
while(true){
if((x_40732 < n__5633__auto___40731)){
(a[x_40732] = x_40732);

var G__40733 = (x_40732 + (1));
x_40732 = G__40733;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37612 = (function (flag,meta37613){
this.flag = flag;
this.meta37613 = meta37613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37614,meta37613__$1){
var self__ = this;
var _37614__$1 = this;
return (new cljs.core.async.t_cljs$core$async37612(self__.flag,meta37613__$1));
}));

(cljs.core.async.t_cljs$core$async37612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37614){
var self__ = this;
var _37614__$1 = this;
return self__.meta37613;
}));

(cljs.core.async.t_cljs$core$async37612.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37612.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37613","meta37613",-1773814536,null)], null);
}));

(cljs.core.async.t_cljs$core$async37612.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37612");

(cljs.core.async.t_cljs$core$async37612.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37612");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37612.
 */
cljs.core.async.__GT_t_cljs$core$async37612 = (function cljs$core$async$__GT_t_cljs$core$async37612(flag,meta37613){
return (new cljs.core.async.t_cljs$core$async37612(flag,meta37613));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async37612(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37638 = (function (flag,cb,meta37639){
this.flag = flag;
this.cb = cb;
this.meta37639 = meta37639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37640,meta37639__$1){
var self__ = this;
var _37640__$1 = this;
return (new cljs.core.async.t_cljs$core$async37638(self__.flag,self__.cb,meta37639__$1));
}));

(cljs.core.async.t_cljs$core$async37638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37640){
var self__ = this;
var _37640__$1 = this;
return self__.meta37639;
}));

(cljs.core.async.t_cljs$core$async37638.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37639","meta37639",1801298938,null)], null);
}));

(cljs.core.async.t_cljs$core$async37638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37638");

(cljs.core.async.t_cljs$core$async37638.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37638.
 */
cljs.core.async.__GT_t_cljs$core$async37638 = (function cljs$core$async$__GT_t_cljs$core$async37638(flag,cb,meta37639){
return (new cljs.core.async.t_cljs$core$async37638(flag,cb,meta37639));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async37638(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37641_SHARP_){
var G__37646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37641_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37646) : fret.call(null, G__37646));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37642_SHARP_){
var G__37648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37642_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37648) : fret.call(null, G__37648));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40773 = (i + (1));
i = G__40773;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40775 = arguments.length;
var i__5767__auto___40778 = (0);
while(true){
if((i__5767__auto___40778 < len__5766__auto___40775)){
args__5772__auto__.push((arguments[i__5767__auto___40778]));

var G__40779 = (i__5767__auto___40778 + (1));
i__5767__auto___40778 = G__40779;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37651){
var map__37652 = p__37651;
var map__37652__$1 = cljs.core.__destructure_map(map__37652);
var opts = map__37652__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37649){
var G__37650 = cljs.core.first(seq37649);
var seq37649__$1 = cljs.core.next(seq37649);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37650,seq37649__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37654 = arguments.length;
switch (G__37654) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37390__auto___40801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_37769){
var state_val_37770 = (state_37769[(1)]);
if((state_val_37770 === (7))){
var inst_37765 = (state_37769[(2)]);
var state_37769__$1 = state_37769;
var statearr_37776_40802 = state_37769__$1;
(statearr_37776_40802[(2)] = inst_37765);

(statearr_37776_40802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37770 === (1))){
var state_37769__$1 = state_37769;
var statearr_37777_40803 = state_37769__$1;
(statearr_37777_40803[(2)] = null);

(statearr_37777_40803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37770 === (4))){
var inst_37744 = (state_37769[(7)]);
var inst_37744__$1 = (state_37769[(2)]);
var inst_37749 = (inst_37744__$1 == null);
var state_37769__$1 = (function (){var statearr_37794 = state_37769;
(statearr_37794[(7)] = inst_37744__$1);

return statearr_37794;
})();
if(cljs.core.truth_(inst_37749)){
var statearr_37797_40808 = state_37769__$1;
(statearr_37797_40808[(1)] = (5));

} else {
var statearr_37800_40809 = state_37769__$1;
(statearr_37800_40809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37770 === (13))){
var state_37769__$1 = state_37769;
var statearr_37806_40810 = state_37769__$1;
(statearr_37806_40810[(2)] = null);

(statearr_37806_40810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37770 === (6))){
var inst_37744 = (state_37769[(7)]);
var state_37769__$1 = state_37769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37769__$1,(11),to,inst_37744);
} else {
if((state_val_37770 === (3))){
var inst_37767 = (state_37769[(2)]);
var state_37769__$1 = state_37769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37769__$1,inst_37767);
} else {
if((state_val_37770 === (12))){
var state_37769__$1 = state_37769;
var statearr_37816_40813 = state_37769__$1;
(statearr_37816_40813[(2)] = null);

(statearr_37816_40813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37770 === (2))){
var state_37769__$1 = state_37769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37769__$1,(4),from);
} else {
if((state_val_37770 === (11))){
var inst_37758 = (state_37769[(2)]);
var state_37769__$1 = state_37769;
if(cljs.core.truth_(inst_37758)){
var statearr_37821_40815 = state_37769__$1;
(statearr_37821_40815[(1)] = (12));

} else {
var statearr_37823_40816 = state_37769__$1;
(statearr_37823_40816[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37770 === (9))){
var state_37769__$1 = state_37769;
var statearr_37826_40817 = state_37769__$1;
(statearr_37826_40817[(2)] = null);

(statearr_37826_40817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37770 === (5))){
var state_37769__$1 = state_37769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37828_40818 = state_37769__$1;
(statearr_37828_40818[(1)] = (8));

} else {
var statearr_37829_40819 = state_37769__$1;
(statearr_37829_40819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37770 === (14))){
var inst_37763 = (state_37769[(2)]);
var state_37769__$1 = state_37769;
var statearr_37831_40820 = state_37769__$1;
(statearr_37831_40820[(2)] = inst_37763);

(statearr_37831_40820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37770 === (10))){
var inst_37755 = (state_37769[(2)]);
var state_37769__$1 = state_37769;
var statearr_37833_40821 = state_37769__$1;
(statearr_37833_40821[(2)] = inst_37755);

(statearr_37833_40821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37770 === (8))){
var inst_37752 = cljs.core.async.close_BANG_(to);
var state_37769__$1 = state_37769;
var statearr_37836_40822 = state_37769__$1;
(statearr_37836_40822[(2)] = inst_37752);

(statearr_37836_40822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36740__auto__ = null;
var cljs$core$async$state_machine__36740__auto____0 = (function (){
var statearr_37842 = [null,null,null,null,null,null,null,null];
(statearr_37842[(0)] = cljs$core$async$state_machine__36740__auto__);

(statearr_37842[(1)] = (1));

return statearr_37842;
});
var cljs$core$async$state_machine__36740__auto____1 = (function (state_37769){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_37769);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e37845){var ex__36743__auto__ = e37845;
var statearr_37846_40826 = state_37769;
(statearr_37846_40826[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_37769[(4)]))){
var statearr_37849_40827 = state_37769;
(statearr_37849_40827[(1)] = cljs.core.first((state_37769[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40828 = state_37769;
state_37769 = G__40828;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$state_machine__36740__auto__ = function(state_37769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36740__auto____1.call(this,state_37769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36740__auto____0;
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36740__auto____1;
return cljs$core$async$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_37855 = f__37391__auto__();
(statearr_37855[(6)] = c__37390__auto___40801);

return statearr_37855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__37876){
var vec__37877 = p__37876;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37877,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37877,(1),null);
var job = vec__37877;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37390__auto___40829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_37893){
var state_val_37894 = (state_37893[(1)]);
if((state_val_37894 === (1))){
var state_37893__$1 = state_37893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37893__$1,(2),res,v);
} else {
if((state_val_37894 === (2))){
var inst_37890 = (state_37893[(2)]);
var inst_37891 = cljs.core.async.close_BANG_(res);
var state_37893__$1 = (function (){var statearr_37896 = state_37893;
(statearr_37896[(7)] = inst_37890);

return statearr_37896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37893__$1,inst_37891);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0 = (function (){
var statearr_37898 = [null,null,null,null,null,null,null,null];
(statearr_37898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__);

(statearr_37898[(1)] = (1));

return statearr_37898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1 = (function (state_37893){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_37893);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e37901){var ex__36743__auto__ = e37901;
var statearr_37902_40830 = state_37893;
(statearr_37902_40830[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_37893[(4)]))){
var statearr_37903_40831 = state_37893;
(statearr_37903_40831[(1)] = cljs.core.first((state_37893[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40832 = state_37893;
state_37893 = G__40832;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__ = function(state_37893){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1.call(this,state_37893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_37904 = f__37391__auto__();
(statearr_37904[(6)] = c__37390__auto___40829);

return statearr_37904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37909){
var vec__37910 = p__37909;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37910,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37910,(1),null);
var job = vec__37910;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___40833 = n;
var __40834 = (0);
while(true){
if((__40834 < n__5633__auto___40833)){
var G__37913_40835 = type;
var G__37913_40836__$1 = (((G__37913_40835 instanceof cljs.core.Keyword))?G__37913_40835.fqn:null);
switch (G__37913_40836__$1) {
case "compute":
var c__37390__auto___40838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40834,c__37390__auto___40838,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async){
return (function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = ((function (__40834,c__37390__auto___40838,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async){
return (function (state_37926){
var state_val_37927 = (state_37926[(1)]);
if((state_val_37927 === (1))){
var state_37926__$1 = state_37926;
var statearr_37929_40841 = state_37926__$1;
(statearr_37929_40841[(2)] = null);

(statearr_37929_40841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (2))){
var state_37926__$1 = state_37926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37926__$1,(4),jobs);
} else {
if((state_val_37927 === (3))){
var inst_37924 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37926__$1,inst_37924);
} else {
if((state_val_37927 === (4))){
var inst_37916 = (state_37926[(2)]);
var inst_37917 = process__$1(inst_37916);
var state_37926__$1 = state_37926;
if(cljs.core.truth_(inst_37917)){
var statearr_37931_40842 = state_37926__$1;
(statearr_37931_40842[(1)] = (5));

} else {
var statearr_37932_40843 = state_37926__$1;
(statearr_37932_40843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (5))){
var state_37926__$1 = state_37926;
var statearr_37933_40844 = state_37926__$1;
(statearr_37933_40844[(2)] = null);

(statearr_37933_40844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (6))){
var state_37926__$1 = state_37926;
var statearr_37934_40845 = state_37926__$1;
(statearr_37934_40845[(2)] = null);

(statearr_37934_40845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37927 === (7))){
var inst_37922 = (state_37926[(2)]);
var state_37926__$1 = state_37926;
var statearr_37935_40846 = state_37926__$1;
(statearr_37935_40846[(2)] = inst_37922);

(statearr_37935_40846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40834,c__37390__auto___40838,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async))
;
return ((function (__40834,switch__36739__auto__,c__37390__auto___40838,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0 = (function (){
var statearr_37936 = [null,null,null,null,null,null,null];
(statearr_37936[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__);

(statearr_37936[(1)] = (1));

return statearr_37936;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1 = (function (state_37926){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_37926);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e37937){var ex__36743__auto__ = e37937;
var statearr_37939_40847 = state_37926;
(statearr_37939_40847[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_37926[(4)]))){
var statearr_37940_40848 = state_37926;
(statearr_37940_40848[(1)] = cljs.core.first((state_37926[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40849 = state_37926;
state_37926 = G__40849;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__ = function(state_37926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1.call(this,state_37926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__;
})()
;})(__40834,switch__36739__auto__,c__37390__auto___40838,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async))
})();
var state__37392__auto__ = (function (){var statearr_37941 = f__37391__auto__();
(statearr_37941[(6)] = c__37390__auto___40838);

return statearr_37941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
});})(__40834,c__37390__auto___40838,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async))
);


break;
case "async":
var c__37390__auto___40853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40834,c__37390__auto___40853,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async){
return (function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = ((function (__40834,c__37390__auto___40853,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async){
return (function (state_37954){
var state_val_37955 = (state_37954[(1)]);
if((state_val_37955 === (1))){
var state_37954__$1 = state_37954;
var statearr_37956_40855 = state_37954__$1;
(statearr_37956_40855[(2)] = null);

(statearr_37956_40855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (2))){
var state_37954__$1 = state_37954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37954__$1,(4),jobs);
} else {
if((state_val_37955 === (3))){
var inst_37952 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37954__$1,inst_37952);
} else {
if((state_val_37955 === (4))){
var inst_37944 = (state_37954[(2)]);
var inst_37945 = async(inst_37944);
var state_37954__$1 = state_37954;
if(cljs.core.truth_(inst_37945)){
var statearr_37960_40862 = state_37954__$1;
(statearr_37960_40862[(1)] = (5));

} else {
var statearr_37961_40864 = state_37954__$1;
(statearr_37961_40864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (5))){
var state_37954__$1 = state_37954;
var statearr_37963_40869 = state_37954__$1;
(statearr_37963_40869[(2)] = null);

(statearr_37963_40869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (6))){
var state_37954__$1 = state_37954;
var statearr_37965_40874 = state_37954__$1;
(statearr_37965_40874[(2)] = null);

(statearr_37965_40874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (7))){
var inst_37950 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
var statearr_37966_40884 = state_37954__$1;
(statearr_37966_40884[(2)] = inst_37950);

(statearr_37966_40884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40834,c__37390__auto___40853,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async))
;
return ((function (__40834,switch__36739__auto__,c__37390__auto___40853,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0 = (function (){
var statearr_37972 = [null,null,null,null,null,null,null];
(statearr_37972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__);

(statearr_37972[(1)] = (1));

return statearr_37972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1 = (function (state_37954){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_37954);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e37973){var ex__36743__auto__ = e37973;
var statearr_37975_40887 = state_37954;
(statearr_37975_40887[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_37954[(4)]))){
var statearr_37976_40889 = state_37954;
(statearr_37976_40889[(1)] = cljs.core.first((state_37954[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40891 = state_37954;
state_37954 = G__40891;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__ = function(state_37954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1.call(this,state_37954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__;
})()
;})(__40834,switch__36739__auto__,c__37390__auto___40853,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async))
})();
var state__37392__auto__ = (function (){var statearr_37981 = f__37391__auto__();
(statearr_37981[(6)] = c__37390__auto___40853);

return statearr_37981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
});})(__40834,c__37390__auto___40853,G__37913_40835,G__37913_40836__$1,n__5633__auto___40833,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37913_40836__$1)].join('')));

}

var G__40892 = (__40834 + (1));
__40834 = G__40892;
continue;
} else {
}
break;
}

var c__37390__auto___40894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_38024){
var state_val_38025 = (state_38024[(1)]);
if((state_val_38025 === (7))){
var inst_38017 = (state_38024[(2)]);
var state_38024__$1 = state_38024;
var statearr_38045_40895 = state_38024__$1;
(statearr_38045_40895[(2)] = inst_38017);

(statearr_38045_40895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (1))){
var state_38024__$1 = state_38024;
var statearr_38048_40896 = state_38024__$1;
(statearr_38048_40896[(2)] = null);

(statearr_38048_40896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (4))){
var inst_37985 = (state_38024[(7)]);
var inst_37985__$1 = (state_38024[(2)]);
var inst_37987 = (inst_37985__$1 == null);
var state_38024__$1 = (function (){var statearr_38055 = state_38024;
(statearr_38055[(7)] = inst_37985__$1);

return statearr_38055;
})();
if(cljs.core.truth_(inst_37987)){
var statearr_38057_40900 = state_38024__$1;
(statearr_38057_40900[(1)] = (5));

} else {
var statearr_38066_40901 = state_38024__$1;
(statearr_38066_40901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (6))){
var inst_37985 = (state_38024[(7)]);
var inst_37991 = (state_38024[(8)]);
var inst_37991__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38001 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38007 = [inst_37985,inst_37991__$1];
var inst_38008 = (new cljs.core.PersistentVector(null,2,(5),inst_38001,inst_38007,null));
var state_38024__$1 = (function (){var statearr_38069 = state_38024;
(statearr_38069[(8)] = inst_37991__$1);

return statearr_38069;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38024__$1,(8),jobs,inst_38008);
} else {
if((state_val_38025 === (3))){
var inst_38019 = (state_38024[(2)]);
var state_38024__$1 = state_38024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38024__$1,inst_38019);
} else {
if((state_val_38025 === (2))){
var state_38024__$1 = state_38024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38024__$1,(4),from);
} else {
if((state_val_38025 === (9))){
var inst_38013 = (state_38024[(2)]);
var state_38024__$1 = (function (){var statearr_38070 = state_38024;
(statearr_38070[(9)] = inst_38013);

return statearr_38070;
})();
var statearr_38071_40905 = state_38024__$1;
(statearr_38071_40905[(2)] = null);

(statearr_38071_40905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (5))){
var inst_37989 = cljs.core.async.close_BANG_(jobs);
var state_38024__$1 = state_38024;
var statearr_38074_40907 = state_38024__$1;
(statearr_38074_40907[(2)] = inst_37989);

(statearr_38074_40907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38025 === (8))){
var inst_37991 = (state_38024[(8)]);
var inst_38010 = (state_38024[(2)]);
var state_38024__$1 = (function (){var statearr_38076 = state_38024;
(statearr_38076[(10)] = inst_38010);

return statearr_38076;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38024__$1,(9),results,inst_37991);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0 = (function (){
var statearr_38078 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__);

(statearr_38078[(1)] = (1));

return statearr_38078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1 = (function (state_38024){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_38024);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e38079){var ex__36743__auto__ = e38079;
var statearr_38080_40938 = state_38024;
(statearr_38080_40938[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_38024[(4)]))){
var statearr_38083_40947 = state_38024;
(statearr_38083_40947[(1)] = cljs.core.first((state_38024[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40949 = state_38024;
state_38024 = G__40949;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__ = function(state_38024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1.call(this,state_38024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_38086 = f__37391__auto__();
(statearr_38086[(6)] = c__37390__auto___40894);

return statearr_38086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


var c__37390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_38133){
var state_val_38135 = (state_38133[(1)]);
if((state_val_38135 === (7))){
var inst_38128 = (state_38133[(2)]);
var state_38133__$1 = state_38133;
var statearr_38139_40959 = state_38133__$1;
(statearr_38139_40959[(2)] = inst_38128);

(statearr_38139_40959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (20))){
var state_38133__$1 = state_38133;
var statearr_38140_40961 = state_38133__$1;
(statearr_38140_40961[(2)] = null);

(statearr_38140_40961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (1))){
var state_38133__$1 = state_38133;
var statearr_38141_40962 = state_38133__$1;
(statearr_38141_40962[(2)] = null);

(statearr_38141_40962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (4))){
var inst_38090 = (state_38133[(7)]);
var inst_38090__$1 = (state_38133[(2)]);
var inst_38091 = (inst_38090__$1 == null);
var state_38133__$1 = (function (){var statearr_38143 = state_38133;
(statearr_38143[(7)] = inst_38090__$1);

return statearr_38143;
})();
if(cljs.core.truth_(inst_38091)){
var statearr_38145_40963 = state_38133__$1;
(statearr_38145_40963[(1)] = (5));

} else {
var statearr_38146_40965 = state_38133__$1;
(statearr_38146_40965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (15))){
var inst_38106 = (state_38133[(8)]);
var state_38133__$1 = state_38133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38133__$1,(18),to,inst_38106);
} else {
if((state_val_38135 === (21))){
var inst_38122 = (state_38133[(2)]);
var state_38133__$1 = state_38133;
var statearr_38151_40969 = state_38133__$1;
(statearr_38151_40969[(2)] = inst_38122);

(statearr_38151_40969[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (13))){
var inst_38125 = (state_38133[(2)]);
var state_38133__$1 = (function (){var statearr_38152 = state_38133;
(statearr_38152[(9)] = inst_38125);

return statearr_38152;
})();
var statearr_38153_40971 = state_38133__$1;
(statearr_38153_40971[(2)] = null);

(statearr_38153_40971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (6))){
var inst_38090 = (state_38133[(7)]);
var state_38133__$1 = state_38133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38133__$1,(11),inst_38090);
} else {
if((state_val_38135 === (17))){
var inst_38115 = (state_38133[(2)]);
var state_38133__$1 = state_38133;
if(cljs.core.truth_(inst_38115)){
var statearr_38154_40972 = state_38133__$1;
(statearr_38154_40972[(1)] = (19));

} else {
var statearr_38155_40973 = state_38133__$1;
(statearr_38155_40973[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (3))){
var inst_38130 = (state_38133[(2)]);
var state_38133__$1 = state_38133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38133__$1,inst_38130);
} else {
if((state_val_38135 === (12))){
var inst_38103 = (state_38133[(10)]);
var state_38133__$1 = state_38133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38133__$1,(14),inst_38103);
} else {
if((state_val_38135 === (2))){
var state_38133__$1 = state_38133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38133__$1,(4),results);
} else {
if((state_val_38135 === (19))){
var state_38133__$1 = state_38133;
var statearr_38157_40978 = state_38133__$1;
(statearr_38157_40978[(2)] = null);

(statearr_38157_40978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (11))){
var inst_38103 = (state_38133[(2)]);
var state_38133__$1 = (function (){var statearr_38158 = state_38133;
(statearr_38158[(10)] = inst_38103);

return statearr_38158;
})();
var statearr_38161_40982 = state_38133__$1;
(statearr_38161_40982[(2)] = null);

(statearr_38161_40982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (9))){
var state_38133__$1 = state_38133;
var statearr_38164_40992 = state_38133__$1;
(statearr_38164_40992[(2)] = null);

(statearr_38164_40992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (5))){
var state_38133__$1 = state_38133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38166_40998 = state_38133__$1;
(statearr_38166_40998[(1)] = (8));

} else {
var statearr_38167_41002 = state_38133__$1;
(statearr_38167_41002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (14))){
var inst_38109 = (state_38133[(11)]);
var inst_38106 = (state_38133[(8)]);
var inst_38106__$1 = (state_38133[(2)]);
var inst_38108 = (inst_38106__$1 == null);
var inst_38109__$1 = cljs.core.not(inst_38108);
var state_38133__$1 = (function (){var statearr_38169 = state_38133;
(statearr_38169[(11)] = inst_38109__$1);

(statearr_38169[(8)] = inst_38106__$1);

return statearr_38169;
})();
if(inst_38109__$1){
var statearr_38170_41007 = state_38133__$1;
(statearr_38170_41007[(1)] = (15));

} else {
var statearr_38171_41012 = state_38133__$1;
(statearr_38171_41012[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (16))){
var inst_38109 = (state_38133[(11)]);
var state_38133__$1 = state_38133;
var statearr_38176_41014 = state_38133__$1;
(statearr_38176_41014[(2)] = inst_38109);

(statearr_38176_41014[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (10))){
var inst_38100 = (state_38133[(2)]);
var state_38133__$1 = state_38133;
var statearr_38177_41020 = state_38133__$1;
(statearr_38177_41020[(2)] = inst_38100);

(statearr_38177_41020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (18))){
var inst_38112 = (state_38133[(2)]);
var state_38133__$1 = state_38133;
var statearr_38178_41032 = state_38133__$1;
(statearr_38178_41032[(2)] = inst_38112);

(statearr_38178_41032[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38135 === (8))){
var inst_38097 = cljs.core.async.close_BANG_(to);
var state_38133__$1 = state_38133;
var statearr_38180_41036 = state_38133__$1;
(statearr_38180_41036[(2)] = inst_38097);

(statearr_38180_41036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0 = (function (){
var statearr_38184 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38184[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__);

(statearr_38184[(1)] = (1));

return statearr_38184;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1 = (function (state_38133){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_38133);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e38187){var ex__36743__auto__ = e38187;
var statearr_38188_41047 = state_38133;
(statearr_38188_41047[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_38133[(4)]))){
var statearr_38190_41048 = state_38133;
(statearr_38190_41048[(1)] = cljs.core.first((state_38133[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41059 = state_38133;
state_38133 = G__41059;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__ = function(state_38133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1.call(this,state_38133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_38197 = f__37391__auto__();
(statearr_38197[(6)] = c__37390__auto__);

return statearr_38197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));

return c__37390__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38204 = arguments.length;
switch (G__38204) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38214 = arguments.length;
switch (G__38214) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38241 = arguments.length;
switch (G__38241) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37390__auto___41131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_38279){
var state_val_38280 = (state_38279[(1)]);
if((state_val_38280 === (7))){
var inst_38273 = (state_38279[(2)]);
var state_38279__$1 = state_38279;
var statearr_38289_41132 = state_38279__$1;
(statearr_38289_41132[(2)] = inst_38273);

(statearr_38289_41132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38280 === (1))){
var state_38279__$1 = state_38279;
var statearr_38291_41136 = state_38279__$1;
(statearr_38291_41136[(2)] = null);

(statearr_38291_41136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38280 === (4))){
var inst_38253 = (state_38279[(7)]);
var inst_38253__$1 = (state_38279[(2)]);
var inst_38254 = (inst_38253__$1 == null);
var state_38279__$1 = (function (){var statearr_38296 = state_38279;
(statearr_38296[(7)] = inst_38253__$1);

return statearr_38296;
})();
if(cljs.core.truth_(inst_38254)){
var statearr_38299_41137 = state_38279__$1;
(statearr_38299_41137[(1)] = (5));

} else {
var statearr_38300_41138 = state_38279__$1;
(statearr_38300_41138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38280 === (13))){
var state_38279__$1 = state_38279;
var statearr_38301_41139 = state_38279__$1;
(statearr_38301_41139[(2)] = null);

(statearr_38301_41139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38280 === (6))){
var inst_38253 = (state_38279[(7)]);
var inst_38259 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38253) : p.call(null, inst_38253));
var state_38279__$1 = state_38279;
if(cljs.core.truth_(inst_38259)){
var statearr_38303_41140 = state_38279__$1;
(statearr_38303_41140[(1)] = (9));

} else {
var statearr_38304_41141 = state_38279__$1;
(statearr_38304_41141[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38280 === (3))){
var inst_38276 = (state_38279[(2)]);
var state_38279__$1 = state_38279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38279__$1,inst_38276);
} else {
if((state_val_38280 === (12))){
var state_38279__$1 = state_38279;
var statearr_38309_41142 = state_38279__$1;
(statearr_38309_41142[(2)] = null);

(statearr_38309_41142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38280 === (2))){
var state_38279__$1 = state_38279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38279__$1,(4),ch);
} else {
if((state_val_38280 === (11))){
var inst_38253 = (state_38279[(7)]);
var inst_38263 = (state_38279[(2)]);
var state_38279__$1 = state_38279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38279__$1,(8),inst_38263,inst_38253);
} else {
if((state_val_38280 === (9))){
var state_38279__$1 = state_38279;
var statearr_38310_41143 = state_38279__$1;
(statearr_38310_41143[(2)] = tc);

(statearr_38310_41143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38280 === (5))){
var inst_38256 = cljs.core.async.close_BANG_(tc);
var inst_38257 = cljs.core.async.close_BANG_(fc);
var state_38279__$1 = (function (){var statearr_38312 = state_38279;
(statearr_38312[(8)] = inst_38256);

return statearr_38312;
})();
var statearr_38313_41144 = state_38279__$1;
(statearr_38313_41144[(2)] = inst_38257);

(statearr_38313_41144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38280 === (14))){
var inst_38271 = (state_38279[(2)]);
var state_38279__$1 = state_38279;
var statearr_38315_41157 = state_38279__$1;
(statearr_38315_41157[(2)] = inst_38271);

(statearr_38315_41157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38280 === (10))){
var state_38279__$1 = state_38279;
var statearr_38316_41158 = state_38279__$1;
(statearr_38316_41158[(2)] = fc);

(statearr_38316_41158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38280 === (8))){
var inst_38265 = (state_38279[(2)]);
var state_38279__$1 = state_38279;
if(cljs.core.truth_(inst_38265)){
var statearr_38317_41159 = state_38279__$1;
(statearr_38317_41159[(1)] = (12));

} else {
var statearr_38318_41160 = state_38279__$1;
(statearr_38318_41160[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36740__auto__ = null;
var cljs$core$async$state_machine__36740__auto____0 = (function (){
var statearr_38321 = [null,null,null,null,null,null,null,null,null];
(statearr_38321[(0)] = cljs$core$async$state_machine__36740__auto__);

(statearr_38321[(1)] = (1));

return statearr_38321;
});
var cljs$core$async$state_machine__36740__auto____1 = (function (state_38279){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_38279);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e38322){var ex__36743__auto__ = e38322;
var statearr_38324_41161 = state_38279;
(statearr_38324_41161[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_38279[(4)]))){
var statearr_38325_41162 = state_38279;
(statearr_38325_41162[(1)] = cljs.core.first((state_38279[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41166 = state_38279;
state_38279 = G__41166;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$state_machine__36740__auto__ = function(state_38279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36740__auto____1.call(this,state_38279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36740__auto____0;
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36740__auto____1;
return cljs$core$async$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_38326 = f__37391__auto__();
(statearr_38326[(6)] = c__37390__auto___41131);

return statearr_38326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_38358){
var state_val_38359 = (state_38358[(1)]);
if((state_val_38359 === (7))){
var inst_38352 = (state_38358[(2)]);
var state_38358__$1 = state_38358;
var statearr_38373_41167 = state_38358__$1;
(statearr_38373_41167[(2)] = inst_38352);

(statearr_38373_41167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38359 === (1))){
var inst_38334 = init;
var inst_38336 = inst_38334;
var state_38358__$1 = (function (){var statearr_38380 = state_38358;
(statearr_38380[(7)] = inst_38336);

return statearr_38380;
})();
var statearr_38383_41168 = state_38358__$1;
(statearr_38383_41168[(2)] = null);

(statearr_38383_41168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38359 === (4))){
var inst_38339 = (state_38358[(8)]);
var inst_38339__$1 = (state_38358[(2)]);
var inst_38340 = (inst_38339__$1 == null);
var state_38358__$1 = (function (){var statearr_38386 = state_38358;
(statearr_38386[(8)] = inst_38339__$1);

return statearr_38386;
})();
if(cljs.core.truth_(inst_38340)){
var statearr_38389_41169 = state_38358__$1;
(statearr_38389_41169[(1)] = (5));

} else {
var statearr_38391_41170 = state_38358__$1;
(statearr_38391_41170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38359 === (6))){
var inst_38339 = (state_38358[(8)]);
var inst_38336 = (state_38358[(7)]);
var inst_38343 = (state_38358[(9)]);
var inst_38343__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38336,inst_38339) : f.call(null, inst_38336,inst_38339));
var inst_38344 = cljs.core.reduced_QMARK_(inst_38343__$1);
var state_38358__$1 = (function (){var statearr_38392 = state_38358;
(statearr_38392[(9)] = inst_38343__$1);

return statearr_38392;
})();
if(inst_38344){
var statearr_38393_41173 = state_38358__$1;
(statearr_38393_41173[(1)] = (8));

} else {
var statearr_38394_41175 = state_38358__$1;
(statearr_38394_41175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38359 === (3))){
var inst_38356 = (state_38358[(2)]);
var state_38358__$1 = state_38358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38358__$1,inst_38356);
} else {
if((state_val_38359 === (2))){
var state_38358__$1 = state_38358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38358__$1,(4),ch);
} else {
if((state_val_38359 === (9))){
var inst_38343 = (state_38358[(9)]);
var inst_38336 = inst_38343;
var state_38358__$1 = (function (){var statearr_38398 = state_38358;
(statearr_38398[(7)] = inst_38336);

return statearr_38398;
})();
var statearr_38399_41176 = state_38358__$1;
(statearr_38399_41176[(2)] = null);

(statearr_38399_41176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38359 === (5))){
var inst_38336 = (state_38358[(7)]);
var state_38358__$1 = state_38358;
var statearr_38400_41178 = state_38358__$1;
(statearr_38400_41178[(2)] = inst_38336);

(statearr_38400_41178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38359 === (10))){
var inst_38350 = (state_38358[(2)]);
var state_38358__$1 = state_38358;
var statearr_38401_41179 = state_38358__$1;
(statearr_38401_41179[(2)] = inst_38350);

(statearr_38401_41179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38359 === (8))){
var inst_38343 = (state_38358[(9)]);
var inst_38346 = cljs.core.deref(inst_38343);
var state_38358__$1 = state_38358;
var statearr_38402_41180 = state_38358__$1;
(statearr_38402_41180[(2)] = inst_38346);

(statearr_38402_41180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36740__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36740__auto____0 = (function (){
var statearr_38406 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38406[(0)] = cljs$core$async$reduce_$_state_machine__36740__auto__);

(statearr_38406[(1)] = (1));

return statearr_38406;
});
var cljs$core$async$reduce_$_state_machine__36740__auto____1 = (function (state_38358){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_38358);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e38408){var ex__36743__auto__ = e38408;
var statearr_38409_41182 = state_38358;
(statearr_38409_41182[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_38358[(4)]))){
var statearr_38412_41184 = state_38358;
(statearr_38412_41184[(1)] = cljs.core.first((state_38358[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41185 = state_38358;
state_38358 = G__41185;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36740__auto__ = function(state_38358){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36740__auto____1.call(this,state_38358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36740__auto____0;
cljs$core$async$reduce_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36740__auto____1;
return cljs$core$async$reduce_$_state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_38413 = f__37391__auto__();
(statearr_38413[(6)] = c__37390__auto__);

return statearr_38413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));

return c__37390__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__37390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_38421){
var state_val_38422 = (state_38421[(1)]);
if((state_val_38422 === (1))){
var inst_38416 = cljs.core.async.reduce(f__$1,init,ch);
var state_38421__$1 = state_38421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38421__$1,(2),inst_38416);
} else {
if((state_val_38422 === (2))){
var inst_38418 = (state_38421[(2)]);
var inst_38419 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38418) : f__$1.call(null, inst_38418));
var state_38421__$1 = state_38421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38421__$1,inst_38419);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36740__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36740__auto____0 = (function (){
var statearr_38430 = [null,null,null,null,null,null,null];
(statearr_38430[(0)] = cljs$core$async$transduce_$_state_machine__36740__auto__);

(statearr_38430[(1)] = (1));

return statearr_38430;
});
var cljs$core$async$transduce_$_state_machine__36740__auto____1 = (function (state_38421){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_38421);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e38431){var ex__36743__auto__ = e38431;
var statearr_38434_41188 = state_38421;
(statearr_38434_41188[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_38421[(4)]))){
var statearr_38435_41189 = state_38421;
(statearr_38435_41189[(1)] = cljs.core.first((state_38421[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41193 = state_38421;
state_38421 = G__41193;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36740__auto__ = function(state_38421){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36740__auto____1.call(this,state_38421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36740__auto____0;
cljs$core$async$transduce_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36740__auto____1;
return cljs$core$async$transduce_$_state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_38441 = f__37391__auto__();
(statearr_38441[(6)] = c__37390__auto__);

return statearr_38441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));

return c__37390__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__38446 = arguments.length;
switch (G__38446) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_38486){
var state_val_38487 = (state_38486[(1)]);
if((state_val_38487 === (7))){
var inst_38464 = (state_38486[(2)]);
var state_38486__$1 = state_38486;
var statearr_38489_41208 = state_38486__$1;
(statearr_38489_41208[(2)] = inst_38464);

(statearr_38489_41208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38487 === (1))){
var inst_38457 = cljs.core.seq(coll);
var inst_38459 = inst_38457;
var state_38486__$1 = (function (){var statearr_38497 = state_38486;
(statearr_38497[(7)] = inst_38459);

return statearr_38497;
})();
var statearr_38498_41213 = state_38486__$1;
(statearr_38498_41213[(2)] = null);

(statearr_38498_41213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38487 === (4))){
var inst_38459 = (state_38486[(7)]);
var inst_38462 = cljs.core.first(inst_38459);
var state_38486__$1 = state_38486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38486__$1,(7),ch,inst_38462);
} else {
if((state_val_38487 === (13))){
var inst_38476 = (state_38486[(2)]);
var state_38486__$1 = state_38486;
var statearr_38505_41226 = state_38486__$1;
(statearr_38505_41226[(2)] = inst_38476);

(statearr_38505_41226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38487 === (6))){
var inst_38467 = (state_38486[(2)]);
var state_38486__$1 = state_38486;
if(cljs.core.truth_(inst_38467)){
var statearr_38506_41228 = state_38486__$1;
(statearr_38506_41228[(1)] = (8));

} else {
var statearr_38512_41230 = state_38486__$1;
(statearr_38512_41230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38487 === (3))){
var inst_38480 = (state_38486[(2)]);
var state_38486__$1 = state_38486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38486__$1,inst_38480);
} else {
if((state_val_38487 === (12))){
var state_38486__$1 = state_38486;
var statearr_38516_41233 = state_38486__$1;
(statearr_38516_41233[(2)] = null);

(statearr_38516_41233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38487 === (2))){
var inst_38459 = (state_38486[(7)]);
var state_38486__$1 = state_38486;
if(cljs.core.truth_(inst_38459)){
var statearr_38518_41234 = state_38486__$1;
(statearr_38518_41234[(1)] = (4));

} else {
var statearr_38519_41235 = state_38486__$1;
(statearr_38519_41235[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38487 === (11))){
var inst_38473 = cljs.core.async.close_BANG_(ch);
var state_38486__$1 = state_38486;
var statearr_38528_41236 = state_38486__$1;
(statearr_38528_41236[(2)] = inst_38473);

(statearr_38528_41236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38487 === (9))){
var state_38486__$1 = state_38486;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38529_41237 = state_38486__$1;
(statearr_38529_41237[(1)] = (11));

} else {
var statearr_38531_41238 = state_38486__$1;
(statearr_38531_41238[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38487 === (5))){
var inst_38459 = (state_38486[(7)]);
var state_38486__$1 = state_38486;
var statearr_38539_41240 = state_38486__$1;
(statearr_38539_41240[(2)] = inst_38459);

(statearr_38539_41240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38487 === (10))){
var inst_38478 = (state_38486[(2)]);
var state_38486__$1 = state_38486;
var statearr_38541_41241 = state_38486__$1;
(statearr_38541_41241[(2)] = inst_38478);

(statearr_38541_41241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38487 === (8))){
var inst_38459 = (state_38486[(7)]);
var inst_38469 = cljs.core.next(inst_38459);
var inst_38459__$1 = inst_38469;
var state_38486__$1 = (function (){var statearr_38543 = state_38486;
(statearr_38543[(7)] = inst_38459__$1);

return statearr_38543;
})();
var statearr_38544_41242 = state_38486__$1;
(statearr_38544_41242[(2)] = null);

(statearr_38544_41242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36740__auto__ = null;
var cljs$core$async$state_machine__36740__auto____0 = (function (){
var statearr_38549 = [null,null,null,null,null,null,null,null];
(statearr_38549[(0)] = cljs$core$async$state_machine__36740__auto__);

(statearr_38549[(1)] = (1));

return statearr_38549;
});
var cljs$core$async$state_machine__36740__auto____1 = (function (state_38486){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_38486);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e38550){var ex__36743__auto__ = e38550;
var statearr_38551_41244 = state_38486;
(statearr_38551_41244[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_38486[(4)]))){
var statearr_38552_41245 = state_38486;
(statearr_38552_41245[(1)] = cljs.core.first((state_38486[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41246 = state_38486;
state_38486 = G__41246;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$state_machine__36740__auto__ = function(state_38486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36740__auto____1.call(this,state_38486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36740__auto____0;
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36740__auto____1;
return cljs$core$async$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_38556 = f__37391__auto__();
(statearr_38556[(6)] = c__37390__auto__);

return statearr_38556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));

return c__37390__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38563 = arguments.length;
switch (G__38563) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_41256 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null, _));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_41256(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_41258 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_41258(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_41262 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null, m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_41262(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_41265 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null, m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_41265(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38577 = (function (ch,cs,meta38578){
this.ch = ch;
this.cs = cs;
this.meta38578 = meta38578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38579,meta38578__$1){
var self__ = this;
var _38579__$1 = this;
return (new cljs.core.async.t_cljs$core$async38577(self__.ch,self__.cs,meta38578__$1));
}));

(cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38579){
var self__ = this;
var _38579__$1 = this;
return self__.meta38578;
}));

(cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38577.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38578","meta38578",773164419,null)], null);
}));

(cljs.core.async.t_cljs$core$async38577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38577");

(cljs.core.async.t_cljs$core$async38577.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38577.
 */
cljs.core.async.__GT_t_cljs$core$async38577 = (function cljs$core$async$__GT_t_cljs$core$async38577(ch,cs,meta38578){
return (new cljs.core.async.t_cljs$core$async38577(ch,cs,meta38578));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async38577(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37390__auto___41294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_38749){
var state_val_38750 = (state_38749[(1)]);
if((state_val_38750 === (7))){
var inst_38741 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38753_41300 = state_38749__$1;
(statearr_38753_41300[(2)] = inst_38741);

(statearr_38753_41300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (20))){
var inst_38634 = (state_38749[(7)]);
var inst_38650 = cljs.core.first(inst_38634);
var inst_38651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38650,(0),null);
var inst_38652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38650,(1),null);
var state_38749__$1 = (function (){var statearr_38754 = state_38749;
(statearr_38754[(8)] = inst_38651);

return statearr_38754;
})();
if(cljs.core.truth_(inst_38652)){
var statearr_38755_41301 = state_38749__$1;
(statearr_38755_41301[(1)] = (22));

} else {
var statearr_38756_41302 = state_38749__$1;
(statearr_38756_41302[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (27))){
var inst_38598 = (state_38749[(9)]);
var inst_38692 = (state_38749[(10)]);
var inst_38685 = (state_38749[(11)]);
var inst_38687 = (state_38749[(12)]);
var inst_38692__$1 = cljs.core._nth(inst_38685,inst_38687);
var inst_38693 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38692__$1,inst_38598,done);
var state_38749__$1 = (function (){var statearr_38757 = state_38749;
(statearr_38757[(10)] = inst_38692__$1);

return statearr_38757;
})();
if(cljs.core.truth_(inst_38693)){
var statearr_38758_41303 = state_38749__$1;
(statearr_38758_41303[(1)] = (30));

} else {
var statearr_38759_41304 = state_38749__$1;
(statearr_38759_41304[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (1))){
var state_38749__$1 = state_38749;
var statearr_38762_41305 = state_38749__$1;
(statearr_38762_41305[(2)] = null);

(statearr_38762_41305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (24))){
var inst_38634 = (state_38749[(7)]);
var inst_38661 = (state_38749[(2)]);
var inst_38662 = cljs.core.next(inst_38634);
var inst_38607 = inst_38662;
var inst_38608 = null;
var inst_38609 = (0);
var inst_38610 = (0);
var state_38749__$1 = (function (){var statearr_38763 = state_38749;
(statearr_38763[(13)] = inst_38609);

(statearr_38763[(14)] = inst_38608);

(statearr_38763[(15)] = inst_38607);

(statearr_38763[(16)] = inst_38661);

(statearr_38763[(17)] = inst_38610);

return statearr_38763;
})();
var statearr_38765_41306 = state_38749__$1;
(statearr_38765_41306[(2)] = null);

(statearr_38765_41306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (39))){
var state_38749__$1 = state_38749;
var statearr_38776_41307 = state_38749__$1;
(statearr_38776_41307[(2)] = null);

(statearr_38776_41307[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (4))){
var inst_38598 = (state_38749[(9)]);
var inst_38598__$1 = (state_38749[(2)]);
var inst_38599 = (inst_38598__$1 == null);
var state_38749__$1 = (function (){var statearr_38778 = state_38749;
(statearr_38778[(9)] = inst_38598__$1);

return statearr_38778;
})();
if(cljs.core.truth_(inst_38599)){
var statearr_38779_41308 = state_38749__$1;
(statearr_38779_41308[(1)] = (5));

} else {
var statearr_38780_41309 = state_38749__$1;
(statearr_38780_41309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (15))){
var inst_38609 = (state_38749[(13)]);
var inst_38608 = (state_38749[(14)]);
var inst_38607 = (state_38749[(15)]);
var inst_38610 = (state_38749[(17)]);
var inst_38629 = (state_38749[(2)]);
var inst_38630 = (inst_38610 + (1));
var tmp38770 = inst_38609;
var tmp38771 = inst_38608;
var tmp38772 = inst_38607;
var inst_38607__$1 = tmp38772;
var inst_38608__$1 = tmp38771;
var inst_38609__$1 = tmp38770;
var inst_38610__$1 = inst_38630;
var state_38749__$1 = (function (){var statearr_38782 = state_38749;
(statearr_38782[(13)] = inst_38609__$1);

(statearr_38782[(14)] = inst_38608__$1);

(statearr_38782[(18)] = inst_38629);

(statearr_38782[(15)] = inst_38607__$1);

(statearr_38782[(17)] = inst_38610__$1);

return statearr_38782;
})();
var statearr_38784_41313 = state_38749__$1;
(statearr_38784_41313[(2)] = null);

(statearr_38784_41313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (21))){
var inst_38665 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38788_41314 = state_38749__$1;
(statearr_38788_41314[(2)] = inst_38665);

(statearr_38788_41314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (31))){
var inst_38692 = (state_38749[(10)]);
var inst_38696 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_38692);
var state_38749__$1 = state_38749;
var statearr_38789_41315 = state_38749__$1;
(statearr_38789_41315[(2)] = inst_38696);

(statearr_38789_41315[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (32))){
var inst_38685 = (state_38749[(11)]);
var inst_38684 = (state_38749[(19)]);
var inst_38687 = (state_38749[(12)]);
var inst_38686 = (state_38749[(20)]);
var inst_38698 = (state_38749[(2)]);
var inst_38699 = (inst_38687 + (1));
var tmp38785 = inst_38685;
var tmp38786 = inst_38684;
var tmp38787 = inst_38686;
var inst_38684__$1 = tmp38786;
var inst_38685__$1 = tmp38785;
var inst_38686__$1 = tmp38787;
var inst_38687__$1 = inst_38699;
var state_38749__$1 = (function (){var statearr_38795 = state_38749;
(statearr_38795[(11)] = inst_38685__$1);

(statearr_38795[(21)] = inst_38698);

(statearr_38795[(19)] = inst_38684__$1);

(statearr_38795[(12)] = inst_38687__$1);

(statearr_38795[(20)] = inst_38686__$1);

return statearr_38795;
})();
var statearr_38796_41320 = state_38749__$1;
(statearr_38796_41320[(2)] = null);

(statearr_38796_41320[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (40))){
var inst_38713 = (state_38749[(22)]);
var inst_38717 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_38713);
var state_38749__$1 = state_38749;
var statearr_38797_41326 = state_38749__$1;
(statearr_38797_41326[(2)] = inst_38717);

(statearr_38797_41326[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (33))){
var inst_38702 = (state_38749[(23)]);
var inst_38704 = cljs.core.chunked_seq_QMARK_(inst_38702);
var state_38749__$1 = state_38749;
if(inst_38704){
var statearr_38798_41327 = state_38749__$1;
(statearr_38798_41327[(1)] = (36));

} else {
var statearr_38799_41328 = state_38749__$1;
(statearr_38799_41328[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (13))){
var inst_38619 = (state_38749[(24)]);
var inst_38626 = cljs.core.async.close_BANG_(inst_38619);
var state_38749__$1 = state_38749;
var statearr_38800_41329 = state_38749__$1;
(statearr_38800_41329[(2)] = inst_38626);

(statearr_38800_41329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (22))){
var inst_38651 = (state_38749[(8)]);
var inst_38656 = cljs.core.async.close_BANG_(inst_38651);
var state_38749__$1 = state_38749;
var statearr_38802_41330 = state_38749__$1;
(statearr_38802_41330[(2)] = inst_38656);

(statearr_38802_41330[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (36))){
var inst_38702 = (state_38749[(23)]);
var inst_38708 = cljs.core.chunk_first(inst_38702);
var inst_38709 = cljs.core.chunk_rest(inst_38702);
var inst_38710 = cljs.core.count(inst_38708);
var inst_38684 = inst_38709;
var inst_38685 = inst_38708;
var inst_38686 = inst_38710;
var inst_38687 = (0);
var state_38749__$1 = (function (){var statearr_38803 = state_38749;
(statearr_38803[(11)] = inst_38685);

(statearr_38803[(19)] = inst_38684);

(statearr_38803[(12)] = inst_38687);

(statearr_38803[(20)] = inst_38686);

return statearr_38803;
})();
var statearr_38804_41342 = state_38749__$1;
(statearr_38804_41342[(2)] = null);

(statearr_38804_41342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (41))){
var inst_38702 = (state_38749[(23)]);
var inst_38719 = (state_38749[(2)]);
var inst_38720 = cljs.core.next(inst_38702);
var inst_38684 = inst_38720;
var inst_38685 = null;
var inst_38686 = (0);
var inst_38687 = (0);
var state_38749__$1 = (function (){var statearr_38805 = state_38749;
(statearr_38805[(25)] = inst_38719);

(statearr_38805[(11)] = inst_38685);

(statearr_38805[(19)] = inst_38684);

(statearr_38805[(12)] = inst_38687);

(statearr_38805[(20)] = inst_38686);

return statearr_38805;
})();
var statearr_38806_41343 = state_38749__$1;
(statearr_38806_41343[(2)] = null);

(statearr_38806_41343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (43))){
var state_38749__$1 = state_38749;
var statearr_38807_41348 = state_38749__$1;
(statearr_38807_41348[(2)] = null);

(statearr_38807_41348[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (29))){
var inst_38729 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38809_41353 = state_38749__$1;
(statearr_38809_41353[(2)] = inst_38729);

(statearr_38809_41353[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (44))){
var inst_38738 = (state_38749[(2)]);
var state_38749__$1 = (function (){var statearr_38811 = state_38749;
(statearr_38811[(26)] = inst_38738);

return statearr_38811;
})();
var statearr_38814_41354 = state_38749__$1;
(statearr_38814_41354[(2)] = null);

(statearr_38814_41354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (6))){
var inst_38675 = (state_38749[(27)]);
var inst_38674 = cljs.core.deref(cs);
var inst_38675__$1 = cljs.core.keys(inst_38674);
var inst_38677 = cljs.core.count(inst_38675__$1);
var inst_38678 = cljs.core.reset_BANG_(dctr,inst_38677);
var inst_38683 = cljs.core.seq(inst_38675__$1);
var inst_38684 = inst_38683;
var inst_38685 = null;
var inst_38686 = (0);
var inst_38687 = (0);
var state_38749__$1 = (function (){var statearr_38820 = state_38749;
(statearr_38820[(28)] = inst_38678);

(statearr_38820[(11)] = inst_38685);

(statearr_38820[(19)] = inst_38684);

(statearr_38820[(12)] = inst_38687);

(statearr_38820[(20)] = inst_38686);

(statearr_38820[(27)] = inst_38675__$1);

return statearr_38820;
})();
var statearr_38821_41361 = state_38749__$1;
(statearr_38821_41361[(2)] = null);

(statearr_38821_41361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (28))){
var inst_38702 = (state_38749[(23)]);
var inst_38684 = (state_38749[(19)]);
var inst_38702__$1 = cljs.core.seq(inst_38684);
var state_38749__$1 = (function (){var statearr_38823 = state_38749;
(statearr_38823[(23)] = inst_38702__$1);

return statearr_38823;
})();
if(inst_38702__$1){
var statearr_38824_41362 = state_38749__$1;
(statearr_38824_41362[(1)] = (33));

} else {
var statearr_38825_41363 = state_38749__$1;
(statearr_38825_41363[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (25))){
var inst_38687 = (state_38749[(12)]);
var inst_38686 = (state_38749[(20)]);
var inst_38689 = (inst_38687 < inst_38686);
var inst_38690 = inst_38689;
var state_38749__$1 = state_38749;
if(cljs.core.truth_(inst_38690)){
var statearr_38828_41364 = state_38749__$1;
(statearr_38828_41364[(1)] = (27));

} else {
var statearr_38830_41365 = state_38749__$1;
(statearr_38830_41365[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (34))){
var state_38749__$1 = state_38749;
var statearr_38831_41366 = state_38749__$1;
(statearr_38831_41366[(2)] = null);

(statearr_38831_41366[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (17))){
var state_38749__$1 = state_38749;
var statearr_38832_41367 = state_38749__$1;
(statearr_38832_41367[(2)] = null);

(statearr_38832_41367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (3))){
var inst_38743 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38749__$1,inst_38743);
} else {
if((state_val_38750 === (12))){
var inst_38670 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38834_41368 = state_38749__$1;
(statearr_38834_41368[(2)] = inst_38670);

(statearr_38834_41368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (2))){
var state_38749__$1 = state_38749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38749__$1,(4),ch);
} else {
if((state_val_38750 === (23))){
var state_38749__$1 = state_38749;
var statearr_38836_41369 = state_38749__$1;
(statearr_38836_41369[(2)] = null);

(statearr_38836_41369[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (35))){
var inst_38727 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38837_41376 = state_38749__$1;
(statearr_38837_41376[(2)] = inst_38727);

(statearr_38837_41376[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (19))){
var inst_38634 = (state_38749[(7)]);
var inst_38642 = cljs.core.chunk_first(inst_38634);
var inst_38643 = cljs.core.chunk_rest(inst_38634);
var inst_38644 = cljs.core.count(inst_38642);
var inst_38607 = inst_38643;
var inst_38608 = inst_38642;
var inst_38609 = inst_38644;
var inst_38610 = (0);
var state_38749__$1 = (function (){var statearr_38838 = state_38749;
(statearr_38838[(13)] = inst_38609);

(statearr_38838[(14)] = inst_38608);

(statearr_38838[(15)] = inst_38607);

(statearr_38838[(17)] = inst_38610);

return statearr_38838;
})();
var statearr_38839_41383 = state_38749__$1;
(statearr_38839_41383[(2)] = null);

(statearr_38839_41383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (11))){
var inst_38634 = (state_38749[(7)]);
var inst_38607 = (state_38749[(15)]);
var inst_38634__$1 = cljs.core.seq(inst_38607);
var state_38749__$1 = (function (){var statearr_38842 = state_38749;
(statearr_38842[(7)] = inst_38634__$1);

return statearr_38842;
})();
if(inst_38634__$1){
var statearr_38844_41391 = state_38749__$1;
(statearr_38844_41391[(1)] = (16));

} else {
var statearr_38845_41392 = state_38749__$1;
(statearr_38845_41392[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (9))){
var inst_38672 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38846_41393 = state_38749__$1;
(statearr_38846_41393[(2)] = inst_38672);

(statearr_38846_41393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (5))){
var inst_38605 = cljs.core.deref(cs);
var inst_38606 = cljs.core.seq(inst_38605);
var inst_38607 = inst_38606;
var inst_38608 = null;
var inst_38609 = (0);
var inst_38610 = (0);
var state_38749__$1 = (function (){var statearr_38848 = state_38749;
(statearr_38848[(13)] = inst_38609);

(statearr_38848[(14)] = inst_38608);

(statearr_38848[(15)] = inst_38607);

(statearr_38848[(17)] = inst_38610);

return statearr_38848;
})();
var statearr_38852_41395 = state_38749__$1;
(statearr_38852_41395[(2)] = null);

(statearr_38852_41395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (14))){
var state_38749__$1 = state_38749;
var statearr_38853_41396 = state_38749__$1;
(statearr_38853_41396[(2)] = null);

(statearr_38853_41396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (45))){
var inst_38735 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38854_41406 = state_38749__$1;
(statearr_38854_41406[(2)] = inst_38735);

(statearr_38854_41406[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (26))){
var inst_38675 = (state_38749[(27)]);
var inst_38731 = (state_38749[(2)]);
var inst_38732 = cljs.core.seq(inst_38675);
var state_38749__$1 = (function (){var statearr_38855 = state_38749;
(statearr_38855[(29)] = inst_38731);

return statearr_38855;
})();
if(inst_38732){
var statearr_38857_41407 = state_38749__$1;
(statearr_38857_41407[(1)] = (42));

} else {
var statearr_38858_41408 = state_38749__$1;
(statearr_38858_41408[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (16))){
var inst_38634 = (state_38749[(7)]);
var inst_38640 = cljs.core.chunked_seq_QMARK_(inst_38634);
var state_38749__$1 = state_38749;
if(inst_38640){
var statearr_38860_41415 = state_38749__$1;
(statearr_38860_41415[(1)] = (19));

} else {
var statearr_38861_41419 = state_38749__$1;
(statearr_38861_41419[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (38))){
var inst_38724 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38862_41422 = state_38749__$1;
(statearr_38862_41422[(2)] = inst_38724);

(statearr_38862_41422[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (30))){
var state_38749__$1 = state_38749;
var statearr_38868_41425 = state_38749__$1;
(statearr_38868_41425[(2)] = null);

(statearr_38868_41425[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (10))){
var inst_38608 = (state_38749[(14)]);
var inst_38610 = (state_38749[(17)]);
var inst_38618 = cljs.core._nth(inst_38608,inst_38610);
var inst_38619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38618,(0),null);
var inst_38621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38618,(1),null);
var state_38749__$1 = (function (){var statearr_38869 = state_38749;
(statearr_38869[(24)] = inst_38619);

return statearr_38869;
})();
if(cljs.core.truth_(inst_38621)){
var statearr_38870_41426 = state_38749__$1;
(statearr_38870_41426[(1)] = (13));

} else {
var statearr_38872_41431 = state_38749__$1;
(statearr_38872_41431[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (18))){
var inst_38668 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38873_41435 = state_38749__$1;
(statearr_38873_41435[(2)] = inst_38668);

(statearr_38873_41435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (42))){
var state_38749__$1 = state_38749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38749__$1,(45),dchan);
} else {
if((state_val_38750 === (37))){
var inst_38598 = (state_38749[(9)]);
var inst_38713 = (state_38749[(22)]);
var inst_38702 = (state_38749[(23)]);
var inst_38713__$1 = cljs.core.first(inst_38702);
var inst_38714 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38713__$1,inst_38598,done);
var state_38749__$1 = (function (){var statearr_38874 = state_38749;
(statearr_38874[(22)] = inst_38713__$1);

return statearr_38874;
})();
if(cljs.core.truth_(inst_38714)){
var statearr_38875_41436 = state_38749__$1;
(statearr_38875_41436[(1)] = (39));

} else {
var statearr_38876_41437 = state_38749__$1;
(statearr_38876_41437[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (8))){
var inst_38609 = (state_38749[(13)]);
var inst_38610 = (state_38749[(17)]);
var inst_38612 = (inst_38610 < inst_38609);
var inst_38613 = inst_38612;
var state_38749__$1 = state_38749;
if(cljs.core.truth_(inst_38613)){
var statearr_38879_41439 = state_38749__$1;
(statearr_38879_41439[(1)] = (10));

} else {
var statearr_38880_41440 = state_38749__$1;
(statearr_38880_41440[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__36740__auto__ = null;
var cljs$core$async$mult_$_state_machine__36740__auto____0 = (function (){
var statearr_38885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38885[(0)] = cljs$core$async$mult_$_state_machine__36740__auto__);

(statearr_38885[(1)] = (1));

return statearr_38885;
});
var cljs$core$async$mult_$_state_machine__36740__auto____1 = (function (state_38749){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_38749);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e38887){var ex__36743__auto__ = e38887;
var statearr_38888_41441 = state_38749;
(statearr_38888_41441[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_38749[(4)]))){
var statearr_38889_41442 = state_38749;
(statearr_38889_41442[(1)] = cljs.core.first((state_38749[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41443 = state_38749;
state_38749 = G__41443;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36740__auto__ = function(state_38749){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36740__auto____1.call(this,state_38749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36740__auto____0;
cljs$core$async$mult_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36740__auto____1;
return cljs$core$async$mult_$_state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_38891 = f__37391__auto__();
(statearr_38891[(6)] = c__37390__auto___41294);

return statearr_38891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38894 = arguments.length;
switch (G__38894) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_41459 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null, m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_41459(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41465 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null, m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_41465(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41467 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null, m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41467(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41475 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null, m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_41475(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41476 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null, m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41476(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___41478 = arguments.length;
var i__5767__auto___41479 = (0);
while(true){
if((i__5767__auto___41479 < len__5766__auto___41478)){
args__5772__auto__.push((arguments[i__5767__auto___41479]));

var G__41480 = (i__5767__auto___41479 + (1));
i__5767__auto___41479 = G__41480;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38926){
var map__38927 = p__38926;
var map__38927__$1 = cljs.core.__destructure_map(map__38927);
var opts = map__38927__$1;
var statearr_38928_41493 = state;
(statearr_38928_41493[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38930_41494 = state;
(statearr_38930_41494[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_38932_41496 = state;
(statearr_38932_41496[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38916){
var G__38917 = cljs.core.first(seq38916);
var seq38916__$1 = cljs.core.next(seq38916);
var G__38918 = cljs.core.first(seq38916__$1);
var seq38916__$2 = cljs.core.next(seq38916__$1);
var G__38919 = cljs.core.first(seq38916__$2);
var seq38916__$3 = cljs.core.next(seq38916__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38917,G__38918,G__38919,seq38916__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38940 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38941){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38941 = meta38941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38942,meta38941__$1){
var self__ = this;
var _38942__$1 = this;
return (new cljs.core.async.t_cljs$core$async38940(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38941__$1));
}));

(cljs.core.async.t_cljs$core$async38940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38942){
var self__ = this;
var _38942__$1 = this;
return self__.meta38941;
}));

(cljs.core.async.t_cljs$core$async38940.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38940.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38940.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38940.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38940.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38940.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38940.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async38940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38941","meta38941",-799080552,null)], null);
}));

(cljs.core.async.t_cljs$core$async38940.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38940");

(cljs.core.async.t_cljs$core$async38940.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38940");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38940.
 */
cljs.core.async.__GT_t_cljs$core$async38940 = (function cljs$core$async$__GT_t_cljs$core$async38940(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38941){
return (new cljs.core.async.t_cljs$core$async38940(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38941));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async38940(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__37390__auto___41529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_39022){
var state_val_39023 = (state_39022[(1)]);
if((state_val_39023 === (7))){
var inst_38982 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_38982)){
var statearr_39025_41530 = state_39022__$1;
(statearr_39025_41530[(1)] = (8));

} else {
var statearr_39026_41531 = state_39022__$1;
(statearr_39026_41531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (20))){
var inst_38975 = (state_39022[(7)]);
var state_39022__$1 = state_39022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39022__$1,(23),out,inst_38975);
} else {
if((state_val_39023 === (1))){
var inst_38952 = calc_state();
var inst_38954 = cljs.core.__destructure_map(inst_38952);
var inst_38955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38954,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38954,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38954,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38958 = inst_38952;
var state_39022__$1 = (function (){var statearr_39028 = state_39022;
(statearr_39028[(8)] = inst_38956);

(statearr_39028[(9)] = inst_38955);

(statearr_39028[(10)] = inst_38957);

(statearr_39028[(11)] = inst_38958);

return statearr_39028;
})();
var statearr_39029_41532 = state_39022__$1;
(statearr_39029_41532[(2)] = null);

(statearr_39029_41532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (24))){
var inst_38962 = (state_39022[(12)]);
var inst_38958 = inst_38962;
var state_39022__$1 = (function (){var statearr_39032 = state_39022;
(statearr_39032[(11)] = inst_38958);

return statearr_39032;
})();
var statearr_39033_41533 = state_39022__$1;
(statearr_39033_41533[(2)] = null);

(statearr_39033_41533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (4))){
var inst_38975 = (state_39022[(7)]);
var inst_38977 = (state_39022[(13)]);
var inst_38974 = (state_39022[(2)]);
var inst_38975__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38974,(0),null);
var inst_38976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38974,(1),null);
var inst_38977__$1 = (inst_38975__$1 == null);
var state_39022__$1 = (function (){var statearr_39036 = state_39022;
(statearr_39036[(14)] = inst_38976);

(statearr_39036[(7)] = inst_38975__$1);

(statearr_39036[(13)] = inst_38977__$1);

return statearr_39036;
})();
if(cljs.core.truth_(inst_38977__$1)){
var statearr_39037_41534 = state_39022__$1;
(statearr_39037_41534[(1)] = (5));

} else {
var statearr_39038_41535 = state_39022__$1;
(statearr_39038_41535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (15))){
var inst_38963 = (state_39022[(15)]);
var inst_38996 = (state_39022[(16)]);
var inst_38996__$1 = cljs.core.empty_QMARK_(inst_38963);
var state_39022__$1 = (function (){var statearr_39046 = state_39022;
(statearr_39046[(16)] = inst_38996__$1);

return statearr_39046;
})();
if(inst_38996__$1){
var statearr_39047_41536 = state_39022__$1;
(statearr_39047_41536[(1)] = (17));

} else {
var statearr_39048_41537 = state_39022__$1;
(statearr_39048_41537[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (21))){
var inst_38962 = (state_39022[(12)]);
var inst_38958 = inst_38962;
var state_39022__$1 = (function (){var statearr_39049 = state_39022;
(statearr_39049[(11)] = inst_38958);

return statearr_39049;
})();
var statearr_39051_41538 = state_39022__$1;
(statearr_39051_41538[(2)] = null);

(statearr_39051_41538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (13))){
var inst_38989 = (state_39022[(2)]);
var inst_38990 = calc_state();
var inst_38958 = inst_38990;
var state_39022__$1 = (function (){var statearr_39053 = state_39022;
(statearr_39053[(11)] = inst_38958);

(statearr_39053[(17)] = inst_38989);

return statearr_39053;
})();
var statearr_39054_41544 = state_39022__$1;
(statearr_39054_41544[(2)] = null);

(statearr_39054_41544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (22))){
var inst_39016 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39057_41546 = state_39022__$1;
(statearr_39057_41546[(2)] = inst_39016);

(statearr_39057_41546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (6))){
var inst_38976 = (state_39022[(14)]);
var inst_38980 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38976,change);
var state_39022__$1 = state_39022;
var statearr_39058_41547 = state_39022__$1;
(statearr_39058_41547[(2)] = inst_38980);

(statearr_39058_41547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (25))){
var state_39022__$1 = state_39022;
var statearr_39059_41548 = state_39022__$1;
(statearr_39059_41548[(2)] = null);

(statearr_39059_41548[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (17))){
var inst_38976 = (state_39022[(14)]);
var inst_38964 = (state_39022[(18)]);
var inst_38998 = (inst_38964.cljs$core$IFn$_invoke$arity$1 ? inst_38964.cljs$core$IFn$_invoke$arity$1(inst_38976) : inst_38964.call(null, inst_38976));
var inst_38999 = cljs.core.not(inst_38998);
var state_39022__$1 = state_39022;
var statearr_39061_41549 = state_39022__$1;
(statearr_39061_41549[(2)] = inst_38999);

(statearr_39061_41549[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (3))){
var inst_39020 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39022__$1,inst_39020);
} else {
if((state_val_39023 === (12))){
var state_39022__$1 = state_39022;
var statearr_39062_41550 = state_39022__$1;
(statearr_39062_41550[(2)] = null);

(statearr_39062_41550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (2))){
var inst_38958 = (state_39022[(11)]);
var inst_38962 = (state_39022[(12)]);
var inst_38962__$1 = cljs.core.__destructure_map(inst_38958);
var inst_38963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38962__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38962__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38962__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39022__$1 = (function (){var statearr_39068 = state_39022;
(statearr_39068[(15)] = inst_38963);

(statearr_39068[(18)] = inst_38964);

(statearr_39068[(12)] = inst_38962__$1);

return statearr_39068;
})();
return cljs.core.async.ioc_alts_BANG_(state_39022__$1,(4),inst_38968);
} else {
if((state_val_39023 === (23))){
var inst_39007 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_39007)){
var statearr_39070_41553 = state_39022__$1;
(statearr_39070_41553[(1)] = (24));

} else {
var statearr_39071_41554 = state_39022__$1;
(statearr_39071_41554[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (19))){
var inst_39002 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39072_41555 = state_39022__$1;
(statearr_39072_41555[(2)] = inst_39002);

(statearr_39072_41555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (11))){
var inst_38976 = (state_39022[(14)]);
var inst_38986 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38976);
var state_39022__$1 = state_39022;
var statearr_39074_41562 = state_39022__$1;
(statearr_39074_41562[(2)] = inst_38986);

(statearr_39074_41562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (9))){
var inst_38993 = (state_39022[(19)]);
var inst_38963 = (state_39022[(15)]);
var inst_38976 = (state_39022[(14)]);
var inst_38993__$1 = (inst_38963.cljs$core$IFn$_invoke$arity$1 ? inst_38963.cljs$core$IFn$_invoke$arity$1(inst_38976) : inst_38963.call(null, inst_38976));
var state_39022__$1 = (function (){var statearr_39075 = state_39022;
(statearr_39075[(19)] = inst_38993__$1);

return statearr_39075;
})();
if(cljs.core.truth_(inst_38993__$1)){
var statearr_39076_41563 = state_39022__$1;
(statearr_39076_41563[(1)] = (14));

} else {
var statearr_39077_41564 = state_39022__$1;
(statearr_39077_41564[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (5))){
var inst_38977 = (state_39022[(13)]);
var state_39022__$1 = state_39022;
var statearr_39078_41568 = state_39022__$1;
(statearr_39078_41568[(2)] = inst_38977);

(statearr_39078_41568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (14))){
var inst_38993 = (state_39022[(19)]);
var state_39022__$1 = state_39022;
var statearr_39079_41569 = state_39022__$1;
(statearr_39079_41569[(2)] = inst_38993);

(statearr_39079_41569[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (26))){
var inst_39012 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39080_41570 = state_39022__$1;
(statearr_39080_41570[(2)] = inst_39012);

(statearr_39080_41570[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (16))){
var inst_39004 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_39004)){
var statearr_39081_41571 = state_39022__$1;
(statearr_39081_41571[(1)] = (20));

} else {
var statearr_39082_41573 = state_39022__$1;
(statearr_39082_41573[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (10))){
var inst_39018 = (state_39022[(2)]);
var state_39022__$1 = state_39022;
var statearr_39084_41577 = state_39022__$1;
(statearr_39084_41577[(2)] = inst_39018);

(statearr_39084_41577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (18))){
var inst_38996 = (state_39022[(16)]);
var state_39022__$1 = state_39022;
var statearr_39086_41578 = state_39022__$1;
(statearr_39086_41578[(2)] = inst_38996);

(statearr_39086_41578[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39023 === (8))){
var inst_38975 = (state_39022[(7)]);
var inst_38984 = (inst_38975 == null);
var state_39022__$1 = state_39022;
if(cljs.core.truth_(inst_38984)){
var statearr_39088_41579 = state_39022__$1;
(statearr_39088_41579[(1)] = (11));

} else {
var statearr_39089_41582 = state_39022__$1;
(statearr_39089_41582[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__36740__auto__ = null;
var cljs$core$async$mix_$_state_machine__36740__auto____0 = (function (){
var statearr_39093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39093[(0)] = cljs$core$async$mix_$_state_machine__36740__auto__);

(statearr_39093[(1)] = (1));

return statearr_39093;
});
var cljs$core$async$mix_$_state_machine__36740__auto____1 = (function (state_39022){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_39022);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e39094){var ex__36743__auto__ = e39094;
var statearr_39095_41586 = state_39022;
(statearr_39095_41586[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_39022[(4)]))){
var statearr_39097_41593 = state_39022;
(statearr_39097_41593[(1)] = cljs.core.first((state_39022[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41594 = state_39022;
state_39022 = G__41594;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36740__auto__ = function(state_39022){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36740__auto____1.call(this,state_39022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36740__auto____0;
cljs$core$async$mix_$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36740__auto____1;
return cljs$core$async$mix_$_state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_39101 = f__37391__auto__();
(statearr_39101[(6)] = c__37390__auto___41529);

return statearr_39101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_41605 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_41605(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_41609 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null, p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_41609(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_41617 = (function() {
var G__41618 = null;
var G__41618__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null, p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__41618__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null, p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__41618 = function(p,v){
switch(arguments.length){
case 1:
return G__41618__1.call(this,p);
case 2:
return G__41618__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41618.cljs$core$IFn$_invoke$arity$1 = G__41618__1;
G__41618.cljs$core$IFn$_invoke$arity$2 = G__41618__2;
return G__41618;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39123 = arguments.length;
switch (G__39123) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41617(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41617(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39149 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39150){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39150 = meta39150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39151,meta39150__$1){
var self__ = this;
var _39151__$1 = this;
return (new cljs.core.async.t_cljs$core$async39149(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39150__$1));
}));

(cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39151){
var self__ = this;
var _39151__$1 = this;
return self__.meta39150;
}));

(cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39150","meta39150",782378856,null)], null);
}));

(cljs.core.async.t_cljs$core$async39149.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39149");

(cljs.core.async.t_cljs$core$async39149.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39149");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39149.
 */
cljs.core.async.__GT_t_cljs$core$async39149 = (function cljs$core$async$__GT_t_cljs$core$async39149(ch,topic_fn,buf_fn,mults,ensure_mult,meta39150){
return (new cljs.core.async.t_cljs$core$async39149(ch,topic_fn,buf_fn,mults,ensure_mult,meta39150));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39145 = arguments.length;
switch (G__39145) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39139_SHARP_){
if(cljs.core.truth_((p1__39139_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39139_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39139_SHARP_.call(null, topic)))){
return p1__39139_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39139_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async39149(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__37390__auto___41676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_39265){
var state_val_39266 = (state_39265[(1)]);
if((state_val_39266 === (7))){
var inst_39261 = (state_39265[(2)]);
var state_39265__$1 = state_39265;
var statearr_39276_41682 = state_39265__$1;
(statearr_39276_41682[(2)] = inst_39261);

(statearr_39276_41682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (20))){
var state_39265__$1 = state_39265;
var statearr_39277_41683 = state_39265__$1;
(statearr_39277_41683[(2)] = null);

(statearr_39277_41683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (1))){
var state_39265__$1 = state_39265;
var statearr_39279_41685 = state_39265__$1;
(statearr_39279_41685[(2)] = null);

(statearr_39279_41685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (24))){
var inst_39244 = (state_39265[(7)]);
var inst_39253 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39244);
var state_39265__$1 = state_39265;
var statearr_39282_41689 = state_39265__$1;
(statearr_39282_41689[(2)] = inst_39253);

(statearr_39282_41689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (4))){
var inst_39183 = (state_39265[(8)]);
var inst_39183__$1 = (state_39265[(2)]);
var inst_39184 = (inst_39183__$1 == null);
var state_39265__$1 = (function (){var statearr_39285 = state_39265;
(statearr_39285[(8)] = inst_39183__$1);

return statearr_39285;
})();
if(cljs.core.truth_(inst_39184)){
var statearr_39286_41691 = state_39265__$1;
(statearr_39286_41691[(1)] = (5));

} else {
var statearr_39291_41692 = state_39265__$1;
(statearr_39291_41692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (15))){
var inst_39237 = (state_39265[(2)]);
var state_39265__$1 = state_39265;
var statearr_39292_41693 = state_39265__$1;
(statearr_39292_41693[(2)] = inst_39237);

(statearr_39292_41693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (21))){
var inst_39258 = (state_39265[(2)]);
var state_39265__$1 = (function (){var statearr_39294 = state_39265;
(statearr_39294[(9)] = inst_39258);

return statearr_39294;
})();
var statearr_39295_41697 = state_39265__$1;
(statearr_39295_41697[(2)] = null);

(statearr_39295_41697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (13))){
var inst_39213 = (state_39265[(10)]);
var inst_39217 = cljs.core.chunked_seq_QMARK_(inst_39213);
var state_39265__$1 = state_39265;
if(inst_39217){
var statearr_39296_41702 = state_39265__$1;
(statearr_39296_41702[(1)] = (16));

} else {
var statearr_39297_41703 = state_39265__$1;
(statearr_39297_41703[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (22))){
var inst_39250 = (state_39265[(2)]);
var state_39265__$1 = state_39265;
if(cljs.core.truth_(inst_39250)){
var statearr_39300_41704 = state_39265__$1;
(statearr_39300_41704[(1)] = (23));

} else {
var statearr_39302_41705 = state_39265__$1;
(statearr_39302_41705[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (6))){
var inst_39244 = (state_39265[(7)]);
var inst_39183 = (state_39265[(8)]);
var inst_39246 = (state_39265[(11)]);
var inst_39244__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39183) : topic_fn.call(null, inst_39183));
var inst_39245 = cljs.core.deref(mults);
var inst_39246__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39245,inst_39244__$1);
var state_39265__$1 = (function (){var statearr_39307 = state_39265;
(statearr_39307[(7)] = inst_39244__$1);

(statearr_39307[(11)] = inst_39246__$1);

return statearr_39307;
})();
if(cljs.core.truth_(inst_39246__$1)){
var statearr_39311_41710 = state_39265__$1;
(statearr_39311_41710[(1)] = (19));

} else {
var statearr_39313_41711 = state_39265__$1;
(statearr_39313_41711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (25))){
var inst_39255 = (state_39265[(2)]);
var state_39265__$1 = state_39265;
var statearr_39314_41712 = state_39265__$1;
(statearr_39314_41712[(2)] = inst_39255);

(statearr_39314_41712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (17))){
var inst_39213 = (state_39265[(10)]);
var inst_39228 = cljs.core.first(inst_39213);
var inst_39229 = cljs.core.async.muxch_STAR_(inst_39228);
var inst_39230 = cljs.core.async.close_BANG_(inst_39229);
var inst_39231 = cljs.core.next(inst_39213);
var inst_39195 = inst_39231;
var inst_39196 = null;
var inst_39197 = (0);
var inst_39198 = (0);
var state_39265__$1 = (function (){var statearr_39316 = state_39265;
(statearr_39316[(12)] = inst_39195);

(statearr_39316[(13)] = inst_39198);

(statearr_39316[(14)] = inst_39197);

(statearr_39316[(15)] = inst_39230);

(statearr_39316[(16)] = inst_39196);

return statearr_39316;
})();
var statearr_39320_41723 = state_39265__$1;
(statearr_39320_41723[(2)] = null);

(statearr_39320_41723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (3))){
var inst_39263 = (state_39265[(2)]);
var state_39265__$1 = state_39265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39265__$1,inst_39263);
} else {
if((state_val_39266 === (12))){
var inst_39239 = (state_39265[(2)]);
var state_39265__$1 = state_39265;
var statearr_39323_41724 = state_39265__$1;
(statearr_39323_41724[(2)] = inst_39239);

(statearr_39323_41724[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (2))){
var state_39265__$1 = state_39265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39265__$1,(4),ch);
} else {
if((state_val_39266 === (23))){
var state_39265__$1 = state_39265;
var statearr_39326_41729 = state_39265__$1;
(statearr_39326_41729[(2)] = null);

(statearr_39326_41729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (19))){
var inst_39183 = (state_39265[(8)]);
var inst_39246 = (state_39265[(11)]);
var inst_39248 = cljs.core.async.muxch_STAR_(inst_39246);
var state_39265__$1 = state_39265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39265__$1,(22),inst_39248,inst_39183);
} else {
if((state_val_39266 === (11))){
var inst_39195 = (state_39265[(12)]);
var inst_39213 = (state_39265[(10)]);
var inst_39213__$1 = cljs.core.seq(inst_39195);
var state_39265__$1 = (function (){var statearr_39329 = state_39265;
(statearr_39329[(10)] = inst_39213__$1);

return statearr_39329;
})();
if(inst_39213__$1){
var statearr_39330_41730 = state_39265__$1;
(statearr_39330_41730[(1)] = (13));

} else {
var statearr_39334_41731 = state_39265__$1;
(statearr_39334_41731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (9))){
var inst_39241 = (state_39265[(2)]);
var state_39265__$1 = state_39265;
var statearr_39337_41732 = state_39265__$1;
(statearr_39337_41732[(2)] = inst_39241);

(statearr_39337_41732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (5))){
var inst_39192 = cljs.core.deref(mults);
var inst_39193 = cljs.core.vals(inst_39192);
var inst_39194 = cljs.core.seq(inst_39193);
var inst_39195 = inst_39194;
var inst_39196 = null;
var inst_39197 = (0);
var inst_39198 = (0);
var state_39265__$1 = (function (){var statearr_39339 = state_39265;
(statearr_39339[(12)] = inst_39195);

(statearr_39339[(13)] = inst_39198);

(statearr_39339[(14)] = inst_39197);

(statearr_39339[(16)] = inst_39196);

return statearr_39339;
})();
var statearr_39340_41733 = state_39265__$1;
(statearr_39340_41733[(2)] = null);

(statearr_39340_41733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (14))){
var state_39265__$1 = state_39265;
var statearr_39347_41738 = state_39265__$1;
(statearr_39347_41738[(2)] = null);

(statearr_39347_41738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (16))){
var inst_39213 = (state_39265[(10)]);
var inst_39219 = cljs.core.chunk_first(inst_39213);
var inst_39224 = cljs.core.chunk_rest(inst_39213);
var inst_39225 = cljs.core.count(inst_39219);
var inst_39195 = inst_39224;
var inst_39196 = inst_39219;
var inst_39197 = inst_39225;
var inst_39198 = (0);
var state_39265__$1 = (function (){var statearr_39349 = state_39265;
(statearr_39349[(12)] = inst_39195);

(statearr_39349[(13)] = inst_39198);

(statearr_39349[(14)] = inst_39197);

(statearr_39349[(16)] = inst_39196);

return statearr_39349;
})();
var statearr_39350_41742 = state_39265__$1;
(statearr_39350_41742[(2)] = null);

(statearr_39350_41742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (10))){
var inst_39195 = (state_39265[(12)]);
var inst_39198 = (state_39265[(13)]);
var inst_39197 = (state_39265[(14)]);
var inst_39196 = (state_39265[(16)]);
var inst_39203 = cljs.core._nth(inst_39196,inst_39198);
var inst_39204 = cljs.core.async.muxch_STAR_(inst_39203);
var inst_39205 = cljs.core.async.close_BANG_(inst_39204);
var inst_39209 = (inst_39198 + (1));
var tmp39343 = inst_39195;
var tmp39344 = inst_39197;
var tmp39345 = inst_39196;
var inst_39195__$1 = tmp39343;
var inst_39196__$1 = tmp39345;
var inst_39197__$1 = tmp39344;
var inst_39198__$1 = inst_39209;
var state_39265__$1 = (function (){var statearr_39355 = state_39265;
(statearr_39355[(12)] = inst_39195__$1);

(statearr_39355[(13)] = inst_39198__$1);

(statearr_39355[(14)] = inst_39197__$1);

(statearr_39355[(16)] = inst_39196__$1);

(statearr_39355[(17)] = inst_39205);

return statearr_39355;
})();
var statearr_39356_41743 = state_39265__$1;
(statearr_39356_41743[(2)] = null);

(statearr_39356_41743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (18))){
var inst_39234 = (state_39265[(2)]);
var state_39265__$1 = state_39265;
var statearr_39359_41748 = state_39265__$1;
(statearr_39359_41748[(2)] = inst_39234);

(statearr_39359_41748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39266 === (8))){
var inst_39198 = (state_39265[(13)]);
var inst_39197 = (state_39265[(14)]);
var inst_39200 = (inst_39198 < inst_39197);
var inst_39201 = inst_39200;
var state_39265__$1 = state_39265;
if(cljs.core.truth_(inst_39201)){
var statearr_39361_41749 = state_39265__$1;
(statearr_39361_41749[(1)] = (10));

} else {
var statearr_39362_41750 = state_39265__$1;
(statearr_39362_41750[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36740__auto__ = null;
var cljs$core$async$state_machine__36740__auto____0 = (function (){
var statearr_39367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39367[(0)] = cljs$core$async$state_machine__36740__auto__);

(statearr_39367[(1)] = (1));

return statearr_39367;
});
var cljs$core$async$state_machine__36740__auto____1 = (function (state_39265){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_39265);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e39369){var ex__36743__auto__ = e39369;
var statearr_39370_41755 = state_39265;
(statearr_39370_41755[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_39265[(4)]))){
var statearr_39374_41756 = state_39265;
(statearr_39374_41756[(1)] = cljs.core.first((state_39265[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41757 = state_39265;
state_39265 = G__41757;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$state_machine__36740__auto__ = function(state_39265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36740__auto____1.call(this,state_39265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36740__auto____0;
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36740__auto____1;
return cljs$core$async$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_39378 = f__37391__auto__();
(statearr_39378[(6)] = c__37390__auto___41676);

return statearr_39378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39382 = arguments.length;
switch (G__39382) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39399 = arguments.length;
switch (G__39399) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39412 = arguments.length;
switch (G__39412) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__37390__auto___41766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_39495){
var state_val_39496 = (state_39495[(1)]);
if((state_val_39496 === (7))){
var state_39495__$1 = state_39495;
var statearr_39502_41767 = state_39495__$1;
(statearr_39502_41767[(2)] = null);

(statearr_39502_41767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (1))){
var state_39495__$1 = state_39495;
var statearr_39504_41768 = state_39495__$1;
(statearr_39504_41768[(2)] = null);

(statearr_39504_41768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (4))){
var inst_39424 = (state_39495[(7)]);
var inst_39425 = (state_39495[(8)]);
var inst_39427 = (inst_39425 < inst_39424);
var state_39495__$1 = state_39495;
if(cljs.core.truth_(inst_39427)){
var statearr_39508_41769 = state_39495__$1;
(statearr_39508_41769[(1)] = (6));

} else {
var statearr_39509_41772 = state_39495__$1;
(statearr_39509_41772[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (15))){
var inst_39469 = (state_39495[(9)]);
var inst_39477 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39469);
var state_39495__$1 = state_39495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39495__$1,(17),out,inst_39477);
} else {
if((state_val_39496 === (13))){
var inst_39469 = (state_39495[(9)]);
var inst_39469__$1 = (state_39495[(2)]);
var inst_39470 = cljs.core.some(cljs.core.nil_QMARK_,inst_39469__$1);
var state_39495__$1 = (function (){var statearr_39516 = state_39495;
(statearr_39516[(9)] = inst_39469__$1);

return statearr_39516;
})();
if(cljs.core.truth_(inst_39470)){
var statearr_39517_41773 = state_39495__$1;
(statearr_39517_41773[(1)] = (14));

} else {
var statearr_39518_41774 = state_39495__$1;
(statearr_39518_41774[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (6))){
var state_39495__$1 = state_39495;
var statearr_39520_41775 = state_39495__$1;
(statearr_39520_41775[(2)] = null);

(statearr_39520_41775[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (17))){
var inst_39479 = (state_39495[(2)]);
var state_39495__$1 = (function (){var statearr_39534 = state_39495;
(statearr_39534[(10)] = inst_39479);

return statearr_39534;
})();
var statearr_39536_41776 = state_39495__$1;
(statearr_39536_41776[(2)] = null);

(statearr_39536_41776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (3))){
var inst_39485 = (state_39495[(2)]);
var state_39495__$1 = state_39495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39495__$1,inst_39485);
} else {
if((state_val_39496 === (12))){
var _ = (function (){var statearr_39540 = state_39495;
(statearr_39540[(4)] = cljs.core.rest((state_39495[(4)])));

return statearr_39540;
})();
var state_39495__$1 = state_39495;
var ex39532 = (state_39495__$1[(2)]);
var statearr_39542_41777 = state_39495__$1;
(statearr_39542_41777[(5)] = ex39532);


if((ex39532 instanceof Object)){
var statearr_39560_41778 = state_39495__$1;
(statearr_39560_41778[(1)] = (11));

(statearr_39560_41778[(5)] = null);

} else {
throw ex39532;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (2))){
var inst_39422 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39424 = cnt;
var inst_39425 = (0);
var state_39495__$1 = (function (){var statearr_39562 = state_39495;
(statearr_39562[(11)] = inst_39422);

(statearr_39562[(7)] = inst_39424);

(statearr_39562[(8)] = inst_39425);

return statearr_39562;
})();
var statearr_39564_41780 = state_39495__$1;
(statearr_39564_41780[(2)] = null);

(statearr_39564_41780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (11))){
var inst_39444 = (state_39495[(2)]);
var inst_39447 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39495__$1 = (function (){var statearr_39566 = state_39495;
(statearr_39566[(12)] = inst_39444);

return statearr_39566;
})();
var statearr_39568_41781 = state_39495__$1;
(statearr_39568_41781[(2)] = inst_39447);

(statearr_39568_41781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (9))){
var inst_39425 = (state_39495[(8)]);
var _ = (function (){var statearr_39569 = state_39495;
(statearr_39569[(4)] = cljs.core.cons((12),(state_39495[(4)])));

return statearr_39569;
})();
var inst_39454 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39425) : chs__$1.call(null, inst_39425));
var inst_39455 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39425) : done.call(null, inst_39425));
var inst_39456 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39454,inst_39455);
var ___$1 = (function (){var statearr_39572 = state_39495;
(statearr_39572[(4)] = cljs.core.rest((state_39495[(4)])));

return statearr_39572;
})();
var state_39495__$1 = state_39495;
var statearr_39574_41782 = state_39495__$1;
(statearr_39574_41782[(2)] = inst_39456);

(statearr_39574_41782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (5))){
var inst_39467 = (state_39495[(2)]);
var state_39495__$1 = (function (){var statearr_39575 = state_39495;
(statearr_39575[(13)] = inst_39467);

return statearr_39575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39495__$1,(13),dchan);
} else {
if((state_val_39496 === (14))){
var inst_39472 = cljs.core.async.close_BANG_(out);
var state_39495__$1 = state_39495;
var statearr_39578_41783 = state_39495__$1;
(statearr_39578_41783[(2)] = inst_39472);

(statearr_39578_41783[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (16))){
var inst_39482 = (state_39495[(2)]);
var state_39495__$1 = state_39495;
var statearr_39582_41785 = state_39495__$1;
(statearr_39582_41785[(2)] = inst_39482);

(statearr_39582_41785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (10))){
var inst_39425 = (state_39495[(8)]);
var inst_39459 = (state_39495[(2)]);
var inst_39461 = (inst_39425 + (1));
var inst_39425__$1 = inst_39461;
var state_39495__$1 = (function (){var statearr_39583 = state_39495;
(statearr_39583[(14)] = inst_39459);

(statearr_39583[(8)] = inst_39425__$1);

return statearr_39583;
})();
var statearr_39586_41786 = state_39495__$1;
(statearr_39586_41786[(2)] = null);

(statearr_39586_41786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39496 === (8))){
var inst_39465 = (state_39495[(2)]);
var state_39495__$1 = state_39495;
var statearr_39588_41787 = state_39495__$1;
(statearr_39588_41787[(2)] = inst_39465);

(statearr_39588_41787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36740__auto__ = null;
var cljs$core$async$state_machine__36740__auto____0 = (function (){
var statearr_39593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39593[(0)] = cljs$core$async$state_machine__36740__auto__);

(statearr_39593[(1)] = (1));

return statearr_39593;
});
var cljs$core$async$state_machine__36740__auto____1 = (function (state_39495){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_39495);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e39595){var ex__36743__auto__ = e39595;
var statearr_39596_41792 = state_39495;
(statearr_39596_41792[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_39495[(4)]))){
var statearr_39598_41793 = state_39495;
(statearr_39598_41793[(1)] = cljs.core.first((state_39495[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41794 = state_39495;
state_39495 = G__41794;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$state_machine__36740__auto__ = function(state_39495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36740__auto____1.call(this,state_39495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36740__auto____0;
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36740__auto____1;
return cljs$core$async$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_39599 = f__37391__auto__();
(statearr_39599[(6)] = c__37390__auto___41766);

return statearr_39599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39607 = arguments.length;
switch (G__39607) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37390__auto___41799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_39714){
var state_val_39715 = (state_39714[(1)]);
if((state_val_39715 === (7))){
var inst_39658 = (state_39714[(7)]);
var inst_39660 = (state_39714[(8)]);
var inst_39658__$1 = (state_39714[(2)]);
var inst_39660__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39658__$1,(0),null);
var inst_39666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39658__$1,(1),null);
var inst_39673 = (inst_39660__$1 == null);
var state_39714__$1 = (function (){var statearr_39747 = state_39714;
(statearr_39747[(7)] = inst_39658__$1);

(statearr_39747[(8)] = inst_39660__$1);

(statearr_39747[(9)] = inst_39666);

return statearr_39747;
})();
if(cljs.core.truth_(inst_39673)){
var statearr_39752_41803 = state_39714__$1;
(statearr_39752_41803[(1)] = (8));

} else {
var statearr_39755_41804 = state_39714__$1;
(statearr_39755_41804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (1))){
var inst_39644 = cljs.core.vec(chs);
var inst_39645 = inst_39644;
var state_39714__$1 = (function (){var statearr_39760 = state_39714;
(statearr_39760[(10)] = inst_39645);

return statearr_39760;
})();
var statearr_39761_41805 = state_39714__$1;
(statearr_39761_41805[(2)] = null);

(statearr_39761_41805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (4))){
var inst_39645 = (state_39714[(10)]);
var state_39714__$1 = state_39714;
return cljs.core.async.ioc_alts_BANG_(state_39714__$1,(7),inst_39645);
} else {
if((state_val_39715 === (6))){
var inst_39705 = (state_39714[(2)]);
var state_39714__$1 = state_39714;
var statearr_39763_41809 = state_39714__$1;
(statearr_39763_41809[(2)] = inst_39705);

(statearr_39763_41809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (3))){
var inst_39707 = (state_39714[(2)]);
var state_39714__$1 = state_39714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39714__$1,inst_39707);
} else {
if((state_val_39715 === (2))){
var inst_39645 = (state_39714[(10)]);
var inst_39648 = cljs.core.count(inst_39645);
var inst_39649 = (inst_39648 > (0));
var state_39714__$1 = state_39714;
if(cljs.core.truth_(inst_39649)){
var statearr_39774_41810 = state_39714__$1;
(statearr_39774_41810[(1)] = (4));

} else {
var statearr_39775_41811 = state_39714__$1;
(statearr_39775_41811[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (11))){
var inst_39645 = (state_39714[(10)]);
var inst_39692 = (state_39714[(2)]);
var tmp39769 = inst_39645;
var inst_39645__$1 = tmp39769;
var state_39714__$1 = (function (){var statearr_39778 = state_39714;
(statearr_39778[(10)] = inst_39645__$1);

(statearr_39778[(11)] = inst_39692);

return statearr_39778;
})();
var statearr_39779_41813 = state_39714__$1;
(statearr_39779_41813[(2)] = null);

(statearr_39779_41813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (9))){
var inst_39660 = (state_39714[(8)]);
var state_39714__$1 = state_39714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39714__$1,(11),out,inst_39660);
} else {
if((state_val_39715 === (5))){
var inst_39703 = cljs.core.async.close_BANG_(out);
var state_39714__$1 = state_39714;
var statearr_39794_41818 = state_39714__$1;
(statearr_39794_41818[(2)] = inst_39703);

(statearr_39794_41818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (10))){
var inst_39697 = (state_39714[(2)]);
var state_39714__$1 = state_39714;
var statearr_39795_41819 = state_39714__$1;
(statearr_39795_41819[(2)] = inst_39697);

(statearr_39795_41819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39715 === (8))){
var inst_39645 = (state_39714[(10)]);
var inst_39658 = (state_39714[(7)]);
var inst_39660 = (state_39714[(8)]);
var inst_39666 = (state_39714[(9)]);
var inst_39685 = (function (){var cs = inst_39645;
var vec__39654 = inst_39658;
var v = inst_39660;
var c = inst_39666;
return (function (p1__39600_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39600_SHARP_);
});
})();
var inst_39688 = cljs.core.filterv(inst_39685,inst_39645);
var inst_39645__$1 = inst_39688;
var state_39714__$1 = (function (){var statearr_39801 = state_39714;
(statearr_39801[(10)] = inst_39645__$1);

return statearr_39801;
})();
var statearr_39802_41820 = state_39714__$1;
(statearr_39802_41820[(2)] = null);

(statearr_39802_41820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36740__auto__ = null;
var cljs$core$async$state_machine__36740__auto____0 = (function (){
var statearr_39807 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39807[(0)] = cljs$core$async$state_machine__36740__auto__);

(statearr_39807[(1)] = (1));

return statearr_39807;
});
var cljs$core$async$state_machine__36740__auto____1 = (function (state_39714){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_39714);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e39810){var ex__36743__auto__ = e39810;
var statearr_39814_41821 = state_39714;
(statearr_39814_41821[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_39714[(4)]))){
var statearr_39817_41822 = state_39714;
(statearr_39817_41822[(1)] = cljs.core.first((state_39714[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41824 = state_39714;
state_39714 = G__41824;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$state_machine__36740__auto__ = function(state_39714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36740__auto____1.call(this,state_39714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36740__auto____0;
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36740__auto____1;
return cljs$core$async$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_39819 = f__37391__auto__();
(statearr_39819[(6)] = c__37390__auto___41799);

return statearr_39819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39829 = arguments.length;
switch (G__39829) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37390__auto___41839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_39865){
var state_val_39866 = (state_39865[(1)]);
if((state_val_39866 === (7))){
var inst_39843 = (state_39865[(7)]);
var inst_39843__$1 = (state_39865[(2)]);
var inst_39844 = (inst_39843__$1 == null);
var inst_39845 = cljs.core.not(inst_39844);
var state_39865__$1 = (function (){var statearr_39876 = state_39865;
(statearr_39876[(7)] = inst_39843__$1);

return statearr_39876;
})();
if(inst_39845){
var statearr_39877_41853 = state_39865__$1;
(statearr_39877_41853[(1)] = (8));

} else {
var statearr_39879_41858 = state_39865__$1;
(statearr_39879_41858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (1))){
var inst_39835 = (0);
var state_39865__$1 = (function (){var statearr_39880 = state_39865;
(statearr_39880[(8)] = inst_39835);

return statearr_39880;
})();
var statearr_39881_41867 = state_39865__$1;
(statearr_39881_41867[(2)] = null);

(statearr_39881_41867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (4))){
var state_39865__$1 = state_39865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39865__$1,(7),ch);
} else {
if((state_val_39866 === (6))){
var inst_39860 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39882_41868 = state_39865__$1;
(statearr_39882_41868[(2)] = inst_39860);

(statearr_39882_41868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (3))){
var inst_39862 = (state_39865[(2)]);
var inst_39863 = cljs.core.async.close_BANG_(out);
var state_39865__$1 = (function (){var statearr_39883 = state_39865;
(statearr_39883[(9)] = inst_39862);

return statearr_39883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39865__$1,inst_39863);
} else {
if((state_val_39866 === (2))){
var inst_39835 = (state_39865[(8)]);
var inst_39840 = (inst_39835 < n);
var state_39865__$1 = state_39865;
if(cljs.core.truth_(inst_39840)){
var statearr_39888_41870 = state_39865__$1;
(statearr_39888_41870[(1)] = (4));

} else {
var statearr_39889_41871 = state_39865__$1;
(statearr_39889_41871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (11))){
var inst_39835 = (state_39865[(8)]);
var inst_39851 = (state_39865[(2)]);
var inst_39852 = (inst_39835 + (1));
var inst_39835__$1 = inst_39852;
var state_39865__$1 = (function (){var statearr_39890 = state_39865;
(statearr_39890[(8)] = inst_39835__$1);

(statearr_39890[(10)] = inst_39851);

return statearr_39890;
})();
var statearr_39891_41878 = state_39865__$1;
(statearr_39891_41878[(2)] = null);

(statearr_39891_41878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (9))){
var state_39865__$1 = state_39865;
var statearr_39892_41880 = state_39865__$1;
(statearr_39892_41880[(2)] = null);

(statearr_39892_41880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (5))){
var state_39865__$1 = state_39865;
var statearr_39894_41884 = state_39865__$1;
(statearr_39894_41884[(2)] = null);

(statearr_39894_41884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (10))){
var inst_39856 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39895_41892 = state_39865__$1;
(statearr_39895_41892[(2)] = inst_39856);

(statearr_39895_41892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (8))){
var inst_39843 = (state_39865[(7)]);
var state_39865__$1 = state_39865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39865__$1,(11),out,inst_39843);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36740__auto__ = null;
var cljs$core$async$state_machine__36740__auto____0 = (function (){
var statearr_39897 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39897[(0)] = cljs$core$async$state_machine__36740__auto__);

(statearr_39897[(1)] = (1));

return statearr_39897;
});
var cljs$core$async$state_machine__36740__auto____1 = (function (state_39865){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_39865);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e39898){var ex__36743__auto__ = e39898;
var statearr_39899_41897 = state_39865;
(statearr_39899_41897[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_39865[(4)]))){
var statearr_39900_41898 = state_39865;
(statearr_39900_41898[(1)] = cljs.core.first((state_39865[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41899 = state_39865;
state_39865 = G__41899;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$state_machine__36740__auto__ = function(state_39865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36740__auto____1.call(this,state_39865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36740__auto____0;
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36740__auto____1;
return cljs$core$async$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_39903 = f__37391__auto__();
(statearr_39903[(6)] = c__37390__auto___41839);

return statearr_39903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39909 = (function (f,ch,meta39907,_,fn1,meta39910){
this.f = f;
this.ch = ch;
this.meta39907 = meta39907;
this._ = _;
this.fn1 = fn1;
this.meta39910 = meta39910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39911,meta39910__$1){
var self__ = this;
var _39911__$1 = this;
return (new cljs.core.async.t_cljs$core$async39909(self__.f,self__.ch,self__.meta39907,self__._,self__.fn1,meta39910__$1));
}));

(cljs.core.async.t_cljs$core$async39909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39911){
var self__ = this;
var _39911__$1 = this;
return self__.meta39910;
}));

(cljs.core.async.t_cljs$core$async39909.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39909.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__39905_SHARP_){
var G__39913 = (((p1__39905_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39905_SHARP_) : self__.f.call(null, p1__39905_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39913) : f1.call(null, G__39913));
});
}));

(cljs.core.async.t_cljs$core$async39909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39907","meta39907",1728559215,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39906","cljs.core.async/t_cljs$core$async39906",-2023833528,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39910","meta39910",-1760411243,null)], null);
}));

(cljs.core.async.t_cljs$core$async39909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39909");

(cljs.core.async.t_cljs$core$async39909.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39909.
 */
cljs.core.async.__GT_t_cljs$core$async39909 = (function cljs$core$async$__GT_t_cljs$core$async39909(f,ch,meta39907,_,fn1,meta39910){
return (new cljs.core.async.t_cljs$core$async39909(f,ch,meta39907,_,fn1,meta39910));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39906 = (function (f,ch,meta39907){
this.f = f;
this.ch = ch;
this.meta39907 = meta39907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39908,meta39907__$1){
var self__ = this;
var _39908__$1 = this;
return (new cljs.core.async.t_cljs$core$async39906(self__.f,self__.ch,meta39907__$1));
}));

(cljs.core.async.t_cljs$core$async39906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39908){
var self__ = this;
var _39908__$1 = this;
return self__.meta39907;
}));

(cljs.core.async.t_cljs$core$async39906.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39906.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39906.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39906.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39906.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async39909(self__.f,self__.ch,self__.meta39907,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39920 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39920) : self__.f.call(null, G__39920));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39906.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39906.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39907","meta39907",1728559215,null)], null);
}));

(cljs.core.async.t_cljs$core$async39906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39906");

(cljs.core.async.t_cljs$core$async39906.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39906.
 */
cljs.core.async.__GT_t_cljs$core$async39906 = (function cljs$core$async$__GT_t_cljs$core$async39906(f,ch,meta39907){
return (new cljs.core.async.t_cljs$core$async39906(f,ch,meta39907));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async39906(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39933 = (function (f,ch,meta39934){
this.f = f;
this.ch = ch;
this.meta39934 = meta39934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39935,meta39934__$1){
var self__ = this;
var _39935__$1 = this;
return (new cljs.core.async.t_cljs$core$async39933(self__.f,self__.ch,meta39934__$1));
}));

(cljs.core.async.t_cljs$core$async39933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39935){
var self__ = this;
var _39935__$1 = this;
return self__.meta39934;
}));

(cljs.core.async.t_cljs$core$async39933.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39933.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39933.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async39933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39934","meta39934",614372066,null)], null);
}));

(cljs.core.async.t_cljs$core$async39933.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39933");

(cljs.core.async.t_cljs$core$async39933.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39933");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39933.
 */
cljs.core.async.__GT_t_cljs$core$async39933 = (function cljs$core$async$__GT_t_cljs$core$async39933(f,ch,meta39934){
return (new cljs.core.async.t_cljs$core$async39933(f,ch,meta39934));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async39933(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39955 = (function (p,ch,meta39956){
this.p = p;
this.ch = ch;
this.meta39956 = meta39956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39957,meta39956__$1){
var self__ = this;
var _39957__$1 = this;
return (new cljs.core.async.t_cljs$core$async39955(self__.p,self__.ch,meta39956__$1));
}));

(cljs.core.async.t_cljs$core$async39955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39957){
var self__ = this;
var _39957__$1 = this;
return self__.meta39956;
}));

(cljs.core.async.t_cljs$core$async39955.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39955.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39955.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39955.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39956","meta39956",355250038,null)], null);
}));

(cljs.core.async.t_cljs$core$async39955.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39955");

(cljs.core.async.t_cljs$core$async39955.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39955");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39955.
 */
cljs.core.async.__GT_t_cljs$core$async39955 = (function cljs$core$async$__GT_t_cljs$core$async39955(p,ch,meta39956){
return (new cljs.core.async.t_cljs$core$async39955(p,ch,meta39956));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async39955(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39984 = arguments.length;
switch (G__39984) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37390__auto___41907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_40009){
var state_val_40010 = (state_40009[(1)]);
if((state_val_40010 === (7))){
var inst_40003 = (state_40009[(2)]);
var state_40009__$1 = state_40009;
var statearr_40011_41908 = state_40009__$1;
(statearr_40011_41908[(2)] = inst_40003);

(statearr_40011_41908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40010 === (1))){
var state_40009__$1 = state_40009;
var statearr_40012_41909 = state_40009__$1;
(statearr_40012_41909[(2)] = null);

(statearr_40012_41909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40010 === (4))){
var inst_39988 = (state_40009[(7)]);
var inst_39988__$1 = (state_40009[(2)]);
var inst_39990 = (inst_39988__$1 == null);
var state_40009__$1 = (function (){var statearr_40013 = state_40009;
(statearr_40013[(7)] = inst_39988__$1);

return statearr_40013;
})();
if(cljs.core.truth_(inst_39990)){
var statearr_40014_41910 = state_40009__$1;
(statearr_40014_41910[(1)] = (5));

} else {
var statearr_40027_41911 = state_40009__$1;
(statearr_40027_41911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40010 === (6))){
var inst_39988 = (state_40009[(7)]);
var inst_39994 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39988) : p.call(null, inst_39988));
var state_40009__$1 = state_40009;
if(cljs.core.truth_(inst_39994)){
var statearr_40040_41912 = state_40009__$1;
(statearr_40040_41912[(1)] = (8));

} else {
var statearr_40041_41913 = state_40009__$1;
(statearr_40041_41913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40010 === (3))){
var inst_40005 = (state_40009[(2)]);
var state_40009__$1 = state_40009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40009__$1,inst_40005);
} else {
if((state_val_40010 === (2))){
var state_40009__$1 = state_40009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40009__$1,(4),ch);
} else {
if((state_val_40010 === (11))){
var inst_39997 = (state_40009[(2)]);
var state_40009__$1 = state_40009;
var statearr_40045_41915 = state_40009__$1;
(statearr_40045_41915[(2)] = inst_39997);

(statearr_40045_41915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40010 === (9))){
var state_40009__$1 = state_40009;
var statearr_40046_41916 = state_40009__$1;
(statearr_40046_41916[(2)] = null);

(statearr_40046_41916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40010 === (5))){
var inst_39992 = cljs.core.async.close_BANG_(out);
var state_40009__$1 = state_40009;
var statearr_40050_41917 = state_40009__$1;
(statearr_40050_41917[(2)] = inst_39992);

(statearr_40050_41917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40010 === (10))){
var inst_40000 = (state_40009[(2)]);
var state_40009__$1 = (function (){var statearr_40052 = state_40009;
(statearr_40052[(8)] = inst_40000);

return statearr_40052;
})();
var statearr_40053_41918 = state_40009__$1;
(statearr_40053_41918[(2)] = null);

(statearr_40053_41918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40010 === (8))){
var inst_39988 = (state_40009[(7)]);
var state_40009__$1 = state_40009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40009__$1,(11),out,inst_39988);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36740__auto__ = null;
var cljs$core$async$state_machine__36740__auto____0 = (function (){
var statearr_40055 = [null,null,null,null,null,null,null,null,null];
(statearr_40055[(0)] = cljs$core$async$state_machine__36740__auto__);

(statearr_40055[(1)] = (1));

return statearr_40055;
});
var cljs$core$async$state_machine__36740__auto____1 = (function (state_40009){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_40009);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e40056){var ex__36743__auto__ = e40056;
var statearr_40059_41919 = state_40009;
(statearr_40059_41919[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_40009[(4)]))){
var statearr_40060_41920 = state_40009;
(statearr_40060_41920[(1)] = cljs.core.first((state_40009[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41921 = state_40009;
state_40009 = G__41921;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$state_machine__36740__auto__ = function(state_40009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36740__auto____1.call(this,state_40009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36740__auto____0;
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36740__auto____1;
return cljs$core$async$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_40061 = f__37391__auto__();
(statearr_40061[(6)] = c__37390__auto___41907);

return statearr_40061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40067 = arguments.length;
switch (G__40067) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37390__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_40173){
var state_val_40174 = (state_40173[(1)]);
if((state_val_40174 === (7))){
var inst_40165 = (state_40173[(2)]);
var state_40173__$1 = state_40173;
var statearr_40175_41926 = state_40173__$1;
(statearr_40175_41926[(2)] = inst_40165);

(statearr_40175_41926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (20))){
var inst_40126 = (state_40173[(7)]);
var inst_40141 = (state_40173[(2)]);
var inst_40142 = cljs.core.next(inst_40126);
var inst_40099 = inst_40142;
var inst_40100 = null;
var inst_40101 = (0);
var inst_40102 = (0);
var state_40173__$1 = (function (){var statearr_40176 = state_40173;
(statearr_40176[(8)] = inst_40100);

(statearr_40176[(9)] = inst_40101);

(statearr_40176[(10)] = inst_40102);

(statearr_40176[(11)] = inst_40141);

(statearr_40176[(12)] = inst_40099);

return statearr_40176;
})();
var statearr_40177_41927 = state_40173__$1;
(statearr_40177_41927[(2)] = null);

(statearr_40177_41927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (1))){
var state_40173__$1 = state_40173;
var statearr_40178_41928 = state_40173__$1;
(statearr_40178_41928[(2)] = null);

(statearr_40178_41928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (4))){
var inst_40082 = (state_40173[(13)]);
var inst_40082__$1 = (state_40173[(2)]);
var inst_40083 = (inst_40082__$1 == null);
var state_40173__$1 = (function (){var statearr_40189 = state_40173;
(statearr_40189[(13)] = inst_40082__$1);

return statearr_40189;
})();
if(cljs.core.truth_(inst_40083)){
var statearr_40191_41930 = state_40173__$1;
(statearr_40191_41930[(1)] = (5));

} else {
var statearr_40196_41934 = state_40173__$1;
(statearr_40196_41934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (15))){
var state_40173__$1 = state_40173;
var statearr_40210_41935 = state_40173__$1;
(statearr_40210_41935[(2)] = null);

(statearr_40210_41935[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (21))){
var state_40173__$1 = state_40173;
var statearr_40211_41936 = state_40173__$1;
(statearr_40211_41936[(2)] = null);

(statearr_40211_41936[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (13))){
var inst_40100 = (state_40173[(8)]);
var inst_40101 = (state_40173[(9)]);
var inst_40102 = (state_40173[(10)]);
var inst_40099 = (state_40173[(12)]);
var inst_40120 = (state_40173[(2)]);
var inst_40123 = (inst_40102 + (1));
var tmp40207 = inst_40100;
var tmp40208 = inst_40101;
var tmp40209 = inst_40099;
var inst_40099__$1 = tmp40209;
var inst_40100__$1 = tmp40207;
var inst_40101__$1 = tmp40208;
var inst_40102__$1 = inst_40123;
var state_40173__$1 = (function (){var statearr_40212 = state_40173;
(statearr_40212[(8)] = inst_40100__$1);

(statearr_40212[(9)] = inst_40101__$1);

(statearr_40212[(10)] = inst_40102__$1);

(statearr_40212[(14)] = inst_40120);

(statearr_40212[(12)] = inst_40099__$1);

return statearr_40212;
})();
var statearr_40213_41941 = state_40173__$1;
(statearr_40213_41941[(2)] = null);

(statearr_40213_41941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (22))){
var state_40173__$1 = state_40173;
var statearr_40220_41942 = state_40173__$1;
(statearr_40220_41942[(2)] = null);

(statearr_40220_41942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (6))){
var inst_40082 = (state_40173[(13)]);
var inst_40095 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40082) : f.call(null, inst_40082));
var inst_40096 = cljs.core.seq(inst_40095);
var inst_40099 = inst_40096;
var inst_40100 = null;
var inst_40101 = (0);
var inst_40102 = (0);
var state_40173__$1 = (function (){var statearr_40225 = state_40173;
(statearr_40225[(8)] = inst_40100);

(statearr_40225[(9)] = inst_40101);

(statearr_40225[(10)] = inst_40102);

(statearr_40225[(12)] = inst_40099);

return statearr_40225;
})();
var statearr_40226_41945 = state_40173__$1;
(statearr_40226_41945[(2)] = null);

(statearr_40226_41945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (17))){
var inst_40126 = (state_40173[(7)]);
var inst_40131 = cljs.core.chunk_first(inst_40126);
var inst_40132 = cljs.core.chunk_rest(inst_40126);
var inst_40133 = cljs.core.count(inst_40131);
var inst_40099 = inst_40132;
var inst_40100 = inst_40131;
var inst_40101 = inst_40133;
var inst_40102 = (0);
var state_40173__$1 = (function (){var statearr_40234 = state_40173;
(statearr_40234[(8)] = inst_40100);

(statearr_40234[(9)] = inst_40101);

(statearr_40234[(10)] = inst_40102);

(statearr_40234[(12)] = inst_40099);

return statearr_40234;
})();
var statearr_40235_41946 = state_40173__$1;
(statearr_40235_41946[(2)] = null);

(statearr_40235_41946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (3))){
var inst_40167 = (state_40173[(2)]);
var state_40173__$1 = state_40173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40173__$1,inst_40167);
} else {
if((state_val_40174 === (12))){
var inst_40152 = (state_40173[(2)]);
var state_40173__$1 = state_40173;
var statearr_40239_41951 = state_40173__$1;
(statearr_40239_41951[(2)] = inst_40152);

(statearr_40239_41951[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (2))){
var state_40173__$1 = state_40173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40173__$1,(4),in$);
} else {
if((state_val_40174 === (23))){
var inst_40163 = (state_40173[(2)]);
var state_40173__$1 = state_40173;
var statearr_40264_41952 = state_40173__$1;
(statearr_40264_41952[(2)] = inst_40163);

(statearr_40264_41952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (19))){
var inst_40145 = (state_40173[(2)]);
var state_40173__$1 = state_40173;
var statearr_40271_41953 = state_40173__$1;
(statearr_40271_41953[(2)] = inst_40145);

(statearr_40271_41953[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (11))){
var inst_40099 = (state_40173[(12)]);
var inst_40126 = (state_40173[(7)]);
var inst_40126__$1 = cljs.core.seq(inst_40099);
var state_40173__$1 = (function (){var statearr_40274 = state_40173;
(statearr_40274[(7)] = inst_40126__$1);

return statearr_40274;
})();
if(inst_40126__$1){
var statearr_40276_41954 = state_40173__$1;
(statearr_40276_41954[(1)] = (14));

} else {
var statearr_40280_41955 = state_40173__$1;
(statearr_40280_41955[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (9))){
var inst_40154 = (state_40173[(2)]);
var inst_40155 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40173__$1 = (function (){var statearr_40283 = state_40173;
(statearr_40283[(15)] = inst_40154);

return statearr_40283;
})();
if(cljs.core.truth_(inst_40155)){
var statearr_40284_41959 = state_40173__$1;
(statearr_40284_41959[(1)] = (21));

} else {
var statearr_40288_41960 = state_40173__$1;
(statearr_40288_41960[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (5))){
var inst_40085 = cljs.core.async.close_BANG_(out);
var state_40173__$1 = state_40173;
var statearr_40290_41961 = state_40173__$1;
(statearr_40290_41961[(2)] = inst_40085);

(statearr_40290_41961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (14))){
var inst_40126 = (state_40173[(7)]);
var inst_40129 = cljs.core.chunked_seq_QMARK_(inst_40126);
var state_40173__$1 = state_40173;
if(inst_40129){
var statearr_40294_41962 = state_40173__$1;
(statearr_40294_41962[(1)] = (17));

} else {
var statearr_40295_41963 = state_40173__$1;
(statearr_40295_41963[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (16))){
var inst_40150 = (state_40173[(2)]);
var state_40173__$1 = state_40173;
var statearr_40296_41964 = state_40173__$1;
(statearr_40296_41964[(2)] = inst_40150);

(statearr_40296_41964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40174 === (10))){
var inst_40100 = (state_40173[(8)]);
var inst_40102 = (state_40173[(10)]);
var inst_40118 = cljs.core._nth(inst_40100,inst_40102);
var state_40173__$1 = state_40173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40173__$1,(13),out,inst_40118);
} else {
if((state_val_40174 === (18))){
var inst_40126 = (state_40173[(7)]);
var inst_40136 = cljs.core.first(inst_40126);
var state_40173__$1 = state_40173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40173__$1,(20),out,inst_40136);
} else {
if((state_val_40174 === (8))){
var inst_40101 = (state_40173[(9)]);
var inst_40102 = (state_40173[(10)]);
var inst_40113 = (inst_40102 < inst_40101);
var inst_40114 = inst_40113;
var state_40173__$1 = state_40173;
if(cljs.core.truth_(inst_40114)){
var statearr_40301_41965 = state_40173__$1;
(statearr_40301_41965[(1)] = (10));

} else {
var statearr_40302_41966 = state_40173__$1;
(statearr_40302_41966[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36740__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36740__auto____0 = (function (){
var statearr_40303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40303[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36740__auto__);

(statearr_40303[(1)] = (1));

return statearr_40303;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36740__auto____1 = (function (state_40173){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_40173);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e40304){var ex__36743__auto__ = e40304;
var statearr_40305_41967 = state_40173;
(statearr_40305_41967[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_40173[(4)]))){
var statearr_40306_41968 = state_40173;
(statearr_40306_41968[(1)] = cljs.core.first((state_40173[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41969 = state_40173;
state_40173 = G__41969;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36740__auto__ = function(state_40173){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36740__auto____1.call(this,state_40173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36740__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36740__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_40308 = f__37391__auto__();
(statearr_40308[(6)] = c__37390__auto__);

return statearr_40308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));

return c__37390__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40311 = arguments.length;
switch (G__40311) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40320 = arguments.length;
switch (G__40320) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40327 = arguments.length;
switch (G__40327) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37390__auto___41983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_40355){
var state_val_40356 = (state_40355[(1)]);
if((state_val_40356 === (7))){
var inst_40350 = (state_40355[(2)]);
var state_40355__$1 = state_40355;
var statearr_40358_41984 = state_40355__$1;
(statearr_40358_41984[(2)] = inst_40350);

(statearr_40358_41984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (1))){
var inst_40331 = null;
var state_40355__$1 = (function (){var statearr_40359 = state_40355;
(statearr_40359[(7)] = inst_40331);

return statearr_40359;
})();
var statearr_40360_41985 = state_40355__$1;
(statearr_40360_41985[(2)] = null);

(statearr_40360_41985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (4))){
var inst_40334 = (state_40355[(8)]);
var inst_40334__$1 = (state_40355[(2)]);
var inst_40335 = (inst_40334__$1 == null);
var inst_40336 = cljs.core.not(inst_40335);
var state_40355__$1 = (function (){var statearr_40361 = state_40355;
(statearr_40361[(8)] = inst_40334__$1);

return statearr_40361;
})();
if(inst_40336){
var statearr_40362_41986 = state_40355__$1;
(statearr_40362_41986[(1)] = (5));

} else {
var statearr_40363_41987 = state_40355__$1;
(statearr_40363_41987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (6))){
var state_40355__$1 = state_40355;
var statearr_40364_41988 = state_40355__$1;
(statearr_40364_41988[(2)] = null);

(statearr_40364_41988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (3))){
var inst_40352 = (state_40355[(2)]);
var inst_40353 = cljs.core.async.close_BANG_(out);
var state_40355__$1 = (function (){var statearr_40366 = state_40355;
(statearr_40366[(9)] = inst_40352);

return statearr_40366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40355__$1,inst_40353);
} else {
if((state_val_40356 === (2))){
var state_40355__$1 = state_40355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40355__$1,(4),ch);
} else {
if((state_val_40356 === (11))){
var inst_40334 = (state_40355[(8)]);
var inst_40344 = (state_40355[(2)]);
var inst_40331 = inst_40334;
var state_40355__$1 = (function (){var statearr_40368 = state_40355;
(statearr_40368[(7)] = inst_40331);

(statearr_40368[(10)] = inst_40344);

return statearr_40368;
})();
var statearr_40369_41995 = state_40355__$1;
(statearr_40369_41995[(2)] = null);

(statearr_40369_41995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (9))){
var inst_40334 = (state_40355[(8)]);
var state_40355__$1 = state_40355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40355__$1,(11),out,inst_40334);
} else {
if((state_val_40356 === (5))){
var inst_40331 = (state_40355[(7)]);
var inst_40334 = (state_40355[(8)]);
var inst_40339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40334,inst_40331);
var state_40355__$1 = state_40355;
if(inst_40339){
var statearr_40373_42000 = state_40355__$1;
(statearr_40373_42000[(1)] = (8));

} else {
var statearr_40374_42004 = state_40355__$1;
(statearr_40374_42004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (10))){
var inst_40347 = (state_40355[(2)]);
var state_40355__$1 = state_40355;
var statearr_40375_42005 = state_40355__$1;
(statearr_40375_42005[(2)] = inst_40347);

(statearr_40375_42005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40356 === (8))){
var inst_40331 = (state_40355[(7)]);
var tmp40372 = inst_40331;
var inst_40331__$1 = tmp40372;
var state_40355__$1 = (function (){var statearr_40376 = state_40355;
(statearr_40376[(7)] = inst_40331__$1);

return statearr_40376;
})();
var statearr_40377_42006 = state_40355__$1;
(statearr_40377_42006[(2)] = null);

(statearr_40377_42006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36740__auto__ = null;
var cljs$core$async$state_machine__36740__auto____0 = (function (){
var statearr_40378 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40378[(0)] = cljs$core$async$state_machine__36740__auto__);

(statearr_40378[(1)] = (1));

return statearr_40378;
});
var cljs$core$async$state_machine__36740__auto____1 = (function (state_40355){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_40355);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e40380){var ex__36743__auto__ = e40380;
var statearr_40384_42007 = state_40355;
(statearr_40384_42007[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_40355[(4)]))){
var statearr_40390_42011 = state_40355;
(statearr_40390_42011[(1)] = cljs.core.first((state_40355[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42012 = state_40355;
state_40355 = G__42012;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$state_machine__36740__auto__ = function(state_40355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36740__auto____1.call(this,state_40355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36740__auto____0;
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36740__auto____1;
return cljs$core$async$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_40391 = f__37391__auto__();
(statearr_40391[(6)] = c__37390__auto___41983);

return statearr_40391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40397 = arguments.length;
switch (G__40397) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37390__auto___42017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_40451){
var state_val_40452 = (state_40451[(1)]);
if((state_val_40452 === (7))){
var inst_40446 = (state_40451[(2)]);
var state_40451__$1 = state_40451;
var statearr_40454_42021 = state_40451__$1;
(statearr_40454_42021[(2)] = inst_40446);

(statearr_40454_42021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40452 === (1))){
var inst_40411 = (new Array(n));
var inst_40412 = inst_40411;
var inst_40413 = (0);
var state_40451__$1 = (function (){var statearr_40455 = state_40451;
(statearr_40455[(7)] = inst_40413);

(statearr_40455[(8)] = inst_40412);

return statearr_40455;
})();
var statearr_40457_42022 = state_40451__$1;
(statearr_40457_42022[(2)] = null);

(statearr_40457_42022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40452 === (4))){
var inst_40417 = (state_40451[(9)]);
var inst_40417__$1 = (state_40451[(2)]);
var inst_40418 = (inst_40417__$1 == null);
var inst_40419 = cljs.core.not(inst_40418);
var state_40451__$1 = (function (){var statearr_40461 = state_40451;
(statearr_40461[(9)] = inst_40417__$1);

return statearr_40461;
})();
if(inst_40419){
var statearr_40463_42023 = state_40451__$1;
(statearr_40463_42023[(1)] = (5));

} else {
var statearr_40464_42024 = state_40451__$1;
(statearr_40464_42024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40452 === (15))){
var inst_40440 = (state_40451[(2)]);
var state_40451__$1 = state_40451;
var statearr_40465_42025 = state_40451__$1;
(statearr_40465_42025[(2)] = inst_40440);

(statearr_40465_42025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40452 === (13))){
var state_40451__$1 = state_40451;
var statearr_40467_42027 = state_40451__$1;
(statearr_40467_42027[(2)] = null);

(statearr_40467_42027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40452 === (6))){
var inst_40413 = (state_40451[(7)]);
var inst_40436 = (inst_40413 > (0));
var state_40451__$1 = state_40451;
if(cljs.core.truth_(inst_40436)){
var statearr_40470_42028 = state_40451__$1;
(statearr_40470_42028[(1)] = (12));

} else {
var statearr_40471_42029 = state_40451__$1;
(statearr_40471_42029[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40452 === (3))){
var inst_40448 = (state_40451[(2)]);
var state_40451__$1 = state_40451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40451__$1,inst_40448);
} else {
if((state_val_40452 === (12))){
var inst_40412 = (state_40451[(8)]);
var inst_40438 = cljs.core.vec(inst_40412);
var state_40451__$1 = state_40451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40451__$1,(15),out,inst_40438);
} else {
if((state_val_40452 === (2))){
var state_40451__$1 = state_40451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40451__$1,(4),ch);
} else {
if((state_val_40452 === (11))){
var inst_40430 = (state_40451[(2)]);
var inst_40431 = (new Array(n));
var inst_40412 = inst_40431;
var inst_40413 = (0);
var state_40451__$1 = (function (){var statearr_40478 = state_40451;
(statearr_40478[(7)] = inst_40413);

(statearr_40478[(10)] = inst_40430);

(statearr_40478[(8)] = inst_40412);

return statearr_40478;
})();
var statearr_40479_42039 = state_40451__$1;
(statearr_40479_42039[(2)] = null);

(statearr_40479_42039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40452 === (9))){
var inst_40412 = (state_40451[(8)]);
var inst_40428 = cljs.core.vec(inst_40412);
var state_40451__$1 = state_40451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40451__$1,(11),out,inst_40428);
} else {
if((state_val_40452 === (5))){
var inst_40423 = (state_40451[(11)]);
var inst_40417 = (state_40451[(9)]);
var inst_40413 = (state_40451[(7)]);
var inst_40412 = (state_40451[(8)]);
var inst_40422 = (inst_40412[inst_40413] = inst_40417);
var inst_40423__$1 = (inst_40413 + (1));
var inst_40424 = (inst_40423__$1 < n);
var state_40451__$1 = (function (){var statearr_40482 = state_40451;
(statearr_40482[(11)] = inst_40423__$1);

(statearr_40482[(12)] = inst_40422);

return statearr_40482;
})();
if(cljs.core.truth_(inst_40424)){
var statearr_40485_42047 = state_40451__$1;
(statearr_40485_42047[(1)] = (8));

} else {
var statearr_40487_42048 = state_40451__$1;
(statearr_40487_42048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40452 === (14))){
var inst_40443 = (state_40451[(2)]);
var inst_40444 = cljs.core.async.close_BANG_(out);
var state_40451__$1 = (function (){var statearr_40489 = state_40451;
(statearr_40489[(13)] = inst_40443);

return statearr_40489;
})();
var statearr_40490_42050 = state_40451__$1;
(statearr_40490_42050[(2)] = inst_40444);

(statearr_40490_42050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40452 === (10))){
var inst_40434 = (state_40451[(2)]);
var state_40451__$1 = state_40451;
var statearr_40493_42057 = state_40451__$1;
(statearr_40493_42057[(2)] = inst_40434);

(statearr_40493_42057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40452 === (8))){
var inst_40423 = (state_40451[(11)]);
var inst_40412 = (state_40451[(8)]);
var tmp40488 = inst_40412;
var inst_40412__$1 = tmp40488;
var inst_40413 = inst_40423;
var state_40451__$1 = (function (){var statearr_40497 = state_40451;
(statearr_40497[(7)] = inst_40413);

(statearr_40497[(8)] = inst_40412__$1);

return statearr_40497;
})();
var statearr_40499_42059 = state_40451__$1;
(statearr_40499_42059[(2)] = null);

(statearr_40499_42059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36740__auto__ = null;
var cljs$core$async$state_machine__36740__auto____0 = (function (){
var statearr_40501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40501[(0)] = cljs$core$async$state_machine__36740__auto__);

(statearr_40501[(1)] = (1));

return statearr_40501;
});
var cljs$core$async$state_machine__36740__auto____1 = (function (state_40451){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_40451);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e40503){var ex__36743__auto__ = e40503;
var statearr_40504_42064 = state_40451;
(statearr_40504_42064[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_40451[(4)]))){
var statearr_40506_42065 = state_40451;
(statearr_40506_42065[(1)] = cljs.core.first((state_40451[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42066 = state_40451;
state_40451 = G__42066;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$state_machine__36740__auto__ = function(state_40451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36740__auto____1.call(this,state_40451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36740__auto____0;
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36740__auto____1;
return cljs$core$async$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_40511 = f__37391__auto__();
(statearr_40511[(6)] = c__37390__auto___42017);

return statearr_40511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40518 = arguments.length;
switch (G__40518) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37390__auto___42068 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37391__auto__ = (function (){var switch__36739__auto__ = (function (state_40600){
var state_val_40601 = (state_40600[(1)]);
if((state_val_40601 === (7))){
var inst_40582 = (state_40600[(2)]);
var state_40600__$1 = state_40600;
var statearr_40606_42069 = state_40600__$1;
(statearr_40606_42069[(2)] = inst_40582);

(statearr_40606_42069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (1))){
var inst_40526 = [];
var inst_40527 = inst_40526;
var inst_40528 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40600__$1 = (function (){var statearr_40607 = state_40600;
(statearr_40607[(7)] = inst_40527);

(statearr_40607[(8)] = inst_40528);

return statearr_40607;
})();
var statearr_40608_42076 = state_40600__$1;
(statearr_40608_42076[(2)] = null);

(statearr_40608_42076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (4))){
var inst_40531 = (state_40600[(9)]);
var inst_40531__$1 = (state_40600[(2)]);
var inst_40532 = (inst_40531__$1 == null);
var inst_40533 = cljs.core.not(inst_40532);
var state_40600__$1 = (function (){var statearr_40612 = state_40600;
(statearr_40612[(9)] = inst_40531__$1);

return statearr_40612;
})();
if(inst_40533){
var statearr_40614_42081 = state_40600__$1;
(statearr_40614_42081[(1)] = (5));

} else {
var statearr_40618_42082 = state_40600__$1;
(statearr_40618_42082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (15))){
var inst_40527 = (state_40600[(7)]);
var inst_40574 = cljs.core.vec(inst_40527);
var state_40600__$1 = state_40600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40600__$1,(18),out,inst_40574);
} else {
if((state_val_40601 === (13))){
var inst_40563 = (state_40600[(2)]);
var state_40600__$1 = state_40600;
var statearr_40620_42083 = state_40600__$1;
(statearr_40620_42083[(2)] = inst_40563);

(statearr_40620_42083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (6))){
var inst_40527 = (state_40600[(7)]);
var inst_40569 = inst_40527.length;
var inst_40570 = (inst_40569 > (0));
var state_40600__$1 = state_40600;
if(cljs.core.truth_(inst_40570)){
var statearr_40621_42084 = state_40600__$1;
(statearr_40621_42084[(1)] = (15));

} else {
var statearr_40622_42085 = state_40600__$1;
(statearr_40622_42085[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (17))){
var inst_40579 = (state_40600[(2)]);
var inst_40580 = cljs.core.async.close_BANG_(out);
var state_40600__$1 = (function (){var statearr_40624 = state_40600;
(statearr_40624[(10)] = inst_40579);

return statearr_40624;
})();
var statearr_40628_42086 = state_40600__$1;
(statearr_40628_42086[(2)] = inst_40580);

(statearr_40628_42086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (3))){
var inst_40584 = (state_40600[(2)]);
var state_40600__$1 = state_40600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40600__$1,inst_40584);
} else {
if((state_val_40601 === (12))){
var inst_40527 = (state_40600[(7)]);
var inst_40548 = cljs.core.vec(inst_40527);
var state_40600__$1 = state_40600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40600__$1,(14),out,inst_40548);
} else {
if((state_val_40601 === (2))){
var state_40600__$1 = state_40600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40600__$1,(4),ch);
} else {
if((state_val_40601 === (11))){
var inst_40527 = (state_40600[(7)]);
var inst_40531 = (state_40600[(9)]);
var inst_40535 = (state_40600[(11)]);
var inst_40544 = inst_40527.push(inst_40531);
var tmp40629 = inst_40527;
var inst_40527__$1 = tmp40629;
var inst_40528 = inst_40535;
var state_40600__$1 = (function (){var statearr_40641 = state_40600;
(statearr_40641[(7)] = inst_40527__$1);

(statearr_40641[(8)] = inst_40528);

(statearr_40641[(12)] = inst_40544);

return statearr_40641;
})();
var statearr_40642_42087 = state_40600__$1;
(statearr_40642_42087[(2)] = null);

(statearr_40642_42087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (9))){
var inst_40528 = (state_40600[(8)]);
var inst_40539 = cljs.core.keyword_identical_QMARK_(inst_40528,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_40600__$1 = state_40600;
var statearr_40643_42092 = state_40600__$1;
(statearr_40643_42092[(2)] = inst_40539);

(statearr_40643_42092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (5))){
var inst_40536 = (state_40600[(13)]);
var inst_40528 = (state_40600[(8)]);
var inst_40531 = (state_40600[(9)]);
var inst_40535 = (state_40600[(11)]);
var inst_40535__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40531) : f.call(null, inst_40531));
var inst_40536__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40535__$1,inst_40528);
var state_40600__$1 = (function (){var statearr_40644 = state_40600;
(statearr_40644[(13)] = inst_40536__$1);

(statearr_40644[(11)] = inst_40535__$1);

return statearr_40644;
})();
if(inst_40536__$1){
var statearr_40648_42103 = state_40600__$1;
(statearr_40648_42103[(1)] = (8));

} else {
var statearr_40649_42104 = state_40600__$1;
(statearr_40649_42104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (14))){
var inst_40531 = (state_40600[(9)]);
var inst_40535 = (state_40600[(11)]);
var inst_40550 = (state_40600[(2)]);
var inst_40554 = [];
var inst_40558 = inst_40554.push(inst_40531);
var inst_40527 = inst_40554;
var inst_40528 = inst_40535;
var state_40600__$1 = (function (){var statearr_40650 = state_40600;
(statearr_40650[(14)] = inst_40558);

(statearr_40650[(7)] = inst_40527);

(statearr_40650[(8)] = inst_40528);

(statearr_40650[(15)] = inst_40550);

return statearr_40650;
})();
var statearr_40655_42105 = state_40600__$1;
(statearr_40655_42105[(2)] = null);

(statearr_40655_42105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (16))){
var state_40600__$1 = state_40600;
var statearr_40660_42110 = state_40600__$1;
(statearr_40660_42110[(2)] = null);

(statearr_40660_42110[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (10))){
var inst_40541 = (state_40600[(2)]);
var state_40600__$1 = state_40600;
if(cljs.core.truth_(inst_40541)){
var statearr_40667_42111 = state_40600__$1;
(statearr_40667_42111[(1)] = (11));

} else {
var statearr_40669_42112 = state_40600__$1;
(statearr_40669_42112[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (18))){
var inst_40576 = (state_40600[(2)]);
var state_40600__$1 = state_40600;
var statearr_40673_42113 = state_40600__$1;
(statearr_40673_42113[(2)] = inst_40576);

(statearr_40673_42113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40601 === (8))){
var inst_40536 = (state_40600[(13)]);
var state_40600__$1 = state_40600;
var statearr_40680_42114 = state_40600__$1;
(statearr_40680_42114[(2)] = inst_40536);

(statearr_40680_42114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36740__auto__ = null;
var cljs$core$async$state_machine__36740__auto____0 = (function (){
var statearr_40684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40684[(0)] = cljs$core$async$state_machine__36740__auto__);

(statearr_40684[(1)] = (1));

return statearr_40684;
});
var cljs$core$async$state_machine__36740__auto____1 = (function (state_40600){
while(true){
var ret_value__36741__auto__ = (function (){try{while(true){
var result__36742__auto__ = switch__36739__auto__(state_40600);
if(cljs.core.keyword_identical_QMARK_(result__36742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36742__auto__;
}
break;
}
}catch (e40685){var ex__36743__auto__ = e40685;
var statearr_40686_42115 = state_40600;
(statearr_40686_42115[(2)] = ex__36743__auto__);


if(cljs.core.seq((state_40600[(4)]))){
var statearr_40687_42116 = state_40600;
(statearr_40687_42116[(1)] = cljs.core.first((state_40600[(4)])));

} else {
throw ex__36743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42117 = state_40600;
state_40600 = G__42117;
continue;
} else {
return ret_value__36741__auto__;
}
break;
}
});
cljs$core$async$state_machine__36740__auto__ = function(state_40600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36740__auto____1.call(this,state_40600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36740__auto____0;
cljs$core$async$state_machine__36740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36740__auto____1;
return cljs$core$async$state_machine__36740__auto__;
})()
})();
var state__37392__auto__ = (function (){var statearr_40691 = f__37391__auto__();
(statearr_40691[(6)] = c__37390__auto___42068);

return statearr_40691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37392__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
