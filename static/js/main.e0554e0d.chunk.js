(this["webpackJsonpdata-struct"]=this["webpackJsonpdata-struct"]||[]).push([[0],{15:function(e,t,n){},36:function(e,t,n){},40:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(2),l=n(18),r=n.n(l),s=(n(36),n(5)),c=n(12),o=n(7);n(15);var h=function(e){var t,n,l,r,c=Object(i.useRef)(null),o=window.innerWidth,h=window.innerHeight,d=function(a){o>=768&&h>998?(t=o/75,n=h/50,l=o/15,r=o/15):o>=768?(t=o/20,n=h/50,l=o/20,r=o/20):(t=o/20,n=h/50,l=o/15,r=o/15),a.fillStyle="#000000";for(var i=0;i<e.data.length;i++)a.fillStyle="black",a.strokeStyle="yellow",a.lineWidth=3,a.beginPath(),a.rect(t+i*l,n,l,r),a.stroke(),a.fill(),a.fillStyle="yellow",a.font=o>=768?"2.5vh Arial":"2vh Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(e.data[i],t+.5*l+i*l,n+.5*r),a.font=o>=768?"2vh Arial":"1.5vh Arial",a.fillStyle="black",a.fillText(i,t+.5*l+i*l,n+1.3*r)};return Object(i.useEffect)((function(){var e=c.current,t=e.getContext("2d");o>996&h<996||o>=768&h>=768?(e.height=.2*window.innerHeight,e.width=window.innerWidth):o<996&h>996?(e.height=.08*window.innerHeight,e.width=window.innerWidth):o<540&&(e.height=.1*window.innerHeight,e.width=2*window.innerWidth),t.clearRect(0,0,e.width,e.height),d(t)}),[d]),Object(a.jsx)("canvas",Object(s.a)({className:"canvas",ref:c},e))},d=n(55),f=n(56),u=n(57),j=n(58),b=function(){for(var e=[],t=0;t<10;t++)e.push(Math.floor(20*Math.random()));var n=Object(i.useState)("push"),l=Object(o.a)(n,2),r=l[0],b=l[1],p=Object(i.useState)(e),g=Object(o.a)(p,2),v=g[0],O=g[1],m=Object(i.useState)(" "),x=Object(o.a)(m,2),y=x[0],w=x[1],N=Object(i.useState)({index:null,value:null}),k=Object(o.a)(N,2),T=k[0],S=k[1],C=function(e){e.preventDefault(),e.target.value?w(e.target.value):w(" ")};return Object(i.useEffect)((function(){console.log("arr: ",v),console.log("insformData",T)}),[v,y,,T,r]),Object(a.jsxs)("div",{className:"pt-2 p-1 px-md-5 py-md-3",children:[Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-3",children:Object(a.jsx)("h1",{className:"hdr",children:"ARRAYS"})}),Object(a.jsx)(h,{data:v}),Object(a.jsx)(d.a,{color:"success",className:"btn",onClick:function(e){e.preventDefault(),b("push")},children:" Push"}),Object(a.jsx)(d.a,{color:"warning",className:"btn",onClick:function(e){e.preventDefault(),b("pop")},children:" Pop"}),Object(a.jsx)(d.a,{color:"info",className:"btn",onClick:function(e){e.preventDefault(),b("insert")},children:" Insert"}),Object(a.jsx)(d.a,{color:"danger",className:"btn",onClick:function(e){e.preventDefault(),b("delete")},children:" Delete"}),Object(a.jsx)(d.a,{color:"secondary",className:"btn",onClick:function(e){e.preventDefault(),b("shift")},children:" Shift"}),Object(a.jsx)(d.a,{color:"primary",className:"btn",onClick:function(e){e.preventDefault(),b("unshift")},children:" Unshift"}),"push"===r&&Object(a.jsxs)(f.a,{className:"form",children:[Object(a.jsx)(u.a,{children:"Value to push: "}),Object(a.jsx)(j.a,{className:"input",onChange:C,value:y,type:"number"}),Object(a.jsx)(d.a,{className:"btn enterBtn",color:"dark",onClick:function(e){e.preventDefault(),O([].concat(Object(c.a)(v),[y])),w("")},children:"ENTER"})]}),"pop"===r&&Object(a.jsxs)("div",{children:[Object(a.jsx)(u.a,{className:"btnLabel m-1",children:"Press Enter to pop: "}),Object(a.jsx)(d.a,{className:"btn enterBtn m-1",color:"dark",onClick:function(e){e.preventDefault();var t=v;t.pop(),O(Object(c.a)(t)),w("")},children:"ENTER"})]}),"insert"===r&&Object(a.jsx)("div",{children:Object(a.jsxs)(f.a,{className:"form",children:[Object(a.jsx)(u.a,{className:"btnLabel",children:"Index to Insert: "}),Object(a.jsx)(j.a,{onChange:function(e){e.preventDefault(),e.target.value?S(Object(s.a)(Object(s.a)({},T),{},{index:e.target.value})):S(Object(s.a)(Object(s.a)({},T),{},{index:" "}))},value:y.index,type:"number"}),Object(a.jsx)(u.a,{children:"Value to Insert: "}),Object(a.jsx)(j.a,{className:"input",onChange:function(e){e.preventDefault(),e.target.value?S(Object(s.a)(Object(s.a)({},T),{},{value:e.target.value})):S(Object(s.a)(Object(s.a)({},T),{},{value:" "}))},value:y.value,type:"number"}),Object(a.jsx)(d.a,{className:"btn enterBtn",color:"dark",onClick:function(e){if(e.preventDefault(),T.index<v.length&&T.value){console.log("INSHANDLER");var t=v;t.splice(T.index,0,T.value),console.log(t),O(Object(c.a)(t)),w("")}},children:"ENTER"})]})}),"delete"===r&&Object(a.jsx)("div",{children:Object(a.jsxs)(f.a,{className:"form",children:[Object(a.jsx)(u.a,{className:"btnLabel",children:"Index to Delete: "}),Object(a.jsx)(j.a,{className:"input",onChange:C,value:y,type:"number"}),Object(a.jsx)(d.a,{className:"btn enterBtn",color:"dark",onClick:function(e){if(e.preventDefault(),y>=0&&y<v.length){var t=v;t.splice(y,1),O(Object(c.a)(t)),w("")}},children:"ENTER"})]})}),"shift"===r&&Object(a.jsxs)("div",{className:"justify-content-center",children:[Object(a.jsx)(u.a,{className:"btnLabel m-1 ",children:"Press Enter to shift: "}),Object(a.jsx)(d.a,{className:"btn enterBtn m-1",color:"dark",onClick:function(e){if(e.preventDefault(),y>=0&&y<v.length){var t=v;t.shift(),O(Object(c.a)(t)),w("")}},children:"ENTER"})]}),"unshift"===r&&Object(a.jsx)("div",{children:Object(a.jsxs)(f.a,{className:"form",children:[Object(a.jsx)(u.a,{className:"btnLabel",children:"Value to prepend: "}),Object(a.jsx)(j.a,{className:"input",onChange:C,value:y,type:"number"}),Object(a.jsx)(d.a,{className:"btn enterBtn",color:"dark",onClick:function(e){e.preventDefault();var t=v;t.unshift(y),O(Object(c.a)(t)),w("")},children:"ENTER"})]})}),Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("p",{children:"Arrays are objects in Javascript. Often when they are outside of local functions they are stored in the heap, but this can vary depending on the JavaScript engine implementation. Arrays are a linear arrangement of indices that contain data. They are capable of storing primitive data types, other objects (including arrays), and combinations of both in JavaScript. In a lower level language like C, they can only store one primitive data type and are a fixed size. If arrays are statically allocated, they are stored in the stack memory and the size must be known at compile time. If the size needs to be specified during run-time, the array must be manually dynamically allocated in the heap using the malloc() function, and must be released once it is obsolete by the program using the free() function."}),Object(a.jsxs)("ol",{children:[" ",Object(a.jsx)("strong",{children:"List of Array Functions "}),Object(a.jsx)("li",{children:"Push- inserts new entry after last index of array"}),Object(a.jsx)("li",{children:"Pop - removes and returns last entry in the array"}),Object(a.jsx)("li",{children:"Insert -  inserts new entry at a specified index in the array"}),Object(a.jsx)("li",{children:"Delete - deletes an entry at a specified index in the array"}),Object(a.jsx)("li",{children:"Shift - deletes and returns the first entry (0th index in JS & C) of the array"}),Object(a.jsx)("li",{children:"Unshift - inserts new entry at the beginning of the array "})]}),Object(a.jsx)("p",{children:"Functions that deal with the end of the array like push and pop are executed in consant time O(1). However, functions that deal with the beginning of the array like shift and unshift take linear time O(n) because all of the data needs to be shifted within the array. Insert and delete (splice in JS) can take O(1) to O(n) time depending on their location in the array, the latter time  being closer to the beginning of the array due to shifting."})]})]})},p=function(e){var t=Object(i.useRef)(null),n=window.innerWidth,l=window.innerHeight;console.log(n,l);var r,c,o=["red","deepskyblue","lime","mediumpurple","yellow","salmon","white","white"],h=function(t){r=n/2,c=.1*l;var a=l*(150/900),i=n*(200/900),s=n*(20/900);t.fillStyle="#000000";var h=e.data.root,d=1;!function e(r,c,h){var f,u,j;if(f=i,u=a,j=s,d<5?t.font=n>=768&&l>=998?"1.5vh Impact":n>=768?"2.5vh Impact":"2vh Impact":n>=768&&l>=998?(t.font="1.1vh Impact",j*=.5):n>=768?(t.font="2vh Impact",j*=.5):(t.font="1.3vh Impact",j*=.75),t.beginPath(),t.arc(c,h,j,0*Math.PI,2*Math.PI),t.fillStyle=o[d-1],t.fill(),t.stroke(),t.textAlign="center",t.textBaseline="middle",t.fillStyle="black",t.fillText(r.val,c,h),r.left){var b=-u/(f=i/d),p=-b*c+h,g=Math.pow(b,2)+1,v=-2*(c+b*h-b*p),O=c*c+h*h+p*p-j*j-2*p*h,m=(-v-Math.sqrt(v*v-4*g*O))/(2*g),x=(-v+Math.sqrt(Math.pow(v,2)-4*g*O))/(2*g);if(d>=4){O=c*c+h*h+p*p-s*s-2*p*h;var y=c*c+h*h+p*p-j*j/4-2*p*h;x=(-v+Math.sqrt(Math.pow(v,2)-4*g*y))/(2*g)}var w=m,N=b*m+p,k=x-f,T=b*(x-f)+p;t.beginPath(),t.moveTo(w,N),t.lineTo(k,T),t.stroke(),d++,e(r.left,c-f,h+u)}if(r.right){var S=u/(f=i/d),C=-S*c+h,E=Math.pow(S,2)+1,I=-2*(c+S*h-S*C),D=c*c+h*h+C*C-j*j-2*C*h,R=(-I-Math.sqrt(I*I-4*E*D))/(2*E),L=(-I+Math.sqrt(Math.pow(I,2)-4*E*D))/(2*E);if(d>=4){D=c*c+h*h+C*C-s*s-2*C*h;var A=c*c+h*h+C*C-j*j/4-2*C*h;R=(-I+Math.sqrt(Math.pow(I,2)-4*E*A))/(2*E)}var B=L,P=S*L+C,q=R+f,M=S*(R+f)+C;t.beginPath(),t.moveTo(B,P),t.lineTo(q,M),t.stroke(),d++,e(r.right,c+f,h+u)}d--}(h,r,c)};return Object(i.useEffect)((function(){var e=t.current,a=e.getContext("2d");e.width=1*n,e.height=1200*l/900,a.clearRect(0,0,e.width,e.height),h(a)}),[h]),Object(a.jsx)("canvas",Object(s.a)({className:"canvas",ref:t},e))};function g(e){this.val=e||null,this.freq=e?this.freq=1:0,this.left=null,this.right=null}function v(){this.tree={},this.tree.root=new g,this.tree.count=0,this.tree.leftCount=0,this.tree.rightCount=0}function O(e,t){return e&&e.left&&(t++,function e(n){n.left&&(t++,e(n.left)),n.right&&(t++,e(n.right))}(e.left)),t}function m(e,t){return e&&e.right&&(t++,function e(n){n.left&&(t++,e(n.left)),n.right&&(t++,e(n.right))}(e.right)),t}v.prototype.insert=function(e){var t=this;this.tree.count++;var n=function e(n,a,i){console.log("INSERT: ",a),n.val?a>n.val?(t.tree.rightCount++,n.right&&n.left?e(n.right,a,n):function(e,t,n,a){var i=new g(t);if(e.right)if(t>e.right.val){var l=e.right;l.right=i,l.left=e,e.right=null,n?n.val>e.val?n.left=l:n.right=l:a.root=l}else i.left=e,i.right=e.right,e.right=null,n?n.val>e.val?n.left=i:n.right=i:a.root=i;else e.right=i}(n,a,i,t.tree)):a<n.val&&(t.tree.leftCount++,n.right&&n.left?e(n.left,a,n):function(e,t,n,a){var i=new g(t);if(e.left)if(t<e.left.val){var l=e.left;l.left=i,l.right=e,e.left=null,n?n.val>e.val?n.left=l:n.right=l:a.root=l}else i.right=e,i.left=e.left,e.left=null,n?n.val>e.val?n.left=i:n.right=i:a.root=i;else e.left=i}(n,a,i,t.tree)):n.val=a,console.log("after rIns: ",t.tree)};function a(e,t){var a=e,i=a.val,l=function(e){if(e&&e.right){for(var t=e.right,n=e;t.left;)n=t,t=t.left;return{parent:n,leaf:t}}}(e);return l.leaf!==e&&(l.leaf.right?l.parent.left=l.leaf.right:l.parent.left=null,l.leaf.left=a.left,l.leaf.right=a.right,a.right=null,a.left=null),console.log("Node.leafAfter",l.leaf),t&&(console.log("arRight prev bfr",String(t.right.val),String(t.left.val)),t.val>l.leaf.val?t.left=l.leaf:t.right=l.leaf,console.log("arRight prev aftr",String(t.right.val),String(t.left.val))),n(l.leaf,i,t),l.leaf}function i(e,t){var a=e,i=a.val,l=function(e){if(e&&e.left){for(var t=e,n=e.left;n.right;)t=n,n=n.right;return{parent:t,leaf:n}}}(e);return l.leaf!==e&&(l.leaf.left?l.parent.right=l.leaf.left:l.parent.right=null,l.leaf.right=a.right,l.leaf.left=a.left,a.right=null,a.left=null,a=null),console.log("Node.leafAfter",l.leaf),t&&(console.log("arRight prev bfr",String(t.right.val),String(t.left.val)),t.val>l.leaf.val?t.left=l.leaf:t.right=l.leaf,console.log("arRight prev aftr",String(t.right.val),String(t.left.val))),n(l.leaf,i,t),l.leaf}n(this.tree.root,e,null),console.log("TREE preBal: ",this),function e(n,l,r){var s,c;n.val,c=0,m(n,s=0)>O(n,c)+1&&(console.log("LEFTCOUNT: ",O(n,c)),console.log("RIGHTCOUNT: ",m(n,s)),console.log("RC ROOT: ",n),r?a(n,r):t.tree.root=a(n,r),n=t.tree.root,t.tree.rightCount--),O(n,c)>m(n,s)+1&&(console.log("LEFTCOUNT: ",O(n,c)),console.log("RIGHTCOUNT: ",m(n,s)),console.log("LC ROOT: ",n),r?i(n,r):t.tree.root=i(n,r),n=t.tree.root,t.tree.leftCount--),n.left&&e(n.left,l,n),n.right&&e(n.right,l,n)}(this.tree.root,e,null),console.log("TREE: aftrBal ",this)};function x(e){this.val=e||null,this.freq=e?this.freq=1:0,this.left=null,this.right=null}function y(){this.tree={},this.tree.root=new x,this.tree.count=0,this.tree.leftCount=0,this.tree.rightCount=0}y.prototype.insert=function(e){var t=this;this.tree.count++;var n=function e(n,a,i){if(console.log("INSERT: ",a),n.val){if(a>n.val)if(t.tree.rightCount++,n.right)e(n.right,a,n);else{var l=new x(a);n.right=l}else if(a<n.val)if(t.tree.leftCount++,n.left)e(n.left,a,n);else{var r=new x(a);n.left=r}}else n.val=a;console.log("after rIns: ",t.tree)},a=function(e,a){var i=e,l=i.val,r=function(e){if(e&&e.right){for(var t=e.right,n=e;t.left;)n=t,t=t.left;return{parent:n,leaf:t}}}(e);return r.parent!==e?(r.leaf.right?r.parent.left=r.leaf.right:r.parent.left=null,r.leaf.left=i.left,r.leaf.right=i.right):r.leaf.left=i.left,i.right=null,i.left=null,console.log("Node.leafAfter",r.leaf),a?(console.log("arRight prev bfr",String(a.right.val),String(a.left.val)),a.val>r.leaf.val?a.left=r.leaf:a.right=r.leaf,console.log("arRight prev aftr",String(a.right.val),String(a.left.val))):t.tree.root=r.leaf,n(r.leaf,l),r.leaf},i=function(e,a){var i=e,l=i.val,r=function(e){if(e&&e.left){for(var t=e,n=e.left;n.right;)t=n,n=n.right;return{parent:t,leaf:n}}}(e);return r.parent!==i?(r.leaf.left?r.parent.right=r.leaf.left:r.parent.right=null,r.leaf.right=i.right,r.leaf.left=i.left):r.leaf.right=i.right,i.right=null,i.left=null,i=null,console.log("Node.leafAfter",r.leaf),a?(console.log("arRight prev bfr",String(a.right.val),String(a.left.val)),a.val>r.leaf.val?a.left=r.leaf:a.right=r.leaf,console.log("arRight prev aftr",String(a.right.val),String(a.left.val))):t.tree.root=r.leaf,n(r.leaf,l),r.leaf};function l(e,t){return e&&e.left&&(t++,function e(n){n.left&&(t++,e(n.left)),n.right&&(t++,e(n.right))}(e.left)),t}function r(e,t){return e&&e.right&&(t++,function e(n){n.left&&(t++,e(n.left)),n.right&&(t++,e(n.right))}(e.right)),t}n(this.tree.root,e),console.log("TREE preBal: ",this),function e(n,s,c){var o,h;n.val,h=0,r(n,o=0)>l(n,h)+1?(console.log("LEFTCOUNT: ",l(n,h)),console.log("RIGHTCOUNT: ",r(n,o)),console.log("RC ROOT: ",n),c?n=a(n,c):(t.tree.root=a(n,c),n=t.tree.root),t.tree.rightCount--):l(n,h)>r(n,o)+1&&(console.log("LEFTCOUNT: ",l(n,h)),console.log("RIGHTCOUNT: ",r(n,o)),console.log("LC ROOT: ",n),c?n=i(n,c):(t.tree.root=i(n,c),n=t.tree.root),t.tree.leftCount--),n.left&&e(n.left,s,n),n.right&&e(n.right,s,n)}(this.tree.root,e,null),console.log("TREE: aftrBal ",this)};var w=new y;w.insert(5),w.insert(1),w.insert(8);var N=function(){var e=Object(i.useState)("insert"),t=Object(o.a)(e,2),n=t[0],l=t[1],r=Object(i.useState)(w.tree),c=Object(o.a)(r,2),h=c[0],b=c[1],g=Object(i.useState)(" "),v=Object(o.a)(g,2),O=v[0],m=v[1],x=function(e){e.preventDefault(),O?(m(""),w.insert(Number(O)),b(Object(s.a)({},w.tree))):m("Invalid Entry")};return Object(i.useEffect)((function(){console.log("insformData",O)})),Object(i.useEffect)((function(){console.log("insformData",O)}),[h,O,n]),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-md-3",children:Object(a.jsx)("h1",{className:"hdr",children:"TREES"})}),Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-3",children:Object(a.jsx)("img",{className:" rounded img-fluid img-hdr",src:"https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg",width:"300",height:"200"})}),Object(a.jsxs)("div",{className:"row no-gutters p-2 pt-md-3 px-md-5",children:[Object(a.jsxs)("p",{children:["The binary balanced tree consists of a hierarchy of nodes that store data. Every tree has a root node at the top of the structure. ",Object(a.jsx)("strong",{children:"In the visualizer below, "}),"the tree is operating on the condition that every parent node has 2 or less children and the parent's value is greater than its left child but less than its right child, hence the name: balanced binary tree. The tree stays balanced by keeping track of how many nodes are present on each side of the tree and its sub-trees. A sub-tree may start at any node in the tree other than the root, and includes every descendent below it. The purpose of this balancing act is to keep as many nodes in the tree in the binary structure of having a parent and two children as possible. This allows us to recursively iterate through the tree in O(log n) time, which is faster than O(n) linear time, which would occur if the nodes were ordered in a unary structure (i.e arrays)."]}),Object(a.jsxs)("p",{children:["Notice for each level (K) of the tree, the number of nodes increases from the level above it by a factor of two. Total Nodes(N) = 2",Object(a.jsx)("sup",{children:"0"})," + 2",Object(a.jsx)("sup",{children:"1"})," + 2",Object(a.jsx)("sup",{children:"2"})," + 2",Object(a.jsx)("sup",{children:"3"}),"... + 2",Object(a.jsx)("sup",{children:"K"}),". This simplifies to Total Nodes(N) = 2",Object(a.jsx)("sup",{children:"K"})," + 1, where K = 0  at the root node and increases by 1 every level down the tree."]}),Object(a.jsx)("p",{children:"This tree was created in Javascript by creating an object (node) that has a value property, and two other properties that point to its left and right children. Objects are created in the heap memory in Javascript which means they are called by reference. If using C/C++, memory needs to be manually dynamicaly allocated in the heap. Nodes would be created in the heap that point to their children. When accessing information from the tree, a pointer to the address of the root node must be used."})]}),"insert"===n&&Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"row no-gutters px-5 justify-content-center",children:Object(a.jsx)(d.a,{color:"info",className:"btn",onClick:function(e){e.preventDefault(),l("insert")},children:" Insert"})}),Object(a.jsx)("div",{className:"row no-gutters px-5 justify-content-center",children:Object(a.jsxs)(f.a,{className:"form",onSubmit:x,children:[Object(a.jsx)(u.a,{children:"Value to Insert: "}),Object(a.jsx)(j.a,{className:"input",onChange:function(e){e.preventDefault(),e.target.value?m(e.target.value):m("")},value:O,type:"number"}),Object(a.jsx)(d.a,{className:"btn",onClick:x,children:"Enter"})]})}),Object(a.jsx)("div",{children:Object(a.jsx)(p,{data:h})})]})]})},k=function(e){var t,n,l,r,c=Object(i.useRef)(null),o=window.innerWidth,h=window.innerHeight,d=function(a){o>=768&&h>998?(t=o/50,n=h/50,l=o/8,r=h/25):o>=768?(t=o/50,n=h/50,l=o/25,r=o/20):o<768&&o>540?(t=o/50,n=h/50,l=o/10,r=o/15):(t=o/20,n=h/50,l=o/6,r=o/10),a.fillStyle="#000000",a.font=h>=998?"18px Arial":h<998&&h>=540?"16px Arial":"12px Arial";for(var i=e.data.length-1;i>=0;i--){var s=e.data.length-1-i;a.beginPath(),a.rect(t,n+s*r,l,r),i===e.data.length-1?(a.fillStyle="gold",a.fill()):(a.fillStyle="white",a.fill()),a.stroke(),a.textAlign="center",a.textBaseline="middle",a.fillStyle="black",a.fillText(e.data[i],t+.5*l,n+.5*r+s*r),a.fillText(i,.5*t,n+.5*r+s*r)}};return Object(i.useEffect)((function(){var e=c.current,t=e.getContext("2d");e.width=.3*window.innerWidth,e.height=window.innerHeight,t.clearRect(0,0,e.width,e.height),d(t)}),[d]),Object(a.jsx)("canvas",Object(s.a)({className:"canvas stkCanvas",ref:c},e))},T=function(){for(var e=[],t=0;t<10;t++)e.push(Math.floor(20*Math.random()));var n=Object(i.useState)("push"),l=Object(o.a)(n,2),r=l[0],s=l[1],h=Object(i.useState)(e),b=Object(o.a)(h,2),p=b[0],g=b[1],v=Object(i.useState)(" "),O=Object(o.a)(v,2),m=O[0],x=O[1],y=Object(i.useState)({index:null,value:null}),w=Object(o.a)(y,2),N=w[0];w[1];return Object(i.useEffect)((function(){console.log("arr: ",p),console.log("insformData",N)}),[p,m,,N,r]),Object(a.jsxs)("div",{className:"px-2 py-3",children:[Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-3",children:Object(a.jsx)("h1",{className:"hdr",children:"STACKS"})}),Object(a.jsx)("div",{className:"row no-gutters justify-content-center",children:Object(a.jsx)("img",{className:"rounded img-hdr img-fluid",src:"https://images.crateandbarrel.com/is/image/Crate/LoganStackingDinnerPlateWhiteS8SHF15"})}),Object(a.jsxs)("div",{className:"row no-gutters justify-content-center",children:[Object(a.jsx)("p",{className:"pt-2 px-1 pt-md-3 px-md-5",children:"The Stack operates on the Last In First Out (LIFO) principle. This is analagous to a stack of dishes where the last plate put on the top of the stack is the first plate to be used later. They are useful for converting infix expressions to postfix, backtracking algorithms, and many other functions."}),Object(a.jsx)("p",{className:"p-1 px-md-5",children:"The push and pop methods are typically O(1) in Javascript. Worst case occurs when size boundaries are encountered and the array needs to be copied to different sized array to accomodate for change which is O(n) time. In C, both functions are O(1) time if implementing the stack using a fixed size array. Worst case can be O(n) if dynamically allocating memory and run out of space. If using a linked list, the list should be flipped so the start is the top of the stack to make push and pop O(1) time rather than traversing to the end of the list which is O(n) time.  "})]}),Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("div",{className:"col-md-4"}),Object(a.jsxs)("div",{className:" col-6 col-md-3 justify-content-md-end",children:[Object(a.jsx)(d.a,{color:"success",className:"btn float-md-right",onClick:function(e){e.preventDefault(),s("push")},children:" Push"}),Object(a.jsx)(d.a,{color:"warning",className:"btn float-md-right",onClick:function(e){e.preventDefault(),s("pop")},children:" Pop"}),"push"===r&&Object(a.jsxs)(f.a,{className:"form float-md-right",children:[Object(a.jsx)(u.a,{children:"Value to push: "}),Object(a.jsx)(j.a,{className:"input",onChange:function(e){e.preventDefault(),e.target.value?x(e.target.value):x(" ")},value:m,type:"number"}),Object(a.jsx)(d.a,{className:"btn enterBtn stkComp",color:"dark",onClick:function(e){e.preventDefault(),g([].concat(Object(c.a)(p),[m])),x("")},children:"ENTER"})]}),"pop"===r&&Object(a.jsxs)("div",{className:"float-md-right d-block",children:[Object(a.jsx)(u.a,{className:"btnLabel m-1 d-block",children:"Press Enter to pop: "}),Object(a.jsx)(d.a,{className:"btn enterBtn m-1 d-block float-right",color:"dark",onClick:function(e){e.preventDefault();var t=p;t.pop(),g(Object(c.a)(t)),x("")},children:"ENTER"})]})]}),Object(a.jsx)("div",{className:"col-6 col-md-2 justify-content-md-start",children:Object(a.jsx)(k,{data:p})}),Object(a.jsx)("div",{className:"col-md-3"})]})]})},S=function(e){var t,n,l,r,c=Object(i.useRef)(null),o=window.innerWidth,h=window.innerHeight,d=function(a){o>=768&&h>998?(t=o/75,n=h/50,l=o/20,r=o/10):o>=768?(t=o/20,n=h/50,l=o/25,r=o/15):(t=o/20,n=h/50,l=o/16,r=o/12),a.fillStyle="#000000";for(var i=e.data.length-1;i>=0;i--){var s=e.data.length-1-i;a.beginPath(),a.rect(t+s*l,n,l,r),i===e.data.length-1?(a.fillStyle="green",a.fill()):0===i?(a.fillStyle="red",a.fill()):(a.fillStyle="gold",a.fill()),a.stroke(),a.font=o>=768?"2.5vh Arial":"2vh Arial",a.textAlign="center",a.textBaseline="middle",a.fillStyle="black",a.fillText(e.data[i],t+.5*l+s*l,n+.5*r),a.font=o>=768?"2vh Arial":"1vw Arial",i===e.data.length-1?a.fillText("FIRST",t+.5*l+s*l,n+1.3*r):0===i&&a.fillText("LAST",t+.5*l+s*l,n+1.3*r)}};return Object(i.useEffect)((function(){var e=c.current,t=e.getContext("2d");o>996&h<996||o>=768&h>=768?(e.height=window.innerHeight,e.width=2*window.innerWidth):o<996&h>996?(e.height=.08*window.innerHeight,e.width=2*window.innerWidth):o<540&&(e.height=.25*window.innerHeight,e.width=3*window.innerWidth),t.clearRect(0,0,e.width,e.height),d(t)}),[d]),Object(a.jsx)("canvas",Object(s.a)({className:"canvas",ref:c},e))},C=function(){for(var e=[],t=0;t<10;t++)e.push(Math.floor(20*Math.random()));var n=Object(i.useState)("enQ"),l=Object(o.a)(n,2),r=l[0],s=l[1],h=Object(i.useState)(e),b=Object(o.a)(h,2),p=b[0],g=b[1],v=Object(i.useState)(" "),O=Object(o.a)(v,2),m=O[0],x=O[1],y=Object(i.useState)({index:null,value:null}),w=Object(o.a)(y,2),N=w[0];w[1];return Object(i.useEffect)((function(){console.log("arr: ",p),console.log("insformData",N)}),[p,m,,N,r]),Object(a.jsxs)("div",{className:"px-2 py-3",children:[Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-3",children:Object(a.jsx)("h1",{className:"hdr",children:"Queue"})}),Object(a.jsx)("div",{className:"row no-gutters justify-content-center",children:Object(a.jsx)("img",{className:"rounded img-hdr img-fluid",src:"https://img.freepik.com/free-vector/people-line-waiting-pay_23-2148206445.jpg?size=626&ext=jpg"})}),Object(a.jsxs)("div",{className:"row no-gutters justify-content-center",children:[Object(a.jsx)("p",{className:"pt-2 px-1 pt-md-3 px-md-5",children:"The Queue operates on the First In First Out (FIFO) principle. Queues may be implemented using linked lists or arrays. Queues have two functions, enqueue and dequeue. Enqueue adds data to the back while dequeue removes and returns the data at the front of the structure. There are also other ways to implement the queue such as the circular queue."}),Object(a.jsx)("p",{className:"p-1 px-md-5",children:"  "})]}),Object(a.jsx)(d.a,{color:"danger",className:"btn",onClick:function(e){e.preventDefault(),s("enQ")},children:"Enqueue"}),Object(a.jsx)(d.a,{color:"success",className:"btn",onClick:function(e){e.preventDefault(),s("dQ")},children:"Dequeue"}),Object(a.jsxs)("div",{className:"row no-gutters",children:["enQ"===r&&Object(a.jsxs)(f.a,{className:"form",children:[Object(a.jsx)(u.a,{children:"Value to enqueue: "}),Object(a.jsx)(j.a,{className:"input",onChange:function(e){e.preventDefault(),e.target.value?x(e.target.value):x(" ")},value:m,type:"number"}),Object(a.jsx)(d.a,{className:"btn enterBtn",color:"dark",onClick:function(e){e.preventDefault();var t=p;t.unshift(m),g(Object(c.a)(t)),x("")},children:"ENTER"})]}),"dQ"===r&&Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)(u.a,{className:"btnLabel",children:"Press Enter to dequeue: "}),Object(a.jsx)(d.a,{className:"btn enterBtn",color:"dark",onClick:function(e){e.preventDefault();var t=p;t.pop(),g(Object(c.a)(t)),x("")},children:"ENTER"})]}),Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-md-3",children:Object(a.jsx)(S,{data:p})})]})]})};function E(e){this.val=e,this.next=null}function I(){this.list={},this.list.front=null,this.list.rear=null,this.list.length=0}I.prototype.prepend=function(e){var t=new E(e);this.list.front?(t.next=this.list.front,this.list.front=t,console.log("p2",this.list)):(this.list.front=t,this.list.rear=t,console.log("p1",this.list)),this.list.length++},I.prototype.append=function(e){var t=new E(e);console.log("q ap",t),this.list.front?(this.list.rear.next=t,this.list.rear=t,console.log("ap2",this.list)):(this.list.front=t,this.list.rear=t,console.log("ap1",this.list)),this.list.length++},I.prototype.delF=function(e){if(this.list.front){this.list.front;this.list.front.next?(this.list.front=this.list.front.next,this.list.length--):(this.list.front=null,this.list.length--)}},I.prototype.insert=function(e,t){var n=this.list.front,a=0;if(0===e)this.prepend(t);else if(e===this.list.length)this.append(t);else for(;n.next;){if(a===e-1){var i=new E(t);i.next=n.next,n.next=i,this.list.length++;break}n=n.next,a++}},I.prototype.delete=function(e){var t=this.list.front,n=0;for(0===e&&(this.list.front=this.list.front.next,this.delF());t.next;){if(n===this.list.length-2)return t.next=null,void this.list.length--;if(n===e-1){var a=t.next;return t.next=a.next,a.next=null,void this.list.length--}t=t.next,n++}},I.prototype.update=function(e,t){var n=this.list.front,a=0;for(console.log("IN THE WORKS UPDATE");n;){if(a===e)return void(n.val=t);n=n.next,a++}};for(var D=function(e){var t,n,l,r,c,o,h=Object(i.useRef)(null),d=window.innerWidth,f=window.innerHeight,u=20*Math.PI/180,j=function(a){d>=768&&f>998?(t=d/300,n=f/50,l=d/20,r=d/25,c=d/50,o=12):d>=768?(t=d/300,n=f/50,l=d/40,r=d/40,c=d/50,o=12):d<768&&d>540?(t=d/150,n=f/50,l=d/35,r=d/25,c=d/30,o=123):(t=d/20,n=f/50,l=d/12,r=d/12,c=d/28,o=5),a.fillStyle="#000000";var i=e.data.front;console.log(e.data);for(var s=0;i;)a.beginPath(),a.fillStyle="orange",a.rect(t+s*l+s*c,n,l,r),a.fill(),a.stroke(),a.beginPath(),a.fillStyle="blue",a.rect(t+s*l+s*c,n+r,l,r),a.fill(),a.stroke(),i.next&&(a.beginPath(),a.moveTo(t+l+s*(l+c),n+1.5*r),a.lineTo(t+l+s*(l+c)+c,n+1.5*r),a.moveTo(t+l+s*(l+c)+c,n+1.5*r),a.lineTo(t+l+s*(l+c)+c-o*Math.cos(u),n+1.5*r+o*Math.sin(u)),a.moveTo(t+l+s*(l+c)+c,n+1.5*r),a.lineTo(t+l+s*(l+c)+c-o*Math.cos(u),n+1.5*r-o*Math.sin(u)),a.stroke()),a.font=d>=998?"16px Arial":d<998&&d>=540?"14px Arial":"11px Arial",a.textAlign="center",a.textBaseline="middle",a.fillStyle="black",a.fillText(i.val,t+.5*l+s*l+s*c,n+.5*r),a.fillStyle="white",a.fillText("*PTR",t+.5*l+s*l+s*c,n+1.3*r),a.fillStyle="black",a.fillText(s,t+.5*l+s*l+s*c,n+2.3*r),0===s&&a.fillText("FRONT",t+.65*l+s*l+s*c,n+3*r),i=i.next,s++};return Object(i.useEffect)((function(){var e=h.current,t=e.getContext("2d");d>996&&f<996?(e.height=.3*window.innerHeight,e.width=2*window.innerWidth):d>996&&f>996||d<996&&f>996?(e.height=.15*window.innerHeight,e.width=2*window.innerWidth):d<540&&(e.height=.3*window.innerHeight,e.width=3*window.innerWidth),t.clearRect(0,0,e.width,e.height),j(t)}),[j]),Object(a.jsx)("canvas",Object(s.a)({className:"canvas",ref:h},e))},R=new I,L=0;L<10;L++)R.prepend(Math.floor(20*Math.random()));var A=function(e){var t=Object(i.useState)("prepend"),n=Object(o.a)(t,2),l=n[0],r=n[1],c=Object(i.useState)(R.list),h=Object(o.a)(c,2),b=h[0],p=h[1],g=Object(i.useState)(""),v=Object(o.a)(g,2),O=v[0],m=v[1],x=Object(i.useState)({index:"",value:""}),y=Object(o.a)(x,2),w=y[0],N=y[1],k=function(e){e.preventDefault(),e.target.value?m(e.target.value):m("")},T=function(e){e.preventDefault(),O?(R.prepend(O),p(Object(s.a)({},R.list)),m("")):m("Invalid Entry")},S=function(e){e.preventDefault(),e.target.value?N(Object(s.a)(Object(s.a)({},w),{},{index:Number(e.target.value)})):N(Object(s.a)(Object(s.a)({},w),{},{index:" "}))},C=function(e){e.preventDefault(),e.target.value?N(Object(s.a)(Object(s.a)({},w),{},{value:Number(e.target.value)})):N(Object(s.a)(Object(s.a)({},w),{},{value:" "}))},E=function(e){e.preventDefault(),w.index>=0&&w.index<=b.length?(R.insert(w.index,w.value),p(Object(s.a)({},R.list)),N({index:"",value:""})):N(Object(s.a)(Object(s.a)({},w),{},{index:"Invalid Entry",value:""}))},I=function(e){e.preventDefault(),O&&(O>=0&&O<b.length?(R.delete(O),p(Object(s.a)({},R.list)),m("")):m("INV!"))},L=function(e){e.preventDefault(),w.index>=0&&w.index<b.length?(console.log(Number(w.index)),R.update(w.index,w.value),p(Object(s.a)({},R.list)),N({index:"",value:""})):N(Object(s.a)(Object(s.a)({},w),{},{index:"Invalid Entry",value:""}))};return Object(i.useEffect)((function(){console.log("list: ",b),console.log("insformData",w)}),[b,O,,w,l]),Object(a.jsxs)("div",{className:"pt-2 p-1 px-md-5 py-md-3",children:[Object(a.jsx)("div",{className:"row no-gutters justify-content-center p-3",children:Object(a.jsx)("h1",{className:"hdr",children:"LINKED LISTS"})}),Object(a.jsx)(D,{data:b}),Object(a.jsx)(d.a,{color:"success",className:"btn",onClick:function(e){e.preventDefault(),r("prepend")},children:"Prepend"}),Object(a.jsx)(d.a,{color:"primary",className:"btn",onClick:function(e){e.preventDefault(),r("delF")},children:" Delete First Node"}),Object(a.jsx)(d.a,{color:"info",className:"btn",onClick:function(e){e.preventDefault(),r("insert")},children:" Insert"}),Object(a.jsx)(d.a,{color:"danger",className:"btn",onClick:function(e){e.preventDefault(),r("delete")},children:" Delete"}),Object(a.jsx)(d.a,{color:"secondary",className:"btn",onClick:function(e){e.preventDefault(),r("append")},children:"Append"}),Object(a.jsx)(d.a,{color:"success",className:"btn",onClick:function(e){e.preventDefault(),r("update")},children:" Update"}),"prepend"===l&&Object(a.jsxs)(f.a,{className:"form",onSubmit:T,children:[Object(a.jsx)(u.a,{children:"Value to prepend: "}),Object(a.jsx)(j.a,{className:"input",onChange:k,value:O,type:"number"}),Object(a.jsx)(d.a,{className:"btn enterBtn",color:"dark",onClick:T,children:"ENTER"})]}),"delF"===l&&Object(a.jsxs)("div",{children:[Object(a.jsx)(u.a,{className:"btnLabel m-1",children:"Press Enter to delete first node: "}),Object(a.jsx)(d.a,{className:"btn enterBtn m-1",color:"dark",onClick:function(e){e.preventDefault(),R.delF(),p(Object(s.a)({},R.list)),m("")},children:"ENTER"})]}),"insert"===l&&Object(a.jsx)("div",{children:Object(a.jsxs)(f.a,{className:"form",onSubmit:E,children:[Object(a.jsx)(u.a,{className:"btnLabel",children:"Index to Insert: "}),Object(a.jsx)(j.a,{onChange:S,value:w.index,type:"number"}),Object(a.jsx)(u.a,{children:"Value to Insert: "}),Object(a.jsx)(j.a,{className:"input",onChange:C,value:w.value,type:"number"}),Object(a.jsx)(d.a,{className:"btn enterBtn",color:"dark",onClick:E,children:"ENTER"})]})}),"delete"===l&&Object(a.jsx)("div",{children:Object(a.jsxs)(f.a,{className:"form",onSubmit:I,children:[Object(a.jsx)(u.a,{className:"btnLabel",children:"Index to Delete: "}),Object(a.jsx)(j.a,{className:"input",onChange:k,value:O,type:"number"}),Object(a.jsx)(d.a,{className:"btn enterBtn",color:"dark",onClick:I,children:"ENTER"})]})}),"append"===l&&Object(a.jsxs)("div",{className:"justify-content-center",children:[Object(a.jsx)(u.a,{className:"btnLabel m-1 ",children:"Press Enter to append: "}),Object(a.jsx)(j.a,{className:"input",onChange:k,value:O,type:"number"}),Object(a.jsx)(d.a,{className:"btn enterBtn m-1",color:"dark",onClick:function(e){e.preventDefault(),O?(R.append(O),p(Object(s.a)({},R.list)),m("")):m("Invalid Entry")},children:"ENTER"})]}),"update"===l&&Object(a.jsx)("div",{children:Object(a.jsxs)(f.a,{className:"form",onSubmit:L,children:[Object(a.jsx)(u.a,{className:"btnLabel",children:"Index to Update: "}),Object(a.jsx)(j.a,{onChange:S,value:w.index,type:"number"}),Object(a.jsx)(u.a,{children:"Updated value: "}),Object(a.jsx)(j.a,{className:"input",onChange:C,value:w.value,type:"number"}),Object(a.jsx)(d.a,{className:"btn enterBtn",color:"dark",onClick:L,children:"ENTER"})]})}),Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("p",{children:"Linked Lists are linear data structures where nodes are joined together with pointers. They can be singly or doubly linked. In a singly linked list, nodes only have pointers to the next node while doubly linked lists have pointers to both the previous and next node. Singly linked lists use less memory because each node has just one pointer, but doubly linked lists allow for bi-directional traversal which is more efficient for accessing data towards the end of the list. In both lists, accessing the first node is O(1) time, but in a singly linked list, accessing data towards the end of this list is roughly O(n) time due to traversing from the first node. In a doubly linked list, pointers can be placed at the front and end of the list, so it is O(1) time to access the first and last nodes. It is also possible to link the rear of the list to the front to create a circular linked list. This can be implemented on singly and doubly linked lists. Circular lists can be implemented without any pointers to null which means less edge cases. It can be difficult to know which part of the list is being referenced with the circular implementation."}),Object(a.jsx)("p",{children:"Linked lists and arrays are both linear data structures but they have certain pros and cons. In lower level languages like C, Linked lists are dynamic so memory can be allocated in run time to create a list of any size  (unless heap is full). They can also store non-primitive data types. Linked lists require more memory than arrays because of the extra space required for two pointers in each node. Arrays are of a fixed size, and store primitive data types only, but they do provide O(1) random access when extracting data at a specified index. Linked lists require sequential access meaning the list needs to be traversed until the node is found with the correct data (worst case O(n)). Linked lists are more efficient at insert and delete operations because all of the data does not need to be shifted, and removed nodes are freed from memory."}),Object(a.jsxs)("ol",{children:[" ",Object(a.jsx)("strong",{children:"List of Linked List Operations "}),Object(a.jsx)("li",{children:"Prepend- inserts new node at beginning of list"}),Object(a.jsx)("li",{children:"Append - insert new node at end of list"}),Object(a.jsx)("li",{children:"Insert -  inserts new node at a specified node in the list"}),Object(a.jsx)("li",{children:"Delete - deletes a node at a specified node in the list"}),Object(a.jsx)("li",{children:"Update - data is updated in a specified node"}),Object(a.jsx)("li",{children:"Search - locates a specified piece of data and returns it"})]})]})]})},B=n(10),P=(n(39),n(59)),q=n(60),M=n(61),H=n(62),F=n(66),W=n(63),U=n(64),z=n(65),J=(n(40),function(e){var t=Object(i.useState)(!0),n=Object(o.a)(t,2),l=n[0],r=n[1];return Object(a.jsx)("div",{children:Object(a.jsxs)(P.a,{id:"navBar",light:!0,children:[Object(a.jsx)(q.a,{href:"/data-struct/#/tree",className:"mr-auto",id:"brand",children:"DS VISUALIZATION TOOL"}),Object(a.jsx)(M.a,{id:"tools",children:"\ud83d\udee0\ufe0f"}),Object(a.jsx)(H.a,{id:"navToggler",onClick:function(){return r(!l)},className:"mr-2"}),Object(a.jsx)(F.a,{isOpen:!l,navbar:!0,children:Object(a.jsxs)(W.a,{navbar:!0,children:[Object(a.jsx)(U.a,{children:Object(a.jsx)(z.a,{className:"navLink",href:"/data-struct/#/array",children:"Arrays"})}),Object(a.jsx)(U.a,{children:Object(a.jsx)(z.a,{className:"navLink",href:"/data-struct/#/linkedList",children:"Linked Lists"})}),Object(a.jsx)(U.a,{children:Object(a.jsx)(z.a,{className:"navLink",href:"/data-struct/#/stack",children:"Stacks"})}),Object(a.jsx)(U.a,{children:Object(a.jsx)(z.a,{className:"navLink",href:"/data-struct/#/queue",children:"Queues"})}),Object(a.jsx)(U.a,{children:Object(a.jsx)(z.a,{className:"navLink",href:"/data-struct/#/tree",children:"Balanced Binary Trees"})})]})})]})})});var Q=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(J,{className:"navComp"}),Object(a.jsxs)(B.c,{children:[Object(a.jsx)(B.a,{exact:!0,path:"/",component:N}),Object(a.jsx)(B.a,{exact:!0,path:"/array",component:b}),Object(a.jsx)(B.a,{exact:!0,path:"/linkedList",component:A}),Object(a.jsx)(B.a,{exact:!0,path:"/queue",component:C}),Object(a.jsx)(B.a,{exact:!0,path:"/tree",component:N}),Object(a.jsx)(B.a,{exact:!0,path:"/stack",component:T})]})]})},V=n(23);r.a.render(Object(a.jsx)(V.a,{basename:"/",children:Object(a.jsx)(Q,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.e0554e0d.chunk.js.map