(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[29],{428:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,{Z:function(){return v}});var l=a(4665);var o=a(8);function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=a(7294);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=c(e);if(t){var r=c(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return i(this,a)}}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,l.Z)(e,t)}(c,e);var t,a,o,i=m(c);function c(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).reCalculateColumnCount=t.reCalculateColumnCount.bind(r(t)),t.reCalculateColumnCountDebounce=t.reCalculateColumnCountDebounce.bind(r(t)),a=t.props.breakpointCols&&t.props.breakpointCols.default?t.props.breakpointCols.default:parseInt(t.props.breakpointCols)||2,t.state={columnCount:a},t}return t=c,(a=[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!=typeof t&&(t={default:parseInt(t)||2});var a=1/0,n=t.default||2;for(var r in t){var l=parseInt(r);l>0&&e<=l&&l<a&&(a=l,n=t[r])}n=Math.max(1,parseInt(n)||1),this.state.columnCount!==n&&this.setState({columnCount:n})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),a=s.Children.toArray(this.props.children),n=0;n<a.length;n++){var r=n%e;t[r]||(t[r]=[]),t[r].push(a[n])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,a=e.columnAttrs,n=void 0===a?{}:a,r=e.columnClassName,l=this.itemsInColumns(),o="".concat(100/l.length,"%"),i=r;i&&"string"!=typeof i&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===i&&(i="my-masonry-grid_column"));var c=g(g(g({},t),n),{},{style:g(g({},n.style),{},{width:o}),className:i});return l.map((function(e,t){return s.createElement("div",u({},c,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),a=p(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),n=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(n="my-masonry-grid")),s.createElement("div",u({},a,{className:n}),this.renderColumns())}}])&&n(t.prototype,a),o&&n(t,o),c}(s.Component);y.defaultProps=d;var v=y},6371:function(e,t,a){"use strict";var n=a(7294),r=a(5444),l=a(1496);t.Z=function(e){return n.createElement(r.StaticQuery,{query:"1022643890",render:function(t){var a=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return a?n.createElement(l.Z,{alt:e.alt,fluid:a.node.childImageSharp.fluid}):null}})}},8108:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(3259),l=a(3656),o=a(3751),i=a(6371),c=a(5610),s=a(1500),m=a(428);t.default=function(){return n.createElement("div",{className:"internal-page photography-page portraits-page"},n.createElement(l.Z,null),n.createElement(r.Z,null),n.createElement(o.Z,{title:"Portraits"}),n.createElement("header",null,n.createElement("h1",null,"Portraits"),n.createElement("p",null,"Specifically selected bests.")),n.createElement("div",{className:"photography-content"},n.createElement(s.Iv,{options:{settings:{overlayColor:"rgb(4, 4, 17, 0.9)",autoplaySpeed:1500,transitionSpeed:900},buttons:{showDownloadButton:!1,showThumbnailsButton:!1}}},n.createElement(m.Z,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column"},n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Rania in the Studio",filename:"rania-one.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Jordan at The Wharf",filename:"jordan-one.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Raymakers",filename:"raymakers.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Por",filename:"por-one.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Erin",filename:"erin-one.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Kacey",filename:"kacey-one.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Bangkok",filename:"bangkok-one.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Kat",filename:"kat-one.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"chance",filename:"chance.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"rachel",filename:"rachel-one.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Luis",filename:"luis.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Ting",filename:"ting-one.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"daniel",filename:"daniel.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Kris",filename:"kris.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"harish",filename:"harish.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"daniel",filename:"jack-one.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Kris",filename:"dani-one.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"harish",filename:"bangkok-two.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"daniel",filename:"lotus.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"Kris",filename:"rania-two.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"harish",filename:"ashley.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"justine",filename:"justine.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"peter.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"helena.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"justine",filename:"tae.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"me.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"kitkat.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"justine",filename:"janedoe.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"erin-two.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"baldwin.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"me2.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"dani-two.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"dani-three.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"ting-two.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"lui.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"bri.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"kacy-two.jpeg"})),n.createElement("div",{class:"photography-image"},n.createElement(i.Z,{alt:"peter",filename:"kat-two.jpeg"}))))),n.createElement(c.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-portraits-js-58b2b1aa476f03f05d65.js.map