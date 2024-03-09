"use strict";(self.webpackChunkmhira_website=self.webpackChunkmhira_website||[]).push([[5403],{8593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(4848),o=n(8453);const i={sidebar_position:10},r="Activating R-Studio to test reports",a={id:"installation-guide/rstudio",title:"rstudio",description:"The rstudio container should not be exposed in production when sensitive data is in the data bases.",source:"@site/docs/4-installation-guide/10-rstudio.md",sourceDirName:"4-installation-guide",slug:"/installation-guide/rstudio",permalink:"/docs/installation-guide/rstudio",draft:!1,unlisted:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/4-installation-guide/10-rstudio.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Admin Password Reset",permalink:"/docs/installation-guide/admin-password-reset"},next:{title:"MHIRA Reporting",permalink:"/docs/category/mhira-reporting"}},d={},c=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"The rstudio container should not be exposed in production when sensitive data is in the data bases.\nPlease use this possiblity only for test purposes."})}),"\n",(0,s.jsx)(t.h1,{id:"activating-r-studio-to-test-reports",children:"Activating R-Studio to test reports"}),"\n",(0,s.jsxs)(t.p,{children:["The installation comes with an ",(0,s.jsx)(t.a,{href:"https://hub.docker.com/r/rocker/rstudio",children:"rstudio docker container"}),".\nThis container is a great way to test and develop the reports which are based on R.\nThis article describes how to activate this container."]}),"\n",(0,s.jsxs)(t.p,{children:["RStudio is not enabled by default. To enabled ",(0,s.jsx)(t.code,{children:"rstudio"})," set the following values in your ",(0,s.jsx)(t.code,{children:".env"})," file."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-env",children:"# To enable `rstudio` container uncomment the following line, that enables `rstudio` profile\n#COMPOSE_PROFILES=rstudio\n\n# uncomment the following line, and change the value after the equal sign to set the secret key and the username. \n#RSTUDIO_PASSWORD=rstudioPassword\n#RSTUDIO_USER=mhira # needs to match the user that started docker\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"In some cases, the rstudio user does not have write access to the 'shiny_apps' folder because it cannot write to the volume 'shiny apps'. In this case, it might be required to set the user name of the rstudio user to a linux user who has access to the location where the volume 'shiny_apps' is stored on the server. This seems to be some unexpected behavior of the dockerised version of rstudio."})}),"\n",(0,s.jsx)(t.p,{children:"After setting above values run"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"docker compose stop\ndocker compose up -d\n"})}),"\n",(0,s.jsx)(t.p,{children:"Accessing R-studio container"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://localhost:8787",children:"https://localhost:8787"}),"\nor\n",(0,s.jsx)(t.a,{href:"https://localhost/rstudio",children:"https://localhost/rstudio"})]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);