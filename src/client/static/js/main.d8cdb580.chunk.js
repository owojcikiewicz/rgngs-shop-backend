(this["webpackJsonprgngs-shop"]=this["webpackJsonprgngs-shop"]||[]).push([[0],{39:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(31),a=n.n(s),r=n(4),l=n(5),o=n(7),j=n(6),d=(n(39),n(13)),u=n(2),h=n(11),A=n.n(h),p=n(14),b=n(17),O=n.n(b),x=(n(59),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQflAhcVHhWeIqZ4AAACP0lEQVRIx6WVTUhUURTHf08RjLISs1HKsA/RFpFQIhREuKxFkVC0LKFPLIJqk22jXUW4sLJFCzeVi1btapEuWyQVChqThTouTCoo0/m1mPeG8evNWGf13jn8f/ecc8+9F7DabidcqU34yCrAaj+vWBxZ0ip8/M9y1YeBKSrJZ3M85xkDpEjQyHGOEISRFAWs8s5d83nudTCMpfMD+izLCtdkv8p9mwnnA0yYADBhl1PqtN1WA7jFb4UA2gGsMekP73neO0771a0A3sgPmHE9gC+ddEeYfK1jvgqzmssH6AvXT3shp4Wn1ToAB7Qodvu+AFBPQH+O9w3QAMAoxAH+cBeA78DGHH8i9EEpxJVwKUy5xEl7c0roccpVAA7H9eCFQVZyRu2yAiz3fnZvGuJ2YSTT/yziur/VMdPO2BH6OjOAL4vEvxyyaWFDrLHd2162NvxvdjYDKPawvc6E4iFPZuqLN3dGN0jkSHjVDz63tABxsW1OR+kG80JFQRpcy0HW0R8MLxBWspsK9nCM7fErtNqnznorF+8Bvy7Vbdy/TI1P1HNRZnZkWrYUQD96zaolIC9MArjBl8tPWzQHM15cBLhi2mLwbNx5i85CCc0ANkXHFthHMpgDNsW3LLJRA7Den762zRY71TYA++IyyB3lEwAeciws6mY4celCAePWALjaFlvdDGCZ77VQgI7YOK+8bdHdu6ylFz4sc/TwlEH+UMdRTpFvtFP4yP+xB1ht8p/ln0wAVvnQ8RWLx+0yAX8Bcc/cJ+n0daoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDItMjNUMjE6MzA6MjErMDA6MDDTvFcWAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAyLTIzVDIxOjMwOjIxKzAwOjAwouHvqgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="),k=n.p+"static/media/logo.5cbf01c4.png",g=n(0),m=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={user:{},info:{},loggedin:!1},i}return Object(l.a)(n,[{key:"getInfo",value:function(){var e=Object(p.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(p.a)(A.a.mark((function e(n,i){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/info?id="+t).then((function(e){n(e.data)})).catch((function(e){i(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(p.a)(A.a.mark((function e(){var t=this;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/login/user",{withCredentials:!0}).then(function(){var e=Object(p.a)(A.a.mark((function e(n){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getInfo(n.data.id).then((function(e){t.setState({user:{id:n.data.id,rcoins:n.data.rcoins},info:e,loggedin:!0})})).catch((function(e){t.setState({user:{id:n.data.id,rcoins:n.data.rcoins},info:{},loggedin:!0})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){401==e.code&&t.setState({user:{},info:{},loggedin:!1})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return!0===this.state.loggedin?(console.log(this.state),Object(g.jsxs)("header",{class:"header",children:[Object(g.jsxs)("a",{class:"login-btn",href:"/login",rel:"noreferrer",children:[Object(g.jsx)("label",{class:"steam-login-text",children:this.state.user.rcoins}),Object(g.jsx)("img",{class:"steam-login-img",src:x,alt:"Steam"})]}),Object(g.jsx)(d.b,{to:"/",children:Object(g.jsx)("img",{class:"rgngs-logo",src:k,alt:"Logo"})})]})):Object(g.jsxs)("header",{class:"header",children:[Object(g.jsxs)("a",{class:"login-btn",href:"/login",rel:"noreferrer",children:[Object(g.jsx)("label",{class:"steam-login-text",children:"ZALOGUJ"}),Object(g.jsx)("img",{class:"steam-login-img",src:x,alt:"Steam"})]}),Object(g.jsx)(d.b,{to:"/",children:Object(g.jsx)("img",{class:"rgngs-logo",src:k,alt:"Logo"})})]})}}]),n}(c.a.Component),f=(n(66),[{title:"Polityka prywatno\u015bci",link:"/polityka-prywatnosci"},{title:"Regulamin",link:"/regulamin"}]),y=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("footer",{class:"footer",children:[Object(g.jsx)("div",{class:"footer-logo-container",children:Object(g.jsx)("img",{class:"footer-logo",src:"data:image/png;base64,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",alt:"RageGANGS"})}),Object(g.jsx)("div",{class:"footer-info-container",children:"Rage Gangs.pl - Sklep prowadzony jest przez: FUNDACJ\u0118 ROZWOJU PRZEDSI\u0118BIORCZO\u015aCI \u201eTW\xd3J STARTUP\u201d, KRS: 0000442857; NIP: 5213641211; REGON: 146433467, BDO: 000460502"}),Object(g.jsxs)("div",{class:"footer-links-container",children:[Object(g.jsx)("a",{href:"https://www.youtube.com",rel:"noreferrer",target:"_blank",children:"Discord"}),f.map((function(e,t){return Object(g.jsx)("li",{children:Object(g.jsxs)(d.b,{to:e.link,children:[" ",e.title]})},t)}))]})]})}}]),n}(c.a.Component),J=n(34),v=(n(67),function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).id=e.id,i.title=e.title,i.description=e.description,i.price=e.price,i.gradient=e.gradient,i}return Object(l.a)(n,[{key:"buy",value:function(){}},{key:"render",value:function(){if("VIP"===this.title){return Object(g.jsx)("div",{class:"item-layout",children:Object(g.jsxs)("div",{class:"item-main",children:[Object(g.jsx)("div",{class:"item-header",style:{backgroundImage:this.gradient},children:Object(g.jsx)("label",{class:"item-title",children:this.title})}),Object(g.jsx)("button",{class:"item-button",style:{backgroundImage:this.gradient},onClick:this.buy,children:"KUP"}),Object(g.jsx)("div",{class:"item-price-div",children:Object(g.jsx)("label",{class:"item-price",children:this.price})}),Object(g.jsx)("div",{class:"item-content",children:Object(g.jsx)("p",{children:"Wyr\xf3\u017anij si\u0119 z t\u0142umu i zyskaj eksluzywne benefity!\n\n- Mo\u017cliwo\u015b\u0107 stworzenia dw\xf3ch postaci\n- Ekskluzywne pojazdy VIP\n- W\u0142asne tablice rejestracyjne\n- Pe\u0142na oferta Paralake Customs\n- 50+ miejsca w banku\n- 50+ miejsca w sejfach\n- Boost do regeneracji kondycji\n- 2 dodatkowe doniczki\n- 2 dodatkowe lampy\n- 2 dodatkowe wentylatory\n\nI wiele, wiele wi\u0119cej!"})})]})})}return Object(g.jsx)("div",{class:"item-layout",children:Object(g.jsxs)("div",{class:"item-main",children:[Object(g.jsx)("div",{class:"item-header",style:{backgroundImage:this.gradient},children:Object(g.jsx)("label",{class:"item-title",children:this.title})}),Object(g.jsx)("button",{class:"item-button",style:{backgroundImage:this.gradient},onClick:this.buy,children:"KUP"}),Object(g.jsx)("div",{class:"item-price-div",children:Object(g.jsx)("label",{class:"item-price",children:this.price})}),Object(g.jsx)("div",{class:"item-content",children:this.description})]})})}}]),n}(c.a.Component)),R=v;v.defaultProps={title:"item name",gradient:"linear-gradient(to right, rgb(195, 55, 100), rgb(29, 38, 113))"};n(68);var C=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this)).state={packages:[]},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(A.a.mark((function e(){var t,n=this;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,O.a.get("/packages").then((function(e){var i,c=Object(J.a)(e.data);try{for(c.s();!(i=c.n()).done;){var s=i.value;t[s.id]={name:s.name,description:s.description,price:s.price,gradient:s.gradient}}}catch(a){c.e(a)}finally{c.f()}n.setState({packages:t})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsxs)("div",{class:"shop-container",children:[Object(g.jsxs)("div",{class:"shop-text-container",children:[Object(g.jsx)("h2",{children:"NASZA OFERTA"}),Object(g.jsx)("div",{class:"shop-desccription",children:"Poni\u017cej znajduje si\u0119 lista dost\u0119pnych do kupienia pakiet\xf3w."})]}),Object(g.jsx)("div",{class:"items-container",children:this.state.packages.map((function(e,t){return Object(g.jsx)(R,{id:e.id,title:e.name,gradient:e.gradient,description:e.description,price:e.price+" PLN"})}))})]})}}]),n}(c.a.Component),I=(n(69),function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{class:"privacy-main",children:[Object(g.jsx)("h1",{class:"privacy-main-text",children:"POLITYKA PRYWATNO\u015aCI"}),Object(g.jsx)("h2",{children:"I. MOJA PRYWATNOSC"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:'um is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets c'}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"})]}),Object(g.jsx)("h2",{children:"II. MOJA PRYWATNOSC"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"})]}),Object(g.jsx)("h2",{children:"III. MOJA PRYWATNOSC"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"})]}),Object(g.jsx)("h2",{children:"V I. MOJA PRYWATNOSC"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"})]})]})}}]),n}(c.a.Component)),w=(n(70),function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{class:"terms-main",children:[Object(g.jsx)("h1",{class:"terms-main-text",children:"REGULAMIN SKLEPU"}),Object(g.jsx)("h2",{children:"I. Something"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:'um is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets c'}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"})]}),Object(g.jsx)("h2",{children:"II. Something"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"})]}),Object(g.jsx)("h2",{children:"III. Something"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"})]}),Object(g.jsx)("h2",{children:"V I. Something"}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"}),Object(g.jsx)("li",{children:"Jakis punkt"})]})]})}}]),n}(c.a.Component)),U=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(m,{}),Object(g.jsxs)(u.c,{children:[Object(g.jsx)(u.a,{path:"/",exact:!0,component:C}),Object(g.jsx)(u.a,{path:"/polityka-prywatnosci",component:I}),Object(g.jsx)(u.a,{path:"/regulamin",component:w})]}),Object(g.jsx)(y,{})]})})}}]),n}(c.a.Component);a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.d8cdb580.chunk.js.map