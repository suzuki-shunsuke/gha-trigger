"use strict";(self.webpackChunkgha_trigger=self.webpackChunkgha_trigger||[]).push([[971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="gha-trigger",l={unversionedId:"index",id:"index",title:"gha-trigger",description:"License",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/gha-trigger/",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/gha-trigger-docs/edit/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/gha-trigger/getting-started"}},s={},u=[{value:"Status",id:"status",level:2},{value:"Goal",id:"goal",level:2},{value:"Background",id:"background",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Supported runtime",id:"supported-runtime",level:2},{value:"How to rerun and cancel CI",id:"how-to-rerun-and-cancel-ci",level:2},{value:"How to trigger workflows manually",id:"how-to-trigger-workflows-manually",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"LICENSE",id:"license",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gha-trigger"},"gha-trigger"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/suzuki-shunsuke/gha-triggger/main/LICENSE"},(0,o.kt)("img",{parentName:"a",src:"http://img.shields.io/badge/license-mit-blue.svg?style=flat-square",alt:"License"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/gha-triggger"},"https://github.com/suzuki-shunsuke/gha-triggger")),(0,o.kt)("p",null,"GitHub App for Secure GitHub Actions"),(0,o.kt)("h2",{id:"status"},"Status"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Under development. This doesn't work yet.")),(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"Run GitHub Actions Workflow securely.\nPrevent GitHub Actions Workflow from being modifying and running malicious commands."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"GitHub Actions is very powerful CI Platform, but also has a security risk that someone modifies workflow and CI scripts and run malicious commands.\nFor example, secrets with strong permission may be abused and stolen."),(0,o.kt)("p",null,"You can use other CI Platform to prevent workflows from being modifying, but we would like to use GitHub Actions because GitHub Actions is very powerful."),(0,o.kt)("p",null,"So we design the architecture and develop GitHub App to achieve the above goal."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/186283702-cb3d7de1-6bb0-45dc-8387-d251068484a1.png",alt:"gha-trigger architecture"})),(0,o.kt)("p",null,"You create two GitHub repositories."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Main Repository",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Users develop this repository"),(0,o.kt)("li",{parentName:"ul"},"Disable GitHub Actions"))),(0,o.kt)("li",{parentName:"ul"},"CI Repository",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Manage GitHub Actions Workflows and CI scripts"),(0,o.kt)("li",{parentName:"ul"},"Only CI maintainers have write permissiono and other developers have only read permission")))),(0,o.kt)("p",null,"You install GitHub App ",(0,o.kt)("inlineCode",{parentName:"p"},"gha-trigger")," in these repositories.\nWhen events such as ",(0,o.kt)("inlineCode",{parentName:"p"},"push")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pull_request")," occur in Main Repository, the webhook is sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"gha-trigger"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"gha-trigger")," validates and filters webhooks and triggers GitHub Actions Workflows of CI Repository via GitHub API.\nWorkflows of CI Repository update commit statuses of Main Repository and send pull request comments so that developers can refer CI results from Main Repository's pull request pages."),(0,o.kt)("p",null,"The important thing is that workflows and CI scripts are managed at the repository other than ",(0,o.kt)("inlineCode",{parentName:"p"},"Main Repository")," and only restricted people have the write permission of ",(0,o.kt)("inlineCode",{parentName:"p"},"CI Repository"),".\nThis prevents developers from modifying workflows and CI scripts and makes GitHub Actions secure."),(0,o.kt)("h2",{id:"supported-runtime"},"Supported runtime"),(0,o.kt)("p",null,"gha-trigger supports only AWS Lambda at the moment,\nbut we're considering to support other platform such as Google Cloud Function too."),(0,o.kt)("h2",{id:"how-to-rerun-and-cancel-ci"},"How to rerun and cancel CI"),(0,o.kt)("p",null,"Developers don't have the write permission of CI Repository, so they can't rerun and cancel workflows directly.\nBut they can rerun and cancel workflows via pull request comments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rerun workflows: ",(0,o.kt)("inlineCode",{parentName:"li"},"/rerun-workflow <workflow id> [<workflow id> ...]")),(0,o.kt)("li",{parentName:"ul"},"Rerun failed jobs: ",(0,o.kt)("inlineCode",{parentName:"li"},"/rerun-failed-jobs <workflow id> [<workflow id> ...]")),(0,o.kt)("li",{parentName:"ul"},"Rerun jobs: ",(0,o.kt)("inlineCode",{parentName:"li"},"/rerun-job <job id> [<job id> ...]")),(0,o.kt)("li",{parentName:"ul"},"Cancel workflows: ",(0,o.kt)("inlineCode",{parentName:"li"},"/cancel <workflow id> [<workflow id> ...]"))),(0,o.kt)("h2",{id:"how-to-trigger-workflows-manually"},"How to trigger workflows manually"),(0,o.kt)("p",null,"If you would like to add workflows that developers run manually, you have to create a repository for those workflows.\nLet's call the repository ",(0,o.kt)("inlineCode",{parentName:"p"},"Manual Trigger Repository"),".\nYou have to install GitHub App in ",(0,o.kt)("inlineCode",{parentName:"p"},"Main Repository")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Manual Trigger Repository")," so that workflows can access ",(0,o.kt)("inlineCode",{parentName:"p"},"Main Repository"),".\nYou also have to give developers the write permission of ",(0,o.kt)("inlineCode",{parentName:"p"},"Manual Trigger Repository"),", so you have to be careful the treat of this repository."),(0,o.kt)("p",null,"One of the usecase of this repository we assume is that developers scaffold pull requests of Main Repository."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfaction"},"tfaction")," provides the feature."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://suzuki-shunsuke.github.io/tfaction/docs/feature/scaffold-working-dir"},"Scaffold working directory by GitHub Actions workflow_dispatch event")),(0,o.kt)("p",null,"In that case, you can give GitHub App only permission to push commits to ",(0,o.kt)("inlineCode",{parentName:"p"},"Main Repository"),".\nIf GitHub App can create pull requests to ",(0,o.kt)("inlineCode",{parentName:"p"},"Main Repository"),", a developer can approve and merge them himself. This is risky so workflows should create only feature branches in ",(0,o.kt)("inlineCode",{parentName:"p"},"Main Repository")," and let developers open pull requests themselves."),(0,o.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,o.kt)("h3",{id:"pros"},"Pros"),(0,o.kt)("p",null,"The pros of ",(0,o.kt)("inlineCode",{parentName:"p"},"gha-trigger")," is that you can run GitHub Actions securely.\nYou can prevent GitHub Actions Workflow from being modifying and running malicious commands."),(0,o.kt)("h3",{id:"cons"},"Cons"),(0,o.kt)("p",null,"Compared with normal GitHub Actions usage, ",(0,o.kt)("inlineCode",{parentName:"p"},"gha-trigger")," has some drawbacks."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"github.token")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"CI Repository")," can't be used to access ",(0,o.kt)("inlineCode",{parentName:"li"},"Main Repository")),(0,o.kt)("li",{parentName:"ul"},"You have to fix workfows to migrate existing workflows to ",(0,o.kt)("inlineCode",{parentName:"li"},"gha-trigger")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gha-trigger")," uses not Checks API but Commit Status API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gha-trigger")," calls GitHub API so it has a risk of GitHub API rate limit issue"),(0,o.kt)("li",{parentName:"ul"},"The experience for rerunning and canceling CI isn't good"),(0,o.kt)("li",{parentName:"ul"},"It spends money"),(0,o.kt)("li",{parentName:"ul"},"You have to set up and maintain ",(0,o.kt)("inlineCode",{parentName:"li"},"gha-trigger"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Continous update"),(0,o.kt)("li",{parentName:"ul"},"Monitoring"),(0,o.kt)("li",{parentName:"ul"},"Trouble shooting and user support")))),(0,o.kt)("h2",{id:"license"},"LICENSE"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/suzuki-shunsuke/gha-triggger/main/LICENSE"},"MIT")))}c.isMDXComponent=!0}}]);