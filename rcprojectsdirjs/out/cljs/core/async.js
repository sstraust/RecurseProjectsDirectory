// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__3298 = arguments.length;
switch (G__3298) {
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
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3299 = (function (f,blockable,meta3300){
this.f = f;
this.blockable = blockable;
this.meta3300 = meta3300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3301,meta3300__$1){
var self__ = this;
var _3301__$1 = this;
return (new cljs.core.async.t_cljs$core$async3299(self__.f,self__.blockable,meta3300__$1));
}));

(cljs.core.async.t_cljs$core$async3299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3301){
var self__ = this;
var _3301__$1 = this;
return self__.meta3300;
}));

(cljs.core.async.t_cljs$core$async3299.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async3299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async3299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async3299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3300","meta3300",-1260281632,null)], null);
}));

(cljs.core.async.t_cljs$core$async3299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3299");

(cljs.core.async.t_cljs$core$async3299.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async3299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3299.
 */
cljs.core.async.__GT_t_cljs$core$async3299 = (function cljs$core$async$__GT_t_cljs$core$async3299(f__$1,blockable__$1,meta3300){
return (new cljs.core.async.t_cljs$core$async3299(f__$1,blockable__$1,meta3300));
});

}

return (new cljs.core.async.t_cljs$core$async3299(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__3305 = arguments.length;
switch (G__3305) {
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
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__3308 = arguments.length;
switch (G__3308) {
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
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__3311 = arguments.length;
switch (G__3311) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3313 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3313);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_3313);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__3315 = arguments.length;
switch (G__3315) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___3317 = n;
var x_3318 = (0);
while(true){
if((x_3318 < n__5633__auto___3317)){
(a[x_3318] = x_3318);

var G__3319 = (x_3318 + (1));
x_3318 = G__3319;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3320 = (function (flag,meta3321){
this.flag = flag;
this.meta3321 = meta3321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3322,meta3321__$1){
var self__ = this;
var _3322__$1 = this;
return (new cljs.core.async.t_cljs$core$async3320(self__.flag,meta3321__$1));
}));

(cljs.core.async.t_cljs$core$async3320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3322){
var self__ = this;
var _3322__$1 = this;
return self__.meta3321;
}));

(cljs.core.async.t_cljs$core$async3320.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async3320.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async3320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async3320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3321","meta3321",2013310014,null)], null);
}));

(cljs.core.async.t_cljs$core$async3320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3320");

(cljs.core.async.t_cljs$core$async3320.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async3320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3320.
 */
cljs.core.async.__GT_t_cljs$core$async3320 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3320(flag__$1,meta3321){
return (new cljs.core.async.t_cljs$core$async3320(flag__$1,meta3321));
});

}

return (new cljs.core.async.t_cljs$core$async3320(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3323 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3323 = (function (flag,cb,meta3324){
this.flag = flag;
this.cb = cb;
this.meta3324 = meta3324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3325,meta3324__$1){
var self__ = this;
var _3325__$1 = this;
return (new cljs.core.async.t_cljs$core$async3323(self__.flag,self__.cb,meta3324__$1));
}));

(cljs.core.async.t_cljs$core$async3323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3325){
var self__ = this;
var _3325__$1 = this;
return self__.meta3324;
}));

(cljs.core.async.t_cljs$core$async3323.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async3323.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async3323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async3323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3324","meta3324",-1422910051,null)], null);
}));

(cljs.core.async.t_cljs$core$async3323.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3323");

(cljs.core.async.t_cljs$core$async3323.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async3323");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3323.
 */
cljs.core.async.__GT_t_cljs$core$async3323 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3323(flag__$1,cb__$1,meta3324){
return (new cljs.core.async.t_cljs$core$async3323(flag__$1,cb__$1,meta3324));
});

}

return (new cljs.core.async.t_cljs$core$async3323(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3326_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3326_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3327_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3327_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__3328 = (i + (1));
i = G__3328;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__5041__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__5766__auto___3333 = arguments.length;
var i__5767__auto___3334 = (0);
while(true){
if((i__5767__auto___3334 < len__5766__auto___3333)){
args__5772__auto__.push((arguments[i__5767__auto___3334]));

var G__3335 = (i__5767__auto___3334 + (1));
i__5767__auto___3334 = G__3335;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3331){
var map__3332 = p__3331;
var map__3332__$1 = cljs.core.__destructure_map.call(null,map__3332);
var opts = map__3332__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3329){
var G__3330 = cljs.core.first.call(null,seq3329);
var seq3329__$1 = cljs.core.next.call(null,seq3329);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3330,seq3329__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__3337 = arguments.length;
switch (G__3337) {
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
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__3238__auto___3384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_3361){
var state_val_3362 = (state_3361[(1)]);
if((state_val_3362 === (7))){
var inst_3357 = (state_3361[(2)]);
var state_3361__$1 = state_3361;
var statearr_3363_3385 = state_3361__$1;
(statearr_3363_3385[(2)] = inst_3357);

(statearr_3363_3385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3362 === (1))){
var state_3361__$1 = state_3361;
var statearr_3364_3386 = state_3361__$1;
(statearr_3364_3386[(2)] = null);

(statearr_3364_3386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3362 === (4))){
var inst_3340 = (state_3361[(7)]);
var inst_3340__$1 = (state_3361[(2)]);
var inst_3341 = (inst_3340__$1 == null);
var state_3361__$1 = (function (){var statearr_3365 = state_3361;
(statearr_3365[(7)] = inst_3340__$1);

return statearr_3365;
})();
if(cljs.core.truth_(inst_3341)){
var statearr_3366_3387 = state_3361__$1;
(statearr_3366_3387[(1)] = (5));

} else {
var statearr_3367_3388 = state_3361__$1;
(statearr_3367_3388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3362 === (13))){
var state_3361__$1 = state_3361;
var statearr_3368_3389 = state_3361__$1;
(statearr_3368_3389[(2)] = null);

(statearr_3368_3389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3362 === (6))){
var inst_3340 = (state_3361[(7)]);
var state_3361__$1 = state_3361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3361__$1,(11),to,inst_3340);
} else {
if((state_val_3362 === (3))){
var inst_3359 = (state_3361[(2)]);
var state_3361__$1 = state_3361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3361__$1,inst_3359);
} else {
if((state_val_3362 === (12))){
var state_3361__$1 = state_3361;
var statearr_3369_3390 = state_3361__$1;
(statearr_3369_3390[(2)] = null);

(statearr_3369_3390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3362 === (2))){
var state_3361__$1 = state_3361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3361__$1,(4),from);
} else {
if((state_val_3362 === (11))){
var inst_3350 = (state_3361[(2)]);
var state_3361__$1 = state_3361;
if(cljs.core.truth_(inst_3350)){
var statearr_3370_3391 = state_3361__$1;
(statearr_3370_3391[(1)] = (12));

} else {
var statearr_3371_3392 = state_3361__$1;
(statearr_3371_3392[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3362 === (9))){
var state_3361__$1 = state_3361;
var statearr_3372_3393 = state_3361__$1;
(statearr_3372_3393[(2)] = null);

(statearr_3372_3393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3362 === (5))){
var state_3361__$1 = state_3361;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3373_3394 = state_3361__$1;
(statearr_3373_3394[(1)] = (8));

} else {
var statearr_3374_3395 = state_3361__$1;
(statearr_3374_3395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3362 === (14))){
var inst_3355 = (state_3361[(2)]);
var state_3361__$1 = state_3361;
var statearr_3375_3396 = state_3361__$1;
(statearr_3375_3396[(2)] = inst_3355);

(statearr_3375_3396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3362 === (10))){
var inst_3347 = (state_3361[(2)]);
var state_3361__$1 = state_3361;
var statearr_3376_3397 = state_3361__$1;
(statearr_3376_3397[(2)] = inst_3347);

(statearr_3376_3397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3362 === (8))){
var inst_3344 = cljs.core.async.close_BANG_.call(null,to);
var state_3361__$1 = state_3361;
var statearr_3377_3398 = state_3361__$1;
(statearr_3377_3398[(2)] = inst_3344);

(statearr_3377_3398[(1)] = (10));


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
var cljs$core$async$state_machine__3165__auto__ = null;
var cljs$core$async$state_machine__3165__auto____0 = (function (){
var statearr_3378 = [null,null,null,null,null,null,null,null];
(statearr_3378[(0)] = cljs$core$async$state_machine__3165__auto__);

(statearr_3378[(1)] = (1));

return statearr_3378;
});
var cljs$core$async$state_machine__3165__auto____1 = (function (state_3361){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_3361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e3379){var ex__3168__auto__ = e3379;
var statearr_3380_3399 = state_3361;
(statearr_3380_3399[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_3361[(4)]))){
var statearr_3381_3400 = state_3361;
(statearr_3381_3400[(1)] = cljs.core.first.call(null,(state_3361[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3401 = state_3361;
state_3361 = G__3401;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$state_machine__3165__auto__ = function(state_3361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3165__auto____1.call(this,state_3361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3165__auto____0;
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3165__auto____1;
return cljs$core$async$state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_3382 = f__3239__auto__.call(null);
(statearr_3382[(6)] = c__3238__auto___3384);

return statearr_3382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__3402){
var vec__3403 = p__3402;
var v = cljs.core.nth.call(null,vec__3403,(0),null);
var p = cljs.core.nth.call(null,vec__3403,(1),null);
var job = vec__3403;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3238__auto___3579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_3410){
var state_val_3411 = (state_3410[(1)]);
if((state_val_3411 === (1))){
var state_3410__$1 = state_3410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3410__$1,(2),res,v);
} else {
if((state_val_3411 === (2))){
var inst_3407 = (state_3410[(2)]);
var inst_3408 = cljs.core.async.close_BANG_.call(null,res);
var state_3410__$1 = (function (){var statearr_3412 = state_3410;
(statearr_3412[(7)] = inst_3407);

return statearr_3412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3410__$1,inst_3408);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0 = (function (){
var statearr_3413 = [null,null,null,null,null,null,null,null];
(statearr_3413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__);

(statearr_3413[(1)] = (1));

return statearr_3413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1 = (function (state_3410){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_3410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e3414){var ex__3168__auto__ = e3414;
var statearr_3415_3580 = state_3410;
(statearr_3415_3580[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_3410[(4)]))){
var statearr_3416_3581 = state_3410;
(statearr_3416_3581[(1)] = cljs.core.first.call(null,(state_3410[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3582 = state_3410;
state_3410 = G__3582;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__ = function(state_3410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1.call(this,state_3410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_3417 = f__3239__auto__.call(null);
(statearr_3417[(6)] = c__3238__auto___3579);

return statearr_3417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__3418){
var vec__3419 = p__3418;
var v = cljs.core.nth.call(null,vec__3419,(0),null);
var p = cljs.core.nth.call(null,vec__3419,(1),null);
var job = vec__3419;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5633__auto___3583 = n;
var __3584 = (0);
while(true){
if((__3584 < n__5633__auto___3583)){
var G__3422_3585 = type;
var G__3422_3586__$1 = (((G__3422_3585 instanceof cljs.core.Keyword))?G__3422_3585.fqn:null);
switch (G__3422_3586__$1) {
case "compute":
var c__3238__auto___3588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3584,c__3238__auto___3588,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async){
return (function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = ((function (__3584,c__3238__auto___3588,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async){
return (function (state_3435){
var state_val_3436 = (state_3435[(1)]);
if((state_val_3436 === (1))){
var state_3435__$1 = state_3435;
var statearr_3437_3589 = state_3435__$1;
(statearr_3437_3589[(2)] = null);

(statearr_3437_3589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3436 === (2))){
var state_3435__$1 = state_3435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3435__$1,(4),jobs);
} else {
if((state_val_3436 === (3))){
var inst_3433 = (state_3435[(2)]);
var state_3435__$1 = state_3435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3435__$1,inst_3433);
} else {
if((state_val_3436 === (4))){
var inst_3425 = (state_3435[(2)]);
var inst_3426 = process__$1.call(null,inst_3425);
var state_3435__$1 = state_3435;
if(cljs.core.truth_(inst_3426)){
var statearr_3438_3590 = state_3435__$1;
(statearr_3438_3590[(1)] = (5));

} else {
var statearr_3439_3591 = state_3435__$1;
(statearr_3439_3591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3436 === (5))){
var state_3435__$1 = state_3435;
var statearr_3440_3592 = state_3435__$1;
(statearr_3440_3592[(2)] = null);

(statearr_3440_3592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3436 === (6))){
var state_3435__$1 = state_3435;
var statearr_3441_3593 = state_3435__$1;
(statearr_3441_3593[(2)] = null);

(statearr_3441_3593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3436 === (7))){
var inst_3431 = (state_3435[(2)]);
var state_3435__$1 = state_3435;
var statearr_3442_3594 = state_3435__$1;
(statearr_3442_3594[(2)] = inst_3431);

(statearr_3442_3594[(1)] = (3));


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
});})(__3584,c__3238__auto___3588,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async))
;
return ((function (__3584,switch__3164__auto__,c__3238__auto___3588,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0 = (function (){
var statearr_3443 = [null,null,null,null,null,null,null];
(statearr_3443[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__);

(statearr_3443[(1)] = (1));

return statearr_3443;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1 = (function (state_3435){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_3435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e3444){var ex__3168__auto__ = e3444;
var statearr_3445_3595 = state_3435;
(statearr_3445_3595[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_3435[(4)]))){
var statearr_3446_3596 = state_3435;
(statearr_3446_3596[(1)] = cljs.core.first.call(null,(state_3435[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3597 = state_3435;
state_3435 = G__3597;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__ = function(state_3435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1.call(this,state_3435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__;
})()
;})(__3584,switch__3164__auto__,c__3238__auto___3588,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async))
})();
var state__3240__auto__ = (function (){var statearr_3447 = f__3239__auto__.call(null);
(statearr_3447[(6)] = c__3238__auto___3588);

return statearr_3447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
});})(__3584,c__3238__auto___3588,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async))
);


break;
case "async":
var c__3238__auto___3598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3584,c__3238__auto___3598,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async){
return (function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = ((function (__3584,c__3238__auto___3598,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async){
return (function (state_3460){
var state_val_3461 = (state_3460[(1)]);
if((state_val_3461 === (1))){
var state_3460__$1 = state_3460;
var statearr_3462_3599 = state_3460__$1;
(statearr_3462_3599[(2)] = null);

(statearr_3462_3599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3461 === (2))){
var state_3460__$1 = state_3460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3460__$1,(4),jobs);
} else {
if((state_val_3461 === (3))){
var inst_3458 = (state_3460[(2)]);
var state_3460__$1 = state_3460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3460__$1,inst_3458);
} else {
if((state_val_3461 === (4))){
var inst_3450 = (state_3460[(2)]);
var inst_3451 = async.call(null,inst_3450);
var state_3460__$1 = state_3460;
if(cljs.core.truth_(inst_3451)){
var statearr_3463_3600 = state_3460__$1;
(statearr_3463_3600[(1)] = (5));

} else {
var statearr_3464_3601 = state_3460__$1;
(statearr_3464_3601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3461 === (5))){
var state_3460__$1 = state_3460;
var statearr_3465_3602 = state_3460__$1;
(statearr_3465_3602[(2)] = null);

(statearr_3465_3602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3461 === (6))){
var state_3460__$1 = state_3460;
var statearr_3466_3603 = state_3460__$1;
(statearr_3466_3603[(2)] = null);

(statearr_3466_3603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3461 === (7))){
var inst_3456 = (state_3460[(2)]);
var state_3460__$1 = state_3460;
var statearr_3467_3604 = state_3460__$1;
(statearr_3467_3604[(2)] = inst_3456);

(statearr_3467_3604[(1)] = (3));


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
});})(__3584,c__3238__auto___3598,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async))
;
return ((function (__3584,switch__3164__auto__,c__3238__auto___3598,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0 = (function (){
var statearr_3468 = [null,null,null,null,null,null,null];
(statearr_3468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__);

(statearr_3468[(1)] = (1));

return statearr_3468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1 = (function (state_3460){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_3460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e3469){var ex__3168__auto__ = e3469;
var statearr_3470_3605 = state_3460;
(statearr_3470_3605[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_3460[(4)]))){
var statearr_3471_3606 = state_3460;
(statearr_3471_3606[(1)] = cljs.core.first.call(null,(state_3460[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3607 = state_3460;
state_3460 = G__3607;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__ = function(state_3460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1.call(this,state_3460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__;
})()
;})(__3584,switch__3164__auto__,c__3238__auto___3598,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async))
})();
var state__3240__auto__ = (function (){var statearr_3472 = f__3239__auto__.call(null);
(statearr_3472[(6)] = c__3238__auto___3598);

return statearr_3472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
});})(__3584,c__3238__auto___3598,G__3422_3585,G__3422_3586__$1,n__5633__auto___3583,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3422_3586__$1)].join('')));

}

var G__3608 = (__3584 + (1));
__3584 = G__3608;
continue;
} else {
}
break;
}

var c__3238__auto___3609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_3494){
var state_val_3495 = (state_3494[(1)]);
if((state_val_3495 === (1))){
var state_3494__$1 = state_3494;
var statearr_3496_3610 = state_3494__$1;
(statearr_3496_3610[(2)] = null);

(statearr_3496_3610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3495 === (2))){
var state_3494__$1 = state_3494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3494__$1,(4),from);
} else {
if((state_val_3495 === (3))){
var inst_3492 = (state_3494[(2)]);
var state_3494__$1 = state_3494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3494__$1,inst_3492);
} else {
if((state_val_3495 === (4))){
var inst_3475 = (state_3494[(7)]);
var inst_3475__$1 = (state_3494[(2)]);
var inst_3476 = (inst_3475__$1 == null);
var state_3494__$1 = (function (){var statearr_3497 = state_3494;
(statearr_3497[(7)] = inst_3475__$1);

return statearr_3497;
})();
if(cljs.core.truth_(inst_3476)){
var statearr_3498_3611 = state_3494__$1;
(statearr_3498_3611[(1)] = (5));

} else {
var statearr_3499_3612 = state_3494__$1;
(statearr_3499_3612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3495 === (5))){
var inst_3478 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3494__$1 = state_3494;
var statearr_3500_3613 = state_3494__$1;
(statearr_3500_3613[(2)] = inst_3478);

(statearr_3500_3613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3495 === (6))){
var inst_3480 = (state_3494[(8)]);
var inst_3475 = (state_3494[(7)]);
var inst_3480__$1 = cljs.core.async.chan.call(null,(1));
var inst_3481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3482 = [inst_3475,inst_3480__$1];
var inst_3483 = (new cljs.core.PersistentVector(null,2,(5),inst_3481,inst_3482,null));
var state_3494__$1 = (function (){var statearr_3501 = state_3494;
(statearr_3501[(8)] = inst_3480__$1);

return statearr_3501;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3494__$1,(8),jobs,inst_3483);
} else {
if((state_val_3495 === (7))){
var inst_3490 = (state_3494[(2)]);
var state_3494__$1 = state_3494;
var statearr_3502_3614 = state_3494__$1;
(statearr_3502_3614[(2)] = inst_3490);

(statearr_3502_3614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3495 === (8))){
var inst_3480 = (state_3494[(8)]);
var inst_3485 = (state_3494[(2)]);
var state_3494__$1 = (function (){var statearr_3503 = state_3494;
(statearr_3503[(9)] = inst_3485);

return statearr_3503;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3494__$1,(9),results,inst_3480);
} else {
if((state_val_3495 === (9))){
var inst_3487 = (state_3494[(2)]);
var state_3494__$1 = (function (){var statearr_3504 = state_3494;
(statearr_3504[(10)] = inst_3487);

return statearr_3504;
})();
var statearr_3505_3615 = state_3494__$1;
(statearr_3505_3615[(2)] = null);

(statearr_3505_3615[(1)] = (2));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0 = (function (){
var statearr_3506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__);

(statearr_3506[(1)] = (1));

return statearr_3506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1 = (function (state_3494){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_3494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e3507){var ex__3168__auto__ = e3507;
var statearr_3508_3616 = state_3494;
(statearr_3508_3616[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_3494[(4)]))){
var statearr_3509_3617 = state_3494;
(statearr_3509_3617[(1)] = cljs.core.first.call(null,(state_3494[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3618 = state_3494;
state_3494 = G__3618;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__ = function(state_3494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1.call(this,state_3494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_3510 = f__3239__auto__.call(null);
(statearr_3510[(6)] = c__3238__auto___3609);

return statearr_3510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));


var c__3238__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_3548){
var state_val_3549 = (state_3548[(1)]);
if((state_val_3549 === (7))){
var inst_3544 = (state_3548[(2)]);
var state_3548__$1 = state_3548;
var statearr_3550_3619 = state_3548__$1;
(statearr_3550_3619[(2)] = inst_3544);

(statearr_3550_3619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (20))){
var state_3548__$1 = state_3548;
var statearr_3551_3620 = state_3548__$1;
(statearr_3551_3620[(2)] = null);

(statearr_3551_3620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (1))){
var state_3548__$1 = state_3548;
var statearr_3552_3621 = state_3548__$1;
(statearr_3552_3621[(2)] = null);

(statearr_3552_3621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (4))){
var inst_3513 = (state_3548[(7)]);
var inst_3513__$1 = (state_3548[(2)]);
var inst_3514 = (inst_3513__$1 == null);
var state_3548__$1 = (function (){var statearr_3553 = state_3548;
(statearr_3553[(7)] = inst_3513__$1);

return statearr_3553;
})();
if(cljs.core.truth_(inst_3514)){
var statearr_3554_3622 = state_3548__$1;
(statearr_3554_3622[(1)] = (5));

} else {
var statearr_3555_3623 = state_3548__$1;
(statearr_3555_3623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (15))){
var inst_3526 = (state_3548[(8)]);
var state_3548__$1 = state_3548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3548__$1,(18),to,inst_3526);
} else {
if((state_val_3549 === (21))){
var inst_3539 = (state_3548[(2)]);
var state_3548__$1 = state_3548;
var statearr_3556_3624 = state_3548__$1;
(statearr_3556_3624[(2)] = inst_3539);

(statearr_3556_3624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (13))){
var inst_3541 = (state_3548[(2)]);
var state_3548__$1 = (function (){var statearr_3557 = state_3548;
(statearr_3557[(9)] = inst_3541);

return statearr_3557;
})();
var statearr_3558_3625 = state_3548__$1;
(statearr_3558_3625[(2)] = null);

(statearr_3558_3625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (6))){
var inst_3513 = (state_3548[(7)]);
var state_3548__$1 = state_3548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3548__$1,(11),inst_3513);
} else {
if((state_val_3549 === (17))){
var inst_3534 = (state_3548[(2)]);
var state_3548__$1 = state_3548;
if(cljs.core.truth_(inst_3534)){
var statearr_3559_3626 = state_3548__$1;
(statearr_3559_3626[(1)] = (19));

} else {
var statearr_3560_3627 = state_3548__$1;
(statearr_3560_3627[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (3))){
var inst_3546 = (state_3548[(2)]);
var state_3548__$1 = state_3548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3548__$1,inst_3546);
} else {
if((state_val_3549 === (12))){
var inst_3523 = (state_3548[(10)]);
var state_3548__$1 = state_3548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3548__$1,(14),inst_3523);
} else {
if((state_val_3549 === (2))){
var state_3548__$1 = state_3548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3548__$1,(4),results);
} else {
if((state_val_3549 === (19))){
var state_3548__$1 = state_3548;
var statearr_3561_3628 = state_3548__$1;
(statearr_3561_3628[(2)] = null);

(statearr_3561_3628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (11))){
var inst_3523 = (state_3548[(2)]);
var state_3548__$1 = (function (){var statearr_3562 = state_3548;
(statearr_3562[(10)] = inst_3523);

return statearr_3562;
})();
var statearr_3563_3629 = state_3548__$1;
(statearr_3563_3629[(2)] = null);

(statearr_3563_3629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (9))){
var state_3548__$1 = state_3548;
var statearr_3564_3630 = state_3548__$1;
(statearr_3564_3630[(2)] = null);

(statearr_3564_3630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (5))){
var state_3548__$1 = state_3548;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3565_3631 = state_3548__$1;
(statearr_3565_3631[(1)] = (8));

} else {
var statearr_3566_3632 = state_3548__$1;
(statearr_3566_3632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (14))){
var inst_3528 = (state_3548[(11)]);
var inst_3526 = (state_3548[(8)]);
var inst_3526__$1 = (state_3548[(2)]);
var inst_3527 = (inst_3526__$1 == null);
var inst_3528__$1 = cljs.core.not.call(null,inst_3527);
var state_3548__$1 = (function (){var statearr_3567 = state_3548;
(statearr_3567[(11)] = inst_3528__$1);

(statearr_3567[(8)] = inst_3526__$1);

return statearr_3567;
})();
if(inst_3528__$1){
var statearr_3568_3633 = state_3548__$1;
(statearr_3568_3633[(1)] = (15));

} else {
var statearr_3569_3634 = state_3548__$1;
(statearr_3569_3634[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (16))){
var inst_3528 = (state_3548[(11)]);
var state_3548__$1 = state_3548;
var statearr_3570_3635 = state_3548__$1;
(statearr_3570_3635[(2)] = inst_3528);

(statearr_3570_3635[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (10))){
var inst_3520 = (state_3548[(2)]);
var state_3548__$1 = state_3548;
var statearr_3571_3636 = state_3548__$1;
(statearr_3571_3636[(2)] = inst_3520);

(statearr_3571_3636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (18))){
var inst_3531 = (state_3548[(2)]);
var state_3548__$1 = state_3548;
var statearr_3572_3637 = state_3548__$1;
(statearr_3572_3637[(2)] = inst_3531);

(statearr_3572_3637[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3549 === (8))){
var inst_3517 = cljs.core.async.close_BANG_.call(null,to);
var state_3548__$1 = state_3548;
var statearr_3573_3638 = state_3548__$1;
(statearr_3573_3638[(2)] = inst_3517);

(statearr_3573_3638[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0 = (function (){
var statearr_3574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__);

(statearr_3574[(1)] = (1));

return statearr_3574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1 = (function (state_3548){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_3548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e3575){var ex__3168__auto__ = e3575;
var statearr_3576_3639 = state_3548;
(statearr_3576_3639[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_3548[(4)]))){
var statearr_3577_3640 = state_3548;
(statearr_3577_3640[(1)] = cljs.core.first.call(null,(state_3548[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3641 = state_3548;
state_3548 = G__3641;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__ = function(state_3548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1.call(this,state_3548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3165__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_3578 = f__3239__auto__.call(null);
(statearr_3578[(6)] = c__3238__auto__);

return statearr_3578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));

return c__3238__auto__;
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
var G__3643 = arguments.length;
switch (G__3643) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__3646 = arguments.length;
switch (G__3646) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__3649 = arguments.length;
switch (G__3649) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__3238__auto___3699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_3675){
var state_val_3676 = (state_3675[(1)]);
if((state_val_3676 === (7))){
var inst_3671 = (state_3675[(2)]);
var state_3675__$1 = state_3675;
var statearr_3677_3700 = state_3675__$1;
(statearr_3677_3700[(2)] = inst_3671);

(statearr_3677_3700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3676 === (1))){
var state_3675__$1 = state_3675;
var statearr_3678_3701 = state_3675__$1;
(statearr_3678_3701[(2)] = null);

(statearr_3678_3701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3676 === (4))){
var inst_3652 = (state_3675[(7)]);
var inst_3652__$1 = (state_3675[(2)]);
var inst_3653 = (inst_3652__$1 == null);
var state_3675__$1 = (function (){var statearr_3679 = state_3675;
(statearr_3679[(7)] = inst_3652__$1);

return statearr_3679;
})();
if(cljs.core.truth_(inst_3653)){
var statearr_3680_3702 = state_3675__$1;
(statearr_3680_3702[(1)] = (5));

} else {
var statearr_3681_3703 = state_3675__$1;
(statearr_3681_3703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3676 === (13))){
var state_3675__$1 = state_3675;
var statearr_3682_3704 = state_3675__$1;
(statearr_3682_3704[(2)] = null);

(statearr_3682_3704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3676 === (6))){
var inst_3652 = (state_3675[(7)]);
var inst_3658 = p.call(null,inst_3652);
var state_3675__$1 = state_3675;
if(cljs.core.truth_(inst_3658)){
var statearr_3683_3705 = state_3675__$1;
(statearr_3683_3705[(1)] = (9));

} else {
var statearr_3684_3706 = state_3675__$1;
(statearr_3684_3706[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3676 === (3))){
var inst_3673 = (state_3675[(2)]);
var state_3675__$1 = state_3675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3675__$1,inst_3673);
} else {
if((state_val_3676 === (12))){
var state_3675__$1 = state_3675;
var statearr_3685_3707 = state_3675__$1;
(statearr_3685_3707[(2)] = null);

(statearr_3685_3707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3676 === (2))){
var state_3675__$1 = state_3675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3675__$1,(4),ch);
} else {
if((state_val_3676 === (11))){
var inst_3652 = (state_3675[(7)]);
var inst_3662 = (state_3675[(2)]);
var state_3675__$1 = state_3675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3675__$1,(8),inst_3662,inst_3652);
} else {
if((state_val_3676 === (9))){
var state_3675__$1 = state_3675;
var statearr_3686_3708 = state_3675__$1;
(statearr_3686_3708[(2)] = tc);

(statearr_3686_3708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3676 === (5))){
var inst_3655 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3656 = cljs.core.async.close_BANG_.call(null,fc);
var state_3675__$1 = (function (){var statearr_3687 = state_3675;
(statearr_3687[(8)] = inst_3655);

return statearr_3687;
})();
var statearr_3688_3709 = state_3675__$1;
(statearr_3688_3709[(2)] = inst_3656);

(statearr_3688_3709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3676 === (14))){
var inst_3669 = (state_3675[(2)]);
var state_3675__$1 = state_3675;
var statearr_3689_3710 = state_3675__$1;
(statearr_3689_3710[(2)] = inst_3669);

(statearr_3689_3710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3676 === (10))){
var state_3675__$1 = state_3675;
var statearr_3690_3711 = state_3675__$1;
(statearr_3690_3711[(2)] = fc);

(statearr_3690_3711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3676 === (8))){
var inst_3664 = (state_3675[(2)]);
var state_3675__$1 = state_3675;
if(cljs.core.truth_(inst_3664)){
var statearr_3691_3712 = state_3675__$1;
(statearr_3691_3712[(1)] = (12));

} else {
var statearr_3692_3713 = state_3675__$1;
(statearr_3692_3713[(1)] = (13));

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
var cljs$core$async$state_machine__3165__auto__ = null;
var cljs$core$async$state_machine__3165__auto____0 = (function (){
var statearr_3693 = [null,null,null,null,null,null,null,null,null];
(statearr_3693[(0)] = cljs$core$async$state_machine__3165__auto__);

(statearr_3693[(1)] = (1));

return statearr_3693;
});
var cljs$core$async$state_machine__3165__auto____1 = (function (state_3675){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_3675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e3694){var ex__3168__auto__ = e3694;
var statearr_3695_3714 = state_3675;
(statearr_3695_3714[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_3675[(4)]))){
var statearr_3696_3715 = state_3675;
(statearr_3696_3715[(1)] = cljs.core.first.call(null,(state_3675[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3716 = state_3675;
state_3675 = G__3716;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$state_machine__3165__auto__ = function(state_3675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3165__auto____1.call(this,state_3675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3165__auto____0;
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3165__auto____1;
return cljs$core$async$state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_3697 = f__3239__auto__.call(null);
(statearr_3697[(6)] = c__3238__auto___3699);

return statearr_3697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
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
var c__3238__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_3738){
var state_val_3739 = (state_3738[(1)]);
if((state_val_3739 === (7))){
var inst_3734 = (state_3738[(2)]);
var state_3738__$1 = state_3738;
var statearr_3740_3759 = state_3738__$1;
(statearr_3740_3759[(2)] = inst_3734);

(statearr_3740_3759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3739 === (1))){
var inst_3717 = init;
var inst_3718 = inst_3717;
var state_3738__$1 = (function (){var statearr_3741 = state_3738;
(statearr_3741[(7)] = inst_3718);

return statearr_3741;
})();
var statearr_3742_3760 = state_3738__$1;
(statearr_3742_3760[(2)] = null);

(statearr_3742_3760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3739 === (4))){
var inst_3721 = (state_3738[(8)]);
var inst_3721__$1 = (state_3738[(2)]);
var inst_3722 = (inst_3721__$1 == null);
var state_3738__$1 = (function (){var statearr_3743 = state_3738;
(statearr_3743[(8)] = inst_3721__$1);

return statearr_3743;
})();
if(cljs.core.truth_(inst_3722)){
var statearr_3744_3761 = state_3738__$1;
(statearr_3744_3761[(1)] = (5));

} else {
var statearr_3745_3762 = state_3738__$1;
(statearr_3745_3762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3739 === (6))){
var inst_3725 = (state_3738[(9)]);
var inst_3721 = (state_3738[(8)]);
var inst_3718 = (state_3738[(7)]);
var inst_3725__$1 = f.call(null,inst_3718,inst_3721);
var inst_3726 = cljs.core.reduced_QMARK_.call(null,inst_3725__$1);
var state_3738__$1 = (function (){var statearr_3746 = state_3738;
(statearr_3746[(9)] = inst_3725__$1);

return statearr_3746;
})();
if(inst_3726){
var statearr_3747_3763 = state_3738__$1;
(statearr_3747_3763[(1)] = (8));

} else {
var statearr_3748_3764 = state_3738__$1;
(statearr_3748_3764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3739 === (3))){
var inst_3736 = (state_3738[(2)]);
var state_3738__$1 = state_3738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3738__$1,inst_3736);
} else {
if((state_val_3739 === (2))){
var state_3738__$1 = state_3738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3738__$1,(4),ch);
} else {
if((state_val_3739 === (9))){
var inst_3725 = (state_3738[(9)]);
var inst_3718 = inst_3725;
var state_3738__$1 = (function (){var statearr_3749 = state_3738;
(statearr_3749[(7)] = inst_3718);

return statearr_3749;
})();
var statearr_3750_3765 = state_3738__$1;
(statearr_3750_3765[(2)] = null);

(statearr_3750_3765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3739 === (5))){
var inst_3718 = (state_3738[(7)]);
var state_3738__$1 = state_3738;
var statearr_3751_3766 = state_3738__$1;
(statearr_3751_3766[(2)] = inst_3718);

(statearr_3751_3766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3739 === (10))){
var inst_3732 = (state_3738[(2)]);
var state_3738__$1 = state_3738;
var statearr_3752_3767 = state_3738__$1;
(statearr_3752_3767[(2)] = inst_3732);

(statearr_3752_3767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3739 === (8))){
var inst_3725 = (state_3738[(9)]);
var inst_3728 = cljs.core.deref.call(null,inst_3725);
var state_3738__$1 = state_3738;
var statearr_3753_3768 = state_3738__$1;
(statearr_3753_3768[(2)] = inst_3728);

(statearr_3753_3768[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__3165__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3165__auto____0 = (function (){
var statearr_3754 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3754[(0)] = cljs$core$async$reduce_$_state_machine__3165__auto__);

(statearr_3754[(1)] = (1));

return statearr_3754;
});
var cljs$core$async$reduce_$_state_machine__3165__auto____1 = (function (state_3738){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_3738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e3755){var ex__3168__auto__ = e3755;
var statearr_3756_3769 = state_3738;
(statearr_3756_3769[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_3738[(4)]))){
var statearr_3757_3770 = state_3738;
(statearr_3757_3770[(1)] = cljs.core.first.call(null,(state_3738[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3771 = state_3738;
state_3738 = G__3771;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3165__auto__ = function(state_3738){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3165__auto____1.call(this,state_3738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3165__auto____0;
cljs$core$async$reduce_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3165__auto____1;
return cljs$core$async$reduce_$_state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_3758 = f__3239__auto__.call(null);
(statearr_3758[(6)] = c__3238__auto__);

return statearr_3758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));

return c__3238__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3238__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_3777){
var state_val_3778 = (state_3777[(1)]);
if((state_val_3778 === (1))){
var inst_3772 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_3777__$1 = state_3777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3777__$1,(2),inst_3772);
} else {
if((state_val_3778 === (2))){
var inst_3774 = (state_3777[(2)]);
var inst_3775 = f__$1.call(null,inst_3774);
var state_3777__$1 = state_3777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3777__$1,inst_3775);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__3165__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3165__auto____0 = (function (){
var statearr_3779 = [null,null,null,null,null,null,null];
(statearr_3779[(0)] = cljs$core$async$transduce_$_state_machine__3165__auto__);

(statearr_3779[(1)] = (1));

return statearr_3779;
});
var cljs$core$async$transduce_$_state_machine__3165__auto____1 = (function (state_3777){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_3777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e3780){var ex__3168__auto__ = e3780;
var statearr_3781_3784 = state_3777;
(statearr_3781_3784[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_3777[(4)]))){
var statearr_3782_3785 = state_3777;
(statearr_3782_3785[(1)] = cljs.core.first.call(null,(state_3777[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3786 = state_3777;
state_3777 = G__3786;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3165__auto__ = function(state_3777){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3165__auto____1.call(this,state_3777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3165__auto____0;
cljs$core$async$transduce_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3165__auto____1;
return cljs$core$async$transduce_$_state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_3783 = f__3239__auto__.call(null);
(statearr_3783[(6)] = c__3238__auto__);

return statearr_3783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));

return c__3238__auto__;
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
var G__3788 = arguments.length;
switch (G__3788) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__3238__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_3813){
var state_val_3814 = (state_3813[(1)]);
if((state_val_3814 === (7))){
var inst_3795 = (state_3813[(2)]);
var state_3813__$1 = state_3813;
var statearr_3815_3837 = state_3813__$1;
(statearr_3815_3837[(2)] = inst_3795);

(statearr_3815_3837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (1))){
var inst_3789 = cljs.core.seq.call(null,coll);
var inst_3790 = inst_3789;
var state_3813__$1 = (function (){var statearr_3816 = state_3813;
(statearr_3816[(7)] = inst_3790);

return statearr_3816;
})();
var statearr_3817_3838 = state_3813__$1;
(statearr_3817_3838[(2)] = null);

(statearr_3817_3838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (4))){
var inst_3790 = (state_3813[(7)]);
var inst_3793 = cljs.core.first.call(null,inst_3790);
var state_3813__$1 = state_3813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3813__$1,(7),ch,inst_3793);
} else {
if((state_val_3814 === (13))){
var inst_3807 = (state_3813[(2)]);
var state_3813__$1 = state_3813;
var statearr_3818_3839 = state_3813__$1;
(statearr_3818_3839[(2)] = inst_3807);

(statearr_3818_3839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (6))){
var inst_3798 = (state_3813[(2)]);
var state_3813__$1 = state_3813;
if(cljs.core.truth_(inst_3798)){
var statearr_3819_3840 = state_3813__$1;
(statearr_3819_3840[(1)] = (8));

} else {
var statearr_3820_3841 = state_3813__$1;
(statearr_3820_3841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (3))){
var inst_3811 = (state_3813[(2)]);
var state_3813__$1 = state_3813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3813__$1,inst_3811);
} else {
if((state_val_3814 === (12))){
var state_3813__$1 = state_3813;
var statearr_3821_3842 = state_3813__$1;
(statearr_3821_3842[(2)] = null);

(statearr_3821_3842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (2))){
var inst_3790 = (state_3813[(7)]);
var state_3813__$1 = state_3813;
if(cljs.core.truth_(inst_3790)){
var statearr_3822_3843 = state_3813__$1;
(statearr_3822_3843[(1)] = (4));

} else {
var statearr_3823_3844 = state_3813__$1;
(statearr_3823_3844[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (11))){
var inst_3804 = cljs.core.async.close_BANG_.call(null,ch);
var state_3813__$1 = state_3813;
var statearr_3824_3845 = state_3813__$1;
(statearr_3824_3845[(2)] = inst_3804);

(statearr_3824_3845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (9))){
var state_3813__$1 = state_3813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3825_3846 = state_3813__$1;
(statearr_3825_3846[(1)] = (11));

} else {
var statearr_3826_3847 = state_3813__$1;
(statearr_3826_3847[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (5))){
var inst_3790 = (state_3813[(7)]);
var state_3813__$1 = state_3813;
var statearr_3827_3848 = state_3813__$1;
(statearr_3827_3848[(2)] = inst_3790);

(statearr_3827_3848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (10))){
var inst_3809 = (state_3813[(2)]);
var state_3813__$1 = state_3813;
var statearr_3828_3849 = state_3813__$1;
(statearr_3828_3849[(2)] = inst_3809);

(statearr_3828_3849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3814 === (8))){
var inst_3790 = (state_3813[(7)]);
var inst_3800 = cljs.core.next.call(null,inst_3790);
var inst_3790__$1 = inst_3800;
var state_3813__$1 = (function (){var statearr_3829 = state_3813;
(statearr_3829[(7)] = inst_3790__$1);

return statearr_3829;
})();
var statearr_3830_3850 = state_3813__$1;
(statearr_3830_3850[(2)] = null);

(statearr_3830_3850[(1)] = (2));


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
var cljs$core$async$state_machine__3165__auto__ = null;
var cljs$core$async$state_machine__3165__auto____0 = (function (){
var statearr_3831 = [null,null,null,null,null,null,null,null];
(statearr_3831[(0)] = cljs$core$async$state_machine__3165__auto__);

(statearr_3831[(1)] = (1));

return statearr_3831;
});
var cljs$core$async$state_machine__3165__auto____1 = (function (state_3813){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_3813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e3832){var ex__3168__auto__ = e3832;
var statearr_3833_3851 = state_3813;
(statearr_3833_3851[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_3813[(4)]))){
var statearr_3834_3852 = state_3813;
(statearr_3834_3852[(1)] = cljs.core.first.call(null,(state_3813[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3853 = state_3813;
state_3813 = G__3853;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$state_machine__3165__auto__ = function(state_3813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3165__auto____1.call(this,state_3813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3165__auto____0;
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3165__auto____1;
return cljs$core$async$state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_3835 = f__3239__auto__.call(null);
(statearr_3835[(6)] = c__3238__auto__);

return statearr_3835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));

return c__3238__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__3855 = arguments.length;
switch (G__3855) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_3857 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,_);
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_3857.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_3858 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_3858.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_3859 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_3859.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_3860 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_3860.call(null,m);
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3861 = (function (ch,cs,meta3862){
this.ch = ch;
this.cs = cs;
this.meta3862 = meta3862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3863,meta3862__$1){
var self__ = this;
var _3863__$1 = this;
return (new cljs.core.async.t_cljs$core$async3861(self__.ch,self__.cs,meta3862__$1));
}));

(cljs.core.async.t_cljs$core$async3861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3863){
var self__ = this;
var _3863__$1 = this;
return self__.meta3862;
}));

(cljs.core.async.t_cljs$core$async3861.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async3861.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3861.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async3861.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async3861.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async3861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3862","meta3862",472481687,null)], null);
}));

(cljs.core.async.t_cljs$core$async3861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3861");

(cljs.core.async.t_cljs$core$async3861.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async3861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3861.
 */
cljs.core.async.__GT_t_cljs$core$async3861 = (function cljs$core$async$mult_$___GT_t_cljs$core$async3861(ch__$1,cs__$1,meta3862){
return (new cljs.core.async.t_cljs$core$async3861(ch__$1,cs__$1,meta3862));
});

}

return (new cljs.core.async.t_cljs$core$async3861(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__3238__auto___4080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_3996){
var state_val_3997 = (state_3996[(1)]);
if((state_val_3997 === (7))){
var inst_3992 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
var statearr_3998_4081 = state_3996__$1;
(statearr_3998_4081[(2)] = inst_3992);

(statearr_3998_4081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (20))){
var inst_3897 = (state_3996[(7)]);
var inst_3909 = cljs.core.first.call(null,inst_3897);
var inst_3910 = cljs.core.nth.call(null,inst_3909,(0),null);
var inst_3911 = cljs.core.nth.call(null,inst_3909,(1),null);
var state_3996__$1 = (function (){var statearr_3999 = state_3996;
(statearr_3999[(8)] = inst_3910);

return statearr_3999;
})();
if(cljs.core.truth_(inst_3911)){
var statearr_4000_4082 = state_3996__$1;
(statearr_4000_4082[(1)] = (22));

} else {
var statearr_4001_4083 = state_3996__$1;
(statearr_4001_4083[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (27))){
var inst_3866 = (state_3996[(9)]);
var inst_3941 = (state_3996[(10)]);
var inst_3939 = (state_3996[(11)]);
var inst_3946 = (state_3996[(12)]);
var inst_3946__$1 = cljs.core._nth.call(null,inst_3939,inst_3941);
var inst_3947 = cljs.core.async.put_BANG_.call(null,inst_3946__$1,inst_3866,done);
var state_3996__$1 = (function (){var statearr_4002 = state_3996;
(statearr_4002[(12)] = inst_3946__$1);

return statearr_4002;
})();
if(cljs.core.truth_(inst_3947)){
var statearr_4003_4084 = state_3996__$1;
(statearr_4003_4084[(1)] = (30));

} else {
var statearr_4004_4085 = state_3996__$1;
(statearr_4004_4085[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (1))){
var state_3996__$1 = state_3996;
var statearr_4005_4086 = state_3996__$1;
(statearr_4005_4086[(2)] = null);

(statearr_4005_4086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (24))){
var inst_3897 = (state_3996[(7)]);
var inst_3916 = (state_3996[(2)]);
var inst_3917 = cljs.core.next.call(null,inst_3897);
var inst_3875 = inst_3917;
var inst_3876 = null;
var inst_3877 = (0);
var inst_3878 = (0);
var state_3996__$1 = (function (){var statearr_4006 = state_3996;
(statearr_4006[(13)] = inst_3876);

(statearr_4006[(14)] = inst_3875);

(statearr_4006[(15)] = inst_3877);

(statearr_4006[(16)] = inst_3878);

(statearr_4006[(17)] = inst_3916);

return statearr_4006;
})();
var statearr_4007_4087 = state_3996__$1;
(statearr_4007_4087[(2)] = null);

(statearr_4007_4087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (39))){
var state_3996__$1 = state_3996;
var statearr_4011_4088 = state_3996__$1;
(statearr_4011_4088[(2)] = null);

(statearr_4011_4088[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (4))){
var inst_3866 = (state_3996[(9)]);
var inst_3866__$1 = (state_3996[(2)]);
var inst_3867 = (inst_3866__$1 == null);
var state_3996__$1 = (function (){var statearr_4012 = state_3996;
(statearr_4012[(9)] = inst_3866__$1);

return statearr_4012;
})();
if(cljs.core.truth_(inst_3867)){
var statearr_4013_4089 = state_3996__$1;
(statearr_4013_4089[(1)] = (5));

} else {
var statearr_4014_4090 = state_3996__$1;
(statearr_4014_4090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (15))){
var inst_3876 = (state_3996[(13)]);
var inst_3875 = (state_3996[(14)]);
var inst_3877 = (state_3996[(15)]);
var inst_3878 = (state_3996[(16)]);
var inst_3893 = (state_3996[(2)]);
var inst_3894 = (inst_3878 + (1));
var tmp4008 = inst_3876;
var tmp4009 = inst_3875;
var tmp4010 = inst_3877;
var inst_3875__$1 = tmp4009;
var inst_3876__$1 = tmp4008;
var inst_3877__$1 = tmp4010;
var inst_3878__$1 = inst_3894;
var state_3996__$1 = (function (){var statearr_4015 = state_3996;
(statearr_4015[(13)] = inst_3876__$1);

(statearr_4015[(18)] = inst_3893);

(statearr_4015[(14)] = inst_3875__$1);

(statearr_4015[(15)] = inst_3877__$1);

(statearr_4015[(16)] = inst_3878__$1);

return statearr_4015;
})();
var statearr_4016_4091 = state_3996__$1;
(statearr_4016_4091[(2)] = null);

(statearr_4016_4091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (21))){
var inst_3920 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
var statearr_4020_4092 = state_3996__$1;
(statearr_4020_4092[(2)] = inst_3920);

(statearr_4020_4092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (31))){
var inst_3946 = (state_3996[(12)]);
var inst_3950 = cljs.core.async.untap_STAR_.call(null,m,inst_3946);
var state_3996__$1 = state_3996;
var statearr_4021_4093 = state_3996__$1;
(statearr_4021_4093[(2)] = inst_3950);

(statearr_4021_4093[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (32))){
var inst_3938 = (state_3996[(19)]);
var inst_3941 = (state_3996[(10)]);
var inst_3939 = (state_3996[(11)]);
var inst_3940 = (state_3996[(20)]);
var inst_3952 = (state_3996[(2)]);
var inst_3953 = (inst_3941 + (1));
var tmp4017 = inst_3938;
var tmp4018 = inst_3939;
var tmp4019 = inst_3940;
var inst_3938__$1 = tmp4017;
var inst_3939__$1 = tmp4018;
var inst_3940__$1 = tmp4019;
var inst_3941__$1 = inst_3953;
var state_3996__$1 = (function (){var statearr_4022 = state_3996;
(statearr_4022[(19)] = inst_3938__$1);

(statearr_4022[(10)] = inst_3941__$1);

(statearr_4022[(11)] = inst_3939__$1);

(statearr_4022[(20)] = inst_3940__$1);

(statearr_4022[(21)] = inst_3952);

return statearr_4022;
})();
var statearr_4023_4094 = state_3996__$1;
(statearr_4023_4094[(2)] = null);

(statearr_4023_4094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (40))){
var inst_3965 = (state_3996[(22)]);
var inst_3969 = cljs.core.async.untap_STAR_.call(null,m,inst_3965);
var state_3996__$1 = state_3996;
var statearr_4024_4095 = state_3996__$1;
(statearr_4024_4095[(2)] = inst_3969);

(statearr_4024_4095[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (33))){
var inst_3956 = (state_3996[(23)]);
var inst_3958 = cljs.core.chunked_seq_QMARK_.call(null,inst_3956);
var state_3996__$1 = state_3996;
if(inst_3958){
var statearr_4025_4096 = state_3996__$1;
(statearr_4025_4096[(1)] = (36));

} else {
var statearr_4026_4097 = state_3996__$1;
(statearr_4026_4097[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (13))){
var inst_3887 = (state_3996[(24)]);
var inst_3890 = cljs.core.async.close_BANG_.call(null,inst_3887);
var state_3996__$1 = state_3996;
var statearr_4027_4098 = state_3996__$1;
(statearr_4027_4098[(2)] = inst_3890);

(statearr_4027_4098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (22))){
var inst_3910 = (state_3996[(8)]);
var inst_3913 = cljs.core.async.close_BANG_.call(null,inst_3910);
var state_3996__$1 = state_3996;
var statearr_4028_4099 = state_3996__$1;
(statearr_4028_4099[(2)] = inst_3913);

(statearr_4028_4099[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (36))){
var inst_3956 = (state_3996[(23)]);
var inst_3960 = cljs.core.chunk_first.call(null,inst_3956);
var inst_3961 = cljs.core.chunk_rest.call(null,inst_3956);
var inst_3962 = cljs.core.count.call(null,inst_3960);
var inst_3938 = inst_3961;
var inst_3939 = inst_3960;
var inst_3940 = inst_3962;
var inst_3941 = (0);
var state_3996__$1 = (function (){var statearr_4029 = state_3996;
(statearr_4029[(19)] = inst_3938);

(statearr_4029[(10)] = inst_3941);

(statearr_4029[(11)] = inst_3939);

(statearr_4029[(20)] = inst_3940);

return statearr_4029;
})();
var statearr_4030_4100 = state_3996__$1;
(statearr_4030_4100[(2)] = null);

(statearr_4030_4100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (41))){
var inst_3956 = (state_3996[(23)]);
var inst_3971 = (state_3996[(2)]);
var inst_3972 = cljs.core.next.call(null,inst_3956);
var inst_3938 = inst_3972;
var inst_3939 = null;
var inst_3940 = (0);
var inst_3941 = (0);
var state_3996__$1 = (function (){var statearr_4031 = state_3996;
(statearr_4031[(19)] = inst_3938);

(statearr_4031[(25)] = inst_3971);

(statearr_4031[(10)] = inst_3941);

(statearr_4031[(11)] = inst_3939);

(statearr_4031[(20)] = inst_3940);

return statearr_4031;
})();
var statearr_4032_4101 = state_3996__$1;
(statearr_4032_4101[(2)] = null);

(statearr_4032_4101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (43))){
var state_3996__$1 = state_3996;
var statearr_4033_4102 = state_3996__$1;
(statearr_4033_4102[(2)] = null);

(statearr_4033_4102[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (29))){
var inst_3980 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
var statearr_4034_4103 = state_3996__$1;
(statearr_4034_4103[(2)] = inst_3980);

(statearr_4034_4103[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (44))){
var inst_3989 = (state_3996[(2)]);
var state_3996__$1 = (function (){var statearr_4035 = state_3996;
(statearr_4035[(26)] = inst_3989);

return statearr_4035;
})();
var statearr_4036_4104 = state_3996__$1;
(statearr_4036_4104[(2)] = null);

(statearr_4036_4104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (6))){
var inst_3930 = (state_3996[(27)]);
var inst_3929 = cljs.core.deref.call(null,cs);
var inst_3930__$1 = cljs.core.keys.call(null,inst_3929);
var inst_3931 = cljs.core.count.call(null,inst_3930__$1);
var inst_3932 = cljs.core.reset_BANG_.call(null,dctr,inst_3931);
var inst_3937 = cljs.core.seq.call(null,inst_3930__$1);
var inst_3938 = inst_3937;
var inst_3939 = null;
var inst_3940 = (0);
var inst_3941 = (0);
var state_3996__$1 = (function (){var statearr_4037 = state_3996;
(statearr_4037[(28)] = inst_3932);

(statearr_4037[(27)] = inst_3930__$1);

(statearr_4037[(19)] = inst_3938);

(statearr_4037[(10)] = inst_3941);

(statearr_4037[(11)] = inst_3939);

(statearr_4037[(20)] = inst_3940);

return statearr_4037;
})();
var statearr_4038_4105 = state_3996__$1;
(statearr_4038_4105[(2)] = null);

(statearr_4038_4105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (28))){
var inst_3956 = (state_3996[(23)]);
var inst_3938 = (state_3996[(19)]);
var inst_3956__$1 = cljs.core.seq.call(null,inst_3938);
var state_3996__$1 = (function (){var statearr_4039 = state_3996;
(statearr_4039[(23)] = inst_3956__$1);

return statearr_4039;
})();
if(inst_3956__$1){
var statearr_4040_4106 = state_3996__$1;
(statearr_4040_4106[(1)] = (33));

} else {
var statearr_4041_4107 = state_3996__$1;
(statearr_4041_4107[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (25))){
var inst_3941 = (state_3996[(10)]);
var inst_3940 = (state_3996[(20)]);
var inst_3943 = (inst_3941 < inst_3940);
var inst_3944 = inst_3943;
var state_3996__$1 = state_3996;
if(cljs.core.truth_(inst_3944)){
var statearr_4042_4108 = state_3996__$1;
(statearr_4042_4108[(1)] = (27));

} else {
var statearr_4043_4109 = state_3996__$1;
(statearr_4043_4109[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (34))){
var state_3996__$1 = state_3996;
var statearr_4044_4110 = state_3996__$1;
(statearr_4044_4110[(2)] = null);

(statearr_4044_4110[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (17))){
var state_3996__$1 = state_3996;
var statearr_4045_4111 = state_3996__$1;
(statearr_4045_4111[(2)] = null);

(statearr_4045_4111[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (3))){
var inst_3994 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3996__$1,inst_3994);
} else {
if((state_val_3997 === (12))){
var inst_3925 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
var statearr_4046_4112 = state_3996__$1;
(statearr_4046_4112[(2)] = inst_3925);

(statearr_4046_4112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (2))){
var state_3996__$1 = state_3996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3996__$1,(4),ch);
} else {
if((state_val_3997 === (23))){
var state_3996__$1 = state_3996;
var statearr_4047_4113 = state_3996__$1;
(statearr_4047_4113[(2)] = null);

(statearr_4047_4113[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (35))){
var inst_3978 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
var statearr_4048_4114 = state_3996__$1;
(statearr_4048_4114[(2)] = inst_3978);

(statearr_4048_4114[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (19))){
var inst_3897 = (state_3996[(7)]);
var inst_3901 = cljs.core.chunk_first.call(null,inst_3897);
var inst_3902 = cljs.core.chunk_rest.call(null,inst_3897);
var inst_3903 = cljs.core.count.call(null,inst_3901);
var inst_3875 = inst_3902;
var inst_3876 = inst_3901;
var inst_3877 = inst_3903;
var inst_3878 = (0);
var state_3996__$1 = (function (){var statearr_4049 = state_3996;
(statearr_4049[(13)] = inst_3876);

(statearr_4049[(14)] = inst_3875);

(statearr_4049[(15)] = inst_3877);

(statearr_4049[(16)] = inst_3878);

return statearr_4049;
})();
var statearr_4050_4115 = state_3996__$1;
(statearr_4050_4115[(2)] = null);

(statearr_4050_4115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (11))){
var inst_3897 = (state_3996[(7)]);
var inst_3875 = (state_3996[(14)]);
var inst_3897__$1 = cljs.core.seq.call(null,inst_3875);
var state_3996__$1 = (function (){var statearr_4051 = state_3996;
(statearr_4051[(7)] = inst_3897__$1);

return statearr_4051;
})();
if(inst_3897__$1){
var statearr_4052_4116 = state_3996__$1;
(statearr_4052_4116[(1)] = (16));

} else {
var statearr_4053_4117 = state_3996__$1;
(statearr_4053_4117[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (9))){
var inst_3927 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
var statearr_4054_4118 = state_3996__$1;
(statearr_4054_4118[(2)] = inst_3927);

(statearr_4054_4118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (5))){
var inst_3873 = cljs.core.deref.call(null,cs);
var inst_3874 = cljs.core.seq.call(null,inst_3873);
var inst_3875 = inst_3874;
var inst_3876 = null;
var inst_3877 = (0);
var inst_3878 = (0);
var state_3996__$1 = (function (){var statearr_4055 = state_3996;
(statearr_4055[(13)] = inst_3876);

(statearr_4055[(14)] = inst_3875);

(statearr_4055[(15)] = inst_3877);

(statearr_4055[(16)] = inst_3878);

return statearr_4055;
})();
var statearr_4056_4119 = state_3996__$1;
(statearr_4056_4119[(2)] = null);

(statearr_4056_4119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (14))){
var state_3996__$1 = state_3996;
var statearr_4057_4120 = state_3996__$1;
(statearr_4057_4120[(2)] = null);

(statearr_4057_4120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (45))){
var inst_3986 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
var statearr_4058_4121 = state_3996__$1;
(statearr_4058_4121[(2)] = inst_3986);

(statearr_4058_4121[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (26))){
var inst_3930 = (state_3996[(27)]);
var inst_3982 = (state_3996[(2)]);
var inst_3983 = cljs.core.seq.call(null,inst_3930);
var state_3996__$1 = (function (){var statearr_4059 = state_3996;
(statearr_4059[(29)] = inst_3982);

return statearr_4059;
})();
if(inst_3983){
var statearr_4060_4122 = state_3996__$1;
(statearr_4060_4122[(1)] = (42));

} else {
var statearr_4061_4123 = state_3996__$1;
(statearr_4061_4123[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (16))){
var inst_3897 = (state_3996[(7)]);
var inst_3899 = cljs.core.chunked_seq_QMARK_.call(null,inst_3897);
var state_3996__$1 = state_3996;
if(inst_3899){
var statearr_4062_4124 = state_3996__$1;
(statearr_4062_4124[(1)] = (19));

} else {
var statearr_4063_4125 = state_3996__$1;
(statearr_4063_4125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (38))){
var inst_3975 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
var statearr_4064_4126 = state_3996__$1;
(statearr_4064_4126[(2)] = inst_3975);

(statearr_4064_4126[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (30))){
var state_3996__$1 = state_3996;
var statearr_4065_4127 = state_3996__$1;
(statearr_4065_4127[(2)] = null);

(statearr_4065_4127[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (10))){
var inst_3876 = (state_3996[(13)]);
var inst_3878 = (state_3996[(16)]);
var inst_3886 = cljs.core._nth.call(null,inst_3876,inst_3878);
var inst_3887 = cljs.core.nth.call(null,inst_3886,(0),null);
var inst_3888 = cljs.core.nth.call(null,inst_3886,(1),null);
var state_3996__$1 = (function (){var statearr_4066 = state_3996;
(statearr_4066[(24)] = inst_3887);

return statearr_4066;
})();
if(cljs.core.truth_(inst_3888)){
var statearr_4067_4128 = state_3996__$1;
(statearr_4067_4128[(1)] = (13));

} else {
var statearr_4068_4129 = state_3996__$1;
(statearr_4068_4129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (18))){
var inst_3923 = (state_3996[(2)]);
var state_3996__$1 = state_3996;
var statearr_4069_4130 = state_3996__$1;
(statearr_4069_4130[(2)] = inst_3923);

(statearr_4069_4130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (42))){
var state_3996__$1 = state_3996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3996__$1,(45),dchan);
} else {
if((state_val_3997 === (37))){
var inst_3956 = (state_3996[(23)]);
var inst_3965 = (state_3996[(22)]);
var inst_3866 = (state_3996[(9)]);
var inst_3965__$1 = cljs.core.first.call(null,inst_3956);
var inst_3966 = cljs.core.async.put_BANG_.call(null,inst_3965__$1,inst_3866,done);
var state_3996__$1 = (function (){var statearr_4070 = state_3996;
(statearr_4070[(22)] = inst_3965__$1);

return statearr_4070;
})();
if(cljs.core.truth_(inst_3966)){
var statearr_4071_4131 = state_3996__$1;
(statearr_4071_4131[(1)] = (39));

} else {
var statearr_4072_4132 = state_3996__$1;
(statearr_4072_4132[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3997 === (8))){
var inst_3877 = (state_3996[(15)]);
var inst_3878 = (state_3996[(16)]);
var inst_3880 = (inst_3878 < inst_3877);
var inst_3881 = inst_3880;
var state_3996__$1 = state_3996;
if(cljs.core.truth_(inst_3881)){
var statearr_4073_4133 = state_3996__$1;
(statearr_4073_4133[(1)] = (10));

} else {
var statearr_4074_4134 = state_3996__$1;
(statearr_4074_4134[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__3165__auto__ = null;
var cljs$core$async$mult_$_state_machine__3165__auto____0 = (function (){
var statearr_4075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4075[(0)] = cljs$core$async$mult_$_state_machine__3165__auto__);

(statearr_4075[(1)] = (1));

return statearr_4075;
});
var cljs$core$async$mult_$_state_machine__3165__auto____1 = (function (state_3996){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_3996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e4076){var ex__3168__auto__ = e4076;
var statearr_4077_4135 = state_3996;
(statearr_4077_4135[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_3996[(4)]))){
var statearr_4078_4136 = state_3996;
(statearr_4078_4136[(1)] = cljs.core.first.call(null,(state_3996[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4137 = state_3996;
state_3996 = G__4137;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3165__auto__ = function(state_3996){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3165__auto____1.call(this,state_3996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3165__auto____0;
cljs$core$async$mult_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3165__auto____1;
return cljs$core$async$mult_$_state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_4079 = f__3239__auto__.call(null);
(statearr_4079[(6)] = c__3238__auto___4080);

return statearr_4079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
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
var G__4139 = arguments.length;
switch (G__4139) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_4141 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_4141.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_4142 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_4142.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_4143 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_4143.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_4144 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,state_map);
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_4144.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_4145 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,mode);
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_4145.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___4155 = arguments.length;
var i__5767__auto___4156 = (0);
while(true){
if((i__5767__auto___4156 < len__5766__auto___4155)){
args__5772__auto__.push((arguments[i__5767__auto___4156]));

var G__4157 = (i__5767__auto___4156 + (1));
i__5767__auto___4156 = G__4157;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4150){
var map__4151 = p__4150;
var map__4151__$1 = cljs.core.__destructure_map.call(null,map__4151);
var opts = map__4151__$1;
var statearr_4152_4158 = state;
(statearr_4152_4158[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_4153_4159 = state;
(statearr_4153_4159[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_4154_4160 = state;
(statearr_4154_4160[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4146){
var G__4147 = cljs.core.first.call(null,seq4146);
var seq4146__$1 = cljs.core.next.call(null,seq4146);
var G__4148 = cljs.core.first.call(null,seq4146__$1);
var seq4146__$2 = cljs.core.next.call(null,seq4146__$1);
var G__4149 = cljs.core.first.call(null,seq4146__$2);
var seq4146__$3 = cljs.core.next.call(null,seq4146__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4147,G__4148,G__4149,seq4146__$3);
}));

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4161 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta4162){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta4162 = meta4162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4163,meta4162__$1){
var self__ = this;
var _4163__$1 = this;
return (new cljs.core.async.t_cljs$core$async4161(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta4162__$1));
}));

(cljs.core.async.t_cljs$core$async4161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4163){
var self__ = this;
var _4163__$1 = this;
return self__.meta4162;
}));

(cljs.core.async.t_cljs$core$async4161.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4161.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async4161.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4161.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async4161.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async4161.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async4161.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async4161.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async4161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta4162","meta4162",-1246912131,null)], null);
}));

(cljs.core.async.t_cljs$core$async4161.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4161");

(cljs.core.async.t_cljs$core$async4161.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async4161");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4161.
 */
cljs.core.async.__GT_t_cljs$core$async4161 = (function cljs$core$async$mix_$___GT_t_cljs$core$async4161(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4162){
return (new cljs.core.async.t_cljs$core$async4161(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4162));
});

}

return (new cljs.core.async.t_cljs$core$async4161(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3238__auto___4276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_4231){
var state_val_4232 = (state_4231[(1)]);
if((state_val_4232 === (7))){
var inst_4191 = (state_4231[(2)]);
var state_4231__$1 = state_4231;
if(cljs.core.truth_(inst_4191)){
var statearr_4233_4277 = state_4231__$1;
(statearr_4233_4277[(1)] = (8));

} else {
var statearr_4234_4278 = state_4231__$1;
(statearr_4234_4278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (20))){
var inst_4184 = (state_4231[(7)]);
var state_4231__$1 = state_4231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4231__$1,(23),out,inst_4184);
} else {
if((state_val_4232 === (1))){
var inst_4167 = calc_state.call(null);
var inst_4168 = cljs.core.__destructure_map.call(null,inst_4167);
var inst_4169 = cljs.core.get.call(null,inst_4168,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4170 = cljs.core.get.call(null,inst_4168,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4171 = cljs.core.get.call(null,inst_4168,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_4172 = inst_4167;
var state_4231__$1 = (function (){var statearr_4235 = state_4231;
(statearr_4235[(8)] = inst_4171);

(statearr_4235[(9)] = inst_4172);

(statearr_4235[(10)] = inst_4170);

(statearr_4235[(11)] = inst_4169);

return statearr_4235;
})();
var statearr_4236_4279 = state_4231__$1;
(statearr_4236_4279[(2)] = null);

(statearr_4236_4279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (24))){
var inst_4175 = (state_4231[(12)]);
var inst_4172 = inst_4175;
var state_4231__$1 = (function (){var statearr_4237 = state_4231;
(statearr_4237[(9)] = inst_4172);

return statearr_4237;
})();
var statearr_4238_4280 = state_4231__$1;
(statearr_4238_4280[(2)] = null);

(statearr_4238_4280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (4))){
var inst_4184 = (state_4231[(7)]);
var inst_4186 = (state_4231[(13)]);
var inst_4183 = (state_4231[(2)]);
var inst_4184__$1 = cljs.core.nth.call(null,inst_4183,(0),null);
var inst_4185 = cljs.core.nth.call(null,inst_4183,(1),null);
var inst_4186__$1 = (inst_4184__$1 == null);
var state_4231__$1 = (function (){var statearr_4239 = state_4231;
(statearr_4239[(7)] = inst_4184__$1);

(statearr_4239[(13)] = inst_4186__$1);

(statearr_4239[(14)] = inst_4185);

return statearr_4239;
})();
if(cljs.core.truth_(inst_4186__$1)){
var statearr_4240_4281 = state_4231__$1;
(statearr_4240_4281[(1)] = (5));

} else {
var statearr_4241_4282 = state_4231__$1;
(statearr_4241_4282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (15))){
var inst_4205 = (state_4231[(15)]);
var inst_4176 = (state_4231[(16)]);
var inst_4205__$1 = cljs.core.empty_QMARK_.call(null,inst_4176);
var state_4231__$1 = (function (){var statearr_4242 = state_4231;
(statearr_4242[(15)] = inst_4205__$1);

return statearr_4242;
})();
if(inst_4205__$1){
var statearr_4243_4283 = state_4231__$1;
(statearr_4243_4283[(1)] = (17));

} else {
var statearr_4244_4284 = state_4231__$1;
(statearr_4244_4284[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (21))){
var inst_4175 = (state_4231[(12)]);
var inst_4172 = inst_4175;
var state_4231__$1 = (function (){var statearr_4245 = state_4231;
(statearr_4245[(9)] = inst_4172);

return statearr_4245;
})();
var statearr_4246_4285 = state_4231__$1;
(statearr_4246_4285[(2)] = null);

(statearr_4246_4285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (13))){
var inst_4198 = (state_4231[(2)]);
var inst_4199 = calc_state.call(null);
var inst_4172 = inst_4199;
var state_4231__$1 = (function (){var statearr_4247 = state_4231;
(statearr_4247[(17)] = inst_4198);

(statearr_4247[(9)] = inst_4172);

return statearr_4247;
})();
var statearr_4248_4286 = state_4231__$1;
(statearr_4248_4286[(2)] = null);

(statearr_4248_4286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (22))){
var inst_4225 = (state_4231[(2)]);
var state_4231__$1 = state_4231;
var statearr_4249_4287 = state_4231__$1;
(statearr_4249_4287[(2)] = inst_4225);

(statearr_4249_4287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (6))){
var inst_4185 = (state_4231[(14)]);
var inst_4189 = cljs.core._EQ_.call(null,inst_4185,change);
var state_4231__$1 = state_4231;
var statearr_4250_4288 = state_4231__$1;
(statearr_4250_4288[(2)] = inst_4189);

(statearr_4250_4288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (25))){
var state_4231__$1 = state_4231;
var statearr_4251_4289 = state_4231__$1;
(statearr_4251_4289[(2)] = null);

(statearr_4251_4289[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (17))){
var inst_4177 = (state_4231[(18)]);
var inst_4185 = (state_4231[(14)]);
var inst_4207 = inst_4177.call(null,inst_4185);
var inst_4208 = cljs.core.not.call(null,inst_4207);
var state_4231__$1 = state_4231;
var statearr_4252_4290 = state_4231__$1;
(statearr_4252_4290[(2)] = inst_4208);

(statearr_4252_4290[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (3))){
var inst_4229 = (state_4231[(2)]);
var state_4231__$1 = state_4231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4231__$1,inst_4229);
} else {
if((state_val_4232 === (12))){
var state_4231__$1 = state_4231;
var statearr_4253_4291 = state_4231__$1;
(statearr_4253_4291[(2)] = null);

(statearr_4253_4291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (2))){
var inst_4172 = (state_4231[(9)]);
var inst_4175 = (state_4231[(12)]);
var inst_4175__$1 = cljs.core.__destructure_map.call(null,inst_4172);
var inst_4176 = cljs.core.get.call(null,inst_4175__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4177 = cljs.core.get.call(null,inst_4175__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4178 = cljs.core.get.call(null,inst_4175__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4231__$1 = (function (){var statearr_4254 = state_4231;
(statearr_4254[(18)] = inst_4177);

(statearr_4254[(12)] = inst_4175__$1);

(statearr_4254[(16)] = inst_4176);

return statearr_4254;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4231__$1,(4),inst_4178);
} else {
if((state_val_4232 === (23))){
var inst_4216 = (state_4231[(2)]);
var state_4231__$1 = state_4231;
if(cljs.core.truth_(inst_4216)){
var statearr_4255_4292 = state_4231__$1;
(statearr_4255_4292[(1)] = (24));

} else {
var statearr_4256_4293 = state_4231__$1;
(statearr_4256_4293[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (19))){
var inst_4211 = (state_4231[(2)]);
var state_4231__$1 = state_4231;
var statearr_4257_4294 = state_4231__$1;
(statearr_4257_4294[(2)] = inst_4211);

(statearr_4257_4294[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (11))){
var inst_4185 = (state_4231[(14)]);
var inst_4195 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4185);
var state_4231__$1 = state_4231;
var statearr_4258_4295 = state_4231__$1;
(statearr_4258_4295[(2)] = inst_4195);

(statearr_4258_4295[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (9))){
var inst_4202 = (state_4231[(19)]);
var inst_4185 = (state_4231[(14)]);
var inst_4176 = (state_4231[(16)]);
var inst_4202__$1 = inst_4176.call(null,inst_4185);
var state_4231__$1 = (function (){var statearr_4259 = state_4231;
(statearr_4259[(19)] = inst_4202__$1);

return statearr_4259;
})();
if(cljs.core.truth_(inst_4202__$1)){
var statearr_4260_4296 = state_4231__$1;
(statearr_4260_4296[(1)] = (14));

} else {
var statearr_4261_4297 = state_4231__$1;
(statearr_4261_4297[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (5))){
var inst_4186 = (state_4231[(13)]);
var state_4231__$1 = state_4231;
var statearr_4262_4298 = state_4231__$1;
(statearr_4262_4298[(2)] = inst_4186);

(statearr_4262_4298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (14))){
var inst_4202 = (state_4231[(19)]);
var state_4231__$1 = state_4231;
var statearr_4263_4299 = state_4231__$1;
(statearr_4263_4299[(2)] = inst_4202);

(statearr_4263_4299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (26))){
var inst_4221 = (state_4231[(2)]);
var state_4231__$1 = state_4231;
var statearr_4264_4300 = state_4231__$1;
(statearr_4264_4300[(2)] = inst_4221);

(statearr_4264_4300[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (16))){
var inst_4213 = (state_4231[(2)]);
var state_4231__$1 = state_4231;
if(cljs.core.truth_(inst_4213)){
var statearr_4265_4301 = state_4231__$1;
(statearr_4265_4301[(1)] = (20));

} else {
var statearr_4266_4302 = state_4231__$1;
(statearr_4266_4302[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (10))){
var inst_4227 = (state_4231[(2)]);
var state_4231__$1 = state_4231;
var statearr_4267_4303 = state_4231__$1;
(statearr_4267_4303[(2)] = inst_4227);

(statearr_4267_4303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (18))){
var inst_4205 = (state_4231[(15)]);
var state_4231__$1 = state_4231;
var statearr_4268_4304 = state_4231__$1;
(statearr_4268_4304[(2)] = inst_4205);

(statearr_4268_4304[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4232 === (8))){
var inst_4184 = (state_4231[(7)]);
var inst_4193 = (inst_4184 == null);
var state_4231__$1 = state_4231;
if(cljs.core.truth_(inst_4193)){
var statearr_4269_4305 = state_4231__$1;
(statearr_4269_4305[(1)] = (11));

} else {
var statearr_4270_4306 = state_4231__$1;
(statearr_4270_4306[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__3165__auto__ = null;
var cljs$core$async$mix_$_state_machine__3165__auto____0 = (function (){
var statearr_4271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4271[(0)] = cljs$core$async$mix_$_state_machine__3165__auto__);

(statearr_4271[(1)] = (1));

return statearr_4271;
});
var cljs$core$async$mix_$_state_machine__3165__auto____1 = (function (state_4231){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_4231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e4272){var ex__3168__auto__ = e4272;
var statearr_4273_4307 = state_4231;
(statearr_4273_4307[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_4231[(4)]))){
var statearr_4274_4308 = state_4231;
(statearr_4274_4308[(1)] = cljs.core.first.call(null,(state_4231[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4309 = state_4231;
state_4231 = G__4309;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3165__auto__ = function(state_4231){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3165__auto____1.call(this,state_4231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3165__auto____0;
cljs$core$async$mix_$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3165__auto____1;
return cljs$core$async$mix_$_state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_4275 = f__3239__auto__.call(null);
(statearr_4275[(6)] = c__3238__auto___4276);

return statearr_4275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_4312 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_4312.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_4313 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_4313.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_4314 = (function() {
var G__4315 = null;
var G__4315__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__4315__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__4315 = function(p,v){
switch(arguments.length){
case 1:
return G__4315__1.call(this,p);
case 2:
return G__4315__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__4315.cljs$core$IFn$_invoke$arity$1 = G__4315__1;
G__4315.cljs$core$IFn$_invoke$arity$2 = G__4315__2;
return G__4315;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__4311 = arguments.length;
switch (G__4311) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_4314.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_4314.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__4319 = arguments.length;
switch (G__4319) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__4317_SHARP_){
if(cljs.core.truth_(p1__4317_SHARP_.call(null,topic))){
return p1__4317_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4317_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4320 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4321){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4321 = meta4321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4322,meta4321__$1){
var self__ = this;
var _4322__$1 = this;
return (new cljs.core.async.t_cljs$core$async4320(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4321__$1));
}));

(cljs.core.async.t_cljs$core$async4320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4322){
var self__ = this;
var _4322__$1 = this;
return self__.meta4321;
}));

(cljs.core.async.t_cljs$core$async4320.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async4320.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4320.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async4320.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async4320.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async4320.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async4320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4321","meta4321",468322445,null)], null);
}));

(cljs.core.async.t_cljs$core$async4320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4320");

(cljs.core.async.t_cljs$core$async4320.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async4320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4320.
 */
cljs.core.async.__GT_t_cljs$core$async4320 = (function cljs$core$async$__GT_t_cljs$core$async4320(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4321){
return (new cljs.core.async.t_cljs$core$async4320(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4321));
});

}

return (new cljs.core.async.t_cljs$core$async4320(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3238__auto___4441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_4394){
var state_val_4395 = (state_4394[(1)]);
if((state_val_4395 === (7))){
var inst_4390 = (state_4394[(2)]);
var state_4394__$1 = state_4394;
var statearr_4396_4442 = state_4394__$1;
(statearr_4396_4442[(2)] = inst_4390);

(statearr_4396_4442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (20))){
var state_4394__$1 = state_4394;
var statearr_4397_4443 = state_4394__$1;
(statearr_4397_4443[(2)] = null);

(statearr_4397_4443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (1))){
var state_4394__$1 = state_4394;
var statearr_4398_4444 = state_4394__$1;
(statearr_4398_4444[(2)] = null);

(statearr_4398_4444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (24))){
var inst_4373 = (state_4394[(7)]);
var inst_4382 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4373);
var state_4394__$1 = state_4394;
var statearr_4399_4445 = state_4394__$1;
(statearr_4399_4445[(2)] = inst_4382);

(statearr_4399_4445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (4))){
var inst_4325 = (state_4394[(8)]);
var inst_4325__$1 = (state_4394[(2)]);
var inst_4326 = (inst_4325__$1 == null);
var state_4394__$1 = (function (){var statearr_4400 = state_4394;
(statearr_4400[(8)] = inst_4325__$1);

return statearr_4400;
})();
if(cljs.core.truth_(inst_4326)){
var statearr_4401_4446 = state_4394__$1;
(statearr_4401_4446[(1)] = (5));

} else {
var statearr_4402_4447 = state_4394__$1;
(statearr_4402_4447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (15))){
var inst_4367 = (state_4394[(2)]);
var state_4394__$1 = state_4394;
var statearr_4403_4448 = state_4394__$1;
(statearr_4403_4448[(2)] = inst_4367);

(statearr_4403_4448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (21))){
var inst_4387 = (state_4394[(2)]);
var state_4394__$1 = (function (){var statearr_4404 = state_4394;
(statearr_4404[(9)] = inst_4387);

return statearr_4404;
})();
var statearr_4405_4449 = state_4394__$1;
(statearr_4405_4449[(2)] = null);

(statearr_4405_4449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (13))){
var inst_4349 = (state_4394[(10)]);
var inst_4351 = cljs.core.chunked_seq_QMARK_.call(null,inst_4349);
var state_4394__$1 = state_4394;
if(inst_4351){
var statearr_4406_4450 = state_4394__$1;
(statearr_4406_4450[(1)] = (16));

} else {
var statearr_4407_4451 = state_4394__$1;
(statearr_4407_4451[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (22))){
var inst_4379 = (state_4394[(2)]);
var state_4394__$1 = state_4394;
if(cljs.core.truth_(inst_4379)){
var statearr_4408_4452 = state_4394__$1;
(statearr_4408_4452[(1)] = (23));

} else {
var statearr_4409_4453 = state_4394__$1;
(statearr_4409_4453[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (6))){
var inst_4373 = (state_4394[(7)]);
var inst_4375 = (state_4394[(11)]);
var inst_4325 = (state_4394[(8)]);
var inst_4373__$1 = topic_fn.call(null,inst_4325);
var inst_4374 = cljs.core.deref.call(null,mults);
var inst_4375__$1 = cljs.core.get.call(null,inst_4374,inst_4373__$1);
var state_4394__$1 = (function (){var statearr_4410 = state_4394;
(statearr_4410[(7)] = inst_4373__$1);

(statearr_4410[(11)] = inst_4375__$1);

return statearr_4410;
})();
if(cljs.core.truth_(inst_4375__$1)){
var statearr_4411_4454 = state_4394__$1;
(statearr_4411_4454[(1)] = (19));

} else {
var statearr_4412_4455 = state_4394__$1;
(statearr_4412_4455[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (25))){
var inst_4384 = (state_4394[(2)]);
var state_4394__$1 = state_4394;
var statearr_4413_4456 = state_4394__$1;
(statearr_4413_4456[(2)] = inst_4384);

(statearr_4413_4456[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (17))){
var inst_4349 = (state_4394[(10)]);
var inst_4358 = cljs.core.first.call(null,inst_4349);
var inst_4359 = cljs.core.async.muxch_STAR_.call(null,inst_4358);
var inst_4360 = cljs.core.async.close_BANG_.call(null,inst_4359);
var inst_4361 = cljs.core.next.call(null,inst_4349);
var inst_4335 = inst_4361;
var inst_4336 = null;
var inst_4337 = (0);
var inst_4338 = (0);
var state_4394__$1 = (function (){var statearr_4414 = state_4394;
(statearr_4414[(12)] = inst_4336);

(statearr_4414[(13)] = inst_4360);

(statearr_4414[(14)] = inst_4335);

(statearr_4414[(15)] = inst_4337);

(statearr_4414[(16)] = inst_4338);

return statearr_4414;
})();
var statearr_4415_4457 = state_4394__$1;
(statearr_4415_4457[(2)] = null);

(statearr_4415_4457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (3))){
var inst_4392 = (state_4394[(2)]);
var state_4394__$1 = state_4394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4394__$1,inst_4392);
} else {
if((state_val_4395 === (12))){
var inst_4369 = (state_4394[(2)]);
var state_4394__$1 = state_4394;
var statearr_4416_4458 = state_4394__$1;
(statearr_4416_4458[(2)] = inst_4369);

(statearr_4416_4458[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (2))){
var state_4394__$1 = state_4394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4394__$1,(4),ch);
} else {
if((state_val_4395 === (23))){
var state_4394__$1 = state_4394;
var statearr_4417_4459 = state_4394__$1;
(statearr_4417_4459[(2)] = null);

(statearr_4417_4459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (19))){
var inst_4375 = (state_4394[(11)]);
var inst_4325 = (state_4394[(8)]);
var inst_4377 = cljs.core.async.muxch_STAR_.call(null,inst_4375);
var state_4394__$1 = state_4394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4394__$1,(22),inst_4377,inst_4325);
} else {
if((state_val_4395 === (11))){
var inst_4335 = (state_4394[(14)]);
var inst_4349 = (state_4394[(10)]);
var inst_4349__$1 = cljs.core.seq.call(null,inst_4335);
var state_4394__$1 = (function (){var statearr_4418 = state_4394;
(statearr_4418[(10)] = inst_4349__$1);

return statearr_4418;
})();
if(inst_4349__$1){
var statearr_4419_4460 = state_4394__$1;
(statearr_4419_4460[(1)] = (13));

} else {
var statearr_4420_4461 = state_4394__$1;
(statearr_4420_4461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (9))){
var inst_4371 = (state_4394[(2)]);
var state_4394__$1 = state_4394;
var statearr_4421_4462 = state_4394__$1;
(statearr_4421_4462[(2)] = inst_4371);

(statearr_4421_4462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (5))){
var inst_4332 = cljs.core.deref.call(null,mults);
var inst_4333 = cljs.core.vals.call(null,inst_4332);
var inst_4334 = cljs.core.seq.call(null,inst_4333);
var inst_4335 = inst_4334;
var inst_4336 = null;
var inst_4337 = (0);
var inst_4338 = (0);
var state_4394__$1 = (function (){var statearr_4422 = state_4394;
(statearr_4422[(12)] = inst_4336);

(statearr_4422[(14)] = inst_4335);

(statearr_4422[(15)] = inst_4337);

(statearr_4422[(16)] = inst_4338);

return statearr_4422;
})();
var statearr_4423_4463 = state_4394__$1;
(statearr_4423_4463[(2)] = null);

(statearr_4423_4463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (14))){
var state_4394__$1 = state_4394;
var statearr_4427_4464 = state_4394__$1;
(statearr_4427_4464[(2)] = null);

(statearr_4427_4464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (16))){
var inst_4349 = (state_4394[(10)]);
var inst_4353 = cljs.core.chunk_first.call(null,inst_4349);
var inst_4354 = cljs.core.chunk_rest.call(null,inst_4349);
var inst_4355 = cljs.core.count.call(null,inst_4353);
var inst_4335 = inst_4354;
var inst_4336 = inst_4353;
var inst_4337 = inst_4355;
var inst_4338 = (0);
var state_4394__$1 = (function (){var statearr_4428 = state_4394;
(statearr_4428[(12)] = inst_4336);

(statearr_4428[(14)] = inst_4335);

(statearr_4428[(15)] = inst_4337);

(statearr_4428[(16)] = inst_4338);

return statearr_4428;
})();
var statearr_4429_4465 = state_4394__$1;
(statearr_4429_4465[(2)] = null);

(statearr_4429_4465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (10))){
var inst_4336 = (state_4394[(12)]);
var inst_4335 = (state_4394[(14)]);
var inst_4337 = (state_4394[(15)]);
var inst_4338 = (state_4394[(16)]);
var inst_4343 = cljs.core._nth.call(null,inst_4336,inst_4338);
var inst_4344 = cljs.core.async.muxch_STAR_.call(null,inst_4343);
var inst_4345 = cljs.core.async.close_BANG_.call(null,inst_4344);
var inst_4346 = (inst_4338 + (1));
var tmp4424 = inst_4336;
var tmp4425 = inst_4335;
var tmp4426 = inst_4337;
var inst_4335__$1 = tmp4425;
var inst_4336__$1 = tmp4424;
var inst_4337__$1 = tmp4426;
var inst_4338__$1 = inst_4346;
var state_4394__$1 = (function (){var statearr_4430 = state_4394;
(statearr_4430[(12)] = inst_4336__$1);

(statearr_4430[(14)] = inst_4335__$1);

(statearr_4430[(15)] = inst_4337__$1);

(statearr_4430[(17)] = inst_4345);

(statearr_4430[(16)] = inst_4338__$1);

return statearr_4430;
})();
var statearr_4431_4466 = state_4394__$1;
(statearr_4431_4466[(2)] = null);

(statearr_4431_4466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (18))){
var inst_4364 = (state_4394[(2)]);
var state_4394__$1 = state_4394;
var statearr_4432_4467 = state_4394__$1;
(statearr_4432_4467[(2)] = inst_4364);

(statearr_4432_4467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4395 === (8))){
var inst_4337 = (state_4394[(15)]);
var inst_4338 = (state_4394[(16)]);
var inst_4340 = (inst_4338 < inst_4337);
var inst_4341 = inst_4340;
var state_4394__$1 = state_4394;
if(cljs.core.truth_(inst_4341)){
var statearr_4433_4468 = state_4394__$1;
(statearr_4433_4468[(1)] = (10));

} else {
var statearr_4434_4469 = state_4394__$1;
(statearr_4434_4469[(1)] = (11));

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
var cljs$core$async$state_machine__3165__auto__ = null;
var cljs$core$async$state_machine__3165__auto____0 = (function (){
var statearr_4435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4435[(0)] = cljs$core$async$state_machine__3165__auto__);

(statearr_4435[(1)] = (1));

return statearr_4435;
});
var cljs$core$async$state_machine__3165__auto____1 = (function (state_4394){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_4394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e4436){var ex__3168__auto__ = e4436;
var statearr_4437_4470 = state_4394;
(statearr_4437_4470[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_4394[(4)]))){
var statearr_4438_4471 = state_4394;
(statearr_4438_4471[(1)] = cljs.core.first.call(null,(state_4394[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4472 = state_4394;
state_4394 = G__4472;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$state_machine__3165__auto__ = function(state_4394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3165__auto____1.call(this,state_4394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3165__auto____0;
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3165__auto____1;
return cljs$core$async$state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_4439 = f__3239__auto__.call(null);
(statearr_4439[(6)] = c__3238__auto___4441);

return statearr_4439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
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
var G__4474 = arguments.length;
switch (G__4474) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__4477 = arguments.length;
switch (G__4477) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__4480 = arguments.length;
switch (G__4480) {
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
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__3238__auto___4558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_4523){
var state_val_4524 = (state_4523[(1)]);
if((state_val_4524 === (7))){
var state_4523__$1 = state_4523;
var statearr_4525_4559 = state_4523__$1;
(statearr_4525_4559[(2)] = null);

(statearr_4525_4559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (1))){
var state_4523__$1 = state_4523;
var statearr_4526_4560 = state_4523__$1;
(statearr_4526_4560[(2)] = null);

(statearr_4526_4560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (4))){
var inst_4483 = (state_4523[(7)]);
var inst_4484 = (state_4523[(8)]);
var inst_4486 = (inst_4484 < inst_4483);
var state_4523__$1 = state_4523;
if(cljs.core.truth_(inst_4486)){
var statearr_4527_4561 = state_4523__$1;
(statearr_4527_4561[(1)] = (6));

} else {
var statearr_4528_4562 = state_4523__$1;
(statearr_4528_4562[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (15))){
var inst_4509 = (state_4523[(9)]);
var inst_4514 = cljs.core.apply.call(null,f,inst_4509);
var state_4523__$1 = state_4523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4523__$1,(17),out,inst_4514);
} else {
if((state_val_4524 === (13))){
var inst_4509 = (state_4523[(9)]);
var inst_4509__$1 = (state_4523[(2)]);
var inst_4510 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4509__$1);
var state_4523__$1 = (function (){var statearr_4529 = state_4523;
(statearr_4529[(9)] = inst_4509__$1);

return statearr_4529;
})();
if(cljs.core.truth_(inst_4510)){
var statearr_4530_4563 = state_4523__$1;
(statearr_4530_4563[(1)] = (14));

} else {
var statearr_4531_4564 = state_4523__$1;
(statearr_4531_4564[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (6))){
var state_4523__$1 = state_4523;
var statearr_4532_4565 = state_4523__$1;
(statearr_4532_4565[(2)] = null);

(statearr_4532_4565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (17))){
var inst_4516 = (state_4523[(2)]);
var state_4523__$1 = (function (){var statearr_4534 = state_4523;
(statearr_4534[(10)] = inst_4516);

return statearr_4534;
})();
var statearr_4535_4566 = state_4523__$1;
(statearr_4535_4566[(2)] = null);

(statearr_4535_4566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (3))){
var inst_4521 = (state_4523[(2)]);
var state_4523__$1 = state_4523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4523__$1,inst_4521);
} else {
if((state_val_4524 === (12))){
var _ = (function (){var statearr_4536 = state_4523;
(statearr_4536[(4)] = cljs.core.rest.call(null,(state_4523[(4)])));

return statearr_4536;
})();
var state_4523__$1 = state_4523;
var ex4533 = (state_4523__$1[(2)]);
var statearr_4537_4567 = state_4523__$1;
(statearr_4537_4567[(5)] = ex4533);


if((ex4533 instanceof Object)){
var statearr_4538_4568 = state_4523__$1;
(statearr_4538_4568[(1)] = (11));

(statearr_4538_4568[(5)] = null);

} else {
throw ex4533;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (2))){
var inst_4482 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4483 = cnt;
var inst_4484 = (0);
var state_4523__$1 = (function (){var statearr_4539 = state_4523;
(statearr_4539[(7)] = inst_4483);

(statearr_4539[(11)] = inst_4482);

(statearr_4539[(8)] = inst_4484);

return statearr_4539;
})();
var statearr_4540_4569 = state_4523__$1;
(statearr_4540_4569[(2)] = null);

(statearr_4540_4569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (11))){
var inst_4488 = (state_4523[(2)]);
var inst_4489 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4523__$1 = (function (){var statearr_4541 = state_4523;
(statearr_4541[(12)] = inst_4488);

return statearr_4541;
})();
var statearr_4542_4570 = state_4523__$1;
(statearr_4542_4570[(2)] = inst_4489);

(statearr_4542_4570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (9))){
var inst_4484 = (state_4523[(8)]);
var _ = (function (){var statearr_4543 = state_4523;
(statearr_4543[(4)] = cljs.core.cons.call(null,(12),(state_4523[(4)])));

return statearr_4543;
})();
var inst_4495 = chs__$1.call(null,inst_4484);
var inst_4496 = done.call(null,inst_4484);
var inst_4497 = cljs.core.async.take_BANG_.call(null,inst_4495,inst_4496);
var ___$1 = (function (){var statearr_4544 = state_4523;
(statearr_4544[(4)] = cljs.core.rest.call(null,(state_4523[(4)])));

return statearr_4544;
})();
var state_4523__$1 = state_4523;
var statearr_4545_4571 = state_4523__$1;
(statearr_4545_4571[(2)] = inst_4497);

(statearr_4545_4571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (5))){
var inst_4507 = (state_4523[(2)]);
var state_4523__$1 = (function (){var statearr_4546 = state_4523;
(statearr_4546[(13)] = inst_4507);

return statearr_4546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4523__$1,(13),dchan);
} else {
if((state_val_4524 === (14))){
var inst_4512 = cljs.core.async.close_BANG_.call(null,out);
var state_4523__$1 = state_4523;
var statearr_4547_4572 = state_4523__$1;
(statearr_4547_4572[(2)] = inst_4512);

(statearr_4547_4572[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (16))){
var inst_4519 = (state_4523[(2)]);
var state_4523__$1 = state_4523;
var statearr_4548_4573 = state_4523__$1;
(statearr_4548_4573[(2)] = inst_4519);

(statearr_4548_4573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (10))){
var inst_4484 = (state_4523[(8)]);
var inst_4500 = (state_4523[(2)]);
var inst_4501 = (inst_4484 + (1));
var inst_4484__$1 = inst_4501;
var state_4523__$1 = (function (){var statearr_4549 = state_4523;
(statearr_4549[(14)] = inst_4500);

(statearr_4549[(8)] = inst_4484__$1);

return statearr_4549;
})();
var statearr_4550_4574 = state_4523__$1;
(statearr_4550_4574[(2)] = null);

(statearr_4550_4574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4524 === (8))){
var inst_4505 = (state_4523[(2)]);
var state_4523__$1 = state_4523;
var statearr_4551_4575 = state_4523__$1;
(statearr_4551_4575[(2)] = inst_4505);

(statearr_4551_4575[(1)] = (5));


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
var cljs$core$async$state_machine__3165__auto__ = null;
var cljs$core$async$state_machine__3165__auto____0 = (function (){
var statearr_4552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4552[(0)] = cljs$core$async$state_machine__3165__auto__);

(statearr_4552[(1)] = (1));

return statearr_4552;
});
var cljs$core$async$state_machine__3165__auto____1 = (function (state_4523){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_4523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e4553){var ex__3168__auto__ = e4553;
var statearr_4554_4576 = state_4523;
(statearr_4554_4576[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_4523[(4)]))){
var statearr_4555_4577 = state_4523;
(statearr_4555_4577[(1)] = cljs.core.first.call(null,(state_4523[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4578 = state_4523;
state_4523 = G__4578;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$state_machine__3165__auto__ = function(state_4523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3165__auto____1.call(this,state_4523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3165__auto____0;
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3165__auto____1;
return cljs$core$async$state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_4556 = f__3239__auto__.call(null);
(statearr_4556[(6)] = c__3238__auto___4558);

return statearr_4556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
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
var G__4581 = arguments.length;
switch (G__4581) {
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
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3238__auto___4636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_4613){
var state_val_4614 = (state_4613[(1)]);
if((state_val_4614 === (7))){
var inst_4593 = (state_4613[(7)]);
var inst_4592 = (state_4613[(8)]);
var inst_4592__$1 = (state_4613[(2)]);
var inst_4593__$1 = cljs.core.nth.call(null,inst_4592__$1,(0),null);
var inst_4594 = cljs.core.nth.call(null,inst_4592__$1,(1),null);
var inst_4595 = (inst_4593__$1 == null);
var state_4613__$1 = (function (){var statearr_4615 = state_4613;
(statearr_4615[(7)] = inst_4593__$1);

(statearr_4615[(9)] = inst_4594);

(statearr_4615[(8)] = inst_4592__$1);

return statearr_4615;
})();
if(cljs.core.truth_(inst_4595)){
var statearr_4616_4637 = state_4613__$1;
(statearr_4616_4637[(1)] = (8));

} else {
var statearr_4617_4638 = state_4613__$1;
(statearr_4617_4638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4614 === (1))){
var inst_4582 = cljs.core.vec.call(null,chs);
var inst_4583 = inst_4582;
var state_4613__$1 = (function (){var statearr_4618 = state_4613;
(statearr_4618[(10)] = inst_4583);

return statearr_4618;
})();
var statearr_4619_4639 = state_4613__$1;
(statearr_4619_4639[(2)] = null);

(statearr_4619_4639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4614 === (4))){
var inst_4583 = (state_4613[(10)]);
var state_4613__$1 = state_4613;
return cljs.core.async.ioc_alts_BANG_.call(null,state_4613__$1,(7),inst_4583);
} else {
if((state_val_4614 === (6))){
var inst_4609 = (state_4613[(2)]);
var state_4613__$1 = state_4613;
var statearr_4620_4640 = state_4613__$1;
(statearr_4620_4640[(2)] = inst_4609);

(statearr_4620_4640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4614 === (3))){
var inst_4611 = (state_4613[(2)]);
var state_4613__$1 = state_4613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4613__$1,inst_4611);
} else {
if((state_val_4614 === (2))){
var inst_4583 = (state_4613[(10)]);
var inst_4585 = cljs.core.count.call(null,inst_4583);
var inst_4586 = (inst_4585 > (0));
var state_4613__$1 = state_4613;
if(cljs.core.truth_(inst_4586)){
var statearr_4622_4641 = state_4613__$1;
(statearr_4622_4641[(1)] = (4));

} else {
var statearr_4623_4642 = state_4613__$1;
(statearr_4623_4642[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4614 === (11))){
var inst_4583 = (state_4613[(10)]);
var inst_4602 = (state_4613[(2)]);
var tmp4621 = inst_4583;
var inst_4583__$1 = tmp4621;
var state_4613__$1 = (function (){var statearr_4624 = state_4613;
(statearr_4624[(10)] = inst_4583__$1);

(statearr_4624[(11)] = inst_4602);

return statearr_4624;
})();
var statearr_4625_4643 = state_4613__$1;
(statearr_4625_4643[(2)] = null);

(statearr_4625_4643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4614 === (9))){
var inst_4593 = (state_4613[(7)]);
var state_4613__$1 = state_4613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4613__$1,(11),out,inst_4593);
} else {
if((state_val_4614 === (5))){
var inst_4607 = cljs.core.async.close_BANG_.call(null,out);
var state_4613__$1 = state_4613;
var statearr_4626_4644 = state_4613__$1;
(statearr_4626_4644[(2)] = inst_4607);

(statearr_4626_4644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4614 === (10))){
var inst_4605 = (state_4613[(2)]);
var state_4613__$1 = state_4613;
var statearr_4627_4645 = state_4613__$1;
(statearr_4627_4645[(2)] = inst_4605);

(statearr_4627_4645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4614 === (8))){
var inst_4593 = (state_4613[(7)]);
var inst_4583 = (state_4613[(10)]);
var inst_4594 = (state_4613[(9)]);
var inst_4592 = (state_4613[(8)]);
var inst_4597 = (function (){var cs = inst_4583;
var vec__4588 = inst_4592;
var v = inst_4593;
var c = inst_4594;
return (function (p1__4579_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4579_SHARP_);
});
})();
var inst_4598 = cljs.core.filterv.call(null,inst_4597,inst_4583);
var inst_4583__$1 = inst_4598;
var state_4613__$1 = (function (){var statearr_4628 = state_4613;
(statearr_4628[(10)] = inst_4583__$1);

return statearr_4628;
})();
var statearr_4629_4646 = state_4613__$1;
(statearr_4629_4646[(2)] = null);

(statearr_4629_4646[(1)] = (2));


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
var cljs$core$async$state_machine__3165__auto__ = null;
var cljs$core$async$state_machine__3165__auto____0 = (function (){
var statearr_4630 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4630[(0)] = cljs$core$async$state_machine__3165__auto__);

(statearr_4630[(1)] = (1));

return statearr_4630;
});
var cljs$core$async$state_machine__3165__auto____1 = (function (state_4613){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_4613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e4631){var ex__3168__auto__ = e4631;
var statearr_4632_4647 = state_4613;
(statearr_4632_4647[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_4613[(4)]))){
var statearr_4633_4648 = state_4613;
(statearr_4633_4648[(1)] = cljs.core.first.call(null,(state_4613[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4649 = state_4613;
state_4613 = G__4649;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$state_machine__3165__auto__ = function(state_4613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3165__auto____1.call(this,state_4613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3165__auto____0;
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3165__auto____1;
return cljs$core$async$state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_4634 = f__3239__auto__.call(null);
(statearr_4634[(6)] = c__3238__auto___4636);

return statearr_4634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__4651 = arguments.length;
switch (G__4651) {
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
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3238__auto___4697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_4675){
var state_val_4676 = (state_4675[(1)]);
if((state_val_4676 === (7))){
var inst_4657 = (state_4675[(7)]);
var inst_4657__$1 = (state_4675[(2)]);
var inst_4658 = (inst_4657__$1 == null);
var inst_4659 = cljs.core.not.call(null,inst_4658);
var state_4675__$1 = (function (){var statearr_4677 = state_4675;
(statearr_4677[(7)] = inst_4657__$1);

return statearr_4677;
})();
if(inst_4659){
var statearr_4678_4698 = state_4675__$1;
(statearr_4678_4698[(1)] = (8));

} else {
var statearr_4679_4699 = state_4675__$1;
(statearr_4679_4699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4676 === (1))){
var inst_4652 = (0);
var state_4675__$1 = (function (){var statearr_4680 = state_4675;
(statearr_4680[(8)] = inst_4652);

return statearr_4680;
})();
var statearr_4681_4700 = state_4675__$1;
(statearr_4681_4700[(2)] = null);

(statearr_4681_4700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4676 === (4))){
var state_4675__$1 = state_4675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4675__$1,(7),ch);
} else {
if((state_val_4676 === (6))){
var inst_4670 = (state_4675[(2)]);
var state_4675__$1 = state_4675;
var statearr_4682_4701 = state_4675__$1;
(statearr_4682_4701[(2)] = inst_4670);

(statearr_4682_4701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4676 === (3))){
var inst_4672 = (state_4675[(2)]);
var inst_4673 = cljs.core.async.close_BANG_.call(null,out);
var state_4675__$1 = (function (){var statearr_4683 = state_4675;
(statearr_4683[(9)] = inst_4672);

return statearr_4683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4675__$1,inst_4673);
} else {
if((state_val_4676 === (2))){
var inst_4652 = (state_4675[(8)]);
var inst_4654 = (inst_4652 < n);
var state_4675__$1 = state_4675;
if(cljs.core.truth_(inst_4654)){
var statearr_4684_4702 = state_4675__$1;
(statearr_4684_4702[(1)] = (4));

} else {
var statearr_4685_4703 = state_4675__$1;
(statearr_4685_4703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4676 === (11))){
var inst_4652 = (state_4675[(8)]);
var inst_4662 = (state_4675[(2)]);
var inst_4663 = (inst_4652 + (1));
var inst_4652__$1 = inst_4663;
var state_4675__$1 = (function (){var statearr_4686 = state_4675;
(statearr_4686[(10)] = inst_4662);

(statearr_4686[(8)] = inst_4652__$1);

return statearr_4686;
})();
var statearr_4687_4704 = state_4675__$1;
(statearr_4687_4704[(2)] = null);

(statearr_4687_4704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4676 === (9))){
var state_4675__$1 = state_4675;
var statearr_4688_4705 = state_4675__$1;
(statearr_4688_4705[(2)] = null);

(statearr_4688_4705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4676 === (5))){
var state_4675__$1 = state_4675;
var statearr_4689_4706 = state_4675__$1;
(statearr_4689_4706[(2)] = null);

(statearr_4689_4706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4676 === (10))){
var inst_4667 = (state_4675[(2)]);
var state_4675__$1 = state_4675;
var statearr_4690_4707 = state_4675__$1;
(statearr_4690_4707[(2)] = inst_4667);

(statearr_4690_4707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4676 === (8))){
var inst_4657 = (state_4675[(7)]);
var state_4675__$1 = state_4675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4675__$1,(11),out,inst_4657);
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
var cljs$core$async$state_machine__3165__auto__ = null;
var cljs$core$async$state_machine__3165__auto____0 = (function (){
var statearr_4691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4691[(0)] = cljs$core$async$state_machine__3165__auto__);

(statearr_4691[(1)] = (1));

return statearr_4691;
});
var cljs$core$async$state_machine__3165__auto____1 = (function (state_4675){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_4675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e4692){var ex__3168__auto__ = e4692;
var statearr_4693_4708 = state_4675;
(statearr_4693_4708[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_4675[(4)]))){
var statearr_4694_4709 = state_4675;
(statearr_4694_4709[(1)] = cljs.core.first.call(null,(state_4675[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4710 = state_4675;
state_4675 = G__4710;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$state_machine__3165__auto__ = function(state_4675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3165__auto____1.call(this,state_4675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3165__auto____0;
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3165__auto____1;
return cljs$core$async$state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_4695 = f__3239__auto__.call(null);
(statearr_4695[(6)] = c__3238__auto___4697);

return statearr_4695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4712 = (function (f,ch,meta4713){
this.f = f;
this.ch = ch;
this.meta4713 = meta4713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4714,meta4713__$1){
var self__ = this;
var _4714__$1 = this;
return (new cljs.core.async.t_cljs$core$async4712(self__.f,self__.ch,meta4713__$1));
}));

(cljs.core.async.t_cljs$core$async4712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4714){
var self__ = this;
var _4714__$1 = this;
return self__.meta4713;
}));

(cljs.core.async.t_cljs$core$async4712.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async4712.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async4712.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4715 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4715 = (function (f,ch,meta4713,_,fn1,meta4716){
this.f = f;
this.ch = ch;
this.meta4713 = meta4713;
this._ = _;
this.fn1 = fn1;
this.meta4716 = meta4716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4717,meta4716__$1){
var self__ = this;
var _4717__$1 = this;
return (new cljs.core.async.t_cljs$core$async4715(self__.f,self__.ch,self__.meta4713,self__._,self__.fn1,meta4716__$1));
}));

(cljs.core.async.t_cljs$core$async4715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4717){
var self__ = this;
var _4717__$1 = this;
return self__.meta4716;
}));

(cljs.core.async.t_cljs$core$async4715.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async4715.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async4715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__4711_SHARP_){
return f1.call(null,(((p1__4711_SHARP_ == null))?null:self__.f.call(null,p1__4711_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async4715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4713","meta4713",-1099274832,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async4712","cljs.core.async/t_cljs$core$async4712",1879491832,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta4716","meta4716",1826189042,null)], null);
}));

(cljs.core.async.t_cljs$core$async4715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4715");

(cljs.core.async.t_cljs$core$async4715.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async4715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4715.
 */
cljs.core.async.__GT_t_cljs$core$async4715 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4715(f__$1,ch__$1,meta4713__$1,___$2,fn1__$1,meta4716){
return (new cljs.core.async.t_cljs$core$async4715(f__$1,ch__$1,meta4713__$1,___$2,fn1__$1,meta4716));
});

}

return (new cljs.core.async.t_cljs$core$async4715(self__.f,self__.ch,self__.meta4713,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async4712.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async4712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4713","meta4713",-1099274832,null)], null);
}));

(cljs.core.async.t_cljs$core$async4712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4712");

(cljs.core.async.t_cljs$core$async4712.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async4712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4712.
 */
cljs.core.async.__GT_t_cljs$core$async4712 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4712(f__$1,ch__$1,meta4713){
return (new cljs.core.async.t_cljs$core$async4712(f__$1,ch__$1,meta4713));
});

}

return (new cljs.core.async.t_cljs$core$async4712(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4718 = (function (f,ch,meta4719){
this.f = f;
this.ch = ch;
this.meta4719 = meta4719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4720,meta4719__$1){
var self__ = this;
var _4720__$1 = this;
return (new cljs.core.async.t_cljs$core$async4718(self__.f,self__.ch,meta4719__$1));
}));

(cljs.core.async.t_cljs$core$async4718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4720){
var self__ = this;
var _4720__$1 = this;
return self__.meta4719;
}));

(cljs.core.async.t_cljs$core$async4718.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async4718.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async4718.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async4718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4719","meta4719",-1680881940,null)], null);
}));

(cljs.core.async.t_cljs$core$async4718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4718");

(cljs.core.async.t_cljs$core$async4718.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async4718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4718.
 */
cljs.core.async.__GT_t_cljs$core$async4718 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async4718(f__$1,ch__$1,meta4719){
return (new cljs.core.async.t_cljs$core$async4718(f__$1,ch__$1,meta4719));
});

}

return (new cljs.core.async.t_cljs$core$async4718(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4721 = (function (p,ch,meta4722){
this.p = p;
this.ch = ch;
this.meta4722 = meta4722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4723,meta4722__$1){
var self__ = this;
var _4723__$1 = this;
return (new cljs.core.async.t_cljs$core$async4721(self__.p,self__.ch,meta4722__$1));
}));

(cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4723){
var self__ = this;
var _4723__$1 = this;
return self__.meta4722;
}));

(cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async4721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4722","meta4722",-808170877,null)], null);
}));

(cljs.core.async.t_cljs$core$async4721.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4721");

(cljs.core.async.t_cljs$core$async4721.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async4721");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4721.
 */
cljs.core.async.__GT_t_cljs$core$async4721 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async4721(p__$1,ch__$1,meta4722){
return (new cljs.core.async.t_cljs$core$async4721(p__$1,ch__$1,meta4722));
});

}

return (new cljs.core.async.t_cljs$core$async4721(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__4725 = arguments.length;
switch (G__4725) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3238__auto___4766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_4746){
var state_val_4747 = (state_4746[(1)]);
if((state_val_4747 === (7))){
var inst_4742 = (state_4746[(2)]);
var state_4746__$1 = state_4746;
var statearr_4748_4767 = state_4746__$1;
(statearr_4748_4767[(2)] = inst_4742);

(statearr_4748_4767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4747 === (1))){
var state_4746__$1 = state_4746;
var statearr_4749_4768 = state_4746__$1;
(statearr_4749_4768[(2)] = null);

(statearr_4749_4768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4747 === (4))){
var inst_4728 = (state_4746[(7)]);
var inst_4728__$1 = (state_4746[(2)]);
var inst_4729 = (inst_4728__$1 == null);
var state_4746__$1 = (function (){var statearr_4750 = state_4746;
(statearr_4750[(7)] = inst_4728__$1);

return statearr_4750;
})();
if(cljs.core.truth_(inst_4729)){
var statearr_4751_4769 = state_4746__$1;
(statearr_4751_4769[(1)] = (5));

} else {
var statearr_4752_4770 = state_4746__$1;
(statearr_4752_4770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4747 === (6))){
var inst_4728 = (state_4746[(7)]);
var inst_4733 = p.call(null,inst_4728);
var state_4746__$1 = state_4746;
if(cljs.core.truth_(inst_4733)){
var statearr_4753_4771 = state_4746__$1;
(statearr_4753_4771[(1)] = (8));

} else {
var statearr_4754_4772 = state_4746__$1;
(statearr_4754_4772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4747 === (3))){
var inst_4744 = (state_4746[(2)]);
var state_4746__$1 = state_4746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4746__$1,inst_4744);
} else {
if((state_val_4747 === (2))){
var state_4746__$1 = state_4746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4746__$1,(4),ch);
} else {
if((state_val_4747 === (11))){
var inst_4736 = (state_4746[(2)]);
var state_4746__$1 = state_4746;
var statearr_4755_4773 = state_4746__$1;
(statearr_4755_4773[(2)] = inst_4736);

(statearr_4755_4773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4747 === (9))){
var state_4746__$1 = state_4746;
var statearr_4756_4774 = state_4746__$1;
(statearr_4756_4774[(2)] = null);

(statearr_4756_4774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4747 === (5))){
var inst_4731 = cljs.core.async.close_BANG_.call(null,out);
var state_4746__$1 = state_4746;
var statearr_4757_4775 = state_4746__$1;
(statearr_4757_4775[(2)] = inst_4731);

(statearr_4757_4775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4747 === (10))){
var inst_4739 = (state_4746[(2)]);
var state_4746__$1 = (function (){var statearr_4758 = state_4746;
(statearr_4758[(8)] = inst_4739);

return statearr_4758;
})();
var statearr_4759_4776 = state_4746__$1;
(statearr_4759_4776[(2)] = null);

(statearr_4759_4776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4747 === (8))){
var inst_4728 = (state_4746[(7)]);
var state_4746__$1 = state_4746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4746__$1,(11),out,inst_4728);
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
var cljs$core$async$state_machine__3165__auto__ = null;
var cljs$core$async$state_machine__3165__auto____0 = (function (){
var statearr_4760 = [null,null,null,null,null,null,null,null,null];
(statearr_4760[(0)] = cljs$core$async$state_machine__3165__auto__);

(statearr_4760[(1)] = (1));

return statearr_4760;
});
var cljs$core$async$state_machine__3165__auto____1 = (function (state_4746){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_4746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e4761){var ex__3168__auto__ = e4761;
var statearr_4762_4777 = state_4746;
(statearr_4762_4777[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_4746[(4)]))){
var statearr_4763_4778 = state_4746;
(statearr_4763_4778[(1)] = cljs.core.first.call(null,(state_4746[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4779 = state_4746;
state_4746 = G__4779;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$state_machine__3165__auto__ = function(state_4746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3165__auto____1.call(this,state_4746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3165__auto____0;
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3165__auto____1;
return cljs$core$async$state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_4764 = f__3239__auto__.call(null);
(statearr_4764[(6)] = c__3238__auto___4766);

return statearr_4764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__4781 = arguments.length;
switch (G__4781) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__3238__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_4844){
var state_val_4845 = (state_4844[(1)]);
if((state_val_4845 === (7))){
var inst_4840 = (state_4844[(2)]);
var state_4844__$1 = state_4844;
var statearr_4846_4885 = state_4844__$1;
(statearr_4846_4885[(2)] = inst_4840);

(statearr_4846_4885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (20))){
var inst_4810 = (state_4844[(7)]);
var inst_4821 = (state_4844[(2)]);
var inst_4822 = cljs.core.next.call(null,inst_4810);
var inst_4796 = inst_4822;
var inst_4797 = null;
var inst_4798 = (0);
var inst_4799 = (0);
var state_4844__$1 = (function (){var statearr_4847 = state_4844;
(statearr_4847[(8)] = inst_4798);

(statearr_4847[(9)] = inst_4796);

(statearr_4847[(10)] = inst_4821);

(statearr_4847[(11)] = inst_4797);

(statearr_4847[(12)] = inst_4799);

return statearr_4847;
})();
var statearr_4848_4886 = state_4844__$1;
(statearr_4848_4886[(2)] = null);

(statearr_4848_4886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (1))){
var state_4844__$1 = state_4844;
var statearr_4849_4887 = state_4844__$1;
(statearr_4849_4887[(2)] = null);

(statearr_4849_4887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (4))){
var inst_4785 = (state_4844[(13)]);
var inst_4785__$1 = (state_4844[(2)]);
var inst_4786 = (inst_4785__$1 == null);
var state_4844__$1 = (function (){var statearr_4850 = state_4844;
(statearr_4850[(13)] = inst_4785__$1);

return statearr_4850;
})();
if(cljs.core.truth_(inst_4786)){
var statearr_4851_4888 = state_4844__$1;
(statearr_4851_4888[(1)] = (5));

} else {
var statearr_4852_4889 = state_4844__$1;
(statearr_4852_4889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (15))){
var state_4844__$1 = state_4844;
var statearr_4856_4890 = state_4844__$1;
(statearr_4856_4890[(2)] = null);

(statearr_4856_4890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (21))){
var state_4844__$1 = state_4844;
var statearr_4857_4891 = state_4844__$1;
(statearr_4857_4891[(2)] = null);

(statearr_4857_4891[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (13))){
var inst_4798 = (state_4844[(8)]);
var inst_4796 = (state_4844[(9)]);
var inst_4797 = (state_4844[(11)]);
var inst_4799 = (state_4844[(12)]);
var inst_4806 = (state_4844[(2)]);
var inst_4807 = (inst_4799 + (1));
var tmp4853 = inst_4798;
var tmp4854 = inst_4796;
var tmp4855 = inst_4797;
var inst_4796__$1 = tmp4854;
var inst_4797__$1 = tmp4855;
var inst_4798__$1 = tmp4853;
var inst_4799__$1 = inst_4807;
var state_4844__$1 = (function (){var statearr_4858 = state_4844;
(statearr_4858[(8)] = inst_4798__$1);

(statearr_4858[(9)] = inst_4796__$1);

(statearr_4858[(14)] = inst_4806);

(statearr_4858[(11)] = inst_4797__$1);

(statearr_4858[(12)] = inst_4799__$1);

return statearr_4858;
})();
var statearr_4859_4892 = state_4844__$1;
(statearr_4859_4892[(2)] = null);

(statearr_4859_4892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (22))){
var state_4844__$1 = state_4844;
var statearr_4860_4893 = state_4844__$1;
(statearr_4860_4893[(2)] = null);

(statearr_4860_4893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (6))){
var inst_4785 = (state_4844[(13)]);
var inst_4794 = f.call(null,inst_4785);
var inst_4795 = cljs.core.seq.call(null,inst_4794);
var inst_4796 = inst_4795;
var inst_4797 = null;
var inst_4798 = (0);
var inst_4799 = (0);
var state_4844__$1 = (function (){var statearr_4861 = state_4844;
(statearr_4861[(8)] = inst_4798);

(statearr_4861[(9)] = inst_4796);

(statearr_4861[(11)] = inst_4797);

(statearr_4861[(12)] = inst_4799);

return statearr_4861;
})();
var statearr_4862_4894 = state_4844__$1;
(statearr_4862_4894[(2)] = null);

(statearr_4862_4894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (17))){
var inst_4810 = (state_4844[(7)]);
var inst_4814 = cljs.core.chunk_first.call(null,inst_4810);
var inst_4815 = cljs.core.chunk_rest.call(null,inst_4810);
var inst_4816 = cljs.core.count.call(null,inst_4814);
var inst_4796 = inst_4815;
var inst_4797 = inst_4814;
var inst_4798 = inst_4816;
var inst_4799 = (0);
var state_4844__$1 = (function (){var statearr_4863 = state_4844;
(statearr_4863[(8)] = inst_4798);

(statearr_4863[(9)] = inst_4796);

(statearr_4863[(11)] = inst_4797);

(statearr_4863[(12)] = inst_4799);

return statearr_4863;
})();
var statearr_4864_4895 = state_4844__$1;
(statearr_4864_4895[(2)] = null);

(statearr_4864_4895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (3))){
var inst_4842 = (state_4844[(2)]);
var state_4844__$1 = state_4844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4844__$1,inst_4842);
} else {
if((state_val_4845 === (12))){
var inst_4830 = (state_4844[(2)]);
var state_4844__$1 = state_4844;
var statearr_4865_4896 = state_4844__$1;
(statearr_4865_4896[(2)] = inst_4830);

(statearr_4865_4896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (2))){
var state_4844__$1 = state_4844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4844__$1,(4),in$);
} else {
if((state_val_4845 === (23))){
var inst_4838 = (state_4844[(2)]);
var state_4844__$1 = state_4844;
var statearr_4866_4897 = state_4844__$1;
(statearr_4866_4897[(2)] = inst_4838);

(statearr_4866_4897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (19))){
var inst_4825 = (state_4844[(2)]);
var state_4844__$1 = state_4844;
var statearr_4867_4898 = state_4844__$1;
(statearr_4867_4898[(2)] = inst_4825);

(statearr_4867_4898[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (11))){
var inst_4810 = (state_4844[(7)]);
var inst_4796 = (state_4844[(9)]);
var inst_4810__$1 = cljs.core.seq.call(null,inst_4796);
var state_4844__$1 = (function (){var statearr_4868 = state_4844;
(statearr_4868[(7)] = inst_4810__$1);

return statearr_4868;
})();
if(inst_4810__$1){
var statearr_4869_4899 = state_4844__$1;
(statearr_4869_4899[(1)] = (14));

} else {
var statearr_4870_4900 = state_4844__$1;
(statearr_4870_4900[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (9))){
var inst_4832 = (state_4844[(2)]);
var inst_4833 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_4844__$1 = (function (){var statearr_4871 = state_4844;
(statearr_4871[(15)] = inst_4832);

return statearr_4871;
})();
if(cljs.core.truth_(inst_4833)){
var statearr_4872_4901 = state_4844__$1;
(statearr_4872_4901[(1)] = (21));

} else {
var statearr_4873_4902 = state_4844__$1;
(statearr_4873_4902[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (5))){
var inst_4788 = cljs.core.async.close_BANG_.call(null,out);
var state_4844__$1 = state_4844;
var statearr_4874_4903 = state_4844__$1;
(statearr_4874_4903[(2)] = inst_4788);

(statearr_4874_4903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (14))){
var inst_4810 = (state_4844[(7)]);
var inst_4812 = cljs.core.chunked_seq_QMARK_.call(null,inst_4810);
var state_4844__$1 = state_4844;
if(inst_4812){
var statearr_4875_4904 = state_4844__$1;
(statearr_4875_4904[(1)] = (17));

} else {
var statearr_4876_4905 = state_4844__$1;
(statearr_4876_4905[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (16))){
var inst_4828 = (state_4844[(2)]);
var state_4844__$1 = state_4844;
var statearr_4877_4906 = state_4844__$1;
(statearr_4877_4906[(2)] = inst_4828);

(statearr_4877_4906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4845 === (10))){
var inst_4797 = (state_4844[(11)]);
var inst_4799 = (state_4844[(12)]);
var inst_4804 = cljs.core._nth.call(null,inst_4797,inst_4799);
var state_4844__$1 = state_4844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4844__$1,(13),out,inst_4804);
} else {
if((state_val_4845 === (18))){
var inst_4810 = (state_4844[(7)]);
var inst_4819 = cljs.core.first.call(null,inst_4810);
var state_4844__$1 = state_4844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4844__$1,(20),out,inst_4819);
} else {
if((state_val_4845 === (8))){
var inst_4798 = (state_4844[(8)]);
var inst_4799 = (state_4844[(12)]);
var inst_4801 = (inst_4799 < inst_4798);
var inst_4802 = inst_4801;
var state_4844__$1 = state_4844;
if(cljs.core.truth_(inst_4802)){
var statearr_4878_4907 = state_4844__$1;
(statearr_4878_4907[(1)] = (10));

} else {
var statearr_4879_4908 = state_4844__$1;
(statearr_4879_4908[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__3165__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3165__auto____0 = (function (){
var statearr_4880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4880[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3165__auto__);

(statearr_4880[(1)] = (1));

return statearr_4880;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3165__auto____1 = (function (state_4844){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_4844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e4881){var ex__3168__auto__ = e4881;
var statearr_4882_4909 = state_4844;
(statearr_4882_4909[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_4844[(4)]))){
var statearr_4883_4910 = state_4844;
(statearr_4883_4910[(1)] = cljs.core.first.call(null,(state_4844[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4911 = state_4844;
state_4844 = G__4911;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3165__auto__ = function(state_4844){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3165__auto____1.call(this,state_4844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3165__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3165__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_4884 = f__3239__auto__.call(null);
(statearr_4884[(6)] = c__3238__auto__);

return statearr_4884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));

return c__3238__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__4913 = arguments.length;
switch (G__4913) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__4916 = arguments.length;
switch (G__4916) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__4919 = arguments.length;
switch (G__4919) {
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
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3238__auto___4967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_4943){
var state_val_4944 = (state_4943[(1)]);
if((state_val_4944 === (7))){
var inst_4938 = (state_4943[(2)]);
var state_4943__$1 = state_4943;
var statearr_4945_4968 = state_4943__$1;
(statearr_4945_4968[(2)] = inst_4938);

(statearr_4945_4968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4944 === (1))){
var inst_4920 = null;
var state_4943__$1 = (function (){var statearr_4946 = state_4943;
(statearr_4946[(7)] = inst_4920);

return statearr_4946;
})();
var statearr_4947_4969 = state_4943__$1;
(statearr_4947_4969[(2)] = null);

(statearr_4947_4969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4944 === (4))){
var inst_4923 = (state_4943[(8)]);
var inst_4923__$1 = (state_4943[(2)]);
var inst_4924 = (inst_4923__$1 == null);
var inst_4925 = cljs.core.not.call(null,inst_4924);
var state_4943__$1 = (function (){var statearr_4948 = state_4943;
(statearr_4948[(8)] = inst_4923__$1);

return statearr_4948;
})();
if(inst_4925){
var statearr_4949_4970 = state_4943__$1;
(statearr_4949_4970[(1)] = (5));

} else {
var statearr_4950_4971 = state_4943__$1;
(statearr_4950_4971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4944 === (6))){
var state_4943__$1 = state_4943;
var statearr_4951_4972 = state_4943__$1;
(statearr_4951_4972[(2)] = null);

(statearr_4951_4972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4944 === (3))){
var inst_4940 = (state_4943[(2)]);
var inst_4941 = cljs.core.async.close_BANG_.call(null,out);
var state_4943__$1 = (function (){var statearr_4952 = state_4943;
(statearr_4952[(9)] = inst_4940);

return statearr_4952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4943__$1,inst_4941);
} else {
if((state_val_4944 === (2))){
var state_4943__$1 = state_4943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4943__$1,(4),ch);
} else {
if((state_val_4944 === (11))){
var inst_4923 = (state_4943[(8)]);
var inst_4932 = (state_4943[(2)]);
var inst_4920 = inst_4923;
var state_4943__$1 = (function (){var statearr_4953 = state_4943;
(statearr_4953[(10)] = inst_4932);

(statearr_4953[(7)] = inst_4920);

return statearr_4953;
})();
var statearr_4954_4973 = state_4943__$1;
(statearr_4954_4973[(2)] = null);

(statearr_4954_4973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4944 === (9))){
var inst_4923 = (state_4943[(8)]);
var state_4943__$1 = state_4943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4943__$1,(11),out,inst_4923);
} else {
if((state_val_4944 === (5))){
var inst_4923 = (state_4943[(8)]);
var inst_4920 = (state_4943[(7)]);
var inst_4927 = cljs.core._EQ_.call(null,inst_4923,inst_4920);
var state_4943__$1 = state_4943;
if(inst_4927){
var statearr_4956_4974 = state_4943__$1;
(statearr_4956_4974[(1)] = (8));

} else {
var statearr_4957_4975 = state_4943__$1;
(statearr_4957_4975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4944 === (10))){
var inst_4935 = (state_4943[(2)]);
var state_4943__$1 = state_4943;
var statearr_4958_4976 = state_4943__$1;
(statearr_4958_4976[(2)] = inst_4935);

(statearr_4958_4976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4944 === (8))){
var inst_4920 = (state_4943[(7)]);
var tmp4955 = inst_4920;
var inst_4920__$1 = tmp4955;
var state_4943__$1 = (function (){var statearr_4959 = state_4943;
(statearr_4959[(7)] = inst_4920__$1);

return statearr_4959;
})();
var statearr_4960_4977 = state_4943__$1;
(statearr_4960_4977[(2)] = null);

(statearr_4960_4977[(1)] = (2));


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
var cljs$core$async$state_machine__3165__auto__ = null;
var cljs$core$async$state_machine__3165__auto____0 = (function (){
var statearr_4961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4961[(0)] = cljs$core$async$state_machine__3165__auto__);

(statearr_4961[(1)] = (1));

return statearr_4961;
});
var cljs$core$async$state_machine__3165__auto____1 = (function (state_4943){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_4943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e4962){var ex__3168__auto__ = e4962;
var statearr_4963_4978 = state_4943;
(statearr_4963_4978[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_4943[(4)]))){
var statearr_4964_4979 = state_4943;
(statearr_4964_4979[(1)] = cljs.core.first.call(null,(state_4943[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4980 = state_4943;
state_4943 = G__4980;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$state_machine__3165__auto__ = function(state_4943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3165__auto____1.call(this,state_4943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3165__auto____0;
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3165__auto____1;
return cljs$core$async$state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_4965 = f__3239__auto__.call(null);
(statearr_4965[(6)] = c__3238__auto___4967);

return statearr_4965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__4982 = arguments.length;
switch (G__4982) {
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
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3238__auto___5049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_5020){
var state_val_5021 = (state_5020[(1)]);
if((state_val_5021 === (7))){
var inst_5016 = (state_5020[(2)]);
var state_5020__$1 = state_5020;
var statearr_5022_5050 = state_5020__$1;
(statearr_5022_5050[(2)] = inst_5016);

(statearr_5022_5050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (1))){
var inst_4983 = (new Array(n));
var inst_4984 = inst_4983;
var inst_4985 = (0);
var state_5020__$1 = (function (){var statearr_5023 = state_5020;
(statearr_5023[(7)] = inst_4984);

(statearr_5023[(8)] = inst_4985);

return statearr_5023;
})();
var statearr_5024_5051 = state_5020__$1;
(statearr_5024_5051[(2)] = null);

(statearr_5024_5051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (4))){
var inst_4988 = (state_5020[(9)]);
var inst_4988__$1 = (state_5020[(2)]);
var inst_4989 = (inst_4988__$1 == null);
var inst_4990 = cljs.core.not.call(null,inst_4989);
var state_5020__$1 = (function (){var statearr_5025 = state_5020;
(statearr_5025[(9)] = inst_4988__$1);

return statearr_5025;
})();
if(inst_4990){
var statearr_5026_5052 = state_5020__$1;
(statearr_5026_5052[(1)] = (5));

} else {
var statearr_5027_5053 = state_5020__$1;
(statearr_5027_5053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (15))){
var inst_5010 = (state_5020[(2)]);
var state_5020__$1 = state_5020;
var statearr_5028_5054 = state_5020__$1;
(statearr_5028_5054[(2)] = inst_5010);

(statearr_5028_5054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (13))){
var state_5020__$1 = state_5020;
var statearr_5029_5055 = state_5020__$1;
(statearr_5029_5055[(2)] = null);

(statearr_5029_5055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (6))){
var inst_4985 = (state_5020[(8)]);
var inst_5006 = (inst_4985 > (0));
var state_5020__$1 = state_5020;
if(cljs.core.truth_(inst_5006)){
var statearr_5030_5056 = state_5020__$1;
(statearr_5030_5056[(1)] = (12));

} else {
var statearr_5031_5057 = state_5020__$1;
(statearr_5031_5057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (3))){
var inst_5018 = (state_5020[(2)]);
var state_5020__$1 = state_5020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5020__$1,inst_5018);
} else {
if((state_val_5021 === (12))){
var inst_4984 = (state_5020[(7)]);
var inst_5008 = cljs.core.vec.call(null,inst_4984);
var state_5020__$1 = state_5020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5020__$1,(15),out,inst_5008);
} else {
if((state_val_5021 === (2))){
var state_5020__$1 = state_5020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5020__$1,(4),ch);
} else {
if((state_val_5021 === (11))){
var inst_5000 = (state_5020[(2)]);
var inst_5001 = (new Array(n));
var inst_4984 = inst_5001;
var inst_4985 = (0);
var state_5020__$1 = (function (){var statearr_5032 = state_5020;
(statearr_5032[(10)] = inst_5000);

(statearr_5032[(7)] = inst_4984);

(statearr_5032[(8)] = inst_4985);

return statearr_5032;
})();
var statearr_5033_5058 = state_5020__$1;
(statearr_5033_5058[(2)] = null);

(statearr_5033_5058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (9))){
var inst_4984 = (state_5020[(7)]);
var inst_4998 = cljs.core.vec.call(null,inst_4984);
var state_5020__$1 = state_5020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5020__$1,(11),out,inst_4998);
} else {
if((state_val_5021 === (5))){
var inst_4988 = (state_5020[(9)]);
var inst_4984 = (state_5020[(7)]);
var inst_4985 = (state_5020[(8)]);
var inst_4993 = (state_5020[(11)]);
var inst_4992 = (inst_4984[inst_4985] = inst_4988);
var inst_4993__$1 = (inst_4985 + (1));
var inst_4994 = (inst_4993__$1 < n);
var state_5020__$1 = (function (){var statearr_5034 = state_5020;
(statearr_5034[(12)] = inst_4992);

(statearr_5034[(11)] = inst_4993__$1);

return statearr_5034;
})();
if(cljs.core.truth_(inst_4994)){
var statearr_5035_5059 = state_5020__$1;
(statearr_5035_5059[(1)] = (8));

} else {
var statearr_5036_5060 = state_5020__$1;
(statearr_5036_5060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (14))){
var inst_5013 = (state_5020[(2)]);
var inst_5014 = cljs.core.async.close_BANG_.call(null,out);
var state_5020__$1 = (function (){var statearr_5038 = state_5020;
(statearr_5038[(13)] = inst_5013);

return statearr_5038;
})();
var statearr_5039_5061 = state_5020__$1;
(statearr_5039_5061[(2)] = inst_5014);

(statearr_5039_5061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (10))){
var inst_5004 = (state_5020[(2)]);
var state_5020__$1 = state_5020;
var statearr_5040_5062 = state_5020__$1;
(statearr_5040_5062[(2)] = inst_5004);

(statearr_5040_5062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5021 === (8))){
var inst_4984 = (state_5020[(7)]);
var inst_4993 = (state_5020[(11)]);
var tmp5037 = inst_4984;
var inst_4984__$1 = tmp5037;
var inst_4985 = inst_4993;
var state_5020__$1 = (function (){var statearr_5041 = state_5020;
(statearr_5041[(7)] = inst_4984__$1);

(statearr_5041[(8)] = inst_4985);

return statearr_5041;
})();
var statearr_5042_5063 = state_5020__$1;
(statearr_5042_5063[(2)] = null);

(statearr_5042_5063[(1)] = (2));


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
var cljs$core$async$state_machine__3165__auto__ = null;
var cljs$core$async$state_machine__3165__auto____0 = (function (){
var statearr_5043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5043[(0)] = cljs$core$async$state_machine__3165__auto__);

(statearr_5043[(1)] = (1));

return statearr_5043;
});
var cljs$core$async$state_machine__3165__auto____1 = (function (state_5020){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_5020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e5044){var ex__3168__auto__ = e5044;
var statearr_5045_5064 = state_5020;
(statearr_5045_5064[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_5020[(4)]))){
var statearr_5046_5065 = state_5020;
(statearr_5046_5065[(1)] = cljs.core.first.call(null,(state_5020[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5066 = state_5020;
state_5020 = G__5066;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$state_machine__3165__auto__ = function(state_5020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3165__auto____1.call(this,state_5020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3165__auto____0;
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3165__auto____1;
return cljs$core$async$state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_5047 = f__3239__auto__.call(null);
(statearr_5047[(6)] = c__3238__auto___5049);

return statearr_5047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__5068 = arguments.length;
switch (G__5068) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3238__auto___5146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__3239__auto__ = (function (){var switch__3164__auto__ = (function (state_5113){
var state_val_5114 = (state_5113[(1)]);
if((state_val_5114 === (7))){
var inst_5109 = (state_5113[(2)]);
var state_5113__$1 = state_5113;
var statearr_5115_5147 = state_5113__$1;
(statearr_5115_5147[(2)] = inst_5109);

(statearr_5115_5147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (1))){
var inst_5069 = [];
var inst_5070 = inst_5069;
var inst_5071 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5113__$1 = (function (){var statearr_5116 = state_5113;
(statearr_5116[(7)] = inst_5071);

(statearr_5116[(8)] = inst_5070);

return statearr_5116;
})();
var statearr_5117_5148 = state_5113__$1;
(statearr_5117_5148[(2)] = null);

(statearr_5117_5148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (4))){
var inst_5074 = (state_5113[(9)]);
var inst_5074__$1 = (state_5113[(2)]);
var inst_5075 = (inst_5074__$1 == null);
var inst_5076 = cljs.core.not.call(null,inst_5075);
var state_5113__$1 = (function (){var statearr_5118 = state_5113;
(statearr_5118[(9)] = inst_5074__$1);

return statearr_5118;
})();
if(inst_5076){
var statearr_5119_5149 = state_5113__$1;
(statearr_5119_5149[(1)] = (5));

} else {
var statearr_5120_5150 = state_5113__$1;
(statearr_5120_5150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (15))){
var inst_5070 = (state_5113[(8)]);
var inst_5101 = cljs.core.vec.call(null,inst_5070);
var state_5113__$1 = state_5113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5113__$1,(18),out,inst_5101);
} else {
if((state_val_5114 === (13))){
var inst_5096 = (state_5113[(2)]);
var state_5113__$1 = state_5113;
var statearr_5121_5151 = state_5113__$1;
(statearr_5121_5151[(2)] = inst_5096);

(statearr_5121_5151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (6))){
var inst_5070 = (state_5113[(8)]);
var inst_5098 = inst_5070.length;
var inst_5099 = (inst_5098 > (0));
var state_5113__$1 = state_5113;
if(cljs.core.truth_(inst_5099)){
var statearr_5122_5152 = state_5113__$1;
(statearr_5122_5152[(1)] = (15));

} else {
var statearr_5123_5153 = state_5113__$1;
(statearr_5123_5153[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (17))){
var inst_5106 = (state_5113[(2)]);
var inst_5107 = cljs.core.async.close_BANG_.call(null,out);
var state_5113__$1 = (function (){var statearr_5124 = state_5113;
(statearr_5124[(10)] = inst_5106);

return statearr_5124;
})();
var statearr_5125_5154 = state_5113__$1;
(statearr_5125_5154[(2)] = inst_5107);

(statearr_5125_5154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (3))){
var inst_5111 = (state_5113[(2)]);
var state_5113__$1 = state_5113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5113__$1,inst_5111);
} else {
if((state_val_5114 === (12))){
var inst_5070 = (state_5113[(8)]);
var inst_5089 = cljs.core.vec.call(null,inst_5070);
var state_5113__$1 = state_5113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5113__$1,(14),out,inst_5089);
} else {
if((state_val_5114 === (2))){
var state_5113__$1 = state_5113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5113__$1,(4),ch);
} else {
if((state_val_5114 === (11))){
var inst_5074 = (state_5113[(9)]);
var inst_5078 = (state_5113[(11)]);
var inst_5070 = (state_5113[(8)]);
var inst_5086 = inst_5070.push(inst_5074);
var tmp5126 = inst_5070;
var inst_5070__$1 = tmp5126;
var inst_5071 = inst_5078;
var state_5113__$1 = (function (){var statearr_5127 = state_5113;
(statearr_5127[(12)] = inst_5086);

(statearr_5127[(7)] = inst_5071);

(statearr_5127[(8)] = inst_5070__$1);

return statearr_5127;
})();
var statearr_5128_5155 = state_5113__$1;
(statearr_5128_5155[(2)] = null);

(statearr_5128_5155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (9))){
var inst_5071 = (state_5113[(7)]);
var inst_5082 = cljs.core.keyword_identical_QMARK_.call(null,inst_5071,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_5113__$1 = state_5113;
var statearr_5129_5156 = state_5113__$1;
(statearr_5129_5156[(2)] = inst_5082);

(statearr_5129_5156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (5))){
var inst_5074 = (state_5113[(9)]);
var inst_5071 = (state_5113[(7)]);
var inst_5079 = (state_5113[(13)]);
var inst_5078 = (state_5113[(11)]);
var inst_5078__$1 = f.call(null,inst_5074);
var inst_5079__$1 = cljs.core._EQ_.call(null,inst_5078__$1,inst_5071);
var state_5113__$1 = (function (){var statearr_5130 = state_5113;
(statearr_5130[(13)] = inst_5079__$1);

(statearr_5130[(11)] = inst_5078__$1);

return statearr_5130;
})();
if(inst_5079__$1){
var statearr_5131_5157 = state_5113__$1;
(statearr_5131_5157[(1)] = (8));

} else {
var statearr_5132_5158 = state_5113__$1;
(statearr_5132_5158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (14))){
var inst_5074 = (state_5113[(9)]);
var inst_5078 = (state_5113[(11)]);
var inst_5091 = (state_5113[(2)]);
var inst_5092 = [];
var inst_5093 = inst_5092.push(inst_5074);
var inst_5070 = inst_5092;
var inst_5071 = inst_5078;
var state_5113__$1 = (function (){var statearr_5133 = state_5113;
(statearr_5133[(7)] = inst_5071);

(statearr_5133[(8)] = inst_5070);

(statearr_5133[(14)] = inst_5093);

(statearr_5133[(15)] = inst_5091);

return statearr_5133;
})();
var statearr_5134_5159 = state_5113__$1;
(statearr_5134_5159[(2)] = null);

(statearr_5134_5159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (16))){
var state_5113__$1 = state_5113;
var statearr_5135_5160 = state_5113__$1;
(statearr_5135_5160[(2)] = null);

(statearr_5135_5160[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (10))){
var inst_5084 = (state_5113[(2)]);
var state_5113__$1 = state_5113;
if(cljs.core.truth_(inst_5084)){
var statearr_5136_5161 = state_5113__$1;
(statearr_5136_5161[(1)] = (11));

} else {
var statearr_5137_5162 = state_5113__$1;
(statearr_5137_5162[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (18))){
var inst_5103 = (state_5113[(2)]);
var state_5113__$1 = state_5113;
var statearr_5138_5163 = state_5113__$1;
(statearr_5138_5163[(2)] = inst_5103);

(statearr_5138_5163[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5114 === (8))){
var inst_5079 = (state_5113[(13)]);
var state_5113__$1 = state_5113;
var statearr_5139_5164 = state_5113__$1;
(statearr_5139_5164[(2)] = inst_5079);

(statearr_5139_5164[(1)] = (10));


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
var cljs$core$async$state_machine__3165__auto__ = null;
var cljs$core$async$state_machine__3165__auto____0 = (function (){
var statearr_5140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5140[(0)] = cljs$core$async$state_machine__3165__auto__);

(statearr_5140[(1)] = (1));

return statearr_5140;
});
var cljs$core$async$state_machine__3165__auto____1 = (function (state_5113){
while(true){
var ret_value__3166__auto__ = (function (){try{while(true){
var result__3167__auto__ = switch__3164__auto__.call(null,state_5113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3167__auto__;
}
break;
}
}catch (e5141){var ex__3168__auto__ = e5141;
var statearr_5142_5165 = state_5113;
(statearr_5142_5165[(2)] = ex__3168__auto__);


if(cljs.core.seq.call(null,(state_5113[(4)]))){
var statearr_5143_5166 = state_5113;
(statearr_5143_5166[(1)] = cljs.core.first.call(null,(state_5113[(4)])));

} else {
throw ex__3168__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5167 = state_5113;
state_5113 = G__5167;
continue;
} else {
return ret_value__3166__auto__;
}
break;
}
});
cljs$core$async$state_machine__3165__auto__ = function(state_5113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3165__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3165__auto____1.call(this,state_5113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3165__auto____0;
cljs$core$async$state_machine__3165__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3165__auto____1;
return cljs$core$async$state_machine__3165__auto__;
})()
})();
var state__3240__auto__ = (function (){var statearr_5144 = f__3239__auto__.call(null);
(statearr_5144[(6)] = c__3238__auto___5146);

return statearr_5144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3240__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
