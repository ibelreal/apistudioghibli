(this["webpackJsonpmy-studio-ghibli"]=this["webpackJsonpmy-studio-ghibli"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"name":"Arrietty","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/arrietty_poster-683x1024.jpg"},{"name":"Castle in the Sky","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/1476-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"From Up on Poppy Hill","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/16933-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"Grave of the Fireflies","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/1100-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"Howl\'s Moving Castle","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/2783-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"Kiki\'s Delivery Service","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/poster_kiki-683x1024.jpg"},{"name":"My Neighbor Totoro","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/poster_my_neighbor_totoro-683x1024.jpg"},{"name":"My Neighbors the Yamadas","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/1484-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"Only Yesterday","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/1479-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"Pom Poko","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/1482-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"Ponyo","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/14815-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"Porco Rosso","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/poster_porco_rosso-683x1024.jpg"},{"name":"Princess Mononoke","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/06/poster_mononoke-683x1024.jpg"},{"name":"Spirited Away","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/1055-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"Tales from Earthsea","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/5845-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"The Cat Returns","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/poster_cat_returns-683x1024.jpg"},{"name":"The Tale of the Princess Kaguya","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/18651-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"The Wind Rises","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/poster_wind_rises-683x1024.jpg"},{"name":"When Marnie Was There","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/22719-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"},{"name":"Whisper of the Heart","url":"https://www.studioghibli.com.au/wp-content/uploads/2017/07/1483-title-treatment-portrait-key-art-normal-medium-683x1024.jpg"}]')},25:function(e,t,a){e.exports=a.p+"static/media/logo2.d5bd44dd.svg"},35:function(e,t,a){e.exports=a(91)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),l=a(21),n=a.n(l),o=a(22),c=a(23),s=a(31),m=a(24),u=a(8),d=a(32),p=a(7),h=a(25),w=a.n(h),f=(a(40),function(){return i.a.createElement("header",{className:"header"},i.a.createElement("img",{src:w.a,className:"header__logo",alt:"studio ghibli logo"}))});a(41);var g=function(e){return i.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault()}},i.a.createElement("label",{htmlFor:"searchFilm"},"Search for a film: "),i.a.createElement("input",{className:"form__searchBar",type:"text",name:"searchFilm",id:"searchFilm",placeholder:"My neighbor Totoro",value:e.valueText,onChange:function(t){var a=t.target.value.trim().toLowerCase();e.handleSearch(a)}}),i.a.createElement("label",null,"A to Z:",i.a.createElement("input",{name:"isSorted",type:"checkbox",checked:e.isSorted,onChange:function(){e.handleSorted()}})),i.a.createElement("div",{className:"filter__specie"},i.a.createElement("label",{className:"filter__label"},"Director: "),i.a.createElement("select",{className:"filter__input",onChange:function(t){e.handleSelectDirector({selectDirector:t.target.value})},value:e.selectDirector},i.a.createElement("option",{value:""}," All "),i.a.createElement("option",{value:"Gor\u014d Miyazaki"},"Gor\u014d Miyazaki"),i.a.createElement("option",{value:"Hayao Miyazaki"},"Hayao Miyazaki"),i.a.createElement("option",{value:"Hiromasa Yonebayashi"},"Hiromasa Yonebayashi"),i.a.createElement("option",{value:"Hiroyuki Morita"},"Hiroyuki Morita"),i.a.createElement("option",{value:"Isao Takahata"},"Isao Takahata"),i.a.createElement("option",{value:"Yoshifumi Kond\u014d"},"Yoshifumi Kond\u014d"))))},b=a(9);a(42);var E=function(e){var t=e.filmItem.id,a="/films/".concat(t);return i.a.createElement("div",{className:"card"},i.a.createElement(b.b,{to:a},i.a.createElement("h2",{className:"card__title"},e.filmItem.title),i.a.createElement("div",{className:"card__container"},i.a.createElement("img",{className:"card__container--movie",src:e.filmItem.urlCover,alt:"movie cover"}))))};a(48);var v=function(e){return i.a.createElement("ul",{className:"cards"},!0===e.isSorted?e.filterFilms.sort((function(e,t){return e.title.localeCompare(t.title)})).map((function(e){return i.a.createElement("li",{key:e.id,className:"list__item"},i.a.createElement(E,{filmItem:e}))})):e.filterFilms.map((function(e){return i.a.createElement("li",{key:e.id,className:"list__item"},i.a.createElement(E,{filmItem:e}))})))},_=(a(49),function(e){var t=e.films,a=t.title,r=t.description,l=t.director,n=t.producer,o=t.release_date,c=t.rt_score,s=t.urlCover;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"card--detail container"},i.a.createElement("div",{className:"card__detail"},i.a.createElement(b.b,{to:"/"},i.a.createElement("button",{className:"fas fa-backward card__detail--button"}," BACK ")),i.a.createElement("h3",{className:"card__detail--title"},a),i.a.createElement("div",null,i.a.createElement("img",{className:"card__detail--image",src:s,alt:a})),i.a.createElement("p",{className:"card__detail--description"},r),i.a.createElement("ul",null,i.a.createElement("li",{className:"card__detail--text"},"Director: ",l),i.a.createElement("li",{className:"card__detail--text"},"Producer: ",n),i.a.createElement("li",{className:"card__detail--text"},"Year: ",o),i.a.createElement("li",{className:"card__detail--text"},"Score: ",c)))))}),y=a(28),k=function(e){var t=e.speed,a=void 0===t?-20:t;return i.a.createElement(y.CircleLoading,{speed:a})},S=a(12),x=(a(90),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={films:[],searchFilm:"",isSorted:!1,selectDirector:"",loading:!0},a.handleSearch=a.handleSearch.bind(Object(u.a)(a)),a.filterFilms=a.filterFilms.bind(Object(u.a)(a)),a.renderFilmsDetail=a.renderFilmsDetail.bind(Object(u.a)(a)),a.handleSorted=a.handleSorted.bind(Object(u.a)(a)),a.handleSelectDirector=a.handleSelectDirector.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://ghibliapi.herokuapp.com/films").then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return alert("Se ha detectado un error: ".concat(e))})).then((function(t){if(void 0===t)return e.setState({loading:!0});for(var a=0;a<t.length;a++)for(var r=0;r<S.length;r++)t[a].title===S[r].name&&(t[a].urlCover=S[r].url);return e.setState({films:t,loading:!1})}))}},{key:"handleSearch",value:function(e){this.setState({searchFilm:e})}},{key:"handleSorted",value:function(){!1===this.state.isSorted?this.setState({isSorted:!0}):this.setState({isSorted:!1})}},{key:"handleSelectDirector",value:function(e){this.setState(e)}},{key:"filterFilms",value:function(){var e=this.state.films,t=this.state.selectDirector,a=this.state.searchFilm;return e.filter((function(e){return e.title.trim().toLowerCase().includes(a)})).filter((function(e){return""===t||e.director===t}))}},{key:"renderFilmsDetail",value:function(e){var t=e.match.params.id,a=this.state.films.find((function(e){return e.id===t}));return a?i.a.createElement(_,{films:a}):i.a.createElement("p",null,"Ups...the film you are looking for doesn't exist")}},{key:"render",value:function(){return console.log(this.state),i.a.createElement("div",{className:"App"},this.state.loading?i.a.createElement(k,null):i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:"/"},i.a.createElement("header",null),i.a.createElement("div",{className:"App__background"},i.a.createElement(g,{handleSearch:this.handleSearch,valueText:this.state.searchText,handleSorted:this.handleSorted,isSorted:this.state.isSorted,handleSelectDirector:this.handleSelectDirector,selectDirector:this.selectDirector}),i.a.createElement(v,{filterFilms:this.filterFilms(),isSorted:this.state.isSorted}))),i.a.createElement(p.a,{path:"/films/:id",render:this.renderFilmsDetail}))))}}]),t}(i.a.Component));n.a.render(i.a.createElement(b.a,null,i.a.createElement(x,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.cd665a1b.chunk.js.map