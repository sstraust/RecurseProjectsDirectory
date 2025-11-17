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
cljs.core.async.t_cljs$core$async30883 = (function (f,blockable,meta30884){
this.f = f;
this.blockable = blockable;
this.meta30884 = meta30884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30885,meta30884__$1){
var self__ = this;
var _30885__$1 = this;
return (new cljs.core.async.t_cljs$core$async30883(self__.f,self__.blockable,meta30884__$1));
}));

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30885){
var self__ = this;
var _30885__$1 = this;
return self__.meta30884;
}));

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30884","meta30884",2137535335,null)], null);
}));

(cljs.core.async.t_cljs$core$async30883.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30883");

(cljs.core.async.t_cljs$core$async30883.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async30883");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30883.
 */
cljs.core.async.__GT_t_cljs$core$async30883 = (function cljs$core$async$__GT_t_cljs$core$async30883(f,blockable,meta30884){
return (new cljs.core.async.t_cljs$core$async30883(f,blockable,meta30884));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30877 = arguments.length;
switch (G__30877) {
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
return (new cljs.core.async.t_cljs$core$async30883(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30904 = arguments.length;
switch (G__30904) {
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
var G__30908 = arguments.length;
switch (G__30908) {
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
var G__30913 = arguments.length;
switch (G__30913) {
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
var val_33632 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33632) : fn1.call(null, val_33632));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33632) : fn1.call(null, val_33632));
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
var G__30927 = arguments.length;
switch (G__30927) {
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
var n__5633__auto___33634 = n;
var x_33635 = (0);
while(true){
if((x_33635 < n__5633__auto___33634)){
(a[x_33635] = x_33635);

var G__33636 = (x_33635 + (1));
x_33635 = G__33636;
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
cljs.core.async.t_cljs$core$async30941 = (function (flag,meta30942){
this.flag = flag;
this.meta30942 = meta30942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30943,meta30942__$1){
var self__ = this;
var _30943__$1 = this;
return (new cljs.core.async.t_cljs$core$async30941(self__.flag,meta30942__$1));
}));

(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30943){
var self__ = this;
var _30943__$1 = this;
return self__.meta30942;
}));

(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30942","meta30942",348540256,null)], null);
}));

(cljs.core.async.t_cljs$core$async30941.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30941");

(cljs.core.async.t_cljs$core$async30941.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async30941");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30941.
 */
cljs.core.async.__GT_t_cljs$core$async30941 = (function cljs$core$async$__GT_t_cljs$core$async30941(flag,meta30942){
return (new cljs.core.async.t_cljs$core$async30941(flag,meta30942));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async30941(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30960 = (function (flag,cb,meta30961){
this.flag = flag;
this.cb = cb;
this.meta30961 = meta30961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30962,meta30961__$1){
var self__ = this;
var _30962__$1 = this;
return (new cljs.core.async.t_cljs$core$async30960(self__.flag,self__.cb,meta30961__$1));
}));

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30962){
var self__ = this;
var _30962__$1 = this;
return self__.meta30961;
}));

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30961","meta30961",17438845,null)], null);
}));

(cljs.core.async.t_cljs$core$async30960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30960");

(cljs.core.async.t_cljs$core$async30960.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async30960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30960.
 */
cljs.core.async.__GT_t_cljs$core$async30960 = (function cljs$core$async$__GT_t_cljs$core$async30960(flag,cb,meta30961){
return (new cljs.core.async.t_cljs$core$async30960(flag,cb,meta30961));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async30960(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30969_SHARP_){
var G__30980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30969_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30980) : fret.call(null, G__30980));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30970_SHARP_){
var G__30981 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30970_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30981) : fret.call(null, G__30981));
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
var G__33655 = (i + (1));
i = G__33655;
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
var len__5766__auto___33657 = arguments.length;
var i__5767__auto___33658 = (0);
while(true){
if((i__5767__auto___33658 < len__5766__auto___33657)){
args__5772__auto__.push((arguments[i__5767__auto___33658]));

var G__33659 = (i__5767__auto___33658 + (1));
i__5767__auto___33658 = G__33659;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30990){
var map__30991 = p__30990;
var map__30991__$1 = cljs.core.__destructure_map(map__30991);
var opts = map__30991__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30982){
var G__30984 = cljs.core.first(seq30982);
var seq30982__$1 = cljs.core.next(seq30982);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30984,seq30982__$1);
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
var G__30993 = arguments.length;
switch (G__30993) {
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
var c__30817__auto___33670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_31036){
var state_val_31058 = (state_31036[(1)]);
if((state_val_31058 === (7))){
var inst_31024 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
var statearr_31179_33671 = state_31036__$1;
(statearr_31179_33671[(2)] = inst_31024);

(statearr_31179_33671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (1))){
var state_31036__$1 = state_31036;
var statearr_31180_33672 = state_31036__$1;
(statearr_31180_33672[(2)] = null);

(statearr_31180_33672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (4))){
var inst_31007 = (state_31036[(7)]);
var inst_31007__$1 = (state_31036[(2)]);
var inst_31008 = (inst_31007__$1 == null);
var state_31036__$1 = (function (){var statearr_31181 = state_31036;
(statearr_31181[(7)] = inst_31007__$1);

return statearr_31181;
})();
if(cljs.core.truth_(inst_31008)){
var statearr_31182_33675 = state_31036__$1;
(statearr_31182_33675[(1)] = (5));

} else {
var statearr_31183_33676 = state_31036__$1;
(statearr_31183_33676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (13))){
var state_31036__$1 = state_31036;
var statearr_31184_33677 = state_31036__$1;
(statearr_31184_33677[(2)] = null);

(statearr_31184_33677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (6))){
var inst_31007 = (state_31036[(7)]);
var state_31036__$1 = state_31036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31036__$1,(11),to,inst_31007);
} else {
if((state_val_31058 === (3))){
var inst_31026 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31036__$1,inst_31026);
} else {
if((state_val_31058 === (12))){
var state_31036__$1 = state_31036;
var statearr_31185_33678 = state_31036__$1;
(statearr_31185_33678[(2)] = null);

(statearr_31185_33678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (2))){
var state_31036__$1 = state_31036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31036__$1,(4),from);
} else {
if((state_val_31058 === (11))){
var inst_31017 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
if(cljs.core.truth_(inst_31017)){
var statearr_31186_33679 = state_31036__$1;
(statearr_31186_33679[(1)] = (12));

} else {
var statearr_31187_33680 = state_31036__$1;
(statearr_31187_33680[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (9))){
var state_31036__$1 = state_31036;
var statearr_31188_33681 = state_31036__$1;
(statearr_31188_33681[(2)] = null);

(statearr_31188_33681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (5))){
var state_31036__$1 = state_31036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31189_33682 = state_31036__$1;
(statearr_31189_33682[(1)] = (8));

} else {
var statearr_31190_33683 = state_31036__$1;
(statearr_31190_33683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (14))){
var inst_31022 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
var statearr_31191_33684 = state_31036__$1;
(statearr_31191_33684[(2)] = inst_31022);

(statearr_31191_33684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (10))){
var inst_31014 = (state_31036[(2)]);
var state_31036__$1 = state_31036;
var statearr_31192_33686 = state_31036__$1;
(statearr_31192_33686[(2)] = inst_31014);

(statearr_31192_33686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (8))){
var inst_31011 = cljs.core.async.close_BANG_(to);
var state_31036__$1 = state_31036;
var statearr_31193_33687 = state_31036__$1;
(statearr_31193_33687[(2)] = inst_31011);

(statearr_31193_33687[(1)] = (10));


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
var cljs$core$async$state_machine__30312__auto__ = null;
var cljs$core$async$state_machine__30312__auto____0 = (function (){
var statearr_31194 = [null,null,null,null,null,null,null,null];
(statearr_31194[(0)] = cljs$core$async$state_machine__30312__auto__);

(statearr_31194[(1)] = (1));

return statearr_31194;
});
var cljs$core$async$state_machine__30312__auto____1 = (function (state_31036){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_31036);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e31195){var ex__30315__auto__ = e31195;
var statearr_31196_33695 = state_31036;
(statearr_31196_33695[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_31036[(4)]))){
var statearr_31197_33696 = state_31036;
(statearr_31197_33696[(1)] = cljs.core.first((state_31036[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33697 = state_31036;
state_31036 = G__33697;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$state_machine__30312__auto__ = function(state_31036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30312__auto____1.call(this,state_31036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30312__auto____0;
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30312__auto____1;
return cljs$core$async$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_31198 = f__30818__auto__();
(statearr_31198[(6)] = c__30817__auto___33670);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
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
var process__$1 = (function (p__31200){
var vec__31201 = p__31200;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(1),null);
var job = vec__31201;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30817__auto___33701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_31208){
var state_val_31209 = (state_31208[(1)]);
if((state_val_31209 === (1))){
var state_31208__$1 = state_31208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31208__$1,(2),res,v);
} else {
if((state_val_31209 === (2))){
var inst_31205 = (state_31208[(2)]);
var inst_31206 = cljs.core.async.close_BANG_(res);
var state_31208__$1 = (function (){var statearr_31210 = state_31208;
(statearr_31210[(7)] = inst_31205);

return statearr_31210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31208__$1,inst_31206);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0 = (function (){
var statearr_31211 = [null,null,null,null,null,null,null,null];
(statearr_31211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__);

(statearr_31211[(1)] = (1));

return statearr_31211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1 = (function (state_31208){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_31208);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e31212){var ex__30315__auto__ = e31212;
var statearr_31213_33708 = state_31208;
(statearr_31213_33708[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_31208[(4)]))){
var statearr_31214_33709 = state_31208;
(statearr_31214_33709[(1)] = cljs.core.first((state_31208[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33710 = state_31208;
state_31208 = G__33710;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__ = function(state_31208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1.call(this,state_31208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_31215 = f__30818__auto__();
(statearr_31215[(6)] = c__30817__auto___33701);

return statearr_31215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31216){
var vec__31217 = p__31216;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(1),null);
var job = vec__31217;
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
var n__5633__auto___33719 = n;
var __33720 = (0);
while(true){
if((__33720 < n__5633__auto___33719)){
var G__31220_33721 = type;
var G__31220_33722__$1 = (((G__31220_33721 instanceof cljs.core.Keyword))?G__31220_33721.fqn:null);
switch (G__31220_33722__$1) {
case "compute":
var c__30817__auto___33724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33720,c__30817__auto___33724,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async){
return (function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = ((function (__33720,c__30817__auto___33724,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async){
return (function (state_31233){
var state_val_31234 = (state_31233[(1)]);
if((state_val_31234 === (1))){
var state_31233__$1 = state_31233;
var statearr_31235_33725 = state_31233__$1;
(statearr_31235_33725[(2)] = null);

(statearr_31235_33725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (2))){
var state_31233__$1 = state_31233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31233__$1,(4),jobs);
} else {
if((state_val_31234 === (3))){
var inst_31231 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31233__$1,inst_31231);
} else {
if((state_val_31234 === (4))){
var inst_31223 = (state_31233[(2)]);
var inst_31224 = process__$1(inst_31223);
var state_31233__$1 = state_31233;
if(cljs.core.truth_(inst_31224)){
var statearr_31236_33726 = state_31233__$1;
(statearr_31236_33726[(1)] = (5));

} else {
var statearr_31237_33727 = state_31233__$1;
(statearr_31237_33727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (5))){
var state_31233__$1 = state_31233;
var statearr_31238_33728 = state_31233__$1;
(statearr_31238_33728[(2)] = null);

(statearr_31238_33728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (6))){
var state_31233__$1 = state_31233;
var statearr_31239_33729 = state_31233__$1;
(statearr_31239_33729[(2)] = null);

(statearr_31239_33729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31234 === (7))){
var inst_31229 = (state_31233[(2)]);
var state_31233__$1 = state_31233;
var statearr_31240_33730 = state_31233__$1;
(statearr_31240_33730[(2)] = inst_31229);

(statearr_31240_33730[(1)] = (3));


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
});})(__33720,c__30817__auto___33724,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async))
;
return ((function (__33720,switch__30308__auto__,c__30817__auto___33724,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0 = (function (){
var statearr_31241 = [null,null,null,null,null,null,null];
(statearr_31241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__);

(statearr_31241[(1)] = (1));

return statearr_31241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1 = (function (state_31233){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_31233);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e31242){var ex__30315__auto__ = e31242;
var statearr_31243_33731 = state_31233;
(statearr_31243_33731[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_31233[(4)]))){
var statearr_31244_33741 = state_31233;
(statearr_31244_33741[(1)] = cljs.core.first((state_31233[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33742 = state_31233;
state_31233 = G__33742;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__ = function(state_31233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1.call(this,state_31233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__;
})()
;})(__33720,switch__30308__auto__,c__30817__auto___33724,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async))
})();
var state__30819__auto__ = (function (){var statearr_31245 = f__30818__auto__();
(statearr_31245[(6)] = c__30817__auto___33724);

return statearr_31245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(__33720,c__30817__auto___33724,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async))
);


break;
case "async":
var c__30817__auto___33743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33720,c__30817__auto___33743,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async){
return (function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = ((function (__33720,c__30817__auto___33743,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async){
return (function (state_31258){
var state_val_31259 = (state_31258[(1)]);
if((state_val_31259 === (1))){
var state_31258__$1 = state_31258;
var statearr_31260_33744 = state_31258__$1;
(statearr_31260_33744[(2)] = null);

(statearr_31260_33744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (2))){
var state_31258__$1 = state_31258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31258__$1,(4),jobs);
} else {
if((state_val_31259 === (3))){
var inst_31256 = (state_31258[(2)]);
var state_31258__$1 = state_31258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31258__$1,inst_31256);
} else {
if((state_val_31259 === (4))){
var inst_31248 = (state_31258[(2)]);
var inst_31249 = async(inst_31248);
var state_31258__$1 = state_31258;
if(cljs.core.truth_(inst_31249)){
var statearr_31261_33745 = state_31258__$1;
(statearr_31261_33745[(1)] = (5));

} else {
var statearr_31262_33746 = state_31258__$1;
(statearr_31262_33746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (5))){
var state_31258__$1 = state_31258;
var statearr_31263_33749 = state_31258__$1;
(statearr_31263_33749[(2)] = null);

(statearr_31263_33749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (6))){
var state_31258__$1 = state_31258;
var statearr_31264_33752 = state_31258__$1;
(statearr_31264_33752[(2)] = null);

(statearr_31264_33752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31259 === (7))){
var inst_31254 = (state_31258[(2)]);
var state_31258__$1 = state_31258;
var statearr_31265_33753 = state_31258__$1;
(statearr_31265_33753[(2)] = inst_31254);

(statearr_31265_33753[(1)] = (3));


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
});})(__33720,c__30817__auto___33743,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async))
;
return ((function (__33720,switch__30308__auto__,c__30817__auto___33743,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0 = (function (){
var statearr_31267 = [null,null,null,null,null,null,null];
(statearr_31267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__);

(statearr_31267[(1)] = (1));

return statearr_31267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1 = (function (state_31258){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_31258);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e31268){var ex__30315__auto__ = e31268;
var statearr_31269_33756 = state_31258;
(statearr_31269_33756[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_31258[(4)]))){
var statearr_31270_33762 = state_31258;
(statearr_31270_33762[(1)] = cljs.core.first((state_31258[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33763 = state_31258;
state_31258 = G__33763;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__ = function(state_31258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1.call(this,state_31258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__;
})()
;})(__33720,switch__30308__auto__,c__30817__auto___33743,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async))
})();
var state__30819__auto__ = (function (){var statearr_31271 = f__30818__auto__();
(statearr_31271[(6)] = c__30817__auto___33743);

return statearr_31271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
});})(__33720,c__30817__auto___33743,G__31220_33721,G__31220_33722__$1,n__5633__auto___33719,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31220_33722__$1)].join('')));

}

var G__33765 = (__33720 + (1));
__33720 = G__33765;
continue;
} else {
}
break;
}

var c__30817__auto___33766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_31293){
var state_val_31294 = (state_31293[(1)]);
if((state_val_31294 === (7))){
var inst_31289 = (state_31293[(2)]);
var state_31293__$1 = state_31293;
var statearr_31295_33774 = state_31293__$1;
(statearr_31295_33774[(2)] = inst_31289);

(statearr_31295_33774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (1))){
var state_31293__$1 = state_31293;
var statearr_31296_33775 = state_31293__$1;
(statearr_31296_33775[(2)] = null);

(statearr_31296_33775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (4))){
var inst_31274 = (state_31293[(7)]);
var inst_31274__$1 = (state_31293[(2)]);
var inst_31275 = (inst_31274__$1 == null);
var state_31293__$1 = (function (){var statearr_31299 = state_31293;
(statearr_31299[(7)] = inst_31274__$1);

return statearr_31299;
})();
if(cljs.core.truth_(inst_31275)){
var statearr_31300_33776 = state_31293__$1;
(statearr_31300_33776[(1)] = (5));

} else {
var statearr_31301_33777 = state_31293__$1;
(statearr_31301_33777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (6))){
var inst_31279 = (state_31293[(8)]);
var inst_31274 = (state_31293[(7)]);
var inst_31279__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31281 = [inst_31274,inst_31279__$1];
var inst_31282 = (new cljs.core.PersistentVector(null,2,(5),inst_31280,inst_31281,null));
var state_31293__$1 = (function (){var statearr_31302 = state_31293;
(statearr_31302[(8)] = inst_31279__$1);

return statearr_31302;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31293__$1,(8),jobs,inst_31282);
} else {
if((state_val_31294 === (3))){
var inst_31291 = (state_31293[(2)]);
var state_31293__$1 = state_31293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31293__$1,inst_31291);
} else {
if((state_val_31294 === (2))){
var state_31293__$1 = state_31293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31293__$1,(4),from);
} else {
if((state_val_31294 === (9))){
var inst_31286 = (state_31293[(2)]);
var state_31293__$1 = (function (){var statearr_31305 = state_31293;
(statearr_31305[(9)] = inst_31286);

return statearr_31305;
})();
var statearr_31306_33779 = state_31293__$1;
(statearr_31306_33779[(2)] = null);

(statearr_31306_33779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (5))){
var inst_31277 = cljs.core.async.close_BANG_(jobs);
var state_31293__$1 = state_31293;
var statearr_31307_33780 = state_31293__$1;
(statearr_31307_33780[(2)] = inst_31277);

(statearr_31307_33780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (8))){
var inst_31279 = (state_31293[(8)]);
var inst_31284 = (state_31293[(2)]);
var state_31293__$1 = (function (){var statearr_31308 = state_31293;
(statearr_31308[(10)] = inst_31284);

return statearr_31308;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31293__$1,(9),results,inst_31279);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0 = (function (){
var statearr_31309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__);

(statearr_31309[(1)] = (1));

return statearr_31309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1 = (function (state_31293){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_31293);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e31310){var ex__30315__auto__ = e31310;
var statearr_31311_33785 = state_31293;
(statearr_31311_33785[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_31293[(4)]))){
var statearr_31312_33786 = state_31293;
(statearr_31312_33786[(1)] = cljs.core.first((state_31293[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33787 = state_31293;
state_31293 = G__33787;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__ = function(state_31293){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1.call(this,state_31293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_31314 = f__30818__auto__();
(statearr_31314[(6)] = c__30817__auto___33766);

return statearr_31314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));


var c__30817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_31357){
var state_val_31358 = (state_31357[(1)]);
if((state_val_31358 === (7))){
var inst_31353 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31359_33788 = state_31357__$1;
(statearr_31359_33788[(2)] = inst_31353);

(statearr_31359_33788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (20))){
var state_31357__$1 = state_31357;
var statearr_31360_33789 = state_31357__$1;
(statearr_31360_33789[(2)] = null);

(statearr_31360_33789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (1))){
var state_31357__$1 = state_31357;
var statearr_31362_33790 = state_31357__$1;
(statearr_31362_33790[(2)] = null);

(statearr_31362_33790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (4))){
var inst_31318 = (state_31357[(7)]);
var inst_31318__$1 = (state_31357[(2)]);
var inst_31319 = (inst_31318__$1 == null);
var state_31357__$1 = (function (){var statearr_31363 = state_31357;
(statearr_31363[(7)] = inst_31318__$1);

return statearr_31363;
})();
if(cljs.core.truth_(inst_31319)){
var statearr_31365_33791 = state_31357__$1;
(statearr_31365_33791[(1)] = (5));

} else {
var statearr_31366_33792 = state_31357__$1;
(statearr_31366_33792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (15))){
var inst_31332 = (state_31357[(8)]);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31357__$1,(18),to,inst_31332);
} else {
if((state_val_31358 === (21))){
var inst_31348 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31367_33793 = state_31357__$1;
(statearr_31367_33793[(2)] = inst_31348);

(statearr_31367_33793[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (13))){
var inst_31350 = (state_31357[(2)]);
var state_31357__$1 = (function (){var statearr_31368 = state_31357;
(statearr_31368[(9)] = inst_31350);

return statearr_31368;
})();
var statearr_31369_33794 = state_31357__$1;
(statearr_31369_33794[(2)] = null);

(statearr_31369_33794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (6))){
var inst_31318 = (state_31357[(7)]);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31357__$1,(11),inst_31318);
} else {
if((state_val_31358 === (17))){
var inst_31343 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
if(cljs.core.truth_(inst_31343)){
var statearr_31370_33796 = state_31357__$1;
(statearr_31370_33796[(1)] = (19));

} else {
var statearr_31372_33797 = state_31357__$1;
(statearr_31372_33797[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (3))){
var inst_31355 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31357__$1,inst_31355);
} else {
if((state_val_31358 === (12))){
var inst_31328 = (state_31357[(10)]);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31357__$1,(14),inst_31328);
} else {
if((state_val_31358 === (2))){
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31357__$1,(4),results);
} else {
if((state_val_31358 === (19))){
var state_31357__$1 = state_31357;
var statearr_31373_33804 = state_31357__$1;
(statearr_31373_33804[(2)] = null);

(statearr_31373_33804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (11))){
var inst_31328 = (state_31357[(2)]);
var state_31357__$1 = (function (){var statearr_31374 = state_31357;
(statearr_31374[(10)] = inst_31328);

return statearr_31374;
})();
var statearr_31375_33812 = state_31357__$1;
(statearr_31375_33812[(2)] = null);

(statearr_31375_33812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (9))){
var state_31357__$1 = state_31357;
var statearr_31376_33813 = state_31357__$1;
(statearr_31376_33813[(2)] = null);

(statearr_31376_33813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (5))){
var state_31357__$1 = state_31357;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31377_33814 = state_31357__$1;
(statearr_31377_33814[(1)] = (8));

} else {
var statearr_31378_33815 = state_31357__$1;
(statearr_31378_33815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (14))){
var inst_31332 = (state_31357[(8)]);
var inst_31336 = (state_31357[(11)]);
var inst_31332__$1 = (state_31357[(2)]);
var inst_31335 = (inst_31332__$1 == null);
var inst_31336__$1 = cljs.core.not(inst_31335);
var state_31357__$1 = (function (){var statearr_31383 = state_31357;
(statearr_31383[(8)] = inst_31332__$1);

(statearr_31383[(11)] = inst_31336__$1);

return statearr_31383;
})();
if(inst_31336__$1){
var statearr_31384_33816 = state_31357__$1;
(statearr_31384_33816[(1)] = (15));

} else {
var statearr_31385_33817 = state_31357__$1;
(statearr_31385_33817[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (16))){
var inst_31336 = (state_31357[(11)]);
var state_31357__$1 = state_31357;
var statearr_31386_33819 = state_31357__$1;
(statearr_31386_33819[(2)] = inst_31336);

(statearr_31386_33819[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (10))){
var inst_31325 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31387_33820 = state_31357__$1;
(statearr_31387_33820[(2)] = inst_31325);

(statearr_31387_33820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (18))){
var inst_31340 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31389_33821 = state_31357__$1;
(statearr_31389_33821[(2)] = inst_31340);

(statearr_31389_33821[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (8))){
var inst_31322 = cljs.core.async.close_BANG_(to);
var state_31357__$1 = state_31357;
var statearr_31391_33822 = state_31357__$1;
(statearr_31391_33822[(2)] = inst_31322);

(statearr_31391_33822[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0 = (function (){
var statearr_31395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__);

(statearr_31395[(1)] = (1));

return statearr_31395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1 = (function (state_31357){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_31357);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e31397){var ex__30315__auto__ = e31397;
var statearr_31398_33823 = state_31357;
(statearr_31398_33823[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_31357[(4)]))){
var statearr_31401_33824 = state_31357;
(statearr_31401_33824[(1)] = cljs.core.first((state_31357[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33825 = state_31357;
state_31357 = G__33825;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__ = function(state_31357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1.call(this,state_31357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30312__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_31406 = f__30818__auto__();
(statearr_31406[(6)] = c__30817__auto__);

return statearr_31406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));

return c__30817__auto__;
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
var G__31412 = arguments.length;
switch (G__31412) {
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
var G__31418 = arguments.length;
switch (G__31418) {
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
var G__31421 = arguments.length;
switch (G__31421) {
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
var c__30817__auto___33834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_31451){
var state_val_31452 = (state_31451[(1)]);
if((state_val_31452 === (7))){
var inst_31447 = (state_31451[(2)]);
var state_31451__$1 = state_31451;
var statearr_31457_33836 = state_31451__$1;
(statearr_31457_33836[(2)] = inst_31447);

(statearr_31457_33836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31452 === (1))){
var state_31451__$1 = state_31451;
var statearr_31458_33837 = state_31451__$1;
(statearr_31458_33837[(2)] = null);

(statearr_31458_33837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31452 === (4))){
var inst_31428 = (state_31451[(7)]);
var inst_31428__$1 = (state_31451[(2)]);
var inst_31429 = (inst_31428__$1 == null);
var state_31451__$1 = (function (){var statearr_31459 = state_31451;
(statearr_31459[(7)] = inst_31428__$1);

return statearr_31459;
})();
if(cljs.core.truth_(inst_31429)){
var statearr_31461_33838 = state_31451__$1;
(statearr_31461_33838[(1)] = (5));

} else {
var statearr_31462_33839 = state_31451__$1;
(statearr_31462_33839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31452 === (13))){
var state_31451__$1 = state_31451;
var statearr_31463_33840 = state_31451__$1;
(statearr_31463_33840[(2)] = null);

(statearr_31463_33840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31452 === (6))){
var inst_31428 = (state_31451[(7)]);
var inst_31434 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31428) : p.call(null, inst_31428));
var state_31451__$1 = state_31451;
if(cljs.core.truth_(inst_31434)){
var statearr_31464_33841 = state_31451__$1;
(statearr_31464_33841[(1)] = (9));

} else {
var statearr_31465_33842 = state_31451__$1;
(statearr_31465_33842[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31452 === (3))){
var inst_31449 = (state_31451[(2)]);
var state_31451__$1 = state_31451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31451__$1,inst_31449);
} else {
if((state_val_31452 === (12))){
var state_31451__$1 = state_31451;
var statearr_31467_33843 = state_31451__$1;
(statearr_31467_33843[(2)] = null);

(statearr_31467_33843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31452 === (2))){
var state_31451__$1 = state_31451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31451__$1,(4),ch);
} else {
if((state_val_31452 === (11))){
var inst_31428 = (state_31451[(7)]);
var inst_31438 = (state_31451[(2)]);
var state_31451__$1 = state_31451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31451__$1,(8),inst_31438,inst_31428);
} else {
if((state_val_31452 === (9))){
var state_31451__$1 = state_31451;
var statearr_31472_33844 = state_31451__$1;
(statearr_31472_33844[(2)] = tc);

(statearr_31472_33844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31452 === (5))){
var inst_31431 = cljs.core.async.close_BANG_(tc);
var inst_31432 = cljs.core.async.close_BANG_(fc);
var state_31451__$1 = (function (){var statearr_31473 = state_31451;
(statearr_31473[(8)] = inst_31431);

return statearr_31473;
})();
var statearr_31474_33848 = state_31451__$1;
(statearr_31474_33848[(2)] = inst_31432);

(statearr_31474_33848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31452 === (14))){
var inst_31445 = (state_31451[(2)]);
var state_31451__$1 = state_31451;
var statearr_31475_33849 = state_31451__$1;
(statearr_31475_33849[(2)] = inst_31445);

(statearr_31475_33849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31452 === (10))){
var state_31451__$1 = state_31451;
var statearr_31476_33850 = state_31451__$1;
(statearr_31476_33850[(2)] = fc);

(statearr_31476_33850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31452 === (8))){
var inst_31440 = (state_31451[(2)]);
var state_31451__$1 = state_31451;
if(cljs.core.truth_(inst_31440)){
var statearr_31481_33851 = state_31451__$1;
(statearr_31481_33851[(1)] = (12));

} else {
var statearr_31482_33852 = state_31451__$1;
(statearr_31482_33852[(1)] = (13));

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
var cljs$core$async$state_machine__30312__auto__ = null;
var cljs$core$async$state_machine__30312__auto____0 = (function (){
var statearr_31484 = [null,null,null,null,null,null,null,null,null];
(statearr_31484[(0)] = cljs$core$async$state_machine__30312__auto__);

(statearr_31484[(1)] = (1));

return statearr_31484;
});
var cljs$core$async$state_machine__30312__auto____1 = (function (state_31451){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_31451);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e31485){var ex__30315__auto__ = e31485;
var statearr_31486_33853 = state_31451;
(statearr_31486_33853[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_31451[(4)]))){
var statearr_31487_33854 = state_31451;
(statearr_31487_33854[(1)] = cljs.core.first((state_31451[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33855 = state_31451;
state_31451 = G__33855;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$state_machine__30312__auto__ = function(state_31451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30312__auto____1.call(this,state_31451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30312__auto____0;
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30312__auto____1;
return cljs$core$async$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_31489 = f__30818__auto__();
(statearr_31489[(6)] = c__30817__auto___33834);

return statearr_31489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
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
var c__30817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_31525){
var state_val_31526 = (state_31525[(1)]);
if((state_val_31526 === (7))){
var inst_31520 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
var statearr_31534_33856 = state_31525__$1;
(statearr_31534_33856[(2)] = inst_31520);

(statearr_31534_33856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (1))){
var inst_31502 = init;
var inst_31504 = inst_31502;
var state_31525__$1 = (function (){var statearr_31535 = state_31525;
(statearr_31535[(7)] = inst_31504);

return statearr_31535;
})();
var statearr_31536_33857 = state_31525__$1;
(statearr_31536_33857[(2)] = null);

(statearr_31536_33857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (4))){
var inst_31507 = (state_31525[(8)]);
var inst_31507__$1 = (state_31525[(2)]);
var inst_31508 = (inst_31507__$1 == null);
var state_31525__$1 = (function (){var statearr_31538 = state_31525;
(statearr_31538[(8)] = inst_31507__$1);

return statearr_31538;
})();
if(cljs.core.truth_(inst_31508)){
var statearr_31539_33858 = state_31525__$1;
(statearr_31539_33858[(1)] = (5));

} else {
var statearr_31540_33863 = state_31525__$1;
(statearr_31540_33863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (6))){
var inst_31511 = (state_31525[(9)]);
var inst_31507 = (state_31525[(8)]);
var inst_31504 = (state_31525[(7)]);
var inst_31511__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31504,inst_31507) : f.call(null, inst_31504,inst_31507));
var inst_31512 = cljs.core.reduced_QMARK_(inst_31511__$1);
var state_31525__$1 = (function (){var statearr_31550 = state_31525;
(statearr_31550[(9)] = inst_31511__$1);

return statearr_31550;
})();
if(inst_31512){
var statearr_31556_33864 = state_31525__$1;
(statearr_31556_33864[(1)] = (8));

} else {
var statearr_31557_33865 = state_31525__$1;
(statearr_31557_33865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (3))){
var inst_31522 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31525__$1,inst_31522);
} else {
if((state_val_31526 === (2))){
var state_31525__$1 = state_31525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31525__$1,(4),ch);
} else {
if((state_val_31526 === (9))){
var inst_31511 = (state_31525[(9)]);
var inst_31504 = inst_31511;
var state_31525__$1 = (function (){var statearr_31564 = state_31525;
(statearr_31564[(7)] = inst_31504);

return statearr_31564;
})();
var statearr_31566_33866 = state_31525__$1;
(statearr_31566_33866[(2)] = null);

(statearr_31566_33866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (5))){
var inst_31504 = (state_31525[(7)]);
var state_31525__$1 = state_31525;
var statearr_31567_33867 = state_31525__$1;
(statearr_31567_33867[(2)] = inst_31504);

(statearr_31567_33867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (10))){
var inst_31518 = (state_31525[(2)]);
var state_31525__$1 = state_31525;
var statearr_31569_33868 = state_31525__$1;
(statearr_31569_33868[(2)] = inst_31518);

(statearr_31569_33868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (8))){
var inst_31511 = (state_31525[(9)]);
var inst_31514 = cljs.core.deref(inst_31511);
var state_31525__$1 = state_31525;
var statearr_31570_33870 = state_31525__$1;
(statearr_31570_33870[(2)] = inst_31514);

(statearr_31570_33870[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30312__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30312__auto____0 = (function (){
var statearr_31571 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31571[(0)] = cljs$core$async$reduce_$_state_machine__30312__auto__);

(statearr_31571[(1)] = (1));

return statearr_31571;
});
var cljs$core$async$reduce_$_state_machine__30312__auto____1 = (function (state_31525){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_31525);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e31572){var ex__30315__auto__ = e31572;
var statearr_31573_33871 = state_31525;
(statearr_31573_33871[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_31525[(4)]))){
var statearr_31578_33872 = state_31525;
(statearr_31578_33872[(1)] = cljs.core.first((state_31525[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33873 = state_31525;
state_31525 = G__33873;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30312__auto__ = function(state_31525){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30312__auto____1.call(this,state_31525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30312__auto____0;
cljs$core$async$reduce_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30312__auto____1;
return cljs$core$async$reduce_$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_31579 = f__30818__auto__();
(statearr_31579[(6)] = c__30817__auto__);

return statearr_31579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));

return c__30817__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__30817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_31589){
var state_val_31590 = (state_31589[(1)]);
if((state_val_31590 === (1))){
var inst_31584 = cljs.core.async.reduce(f__$1,init,ch);
var state_31589__$1 = state_31589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31589__$1,(2),inst_31584);
} else {
if((state_val_31590 === (2))){
var inst_31586 = (state_31589[(2)]);
var inst_31587 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31586) : f__$1.call(null, inst_31586));
var state_31589__$1 = state_31589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31589__$1,inst_31587);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30312__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30312__auto____0 = (function (){
var statearr_31592 = [null,null,null,null,null,null,null];
(statearr_31592[(0)] = cljs$core$async$transduce_$_state_machine__30312__auto__);

(statearr_31592[(1)] = (1));

return statearr_31592;
});
var cljs$core$async$transduce_$_state_machine__30312__auto____1 = (function (state_31589){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_31589);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e31593){var ex__30315__auto__ = e31593;
var statearr_31594_33886 = state_31589;
(statearr_31594_33886[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_31589[(4)]))){
var statearr_31595_33887 = state_31589;
(statearr_31595_33887[(1)] = cljs.core.first((state_31589[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33889 = state_31589;
state_31589 = G__33889;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30312__auto__ = function(state_31589){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30312__auto____1.call(this,state_31589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30312__auto____0;
cljs$core$async$transduce_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30312__auto____1;
return cljs$core$async$transduce_$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_31596 = f__30818__auto__();
(statearr_31596[(6)] = c__30817__auto__);

return statearr_31596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));

return c__30817__auto__;
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
var G__31603 = arguments.length;
switch (G__31603) {
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
var c__30817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_31637){
var state_val_31638 = (state_31637[(1)]);
if((state_val_31638 === (7))){
var inst_31615 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
var statearr_31645_33897 = state_31637__$1;
(statearr_31645_33897[(2)] = inst_31615);

(statearr_31645_33897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (1))){
var inst_31607 = cljs.core.seq(coll);
var inst_31608 = inst_31607;
var state_31637__$1 = (function (){var statearr_31647 = state_31637;
(statearr_31647[(7)] = inst_31608);

return statearr_31647;
})();
var statearr_31648_33898 = state_31637__$1;
(statearr_31648_33898[(2)] = null);

(statearr_31648_33898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (4))){
var inst_31608 = (state_31637[(7)]);
var inst_31613 = cljs.core.first(inst_31608);
var state_31637__$1 = state_31637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31637__$1,(7),ch,inst_31613);
} else {
if((state_val_31638 === (13))){
var inst_31629 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
var statearr_31650_33899 = state_31637__$1;
(statearr_31650_33899[(2)] = inst_31629);

(statearr_31650_33899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (6))){
var inst_31618 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
if(cljs.core.truth_(inst_31618)){
var statearr_31651_33900 = state_31637__$1;
(statearr_31651_33900[(1)] = (8));

} else {
var statearr_31652_33901 = state_31637__$1;
(statearr_31652_33901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (3))){
var inst_31633 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31637__$1,inst_31633);
} else {
if((state_val_31638 === (12))){
var state_31637__$1 = state_31637;
var statearr_31653_33902 = state_31637__$1;
(statearr_31653_33902[(2)] = null);

(statearr_31653_33902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (2))){
var inst_31608 = (state_31637[(7)]);
var state_31637__$1 = state_31637;
if(cljs.core.truth_(inst_31608)){
var statearr_31655_33903 = state_31637__$1;
(statearr_31655_33903[(1)] = (4));

} else {
var statearr_31656_33904 = state_31637__$1;
(statearr_31656_33904[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (11))){
var inst_31626 = cljs.core.async.close_BANG_(ch);
var state_31637__$1 = state_31637;
var statearr_31657_33905 = state_31637__$1;
(statearr_31657_33905[(2)] = inst_31626);

(statearr_31657_33905[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (9))){
var state_31637__$1 = state_31637;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31658_33906 = state_31637__$1;
(statearr_31658_33906[(1)] = (11));

} else {
var statearr_31659_33907 = state_31637__$1;
(statearr_31659_33907[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (5))){
var inst_31608 = (state_31637[(7)]);
var state_31637__$1 = state_31637;
var statearr_31660_33908 = state_31637__$1;
(statearr_31660_33908[(2)] = inst_31608);

(statearr_31660_33908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (10))){
var inst_31631 = (state_31637[(2)]);
var state_31637__$1 = state_31637;
var statearr_31661_33909 = state_31637__$1;
(statearr_31661_33909[(2)] = inst_31631);

(statearr_31661_33909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31638 === (8))){
var inst_31608 = (state_31637[(7)]);
var inst_31622 = cljs.core.next(inst_31608);
var inst_31608__$1 = inst_31622;
var state_31637__$1 = (function (){var statearr_31663 = state_31637;
(statearr_31663[(7)] = inst_31608__$1);

return statearr_31663;
})();
var statearr_31664_33910 = state_31637__$1;
(statearr_31664_33910[(2)] = null);

(statearr_31664_33910[(1)] = (2));


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
var cljs$core$async$state_machine__30312__auto__ = null;
var cljs$core$async$state_machine__30312__auto____0 = (function (){
var statearr_31665 = [null,null,null,null,null,null,null,null];
(statearr_31665[(0)] = cljs$core$async$state_machine__30312__auto__);

(statearr_31665[(1)] = (1));

return statearr_31665;
});
var cljs$core$async$state_machine__30312__auto____1 = (function (state_31637){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_31637);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e31666){var ex__30315__auto__ = e31666;
var statearr_31667_33920 = state_31637;
(statearr_31667_33920[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_31637[(4)]))){
var statearr_31668_33921 = state_31637;
(statearr_31668_33921[(1)] = cljs.core.first((state_31637[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33922 = state_31637;
state_31637 = G__33922;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$state_machine__30312__auto__ = function(state_31637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30312__auto____1.call(this,state_31637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30312__auto____0;
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30312__auto____1;
return cljs$core$async$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_31669 = f__30818__auto__();
(statearr_31669[(6)] = c__30817__auto__);

return statearr_31669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));

return c__30817__auto__;
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
var G__31672 = arguments.length;
switch (G__31672) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33930 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33930(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33931 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33931(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33932 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33932(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33933 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33933(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31742 = (function (ch,cs,meta31743){
this.ch = ch;
this.cs = cs;
this.meta31743 = meta31743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31744,meta31743__$1){
var self__ = this;
var _31744__$1 = this;
return (new cljs.core.async.t_cljs$core$async31742(self__.ch,self__.cs,meta31743__$1));
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31744){
var self__ = this;
var _31744__$1 = this;
return self__.meta31743;
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31742.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31743","meta31743",357375986,null)], null);
}));

(cljs.core.async.t_cljs$core$async31742.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31742");

(cljs.core.async.t_cljs$core$async31742.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async31742");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31742.
 */
cljs.core.async.__GT_t_cljs$core$async31742 = (function cljs$core$async$__GT_t_cljs$core$async31742(ch,cs,meta31743){
return (new cljs.core.async.t_cljs$core$async31742(ch,cs,meta31743));
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
var m = (new cljs.core.async.t_cljs$core$async31742(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30817__auto___33935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_31894){
var state_val_31895 = (state_31894[(1)]);
if((state_val_31895 === (7))){
var inst_31890 = (state_31894[(2)]);
var state_31894__$1 = state_31894;
var statearr_31899_33936 = state_31894__$1;
(statearr_31899_33936[(2)] = inst_31890);

(statearr_31899_33936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (20))){
var inst_31793 = (state_31894[(7)]);
var inst_31806 = cljs.core.first(inst_31793);
var inst_31807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31806,(0),null);
var inst_31808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31806,(1),null);
var state_31894__$1 = (function (){var statearr_31901 = state_31894;
(statearr_31901[(8)] = inst_31807);

return statearr_31901;
})();
if(cljs.core.truth_(inst_31808)){
var statearr_31902_33937 = state_31894__$1;
(statearr_31902_33937[(1)] = (22));

} else {
var statearr_31903_33938 = state_31894__$1;
(statearr_31903_33938[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (27))){
var inst_31838 = (state_31894[(9)]);
var inst_31754 = (state_31894[(10)]);
var inst_31843 = (state_31894[(11)]);
var inst_31836 = (state_31894[(12)]);
var inst_31843__$1 = cljs.core._nth(inst_31836,inst_31838);
var inst_31844 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31843__$1,inst_31754,done);
var state_31894__$1 = (function (){var statearr_31904 = state_31894;
(statearr_31904[(11)] = inst_31843__$1);

return statearr_31904;
})();
if(cljs.core.truth_(inst_31844)){
var statearr_31905_33939 = state_31894__$1;
(statearr_31905_33939[(1)] = (30));

} else {
var statearr_31906_33940 = state_31894__$1;
(statearr_31906_33940[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (1))){
var state_31894__$1 = state_31894;
var statearr_31907_33941 = state_31894__$1;
(statearr_31907_33941[(2)] = null);

(statearr_31907_33941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (24))){
var inst_31793 = (state_31894[(7)]);
var inst_31813 = (state_31894[(2)]);
var inst_31814 = cljs.core.next(inst_31793);
var inst_31771 = inst_31814;
var inst_31772 = null;
var inst_31773 = (0);
var inst_31774 = (0);
var state_31894__$1 = (function (){var statearr_31908 = state_31894;
(statearr_31908[(13)] = inst_31813);

(statearr_31908[(14)] = inst_31773);

(statearr_31908[(15)] = inst_31774);

(statearr_31908[(16)] = inst_31771);

(statearr_31908[(17)] = inst_31772);

return statearr_31908;
})();
var statearr_31909_33942 = state_31894__$1;
(statearr_31909_33942[(2)] = null);

(statearr_31909_33942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (39))){
var state_31894__$1 = state_31894;
var statearr_31913_33943 = state_31894__$1;
(statearr_31913_33943[(2)] = null);

(statearr_31913_33943[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (4))){
var inst_31754 = (state_31894[(10)]);
var inst_31754__$1 = (state_31894[(2)]);
var inst_31759 = (inst_31754__$1 == null);
var state_31894__$1 = (function (){var statearr_31914 = state_31894;
(statearr_31914[(10)] = inst_31754__$1);

return statearr_31914;
})();
if(cljs.core.truth_(inst_31759)){
var statearr_31915_33944 = state_31894__$1;
(statearr_31915_33944[(1)] = (5));

} else {
var statearr_31916_33945 = state_31894__$1;
(statearr_31916_33945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (15))){
var inst_31773 = (state_31894[(14)]);
var inst_31774 = (state_31894[(15)]);
var inst_31771 = (state_31894[(16)]);
var inst_31772 = (state_31894[(17)]);
var inst_31789 = (state_31894[(2)]);
var inst_31790 = (inst_31774 + (1));
var tmp31910 = inst_31773;
var tmp31911 = inst_31771;
var tmp31912 = inst_31772;
var inst_31771__$1 = tmp31911;
var inst_31772__$1 = tmp31912;
var inst_31773__$1 = tmp31910;
var inst_31774__$1 = inst_31790;
var state_31894__$1 = (function (){var statearr_31918 = state_31894;
(statearr_31918[(18)] = inst_31789);

(statearr_31918[(14)] = inst_31773__$1);

(statearr_31918[(15)] = inst_31774__$1);

(statearr_31918[(16)] = inst_31771__$1);

(statearr_31918[(17)] = inst_31772__$1);

return statearr_31918;
})();
var statearr_31919_33947 = state_31894__$1;
(statearr_31919_33947[(2)] = null);

(statearr_31919_33947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (21))){
var inst_31817 = (state_31894[(2)]);
var state_31894__$1 = state_31894;
var statearr_31923_33948 = state_31894__$1;
(statearr_31923_33948[(2)] = inst_31817);

(statearr_31923_33948[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (31))){
var inst_31843 = (state_31894[(11)]);
var inst_31847 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_31843);
var state_31894__$1 = state_31894;
var statearr_31924_33950 = state_31894__$1;
(statearr_31924_33950[(2)] = inst_31847);

(statearr_31924_33950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (32))){
var inst_31838 = (state_31894[(9)]);
var inst_31836 = (state_31894[(12)]);
var inst_31837 = (state_31894[(19)]);
var inst_31835 = (state_31894[(20)]);
var inst_31849 = (state_31894[(2)]);
var inst_31850 = (inst_31838 + (1));
var tmp31920 = inst_31836;
var tmp31921 = inst_31837;
var tmp31922 = inst_31835;
var inst_31835__$1 = tmp31922;
var inst_31836__$1 = tmp31920;
var inst_31837__$1 = tmp31921;
var inst_31838__$1 = inst_31850;
var state_31894__$1 = (function (){var statearr_31925 = state_31894;
(statearr_31925[(9)] = inst_31838__$1);

(statearr_31925[(12)] = inst_31836__$1);

(statearr_31925[(19)] = inst_31837__$1);

(statearr_31925[(21)] = inst_31849);

(statearr_31925[(20)] = inst_31835__$1);

return statearr_31925;
})();
var statearr_31926_33951 = state_31894__$1;
(statearr_31926_33951[(2)] = null);

(statearr_31926_33951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (40))){
var inst_31862 = (state_31894[(22)]);
var inst_31867 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_31862);
var state_31894__$1 = state_31894;
var statearr_31927_33952 = state_31894__$1;
(statearr_31927_33952[(2)] = inst_31867);

(statearr_31927_33952[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (33))){
var inst_31853 = (state_31894[(23)]);
var inst_31855 = cljs.core.chunked_seq_QMARK_(inst_31853);
var state_31894__$1 = state_31894;
if(inst_31855){
var statearr_31929_33953 = state_31894__$1;
(statearr_31929_33953[(1)] = (36));

} else {
var statearr_31930_33954 = state_31894__$1;
(statearr_31930_33954[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (13))){
var inst_31783 = (state_31894[(24)]);
var inst_31786 = cljs.core.async.close_BANG_(inst_31783);
var state_31894__$1 = state_31894;
var statearr_31931_33955 = state_31894__$1;
(statearr_31931_33955[(2)] = inst_31786);

(statearr_31931_33955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (22))){
var inst_31807 = (state_31894[(8)]);
var inst_31810 = cljs.core.async.close_BANG_(inst_31807);
var state_31894__$1 = state_31894;
var statearr_31932_33956 = state_31894__$1;
(statearr_31932_33956[(2)] = inst_31810);

(statearr_31932_33956[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (36))){
var inst_31853 = (state_31894[(23)]);
var inst_31857 = cljs.core.chunk_first(inst_31853);
var inst_31858 = cljs.core.chunk_rest(inst_31853);
var inst_31859 = cljs.core.count(inst_31857);
var inst_31835 = inst_31858;
var inst_31836 = inst_31857;
var inst_31837 = inst_31859;
var inst_31838 = (0);
var state_31894__$1 = (function (){var statearr_31933 = state_31894;
(statearr_31933[(9)] = inst_31838);

(statearr_31933[(12)] = inst_31836);

(statearr_31933[(19)] = inst_31837);

(statearr_31933[(20)] = inst_31835);

return statearr_31933;
})();
var statearr_31934_33957 = state_31894__$1;
(statearr_31934_33957[(2)] = null);

(statearr_31934_33957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (41))){
var inst_31853 = (state_31894[(23)]);
var inst_31869 = (state_31894[(2)]);
var inst_31870 = cljs.core.next(inst_31853);
var inst_31835 = inst_31870;
var inst_31836 = null;
var inst_31837 = (0);
var inst_31838 = (0);
var state_31894__$1 = (function (){var statearr_31935 = state_31894;
(statearr_31935[(9)] = inst_31838);

(statearr_31935[(25)] = inst_31869);

(statearr_31935[(12)] = inst_31836);

(statearr_31935[(19)] = inst_31837);

(statearr_31935[(20)] = inst_31835);

return statearr_31935;
})();
var statearr_31936_33958 = state_31894__$1;
(statearr_31936_33958[(2)] = null);

(statearr_31936_33958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (43))){
var state_31894__$1 = state_31894;
var statearr_31937_33959 = state_31894__$1;
(statearr_31937_33959[(2)] = null);

(statearr_31937_33959[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (29))){
var inst_31878 = (state_31894[(2)]);
var state_31894__$1 = state_31894;
var statearr_31938_33960 = state_31894__$1;
(statearr_31938_33960[(2)] = inst_31878);

(statearr_31938_33960[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (44))){
var inst_31887 = (state_31894[(2)]);
var state_31894__$1 = (function (){var statearr_31939 = state_31894;
(statearr_31939[(26)] = inst_31887);

return statearr_31939;
})();
var statearr_31940_33961 = state_31894__$1;
(statearr_31940_33961[(2)] = null);

(statearr_31940_33961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (6))){
var inst_31827 = (state_31894[(27)]);
var inst_31826 = cljs.core.deref(cs);
var inst_31827__$1 = cljs.core.keys(inst_31826);
var inst_31828 = cljs.core.count(inst_31827__$1);
var inst_31829 = cljs.core.reset_BANG_(dctr,inst_31828);
var inst_31834 = cljs.core.seq(inst_31827__$1);
var inst_31835 = inst_31834;
var inst_31836 = null;
var inst_31837 = (0);
var inst_31838 = (0);
var state_31894__$1 = (function (){var statearr_31941 = state_31894;
(statearr_31941[(28)] = inst_31829);

(statearr_31941[(9)] = inst_31838);

(statearr_31941[(12)] = inst_31836);

(statearr_31941[(19)] = inst_31837);

(statearr_31941[(20)] = inst_31835);

(statearr_31941[(27)] = inst_31827__$1);

return statearr_31941;
})();
var statearr_31942_33962 = state_31894__$1;
(statearr_31942_33962[(2)] = null);

(statearr_31942_33962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (28))){
var inst_31853 = (state_31894[(23)]);
var inst_31835 = (state_31894[(20)]);
var inst_31853__$1 = cljs.core.seq(inst_31835);
var state_31894__$1 = (function (){var statearr_31943 = state_31894;
(statearr_31943[(23)] = inst_31853__$1);

return statearr_31943;
})();
if(inst_31853__$1){
var statearr_31944_33963 = state_31894__$1;
(statearr_31944_33963[(1)] = (33));

} else {
var statearr_31945_33964 = state_31894__$1;
(statearr_31945_33964[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (25))){
var inst_31838 = (state_31894[(9)]);
var inst_31837 = (state_31894[(19)]);
var inst_31840 = (inst_31838 < inst_31837);
var inst_31841 = inst_31840;
var state_31894__$1 = state_31894;
if(cljs.core.truth_(inst_31841)){
var statearr_31946_33965 = state_31894__$1;
(statearr_31946_33965[(1)] = (27));

} else {
var statearr_31947_33966 = state_31894__$1;
(statearr_31947_33966[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (34))){
var state_31894__$1 = state_31894;
var statearr_31948_33967 = state_31894__$1;
(statearr_31948_33967[(2)] = null);

(statearr_31948_33967[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (17))){
var state_31894__$1 = state_31894;
var statearr_31949_33968 = state_31894__$1;
(statearr_31949_33968[(2)] = null);

(statearr_31949_33968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (3))){
var inst_31892 = (state_31894[(2)]);
var state_31894__$1 = state_31894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31894__$1,inst_31892);
} else {
if((state_val_31895 === (12))){
var inst_31822 = (state_31894[(2)]);
var state_31894__$1 = state_31894;
var statearr_31954_33969 = state_31894__$1;
(statearr_31954_33969[(2)] = inst_31822);

(statearr_31954_33969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (2))){
var state_31894__$1 = state_31894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31894__$1,(4),ch);
} else {
if((state_val_31895 === (23))){
var state_31894__$1 = state_31894;
var statearr_31955_33970 = state_31894__$1;
(statearr_31955_33970[(2)] = null);

(statearr_31955_33970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (35))){
var inst_31876 = (state_31894[(2)]);
var state_31894__$1 = state_31894;
var statearr_31956_33971 = state_31894__$1;
(statearr_31956_33971[(2)] = inst_31876);

(statearr_31956_33971[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (19))){
var inst_31793 = (state_31894[(7)]);
var inst_31797 = cljs.core.chunk_first(inst_31793);
var inst_31798 = cljs.core.chunk_rest(inst_31793);
var inst_31799 = cljs.core.count(inst_31797);
var inst_31771 = inst_31798;
var inst_31772 = inst_31797;
var inst_31773 = inst_31799;
var inst_31774 = (0);
var state_31894__$1 = (function (){var statearr_31958 = state_31894;
(statearr_31958[(14)] = inst_31773);

(statearr_31958[(15)] = inst_31774);

(statearr_31958[(16)] = inst_31771);

(statearr_31958[(17)] = inst_31772);

return statearr_31958;
})();
var statearr_31959_33972 = state_31894__$1;
(statearr_31959_33972[(2)] = null);

(statearr_31959_33972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (11))){
var inst_31771 = (state_31894[(16)]);
var inst_31793 = (state_31894[(7)]);
var inst_31793__$1 = cljs.core.seq(inst_31771);
var state_31894__$1 = (function (){var statearr_31960 = state_31894;
(statearr_31960[(7)] = inst_31793__$1);

return statearr_31960;
})();
if(inst_31793__$1){
var statearr_31961_33973 = state_31894__$1;
(statearr_31961_33973[(1)] = (16));

} else {
var statearr_31962_33974 = state_31894__$1;
(statearr_31962_33974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (9))){
var inst_31824 = (state_31894[(2)]);
var state_31894__$1 = state_31894;
var statearr_31963_33975 = state_31894__$1;
(statearr_31963_33975[(2)] = inst_31824);

(statearr_31963_33975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (5))){
var inst_31769 = cljs.core.deref(cs);
var inst_31770 = cljs.core.seq(inst_31769);
var inst_31771 = inst_31770;
var inst_31772 = null;
var inst_31773 = (0);
var inst_31774 = (0);
var state_31894__$1 = (function (){var statearr_31965 = state_31894;
(statearr_31965[(14)] = inst_31773);

(statearr_31965[(15)] = inst_31774);

(statearr_31965[(16)] = inst_31771);

(statearr_31965[(17)] = inst_31772);

return statearr_31965;
})();
var statearr_31966_33976 = state_31894__$1;
(statearr_31966_33976[(2)] = null);

(statearr_31966_33976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (14))){
var state_31894__$1 = state_31894;
var statearr_31967_33977 = state_31894__$1;
(statearr_31967_33977[(2)] = null);

(statearr_31967_33977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (45))){
var inst_31884 = (state_31894[(2)]);
var state_31894__$1 = state_31894;
var statearr_31968_33978 = state_31894__$1;
(statearr_31968_33978[(2)] = inst_31884);

(statearr_31968_33978[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (26))){
var inst_31827 = (state_31894[(27)]);
var inst_31880 = (state_31894[(2)]);
var inst_31881 = cljs.core.seq(inst_31827);
var state_31894__$1 = (function (){var statearr_31970 = state_31894;
(statearr_31970[(29)] = inst_31880);

return statearr_31970;
})();
if(inst_31881){
var statearr_31971_33979 = state_31894__$1;
(statearr_31971_33979[(1)] = (42));

} else {
var statearr_31972_33980 = state_31894__$1;
(statearr_31972_33980[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (16))){
var inst_31793 = (state_31894[(7)]);
var inst_31795 = cljs.core.chunked_seq_QMARK_(inst_31793);
var state_31894__$1 = state_31894;
if(inst_31795){
var statearr_31973_33981 = state_31894__$1;
(statearr_31973_33981[(1)] = (19));

} else {
var statearr_31974_33982 = state_31894__$1;
(statearr_31974_33982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (38))){
var inst_31873 = (state_31894[(2)]);
var state_31894__$1 = state_31894;
var statearr_31975_33983 = state_31894__$1;
(statearr_31975_33983[(2)] = inst_31873);

(statearr_31975_33983[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (30))){
var state_31894__$1 = state_31894;
var statearr_31976_33984 = state_31894__$1;
(statearr_31976_33984[(2)] = null);

(statearr_31976_33984[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (10))){
var inst_31774 = (state_31894[(15)]);
var inst_31772 = (state_31894[(17)]);
var inst_31782 = cljs.core._nth(inst_31772,inst_31774);
var inst_31783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31782,(0),null);
var inst_31784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31782,(1),null);
var state_31894__$1 = (function (){var statearr_31977 = state_31894;
(statearr_31977[(24)] = inst_31783);

return statearr_31977;
})();
if(cljs.core.truth_(inst_31784)){
var statearr_31978_33985 = state_31894__$1;
(statearr_31978_33985[(1)] = (13));

} else {
var statearr_31979_33986 = state_31894__$1;
(statearr_31979_33986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (18))){
var inst_31820 = (state_31894[(2)]);
var state_31894__$1 = state_31894;
var statearr_31980_33987 = state_31894__$1;
(statearr_31980_33987[(2)] = inst_31820);

(statearr_31980_33987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (42))){
var state_31894__$1 = state_31894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31894__$1,(45),dchan);
} else {
if((state_val_31895 === (37))){
var inst_31862 = (state_31894[(22)]);
var inst_31754 = (state_31894[(10)]);
var inst_31853 = (state_31894[(23)]);
var inst_31862__$1 = cljs.core.first(inst_31853);
var inst_31863 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31862__$1,inst_31754,done);
var state_31894__$1 = (function (){var statearr_31981 = state_31894;
(statearr_31981[(22)] = inst_31862__$1);

return statearr_31981;
})();
if(cljs.core.truth_(inst_31863)){
var statearr_31982_33988 = state_31894__$1;
(statearr_31982_33988[(1)] = (39));

} else {
var statearr_31983_33989 = state_31894__$1;
(statearr_31983_33989[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31895 === (8))){
var inst_31773 = (state_31894[(14)]);
var inst_31774 = (state_31894[(15)]);
var inst_31776 = (inst_31774 < inst_31773);
var inst_31777 = inst_31776;
var state_31894__$1 = state_31894;
if(cljs.core.truth_(inst_31777)){
var statearr_31984_33990 = state_31894__$1;
(statearr_31984_33990[(1)] = (10));

} else {
var statearr_31985_33991 = state_31894__$1;
(statearr_31985_33991[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30312__auto__ = null;
var cljs$core$async$mult_$_state_machine__30312__auto____0 = (function (){
var statearr_31986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31986[(0)] = cljs$core$async$mult_$_state_machine__30312__auto__);

(statearr_31986[(1)] = (1));

return statearr_31986;
});
var cljs$core$async$mult_$_state_machine__30312__auto____1 = (function (state_31894){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_31894);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e31987){var ex__30315__auto__ = e31987;
var statearr_31988_33992 = state_31894;
(statearr_31988_33992[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_31894[(4)]))){
var statearr_31989_33993 = state_31894;
(statearr_31989_33993[(1)] = cljs.core.first((state_31894[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33994 = state_31894;
state_31894 = G__33994;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30312__auto__ = function(state_31894){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30312__auto____1.call(this,state_31894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30312__auto____0;
cljs$core$async$mult_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30312__auto____1;
return cljs$core$async$mult_$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_31992 = f__30818__auto__();
(statearr_31992[(6)] = c__30817__auto___33935);

return statearr_31992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
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
var G__31999 = arguments.length;
switch (G__31999) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33996 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33996(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33997 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33997(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33998 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33998(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33999 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33999(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34000 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34000(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___34001 = arguments.length;
var i__5767__auto___34002 = (0);
while(true){
if((i__5767__auto___34002 < len__5766__auto___34001)){
args__5772__auto__.push((arguments[i__5767__auto___34002]));

var G__34003 = (i__5767__auto___34002 + (1));
i__5767__auto___34002 = G__34003;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32012){
var map__32013 = p__32012;
var map__32013__$1 = cljs.core.__destructure_map(map__32013);
var opts = map__32013__$1;
var statearr_32014_34004 = state;
(statearr_32014_34004[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32015_34005 = state;
(statearr_32015_34005[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32019_34006 = state;
(statearr_32019_34006[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32007){
var G__32008 = cljs.core.first(seq32007);
var seq32007__$1 = cljs.core.next(seq32007);
var G__32009 = cljs.core.first(seq32007__$1);
var seq32007__$2 = cljs.core.next(seq32007__$1);
var G__32010 = cljs.core.first(seq32007__$2);
var seq32007__$3 = cljs.core.next(seq32007__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32008,G__32009,G__32010,seq32007__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32021 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32022){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32022 = meta32022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32023,meta32022__$1){
var self__ = this;
var _32023__$1 = this;
return (new cljs.core.async.t_cljs$core$async32021(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32022__$1));
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32023){
var self__ = this;
var _32023__$1 = this;
return self__.meta32022;
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32021.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32022","meta32022",630855494,null)], null);
}));

(cljs.core.async.t_cljs$core$async32021.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32021");

(cljs.core.async.t_cljs$core$async32021.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async32021");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32021.
 */
cljs.core.async.__GT_t_cljs$core$async32021 = (function cljs$core$async$__GT_t_cljs$core$async32021(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32022){
return (new cljs.core.async.t_cljs$core$async32021(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32022));
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
var m = (new cljs.core.async.t_cljs$core$async32021(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30817__auto___34018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_32116){
var state_val_32117 = (state_32116[(1)]);
if((state_val_32117 === (7))){
var inst_32073 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
if(cljs.core.truth_(inst_32073)){
var statearr_32119_34019 = state_32116__$1;
(statearr_32119_34019[(1)] = (8));

} else {
var statearr_32124_34025 = state_32116__$1;
(statearr_32124_34025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (20))){
var inst_32065 = (state_32116[(7)]);
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32116__$1,(23),out,inst_32065);
} else {
if((state_val_32117 === (1))){
var inst_32042 = calc_state();
var inst_32049 = cljs.core.__destructure_map(inst_32042);
var inst_32050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32049,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32049,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32049,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32053 = inst_32042;
var state_32116__$1 = (function (){var statearr_32126 = state_32116;
(statearr_32126[(8)] = inst_32050);

(statearr_32126[(9)] = inst_32052);

(statearr_32126[(10)] = inst_32051);

(statearr_32126[(11)] = inst_32053);

return statearr_32126;
})();
var statearr_32127_34026 = state_32116__$1;
(statearr_32127_34026[(2)] = null);

(statearr_32127_34026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (24))){
var inst_32056 = (state_32116[(12)]);
var inst_32053 = inst_32056;
var state_32116__$1 = (function (){var statearr_32129 = state_32116;
(statearr_32129[(11)] = inst_32053);

return statearr_32129;
})();
var statearr_32130_34027 = state_32116__$1;
(statearr_32130_34027[(2)] = null);

(statearr_32130_34027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (4))){
var inst_32065 = (state_32116[(7)]);
var inst_32068 = (state_32116[(13)]);
var inst_32064 = (state_32116[(2)]);
var inst_32065__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32064,(0),null);
var inst_32066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32064,(1),null);
var inst_32068__$1 = (inst_32065__$1 == null);
var state_32116__$1 = (function (){var statearr_32132 = state_32116;
(statearr_32132[(7)] = inst_32065__$1);

(statearr_32132[(13)] = inst_32068__$1);

(statearr_32132[(14)] = inst_32066);

return statearr_32132;
})();
if(cljs.core.truth_(inst_32068__$1)){
var statearr_32137_34028 = state_32116__$1;
(statearr_32137_34028[(1)] = (5));

} else {
var statearr_32138_34029 = state_32116__$1;
(statearr_32138_34029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (15))){
var inst_32057 = (state_32116[(15)]);
var inst_32088 = (state_32116[(16)]);
var inst_32088__$1 = cljs.core.empty_QMARK_(inst_32057);
var state_32116__$1 = (function (){var statearr_32139 = state_32116;
(statearr_32139[(16)] = inst_32088__$1);

return statearr_32139;
})();
if(inst_32088__$1){
var statearr_32140_34030 = state_32116__$1;
(statearr_32140_34030[(1)] = (17));

} else {
var statearr_32141_34031 = state_32116__$1;
(statearr_32141_34031[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (21))){
var inst_32056 = (state_32116[(12)]);
var inst_32053 = inst_32056;
var state_32116__$1 = (function (){var statearr_32142 = state_32116;
(statearr_32142[(11)] = inst_32053);

return statearr_32142;
})();
var statearr_32143_34032 = state_32116__$1;
(statearr_32143_34032[(2)] = null);

(statearr_32143_34032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (13))){
var inst_32081 = (state_32116[(2)]);
var inst_32082 = calc_state();
var inst_32053 = inst_32082;
var state_32116__$1 = (function (){var statearr_32145 = state_32116;
(statearr_32145[(17)] = inst_32081);

(statearr_32145[(11)] = inst_32053);

return statearr_32145;
})();
var statearr_32146_34033 = state_32116__$1;
(statearr_32146_34033[(2)] = null);

(statearr_32146_34033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (22))){
var inst_32108 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32148_34034 = state_32116__$1;
(statearr_32148_34034[(2)] = inst_32108);

(statearr_32148_34034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (6))){
var inst_32066 = (state_32116[(14)]);
var inst_32071 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32066,change);
var state_32116__$1 = state_32116;
var statearr_32149_34035 = state_32116__$1;
(statearr_32149_34035[(2)] = inst_32071);

(statearr_32149_34035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (25))){
var state_32116__$1 = state_32116;
var statearr_32150_34036 = state_32116__$1;
(statearr_32150_34036[(2)] = null);

(statearr_32150_34036[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (17))){
var inst_32058 = (state_32116[(18)]);
var inst_32066 = (state_32116[(14)]);
var inst_32090 = (inst_32058.cljs$core$IFn$_invoke$arity$1 ? inst_32058.cljs$core$IFn$_invoke$arity$1(inst_32066) : inst_32058.call(null, inst_32066));
var inst_32091 = cljs.core.not(inst_32090);
var state_32116__$1 = state_32116;
var statearr_32151_34037 = state_32116__$1;
(statearr_32151_34037[(2)] = inst_32091);

(statearr_32151_34037[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (3))){
var inst_32112 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32116__$1,inst_32112);
} else {
if((state_val_32117 === (12))){
var state_32116__$1 = state_32116;
var statearr_32152_34038 = state_32116__$1;
(statearr_32152_34038[(2)] = null);

(statearr_32152_34038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (2))){
var inst_32056 = (state_32116[(12)]);
var inst_32053 = (state_32116[(11)]);
var inst_32056__$1 = cljs.core.__destructure_map(inst_32053);
var inst_32057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32056__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32056__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32056__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32116__$1 = (function (){var statearr_32153 = state_32116;
(statearr_32153[(12)] = inst_32056__$1);

(statearr_32153[(15)] = inst_32057);

(statearr_32153[(18)] = inst_32058);

return statearr_32153;
})();
return cljs.core.async.ioc_alts_BANG_(state_32116__$1,(4),inst_32059);
} else {
if((state_val_32117 === (23))){
var inst_32099 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
if(cljs.core.truth_(inst_32099)){
var statearr_32156_34039 = state_32116__$1;
(statearr_32156_34039[(1)] = (24));

} else {
var statearr_32157_34040 = state_32116__$1;
(statearr_32157_34040[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (19))){
var inst_32094 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32158_34041 = state_32116__$1;
(statearr_32158_34041[(2)] = inst_32094);

(statearr_32158_34041[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (11))){
var inst_32066 = (state_32116[(14)]);
var inst_32078 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32066);
var state_32116__$1 = state_32116;
var statearr_32159_34042 = state_32116__$1;
(statearr_32159_34042[(2)] = inst_32078);

(statearr_32159_34042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (9))){
var inst_32057 = (state_32116[(15)]);
var inst_32085 = (state_32116[(19)]);
var inst_32066 = (state_32116[(14)]);
var inst_32085__$1 = (inst_32057.cljs$core$IFn$_invoke$arity$1 ? inst_32057.cljs$core$IFn$_invoke$arity$1(inst_32066) : inst_32057.call(null, inst_32066));
var state_32116__$1 = (function (){var statearr_32160 = state_32116;
(statearr_32160[(19)] = inst_32085__$1);

return statearr_32160;
})();
if(cljs.core.truth_(inst_32085__$1)){
var statearr_32161_34043 = state_32116__$1;
(statearr_32161_34043[(1)] = (14));

} else {
var statearr_32162_34044 = state_32116__$1;
(statearr_32162_34044[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (5))){
var inst_32068 = (state_32116[(13)]);
var state_32116__$1 = state_32116;
var statearr_32163_34045 = state_32116__$1;
(statearr_32163_34045[(2)] = inst_32068);

(statearr_32163_34045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (14))){
var inst_32085 = (state_32116[(19)]);
var state_32116__$1 = state_32116;
var statearr_32164_34046 = state_32116__$1;
(statearr_32164_34046[(2)] = inst_32085);

(statearr_32164_34046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (26))){
var inst_32104 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32165_34047 = state_32116__$1;
(statearr_32165_34047[(2)] = inst_32104);

(statearr_32165_34047[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (16))){
var inst_32096 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
if(cljs.core.truth_(inst_32096)){
var statearr_32170_34048 = state_32116__$1;
(statearr_32170_34048[(1)] = (20));

} else {
var statearr_32171_34049 = state_32116__$1;
(statearr_32171_34049[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (10))){
var inst_32110 = (state_32116[(2)]);
var state_32116__$1 = state_32116;
var statearr_32172_34050 = state_32116__$1;
(statearr_32172_34050[(2)] = inst_32110);

(statearr_32172_34050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (18))){
var inst_32088 = (state_32116[(16)]);
var state_32116__$1 = state_32116;
var statearr_32173_34051 = state_32116__$1;
(statearr_32173_34051[(2)] = inst_32088);

(statearr_32173_34051[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32117 === (8))){
var inst_32065 = (state_32116[(7)]);
var inst_32075 = (inst_32065 == null);
var state_32116__$1 = state_32116;
if(cljs.core.truth_(inst_32075)){
var statearr_32174_34052 = state_32116__$1;
(statearr_32174_34052[(1)] = (11));

} else {
var statearr_32175_34053 = state_32116__$1;
(statearr_32175_34053[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__30312__auto__ = null;
var cljs$core$async$mix_$_state_machine__30312__auto____0 = (function (){
var statearr_32179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32179[(0)] = cljs$core$async$mix_$_state_machine__30312__auto__);

(statearr_32179[(1)] = (1));

return statearr_32179;
});
var cljs$core$async$mix_$_state_machine__30312__auto____1 = (function (state_32116){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_32116);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e32180){var ex__30315__auto__ = e32180;
var statearr_32181_34054 = state_32116;
(statearr_32181_34054[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_32116[(4)]))){
var statearr_32182_34055 = state_32116;
(statearr_32182_34055[(1)] = cljs.core.first((state_32116[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34056 = state_32116;
state_32116 = G__34056;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30312__auto__ = function(state_32116){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30312__auto____1.call(this,state_32116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30312__auto____0;
cljs$core$async$mix_$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30312__auto____1;
return cljs$core$async$mix_$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_32183 = f__30818__auto__();
(statearr_32183[(6)] = c__30817__auto___34018);

return statearr_32183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34058 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34058(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34059 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34059(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34060 = (function() {
var G__34061 = null;
var G__34061__1 = (function (p){
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
var G__34061__2 = (function (p,v){
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
G__34061 = function(p,v){
switch(arguments.length){
case 1:
return G__34061__1.call(this,p);
case 2:
return G__34061__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34061.cljs$core$IFn$_invoke$arity$1 = G__34061__1;
G__34061.cljs$core$IFn$_invoke$arity$2 = G__34061__2;
return G__34061;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32204 = arguments.length;
switch (G__32204) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34060(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34060(p,v);
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
cljs.core.async.t_cljs$core$async32224 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32225){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32225 = meta32225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32226,meta32225__$1){
var self__ = this;
var _32226__$1 = this;
return (new cljs.core.async.t_cljs$core$async32224(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32225__$1));
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32226){
var self__ = this;
var _32226__$1 = this;
return self__.meta32225;
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32225","meta32225",-1519303991,null)], null);
}));

(cljs.core.async.t_cljs$core$async32224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32224");

(cljs.core.async.t_cljs$core$async32224.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async32224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32224.
 */
cljs.core.async.__GT_t_cljs$core$async32224 = (function cljs$core$async$__GT_t_cljs$core$async32224(ch,topic_fn,buf_fn,mults,ensure_mult,meta32225){
return (new cljs.core.async.t_cljs$core$async32224(ch,topic_fn,buf_fn,mults,ensure_mult,meta32225));
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
var G__32212 = arguments.length;
switch (G__32212) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32207_SHARP_){
if(cljs.core.truth_((p1__32207_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32207_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32207_SHARP_.call(null, topic)))){
return p1__32207_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32207_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32224(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30817__auto___34069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_32488){
var state_val_32489 = (state_32488[(1)]);
if((state_val_32489 === (7))){
var inst_32484 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32490_34070 = state_32488__$1;
(statearr_32490_34070[(2)] = inst_32484);

(statearr_32490_34070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (20))){
var state_32488__$1 = state_32488;
var statearr_32491_34071 = state_32488__$1;
(statearr_32491_34071[(2)] = null);

(statearr_32491_34071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (1))){
var state_32488__$1 = state_32488;
var statearr_32492_34072 = state_32488__$1;
(statearr_32492_34072[(2)] = null);

(statearr_32492_34072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (24))){
var inst_32467 = (state_32488[(7)]);
var inst_32476 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32467);
var state_32488__$1 = state_32488;
var statearr_32494_34073 = state_32488__$1;
(statearr_32494_34073[(2)] = inst_32476);

(statearr_32494_34073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (4))){
var inst_32261 = (state_32488[(8)]);
var inst_32261__$1 = (state_32488[(2)]);
var inst_32262 = (inst_32261__$1 == null);
var state_32488__$1 = (function (){var statearr_32495 = state_32488;
(statearr_32495[(8)] = inst_32261__$1);

return statearr_32495;
})();
if(cljs.core.truth_(inst_32262)){
var statearr_32496_34074 = state_32488__$1;
(statearr_32496_34074[(1)] = (5));

} else {
var statearr_32497_34075 = state_32488__$1;
(statearr_32497_34075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (15))){
var inst_32461 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32501_34076 = state_32488__$1;
(statearr_32501_34076[(2)] = inst_32461);

(statearr_32501_34076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (21))){
var inst_32481 = (state_32488[(2)]);
var state_32488__$1 = (function (){var statearr_32502 = state_32488;
(statearr_32502[(9)] = inst_32481);

return statearr_32502;
})();
var statearr_32503_34077 = state_32488__$1;
(statearr_32503_34077[(2)] = null);

(statearr_32503_34077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (13))){
var inst_32289 = (state_32488[(10)]);
var inst_32294 = cljs.core.chunked_seq_QMARK_(inst_32289);
var state_32488__$1 = state_32488;
if(inst_32294){
var statearr_32504_34078 = state_32488__$1;
(statearr_32504_34078[(1)] = (16));

} else {
var statearr_32505_34079 = state_32488__$1;
(statearr_32505_34079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (22))){
var inst_32473 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
if(cljs.core.truth_(inst_32473)){
var statearr_32506_34080 = state_32488__$1;
(statearr_32506_34080[(1)] = (23));

} else {
var statearr_32507_34081 = state_32488__$1;
(statearr_32507_34081[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (6))){
var inst_32467 = (state_32488[(7)]);
var inst_32261 = (state_32488[(8)]);
var inst_32469 = (state_32488[(11)]);
var inst_32467__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32261) : topic_fn.call(null, inst_32261));
var inst_32468 = cljs.core.deref(mults);
var inst_32469__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32468,inst_32467__$1);
var state_32488__$1 = (function (){var statearr_32508 = state_32488;
(statearr_32508[(7)] = inst_32467__$1);

(statearr_32508[(11)] = inst_32469__$1);

return statearr_32508;
})();
if(cljs.core.truth_(inst_32469__$1)){
var statearr_32509_34082 = state_32488__$1;
(statearr_32509_34082[(1)] = (19));

} else {
var statearr_32510_34083 = state_32488__$1;
(statearr_32510_34083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (25))){
var inst_32478 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32511_34084 = state_32488__$1;
(statearr_32511_34084[(2)] = inst_32478);

(statearr_32511_34084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (17))){
var inst_32289 = (state_32488[(10)]);
var inst_32311 = cljs.core.first(inst_32289);
var inst_32438 = cljs.core.async.muxch_STAR_(inst_32311);
var inst_32454 = cljs.core.async.close_BANG_(inst_32438);
var inst_32455 = cljs.core.next(inst_32289);
var inst_32274 = inst_32455;
var inst_32275 = null;
var inst_32276 = (0);
var inst_32277 = (0);
var state_32488__$1 = (function (){var statearr_32512 = state_32488;
(statearr_32512[(12)] = inst_32277);

(statearr_32512[(13)] = inst_32274);

(statearr_32512[(14)] = inst_32454);

(statearr_32512[(15)] = inst_32276);

(statearr_32512[(16)] = inst_32275);

return statearr_32512;
})();
var statearr_32514_34085 = state_32488__$1;
(statearr_32514_34085[(2)] = null);

(statearr_32514_34085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (3))){
var inst_32486 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32488__$1,inst_32486);
} else {
if((state_val_32489 === (12))){
var inst_32463 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32515_34086 = state_32488__$1;
(statearr_32515_34086[(2)] = inst_32463);

(statearr_32515_34086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (2))){
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32488__$1,(4),ch);
} else {
if((state_val_32489 === (23))){
var state_32488__$1 = state_32488;
var statearr_32516_34087 = state_32488__$1;
(statearr_32516_34087[(2)] = null);

(statearr_32516_34087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (19))){
var inst_32261 = (state_32488[(8)]);
var inst_32469 = (state_32488[(11)]);
var inst_32471 = cljs.core.async.muxch_STAR_(inst_32469);
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32488__$1,(22),inst_32471,inst_32261);
} else {
if((state_val_32489 === (11))){
var inst_32274 = (state_32488[(13)]);
var inst_32289 = (state_32488[(10)]);
var inst_32289__$1 = cljs.core.seq(inst_32274);
var state_32488__$1 = (function (){var statearr_32518 = state_32488;
(statearr_32518[(10)] = inst_32289__$1);

return statearr_32518;
})();
if(inst_32289__$1){
var statearr_32519_34088 = state_32488__$1;
(statearr_32519_34088[(1)] = (13));

} else {
var statearr_32520_34089 = state_32488__$1;
(statearr_32520_34089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (9))){
var inst_32465 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32521_34090 = state_32488__$1;
(statearr_32521_34090[(2)] = inst_32465);

(statearr_32521_34090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (5))){
var inst_32271 = cljs.core.deref(mults);
var inst_32272 = cljs.core.vals(inst_32271);
var inst_32273 = cljs.core.seq(inst_32272);
var inst_32274 = inst_32273;
var inst_32275 = null;
var inst_32276 = (0);
var inst_32277 = (0);
var state_32488__$1 = (function (){var statearr_32522 = state_32488;
(statearr_32522[(12)] = inst_32277);

(statearr_32522[(13)] = inst_32274);

(statearr_32522[(15)] = inst_32276);

(statearr_32522[(16)] = inst_32275);

return statearr_32522;
})();
var statearr_32523_34091 = state_32488__$1;
(statearr_32523_34091[(2)] = null);

(statearr_32523_34091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (14))){
var state_32488__$1 = state_32488;
var statearr_32527_34092 = state_32488__$1;
(statearr_32527_34092[(2)] = null);

(statearr_32527_34092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (16))){
var inst_32289 = (state_32488[(10)]);
var inst_32296 = cljs.core.chunk_first(inst_32289);
var inst_32298 = cljs.core.chunk_rest(inst_32289);
var inst_32299 = cljs.core.count(inst_32296);
var inst_32274 = inst_32298;
var inst_32275 = inst_32296;
var inst_32276 = inst_32299;
var inst_32277 = (0);
var state_32488__$1 = (function (){var statearr_32528 = state_32488;
(statearr_32528[(12)] = inst_32277);

(statearr_32528[(13)] = inst_32274);

(statearr_32528[(15)] = inst_32276);

(statearr_32528[(16)] = inst_32275);

return statearr_32528;
})();
var statearr_32529_34093 = state_32488__$1;
(statearr_32529_34093[(2)] = null);

(statearr_32529_34093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (10))){
var inst_32277 = (state_32488[(12)]);
var inst_32274 = (state_32488[(13)]);
var inst_32276 = (state_32488[(15)]);
var inst_32275 = (state_32488[(16)]);
var inst_32283 = cljs.core._nth(inst_32275,inst_32277);
var inst_32284 = cljs.core.async.muxch_STAR_(inst_32283);
var inst_32285 = cljs.core.async.close_BANG_(inst_32284);
var inst_32286 = (inst_32277 + (1));
var tmp32524 = inst_32274;
var tmp32525 = inst_32276;
var tmp32526 = inst_32275;
var inst_32274__$1 = tmp32524;
var inst_32275__$1 = tmp32526;
var inst_32276__$1 = tmp32525;
var inst_32277__$1 = inst_32286;
var state_32488__$1 = (function (){var statearr_32531 = state_32488;
(statearr_32531[(12)] = inst_32277__$1);

(statearr_32531[(13)] = inst_32274__$1);

(statearr_32531[(15)] = inst_32276__$1);

(statearr_32531[(16)] = inst_32275__$1);

(statearr_32531[(17)] = inst_32285);

return statearr_32531;
})();
var statearr_32532_34094 = state_32488__$1;
(statearr_32532_34094[(2)] = null);

(statearr_32532_34094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (18))){
var inst_32458 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32533_34095 = state_32488__$1;
(statearr_32533_34095[(2)] = inst_32458);

(statearr_32533_34095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (8))){
var inst_32277 = (state_32488[(12)]);
var inst_32276 = (state_32488[(15)]);
var inst_32279 = (inst_32277 < inst_32276);
var inst_32280 = inst_32279;
var state_32488__$1 = state_32488;
if(cljs.core.truth_(inst_32280)){
var statearr_32534_34096 = state_32488__$1;
(statearr_32534_34096[(1)] = (10));

} else {
var statearr_32535_34097 = state_32488__$1;
(statearr_32535_34097[(1)] = (11));

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
var cljs$core$async$state_machine__30312__auto__ = null;
var cljs$core$async$state_machine__30312__auto____0 = (function (){
var statearr_32536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32536[(0)] = cljs$core$async$state_machine__30312__auto__);

(statearr_32536[(1)] = (1));

return statearr_32536;
});
var cljs$core$async$state_machine__30312__auto____1 = (function (state_32488){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_32488);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e32537){var ex__30315__auto__ = e32537;
var statearr_32538_34098 = state_32488;
(statearr_32538_34098[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_32488[(4)]))){
var statearr_32539_34099 = state_32488;
(statearr_32539_34099[(1)] = cljs.core.first((state_32488[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34100 = state_32488;
state_32488 = G__34100;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$state_machine__30312__auto__ = function(state_32488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30312__auto____1.call(this,state_32488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30312__auto____0;
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30312__auto____1;
return cljs$core$async$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_32540 = f__30818__auto__();
(statearr_32540[(6)] = c__30817__auto___34069);

return statearr_32540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
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
var G__32544 = arguments.length;
switch (G__32544) {
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
var G__32546 = arguments.length;
switch (G__32546) {
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
var G__32549 = arguments.length;
switch (G__32549) {
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
var c__30817__auto___34104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_32626){
var state_val_32627 = (state_32626[(1)]);
if((state_val_32627 === (7))){
var state_32626__$1 = state_32626;
var statearr_32632_34106 = state_32626__$1;
(statearr_32632_34106[(2)] = null);

(statearr_32632_34106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (1))){
var state_32626__$1 = state_32626;
var statearr_32633_34107 = state_32626__$1;
(statearr_32633_34107[(2)] = null);

(statearr_32633_34107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (4))){
var inst_32555 = (state_32626[(7)]);
var inst_32554 = (state_32626[(8)]);
var inst_32557 = (inst_32555 < inst_32554);
var state_32626__$1 = state_32626;
if(cljs.core.truth_(inst_32557)){
var statearr_32634_34108 = state_32626__$1;
(statearr_32634_34108[(1)] = (6));

} else {
var statearr_32635_34109 = state_32626__$1;
(statearr_32635_34109[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (15))){
var inst_32600 = (state_32626[(9)]);
var inst_32605 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32600);
var state_32626__$1 = state_32626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32626__$1,(17),out,inst_32605);
} else {
if((state_val_32627 === (13))){
var inst_32600 = (state_32626[(9)]);
var inst_32600__$1 = (state_32626[(2)]);
var inst_32601 = cljs.core.some(cljs.core.nil_QMARK_,inst_32600__$1);
var state_32626__$1 = (function (){var statearr_32637 = state_32626;
(statearr_32637[(9)] = inst_32600__$1);

return statearr_32637;
})();
if(cljs.core.truth_(inst_32601)){
var statearr_32638_34110 = state_32626__$1;
(statearr_32638_34110[(1)] = (14));

} else {
var statearr_32639_34111 = state_32626__$1;
(statearr_32639_34111[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (6))){
var state_32626__$1 = state_32626;
var statearr_32640_34112 = state_32626__$1;
(statearr_32640_34112[(2)] = null);

(statearr_32640_34112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (17))){
var inst_32607 = (state_32626[(2)]);
var state_32626__$1 = (function (){var statearr_32650 = state_32626;
(statearr_32650[(10)] = inst_32607);

return statearr_32650;
})();
var statearr_32651_34113 = state_32626__$1;
(statearr_32651_34113[(2)] = null);

(statearr_32651_34113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (3))){
var inst_32612 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32626__$1,inst_32612);
} else {
if((state_val_32627 === (12))){
var _ = (function (){var statearr_32652 = state_32626;
(statearr_32652[(4)] = cljs.core.rest((state_32626[(4)])));

return statearr_32652;
})();
var state_32626__$1 = state_32626;
var ex32649 = (state_32626__$1[(2)]);
var statearr_32653_34114 = state_32626__$1;
(statearr_32653_34114[(5)] = ex32649);


if((ex32649 instanceof Object)){
var statearr_32654_34115 = state_32626__$1;
(statearr_32654_34115[(1)] = (11));

(statearr_32654_34115[(5)] = null);

} else {
throw ex32649;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (2))){
var inst_32553 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32554 = cnt;
var inst_32555 = (0);
var state_32626__$1 = (function (){var statearr_32658 = state_32626;
(statearr_32658[(7)] = inst_32555);

(statearr_32658[(8)] = inst_32554);

(statearr_32658[(11)] = inst_32553);

return statearr_32658;
})();
var statearr_32659_34116 = state_32626__$1;
(statearr_32659_34116[(2)] = null);

(statearr_32659_34116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (11))){
var inst_32571 = (state_32626[(2)]);
var inst_32572 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32626__$1 = (function (){var statearr_32660 = state_32626;
(statearr_32660[(12)] = inst_32571);

return statearr_32660;
})();
var statearr_32661_34117 = state_32626__$1;
(statearr_32661_34117[(2)] = inst_32572);

(statearr_32661_34117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (9))){
var inst_32555 = (state_32626[(7)]);
var _ = (function (){var statearr_32662 = state_32626;
(statearr_32662[(4)] = cljs.core.cons((12),(state_32626[(4)])));

return statearr_32662;
})();
var inst_32578 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32555) : chs__$1.call(null, inst_32555));
var inst_32583 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32555) : done.call(null, inst_32555));
var inst_32584 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32578,inst_32583);
var ___$1 = (function (){var statearr_32664 = state_32626;
(statearr_32664[(4)] = cljs.core.rest((state_32626[(4)])));

return statearr_32664;
})();
var state_32626__$1 = state_32626;
var statearr_32665_34118 = state_32626__$1;
(statearr_32665_34118[(2)] = inst_32584);

(statearr_32665_34118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (5))){
var inst_32594 = (state_32626[(2)]);
var state_32626__$1 = (function (){var statearr_32666 = state_32626;
(statearr_32666[(13)] = inst_32594);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32626__$1,(13),dchan);
} else {
if((state_val_32627 === (14))){
var inst_32603 = cljs.core.async.close_BANG_(out);
var state_32626__$1 = state_32626;
var statearr_32667_34119 = state_32626__$1;
(statearr_32667_34119[(2)] = inst_32603);

(statearr_32667_34119[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (16))){
var inst_32610 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32668_34120 = state_32626__$1;
(statearr_32668_34120[(2)] = inst_32610);

(statearr_32668_34120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (10))){
var inst_32555 = (state_32626[(7)]);
var inst_32587 = (state_32626[(2)]);
var inst_32588 = (inst_32555 + (1));
var inst_32555__$1 = inst_32588;
var state_32626__$1 = (function (){var statearr_32669 = state_32626;
(statearr_32669[(7)] = inst_32555__$1);

(statearr_32669[(14)] = inst_32587);

return statearr_32669;
})();
var statearr_32670_34121 = state_32626__$1;
(statearr_32670_34121[(2)] = null);

(statearr_32670_34121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (8))){
var inst_32592 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32671_34127 = state_32626__$1;
(statearr_32671_34127[(2)] = inst_32592);

(statearr_32671_34127[(1)] = (5));


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
var cljs$core$async$state_machine__30312__auto__ = null;
var cljs$core$async$state_machine__30312__auto____0 = (function (){
var statearr_32675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32675[(0)] = cljs$core$async$state_machine__30312__auto__);

(statearr_32675[(1)] = (1));

return statearr_32675;
});
var cljs$core$async$state_machine__30312__auto____1 = (function (state_32626){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_32626);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e32677){var ex__30315__auto__ = e32677;
var statearr_32678_34128 = state_32626;
(statearr_32678_34128[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_32626[(4)]))){
var statearr_32679_34129 = state_32626;
(statearr_32679_34129[(1)] = cljs.core.first((state_32626[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34130 = state_32626;
state_32626 = G__34130;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$state_machine__30312__auto__ = function(state_32626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30312__auto____1.call(this,state_32626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30312__auto____0;
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30312__auto____1;
return cljs$core$async$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_32685 = f__30818__auto__();
(statearr_32685[(6)] = c__30817__auto___34104);

return statearr_32685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
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
var G__32695 = arguments.length;
switch (G__32695) {
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
var c__30817__auto___34132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_32761){
var state_val_32762 = (state_32761[(1)]);
if((state_val_32762 === (7))){
var inst_32719 = (state_32761[(7)]);
var inst_32715 = (state_32761[(8)]);
var inst_32715__$1 = (state_32761[(2)]);
var inst_32719__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32715__$1,(0),null);
var inst_32720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32715__$1,(1),null);
var inst_32723 = (inst_32719__$1 == null);
var state_32761__$1 = (function (){var statearr_32768 = state_32761;
(statearr_32768[(7)] = inst_32719__$1);

(statearr_32768[(9)] = inst_32720);

(statearr_32768[(8)] = inst_32715__$1);

return statearr_32768;
})();
if(cljs.core.truth_(inst_32723)){
var statearr_32769_34133 = state_32761__$1;
(statearr_32769_34133[(1)] = (8));

} else {
var statearr_32770_34134 = state_32761__$1;
(statearr_32770_34134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (1))){
var inst_32705 = cljs.core.vec(chs);
var inst_32706 = inst_32705;
var state_32761__$1 = (function (){var statearr_32771 = state_32761;
(statearr_32771[(10)] = inst_32706);

return statearr_32771;
})();
var statearr_32772_34135 = state_32761__$1;
(statearr_32772_34135[(2)] = null);

(statearr_32772_34135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (4))){
var inst_32706 = (state_32761[(10)]);
var state_32761__$1 = state_32761;
return cljs.core.async.ioc_alts_BANG_(state_32761__$1,(7),inst_32706);
} else {
if((state_val_32762 === (6))){
var inst_32756 = (state_32761[(2)]);
var state_32761__$1 = state_32761;
var statearr_32775_34136 = state_32761__$1;
(statearr_32775_34136[(2)] = inst_32756);

(statearr_32775_34136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (3))){
var inst_32758 = (state_32761[(2)]);
var state_32761__$1 = state_32761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32761__$1,inst_32758);
} else {
if((state_val_32762 === (2))){
var inst_32706 = (state_32761[(10)]);
var inst_32708 = cljs.core.count(inst_32706);
var inst_32709 = (inst_32708 > (0));
var state_32761__$1 = state_32761;
if(cljs.core.truth_(inst_32709)){
var statearr_32777_34137 = state_32761__$1;
(statearr_32777_34137[(1)] = (4));

} else {
var statearr_32778_34138 = state_32761__$1;
(statearr_32778_34138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (11))){
var inst_32706 = (state_32761[(10)]);
var inst_32746 = (state_32761[(2)]);
var tmp32776 = inst_32706;
var inst_32706__$1 = tmp32776;
var state_32761__$1 = (function (){var statearr_32779 = state_32761;
(statearr_32779[(10)] = inst_32706__$1);

(statearr_32779[(11)] = inst_32746);

return statearr_32779;
})();
var statearr_32780_34139 = state_32761__$1;
(statearr_32780_34139[(2)] = null);

(statearr_32780_34139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (9))){
var inst_32719 = (state_32761[(7)]);
var state_32761__$1 = state_32761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32761__$1,(11),out,inst_32719);
} else {
if((state_val_32762 === (5))){
var inst_32754 = cljs.core.async.close_BANG_(out);
var state_32761__$1 = state_32761;
var statearr_32782_34140 = state_32761__$1;
(statearr_32782_34140[(2)] = inst_32754);

(statearr_32782_34140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (10))){
var inst_32749 = (state_32761[(2)]);
var state_32761__$1 = state_32761;
var statearr_32783_34141 = state_32761__$1;
(statearr_32783_34141[(2)] = inst_32749);

(statearr_32783_34141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32762 === (8))){
var inst_32719 = (state_32761[(7)]);
var inst_32720 = (state_32761[(9)]);
var inst_32715 = (state_32761[(8)]);
var inst_32706 = (state_32761[(10)]);
var inst_32729 = (function (){var cs = inst_32706;
var vec__32711 = inst_32715;
var v = inst_32719;
var c = inst_32720;
return (function (p1__32686_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32686_SHARP_);
});
})();
var inst_32730 = cljs.core.filterv(inst_32729,inst_32706);
var inst_32706__$1 = inst_32730;
var state_32761__$1 = (function (){var statearr_32786 = state_32761;
(statearr_32786[(10)] = inst_32706__$1);

return statearr_32786;
})();
var statearr_32787_34142 = state_32761__$1;
(statearr_32787_34142[(2)] = null);

(statearr_32787_34142[(1)] = (2));


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
var cljs$core$async$state_machine__30312__auto__ = null;
var cljs$core$async$state_machine__30312__auto____0 = (function (){
var statearr_32788 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32788[(0)] = cljs$core$async$state_machine__30312__auto__);

(statearr_32788[(1)] = (1));

return statearr_32788;
});
var cljs$core$async$state_machine__30312__auto____1 = (function (state_32761){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_32761);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e32789){var ex__30315__auto__ = e32789;
var statearr_32790_34143 = state_32761;
(statearr_32790_34143[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_32761[(4)]))){
var statearr_32791_34144 = state_32761;
(statearr_32791_34144[(1)] = cljs.core.first((state_32761[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34145 = state_32761;
state_32761 = G__34145;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$state_machine__30312__auto__ = function(state_32761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30312__auto____1.call(this,state_32761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30312__auto____0;
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30312__auto____1;
return cljs$core$async$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_32793 = f__30818__auto__();
(statearr_32793[(6)] = c__30817__auto___34132);

return statearr_32793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
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
var G__32801 = arguments.length;
switch (G__32801) {
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
var c__30817__auto___34147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_32825){
var state_val_32826 = (state_32825[(1)]);
if((state_val_32826 === (7))){
var inst_32807 = (state_32825[(7)]);
var inst_32807__$1 = (state_32825[(2)]);
var inst_32808 = (inst_32807__$1 == null);
var inst_32809 = cljs.core.not(inst_32808);
var state_32825__$1 = (function (){var statearr_32827 = state_32825;
(statearr_32827[(7)] = inst_32807__$1);

return statearr_32827;
})();
if(inst_32809){
var statearr_32828_34160 = state_32825__$1;
(statearr_32828_34160[(1)] = (8));

} else {
var statearr_32829_34161 = state_32825__$1;
(statearr_32829_34161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (1))){
var inst_32802 = (0);
var state_32825__$1 = (function (){var statearr_32830 = state_32825;
(statearr_32830[(8)] = inst_32802);

return statearr_32830;
})();
var statearr_32831_34162 = state_32825__$1;
(statearr_32831_34162[(2)] = null);

(statearr_32831_34162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (4))){
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32825__$1,(7),ch);
} else {
if((state_val_32826 === (6))){
var inst_32820 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32832_34164 = state_32825__$1;
(statearr_32832_34164[(2)] = inst_32820);

(statearr_32832_34164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (3))){
var inst_32822 = (state_32825[(2)]);
var inst_32823 = cljs.core.async.close_BANG_(out);
var state_32825__$1 = (function (){var statearr_32833 = state_32825;
(statearr_32833[(9)] = inst_32822);

return statearr_32833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32825__$1,inst_32823);
} else {
if((state_val_32826 === (2))){
var inst_32802 = (state_32825[(8)]);
var inst_32804 = (inst_32802 < n);
var state_32825__$1 = state_32825;
if(cljs.core.truth_(inst_32804)){
var statearr_32834_34165 = state_32825__$1;
(statearr_32834_34165[(1)] = (4));

} else {
var statearr_32835_34166 = state_32825__$1;
(statearr_32835_34166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (11))){
var inst_32802 = (state_32825[(8)]);
var inst_32812 = (state_32825[(2)]);
var inst_32813 = (inst_32802 + (1));
var inst_32802__$1 = inst_32813;
var state_32825__$1 = (function (){var statearr_32836 = state_32825;
(statearr_32836[(8)] = inst_32802__$1);

(statearr_32836[(10)] = inst_32812);

return statearr_32836;
})();
var statearr_32837_34167 = state_32825__$1;
(statearr_32837_34167[(2)] = null);

(statearr_32837_34167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (9))){
var state_32825__$1 = state_32825;
var statearr_32838_34168 = state_32825__$1;
(statearr_32838_34168[(2)] = null);

(statearr_32838_34168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (5))){
var state_32825__$1 = state_32825;
var statearr_32839_34169 = state_32825__$1;
(statearr_32839_34169[(2)] = null);

(statearr_32839_34169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (10))){
var inst_32817 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32840_34170 = state_32825__$1;
(statearr_32840_34170[(2)] = inst_32817);

(statearr_32840_34170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (8))){
var inst_32807 = (state_32825[(7)]);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32825__$1,(11),out,inst_32807);
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
var cljs$core$async$state_machine__30312__auto__ = null;
var cljs$core$async$state_machine__30312__auto____0 = (function (){
var statearr_32841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32841[(0)] = cljs$core$async$state_machine__30312__auto__);

(statearr_32841[(1)] = (1));

return statearr_32841;
});
var cljs$core$async$state_machine__30312__auto____1 = (function (state_32825){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_32825);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e32842){var ex__30315__auto__ = e32842;
var statearr_32843_34171 = state_32825;
(statearr_32843_34171[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_32825[(4)]))){
var statearr_32844_34172 = state_32825;
(statearr_32844_34172[(1)] = cljs.core.first((state_32825[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34173 = state_32825;
state_32825 = G__34173;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$state_machine__30312__auto__ = function(state_32825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30312__auto____1.call(this,state_32825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30312__auto____0;
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30312__auto____1;
return cljs$core$async$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_32845 = f__30818__auto__();
(statearr_32845[(6)] = c__30817__auto___34147);

return statearr_32845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
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
cljs.core.async.t_cljs$core$async32856 = (function (f,ch,meta32848,_,fn1,meta32857){
this.f = f;
this.ch = ch;
this.meta32848 = meta32848;
this._ = _;
this.fn1 = fn1;
this.meta32857 = meta32857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32858,meta32857__$1){
var self__ = this;
var _32858__$1 = this;
return (new cljs.core.async.t_cljs$core$async32856(self__.f,self__.ch,self__.meta32848,self__._,self__.fn1,meta32857__$1));
}));

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32858){
var self__ = this;
var _32858__$1 = this;
return self__.meta32857;
}));

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32846_SHARP_){
var G__32863 = (((p1__32846_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32846_SHARP_) : self__.f.call(null, p1__32846_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32863) : f1.call(null, G__32863));
});
}));

(cljs.core.async.t_cljs$core$async32856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32848","meta32848",-719579430,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32847","cljs.core.async/t_cljs$core$async32847",-1424387448,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32857","meta32857",-733726070,null)], null);
}));

(cljs.core.async.t_cljs$core$async32856.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32856");

(cljs.core.async.t_cljs$core$async32856.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async32856");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32856.
 */
cljs.core.async.__GT_t_cljs$core$async32856 = (function cljs$core$async$__GT_t_cljs$core$async32856(f,ch,meta32848,_,fn1,meta32857){
return (new cljs.core.async.t_cljs$core$async32856(f,ch,meta32848,_,fn1,meta32857));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32847 = (function (f,ch,meta32848){
this.f = f;
this.ch = ch;
this.meta32848 = meta32848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32849,meta32848__$1){
var self__ = this;
var _32849__$1 = this;
return (new cljs.core.async.t_cljs$core$async32847(self__.f,self__.ch,meta32848__$1));
}));

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32849){
var self__ = this;
var _32849__$1 = this;
return self__.meta32848;
}));

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async32856(self__.f,self__.ch,self__.meta32848,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32867 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32867) : self__.f.call(null, G__32867));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32847.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32848","meta32848",-719579430,null)], null);
}));

(cljs.core.async.t_cljs$core$async32847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32847");

(cljs.core.async.t_cljs$core$async32847.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async32847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32847.
 */
cljs.core.async.__GT_t_cljs$core$async32847 = (function cljs$core$async$__GT_t_cljs$core$async32847(f,ch,meta32848){
return (new cljs.core.async.t_cljs$core$async32847(f,ch,meta32848));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32847(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32872 = (function (f,ch,meta32873){
this.f = f;
this.ch = ch;
this.meta32873 = meta32873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32874,meta32873__$1){
var self__ = this;
var _32874__$1 = this;
return (new cljs.core.async.t_cljs$core$async32872(self__.f,self__.ch,meta32873__$1));
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32874){
var self__ = this;
var _32874__$1 = this;
return self__.meta32873;
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32873","meta32873",-390423625,null)], null);
}));

(cljs.core.async.t_cljs$core$async32872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32872");

(cljs.core.async.t_cljs$core$async32872.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async32872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32872.
 */
cljs.core.async.__GT_t_cljs$core$async32872 = (function cljs$core$async$__GT_t_cljs$core$async32872(f,ch,meta32873){
return (new cljs.core.async.t_cljs$core$async32872(f,ch,meta32873));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32872(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32881 = (function (p,ch,meta32882){
this.p = p;
this.ch = ch;
this.meta32882 = meta32882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32883,meta32882__$1){
var self__ = this;
var _32883__$1 = this;
return (new cljs.core.async.t_cljs$core$async32881(self__.p,self__.ch,meta32882__$1));
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32883){
var self__ = this;
var _32883__$1 = this;
return self__.meta32882;
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32882","meta32882",-802387854,null)], null);
}));

(cljs.core.async.t_cljs$core$async32881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32881");

(cljs.core.async.t_cljs$core$async32881.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async32881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32881.
 */
cljs.core.async.__GT_t_cljs$core$async32881 = (function cljs$core$async$__GT_t_cljs$core$async32881(p,ch,meta32882){
return (new cljs.core.async.t_cljs$core$async32881(p,ch,meta32882));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async32881(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32892 = arguments.length;
switch (G__32892) {
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
var c__30817__auto___34187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_32919){
var state_val_32920 = (state_32919[(1)]);
if((state_val_32920 === (7))){
var inst_32909 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
var statearr_32925_34191 = state_32919__$1;
(statearr_32925_34191[(2)] = inst_32909);

(statearr_32925_34191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (1))){
var state_32919__$1 = state_32919;
var statearr_32932_34192 = state_32919__$1;
(statearr_32932_34192[(2)] = null);

(statearr_32932_34192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (4))){
var inst_32895 = (state_32919[(7)]);
var inst_32895__$1 = (state_32919[(2)]);
var inst_32896 = (inst_32895__$1 == null);
var state_32919__$1 = (function (){var statearr_32933 = state_32919;
(statearr_32933[(7)] = inst_32895__$1);

return statearr_32933;
})();
if(cljs.core.truth_(inst_32896)){
var statearr_32940_34193 = state_32919__$1;
(statearr_32940_34193[(1)] = (5));

} else {
var statearr_32941_34194 = state_32919__$1;
(statearr_32941_34194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (6))){
var inst_32895 = (state_32919[(7)]);
var inst_32900 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32895) : p.call(null, inst_32895));
var state_32919__$1 = state_32919;
if(cljs.core.truth_(inst_32900)){
var statearr_32942_34195 = state_32919__$1;
(statearr_32942_34195[(1)] = (8));

} else {
var statearr_32943_34196 = state_32919__$1;
(statearr_32943_34196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (3))){
var inst_32911 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32919__$1,inst_32911);
} else {
if((state_val_32920 === (2))){
var state_32919__$1 = state_32919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32919__$1,(4),ch);
} else {
if((state_val_32920 === (11))){
var inst_32903 = (state_32919[(2)]);
var state_32919__$1 = state_32919;
var statearr_32951_34197 = state_32919__$1;
(statearr_32951_34197[(2)] = inst_32903);

(statearr_32951_34197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (9))){
var state_32919__$1 = state_32919;
var statearr_32955_34198 = state_32919__$1;
(statearr_32955_34198[(2)] = null);

(statearr_32955_34198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (5))){
var inst_32898 = cljs.core.async.close_BANG_(out);
var state_32919__$1 = state_32919;
var statearr_32956_34199 = state_32919__$1;
(statearr_32956_34199[(2)] = inst_32898);

(statearr_32956_34199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (10))){
var inst_32906 = (state_32919[(2)]);
var state_32919__$1 = (function (){var statearr_32957 = state_32919;
(statearr_32957[(8)] = inst_32906);

return statearr_32957;
})();
var statearr_32958_34200 = state_32919__$1;
(statearr_32958_34200[(2)] = null);

(statearr_32958_34200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32920 === (8))){
var inst_32895 = (state_32919[(7)]);
var state_32919__$1 = state_32919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32919__$1,(11),out,inst_32895);
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
var cljs$core$async$state_machine__30312__auto__ = null;
var cljs$core$async$state_machine__30312__auto____0 = (function (){
var statearr_32962 = [null,null,null,null,null,null,null,null,null];
(statearr_32962[(0)] = cljs$core$async$state_machine__30312__auto__);

(statearr_32962[(1)] = (1));

return statearr_32962;
});
var cljs$core$async$state_machine__30312__auto____1 = (function (state_32919){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_32919);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e32963){var ex__30315__auto__ = e32963;
var statearr_32964_34201 = state_32919;
(statearr_32964_34201[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_32919[(4)]))){
var statearr_32965_34202 = state_32919;
(statearr_32965_34202[(1)] = cljs.core.first((state_32919[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34203 = state_32919;
state_32919 = G__34203;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$state_machine__30312__auto__ = function(state_32919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30312__auto____1.call(this,state_32919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30312__auto____0;
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30312__auto____1;
return cljs$core$async$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_32967 = f__30818__auto__();
(statearr_32967[(6)] = c__30817__auto___34187);

return statearr_32967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32974 = arguments.length;
switch (G__32974) {
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
var c__30817__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_33044){
var state_val_33046 = (state_33044[(1)]);
if((state_val_33046 === (7))){
var inst_33040 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33048_34205 = state_33044__$1;
(statearr_33048_34205[(2)] = inst_33040);

(statearr_33048_34205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (20))){
var inst_33008 = (state_33044[(7)]);
var inst_33021 = (state_33044[(2)]);
var inst_33022 = cljs.core.next(inst_33008);
var inst_32988 = inst_33022;
var inst_32989 = null;
var inst_32990 = (0);
var inst_32991 = (0);
var state_33044__$1 = (function (){var statearr_33049 = state_33044;
(statearr_33049[(8)] = inst_32989);

(statearr_33049[(9)] = inst_32991);

(statearr_33049[(10)] = inst_32988);

(statearr_33049[(11)] = inst_33021);

(statearr_33049[(12)] = inst_32990);

return statearr_33049;
})();
var statearr_33050_34206 = state_33044__$1;
(statearr_33050_34206[(2)] = null);

(statearr_33050_34206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (1))){
var state_33044__$1 = state_33044;
var statearr_33051_34207 = state_33044__$1;
(statearr_33051_34207[(2)] = null);

(statearr_33051_34207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (4))){
var inst_32977 = (state_33044[(13)]);
var inst_32977__$1 = (state_33044[(2)]);
var inst_32978 = (inst_32977__$1 == null);
var state_33044__$1 = (function (){var statearr_33052 = state_33044;
(statearr_33052[(13)] = inst_32977__$1);

return statearr_33052;
})();
if(cljs.core.truth_(inst_32978)){
var statearr_33053_34208 = state_33044__$1;
(statearr_33053_34208[(1)] = (5));

} else {
var statearr_33054_34209 = state_33044__$1;
(statearr_33054_34209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (15))){
var state_33044__$1 = state_33044;
var statearr_33058_34210 = state_33044__$1;
(statearr_33058_34210[(2)] = null);

(statearr_33058_34210[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (21))){
var state_33044__$1 = state_33044;
var statearr_33059_34211 = state_33044__$1;
(statearr_33059_34211[(2)] = null);

(statearr_33059_34211[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (13))){
var inst_32989 = (state_33044[(8)]);
var inst_32991 = (state_33044[(9)]);
var inst_32988 = (state_33044[(10)]);
var inst_32990 = (state_33044[(12)]);
var inst_33002 = (state_33044[(2)]);
var inst_33004 = (inst_32991 + (1));
var tmp33055 = inst_32989;
var tmp33056 = inst_32988;
var tmp33057 = inst_32990;
var inst_32988__$1 = tmp33056;
var inst_32989__$1 = tmp33055;
var inst_32990__$1 = tmp33057;
var inst_32991__$1 = inst_33004;
var state_33044__$1 = (function (){var statearr_33060 = state_33044;
(statearr_33060[(8)] = inst_32989__$1);

(statearr_33060[(9)] = inst_32991__$1);

(statearr_33060[(14)] = inst_33002);

(statearr_33060[(10)] = inst_32988__$1);

(statearr_33060[(12)] = inst_32990__$1);

return statearr_33060;
})();
var statearr_33061_34212 = state_33044__$1;
(statearr_33061_34212[(2)] = null);

(statearr_33061_34212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (22))){
var state_33044__$1 = state_33044;
var statearr_33062_34213 = state_33044__$1;
(statearr_33062_34213[(2)] = null);

(statearr_33062_34213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (6))){
var inst_32977 = (state_33044[(13)]);
var inst_32986 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32977) : f.call(null, inst_32977));
var inst_32987 = cljs.core.seq(inst_32986);
var inst_32988 = inst_32987;
var inst_32989 = null;
var inst_32990 = (0);
var inst_32991 = (0);
var state_33044__$1 = (function (){var statearr_33094 = state_33044;
(statearr_33094[(8)] = inst_32989);

(statearr_33094[(9)] = inst_32991);

(statearr_33094[(10)] = inst_32988);

(statearr_33094[(12)] = inst_32990);

return statearr_33094;
})();
var statearr_33095_34214 = state_33044__$1;
(statearr_33095_34214[(2)] = null);

(statearr_33095_34214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (17))){
var inst_33008 = (state_33044[(7)]);
var inst_33014 = cljs.core.chunk_first(inst_33008);
var inst_33015 = cljs.core.chunk_rest(inst_33008);
var inst_33016 = cljs.core.count(inst_33014);
var inst_32988 = inst_33015;
var inst_32989 = inst_33014;
var inst_32990 = inst_33016;
var inst_32991 = (0);
var state_33044__$1 = (function (){var statearr_33127 = state_33044;
(statearr_33127[(8)] = inst_32989);

(statearr_33127[(9)] = inst_32991);

(statearr_33127[(10)] = inst_32988);

(statearr_33127[(12)] = inst_32990);

return statearr_33127;
})();
var statearr_33128_34215 = state_33044__$1;
(statearr_33128_34215[(2)] = null);

(statearr_33128_34215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (3))){
var inst_33042 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33044__$1,inst_33042);
} else {
if((state_val_33046 === (12))){
var inst_33030 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33143_34219 = state_33044__$1;
(statearr_33143_34219[(2)] = inst_33030);

(statearr_33143_34219[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (2))){
var state_33044__$1 = state_33044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33044__$1,(4),in$);
} else {
if((state_val_33046 === (23))){
var inst_33038 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33144_34220 = state_33044__$1;
(statearr_33144_34220[(2)] = inst_33038);

(statearr_33144_34220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (19))){
var inst_33025 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33146_34221 = state_33044__$1;
(statearr_33146_34221[(2)] = inst_33025);

(statearr_33146_34221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (11))){
var inst_33008 = (state_33044[(7)]);
var inst_32988 = (state_33044[(10)]);
var inst_33008__$1 = cljs.core.seq(inst_32988);
var state_33044__$1 = (function (){var statearr_33148 = state_33044;
(statearr_33148[(7)] = inst_33008__$1);

return statearr_33148;
})();
if(inst_33008__$1){
var statearr_33149_34222 = state_33044__$1;
(statearr_33149_34222[(1)] = (14));

} else {
var statearr_33150_34223 = state_33044__$1;
(statearr_33150_34223[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (9))){
var inst_33032 = (state_33044[(2)]);
var inst_33033 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33044__$1 = (function (){var statearr_33152 = state_33044;
(statearr_33152[(15)] = inst_33032);

return statearr_33152;
})();
if(cljs.core.truth_(inst_33033)){
var statearr_33156_34224 = state_33044__$1;
(statearr_33156_34224[(1)] = (21));

} else {
var statearr_33157_34225 = state_33044__$1;
(statearr_33157_34225[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (5))){
var inst_32980 = cljs.core.async.close_BANG_(out);
var state_33044__$1 = state_33044;
var statearr_33161_34226 = state_33044__$1;
(statearr_33161_34226[(2)] = inst_32980);

(statearr_33161_34226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (14))){
var inst_33008 = (state_33044[(7)]);
var inst_33012 = cljs.core.chunked_seq_QMARK_(inst_33008);
var state_33044__$1 = state_33044;
if(inst_33012){
var statearr_33162_34227 = state_33044__$1;
(statearr_33162_34227[(1)] = (17));

} else {
var statearr_33163_34228 = state_33044__$1;
(statearr_33163_34228[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (16))){
var inst_33028 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33164_34229 = state_33044__$1;
(statearr_33164_34229[(2)] = inst_33028);

(statearr_33164_34229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33046 === (10))){
var inst_32989 = (state_33044[(8)]);
var inst_32991 = (state_33044[(9)]);
var inst_32996 = cljs.core._nth(inst_32989,inst_32991);
var state_33044__$1 = state_33044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33044__$1,(13),out,inst_32996);
} else {
if((state_val_33046 === (18))){
var inst_33008 = (state_33044[(7)]);
var inst_33019 = cljs.core.first(inst_33008);
var state_33044__$1 = state_33044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33044__$1,(20),out,inst_33019);
} else {
if((state_val_33046 === (8))){
var inst_32991 = (state_33044[(9)]);
var inst_32990 = (state_33044[(12)]);
var inst_32993 = (inst_32991 < inst_32990);
var inst_32994 = inst_32993;
var state_33044__$1 = state_33044;
if(cljs.core.truth_(inst_32994)){
var statearr_33165_34230 = state_33044__$1;
(statearr_33165_34230[(1)] = (10));

} else {
var statearr_33166_34231 = state_33044__$1;
(statearr_33166_34231[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30312__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30312__auto____0 = (function (){
var statearr_33167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33167[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30312__auto__);

(statearr_33167[(1)] = (1));

return statearr_33167;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30312__auto____1 = (function (state_33044){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_33044);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e33169){var ex__30315__auto__ = e33169;
var statearr_33170_34232 = state_33044;
(statearr_33170_34232[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_33044[(4)]))){
var statearr_33171_34233 = state_33044;
(statearr_33171_34233[(1)] = cljs.core.first((state_33044[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34234 = state_33044;
state_33044 = G__34234;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30312__auto__ = function(state_33044){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30312__auto____1.call(this,state_33044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30312__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30312__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_33172 = f__30818__auto__();
(statearr_33172[(6)] = c__30817__auto__);

return statearr_33172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));

return c__30817__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33174 = arguments.length;
switch (G__33174) {
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
var G__33181 = arguments.length;
switch (G__33181) {
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
var G__33187 = arguments.length;
switch (G__33187) {
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
var c__30817__auto___34238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_33283){
var state_val_33284 = (state_33283[(1)]);
if((state_val_33284 === (7))){
var inst_33255 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33288_34239 = state_33283__$1;
(statearr_33288_34239[(2)] = inst_33255);

(statearr_33288_34239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (1))){
var inst_33206 = null;
var state_33283__$1 = (function (){var statearr_33289 = state_33283;
(statearr_33289[(7)] = inst_33206);

return statearr_33289;
})();
var statearr_33290_34240 = state_33283__$1;
(statearr_33290_34240[(2)] = null);

(statearr_33290_34240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (4))){
var inst_33240 = (state_33283[(8)]);
var inst_33240__$1 = (state_33283[(2)]);
var inst_33241 = (inst_33240__$1 == null);
var inst_33242 = cljs.core.not(inst_33241);
var state_33283__$1 = (function (){var statearr_33291 = state_33283;
(statearr_33291[(8)] = inst_33240__$1);

return statearr_33291;
})();
if(inst_33242){
var statearr_33292_34241 = state_33283__$1;
(statearr_33292_34241[(1)] = (5));

} else {
var statearr_33293_34242 = state_33283__$1;
(statearr_33293_34242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (6))){
var state_33283__$1 = state_33283;
var statearr_33294_34243 = state_33283__$1;
(statearr_33294_34243[(2)] = null);

(statearr_33294_34243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (3))){
var inst_33257 = (state_33283[(2)]);
var inst_33258 = cljs.core.async.close_BANG_(out);
var state_33283__$1 = (function (){var statearr_33298 = state_33283;
(statearr_33298[(9)] = inst_33257);

return statearr_33298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33283__$1,inst_33258);
} else {
if((state_val_33284 === (2))){
var state_33283__$1 = state_33283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33283__$1,(4),ch);
} else {
if((state_val_33284 === (11))){
var inst_33240 = (state_33283[(8)]);
var inst_33249 = (state_33283[(2)]);
var inst_33206 = inst_33240;
var state_33283__$1 = (function (){var statearr_33302 = state_33283;
(statearr_33302[(10)] = inst_33249);

(statearr_33302[(7)] = inst_33206);

return statearr_33302;
})();
var statearr_33303_34244 = state_33283__$1;
(statearr_33303_34244[(2)] = null);

(statearr_33303_34244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (9))){
var inst_33240 = (state_33283[(8)]);
var state_33283__$1 = state_33283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33283__$1,(11),out,inst_33240);
} else {
if((state_val_33284 === (5))){
var inst_33240 = (state_33283[(8)]);
var inst_33206 = (state_33283[(7)]);
var inst_33244 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33240,inst_33206);
var state_33283__$1 = state_33283;
if(inst_33244){
var statearr_33305_34245 = state_33283__$1;
(statearr_33305_34245[(1)] = (8));

} else {
var statearr_33306_34246 = state_33283__$1;
(statearr_33306_34246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (10))){
var inst_33252 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33307_34247 = state_33283__$1;
(statearr_33307_34247[(2)] = inst_33252);

(statearr_33307_34247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (8))){
var inst_33206 = (state_33283[(7)]);
var tmp33304 = inst_33206;
var inst_33206__$1 = tmp33304;
var state_33283__$1 = (function (){var statearr_33308 = state_33283;
(statearr_33308[(7)] = inst_33206__$1);

return statearr_33308;
})();
var statearr_33309_34248 = state_33283__$1;
(statearr_33309_34248[(2)] = null);

(statearr_33309_34248[(1)] = (2));


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
var cljs$core$async$state_machine__30312__auto__ = null;
var cljs$core$async$state_machine__30312__auto____0 = (function (){
var statearr_33312 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33312[(0)] = cljs$core$async$state_machine__30312__auto__);

(statearr_33312[(1)] = (1));

return statearr_33312;
});
var cljs$core$async$state_machine__30312__auto____1 = (function (state_33283){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_33283);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e33313){var ex__30315__auto__ = e33313;
var statearr_33314_34249 = state_33283;
(statearr_33314_34249[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_33283[(4)]))){
var statearr_33315_34250 = state_33283;
(statearr_33315_34250[(1)] = cljs.core.first((state_33283[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34251 = state_33283;
state_33283 = G__34251;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$state_machine__30312__auto__ = function(state_33283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30312__auto____1.call(this,state_33283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30312__auto____0;
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30312__auto____1;
return cljs$core$async$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_33316 = f__30818__auto__();
(statearr_33316[(6)] = c__30817__auto___34238);

return statearr_33316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33318 = arguments.length;
switch (G__33318) {
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
var c__30817__auto___34253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_33360){
var state_val_33361 = (state_33360[(1)]);
if((state_val_33361 === (7))){
var inst_33356 = (state_33360[(2)]);
var state_33360__$1 = state_33360;
var statearr_33362_34257 = state_33360__$1;
(statearr_33362_34257[(2)] = inst_33356);

(statearr_33362_34257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33361 === (1))){
var inst_33323 = (new Array(n));
var inst_33324 = inst_33323;
var inst_33325 = (0);
var state_33360__$1 = (function (){var statearr_33363 = state_33360;
(statearr_33363[(7)] = inst_33325);

(statearr_33363[(8)] = inst_33324);

return statearr_33363;
})();
var statearr_33364_34258 = state_33360__$1;
(statearr_33364_34258[(2)] = null);

(statearr_33364_34258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33361 === (4))){
var inst_33328 = (state_33360[(9)]);
var inst_33328__$1 = (state_33360[(2)]);
var inst_33329 = (inst_33328__$1 == null);
var inst_33330 = cljs.core.not(inst_33329);
var state_33360__$1 = (function (){var statearr_33365 = state_33360;
(statearr_33365[(9)] = inst_33328__$1);

return statearr_33365;
})();
if(inst_33330){
var statearr_33366_34259 = state_33360__$1;
(statearr_33366_34259[(1)] = (5));

} else {
var statearr_33367_34260 = state_33360__$1;
(statearr_33367_34260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33361 === (15))){
var inst_33350 = (state_33360[(2)]);
var state_33360__$1 = state_33360;
var statearr_33368_34261 = state_33360__$1;
(statearr_33368_34261[(2)] = inst_33350);

(statearr_33368_34261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33361 === (13))){
var state_33360__$1 = state_33360;
var statearr_33371_34262 = state_33360__$1;
(statearr_33371_34262[(2)] = null);

(statearr_33371_34262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33361 === (6))){
var inst_33325 = (state_33360[(7)]);
var inst_33346 = (inst_33325 > (0));
var state_33360__$1 = state_33360;
if(cljs.core.truth_(inst_33346)){
var statearr_33378_34263 = state_33360__$1;
(statearr_33378_34263[(1)] = (12));

} else {
var statearr_33379_34264 = state_33360__$1;
(statearr_33379_34264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33361 === (3))){
var inst_33358 = (state_33360[(2)]);
var state_33360__$1 = state_33360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33360__$1,inst_33358);
} else {
if((state_val_33361 === (12))){
var inst_33324 = (state_33360[(8)]);
var inst_33348 = cljs.core.vec(inst_33324);
var state_33360__$1 = state_33360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33360__$1,(15),out,inst_33348);
} else {
if((state_val_33361 === (2))){
var state_33360__$1 = state_33360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33360__$1,(4),ch);
} else {
if((state_val_33361 === (11))){
var inst_33340 = (state_33360[(2)]);
var inst_33341 = (new Array(n));
var inst_33324 = inst_33341;
var inst_33325 = (0);
var state_33360__$1 = (function (){var statearr_33383 = state_33360;
(statearr_33383[(7)] = inst_33325);

(statearr_33383[(8)] = inst_33324);

(statearr_33383[(10)] = inst_33340);

return statearr_33383;
})();
var statearr_33384_34265 = state_33360__$1;
(statearr_33384_34265[(2)] = null);

(statearr_33384_34265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33361 === (9))){
var inst_33324 = (state_33360[(8)]);
var inst_33338 = cljs.core.vec(inst_33324);
var state_33360__$1 = state_33360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33360__$1,(11),out,inst_33338);
} else {
if((state_val_33361 === (5))){
var inst_33328 = (state_33360[(9)]);
var inst_33325 = (state_33360[(7)]);
var inst_33324 = (state_33360[(8)]);
var inst_33333 = (state_33360[(11)]);
var inst_33332 = (inst_33324[inst_33325] = inst_33328);
var inst_33333__$1 = (inst_33325 + (1));
var inst_33334 = (inst_33333__$1 < n);
var state_33360__$1 = (function (){var statearr_33385 = state_33360;
(statearr_33385[(12)] = inst_33332);

(statearr_33385[(11)] = inst_33333__$1);

return statearr_33385;
})();
if(cljs.core.truth_(inst_33334)){
var statearr_33386_34266 = state_33360__$1;
(statearr_33386_34266[(1)] = (8));

} else {
var statearr_33387_34267 = state_33360__$1;
(statearr_33387_34267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33361 === (14))){
var inst_33353 = (state_33360[(2)]);
var inst_33354 = cljs.core.async.close_BANG_(out);
var state_33360__$1 = (function (){var statearr_33389 = state_33360;
(statearr_33389[(13)] = inst_33353);

return statearr_33389;
})();
var statearr_33390_34268 = state_33360__$1;
(statearr_33390_34268[(2)] = inst_33354);

(statearr_33390_34268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33361 === (10))){
var inst_33344 = (state_33360[(2)]);
var state_33360__$1 = state_33360;
var statearr_33391_34269 = state_33360__$1;
(statearr_33391_34269[(2)] = inst_33344);

(statearr_33391_34269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33361 === (8))){
var inst_33324 = (state_33360[(8)]);
var inst_33333 = (state_33360[(11)]);
var tmp33388 = inst_33324;
var inst_33324__$1 = tmp33388;
var inst_33325 = inst_33333;
var state_33360__$1 = (function (){var statearr_33392 = state_33360;
(statearr_33392[(7)] = inst_33325);

(statearr_33392[(8)] = inst_33324__$1);

return statearr_33392;
})();
var statearr_33393_34270 = state_33360__$1;
(statearr_33393_34270[(2)] = null);

(statearr_33393_34270[(1)] = (2));


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
var cljs$core$async$state_machine__30312__auto__ = null;
var cljs$core$async$state_machine__30312__auto____0 = (function (){
var statearr_33394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33394[(0)] = cljs$core$async$state_machine__30312__auto__);

(statearr_33394[(1)] = (1));

return statearr_33394;
});
var cljs$core$async$state_machine__30312__auto____1 = (function (state_33360){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_33360);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e33395){var ex__30315__auto__ = e33395;
var statearr_33396_34271 = state_33360;
(statearr_33396_34271[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_33360[(4)]))){
var statearr_33397_34272 = state_33360;
(statearr_33397_34272[(1)] = cljs.core.first((state_33360[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34273 = state_33360;
state_33360 = G__34273;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$state_machine__30312__auto__ = function(state_33360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30312__auto____1.call(this,state_33360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30312__auto____0;
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30312__auto____1;
return cljs$core$async$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_33398 = f__30818__auto__();
(statearr_33398[(6)] = c__30817__auto___34253);

return statearr_33398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33400 = arguments.length;
switch (G__33400) {
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
var c__30817__auto___34275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30818__auto__ = (function (){var switch__30308__auto__ = (function (state_33447){
var state_val_33448 = (state_33447[(1)]);
if((state_val_33448 === (7))){
var inst_33443 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33449_34276 = state_33447__$1;
(statearr_33449_34276[(2)] = inst_33443);

(statearr_33449_34276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (1))){
var inst_33402 = [];
var inst_33403 = inst_33402;
var inst_33404 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33447__$1 = (function (){var statearr_33450 = state_33447;
(statearr_33450[(7)] = inst_33404);

(statearr_33450[(8)] = inst_33403);

return statearr_33450;
})();
var statearr_33451_34277 = state_33447__$1;
(statearr_33451_34277[(2)] = null);

(statearr_33451_34277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (4))){
var inst_33407 = (state_33447[(9)]);
var inst_33407__$1 = (state_33447[(2)]);
var inst_33409 = (inst_33407__$1 == null);
var inst_33410 = cljs.core.not(inst_33409);
var state_33447__$1 = (function (){var statearr_33453 = state_33447;
(statearr_33453[(9)] = inst_33407__$1);

return statearr_33453;
})();
if(inst_33410){
var statearr_33455_34278 = state_33447__$1;
(statearr_33455_34278[(1)] = (5));

} else {
var statearr_33456_34279 = state_33447__$1;
(statearr_33456_34279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (15))){
var inst_33403 = (state_33447[(8)]);
var inst_33435 = cljs.core.vec(inst_33403);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33447__$1,(18),out,inst_33435);
} else {
if((state_val_33448 === (13))){
var inst_33430 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33457_34280 = state_33447__$1;
(statearr_33457_34280[(2)] = inst_33430);

(statearr_33457_34280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (6))){
var inst_33403 = (state_33447[(8)]);
var inst_33432 = inst_33403.length;
var inst_33433 = (inst_33432 > (0));
var state_33447__$1 = state_33447;
if(cljs.core.truth_(inst_33433)){
var statearr_33458_34281 = state_33447__$1;
(statearr_33458_34281[(1)] = (15));

} else {
var statearr_33462_34282 = state_33447__$1;
(statearr_33462_34282[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (17))){
var inst_33440 = (state_33447[(2)]);
var inst_33441 = cljs.core.async.close_BANG_(out);
var state_33447__$1 = (function (){var statearr_33463 = state_33447;
(statearr_33463[(10)] = inst_33440);

return statearr_33463;
})();
var statearr_33464_34283 = state_33447__$1;
(statearr_33464_34283[(2)] = inst_33441);

(statearr_33464_34283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (3))){
var inst_33445 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33447__$1,inst_33445);
} else {
if((state_val_33448 === (12))){
var inst_33403 = (state_33447[(8)]);
var inst_33423 = cljs.core.vec(inst_33403);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33447__$1,(14),out,inst_33423);
} else {
if((state_val_33448 === (2))){
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33447__$1,(4),ch);
} else {
if((state_val_33448 === (11))){
var inst_33407 = (state_33447[(9)]);
var inst_33403 = (state_33447[(8)]);
var inst_33412 = (state_33447[(11)]);
var inst_33420 = inst_33403.push(inst_33407);
var tmp33465 = inst_33403;
var inst_33403__$1 = tmp33465;
var inst_33404 = inst_33412;
var state_33447__$1 = (function (){var statearr_33466 = state_33447;
(statearr_33466[(7)] = inst_33404);

(statearr_33466[(12)] = inst_33420);

(statearr_33466[(8)] = inst_33403__$1);

return statearr_33466;
})();
var statearr_33467_34284 = state_33447__$1;
(statearr_33467_34284[(2)] = null);

(statearr_33467_34284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (9))){
var inst_33404 = (state_33447[(7)]);
var inst_33416 = cljs.core.keyword_identical_QMARK_(inst_33404,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33447__$1 = state_33447;
var statearr_33468_34285 = state_33447__$1;
(statearr_33468_34285[(2)] = inst_33416);

(statearr_33468_34285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (5))){
var inst_33404 = (state_33447[(7)]);
var inst_33413 = (state_33447[(13)]);
var inst_33407 = (state_33447[(9)]);
var inst_33412 = (state_33447[(11)]);
var inst_33412__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33407) : f.call(null, inst_33407));
var inst_33413__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33412__$1,inst_33404);
var state_33447__$1 = (function (){var statearr_33469 = state_33447;
(statearr_33469[(13)] = inst_33413__$1);

(statearr_33469[(11)] = inst_33412__$1);

return statearr_33469;
})();
if(inst_33413__$1){
var statearr_33470_34286 = state_33447__$1;
(statearr_33470_34286[(1)] = (8));

} else {
var statearr_33472_34287 = state_33447__$1;
(statearr_33472_34287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (14))){
var inst_33407 = (state_33447[(9)]);
var inst_33412 = (state_33447[(11)]);
var inst_33425 = (state_33447[(2)]);
var inst_33426 = [];
var inst_33427 = inst_33426.push(inst_33407);
var inst_33403 = inst_33426;
var inst_33404 = inst_33412;
var state_33447__$1 = (function (){var statearr_33473 = state_33447;
(statearr_33473[(7)] = inst_33404);

(statearr_33473[(14)] = inst_33427);

(statearr_33473[(15)] = inst_33425);

(statearr_33473[(8)] = inst_33403);

return statearr_33473;
})();
var statearr_33474_34288 = state_33447__$1;
(statearr_33474_34288[(2)] = null);

(statearr_33474_34288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (16))){
var state_33447__$1 = state_33447;
var statearr_33476_34289 = state_33447__$1;
(statearr_33476_34289[(2)] = null);

(statearr_33476_34289[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (10))){
var inst_33418 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
if(cljs.core.truth_(inst_33418)){
var statearr_33477_34290 = state_33447__$1;
(statearr_33477_34290[(1)] = (11));

} else {
var statearr_33478_34291 = state_33447__$1;
(statearr_33478_34291[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (18))){
var inst_33437 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33479_34292 = state_33447__$1;
(statearr_33479_34292[(2)] = inst_33437);

(statearr_33479_34292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (8))){
var inst_33413 = (state_33447[(13)]);
var state_33447__$1 = state_33447;
var statearr_33480_34293 = state_33447__$1;
(statearr_33480_34293[(2)] = inst_33413);

(statearr_33480_34293[(1)] = (10));


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
var cljs$core$async$state_machine__30312__auto__ = null;
var cljs$core$async$state_machine__30312__auto____0 = (function (){
var statearr_33481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33481[(0)] = cljs$core$async$state_machine__30312__auto__);

(statearr_33481[(1)] = (1));

return statearr_33481;
});
var cljs$core$async$state_machine__30312__auto____1 = (function (state_33447){
while(true){
var ret_value__30313__auto__ = (function (){try{while(true){
var result__30314__auto__ = switch__30308__auto__(state_33447);
if(cljs.core.keyword_identical_QMARK_(result__30314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30314__auto__;
}
break;
}
}catch (e33482){var ex__30315__auto__ = e33482;
var statearr_33483_34294 = state_33447;
(statearr_33483_34294[(2)] = ex__30315__auto__);


if(cljs.core.seq((state_33447[(4)]))){
var statearr_33484_34295 = state_33447;
(statearr_33484_34295[(1)] = cljs.core.first((state_33447[(4)])));

} else {
throw ex__30315__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34296 = state_33447;
state_33447 = G__34296;
continue;
} else {
return ret_value__30313__auto__;
}
break;
}
});
cljs$core$async$state_machine__30312__auto__ = function(state_33447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30312__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30312__auto____1.call(this,state_33447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30312__auto____0;
cljs$core$async$state_machine__30312__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30312__auto____1;
return cljs$core$async$state_machine__30312__auto__;
})()
})();
var state__30819__auto__ = (function (){var statearr_33485 = f__30818__auto__();
(statearr_33485[(6)] = c__30817__auto___34275);

return statearr_33485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30819__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
