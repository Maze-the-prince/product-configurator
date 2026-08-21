(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Mx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qg={exports:{}},Mc={},Jg={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),Ex=Symbol.for("react.portal"),Tx=Symbol.for("react.fragment"),wx=Symbol.for("react.strict_mode"),Ax=Symbol.for("react.profiler"),Rx=Symbol.for("react.provider"),Cx=Symbol.for("react.context"),bx=Symbol.for("react.forward_ref"),Px=Symbol.for("react.suspense"),Lx=Symbol.for("react.memo"),Nx=Symbol.for("react.lazy"),Bd=Symbol.iterator;function Ix(n){return n===null||typeof n!="object"?null:(n=Bd&&n[Bd]||n["@@iterator"],typeof n=="function"?n:null)}var e_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t_=Object.assign,n_={};function to(n,e,t){this.props=n,this.context=e,this.refs=n_,this.updater=t||e_}to.prototype.isReactComponent={};to.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};to.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function i_(){}i_.prototype=to.prototype;function vh(n,e,t){this.props=n,this.context=e,this.refs=n_,this.updater=t||e_}var xh=vh.prototype=new i_;xh.constructor=vh;t_(xh,to.prototype);xh.isPureReactComponent=!0;var zd=Array.isArray,r_=Object.prototype.hasOwnProperty,yh={current:null},s_={key:!0,ref:!0,__self:!0,__source:!0};function o_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)r_.call(e,i)&&!s_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xa,type:n,key:s,ref:o,props:r,_owner:yh.current}}function Dx(n,e){return{$$typeof:xa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Sh(n){return typeof n=="object"&&n!==null&&n.$$typeof===xa}function Ux(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Hd=/\/+/g;function $c(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Ux(""+n.key):e.toString(36)}function wl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case xa:case Ex:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+$c(o,0):i,zd(r)?(t="",n!=null&&(t=n.replace(Hd,"$&/")+"/"),wl(r,e,t,"",function(c){return c})):r!=null&&(Sh(r)&&(r=Dx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Hd,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",zd(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+$c(s,a);o+=wl(s,e,t,l,r)}else if(l=Ix(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+$c(s,a++),o+=wl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(n,e,t){if(n==null)return n;var i=[],r=0;return wl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Ox(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var cn={current:null},Al={transition:null},Fx={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:Al,ReactCurrentOwner:yh};function a_(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Pa,forEach:function(n,e,t){Pa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Pa(n,function(){e++}),e},toArray:function(n){return Pa(n,function(e){return e})||[]},only:function(n){if(!Sh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};He.Component=to;He.Fragment=Tx;He.Profiler=Ax;He.PureComponent=vh;He.StrictMode=wx;He.Suspense=Px;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx;He.act=a_;He.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=t_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)r_.call(e,l)&&!s_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:xa,type:n.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(n){return n={$$typeof:Cx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Rx,_context:n},n.Consumer=n};He.createElement=o_;He.createFactory=function(n){var e=o_.bind(null,n);return e.type=n,e};He.createRef=function(){return{current:null}};He.forwardRef=function(n){return{$$typeof:bx,render:n}};He.isValidElement=Sh;He.lazy=function(n){return{$$typeof:Nx,_payload:{_status:-1,_result:n},_init:Ox}};He.memo=function(n,e){return{$$typeof:Lx,type:n,compare:e===void 0?null:e}};He.startTransition=function(n){var e=Al.transition;Al.transition={};try{n()}finally{Al.transition=e}};He.unstable_act=a_;He.useCallback=function(n,e){return cn.current.useCallback(n,e)};He.useContext=function(n){return cn.current.useContext(n)};He.useDebugValue=function(){};He.useDeferredValue=function(n){return cn.current.useDeferredValue(n)};He.useEffect=function(n,e){return cn.current.useEffect(n,e)};He.useId=function(){return cn.current.useId()};He.useImperativeHandle=function(n,e,t){return cn.current.useImperativeHandle(n,e,t)};He.useInsertionEffect=function(n,e){return cn.current.useInsertionEffect(n,e)};He.useLayoutEffect=function(n,e){return cn.current.useLayoutEffect(n,e)};He.useMemo=function(n,e){return cn.current.useMemo(n,e)};He.useReducer=function(n,e,t){return cn.current.useReducer(n,e,t)};He.useRef=function(n){return cn.current.useRef(n)};He.useState=function(n){return cn.current.useState(n)};He.useSyncExternalStore=function(n,e,t){return cn.current.useSyncExternalStore(n,e,t)};He.useTransition=function(){return cn.current.useTransition()};He.version="18.3.1";Jg.exports=He;var Je=Jg.exports;const l_=Mx(Je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx=Je,Bx=Symbol.for("react.element"),zx=Symbol.for("react.fragment"),Hx=Object.prototype.hasOwnProperty,Vx=kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gx={key:!0,ref:!0,__self:!0,__source:!0};function c_(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Hx.call(e,i)&&!Gx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Bx,type:n,key:s,ref:o,props:r,_owner:Vx.current}}Mc.Fragment=zx;Mc.jsx=c_;Mc.jsxs=c_;Qg.exports=Mc;var ie=Qg.exports,u_={exports:{}},wn={},f_={exports:{}},h_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(P,H){var X=P.length;P.push(H);e:for(;0<X;){var V=X-1>>>1,le=P[V];if(0<r(le,H))P[V]=H,P[X]=le,X=V;else break e}}function t(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var H=P[0],X=P.pop();if(X!==H){P[0]=X;e:for(var V=0,le=P.length,ve=le>>>1;V<ve;){var B=2*(V+1)-1,Z=P[B],oe=B+1,re=P[oe];if(0>r(Z,X))oe<le&&0>r(re,Z)?(P[V]=re,P[oe]=X,V=oe):(P[V]=Z,P[B]=X,V=B);else if(oe<le&&0>r(re,X))P[V]=re,P[oe]=X,V=oe;else break e}}return H}function r(P,H){var X=P.sortIndex-H.sortIndex;return X!==0?X:P.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var H=t(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=P)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=t(c)}}function y(P){if(x=!1,v(P),!g)if(t(l)!==null)g=!0,J(R);else{var H=t(c);H!==null&&Y(y,H.startTime-P)}}function R(P,H){g=!1,x&&(x=!1,d(b),b=-1),p=!0;var X=h;try{for(v(H),f=t(l);f!==null&&(!(f.expirationTime>H)||P&&!U());){var V=f.callback;if(typeof V=="function"){f.callback=null,h=f.priorityLevel;var le=V(f.expirationTime<=H);H=n.unstable_now(),typeof le=="function"?f.callback=le:f===t(l)&&i(l),v(H)}else i(l);f=t(l)}if(f!==null)var ve=!0;else{var B=t(c);B!==null&&Y(y,B.startTime-H),ve=!1}return ve}finally{f=null,h=X,p=!1}}var A=!1,w=null,b=-1,M=5,S=-1;function U(){return!(n.unstable_now()-S<M)}function G(){if(w!==null){var P=n.unstable_now();S=P;var H=!0;try{H=w(!0,P)}finally{H?L():(A=!1,w=null)}}else A=!1}var L;if(typeof _=="function")L=function(){_(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,j=$.port2;$.port1.onmessage=G,L=function(){j.postMessage(null)}}else L=function(){m(G,0)};function J(P){w=P,A||(A=!0,L())}function Y(P,H){b=m(function(){P(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,J(R))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(P){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var X=h;h=H;try{return P()}finally{h=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var X=h;h=P;try{return H()}finally{h=X}},n.unstable_scheduleCallback=function(P,H,X){var V=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?V+X:V):X=V,P){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=X+le,P={id:u++,callback:H,priorityLevel:P,startTime:X,expirationTime:le,sortIndex:-1},X>V?(P.sortIndex=X,e(c,P),t(l)===null&&P===t(c)&&(x?(d(b),b=-1):x=!0,Y(y,X-V))):(P.sortIndex=le,e(l,P),g||p||(g=!0,J(R))),P},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(P){var H=h;return function(){var X=h;h=H;try{return P.apply(this,arguments)}finally{h=X}}}})(h_);f_.exports=h_;var Wx=f_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx=Je,Tn=Wx;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d_=new Set,Qo={};function $r(n,e){Bs(n,e),Bs(n+"Capture",e)}function Bs(n,e){for(Qo[n]=e,n=0;n<e.length;n++)d_.add(e[n])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cf=Object.prototype.hasOwnProperty,jx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vd={},Gd={};function $x(n){return cf.call(Gd,n)?!0:cf.call(Vd,n)?!1:jx.test(n)?Gd[n]=!0:(Vd[n]=!0,!1)}function qx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Yx(n,e,t,i){if(e===null||typeof e>"u"||qx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){kt[n]=new un(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];kt[e]=new un(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){kt[n]=new un(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){kt[n]=new un(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){kt[n]=new un(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){kt[n]=new un(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){kt[n]=new un(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){kt[n]=new un(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){kt[n]=new un(n,5,!1,n.toLowerCase(),null,!1,!1)});var Mh=/[\-:]([a-z])/g;function Eh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Mh,Eh);kt[e]=new un(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Mh,Eh);kt[e]=new un(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Mh,Eh);kt[e]=new un(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){kt[n]=new un(n,1,!1,n.toLowerCase(),null,!1,!1)});kt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){kt[n]=new un(n,1,!1,n.toLowerCase(),null,!0,!0)});function Th(n,e,t,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yx(e,t,r,i)&&(t=null),i||r===null?$x(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Fi=Xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,La=Symbol.for("react.element"),gs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),uf=Symbol.for("react.profiler"),p_=Symbol.for("react.provider"),m_=Symbol.for("react.context"),Ah=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),hf=Symbol.for("react.suspense_list"),Rh=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),g_=Symbol.for("react.offscreen"),Wd=Symbol.iterator;function ho(n){return n===null||typeof n!="object"?null:(n=Wd&&n[Wd]||n["@@iterator"],typeof n=="function"?n:null)}var gt=Object.assign,qc;function Io(n){if(qc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+n}var Yc=!1;function Kc(n,e){if(!n||Yc)return"";Yc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Io(n):""}function Kx(n){switch(n.tag){case 5:return Io(n.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return n=Kc(n.type,!1),n;case 11:return n=Kc(n.type.render,!1),n;case 1:return n=Kc(n.type,!0),n;default:return""}}function df(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _s:return"Fragment";case gs:return"Portal";case uf:return"Profiler";case wh:return"StrictMode";case ff:return"Suspense";case hf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case m_:return(n.displayName||"Context")+".Consumer";case p_:return(n._context.displayName||"Context")+".Provider";case Ah:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Rh:return e=n.displayName||null,e!==null?e:df(n.type)||"Memo";case qi:e=n._payload,n=n._init;try{return df(n(e))}catch{}}return null}function Zx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return df(e);case 8:return e===wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function __(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qx(n){var e=__(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Na(n){n._valueTracker||(n._valueTracker=Qx(n))}function v_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=__(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function zl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function pf(n,e){var t=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Xd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=dr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function x_(n,e){e=e.checked,e!=null&&Th(n,"checked",e,!1)}function mf(n,e){x_(n,e);var t=dr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?gf(n,e.type,t):e.hasOwnProperty("defaultValue")&&gf(n,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function jd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function gf(n,e,t){(e!=="number"||zl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Do=Array.isArray;function bs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+dr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function _f(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $d(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(Do(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:dr(t)}}function y_(n,e){var t=dr(e.value),i=dr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function qd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function S_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?S_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ia,M_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Jo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jx=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(n){Jx.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Bo[e]=Bo[n]})});function E_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Bo.hasOwnProperty(n)&&Bo[n]?(""+e).trim():e+"px"}function T_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=E_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var ey=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(n,e){if(e){if(ey[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function yf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sf=null;function Ch(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Mf=null,Ps=null,Ls=null;function Yd(n){if(n=Ma(n)){if(typeof Mf!="function")throw Error(te(280));var e=n.stateNode;e&&(e=Rc(e),Mf(n.stateNode,n.type,e))}}function w_(n){Ps?Ls?Ls.push(n):Ls=[n]:Ps=n}function A_(){if(Ps){var n=Ps,e=Ls;if(Ls=Ps=null,Yd(n),e)for(n=0;n<e.length;n++)Yd(e[n])}}function R_(n,e){return n(e)}function C_(){}var Zc=!1;function b_(n,e,t){if(Zc)return n(e,t);Zc=!0;try{return R_(n,e,t)}finally{Zc=!1,(Ps!==null||Ls!==null)&&(C_(),A_())}}function ea(n,e){var t=n.stateNode;if(t===null)return null;var i=Rc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var Ef=!1;if(Li)try{var po={};Object.defineProperty(po,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Ef=!1}function ty(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var zo=!1,Hl=null,Vl=!1,Tf=null,ny={onError:function(n){zo=!0,Hl=n}};function iy(n,e,t,i,r,s,o,a,l){zo=!1,Hl=null,ty.apply(ny,arguments)}function ry(n,e,t,i,r,s,o,a,l){if(iy.apply(this,arguments),zo){if(zo){var c=Hl;zo=!1,Hl=null}else throw Error(te(198));Vl||(Vl=!0,Tf=c)}}function qr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function P_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Kd(n){if(qr(n)!==n)throw Error(te(188))}function sy(n){var e=n.alternate;if(!e){if(e=qr(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Kd(r),n;if(s===i)return Kd(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function L_(n){return n=sy(n),n!==null?N_(n):null}function N_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=N_(n);if(e!==null)return e;n=n.sibling}return null}var I_=Tn.unstable_scheduleCallback,Zd=Tn.unstable_cancelCallback,oy=Tn.unstable_shouldYield,ay=Tn.unstable_requestPaint,St=Tn.unstable_now,ly=Tn.unstable_getCurrentPriorityLevel,bh=Tn.unstable_ImmediatePriority,D_=Tn.unstable_UserBlockingPriority,Gl=Tn.unstable_NormalPriority,cy=Tn.unstable_LowPriority,U_=Tn.unstable_IdlePriority,Ec=null,ai=null;function uy(n){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Ec,n,void 0,(n.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:dy,fy=Math.log,hy=Math.LN2;function dy(n){return n>>>=0,n===0?32:31-(fy(n)/hy|0)|0}var Da=64,Ua=4194304;function Uo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Uo(a):(s&=o,s!==0&&(i=Uo(s)))}else o=t&~r,o!==0?i=Uo(o):s!==0&&(i=Uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-$n(e),r=1<<t,i|=n[t],e&=~r;return i}function py(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function my(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=py(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function wf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function O_(){var n=Da;return Da<<=1,!(Da&4194240)&&(Da=64),n}function Qc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ya(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-$n(e),n[e]=t}function gy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-$n(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Ph(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-$n(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var nt=0;function F_(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var k_,Lh,B_,z_,H_,Af=!1,Oa=[],ir=null,rr=null,sr=null,ta=new Map,na=new Map,Zi=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(n,e){switch(n){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function mo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ma(e),e!==null&&Lh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function vy(n,e,t,i,r){switch(e){case"focusin":return ir=mo(ir,n,e,t,i,r),!0;case"dragenter":return rr=mo(rr,n,e,t,i,r),!0;case"mouseover":return sr=mo(sr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ta.set(s,mo(ta.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,na.set(s,mo(na.get(s)||null,n,e,t,i,r)),!0}return!1}function V_(n){var e=Dr(n.target);if(e!==null){var t=qr(e);if(t!==null){if(e=t.tag,e===13){if(e=P_(t),e!==null){n.blockedOn=e,H_(n.priority,function(){B_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Rl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Rf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Sf=i,t.target.dispatchEvent(i),Sf=null}else return e=Ma(t),e!==null&&Lh(e),n.blockedOn=t,!1;e.shift()}return!0}function Jd(n,e,t){Rl(n)&&t.delete(e)}function xy(){Af=!1,ir!==null&&Rl(ir)&&(ir=null),rr!==null&&Rl(rr)&&(rr=null),sr!==null&&Rl(sr)&&(sr=null),ta.forEach(Jd),na.forEach(Jd)}function go(n,e){n.blockedOn===e&&(n.blockedOn=null,Af||(Af=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,xy)))}function ia(n){function e(r){return go(r,n)}if(0<Oa.length){go(Oa[0],n);for(var t=1;t<Oa.length;t++){var i=Oa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ir!==null&&go(ir,n),rr!==null&&go(rr,n),sr!==null&&go(sr,n),ta.forEach(e),na.forEach(e),t=0;t<Zi.length;t++)i=Zi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Zi.length&&(t=Zi[0],t.blockedOn===null);)V_(t),t.blockedOn===null&&Zi.shift()}var Ns=Fi.ReactCurrentBatchConfig,Xl=!0;function yy(n,e,t,i){var r=nt,s=Ns.transition;Ns.transition=null;try{nt=1,Nh(n,e,t,i)}finally{nt=r,Ns.transition=s}}function Sy(n,e,t,i){var r=nt,s=Ns.transition;Ns.transition=null;try{nt=4,Nh(n,e,t,i)}finally{nt=r,Ns.transition=s}}function Nh(n,e,t,i){if(Xl){var r=Rf(n,e,t,i);if(r===null)lu(n,e,i,jl,t),Qd(n,i);else if(vy(r,n,e,t,i))i.stopPropagation();else if(Qd(n,i),e&4&&-1<_y.indexOf(n)){for(;r!==null;){var s=Ma(r);if(s!==null&&k_(s),s=Rf(n,e,t,i),s===null&&lu(n,e,i,jl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else lu(n,e,i,null,t)}}var jl=null;function Rf(n,e,t,i){if(jl=null,n=Ch(i),n=Dr(n),n!==null)if(e=qr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=P_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return jl=n,null}function G_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ly()){case bh:return 1;case D_:return 4;case Gl:case cy:return 16;case U_:return 536870912;default:return 16}default:return 16}}var Ji=null,Ih=null,Cl=null;function W_(){if(Cl)return Cl;var n,e=Ih,t=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Cl=r.slice(n,1<i?1-i:void 0)}function bl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Fa(){return!0}function ep(){return!1}function An(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fa:ep,this.isPropagationStopped=ep,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Fa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Fa)},persist:function(){},isPersistent:Fa}),e}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dh=An(no),Sa=gt({},no,{view:0,detail:0}),My=An(Sa),Jc,eu,_o,Tc=gt({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_o&&(_o&&n.type==="mousemove"?(Jc=n.screenX-_o.screenX,eu=n.screenY-_o.screenY):eu=Jc=0,_o=n),Jc)},movementY:function(n){return"movementY"in n?n.movementY:eu}}),tp=An(Tc),Ey=gt({},Tc,{dataTransfer:0}),Ty=An(Ey),wy=gt({},Sa,{relatedTarget:0}),tu=An(wy),Ay=gt({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),Ry=An(Ay),Cy=gt({},no,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),by=An(Cy),Py=gt({},no,{data:0}),np=An(Py),Ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Iy[n])?!!e[n]:!1}function Uh(){return Dy}var Uy=gt({},Sa,{key:function(n){if(n.key){var e=Ly[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=bl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ny[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uh,charCode:function(n){return n.type==="keypress"?bl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Oy=An(Uy),Fy=gt({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=An(Fy),ky=gt({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uh}),By=An(ky),zy=gt({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=An(zy),Vy=gt({},Tc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=An(Vy),Wy=[9,13,27,32],Oh=Li&&"CompositionEvent"in window,Ho=null;Li&&"documentMode"in document&&(Ho=document.documentMode);var Xy=Li&&"TextEvent"in window&&!Ho,X_=Li&&(!Oh||Ho&&8<Ho&&11>=Ho),rp=" ",sp=!1;function j_(n,e){switch(n){case"keyup":return Wy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var vs=!1;function jy(n,e){switch(n){case"compositionend":return $_(e);case"keypress":return e.which!==32?null:(sp=!0,rp);case"textInput":return n=e.data,n===rp&&sp?null:n;default:return null}}function $y(n,e){if(vs)return n==="compositionend"||!Oh&&j_(n,e)?(n=W_(),Cl=Ih=Ji=null,vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return X_&&e.locale!=="ko"?null:e.data;default:return null}}var qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!qy[n.type]:e==="textarea"}function q_(n,e,t,i){w_(i),e=$l(e,"onChange"),0<e.length&&(t=new Dh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Vo=null,ra=null;function Yy(n){sv(n,0)}function wc(n){var e=Ss(n);if(v_(e))return n}function Ky(n,e){if(n==="change")return e}var Y_=!1;if(Li){var nu;if(Li){var iu="oninput"in document;if(!iu){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),iu=typeof ap.oninput=="function"}nu=iu}else nu=!1;Y_=nu&&(!document.documentMode||9<document.documentMode)}function lp(){Vo&&(Vo.detachEvent("onpropertychange",K_),ra=Vo=null)}function K_(n){if(n.propertyName==="value"&&wc(ra)){var e=[];q_(e,ra,n,Ch(n)),b_(Yy,e)}}function Zy(n,e,t){n==="focusin"?(lp(),Vo=e,ra=t,Vo.attachEvent("onpropertychange",K_)):n==="focusout"&&lp()}function Qy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wc(ra)}function Jy(n,e){if(n==="click")return wc(e)}function eS(n,e){if(n==="input"||n==="change")return wc(e)}function tS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Zn=typeof Object.is=="function"?Object.is:tS;function sa(n,e){if(Zn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!cf.call(e,r)||!Zn(n[r],e[r]))return!1}return!0}function cp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function up(n,e){var t=cp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=cp(t)}}function Z_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Z_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Q_(){for(var n=window,e=zl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=zl(n.document)}return e}function Fh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function nS(n){var e=Q_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Z_(t.ownerDocument.documentElement,t)){if(i!==null&&Fh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=up(t,s);var o=up(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var iS=Li&&"documentMode"in document&&11>=document.documentMode,xs=null,Cf=null,Go=null,bf=!1;function fp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bf||xs==null||xs!==zl(i)||(i=xs,"selectionStart"in i&&Fh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Go&&sa(Go,i)||(Go=i,i=$l(Cf,"onSelect"),0<i.length&&(e=new Dh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=xs)))}function ka(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ys={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionend:ka("Transition","TransitionEnd")},ru={},J_={};Li&&(J_=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Ac(n){if(ru[n])return ru[n];if(!ys[n])return n;var e=ys[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in J_)return ru[n]=e[t];return n}var ev=Ac("animationend"),tv=Ac("animationiteration"),nv=Ac("animationstart"),iv=Ac("transitionend"),rv=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(n,e){rv.set(n,e),$r(e,[n])}for(var su=0;su<hp.length;su++){var ou=hp[su],rS=ou.toLowerCase(),sS=ou[0].toUpperCase()+ou.slice(1);gr(rS,"on"+sS)}gr(ev,"onAnimationEnd");gr(tv,"onAnimationIteration");gr(nv,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(iv,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function dp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ry(i,e,void 0,n),n.currentTarget=null}function sv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;dp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;dp(r,a,c),s=l}}}if(Vl)throw n=Tf,Vl=!1,Tf=null,n}function at(n,e){var t=e[Df];t===void 0&&(t=e[Df]=new Set);var i=n+"__bubble";t.has(i)||(ov(e,n,2,!1),t.add(i))}function au(n,e,t){var i=0;e&&(i|=4),ov(t,n,i,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[Ba]){n[Ba]=!0,d_.forEach(function(t){t!=="selectionchange"&&(oS.has(t)||au(t,!1,n),au(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,au("selectionchange",!1,e))}}function ov(n,e,t,i){switch(G_(e)){case 1:var r=yy;break;case 4:r=Sy;break;default:r=Nh}t=r.bind(null,e,t,n),r=void 0,!Ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function lu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}b_(function(){var c=s,u=Ch(t),f=[];e:{var h=rv.get(n);if(h!==void 0){var p=Dh,g=n;switch(n){case"keypress":if(bl(t)===0)break e;case"keydown":case"keyup":p=Oy;break;case"focusin":g="focus",p=tu;break;case"focusout":g="blur",p=tu;break;case"beforeblur":case"afterblur":p=tu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=By;break;case ev:case tv:case nv:p=Ry;break;case iv:p=Hy;break;case"scroll":p=My;break;case"wheel":p=Gy;break;case"copy":case"cut":case"paste":p=by;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ip}var x=(e&4)!==0,m=!x&&n==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=ea(_,d),y!=null&&x.push(aa(_,y,v)))),m)break;_=_.return}0<x.length&&(h=new p(h,g,null,t,u),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==Sf&&(g=t.relatedTarget||t.fromElement)&&(Dr(g)||g[Ni]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Dr(g):null,g!==null&&(m=qr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=tp,y="onMouseLeave",d="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(x=ip,y="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?h:Ss(p),v=g==null?h:Ss(g),h=new x(y,_+"leave",p,t,u),h.target=m,h.relatedTarget=v,y=null,Dr(u)===c&&(x=new x(d,_+"enter",g,t,u),x.target=v,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,d=g,_=0,v=x;v;v=Yr(v))_++;for(v=0,y=d;y;y=Yr(y))v++;for(;0<_-v;)x=Yr(x),_--;for(;0<v-_;)d=Yr(d),v--;for(;_--;){if(x===d||d!==null&&x===d.alternate)break t;x=Yr(x),d=Yr(d)}x=null}else x=null;p!==null&&pp(f,h,p,x,!1),g!==null&&m!==null&&pp(f,m,g,x,!0)}}e:{if(h=c?Ss(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=Ky;else if(op(h))if(Y_)R=eS;else{R=Qy;var A=Zy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Jy);if(R&&(R=R(n,c))){q_(f,R,t,u);break e}A&&A(n,h,c),n==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&gf(h,"number",h.value)}switch(A=c?Ss(c):window,n){case"focusin":(op(A)||A.contentEditable==="true")&&(xs=A,Cf=c,Go=null);break;case"focusout":Go=Cf=xs=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,fp(f,t,u);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":fp(f,t,u)}var w;if(Oh)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else vs?j_(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(X_&&t.locale!=="ko"&&(vs||b!=="onCompositionStart"?b==="onCompositionEnd"&&vs&&(w=W_()):(Ji=u,Ih="value"in Ji?Ji.value:Ji.textContent,vs=!0)),A=$l(c,b),0<A.length&&(b=new np(b,n,null,t,u),f.push({event:b,listeners:A}),w?b.data=w:(w=$_(t),w!==null&&(b.data=w)))),(w=Xy?jy(n,t):$y(n,t))&&(c=$l(c,"onBeforeInput"),0<c.length&&(u=new np("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=w))}sv(f,e)})}function aa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function $l(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ea(n,t),s!=null&&i.unshift(aa(n,s,r)),s=ea(n,e),s!=null&&i.push(aa(n,s,r))),n=n.return}return i}function Yr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function pp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ea(t,s),l!=null&&o.unshift(aa(t,l,a))):r||(l=ea(t,s),l!=null&&o.push(aa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function mp(n){return(typeof n=="string"?n:""+n).replace(aS,`
`).replace(lS,"")}function za(n,e,t){if(e=mp(e),mp(n)!==e&&t)throw Error(te(425))}function ql(){}var Pf=null,Lf=null;function Nf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var If=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(n){return gp.resolve(null).then(n).catch(fS)}:If;function fS(n){setTimeout(function(){throw n})}function cu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ia(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ia(e)}function or(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function _p(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var io=Math.random().toString(36).slice(2),ni="__reactFiber$"+io,la="__reactProps$"+io,Ni="__reactContainer$"+io,Df="__reactEvents$"+io,hS="__reactListeners$"+io,dS="__reactHandles$"+io;function Dr(n){var e=n[ni];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ni]||t[ni]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=_p(n);n!==null;){if(t=n[ni])return t;n=_p(n)}return e}n=t,t=n.parentNode}return null}function Ma(n){return n=n[ni]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function Rc(n){return n[la]||null}var Uf=[],Ms=-1;function _r(n){return{current:n}}function ut(n){0>Ms||(n.current=Uf[Ms],Uf[Ms]=null,Ms--)}function st(n,e){Ms++,Uf[Ms]=n.current,n.current=e}var pr={},Zt=_r(pr),dn=_r(!1),Br=pr;function zs(n,e){var t=n.type.contextTypes;if(!t)return pr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function pn(n){return n=n.childContextTypes,n!=null}function Yl(){ut(dn),ut(Zt)}function vp(n,e,t){if(Zt.current!==pr)throw Error(te(168));st(Zt,e),st(dn,t)}function av(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Zx(n)||"Unknown",r));return gt({},t,i)}function Kl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Br=Zt.current,st(Zt,n),st(dn,dn.current),!0}function xp(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=av(n,e,Br),i.__reactInternalMemoizedMergedChildContext=n,ut(dn),ut(Zt),st(Zt,n)):ut(dn),st(dn,t)}var Ti=null,Cc=!1,uu=!1;function lv(n){Ti===null?Ti=[n]:Ti.push(n)}function pS(n){Cc=!0,lv(n)}function vr(){if(!uu&&Ti!==null){uu=!0;var n=0,e=nt;try{var t=Ti;for(nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ti=null,Cc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(n+1)),I_(bh,vr),r}finally{nt=e,uu=!1}}return null}var Es=[],Ts=0,Zl=null,Ql=0,Pn=[],Ln=0,zr=null,Ai=1,Ri="";function Cr(n,e){Es[Ts++]=Ql,Es[Ts++]=Zl,Zl=n,Ql=e}function cv(n,e,t){Pn[Ln++]=Ai,Pn[Ln++]=Ri,Pn[Ln++]=zr,zr=n;var i=Ai;n=Ri;var r=32-$n(i)-1;i&=~(1<<r),t+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ai=1<<32-$n(e)+r|t<<r|i,Ri=s+n}else Ai=1<<s|t<<r|i,Ri=n}function kh(n){n.return!==null&&(Cr(n,1),cv(n,1,0))}function Bh(n){for(;n===Zl;)Zl=Es[--Ts],Es[Ts]=null,Ql=Es[--Ts],Es[Ts]=null;for(;n===zr;)zr=Pn[--Ln],Pn[Ln]=null,Ri=Pn[--Ln],Pn[Ln]=null,Ai=Pn[--Ln],Pn[Ln]=null}var En=null,Sn=null,ht=!1,Gn=null;function uv(n,e){var t=Nn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function yp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,En=n,Sn=or(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,En=n,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=zr!==null?{id:Ai,overflow:Ri}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Nn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,En=n,Sn=null,!0):!1;default:return!1}}function Of(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ff(n){if(ht){var e=Sn;if(e){var t=e;if(!yp(n,e)){if(Of(n))throw Error(te(418));e=or(t.nextSibling);var i=En;e&&yp(n,e)?uv(i,t):(n.flags=n.flags&-4097|2,ht=!1,En=n)}}else{if(Of(n))throw Error(te(418));n.flags=n.flags&-4097|2,ht=!1,En=n}}}function Sp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;En=n}function Ha(n){if(n!==En)return!1;if(!ht)return Sp(n),ht=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Nf(n.type,n.memoizedProps)),e&&(e=Sn)){if(Of(n))throw fv(),Error(te(418));for(;e;)uv(n,e),e=or(e.nextSibling)}if(Sp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Sn=or(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Sn=null}}else Sn=En?or(n.stateNode.nextSibling):null;return!0}function fv(){for(var n=Sn;n;)n=or(n.nextSibling)}function Hs(){Sn=En=null,ht=!1}function zh(n){Gn===null?Gn=[n]:Gn.push(n)}var mS=Fi.ReactCurrentBatchConfig;function vo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function Va(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Mp(n){var e=n._init;return e(n._payload)}function hv(n){function e(d,_){if(n){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function t(d,_){if(!n)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=ur(d,_),d.index=0,d.sibling=null,d}function s(d,_,v){return d.index=v,n?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,_,v,y){return _===null||_.tag!==6?(_=_u(v,d.mode,y),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,y){var R=v.type;return R===_s?u(d,_,v.props.children,y,v.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&Mp(R)===_.type)?(y=r(_,v.props),y.ref=vo(d,_,v),y.return=d,y):(y=Ol(v.type,v.key,v.props,null,d.mode,y),y.ref=vo(d,_,v),y.return=d,y)}function c(d,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=vu(v,d.mode,y),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function u(d,_,v,y,R){return _===null||_.tag!==7?(_=kr(v,d.mode,y,R),_.return=d,_):(_=r(_,v),_.return=d,_)}function f(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=_u(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case La:return v=Ol(_.type,_.key,_.props,null,d.mode,v),v.ref=vo(d,null,_),v.return=d,v;case gs:return _=vu(_,d.mode,v),_.return=d,_;case qi:var y=_._init;return f(d,y(_._payload),v)}if(Do(_)||ho(_))return _=kr(_,d.mode,v,null),_.return=d,_;Va(d,_)}return null}function h(d,_,v,y){var R=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:a(d,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case La:return v.key===R?l(d,_,v,y):null;case gs:return v.key===R?c(d,_,v,y):null;case qi:return R=v._init,h(d,_,R(v._payload),y)}if(Do(v)||ho(v))return R!==null?null:u(d,_,v,y,null);Va(d,v)}return null}function p(d,_,v,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(_,d,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case La:return d=d.get(y.key===null?v:y.key)||null,l(_,d,y,R);case gs:return d=d.get(y.key===null?v:y.key)||null,c(_,d,y,R);case qi:var A=y._init;return p(d,_,v,A(y._payload),R)}if(Do(y)||ho(y))return d=d.get(v)||null,u(_,d,y,R,null);Va(_,y)}return null}function g(d,_,v,y){for(var R=null,A=null,w=_,b=_=0,M=null;w!==null&&b<v.length;b++){w.index>b?(M=w,w=null):M=w.sibling;var S=h(d,w,v[b],y);if(S===null){w===null&&(w=M);break}n&&w&&S.alternate===null&&e(d,w),_=s(S,_,b),A===null?R=S:A.sibling=S,A=S,w=M}if(b===v.length)return t(d,w),ht&&Cr(d,b),R;if(w===null){for(;b<v.length;b++)w=f(d,v[b],y),w!==null&&(_=s(w,_,b),A===null?R=w:A.sibling=w,A=w);return ht&&Cr(d,b),R}for(w=i(d,w);b<v.length;b++)M=p(w,d,b,v[b],y),M!==null&&(n&&M.alternate!==null&&w.delete(M.key===null?b:M.key),_=s(M,_,b),A===null?R=M:A.sibling=M,A=M);return n&&w.forEach(function(U){return e(d,U)}),ht&&Cr(d,b),R}function x(d,_,v,y){var R=ho(v);if(typeof R!="function")throw Error(te(150));if(v=R.call(v),v==null)throw Error(te(151));for(var A=R=null,w=_,b=_=0,M=null,S=v.next();w!==null&&!S.done;b++,S=v.next()){w.index>b?(M=w,w=null):M=w.sibling;var U=h(d,w,S.value,y);if(U===null){w===null&&(w=M);break}n&&w&&U.alternate===null&&e(d,w),_=s(U,_,b),A===null?R=U:A.sibling=U,A=U,w=M}if(S.done)return t(d,w),ht&&Cr(d,b),R;if(w===null){for(;!S.done;b++,S=v.next())S=f(d,S.value,y),S!==null&&(_=s(S,_,b),A===null?R=S:A.sibling=S,A=S);return ht&&Cr(d,b),R}for(w=i(d,w);!S.done;b++,S=v.next())S=p(w,d,b,S.value,y),S!==null&&(n&&S.alternate!==null&&w.delete(S.key===null?b:S.key),_=s(S,_,b),A===null?R=S:A.sibling=S,A=S);return n&&w.forEach(function(G){return e(d,G)}),ht&&Cr(d,b),R}function m(d,_,v,y){if(typeof v=="object"&&v!==null&&v.type===_s&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case La:e:{for(var R=v.key,A=_;A!==null;){if(A.key===R){if(R=v.type,R===_s){if(A.tag===7){t(d,A.sibling),_=r(A,v.props.children),_.return=d,d=_;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&Mp(R)===A.type){t(d,A.sibling),_=r(A,v.props),_.ref=vo(d,A,v),_.return=d,d=_;break e}t(d,A);break}else e(d,A);A=A.sibling}v.type===_s?(_=kr(v.props.children,d.mode,y,v.key),_.return=d,d=_):(y=Ol(v.type,v.key,v.props,null,d.mode,y),y.ref=vo(d,_,v),y.return=d,d=y)}return o(d);case gs:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{t(d,_);break}else e(d,_);_=_.sibling}_=vu(v,d.mode,y),_.return=d,d=_}return o(d);case qi:return A=v._init,m(d,_,A(v._payload),y)}if(Do(v))return g(d,_,v,y);if(ho(v))return x(d,_,v,y);Va(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(d,_.sibling),_=r(_,v),_.return=d,d=_):(t(d,_),_=_u(v,d.mode,y),_.return=d,d=_),o(d)):t(d,_)}return m}var Vs=hv(!0),dv=hv(!1),Jl=_r(null),ec=null,ws=null,Hh=null;function Vh(){Hh=ws=ec=null}function Gh(n){var e=Jl.current;ut(Jl),n._currentValue=e}function kf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Is(n,e){ec=n,Hh=ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(hn=!0),n.firstContext=null)}function Dn(n){var e=n._currentValue;if(Hh!==n)if(n={context:n,memoizedValue:e,next:null},ws===null){if(ec===null)throw Error(te(308));ws=n,ec.dependencies={lanes:0,firstContext:n}}else ws=ws.next=n;return e}var Ur=null;function Wh(n){Ur===null?Ur=[n]:Ur.push(n)}function pv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Wh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ii(n,i)}function Ii(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Yi=!1;function Xh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(n,t)}return r=i.interleaved,r===null?(e.next=e,Wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(n,t)}function Pl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ph(n,t)}}function Ep(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function tc(n,e,t,i){var r=n.updateQueue;Yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,x=a;switch(h=e,p=t,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=gt({},f,h);break e;case 2:Yi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=o,n.lanes=o,n.memoizedState=f}}function Tp(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ea={},li=_r(Ea),ca=_r(Ea),ua=_r(Ea);function Or(n){if(n===Ea)throw Error(te(174));return n}function jh(n,e){switch(st(ua,e),st(ca,n),st(li,Ea),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=vf(e,n)}ut(li),st(li,e)}function Gs(){ut(li),ut(ca),ut(ua)}function gv(n){Or(ua.current);var e=Or(li.current),t=vf(e,n.type);e!==t&&(st(ca,n),st(li,t))}function $h(n){ca.current===n&&(ut(li),ut(ca))}var pt=_r(0);function nc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function qh(){for(var n=0;n<fu.length;n++)fu[n]._workInProgressVersionPrimary=null;fu.length=0}var Ll=Fi.ReactCurrentDispatcher,hu=Fi.ReactCurrentBatchConfig,Hr=0,mt=null,wt=null,Lt=null,ic=!1,Wo=!1,fa=0,gS=0;function Gt(){throw Error(te(321))}function Yh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Zn(n[t],e[t]))return!1;return!0}function Kh(n,e,t,i,r,s){if(Hr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ll.current=n===null||n.memoizedState===null?yS:SS,n=t(i,r),Wo){s=0;do{if(Wo=!1,fa=0,25<=s)throw Error(te(301));s+=1,Lt=wt=null,e.updateQueue=null,Ll.current=MS,n=t(i,r)}while(Wo)}if(Ll.current=rc,e=wt!==null&&wt.next!==null,Hr=0,Lt=wt=mt=null,ic=!1,e)throw Error(te(300));return n}function Zh(){var n=fa!==0;return fa=0,n}function ei(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?mt.memoizedState=Lt=n:Lt=Lt.next=n,Lt}function Un(){if(wt===null){var n=mt.alternate;n=n!==null?n.memoizedState:null}else n=wt.next;var e=Lt===null?mt.memoizedState:Lt.next;if(e!==null)Lt=e,wt=n;else{if(n===null)throw Error(te(310));wt=n,n={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Lt===null?mt.memoizedState=Lt=n:Lt=Lt.next=n}return Lt}function ha(n,e){return typeof e=="function"?e(n):e}function du(n){var e=Un(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=wt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Hr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,mt.lanes|=u,Vr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Zn(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,mt.lanes|=s,Vr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function pu(n){var e=Un(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Zn(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function _v(){}function vv(n,e){var t=mt,i=Un(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,Qh(Sv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(t.flags|=2048,da(9,yv.bind(null,t,i,r,e),void 0,null),It===null)throw Error(te(349));Hr&30||xv(t,e,r)}return r}function xv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function yv(n,e,t,i){e.value=t,e.getSnapshot=i,Mv(e)&&Ev(n)}function Sv(n,e,t){return t(function(){Mv(e)&&Ev(n)})}function Mv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Zn(n,t)}catch{return!0}}function Ev(n){var e=Ii(n,1);e!==null&&qn(e,n,1,-1)}function wp(n){var e=ei();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:n},e.queue=n,n=n.dispatch=xS.bind(null,mt,n),[e.memoizedState,n]}function da(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Tv(){return Un().memoizedState}function Nl(n,e,t,i){var r=ei();mt.flags|=n,r.memoizedState=da(1|e,t,void 0,i===void 0?null:i)}function bc(n,e,t,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Yh(i,o.deps)){r.memoizedState=da(e,t,s,i);return}}mt.flags|=n,r.memoizedState=da(1|e,t,s,i)}function Ap(n,e){return Nl(8390656,8,n,e)}function Qh(n,e){return bc(2048,8,n,e)}function wv(n,e){return bc(4,2,n,e)}function Av(n,e){return bc(4,4,n,e)}function Rv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Cv(n,e,t){return t=t!=null?t.concat([n]):null,bc(4,4,Rv.bind(null,e,n),t)}function Jh(){}function bv(n,e){var t=Un();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Pv(n,e){var t=Un();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Lv(n,e,t){return Hr&21?(Zn(t,e)||(t=O_(),mt.lanes|=t,Vr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,hn=!0),n.memoizedState=t)}function _S(n,e){var t=nt;nt=t!==0&&4>t?t:4,n(!0);var i=hu.transition;hu.transition={};try{n(!1),e()}finally{nt=t,hu.transition=i}}function Nv(){return Un().memoizedState}function vS(n,e,t){var i=cr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Iv(n))Dv(e,t);else if(t=pv(n,e,t,i),t!==null){var r=sn();qn(t,n,i,r),Uv(t,e,i)}}function xS(n,e,t){var i=cr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Iv(n))Dv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Zn(a,o)){var l=e.interleaved;l===null?(r.next=r,Wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=pv(n,e,r,i),t!==null&&(r=sn(),qn(t,n,i,r),Uv(t,e,i))}}function Iv(n){var e=n.alternate;return n===mt||e!==null&&e===mt}function Dv(n,e){Wo=ic=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Uv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ph(n,t)}}var rc={readContext:Dn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},yS={readContext:Dn,useCallback:function(n,e){return ei().memoizedState=[n,e===void 0?null:e],n},useContext:Dn,useEffect:Ap,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Nl(4194308,4,Rv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Nl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Nl(4,2,n,e)},useMemo:function(n,e){var t=ei();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ei();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=vS.bind(null,mt,n),[i.memoizedState,n]},useRef:function(n){var e=ei();return n={current:n},e.memoizedState=n},useState:wp,useDebugValue:Jh,useDeferredValue:function(n){return ei().memoizedState=n},useTransition:function(){var n=wp(!1),e=n[0];return n=_S.bind(null,n[1]),ei().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=mt,r=ei();if(ht){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),It===null)throw Error(te(349));Hr&30||xv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Ap(Sv.bind(null,i,s,n),[n]),i.flags|=2048,da(9,yv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ei(),e=It.identifierPrefix;if(ht){var t=Ri,i=Ai;t=(i&~(1<<32-$n(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=fa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=gS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},SS={readContext:Dn,useCallback:bv,useContext:Dn,useEffect:Qh,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Av,useMemo:Pv,useReducer:du,useRef:Tv,useState:function(){return du(ha)},useDebugValue:Jh,useDeferredValue:function(n){var e=Un();return Lv(e,wt.memoizedState,n)},useTransition:function(){var n=du(ha)[0],e=Un().memoizedState;return[n,e]},useMutableSource:_v,useSyncExternalStore:vv,useId:Nv,unstable_isNewReconciler:!1},MS={readContext:Dn,useCallback:bv,useContext:Dn,useEffect:Qh,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Av,useMemo:Pv,useReducer:pu,useRef:Tv,useState:function(){return pu(ha)},useDebugValue:Jh,useDeferredValue:function(n){var e=Un();return wt===null?e.memoizedState=n:Lv(e,wt.memoizedState,n)},useTransition:function(){var n=pu(ha)[0],e=Un().memoizedState;return[n,e]},useMutableSource:_v,useSyncExternalStore:vv,useId:Nv,unstable_isNewReconciler:!1};function Hn(n,e){if(n&&n.defaultProps){e=gt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Bf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:gt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Pc={isMounted:function(n){return(n=n._reactInternals)?qr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=sn(),r=cr(n),s=Pi(i,r);s.payload=e,t!=null&&(s.callback=t),e=ar(n,s,r),e!==null&&(qn(e,n,r,i),Pl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=sn(),r=cr(n),s=Pi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ar(n,s,r),e!==null&&(qn(e,n,r,i),Pl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=sn(),i=cr(n),r=Pi(t,i);r.tag=2,e!=null&&(r.callback=e),e=ar(n,r,i),e!==null&&(qn(e,n,i,t),Pl(e,n,i))}};function Rp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(t,i)||!sa(r,s):!0}function Ov(n,e,t){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=pn(e)?Br:Zt.current,i=e.contextTypes,s=(i=i!=null)?zs(n,r):pr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Cp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Pc.enqueueReplaceState(e,e.state,null)}function zf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Xh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=pn(e)?Br:Zt.current,r.context=zs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pc.enqueueReplaceState(r,r.state,null),tc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,e){try{var t="",i=e;do t+=Kx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function mu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Hf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ES=typeof WeakMap=="function"?WeakMap:Map;function Fv(n,e,t){t=Pi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){oc||(oc=!0,Zf=i),Hf(n,e)},t}function kv(n,e,t){t=Pi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Hf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Hf(n,e),typeof i!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function bp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new ES;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=FS.bind(null,n,e,t),e.then(n,n))}function Pp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Lp(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Pi(-1,1),e.tag=2,ar(t,e,1))),t.lanes|=1),n)}var TS=Fi.ReactCurrentOwner,hn=!1;function nn(n,e,t,i){e.child=n===null?dv(e,null,t,i):Vs(e,n.child,t,i)}function Np(n,e,t,i,r){t=t.render;var s=e.ref;return Is(e,r),i=Kh(n,e,t,i,s,r),t=Zh(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Di(n,e,r)):(ht&&t&&kh(e),e.flags|=1,nn(n,e,i,r),e.child)}function Ip(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!ad(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Bv(n,e,s,i,r)):(n=Ol(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:sa,t(o,i)&&n.ref===e.ref)return Di(n,e,r)}return e.flags|=1,n=ur(s,i),n.ref=e.ref,n.return=e,e.child=n}function Bv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(sa(s,i)&&n.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(hn=!0);else return e.lanes=n.lanes,Di(n,e,r)}return Vf(n,e,t,i,r)}function zv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(Rs,xn),xn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,st(Rs,xn),xn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,st(Rs,xn),xn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,st(Rs,xn),xn|=i;return nn(n,e,r,t),e.child}function Hv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Vf(n,e,t,i,r){var s=pn(t)?Br:Zt.current;return s=zs(e,s),Is(e,r),t=Kh(n,e,t,i,s,r),i=Zh(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Di(n,e,r)):(ht&&i&&kh(e),e.flags|=1,nn(n,e,t,r),e.child)}function Dp(n,e,t,i,r){if(pn(t)){var s=!0;Kl(e)}else s=!1;if(Is(e,r),e.stateNode===null)Il(n,e),Ov(e,t,i),zf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=pn(t)?Br:Zt.current,c=zs(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Cp(e,o,i,c),Yi=!1;var h=e.memoizedState;o.state=h,tc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||dn.current||Yi?(typeof u=="function"&&(Bf(e,t,u,i),l=e.memoizedState),(a=Yi||Rp(e,t,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,mv(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=pn(t)?Br:Zt.current,l=zs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Cp(e,o,i,l),Yi=!1,h=e.memoizedState,o.state=h,tc(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||dn.current||Yi?(typeof p=="function"&&(Bf(e,t,p,i),g=e.memoizedState),(c=Yi||Rp(e,t,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Gf(n,e,t,i,s,r)}function Gf(n,e,t,i,r,s){Hv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&xp(e,t,!1),Di(n,e,s);i=e.stateNode,TS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Vs(e,n.child,null,s),e.child=Vs(e,null,a,s)):nn(n,e,a,s),e.memoizedState=i.state,r&&xp(e,t,!0),e.child}function Vv(n){var e=n.stateNode;e.pendingContext?vp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&vp(n,e.context,!1),jh(n,e.containerInfo)}function Up(n,e,t,i,r){return Hs(),zh(r),e.flags|=256,nn(n,e,t,i),e.child}var Wf={dehydrated:null,treeContext:null,retryLane:0};function Xf(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gv(n,e,t){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),st(pt,r&1),n===null)return Ff(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ic(o,i,0,null),n=kr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Xf(t),e.memoizedState=Wf,n):ed(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=kr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Xf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Wf,i}return s=n.child,n=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function ed(n,e){return e=Ic({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ga(n,e,t,i){return i!==null&&zh(i),Vs(e,n.child,null,t),n=ed(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function wS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=mu(Error(te(422))),Ga(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ic({mode:"visible",children:i.children},r,0,null),s=kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,n.child,null,o),e.child.memoizedState=Xf(o),e.memoizedState=Wf,s);if(!(e.mode&1))return Ga(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=mu(s,i,void 0),Ga(n,e,o,i)}if(a=(o&n.childLanes)!==0,hn||a){if(i=It,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(n,r),qn(i,n,r,-1))}return od(),i=mu(Error(te(421))),Ga(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=kS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Sn=or(r.nextSibling),En=e,ht=!0,Gn=null,n!==null&&(Pn[Ln++]=Ai,Pn[Ln++]=Ri,Pn[Ln++]=zr,Ai=n.id,Ri=n.overflow,zr=e),e=ed(e,i.children),e.flags|=4096,e)}function Op(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),kf(n.return,e,t)}function gu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Wv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(n,e,i.children,t),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Op(n,t,e);else if(n.tag===19)Op(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(st(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&nc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),gu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&nc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}gu(e,!0,t,null,s);break;case"together":gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Il(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Di(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Vr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=ur(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ur(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function AS(n,e,t){switch(e.tag){case 3:Vv(e),Hs();break;case 5:gv(e);break;case 1:pn(e.type)&&Kl(e);break;case 4:jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(pt,pt.current&1),e.flags|=128,null):t&e.child.childLanes?Gv(n,e,t):(st(pt,pt.current&1),n=Di(n,e,t),n!==null?n.sibling:null);st(pt,pt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Wv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,zv(n,e,t)}return Di(n,e,t)}var Xv,jf,jv,$v;Xv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};jf=function(){};jv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Or(li.current);var s=null;switch(t){case"input":r=pf(n,r),i=pf(n,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=_f(n,r),i=_f(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ql)}xf(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$v=function(n,e,t,i){t!==i&&(e.flags|=4)};function xo(n,e){if(!ht)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Wt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function RS(n,e,t){var i=e.pendingProps;switch(Bh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return pn(e.type)&&Yl(),Wt(e),null;case 3:return i=e.stateNode,Gs(),ut(dn),ut(Zt),qh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ha(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(eh(Gn),Gn=null))),jf(n,e),Wt(e),null;case 5:$h(e);var r=Or(ua.current);if(t=e.type,n!==null&&e.stateNode!=null)jv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Wt(e),null}if(n=Or(li.current),Ha(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[la]=s,n=(e.mode&1)!==0,t){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)at(Oo[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Xd(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":$d(i,s),at("invalid",i)}xf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,n),r=["children",""+a]):Qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(t){case"input":Na(i),jd(i,s,!0);break;case"textarea":Na(i),qd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=S_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ni]=e,n[la]=i,Xv(n,e,!1,!1),e.stateNode=n;e:{switch(o=yf(t,i),t){case"dialog":at("cancel",n),at("close",n),r=i;break;case"iframe":case"object":case"embed":at("load",n),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)at(Oo[r],n);r=i;break;case"source":at("error",n),r=i;break;case"img":case"image":case"link":at("error",n),at("load",n),r=i;break;case"details":at("toggle",n),r=i;break;case"input":Xd(n,i),r=pf(n,i),at("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),at("invalid",n);break;case"textarea":$d(n,i),r=_f(n,i),at("invalid",n);break;default:r=i}xf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?T_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&M_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Jo(n,l):typeof l=="number"&&Jo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",n):l!=null&&Th(n,s,l,o))}switch(t){case"input":Na(n),jd(n,i,!1);break;case"textarea":Na(n),qd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+dr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?bs(n,!!i.multiple,s,!1):i.defaultValue!=null&&bs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ql)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(n&&e.stateNode!=null)$v(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Or(ua.current),Or(li.current),Ha(e)){if(i=e.stateNode,t=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==t)&&(n=En,n!==null))switch(n.tag){case 3:za(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&za(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Wt(e),null;case 13:if(ut(pt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ht&&Sn!==null&&e.mode&1&&!(e.flags&128))fv(),Hs(),e.flags|=98560,s=!1;else if(s=Ha(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ni]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Gn!==null&&(eh(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||pt.current&1?At===0&&(At=3):od())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Gs(),jf(n,e),n===null&&oa(e.stateNode.containerInfo),Wt(e),null;case 10:return Gh(e.type._context),Wt(e),null;case 17:return pn(e.type)&&Yl(),Wt(e),null;case 19:if(ut(pt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)xo(s,!1);else{if(At!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=nc(n),o!==null){for(e.flags|=128,xo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return st(pt,pt.current&1|2),e.child}n=n.sibling}s.tail!==null&&St()>Xs&&(e.flags|=128,i=!0,xo(s,!1),e.lanes=4194304)}else{if(!i)if(n=nc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Wt(e),null}else 2*St()-s.renderingStartTime>Xs&&t!==1073741824&&(e.flags|=128,i=!0,xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,t=pt.current,st(pt,i?t&1|2:t&1),e):(Wt(e),null);case 22:case 23:return sd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function CS(n,e){switch(Bh(e),e.tag){case 1:return pn(e.type)&&Yl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Gs(),ut(dn),ut(Zt),qh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return $h(e),null;case 13:if(ut(pt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Hs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ut(pt),null;case 4:return Gs(),null;case 10:return Gh(e.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var Wa=!1,qt=!1,bS=typeof WeakSet=="function"?WeakSet:Set,pe=null;function As(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){xt(n,e,i)}else t.current=null}function $f(n,e,t){try{t()}catch(i){xt(n,e,i)}}var Fp=!1;function PS(n,e){if(Pf=Xl,n=Q_(),Fh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Lf={focusedElem:n,selectionRange:t},Xl=!1,pe=e;pe!==null;)if(e=pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,pe=n;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Hn(e.type,x),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){xt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}return g=Fp,Fp=!1,g}function Xo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&$f(e,t,s)}r=r.next}while(r!==i)}}function Lc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function qf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function qv(n){var e=n.alternate;e!==null&&(n.alternate=null,qv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ni],delete e[la],delete e[Df],delete e[hS],delete e[dS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Yv(n){return n.tag===5||n.tag===3||n.tag===4}function kp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Yv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ql));else if(i!==4&&(n=n.child,n!==null))for(Yf(n,e,t),n=n.sibling;n!==null;)Yf(n,e,t),n=n.sibling}function Kf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Kf(n,e,t),n=n.sibling;n!==null;)Kf(n,e,t),n=n.sibling}var Dt=null,Vn=!1;function Bi(n,e,t){for(t=t.child;t!==null;)Kv(n,e,t),t=t.sibling}function Kv(n,e,t){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Ec,t)}catch{}switch(t.tag){case 5:qt||As(t,e);case 6:var i=Dt,r=Vn;Dt=null,Bi(n,e,t),Dt=i,Vn=r,Dt!==null&&(Vn?(n=Dt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Dt.removeChild(t.stateNode));break;case 18:Dt!==null&&(Vn?(n=Dt,t=t.stateNode,n.nodeType===8?cu(n.parentNode,t):n.nodeType===1&&cu(n,t),ia(n)):cu(Dt,t.stateNode));break;case 4:i=Dt,r=Vn,Dt=t.stateNode.containerInfo,Vn=!0,Bi(n,e,t),Dt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$f(t,e,o),r=r.next}while(r!==i)}Bi(n,e,t);break;case 1:if(!qt&&(As(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){xt(t,e,a)}Bi(n,e,t);break;case 21:Bi(n,e,t);break;case 22:t.mode&1?(qt=(i=qt)||t.memoizedState!==null,Bi(n,e,t),qt=i):Bi(n,e,t);break;default:Bi(n,e,t)}}function Bp(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new bS),e.forEach(function(i){var r=BS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Fn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Vn=!1;break e;case 3:Dt=a.stateNode.containerInfo,Vn=!0;break e;case 4:Dt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Dt===null)throw Error(te(160));Kv(s,o,r),Dt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zv(e,n),e=e.sibling}function Zv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fn(e,n),Jn(n),i&4){try{Xo(3,n,n.return),Lc(3,n)}catch(x){xt(n,n.return,x)}try{Xo(5,n,n.return)}catch(x){xt(n,n.return,x)}}break;case 1:Fn(e,n),Jn(n),i&512&&t!==null&&As(t,t.return);break;case 5:if(Fn(e,n),Jn(n),i&512&&t!==null&&As(t,t.return),n.flags&32){var r=n.stateNode;try{Jo(r,"")}catch(x){xt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&x_(r,s),yf(a,o);var c=yf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?T_(r,f):u==="dangerouslySetInnerHTML"?M_(r,f):u==="children"?Jo(r,f):Th(r,u,f,c)}switch(a){case"input":mf(r,s);break;case"textarea":y_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?bs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?bs(r,!!s.multiple,s.defaultValue,!0):bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[la]=s}catch(x){xt(n,n.return,x)}}break;case 6:if(Fn(e,n),Jn(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){xt(n,n.return,x)}}break;case 3:if(Fn(e,n),Jn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ia(e.containerInfo)}catch(x){xt(n,n.return,x)}break;case 4:Fn(e,n),Jn(n);break;case 13:Fn(e,n),Jn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(id=St())),i&4&&Bp(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(qt=(c=qt)||u,Fn(e,n),qt=c):Fn(e,n),Jn(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(pe=n,u=n.child;u!==null;){for(f=pe=u;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Xo(4,h,h.return);break;case 1:As(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){xt(i,t,x)}}break;case 5:As(h,h.return);break;case 22:if(h.memoizedState!==null){Hp(f);continue}}p!==null?(p.return=h,pe=p):Hp(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=E_("display",o))}catch(x){xt(n,n.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){xt(n,n.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,n),Jn(n),i&4&&Bp(n);break;case 21:break;default:Fn(e,n),Jn(n)}}function Jn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Yv(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Jo(r,""),i.flags&=-33);var s=kp(n);Kf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=kp(n);Yf(n,a,o);break;default:throw Error(te(161))}}catch(l){xt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function LS(n,e,t){pe=n,Qv(n)}function Qv(n,e,t){for(var i=(n.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Wa;var c=qt;if(Wa=o,(qt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?Vp(r):l!==null?(l.return=o,pe=l):Vp(r);for(;s!==null;)pe=s,Qv(s),s=s.sibling;pe=r,Wa=a,qt=c}zp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):zp(n)}}function zp(n){for(;pe!==null;){var e=pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Hn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Tp(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ia(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}qt||e.flags&512&&qf(e)}catch(h){xt(e,e.return,h)}}if(e===n){pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function Hp(n){for(;pe!==null;){var e=pe;if(e===n){pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,pe=t;break}pe=e.return}}function Vp(n){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Lc(4,e)}catch(l){xt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{qf(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{qf(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===n){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var NS=Math.ceil,sc=Fi.ReactCurrentDispatcher,td=Fi.ReactCurrentOwner,In=Fi.ReactCurrentBatchConfig,je=0,It=null,Tt=null,Ft=0,xn=0,Rs=_r(0),At=0,pa=null,Vr=0,Nc=0,nd=0,jo=null,fn=null,id=0,Xs=1/0,Ei=null,oc=!1,Zf=null,lr=null,Xa=!1,er=null,ac=0,$o=0,Qf=null,Dl=-1,Ul=0;function sn(){return je&6?St():Dl!==-1?Dl:Dl=St()}function cr(n){return n.mode&1?je&2&&Ft!==0?Ft&-Ft:mS.transition!==null?(Ul===0&&(Ul=O_()),Ul):(n=nt,n!==0||(n=window.event,n=n===void 0?16:G_(n.type)),n):1}function qn(n,e,t,i){if(50<$o)throw $o=0,Qf=null,Error(te(185));ya(n,t,i),(!(je&2)||n!==It)&&(n===It&&(!(je&2)&&(Nc|=t),At===4&&Qi(n,Ft)),mn(n,i),t===1&&je===0&&!(e.mode&1)&&(Xs=St()+500,Cc&&vr()))}function mn(n,e){var t=n.callbackNode;my(n,e);var i=Wl(n,n===It?Ft:0);if(i===0)t!==null&&Zd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Zd(t),e===1)n.tag===0?pS(Gp.bind(null,n)):lv(Gp.bind(null,n)),uS(function(){!(je&6)&&vr()}),t=null;else{switch(F_(i)){case 1:t=bh;break;case 4:t=D_;break;case 16:t=Gl;break;case 536870912:t=U_;break;default:t=Gl}t=o0(t,Jv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Jv(n,e){if(Dl=-1,Ul=0,je&6)throw Error(te(327));var t=n.callbackNode;if(Ds()&&n.callbackNode!==t)return null;var i=Wl(n,n===It?Ft:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=lc(n,i);else{e=i;var r=je;je|=2;var s=t0();(It!==n||Ft!==e)&&(Ei=null,Xs=St()+500,Fr(n,e));do try{US();break}catch(a){e0(n,a)}while(!0);Vh(),sc.current=s,je=r,Tt!==null?e=0:(It=null,Ft=0,e=At)}if(e!==0){if(e===2&&(r=wf(n),r!==0&&(i=r,e=Jf(n,r))),e===1)throw t=pa,Fr(n,0),Qi(n,i),mn(n,St()),t;if(e===6)Qi(n,i);else{if(r=n.current.alternate,!(i&30)&&!IS(r)&&(e=lc(n,i),e===2&&(s=wf(n),s!==0&&(i=s,e=Jf(n,s))),e===1))throw t=pa,Fr(n,0),Qi(n,i),mn(n,St()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:br(n,fn,Ei);break;case 3:if(Qi(n,i),(i&130023424)===i&&(e=id+500-St(),10<e)){if(Wl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){sn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=If(br.bind(null,n,fn,Ei),e);break}br(n,fn,Ei);break;case 4:if(Qi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*NS(i/1960))-i,10<i){n.timeoutHandle=If(br.bind(null,n,fn,Ei),i);break}br(n,fn,Ei);break;case 5:br(n,fn,Ei);break;default:throw Error(te(329))}}}return mn(n,St()),n.callbackNode===t?Jv.bind(null,n):null}function Jf(n,e){var t=jo;return n.current.memoizedState.isDehydrated&&(Fr(n,e).flags|=256),n=lc(n,e),n!==2&&(e=fn,fn=t,e!==null&&eh(e)),n}function eh(n){fn===null?fn=n:fn.push.apply(fn,n)}function IS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(n,e){for(e&=~nd,e&=~Nc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-$n(e),i=1<<t;n[t]=-1,e&=~i}}function Gp(n){if(je&6)throw Error(te(327));Ds();var e=Wl(n,0);if(!(e&1))return mn(n,St()),null;var t=lc(n,e);if(n.tag!==0&&t===2){var i=wf(n);i!==0&&(e=i,t=Jf(n,i))}if(t===1)throw t=pa,Fr(n,0),Qi(n,e),mn(n,St()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,br(n,fn,Ei),mn(n,St()),null}function rd(n,e){var t=je;je|=1;try{return n(e)}finally{je=t,je===0&&(Xs=St()+500,Cc&&vr())}}function Gr(n){er!==null&&er.tag===0&&!(je&6)&&Ds();var e=je;je|=1;var t=In.transition,i=nt;try{if(In.transition=null,nt=1,n)return n()}finally{nt=i,In.transition=t,je=e,!(je&6)&&vr()}}function sd(){xn=Rs.current,ut(Rs)}function Fr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,cS(t)),Tt!==null)for(t=Tt.return;t!==null;){var i=t;switch(Bh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Yl();break;case 3:Gs(),ut(dn),ut(Zt),qh();break;case 5:$h(i);break;case 4:Gs();break;case 13:ut(pt);break;case 19:ut(pt);break;case 10:Gh(i.type._context);break;case 22:case 23:sd()}t=t.return}if(It=n,Tt=n=ur(n.current,null),Ft=xn=e,At=0,pa=null,nd=Nc=Vr=0,fn=jo=null,Ur!==null){for(e=0;e<Ur.length;e++)if(t=Ur[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Ur=null}return n}function e0(n,e){do{var t=Tt;try{if(Vh(),Ll.current=rc,ic){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ic=!1}if(Hr=0,Lt=wt=mt=null,Wo=!1,fa=0,td.current=null,t===null||t.return===null){At=1,pa=e,Tt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Pp(o);if(p!==null){p.flags&=-257,Lp(p,o,a,s,e),p.mode&1&&bp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){bp(s,c,e),od();break e}l=Error(te(426))}}else if(ht&&a.mode&1){var m=Pp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Lp(m,o,a,s,e),zh(Ws(l,a));break e}}s=l=Ws(l,a),At!==4&&(At=2),jo===null?jo=[s]:jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Fv(s,l,e);Ep(s,d);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(lr===null||!lr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=kv(s,a,e);Ep(s,y);break e}}s=s.return}while(s!==null)}i0(t)}catch(R){e=R,Tt===t&&t!==null&&(Tt=t=t.return);continue}break}while(!0)}function t0(){var n=sc.current;return sc.current=rc,n===null?rc:n}function od(){(At===0||At===3||At===2)&&(At=4),It===null||!(Vr&268435455)&&!(Nc&268435455)||Qi(It,Ft)}function lc(n,e){var t=je;je|=2;var i=t0();(It!==n||Ft!==e)&&(Ei=null,Fr(n,e));do try{DS();break}catch(r){e0(n,r)}while(!0);if(Vh(),je=t,sc.current=i,Tt!==null)throw Error(te(261));return It=null,Ft=0,At}function DS(){for(;Tt!==null;)n0(Tt)}function US(){for(;Tt!==null&&!oy();)n0(Tt)}function n0(n){var e=s0(n.alternate,n,xn);n.memoizedProps=n.pendingProps,e===null?i0(n):Tt=e,td.current=null}function i0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=CS(t,e),t!==null){t.flags&=32767,Tt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{At=6,Tt=null;return}}else if(t=RS(t,e,xn),t!==null){Tt=t;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=n}while(e!==null);At===0&&(At=5)}function br(n,e,t){var i=nt,r=In.transition;try{In.transition=null,nt=1,OS(n,e,t,i)}finally{In.transition=r,nt=i}return null}function OS(n,e,t,i){do Ds();while(er!==null);if(je&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(gy(n,s),n===It&&(Tt=It=null,Ft=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xa||(Xa=!0,o0(Gl,function(){return Ds(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=nt;nt=1;var a=je;je|=4,td.current=null,PS(n,t),Zv(t,n),nS(Lf),Xl=!!Pf,Lf=Pf=null,n.current=t,LS(t),ay(),je=a,nt=o,In.transition=s}else n.current=t;if(Xa&&(Xa=!1,er=n,ac=r),s=n.pendingLanes,s===0&&(lr=null),uy(t.stateNode),mn(n,St()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(oc)throw oc=!1,n=Zf,Zf=null,n;return ac&1&&n.tag!==0&&Ds(),s=n.pendingLanes,s&1?n===Qf?$o++:($o=0,Qf=n):$o=0,vr(),null}function Ds(){if(er!==null){var n=F_(ac),e=In.transition,t=nt;try{if(In.transition=null,nt=16>n?16:n,er===null)var i=!1;else{if(n=er,er=null,ac=0,je&6)throw Error(te(331));var r=je;for(je|=4,pe=n.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Xo(8,u,s)}var f=u.child;if(f!==null)f.return=u,pe=f;else for(;pe!==null;){u=pe;var h=u.sibling,p=u.return;if(qv(u),u===c){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,pe=d;break e}pe=s.return}}var _=n.current;for(pe=_;pe!==null;){o=pe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,pe=v;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lc(9,a)}}catch(R){xt(a,a.return,R)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(je=r,vr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Ec,n)}catch{}i=!0}return i}finally{nt=t,In.transition=e}}return!1}function Wp(n,e,t){e=Ws(t,e),e=Fv(n,e,1),n=ar(n,e,1),e=sn(),n!==null&&(ya(n,1,e),mn(n,e))}function xt(n,e,t){if(n.tag===3)Wp(n,n,t);else for(;e!==null;){if(e.tag===3){Wp(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){n=Ws(t,n),n=kv(e,n,1),e=ar(e,n,1),n=sn(),e!==null&&(ya(e,1,n),mn(e,n));break}}e=e.return}}function FS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=sn(),n.pingedLanes|=n.suspendedLanes&t,It===n&&(Ft&t)===t&&(At===4||At===3&&(Ft&130023424)===Ft&&500>St()-id?Fr(n,0):nd|=t),mn(n,e)}function r0(n,e){e===0&&(n.mode&1?(e=Ua,Ua<<=1,!(Ua&130023424)&&(Ua=4194304)):e=1);var t=sn();n=Ii(n,e),n!==null&&(ya(n,e,t),mn(n,t))}function kS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),r0(n,t)}function BS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),r0(n,t)}var s0;s0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||dn.current)hn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return hn=!1,AS(n,e,t);hn=!!(n.flags&131072)}else hn=!1,ht&&e.flags&1048576&&cv(e,Ql,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Il(n,e),n=e.pendingProps;var r=zs(e,Zt.current);Is(e,t),r=Kh(null,e,i,n,r,t);var s=Zh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,Kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xh(e),r.updater=Pc,e.stateNode=r,r._reactInternals=e,zf(e,i,n,t),e=Gf(null,e,i,!0,s,t)):(e.tag=0,ht&&s&&kh(e),nn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Il(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HS(i),n=Hn(i,n),r){case 0:e=Vf(null,e,i,n,t);break e;case 1:e=Dp(null,e,i,n,t);break e;case 11:e=Np(null,e,i,n,t);break e;case 14:e=Ip(null,e,i,Hn(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Vf(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Dp(n,e,i,r,t);case 3:e:{if(Vv(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,mv(n,e),tc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(te(423)),e),e=Up(n,e,i,t,r);break e}else if(i!==r){r=Ws(Error(te(424)),e),e=Up(n,e,i,t,r);break e}else for(Sn=or(e.stateNode.containerInfo.firstChild),En=e,ht=!0,Gn=null,t=dv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Hs(),i===r){e=Di(n,e,t);break e}nn(n,e,i,t)}e=e.child}return e;case 5:return gv(e),n===null&&Ff(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Nf(i,r)?o=null:s!==null&&Nf(i,s)&&(e.flags|=32),Hv(n,e),nn(n,e,o,t),e.child;case 6:return n===null&&Ff(e),null;case 13:return Gv(n,e,t);case 4:return jh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Vs(e,null,i,t):nn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Np(n,e,i,r,t);case 7:return nn(n,e,e.pendingProps,t),e.child;case 8:return nn(n,e,e.pendingProps.children,t),e.child;case 12:return nn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Jl,i._currentValue),i._currentValue=o,s!==null)if(Zn(s.value,o)){if(s.children===r.children&&!dn.current){e=Di(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),kf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),kf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,t),r=Dn(r),i=i(r),e.flags|=1,nn(n,e,i,t),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Ip(n,e,i,r,t);case 15:return Bv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Il(n,e),e.tag=1,pn(i)?(n=!0,Kl(e)):n=!1,Is(e,t),Ov(e,i,r),zf(e,i,r,t),Gf(null,e,i,!0,n,t);case 19:return Wv(n,e,t);case 22:return zv(n,e,t)}throw Error(te(156,e.tag))};function o0(n,e){return I_(n,e)}function zS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(n,e,t,i){return new zS(n,e,t,i)}function ad(n){return n=n.prototype,!(!n||!n.isReactComponent)}function HS(n){if(typeof n=="function")return ad(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ah)return 11;if(n===Rh)return 14}return 2}function ur(n,e){var t=n.alternate;return t===null?(t=Nn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ol(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")ad(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case _s:return kr(t.children,r,s,e);case wh:o=8,r|=8;break;case uf:return n=Nn(12,t,e,r|2),n.elementType=uf,n.lanes=s,n;case ff:return n=Nn(13,t,e,r),n.elementType=ff,n.lanes=s,n;case hf:return n=Nn(19,t,e,r),n.elementType=hf,n.lanes=s,n;case g_:return Ic(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case p_:o=10;break e;case m_:o=9;break e;case Ah:o=11;break e;case Rh:o=14;break e;case qi:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Nn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function kr(n,e,t,i){return n=Nn(7,n,i,e),n.lanes=t,n}function Ic(n,e,t,i){return n=Nn(22,n,i,e),n.elementType=g_,n.lanes=t,n.stateNode={isHidden:!1},n}function _u(n,e,t){return n=Nn(6,n,null,e),n.lanes=t,n}function vu(n,e,t){return e=Nn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function VS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qc(0),this.expirationTimes=Qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ld(n,e,t,i,r,s,o,a,l){return n=new VS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xh(s),n}function GS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function a0(n){if(!n)return pr;n=n._reactInternals;e:{if(qr(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(pn(t))return av(n,t,e)}return e}function l0(n,e,t,i,r,s,o,a,l){return n=ld(t,i,!0,n,r,s,o,a,l),n.context=a0(null),t=n.current,i=sn(),r=cr(t),s=Pi(i,r),s.callback=e??null,ar(t,s,r),n.current.lanes=r,ya(n,r,i),mn(n,i),n}function Dc(n,e,t,i){var r=e.current,s=sn(),o=cr(r);return t=a0(t),e.context===null?e.context=t:e.pendingContext=t,e=Pi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ar(r,e,o),n!==null&&(qn(n,r,o,s),Pl(n,r,o)),o}function cc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Xp(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function cd(n,e){Xp(n,e),(n=n.alternate)&&Xp(n,e)}function WS(){return null}var c0=typeof reportError=="function"?reportError:function(n){console.error(n)};function ud(n){this._internalRoot=n}Uc.prototype.render=ud.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));Dc(n,e,null,null)};Uc.prototype.unmount=ud.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Gr(function(){Dc(null,n,null,null)}),e[Ni]=null}};function Uc(n){this._internalRoot=n}Uc.prototype.unstable_scheduleHydration=function(n){if(n){var e=z_();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Zi.length&&e!==0&&e<Zi[t].priority;t++);Zi.splice(t,0,n),t===0&&V_(n)}};function fd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Oc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jp(){}function XS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=cc(o);s.call(c)}}var o=l0(e,i,n,0,null,!1,!1,"",jp);return n._reactRootContainer=o,n[Ni]=o.current,oa(n.nodeType===8?n.parentNode:n),Gr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=cc(l);a.call(c)}}var l=ld(n,0,!1,null,null,!1,!1,"",jp);return n._reactRootContainer=l,n[Ni]=l.current,oa(n.nodeType===8?n.parentNode:n),Gr(function(){Dc(e,l,t,i)}),l}function Fc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=cc(o);a.call(l)}}Dc(e,o,n,r)}else o=XS(t,e,n,r,i);return cc(o)}k_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Uo(e.pendingLanes);t!==0&&(Ph(e,t|1),mn(e,St()),!(je&6)&&(Xs=St()+500,vr()))}break;case 13:Gr(function(){var i=Ii(n,1);if(i!==null){var r=sn();qn(i,n,1,r)}}),cd(n,1)}};Lh=function(n){if(n.tag===13){var e=Ii(n,134217728);if(e!==null){var t=sn();qn(e,n,134217728,t)}cd(n,134217728)}};B_=function(n){if(n.tag===13){var e=cr(n),t=Ii(n,e);if(t!==null){var i=sn();qn(t,n,e,i)}cd(n,e)}};z_=function(){return nt};H_=function(n,e){var t=nt;try{return nt=n,e()}finally{nt=t}};Mf=function(n,e,t){switch(e){case"input":if(mf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Rc(i);if(!r)throw Error(te(90));v_(i),mf(i,r)}}}break;case"textarea":y_(n,t);break;case"select":e=t.value,e!=null&&bs(n,!!t.multiple,e,!1)}};R_=rd;C_=Gr;var jS={usingClientEntryPoint:!1,Events:[Ma,Ss,Rc,w_,A_,rd]},yo={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$S={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=L_(n),n===null?null:n.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||WS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{Ec=ja.inject($S),ai=ja}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jS;wn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(e))throw Error(te(200));return GS(n,e,null,t)};wn.createRoot=function(n,e){if(!fd(n))throw Error(te(299));var t=!1,i="",r=c0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ld(n,1,!1,null,null,t,!1,i,r),n[Ni]=e.current,oa(n.nodeType===8?n.parentNode:n),new ud(e)};wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=L_(e),n=n===null?null:n.stateNode,n};wn.flushSync=function(n){return Gr(n)};wn.hydrate=function(n,e,t){if(!Oc(e))throw Error(te(200));return Fc(null,n,e,!0,t)};wn.hydrateRoot=function(n,e,t){if(!fd(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=c0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=l0(e,null,n,1,t??null,r,!1,s,o),n[Ni]=e.current,oa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Uc(e)};wn.render=function(n,e,t){if(!Oc(e))throw Error(te(200));return Fc(null,n,e,!1,t)};wn.unmountComponentAtNode=function(n){if(!Oc(n))throw Error(te(40));return n._reactRootContainer?(Gr(function(){Fc(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1};wn.unstable_batchedUpdates=rd;wn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Oc(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return Fc(n,e,t,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function u0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u0)}catch(n){console.error(n)}}u0(),u_.exports=wn;var qS=u_.exports,f0,$p=qS;f0=$p.createRoot,$p.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hd="164",YS=0,qp=1,KS=2,h0=1,d0=2,Mi=3,Ui=0,on=1,Wn=2,fr=0,Us=1,Yp=2,Kp=3,Zp=4,ZS=5,Nr=100,QS=101,JS=102,eM=103,tM=104,nM=200,iM=201,rM=202,sM=203,th=204,nh=205,oM=206,aM=207,lM=208,cM=209,uM=210,fM=211,hM=212,dM=213,pM=214,mM=0,gM=1,_M=2,uc=3,vM=4,xM=5,yM=6,SM=7,p0=0,MM=1,EM=2,hr=0,TM=1,wM=2,AM=3,m0=4,RM=5,CM=6,bM=7,Qp="attached",PM="detached",g0=300,js=301,$s=302,ih=303,rh=304,kc=306,qs=1e3,tr=1001,fc=1002,rn=1003,_0=1004,Fo=1005,yn=1006,Fl=1007,Ci=1008,mr=1009,LM=1010,NM=1011,v0=1012,x0=1013,Ys=1014,ri=1015,Bc=1016,y0=1017,S0=1018,Ta=1020,IM=35902,DM=1021,UM=1022,jn=1023,OM=1024,FM=1025,Os=1026,ma=1027,M0=1028,E0=1029,kM=1030,T0=1031,w0=1033,xu=33776,yu=33777,Su=33778,Mu=33779,Jp=35840,em=35841,tm=35842,nm=35843,im=36196,rm=37492,sm=37496,om=37808,am=37809,lm=37810,cm=37811,um=37812,fm=37813,hm=37814,dm=37815,pm=37816,mm=37817,gm=37818,_m=37819,vm=37820,xm=37821,Eu=36492,ym=36494,Sm=36495,BM=36283,Mm=36284,Em=36285,Tm=36286,ga=2300,Ks=2301,Tu=2302,wm=2400,Am=2401,Rm=2402,zM=2500,HM=0,A0=1,sh=2,VM=3200,GM=3201,R0=0,WM=1,wi="",Ot="srgb",Bt="srgb-linear",dd="display-p3",zc="display-p3-linear",hc="linear",lt="srgb",dc="rec709",pc="p3",Kr=7680,Cm=519,XM=512,jM=513,$M=514,C0=515,qM=516,YM=517,KM=518,ZM=519,oh=35044,bm="300 es",bi=2e3,mc=2001;class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pm=1234567;const qo=Math.PI/180,Zs=180/Math.PI;function Yn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Yt(n,e,t){return Math.max(e,Math.min(t,n))}function pd(n,e){return(n%e+e)%e}function QM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function JM(n,e,t){return n!==e?(t-n)/(e-n):0}function Yo(n,e,t){return(1-t)*n+t*e}function eE(n,e,t,i){return Yo(n,e,1-Math.exp(-t*i))}function tE(n,e=1){return e-Math.abs(pd(n,e*2)-e)}function nE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function iE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sE(n,e){return n+Math.random()*(e-n)}function oE(n){return n*(.5-Math.random())}function aE(n){n!==void 0&&(Pm=n);let e=Pm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lE(n){return n*qo}function cE(n){return n*Zs}function uE(n){return(n&n-1)===0&&n!==0}function fE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dE(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const kl={DEG2RAD:qo,RAD2DEG:Zs,generateUUID:Yn,clamp:Yt,euclideanModulo:pd,mapLinear:QM,inverseLerp:JM,lerp:Yo,damp:eE,pingpong:tE,smoothstep:nE,smootherstep:iE,randInt:rE,randFloat:sE,randFloatSpread:oE,seededRandom:aE,degToRad:lE,radToDeg:cE,isPowerOfTwo:uE,ceilPowerOfTwo:fE,floorPowerOfTwo:hE,setQuaternionFromProperEuler:dE,normalize:et,denormalize:Xn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,t,i,r,s,o,a,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],d=r[6],_=r[1],v=r[4],y=r[7],R=r[2],A=r[5],w=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*m+a*v+l*A,s[6]=o*d+a*y+l*w,s[1]=c*x+u*_+f*R,s[4]=c*m+u*v+f*A,s[7]=c*d+u*y+f*w,s[2]=h*x+p*_+g*R,s[5]=h*m+p*v+g*A,s[8]=h*d+p*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wu.makeScale(e,t)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wu=new Le;function b0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pE(){const n=_a("canvas");return n.style.display="block",n}const Lm={};function P0(n){n in Lm||(Lm[n]=!0,console.warn(n))}const Nm=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Im=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$a={[Bt]:{transfer:hc,primaries:dc,toReference:n=>n,fromReference:n=>n},[Ot]:{transfer:lt,primaries:dc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[zc]:{transfer:hc,primaries:pc,toReference:n=>n.applyMatrix3(Im),fromReference:n=>n.applyMatrix3(Nm)},[dd]:{transfer:lt,primaries:pc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Im),fromReference:n=>n.applyMatrix3(Nm).convertLinearToSRGB()}},mE=new Set([Bt,zc]),Ze={enabled:!0,_workingColorSpace:Bt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!mE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=$a[e].toReference,r=$a[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return $a[n].primaries},getTransfer:function(n){return n===wi?hc:$a[n].transfer}};function Fs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Au(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zr;class gE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=_a("canvas")),Zr.width=e.width,Zr.height=e.height;const i=Zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fs(t[i]/255)*255):t[i]=Fs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _E=0;class L0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ru(r[o].image)):s.push(Ru(r[o]))}else s=Ru(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ru(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vE=0;class Rt extends ro{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=tr,r=tr,s=yn,o=Ci,a=jn,l=mr,c=Rt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=Yn(),this.name="",this.source=new L0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==g0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=g0;Rt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(p+1)/2,R=(d+1)/2,A=(u+h)/4,w=(f+x)/4,b=(g+m)/4;return v>y&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=w/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=b/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xE extends ro{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Rt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new L0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends xE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class N0 extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yE extends Rt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*x,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),A=Math.atan2(R,d*_);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const y=a*_;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,f=f*m+x*y,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cu=new N,Dm=new xr;class ui{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),Ya.subVectors(this.max,So),Qr.subVectors(e.a,So),Jr.subVectors(e.b,So),es.subVectors(e.c,So),zi.subVectors(Jr,Qr),Hi.subVectors(es,Jr),Sr.subVectors(Qr,es);let t=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-Sr.z,Sr.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,Sr.z,0,-Sr.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-Sr.y,Sr.x,0];return!bu(t,Qr,Jr,es,Ya)||(t=[1,0,0,0,1,0,0,0,1],!bu(t,Qr,Jr,es,Ya))?!1:(Ka.crossVectors(zi,Hi),t=[Ka.x,Ka.y,Ka.z],bu(t,Qr,Jr,es,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new N,new N,new N,new N,new N,new N,new N,new N],kn=new N,qa=new ui,Qr=new N,Jr=new N,es=new N,zi=new N,Hi=new N,Sr=new N,So=new N,Ya=new N,Ka=new N,Mr=new N;function bu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mr.fromArray(n,s);const a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const SE=new ui,Mo=new N,Pu=new N;class fi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):SE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const t=Mo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(Pu)),this.expandByPoint(Mo.copy(e.center).sub(Pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new N,Lu=new N,Za=new N,Vi=new N,Nu=new N,Qa=new N,Iu=new N;class Hc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Lu.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(Lu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Za),a=Vi.dot(this.direction),l=-Vi.dot(Za),c=Vi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Lu).addScaledVector(Za,h),p}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,r,s){Nu.subVectors(t,e),Qa.subVectors(i,e),Iu.crossVectors(Nu,Qa);let o=this.direction.dot(Iu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(Qa.crossVectors(Vi,Qa));if(l<0)return null;const c=a*this.direction.dot(Nu.cross(Vi));if(c<0||l+c>o)return null;const u=-a*Vi.dot(Iu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,g,x,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,x=c*f;t[0]=h+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,x=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ME,e,EE)}lookAt(e,t,i){const r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Gi.crossVectors(i,_n),Gi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Gi.crossVectors(i,_n)),Gi.normalize(),Ja.crossVectors(_n,Gi),r[0]=Gi.x,r[4]=Ja.x,r[8]=_n.x,r[1]=Gi.y,r[5]=Ja.y,r[9]=_n.y,r[2]=Gi.z,r[6]=Ja.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],_=i[3],v=i[7],y=i[11],R=i[15],A=r[0],w=r[4],b=r[8],M=r[12],S=r[1],U=r[5],G=r[9],L=r[13],$=r[2],j=r[6],J=r[10],Y=r[14],P=r[3],H=r[7],X=r[11],V=r[15];return s[0]=o*A+a*S+l*$+c*P,s[4]=o*w+a*U+l*j+c*H,s[8]=o*b+a*G+l*J+c*X,s[12]=o*M+a*L+l*Y+c*V,s[1]=u*A+f*S+h*$+p*P,s[5]=u*w+f*U+h*j+p*H,s[9]=u*b+f*G+h*J+p*X,s[13]=u*M+f*L+h*Y+p*V,s[2]=g*A+x*S+m*$+d*P,s[6]=g*w+x*U+m*j+d*H,s[10]=g*b+x*G+m*J+d*X,s[14]=g*M+x*L+m*Y+d*V,s[3]=_*A+v*S+y*$+R*P,s[7]=_*w+v*U+y*j+R*H,s[11]=_*b+v*G+y*J+R*X,s[15]=_*M+v*L+y*Y+R*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],_=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,v=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,y=u*x*c-g*f*c+g*a*p-o*x*p-u*a*d+o*f*d,R=g*f*l-u*x*l-g*a*h+o*x*h+u*a*m-o*f*m,A=t*_+i*v+r*y+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=_*w,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=v*w,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*d+t*h*d)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*w,e[8]=y*w,e[9]=(g*f*s-u*x*s-g*i*p+t*x*p+u*i*d-t*f*d)*w,e[10]=(o*x*s-g*a*s+g*i*c-t*x*c-o*i*d+t*a*d)*w,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*w,e[12]=R*w,e[13]=(u*x*r-g*f*r+g*i*h-t*x*h-u*i*m+t*f*m)*w,e[14]=(g*a*r-o*x*r-g*i*l+t*x*l+o*i*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,x=o*u,m=o*f,d=a*f,_=l*c,v=l*u,y=l*f,R=i.x,A=i.y,w=i.z;return r[0]=(1-(x+d))*R,r[1]=(p+y)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+d))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+v)*w,r[9]=(m-_)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ts.set(r[0],r[1],r[2]).length();const o=ts.set(r[4],r[5],r[6]).length(),a=ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/o,f=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,t.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=bi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===bi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===mc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=bi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let g,x;if(a===bi)g=(o+s)*f,x=-2*f;else if(a===mc)g=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new N,Bn=new Ne,ME=new N(0,0,0),EE=new N(1,1,1),Gi=new N,Ja=new N,_n=new N,Um=new Ne,Om=new xr;class ci{constructor(e=0,t=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class I0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TE=0;const Fm=new N,ns=new xr,_i=new Ne,el=new N,Eo=new N,wE=new N,AE=new xr,km=new N(1,0,0),Bm=new N(0,1,0),zm=new N(0,0,1),Hm={type:"added"},RE={type:"removed"},is={type:"childadded",child:null},Du={type:"childremoved",child:null};class dt extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new N,t=new ci,i=new xr,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Le}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?el.copy(e):el.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Eo,el,this.up):_i.lookAt(el,Eo,this.up),this.quaternion.setFromRotationMatrix(_i),r&&(_i.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(_i),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(RE),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,wE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,AE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dt.DEFAULT_UP=new N(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new N,vi=new N,Uu=new N,xi=new N,rs=new N,ss=new N,Vm=new N,Ou=new N,Fu=new N,ku=new N;class ii{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zn.subVectors(r,t),vi.subVectors(i,t),Uu.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(vi),l=zn.dot(Uu),c=vi.dot(vi),u=vi.dot(Uu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static isFrontFacing(e,t,i,r){return zn.subVectors(i,t),vi.subVectors(e,t),zn.cross(vi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),zn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;rs.subVectors(r,i),ss.subVectors(s,i),Ou.subVectors(e,i);const l=rs.dot(Ou),c=ss.dot(Ou);if(l<=0&&c<=0)return t.copy(i);Fu.subVectors(e,r);const u=rs.dot(Fu),f=ss.dot(Fu);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(rs,o);ku.subVectors(e,s);const p=rs.dot(ku),g=ss.dot(ku);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ss,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Vm.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Vm,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(rs,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Bu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class we{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=pd(e,1),t=Yt(t,0,1),i=Yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Bu(o,s,e+1/3),this.g=Bu(o,s,e),this.b=Bu(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=D0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=Au(e.r),this.g=Au(e.g),this.b=Au(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ze.fromWorkingColorSpace(jt.copy(this),e),Math.round(Yt(jt.r*255,0,255))*65536+Math.round(Yt(jt.g*255,0,255))*256+Math.round(Yt(jt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(jt.copy(this),t);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Ot){Ze.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,r=jt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(tl);const i=Yo(Wi.h,tl.h,t),r=Yo(Wi.s,tl.s,t),s=Yo(Wi.l,tl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new we;we.NAMES=D0;let CE=0;class Kn extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Us,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==th&&(i.blendSrc=this.blendSrc),this.blendDst!==nh&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==uc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class si extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new N,nl=new Oe;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return P0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oh&&(e.usage=this.usage),e}}class U0 extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class O0 extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ln extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bE=0;const Cn=new Ne,zu=new dt,os=new N,vn=new ui,To=new ui,Pt=new N;class On extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?O0:U0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return zu.lookAt(e),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];To.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(vn.min,To.min),vn.expandByPoint(Pt),Pt.addVectors(vn.max,To.max),vn.expandByPoint(Pt)):(vn.expandByPoint(To.min),vn.expandByPoint(To.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),Pt.add(os)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new N,l[b]=new N;const c=new N,u=new N,f=new N,h=new Oe,p=new Oe,g=new Oe,x=new N,m=new N;function d(b,M,S){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[b].add(x),a[M].add(x),a[S].add(x),l[b].add(m),l[M].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,M=_.length;b<M;++b){const S=_[b],U=S.start,G=S.count;for(let L=U,$=U+G;L<$;L+=3)d(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const v=new N,y=new N,R=new N,A=new N;function w(b){R.fromBufferAttribute(r,b),A.copy(R);const M=a[b];v.copy(M),v.sub(R.multiplyScalar(R.dot(M))).normalize(),y.crossVectors(A,M);const U=y.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,U)}for(let b=0,M=_.length;b<M;++b){const S=_[b],U=S.start,G=S.count;for(let L=U,$=U+G;L<$;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new an(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gm=new Ne,Er=new Hc,il=new fi,Wm=new N,as=new N,ls=new N,cs=new N,Hu=new N,rl=new N,sl=new Oe,ol=new Oe,al=new Oe,Xm=new N,jm=new N,$m=new N,ll=new N,cl=new N;class Ke extends dt{constructor(e=new On,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Hu.fromBufferAttribute(f,e),o?rl.addScaledVector(Hu,u):rl.addScaledVector(Hu.sub(t),u))}t.add(rl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(il.containsPoint(Er.origin)===!1&&(Er.intersectSphere(il,Wm)===null||Er.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Gm),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,R=v;y<R;y+=3){const A=a.getX(y),w=a.getX(y+1),b=a.getX(y+2);r=ul(this,d,e,i,c,u,f,A,w,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=ul(this,o,e,i,c,u,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,R=v;y<R;y+=3){const A=y,w=y+1,b=y+2;r=ul(this,d,e,i,c,u,f,A,w,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const _=m,v=m+1,y=m+2;r=ul(this,o,e,i,c,u,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function PE(n,e,t,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ui,a),l===null)return null;cl.copy(a),cl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(cl);return c<t.near||c>t.far?null:{distance:c,point:cl.clone(),object:n}}function ul(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,as),n.getVertexPosition(l,ls),n.getVertexPosition(c,cs);const u=PE(n,e,t,i,as,ls,cs,ll);if(u){r&&(sl.fromBufferAttribute(r,a),ol.fromBufferAttribute(r,l),al.fromBufferAttribute(r,c),u.uv=ii.getInterpolation(ll,as,ls,cs,sl,ol,al,new Oe)),s&&(sl.fromBufferAttribute(s,a),ol.fromBufferAttribute(s,l),al.fromBufferAttribute(s,c),u.uv1=ii.getInterpolation(ll,as,ls,cs,sl,ol,al,new Oe)),o&&(Xm.fromBufferAttribute(o,a),jm.fromBufferAttribute(o,l),$m.fromBufferAttribute(o,c),u.normal=ii.getInterpolation(ll,as,ls,cs,Xm,jm,$m,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};ii.getNormal(as,ls,cs,f.normal),u.face=f}return u}class so extends On{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function g(x,m,d,_,v,y,R,A,w,b,M){const S=y/w,U=R/b,G=y/2,L=R/2,$=A/2,j=w+1,J=b+1;let Y=0,P=0;const H=new N;for(let X=0;X<J;X++){const V=X*U-L;for(let le=0;le<j;le++){const ve=le*S-G;H[x]=ve*_,H[m]=V*v,H[d]=$,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[d]=A>0?1:-1,u.push(H.x,H.y,H.z),f.push(le/w),f.push(1-X/b),Y+=1}}for(let X=0;X<b;X++)for(let V=0;V<w;V++){const le=h+V+j*X,ve=h+V+j*(X+1),B=h+(V+1)+j*(X+1),Z=h+(V+1)+j*X;l.push(le,ve,Z),l.push(ve,B,Z),P+=6}a.addGroup(p,P,M),p+=P,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=Qs(n[t]);for(const r in i)e[r]=i[r]}return e}function LE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function F0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const NE={clone:Qs,merge:tn};var IE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IE,this.fragmentShader=DE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=LE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class k0 extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new N,qm=new Oe,Ym=new Oe;class Kt extends k0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,qm,Ym),t.subVectors(Ym,qm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,fs=1;class UE extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(us,fs,e,t);r.layers=this.layers,this.add(r);const s=new Kt(us,fs,e,t);s.layers=this.layers,this.add(s);const o=new Kt(us,fs,e,t);o.layers=this.layers,this.add(o);const a=new Kt(us,fs,e,t);a.layers=this.layers,this.add(a);const l=new Kt(us,fs,e,t);l.layers=this.layers,this.add(l);const c=new Kt(us,fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class B0 extends Rt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z0 extends Wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new B0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new so(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:fr});s.uniforms.tEquirect.value=t;const o=new Ke(r,s),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=yn),new UE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Vu=new N,OE=new N,FE=new Le;class Pr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Vu.subVectors(i,t).cross(OE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||FE.getNormalMatrix(e),r=this.coplanarPoint(Vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new fi,fl=new N;class md{constructor(e=new Pr,t=new Pr,i=new Pr,r=new Pr,s=new Pr,o=new Pr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],d=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-d).normalize(),i[1].setComponents(l+s,h+c,m+p,y+d).normalize(),i[2].setComponents(l+o,h+u,m+g,y+_).normalize(),i[3].setComponents(l-o,h-u,m-g,y-_).normalize(),i[4].setComponents(l-a,h-f,m-x,y-v).normalize(),t===bi)i[5].setComponents(l+a,h+f,m+x,y+v).normalize();else if(t===mc)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function H0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function kE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class wa extends On{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const _=d*h-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const v=_+c*d,y=_+c*(d+1),R=_+1+c*(d+1),A=_+1+c*d;p.push(v,y,A),p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var BE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$E=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,YE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",gT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_T=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ET=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ew=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,tw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ew=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ww=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$w=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:BE,alphahash_pars_fragment:zE,alphamap_fragment:HE,alphamap_pars_fragment:VE,alphatest_fragment:GE,alphatest_pars_fragment:WE,aomap_fragment:XE,aomap_pars_fragment:jE,batching_pars_vertex:$E,batching_vertex:qE,begin_vertex:YE,beginnormal_vertex:KE,bsdfs:ZE,iridescence_fragment:QE,bumpmap_pars_fragment:JE,clipping_planes_fragment:eT,clipping_planes_pars_fragment:tT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:rT,color_pars_fragment:sT,color_pars_vertex:oT,color_vertex:aT,common:lT,cube_uv_reflection_fragment:cT,defaultnormal_vertex:uT,displacementmap_pars_vertex:fT,displacementmap_vertex:hT,emissivemap_fragment:dT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:gT,envmap_fragment:_T,envmap_common_pars_fragment:vT,envmap_pars_fragment:xT,envmap_pars_vertex:yT,envmap_physical_pars_fragment:LT,envmap_vertex:ST,fog_vertex:MT,fog_pars_vertex:ET,fog_fragment:TT,fog_pars_fragment:wT,gradientmap_pars_fragment:AT,lightmap_pars_fragment:RT,lights_lambert_fragment:CT,lights_lambert_pars_fragment:bT,lights_pars_begin:PT,lights_toon_fragment:NT,lights_toon_pars_fragment:IT,lights_phong_fragment:DT,lights_phong_pars_fragment:UT,lights_physical_fragment:OT,lights_physical_pars_fragment:FT,lights_fragment_begin:kT,lights_fragment_maps:BT,lights_fragment_end:zT,logdepthbuf_fragment:HT,logdepthbuf_pars_fragment:VT,logdepthbuf_pars_vertex:GT,logdepthbuf_vertex:WT,map_fragment:XT,map_pars_fragment:jT,map_particle_fragment:$T,map_particle_pars_fragment:qT,metalnessmap_fragment:YT,metalnessmap_pars_fragment:KT,morphinstance_vertex:ZT,morphcolor_vertex:QT,morphnormal_vertex:JT,morphtarget_pars_vertex:ew,morphtarget_vertex:tw,normal_fragment_begin:nw,normal_fragment_maps:iw,normal_pars_fragment:rw,normal_pars_vertex:sw,normal_vertex:ow,normalmap_pars_fragment:aw,clearcoat_normal_fragment_begin:lw,clearcoat_normal_fragment_maps:cw,clearcoat_pars_fragment:uw,iridescence_pars_fragment:fw,opaque_fragment:hw,packing:dw,premultiplied_alpha_fragment:pw,project_vertex:mw,dithering_fragment:gw,dithering_pars_fragment:_w,roughnessmap_fragment:vw,roughnessmap_pars_fragment:xw,shadowmap_pars_fragment:yw,shadowmap_pars_vertex:Sw,shadowmap_vertex:Mw,shadowmask_pars_fragment:Ew,skinbase_vertex:Tw,skinning_pars_vertex:ww,skinning_vertex:Aw,skinnormal_vertex:Rw,specularmap_fragment:Cw,specularmap_pars_fragment:bw,tonemapping_fragment:Pw,tonemapping_pars_fragment:Lw,transmission_fragment:Nw,transmission_pars_fragment:Iw,uv_pars_fragment:Dw,uv_pars_vertex:Uw,uv_vertex:Ow,worldpos_vertex:Fw,background_vert:kw,background_frag:Bw,backgroundCube_vert:zw,backgroundCube_frag:Hw,cube_vert:Vw,cube_frag:Gw,depth_vert:Ww,depth_frag:Xw,distanceRGBA_vert:jw,distanceRGBA_frag:$w,equirect_vert:qw,equirect_frag:Yw,linedashed_vert:Kw,linedashed_frag:Zw,meshbasic_vert:Qw,meshbasic_frag:Jw,meshlambert_vert:eA,meshlambert_frag:tA,meshmatcap_vert:nA,meshmatcap_frag:iA,meshnormal_vert:rA,meshnormal_frag:sA,meshphong_vert:oA,meshphong_frag:aA,meshphysical_vert:lA,meshphysical_frag:cA,meshtoon_vert:uA,meshtoon_frag:fA,points_vert:hA,points_frag:dA,shadow_vert:pA,shadow_frag:mA,sprite_vert:gA,sprite_frag:_A},ae={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},ti={basic:{uniforms:tn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:tn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new we(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:tn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:tn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:tn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new we(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:tn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:tn([ae.points,ae.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:tn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:tn([ae.common,ae.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:tn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:tn([ae.sprite,ae.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:tn([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:tn([ae.lights,ae.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};ti.physical={uniforms:tn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const hl={r:0,b:0,g:0},wr=new ci,vA=new Ne;function xA(n,e,t,i,r,s,o){const a=new we(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1;const y=g(_);y===null?d(a,l):y&&y.isColor&&(d(y,1),v=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(_,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===kc)?(u===void 0&&(u=new Ke(new so(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Qs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),wr.copy(v.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vA.makeRotationFromEuler(wr)),u.material.toneMapped=Ze.getTransfer(y.colorSpace)!==lt,(f!==y||h!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ke(new wa(2,2),new Oi({name:"BackgroundMaterial",uniforms:Qs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,v){_.getRGB(hl,F0(n)),i.buffers.color.setClear(hl.r,hl.g,hl.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:x,addToRenderList:m}}function yA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,U,G,L,$){let j=!1;const J=f(L,G,U);s!==J&&(s=J,c(s.object)),j=p(S,L,G,$),j&&g(S,L,G,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(S,U,G,L),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,U,G){const L=G.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let j=$[U.id];j===void 0&&(j={},$[U.id]=j);let J=j[L];return J===void 0&&(J=h(l()),j[L]=J),J}function h(S){const U=[],G=[],L=[];for(let $=0;$<t;$++)U[$]=0,G[$]=0,L[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:L,object:S,attributes:{},index:null}}function p(S,U,G,L){const $=s.attributes,j=U.attributes;let J=0;const Y=G.getAttributes();for(const P in Y)if(Y[P].location>=0){const X=$[P];let V=j[P];if(V===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),X===void 0||X.attribute!==V||V&&X.data!==V.data)return!0;J++}return s.attributesNum!==J||s.index!==L}function g(S,U,G,L){const $={},j=U.attributes;let J=0;const Y=G.getAttributes();for(const P in Y)if(Y[P].location>=0){let X=j[P];X===void 0&&(P==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),P==="instanceColor"&&S.instanceColor&&(X=S.instanceColor));const V={};V.attribute=X,X&&X.data&&(V.data=X.data),$[P]=V,J++}s.attributes=$,s.attributesNum=J,s.index=L}function x(){const S=s.newAttributes;for(let U=0,G=S.length;U<G;U++)S[U]=0}function m(S){d(S,0)}function d(S,U){const G=s.newAttributes,L=s.enabledAttributes,$=s.attributeDivisors;G[S]=1,L[S]===0&&(n.enableVertexAttribArray(S),L[S]=1),$[S]!==U&&(n.vertexAttribDivisor(S,U),$[S]=U)}function _(){const S=s.newAttributes,U=s.enabledAttributes;for(let G=0,L=U.length;G<L;G++)U[G]!==S[G]&&(n.disableVertexAttribArray(G),U[G]=0)}function v(S,U,G,L,$,j,J){J===!0?n.vertexAttribIPointer(S,U,G,$,j):n.vertexAttribPointer(S,U,G,L,$,j)}function y(S,U,G,L){x();const $=L.attributes,j=G.getAttributes(),J=U.defaultAttributeValues;for(const Y in j){const P=j[Y];if(P.location>=0){let H=$[Y];if(H===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(H=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(H=S.instanceColor)),H!==void 0){const X=H.normalized,V=H.itemSize,le=e.get(H);if(le===void 0)continue;const ve=le.buffer,B=le.type,Z=le.bytesPerElement,oe=B===n.INT||B===n.UNSIGNED_INT||H.gpuType===x0;if(H.isInterleavedBufferAttribute){const re=H.data,Ce=re.stride,Be=H.offset;if(re.isInstancedInterleavedBuffer){for(let O=0;O<P.locationSize;O++)d(P.location+O,re.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let O=0;O<P.locationSize;O++)m(P.location+O);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let O=0;O<P.locationSize;O++)v(P.location+O,V/P.locationSize,B,X,Ce*Z,(Be+V/P.locationSize*O)*Z,oe)}else{if(H.isInstancedBufferAttribute){for(let re=0;re<P.locationSize;re++)d(P.location+re,H.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let re=0;re<P.locationSize;re++)m(P.location+re);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let re=0;re<P.locationSize;re++)v(P.location+re,V/P.locationSize,B,X,V*Z,V/P.locationSize*re*Z,oe)}}else if(J!==void 0){const X=J[Y];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(P.location,X);break;case 3:n.vertexAttrib3fv(P.location,X);break;case 4:n.vertexAttrib4fv(P.location,X);break;default:n.vertexAttrib1fv(P.location,X)}}}}_()}function R(){b();for(const S in i){const U=i[S];for(const G in U){const L=U[G];for(const $ in L)u(L[$].object),delete L[$];delete U[G]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const U=i[S.id];for(const G in U){const L=U[G];for(const $ in L)u(L[$].object),delete L[$];delete U[G]}delete i[S.id]}function w(S){for(const U in i){const G=i[U];if(G[S.id]===void 0)continue;const L=G[S.id];for(const $ in L)u(L[$].object),delete L[$];delete G[S.id]}}function b(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function SA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<f;p++)this.render(c[p],u[p]);else{h.multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];for(let x=0;x<h.length;x++)t.update(g,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function MA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==jn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===Bc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ri&&!w)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,maxSamples:R}}function EA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Pr,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,v=_*4;let y=d.clippingState||null;l.value=y,y=u(g,h,v,p);for(let R=0;R!==v;++R)y[R]=t[R];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=p;v!==x;++v,y+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function TA(n){let e=new WeakMap;function t(o,a){return a===ih?o.mapping=js:a===rh&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ih||a===rh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new z0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class gd extends k0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Cs=4,Km=[.125,.215,.35,.446,.526,.582],Ir=20,Gu=new gd,Zm=new we;let Wu=null,Xu=0,ju=0,$u=!1;const Lr=(1+Math.sqrt(5))/2,hs=1/Lr,Qm=[new N(-Lr,hs,0),new N(Lr,hs,0),new N(-hs,0,Lr),new N(hs,0,Lr),new N(0,Lr,-hs),new N(0,Lr,hs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,Xu,ju),this._renderer.xr.enabled=$u,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Bc,format:jn,colorSpace:Bt,depthBuffer:!1},r=Jm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wA(s)),this._blurMaterial=AA(s,e,t)}return r}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,Gu)}_sceneToCubeUV(e,t,i,r){const a=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Zm),u.toneMapping=hr,u.autoClear=!1;const p=new si({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Ke(new so,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Zm),x=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;dl(r,_*v,d>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===js||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;dl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Gu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qm[(r-s-1)%Qm.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ke(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const d=[];let _=0;for(let w=0;w<Ir;++w){const b=w/x,M=Math.exp(-b*b/2);d.push(M),w===0?_+=M:w<m&&(_+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const y=this._sizeLods[r],R=3*y*(r>v-Cs?r-v+Cs:0),A=4*(this._cubeSize-y);dl(t,R,A,3*y,2*y),l.setRenderTarget(t),l.render(f,Gu)}}function wA(n){const e=[],t=[],i=[];let r=n;const s=n-Cs+1+Km.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Cs?l=Km[o-n+Cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,d=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,b=A>2?0:-1,M=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];_.set(M,x*g*A),v.set(h,m*g*A);const S=[A,A,A,A,A,A];y.set(S,d*g*A)}const R=new On;R.setAttribute("position",new an(_,x)),R.setAttribute("uv",new an(v,m)),R.setAttribute("faceIndex",new an(y,d)),e.push(R),r>Cs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Jm(n,e,t){const i=new Wr(n,e,t);return i.texture.mapping=kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AA(n,e,t){const i=new Float32Array(Ir),r=new N(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function eg(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function tg(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function _d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ih||l===rh,u=l===js||l===$s;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new ah(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new ah(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function CA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bA(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){const R=_[v+0],A=_[v+1],w=_[v+2];h.push(R,A,A,w,w,R)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const R=v+0,A=v+1,w=v+2;h.push(R,A,A,w,w,R)}}else return;const m=new(b0(h)?O0:U0)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function PA(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<g;m++)this.render(h[m]/o,p[m]);else{x.multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}}function f(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_];for(let _=0;_<x.length;_++)t.update(d,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function LA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function NA(n,e,t){const i=new WeakMap,r=new rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let R=a.attributes.position.count*y,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*A*4*f),b=new N0(w,R,A,f);b.type=ri,b.needsUpdate=!0;const M=y*4;for(let U=0;U<f;U++){const G=d[U],L=_[U],$=v[U],j=R*A*4*U;for(let J=0;J<G.count;J++){const Y=J*M;g===!0&&(r.fromBufferAttribute(G,J),w[j+Y+0]=r.x,w[j+Y+1]=r.y,w[j+Y+2]=r.z,w[j+Y+3]=0),x===!0&&(r.fromBufferAttribute(L,J),w[j+Y+4]=r.x,w[j+Y+5]=r.y,w[j+Y+6]=r.z,w[j+Y+7]=0),m===!0&&(r.fromBufferAttribute($,J),w[j+Y+8]=r.x,w[j+Y+9]=r.y,w[j+Y+10]=r.z,w[j+Y+11]=$.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new Oe(R,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function IA(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class V0 extends Rt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Os,u!==Os&&u!==ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Os&&(i=Ys),i===void 0&&u===ma&&(i=Ta),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const G0=new Rt,W0=new V0(1,1);W0.compareFunction=C0;const X0=new N0,j0=new yE,$0=new B0,ng=[],ig=[],rg=new Float32Array(16),sg=new Float32Array(9),og=new Float32Array(4);function oo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ng[r];if(s===void 0&&(s=new Float32Array(r),ng[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vc(n,e){let t=ig[e];t===void 0&&(t=new Int32Array(e),ig[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function DA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function UA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function OA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function FA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function kA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Ct(t,i))return;og.set(i),n.uniformMatrix2fv(this.addr,!1,og),bt(t,i)}}function BA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Ct(t,i))return;sg.set(i),n.uniformMatrix3fv(this.addr,!1,sg),bt(t,i)}}function zA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Ct(t,i))return;rg.set(i),n.uniformMatrix4fv(this.addr,!1,rg),bt(t,i)}}function HA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function VA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function GA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function WA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function XA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function $A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function qA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function YA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?W0:G0;t.setTexture2D(e||s,r)}function KA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||j0,r)}function ZA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||$0,r)}function QA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||X0,r)}function JA(n){switch(n){case 5126:return DA;case 35664:return UA;case 35665:return OA;case 35666:return FA;case 35674:return kA;case 35675:return BA;case 35676:return zA;case 5124:case 35670:return HA;case 35667:case 35671:return VA;case 35668:case 35672:return GA;case 35669:case 35673:return WA;case 5125:return XA;case 36294:return jA;case 36295:return $A;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return QA}}function e1(n,e){n.uniform1fv(this.addr,e)}function t1(n,e){const t=oo(e,this.size,2);n.uniform2fv(this.addr,t)}function n1(n,e){const t=oo(e,this.size,3);n.uniform3fv(this.addr,t)}function i1(n,e){const t=oo(e,this.size,4);n.uniform4fv(this.addr,t)}function r1(n,e){const t=oo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function s1(n,e){const t=oo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function o1(n,e){const t=oo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function a1(n,e){n.uniform1iv(this.addr,e)}function l1(n,e){n.uniform2iv(this.addr,e)}function c1(n,e){n.uniform3iv(this.addr,e)}function u1(n,e){n.uniform4iv(this.addr,e)}function f1(n,e){n.uniform1uiv(this.addr,e)}function h1(n,e){n.uniform2uiv(this.addr,e)}function d1(n,e){n.uniform3uiv(this.addr,e)}function p1(n,e){n.uniform4uiv(this.addr,e)}function m1(n,e,t){const i=this.cache,r=e.length,s=Vc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||G0,s[o])}function g1(n,e,t){const i=this.cache,r=e.length,s=Vc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||j0,s[o])}function _1(n,e,t){const i=this.cache,r=e.length,s=Vc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||$0,s[o])}function v1(n,e,t){const i=this.cache,r=e.length,s=Vc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||X0,s[o])}function x1(n){switch(n){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return f1;case 36294:return h1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return v1}}class y1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=JA(t.type)}}class S1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x1(t.type)}}class M1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const qu=/(\w+)(\])?(\[|\.)?/g;function ag(n,e){n.seq.push(e),n.map[e.id]=e}function E1(n,e,t){const i=n.name,r=i.length;for(qu.lastIndex=0;;){const s=qu.exec(i),o=qu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ag(t,c===void 0?new y1(a,n,e):new S1(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new M1(a),ag(t,f)),t=f}}}class Bl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);E1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function lg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const T1=37297;let w1=0;function A1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function R1(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===pc&&t===dc?i="LinearDisplayP3ToLinearSRGB":e===dc&&t===pc&&(i="LinearSRGBToLinearDisplayP3"),n){case Bt:case zc:return[i,"LinearTransferOETF"];case Ot:case dd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+A1(n.getShaderSource(e),o)}else return r}function C1(n,e){const t=R1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function b1(n,e){let t;switch(e){case TM:t="Linear";break;case wM:t="Reinhard";break;case AM:t="OptimizedCineon";break;case m0:t="ACESFilmic";break;case CM:t="AgX";break;case bM:t="Neutral";break;case RM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function P1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function L1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function N1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ko(n){return n!==""}function ug(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(n){return n.replace(I1,U1)}const D1=new Map;function U1(n,e){let t=Pe[e];if(t===void 0){const i=D1.get(e);if(i!==void 0)t=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lh(t)}const O1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(n){return n.replace(O1,F1)}function F1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function k1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===h0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===d0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function B1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case $s:e="ENVMAP_TYPE_CUBE";break;case kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function H1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case p0:e="ENVMAP_BLENDING_MULTIPLY";break;case MM:e="ENVMAP_BLENDING_MIX";break;case EM:e="ENVMAP_BLENDING_ADD";break}return e}function V1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function G1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=k1(t),c=B1(t),u=z1(t),f=H1(t),h=V1(t),p=P1(t),g=L1(s),x=r.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ko).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ko).join(`
`),d.length>0&&(d+=`
`)):(m=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),d=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?Pe.tonemapping_pars_fragment:"",t.toneMapping!==hr?b1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,C1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),o=lh(o),o=ug(o,t),o=fg(o,t),a=lh(a),a=ug(a,t),a=fg(a,t),o=hg(o),a=hg(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+m+o,y=_+d+a,R=lg(r,r.VERTEX_SHADER,v),A=lg(r,r.FRAGMENT_SHADER,y);r.attachShader(x,R),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(U){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),L=r.getShaderInfoLog(R).trim(),$=r.getShaderInfoLog(A).trim();let j=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,R,A);else{const Y=cg(r,R,"vertex"),P=cg(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+Y+`
`+P)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(L===""||$==="")&&(J=!1);J&&(U.diagnostics={runnable:j,programLog:G,vertexShader:{log:L,prefix:m},fragmentShader:{log:$,prefix:d}})}r.deleteShader(R),r.deleteShader(A),b=new Bl(r,x),M=N1(r,x)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,T1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let W1=0;class X1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new j1(e),t.set(e,i)),i}}class j1{constructor(e){this.id=W1++,this.code=e,this.usedTimes=0}}function $1(n,e,t,i,r,s,o){const a=new I0,l=new X1,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,U,G,L){const $=G.fog,j=L.geometry,J=M.isMeshStandardMaterial?G.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),P=Y&&Y.mapping===kc?Y.image.height:null,H=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const X=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,V=X!==void 0?X.length:0;let le=0;j.morphAttributes.position!==void 0&&(le=1),j.morphAttributes.normal!==void 0&&(le=2),j.morphAttributes.color!==void 0&&(le=3);let ve,B,Z,oe;if(H){const Qe=ti[H];ve=Qe.vertexShader,B=Qe.fragmentShader}else ve=M.vertexShader,B=M.fragmentShader,l.update(M),Z=l.getVertexShaderID(M),oe=l.getFragmentShaderID(M);const re=n.getRenderTarget(),Ce=L.isInstancedMesh===!0,Be=L.isBatchedMesh===!0,O=!!M.map,it=!!M.matcap,ye=!!Y,qe=!!M.aoMap,Me=!!M.lightMap,Ge=!!M.bumpMap,Fe=!!M.normalMap,We=!!M.displacementMap,_t=!!M.emissiveMap,C=!!M.metalnessMap,E=!!M.roughnessMap,W=M.anisotropy>0,K=M.clearcoat>0,ee=M.dispersion>0,ne=M.iridescence>0,Se=M.sheen>0,he=M.transmission>0,fe=W&&!!M.anisotropyMap,Ie=K&&!!M.clearcoatMap,se=K&&!!M.clearcoatNormalMap,xe=K&&!!M.clearcoatRoughnessMap,Xe=ne&&!!M.iridescenceMap,Ee=ne&&!!M.iridescenceThicknessMap,me=Se&&!!M.sheenColorMap,De=Se&&!!M.sheenRoughnessMap,Ve=!!M.specularMap,yt=!!M.specularColorMap,Ue=!!M.specularIntensityMap,I=he&&!!M.transmissionMap,Q=he&&!!M.thicknessMap,q=!!M.gradientMap,ce=!!M.alphaMap,de=M.alphaTest>0,$e=!!M.alphaHash,ot=!!M.extensions;let vt=hr;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(vt=n.toneMapping);const zt={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:ve,fragmentShader:B,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Be,instancing:Ce,instancingColor:Ce&&L.instanceColor!==null,instancingMorph:Ce&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Bt,alphaToCoverage:!!M.alphaToCoverage,map:O,matcap:it,envMap:ye,envMapMode:ye&&Y.mapping,envMapCubeUVHeight:P,aoMap:qe,lightMap:Me,bumpMap:Ge,normalMap:Fe,displacementMap:h&&We,emissiveMap:_t,normalMapObjectSpace:Fe&&M.normalMapType===WM,normalMapTangentSpace:Fe&&M.normalMapType===R0,metalnessMap:C,roughnessMap:E,anisotropy:W,anisotropyMap:fe,clearcoat:K,clearcoatMap:Ie,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:ee,iridescence:ne,iridescenceMap:Xe,iridescenceThicknessMap:Ee,sheen:Se,sheenColorMap:me,sheenRoughnessMap:De,specularMap:Ve,specularColorMap:yt,specularIntensityMap:Ue,transmission:he,transmissionMap:I,thicknessMap:Q,gradientMap:q,opaque:M.transparent===!1&&M.blending===Us&&M.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:$e,combine:M.combine,mapUv:O&&x(M.map.channel),aoMapUv:qe&&x(M.aoMap.channel),lightMapUv:Me&&x(M.lightMap.channel),bumpMapUv:Ge&&x(M.bumpMap.channel),normalMapUv:Fe&&x(M.normalMap.channel),displacementMapUv:We&&x(M.displacementMap.channel),emissiveMapUv:_t&&x(M.emissiveMap.channel),metalnessMapUv:C&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:fe&&x(M.anisotropyMap.channel),clearcoatMapUv:Ie&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(M.sheenRoughnessMap.channel),specularMapUv:Ve&&x(M.specularMap.channel),specularColorMapUv:yt&&x(M.specularColorMap.channel),specularIntensityMapUv:Ue&&x(M.specularIntensityMap.channel),transmissionMapUv:I&&x(M.transmissionMap.channel),thicknessMapUv:Q&&x(M.thicknessMap.channel),alphaMapUv:ce&&x(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Fe||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!j.attributes.uv&&(O||ce),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:O&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wn,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ot&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ot&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)S.push(U),S.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(_(S,M),v(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function y(M){const S=g[M.type];let U;if(S){const G=ti[S];U=NE.clone(G.uniforms)}else U=M.uniforms;return U}function R(M,S){let U;for(let G=0,L=u.length;G<L;G++){const $=u[G];if($.cacheKey===S){U=$,++U.usedTimes;break}}return U===void 0&&(U=new G1(n,S,M,s),u.push(U)),U}function A(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:b}}function q1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Y1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,g,x,m){const d=o(f,h,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,g,x,m){const d=o(f,h,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Y1),i.length>1&&i.sort(h||pg),r.length>1&&r.sort(h||pg)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function K1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new mg,n.set(i,[o])):r>=s.length?(o=new mg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Z1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new we};break;case"SpotLight":t={position:new N,direction:new N,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function Q1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let J1=0;function eR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tR(n){const e=new Z1,t=Q1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new Ne,o=new Ne;function a(c,u){let f=0,h=0,p=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let g=0,x=0,m=0,d=0,_=0,v=0,y=0,R=0,A=0,w=0,b=0;c.sort(eR);const M=u===!0?Math.PI:1;for(let U=0,G=c.length;U<G;U++){const L=c[U],$=L.color,j=L.intensity,J=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=$.r*j*M,h+=$.g*j*M,p+=$.b*j*M;else if(L.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(L.sh.coefficients[P],j);b++}else if(L.isDirectionalLight){const P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const H=L.shadow,X=t.get(L);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,i.directionalShadow[g]=X,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=L.shadow.matrix,v++}i.directional[g]=P,g++}else if(L.isSpotLight){const P=e.get(L);P.position.setFromMatrixPosition(L.matrixWorld),P.color.copy($).multiplyScalar(j*M),P.distance=J,P.coneCos=Math.cos(L.angle),P.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),P.decay=L.decay,i.spot[m]=P;const H=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,H.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[m]=H.matrix,L.castShadow){const X=t.get(L);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,i.spotShadow[m]=X,i.spotShadowMap[m]=Y,R++}m++}else if(L.isRectAreaLight){const P=e.get(L);P.color.copy($).multiplyScalar(j),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),i.rectArea[d]=P,d++}else if(L.isPointLight){const P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity*M),P.distance=L.distance,P.decay=L.decay,L.castShadow){const H=L.shadow,X=t.get(L);X.shadowBias=H.bias,X.shadowNormalBias=H.normalBias,X.shadowRadius=H.radius,X.shadowMapSize=H.mapSize,X.shadowCameraNear=H.camera.near,X.shadowCameraFar=H.camera.far,i.pointShadow[x]=X,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=L.shadow.matrix,y++}i.point[x]=P,x++}else if(L.isHemisphereLight){const P=e.get(L);P.skyColor.copy(L.color).multiplyScalar(j*M),P.groundColor.copy(L.groundColor).multiplyScalar(j*M),i.hemi[_]=P,_++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=p;const S=i.hash;(S.directionalLength!==g||S.pointLength!==x||S.spotLength!==m||S.rectAreaLength!==d||S.hemiLength!==_||S.numDirectionalShadows!==v||S.numPointShadows!==y||S.numSpotShadows!==R||S.numSpotMaps!==A||S.numLightProbes!==b)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=d,i.point.length=x,i.hemi.length=_,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=R+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,S.directionalLength=g,S.pointLength=x,S.spotLength=m,S.rectAreaLength=d,S.hemiLength=_,S.numDirectionalShadows=v,S.numPointShadows=y,S.numSpotShadows=R,S.numSpotMaps=A,S.numLightProbes=b,i.version=J1++)}function l(c,u){let f=0,h=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const v=c[d];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function gg(n){const e=new tR(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function nR(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new gg(n),e.set(r,[a])):s>=o.length?(a=new gg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class iR extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rR extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aR(n,e,t){let i=new md;const r=new Oe,s=new Oe,o=new rt,a=new iR({depthPacking:GM}),l=new rR,c={},u=t.maxTextureSize,f={[Ui]:on,[on]:Ui,[Wn]:Wn},h=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:sR,fragmentShader:oR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new On;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ke(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h0;let d=this.type;this.render=function(A,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),G=n.state;G.setBlending(fr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const L=d!==Mi&&this.type===Mi,$=d===Mi&&this.type!==Mi;for(let j=0,J=A.length;j<J;j++){const Y=A[j],P=Y.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const H=P.getFrameExtents();if(r.multiply(H),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,P.mapSize.y=s.y)),P.map===null||L===!0||$===!0){const V=this.type!==Mi?{minFilter:rn,magFilter:rn}:{};P.map!==null&&P.map.dispose(),P.map=new Wr(r.x,r.y,V),P.map.texture.name=Y.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();const X=P.getViewportCount();for(let V=0;V<X;V++){const le=P.getViewport(V);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),G.viewport(o),P.updateMatrices(Y,V),i=P.getFrustum(),y(w,b,P.camera,Y,this.type)}P.isPointLightShadow!==!0&&this.type===Mi&&_(P,b),P.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,U)};function _(A,w){const b=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Wr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,b,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,b,p,x,null)}function v(A,w,b,M){let S=null;const U=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)S=U;else if(S=b.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=S.uuid,L=w.uuid;let $=c[G];$===void 0&&($={},c[G]=$);let j=$[L];j===void 0&&(j=S.clone(),$[L]=j,w.addEventListener("dispose",R)),S=j}if(S.visible=w.visible,S.wireframe=w.wireframe,M===Mi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=n.properties.get(S);G.light=b}return S}function y(A,w,b,M,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Mi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const L=e.update(A),$=A.material;if(Array.isArray($)){const j=L.groups;for(let J=0,Y=j.length;J<Y;J++){const P=j[J],H=$[P.materialIndex];if(H&&H.visible){const X=v(A,H,M,S);A.onBeforeShadow(n,A,w,b,L,X,P),n.renderBufferDirect(b,null,L,X,A,P),A.onAfterShadow(n,A,w,b,L,X,P)}}}else if($.visible){const j=v(A,$,M,S);A.onBeforeShadow(n,A,w,b,L,j,null),n.renderBufferDirect(b,null,L,j,A,null),A.onAfterShadow(n,A,w,b,L,j,null)}}const G=A.children;for(let L=0,$=G.length;L<$;L++)y(G[L],w,b,M,S)}function R(A){A.target.removeEventListener("dispose",R);for(const b in c){const M=c[b],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function lR(n){function e(){let I=!1;const Q=new rt;let q=null;const ce=new rt(0,0,0,0);return{setMask:function(de){q!==de&&!I&&(n.colorMask(de,de,de,de),q=de)},setLocked:function(de){I=de},setClear:function(de,$e,ot,vt,zt){zt===!0&&(de*=vt,$e*=vt,ot*=vt),Q.set(de,$e,ot,vt),ce.equals(Q)===!1&&(n.clearColor(de,$e,ot,vt),ce.copy(Q))},reset:function(){I=!1,q=null,ce.set(-1,0,0,0)}}}function t(){let I=!1,Q=null,q=null,ce=null;return{setTest:function(de){de?oe(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(de){Q!==de&&!I&&(n.depthMask(de),Q=de)},setFunc:function(de){if(q!==de){switch(de){case mM:n.depthFunc(n.NEVER);break;case gM:n.depthFunc(n.ALWAYS);break;case _M:n.depthFunc(n.LESS);break;case uc:n.depthFunc(n.LEQUAL);break;case vM:n.depthFunc(n.EQUAL);break;case xM:n.depthFunc(n.GEQUAL);break;case yM:n.depthFunc(n.GREATER);break;case SM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=de}},setLocked:function(de){I=de},setClear:function(de){ce!==de&&(n.clearDepth(de),ce=de)},reset:function(){I=!1,Q=null,q=null,ce=null}}}function i(){let I=!1,Q=null,q=null,ce=null,de=null,$e=null,ot=null,vt=null,zt=null;return{setTest:function(Qe){I||(Qe?oe(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(Qe){Q!==Qe&&!I&&(n.stencilMask(Qe),Q=Qe)},setFunc:function(Qe,Qn,Jt){(q!==Qe||ce!==Qn||de!==Jt)&&(n.stencilFunc(Qe,Qn,Jt),q=Qe,ce=Qn,de=Jt)},setOp:function(Qe,Qn,Jt){($e!==Qe||ot!==Qn||vt!==Jt)&&(n.stencilOp(Qe,Qn,Jt),$e=Qe,ot=Qn,vt=Jt)},setLocked:function(Qe){I=Qe},setClear:function(Qe){zt!==Qe&&(n.clearStencil(Qe),zt=Qe)},reset:function(){I=!1,Q=null,q=null,ce=null,de=null,$e=null,ot=null,vt=null,zt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,g=!1,x=null,m=null,d=null,_=null,v=null,y=null,R=null,A=new we(0,0,0),w=0,b=!1,M=null,S=null,U=null,G=null,L=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=J>=2);let P=null,H={};const X=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),le=new rt().fromArray(X),ve=new rt().fromArray(V);function B(I,Q,q,ce){const de=new Uint8Array(4),$e=n.createTexture();n.bindTexture(I,$e),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<q;ot++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Q+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return $e}const Z={};Z[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),s.setFunc(uc),Ge(!1),Fe(qp),oe(n.CULL_FACE),qe(fr);function oe(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function re(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Ce(I,Q){return u[I]!==Q?(n.bindFramebuffer(I,Q),u[I]=Q,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Q),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Be(I,Q){let q=h,ce=!1;if(I){q=f.get(Q),q===void 0&&(q=[],f.set(Q,q));const de=I.textures;if(q.length!==de.length||q[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,ot=de.length;$e<ot;$e++)q[$e]=n.COLOR_ATTACHMENT0+$e;q.length=de.length,ce=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ce=!0);ce&&n.drawBuffers(q)}function O(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const it={[Nr]:n.FUNC_ADD,[QS]:n.FUNC_SUBTRACT,[JS]:n.FUNC_REVERSE_SUBTRACT};it[eM]=n.MIN,it[tM]=n.MAX;const ye={[nM]:n.ZERO,[iM]:n.ONE,[rM]:n.SRC_COLOR,[th]:n.SRC_ALPHA,[uM]:n.SRC_ALPHA_SATURATE,[lM]:n.DST_COLOR,[oM]:n.DST_ALPHA,[sM]:n.ONE_MINUS_SRC_COLOR,[nh]:n.ONE_MINUS_SRC_ALPHA,[cM]:n.ONE_MINUS_DST_COLOR,[aM]:n.ONE_MINUS_DST_ALPHA,[fM]:n.CONSTANT_COLOR,[hM]:n.ONE_MINUS_CONSTANT_COLOR,[dM]:n.CONSTANT_ALPHA,[pM]:n.ONE_MINUS_CONSTANT_ALPHA};function qe(I,Q,q,ce,de,$e,ot,vt,zt,Qe){if(I===fr){g===!0&&(re(n.BLEND),g=!1);return}if(g===!1&&(oe(n.BLEND),g=!0),I!==ZS){if(I!==x||Qe!==b){if((m!==Nr||v!==Nr)&&(n.blendEquation(n.FUNC_ADD),m=Nr,v=Nr),Qe)switch(I){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yp:n.blendFunc(n.ONE,n.ONE);break;case Kp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}d=null,_=null,y=null,R=null,A.set(0,0,0),w=0,x=I,b=Qe}return}de=de||Q,$e=$e||q,ot=ot||ce,(Q!==m||de!==v)&&(n.blendEquationSeparate(it[Q],it[de]),m=Q,v=de),(q!==d||ce!==_||$e!==y||ot!==R)&&(n.blendFuncSeparate(ye[q],ye[ce],ye[$e],ye[ot]),d=q,_=ce,y=$e,R=ot),(vt.equals(A)===!1||zt!==w)&&(n.blendColor(vt.r,vt.g,vt.b,zt),A.copy(vt),w=zt),x=I,b=!1}function Me(I,Q){I.side===Wn?re(n.CULL_FACE):oe(n.CULL_FACE);let q=I.side===on;Q&&(q=!q),Ge(q),I.blending===Us&&I.transparent===!1?qe(fr):qe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const ce=I.stencilWrite;o.setTest(ce),ce&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Fe(I){I!==YS?(oe(n.CULL_FACE),I!==S&&(I===qp?n.cullFace(n.BACK):I===KS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),S=I}function We(I){I!==U&&(j&&n.lineWidth(I),U=I)}function _t(I,Q,q){I?(oe(n.POLYGON_OFFSET_FILL),(G!==Q||L!==q)&&(n.polygonOffset(Q,q),G=Q,L=q)):re(n.POLYGON_OFFSET_FILL)}function C(I){I?oe(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function E(I){I===void 0&&(I=n.TEXTURE0+$-1),P!==I&&(n.activeTexture(I),P=I)}function W(I,Q,q){q===void 0&&(P===null?q=n.TEXTURE0+$-1:q=P);let ce=H[q];ce===void 0&&(ce={type:void 0,texture:void 0},H[q]=ce),(ce.type!==I||ce.texture!==Q)&&(P!==q&&(n.activeTexture(q),P=q),n.bindTexture(I,Q||Z[I]),ce.type=I,ce.texture=Q)}function K(){const I=H[P];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){le.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),le.copy(I))}function De(I){ve.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ve.copy(I))}function Ve(I,Q){let q=l.get(Q);q===void 0&&(q=new WeakMap,l.set(Q,q));let ce=q.get(I);ce===void 0&&(ce=n.getUniformBlockIndex(Q,I.name),q.set(I,ce))}function yt(I,Q){const ce=l.get(Q).get(I);a.get(Q)!==ce&&(n.uniformBlockBinding(Q,ce,I.__bindingPointIndex),a.set(Q,ce))}function Ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},P=null,H={},u={},f=new WeakMap,h=[],p=null,g=!1,x=null,m=null,d=null,_=null,v=null,y=null,R=null,A=new we(0,0,0),w=0,b=!1,M=null,S=null,U=null,G=null,L=null,le.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:oe,disable:re,bindFramebuffer:Ce,drawBuffers:Be,useProgram:O,setBlending:qe,setMaterial:Me,setFlipSided:Ge,setCullFace:Fe,setLineWidth:We,setPolygonOffset:_t,setScissorTest:C,activeTexture:E,bindTexture:W,unbindTexture:K,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:Xe,texImage3D:Ee,updateUBOMapping:Ve,uniformBlockBinding:yt,texStorage2D:se,texStorage3D:xe,texSubImage2D:Se,texSubImage3D:he,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ie,scissor:me,viewport:De,reset:Ue}}function cR(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return p?new OffscreenCanvas(C,E):_a("canvas")}function x(C,E,W){let K=1;const ee=_t(C);if((ee.width>W||ee.height>W)&&(K=W/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ne=Math.floor(K*ee.width),Se=Math.floor(K*ee.height);f===void 0&&(f=g(ne,Se));const he=E?g(ne,Se):f;return he.width=ne,he.height=Se,he.getContext("2d").drawImage(C,0,0,ne,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ne+"x"+Se+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==rn&&C.minFilter!==yn}function d(C){n.generateMipmap(C)}function _(C,E,W,K,ee=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=E;if(E===n.RED&&(W===n.FLOAT&&(ne=n.R32F),W===n.HALF_FLOAT&&(ne=n.R16F),W===n.UNSIGNED_BYTE&&(ne=n.R8)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.R8UI),W===n.UNSIGNED_SHORT&&(ne=n.R16UI),W===n.UNSIGNED_INT&&(ne=n.R32UI),W===n.BYTE&&(ne=n.R8I),W===n.SHORT&&(ne=n.R16I),W===n.INT&&(ne=n.R32I)),E===n.RG&&(W===n.FLOAT&&(ne=n.RG32F),W===n.HALF_FLOAT&&(ne=n.RG16F),W===n.UNSIGNED_BYTE&&(ne=n.RG8)),E===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.RG8UI),W===n.UNSIGNED_SHORT&&(ne=n.RG16UI),W===n.UNSIGNED_INT&&(ne=n.RG32UI),W===n.BYTE&&(ne=n.RG8I),W===n.SHORT&&(ne=n.RG16I),W===n.INT&&(ne=n.RG32I)),E===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),E===n.RGBA){const Se=ee?hc:Ze.getTransfer(K);W===n.FLOAT&&(ne=n.RGBA32F),W===n.HALF_FLOAT&&(ne=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ne=Se===lt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function y(C){const E=C.target;E.removeEventListener("dispose",y),A(E),E.isVideoTexture&&u.delete(E)}function R(C){const E=C.target;E.removeEventListener("dispose",R),b(E)}function A(C){const E=i.get(C);if(E.__webglInit===void 0)return;const W=C.source,K=h.get(W);if(K){const ee=K[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(C),Object.keys(K).length===0&&h.delete(W)}i.remove(C)}function w(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const W=C.source,K=h.get(W);delete K[E.__cacheKey],o.memory.textures--}function b(C){const E=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let ee=0;ee<E.__webglFramebuffer[K].length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[K][ee]);else n.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)n.deleteFramebuffer(E.__webglFramebuffer[K]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=C.textures;for(let K=0,ee=W.length;K<ee;K++){const ne=i.get(W[K]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(W[K])}i.remove(C)}let M=0;function S(){M=0}function U(){const C=M;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),M+=1,C}function G(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function L(C,E){const W=i.get(C);if(C.isVideoTexture&&Fe(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(W,C,E);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function $(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){le(W,C,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function j(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){le(W,C,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function J(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){ve(W,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}const Y={[qs]:n.REPEAT,[tr]:n.CLAMP_TO_EDGE,[fc]:n.MIRRORED_REPEAT},P={[rn]:n.NEAREST,[_0]:n.NEAREST_MIPMAP_NEAREST,[Fo]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[Fl]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},H={[XM]:n.NEVER,[ZM]:n.ALWAYS,[jM]:n.LESS,[C0]:n.LEQUAL,[$M]:n.EQUAL,[KM]:n.GEQUAL,[qM]:n.GREATER,[YM]:n.NOTEQUAL};function X(C,E){if(E.type===ri&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===Fl||E.magFilter===Fo||E.magFilter===Ci||E.minFilter===yn||E.minFilter===Fl||E.minFilter===Fo||E.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Y[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Y[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Y[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,P[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,P[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,H[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===rn||E.minFilter!==Fo&&E.minFilter!==Ci||E.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function V(C,E){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",y));const K=E.source;let ee=h.get(K);ee===void 0&&(ee={},h.set(K,ee));const ne=G(E);if(ne!==C.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ee[ne].usedTimes++;const Se=ee[C.__cacheKey];Se!==void 0&&(ee[C.__cacheKey].usedTimes--,Se.usedTimes===0&&w(E)),C.__cacheKey=ne,C.__webglTexture=ee[ne].texture}return W}function le(C,E,W){let K=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=n.TEXTURE_3D);const ee=V(C,E),ne=E.source;t.bindTexture(K,C.__webglTexture,n.TEXTURE0+W);const Se=i.get(ne);if(ne.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+W);const he=Ze.getPrimaries(Ze.workingColorSpace),fe=E.colorSpace===wi?null:Ze.getPrimaries(E.colorSpace),Ie=E.colorSpace===wi||he===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let se=x(E.image,!1,r.maxTextureSize);se=We(E,se);const xe=s.convert(E.format,E.colorSpace),Xe=s.convert(E.type);let Ee=_(E.internalFormat,xe,Xe,E.colorSpace,E.isVideoTexture);X(K,E);let me;const De=E.mipmaps,Ve=E.isVideoTexture!==!0,yt=Se.__version===void 0||ee===!0,Ue=ne.dataReady,I=v(E,se);if(E.isDepthTexture)Ee=n.DEPTH_COMPONENT16,E.type===ri?Ee=n.DEPTH_COMPONENT32F:E.type===Ys?Ee=n.DEPTH_COMPONENT24:E.type===Ta&&(Ee=n.DEPTH24_STENCIL8),yt&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Ee,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ee,se.width,se.height,0,xe,Xe,null));else if(E.isDataTexture)if(De.length>0){Ve&&yt&&t.texStorage2D(n.TEXTURE_2D,I,Ee,De[0].width,De[0].height);for(let Q=0,q=De.length;Q<q;Q++)me=De[Q],Ve?Ue&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,xe,Xe,me.data):t.texImage2D(n.TEXTURE_2D,Q,Ee,me.width,me.height,0,xe,Xe,me.data);E.generateMipmaps=!1}else Ve?(yt&&t.texStorage2D(n.TEXTURE_2D,I,Ee,se.width,se.height),Ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,xe,Xe,se.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,se.width,se.height,0,xe,Xe,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,I,Ee,De[0].width,De[0].height,se.depth);for(let Q=0,q=De.length;Q<q;Q++)me=De[Q],E.format!==jn?xe!==null?Ve?Ue&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,se.depth,xe,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ee,me.width,me.height,se.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?Ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,se.depth,xe,Xe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ee,me.width,me.height,se.depth,0,xe,Xe,me.data)}else{Ve&&yt&&t.texStorage2D(n.TEXTURE_2D,I,Ee,De[0].width,De[0].height);for(let Q=0,q=De.length;Q<q;Q++)me=De[Q],E.format!==jn?xe!==null?Ve?Ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,xe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ee,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?Ue&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,xe,Xe,me.data):t.texImage2D(n.TEXTURE_2D,Q,Ee,me.width,me.height,0,xe,Xe,me.data)}else if(E.isDataArrayTexture)Ve?(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,I,Ee,se.width,se.height,se.depth),Ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Xe,se.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,se.width,se.height,se.depth,0,xe,Xe,se.data);else if(E.isData3DTexture)Ve?(yt&&t.texStorage3D(n.TEXTURE_3D,I,Ee,se.width,se.height,se.depth),Ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Xe,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,se.width,se.height,se.depth,0,xe,Xe,se.data);else if(E.isFramebufferTexture){if(yt)if(Ve)t.texStorage2D(n.TEXTURE_2D,I,Ee,se.width,se.height);else{let Q=se.width,q=se.height;for(let ce=0;ce<I;ce++)t.texImage2D(n.TEXTURE_2D,ce,Ee,Q,q,0,xe,Xe,null),Q>>=1,q>>=1}}else if(De.length>0){if(Ve&&yt){const Q=_t(De[0]);t.texStorage2D(n.TEXTURE_2D,I,Ee,Q.width,Q.height)}for(let Q=0,q=De.length;Q<q;Q++)me=De[Q],Ve?Ue&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,xe,Xe,me):t.texImage2D(n.TEXTURE_2D,Q,Ee,xe,Xe,me);E.generateMipmaps=!1}else if(Ve){if(yt){const Q=_t(se);t.texStorage2D(n.TEXTURE_2D,I,Ee,Q.width,Q.height)}Ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Xe,se)}else t.texImage2D(n.TEXTURE_2D,0,Ee,xe,Xe,se);m(E)&&d(K),Se.__version=ne.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ve(C,E,W){if(E.image.length!==6)return;const K=V(C,E),ee=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+W);const ne=i.get(ee);if(ee.version!==ne.__version||K===!0){t.activeTexture(n.TEXTURE0+W);const Se=Ze.getPrimaries(Ze.workingColorSpace),he=E.colorSpace===wi?null:Ze.getPrimaries(E.colorSpace),fe=E.colorSpace===wi||Se===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let q=0;q<6;q++)!Ie&&!se?xe[q]=x(E.image[q],!0,r.maxCubemapSize):xe[q]=se?E.image[q].image:E.image[q],xe[q]=We(E,xe[q]);const Xe=xe[0],Ee=s.convert(E.format,E.colorSpace),me=s.convert(E.type),De=_(E.internalFormat,Ee,me,E.colorSpace),Ve=E.isVideoTexture!==!0,yt=ne.__version===void 0||K===!0,Ue=ee.dataReady;let I=v(E,Xe);X(n.TEXTURE_CUBE_MAP,E);let Q;if(Ie){Ve&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,I,De,Xe.width,Xe.height);for(let q=0;q<6;q++){Q=xe[q].mipmaps;for(let ce=0;ce<Q.length;ce++){const de=Q[ce];E.format!==jn?Ee!==null?Ve?Ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,0,0,de.width,de.height,Ee,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,De,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,0,0,de.width,de.height,Ee,me,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,De,de.width,de.height,0,Ee,me,de.data)}}}else{if(Q=E.mipmaps,Ve&&yt){Q.length>0&&I++;const q=_t(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,I,De,q.width,q.height)}for(let q=0;q<6;q++)if(se){Ve?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,xe[q].width,xe[q].height,Ee,me,xe[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,De,xe[q].width,xe[q].height,0,Ee,me,xe[q].data);for(let ce=0;ce<Q.length;ce++){const $e=Q[ce].image[q].image;Ve?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,0,0,$e.width,$e.height,Ee,me,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,De,$e.width,$e.height,0,Ee,me,$e.data)}}else{Ve?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ee,me,xe[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,De,Ee,me,xe[q]);for(let ce=0;ce<Q.length;ce++){const de=Q[ce];Ve?Ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,0,0,Ee,me,de.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,De,Ee,me,de.image[q])}}}m(E)&&d(n.TEXTURE_CUBE_MAP),ne.__version=ee.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function B(C,E,W,K,ee,ne){const Se=s.convert(W.format,W.colorSpace),he=s.convert(W.type),fe=_(W.internalFormat,Se,he,W.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>ne),xe=Math.max(1,E.height>>ne);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,fe,se,xe,E.depth,0,Se,he,null):t.texImage2D(ee,ne,fe,se,xe,0,Se,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ge(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ee,i.get(W).__webglTexture,0,Me(E)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ee,i.get(W).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(C,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let K=n.DEPTH_COMPONENT24;if(W||Ge(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ri?K=n.DEPTH_COMPONENT32F:ee.type===Ys&&(K=n.DEPTH_COMPONENT24));const ne=Me(E);Ge(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,K,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,K,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const K=Me(E);W&&Ge(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,E.width,E.height):Ge(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const K=E.textures;for(let ee=0;ee<K.length;ee++){const ne=K[ee],Se=s.convert(ne.format,ne.colorSpace),he=s.convert(ne.type),fe=_(ne.internalFormat,Se,he,ne.colorSpace),Ie=Me(E);W&&Ge(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,fe,E.width,E.height):Ge(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,fe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,fe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function oe(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),L(E.depthTexture,0);const K=i.get(E.depthTexture).__webglTexture,ee=Me(E);if(E.depthTexture.format===Os)Ge(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(E.depthTexture.format===ma)Ge(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function re(C){const E=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");oe(E.__webglFramebuffer,C)}else if(W){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]=n.createRenderbuffer(),Z(E.__webglDepthbuffer[K],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Z(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(C,E,W){const K=i.get(C);E!==void 0&&B(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&re(C)}function Be(C){const E=C.texture,W=i.get(C),K=i.get(E);C.addEventListener("dispose",R);const ee=C.textures,ne=C.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=E.version,o.memory.textures++),ne){W.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[he]=[];for(let fe=0;fe<E.mipmaps.length;fe++)W.__webglFramebuffer[he][fe]=n.createFramebuffer()}else W.__webglFramebuffer[he]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)W.__webglFramebuffer[he]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Se)for(let he=0,fe=ee.length;he<fe;he++){const Ie=i.get(ee[he]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ge(C)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){const fe=ee[he];W.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[he]);const Ie=s.convert(fe.format,fe.colorSpace),se=s.convert(fe.type),xe=_(fe.internalFormat,Ie,se,fe.colorSpace,C.isXRRenderTarget===!0),Xe=Me(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,xe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,W.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),X(n.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)B(W.__webglFramebuffer[he][fe],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else B(W.__webglFramebuffer[he],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let he=0,fe=ee.length;he<fe;he++){const Ie=ee[he],se=i.get(Ie);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),X(n.TEXTURE_2D,Ie),B(W.__webglFramebuffer,C,Ie,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(Ie)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,K.__webglTexture),X(he,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)B(W.__webglFramebuffer[fe],C,E,n.COLOR_ATTACHMENT0,he,fe);else B(W.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,he,0);m(E)&&d(he),t.unbindTexture()}C.depthBuffer&&re(C)}function O(C){const E=C.textures;for(let W=0,K=E.length;W<K;W++){const ee=E[W];if(m(ee)){const ne=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(ee).__webglTexture;t.bindTexture(ne,Se),d(ne),t.unbindTexture()}}}const it=[],ye=[];function qe(C){if(C.samples>0){if(Ge(C)===!1){const E=C.textures,W=C.width,K=C.height;let ee=n.COLOR_BUFFER_BIT;const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(C),he=E.length>1;if(he)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);const Ie=i.get(E[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,W,K,0,0,W,K,ee,n.NEAREST),l===!0&&(it.length=0,ye.length=0,it.push(n.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(it.push(ne),ye.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);const Ie=i.get(E[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Me(C){return Math.min(r.maxSamples,C.samples)}function Ge(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Fe(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function We(C,E){const W=C.colorSpace,K=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Bt&&W!==wi&&(Ze.getTransfer(W)===lt?(K!==jn||ee!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function _t(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=S,this.setTexture2D=L,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=J,this.rebindTextures=Ce,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=B,this.useMultisampledRTT=Ge}function uR(n,e){function t(i,r=wi){let s;const o=Ze.getTransfer(r);if(i===mr)return n.UNSIGNED_BYTE;if(i===y0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===S0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===IM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===LM)return n.BYTE;if(i===NM)return n.SHORT;if(i===v0)return n.UNSIGNED_SHORT;if(i===x0)return n.INT;if(i===Ys)return n.UNSIGNED_INT;if(i===ri)return n.FLOAT;if(i===Bc)return n.HALF_FLOAT;if(i===DM)return n.ALPHA;if(i===UM)return n.RGB;if(i===jn)return n.RGBA;if(i===OM)return n.LUMINANCE;if(i===FM)return n.LUMINANCE_ALPHA;if(i===Os)return n.DEPTH_COMPONENT;if(i===ma)return n.DEPTH_STENCIL;if(i===M0)return n.RED;if(i===E0)return n.RED_INTEGER;if(i===kM)return n.RG;if(i===T0)return n.RG_INTEGER;if(i===w0)return n.RGBA_INTEGER;if(i===xu||i===yu||i===Su||i===Mu)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Su)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jp||i===em||i===tm||i===nm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===em)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===im||i===rm||i===sm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===im||i===rm)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===om||i===am||i===lm||i===cm||i===um||i===fm||i===hm||i===dm||i===pm||i===mm||i===gm||i===_m||i===vm||i===xm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===om)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===am)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===um)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_m)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xm)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eu||i===ym||i===Sm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eu)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ym)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===BM||i===Mm||i===Em||i===Tm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Em)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ta?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class fR extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oi extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hR={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const dR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Rt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Oi({vertexShader:dR,fragmentShader:pR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ke(new wa(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class gR extends ro{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const x=new mR,m=t.getContextAttributes();let d=null,_=null;const v=[],y=[],R=new Oe;let A=null;const w=new Kt;w.layers.enable(1),w.viewport=new rt;const b=new Kt;b.layers.enable(2),b.viewport=new rt;const M=[w,b],S=new fR;S.layers.enable(1),S.layers.enable(2);let U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=v[B];return Z===void 0&&(Z=new Yu,v[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=v[B];return Z===void 0&&(Z=new Yu,v[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=v[B];return Z===void 0&&(Z=new Yu,v[B]=Z),Z.getHandSpace()};function L(B){const Z=y.indexOf(B.inputSource);if(Z===-1)return;const oe=v[Z];oe!==void 0&&(oe.update(B.inputSource,B.frame,c||o),oe.dispatchEvent({type:B.type,data:B.inputSource}))}function $(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",j);for(let B=0;B<v.length;B++){const Z=y[B];Z!==null&&(y[B]=null,v[B].disconnect(Z))}U=null,G=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,_=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",$),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Wr(p.framebufferWidth,p.framebufferHeight,{format:jn,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,oe=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?ma:Os,oe=m.stencil?Ta:Ys);const Ce={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Wr(h.textureWidth,h.textureHeight,{format:jn,type:mr,depthTexture:new V0(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(B){for(let Z=0;Z<B.removed.length;Z++){const oe=B.removed[Z],re=y.indexOf(oe);re>=0&&(y[re]=null,v[re].disconnect(oe))}for(let Z=0;Z<B.added.length;Z++){const oe=B.added[Z];let re=y.indexOf(oe);if(re===-1){for(let Be=0;Be<v.length;Be++)if(Be>=y.length){y.push(oe),re=Be;break}else if(y[Be]===null){y[Be]=oe,re=Be;break}if(re===-1)break}const Ce=v[re];Ce&&Ce.connect(oe)}}const J=new N,Y=new N;function P(B,Z,oe){J.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(oe.matrixWorld);const re=J.distanceTo(Y),Ce=Z.projectionMatrix.elements,Be=oe.projectionMatrix.elements,O=Ce[14]/(Ce[10]-1),it=Ce[14]/(Ce[10]+1),ye=(Ce[9]+1)/Ce[5],qe=(Ce[9]-1)/Ce[5],Me=(Ce[8]-1)/Ce[0],Ge=(Be[8]+1)/Be[0],Fe=O*Me,We=O*Ge,_t=re/(-Me+Ge),C=_t*-Me;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(C),B.translateZ(_t),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const E=O+_t,W=it+_t,K=Fe-C,ee=We+(re-C),ne=ye*it/W*E,Se=qe*it/W*E;B.projectionMatrix.makePerspective(K,ee,ne,Se,E,W),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function H(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;x.texture!==null&&(B.near=x.depthNear,B.far=x.depthFar),S.near=b.near=w.near=B.near,S.far=b.far=w.far=B.far,(U!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,G=S.far,w.near=U,w.far=G,b.near=U,b.far=G,w.updateProjectionMatrix(),b.updateProjectionMatrix(),B.updateProjectionMatrix());const Z=B.parent,oe=S.cameras;H(S,Z);for(let re=0;re<oe.length;re++)H(oe[re],Z);oe.length===2?P(S,w,b):S.projectionMatrix.copy(w.projectionMatrix),X(B,S,Z)};function X(B,Z,oe){oe===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(oe.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Zs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null};let V=null;function le(B,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let re=!1;oe.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let Be=0;Be<oe.length;Be++){const O=oe[Be];let it=null;if(p!==null)it=p.getViewport(O);else{const qe=f.getViewSubImage(h,O);it=qe.viewport,Be===0&&(e.setRenderTargetTextures(_,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(_))}let ye=M[Be];ye===void 0&&(ye=new Kt,ye.layers.enable(Be),ye.viewport=new rt,M[Be]=ye),ye.matrix.fromArray(O.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(O.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(it.x,it.y,it.width,it.height),Be===0&&(S.matrix.copy(ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(ye)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Be=f.getDepthInformation(oe[0]);Be&&Be.isValid&&Be.texture&&x.init(e,Be,r.renderState)}}for(let oe=0;oe<v.length;oe++){const re=y[oe],Ce=v[oe];re!==null&&Ce!==void 0&&Ce.update(re,Z,c||o)}x.render(e,S),V&&V(B,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ve=new H0;ve.setAnimationLoop(le),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}}const Ar=new ci,_R=new Ne;function vR(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,F0(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===on&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===on&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,y=_.envMapRotation;if(v&&(m.envMap.value=v,Ar.copy(y),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),m.envMapRotation.value.setFromMatrix4(_R.makeRotationFromEuler(Ar)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const R=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*R,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xR(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=r[_.id];y===void 0&&(g(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(_,R);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function u(_){const v=f();_.__bindingPointIndex=v;const y=n.createBuffer(),R=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,w=y.length;A<w;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,S=b.length;M<S;M++){const U=b[M];if(p(U,A,M,R)===!0){const G=U.__offset,L=Array.isArray(U.value)?U.value:[U.value];let $=0;for(let j=0;j<L.length;j++){const J=L[j],Y=x(J);typeof J=="number"||typeof J=="boolean"?(U.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,G+$,U.__data)):J.isMatrix3?(U.__data[0]=J.elements[0],U.__data[1]=J.elements[1],U.__data[2]=J.elements[2],U.__data[3]=0,U.__data[4]=J.elements[3],U.__data[5]=J.elements[4],U.__data[6]=J.elements[5],U.__data[7]=0,U.__data[8]=J.elements[6],U.__data[9]=J.elements[7],U.__data[10]=J.elements[8],U.__data[11]=0):(J.toArray(U.__data,$),$+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,v,y,R){const A=_.value,w=v+"_"+y;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const b=R[w];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return R[w]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function g(_){const v=_.uniforms;let y=0;const R=16;for(let w=0,b=v.length;w<b;w++){const M=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,U=M.length;S<U;S++){const G=M[S],L=Array.isArray(G.value)?G.value:[G.value];for(let $=0,j=L.length;$<j;$++){const J=L[$],Y=x(J),P=y%R;P!==0&&R-P<Y.boundary&&(y+=R-P),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=Y.storage}}}const A=y%R;return A>0&&(y+=R-A),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class q0{constructor(e={}){const{canvas:t=pE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const d=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=hr,this.toneMappingExposure=1;const v=this;let y=!1,R=0,A=0,w=null,b=-1,M=null;const S=new rt,U=new rt;let G=null;const L=new we(0);let $=0,j=t.width,J=t.height,Y=1,P=null,H=null;const X=new rt(0,0,j,J),V=new rt(0,0,j,J);let le=!1;const ve=new md;let B=!1,Z=!1;const oe=new Ne,re=new N,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return w===null?Y:1}let O=i;function it(T,D){return t.getContext(T,D)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hd}`),t.addEventListener("webglcontextlost",I,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",q,!1),O===null){const D="webgl2";if(O=it(D,T),O===null)throw it(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,qe,Me,Ge,Fe,We,_t,C,E,W,K,ee,ne,Se,he,fe,Ie,se,xe,Xe,Ee,me,De,Ve;function yt(){ye=new CA(O),ye.init(),me=new uR(O,ye),qe=new MA(O,ye,e,me),Me=new lR(O),Ge=new LA(O),Fe=new q1,We=new cR(O,ye,Me,Fe,qe,me,Ge),_t=new TA(v),C=new RA(v),E=new kE(O),De=new yA(O,E),W=new bA(O,E,Ge,De),K=new IA(O,W,E,Ge),xe=new NA(O,qe,We),fe=new EA(Fe),ee=new $1(v,_t,C,ye,qe,De,fe),ne=new vR(v,Fe),Se=new K1,he=new nR(ye),se=new xA(v,_t,C,Me,K,h,l),Ie=new aR(v,K,qe),Ve=new xR(O,Ge,qe,Me),Xe=new SA(O,ye,Ge),Ee=new PA(O,ye,Ge),Ge.programs=ee.programs,v.capabilities=qe,v.extensions=ye,v.properties=Fe,v.renderLists=Se,v.shadowMap=Ie,v.state=Me,v.info=Ge}yt();const Ue=new gR(v,O);this.xr=Ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(j,J,!1))},this.getSize=function(T){return T.set(j,J)},this.setSize=function(T,D,z=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,J=D,t.width=Math.floor(T*Y),t.height=Math.floor(D*Y),z===!0&&(t.style.width=T+"px",t.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(j*Y,J*Y).floor()},this.setDrawingBufferSize=function(T,D,z){j=T,J=D,Y=z,t.width=Math.floor(T*z),t.height=Math.floor(D*z),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(X)},this.setViewport=function(T,D,z,F){T.isVector4?X.set(T.x,T.y,T.z,T.w):X.set(T,D,z,F),Me.viewport(S.copy(X).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(V)},this.setScissor=function(T,D,z,F){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,D,z,F),Me.scissor(U.copy(V).multiplyScalar(Y).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){Me.setScissorTest(le=T)},this.setOpaqueSort=function(T){P=T},this.setTransparentSort=function(T){H=T},this.getClearColor=function(T){return T.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(T=!0,D=!0,z=!0){let F=0;if(T){let k=!1;if(w!==null){const ue=w.texture.format;k=ue===w0||ue===T0||ue===E0}if(k){const ue=w.texture.type,ge=ue===mr||ue===Ys||ue===v0||ue===Ta||ue===y0||ue===S0,_e=se.getClearColor(),Te=se.getClearAlpha(),Ae=_e.r,be=_e.g,ke=_e.b;ge?(p[0]=Ae,p[1]=be,p[2]=ke,p[3]=Te,O.clearBufferuiv(O.COLOR,0,p)):(g[0]=Ae,g[1]=be,g[2]=ke,g[3]=Te,O.clearBufferiv(O.COLOR,0,g))}else F|=O.COLOR_BUFFER_BIT}D&&(F|=O.DEPTH_BUFFER_BIT),z&&(F|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",I,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",q,!1),Se.dispose(),he.dispose(),Fe.dispose(),_t.dispose(),C.dispose(),K.dispose(),De.dispose(),Ve.dispose(),ee.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Qe),Ue.removeEventListener("sessionend",Qn),Jt.stop()};function I(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Ge.autoReset,D=Ie.enabled,z=Ie.autoUpdate,F=Ie.needsUpdate,k=Ie.type;yt(),Ge.autoReset=T,Ie.enabled=D,Ie.autoUpdate=z,Ie.needsUpdate=F,Ie.type=k}function q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const D=T.target;D.removeEventListener("dispose",ce),de(D)}function de(T){$e(T),Fe.remove(T)}function $e(T){const D=Fe.get(T).programs;D!==void 0&&(D.forEach(function(z){ee.releaseProgram(z)}),T.isShaderMaterial&&ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,z,F,k,ue){D===null&&(D=Ce);const ge=k.isMesh&&k.matrixWorld.determinant()<0,_e=vx(T,D,z,F,k);Me.setMaterial(F,ge);let Te=z.index,Ae=1;if(F.wireframe===!0){if(Te=W.getWireframeAttribute(z),Te===void 0)return;Ae=2}const be=z.drawRange,ke=z.attributes.position;let Mt=be.start*Ae,Ht=(be.start+be.count)*Ae;ue!==null&&(Mt=Math.max(Mt,ue.start*Ae),Ht=Math.min(Ht,(ue.start+ue.count)*Ae)),Te!==null?(Mt=Math.max(Mt,0),Ht=Math.min(Ht,Te.count)):ke!=null&&(Mt=Math.max(Mt,0),Ht=Math.min(Ht,ke.count));const gn=Ht-Mt;if(gn<0||gn===1/0)return;De.setup(k,F,_e,z,Te);let pi,Ye=Xe;if(Te!==null&&(pi=E.get(Te),Ye=Ee,Ye.setIndex(pi)),k.isMesh)F.wireframe===!0?(Me.setLineWidth(F.wireframeLinewidth*Be()),Ye.setMode(O.LINES)):Ye.setMode(O.TRIANGLES);else if(k.isLine){let Re=F.linewidth;Re===void 0&&(Re=1),Me.setLineWidth(Re*Be()),k.isLineSegments?Ye.setMode(O.LINES):k.isLineLoop?Ye.setMode(O.LINE_LOOP):Ye.setMode(O.LINE_STRIP)}else k.isPoints?Ye.setMode(O.POINTS):k.isSprite&&Ye.setMode(O.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?Ye.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):Ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Ye.renderInstances(Mt,gn,k.count);else if(z.isInstancedBufferGeometry){const Re=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,uo=Math.min(z.instanceCount,Re);Ye.renderInstances(Mt,gn,uo)}else Ye.render(Mt,gn)};function ot(T,D,z){T.transparent===!0&&T.side===Wn&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,ba(T,D,z),T.side=Ui,T.needsUpdate=!0,ba(T,D,z),T.side=Wn):ba(T,D,z)}this.compile=function(T,D,z=null){z===null&&(z=T),m=he.get(z),m.init(D),_.push(m),z.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==z&&T.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(v._useLegacyLights);const F=new Set;return T.traverse(function(k){const ue=k.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const _e=ue[ge];ot(_e,z,k),F.add(_e)}else ot(ue,z,k),F.add(ue)}),_.pop(),m=null,F},this.compileAsync=function(T,D,z=null){const F=this.compile(T,D,z);return new Promise(k=>{function ue(){if(F.forEach(function(ge){Fe.get(ge).currentProgram.isReady()&&F.delete(ge)}),F.size===0){k(T);return}setTimeout(ue,10)}ye.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let vt=null;function zt(T){vt&&vt(T)}function Qe(){Jt.stop()}function Qn(){Jt.start()}const Jt=new H0;Jt.setAnimationLoop(zt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(T){vt=T,Ue.setAnimationLoop(T),T===null?Jt.stop():Jt.start()},Ue.addEventListener("sessionstart",Qe),Ue.addEventListener("sessionend",Qn),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(D),D=Ue.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,D,w),m=he.get(T,_.length),m.init(D),_.push(m),oe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ve.setFromProjectionMatrix(oe),Z=this.localClippingEnabled,B=fe.init(this.clippingPlanes,Z),x=Se.get(T,d.length),x.init(),d.push(x),Ld(T,D,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(P,H);const z=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1;z&&se.addToRenderList(x,T),this.info.render.frame++,B===!0&&fe.beginShadows();const F=m.state.shadowsArray;Ie.render(F,T,D),B===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=x.opaque,ue=x.transmissive;if(m.setupLights(v._useLegacyLights),D.isArrayCamera){const ge=D.cameras;if(ue.length>0)for(let _e=0,Te=ge.length;_e<Te;_e++){const Ae=ge[_e];Id(k,ue,T,Ae)}z&&se.render(T);for(let _e=0,Te=ge.length;_e<Te;_e++){const Ae=ge[_e];Nd(x,T,Ae,Ae.viewport)}}else ue.length>0&&Id(k,ue,T,D),z&&se.render(T),Nd(x,T,D);w!==null&&(We.updateMultisampleRenderTarget(w),We.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,D),De.resetDefaultState(),b=-1,M=null,_.pop(),_.length>0?(m=_[_.length-1],B===!0&&fe.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Ld(T,D,z,F){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ve.intersectsSprite(T)){F&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const ge=K.update(T),_e=T.material;_e.visible&&x.push(T,ge,_e,z,re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ve.intersectsObject(T))){const ge=K.update(T),_e=T.material;if(F&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),re.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),re.copy(ge.boundingSphere.center)),re.applyMatrix4(T.matrixWorld).applyMatrix4(oe)),Array.isArray(_e)){const Te=ge.groups;for(let Ae=0,be=Te.length;Ae<be;Ae++){const ke=Te[Ae],Mt=_e[ke.materialIndex];Mt&&Mt.visible&&x.push(T,ge,Mt,z,re.z,ke)}}else _e.visible&&x.push(T,ge,_e,z,re.z,null)}}const ue=T.children;for(let ge=0,_e=ue.length;ge<_e;ge++)Ld(ue[ge],D,z,F)}function Nd(T,D,z,F){const k=T.opaque,ue=T.transmissive,ge=T.transparent;m.setupLightsView(z),B===!0&&fe.setGlobalState(v.clippingPlanes,z),F&&Me.viewport(S.copy(F)),k.length>0&&Ca(k,D,z),ue.length>0&&Ca(ue,D,z),ge.length>0&&Ca(ge,D,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Id(T,D,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[F.id]===void 0&&(m.state.transmissionRenderTarget[F.id]=new Wr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Bc:mr,minFilter:Ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ue=m.state.transmissionRenderTarget[F.id],ge=F.viewport||S;ue.setSize(ge.z,ge.w);const _e=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(L),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear();const Te=v.toneMapping;v.toneMapping=hr;const Ae=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),m.setupLightsView(F),B===!0&&fe.setGlobalState(v.clippingPlanes,F),Ca(T,z,F),We.updateMultisampleRenderTarget(ue),We.updateRenderTargetMipmap(ue),ye.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ke=0,Mt=D.length;ke<Mt;ke++){const Ht=D[ke],gn=Ht.object,pi=Ht.geometry,Ye=Ht.material,Re=Ht.group;if(Ye.side===Wn&&gn.layers.test(F.layers)){const uo=Ye.side;Ye.side=on,Ye.needsUpdate=!0,Dd(gn,z,F,pi,Ye,Re),Ye.side=uo,Ye.needsUpdate=!0,be=!0}}be===!0&&(We.updateMultisampleRenderTarget(ue),We.updateRenderTargetMipmap(ue))}v.setRenderTarget(_e),v.setClearColor(L,$),Ae!==void 0&&(F.viewport=Ae),v.toneMapping=Te}function Ca(T,D,z){const F=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ue=T.length;k<ue;k++){const ge=T[k],_e=ge.object,Te=ge.geometry,Ae=F===null?ge.material:F,be=ge.group;_e.layers.test(z.layers)&&Dd(_e,D,z,Te,Ae,be)}}function Dd(T,D,z,F,k,ue){T.onBeforeRender(v,D,z,F,k,ue),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,D,z,F,T,ue),k.transparent===!0&&k.side===Wn&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,v.renderBufferDirect(z,D,F,k,T,ue),k.side=Ui,k.needsUpdate=!0,v.renderBufferDirect(z,D,F,k,T,ue),k.side=Wn):v.renderBufferDirect(z,D,F,k,T,ue),T.onAfterRender(v,D,z,F,k,ue)}function ba(T,D,z){D.isScene!==!0&&(D=Ce);const F=Fe.get(T),k=m.state.lights,ue=m.state.shadowsArray,ge=k.state.version,_e=ee.getParameters(T,k.state,ue,D,z),Te=ee.getProgramCacheKey(_e);let Ae=F.programs;F.environment=T.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(T.isMeshStandardMaterial?C:_t).get(T.envMap||F.environment),F.envMapRotation=F.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",ce),Ae=new Map,F.programs=Ae);let be=Ae.get(Te);if(be!==void 0){if(F.currentProgram===be&&F.lightsStateVersion===ge)return Od(T,_e),be}else _e.uniforms=ee.getUniforms(T),T.onBuild(z,_e,v),T.onBeforeCompile(_e,v),be=ee.acquireProgram(_e,Te),Ae.set(Te,be),F.uniforms=_e.uniforms;const ke=F.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=fe.uniform),Od(T,_e),F.needsLights=yx(T),F.lightsStateVersion=ge,F.needsLights&&(ke.ambientLightColor.value=k.state.ambient,ke.lightProbe.value=k.state.probe,ke.directionalLights.value=k.state.directional,ke.directionalLightShadows.value=k.state.directionalShadow,ke.spotLights.value=k.state.spot,ke.spotLightShadows.value=k.state.spotShadow,ke.rectAreaLights.value=k.state.rectArea,ke.ltc_1.value=k.state.rectAreaLTC1,ke.ltc_2.value=k.state.rectAreaLTC2,ke.pointLights.value=k.state.point,ke.pointLightShadows.value=k.state.pointShadow,ke.hemisphereLights.value=k.state.hemi,ke.directionalShadowMap.value=k.state.directionalShadowMap,ke.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ke.spotShadowMap.value=k.state.spotShadowMap,ke.spotLightMatrix.value=k.state.spotLightMatrix,ke.spotLightMap.value=k.state.spotLightMap,ke.pointShadowMap.value=k.state.pointShadowMap,ke.pointShadowMatrix.value=k.state.pointShadowMatrix),F.currentProgram=be,F.uniformsList=null,be}function Ud(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=Bl.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function Od(T,D){const z=Fe.get(T);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function vx(T,D,z,F,k){D.isScene!==!0&&(D=Ce),We.resetTextureUnits();const ue=D.fog,ge=F.isMeshStandardMaterial?D.environment:null,_e=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Bt,Te=(F.isMeshStandardMaterial?C:_t).get(F.envMap||ge),Ae=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,be=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ke=!!z.morphAttributes.position,Mt=!!z.morphAttributes.normal,Ht=!!z.morphAttributes.color;let gn=hr;F.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gn=v.toneMapping);const pi=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ye=pi!==void 0?pi.length:0,Re=Fe.get(F),uo=m.state.lights;if(B===!0&&(Z===!0||T!==M)){const Rn=T===M&&F.id===b;fe.setState(F,T,Rn)}let ft=!1;F.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==uo.state.version||Re.outputColorSpace!==_e||k.isBatchedMesh&&Re.batching===!1||!k.isBatchedMesh&&Re.batching===!0||k.isInstancedMesh&&Re.instancing===!1||!k.isInstancedMesh&&Re.instancing===!0||k.isSkinnedMesh&&Re.skinning===!1||!k.isSkinnedMesh&&Re.skinning===!0||k.isInstancedMesh&&Re.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Re.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Re.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Re.instancingMorph===!1&&k.morphTexture!==null||Re.envMap!==Te||F.fog===!0&&Re.fog!==ue||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==fe.numPlanes||Re.numIntersection!==fe.numIntersection)||Re.vertexAlphas!==Ae||Re.vertexTangents!==be||Re.morphTargets!==ke||Re.morphNormals!==Mt||Re.morphColors!==Ht||Re.toneMapping!==gn||Re.morphTargetsCount!==Ye)&&(ft=!0):(ft=!0,Re.__version=F.version);let yr=Re.currentProgram;ft===!0&&(yr=ba(F,D,k));let Fd=!1,fo=!1,Wc=!1;const Vt=yr.getUniforms(),ki=Re.uniforms;if(Me.useProgram(yr.program)&&(Fd=!0,fo=!0,Wc=!0),F.id!==b&&(b=F.id,fo=!0),Fd||M!==T){Vt.setValue(O,"projectionMatrix",T.projectionMatrix),Vt.setValue(O,"viewMatrix",T.matrixWorldInverse);const Rn=Vt.map.cameraPosition;Rn!==void 0&&Rn.setValue(O,re.setFromMatrixPosition(T.matrixWorld)),qe.logarithmicDepthBuffer&&Vt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Vt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,fo=!0,Wc=!0)}if(k.isSkinnedMesh){Vt.setOptional(O,k,"bindMatrix"),Vt.setOptional(O,k,"bindMatrixInverse");const Rn=k.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Vt.setValue(O,"boneTexture",Rn.boneTexture,We))}k.isBatchedMesh&&(Vt.setOptional(O,k,"batchingTexture"),Vt.setValue(O,"batchingTexture",k._matricesTexture,We));const Xc=z.morphAttributes;if((Xc.position!==void 0||Xc.normal!==void 0||Xc.color!==void 0)&&xe.update(k,z,yr),(fo||Re.receiveShadow!==k.receiveShadow)&&(Re.receiveShadow=k.receiveShadow,Vt.setValue(O,"receiveShadow",k.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ki.envMap.value=Te,ki.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&D.environment!==null&&(ki.envMapIntensity.value=D.environmentIntensity),fo&&(Vt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&xx(ki,Wc),ue&&F.fog===!0&&ne.refreshFogUniforms(ki,ue),ne.refreshMaterialUniforms(ki,F,Y,J,m.state.transmissionRenderTarget[T.id]),Bl.upload(O,Ud(Re),ki,We)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Bl.upload(O,Ud(Re),ki,We),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Vt.setValue(O,"center",k.center),Vt.setValue(O,"modelViewMatrix",k.modelViewMatrix),Vt.setValue(O,"normalMatrix",k.normalMatrix),Vt.setValue(O,"modelMatrix",k.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Rn=F.uniformsGroups;for(let jc=0,Sx=Rn.length;jc<Sx;jc++){const kd=Rn[jc];Ve.update(kd,yr),Ve.bind(kd,yr)}}return yr}function xx(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function yx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,D,z){Fe.get(T.texture).__webglTexture=D,Fe.get(T.depthTexture).__webglTexture=z;const F=Fe.get(T);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=z===void 0,F.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const z=Fe.get(T);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,z=0){w=T,R=D,A=z;let F=!0,k=null,ue=!1,ge=!1;if(T){const Te=Fe.get(T);Te.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(O.FRAMEBUFFER,null),F=!1):Te.__webglFramebuffer===void 0?We.setupRenderTarget(T):Te.__hasExternalTextures&&We.rebindTextures(T,Fe.get(T.texture).__webglTexture,Fe.get(T.depthTexture).__webglTexture);const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ge=!0);const be=Fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(be[D])?k=be[D][z]:k=be[D],ue=!0):T.samples>0&&We.useMultisampledRTT(T)===!1?k=Fe.get(T).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[z]:k=be,S.copy(T.viewport),U.copy(T.scissor),G=T.scissorTest}else S.copy(X).multiplyScalar(Y).floor(),U.copy(V).multiplyScalar(Y).floor(),G=le;if(Me.bindFramebuffer(O.FRAMEBUFFER,k)&&F&&Me.drawBuffers(T,k),Me.viewport(S),Me.scissor(U),Me.setScissorTest(G),ue){const Te=Fe.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,Te.__webglTexture,z)}else if(ge){const Te=Fe.get(T.texture),Ae=D||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Te.__webglTexture,z||0,Ae)}b=-1},this.readRenderTargetPixels=function(T,D,z,F,k,ue,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e){Me.bindFramebuffer(O.FRAMEBUFFER,_e);try{const Te=T.texture,Ae=Te.format,be=Te.type;if(!qe.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-F&&z>=0&&z<=T.height-k&&O.readPixels(D,z,F,k,me.convert(Ae),me.convert(be),ue)}finally{const Te=w!==null?Fe.get(w).__webglFramebuffer:null;Me.bindFramebuffer(O.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,D,z=0){const F=Math.pow(2,-z),k=Math.floor(D.image.width*F),ue=Math.floor(D.image.height*F);We.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,T.x,T.y,k,ue),Me.unbindTexture()},this.copyTextureToTexture=function(T,D,z,F=0){const k=D.image.width,ue=D.image.height,ge=me.convert(z.format),_e=me.convert(z.type);We.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,T.x,T.y,k,ue,ge,_e,D.image.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,T.x,T.y,D.mipmaps[0].width,D.mipmaps[0].height,ge,D.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,F,T.x,T.y,ge,_e,D.image),F===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(T,D,z,F,k=0){const ue=T.max.x-T.min.x,ge=T.max.y-T.min.y,_e=T.max.z-T.min.z,Te=me.convert(F.format),Ae=me.convert(F.type);let be;if(F.isData3DTexture)We.setTexture3D(F,0),be=O.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)We.setTexture2DArray(F,0),be=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const ke=O.getParameter(O.UNPACK_ROW_LENGTH),Mt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ht=O.getParameter(O.UNPACK_SKIP_PIXELS),gn=O.getParameter(O.UNPACK_SKIP_ROWS),pi=O.getParameter(O.UNPACK_SKIP_IMAGES),Ye=z.isCompressedTexture?z.mipmaps[k]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Ye.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ye.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(be,k,D.x,D.y,D.z,ue,ge,_e,Te,Ae,Ye.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(be,k,D.x,D.y,D.z,ue,ge,_e,Te,Ye.data):O.texSubImage3D(be,k,D.x,D.y,D.z,ue,ge,_e,Te,Ae,Ye),O.pixelStorei(O.UNPACK_ROW_LENGTH,ke),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ht),O.pixelStorei(O.UNPACK_SKIP_ROWS,gn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,pi),k===0&&F.generateMipmaps&&O.generateMipmap(be),Me.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?We.setTextureCube(T,0):T.isData3DTexture?We.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?We.setTexture2DArray(T,0):We.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,Me.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dd?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===zc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class vd extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yR{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return P0("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new N;class xd{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _g=new N,vg=new rt,xg=new rt,SR=new N,yg=new Ne,pl=new N,Ku=new fi,Sg=new Ne,Zu=new Hc;class MR extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qp,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pl),this.boundingBox.expandByPoint(pl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pl),this.boundingSphere.expandByPoint(pl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ku.copy(this.boundingSphere),Ku.applyMatrix4(r),e.ray.intersectsSphere(Ku)!==!1&&(Sg.copy(r).invert(),Zu.copy(e.ray).applyMatrix4(Sg),!(this.boundingBox!==null&&Zu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===PM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;vg.fromBufferAttribute(r.attributes.skinIndex,e),xg.fromBufferAttribute(r.attributes.skinWeight,e),_g.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=xg.getComponent(s);if(o!==0){const a=vg.getComponent(s);yg.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(SR.copy(_g).applyMatrix4(yg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Y0 extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class K0 extends Rt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=rn,u=rn,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mg=new Ne,ER=new Ne;class yd{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ne;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:ER;Mg.multiplyMatrices(a,t[s]),Mg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new yd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new K0(t,e,e,jn,ri);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Y0),this.bones.push(o),this.boneInverses.push(new Ne().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class ch extends an{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new Ne,Eg=new Ne,ml=[],Tg=new ui,TR=new Ne,wo=new Ke,Ao=new fi;class wR extends Ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ch(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,TR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),Tg.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Tg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),Ao.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(wo.geometry=this.geometry,wo.material=this.material,wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ao.copy(this.boundingSphere),Ao.applyMatrix4(i),e.ray.intersectsSphere(Ao)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ds),Eg.multiplyMatrices(i,ds),wo.matrixWorld=Eg,wo.raycast(e,ml);for(let o=0,a=ml.length;o<a;o++){const l=ml[o];l.instanceId=s,l.object=this,t.push(l)}ml.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ch(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new K0(new Float32Array(r*this.count),r,this.count,M0,ri));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Z0 extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gc=new N,_c=new N,wg=new Ne,Ro=new Hc,gl=new fi,Qu=new N,Ag=new N;class Sd extends dt{constructor(e=new On,t=new Z0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)gc.fromBufferAttribute(t,r-1),_c.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=gc.distanceTo(_c);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(r),gl.radius+=s,e.ray.intersectsSphere(gl)===!1)return;wg.copy(r).invert(),Ro.copy(e.ray).applyMatrix4(wg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const d=u.getX(x),_=u.getX(x+1),v=_l(this,e,Ro,l,d,_);v&&t.push(v)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),d=_l(this,e,Ro,l,x,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const d=_l(this,e,Ro,l,x,x+1);d&&t.push(d)}if(this.isLineLoop){const x=_l(this,e,Ro,l,g-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _l(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(gc.fromBufferAttribute(o,r),_c.fromBufferAttribute(o,s),t.distanceSqToSegment(gc,_c,Qu,Ag)>i)return;Qu.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Qu);if(!(l<e.near||l>e.far))return{distance:l,point:Ag.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const Rg=new N,Cg=new N;class AR extends Sd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Rg.fromBufferAttribute(t,r),Cg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Rg.distanceTo(Cg);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class RR extends Sd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Q0 extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bg=new Ne,uh=new Hc,vl=new fi,xl=new N;class CR extends dt{constructor(e=new On,t=new Q0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(r),vl.radius+=s,e.ray.intersectsSphere(vl)===!1)return;bg.copy(r).invert(),uh.copy(e.ray).applyMatrix4(bg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,x=p;g<x;g++){const m=c.getX(g);xl.fromBufferAttribute(f,m),Pg(xl,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,x=p;g<x;g++)xl.fromBufferAttribute(f,g),Pg(xl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Pg(n,e,t,i,r,s,o){const a=uh.distanceSqToPoint(n);if(a<t){const l=new N;uh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class bR extends Rt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vc extends On{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new N,u=new Oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const p=i+f/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ln(o,3)),this.setAttribute("normal",new ln(a,3)),this.setAttribute("uv",new ln(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Md extends On{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const h=(t-e)/r,p=new N,g=new Oe;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<r;x++){const m=x*(i+1);for(let d=0;d<i;d++){const _=d+m,v=_,y=_+i+1,R=_+i+2,A=_+1;a.push(v,y,A),a.push(y,R,A)}}this.setIndex(a),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(c,3)),this.setAttribute("uv",new ln(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class PR extends Kn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new we(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class va extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=R0,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends va{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function yl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function LR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function NR(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Lg(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function J0(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Aa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class IR extends Aa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wm,endingEnd:wm}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Am:s=e,a=2*t-i;break;case Rm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Am:o=e,l=2*i-t;break;case Rm:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,d=-h*m+2*h*x-h*g,_=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let R=0;R!==a;++R)s[R]=d*o[u+R]+_*o[c+R]+v*o[l+R]+y*o[f+R];return s}}class DR extends Aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class UR extends Aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class di{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yl(t,this.TimeBufferType),this.values=yl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:yl(e.times,Array),values:yl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new UR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new DR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new IR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case Tu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return Tu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&LR(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Tu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,h=f-i,p=f+i;for(let g=0;g!==i;++g){const x=t[f+g];if(x!==t[h+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Ks;class ao extends di{}ao.prototype.ValueTypeName="bool";ao.prototype.ValueBufferType=Array;ao.prototype.DefaultInterpolation=ga;ao.prototype.InterpolantFactoryMethodLinear=void 0;ao.prototype.InterpolantFactoryMethodSmooth=void 0;class ex extends di{}ex.prototype.ValueTypeName="color";class Js extends di{}Js.prototype.ValueTypeName="number";class OR extends Aa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)xr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Xr extends di{InterpolantFactoryMethodLinear(e){return new OR(this.times,this.values,this.getValueSize(),e)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.DefaultInterpolation=Ks;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class lo extends di{}lo.prototype.ValueTypeName="string";lo.prototype.ValueBufferType=Array;lo.prototype.DefaultInterpolation=ga;lo.prototype.InterpolantFactoryMethodLinear=void 0;lo.prototype.InterpolantFactoryMethodSmooth=void 0;class eo extends di{}eo.prototype.ValueTypeName="vector";class FR{constructor(e="",t=-1,i=[],r=zM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(BR(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(di.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=NR(l);l=Lg(l,1,u),c=Lg(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Js(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,p,g,x){if(p.length!==0){const m=[],d=[];J0(p,m,d,g),m.length!==0&&x.push(new f(h,m,d))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let x=0;x<h[g].morphTargets.length;x++)p[h[g].morphTargets[x]]=-1;for(const x in p){const m=[],d=[];for(let _=0;_!==h[g].morphTargets.length;++_){const v=h[g];m.push(v.time),d.push(v.morphTarget===x?1:0)}r.push(new Js(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(eo,p+".position",h,"pos",r),i(Xr,p+".quaternion",h,"rot",r),i(eo,p+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function kR(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return eo;case"color":return ex;case"quaternion":return Xr;case"bool":case"boolean":return ao;case"string":return lo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function BR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kR(n.type);if(n.times===void 0){const t=[],i=[];J0(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const nr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class zR{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const HR=new zR;class co{constructor(e){this.manager=e!==void 0?e:HR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}co.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class VR extends Error{constructor(e,t){super(e),this.response=t}}class tx extends co{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=nr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:i,onError:r});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=yi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let x=0;const m=new ReadableStream({start(d){_();function _(){f.read().then(({done:v,value:y})=>{if(v)d.close();else{x+=y.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let A=0,w=u.length;A<w;A++){const b=u[A];b.onProgress&&b.onProgress(R)}d.enqueue(y),_()}})}}});return new Response(m)}else throw new VR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{nr.add(e,c);const u=yi[e];delete yi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=yi[e];if(u===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class GR extends co{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=nr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=_a("img");function l(){u(),nr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class WR extends co{constructor(e){super(e)}load(e,t,i,r){const s=new Rt,o=new GR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ra extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class XR extends Ra{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ju=new Ne,Ng=new N,Ig=new N;class Ed{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ng.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ng),Ig.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ig),t.updateMatrixWorld(),Ju.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jR extends Ed{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Zs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $R extends Ra{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new jR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dg=new Ne,Co=new N,ef=new N;class qR extends Ed{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Co.setFromMatrixPosition(e.matrixWorld),i.position.copy(Co),ef.copy(i.position),ef.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ef),i.updateMatrixWorld(),r.makeTranslation(-Co.x,-Co.y,-Co.z),Dg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dg)}}class nx extends Ra{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new qR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class YR extends Ed{constructor(){super(new gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Td extends Ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new YR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class KR{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new N)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}class ZR extends Ra{constructor(e=new KR,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Ko{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class QR extends co{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=nr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return nr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),nr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});nr.add(e,l),s.manager.itemStart(e)}}const wd="\\[\\]\\.:\\/",JR=new RegExp("["+wd+"]","g"),Ad="[^"+wd+"]",eC="[^"+wd.replace("\\.","")+"]",tC=/((?:WC+[\/:])*)/.source.replace("WC",Ad),nC=/(WCOD+)?/.source.replace("WCOD",eC),iC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ad),rC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ad),sC=new RegExp("^"+tC+nC+iC+rC+"$"),oC=["material","materials","bones","map"];class aC{constructor(e,t,i){const r=i||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class tt{constructor(e,t,i){this.path=t,this.parsedPath=i||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,i):new tt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(JR,"")}static parseTrackName(e){const t=sC.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);oC.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=aC;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Rd{constructor(e){this.value=e}clone(){return new Rd(this.value.clone===void 0?this.value:this.value.clone())}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hd);function Ug(n,e){if(e===HM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===sh||e===A0){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===sh)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class lC extends co{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dC(t)}),this.register(function(t){return new pC(t)}),this.register(function(t){return new EC(t)}),this.register(function(t){return new TC(t)}),this.register(function(t){return new wC(t)}),this.register(function(t){return new gC(t)}),this.register(function(t){return new _C(t)}),this.register(function(t){return new vC(t)}),this.register(function(t){return new xC(t)}),this.register(function(t){return new hC(t)}),this.register(function(t){return new yC(t)}),this.register(function(t){return new mC(t)}),this.register(function(t){return new MC(t)}),this.register(function(t){return new SC(t)}),this.register(function(t){return new uC(t)}),this.register(function(t){return new AC(t)}),this.register(function(t){return new RC(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ko.extractUrlBase(e);o=Ko.resolveURL(c,this.path)}else o=Ko.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new tx(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ix){try{o[ze.KHR_BINARY_GLTF]=new CC(e)}catch(f){r&&r(f);return}s=JSON.parse(o[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new HC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case ze.KHR_MATERIALS_UNLIT:o[f]=new fC;break;case ze.KHR_DRACO_MESH_COMPRESSION:o[f]=new bC(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:o[f]=new PC;break;case ze.KHR_MESH_QUANTIZATION:o[f]=new LC;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function cC(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class uC{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new we(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Bt);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Td(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new nx(u),c.distance=f;break;case"spot":c=new $R(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ki(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class fC{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return si}extendParams(e,t,i){const r=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Bt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Ot))}return Promise.all(r)}}class hC{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class dC{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(s)}}class pC{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class mC{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class gC{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Bt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class _C{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class vC{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],Bt),Promise.all(s)}}class xC{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class yC{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],Bt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(s)}}class SC{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class MC{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class EC{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class TC{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class wC{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class AC{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,r.mode,r.filter),p})})}else return null}}class RC{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==bn.TRIANGLES&&c.mode!==bn.TRIANGLE_STRIP&&c.mode!==bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of f){const x=new Ne,m=new N,d=new xr,_=new N(1,1,1),v=new wR(g.geometry,g.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,x.compose(m,d,_));for(const y in l)if(y==="_COLOR_0"){const R=l[y];v.instanceColor=new ch(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);dt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const ix="glTF",bo=12,Og={JSON:1313821514,BIN:5130562};class CC{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,bo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ix)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-bo,s=new DataView(e,bo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Og.JSON){const c=new Uint8Array(e,bo+o,a);this.content=i.decode(c)}else if(l===Og.BIN){const c=bo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=fh[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=fh[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],p=ks[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}f(p)},a,c,Bt,h)})})}}class PC{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class LC{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class rx extends Aa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(i-t)/u,h=f*f,p=h*f,g=e*c,x=g-c,m=-2*p+3*h,d=p-h,_=1-m,v=d-h+f;for(let y=0;y!==a;y++){const R=o[x+y+a],A=o[x+y+l]*u,w=o[g+y+a],b=o[g+y]*u;s[y]=_*R+v*A+m*w+d*b}return s}}const NC=new xr;class IC extends rx{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return NC.fromArray(s).normalize().toArray(s),s}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fg={9728:rn,9729:yn,9984:_0,9985:Fl,9986:Fo,9987:Ci},kg={33071:tr,33648:fc,10497:qs},tf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},DC={CUBICSPLINE:void 0,LINEAR:Ks,STEP:ga},nf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function UC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new va({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ui})),n.DefaultMaterial}function Rr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ki(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function OC(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function FC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kC(n){let e;const t=n.extensions&&n.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rf(t.attributes):e=n.indices+":"+rf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+rf(n.targets[i]);return e}function rf(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function hh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function BC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const zC=new Ne;class HC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new WR(this.options.manager):this.textureLoader=new QR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new tx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Rr(s,a,r),Ki(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Ko.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=tf[r.type],a=ks[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new an(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=tf[r.type],c=ks[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let x,m;if(p&&p!==f){const d=Math.floor(h/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count;let v=t.cache.get(_);v||(x=new c(a,d*p,r.count*p/u),v=new yR(x,p/u),t.cache.add(_,v)),m=new xd(v,l,h%p/u,g)}else a===null?x=new c(r.count*l):x=new c(a,h,r.count*l),m=new an(x,l,g);if(r.sparse!==void 0){const d=tf.SCALAR,_=ks[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,R=new _(o[1],v,r.sparse.count*d),A=new c(o[2],y,r.sparse.count*l);a!==null&&(m=new an(m.array.slice(),m.itemSize,m.normalized));for(let w=0,b=R.length;w<b;w++){const M=R[w];if(m.setX(M,A[w*l]),l>=2&&m.setY(M,A[w*l+1]),l>=3&&m.setZ(M,A[w*l+2]),l>=4&&m.setW(M,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Fg[h.magFilter]||yn,u.minFilter=Fg[h.minFilter]||Ci,u.wrapS=kg[h.wrapS]||qs,u.wrapT=kg[h.wrapT]||qs,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Rt(x);m.needsUpdate=!0,h(m)}),t.load(Ko.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||BC(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Q0,Kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Z0,Kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return va}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){const f=r[ze.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Bt),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Ot)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Wn);const u=s.alphaMode||nf.OPAQUE;if(u===nf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===nf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==si&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==si&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==si){const f=s.emissiveFactor;a.emissive=new we().setRGB(f[0],f[1],f[2],Bt)}return s.emissiveTexture!==void 0&&o!==si&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ot)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Ki(f,s),t.associations.set(f,{materials:e}),s.extensions&&Rr(r,f,s),f})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Bg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=kC(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Bg(new On,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?UC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const x=u[p],m=o[p];let d;const _=c[p];if(m.mode===bn.TRIANGLES||m.mode===bn.TRIANGLE_STRIP||m.mode===bn.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new MR(x,_):new Ke(x,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===bn.TRIANGLE_STRIP?d.geometry=Ug(d.geometry,A0):m.mode===bn.TRIANGLE_FAN&&(d.geometry=Ug(d.geometry,sh));else if(m.mode===bn.LINES)d=new AR(x,_);else if(m.mode===bn.LINE_STRIP)d=new Sd(x,_);else if(m.mode===bn.LINE_LOOP)d=new RR(x,_);else if(m.mode===bn.POINTS)d=new CR(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&FC(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),Ki(d,s),m.extensions&&Rr(r,d,m),t.assignFinalMaterial(d),f.push(d)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Rr(r,f[0],s),f[0];const h=new oi;s.extensions&&Rr(r,h,s),t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Kt(kl.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new gd(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ki(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new Ne;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yd(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=r.channels.length;f<h;f++){const p=r.channels[f],g=r.samplers[p.sampler],x=p.target,m=x.node,d=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],p=f[1],g=f[2],x=f[3],m=f[4],d=[];for(let _=0,v=h.length;_<v;_++){const y=h[_],R=p[_],A=g[_],w=x[_],b=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=i._createAnimationTracks(y,R,A,w,b);if(M)for(let S=0;S<M.length;S++)d.push(M[S])}return new FR(s,void 0,d)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,zC)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Y0:c.length>1?u=new oi:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Ki(u,s),s.extensions&&Rr(i,u,s),s.matrix!==void 0){const f=new Ne;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new oi;i.name&&(s.name=r.createUniqueName(i.name)),Ki(s,i),i.extensions&&Rr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,p]of r.associations)(h instanceof Kn||h instanceof Rt)&&f.set(h,p);return u.traverse(h=>{const p=r.associations.get(h);p!=null&&f.set(h,p)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];ji[s.path]===ji.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(ji[s.path]){case ji.weights:c=Js;break;case ji.rotation:c=Xr;break;case ji.position:case ji.scale:c=eo;break;default:switch(i.itemSize){case 1:c=Js;break;case 2:case 3:default:c=eo;break}break}const u=r.interpolation!==void 0?DC[r.interpolation]:Ks,f=this._getArrayFromAccessor(i);for(let h=0,p=l.length;h<p;h++){const g=new c(l[h]+"."+ji[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=hh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Xr?IC:rx;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function VC(n,e,t){const i=e.attributes,r=new ui;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=hh(ks[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const x=hh(ks[h.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new fi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Bg(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=fh[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ze.workingColorSpace!==Bt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Ki(n,e),VC(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?OC(n,e.targets,t):n})}class GC extends vd{constructor(e=null){super();const t=new so;t.deleteAttribute("uv");const i=new va({side:on}),r=new va;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new nx(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const a=new Ke(t,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);const l=new Ke(t,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new Ke(t,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const u=new Ke(t,r);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);const f=new Ke(t,r);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const h=new Ke(t,r);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const p=new Ke(t,r);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);const g=new Ke(t,ps(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);const x=new Ke(t,ps(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);const m=new Ke(t,ps(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const d=new Ke(t,ps(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const _=new Ke(t,ps(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);const v=new Ke(t,ps(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ps(n){const e=new si;return e.color.setScalar(n),e}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Qt=Uint8Array,Mn=Uint16Array,Cd=Int32Array,bd=new Qt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Pd=new Qt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),zg=new Qt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),sx=function(n,e){for(var t=new Mn(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new Cd(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},ox=sx(bd,2),WC=ox.b,dh=ox.r;WC[28]=258,dh[258]=28;var XC=sx(Pd,0),Hg=XC.r,ph=new Mn(32768);for(var ct=0;ct<32768;++ct){var $i=(ct&43690)>>1|(ct&21845)<<1;$i=($i&52428)>>2|($i&13107)<<2,$i=($i&61680)>>4|($i&3855)<<4,ph[ct]=(($i&65280)>>8|($i&255)<<8)>>1}var Zo=function(n,e,t){for(var i=n.length,r=0,s=new Mn(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new Mn(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Mn(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],f=o[n[r]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)a[ph[f]>>l]=c}else for(a=new Mn(i),r=0;r<i;++r)n[r]&&(a[r]=ph[o[n[r]-1]++]>>15-n[r]);return a},jr=new Qt(288);for(var ct=0;ct<144;++ct)jr[ct]=8;for(var ct=144;ct<256;++ct)jr[ct]=9;for(var ct=256;ct<280;++ct)jr[ct]=7;for(var ct=280;ct<288;++ct)jr[ct]=8;var xc=new Qt(32);for(var ct=0;ct<32;++ct)xc[ct]=5;var jC=Zo(jr,9,0),$C=Zo(xc,5,0),ax=function(n){return(n+7)/8|0},lx=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new Qt(n.subarray(e,t))},qC=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Gc=function(n,e,t){var i=new Error(e||qC[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Gc),!t)throw i;return i},Si=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},Po=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},sf=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return{t:ux,l:0};if(r==1){var o=new Qt(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(R,A){return R.f-A.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,f=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=t[t[c].f<t[f].f?c++:f++],l=t[c!=u&&t[c].f<t[f].f?c++:f++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var h=s[0].s,i=1;i<r;++i)s[i].s>h&&(h=s[i].s);var p=new Mn(h+1),g=mh(t[u-1],p,0);if(g>e){var i=0,x=0,m=g-e,d=1<<m;for(s.sort(function(A,w){return p[w.s]-p[A.s]||A.f-w.f});i<r;++i){var _=s[i].s;if(p[_]>e)x+=d-(1<<g-p[_]),p[_]=e;else break}for(x>>=m;x>0;){var v=s[i].s;p[v]<e?x-=1<<e-p[v]++-1:++i}for(;i>=0&&x;--i){var y=s[i].s;p[y]==e&&(--p[y],++x)}g=e}return{t:new Qt(p),l:g}},mh=function(n,e,t){return n.s==-1?Math.max(mh(n.l,e,t+1),mh(n.r,e,t+1)):e[n.s]=t},Vg=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new Mn(++e),i=0,r=n[0],s=1,o=function(l){t[i++]=l},a=1;a<=e;++a)if(n[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=n[a]}return{c:t.subarray(0,i),n:e}},Lo=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},cx=function(n,e,t){var i=t.length,r=ax(e+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},Gg=function(n,e,t,i,r,s,o,a,l,c,u){Si(e,u++,t),++r[256];for(var f=sf(r,15),h=f.t,p=f.l,g=sf(s,15),x=g.t,m=g.l,d=Vg(h),_=d.c,v=d.n,y=Vg(x),R=y.c,A=y.n,w=new Mn(19),b=0;b<_.length;++b)++w[_[b]&31];for(var b=0;b<R.length;++b)++w[R[b]&31];for(var M=sf(w,7),S=M.t,U=M.l,G=19;G>4&&!S[zg[G-1]];--G);var L=c+5<<3,$=Lo(r,jr)+Lo(s,xc)+o,j=Lo(r,h)+Lo(s,x)+o+14+3*G+Lo(w,S)+2*w[16]+3*w[17]+7*w[18];if(l>=0&&L<=$&&L<=j)return cx(e,u,n.subarray(l,l+c));var J,Y,P,H;if(Si(e,u,1+(j<$)),u+=2,j<$){J=Zo(h,p,0),Y=h,P=Zo(x,m,0),H=x;var X=Zo(S,U,0);Si(e,u,v-257),Si(e,u+5,A-1),Si(e,u+10,G-4),u+=14;for(var b=0;b<G;++b)Si(e,u+3*b,S[zg[b]]);u+=3*G;for(var V=[_,R],le=0;le<2;++le)for(var ve=V[le],b=0;b<ve.length;++b){var B=ve[b]&31;Si(e,u,X[B]),u+=S[B],B>15&&(Si(e,u,ve[b]>>5&127),u+=ve[b]>>12)}}else J=jC,Y=jr,P=$C,H=xc;for(var b=0;b<a;++b){var Z=i[b];if(Z>255){var B=Z>>18&31;Po(e,u,J[B+257]),u+=Y[B+257],B>7&&(Si(e,u,Z>>23&31),u+=bd[B]);var oe=Z&31;Po(e,u,P[oe]),u+=H[oe],oe>3&&(Po(e,u,Z>>5&8191),u+=Pd[oe])}else Po(e,u,J[Z]),u+=Y[Z]}return Po(e,u,J[256]),u+Y[256]},YC=new Cd([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ux=new Qt(0),KC=function(n,e,t,i,r,s){var o=s.z||n.length,a=new Qt(i+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(i,a.length-r),c=s.l,u=(s.r||0)&7;if(e){u&&(l[0]=s.r>>3);for(var f=YC[e-1],h=f>>13,p=f&8191,g=(1<<t)-1,x=s.p||new Mn(32768),m=s.h||new Mn(g+1),d=Math.ceil(t/3),_=2*d,v=function(Me){return(n[Me]^n[Me+1]<<d^n[Me+2]<<_)&g},y=new Cd(25e3),R=new Mn(288),A=new Mn(32),w=0,b=0,M=s.i||0,S=0,U=s.w||0,G=0;M+2<o;++M){var L=v(M),$=M&32767,j=m[L];if(x[$]=j,m[L]=$,U<=M){var J=o-M;if((w>7e3||S>24576)&&(J>423||!c)){u=Gg(n,l,0,y,R,A,b,S,G,M-G,u),S=w=b=0,G=M;for(var Y=0;Y<286;++Y)R[Y]=0;for(var Y=0;Y<30;++Y)A[Y]=0}var P=2,H=0,X=p,V=$-j&32767;if(J>2&&L==v(M-V))for(var le=Math.min(h,J)-1,ve=Math.min(32767,M),B=Math.min(258,J);V<=ve&&--X&&$!=j;){if(n[M+P]==n[M+P-V]){for(var Z=0;Z<B&&n[M+Z]==n[M+Z-V];++Z);if(Z>P){if(P=Z,H=V,Z>le)break;for(var oe=Math.min(V,Z-2),re=0,Y=0;Y<oe;++Y){var Ce=M-V+Y&32767,Be=x[Ce],O=Ce-Be&32767;O>re&&(re=O,j=Ce)}}}$=j,j=x[$],V+=$-j&32767}if(H){y[S++]=268435456|dh[P]<<18|Hg[H];var it=dh[P]&31,ye=Hg[H]&31;b+=bd[it]+Pd[ye],++R[257+it],++A[ye],U=M+P,++w}else y[S++]=n[M],++R[n[M]]}}for(M=Math.max(M,U);M<o;++M)y[S++]=n[M],++R[n[M]];u=Gg(n,l,c,y,R,A,b,S,G,M-G,u),c||(s.r=u&7|l[u/8|0]<<3,u-=7,s.h=m,s.p=x,s.i=M,s.w=U)}else{for(var M=s.w||0;M<o+c;M+=65535){var qe=M+65535;qe>=o&&(l[u/8|0]=c,qe=o),u=cx(l,u+1,n.subarray(M,qe))}s.i=o}return lx(a,0,i+ax(u)+r)},ZC=function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n}(),QC=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=ZC[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}},JC=function(n,e,t,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new Qt(s.length+n.length);o.set(s),o.set(n,s.length),n=o,r.w=s.length}return KC(n,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,r)},fx=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t},Ut=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function eb(n,e){return JC(n,e||{},0,0)}var hx=function(n,e,t,i){for(var r in n){var s=n[r],o=e+r,a=i;Array.isArray(s)&&(a=fx(i,s[1]),s=s[0]),s instanceof Qt?t[o]=[s,a]:(t[o+="/"]=[new Qt(0),a],hx(s,o,t,i))}},Wg=typeof TextEncoder<"u"&&new TextEncoder,tb=typeof TextDecoder<"u"&&new TextDecoder,nb=0;try{tb.decode(ux,{stream:!0}),nb=1}catch{}function yc(n,e){var t;if(Wg)return Wg.encode(n);for(var i=n.length,r=new Qt(n.length+(n.length>>1)),s=0,o=function(c){r[s++]=c},t=0;t<i;++t){if(s+5>r.length){var a=new Qt(s+8+(i-t<<1));a.set(r),r=a}var l=n.charCodeAt(t);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|n.charCodeAt(++t)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return lx(r,0,s)}var gh=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&Gc(9),e+=i+4}return e},Xg=function(n,e,t,i,r,s,o,a){var l=i.length,c=t.extra,u=a&&a.length,f=gh(c);Ut(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s<0&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var h=new Date(t.mtime==null?Date.now():t.mtime),p=h.getFullYear()-1980;if((p<0||p>119)&&Gc(10),Ut(n,e,p<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>1),e+=4,s!=-1&&(Ut(n,e,t.crc),Ut(n,e+4,s<0?-s-2:s),Ut(n,e+8,t.size)),Ut(n,e+12,l),Ut(n,e+14,f),e+=16,o!=null&&(Ut(n,e,u),Ut(n,e+6,t.attrs),Ut(n,e+10,o),e+=14),n.set(i,e),e+=l,f)for(var g in c){var x=c[g],m=x.length;Ut(n,e,+g),Ut(n,e+2,m),n.set(x,e+4),e+=4+m}return u&&(n.set(a,e),e+=u),e},ib=function(n,e,t,i,r){Ut(n,e,101010256),Ut(n,e+8,t),Ut(n,e+10,t),Ut(n,e+12,i),Ut(n,e+16,r)};function rb(n,e){e||(e={});var t={},i=[];hx(n,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,f=yc(o),h=f.length,p=c.comment,g=p&&yc(p),x=g&&g.length,m=gh(c.extra);h>65535&&Gc(11);var d=u?eb(l,c):l,_=d.length,v=QC();v.p(l),i.push(fx(c,{size:l.length,crc:v.d(),c:d,f,m:g,u:h!=o.length||g&&p.length!=x,o:r,compression:u})),r+=30+h+m+_,s+=76+2*(h+m)+(x||0)+_}for(var y=new Qt(s+22),R=r,A=s-r,w=0;w<i.length;++w){var f=i[w];Xg(y,f.o,f,f.f,f.u,f.c.length);var b=30+f.f.length+gh(f.extra);y.set(f.c,f.o+b),Xg(y,r,f,f.f,f.u,f.c.length,f.o,f.m),r+=16+b+(f.m?f.m.length:0)}return ib(y,r,i.length,A,R),y}let No,of,ms,Sl;function sb(n,e=1/0,t=null){of||(of=new wa(2,2,1,1)),ms||(ms=new Oi({uniforms:{blitTexture:new Rd(n)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),ms.uniforms.blitTexture.value=n,ms.defines.IS_SRGB=n.colorSpace==Ot,ms.needsUpdate=!0,Sl||(Sl=new Ke(of,ms),Sl.frustumCulled=!1);const i=new Kt,r=new vd;r.add(Sl),t===null&&(t=No=new q0({antialias:!1}));const s=Math.min(n.image.width,e),o=Math.min(n.image.height,e);t.setSize(s,o),t.clear(),t.render(r,i);const a=document.createElement("canvas"),l=a.getContext("2d");a.width=s,a.height=o,l.drawImage(t.domElement,0,0,s,o);const c=new bR(a);return c.minFilter=n.minFilter,c.magFilter=n.magFilter,c.wrapS=n.wrapS,c.wrapT=n.wrapT,c.name=n.name,No&&(No.forceContextLoss(),No.dispose(),No=null),c}class ob{parse(e,t,i,r){this.parseAsync(e,r).then(t).catch(i)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},quickLookCompatible:!1,maxTextureSize:1024},t);const i={},r="model.usda";i[r]=null;let s=dx();s+=lb(t);const o={},a={};e.traverseVisible(c=>{if(c.isMesh){const u=c.geometry,f=c.material;if(f.isMeshStandardMaterial){const h="geometries/Geometry_"+u.id+".usda";if(!(h in i)){const p=hb(u);i[h]=ub(p)}f.uuid in o||(o[f.uuid]=f),s+=fb(c,u,f)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(s+=Sb(c))}),s+=cb(),s+=vb(o,a,t.quickLookCompatible),i[r]=yc(s),s=null;for(const c in a){let u=a[c];u.isCompressedTexture===!0&&(u=sb(u));const f=ab(u.image,u.flipY,t.maxTextureSize),h=await new Promise(p=>f.toBlob(p,"image/png",1));i[`textures/Texture_${c}.png`]=new Uint8Array(await h.arrayBuffer())}let l=0;for(const c in i){const u=i[c],f=34+c.length;l+=f;const h=l&63;if(h!==4){const p=64-h,g=new Uint8Array(p);i[c]=[u,{extra:{12345:g}}]}l=u.length}return rb(i,{level:0})}}function ab(n,e,t){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const i=t/Math.max(n.width,n.height),r=document.createElement("canvas");r.width=n.width*Math.min(1,i),r.height=n.height*Math.min(1,i);const s=r.getContext("2d");return e===!0&&(s.translate(0,r.height),s.scale(1,-1)),s.drawImage(n,0,0,r.width,r.height),r}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const $t=7;function dx(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function lb(n){return`def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{
		token preliminary:anchoring:type = "${n.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${n.ar.planeAnchoring.alignment}"

`}function cb(){return`
		}
	}
}

`}function ub(n){let e=dx();return e+=n,yc(e)}function fb(n,e,t){const i="Object_"+n.id,r=px(n.matrixWorld);return n.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n),`def Xform "${i}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${r}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function px(n){const e=n.elements;return`( ${Ml(e,0)}, ${Ml(e,4)}, ${Ml(e,8)}, ${Ml(e,12)} )`}function Ml(n,e){return`(${n[e+0]}, ${n[e+1]}, ${n[e+2]}, ${n[e+3]})`}function hb(n){return`
def "Geometry"
{
${db(n)}
}
`}function db(n){const e="Geometry",t=n.attributes,i=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${pb(n)}]
		int[] faceVertexIndices = [${mb(n)}]
		normal3f[] normals = [${_h(t.normal,i)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${_h(t.position,i)}]
${_b(t)}
		uniform token subdivisionScheme = "none"
	}
`}function pb(n){const e=n.index!==null?n.index.count:n.attributes.position.count;return Array(e/3).fill(3).join(", ")}function mb(n){const e=n.index,t=[];if(e!==null)for(let i=0;i<e.count;i++)t.push(e.getX(i));else{const i=n.attributes.position.count;for(let r=0;r<i;r++)t.push(r)}return t.join(", ")}function _h(n,e){if(n===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const t=[];for(let i=0;i<n.count;i++){const r=n.getX(i),s=n.getY(i),o=n.getZ(i);t.push(`(${r.toPrecision($t)}, ${s.toPrecision($t)}, ${o.toPrecision($t)})`)}return t.join(", ")}function gb(n){const e=[];for(let t=0;t<n.count;t++){const i=n.getX(t),r=n.getY(t);e.push(`(${i.toPrecision($t)}, ${1-r.toPrecision($t)})`)}return e.join(", ")}function _b(n){let e="";for(let i=0;i<4;i++){const r=i>0?i:"",s=n["uv"+r];s!==void 0&&(e+=`
		texCoord2f[] primvars:st${r} = [${gb(s)}] (
			interpolation = "vertex"
		)`)}const t=n.color;if(t!==void 0){const i=t.count;e+=`
	color3f[] primvars:displayColor = [${_h(t,i)}] (
		interpolation = "vertex"
		)`}return e}function vb(n,e,t=!1){const i=[];for(const r in n){const s=n[r];i.push(xb(s,e,t))}return`def "Materials"
{
${i.join("")}
}

`}function xb(n,e,t=!1){const i="			",r=[],s=[];function o(a,l,c){const u=a.source.id+"_"+a.flipY;e[u]=a;const f=a.channel>0?"st"+a.channel:"st",h={1e3:"repeat",1001:"clamp",1002:"mirror"},p=a.repeat.clone(),g=a.offset.clone(),x=a.rotation,m=Math.sin(x),d=Math.cos(x);return g.y=1-g.y-p.y,t?(g.x=g.x/p.x,g.y=g.y/p.y,g.x+=m/p.x,g.y+=d-1):(g.x+=m*p.x,g.y+=(1-d)*p.y),`
		def Shader "PrimvarReader_${l}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${f}"
			float2 outputs:result
		}

		def Shader "Transform2d_${l}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${l}.outputs:result>
			float inputs:rotation = ${(x*(180/Math.PI)).toFixed($t)}
			float2 inputs:scale = ${$g(p)}
			float2 inputs:translation = ${$g(g)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+yb(c):""}
			token inputs:sourceColorSpace = "${a.colorSpace===wi?"raw":"sRGB"}"
			token inputs:wrapS = "${h[a.wrapS]}"
			token inputs:wrapT = "${h[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${n.transparent||n.alphaTest>0?"float outputs:a":""}
		}`}return n.side===Wn&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",n),n.map!==null?(r.push(`${i}color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`),n.transparent?r.push(`${i}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`):n.alphaTest>0&&(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`),r.push(`${i}float inputs:opacityThreshold = ${n.alphaTest}`)),s.push(o(n.map,"diffuse",n.color))):r.push(`${i}color3f inputs:diffuseColor = ${jg(n.color)}`),n.emissiveMap!==null?(r.push(`${i}color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`),s.push(o(n.emissiveMap,"emissive"))):n.emissive.getHex()>0&&r.push(`${i}color3f inputs:emissiveColor = ${jg(n.emissive)}`),n.normalMap!==null&&(r.push(`${i}normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`),s.push(o(n.normalMap,"normal"))),n.aoMap!==null&&(r.push(`${i}float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`),s.push(o(n.aoMap,"occlusion"))),n.roughnessMap!==null&&n.roughness===1?(r.push(`${i}float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`),s.push(o(n.roughnessMap,"roughness"))):r.push(`${i}float inputs:roughness = ${n.roughness}`),n.metalnessMap!==null&&n.metalness===1?(r.push(`${i}float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`),s.push(o(n.metalnessMap,"metallic"))):r.push(`${i}float inputs:metallic = ${n.metalness}`),n.alphaMap!==null?(r.push(`${i}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`),r.push(`${i}float inputs:opacityThreshold = 0.0001`),s.push(o(n.alphaMap,"opacity"))):r.push(`${i}float inputs:opacity = ${n.opacity}`),n.isMeshPhysicalMaterial&&(r.push(`${i}float inputs:clearcoat = ${n.clearcoat}`),r.push(`${i}float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`),r.push(`${i}float inputs:ior = ${n.ior}`)),`
	def Material "Material_${n.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${r.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>

${s.join(`
`)}

	}
`}function jg(n){return`(${n.r}, ${n.g}, ${n.b})`}function yb(n){return`(${n.r}, ${n.g}, ${n.b}, 1.0)`}function $g(n){return`(${n.x}, ${n.y})`}function Sb(n){const e=n.name?n.name:"Camera_"+n.id,t=px(n.matrixWorld);return n.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",n),n.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${n.near.toPrecision($t)}, ${n.far.toPrecision($t)})
			float horizontalAperture = ${((Math.abs(n.left)+Math.abs(n.right))*10).toPrecision($t)}
			float verticalAperture = ${((Math.abs(n.top)+Math.abs(n.bottom))*10).toPrecision($t)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${n.near.toPrecision($t)}, ${n.far.toPrecision($t)})
			float focalLength = ${n.getFocalLength().toPrecision($t)}
			float focusDistance = ${n.focus.toPrecision($t)}
			float horizontalAperture = ${n.getFilmWidth().toPrecision($t)}
			token projection = "perspective"
			float verticalAperture = ${n.getFilmHeight().toPrecision($t)}
		}
	
	`}class Mb{constructor(e,t,i,r,s){this.xrLight=e,this.renderer=t,this.lightProbe=i,this.xrWebGLBinding=null,this.estimationStartCallback=s,this.frameCallback=this.onXRFrame.bind(this);const o=t.xr.getSession();if(r&&"XRWebGLBinding"in window){const a=new z0(16);e.environment=a.texture;const l=t.getContext();switch(o.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float");break}this.xrWebGLBinding=new XRWebGLBinding(o,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}o.requestAnimationFrame(this.frameCallback)}updateReflection(){const e=this.renderer.properties.get(this.xrLight.environment);if(e){const t=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);t&&(e.__webglTexture=t,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(e,t){if(!this.xrLight)return;t.session.requestAnimationFrame(this.frameCallback);const r=t.getLightEstimate(this.lightProbe);if(r){this.xrLight.lightProbe.sh.fromArray(r.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const s=Math.max(1,Math.max(r.primaryLightIntensity.x,Math.max(r.primaryLightIntensity.y,r.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(r.primaryLightIntensity.x/s,r.primaryLightIntensity.y/s,r.primaryLightIntensity.z/s),this.xrLight.directionalLight.intensity=s,this.xrLight.directionalLight.position.copy(r.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class Eb extends oi{constructor(e,t=!0){super(),this.lightProbe=new ZR,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new Td,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let i=null,r=!1;e.xr.addEventListener("sessionstart",()=>{const s=e.xr.getSession();"requestLightProbe"in s&&s.requestLightProbe({reflectionFormat:s.preferredReflectionFormat}).then(o=>{i=new Mb(this,e,o,t,()=>{r=!0,this.dispatchEvent({type:"estimationstart"})})})}),e.xr.addEventListener("sessionend",()=>{i&&(i.dispose(),i=null),r&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{i&&(i.dispose(),i=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}const Nt={ral7021:{label:"RAL 7021",name:"Black grey",color:3093044,code:"7021",hex:"#2f3234"},ral5005:{label:"RAL 5005",name:"Signal blue",color:1394825,code:"5005",hex:"#154889"},ral3020:{label:"RAL 3020",name:"Traffic red",color:12653084,code:"3020",hex:"#c1121c"},ral8017:{label:"RAL 8017",name:"Chocolate brown",color:4469293,code:"8017",hex:"#44322d"},ral2004:{label:"RAL 2004",name:"Pure orange",color:14832387,code:"2004",hex:"#e25303"},ral6029:{label:"RAL 6029",name:"Mint green",color:29251,code:"6029",hex:"#007243"},ral1026:{label:"RAL 1026",name:"Luminous yellow",color:16109568,code:"1026",hex:"#f5d000"},ral9004:{label:"RAL 9004",name:"Signal black",color:1710618,code:"9004",hex:"#1a1a1a"}},Tb=Object.keys(Nt),wb="mazenbanat@outlook.com",Ab="+961 81931045",Rb="Transform your 3D models into configurable views for your clients",mx=50,gx=200,_x=100;function Sc(n){const e=Math.round(Number(n)||_x);return Math.min(gx,Math.max(mx,e))}const Cb={body:"ral7021",lid:"ral9004",scale:_x};function bb(n,e="CL240"){const t=Nt[n.body]||Nt.ral7021,i=Nt[n.lid]||Nt.ral9004;return`${e}-B${t.code}-L${i.code}`}function Pb(n,e){var t,i,r;switch(e.type){case"setBody":return{...n,body:Nt[e.value]?e.value:n.body};case"setLid":return{...n,lid:Nt[e.value]?e.value:n.lid};case"setScale":return{...n,scale:Sc(e.value)};case"load":return{body:Nt[(t=e.config)==null?void 0:t.body]?e.config.body:n.body,lid:Nt[(i=e.config)==null?void 0:i.lid]?e.config.lid:n.lid,scale:Sc(((r=e.config)==null?void 0:r.scale)??n.scale)};default:return n}}function Lb(){const n=new URL(location.href).searchParams,e={...Cb};return Nt[n.get("body")]&&(e.body=n.get("body")),Nt[n.get("lid")]&&(e.lid=n.get("lid")),n.get("scale")&&(e.scale=Sc(n.get("scale"))),e}function qg(n){const e=new URL(location.origin+location.pathname);return e.searchParams.set("body",n.body),e.searchParams.set("lid",n.lid),e.searchParams.set("scale",String(Sc(n.scale))),e.toString()}const Nb=1.07,Yg=new N;function Ib(n){return/WHEEL|TYRE|TIRE|AXLE|BEARING|BLADE|HUB|RIM|CASTER|CASTOR/.test(String(n||"").toUpperCase())}function Db(n){return/LID|COVER|HOOD/.test(String(n||"").toUpperCase())}function Ub(n){let e=n;for(;e;){if(Ib(e.name))return"hardware";if(Db(e.name))return"lid";const t=String(e.name||"").toUpperCase();if(/BODY|BIN|DRUM|SHELL/.test(t))return"body";e=e.parent}return"body"}class Ob{constructor(e,{modelUrl:t,bakedShadows:i=!0,onArState:r}={}){this.canvas=e,this.modelUrl=t,this.bakedShadows=i,this.onArState=r||(()=>{}),this.model=null,this.orbit={theta:-.55,phi:1.12,radius:2.35},this.target={...this.orbit},this.lookAt=new N(0,.52,0),this.pointers=new Map,this.pinchStart=0,this.dirty=!0,this.xrSession=null,this.hitTestSource=null,this.arPlaced=!1,this.arMoving=!1,this.scalePercent=100,this.fitScale=1,this.worldScale=1,this.nativeHeight=1,this.studioEnv=null,this.xrLight=null,this.overlay=null,this._arMode="idle",this.renderer=new q0({canvas:e,antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75)),this.renderer.outputColorSpace=Ot,this.renderer.toneMapping=m0,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=d0,this.renderer.shadowMap.autoUpdate=!i,this.renderer.xr.enabled=!0,this.renderer.xr.setReferenceSpaceType("local"),this.scene=new vd,this.camera=new Kt(35,1,.05,100);const s=new ah(this.renderer);this.studioEnv=s.fromScene(new GC,.04).texture,this.scene.environment=this.studioEnv,s.dispose();const o=new XR(16777215,12107976,1.35);this.hemi=o,this.scene.add(o),this.keyLight=new Td(16777215,1.45),this.keyLight.position.set(2.4,4.2,2.8),this.keyLight.castShadow=!0,this.keyLight.shadow.mapSize.set(2048,2048),this.keyLight.shadow.camera.near=.5,this.keyLight.shadow.camera.far=12,this.keyLight.shadow.camera.left=-2.5,this.keyLight.shadow.camera.right=2.5,this.keyLight.shadow.camera.top=2.5,this.keyLight.shadow.camera.bottom=-2.5,this.scene.add(this.keyLight),this.ground=new Ke(new vc(2.4,48),new PR({opacity:.16})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.root=new oi,this.scene.add(this.root),this.reticle=new Ke(new Md(.07,.09,36).rotateX(-Math.PI/2),new si({color:16777215,opacity:.92,transparent:!0})),this.reticle.matrixAutoUpdate=!1,this.reticle.visible=!1,this.scene.add(this.reticle),this.contactShadow=new Ke(new vc(.42,36),new si({color:1118481,opacity:.28,transparent:!0,depthWrite:!1})),this.contactShadow.rotation.x=-Math.PI/2,this.contactShadow.position.y=.002,this.contactShadow.visible=!1,this.root.add(this.contactShadow),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onWheel=this.onWheel.bind(this),this.onResize=this.onResize.bind(this),this.onARSelectStart=this.onARSelectStart.bind(this),this.onARSelectEnd=this.onARSelectEnd.bind(this),e.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),e.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("resize",this.onResize),this.onResize(),this.applyOrbit(!0),this.renderer.setAnimationLoop((a,l)=>this.tick(a,l))}async load(){const t=await new lC().loadAsync(this.modelUrl);this.model&&this.root.remove(this.model),this.model=t.scene,this.model.traverse(i=>{if(!i.isMesh)return;i.castShadow=!0,i.receiveShadow=!1;const r=Array.isArray(i.material)?i.material[0]:i.material;i.userData.shopMat=r.clone(),i.material=i.userData.shopMat}),this.sitOnGround(this.model),this.root.add(this.model),this.renderer.shadowMap.needsUpdate=!0,this.dirty=!0}sitOnGround(e){e.scale.set(1,1,1),e.position.set(0,0,0),e.updateMatrixWorld(!0);const t=new ui().setFromObject(e),i=t.getSize(new N);this.nativeHeight=Math.max(.001,i.y),e.position.y-=t.min.y;const r=Math.max(i.x,i.y,i.z)||1;this.fitScale=1.05/r,this.worldScale=Nb/this.nativeHeight,this.applyCurrentScale()}applyCurrentScale(){const e=(this.xrSession?this.worldScale:this.fitScale)*(this.scalePercent/100);this.root.scale.setScalar(e),this.dirty=!0}setScalePercent(e){this.scalePercent=e,this.applyCurrentScale(),this.xrSession&&this.arPlaced&&this.setArMode("scaling")}setArMode(e){this._arMode!==e&&(this._arMode=e,this.onArState(e))}setColors(e){var r,s;if(!this.model)return;const t=((r=Nt[e.body])==null?void 0:r.color)??3093044,i=((s=Nt[e.lid])==null?void 0:s.color)??1710618;this.model.traverse(o=>{if(!o.isMesh||!o.userData.shopMat)return;const a=Ub(o),l=a==="lid"?i:a==="hardware"?1711134:t;o.userData.shopMat.color.setHex(l),"roughness"in o.userData.shopMat&&(o.userData.shopMat.roughness=a==="hardware"?.72:.42),"metalness"in o.userData.shopMat&&(o.userData.shopMat.metalness=a==="hardware"?.12:.04),o.userData.shopMat.needsUpdate=!0}),this.dirty=!0}applyOrbit(e=!1){const{theta:t,phi:i,radius:r}=e?this.target:this.orbit,s=Math.sin(i);this.camera.position.set(this.lookAt.x+r*s*Math.sin(t),this.lookAt.y+r*Math.cos(i),this.lookAt.z+r*s*Math.cos(t)),this.camera.lookAt(this.lookAt)}tick(e,t){if(this.xrSession){this.updateAR(t),this.renderer.render(this.scene,this.camera);return}const r=Math.abs(this.target.theta-this.orbit.theta)+Math.abs(this.target.phi-this.orbit.phi)+Math.abs(this.target.radius-this.orbit.radius)>4e-4;r&&(this.orbit.theta+=(this.target.theta-this.orbit.theta)*.12,this.orbit.phi+=(this.target.phi-this.orbit.phi)*.12,this.orbit.radius+=(this.target.radius-this.orbit.radius)*.12,this.applyOrbit()),(this.dirty||r)&&(this.renderer.render(this.scene,this.camera),this.dirty=!1)}updateAR(e){if(!e||!this.hitTestSource)return;const t=this.renderer.xr.getReferenceSpace();if(!t)return;const i=e.getHitTestResults(this.hitTestSource);if(!i.length){this.arPlaced||(this.reticle.visible=!1,this.setArMode("scanning"));return}const r=i[0].getPose(t);r&&(this.reticle.visible=!this.arPlaced||this.arMoving,this.reticle.matrix.fromArray(r.transform.matrix),this.arPlaced||this.setArMode("placing"),this.arMoving&&this.placeAtReticle())}placeAtReticle(){Yg.setFromMatrixPosition(this.reticle.matrix),this.root.position.copy(Yg),this.root.quaternion.identity(),this.root.visible=!0,this.contactShadow.visible=!0,this.arPlaced=!0}onARSelectStart(){!this.reticle.visible&&!this.arPlaced||(this.arMoving=this.arPlaced,this.placeAtReticle(),this.setArMode(this.arMoving?"moving":"placed"))}onARSelectEnd(){this.arMoving=!1,this.arPlaced&&(this.reticle.visible=!1,this.setArMode("placed"))}onResize(){var r;if(this.xrSession)return;const e=((r=this.canvas.parentElement)==null?void 0:r.getBoundingClientRect())||this.canvas.getBoundingClientRect(),t=Math.max(1,e.width),i=Math.max(1,e.height);this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.dirty=!0}onPointerDown(e){if(!this.xrSession&&(this.canvas.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===2)){const t=[...this.pointers.values()];this.pinchStart=Math.hypot(t[0].x-t[1].x,t[0].y-t[1].y)}}onPointerMove(e){if(this.xrSession||!this.pointers.has(e.pointerId))return;const t=this.pointers.get(e.pointerId),i=e.clientX-t.x,r=e.clientY-t.y;if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===2){const s=[...this.pointers.values()],o=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y);this.pinchStart&&(this.target.radius=kl.clamp(this.target.radius*(this.pinchStart/o),1.4,4.2)),this.pinchStart=o;return}this.target.theta-=i*.006,this.target.phi=kl.clamp(this.target.phi-r*.006,.2,1.45)}onPointerUp(e){this.pointers.delete(e.pointerId),this.pinchStart=0}onWheel(e){this.xrSession||(e.preventDefault(),this.target.radius=kl.clamp(this.target.radius+e.deltaY*.002,1.4,4.2))}captureJpeg(){const e=this.scene.background;this.scene.background=new we(16777215),this.renderer.setClearColor(16777215,1),this.renderer.render(this.scene,this.camera);const t=this.renderer.domElement.toDataURL("image/jpeg",.92);return this.scene.background=e,this.renderer.setClearColor(0,0),this.dirty=!0,t}async exportUSDZ(){if(!this.model)throw new Error("3D model is still loading");const e=new oi,t=this.model.clone(!0);return t.traverse(r=>{r.isMesh&&r.material&&(r.material=r.material.clone())}),e.add(t),e.scale.setScalar(this.worldScale*(this.scalePercent/100)),new ob().parseAsync(e,{quickLookCompatible:!0,maxTextureSize:1024})}async enterAR({overlay:e}={}){if(!navigator.xr)throw new Error("WebXR is not available in this browser");this.overlay=e||null;const t={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","local-floor","light-estimation"],...e?{domOverlay:{root:e}}:{}};this.setArMode("launching");try{this.xrSession=await navigator.xr.requestSession("immersive-ar",t)}catch{this.xrSession=await navigator.xr.requestSession("immersive-ar",{optionalFeatures:["hit-test","dom-overlay","local-floor","light-estimation"],...e?{domOverlay:{root:e}}:{}})}this.renderer.setPixelRatio(1),await this.renderer.xr.setSession(this.xrSession),this.arPlaced=!1,this.arMoving=!1,this.root.visible=!1,this.ground.visible=!1,this.contactShadow.visible=!1,this.reticle.visible=!1,this.applyCurrentScale(),document.body.classList.add("is-ar"),this.setArMode("scanning");try{this.xrLight=new Eb(this.renderer),this.xrLight.addEventListener("estimationstart",()=>{this.scene.add(this.xrLight),this.xrLight.environment&&(this.scene.environment=this.xrLight.environment),this.keyLight.visible=!1,this.hemi.visible=!1}),this.xrLight.addEventListener("estimationend",()=>{this.scene.remove(this.xrLight),this.scene.environment=this.studioEnv,this.keyLight.visible=!0,this.hemi.visible=!0})}catch{this.xrLight=null}try{const i=await this.xrSession.requestReferenceSpace("viewer");this.hitTestSource=await this.xrSession.requestHitTestSource({space:i})}catch{this.hitTestSource=null}this.xrSession.addEventListener("selectstart",this.onARSelectStart),this.xrSession.addEventListener("selectend",this.onARSelectEnd),this.xrSession.addEventListener("select",()=>{!this.arPlaced&&this.reticle.visible&&this.onARSelectStart()}),this.xrSession.addEventListener("end",()=>this.onAREnd())}async exitAR(){if(this.xrSession)try{await this.xrSession.end()}catch{}}onAREnd(){this.xrSession=null,this.hitTestSource=null,this.arPlaced=!1,this.arMoving=!1,this.reticle.visible=!1,this.contactShadow.visible=!1,this.root.visible=!0,this.root.position.set(0,0,0),this.root.quaternion.identity(),this.ground.visible=!0,this.keyLight.visible=!0,this.hemi.visible=!0,this.scene.environment=this.studioEnv,this.xrLight&&this.scene.remove(this.xrLight),document.body.classList.remove("is-ar"),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75)),this.applyCurrentScale(),this.onResize(),this.setArMode("idle"),this.dirty=!0}dispose(){this.renderer.setAnimationLoop(null),this.canvas.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("wheel",this.onWheel),window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}function Fb({config:n,scalePercent:e,onReady:t,onError:i,onArState:r}){const s=Je.useRef(null),o=Je.useRef(null),a=Je.useRef(r);return a.current=r,Je.useEffect(()=>{const l=s.current;if(!l)return;let c;try{c=new Ob(l,{modelUrl:"./assets/model.glb",onArState:u=>{var f;return(f=a.current)==null?void 0:f.call(a,u)}})}catch(u){console.error(u),i==null||i(u);return}return o.current=c,c.load().then(()=>{c.setColors(n),c.setScalePercent(e),t==null||t(c)}).catch(u=>{console.error(u),i==null||i(u)}),()=>{c.dispose(),o.current=null}},[]),Je.useEffect(()=>{var l;(l=o.current)==null||l.setColors(n)},[n.body,n.lid]),Je.useEffect(()=>{var l;(l=o.current)==null||l.setScalePercent(e)},[e]),ie.jsx("canvas",{id:"viewerCanvas",ref:s})}function kb(){const n=navigator.userAgent||"",e=/iPad|iPhone|iPod/.test(n)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,t=/Android/i.test(n),i=e&&/Safari/i.test(n)&&!/CriOS|FxiOS|EdgiOS|OPiOS/i.test(n),r=!!window.isSecureContext;let s="none";return e?s="quicklook":t&&(s="webxr"),{ios:e,android:t,desktop:!e&&!t,safari:i,secure:r,system:s,label:e?"iOS":t?"Android":"Desktop"}}const Bb=new URL(location.href).searchParams.get("embed")==="1",af="equipxr-saved",El=kb();function Kg(n){window.parent&&window.parent!==window&&window.parent.postMessage({source:"innovio-configurator",...n},"*")}function zb(){const[n,e]=Je.useReducer(Pb,null,Lb),[t,i]=Je.useState(""),[r,s]=Je.useState(!1),[o,a]=Je.useState(!1),[l,c]=Je.useState(""),[u,f]=Je.useState("idle"),[h,p]=Je.useState(!1),[g,x]=Je.useState(!0),[m,d]=Je.useState(!1),[_,v]=Je.useState(100),y=Je.useRef(null),R=Je.useRef(null),A=Je.useRef(null),w=Je.useRef(""),b=Je.useMemo(()=>bb(n),[n]),M=El.android&&u!=="idle",S=V=>{i(V),window.clearTimeout(S._t),S._t=window.setTimeout(()=>i(""),2400)};Je.useEffect(()=>{Kg({type:"ready",configuration:n,sku:b});const V=le=>{const ve=le.data;!ve||ve.source==="innovio-configurator"||ve.type==="setConfiguration"&&ve.configuration&&e({type:"load",config:ve.configuration})};return window.addEventListener("message",V),()=>window.removeEventListener("message",V)},[]),Je.useEffect(()=>{Kg({type:"configurationChanged",configuration:n,sku:b})},[n,b]);const U=Je.useCallback(V=>{var le;f(V),V==="idle"&&(v(100),(le=y.current)==null||le.setScalePercent(100))},[]),G=Je.useCallback(V=>{y.current=V,V.setColors(n),V.setScalePercent(100),d(!0)},[n]);Je.useEffect(()=>{if(!El.ios||!m||!y.current)return;let V=!1;return y.current.exportUSDZ().then(le=>{if(V)return;w.current&&URL.revokeObjectURL(w.current);const ve=new Blob([le],{type:"model/vnd.usdz+zip"}),B=URL.createObjectURL(ve);w.current=B,A.current&&(A.current.href=B,A.current.dataset.ready="1")}).catch(()=>{}),()=>{V=!0}},[m,n.body,n.lid]);async function L(){if(!y.current){c("Wait for the 3D view to load, then tap View in AR again.");return}try{v(100),y.current.setScalePercent(100),f("launching"),await y.current.enterAR({overlay:R.current})}catch(V){f("idle"),c((V==null?void 0:V.message)||"Open this HTTPS page in Chrome on Android to place, move, and rescale in AR.")}}function $(V){var le;v(V),(le=y.current)==null||le.setScalePercent(V)}async function j(){const V=qg(n);try{navigator.share?await navigator.share({title:"240 L waste bin",url:V}):(await navigator.clipboard.writeText(V),S("Share link copied"))}catch{}}function J(){const V=JSON.parse(localStorage.getItem(af)||"[]");V.unshift({id:`CFG-${Date.now()}`,name:`${b} · ${new Date().toLocaleString()}`,config:n}),localStorage.setItem(af,JSON.stringify(V.slice(0,12))),a(!0),S("Configuration saved locally")}function Y(){window.print()}async function P(V){V.preventDefault();const le=new FormData(V.currentTarget),ve=Object.fromEntries(le.entries()),B=Nt[n.body],Z=Nt[n.lid],oe=`Offer request: 240 L waste bin ${b}`,re=["New configuration request","",`Name: ${ve.name||""}`,`Company: ${ve.company||""}`,`Email: ${ve.email||""}`,`Phone: ${ve.phone||""}`,"",`SKU: ${b}`,`Body colour: ${B.label}`,`Lid colour: ${Z.label}`,`Link: ${qg(n)}`,"","Notes:",ve.notes||"(none)"].join(`
`),Ce=`mailto:${wb}?subject=${encodeURIComponent(oe)}&body=${encodeURIComponent(re)}`;try{await fetch("/api/quotes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...ve,configuration:n})})}catch{}window.location.href=Ce}const H=o?JSON.parse(localStorage.getItem(af)||"[]"):[],X=u==="scanning"||u==="launching"?"Scan the floor, then tap to place":u==="placing"?"Tap to place":u==="moving"?"Release to set the new position":"Tap to move · drag the slider to rescale";return ie.jsxs("main",{className:`shop${Bb?" is-embed":""}`,children:[ie.jsxs("header",{className:"shop-head",children:[ie.jsxs("div",{children:[ie.jsx("p",{className:"shop-kicker",children:"3D configurator"}),ie.jsx("p",{className:"shop-tagline",children:Rb})]}),ie.jsxs("div",{className:"shop-tools",children:[ie.jsx("button",{className:"tool-btn",type:"button",title:"Share",onClick:j,children:"✉"}),ie.jsx("button",{className:"tool-btn",type:"button",title:"Save",onClick:J,children:"💾"}),ie.jsx("button",{className:"tool-btn",type:"button",title:"Print",onClick:Y,children:"⎙"})]})]}),ie.jsxs("div",{className:"shop-body",children:[ie.jsxs("section",{className:"shop-stage",children:[ie.jsxs("div",{className:"viewer-card",id:"viewerCard",onPointerDown:()=>x(!1),children:[ie.jsx(Fb,{config:n,scalePercent:100,onReady:G,onError:()=>p(!0),onArState:U}),g&&ie.jsx("p",{className:"orbit-caption",children:"Drag to rotate · 360°"}),h&&ie.jsx("p",{className:"viewer-error",children:"3D view could not start. Open this page in Chrome or Safari."})]}),El.android&&ie.jsx("button",{className:"ar-link",type:"button",onClick:L,children:"View in AR"}),El.ios&&ie.jsxs("a",{ref:A,className:"ar-link",rel:"ar",href:"#quicklook",children:[ie.jsx("img",{className:"ar-icon",alt:"",src:"./assets/sample-logo.svg"}),"View in AR"]}),ie.jsxs("p",{className:"shop-ad",children:["Let clients change ",ie.jsx("strong",{children:"colour"}),", ",ie.jsx("strong",{children:"size"}),", ",ie.jsx("strong",{children:"shape"}),", and product ",ie.jsx("strong",{children:"variations"})," in a live 3D view — then share, view in AR, print, and request an offer."]})]}),ie.jsxs("aside",{className:"shop-options",children:[ie.jsx(Zg,{title:"Bodycolor",value:n.body,onPick:V=>e({type:"setBody",value:V})}),ie.jsx(Zg,{title:"Lid colour",value:n.lid,onPick:V=>e({type:"setLid",value:V})})]})]}),ie.jsx("footer",{className:"shop-foot",children:ie.jsxs("div",{className:"shop-foot-actions",children:[ie.jsx("button",{className:"btn",type:"button",onClick:Y,children:"Print"}),ie.jsx("button",{className:"btn btn-primary request-btn",type:"button",onClick:()=>s(!0),children:"Request offer →"})]})}),ie.jsxs("div",{id:"arOverlay",ref:R,className:`ar-overlay${M?" is-active":""}`,children:[ie.jsx("p",{className:"ar-banner",children:X}),ie.jsxs("label",{className:"ar-scale-control",children:[ie.jsx("span",{children:"Scale"}),ie.jsx("input",{type:"range",min:mx,max:gx,step:5,value:_,onChange:V=>$(Number(V.target.value))}),ie.jsxs("strong",{children:[_,"%"]})]}),ie.jsx("button",{className:"btn btn-dark",type:"button",onClick:()=>{var V;return(V=y.current)==null?void 0:V.exitAR()},children:"Exit AR"})]}),r&&ie.jsx(lf,{title:"Request offer",onClose:()=>s(!1),children:ie.jsxs("form",{onSubmit:P,children:[ie.jsxs("div",{className:"form-grid",children:[ie.jsx(Tl,{name:"name",label:"Name",required:!0}),ie.jsx(Tl,{name:"company",label:"Company",required:!0}),ie.jsx(Tl,{name:"email",label:"Email",type:"email",required:!0}),ie.jsx(Tl,{name:"phone",label:"Phone"}),ie.jsxs("div",{className:"full",children:[ie.jsx("label",{className:"label",children:"Notes"}),ie.jsx("textarea",{className:"textarea",name:"notes",rows:4,placeholder:"Colours, quantity, delivery..."})]})]}),ie.jsxs("div",{className:"modal-actions",children:[ie.jsx("button",{type:"button",className:"btn",onClick:()=>s(!1),children:"Cancel"}),ie.jsx("button",{className:"btn btn-primary",type:"submit",children:"Send request"})]})]})}),o&&ie.jsxs(lf,{title:"Saved configurations",onClose:()=>a(!1),children:[H.length===0&&ie.jsx("p",{style:{color:"#64748b"},children:"No saved configurations yet."}),H.map(V=>ie.jsxs("div",{className:"option-row",children:[ie.jsxs("div",{children:[ie.jsx("strong",{children:V.name}),ie.jsx("small",{children:V.id})]}),ie.jsx("button",{className:"btn",type:"button",onClick:()=>{e({type:"load",config:V.config}),a(!1),S("Configuration loaded")},children:"Load"})]},V.id))]}),l&&ie.jsxs(lf,{title:"View in AR",onClose:()=>c(""),children:[ie.jsx("p",{style:{lineHeight:1.6,color:"#475569",marginTop:0},children:l}),ie.jsx("div",{className:"modal-actions",children:ie.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>c(""),children:"OK"})})]}),t&&ie.jsx("div",{className:"toast",children:t}),ie.jsx("span",{className:"hidden",children:Ab})]})}function Zg({title:n,value:e,onPick:t}){return ie.jsxs("section",{className:"config-section",children:[ie.jsx("h3",{className:"option-label",children:n}),ie.jsx("div",{className:"swatches swatches-ral",children:Tb.map(i=>ie.jsxs("div",{className:"swatch-wrap",children:[ie.jsx("button",{className:`swatch${e===i?" active":""}`,type:"button",title:Nt[i].label,style:{background:Nt[i].hex},onClick:()=>t(i)}),ie.jsx("span",{className:"swatch-code",children:Nt[i].label})]},i))})]})}function lf({title:n,onClose:e,children:t}){return ie.jsx("div",{className:"modal-backdrop",children:ie.jsxs("div",{className:"modal",children:[ie.jsxs("div",{className:"modal-head",children:[ie.jsx("h2",{children:n}),ie.jsx("button",{className:"icon-btn",type:"button",onClick:e,children:"×"})]}),ie.jsx("div",{className:"modal-body",children:t})]})})}function Tl({name:n,label:e,type:t="text",required:i}){return ie.jsxs("div",{children:[ie.jsx("label",{className:"label",children:e}),ie.jsx("input",{className:"text-input",name:n,type:t,required:i})]})}class Hb extends l_.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?ie.jsx("main",{className:"shop",children:ie.jsxs("p",{className:"viewer-error",children:["The shop hit an error: ",String(this.state.error.message||this.state.error)]})}):this.props.children}}f0(document.getElementById("root")).render(ie.jsx(l_.StrictMode,{children:ie.jsx(Hb,{children:ie.jsx(zb,{})})}));
