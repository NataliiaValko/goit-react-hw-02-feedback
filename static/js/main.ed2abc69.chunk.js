(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={button__list:"FeedbackOptions_button__list__3PM5d",button:"FeedbackOptions_button__1S5r5",good:"FeedbackOptions_good__NAr3E",neutral:"FeedbackOptions_neutral__2TAKJ",bad:"FeedbackOptions_bad__UItF8"}},function(t,e,n){t.exports={title:"Statistics_title__3GLeI",list:"Statistics_list__38fKn",good:"Statistics_good__1LvEx",bad:"Statistics_bad__VlS1u",neutral:"Statistics_neutral__1eBMX",total:"Statistics_total__2T_RU",positivePercentage:"Statistics_positivePercentage__2cydC",text:"Statistics_text__387w3"}},,function(t,e,n){t.exports={section:"Section_section__3NzGE",title:"Section_title__2iKNH"}},,,,,function(t,e,n){t.exports={container:"Container_container__3y1nE"}},function(t,e,n){t.exports={text:"Notification_text__Fr950"}},function(t,e,n){t.exports={wrapper:"App_wrapper__2BYVA"}},,,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(6),s=n.n(i),o=(n(19),n(20),n(7)),r=n(8),l=n(9),u=n(14),b=n(13),d=n(2),_=n.n(d),j=n(0),p=function(t){var e=t.onLeaveFeedback,n=t.options;return Object(j.jsx)("ul",{className:_.a.button__list,children:Object.keys(n).map((function(t){return Object(j.jsx)("li",{className:_.a.button__item,children:Object(j.jsx)("button",{className:[_.a.button,_.a[t]].join(" "),onClick:function(){return e(t)},children:t})},t)}))})},h=n(3),x=n.n(h),O=function(t){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:x.a.title,children:"Statistics"}),Object(j.jsx)("ul",{className:x.a.list,children:Object.keys(t).map((function(e){return Object(j.jsx)("li",{className:x.a[e],children:Object(j.jsxs)("p",{className:x.a.text,children:["positivePercentage"===e?"positive feedback":e,":"," ",t[e]]})},e)}))})]})},f=n(5),v=n.n(f),k=n(10),g=n.n(k),m=function(t){var e=t.children;return Object(j.jsx)("div",{className:g.a.container,children:e})},F=function(t){var e=t.title,n=void 0===e?"":e,a=t.children;return Object(j.jsx)("section",{className:v.a.section,children:Object(j.jsxs)(m,{children:[n&&Object(j.jsx)("h1",{className:v.a.title,"aria-label":"Please leave your feedback",children:n}),a]})})},N=n(11),S=n.n(N),P=function(t){var e=t.message;return Object(j.jsx)("p",{className:S.a.text,children:e})},y=n(12),w=n.n(y),L=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:t.props.initialValue,neutral:t.props.initialValue,bad:t.props.initialValue},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){return t.countTotalFeedback()>0?"".concat(Math.round(t.state.good/t.countTotalFeedback()*100),"%"):"0%"},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.onLeaveFeedback,e=this.state,n=this.state,a=n.good,c=n.neutral,i=n.bad,s=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:w.a.wrapper,children:Object(j.jsx)(F,{title:"Please leave your",children:Object(j.jsx)(p,{onLeaveFeedback:t,options:e})})}),Object(j.jsx)(F,{children:s?Object(j.jsx)(O,{good:a,neutral:c,bad:i,total:s,positivePercentage:o}):Object(j.jsx)(P,{message:"No feedback given..."})})]})}}]),n}(a.Component);L.defaultProps={initialValue:0};var T=L;s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.ed2abc69.chunk.js.map