var t=null;try{var g="undefined"!=typeof module&&"function"==typeof module.require&&module.require("worker_threads")||"function"==typeof __non_webpack_require__&&__non_webpack_require__("worker_threads")||"function"==typeof require&&require("worker_threads");t=g.Worker}catch(t){}function e(g,e,s){var i=void 0===e?null:e,o=function(t,g){return Buffer.from(t,"base64").toString(g?"utf16":"utf8")}(g,void 0!==s&&s),I=o.indexOf("\n",10)+1,h=o.substring(I)+(i?"//# sourceMappingURL="+i:"");return function(g){return new t(h,Object.assign({},g,{eval:!0}))}}function s(t,g,e){var s=void 0===g?null:g,i=function(t,g){var e=atob(t);if(g){for(var s=new Uint8Array(e.length),i=0,o=e.length;i<o;++i)s[i]=e.charCodeAt(i);return String.fromCharCode.apply(null,new Uint16Array(s.buffer))}return e}(t,void 0!==e&&e),o=i.indexOf("\n",10)+1,I=i.substring(o)+(s?"//# sourceMappingURL="+s:""),h=new Blob([I],{type:"application/javascript"});return URL.createObjectURL(h)}var i="[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0);var o,I,h,C=(o="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgLy8gY29sb3VyIGluZGljZXMgcGVyIHBpeGVsCiAgY29uc3QgUiA9IDA7CiAgY29uc3QgRyA9IDE7CiAgY29uc3QgQiA9IDI7CiAgY29uc3QgQSA9IDM7CgogIGNvbnN0IFBJWEVMID0gNDsKICBjb25zdCBUUkFOU1BBUkVOVCA9IDA7CiAgY29uc3QgT1BBUVVFID0gMjU1OwoKICBjb25zdCBoZXhUb1JnYiA9IChoZXhDb2xvcikgPT4gewogICAgLy8gU2luY2UgaW5wdXQgdHlwZSBjb2xvciBwcm92aWRlcyBoZXggYW5kIEltYWdlRGF0YSBhY2NlcHRzIFJHQiBuZWVkIHRvIHRyYW5zZm9ybQogICAgY29uc3QgbSA9IGhleENvbG9yLm1hdGNoKC9eIz8oW1xkYS1mXXsyfSkoW1xkYS1mXXsyfSkoW1xkYS1mXXsyfSkkL2kpOwogICAgcmV0dXJuIFsKICAgICAgcGFyc2VJbnQobVsxXSwgMTYpLAogICAgICBwYXJzZUludChtWzJdLCAxNiksCiAgICAgIHBhcnNlSW50KG1bM10sIDE2KSwKICAgIF07CiAgfTsKCiAgLy8gUGl4ZWwgY29sb3IgZXF1YWxzIGNvbXAgY29sb3I/CiAgY29uc3QgY29sb3JNYXRjaGVyID0gKGRhdGEsIGNvbXBSLCBjb21wRywgY29tcEIsIGNvbXBBKSA9PiAocGl4ZWxQb3MpID0+ICgKICAgIGRhdGFbcGl4ZWxQb3MgKyBSXSA9PT0gY29tcFIKICAgICYmIGRhdGFbcGl4ZWxQb3MgKyBHXSA9PT0gY29tcEcKICAgICYmIGRhdGFbcGl4ZWxQb3MgKyBCXSA9PT0gY29tcEIKICAgICYmIGRhdGFbcGl4ZWxQb3MgKyBBXSA9PT0gY29tcEEKICApOwoKICBjb25zdCBjb2xvck1hdGNoZXJJZ25vcmVBbHBoYSA9IChkYXRhLCAuLi5hcmdzKSA9PiB7CiAgICBjb25zdCBtYXRjaCA9IGNvbG9yTWF0Y2hlcihkYXRhLCAuLi5hcmdzKTsKCiAgICByZXR1cm4gKHBpeGVsUG9zKSA9PiB7CiAgICAgIGNvbnN0IGFscGhhID0gZGF0YVtwaXhlbFBvcyArIEFdOwogICAgICBpZiAoYWxwaGEgIT09IFRSQU5TUEFSRU5UICYmIGFscGhhICE9PSBPUEFRVUUpIHsKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgICAgfQoKICAgICAgcmV0dXJuIG1hdGNoKHBpeGVsUG9zKTsKICAgIH07CiAgfTsKCiAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi8KICBjb25zdCBwaXhlbFBhaW50ZXIgPSAoZGF0YSwgZmlsbFIsIGZpbGxHLCBmaWxsQiwgZmlsbEEpID0+IChwaXhlbFBvcykgPT4gewogICAgZGF0YVtwaXhlbFBvcyArIFJdID0gZmlsbFI7CiAgICBkYXRhW3BpeGVsUG9zICsgR10gPSBmaWxsRzsKICAgIGRhdGFbcGl4ZWxQb3MgKyBCXSA9IGZpbGxCOwogICAgZGF0YVtwaXhlbFBvcyArIEFdID0gZmlsbEE7CiAgfTsKCiAgY29uc3QgcGl4ZWxQYWludGVyTWl4QWxwaGEgPSAoZGF0YSwgZmlsbFIsIGZpbGxHLCBmaWxsQiwgZmlsbEEpID0+IChwaXhlbFBvcykgPT4gewogICAgY29uc3Qgb2xkQWxwaGEgPSBkYXRhW3BpeGVsUG9zICsgQV07CiAgICAvLyBjYWxjdWxhdGUgcmF0aW8gb2Ygb2xkIHZzLiBuZXcgY29sb3VyIHRvIGJlIGFscGhhLW1peGVkCiAgICBjb25zdCBtaXhBbHBoYU9sZCA9IG9sZEFscGhhID09PSBPUEFRVUUKICAgICAgPyBUUkFOU1BBUkVOVAogICAgICA6IG9sZEFscGhhIC8gT1BBUVVFOwogICAgY29uc3QgbWl4QWxwaGFOZXcgPSAxIC0gbWl4QWxwaGFPbGQ7CgogICAgY29uc3QgcGFpbnQgPSBwaXhlbFBhaW50ZXIoCiAgICAgIGRhdGEsCiAgICAgIE1hdGguZmxvb3IobWl4QWxwaGFPbGQgKiBkYXRhW3BpeGVsUG9zICsgUl0gKyBtaXhBbHBoYU5ldyAqIGZpbGxSKSwKICAgICAgTWF0aC5mbG9vcihtaXhBbHBoYU9sZCAqIGRhdGFbcGl4ZWxQb3MgKyBHXSArIG1peEFscGhhTmV3ICogZmlsbEcpLAogICAgICBNYXRoLmZsb29yKG1peEFscGhhT2xkICogZGF0YVtwaXhlbFBvcyArIEJdICsgbWl4QWxwaGFOZXcgKiBmaWxsQiksCiAgICAgIGZpbGxBLAogICAgKTsKCiAgICByZXR1cm4gcGFpbnQocGl4ZWxQb3MpOwogIH07CiAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqLwoKICAvKioKICAgKiBTdGFjay0gYW5kIHNwYW4tYmFzZWQgZmxvb2QgZmlsbCBhbGdvcml0aG0KICAgKiBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRmxvb2RfZmlsbCNTcGFuX2ZpbGxpbmcKICAgKgogICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0CiAgICogQHJldHVybnMge1VJbnQ4Q2xhbXBlZEFycmF5fSB0aGUgbW9kaWZpZWQgcGl4ZWxzCiAgICovCiAgY29uc3QgZmxvb2RGaWxsID0gKHsKICAgIGltYWdlLAogICAgd2lkdGgsCiAgICBoZWlnaHQsCiAgICBjb2xvciwKICAgIGdsb2JhbEFscGhhLAogICAgc3RhcnRYLAogICAgc3RhcnRZLAogICAgc3RhcnRDb2xvciwKICB9KSA9PiB7CiAgICBjb25zdCByb3cgPSB3aWR0aCAqIFBJWEVMOwogICAgLy8gbWFrZSBzdXJlIHN0YXJ0IGNvb3JkaW5hdGVzIGFyZSBpbnRlZ2VycwogICAgY29uc3Qgc3RhcnRYQ29vcmQgPSBNYXRoLmZsb29yKHN0YXJ0WCk7CiAgICBjb25zdCBzdGFydFlDb29yZCA9IE1hdGguZmxvb3Ioc3RhcnRZKTsKICAgIC8vIGhleCBuZWVkcyB0byBiZSB0cmFzZm9ybWVkIHRvIHJnYiBzaW5jZSBJbWFnZURhdGEgdXNlcyBSR0IKICAgIGNvbnN0IGZpbGxDb2xvciA9IGhleFRvUmdiKGNvbG9yKTsKICAgIC8vIGVuc3VyZSBhbHBoYSBpcyBhbiBpbnRlZ2VyIGluIHRoZSByYW5nZSBvZiAwLTI1NQogICAgY29uc3QgZmlsbEFscGhhID0gTWF0aC5mbG9vcihNYXRoLm1heCgwLCBNYXRoLm1pbihnbG9iYWxBbHBoYSAqIE9QQVFVRSwgT1BBUVVFKSkpOwogICAgLy8gd2UgbmVlZCBkaWZmZXJlbnQgYmVoYXZpb3VyIGluIGNhc2Ugd2UncmUgZmlsbGluZyBhIG5vbi1vcGFxdWUgYXJlYQogICAgY29uc3QgZmlsbGluZ05vbk9wYXF1ZSA9IHN0YXJ0Q29sb3JbQV0gIT09IE9QQVFVRTsKICAgIC8vIG91ciBwaXhlbCBwYWludGVyIHNob3VsZCBvbmx5IG1peCBhbHBoYSBpZiB3ZSdyZSBzdGFydGluZyBpbiBhIG5vbi1vcGFxdWUgYXJlYQogICAgY29uc3QgcGl4ZWxQYWludGVyT2ZDaG9pY2UgPSBmaWxsaW5nTm9uT3BhcXVlID8gcGl4ZWxQYWludGVyTWl4QWxwaGEgOiBwaXhlbFBhaW50ZXI7CiAgICBjb25zdCBwYWludFBpeGVsID0gcGl4ZWxQYWludGVyT2ZDaG9pY2UoaW1hZ2UsIC4uLmZpbGxDb2xvciwgZmlsbEFscGhhKTsKICAgIC8vIHdoZW4gbG9va2luZyBmb3IgdGhlIHNwYW4gc3RhcnQsIHdlIGlnbm9yZSB0aGUgYWxwaGEgdmFsdWUgaWYgZmlsbGluZyBhIG5vbi1vcGFxdWUgYXJlYQogICAgLy8gdGhpcyBlbnN1cmVzIHRoYXQgd2UnbGwgbWl4IHRoZSBmaWxsIGludG8gYW50aWFsaWFzZWQgZWRnZXMKICAgIGNvbnN0IGNvbG9yTWF0Y2hlclNwYW5TdGFydCA9IGZpbGxpbmdOb25PcGFxdWUgPyBjb2xvck1hdGNoZXJJZ25vcmVBbHBoYSA6IGNvbG9yTWF0Y2hlcjsKICAgIGNvbnN0IG1hdGNoU3BhblN0YXJ0Q29sb3IgPSBjb2xvck1hdGNoZXJTcGFuU3RhcnQoaW1hZ2UsIC4uLnN0YXJ0Q29sb3IpOwogICAgLy8gZm9yIGFsbCBvdGhlciBjYXNlcywgd2UgbG9vayBmb3IgdGhlIHN0YXJ0IGNvbG91ciBleGFjdGx5CiAgICBjb25zdCBtYXRjaFN0YXJ0Q29sb3IgPSBjb2xvck1hdGNoZXJJZ25vcmVBbHBoYShpbWFnZSwgLi4uc3RhcnRDb2xvcik7CgogICAgLy8gY2hlY2sgaWYgd2UncmUgdHJ5aW5nIHRvIGZpbGwgd2l0aCB0aGUgc2FtZSBjb2xvdXIsIGlmIHNvLCBzdG9wCiAgICBjb25zdCBtYXRjaEZpbGxDb2xvciA9IGNvbG9yTWF0Y2hlcihpbWFnZSwgLi4uWy4uLmZpbGxDb2xvciwgT1BBUVVFXSk7CiAgICBpZiAobWF0Y2hGaWxsQ29sb3IoKHN0YXJ0WUNvb3JkICogd2lkdGggKyBzdGFydFhDb29yZCkgKiBQSVhFTCkpIHsKICAgICAgcmV0dXJuIGltYWdlOwogICAgfQogICAgLy8gYmVnaW4gd2l0aCBvdXIgc3RhcnQgcGl4ZWwKICAgIGNvbnN0IHBpeGVsU3RhY2sgPSBbW3N0YXJ0WENvb3JkLCBzdGFydFlDb29yZF1dOwogICAgd2hpbGUgKHBpeGVsU3RhY2subGVuZ3RoKSB7CiAgICAgIGNvbnN0IFt4LCB5XSA9IHBpeGVsU3RhY2sucG9wKCk7CiAgICAgIC8vIGNvbHVtbiBwb3NpdGlvbiBpcyBpbiBjYXJ0ZXNpYW4gc3BhY2UgKHgseSkKICAgICAgbGV0IGNvbHVtblBvc2l0aW9uID0geTsKICAgICAgLy8gcGl4ZWwgcG9zaXRpb24gaXMgaW4gMUQgc3BhY2UgKHRoZSByYXcgaW1hZ2UgZGF0YSBVSW50OENsYW1wZWRBcnJheSkKICAgICAgbGV0IHBpeGVsUG9zID0gKGNvbHVtblBvc2l0aW9uICogd2lkdGggKyB4KSAqIFBJWEVMOwogICAgICAvLyBzdGFydCBtb3ZpbmcgZGlyZWN0bHkgdXAgZnJvbSBvdXIgc3RhcnQgcG9zaXRpb24KICAgICAgLy8gdW50aWwgd2UgZmluZCBhIGRpZmZlcmVudCBjb2xvdXIgdG8gdGhlIHN0YXJ0IGNvbG91cgogICAgICAvLyB0aGlzIGlzIHRoZSBiZWdpbm5pbmcgb2Ygb3VyIHNwYW4KICAgICAgd2hpbGUgKGNvbHVtblBvc2l0aW9uLS0gPj0gMCAmJiBtYXRjaFNwYW5TdGFydENvbG9yKHBpeGVsUG9zKSkgewogICAgICAgIHBpeGVsUG9zIC09IHJvdzsKICAgICAgfQogICAgICAvLyBtb3ZlIG9uZSByb3cgZG93biAodG9wbW9zdCBwaXhlbCBvZiBmaWxsYWJsZSBhcmVhKQogICAgICBwaXhlbFBvcyArPSByb3c7CgogICAgICBsZXQgcmVhY2hMZWZ0ID0gZmFsc2U7CiAgICAgIGxldCByZWFjaFJpZ2h0ID0gZmFsc2U7CiAgICAgIC8vIGZvciBlYWNoIHJvdywgY2hlY2sgaWYgdGhlIGZpcnN0IHBpeGVsIHN0aWxsIGhhcyB0aGUgc3RhcnQgY29sb3VyCiAgICAgIC8vIGlmIGl0IGRvZXMsIHBhaW50IGl0IGFuZCBwdXNoIHN1cnJvdW5kaW5nIHBpeGVscyB0byB0aGUgc3RhY2sgb2YgcGl4ZWxzIHRvIGNoZWNrCiAgICAgIHdoaWxlICgrK2NvbHVtblBvc2l0aW9uIDwgaGVpZ2h0IC0gMSAmJiBtYXRjaFN0YXJ0Q29sb3IocGl4ZWxQb3MpKSB7CiAgICAgICAgcGFpbnRQaXhlbChwaXhlbFBvcyk7CiAgICAgICAgLy8gY2hlY2sgdGhlIHBpeGVsIHRvIHRoZSBsZWZ0CiAgICAgICAgaWYgKHggPiAwKSB7CiAgICAgICAgICBpZiAobWF0Y2hTdGFydENvbG9yKHBpeGVsUG9zIC0gUElYRUwpKSB7CiAgICAgICAgICAgIGlmICghcmVhY2hMZWZ0KSB7CiAgICAgICAgICAgICAgcGl4ZWxTdGFjay5wdXNoKFt4IC0gMSwgY29sdW1uUG9zaXRpb25dKTsKICAgICAgICAgICAgICByZWFjaExlZnQgPSB0cnVlOwogICAgICAgICAgICB9CiAgICAgICAgICB9IGVsc2UgaWYgKHJlYWNoTGVmdCkgewogICAgICAgICAgICByZWFjaExlZnQgPSBmYWxzZTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgLy8gY2hlY2sgdGhlIHBpeGVsIHRvIHRoZSByaWdodAogICAgICAgIGlmICh4IDwgd2lkdGggLSAxKSB7CiAgICAgICAgICBpZiAobWF0Y2hTdGFydENvbG9yKHBpeGVsUG9zICsgUElYRUwpKSB7CiAgICAgICAgICAgIGlmICghcmVhY2hSaWdodCkgewogICAgICAgICAgICAgIHBpeGVsU3RhY2sucHVzaChbeCArIDEsIGNvbHVtblBvc2l0aW9uXSk7CiAgICAgICAgICAgICAgcmVhY2hSaWdodCA9IHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICAgIH0gZWxzZSBpZiAocmVhY2hSaWdodCkgewogICAgICAgICAgICByZWFjaFJpZ2h0ID0gZmFsc2U7CiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIC8vIG1vdmUgdG8gdGhlIG5leHQgcm93CiAgICAgICAgcGl4ZWxQb3MgKz0gcm93OwogICAgICB9CiAgICB9CgogICAgcmV0dXJuIGltYWdlOwogIH07CgogIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICh7IGRhdGEgfSkgPT4gewogICAgY29uc3QgcmVzdWx0ID0gZmxvb2RGaWxsKGRhdGEpOwoKICAgIGdsb2JhbFRoaXMucG9zdE1lc3NhZ2UoeyB0eXBlOiAnZmlsbC1yZXN1bHQnLCByZXN1bHQgfSwgW3Jlc3VsdC5idWZmZXJdKTsKICB9KTsKCn0pKCk7Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPXdvcmtlci5qcy5tYXAKCg==",I=null,h=!1,i?e(o,I,h):function(t,g,e){var i;return function(o){return i=i||s(t,g,e),new Worker(i,o)}}(o,I,h));class n{constructor(t,g){this.x=t,this.y=g}set(t,g){this.x=t,this.y=g}}class c extends n{constructor(){super(0,0),this.down=!1,this.previous=new n(0,0)}}class a{constructor(){this.eventListeners=new Map}addEventListener(t,g){const e=this.eventListeners.get(t)||new Set;e.add(g),this.eventListeners.set(t,e)}removeEventListener(t,g){const e=this.eventListeners.get(t);e&&e.delete(g)}dispatchEvent(t,g){const e=this.eventListeners.get(t);e&&[...e].forEach((t=>t(g)))}}const r=(t,g,e,s)=>{const i=(e-t)**2,o=(s-g)**2;return Math.sqrt(i+o)},d=t=>g=>{g.isPrimary&&(g.cancelable&&g.preventDefault(),t(g))},l=Symbol("atrament mode - draw"),A=Symbol("atrament mode - erase"),G=Symbol("atrament mode - fill"),b=Symbol("atrament mode - disabled"),B=[l,A],m=["weight","smoothing","adaptiveStroke","mode"];class v extends a{adaptiveStroke=!0;canvas;recordStrokes=!1;smoothing=.85;thickness=2;#t;#g=!1;#e=!1;#s=[];#i=new C;#o=12;#I=l;#h=new c;#C;#n=[];#c=2;#a=2;constructor(t,g={}){if("undefined"==typeof window)throw new Error("atrament: looks like we're not running in a browser");super(),this.canvas=v.#r(t,g),this.#t=v.#d(this.canvas,g),this.#l(),this.#C=(({canvas:t,move:g,down:e,up:s})=>{const i=d(g),o=d(e),I=d(s);return t.addEventListener("pointermove",i),t.addEventListener("pointerdown",o),document.addEventListener("pointerup",I),()=>{t.removeEventListener("pointermove",i),t.removeEventListener("pointerdown",o),document.removeEventListener("pointerup",I)}})({canvas:this.canvas,move:this.#A.bind(this),down:this.#G.bind(this),up:this.#b.bind(this)}),m.forEach((t=>{void 0!==g[t]&&(this[t]=g[t])}))}beginStroke(t,g){this.#t.beginPath(),this.#t.moveTo(t,g),this.recordStrokes&&(this.strokeTimestamp=performance.now()),this.dispatchEvent("strokestart",{x:t,y:g})}endStroke(t,g){this.#t.closePath(),this.dispatchEvent("strokeend",{x:t,y:g}),this.recordStrokes&&this.dispatchEvent("strokerecorded",{stroke:this.currentStroke}),this.#n=[],delete this.strokeTimestamp}draw(t,g,e,s){this.recordStrokes&&(this.#n.push({point:new n(t,g),time:performance.now()-this.strokeTimestamp}),this.dispatchEvent("segmentdrawn",{stroke:this.currentStroke}));const i=r(t,g,e,s),o=Math.min(.87,this.smoothing+(i-60)/3e3),I=t-(t-e)*o,h=g-(g-s)*o,C=r(I,h,e,s);if(this.adaptiveStroke){const t=(C-1)/49;this.#c=t*(this.#o-this.#a)+this.#a,this.thickness>this.#c?this.thickness-=.5:this.thickness<this.#c&&(this.thickness+=.5),this.#t.lineWidth=this.thickness}else this.#t.lineWidth=this.#a;return this.#t.quadraticCurveTo(e,s,I,h),this.#t.stroke(),{x:I,y:h}}clear(){this.#g&&(this.#g=!1,this.dispatchEvent("clean"),this.mode===A?(this.mode=l,this.#t.clearRect(-10,-10,this.canvas.width+20,this.canvas.height+20),this.mode=A):this.#t.clearRect(-10,-10,this.canvas.width+20,this.canvas.height+20))}destroy(){this.clear(),this.#C?.()}get color(){return this.#t.strokeStyle}set color(t){if("string"!=typeof t)throw new Error("atrament: wrong argument type setting color");this.#t.strokeStyle=t}get weight(){return this.#a}set weight(t){if("number"!=typeof t)throw new Error("atrament: wrong argument type setting weight");this.thickness=t,this.#o=t+10,this.#c=t,this.#a=t}get mode(){return this.#I}set mode(t){switch(t){case A:this.#I=A,this.#t.globalCompositeOperation="destination-out";break;case G:this.#I=G,this.#t.globalCompositeOperation="source-over";break;case b:this.#I=b;break;case l:this.#I=l,this.#t.globalCompositeOperation="source-over";break;default:throw new Error("atrament: mode is not one of the allowed modes.")}}get currentStroke(){return{segments:this.#n.slice(),mode:this.mode,weight:this.weight,smoothing:this.smoothing,color:this.color,adaptiveStroke:this.adaptiveStroke}}get dirty(){return this.#g}static#r(t,g){let e;if(t instanceof window.Node&&"CANVAS"===t.tagName)e=t;else{if("string"!=typeof t)throw new Error(`atrament: can't look for canvas based on '${t}'`);e=document.querySelector(t)}if(!e)throw new Error("atrament: canvas not found");return e.width=g.width||e.width,e.height=g.height||e.height,e.style.touchAction="none",e}static#d(t,g){const e=t.getContext("2d");return e.globalCompositeOperation="source-over",e.globalAlpha=1,e.strokeStyle=g.color||"rgba(0,0,0,1)",e.lineCap="round",e.lineJoin="round",e}#A(t){(t.getCoalescedEvents?.()||[t]).forEach((t=>{const g=t.offsetX,e=t.offsetY;if(this.#h.down&&B.includes(this.#I)){const{x:t,y:s}=this.draw(g,e,this.#h.previous.x,this.#h.previous.y);this.#g||this.#I!==l||g===this.#h.x&&e===this.#h.y||(this.#g=!0,this.dispatchEvent("dirty")),this.#h.set(g,e),this.#h.previous.set(t,s)}else this.#h.set(g,e)}))}#G(t){this.#A(t),this.mode!==G?(this.#h.previous.set(this.#h.x,this.#h.y),this.#h.down=!0,this.beginStroke(this.#h.previous.x,this.#h.previous.y)):this.#B()}#b(t){if(this.#I!==G&&this.#h.down){if(this.#h.down=!1,this.#h.x===t.offsetX&&this.#h.y===t.offsetY&&B.includes(this.mode)){const{x:t,y:g}=this.draw(this.#h.x,this.#h.y,this.#h.previous.x,this.#h.previous.y);this.#h.previous.set(t,g)}this.endStroke(this.#h.x,this.#h.y)}}#l(){this.#i.addEventListener("message",(({data:t})=>{if("fill-result"===t.type){this.#e=!1,this.dispatchEvent("fillend",{});const g=new ImageData(t.result,this.canvas.width,this.canvas.height);this.#t.putImageData(g,0,0),this.#s.length>0&&this.#m(this.#s.shift())}}))}#B(){const{x:t,y:g}=this.#h;this.dispatchEvent("fillstart",{x:t,y:g});const e=Array.from(this.#t.getImageData(t,g,1,1).data),s={color:this.color,globalAlpha:this.#t.globalAlpha,width:this.canvas.width,height:this.canvas.height,startColor:e,startX:t,startY:g};this.#e?this.#s.push(s):(this.#e=!0,this.#m(s))}#m(t){const g=this.#t.getImageData(0,0,this.canvas.width,this.canvas.height).data;this.#i.postMessage({image:g,...t},[g.buffer])}}export{b as MODE_DISABLED,l as MODE_DRAW,A as MODE_ERASE,G as MODE_FILL,v as default};
