(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Lv2H:function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s("kZht"),s("DiCn"),s("ApNh"),s("ZTXN"),s("bwdy"),s("g6G6"),s("KTx3"),s("ROBh"),s("8lHc"),s("+6xv"),s("jIqt"),s("Ohay"),s("kuMc"),s("WT5v"),s("owzC"),s("K5Xz"),s("4rR8");class n{}},OcC5:function(e,t,s){"use strict";s.d(t,"c",(function(){return o})),s.d(t,"b",(function(){return u})),s.d(t,"a",(function(){return h})),s.d(t,"d",(function(){return d}));var n=s("WT5v"),r=s("kZht"),i=s("IdLP"),c=s("ZTXN"),b=s("mWib");let o=(()=>{class e{create(e){return"undefined"==typeof MutationObserver?null:new MutationObserver(e)}}return e.ngInjectableDef=Object(r.Sb)({factory:function(){return new e},token:e,providedIn:"root"}),e})(),u=(()=>{class e{constructor(e){this._mutationObserverFactory=e,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){const t=Object(n.e)(e);return new i.a(e=>{const s=this._observeElement(t).subscribe(e);return()=>{s.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){if(this._observedElements.has(e))this._observedElements.get(e).count++;else{const t=new c.a,s=this._mutationObserverFactory.create(e=>t.next(e));s&&s.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:s,stream:t,count:1})}return this._observedElements.get(e).stream}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){const{observer:t,stream:s}=this._observedElements.get(e);t&&t.disconnect(),s.complete(),this._observedElements.delete(e)}}}return e.ngInjectableDef=Object(r.Sb)({factory:function(){return new e(Object(r.Tb)(o))},token:e,providedIn:"root"}),e})();class h{constructor(e,t,s){this._contentObserver=e,this._elementRef=t,this._ngZone=s,this.event=new r.m,this._disabled=!1,this._currentSubscription=null}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(n.c)(e),this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(e){this._debounce=Object(n.f)(e),this._subscribe()}ngAfterContentInit(){this._currentSubscription||this.disabled||this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();const e=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?e.pipe(Object(b.a)(this.debounce)):e).subscribe(this.event)})}_unsubscribe(){this._currentSubscription&&this._currentSubscription.unsubscribe()}}class d{}}}]);