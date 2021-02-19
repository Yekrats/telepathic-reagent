// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('telepathic.logic');
goog.require('cljs.core');
goog.require('clojure.string');
telepathic.logic.testdata = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color-player","color-player",1325985236),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"win","win",-1624642689),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"lose","lose",-1493527476),new cljs.core.Keyword(null,"green","green",-945526839)], null),new cljs.core.Keyword(null,"shape-player","shape-player",1423711301),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"win","win",-1624642689),new cljs.core.Keyword(null,"bacon","bacon",54077130),new cljs.core.Keyword(null,"lose","lose",-1493527476),new cljs.core.Keyword(null,"star","star",279424429)], null),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"circle","circle",1903212362)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"bacon","bacon",54077130)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"circle","circle",1903212362)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"plus","plus",211540661)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"plus","plus",211540661)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"star","star",279424429)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"circle","circle",1903212362)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"star","star",279424429)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"star","star",279424429)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"star","star",279424429)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"bacon","bacon",54077130)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"plus","plus",211540661)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"bacon","bacon",54077130)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"circle","circle",1903212362)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"plus","plus",211540661)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"bacon","bacon",54077130)], null)], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"available","available",-1470697127),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col-north","col-north",-1158926228),new cljs.core.Keyword(null,"ew-reverse","ew-reverse",-2128545398),new cljs.core.Keyword(null,"corner-counterclockwise","corner-counterclockwise",-2004618143),new cljs.core.Keyword(null,"row-east","row-east",1811766797)], null),new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-west","row-west",1480820637),new cljs.core.Keyword(null,"col-south","col-south",680642571),new cljs.core.Keyword(null,"ns-do-si-do","ns-do-si-do",823472753),new cljs.core.Keyword(null,"ns-reverse","ns-reverse",-372060715),new cljs.core.Keyword(null,"ew-do-si-do","ew-do-si-do",-1050032883),new cljs.core.Keyword(null,"corner-clockwise","corner-clockwise",-1356515329)], null),new cljs.core.Keyword(null,"discard","discard",-1939593545),cljs.core.PersistentVector.EMPTY], null)], null);
telepathic.logic.players = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color-player","color-player",1325985236),new cljs.core.Keyword(null,"shape-player","shape-player",1423711301)], null);
telepathic.logic.colors = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"orange","orange",73816386)], null);
telepathic.logic.shapes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cross","cross",194557789),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"bacon","bacon",54077130)], null);
telepathic.logic.actions = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-east","row-east",1811766797),new cljs.core.Keyword(null,"row-west","row-west",1480820637),new cljs.core.Keyword(null,"col-north","col-north",-1158926228),new cljs.core.Keyword(null,"col-south","col-south",680642571),new cljs.core.Keyword(null,"ew-do-si-do","ew-do-si-do",-1050032883),new cljs.core.Keyword(null,"ns-do-si-do","ns-do-si-do",823472753),new cljs.core.Keyword(null,"ew-reverse","ew-reverse",-2128545398),new cljs.core.Keyword(null,"ns-reverse","ns-reverse",-372060715),new cljs.core.Keyword(null,"corner-clockwise","corner-clockwise",-1356515329),new cljs.core.Keyword(null,"corner-counterclockwise","corner-counterclockwise",-2004618143)], null);
telepathic.logic.tiles = cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function telepathic$logic$iter__15543(s__15544){
return (new cljs.core.LazySeq(null,(function (){
var s__15544__$1 = s__15544;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15544__$1);
if(temp__5720__auto__){
var s__15544__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15544__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15544__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15546 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15545 = (0);
while(true){
if((i__15545 < size__4528__auto__)){
var color = cljs.core._nth.call(null,c__4527__auto__,i__15545);
cljs.core.chunk_append.call(null,b__15546,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = ((function (i__15545,color,c__4527__auto__,size__4528__auto__,b__15546,s__15544__$2,temp__5720__auto__){
return (function telepathic$logic$iter__15543_$_iter__15547(s__15548){
return (new cljs.core.LazySeq(null,((function (i__15545,color,c__4527__auto__,size__4528__auto__,b__15546,s__15544__$2,temp__5720__auto__){
return (function (){
var s__15548__$1 = s__15548;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__15548__$1);
if(temp__5720__auto____$1){
var s__15548__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15548__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__15548__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__15550 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__15549 = (0);
while(true){
if((i__15549 < size__4528__auto____$1)){
var shape = cljs.core._nth.call(null,c__4527__auto____$1,i__15549);
cljs.core.chunk_append.call(null,b__15550,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,shape], null));

var G__15555 = (i__15549 + (1));
i__15549 = G__15555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15550),telepathic$logic$iter__15543_$_iter__15547.call(null,cljs.core.chunk_rest.call(null,s__15548__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15550),null);
}
} else {
var shape = cljs.core.first.call(null,s__15548__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,shape], null),telepathic$logic$iter__15543_$_iter__15547.call(null,cljs.core.rest.call(null,s__15548__$2)));
}
} else {
return null;
}
break;
}
});})(i__15545,color,c__4527__auto__,size__4528__auto__,b__15546,s__15544__$2,temp__5720__auto__))
,null,null));
});})(i__15545,color,c__4527__auto__,size__4528__auto__,b__15546,s__15544__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,telepathic.logic.shapes);
})()));

var G__15556 = (i__15545 + (1));
i__15545 = G__15556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15546),telepathic$logic$iter__15543.call(null,cljs.core.chunk_rest.call(null,s__15544__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15546),null);
}
} else {
var color = cljs.core.first.call(null,s__15544__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = ((function (color,s__15544__$2,temp__5720__auto__){
return (function telepathic$logic$iter__15543_$_iter__15551(s__15552){
return (new cljs.core.LazySeq(null,(function (){
var s__15552__$1 = s__15552;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__15552__$1);
if(temp__5720__auto____$1){
var s__15552__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15552__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15552__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15554 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15553 = (0);
while(true){
if((i__15553 < size__4528__auto__)){
var shape = cljs.core._nth.call(null,c__4527__auto__,i__15553);
cljs.core.chunk_append.call(null,b__15554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,shape], null));

var G__15557 = (i__15553 + (1));
i__15553 = G__15557;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15554),telepathic$logic$iter__15543_$_iter__15551.call(null,cljs.core.chunk_rest.call(null,s__15552__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15554),null);
}
} else {
var shape = cljs.core.first.call(null,s__15552__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,shape], null),telepathic$logic$iter__15543_$_iter__15551.call(null,cljs.core.rest.call(null,s__15552__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(color,s__15544__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,telepathic.logic.shapes);
})()),telepathic$logic$iter__15543.call(null,cljs.core.rest.call(null,s__15544__$2)));
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
/**
 * A shuffled-legal-start of the tiles.
 */
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
var G__15558 = cljs.core.shuffle.call(null,telepathic.logic.tiles);
var G__15559 = (i + (1));
set = G__15558;
i = G__15559;
continue;
}
break;
}
});
telepathic.logic.initiate_actions = (function telepathic$logic$initiate_actions(){
var deck = cljs.core.shuffle.call(null,telepathic.logic.actions);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"available","available",-1470697127),cljs.core.vec.call(null,cljs.core.take.call(null,(4),deck)),new cljs.core.Keyword(null,"deck","deck",1145325705),cljs.core.vec.call(null,cljs.core.nthrest.call(null,deck,(4))),new cljs.core.Keyword(null,"discard","discard",-1939593545),cljs.core.PersistentVector.EMPTY], null);
});
/**
 * An action (key) is moved from the available area to the
 *   discard pile of game-state (state). Returns the state, with the
 *   key card moved to the discard pile.
 */
telepathic.logic.remove_action = (function telepathic$logic$remove_action(state,key){
var available = new cljs.core.Keyword(null,"available","available",-1470697127).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(state));
var index = available.indexOf(key);
var discard = new cljs.core.Keyword(null,"discard","discard",-1939593545).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core._EQ_.call(null,index,(-1))){
return state;
} else {
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"available","available",-1470697127)], null),cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,available,(0),index),cljs.core.subvec.call(null,available,(index + (1)))))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"discard","discard",-1939593545)], null),cljs.core.conj.call(null,discard,key));
}
});
/**
 * Take the top card from the action deck of the game state (state), and put it on the bottom
 *   of the available pile.  Returns the new state.
 */
telepathic.logic.draw_action = (function telepathic$logic$draw_action(state){
var available = new cljs.core.Keyword(null,"available","available",-1470697127).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(state));
var top_card = cljs.core.first.call(null,new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(state)));
var rest_of_deck = cljs.core.vec.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(state))));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"deck","deck",1145325705)], null),rest_of_deck),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"available","available",-1470697127)], null),cljs.core.conj.call(null,available,top_card));
});
/**
 * Takes in a key-pair (color & shape). Returns the name of the asset.
 */
telepathic.logic.asset_name = (function telepathic$logic$asset_name(p__15560){
var vec__15561 = p__15560;
var c = cljs.core.nth.call(null,vec__15561,(0),null);
var s = cljs.core.nth.call(null,vec__15561,(1),null);
return [clojure.string.capitalize.call(null,cljs.core.name.call(null,c)),"%20",clojure.string.capitalize.call(null,cljs.core.name.call(null,s)),".png"].join('');
});

//# sourceMappingURL=logic.js.map
