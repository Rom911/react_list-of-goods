(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s,o=n(3),r=n.n(o),c=n(4),i=n(5),a=n(7),l=n(6),h=n(1),u=n.n(h),b=(n(12),n(0)),d=function(e){var t=e.copiedGoods;return Object(b.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(b.jsx)("li",{className:"list-group-item",children:e},e)}))})},j=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]);!function(e){e.Alphabet="alphabet",e.Length="length",e.Default=""}(s||(s={}));var p=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={goods:j,isReversed:!1,sortBy:s.Default,isVisible:!1,goodsLength:1},e.showGoodsList=function(){e.setState({isVisible:!0})},e.setGoodsLength=function(t){e.setState({goodsLength:+t.target.value})},e.goodsToShow=function(){var t=e.state,n=t.goods,s=t.isReversed,o=t.goodsLength,r=n.filter((function(e){return e.length>=o}));return r.sort(e.sortType),s&&r.reverse(),r},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortType=function(t,n){switch(e.state.sortBy){case s.Length:return t.length-n.length;case s.Alphabet:return t.localeCompare(n);default:return 0}},e.changeSortType=function(t){e.setState({sortBy:t.currentTarget.name,isReversed:!1})},e.reset=function(){e.setState({sortBy:s.Default,isReversed:!1,goodsLength:1})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Goods"}),Object(b.jsx)("button",{type:"button",onClick:this.showGoodsList,className:"bttn",children:"Start"}),this.state.isVisible&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{type:"button",onClick:this.reverse,className:"bttn bttn-reverse",children:"Reverse"}),Object(b.jsx)("button",{type:"button",name:s.Alphabet,onClick:this.changeSortType,className:"bttn bttn-reverse",children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",name:s.Length,onClick:this.changeSortType,className:"bttn bttn-reverse",children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:this.reset,className:"bttn bttn-reset",children:"Reset"}),Object(b.jsxs)("div",{children:["Choose goods length: ",Object(b.jsxs)("select",{name:"numberOfGoods",value:this.state.goodsLength,onChange:this.setGoodsLength,children:[Object(b.jsx)("option",{value:"1",children:"1"}),Object(b.jsx)("option",{value:"2",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"}),Object(b.jsx)("option",{value:"5",children:"5"}),Object(b.jsx)("option",{value:"6",children:"6"}),Object(b.jsx)("option",{value:"7",children:"7"}),Object(b.jsx)("option",{value:"8",children:"8"}),Object(b.jsx)("option",{value:"9",children:"9"}),Object(b.jsx)("option",{value:"10",children:"10"})]})]}),Object(b.jsx)(d,{copiedGoods:this.goodsToShow()})]})]})}}]),n}(u.a.Component),g=p;r.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.72267ce0.chunk.js.map