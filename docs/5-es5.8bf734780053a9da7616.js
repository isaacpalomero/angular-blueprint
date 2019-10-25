function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Z9WT:function(n,e,t){"use strict";t.r(e);var o,c,r,a=t("2kYt"),i=t("EM62"),s=t("DgXe"),u=t("vobO"),l=((o=function(){function n(e){_classCallCheck(this,n),this.http=e,this.markdownHeader=new u.d({"Content-Type":"text/markdown; charset=UTF-8"})}return _createClass(n,[{key:"getMarkdown$",value:function(n){return this.http.get(n,{headers:this.markdownHeader,responseType:"text"})}}]),n}()).ngInjectableDef=i.Gb({token:o,factory:function(n){return new(n||o)(i.Qb(u.a))},providedIn:"root"}),o),f=[3,"data"],d=((r=function(){function n(e){_classCallCheck(this,n),this.markdownService=e}return _createClass(n,[{key:"ngOnInit",value:function(){this.loadDocument()}},{key:"ngOnChanges",value:function(n){console.log({changes:n}),this.loadDocument()}},{key:"loadDocument",value:function(){this.markdownContent$=this.markdownService.getMarkdown$(this.url)}}]),n}()).ngComponentDef=i.Eb({type:r,selectors:[["angular-blueprint-documents-markdown-viewer"]],factory:function(n){return new(n||r)(i.Kb(l))},inputs:{url:"url"},features:[i.yb()],consts:2,vars:3,template:function(n,e){1&n&&(i.Lb(0,"markdown",f),i.Vb(1,"async")),2&n&&i.Zb("data",i.Wb(1,1,e.markdownContent$))},directives:[s.a],pipes:[a.b],encapsulation:2,changeDetection:0}),r),h=((c=function n(){_classCallCheck(this,n)}).ngModuleDef=i.Ib({type:c}),c.ngInjectorDef=i.Hb({factory:function(n){return new(n||c)},imports:[[a.c,s.b.forChild()]]}),c);s.b.forChild();var p=t("sEIs"),b=[3,"click",4,"ngFor","ngForOf"],m=[3,"url"],k=[3,"click"];function C(n,e){if(1&n){var t=i.Ob();i.Nb(0,"button",k),i.Sb("click",function(n){i.cc(t);var o=e.$implicit;return i.Ub().selectDocument(o)}),i.kc(1),i.Mb()}if(2&n){var o=e.$implicit;i.ec(1),i.lc(o.caption)}}var w,g,v=((w=function(){function n(){_classCallCheck(this,n),this.documents=[{path:"./assets/architecture.md",caption:"Architecture"},{path:"./assets/ROADMAP.md",caption:"Roadmap"}],this.currentDocument=this.documents[0]}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"selectDocument",value:function(n){console.log({document:n}),this.currentDocument=n}}]),n}()).ngComponentDef=i.Eb({type:w,selectors:[["abs-documentation"]],factory:function(n){return new(n||w)},consts:3,vars:2,template:function(n,e){1&n&&(i.Nb(0,"nav"),i.jc(1,C,2,1,"button",b),i.Mb(),i.Lb(2,"angular-blueprint-documents-markdown-viewer",m)),2&n&&(i.ec(1),i.Zb("ngForOf",e.documents),i.ec(2),i.Zb("url",e.currentDocument.path))},directives:[a.i,d],encapsulation:2,changeDetection:0}),w),y=[{path:"",component:v}],D=((g=function n(){_classCallCheck(this,n)}).ngModuleDef=i.Ib({type:g}),g.ngInjectorDef=i.Hb({factory:function(n){return new(n||g)},imports:[[p.f.forChild(y)],p.f]}),g);p.f.forChild(y),t.d(e,"DocumentationModule",function(){return M});var _,I=[{path:"",component:v}],M=((_=function n(){_classCallCheck(this,n)}).ngModuleDef=i.Ib({type:_}),_.ngInjectorDef=i.Hb({factory:function(n){return new(n||_)},imports:[[a.c,h,D,p.f.forChild(I)]]}),_);p.f.forChild(I)}}]);