(this.webpackJsonpgitpicasso=this.webpackJsonpgitpicasso||[]).push([[0],{33:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),o=n(4),s=n.n(o),i=(n(33),n(22)),u=n(5),l=n(6),h=n(8),d=n(7),m=(n(34),n(81)),b=n(9),j=n.n(b),p=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).sendYear=function(e){a.props.changeState("year",e)},a.handleChange=function(e){var t=parseInt(e.target.value);t=(t=t<1900?1900:t)>a.state.currentYear?a.state.currentYear:t,a.sendYear(t)},a.state={currentYear:(new Date).getFullYear()},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"yearSelector",children:Object(a.jsx)(m.a,{value:this.props.year,onChange:this.handleChange,id:"standard-textarea",label:"Enter Year",type:"number"})})}}]),n}(r.a.Component),O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).sendGithub=function(e){a.props.changeState("github",e)},a.handleChange=function(e){a.sendGithub(e.target.value)},a.state={github:e.github},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.sendGithub=j()(this.sendGithub,300)}},{key:"render",value:function(){this.state.text;return Object(a.jsx)(m.a,{selected:!0,classes:{root:"MenuItem",selected:"selected"},onChange:this.handleChange,id:"standard-textarea",label:"Github",autoFocus:"true",color:"primary",shrink:"true"})}}]),n}(r.a.Component),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).sendRepo=function(e){a.props.changeState("repo",e)},a.handleChange=function(e){a.sendRepo(e.target.value)},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.sendRepo=j()(this.sendRepo,300)}},{key:"render",value:function(){return Object(a.jsx)(m.a,{onChange:this.handleChange,id:"standard-textarea",label:"Repo Name"})}}]),n}(r.a.Component),g=(n(49),n(13)),x=n.n(g),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleRightClick=function(e){e.preventDefault()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.commits,n=e.handleClick,c=e.id,r=(e.allowDrawOnMouseOver,t[c]?t[c].color:"#EBEDF0"),o=t[c]?t[c].count:0;return Object(a.jsx)("div",{className:"commit",id:c,style:{backgroundColor:r},onClick:n,onDragEnter:n,onContextMenu:n,children:o})}}]),n}(r.a.Component);function C(e,t){var n=366===x()(parseInt(t));return e>=0&&e<=12?[31,n?29:28,31,30,31,30,31,31,30,31,30,31][e-1]:null}var w=function(e){for(var t=e.handleClick,n=e.commits,c=e.allowDrawOnMouseOver,r=e.year,o=364+function(e){var t="".concat(e,"-12-31"),n=new Date(t).getDay();return isNaN(n)?null:(n+1)%7}(r=void 0===r||null===r?0:r)-x()(parseInt(r)),s=[],i=1,u=1,l=C(u,r),h=0;h<53;h++){for(var d=[],m=0;m<7&&!(u>12);m++)if(o>=0)d.push(Object(a.jsx)(f,{commits:n,id:h+m,className:"commit"})),o--;else{var b="".concat(r,"-").concat(u<10?"0"+u:u,"-").concat(i<10?"0"+i:i);d.push(Object(a.jsx)(f,{className:"commit",id:b,year:r,handleClick:t,commits:n,allowDrawOnMouseOver:c})),++i>l&&(i=1,l=C(++u,r))}s.push(Object(a.jsx)("div",{className:"cols",children:d}))}return s};n(14),n(24);function y(e,t,n){var a=[],c="gitpicasso";for(var r in a.push("#!/bin/bash\n"),a.push("REPO=".concat(t,"\n")),a.push("git init $REPO\n"),a.push("cd $REPO\n"),a.push("touch README.md\n"),a.push("git add README.md\n"),a.push("touch ".concat(c,"\n")),a.push("git add ".concat(c,"\n")),e)for(var o=0;o<e[r].count;o++){var s="GIT_AUTHOR_DATE=".concat(r,"T12:00:00 GIT_COMMITTER_DATE=").concat(r,'T12:00:00 git commit --allow-empty -m "').concat(c,'" > /dev/null\n');a.push(s)}return a.push("git remote add origin git@github.com:".concat(n,"/$REPO.git\n")),a.push("git pull origin master --allow-unrelated-histories\n"),a.push("git push -u origin master\n"),function(e){var t=document.createElement("a"),n=new Blob(e,{type:"text/plain"});t.href=URL.createObjectURL(n),t.download="gitpicasso.sh",document.body.appendChild(t),t.click()}(a),a}var k=function(e){var t=e.commits,n=e.repo,c=e.github;return t&&n&&c?Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"generate-btn",onClick:function(){return y(t,n,c)},children:"Generate the Script"})}):Object(a.jsx)("div",{children:Object(a.jsx)("h4",{className:"errorMsg",children:"Please fill all the fields"})})};function D(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Home"}),Object(a.jsx)("li",{children:"How to Use"}),Object(a.jsx)("li",{children:"About"}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"https://github.com/aliqsson-greenborders/github-picasso",children:"GitHub"})})]})})}var E=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).getColorGroup=function(t){var n=e.state,a=n.maxCommits,c=n.colorValues,r=t?t/a*100:0;return 0===r?c.commits0:r<25?c.commits1:r<50?c.commits2:r<75?c.commits3:c.commits4},e.handleClick=function(t){var n=t.type;t.preventDefault();var a=t.target.id,c=e.state.commits,r=e.state,o=r.maxCommits;r.maxFreq;if(c[a]){if(10===c[a].count&&"contextmenu"!==n)return;"contextmenu"===n&&c[a].count>0?c[a].count--:c[a].count++}else c[a]={},c[a].count="contextmenu"===n?0:1;c[a].color=e.getColorGroup(c[a].count),c[a].count>o&&(o=c[a].count,e.setState({maxCommits:o}),e.rerenderColors()),e.setState({commits:c})},e.rerenderColors=function(){var t=e.state.commits;for(var n in t)t[n].color=e.getColorGroup(t[n].count);e.setState(t)},e.changeState=function(t,n){e.setState(Object(i.a)({},t,n))},e.state={allowDrawOnMouseOver:!1,isWrongInput:!1,github:"",year:"2020",repo:"",isValidGithub:!1,isValidYear:!1,isValidRepo:!1,commits:{},minCommits:0,maxCommits:0,maxFreq:0,colorValues:{commits0:"#EBEDF0",commits1:"#9BE9A8",commits2:"#40C462",commits3:"#30A14E",commits4:"#216E39"}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,n=t.github,c=t.year,r=t.repo,o=t.commits,s=t.maxCommits,i=(t.inputCompleted,t.allowDrawOnMouseOver);return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(D,{}),Object(a.jsxs)("div",{className:"window",children:[Object(a.jsxs)("div",{className:"title-bar",children:[Object(a.jsx)("p",{children:" Turn your GitHub into an Artboard "})," "]}),Object(a.jsxs)("div",{className:"window-body",children:[Object(a.jsxs)("div",{className:"inputs",disabled:!0,children:[Object(a.jsx)(O,{github:n,changeState:this.changeState})," ",Object(a.jsx)(p,{year:c,changeState:this.changeState})," ",Object(a.jsx)(v,{repo:r,changeState:this.changeState})," "]})," ",Object(a.jsxs)("div",{className:"commits-board",children:[Object(a.jsx)(w,{handleClick:this.handleClick,commits:o,year:c,allowDrawOnMouseOver:i})," ",Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"checkbox",value:"checkbox",name:"allowmouseover",onChange:function(){var t=e.state.allowDrawOnMouseOver;e.setState({allowDrawOnMouseOver:!t})}})," ",Object(a.jsx)("label",{for:"allowmouseover",children:" Draw on MouseOver "})," "]})," ",Object(a.jsxs)("div",{children:[Object(a.jsx)(k,{commits:o,github:n,repo:r})," "]})," ",Object(a.jsxs)("footer",{children:[Object(a.jsxs)("h3",{children:[" Current maxCommits: ",s," "]})," ",Object(a.jsx)("h3",{children:" Max commits allowed: 10 "})," "]})]})," "]}),Object(a.jsx)("br",{})]})]})}}]),n}(r.a.Component);s.a.render(Object(a.jsx)(E,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.cc67cc7e.chunk.js.map