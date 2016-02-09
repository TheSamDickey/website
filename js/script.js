function booleanAttributeValue(t,e,n){if(t.hasAttribute(e)){var o=t.getAttribute(e);if(""===o||"true"===o)return!0;if("false"===o)return!1}return n}function deepCopy(t){var e,n,o=Array.isArray(t)?[]:{};for(n in t)e=t[n],o[n]="object"==typeof e?copy(e):e;return o}function millisecondsForTransition(t,e){var n=getComputedStyle(t),o=n.transitionProperty.split(", ").indexOf(e);return 1e3*(parseFloat(n.transitionDuration.split(", ")[o])+parseFloat(n.transitionDelay.split(", ")[o]))}function pct(t){return t+"%"}function px(t){return t+"px"}var π,π1,πd;!function(){function t(t){return t.className?t.className.split(" "):[]}function e(){π.clean(e),π.mods.forEach(function(t){t()})}var n=document;n.g=n.getElementById,n.q=n.querySelector,n.a=n.querySelectorAll,n.t=n.getElementsByTagName,π=function(t){return n.a(t)},π1=function(t){return n.q(t)},πd=function(t){return n.g(t)},π.newDOMElement=function(t,e,o){var i=n.createElement(t);return e&&(i.className=e),o&&(i.id=o),i},π.contentElement=function(t,e,n,o){var i=π.newDOMElement(t,e,n);return o&&(o.nodeName?i.appendChild(o):i.innerHTML=o),i},π.srcElement=function(t,e,n,o){var i=π.newDOMElement(t,e,n);return o&&(i.src=o),i},π.button=function(t,e,n,o){var i=π.contentElement("button",t,e,n);return i.onclick=o,i},π.input=function(t,e,n,o,i,a){var r=document.createElement("input");return r.type=t,r.className=e||"",r.placeholder=n||"",r.value=o||"",r.checked=i||"",r.disabled=a||"",r},π.option=function(t,e,n,o){var i=π.contentElement("option",t,null,e);return i.value=n||null,i.selected=o||null,i},π.textarea=function(t,e,n){var o=document.createElement("textarea");return o.className=t||"",o.placeholder=e||"",o.value=n||"",o},π.clear=function(){return π.newDOMElement("clear")},π.div=function(t,e,n){return π.contentElement("div",t,e,n)},π.h1=function(t,e,n){return π.contentElement("h1",t,e,n)},π.h2=function(t,e,n){return π.contentElement("h2",t,e,n)},π.h3=function(t,e,n){return π.contentElement("h3",t,e,n)},π.h4=function(t,e,n){return π.contentElement("h4",t,e,n)},π.h5=function(t,e,n){return π.contentElement("h5",t,e,n)},π.h6=function(t,e,n){return π.contentElement("h6",t,e,n)},π.iframe=function(t,e,n){return π.srcElement("iframe",t,e,n)},π.img=function(t,e,n){return π.srcElement("Img",t,e,n)},π.header=function(t,e,n){return π.contentElement("header",t,e,n)},π.nav=function(t,e,n){return π.contentElement("nav",t,e,n)},π.p=function(t,e,n){return π.contentElement("p",t,e,n)},π.section=function(t,e,n){return π.contentElement("section",t,e,n)},π.span=function(t,e,n){return π.contentElement("span",t,e,n)},π.ul=function(t,e,n){return π.contentElement("ul",t,e,n)},π.li=function(t,e,n){return π.contentElement("li",t,e,n)},HTMLElement.prototype.wrap=Node.prototype.wrap=function(t){var e=this;t.forEach||(t=[t]);var n=t[0].parentNode;n.insertBefore(e,t[0]),t.forEach(function(t){e.appendChild(t)})},HTMLElement.prototype.prepend=Node.prototype.prepend=function(t){this.insertBefore(t,this.childNodes[0])},HTMLElement.prototype.add=Node.prototype.add=function(t){if(Array.isArray(t)){var e=this;t.forEach(function(t){t&&e.appendChild(t)})}else t&&this.appendChild(t)},HTMLElement.prototype.classOnCondition=Node.prototype.classOnCondition=function(t,e){e?this.addClass(t):this.killClass(t)},HTMLElement.prototype.offset=Node.prototype.offset=function(){return this.getBoundingClientRect()},HTMLElement.prototype.πd=Node.prototype.πd=function(t){return this.getElementById(t)},HTMLElement.prototype.π1=Node.prototype.π1=function(t){return this.querySelector(t)},HTMLElement.prototype.π=Node.prototype.π=function(t){return this.querySelectorAll(t)},HTMLElement.prototype.hasClass=Node.prototype.hasClass=function(e){var n=t(this);return-1!==n.indexOf(e)},HTMLElement.prototype.addClass=Node.prototype.addClass=function(t){this.hasClass(t)||(this.className.length>0&&(this.className+=" "),this.className+=t)},HTMLElement.prototype.killClass=Node.prototype.killClass=function(e){if(this.hasClass(e)){var n=t(this),o=n.indexOf(e);o>-1&&(n.splice(o,1),this.className=n.join(" "))}},HTMLElement.prototype.toggleClass=Node.prototype.toggleClass=function(t){return this.hasClass(t)?this.killClass(t):this.addClass(t)},HTMLElement.prototype.siblings=Node.prototype.siblings=function(t){var e=this;return e.parentNode.π(":scope > "+(t||"*")).filter(function(t){return t!=e})},HTMLElement.prototype.css=Node.prototype.css=function(t,e){var n=this;return 0===arguments.length?window.getComputedStyle(this):void("object"==typeof t?Object.keys(t).forEach(function(e){n.style[e]=t[e]}):"string"==typeof t&&void 0!==e&&(n.style[t]=e))},HTMLElement.prototype.listen=Node.prototype.listen=function(t,e){this.addEventListener(e,t)},HTMLElement.prototype.index=Node.prototype.index=function(){return this.parentNode.childNodes.indexOf(this)},HTMLElement.prototype.empty=Node.prototype.empty=function(){this.innerHTML=""},HTMLElement.prototype.fill=Node.prototype.fill=function(t){var e=this;if(e.empty(),Array.isArray(t))return void t.forEach(function(t){t&&e.appendChild(t)});if(!t.nodeType){var n=document.createElement("text");n.innerHTML=t,t=n}this.appendChild(t)},HTMLElement.prototype.hide=Node.prototype.hide=function(){this.style.opacity=0,this.style.visibility="hidden",this.style.display="none"},HTMLElement.prototype.isHeirOfClass=Node.prototype.isHeirOfClass=function(t){var e=this.parentNode;if(e)for(;e!==π1("body");){if(e.hasClass(t))return!0;e=e.parentNode}return!1},HTMLElement.prototype.kill=Node.prototype.kill=function(){this.parentNode&&this.parentNode.removeChild(this)},HTMLElement.prototype.show=Node.prototype.show=function(t){this.style.opacity=1,this.style.visibility="visible",this.style.display=t||"block"},HTMLElement.prototype.parent=Node.prototype.parent=function(t){var e=this.parentNode;return t&&-1===π(t).indexOf(e)?e.parent(t):e},HTMLElement.prototype.addSwipes=function(t,e,n){var o,i,a,r,s=n?n.xThresh||30:30,l=n?n.yThresh||30:30,c=n?n.duration||1e3:1e3;this.addEventListener("touchstart",function(t){if(!r){var e=t.changedTouches[0];o=e.pageX,i=e.pageY,a=(new Date).getTime()}},!0),this.addEventListener("touchmove",function(n){if(!r){var u=n.changedTouches[0],d=u.pageX-o;Math.abs(u.pageY-i)>l||(new Date).getTime()-a>c||Math.abs(d)<s||(r=!0,0>d?t():e(),setTimeout(function(){r=!1},300))}},!1)},Array.prototype.hasClass=NodeList.prototype.hasClass=function(t){var e=!1;return this.forEach(function(n){n.hasClass(t)&&(e=!0)}),e},Array.prototype.addClass=NodeList.prototype.addClass=function(t){this.forEach(function(e){e.addClass(t)})},Array.prototype.killClass=NodeList.prototype.killClass=function(t){this.forEach(function(e){e.killClass(t)})},Array.prototype.toggleClass=NodeList.prototype.toggleClass=function(t){this.forEach(function(e){e.toggleClass(t)})},Array.prototype.lastIdx=function(){return this.length-1},Array.prototype.lastObj=function(){return this[this.lastIdx()]};var o=Object.getOwnPropertyNames(Array.prototype);o.forEach(function(t){"length"!==t&&(NodeList.prototype[t]=Array.prototype[t])}),NodeList.prototype.css=function(t,e,n){this.forEach(function(o){o.css(t,e,n)})},NodeList.prototype.π=function(t){this.forEach(function(e){return e.π(t)})},NodeList.prototype.π1=function(t){this.forEach(function(e){return e.π1(t)})},NodeList.prototype.onclick=function(t){this.forEach(function(e){e.onclick=t})},String.prototype.camelCase=function(){var t=this.replace(/[^a-zA-Z\d\s_-]/g,"").toLowerCase(),e=t.split(" ");return e.forEach(function(t,n){if(0!==n){var o=t.charAt(0).toUpperCase();t=o+t.slice(1)}e[n]=t}),e.join("")},String.prototype.capitalCase=function(){var t=this.toLowerCase().split(" ");return t.forEach(function(e,n){var o=e.charAt(0).toUpperCase();t[n]=o+e.slice(1)}),t.join(" ")},Date.prototype.standardString=function(){var t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=t[this.getDay()],o=e[this.getMonth()],i=this.getDate(),a=this.getFullYear(),r=this.getHours(),s=r>12?r-12:r||12,l=this.getMinutes(),c=l>9?l:"0"+l,u=12>r?"am":"pm",d=s+":"+c+" "+u,p=[n,o,i,a,d];return p.join(" ")},π.clean=function(t,e){window.removeEventListener(e||"DOMContentLoaded",t)},π.listen=function(t,e){window.addEventListener(e||"DOMContentLoaded",t)},π.highestZ=function(){var t=1e3;return n.a("*").forEach(function(e){var n=e.css().zIndex;"auto"!=n&&n>t&&(t=n+1)}),t},π.mods=[],π.setTriggers=function(t,e){t="pi-"+t+"-trigger",π("["+t+"]").forEach(function(n){n.onclick=function(){e.show(n.getAttribute(t))}})},π.listen(e)}(),function(){π.modalCloseButton=function(t){return π.button("pi-modal-close-button",null,null,t)}}(),function(){function t(t){t.target!==window&&π1("body").hasClass("overlay-on")&&t.target.hasClass("pi-modal-overlay")&&π.modalOverlay.hide()}function e(t){27==t.which&&π.modalOverlay.hide()}function n(){π(".pi-modal-overlay").forEach(π.modalOverlay.spawn),π.setTriggers("modal-overlay",π.modalOverlay)}π.modalOverlay={show:function(n,o){var i=πd(n);i.css({display:"block",zIndex:π.highestZ()}),π.listen(e,"keydown"),π.listen(t,"click"),setTimeout(function(){i.addClass("on"),π1("body").addClass("overlay-on"),o&&o()},50)},hide:function(t,n){t||(t=π1(".pi-modal-overlay.on")),t.killClass("on");var o=1e3*parseFloat(t.css().transitionDuration);π.clean(e,"keydown"),setTimeout(function(){t.css({display:"none"}),π1("body").killClass("overlay-on"),π1("iframe").src="",n&&n()},o)},spawn:function(t,e){t.add(π.modalCloseButton(function(){π.modalOverlay.hide(t)}))}},π.mods.push(n)}(),function(){function t(t){function e(){i(-1)}function n(){i(1)}function o(){i(null,this.index())}function i(e,n){if(!f){f=!0;var o=s.π1(".on");if(!e&&o){if(o.index()===n)return void(f=!1)}else e&&(n=o.index()+e,0>n?n=h.lastIdx():n>=h.length&&(n=0));r.cycle||(0==n?c.hide():c.show(),n==h.lastIdx()?u.hide():u.show()),r.pager&&(l.π(".yah").killClass("yah"),l.childNodes[n].addClass("yah"));var i={el:t,currentFrame:o,incomingFrame:h[n]};t.hasClass("pi-crossfader")?π.crossfader.changeFrame(i):t.hasClass("pi-rotator")?(i.pagerClicked=e?!1:!0,i.cycle=r.cycle,π.rotator.changeFrame(i)):(o&&o.killClass("on"),i.incomingFrame.addClass("on"));var a=1e3;if(o)try{a=1e3*o.css().transitionDuration.split(", ").reduce(function(t,e){return Math.max(parseFloat(t),parseFloat(e))})}catch(d){return void π.HAL.say(0,"π-rotator needs you to transition a css transform to make your items move.")}setTimeout(function(){f=!1},a)}}var a=t.dataset,r={modal:booleanAttributeValue(t,"data-modal",!1),prevNext:booleanAttributeValue(t,"data-prev-next",!0),pager:booleanAttributeValue(t,"data-pager",!1),cycle:booleanAttributeValue(t,"data-cycle",!0),autoplay:booleanAttributeValue(t,"data-autoplay",!1)},s=π.div("item-wrapper"),l=r.pager?π.div("pager"):null;if(t.π(":scope > .item").forEach(function(e){if(s.add(e),l){!t.π1(".pager");var n=π.button("pager-button",null,null,o);l.add(n)}}),t.fill([s,l]),r.prevNext){var c=π.button("prev-button"),u=π.button("next-button");t.add([c,u])}if(r.autoplay&&(r.delay=a.delay||4e3),c.onclick=e,u.onclick=n,t.hasClass("pi-rotator")){var d={el:t,options:r};π.rotator.spawn(d)}if(r.modal){var p=π.div("pi-modal-overlay");p.id=t.id,t.removeAttribute("id"),p.wrap(t),π.modalOverlay.spawn(p)}var f,h=s.childNodes;i(0,0)}function e(t){var e=πd(t);e.hasClass("pi-modal-overlay")&&π.modalOverlay.show(t)}function n(t){var e=πd(t);e.hasClass("pi-modal-overlay")&&π.modalOverlay.hide(t,function(){})}function o(){π(".pi-multi-frame-display").forEach(π.multiFrameDisplay.spawn),π.setTriggers("multi-frame-display",π.multiFrameDisplay)}π.multiFrameDisplay={show:e,hide:n,spawn:t},π.mods.push(o)}(),function(){function t(){π.clean(t),-1==navigator.userAgent.indexOf("Chrome")&&-1!=navigator.userAgent.indexOf("Safari")&&π1("body").add(π.contentElement("style",0,0,".pi-accordion .wrapper{transition: none}")),π(".pi-accordion").forEach(function(t){var n=π.div("container",null,t.innerHTML);t.fill(n),e(n)})}function e(t){t.π(":scope > .item").forEach(function(i){function a(t){var e=t.π1(".wrapper"),a=e.π1(".content").offset().height+"px";if(t.hasClass("on"))e.css({height:a}),t.killClass("on"),setTimeout(function(){e.css({height:0}),n=!1},o);else{i.addClass("on"),e.css({height:a});var r=1e3*parseFloat(e.css().transitionDuration);setTimeout(function(){e.css({height:""}),n=!1},r)}}var r=i.dataset.title,s=π.div("title",null,r),l=π.div("wrapper"),c=π.div("content",null,i.innerHTML);l.fill(c),i.fill([s,l]),l.css({height:0}),s.onclick=function(){if(!n){if(n=!0,t.dataset.single){var e=i.siblings().filter(function(t){return t.hasClass("on")});e.forEach(function(t){a(t)})}setTimeout(function(){a(i)},o)}};var u=c.π(":scope > .container");u.length>0&&u.forEach(e)})}var n=!1,o=25;π.mods.push(t)}(),function(){function t(){π(".pi-dialog").forEach(π.dialog.spawn),π.setTriggers("dialog",π.modalOverlay)}function e(t){function e(){t.π1(".pi-modal-close-button").click()}var n=π.div("content-box",0,t.innerHTML),o=π.div("dialog-box",0,n);t.fill(o),t.dataset.title&&o.prepend(π.div("title",0,t.dataset.title)),t.π(".buttons button").forEach(function(t){t.onclick=function(){var e=t.getAttribute("pi-dialog-action");e&&π.dialog.actions[e]()},t.hasAttribute("data-bypass")||t.listen(e,"click")}),booleanAttributeValue(t,"data-inline",!1)||(t.addClass("pi-modal-overlay"),π.modalOverlay.spawn(t))}π.dialog={show:π.modalOverlay.show,spawn:e,actions:{}},π.mods.push(t)}(),π.pushmenu=function(){function t(){π("[data-auto-burger]").forEach(function(t){var e=t.getAttribute("data-auto-burger"),n=πd(e)||π.div("pi-pushmenu",e),o=n.π1("ul")||π.ul();t.π("a[href], button").forEach(function(t){if(!booleanAttributeValue(t,"data-auto-burger-exclude",!1)){var e=t.cloneNode(!0);if(e.id="","BUTTON"==e.tagName){var n=π.srcElement("a");n.href="",n.innerHTML=e.innerHTML,n.onclick=e.onclick,e=n}o.add(π.li(0,0,e))}}),n.add(o),π1("body").add(n)}),π(".pi-pushmenu").forEach(function(t){o[t.id]=n(t)}),π.setTriggers("pushmenu",π.pushmenu)}function e(t){o[t].expose()}function n(t){function e(e){var n=e.target;n!=s&&n!=l&&(t.killClass("on"),setTimeout(function(){t.css({display:"none"}),o.killClass("overlay-on")},300))}function n(){o.addClass("overlay-on"),t.css({display:"block",zIndex:π.highestZ()}),setTimeout(function(){t.addClass("on")},10)}var o=(π1("html"),π1("body")),i=π.div("overlay"),a=π.div("content",null,t.π1("*")),r=t.getAttribute("data-side")||"right",s=π.div("sled");s.css(r,0);var l=π.div("top-bar");return l.fill(π.modalCloseButton(e)),s.fill([l,a]),i.fill(s),t.fill(i),s.onclick=function(t){t.stopPropagation()},i.onclick=e,π.listen(e,"resize"),{expose:n}}var o={};return π.mods.push(t),{show:e}}();var kub=function(){function t(){function o(){s.hasClass("open-nav")&&n()}π.clean(t),s=π1("html"),l=π1("body"),c=πd("mainNav"),u=πd("headlineWrapper"),p=πd("wishField"),r=π1("header").offset().height,d=πd("quickstartButton"),π1("body").add(π.contentElement("style",0,"menuStyles")),e(),π.listen(e,"resize"),π.listen(e,"scroll"),π.listen(i,"keydown"),p.listen(i,"keydown"),document.onunload=function(){π.clean(e,"resize"),π.clean(e,"scroll"),π.clean(i,"keydown"),p.clean(i,"keydown")},π.listen(o,"resize"),π(".dropdown").forEach(function(t){var e=t.π1(".readout");e.innerHTML=t.π1("a").innerHTML,e.onclick=function(){function e(o){t.hasClass("on")&&!n(o)&&(π.clean(e,"click"),t.killClass("on"))}function n(t){return t.target.isHeirOfClass("dropdown")}t.toggleClass("on"),π.listen(e,"click")}})}function e(){s.hasClass("open-nav")||(r=π1("header").offset().height);var t=window.pageYOffset,e=t/3;if(s.classOnCondition("flip-nav",t>0),l.css({backgroundPosition:"0 "+px(e)}),u){var n=u.offset().top+u.offset().height-r+t-30,o=n+d.offset().height;u.css({opacity:0===t?1:t>n?0:1-t/n}),d.css({opacity:n>t?1:t>o?0:1-(t-n)/(o-n)}),s.classOnCondition("y-enough",t>o)}}function n(){if(window.innerWidth<800)π.pushmenu.show("primary");else{var t=r;s.hasClass("open-nav")||(t=c.offset().height),π("header").css({height:px(t)})}s.toggleClass("open-nav")}function o(t){t.value="",t.blur()}function i(t){switch(t.which){case 13:t.currentTarget===p&&o(p);break;case 27:s.hasClass("open-nav")&&n()}}function a(){var t=πd("videoPlayer").π1("iframe");t.src=t.getAttribute("data-url"),π.modalOverlay.show("videoPlayer")}π.listen(t);var r,s,l,c,u,d,p;return{toggleMenu:n,showVideo:a}}();