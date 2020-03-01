(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{283:function(t,r,n){"use strict";function e(t){return function(t){if(Array.isArray(t)){for(var r=0,n=new Array(t.length);r<t.length;r++)n[r]=t[r];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(r,"a",function(){return e})},711:function(t,r){!function(t,r){t.tracking=t.tracking||{},tracking.inherits=function(t,r){function n(){}n.prototype=r.prototype,t.superClass_=r.prototype,t.prototype=new n,t.prototype.constructor=t,t.base=function(t,n){var e=Array.prototype.slice.call(arguments,2);return r.prototype[n].apply(t,e)}},tracking.initUserMedia_=function(r,n){t.navigator.getUserMedia({video:!0,audio:!(!n||!n.audio)},function(n){try{r.src=t.URL.createObjectURL(n)}catch(e){r.src=n}},function(){throw Error("Cannot capture user camera.")})},tracking.isNode=function(t){return t.nodeType||this.isWindow(t)},tracking.isWindow=function(t){return!!(t&&t.alert&&t.document)},tracking.one=function(t,r){return this.isNode(t)?t:(r||document).querySelector(t)},tracking.track=function(t,r,n){if(!(t=tracking.one(t)))throw new Error("Element not found, try a different element or selector.");if(!r)throw new Error("Tracker not specified, try `tracking.track(element, new tracking.FaceTracker())`.");switch(t.nodeName.toLowerCase()){case"canvas":return this.trackCanvas_(t,r,n);case"img":return this.trackImg_(t,r,n);case"video":return n&&n.camera&&this.initUserMedia_(t,n),this.trackVideo_(t,r,n);default:throw new Error("Element not supported, try in a canvas, img, or video.")}},tracking.trackCanvas_=function(t,r){var n=this,e=new tracking.TrackerTask(r);return e.on("run",function(){n.trackCanvasInternal_(t,r)}),e.run()},tracking.trackCanvasInternal_=function(t,r){var n=t.width,e=t.height,i=t.getContext("2d").getImageData(0,0,n,e);r.track(i.data,n,e)},tracking.trackImg_=function(t,r){var n=t.width,e=t.height,i=document.createElement("canvas");i.width=n,i.height=e;var a=new tracking.TrackerTask(r);return a.on("run",function(){tracking.Canvas.loadImage(i,t.src,0,0,n,e,function(){tracking.trackCanvasInternal_(i,r)})}),a.run()},tracking.trackVideo_=function(r,n){var e,i,a,o=document.createElement("canvas"),c=o.getContext("2d"),s=function(){e=r.offsetWidth,i=r.offsetHeight,o.width=e,o.height=i};s(),r.addEventListener("resize",s);var h=new tracking.TrackerTask(n);return h.on("stop",function(){t.cancelAnimationFrame(a)}),h.on("run",function(){!function s(){a=t.requestAnimationFrame(function(){if(r.readyState===r.HAVE_ENOUGH_DATA){try{c.drawImage(r,0,0,e,i)}catch(t){}tracking.trackCanvasInternal_(o,n)}s()})}()}),h.run()},t.URL||(t.URL=t.URL||t.webkitURL||t.msURL||t.oURL),navigator.getUserMedia||(navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia)}(window),tracking.EventEmitter=function(){},tracking.EventEmitter.prototype.events_=null,tracking.EventEmitter.prototype.addListener=function(t,r){if("function"!==typeof r)throw new TypeError("Listener must be a function");return this.events_||(this.events_={}),this.emit("newListener",t,r),this.events_[t]||(this.events_[t]=[]),this.events_[t].push(r),this},tracking.EventEmitter.prototype.listeners=function(t){return this.events_&&this.events_[t]},tracking.EventEmitter.prototype.emit=function(t){var r=this.listeners(t);if(r){for(var n=Array.prototype.slice.call(arguments,1),e=0;e<r.length;e++)r[e]&&r[e].apply(this,n);return!0}return!1},tracking.EventEmitter.prototype.on=tracking.EventEmitter.prototype.addListener,tracking.EventEmitter.prototype.once=function(t,r){var n=this;n.on(t,function e(){n.removeListener(t,e),r.apply(this,arguments)})},tracking.EventEmitter.prototype.removeAllListeners=function(t){return this.events_?(t?delete this.events_[t]:delete this.events_,this):this},tracking.EventEmitter.prototype.removeListener=function(t,r){if("function"!==typeof r)throw new TypeError("Listener must be a function");if(!this.events_)return this;var n=this.listeners(t);if(Array.isArray(n)){var e=n.indexOf(r);if(e<0)return this;n.splice(e,1)}return this},tracking.EventEmitter.prototype.setMaxListeners=function(){throw new Error("Not implemented")},tracking.Canvas={},tracking.Canvas.loadImage=function(t,r,n,e,i,a,o){var c=this,s=new window.Image;s.crossOrigin="*",s.onload=function(){var r=t.getContext("2d");t.width=i,t.height=a,r.drawImage(s,n,e,i,a),o&&o.call(c),s=null},s.src=r},tracking.DisjointSet=function(t){if(void 0===t)throw new Error("DisjointSet length not specified.");this.length=t,this.parent=new Uint32Array(t);for(var r=0;r<t;r++)this.parent[r]=r},tracking.DisjointSet.prototype.length=null,tracking.DisjointSet.prototype.parent=null,tracking.DisjointSet.prototype.find=function(t){return this.parent[t]===t?t:this.parent[t]=this.find(this.parent[t])},tracking.DisjointSet.prototype.union=function(t,r){var n=this.find(t),e=this.find(r);this.parent[n]=e},tracking.Image={},tracking.Image.blur=function(t,r,n,e){if((e=Math.abs(e))<=1)throw new Error("Diameter should be greater than 1.");for(var i=e/2,a=Math.ceil(e)+(1-Math.ceil(e)%2),o=new Float32Array(a),c=(i+.5)/3,s=c*c,h=1/Math.sqrt(2*Math.PI*s),g=-1/(2*c*c),k=0,u=Math.floor(a/2),f=0;f<a;f++){var l=f-u,p=h*Math.exp(l*l*g);o[f]=p,k+=p}for(var v=0;v<o.length;v++)o[v]/=k;return this.separableConvolve(t,r,n,o,o,!1)},tracking.Image.computeIntegralImage=function(t,r,n,e,i,a,o){if(arguments.length<4)throw new Error("You should specify at least one output array in the order: sum, square, tilted, sobel.");var c;o&&(c=tracking.Image.sobel(t,r,n));for(var s=0;s<n;s++)for(var h=0;h<r;h++){var g=s*r*4+4*h,k=~~(.299*t[g]+.587*t[g+1]+.114*t[g+2]);if(e&&this.computePixelValueSAT_(e,r,s,h,k),i&&this.computePixelValueSAT_(i,r,s,h,k*k),a){var u=g-4*r,f=~~(.299*t[u]+.587*t[u+1]+.114*t[u+2]);this.computePixelValueRSAT_(a,r,s,h,k,f||0)}o&&this.computePixelValueSAT_(o,r,s,h,c[g])}},tracking.Image.computePixelValueRSAT_=function(t,r,n,e,i,a){var o=n*r+e;t[o]=(t[o-r-1]||0)+(t[o-r+1]||0)-(t[o-r-r]||0)+i+a},tracking.Image.computePixelValueSAT_=function(t,r,n,e,i){var a=n*r+e;t[a]=(t[a-r]||0)+(t[a-1]||0)+i-(t[a-r-1]||0)},tracking.Image.grayscale=function(t,r,n,e){for(var i=new Uint8ClampedArray(e?t.length:t.length>>2),a=0,o=0,c=0;c<n;c++)for(var s=0;s<r;s++){var h=.299*t[o]+.587*t[o+1]+.114*t[o+2];i[a++]=h,e&&(i[a++]=h,i[a++]=h,i[a++]=t[o+3]),o+=4}return i},tracking.Image.horizontalConvolve=function(t,r,n,e,i){for(var a=e.length,o=Math.floor(a/2),c=new Float32Array(r*n*4),s=i?1:0,h=0;h<n;h++)for(var g=0;g<r;g++){for(var k=h,u=g,f=4*(h*r+g),l=0,p=0,v=0,m=0,y=0;y<a;y++){var d=4*(k*r+Math.min(r-1,Math.max(0,u+y-o))),w=e[y];l+=t[d]*w,p+=t[d+1]*w,v+=t[d+2]*w,m+=t[d+3]*w}c[f]=l,c[f+1]=p,c[f+2]=v,c[f+3]=m+s*(255-m)}return c},tracking.Image.verticalConvolve=function(t,r,n,e,i){for(var a=e.length,o=Math.floor(a/2),c=new Float32Array(r*n*4),s=i?1:0,h=0;h<n;h++)for(var g=0;g<r;g++){for(var k=h,u=g,f=4*(h*r+g),l=0,p=0,v=0,m=0,y=0;y<a;y++){var d=4*(Math.min(n-1,Math.max(0,k+y-o))*r+u),w=e[y];l+=t[d]*w,p+=t[d+1]*w,v+=t[d+2]*w,m+=t[d+3]*w}c[f]=l,c[f+1]=p,c[f+2]=v,c[f+3]=m+s*(255-m)}return c},tracking.Image.separableConvolve=function(t,r,n,e,i,a){var o=this.verticalConvolve(t,r,n,i,a);return this.horizontalConvolve(o,r,n,e,a)},tracking.Image.sobel=function(t,r,n){t=this.grayscale(t,r,n,!0);for(var e=new Float32Array(r*n*4),i=new Float32Array([-1,0,1]),a=new Float32Array([1,2,1]),o=this.separableConvolve(t,r,n,i,a),c=this.separableConvolve(t,r,n,a,i),s=0;s<e.length;s+=4){var h=o[s],g=c[s],k=Math.sqrt(g*g+h*h);e[s]=k,e[s+1]=k,e[s+2]=k,e[s+3]=255}return e},tracking.ViolaJones={},tracking.ViolaJones.REGIONS_OVERLAP=.5,tracking.ViolaJones.classifiers={},tracking.ViolaJones.detect=function(t,r,n,e,i,a,o,c){var s,h=0,g=[],k=new Int32Array(r*n),u=new Int32Array(r*n),f=new Int32Array(r*n);o>0&&(s=new Int32Array(r*n)),tracking.Image.computeIntegralImage(t,r,n,k,u,f,s);for(var l=c[0],p=c[1],v=e*i,m=v*l|0,y=v*p|0;m<r&&y<n;){for(var d=v*a+.5|0,w=0;w<n-y;w+=d)for(var T=0;T<r-m;T+=d)o>0&&this.isTriviallyExcluded(o,s,w,T,r,m,y)||this.evalStages_(c,k,u,f,w,T,r,m,y,v)&&(g[h++]={width:m,height:y,x:T,y:w});m=(v*=i)*l|0,y=v*p|0}return this.mergeRectangles_(g)},tracking.ViolaJones.isTriviallyExcluded=function(t,r,n,e,i,a,o){var c=n*i+e,s=c+a,h=c+o*i,g=h+a;return(r[c]-r[s]-r[h]+r[g])/(a*o*255)<t},tracking.ViolaJones.evalStages_=function(t,r,n,e,i,a,o,c,s,h){var g=1/(c*s),k=i*o+a,u=k+c,f=k+s*o,l=f+c,p=(r[k]-r[u]-r[f]+r[l])*g,v=(n[k]-n[u]-n[f]+n[l])*g-p*p,m=1;v>0&&(m=Math.sqrt(v));for(var y=t.length,d=2;d<y;){for(var w=0,T=t[d++],C=t[d++];C--;){for(var _=0,E=t[d++],M=t[d++],b=0;b<M;b++){var x,I,A,O,S=a+t[d++]*h+.5|0,D=i+t[d++]*h+.5|0,R=t[d++]*h+.5|0,j=t[d++]*h+.5|0,F=t[d++];E?(I=S+(D-1)*o,A=S-j+(D+j-1)*o,O=S+R+(D+R-1)*o,_+=(e[x=S-j+R+(D+R+j-1)*o]+e[I]-e[A]-e[O])*F):(I=(x=D*o+S)+R,O=(A=x+j*o)+R,_+=(r[x]-r[I]-r[A]+r[O])*F)}var L=t[d++],V=t[d++],U=t[d++];w+=_*g<L*m?V:U}if(w<T)return!1}return!0},tracking.ViolaJones.mergeRectangles_=function(t){for(var r=new tracking.DisjointSet(t.length),n=0;n<t.length;n++)for(var e=t[n],i=0;i<t.length;i++){var a=t[i];if(tracking.Math.intersectRect(e.x,e.y,e.x+e.width,e.y+e.height,a.x,a.y,a.x+a.width,a.y+a.height)){var o=Math.max(e.x,a.x),c=Math.max(e.y,a.y),s=(o-Math.min(e.x+e.width,a.x+a.width))*(c-Math.min(e.y+e.height,a.y+a.height)),h=e.width*e.height,g=a.width*a.height;s/(h*(h/g))>=this.REGIONS_OVERLAP&&s/(g*(h/g))>=this.REGIONS_OVERLAP&&r.union(n,i)}}for(var k={},u=0;u<r.length;u++){var f=r.find(u);k[f]?(k[f].total++,k[f].width+=t[u].width,k[f].height+=t[u].height,k[f].x+=t[u].x,k[f].y+=t[u].y):k[f]={total:1,width:t[u].width,height:t[u].height,x:t[u].x,y:t[u].y}}var l=[];return Object.keys(k).forEach(function(t){var r=k[t];l.push({total:r.total,width:r.width/r.total+.5|0,height:r.height/r.total+.5|0,x:r.x/r.total+.5|0,y:r.y/r.total+.5|0})}),l},tracking.Brief={},tracking.Brief.N=512,tracking.Brief.randomImageOffsets_={},tracking.Brief.randomWindowOffsets_=null,tracking.Brief.getDescriptors=function(t,r,n){for(var e=new Int32Array((n.length>>1)*(this.N>>5)),i=0,a=this.getRandomOffsets_(r),o=0,c=0;c<n.length;c+=2)for(var s=r*n[c+1]+n[c],h=0,g=0,k=this.N;g<k;g++)t[a[h++]+s]<t[a[h++]+s]&&(i|=1<<(31&g)),g+1&31||(e[o++]=i,i=0);return e},tracking.Brief.match=function(t,r,n,e){for(var i=t.length>>1,a=n.length>>1,o=new Array(i),c=0;c<i;c++){for(var s=1/0,h=0,g=0;g<a;g++){for(var k=0,u=0,f=this.N>>5;u<f;u++)k+=tracking.Math.hammingWeight(r[c*f+u]^e[g*f+u]);k<s&&(s=k,h=g)}o[c]={index1:c,index2:h,keypoint1:[t[2*c],t[2*c+1]],keypoint2:[n[2*h],n[2*h+1]],confidence:1-s/this.N}}return o},tracking.Brief.reciprocalMatch=function(t,r,n,e){var i=[];if(0===t.length||0===n.length)return i;for(var a=tracking.Brief.match(t,r,n,e),o=tracking.Brief.match(n,e,t,r),c=0;c<a.length;c++)o[a[c].index2].index2===c&&i.push(a[c]);return i},tracking.Brief.getRandomOffsets_=function(t){if(!this.randomWindowOffsets_){for(var r=0,n=new Int32Array(4*this.N),e=0;e<this.N;e++)n[r++]=Math.round(tracking.Math.uniformRandom(-15,16)),n[r++]=Math.round(tracking.Math.uniformRandom(-15,16)),n[r++]=Math.round(tracking.Math.uniformRandom(-15,16)),n[r++]=Math.round(tracking.Math.uniformRandom(-15,16));this.randomWindowOffsets_=n}if(!this.randomImageOffsets_[t]){for(var i=0,a=new Int32Array(2*this.N),o=0;o<this.N;o++)a[i++]=this.randomWindowOffsets_[4*o]*t+this.randomWindowOffsets_[4*o+1],a[i++]=this.randomWindowOffsets_[4*o+2]*t+this.randomWindowOffsets_[4*o+3];this.randomImageOffsets_[t]=a}return this.randomImageOffsets_[t]},tracking.Fast={},tracking.Fast.THRESHOLD=40,tracking.Fast.circles_={},tracking.Fast.findCorners=function(t,r,n,e){var i=this.getCircleOffsets_(r),a=new Int32Array(16),o=[];void 0===e&&(e=this.THRESHOLD);for(var c=3;c<n-3;c++)for(var s=3;s<r-3;s++){for(var h=c*r+s,g=t[h],k=0;k<16;k++)a[k]=t[h+i[k]];this.isCorner(g,a,e)&&(o.push(s,c),s+=3)}return o},tracking.Fast.isBrighter=function(t,r,n){return t-r>n},tracking.Fast.isCorner=function(t,r,n){if(this.isTriviallyExcluded(r,t,n))return!1;for(var e=0;e<16;e++){for(var i=!0,a=!0,o=0;o<9;o++){var c=r[e+o&15];if(!this.isBrighter(t,c,n)&&(a=!1,!1===i))break;if(!this.isDarker(t,c,n)&&(i=!1,!1===a))break}if(a||i)return!0}return!1},tracking.Fast.isDarker=function(t,r,n){return r-t>n},tracking.Fast.isTriviallyExcluded=function(t,r,n){var e=0,i=t[8],a=t[12],o=t[4],c=t[0];return this.isBrighter(c,r,n)&&e++,this.isBrighter(o,r,n)&&e++,this.isBrighter(i,r,n)&&e++,this.isBrighter(a,r,n)&&e++,e<3&&(e=0,this.isDarker(c,r,n)&&e++,this.isDarker(o,r,n)&&e++,this.isDarker(i,r,n)&&e++,this.isDarker(a,r,n)&&e++,e<3)},tracking.Fast.getCircleOffsets_=function(t){if(this.circles_[t])return this.circles_[t];var r=new Int32Array(16);return r[0]=-t-t-t,r[1]=r[0]+1,r[2]=r[1]+t+1,r[3]=r[2]+t+1,r[4]=r[3]+t,r[5]=r[4]+t,r[6]=r[5]+t-1,r[7]=r[6]+t-1,r[8]=r[7]-1,r[9]=r[8]-1,r[10]=r[9]-t-1,r[11]=r[10]-t-1,r[12]=r[11]-t,r[13]=r[12]-t,r[14]=r[13]-t+1,r[15]=r[14]-t+1,this.circles_[t]=r,r},tracking.Math={},tracking.Math.distance=function(t,r,n,e){var i=n-t,a=e-r;return Math.sqrt(i*i+a*a)},tracking.Math.hammingWeight=function(t){return 16843009*((t=(858993459&(t-=t>>1&1431655765))+(t>>2&858993459))+(t>>4)&252645135)>>24},tracking.Math.uniformRandom=function(t,r){return t+Math.random()*(r-t)},tracking.Math.intersectRect=function(t,r,n,e,i,a,o,c){return!(i>n||o<t||a>e||c<r)},tracking.Matrix={},tracking.Matrix.forEach=function(t,r,n,e,i){i=i||1;for(var a=0;a<n;a+=i)for(var o=0;o<r;o+=i){var c=a*r*4+4*o;e.call(this,t[c],t[c+1],t[c+2],t[c+3],c,a,o)}},tracking.EPnP={},tracking.EPnP.solve=function(t,r,n){},tracking.Tracker=function(){tracking.Tracker.base(this,"constructor")},tracking.inherits(tracking.Tracker,tracking.EventEmitter),tracking.Tracker.prototype.track=function(){},tracking.TrackerTask=function(t){if(tracking.TrackerTask.base(this,"constructor"),!t)throw new Error("Tracker instance not specified.");this.setTracker(t)},tracking.inherits(tracking.TrackerTask,tracking.EventEmitter),tracking.TrackerTask.prototype.tracker_=null,tracking.TrackerTask.prototype.running_=!1,tracking.TrackerTask.prototype.getTracker=function(){return this.tracker_},tracking.TrackerTask.prototype.inRunning=function(){return this.running_},tracking.TrackerTask.prototype.setRunning=function(t){this.running_=t},tracking.TrackerTask.prototype.setTracker=function(t){this.tracker_=t},tracking.TrackerTask.prototype.run=function(){var t=this;if(!this.inRunning())return this.setRunning(!0),this.reemitTrackEvent_=function(r){t.emit("track",r)},this.tracker_.on("track",this.reemitTrackEvent_),this.emit("run"),this},tracking.TrackerTask.prototype.stop=function(){if(this.inRunning())return this.setRunning(!1),this.emit("stop"),this.tracker_.removeListener("track",this.reemitTrackEvent_),this},function(){tracking.ColorTracker=function(t){tracking.ColorTracker.base(this,"constructor"),"string"===typeof t&&(t=[t]),t&&(t.forEach(function(t){if(!tracking.ColorTracker.getColor(t))throw new Error('Color not valid, try `new tracking.ColorTracker("magenta")`.')}),this.setColors(t))},tracking.inherits(tracking.ColorTracker,tracking.Tracker),tracking.ColorTracker.knownColors_={},tracking.ColorTracker.neighbours_={},tracking.ColorTracker.registerColor=function(t,r){tracking.ColorTracker.knownColors_[t]=r},tracking.ColorTracker.getColor=function(t){return tracking.ColorTracker.knownColors_[t]},tracking.ColorTracker.prototype.colors=["magenta"],tracking.ColorTracker.prototype.minDimension=20,tracking.ColorTracker.prototype.maxDimension=1/0,tracking.ColorTracker.prototype.minGroupSize=30,tracking.ColorTracker.prototype.calculateDimensions_=function(t,r){for(var n=-1,e=-1,i=1/0,a=1/0,o=0;o<r;o+=2){var c=t[o],s=t[o+1];c<i&&(i=c),c>n&&(n=c),s<a&&(a=s),s>e&&(e=s)}return{width:n-i,height:e-a,x:i,y:a}},tracking.ColorTracker.prototype.getColors=function(){return this.colors},tracking.ColorTracker.prototype.getMinDimension=function(){return this.minDimension},tracking.ColorTracker.prototype.getMaxDimension=function(){return this.maxDimension},tracking.ColorTracker.prototype.getMinGroupSize=function(){return this.minGroupSize},tracking.ColorTracker.prototype.getNeighboursForWidth_=function(t){if(tracking.ColorTracker.neighbours_[t])return tracking.ColorTracker.neighbours_[t];var r=new Int32Array(8);return r[0]=4*-t,r[1]=4*-t+4,r[2]=4,r[3]=4*t+4,r[4]=4*t,r[5]=4*t-4,r[6]=-4,r[7]=4*-t-4,tracking.ColorTracker.neighbours_[t]=r,r},tracking.ColorTracker.prototype.mergeRectangles_=function(t){for(var r,n=[],e=this.getMinDimension(),i=this.getMaxDimension(),a=0;a<t.length;a++){var o=t[a];r=!0;for(var c=a+1;c<t.length;c++){var s=t[c];if(tracking.Math.intersectRect(o.x,o.y,o.x+o.width,o.y+o.height,s.x,s.y,s.x+s.width,s.y+s.height)){r=!1;var h=Math.min(o.x,s.x),g=Math.min(o.y,s.y),k=Math.max(o.x+o.width,s.x+s.width),u=Math.max(o.y+o.height,s.y+s.height);s.height=u-g,s.width=k-h,s.x=h,s.y=g;break}}r&&o.width>=e&&o.height>=e&&o.width<=i&&o.height<=i&&n.push(o)}return n},tracking.ColorTracker.prototype.setColors=function(t){this.colors=t},tracking.ColorTracker.prototype.setMinDimension=function(t){this.minDimension=t},tracking.ColorTracker.prototype.setMaxDimension=function(t){this.maxDimension=t},tracking.ColorTracker.prototype.setMinGroupSize=function(t){this.minGroupSize=t},tracking.ColorTracker.prototype.track=function(t,r,n){var e=this,i=this.getColors();if(!i)throw new Error('Colors not specified, try `new tracking.ColorTracker("magenta")`.');var a=[];i.forEach(function(i){a=a.concat(e.trackColor_(t,r,n,i))}),this.emit("track",{data:a})},tracking.ColorTracker.prototype.trackColor_=function(n,e,i,a){var o,c,s,h,g,k=tracking.ColorTracker.knownColors_[a],u=new Int32Array(n.length>>2),f=new Int8Array(n.length),l=this.getMinGroupSize(),p=this.getNeighboursForWidth_(e),v=new Int32Array(n.length),m=[],y=-4;if(!k)return m;for(var d=0;d<i;d++)for(var w=0;w<e;w++)if(!f[y+=4]){for(o=0,g=-1,v[++g]=y,v[++g]=d,v[++g]=w,f[y]=1;g>=0;)if(s=v[g--],c=v[g--],k(n[h=v[g--]],n[h+1],n[h+2],n[h+3],h,c,s)){u[o++]=s,u[o++]=c;for(var T=0;T<p.length;T++){var C=h+p[T],_=c+t[T],E=s+r[T];!f[C]&&_>=0&&_<i&&E>=0&&E<e&&(v[++g]=C,v[++g]=_,v[++g]=E,f[C]=1)}}if(o>=l){var M=this.calculateDimensions_(u,o);M&&(M.color=a,m.push(M))}}return this.mergeRectangles_(m)},tracking.ColorTracker.registerColor("cyan",function(t,r,n){var e=t-0,i=r-255,a=n-255;return r-t>=50&&n-t>=70||e*e+i*i+a*a<6400}),tracking.ColorTracker.registerColor("magenta",function(t,r,n){var e=t-255,i=r-0,a=n-255;return t-r>=50&&n-r>=50||e*e+i*i+a*a<19600}),tracking.ColorTracker.registerColor("yellow",function(t,r,n){var e=t-255,i=r-255,a=n-0;return t-n>=50&&r-n>=50||e*e+i*i+a*a<1e4});var t=new Int32Array([-1,-1,0,1,1,1,0,-1]),r=new Int32Array([0,1,1,1,0,-1,-1,-1])}(),tracking.ObjectTracker=function(t){tracking.ObjectTracker.base(this,"constructor"),t&&(Array.isArray(t)||(t=[t]),Array.isArray(t)&&t.forEach(function(r,n){if("string"===typeof r&&(t[n]=tracking.ViolaJones.classifiers[r]),!t[n])throw new Error('Object classifier not valid, try `new tracking.ObjectTracker("face")`.')})),this.setClassifiers(t)},tracking.inherits(tracking.ObjectTracker,tracking.Tracker),tracking.ObjectTracker.prototype.edgesDensity=.2,tracking.ObjectTracker.prototype.initialScale=1,tracking.ObjectTracker.prototype.scaleFactor=1.25,tracking.ObjectTracker.prototype.stepSize=1.5,tracking.ObjectTracker.prototype.getClassifiers=function(){return this.classifiers},tracking.ObjectTracker.prototype.getEdgesDensity=function(){return this.edgesDensity},tracking.ObjectTracker.prototype.getInitialScale=function(){return this.initialScale},tracking.ObjectTracker.prototype.getScaleFactor=function(){return this.scaleFactor},tracking.ObjectTracker.prototype.getStepSize=function(){return this.stepSize},tracking.ObjectTracker.prototype.track=function(t,r,n){var e=this,i=this.getClassifiers();if(!i)throw new Error('Object classifier not specified, try `new tracking.ObjectTracker("face")`.');var a=[];i.forEach(function(i){a=a.concat(tracking.ViolaJones.detect(t,r,n,e.getInitialScale(),e.getScaleFactor(),e.getStepSize(),e.getEdgesDensity(),i))}),this.emit("track",{data:a})},tracking.ObjectTracker.prototype.setClassifiers=function(t){this.classifiers=t},tracking.ObjectTracker.prototype.setEdgesDensity=function(t){this.edgesDensity=t},tracking.ObjectTracker.prototype.setInitialScale=function(t){this.initialScale=t},tracking.ObjectTracker.prototype.setScaleFactor=function(t){this.scaleFactor=t},tracking.ObjectTracker.prototype.setStepSize=function(t){this.stepSize=t}}}]);