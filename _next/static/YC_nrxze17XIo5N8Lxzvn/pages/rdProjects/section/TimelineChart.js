(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"A+jR":function(t,e,r){"use strict";r.r(e);var o=r("dfwq"),n=r("q1tI"),a=r.n(n),l=(r("17x9"),r("XDgv")),i=r.n(l),s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function u(t,e){function r(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var c=function(){return(c=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function p(t,e,r,o){return new(r||(r=Promise))(function(n,a){function l(t){try{s(o.next(t))}catch(e){a(e)}}function i(t){try{s(o.throw(t))}catch(e){a(e)}}function s(t){t.done?n(t.value):new r(function(e){e(t.value)}).then(l,i)}s((o=o.apply(t,e||[])).next())})}function d(t,e){var r,o,n,a,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,o=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(n=(n=l.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){l.label=a[1];break}if(6===a[0]&&l.label<n[1]){l.label=n[1],n=a;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(a);break}n[2]&&l.ops.pop(),l.trys.pop();continue}a=e.call(t,l)}catch(i){a=[6,i],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var h={graph_id:null,legend_toggle:!1,graphID:null,options:{colors:null},data:null,rows:null,columns:null,diffdata:null,chartEvents:null,legendToggle:!1,chartActions:null,getChartWrapper:function(t,e){},getChartEditor:null,className:"",style:{},formatters:null,spreadSheetUrl:null,spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{},controls:null,render:null,toolbarItems:null,toolbarID:null},g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleGoogleChartsLoaderScriptLoaded=function(t){var r=e.props,o=r.chartVersion,n=r.chartPackages,a=r.chartLanguage,l=r.mapsApiKey,i=r.onLoad;t.charts.load(o||"current",{packages:n||["corechart","controls"],language:a||"en",mapsApiKey:l}),t.charts.setOnLoadCallback(function(){i(t)})},e}return u(e,t),e.prototype.shouldComponentUpdate=function(t){return t.chartPackages===this.props.chartPackages},e.prototype.render=function(){var t=this,e=this.props.onError;return Object(n.createElement)(i.a,{url:"https://www.gstatic.com/charts/loader.js",onError:e,onLoad:function(){var e=window;e.google&&t.handleGoogleChartsLoaderScriptLoaded(e.google)}})},e}(n.Component),f=0,v=function(){return"reactgooglegraph-"+(f+=1)},m=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],b=function(t,e,r){return void 0===r&&(r={}),p(void 0,void 0,void 0,function(){return d(this,function(o){return[2,new Promise(function(o,n){var a=r.headers?"headers="+r.headers:"headers=0",l=r.query?"&tq="+encodeURIComponent(r.query):"",i=r.gid?"&gid="+r.gid:"",s=r.sheet?"&sheet="+r.sheet:"",u=r.access_token?"&access_token="+r.access_token:"",c=e+"/gviz/tq?"+(""+a+i+s+l+u);new t.visualization.Query(c).send(function(t){t.isError()?n("Error in query:  "+t.getMessage()+" "+t.getDetailedMessage()):o(t.getDataTable())})})]})})},C=Object(n.createContext)(h),y=C.Provider,w=C.Consumer,E=function(t){var e=t.children,r=t.value;return Object(n.createElement)(y,{value:r},e)},O=function(t){var e=t.render;return Object(n.createElement)(w,null,function(t){return e(t)})},D="#CCCCCC",T=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={hiddenColumns:[]},e.listenToLegendToggle=function(){var t=e.props,r=t.google,o=t.googleChartWrapper;r.visualization.events.addListener(o,"select",function(){var t=o.getChart().getSelection(),r=o.getDataTable();if(0!==t.length&&null===t[0].row&&null!==r){var n=t[0].column,a=e.getColumnID(r,n);e.state.hiddenColumns.includes(a)?e.setState(function(t){return c({},t,{hiddenColumns:t.hiddenColumns.filter(function(t){return t!==a}).slice()})}):e.setState(function(t){return c({},t,{hiddenColumns:t.hiddenColumns.concat([a])})})}})},e.applyFormatters=function(t,r){for(var o=e.props.google,n=0,a=r;n<a.length;n++){var l=a[n];switch(l.type){case"ArrowFormat":(i=new o.visualization.ArrowFormat(l.options)).format(t,l.column);break;case"BarFormat":(i=new o.visualization.BarFormat(l.options)).format(t,l.column);break;case"ColorFormat":for(var i=new o.visualization.ColorFormat(l.options),s=0,u=l.ranges;s<u.length;s++){var c=u[s];i.addRange.apply(i,c)}i.format(t,l.column);break;case"DateFormat":(i=new o.visualization.DateFormat(l.options)).format(t,l.column);break;case"NumberFormat":(i=new o.visualization.NumberFormat(l.options)).format(t,l.column);break;case"PatternFormat":(i=new o.visualization.PatternFormat(l.options)).format(t,l.column)}}},e.getColumnID=function(t,e){return t.getColumnId(e)||t.getColumnLabel(e)},e.draw=function(t){var r=t.data,o=t.diffdata,n=t.rows,a=t.columns,l=t.options,i=t.legend_toggle,s=t.legendToggle,u=t.chartType,c=t.formatters,h=t.spreadSheetUrl,g=t.spreadSheetQueryParameters;return p(e,void 0,void 0,function(){var t,e,p,f,v,m,C,y,w,E,O,D,T,P;return d(this,function(d){switch(d.label){case 0:return t=this.props,e=t.google,p=t.googleChartWrapper,v=null,null!==o&&(m=e.visualization.arrayToDataTable(o.old),C=e.visualization.arrayToDataTable(o.new),v=e.visualization[u].prototype.computeDiff(m,C)),null===r?[3,1]:(f=Array.isArray(r)?e.visualization.arrayToDataTable(r):new e.visualization.DataTable(r),[3,5]);case 1:return null===n||null===a?[3,2]:(f=e.visualization.arrayToDataTable([a].concat(n)),[3,5]);case 2:return null===h?[3,4]:[4,b(e,h,g)];case 3:return f=d.sent(),[3,5];case 4:f=e.visualization.arrayToDataTable([]),d.label=5;case 5:for(y=f.getNumberOfColumns(),w=0;w<y;w+=1)E=this.getColumnID(f,w),this.state.hiddenColumns.includes(E)&&(O=f.getColumnLabel(w),D=f.getColumnId(w),T=f.getColumnType(w),f.removeColumn(w),f.addColumn({label:O,id:D,type:T}));return P=p.getChart(),"Timeline"===p.getChartType()&&P&&P.clearChart(),p.setOptions(l),p.setDataTable(f),p.draw(),null!==this.props.googleChartDashboard&&this.props.googleChartDashboard.draw(f),null!==v&&(p.setDataTable(v),p.draw()),null!==c&&(this.applyFormatters(f,c),p.setDataTable(f),p.draw()),!0!==s&&!0!==i||this.grayOutHiddenColumns({options:l}),[2]}})})},e.grayOutHiddenColumns=function(t){var r=t.options,o=e.props.googleChartWrapper,n=o.getDataTable();if(null!==n){var a=n.getNumberOfColumns();if(!1!==e.state.hiddenColumns.length>0){var l=Array.from({length:a-1}).map(function(t,o){var a=e.getColumnID(n,o+1);return e.state.hiddenColumns.includes(a)?D:void 0!==r.colors&&null!==r.colors?r.colors[o]:m[o]});o.setOptions(c({},r,{colors:l})),o.draw()}}},e.onResize=function(){e.props.googleChartWrapper.draw()},e}return u(e,t),e.prototype.componentDidMount=function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()},e.prototype.componentWillUnmount=function(){var t=this.props,e=t.google,r=t.googleChartWrapper;window.removeEventListener("resize",this.onResize),e.visualization.events.removeAllListeners(r),"Timeline"===r.getChartType()&&r.getChart()&&r.getChart().clearChart()},e.prototype.componentDidUpdate=function(){this.draw(this.props)},e.prototype.render=function(){return null},e}(n.Component),P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.render=function(){var t=this.props,e=t.google,r=t.googleChartWrapper,o=t.googleChartDashboard;return Object(n.createElement)(O,{render:function(t){return Object(n.createElement)(T,c({},t,{google:e,googleChartWrapper:r,googleChartDashboard:o}))}})},e}(n.Component),j=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.listenToEvents=function(t){var e=this,r=t.chartEvents,o=t.google,n=t.googleChartWrapper;if(null!==r){o.visualization.events.removeAllListeners(n);for(var a=function(t){var r=t.eventName,a=t.callback;o.visualization.events.addListener(n,r,function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];a({chartWrapper:n,props:e.props,google:o,eventArgs:t})})},l=0,i=r;l<i.length;l++){a(i[l])}}},e.prototype.render=function(){var t=this,e=this.props,r=e.google,o=e.googleChartWrapper;return Object(n.createElement)(O,{render:function(e){return t.listenToEvents({chartEvents:e.chartEvents||null,google:r,googleChartWrapper:o}),null}})},e}(n.Component),_=0,I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},e.graphID=null,e.dashboard_ref=Object(n.createRef)(),e.toolbar_ref=Object(n.createRef)(),e.getGraphID=function(){var t,r=e.props,o=r.graphID,n=r.graph_id;return t=null===o&&null===n?null===e.graphID?v():e.graphID:null!==o&&null===n?o:null!==n&&null===o?n:o,e.graphID=t,e.graphID},e.getControlID=function(t,e){return _+=1,void 0===t?"googlechart-control-"+e+"-"+_:t},e.addControls=function(t,r){var o=e.props,n=o.google,a=o.controls,l=null===a?null:a.map(function(t,r){var o=t.controlID,a=t.controlType,l=t.options,i=t.controlWrapperParams,s=e.getControlID(o,r);return{controlProp:t,control:new n.visualization.ControlWrapper(c({containerId:s,controlType:a,options:l},i))}});if(null===l)return null;r.bind(l.map(function(t){return t.control}),t);for(var i=function(r){for(var o=r.control,a=r.controlProp.controlEvents,l=function(r){var a=r.callback,l=r.eventName;n.visualization.events.removeListener(o,l,a),n.visualization.events.addListener(o,l,function(){for(var r=[],l=0;l<arguments.length;l++)r[l]=arguments[l];a({chartWrapper:t,controlWrapper:o,props:e.props,google:n,eventArgs:r})})},i=0,s=void 0===a?[]:a;i<s.length;i++){l(s[i])}},s=0,u=l;s<u.length;s++){i(u[s])}return l},e.renderChart=function(){var t=e.props,r=t.width,o=t.height,a=t.options,l=t.style,i=t.className,s=t.rootProps,u=t.google,p=c({height:o||a&&a.height,width:r||a&&a.width},l);return Object(n.createElement)("div",c({id:e.getGraphID(),style:p,className:i},s),e.state.isReady&&null!==e.state.googleChartWrapper?Object(n.createElement)(n.Fragment,null,Object(n.createElement)(P,{googleChartWrapper:e.state.googleChartWrapper,google:u,googleChartDashboard:e.state.googleChartDashboard}),Object(n.createElement)(j,{googleChartWrapper:e.state.googleChartWrapper,google:u})):null)},e.renderControl=function(t){return void 0===t&&(t=function(t){t.control,t.controlProp;return!0}),e.state.isReady&&null!==e.state.googleChartControls?Object(n.createElement)(n.Fragment,null,e.state.googleChartControls.filter(function(e){var r=e.controlProp,o=e.control;return t({control:o,controlProp:r})}).map(function(t){var e=t.control;t.controlProp;return Object(n.createElement)("div",{key:e.getContainerId(),id:e.getContainerId()})})):null},e.renderToolBar=function(){return null===e.props.toolbarItems?null:Object(n.createElement)("div",{ref:e.toolbar_ref})},e}return u(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.options,r=t.google,o=t.chartType,n=t.chartWrapperParams,a=t.toolbarItems,l=t.getChartEditor,i=t.getChartWrapper,s=c({chartType:o,options:e,containerId:this.getGraphID()},n),u=new r.visualization.ChartWrapper(s);u.setOptions(e),i(u,r);var p=new r.visualization.Dashboard(this.dashboard_ref),d=this.addControls(u,p);null!==a&&r.visualization.drawToolbar(this.toolbar_ref.current,a);var h=null;null!==l&&l({chartEditor:h=new r.visualization.ChartEditor,chartWrapper:u,google:r}),this.setState({googleChartEditor:h,googleChartControls:d,googleChartDashboard:p,googleChartWrapper:u,isReady:!0})},e.prototype.shouldComponentUpdate=function(t,e){return this.state.isReady!==e.isReady},e.prototype.render=function(){var t=this.props,e=t.width,r=t.height,o=t.options,a=t.style,l=c({height:r||o&&o.height,width:e||o&&o.width},a);return null!==this.props.render?Object(n.createElement)("div",{ref:this.dashboard_ref,style:l},Object(n.createElement)("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):Object(n.createElement)("div",{ref:this.dashboard_ref,style:l},this.renderControl(function(t){return"bottom"!==t.controlProp.controlPosition}),this.renderChart(),this.renderControl(function(t){return"bottom"===t.controlProp.controlPosition}),this.renderToolBar())},e}(n.Component),L=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={loadingStatus:"loading",google:null},e}return u(e,t),e.prototype.render=function(){var t=this,e=this.props,r=e.chartLanguage,o=e.chartPackages,a=e.chartVersion,l=e.mapsApiKey,i=e.loader,s=e.errorElement;return Object(n.createElement)(E,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?Object(n.createElement)(I,c({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&s?s:i,Object(n.createElement)(g,c({},{chartLanguage:r,chartPackages:o,chartVersion:a,mapsApiKey:l},{onLoad:function(e){t.setState({loadingStatus:"ready",google:e})},onError:function(){t.setState({loadingStatus:"errored"})}})))},e.defaultProps=h,e}(n.Component),k=[{type:"string",id:"President"},{type:"date",id:"Start"},{type:"date",id:"End"}];e.default=function(t){var e=t.rows,r=void 0===e?[]:e,n=t.onSelected;return a.a.createElement(L,{chartType:"Timeline",width:"100%",height:"300px",loader:a.a.createElement("div",null,"Loading Chart"),data:[k].concat(Object(o.default)(r.map(function(t){var e=t.short,r=t.start,o=t.end;return[e,new Date(r),new Date(o)]}))),chartEvents:[{eventName:"select",callback:function(t){var e=t.chartWrapper.getChart().getSelection();n(e[0].row)}}]})}},A6f6:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rdProjects/section/TimelineChart",function(){var t=r("A+jR");return{page:t.default||t}}])},XDgv:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),a=r("q1tI"),l=(o=a)&&o.__esModule?o:{default:o},i=r("17x9");var s=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.scriptLoaderId="id"+r.constructor.idCount++,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,l.default.Component),n(e,[{key:"componentDidMount",value:function(){var t,e,r,o=this.props,n=o.onError,a=o.onLoad,l=o.url;this.constructor.loadedScripts[l]?a():this.constructor.erroredScripts[l]?n():this.constructor.scriptObservers[l]?this.constructor.scriptObservers[l][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[l]=(t={},e=this.scriptLoaderId,r=this.props,e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t),this.createScript())}},{key:"componentWillUnmount",value:function(){var t=this.props.url,e=this.constructor.scriptObservers[t];e&&delete e[this.scriptLoaderId]}},{key:"createScript",value:function(){var t=this,e=this.props,r=e.onCreate,o=e.url,n=e.attributes,a=document.createElement("script");r(),n&&Object.keys(n).forEach(function(t){return a.setAttribute(t,n[t])}),a.src=o,a.hasAttribute("async")||(a.async=1);var l=function(e){var r=t.constructor.scriptObservers[o];Object.keys(r).forEach(function(n){e(r[n])&&delete t.constructor.scriptObservers[o][t.scriptLoaderId]})};a.onload=function(){t.constructor.loadedScripts[o]=!0,l(function(t){return t.onLoad(),!0})},a.onerror=function(){t.constructor.erroredScripts[o]=!0,l(function(t){return t.onError(),!0})},document.body.appendChild(a)}},{key:"render",value:function(){return null}}]),e}();s.propTypes={attributes:i.PropTypes.object,onCreate:i.PropTypes.func,onError:i.PropTypes.func.isRequired,onLoad:i.PropTypes.func.isRequired,url:i.PropTypes.string.isRequired},s.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},s.scriptObservers={},s.loadedScripts={},s.erroredScripts={},s.idCount=0,e.default=s,t.exports=e.default}},[["A6f6",1,0]]]);