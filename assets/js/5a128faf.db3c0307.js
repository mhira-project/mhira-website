"use strict";(self.webpackChunkmhira_website=self.webpackChunkmhira_website||[]).push([[1155],{5053:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var i=n(4848),t=n(8453);const l={sidebar_position:4},r="Data and Backup",s={id:"installation-guide/data-and-backup",title:"Data and Backup",description:"Data storage location",source:"@site/docs/4-installation-guide/4-data-and-backup.md",sourceDirName:"4-installation-guide",slug:"/installation-guide/data-and-backup",permalink:"/docs/installation-guide/data-and-backup",draft:!1,unlisted:!1,editUrl:"https://github.com/mhira-project/documentation/edit/main/docs/4-installation-guide/4-data-and-backup.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Installing MHIRA",permalink:"/docs/installation-guide/installing-mhira"},next:{title:"rstudio",permalink:"/docs/installation-guide/rstudio"}},c={},o=[{value:"Data storage location",id:"data-storage-location",level:2},{value:"Backup data",id:"backup-data",level:2},{value:"Automated daily backups",id:"automated-daily-backups",level:3},{value:"Manual backup",id:"manual-backup",level:3},{value:"Restoring Data",id:"restoring-data",level:2},{value:"Manual restore",id:"manual-restore",level:3},{value:"Restore using MHIRA backup utility",id:"restore-using-mhira-backup-utility",level:3}];function d(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"data-and-backup",children:"Data and Backup"}),"\n",(0,i.jsx)(a.h2,{id:"data-storage-location",children:"Data storage location"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"./installing-mhira#data-storage-location",children:"Please consult this section"})}),"\n",(0,i.jsx)(a.h2,{id:"backup-data",children:"Backup data"}),"\n",(0,i.jsx)(a.h3,{id:"automated-daily-backups",children:"Automated daily backups"}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"MHIRA"})," docker installation comes with a ",(0,i.jsx)(a.code,{children:"backup"})," helper container, that manages daily backups."]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"The default backup schedule is daily at midnight."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["The backup location is controlled by the ",(0,i.jsx)(a.code,{children:"DATA_BACKUP_PATH"})," key in the ",(0,i.jsx)(a.code,{children:".env"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["The default value for ",(0,i.jsx)(a.code,{children:"DATA_BACKUP_PATH"})," is ",(0,i.jsx)(a.code,{children:"~/.mhira-docker/backups"})]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"The backup utility creates a TAR archive of the MHIRA data directory and saves it in configured data backup path."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"It is recommended to use a different hard drive for backup storage, or where possible Remote Backup to a different location. This will make sure your data can be restored in case of hard drive failure or other incidents."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Please refer to your oganizations guidelines regarding best practices for backing up data and disaster recovery."}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(a.h3,{id:"manual-backup",children:"Manual backup"}),"\n",(0,i.jsx)(a.p,{children:"To manually backup data to the current working directory"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"# >> Using tar zip of the data folder\n# This will output the backup file in current directory where it is run\ntar -czvf mhira-data-$(date '+%Y-%m-%dT%T').tar.gz ~/.mhira-docker/data\n"})}),"\n",(0,i.jsx)(a.p,{children:"To manually backup data using MHIRA backup utility"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"# >> Using provided backup container\n# This will output the backup file in backup path configured in `dotenv` by `DATA_BACKUP_PATH` key\n# Default value for `DATA_BACKUP_PATH` is `~/.mhira-docker/backups`\ndocker compose exec backup /bin/backup\n"})}),"\n",(0,i.jsx)(a.h2,{id:"restoring-data",children:"Restoring Data"}),"\n",(0,i.jsx)(a.h3,{id:"manual-restore",children:"Manual restore"}),"\n",(0,i.jsx)(a.p,{children:"You may have multiple archives created at different times (we call them versions)."}),"\n",(0,i.jsx)(a.p,{children:"List the files in your data backup directory to see what versions are available"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"ls -lrth ~/.mhira-docker/backups\n"})}),"\n",(0,i.jsx)(a.p,{children:"Choose one of them (the latest if you want to restore the most recent copy of your data) and extract it."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"tar -xzvf {{replace_with_archive_name}} -C ~/.mhira-docker/\n"})}),"\n",(0,i.jsx)(a.h3,{id:"restore-using-mhira-backup-utility",children:"Restore using MHIRA backup utility"}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"backup"})," container provided by the ",(0,i.jsx)(a.code,{children:"mhira-docker"})," installation also provides a handy restore function."]}),"\n",(0,i.jsx)(a.p,{children:"This can be called by running:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"docker-compose exec backup /bin/restore\n\n"})}),"\n",(0,i.jsx)(a.p,{children:"This will prompt the user to select a backup archive to restore from."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Restore-Archives",src:n(8963).A+"",title:"Restore Archives",width:"354",height:"73"})}),"\n",(0,i.jsx)(a.p,{children:"On selecting an archive to restore from, the utility will restore the data directory path to the version from that archive."})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8963:(e,a,n)=>{n.d(a,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWIAAABJCAYAAAAHQCw7AAABR2lDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8rAwyDCwM2gy2CVmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisLQJ+fu3rbhcse7bA/tCRd6cx1aMArpTU4mQg/QeI05MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8gWSM5IBJrB+ALI1klCEk9HYkPtBQFeF1cfH4VQYxMjw3BXAu4lGZSkVpSAaOf8gsqizPSMEgVHYCilKnjmJevpKBgZGBkyMIDCHKL68w1wWDKKcSDE6jUZGCw3AwVZEWL+XxkYthswMPB9Q4ip72Bg4JdlYDhsWJBYlAh3AOM3luI0YyMIm3s7AwPrtP//P4czMLADzf17/f//39v///+7jIGB+RYDw4FvAIP1YWcL7YfFAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAAFioAMABAAAAAEAAABJAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdE3QQJsAAAHVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjczPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjM1NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgopK652AAAfoElEQVR4Ae2dB5QVtffHY0VsWAA7gojliGIHC/6wKxZULKiICnbxiIAdAXtBsRws2BGxoFiPCFbELip2sYtiR7Er1j+f8L/PbDZl5r23u293c8/ZnXmTyc3NnclNcnPznXlWXHHFf1WiBqOBBZdqq5ous5aad4FF1J8/f6F+/uRZpf6a3WDq11grslyTBdVWSy2uvpr9p3rq+x/V7/+kZltX70Kbpk3UWos0VQvPN59+Hs/98JOa/W9pz2OeZIjr6nGmcpMGkgaSBuZqYN5KUcSaa66pNtxwwzoVZ9ddd1XLLrtsUIa6kHPeeedVe+65p1psscWCsqXEpIGkgfqpgflNsTfeeGM1YMAAfenfOUPtzz//XN1zzz1q8uTJ5m01cr777rurZZZZRr344os1wj8L0/3220/99ttv6ssvv/TeXhdyNmnSRO21117qzTffVG+//bZXNknYZ5991FJLLaWuvPJKuVSRx/oiZ0UqLwnVoDRQxRBLzc466yw13xz/x4EHHqgOP/xw9dRTT6l//vlHkmvkeNVVV6kFF1ywRniXk2l9kHO11VbThric9a4JXvVFzpqoe+KZNGBqwGmIv/rqK/X111+rv/76S5122mmqU6dO6plnnlHXXnutuuaaa9Tzzz+veYwaNUpdcMEFeqRG2rvvvqvWXnttNc8886gHHnhA3Xrrrfq+UBpT/RNPPFHf98EHH6gzzzyzIF8oX8eOHVXfvn3VAgssoN555x3VunVrNWTIEPXxxx8X8tsnjCp32GEHtcgii6hvv/1W523atKm65JJL1EsvvaRv33TTTVWvXr2q1SEkJxmvv/56NWnSJLXFFltoF8KMGTP07OLkk09W7du3V/PPP7/6448/tE7Gjx9vi1btt1k/9GKSj+fmm2+uO050Ao0ePVofmeXwPH359E2Rf776rbDCCppv8+bN1d9//60mTpyobrrpJs1tpZVWUv3791fLLbec/s2Inucbk3ONNdZQAwcO1HpEZ2PGjFETJkwoSFiMLIXM6SRpoAI14PURMzrFaEE0IGjRRRdViy++uD7n30ILLaSNGuekdejQQTfCt956S3Xr1k0bs1jaRx99pI05xp/GbFKI55FHHqlmzZqlRowY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"},8453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>s});var i=n(6540);const t={},l=i.createContext(t);function r(e){const a=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:a},e.children)}}}]);