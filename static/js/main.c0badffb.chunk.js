(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,s){t.exports={title:"Statistics_title__3GLeI",list:"Statistics_list__38fKn",result:"Statistics_result__2gRFU",details:"Statistics_details__21VDs Statistics_result__2gRFU",common:"Statistics_common__28zse Statistics_result__2gRFU",text:"Statistics_text__387w3",good:"Statistics_good__1LvEx Statistics_details__21VDs Statistics_result__2gRFU",neutral:"Statistics_neutral__1eBMX Statistics_details__21VDs Statistics_result__2gRFU",bad:"Statistics_bad__VlS1u Statistics_details__21VDs Statistics_result__2gRFU",total:"Statistics_total__2T_RU Statistics_common__28zse Statistics_result__2gRFU",positivePercentage:"Statistics_positivePercentage__2cydC Statistics_common__28zse Statistics_result__2gRFU"}},,function(t,e,s){t.exports={button__list:"FeedbackOptions_button__list__3PM5d",button:"FeedbackOptions_button__1S5r5",good:"FeedbackOptions_good__NAr3E FeedbackOptions_button__1S5r5",neutral:"FeedbackOptions_neutral__2TAKJ FeedbackOptions_button__1S5r5",bad:"FeedbackOptions_bad__UItF8 FeedbackOptions_button__1S5r5"}},,function(t,e,s){t.exports={section:"Section_section__3NzGE",title:"Section_title__2iKNH"}},,,,,function(t,e,s){t.exports={container:"Container_container__3y1nE"}},function(t,e,s){t.exports={text:"Notification_text__Fr950"}},function(t,e,s){t.exports={wrapper:"App_wrapper__2BYVA"}},,,,,,,,function(t,e,s){},,function(t,e,s){"use strict";s.r(e);var a=s(2),i=s.n(a),c=s(6),n=s.n(c),o=(s(19),s(20),s(7)),r=s(8),_=s(9),l=s(14),u=s(13),b=s(3),d=s.n(b),j=s(0),p=function(t){var e=t.onLeaveFeedback,s=t.names;return Object(j.jsx)("ul",{className:d.a.button__list,children:s.map((function(t){return Object(j.jsx)("li",{className:d.a.button__item,children:Object(j.jsx)("button",{type:"button",className:d.a[t],onClick:function(){return e(t)},children:t})},t)}))})},O=s(1),x=s.n(O),h=function(t){var e=t.options,s=t.total,a=t.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:x.a.title,children:"Statistics"}),Object(j.jsxs)("ul",{className:x.a.list,children:[Object.keys(e).map((function(t){return Object(j.jsx)("li",{className:x.a[t],children:Object(j.jsxs)("p",{className:x.a.text,children:[t,": ",e[t]]})},t)})),Object(j.jsx)("li",{className:x.a.total,children:Object(j.jsxs)("p",{className:x.a.text,children:["Total: ",s]})}),Object(j.jsx)("li",{className:x.a.positivePercentage,children:Object(j.jsxs)("p",{className:x.a.text,children:["Positive feedback: ",a]})})]})]})},m=s(5),f=s.n(m),S=s(10),v=s.n(S),g=function(t){var e=t.children;return Object(j.jsx)("div",{className:v.a.container,children:e})},F=function(t){var e=t.title,s=void 0===e?"":e,a=t.children;return Object(j.jsx)("section",{className:f.a.section,children:Object(j.jsxs)(g,{children:[s&&Object(j.jsx)("h1",{className:f.a.title,"aria-label":"Please leave your feedback",children:s}),a]})})},k=s(11),N=s.n(k),P=function(t){var e=t.message;return Object(j.jsx)("p",{className:N.a.text,children:e})},y=s(12),U=s.n(y),V=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(r.a)(this,s);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={good:t.props.initialValue,neutral:t.props.initialValue,bad:t.props.initialValue},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){return t.countTotalFeedback()>0?"".concat(Math.round(t.state.good/t.countTotalFeedback()*100),"%"):"0%"},t}return Object(_.a)(s,[{key:"render",value:function(){var t=Object.keys(this.state),e=this.state,s=this.countTotalFeedback(),a=this.countPositiveFeedbackPercentage();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:U.a.wrapper,children:Object(j.jsx)(F,{title:"Please leave your",children:Object(j.jsx)(p,{onLeaveFeedback:this.onLeaveFeedback,names:t})})}),Object(j.jsx)(F,{children:s?Object(j.jsx)(h,{options:e,total:s,positivePercentage:a}):Object(j.jsx)(P,{message:"No feedback given..."})})]})}}]),s}(a.Component);V.defaultProps={initialValue:0};var w=V;n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.c0badffb.chunk.js.map