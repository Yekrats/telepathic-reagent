// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20761){
var map__20762 = p__20761;
var map__20762__$1 = (((((!((map__20762 == null))))?(((((map__20762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20762):map__20762);
var m = map__20762__$1;
var n = cljs.core.get.call(null,map__20762__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20762__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20764_20796 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20765_20797 = null;
var count__20766_20798 = (0);
var i__20767_20799 = (0);
while(true){
if((i__20767_20799 < count__20766_20798)){
var f_20800 = cljs.core._nth.call(null,chunk__20765_20797,i__20767_20799);
cljs.core.println.call(null,"  ",f_20800);


var G__20801 = seq__20764_20796;
var G__20802 = chunk__20765_20797;
var G__20803 = count__20766_20798;
var G__20804 = (i__20767_20799 + (1));
seq__20764_20796 = G__20801;
chunk__20765_20797 = G__20802;
count__20766_20798 = G__20803;
i__20767_20799 = G__20804;
continue;
} else {
var temp__5720__auto___20805 = cljs.core.seq.call(null,seq__20764_20796);
if(temp__5720__auto___20805){
var seq__20764_20806__$1 = temp__5720__auto___20805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20764_20806__$1)){
var c__4556__auto___20807 = cljs.core.chunk_first.call(null,seq__20764_20806__$1);
var G__20808 = cljs.core.chunk_rest.call(null,seq__20764_20806__$1);
var G__20809 = c__4556__auto___20807;
var G__20810 = cljs.core.count.call(null,c__4556__auto___20807);
var G__20811 = (0);
seq__20764_20796 = G__20808;
chunk__20765_20797 = G__20809;
count__20766_20798 = G__20810;
i__20767_20799 = G__20811;
continue;
} else {
var f_20812 = cljs.core.first.call(null,seq__20764_20806__$1);
cljs.core.println.call(null,"  ",f_20812);


var G__20813 = cljs.core.next.call(null,seq__20764_20806__$1);
var G__20814 = null;
var G__20815 = (0);
var G__20816 = (0);
seq__20764_20796 = G__20813;
chunk__20765_20797 = G__20814;
count__20766_20798 = G__20815;
i__20767_20799 = G__20816;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20817 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20817);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20817)))?cljs.core.second.call(null,arglists_20817):arglists_20817));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20768_20818 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20769_20819 = null;
var count__20770_20820 = (0);
var i__20771_20821 = (0);
while(true){
if((i__20771_20821 < count__20770_20820)){
var vec__20782_20822 = cljs.core._nth.call(null,chunk__20769_20819,i__20771_20821);
var name_20823 = cljs.core.nth.call(null,vec__20782_20822,(0),null);
var map__20785_20824 = cljs.core.nth.call(null,vec__20782_20822,(1),null);
var map__20785_20825__$1 = (((((!((map__20785_20824 == null))))?(((((map__20785_20824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20785_20824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20785_20824):map__20785_20824);
var doc_20826 = cljs.core.get.call(null,map__20785_20825__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20827 = cljs.core.get.call(null,map__20785_20825__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20823);

cljs.core.println.call(null," ",arglists_20827);

if(cljs.core.truth_(doc_20826)){
cljs.core.println.call(null," ",doc_20826);
} else {
}


var G__20828 = seq__20768_20818;
var G__20829 = chunk__20769_20819;
var G__20830 = count__20770_20820;
var G__20831 = (i__20771_20821 + (1));
seq__20768_20818 = G__20828;
chunk__20769_20819 = G__20829;
count__20770_20820 = G__20830;
i__20771_20821 = G__20831;
continue;
} else {
var temp__5720__auto___20832 = cljs.core.seq.call(null,seq__20768_20818);
if(temp__5720__auto___20832){
var seq__20768_20833__$1 = temp__5720__auto___20832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20768_20833__$1)){
var c__4556__auto___20834 = cljs.core.chunk_first.call(null,seq__20768_20833__$1);
var G__20835 = cljs.core.chunk_rest.call(null,seq__20768_20833__$1);
var G__20836 = c__4556__auto___20834;
var G__20837 = cljs.core.count.call(null,c__4556__auto___20834);
var G__20838 = (0);
seq__20768_20818 = G__20835;
chunk__20769_20819 = G__20836;
count__20770_20820 = G__20837;
i__20771_20821 = G__20838;
continue;
} else {
var vec__20787_20839 = cljs.core.first.call(null,seq__20768_20833__$1);
var name_20840 = cljs.core.nth.call(null,vec__20787_20839,(0),null);
var map__20790_20841 = cljs.core.nth.call(null,vec__20787_20839,(1),null);
var map__20790_20842__$1 = (((((!((map__20790_20841 == null))))?(((((map__20790_20841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20790_20841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20790_20841):map__20790_20841);
var doc_20843 = cljs.core.get.call(null,map__20790_20842__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20844 = cljs.core.get.call(null,map__20790_20842__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20840);

cljs.core.println.call(null," ",arglists_20844);

if(cljs.core.truth_(doc_20843)){
cljs.core.println.call(null," ",doc_20843);
} else {
}


var G__20845 = cljs.core.next.call(null,seq__20768_20833__$1);
var G__20846 = null;
var G__20847 = (0);
var G__20848 = (0);
seq__20768_20818 = G__20845;
chunk__20769_20819 = G__20846;
count__20770_20820 = G__20847;
i__20771_20821 = G__20848;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__20792 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20793 = null;
var count__20794 = (0);
var i__20795 = (0);
while(true){
if((i__20795 < count__20794)){
var role = cljs.core._nth.call(null,chunk__20793,i__20795);
var temp__5720__auto___20849__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20849__$1)){
var spec_20850 = temp__5720__auto___20849__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20850));
} else {
}


var G__20851 = seq__20792;
var G__20852 = chunk__20793;
var G__20853 = count__20794;
var G__20854 = (i__20795 + (1));
seq__20792 = G__20851;
chunk__20793 = G__20852;
count__20794 = G__20853;
i__20795 = G__20854;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__20792);
if(temp__5720__auto____$1){
var seq__20792__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20792__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20792__$1);
var G__20855 = cljs.core.chunk_rest.call(null,seq__20792__$1);
var G__20856 = c__4556__auto__;
var G__20857 = cljs.core.count.call(null,c__4556__auto__);
var G__20858 = (0);
seq__20792 = G__20855;
chunk__20793 = G__20856;
count__20794 = G__20857;
i__20795 = G__20858;
continue;
} else {
var role = cljs.core.first.call(null,seq__20792__$1);
var temp__5720__auto___20859__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20859__$2)){
var spec_20860 = temp__5720__auto___20859__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20860));
} else {
}


var G__20861 = cljs.core.next.call(null,seq__20792__$1);
var G__20862 = null;
var G__20863 = (0);
var G__20864 = (0);
seq__20792 = G__20861;
chunk__20793 = G__20862;
count__20794 = G__20863;
i__20795 = G__20864;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20865 = cljs.core.conj.call(null,via,t);
var G__20866 = cljs.core.ex_cause.call(null,t);
via = G__20865;
t = G__20866;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__20869 = datafied_throwable;
var map__20869__$1 = (((((!((map__20869 == null))))?(((((map__20869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20869):map__20869);
var via = cljs.core.get.call(null,map__20869__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__20869__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__20869__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20870 = cljs.core.last.call(null,via);
var map__20870__$1 = (((((!((map__20870 == null))))?(((((map__20870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20870):map__20870);
var type = cljs.core.get.call(null,map__20870__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20870__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__20870__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20871 = data;
var map__20871__$1 = (((((!((map__20871 == null))))?(((((map__20871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20871):map__20871);
var problems = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__20871__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20872 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__20872__$1 = (((((!((map__20872 == null))))?(((((map__20872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20872):map__20872);
var top_data = map__20872__$1;
var source = cljs.core.get.call(null,map__20872__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__20877 = phase;
var G__20877__$1 = (((G__20877 instanceof cljs.core.Keyword))?G__20877.fqn:null);
switch (G__20877__$1) {
case "read-source":
var map__20878 = data;
var map__20878__$1 = (((((!((map__20878 == null))))?(((((map__20878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20878):map__20878);
var line = cljs.core.get.call(null,map__20878__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20878__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20880 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__20880__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20880,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20880);
var G__20880__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20880__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20880__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20880__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20880__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20881 = top_data;
var G__20881__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20881,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20881);
var G__20881__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20881__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20881__$1);
var G__20881__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20881__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20881__$2);
var G__20881__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20881__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20881__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20881__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20881__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20882 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20882,(0),null);
var method = cljs.core.nth.call(null,vec__20882,(1),null);
var file = cljs.core.nth.call(null,vec__20882,(2),null);
var line = cljs.core.nth.call(null,vec__20882,(3),null);
var G__20885 = top_data;
var G__20885__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__20885,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20885);
var G__20885__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__20885__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20885__$1);
var G__20885__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__20885__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20885__$2);
var G__20885__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20885__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20885__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20885__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20885__$4;
}

break;
case "execution":
var vec__20886 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20886,(0),null);
var method = cljs.core.nth.call(null,vec__20886,(1),null);
var file = cljs.core.nth.call(null,vec__20886,(2),null);
var line = cljs.core.nth.call(null,vec__20886,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__20868_SHARP_){
var or__4126__auto__ = (p1__20868_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__20868_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__20889 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20889__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__20889,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20889);
var G__20889__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20889__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20889__$1);
var G__20889__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__20889__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20889__$2);
var G__20889__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__20889__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20889__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20889__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20889__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20877__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20893){
var map__20894 = p__20893;
var map__20894__$1 = (((((!((map__20894 == null))))?(((((map__20894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20894):map__20894);
var triage_data = map__20894__$1;
var phase = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__20894__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20896 = phase;
var G__20896__$1 = (((G__20896 instanceof cljs.core.Keyword))?G__20896.fqn:null);
switch (G__20896__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20897_20906 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20898_20907 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20899_20908 = true;
var _STAR_print_fn_STAR__temp_val__20900_20909 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20899_20908);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20900_20909);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20891_SHARP_){
return cljs.core.dissoc.call(null,p1__20891_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20898_20907);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20897_20906);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20901_20910 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20902_20911 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20903_20912 = true;
var _STAR_print_fn_STAR__temp_val__20904_20913 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20903_20912);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20904_20913);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20892_SHARP_){
return cljs.core.dissoc.call(null,p1__20892_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20902_20911);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20901_20910);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20896__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
