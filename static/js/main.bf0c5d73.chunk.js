(this["webpackJsonpshopify-challenge"]=this["webpackJsonpshopify-challenge"]||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/petLandingPage.ad797d35.png"},45:function(e,t,a){e.exports=a(87)},51:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(14),r=a.n(o),s=a(24),c=a.n(s),i=a(42),p=a(3),u=a(4),m=a(6),d=a(5),h=(a(51),a(9)),f=a(23),v=a.n(f),E=a(15),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).searchAhead=function(t){v()({method:"GET",url:"http://www.mapquestapi.com/search/v3/prediction",dataType:"jsonp",params:{key:"e3cHA9SUBfDTPsePNXGN8YlK3Z71Ofwr",q:t,collection:"adminArea",limit:5}}).then((function(t){e.setState({locationList:t.data.results})})).catch((function(){e.setState({locationList:[]})}))},e.handleChnage=function(t){t.persist(),e.setState({location:t.target.value}),e.searchAhead(t.target.value)},e.handleClick=function(t){t.persist(),e.setState({type:t.target.value})},e.handleLocationClick=function(t){t.persist(),e.setState({locationCoordinates:t.target.dataset.coordinates,location:t.target.innerText,locationList:[]})},e.handleSubmit=function(t){t.preventDefault(),e.props.submitForm(e.state.type,e.state.locationCoordinates)},e.state={type:"",location:"",locationCoordinates:"",locationList:[]},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("form",{action:"",id:"userSelection"},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"indicate your preferences below to find your next best friend"),l.a.createElement("div",{className:"location"},l.a.createElement("label",{htmlFor:"locationInput"},"location"),l.a.createElement("input",{type:"text",name:"location",id:"locationInput",onChange:this.handleChnage,value:this.state.location}),l.a.createElement("ul",null,this.state.locationList.map((function(t){var a=[t.place.geometry.coordinates[1],t.place.geometry.coordinates[0]];return l.a.createElement("li",{className:"locationOption","data-coordinates":a,onClick:e.handleLocationClick},t.displayString)})))),l.a.createElement("div",{className:"type"},["dog","cat"].map((function(t){return l.a.createElement(n.Fragment,null,l.a.createElement("label",null,l.a.createElement(h.a,{className:"icon",icon:"".concat(t)})," ",t),l.a.createElement("input",{type:"radio",name:"type",onClick:e.handleClick,value:t}))})),l.a.createElement("label",null,l.a.createElement(h.a,{className:"icon",icon:"dove"})," bird"),l.a.createElement("input",{type:"radio",name:"type",onClick:this.handleClick,value:"bird"})),l.a.createElement("button",{onClick:function(e){e.preventDefault()}},l.a.createElement(E.Link,{activeClass:"active",to:"searchResults",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.handleSubmit},"get your cutie pet"))))}}]),a}(l.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).handleClick=function(t){e.props.clickFavButton(t.target.dataset)},e.handleDisable=function(t){var a=!1;return e.props.favPetList.forEach((function(e){e.petData.petId==t&&(a=!0)})),a},e.handleColor=function(t){var a={color:"black"};return e.props.favPetList.forEach((function(e){e.petData.petId==t&&(a={color:"#ec3b2e81"})})),console.log(a),a},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,0!==this.props.petList.length?l.a.createElement("p",{className:"searchResults"},l.a.createElement(h.a,{className:"icon",icon:"search"})," Search Results"):l.a.createElement("p",null),l.a.createElement("section",{className:"pets searchResults",id:"searchResults"},this.props.petList.map((function(t){return l.a.createElement("div",{key:t.key,className:"petContainer"},l.a.createElement("img",{src:t.petPhoto,alt:""}),l.a.createElement("div",{className:"petInfo"},l.a.createElement("p",{className:"name",style:{fontFamily:"Indie Flower"}},l.a.createElement("span",null,"Name: "),t.petName),l.a.createElement("p",{className:"age",style:{fontFamily:"Indie Flower"}},l.a.createElement("span",null,"Age: "),t.petAge),l.a.createElement("p",{className:"status",style:{fontFamily:"Indie Flower"}},l.a.createElement("span",null,"Status: "),t.petStatus),l.a.createElement("p",null,l.a.createElement("a",{href:t.petUrl,style:{fontFamily:"Indie Flower"}},"more info"))),l.a.createElement("button",{type:"button",className:"favButton","data-pet-name":t.petName,"data-pet-url":t.petUrl,"data-pet-age":t.petAge,"data-pet-status":t.petStatus,"data-pet-photo":t.petPhoto,"data-pet-id":t.petId,onClick:e.handleClick,style:e.handleColor(t.petId),disabled:e.handleDisable(t.petId)},"\u2665"))}))))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).handleClick=function(){e.state.showFavourites?e.setState({showFavourites:!1}):e.setState({showFavourites:!0})},e.state={showFavourites:!1},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("section",null,l.a.createElement("button",{onClick:this.handleClick,className:"favourites"},l.a.createElement("span",null,"\u2665")," favourites ",l.a.createElement("span",null,"\u2665")),this.state.showFavourites?l.a.createElement("section",{className:"pets favourites"},0!==this.props.favPetList.length?this.props.favPetList.map((function(t){var a=t.key,n=t.petData;return l.a.createElement("div",{key:a,className:"petContainer"},l.a.createElement("button",{className:"cross","data-key":a,"data-pet-name":n.petName,"data-pet-url":n.petUrl,"data-pet-age":n.petAge,"data-pet-status":n.petStatus,"data-pet-photo":n.petPhoto,"data-pet-id":n.petId,onClick:function(t){e.props.clickCrossButton(t.target.dataset)}},"\u2613"),l.a.createElement("img",{src:n.petPhoto,alt:""}),l.a.createElement("div",{className:"petInfo"},l.a.createElement("p",{className:"name",style:{fontFamily:"Indie Flower"}},l.a.createElement("span",null,"Name: "),n.petName),l.a.createElement("p",{className:"age",style:{fontFamily:"Indie Flower"}},l.a.createElement("span",null,"Age: "),n.petAge),l.a.createElement("p",{className:"status",style:{fontFamily:"Indie Flower"}},l.a.createElement("span",null,"Status: "),n.petStatus),l.a.createElement("p",null,l.a.createElement("a",{href:n.petUrl,style:{fontFamily:"Indie Flower"}},"more info"))),l.a.createElement("button",{type:"button",className:"favButton",style:{color:"red"}},"\u2665"))})):l.a.createElement("p",{className:"noFavs"},"you have no favourites")):l.a.createElement("section",null))}}]),a}(n.Component),k=a(43),C=a.n(k),N=a(10),w=a(44),F=a(7),L=a(25),S=a.n(L);a(79);S.a.initializeApp({apiKey:"AIzaSyAL1ueb-9WlYCHYltsWF9vOHUdA3v89leI",authDomain:"petadopt-2c659.firebaseapp.com",databaseURL:"https://petadopt-2c659.firebaseio.com",projectId:"petadopt-2c659",storageBucket:"petadopt-2c659.appspot.com",messagingSenderId:"844686578631",appId:"1:844686578631:web:0dcbc4b2e9a4276c60ffe2"});var P=S.a;N.b.add(w.a,F.b,F.a,F.b,F.c,F.d,F.e);var I=function(e){Object(m.a)(o,e);var t=Object(d.a)(o);function o(){var e;return Object(p.a)(this,o),(e=t.call(this)).handleSubmit=function(t,a){var n={type:t,location:a};e.getPet(n)},e.handlePetsClick=function(t){var a=t.petAge,n=t.petId,l=t.petName,o=t.petPhoto,r=t.petStatus,s=t.petUrl;e.state.favPetList.length<5?P.database().ref().push({petName:l,petAge:a,petUrl:s,petStatus:r,petPhoto:o,petId:n}):alert("you have added five favourites to your list")},e.handleFavPetsClick=function(e){var t=e.key;P.database().ref().child(t).remove()},e.state={petList:[],favPetList:[]},e}return Object(u.a)(o,[{key:"componentDidMount",value:function(){var e=this;P.database().ref().on("value",(function(t){var a=[],n=t.val();for(var l in n)a.push({key:l,petData:n[l]});e.setState({favPetList:a})}))}},{key:"getPet",value:function(){var e=Object(i.a)(c.a.mark((function e(t){var n,l,o,r,s,i,p=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(23),l=a(81),o=l.client(n.create(),{url:"https://api.petfinder.com/v2/oauth2/token",grant_type:"client_credentials",client_id:"ekGvHgiY5LvPGX6SYZLpLAax3umf2Q1GxBAuHoRCgpJZ6Aj19e",client_secret:"Dsd5eqTmjNDVo31SDuKICTeZfxZP7rfsoGorHOyw"}),e.next=5,o();case 5:for(i in r=e.sent,s={},t)""!==t[i]&&(s[i]=t[i]);n({method:"GET",url:"https://api.petfinder.com/v2/animals",headers:{Authorization:"Bearer ".concat(r.access_token)},dataType:"jsonp",params:s}).then((function(e){var t=[];e.data.animals.forEach((function(e){0!==e.photos.length&&t.push({petPhoto:e.photos[0].medium,petName:e.name,petUrl:e.url,petStatus:e.status,petId:e.id,petAge:e.age})})),p.setState({petList:t})}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("header",{className:"wrapper"},l.a.createElement("img",{src:C.a,alt:""}),l.a.createElement("div",null,l.a.createElement("h1",null,"Adopt a ",l.a.createElement("span",null,"forever friend")," today"),l.a.createElement("p",null,"Adopt a pet who needs your care and love today."),l.a.createElement("button",null,l.a.createElement(E.Link,{activeClass:"active",to:"userSelection",spy:!0,smooth:!0,offset:-70,duration:500},"meet your ",l.a.createElement("br",null),"forever friend now!")))),l.a.createElement("main",{className:"wrapper"},l.a.createElement(y,{submitForm:this.handleSubmit}),l.a.createElement(b,{favPetList:this.state.favPetList,clickCrossButton:this.handleFavPetsClick}),l.a.createElement(g,{petList:this.state.petList,favPetList:this.state.favPetList,clickFavButton:this.handlePetsClick})))}}]),o}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.bf0c5d73.chunk.js.map