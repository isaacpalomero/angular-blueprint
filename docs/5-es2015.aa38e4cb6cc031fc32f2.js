(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Z9WT:function(t,n,e){"use strict";e.r(n);var o=e("2kYt"),c=e("EM62"),r=e("DgXe"),s=e("vobO");let i=(()=>{class t{constructor(t){this.http=t,this.markdownHeader=new s.d({"Content-Type":"text/markdown; charset=UTF-8"})}getMarkdown$(t){return this.http.get(t,{headers:this.markdownHeader,responseType:"text"})}}return t.ngInjectableDef=c.Gb({token:t,factory:function(n){return new(n||t)(c.Qb(s.a))},providedIn:"root"}),t})();const a=[4,"ngIf","ngIfElse"],u=["loading",""],f=[3,"data"];function d(t,n){if(1&t&&(c.Nb(0,"article"),c.Lb(1,"markdown",f),c.Mb()),2&t){const t=n.ngIf;c.fc(1),c.Zb("data",t)}}function l(t,n){1&t&&c.mc(0,"Loading file...")}let b=(()=>{class t{constructor(t){this.markdownService=t}ngOnInit(){this.loadDocument()}ngOnChanges(t){this.loadDocument()}loadDocument(){this.markdownContent$=this.markdownService.getMarkdown$(this.url)}}return t.ngComponentDef=c.Eb({type:t,selectors:[["a-blue-documents-markdown-viewer"]],factory:function(n){return new(n||t)(c.Kb(i))},inputs:{url:"url"},features:[c.yb()],consts:4,vars:4,template:function(t,n){if(1&t&&(c.kc(0,d,2,1,"article",a),c.Vb(1,"async"),c.kc(2,l,1,0,"ng-template",null,u,c.lc)),2&t){const t=c.cc(3);c.Zb("ngIf",c.Wb(1,2,n.markdownContent$))("ngIfElse",t)}},directives:[o.j,r.a],pipes:[o.b],encapsulation:2,changeDetection:0}),t})(),p=(()=>{class t{}return t.ngModuleDef=c.Ib({type:t}),t.ngInjectorDef=c.Hb({factory:function(n){return new(n||t)},imports:[[o.c,r.b.forChild()]]}),t})();r.b.forChild();var m=e("sEIs"),h=e("8j5Y"),g=e("ROBh");let w=(()=>{class t{constructor(){this.documents=[{path:"./assets/architecture.md",data:{caption:"Architecture"}},{path:"./assets/ROADMAP.md",data:{caption:"Roadmap"}}]}getDocuments$(){return Object(g.a)(this.documents)}}return t.ngInjectableDef=c.Gb({token:t,factory:function(n){return new(n||t)},providedIn:null}),t})();const D=[4,"ngIf"],k=[3,"click",4,"ngFor","ngForOf"],I=[3,"url"],v=[3,"click"];function y(t,n){if(1&t){const t=c.Ob();c.Nb(0,"button",v),c.Sb("click",(function(e){c.dc(t);const o=n.$implicit;return c.Ub(2).selectDocument(o)})),c.mc(1),c.Mb()}if(2&t){const t=n.$implicit;c.fc(1),c.nc(t.data.caption)}}function C(t,n){if(1&t&&(c.Nb(0,"div"),c.Nb(1,"nav"),c.kc(2,y,2,1,"button",k),c.Mb(),c.Lb(3,"a-blue-documents-markdown-viewer",I),c.Mb()),2&t){const t=n.ngIf,e=c.Ub();c.fc(2),c.Zb("ngForOf",t),c.fc(3),c.Zb("url",e.currentDocument.path)}}let M=(()=>{class t{constructor(t){this.documentationService=t}ngOnInit(){this.documents$=this.documentationService.getDocuments$().pipe(Object(h.a)(t=>this.currentDocument=t[0]))}selectDocument(t){this.currentDocument=t}}return t.ngComponentDef=c.Eb({type:t,selectors:[["abs-documentation"]],factory:function(n){return new(n||t)(c.Kb(w))},consts:2,vars:3,template:function(t,n){1&t&&(c.kc(0,C,4,2,"div",D),c.Vb(1,"async")),2&t&&c.Zb("ngIf",c.Wb(1,1,n.documents$))},directives:[o.j,o.i,b],pipes:[o.b],encapsulation:2,changeDetection:0}),t})();const O=[{path:"",component:M}];let j=(()=>{class t{}return t.ngModuleDef=c.Ib({type:t}),t.ngInjectorDef=c.Hb({factory:function(n){return new(n||t)},imports:[[m.f.forChild(O)],m.f]}),t})();m.f.forChild(O),e.d(n,"DocumentationModule",(function(){return E}));const $=[{path:"",component:M}];let E=(()=>{class t{}return t.ngModuleDef=c.Ib({type:t}),t.ngInjectorDef=c.Hb({factory:function(n){return new(n||t)},providers:[w],imports:[[o.c,p,j,m.f.forChild($)]]}),t})();m.f.forChild($)}}]);