(window.webpackJsonpsoc_network=window.webpackJsonpsoc_network||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return i});var r=n(132),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8cb29b96-1ff9-457a-9229-34cee0202934"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e)).then(function(e){return e.data})},unfollow:function(e){return a.delete("follow/".concat(e)).then(function(e){return e.data})}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},i={getUserProfile:function(e){return a.get("profile/".concat(e)).then(function(e){return e.data})},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}}},127:function(e,t){e.exports="data:image/png;base64,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"},128:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(45),a=n(15);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var i={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"How is"},{id:4,message:"Hello"},{id:5,message:"Yo"}],dialogsData:[{id:1,name:"Dima"},{id:2,name:"Kolya"},{id:3,name:"Ira"},{id:4,name:"Petya"},{id:5,name:"Arsen"},{id:6,name:"Vartan"}]},u=function(e){return{type:"dialog/SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialog/SEND_MESSAGE":var n=t.newMessageBody;return c({},e,{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:6,message:n}])});default:return e}}},137:function(e,t,n){e.exports={user_img:"Users_user_img__33UCV"}},138:function(e,t,n){e.exports=n.p+"static/media/spinner.2ef34724.svg"},165:function(e,t,n){e.exports=n(291)},18:function(e,t,n){e.exports={nav:"Navbar_nav__1_E3a",item:"Navbar_item__PJqcP",activeLink:"Navbar_activeLink__iqjuZ"}},191:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(63),c=n.n(o),i=n(35),u=n(36),s=n(38),l=n(37),f=n(39),p=n(29),g=n(9),m=n(15),d=n(7),v=n.n(d),A=n(14),b=n(11),h=n(30);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w={userId:null,email:null,login:null,isAuth:!1},O=function(e,t,n,r){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},y=function(){return function(){var e=Object(A.a)(v.a.mark(function e(t){var n,r,a,o,c;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,c=r.email,t(O(a,c,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return E({},e,{},t.payload);default:return e}};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var C={initialized:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return S({},e,{initialized:!0});default:return e}},D=(n(191),n(18)),N=n.n(D),M=n(12),T=n(46),x=n.n(T),U=function(e){return a.a.createElement("div",{className:x.a.one_friend},a.a.createElement("img",{src:"https://pbs.twimg.com/profile_images/950068518313017344/vY9UQRFH_400x400.jpg",alt:""}),a.a.createElement("p",{className:x.a.friend_name},e.friend.name))},B=function(e){var t=e.friedsState.map(function(e){return a.a.createElement(U,{key:e.id,friend:e})});return a.a.createElement("div",{className:x.a.friends_block},a.a.createElement("p",{className:"title"},"Friends"),a.a.createElement("div",{className:x.a.friends},t))},Q=Object(g.b)(function(e){return{friedsState:e.siteBar.friends}},function(e){return{}})(B),F=function(e){return a.a.createElement("nav",{className:N.a.nav},a.a.createElement("div",{className:N.a.item},a.a.createElement(M.b,{activeClassName:N.a.activeLink,to:"/profile"},"Profile")),a.a.createElement("div",{className:N.a.item},a.a.createElement(M.b,{activeClassName:N.a.activeLink,to:"/dialogs"},"Messages")),a.a.createElement("div",{className:N.a.item},a.a.createElement(M.b,{activeClassName:N.a.activeLink,to:"/users"},"Users")),a.a.createElement("div",{className:N.a.item},a.a.createElement(M.b,{activeClassName:N.a.activeLink,to:"/news"},"News")),a.a.createElement("div",{className:N.a.item},a.a.createElement(M.b,{activeClassName:N.a.activeLink,to:"/music"},"Music")),a.a.createElement("div",{className:N.a.item},a.a.createElement(M.b,{activeClassName:N.a.activeLink,to:"/settings"},"Settings")),a.a.createElement(Q,null))},R=function(e){return a.a.createElement("div",null,"News")},L=function(e){return a.a.createElement("div",null,"Music")},K=function(e){return a.a.createElement("div",null,"Settings")},H=n(129),W=n(33),V=n(85),_=n(50),J=n.n(_),Y=Object(H.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(W.c)("Email","email",W.a,[V.b]),Object(W.c)("Password","password",W.a,[V.b],{type:"password"}),Object(W.c)(null,"rememberMe",W.a,[],{type:"checkbox"}," remember me"),n&&a.a.createElement("div",{className:J.a.formSummaryError},a.a.createElement("span",null,"Login or email invalid")),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}),G=Object(g.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var r=Object(A.a)(v.a.mark(function r(a){var o,c;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(y()):(c=o.data.message>0?o.data.message[0]:"invalid login or email",a(Object(h.a)("login",{_error:c})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){var t=e.login;return e.isAuth?a.a.createElement(p.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(Y,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}}))}),X=n(8),z=n(45);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var q=function(e,t,n,r){return e.map(function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{},r):e})};function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var te="users/FOLLOW",ne={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},re=function(e){return{type:te,userId:e}},ae=function(e){return{type:"users/UNFOLLOW",userId:e}},oe=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},ce=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,userId:t}},ie=function(){var e=Object(A.a)(v.a.mark(function e(t,n,r,a){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(ce(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(ce(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return ee({},e,{users:q(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return ee({},e,{users:q(e.users,t.userId,"id",{followed:!1})});case"users/SET_USERS":return ee({},e,{users:t.users});case"users/SET_CURRENT_PAGE":return ee({},e,{currentPage:t.currentPage});case"users/USERS_TOTAL_COUNT":return ee({},e,{totalUsersCount:t.totalCount});case"users/TOGGLE_IS_FETCHING":return ee({},e,{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_PROGRESS":return ee({},e,{followingInProgress:t.followingInProgress?[].concat(Object(z.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!==t.userId})});default:return e}},se=n(135),le=Object(se.a)([function(e){return e.usersPage.users}],function(e){return e.filter(function(){return!0})}),fe=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUsersCount},ge=function(e){return e.usersPage.currentPage},me=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.followingInProgress},ve=n(96),Ae=n(70),be=n.n(Ae),he=n(136),Pe=n.n(he),Ee=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,i=e.portionSize,u=void 0===i?10:i,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/u),g=Object(r.useState)(1),d=Object(ve.a)(g,2),v=d[0],A=d[1],b=(v-1)*u+1,h=v*u;return a.a.createElement("div",{className:"".concat(be.a.paginator," Paginator")},v>1&&a.a.createElement("button",{onClick:function(){A(v-1)}},"prev"),l.filter(function(e){return e>=b&&e<=h}).map(function(e){return a.a.createElement("span",{key:e,className:Pe()(Object(m.a)({},be.a.selectedPage,o===e),be.a.pageNumber),onClick:function(){c(e)}},e)}),p>v&&a.a.createElement("button",{onClick:function(){A(v+1)}},"next"))},we=n(137),Oe=n.n(we),ye=n(127),ke=n.n(ye),je=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",{className:"User"},a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(M.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:ke.a,className:Oe.a.user_img,alt:""}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},Se=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.onPageChanged,o=e.currentPage,c=e.users,i=e.followingInProgress,u=e.unfollow,s=e.follow;return a.a.createElement("div",{className:"Users"},a.a.createElement(Ee,{totalItemsCount:t,pageSize:n,onPageChanged:r,currentPage:o}),c.map(function(e){return a.a.createElement(je,{user:e,followingInProgress:i,unfollow:u,follow:s,key:e.id})}))},Ce=n(41),Ie=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){var t=n.props;(0,t.requestUsers)(e,t.pageSize)},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.requestUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){var e=this.props,t=e.isFetching,n=e.totalUsersCount,r=e.pageSize,o=e.currentPage,c=e.users,i=e.unfollow,u=e.follow,s=e.followingInProgress;return a.a.createElement(a.a.Fragment,null,t?a.a.createElement(Ce.a,null):null,a.a.createElement(Se,{totalUsersCount:n,pageSize:r,currentPage:o,onPageChanged:this.onPageChanged,users:c,unfollow:i,follow:u,followingInProgress:s}))}}]),t}(a.a.Component),De=Object(X.d)(Object(g.b)(function(e){return{users:le(e),pageSize:fe(e),totalUsersCount:pe(e),currentPage:ge(e),isFetching:me(e),followingInProgress:de(e)}},{follow:function(e){return function(){var t=Object(A.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:ie(n,e,b.c.follow.bind(b.c),re);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(A.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:ie(n,e,b.c.unfollow.bind(b.c),ae);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},toggleFollowingProgress:ce,requestUsers:function(e,t){return function(){var n=Object(A.a)(v.a.mark(function n(r){var a;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(oe(!0)),r({type:"users/SET_CURRENT_PAGE",currentPage:e}),n.next=4,b.c.getUsers(e,t);case 4:a=n.sent,r(oe(!1)),r({type:"users/SET_USERS",users:a.items}),r({type:"users/USERS_TOTAL_COUNT",totalCount:a.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}))(Ie),Ne=n(94),Me=n.n(Ne),Te=function(e){return a.a.createElement("header",{className:Me.a.header},a.a.createElement("img",{src:"https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png",alt:""}),a.a.createElement("div",{className:Me.a.login_block},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Log out")," "):a.a.createElement(M.b,{to:"/login"},"Login")))},xe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(Te,this.props)}}]),t}(a.a.Component),Ue=Object(g.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(A.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.logout();case 2:0===e.sent.data.resultCode&&t(O(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(xe),Be=function(e){return function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(Ce.a,null)},a.a.createElement(e,null))}},Qe=a.a.lazy(function(){return n.e(4).then(n.bind(null,297))}),Fe=a.a.lazy(function(){return n.e(3).then(n.bind(null,296))}),Re=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app_wrapper"},a.a.createElement(Ue,null),a.a.createElement(F,null),a.a.createElement("div",{className:"app_wrapper_content"},a.a.createElement(p.b,{path:"/dialogs",render:Be(Qe)}),a.a.createElement(p.b,{path:"/profile/:userId?",render:Be(Fe)}),a.a.createElement(p.b,{path:"/news",render:function(){return a.a.createElement(R,null)}}),a.a.createElement(p.b,{path:"/music",render:function(){return a.a.createElement(L,null)}}),a.a.createElement(p.b,{path:"/users",render:function(){return a.a.createElement(De,null)}}),a.a.createElement(p.b,{path:"/settings",render:function(){return a.a.createElement(K,null)}}),a.a.createElement(p.b,{path:"/login",render:function(){return a.a.createElement(G,null)}}))):a.a.createElement(Ce.a,null)}}]),t}(a.a.Component),Le=Object(g.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){e(y()).then(function(){e({type:"app/INITIALIZED_SUCCESS"})})}}})(Re),Ke=n(95),He=n(128),We={friends:[{id:1,name:"Ilya"},{id:2,name:"Lilya"},{id:3,name:"Misha"}]},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We;arguments.length>1&&arguments[1];return e},_e=n(139),Je=n(130),Ye=Object(X.c)({app:I,profilePage:Ke.b,dialogsPage:He.a,siteBar:Ve,usersPage:ue,auth:k,form:Je.a}),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,Xe=Object(X.e)(Ye,Ge(Object(X.d)(Object(X.a)(_e.a))));window.store=Xe;var ze=Xe;c.a.render(a.a.createElement(M.a,null,a.a.createElement(g.a,{store:ze},a.a.createElement(Le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return p});var r=n(91),a=n(0),o=n.n(a),c=n(50),i=n.n(c),u=n(88),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return o.a.createElement("div",{className:"".concat(i.a.form_control," ").concat(c?i.a.error:"")},o.a.createElement("div",null,a),c&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({placeholder:e,name:t,component:n,validate:r},a))," ",c)}},41:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(138),c=n.n(o);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:c.a,alt:""}))}},46:function(e,t,n){e.exports={friends:"FriendsBlock_friends__A7mao",one_friend:"FriendsBlock_one_friend__nWarc"}},50:function(e,t,n){e.exports={form_control:"FormsControls_form_control__2XR7O",error:"FormsControls_error__3yYKY",formSummaryError:"FormsControls_formSummaryError__19PcJ"}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__2G051",pageNumber:"Paginator_pageNumber__1Zv_u",selectedPage:"Paginator_selectedPage__1PTtg"}},85:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){return e||"number"===typeof e?void 0:"Required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},94:function(e,t,n){e.exports={header:"Header_header__26juA",login_block:"Header_login_block__2yS8C"}},95:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"g",function(){return v}),n.d(t,"c",function(){return A}),n.d(t,"f",function(){return b}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return P});var r=n(7),a=n.n(r),o=n(14),c=n(45),i=n(15),u=n(11),s=n(30);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p="profile/ADD_POST",g={posts:[{id:1,message:"It's my first post",likesCount:"11"},{id:2,message:"My too",likesCount:"12"},{id:3,message:"My too",likesCount:"12"},{id:4,message:"My too",likesCount:"12"}],profile:null,status:""},m=function(e){return{type:p,newPost:e}},d=function(e){return{type:"profile/SET_STATUS",status:e}},v=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getUserProfile(e);case 2:r=t.sent,n({type:"profile/SET_USER_PROFILE",profile:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(d(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"profile/SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n,r){var o,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:0===(c=t.sent).data.resultCode?n(v(o)):n(Object(s.a)("editProfile",{_error:c.data.message[0]}));case 5:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var n={id:5,message:t.newPost,likesCount:"6555"};return f({},e,{posts:[].concat(Object(c.a)(e.posts),[n])});case"profile/SET_USER_PROFILE":return f({},e,{profile:t.profile});case"profile/SET_STATUS":return f({},e,{status:t.status});case"profile/DELETE_POST":return f({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});case"profile/SAVE_PHOTO_SUCCESS":return f({},e,{profile:f({},e.profile,{photos:t.photos})});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.0453507b.chunk.js.map