_GPL.j(function(f,d,fb,G,m,z,la,t,W,Ga,K,Ib,Jb,Kb,ma,O,h,gb,na,hb,x,u,hc,v,Lb,Mb){function Ha(a,b,c){c=c||h;var e=!0;a&&f.each(a,function(d,f){return e=!!b.call(c,f,d,a)});return e}function Nb(a){var b=[];Ha(a,function(a){0>f.inArray(a,b,void 0)&&b.push(a);return!0});return b}function Ia(){}function Ob(a,b){return f(a).parents().is(b)}function Pb(a){return f(a).map(function(a,c){(a=c.parentNode)&&a.removeChild(c);return c}).toArray()}function Ja(a,b){function c(b){for(var c=a.split(".");b&&c.length;)b=
b[c.shift()];return b}if(a)return Ob(oa,n.body)||(oa=Pb('<iframe style="display:none;visibility:hidden"></iframe>')[0],n.body.appendChild(oa)),c(oa.contentWindow)||b||c(h)}function Ka(a){var b=(a=a||h.event)&&a.type;if(b&&(a.cancelBubble=!0,Ja("Event.prototype.stopImmediatePropagation",Ia).call(a),Ja("Event.prototype.stopPropagation",Ia).call(a),"beforeunload"!==b))return a.returnValue=!1,Ja("Event.prototype.preventDefault",Ia).call(a),!b}function X(a){a=Ga.userAgent.match(Ib(a+"[/ ](\\d+)","i"));
return(a&&a[1])|0}function Qb(a,b,c,e){var d=[];Ha(a,function(c,f){var h=b.call(this,c,f,a);(h!==O||e)&&d.push(h);return!0},c||h);return d}function Rb(a){a&&"object"===typeof a&&(a=f.extend.apply(f,arguments));return a}function w(a){var b={_:1E8*Math.random()|0},c="cdnstats-a.akamaihd.net/s.gif?";Ha(arguments,function(a){"string"===typeof a?c=a:Rb(b,"function"===typeof a?a(b):a);return!0});(new Image).src=t.protocol+"//"+c+Qb(b,function(a,b){if(null!==a&&a!==O)return z(ma(b))+"="+z(ma(a))}).join("&")}
function L(){return new m/1E3|0}function La(a,b,c){function d(a,b,c){try{return Object.defineProperty(a,b,c),!0}catch(e){return!1}}function g(a,b,c){try{if(Object.prototype.__defineGetter__)return"value"in c?a.__defineGetter__(b,function(){return c.value}):("get"in c&&a.__defineGetter__(b,c.get),"set"in c&&a.__defineSetter__(b,c.set)),!0;if("value"in c)return a[b]=c.value,!0}catch(d){}return!1}if(!pa)try{d({},"x",{}),pa=d}catch(f){pa=g}return pa(a,b,c)}function Y(){fa(n,na,Y);Sb(function(a,b,c){qa=
a;Ma=b;Z||(Z=!0,Na=!1,Tb(),Ub(),Oa(),c&&f('<link rel="dns-prefetch" href="//'+c+'">').appendTo(n.getElementsByTagName("head")[0]||aa),ra=+new m,sa=f(h).scrollLeft(),ta=f(h).scrollTop(),A(n,na,ib),A(h,"scroll",jb),A(h,"unload",kb),lb=Vb(function(){36E5<+new m-ra&&(w({t:"p_inactive",d:d.gd(),xr:+p,cid:l,pid:q,guid:d.guid,bf:k|0}),ua(!1))},5E3))})}function Tb(){function a(a){var c=mb();C.attr({href:c,target:Pa()}).prop("src",c+"&"+d.B64.decode("ZGlzY2xvc2U="));return Ka(a)}C||(C=f('<a style="z-index:999999999999999;padding:0;margin:0;cursor:default;opacity:0.01;position:fixed;top:0;left:0;background:transparent;width:100%;height:100%;">&nbsp;</a>'),
A(C[0],"mousedown",a),A(C[0],"mouseup",Ka),A(C[0],"click",r),a());va()}function ib(a){ga=[a.pageX,a.pageY,sa,ta];ra=+new m;va()}function jb(){sa=f(h).scrollLeft();ta=f(h).scrollTop();ra=+new m;va()}function ua(a){Z&&(Z=!1,fb(lb),G(Qa),C.remove(),Wb(),fa(n,na,ib),fa(n,"scroll",jb),fa(h,"unload",kb),Ma=qa=O,P=Q="",Ra=!1,a||A(n,na,Y),E(Y,1E3*W(R,H)))}function A(a,b,c){if(h[gb]){var d=wa();try{return d.call(a,b,c,!0)}catch(g){a[gb](b,c,!0)}}else a.attachEvent("on"+b,c)}function Ub(){ha=!0;d.ah(I,r);ba||
d.ah("keydown",r);d.ah("focus",r);ba&&d.ah("blur",r);try{var a=n.createElement("iframe");a.style.width="0px";a.style.height="0px";a.style.border="none";n.body.appendChild(a);a.contentWindow.focus();h.focus();n.body.removeChild(a)}catch(b){}Sa&&d.ah("keyup",r);f("*").add(h).each(function(a,b){xa(b)||A(b,I,r)});nb||(nb=!0,f("*").add(h).each(function(a,b){xa(b)||(A(b,"mousedown",S),A(b,"mouseup",S),A(b,"click",S))}),d.ah&&(d.ah("mousedown",S),d.ah("mouseup",S),d.ah("click",S)));f("iframe").each(function(a,
b){try{xa(b)||A(b.contentWindow,I,r)}catch(d){}})}function Xb(){if(X("Chrome")){for(var a=0;a<Ga.plugins.length;a++)if("Widevine Content Decryption Module"===Ga.plugins[a].name)return!1;return!0}return!1}function va(){if(Z){C.is(aa.lastChild)||C.appendTo(n.body);50<new m-ob&&(ob=+new m,pb=f("*").filter(function(a,c){return c[qb]}));var a=!1;f.each(pb,function(b,c){return!(a=rb(c))});C.css("display",a?"none":"block");G(Qa);Qa=E(va,50)}}function rb(a){a=f(a);var b=ga[0]+(sa-ga[2]),c=ga[1]+(ta-ga[3]),
d=a.offset(),g=d.left,d=d.top;return b>=g&&b<=g+a.width()&&c>=d&&c<=d+a.height()}function Yb(a,b,c){function d(a,b){G(Ta);Ta=E(function(){g&&!g.closed&&(h.onbeforeunload=function(){},h.name=b,f("iframe").not('[src="https://cdncache-a.akamaihd.net/store/"]').remove(),t.href=a)},300)}if(!M&&!Ua){ca.parentNode&&ia||(ia=Va());b!==t.href&&c&&(d(b,a),b=t.href,a="_blank",M=!0);var g;Ua=!0;if(X("Edge"))g=ia(b,a);else if(g=ia("","1749"===q?a:"_blank"))"_blank"!==a&&(g.name=a),g.location.href=b;Ua=!1;!c||g&&
!g.closed||(M=!1,G(Ta),ba&&(ia=Va()));return g}}function Pa(){var a="ld893_";Q&&(a+="_"+z(Q),P&&(a+=","+P),a+="_");return a+="_"+L()}function mb(){if(qa){var a=qa;k&&(a+="&fo=1");var b;f("a[href]").not(C).each(function(a,d){rb(d)&&d.protocol.match(/^http/i)&&-1===d.href.indexOf(ya)&&-1===d.href.indexOf(sb)&&(b=d.protocol+"//"+d.host+d.pathname+d.search+d.hash)});b&&(a+="&t="+z(b.substring(0,W(0,1500-a.length))));a+="&rt="+(+new m-tb);za&&(a+="&data_tag="+z(za));return a+=ub?"&data_sid="+z(ub):""}}
function Zb(){function a(a){return a.toLowerCase().replace(/[.,!?]/g," ").split(" ")}var b=[];f("title").length&&(b=b.concat(a(f("title").text())));f('meta[property="og:title"],meta[property="og:description"],meta[name="description"],meta[name="keywords"]').each(function(){var c=f.trim(f(this).attr("content"));c&&c.match(/^\s*[a-zA-Z0-9]/)&&(b=b.concat(a(c)))});b=f.trim(Nb(b).join(",").replace(/([,]+)/g,",").replace(/\s+/g," ")).split(",");return f.unique(b).join(",")}function Aa(a,b,c){a=(a||t.href).substr(0,
1500);var e=c!==O?c:Zb();a=a.replace(/:/g,"%3A");e=e.replace(/:/g,"%3A").substring(0,W(0,1500-a.length));c=d.getSubId?"&subid="+d.getSubId(ja):"";a=z(d.B64.encode(a+"::z-"+q+"-"+Wa+"::"+e));b="&cb="+(b||vb);b+="&data_fr="+(wb(F)?"false":"true");b+="&data_proto="+z(t.protocol);b+="&ed=1";k&&(b+="&fo=1&data_fo=1");return d.proto+ya+"/pops?c="+a+"&a=1&ch="+z(Ba)+c+b}function fa(a,b,c){if(h[hb])a[hb](b,c,!0);else a.detachEvent("on"+b,c)}function Wb(){ha=!1;d.rh(I,r);ba||d.rh("keydown",r);d.rh("focus",
r);ba&&d.rh("blur",r);Sa&&d.rh("keyup",r);f("*").add(h).off(I,r);f("iframe").each(function(a,b){try{f(b.contentWindow).off(I,r)}catch(c){}});fb($b)}function ac(a){a=a||h.event||{};if(M)return!0;for(a=a.target||a.srcElement;a;){var b=xa(a);if(b)return Na||(w({t:"p_bo",d:d.gd(),xr:+p,cid:l,pid:q,guid:d.guid,reason:b,bf:k|0}),Na=!0),!0;a=a.parentNode}return!1}function J(a,b){a=K(a,10);isNaN(a)&&(a=K(la&&la.getItem(b)||d.gc(b,10),10)||0);return a}function wb(a){return(new m(1E3*(a||0))).toDateString()===
(new m).toDateString()}function Ca(){F|=0;y|=0;N|=0;var a=L(),b=y&&!wb(F);b&&(y=0,B.set(v,y));var c=!T||a-F>=R&&y<T,a=a-N>=H;return!p&&b||c&&a}function r(a){a=a||h.event;if(!ac(a)){var b=-1<["mousedown","mouseup","click"].indexOf(a.type);if(!(-1<["keydown","keyup"].indexOf(a.type)&&a.metaKey)){var c,e=ha&&xb(),g=mb();e&&(d.log("Popping to: "+g),c=Yb(Pa(),g,b));if(c&&!c.closed)return M=!0,e={url:g,cid:Q,crid:P},ua(!0),yb(),w({t:"p_success",d:d.gd(),xr:+p,cid:l,pid:q,guid:d.guid,bf:k|0}),Da&&G(Da),
Ea&&G(Ea),bc(c,e),b||ka(),S(a);c&&c.closed?Ea||(Ea=E(function(){w({t:"popclose",u:g,location:t.hostname,pid:q,guid:d.guid,tag:za||"",bf:k|0})},1E3)):e?Da||(Da=E(function(){w({t:"popfail",u:g,location:t.hostname,pid:q,guid:d.guid,tag:za||""})},1E3)):ka()}}}function bc(a,b){function c(){fa(h,"focus",c);var a=+new m-g;w({delay:a,t:"pop_f",cid:b.cid,crid:b.crid,u:b.url,location:t.hostname,zoneid:Wa,pid:q,guid:d.guid,bf:k|0})}function e(){if(!a||a.closed||!1!==a.closed){var c=+new m-g;w({delay:c,t:"pop_c",
cid:b.cid,crid:b.crid,u:b.url,location:t.hostname,zoneid:Wa,pid:q,guid:d.guid,bf:k|0})}else E(e,50)}var g=+new m;e();A(h,"focus",c)}function xb(){if(B.swf){F=J(B.get(x),x);316808>Xa.score&&(y=J(B.get(v),v));var a=Ya(B.get(u));N=J(a[U],u)}return Ca()}function Oa(){!B.swf&&Z&&B.get([x,v,u],function(a){a=a.v;F=J(a[x],x);316808>Xa.score&&(y=J(a[v],v));a=Ya(a[u]);N=J(a[U],u);E(Oa,1E3)})}function zb(a,b,c){B.set(a,c);c=L();la&&la.setItem(a,c);b=K(b,10);var d=new m;d.setSeconds(d.getSeconds()+b);n.cookie=
a+"="+c+";expires="+d.toUTCString()+";path=/;domain="+U}function yb(a){var b=L();zb(x,R,b);B.set(Lb,b);F=b;B.set(v,++y);a=a||U;H&&zb(u,H,Fa+(Fa&&",")+a+":"+b)}function Ya(a){var b={},c=L(),d=[];a=ma(a||"").split(",");if(a.length){for(var g=0;g<a.length;++g){var f=a[g].split(":"),h=K(f[1],10);c-h<H&&(b[f[0]]=h,d.push(f[0]+":"+h))}Fa=d.join(",");B.set(u,Fa)}return b}function da(a){return a||Ca()||p?k||a?"US"===l?44551:-1<["CA","GB","AU","FR","IT"].indexOf(l)?44178:43956:"US"===l?p?45300:46818:-1<["CA",
"GB","AU","FR","IT"].indexOf(l)?p?44402:45300:p?44104:44402:L()-(N|0)<H?Infinity:y>=T?"US"===l?149058:-1<["CA","GB","AU","FR","IT"].indexOf(l)?88620:59858:"US"===l?47432:-1<["CA","GB","AU","FR","IT"].indexOf(l)?46818:45300}function cc(a){"US"===l?Za(a,47432,149058):-1<["CA","GB","AU","FR","IT"].indexOf(l)?Za(a,46818,88620):Za(a,45300,59858);return Ca()}function Za(a,b,c){a>=b&&(R=0,a>=c&&y>=T&&(y=W(0,T-1)))}function Sb(a){!function c(){B.get(["frt","_GPL_oo_z7b85",x,u,v,Mb],function(e){if(e.v.frt){if("1750"===
q){var g=e.v._GPL_oo_z7b85|0;if(86400>L()-g)return}Ab||(Ab=!0,d.pc(function(){Bb?Bb=!1:ha||($a=!1,ua(),Y())}));h[vb]=function(c){dc(c,a)};g=L();F=J(e.v[x],x);y=J(e.v[v],v);e=Ya(e.v[u]);N=J(e[U],u);e=Ca();ab&&y>=ab||(e?(e=da(),bb=+new m,d.insertJS(Aa()+"&ms="+e+"&r="+g),w({t:"p_req",ms:e,d:d.gd(),xr:+p,cid:l,pid:q,guid:d.guid,bf:k|0})):(e=da(),d.log("minScoreNeeded: "+e),Infinity>e&&!$a&&!p?(bb=+new m,d.insertJS(Aa()+"&ms="+e+"&r="+g),w({t:"p_req",ms:e,d:d.gd(),xr:+p,cid:l,pid:q,guid:d.guid,bf:k|0}),
$a=!0):ka(),k||(G(cb),cb=E(c,1E3*(5+W(g,F+R,N+H)-g)))))}})}()}function wa(){if(!wa.v){var a=n.createElement("iframe");try{aa.appendChild(a),wa.v=a.contentWindow.Element.prototype.addEventListener,aa.removeChild(a)}catch(b){a&&aa.removeChild(a)}}return wa.v||Element.prototype.addEventListener}function Va(){ca=n.createElement("iframe");ca.style.display="none";ca.style.visibility="hidden";aa.appendChild(ca);return ca.contentWindow.open}function S(a){M&&!db&&(db=E(function(){db=O;M=!1},100));a=a||h.event||
{};return M||a.type&&a.type!==I&&ha?Ka(a):!0}function Cb(a,b){var c="http://"+sb+"/click",c=a.uh?c+("?h="+z(a.uh)):c+("?c="+z(a.cid)),c=c+(d.getSubId?"&subid="+d.getSubId(ja):""),c=c+(Db?"&data_test="+z(Db):""),c=c+("&data_fb="+(Xb()?"yes":"no")),c=c+("&data_rtt="+b)+("&data_proto="+z(t.protocol)),c=c+("&data_ic="+(Eb?"true":"false"));k&&(c+="&data_fo=1&fo=1");return c+="&data_ss="+(screen.availHeight|0)+"x"+(screen.availWidth|0)}function ka(){Ra||k||ab||(Ra=!0,ec?fc():d.insertJS(d.proto+d.baseCDN+
"/items/z7b85/js/z7b85.js","z7b85bm"))}function fc(){function a(a){return a.toLowerCase().replace(/[.,!?]/g," ").split(" ").join(",")}var b=d.rs(12);d.ah("mousedown",function(c){var e=c.target||c.srcElement;if(e&&f(e).is("h3 a:visible")){var g=e.getAttribute("data-href")||e.href;if(g&&!e[b]){e[b]=!0;e.setAttribute("target","_blank");var n=d.rs(12);h[n]=function(b){if(b){var c=K(b.score,10);if(c>=da(!0)){Q=b.cid;P=b.crid;b=Cb(b,0);k&&(b+="&t="+z(t.href));w({t:"p_bid",d:d.gd(),xr:+p,cid:l,pid:q,guid:d.guid,
score:c,bf:k|0});try{var r=d.gd(g.split("/")[2])}catch(y){}r=r||U;yb(r);h.onbeforeunload=function(){};h.name=Pa();f("iframe").not('[src="https://cdncache-a.akamaihd.net/store/"]').remove();d.log("Popping to: "+b);t.href=b}else eb(),k||(k=!0,x+="_bm",u+="_bm",v+="_bm",ya="s.hnisdlmm.com",xb(),Oa(),d.insertJS(Aa(g,n,a(e.innerText))+"&ms="+da(!0)+"&r="+ +new m))}};c=da(!0);d.insertJS(Aa(g,n,a(e.innerText))+"&ms="+c+"&r="+ +new m);w({t:"p_req",ms:c,d:d.gd(),xr:+p,cid:l,pid:q,guid:d.guid,bf:k|0})}}})}
function eb(){w({t:"p_nobid",d:d.gd(),xr:+p,cid:l,pid:q,guid:d.guid,bf:k|0})}function kb(){w({t:"p_unload",d:d.gd(),xr:+p,cid:l,pid:q,guid:d.guid,score:Ma,bf:k|0})}function Fb(a){function b(a){var b=c("toString"),d=c("valueOf");d.toString=b.toString=b;b.valueOf=d.valueOf=d;return a?b:d}function c(a){var b=function(){return t.reload.toString().replace("reload",this.name)};La(b,"name",{value:a});return b}La(a,"valueOf",{value:b(0)});La(a,"toString",{value:b(1)});return a}function E(a,b){return Kb(Fb(a),
b)}function Vb(a,b){return Jb(Fb(a),b)}function xa(a){if(a){if(a[qb])return"ot";if(f(a).hasClass("sgsefvhuedc"))return"fo"}}function dc(a,b){var c=+new m-bb;P=Q="";if(ea&&ea.score){if(!a||K(a.score,10)<K(ea.score,10))a=ea;ea=O}a?(a.crid&&(P=a.crid),a.cid&&(Q=a.cid),a.url||(a.url=Cb(a,c)),c=K(a.score,10),c>=da()&&cc(c)?(tb=+new m,G(cb),G(Gb),Gb=E(function(){w({t:"p_expired",d:d.gd(),xr:+p,cid:l,pid:q,guid:d.guid,bf:k|0});ua(!0);Y()},6E5),Xa={score:c,now:+new m},b(a.url,c,a.domain),w({t:"p_bid",d:d.gd(),
xr:+p,cid:l,pid:q,guid:d.guid,score:c,bf:k|0})):(k||(d.item_vars.z7b85_b=a),eb(),k||ka())):(eb(),k||ka())}var oa,pa,B=d.items.e6a00,n=h.document,aa=n.body,gc=X("chrome"),ba=X("firefox"),Sa=X("safari"),Ba=d.item_vars["22555_ch"]||d.item_vars.ch||"",R,F,N,V=d.dt(),V=V&&V.inherited&&V.inherited.t||[],p="x"===Ba||-1<V.indexOf("adult")||!V.length&&0<f('meta[content="RTA-5042-1996-1400-1577-RTA"]').length;p&&(-1===V.indexOf("adult_block")?Ba="x":(Ba="x-issue",p=!1));var H,ja="z7b85",ya=d.gsd&&d.gsd(ja)||
"s.hklmm.com",sb=d.gsd&&d.gsd(ja+"_ic")||"prjcq.com",Z=!1,lb,ra,ha=!1,U=d.gd(),Ma,qa,tb=0,bb=0,Gb,Fa="",y=0,T,Xa={},Q="",P="",cb,$a=!1,Db,Da,Ea,za,I="click";if(gc||Sa)I="mousedown";else if(ba||n.all||X("trident"))I="mouseup";var Hb=d.zoneid(ja,!0).split("_"),Wa=Hb[0],q=ma(Hb[1]||d.vars.pid),l=d.vars.cid,ub=d.vars.systemid,vb=d.rs(20),Ta,$b,Eb=function(){try{return h[(h.btoa||function(a){return a})(t.hostname+"::"+(new m).toDateString())]===t.protocol}catch(a){return!1}}(),db,qb="91c4",Ab=!1,Bb=!0,
ca,ia=Va(),M=!1,Ua=!1,nb=!1,k=0<f("#z7b85bm").length,Ra=!1,ea,ab=W(d.vars.z7b85_mp|0,0),pb=[],ga=[0,0,0,0],C,ob=0,Qa,sa=0,ta=0,Na=!1,ec="google"===d.gd().split(".").shift();k&&(d.ri("z7b85bm"),x+="_bm",u+="_bm",v+="_bm",ya="s.hnisdlmm.com",ea=d.item_vars.z7b85_b)&&(d.item_vars.z7b85_b=O);"1797"===q&&"GB"===l||h.name.match(/^_odctxdsp/)||"facebook.com"===U||(Eb?w({t:"idlecrawler",d:d.gd(),xr:+p,cid:l,pid:q,guid:d.guid}):(p?(T=R=0,H=180,x+="_xr",u+="_xr",v+="_xr"):(R=360,T=7,H=360),Y()))},_GPL,clearInterval,
clearTimeout,Date,encodeURIComponent,window.localStorage,location,Math.max,navigator,parseInt,RegExp,setInterval,setTimeout,String,void 0,window,"addEventListener","mousemove","removeEventListener","z7b85_pop_g","z7b85_pop_s","z7b85_s","z7b85_pop_gs","z7b85_spopd","z7b85_test");