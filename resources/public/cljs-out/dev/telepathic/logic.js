// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('telepathic.logic');
goog.require('cljs.core');
telepathic.logic.players = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-player","color-player",1325985236),new cljs.core.Keyword(null,"shape-player","shape-player",1423711301)], null);
telepathic.logic.colors = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"orange","orange",73816386)], null);
telepathic.logic.shapes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"bacon","bacon",54077130)], null);
telepathic.logic.actions = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-east","row-east",1811766797),new cljs.core.Keyword(null,"row-west","row-west",1480820637),new cljs.core.Keyword(null,"col-north","col-north",-1158926228),new cljs.core.Keyword(null,"col-south","col-south",680642571),new cljs.core.Keyword(null,"ew-do-si-do","ew-do-si-do",-1050032883),new cljs.core.Keyword(null,"ns-do-si-do","ns-do-si-do",823472753),new cljs.core.Keyword(null,"ew-reverse","ew-reverse",-2128545398),new cljs.core.Keyword(null,"ns-reverse","ns-reverse",-372060715),new cljs.core.Keyword(null,"corner-clockwise","corner-clockwise",-1356515329),new cljs.core.Keyword(null,"corner-counterclockwise","corner-counterclockwise",-2004618143)], null);
telepathic.logic.tiles = cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function telepathic$logic$iter__21000(s__21001){
return (new cljs.core.LazySeq(null,(function (){
var s__21001__$1 = s__21001;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__21001__$1);
if(temp__5720__auto__){
var s__21001__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21001__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21001__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21003 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21002 = (0);
while(true){
if((i__21002 < size__4528__auto__)){
var color = cljs.core._nth.call(null,c__4527__auto__,i__21002);
cljs.core.chunk_append.call(null,b__21003,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = ((function (i__21002,color,c__4527__auto__,size__4528__auto__,b__21003,s__21001__$2,temp__5720__auto__){
return (function telepathic$logic$iter__21000_$_iter__21004(s__21005){
return (new cljs.core.LazySeq(null,((function (i__21002,color,c__4527__auto__,size__4528__auto__,b__21003,s__21001__$2,temp__5720__auto__){
return (function (){
var s__21005__$1 = s__21005;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__21005__$1);
if(temp__5720__auto____$1){
var s__21005__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21005__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__21005__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__21007 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__21006 = (0);
while(true){
if((i__21006 < size__4528__auto____$1)){
var shape = cljs.core._nth.call(null,c__4527__auto____$1,i__21006);
cljs.core.chunk_append.call(null,b__21007,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,shape], null));

var G__21012 = (i__21006 + (1));
i__21006 = G__21012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21007),telepathic$logic$iter__21000_$_iter__21004.call(null,cljs.core.chunk_rest.call(null,s__21005__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21007),null);
}
} else {
var shape = cljs.core.first.call(null,s__21005__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,shape], null),telepathic$logic$iter__21000_$_iter__21004.call(null,cljs.core.rest.call(null,s__21005__$2)));
}
} else {
return null;
}
break;
}
});})(i__21002,color,c__4527__auto__,size__4528__auto__,b__21003,s__21001__$2,temp__5720__auto__))
,null,null));
});})(i__21002,color,c__4527__auto__,size__4528__auto__,b__21003,s__21001__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,telepathic.logic.shapes);
})()));

var G__21013 = (i__21002 + (1));
i__21002 = G__21013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21003),telepathic$logic$iter__21000.call(null,cljs.core.chunk_rest.call(null,s__21001__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21003),null);
}
} else {
var color = cljs.core.first.call(null,s__21001__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = ((function (color,s__21001__$2,temp__5720__auto__){
return (function telepathic$logic$iter__21000_$_iter__21008(s__21009){
return (new cljs.core.LazySeq(null,(function (){
var s__21009__$1 = s__21009;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__21009__$1);
if(temp__5720__auto____$1){
var s__21009__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21009__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21009__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21011 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21010 = (0);
while(true){
if((i__21010 < size__4528__auto__)){
var shape = cljs.core._nth.call(null,c__4527__auto__,i__21010);
cljs.core.chunk_append.call(null,b__21011,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,shape], null));

var G__21014 = (i__21010 + (1));
i__21010 = G__21014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21011),telepathic$logic$iter__21000_$_iter__21008.call(null,cljs.core.chunk_rest.call(null,s__21009__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21011),null);
}
} else {
var shape = cljs.core.first.call(null,s__21009__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,shape], null),telepathic$logic$iter__21000_$_iter__21008.call(null,cljs.core.rest.call(null,s__21009__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(color,s__21001__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,telepathic.logic.shapes);
})()),telepathic$logic$iter__21000.call(null,cljs.core.rest.call(null,s__21001__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,telepathic.logic.colors);
})())));
telepathic.logic.condition_cards = (function telepathic$logic$condition_cards(cards){
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"win","win",-1624642689),new cljs.core.Keyword(null,"lose","lose",-1493527476)], null),cljs.core.take.call(null,(2),cljs.core.shuffle.call(null,cards)));
});
/**
 * Checks all the members of a set. If all match, return that value. Otherwise return nil.
 */
telepathic.logic.all_match_QMARK_ = (function telepathic$logic$all_match_QMARK_(set){
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,set))){
return cljs.core.first.call(null,set);
} else {
return null;
}
});
/**
 * Take in a set of 4 paired items.
 *   Check to see if any 3 contiguous items have a matching pattern in any color or shape.
 *   Returns nil if nothing found, or returns the matching color or shape.
 */
telepathic.logic.check4 = (function telepathic$logic$check4(set){
var or__4126__auto__ = telepathic.logic.all_match_QMARK_.call(null,cljs.core.first.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.first.call(null,cljs.core.partition.call(null,(3),(1),set)))));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = telepathic.logic.all_match_QMARK_.call(null,cljs.core.first.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.second.call(null,cljs.core.partition.call(null,(3),(1),set)))));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = telepathic.logic.all_match_QMARK_.call(null,cljs.core.second.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.first.call(null,cljs.core.partition.call(null,(3),(1),set)))));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return telepathic.logic.all_match_QMARK_.call(null,cljs.core.second.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.second.call(null,cljs.core.partition.call(null,(3),(1),set)))));
}
}
}
});
/**
 * Takes a sequence of 16 color/shape pairs and rotates it 90°.
 */
telepathic.logic.rot_90 = (function telepathic$logic$rot_90(s){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,cljs.core.partition.call(null,(4),s))));
});
/**
 * Performs check4 function, taking the first row '(take 4 s)', then calling
 *   itself recursively until all are taken.
 */
telepathic.logic.any_row_match_QMARK_ = (function telepathic$logic$any_row_match_QMARK_(s){
if(cljs.core.seq.call(null,s)){
var or__4126__auto__ = telepathic.logic.check4.call(null,cljs.core.take.call(null,(4),s));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return telepathic.logic.any_row_match_QMARK_.call(null,cljs.core.drop.call(null,(4),s));
}
} else {
return null;
}
});
/**
 * The same as any-row-match? function, but performing a 90° rotation first,
 *   to capture columns.
 */
telepathic.logic.any_col_match_QMARK_ = (function telepathic$logic$any_col_match_QMARK_(s){
return telepathic.logic.any_row_match_QMARK_.call(null,telepathic.logic.rot_90.call(null,s));
});
/**
 * Do any row or column have a matching set [s] of 3?
 */
telepathic.logic.any_rc_match_QMARK_ = (function telepathic$logic$any_rc_match_QMARK_(s){
return cljs.core.some_fn.call(null,telepathic.logic.any_row_match_QMARK_,telepathic.logic.any_col_match_QMARK_).call(null,s);
});
telepathic.logic.sls = (function telepathic$logic$sls(){
var set = cljs.core.shuffle.call(null,telepathic.logic.tiles);
var i = (0);
while(true){
if(((cljs.core.not.call(null,telepathic.logic.any_rc_match_QMARK_.call(null,set))) || ((i > (100))))){
if((i > (99))){
return i;
} else {
return set;
}
} else {
var G__21015 = cljs.core.shuffle.call(null,telepathic.logic.tiles);
var G__21016 = (i + (1));
set = G__21015;
i = G__21016;
continue;
}
break;
}
});
telepathic.logic.initiate_actions = (function telepathic$logic$initiate_actions(){
var deck = cljs.core.shuffle.call(null,telepathic.logic.actions);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"available","available",-1470697127),cljs.core.take.call(null,(4),deck),new cljs.core.Keyword(null,"deck","deck",1145325705),cljs.core.nthrest.call(null,deck,(4)),new cljs.core.Keyword(null,"discard","discard",-1939593545),cljs.core.PersistentVector.EMPTY], null);
});

//# sourceMappingURL=logic.js.map
