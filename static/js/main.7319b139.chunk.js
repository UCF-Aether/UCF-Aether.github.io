(this["webpackJsonpucf-aether.github.io"]=this["webpackJsonpucf-aether.github.io"]||[]).push([[0],{555:function(e,t,i){"use strict";i.r(t);var n=i(220),a=i(245),o=i(95),r=i(128),s=i(253),l=i(254),c=i(255),d=i(256),h=i(257),p=i(130),u=i(265),b=i(124),g=i(52),m=i(25),j=i(0),w=i(6),f=i(111),v=i(162),x=i(70),O=i(50),k=i(589),y=i(74),C=i.n(y),S=i(266),_=i.n(S),L=i(167),D=i.n(L),P=i(590),T=i(65),A=i(2),I=Object(j.memo)((function(e){var t=e.className,i=e.iconUrls,a=e.paragraph,o=e.title,r=e.buttonLabel,s=e.overlapIcons,l=e.link,c=e.github,d=e.source,h=e.sourcePopup,p=F({overlapIcons:null!==s&&void 0!==s&&s},{props:e}),u=p.classes,b=p.cx,g=p.css,j=Object(T.usePopupState)({variant:"popper",popupId:"sourcePopper"}),y=Object(T.usePopupState)({variant:"popper",popupId:"githubPopper"});return Object(A.jsxs)(v.GlCard,{link:l,className:b(u.root,t),children:[i&&Object(A.jsx)("div",{className:u.iconWrapper,children:i.map((function(e,t){return Object(A.jsx)(f.GlLogo,{className:b(u.icon,g({})),logoUrl:e},t)})).reverse()}),Object(A.jsxs)("div",{className:u.textWrapper,children:[void 0!==o&&Object(A.jsx)(w.Text,{typo:"section heading",className:u.title,children:o}),void 0!==a&&Object(A.jsx)(O.Markdown,{className:u.paragraph,children:a})]}),Object(A.jsxs)(k.a,{direction:"row",alignItems:"center",children:[void 0!==r&&Object(A.jsx)(x.GlButton,{type:"submit",href:null===l||void 0===l?void 0:l.href,variant:"secondary",onClick:null===l||void 0===l?void 0:l.onClick,className:u.button,children:r}),c&&Object(A.jsxs)("div",{children:[Object(A.jsx)(n.a,Object(m.a)(Object(m.a)({href:"https://github.com/"+c,color:"inherit",sx:{py:0,ml:2,mr:0,pr:0}},Object(T.bindHover)(y)),{},{children:Object(A.jsx)(C.a,{})})),Object(A.jsx)(D.a,Object(m.a)(Object(m.a)({},Object(T.bindPopover)(y)),{},{anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(A.jsx)(P.a,{style:{margin:10},children:"View GitHub Repository"})}))]}),d&&Object(A.jsxs)("div",{children:[Object(A.jsx)(n.a,Object(m.a)(Object(m.a)({href:d,color:"inherit",sx:{py:0,ml:2,mr:0,pr:0}},Object(T.bindHover)(j)),{},{children:Object(A.jsx)(_.a,{})})),Object(A.jsx)(D.a,Object(m.a)(Object(m.a)({},Object(T.bindPopover)(j)),{},{anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(A.jsx)(P.a,{style:{margin:10},children:null!==h&&void 0!==h?h:"Download source"})}))]})]})]})})),F=Object(w.makeStyles)({name:{MarkdownCard:I}})((function(e,t){var i=t.overlapIcons;return{root:{padding:e.spacing({rightLeft:3,topBottom:4}),boxShadow:e.shadows[1],display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",margin:function(){if(!(e.windowInnerWidth>=w.breakpointsValues.lg))return e.spacing(1)}()},iconWrapper:Object(m.a)({display:"flex",alignItems:"center",transform:"rotate(180deg)"},i?{marginLeft:-e.spacing(3)}:{}),icon:Object(m.a)(Object(m.a)({transform:"rotate(180deg)"},i?{marginLeft:-e.spacing(3)}:Object(m.a)({},e.spacing.rightLeft("margin","".concat(e.spacing(1),"px")))),function(){var t=e.windowInnerWidth>=w.breakpointsValues.lg?50:40;return{width:t,fill:e.colors.palette.focus.main,"& svg":{width:t,height:t}}}()),title:{marginTop:e.spacing(4)},paragraph:{marginTop:e.spacing(4)},textWrapper:{textAlign:"center",marginBottom:e.spacing(4)},button:{}}})),R=i(12),W=Object(j.memo)((function(e){var t=e.children,i=(e.link,e.className),n=N(),a=n.classes,o=n.cx;return Object(A.jsx)("div",{className:o(a.root,i),children:t})})),N=Object(w.makeStyles)({name:{Card:W}})((function(e){return{root:{borderRadius:16,transition:"box-shadow 200ms",margin:e.spacing(2),boxShadow:e.shadows[1],backgroundColor:e.colors.useCases.surfaces.surface1,pointerEvents:"auto"}}})),G=i(267),E=i.n(G),B=i(61),z=Object(j.memo)((function(e){var t=e.className,i=e.text,a=e.projectImageUrl,o=e.subtitle,r=(e.title,e.name),s=e.badgeLabel,l=e.link,c=e.badgeBackgroundColor,d=e.badgeColor,h=e.social,p=Object(j.useState)(void 0),u=Object(R.a)(p,2),b=u[0],g=u[1],m=Object(B.useDomRect)(),f=m.ref,v=m.domRect.width,y=new Image;Object(j.useEffect)((function(){y.src=a,y.onload=function(){g(y.height/y.width)}}),[a]);var S=U({badgeColor:d,badgeBackgroundColor:c,projectImageUrl:a,headerWidth:v,imgAspectRatio:b},{props:e}),_=S.classes,L=S.cx;return Object(A.jsxs)(W,{className:L(_.root,t),children:[Object(A.jsx)("div",{ref:f,className:_.header,children:void 0!==s&&Object(A.jsx)(x.GlButton,{type:"submit",className:_.button,variant:"ternary",href:null===l||void 0===l?void 0:l.href,onClick:null===l||void 0===l?void 0:l.onClick,children:s})}),Object(A.jsxs)("div",{className:_.footer,style:{pointerEvents:"auto"},children:[Object(A.jsxs)(k.a,{direction:"row",justifyContent:"space-between",children:[Object(A.jsx)(w.Text,{typo:"object heading",className:_.footerTitle,children:r}),Object(A.jsxs)("div",{children:[(null===h||void 0===h?void 0:h.github)&&Object(A.jsx)(n.a,{href:"https://github.com/"+h.github,color:"inherit",sx:{py:0},children:Object(A.jsx)(C.a,{})}),(null===h||void 0===h?void 0:h.linkedin)&&Object(A.jsx)(n.a,{href:"https://www.linkedin.com/in/"+h.linkedin,color:"inherit",sx:{py:0},children:Object(A.jsx)(E.a,{})})]})]}),void 0!==o&&Object(A.jsx)(O.Markdown,{className:_.footerSubtitle,children:o}),void 0!==i&&Object(A.jsx)(O.Markdown,{className:_.footerText,children:i})]})]})})),U=Object(w.makeStyles)()((function(e,t){var i=t.badgeBackgroundColor,n=t.badgeColor,a=t.projectImageUrl,o=t.headerWidth,r=t.imgAspectRatio;return{root:{transition:"opacity 300ms",opacity:0===o||void 0===r?0:1,display:"flex",flexDirection:"column",overflow:"hidden",pointerEvents:"auto",margin:function(){if(!(e.windowInnerWidth>=w.breakpointsValues.lg))return e.spacing(1)}()},footer:{flex:1,backgroundColor:e.isDarkModeEnabled?e.colors.palette.dark.greyVariant1:e.colors.palette.light.light,padding:[4,5,4,5].map((function(t){return"".concat(e.spacing(t),"px")})).join(" ")},footerTitle:{marginBottom:e.spacing(1)},footerSubtitle:{marginBottom:e.spacing(1)},header:{width:"100%",margin:0,background:'url("'.concat(a,'")'),minHeight:void 0===r?void 0:o*r,backgroundSize:"cover",backgroundPosition:"center",display:"flex",justifyContent:"flex-end",alignItems:"flex-start",padding:e.spacing(3)},button:{marinLeft:e.spacing(7),border:"none",backgroundColor:null!==i&&void 0!==i?i:void 0,color:function(){if(void 0!==n)return"".concat(n," !important")}()},footerText:{}}})),M=function(e){var t=Object(w.useTheme)(),i=e.videos,n="100%",a=void 0;return t.windowInnerWidth>=w.breakpointsValues["lg+"]?(n=.9*t.windowInnerWidth/i.length,a=n/100*60):t.windowInnerWidth>=w.breakpointsValues.lg?n=600:(t.windowInnerWidth>=w.breakpointsValues.md||t.windowInnerWidth>=w.breakpointsValues.sm)&&(n=500),console.log(t.windowInnerWidth,w.breakpointsValues,n),Object(A.jsx)(k.a,{direction:{xs:"column",md:"column",lg:"row"},spacing:0,alignSelf:"center",justifyContent:"center",sx:{width:"100%"},children:i.map((function(e){var t=e.title,i=e.src;return Object(A.jsx)(b.GlYoutubeVideoSection,{title:t,src:i,hasAnimation:!0,width:n,height:a})}))})};function H(){return Object(A.jsxs)(u.GlTemplate,{header:Object(A.jsx)(c.GlHeader,{title:"Aether Sensor Network",customItemStart:Object(A.jsx)(n.a,{href:"https://github.com/ucf-aether",color:"inherit",children:Object(A.jsx)(C.a,{})}),links:[{label:"Report",href:"docs/Final_Report_g41.pdf"},{label:"Conference Paper",href:"docs/Conference_Paper_g41.pdf"}],enableDarkModeSwitch:!0}),headerOptions:{position:"sticky",isRetracted:"smart"},footer:Object(A.jsx)(l.GlFooter,{bottomDivContent:"Licence MIT",links:[{label:"GitHub",href:"https://github.com/ucf-aether"},{label:"Report",href:"docs/Final_Report_g41.pdf"},{label:"Conference Paper",href:"docs/Conference_Paper_g41.pdf"},{label:"App",href:"https://github.com/ucf-aether/aether-app"},{label:"Firmware",href:"https://github.com/ucf-aether/aether-firmware"},{label:"Electronics",href:"https://github.com/ucf-aether/aether-electronics"}]}),children:[Object(A.jsx)(d.GlHero,{title:"A LoRaWAN connected air quality sensor",subTitle:"Winner of the Spring 2022 UCF CECS Senior Design Showcase Best ECE Project Award",illustration:{type:"image",imageSrc:"img/aether_node_1.png"},hasLinkToSectionBellow:!0,hasIllustrationShadow:!0}),Object(A.jsx)(p.GlSectionDivider,{}),Object(A.jsx)(a.GlArticle,{id:"aboutAether",title:"Project Description",body:"The Aether Sensor Network is a low-power, air quality monitoring system that is designed to measure\n          and calculate the air quality index (AQI). Aether consists of two main components: the device which collects\n          air quality data, known as the Aether Node, and a website the hosts and displays that data. The Aether Node \n          uses two gas sensors and a particulate matter sensor to collect the data used in calculating air quality. This collected data is \n          transmitted by the Aether Node over LoRaWAN. The Aether Node is implemented on a four-layer PCB and housed \n          in a 3D printed enclosure.",buttonLabel:"Aether Webapp",buttonLink:{href:"https://aethersensor.network"},illustration:Object(A.jsx)(h.GlIllustration,{hasShadow:!0,type:"image",url:"img/aetherOpenedUp.jpg"}),hasAnimation:!0,illustrationPosition:"right"}),Object(A.jsx)(b.GlYoutubeVideoSection,{title:"Showcase Video",src:"https://www.youtube.com/embed/E9gR2ITvywU",hasAnimation:!0}),Object(A.jsx)(o.GlCards,{children:Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(r.GlLogoCard,{title:"Designed in KiCad",link:{href:"https://www.kicad.org"},iconUrls:["img/kicad.png"],paragraph:"The Aether schematic PCB was designed in KiCad 6. KiCad provides an extensive \n              part library which minimized the development of part footprints. Using KiCad allowed us \n              to version control our hardware design which allowed us to revert mistakes and easily \n              share work with the team."}),Object(A.jsx)(r.GlLogoCard,{title:"Powered by Zephyr RTOS",iconUrls:["img/zephyr.png"],link:{href:"https://www.zephyrproject.org"},paragraph:"Zephyr RTOS is an open, collaborative, vendor-neutral RTOS hosted under the\n              Linux Foundation. Zephyr uses the Linux device tree and Kconfig specification for Generalizing\n              drivers to work across architectures and boards. We were able to create a Aether specific \n              device tree specification (DTS) file and DT-overlay for working on our development board \n              while keeping the firmware exactly the same. This allowed us to easily migrate to our \n              PCB later in development with no issues."}),Object(A.jsx)(r.GlLogoCard,{title:"Accessible through AWS & Supabase",iconUrls:["img/aws.svg","img/supabase.svg"],link:{href:"https://supabase.com"},paragraph:"The web application is hosted on AWS, and the backend and API is hosted on Supabase,\n              a managed PostgreSQL database with PostgREST and HTTP extensions. The database is accessible\n              through Supabase's JavaScript client which allows for CRUD operations along with real-time\n              subscriptions to table inserts, updates, and deletions. All of the backend logic is \n              performed inside Supabase and the PostgreSQL database.",overlapIcons:!1})]})}),Object(A.jsx)(p.GlSectionDivider,{}),Object(A.jsx)(s.GlCheckList,{heading:"Features",hasAnimation:!0,elements:[{title:"LoRaWAN",description:"The LoRa-E5 utilizes the STM32WLE5JC which combines a Cortex-M4 with a \n              LoRa transceiver capable of LoRaWAN 1.4."},{title:"Low Power",description:"Even with power hungry sensors, the device still operates at less than 100 mW\n              thanks to our power management."},{title:"Maintenance-Free",description:"The Aether Node fits inside a small enclosure which makes it easy to mount\n              anywhere. The solar panel ensures longevity with little to no maintenance."},{title:"Shell Interface",description:"Thanks to Zephyr, the Aether Node has a familiar shell interface that allows \n              for user configuration and real-time device information."},{title:"Real-Time & Historical Data",description:"The Aether web interface allows users to view historical and real-time AQI, \n            temperature, humidity, ozone, and particulate matter."},{title:"Map Overlay",description:"The map overlay makes it easy to see what the current AQI value is in your \n              area with a slider to view historical data."}]}),Object(A.jsx)(p.GlSectionDivider,{}),Object(A.jsx)(o.GlCards,{title:"The Team",children:Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(z,{name:"Paul Wood",subtitle:"**Web App, Firmware**",text:"**Paul Wood** is currently a senior at the University of Central Florida and will \n              graduate with a **BSCpE** in May 2022. He is \n              pursuing roles in low-level embedded systems, and is interested in operating systems \n              and IoT devices. He plans on pursuing a graduate degree after working for a few years.",projectImageUrl:"img/paul.jpg",social:{github:"plmwd",linkedin:"plmwd"}}),Object(A.jsx)(z,{name:"Ian Wallace",subtitle:"**Firmware, Enclosure**",text:"**Ian Wallace** is currently a senior at the University of Central Florida and \n              will graduate with a **BSCpE** in May 2022. He is \n              currently interning at Lockheed Martin in Orlando, FL and is doing work in cryptography \n              and FPGAs. He plans on continuing to work there full-time, following his graduation.",projectImageUrl:"img/ian.jpg",social:{linkedin:"ian-wallace-539261197",github:"ianw2560"}}),Object(A.jsx)(z,{name:"Randy Alvarez",subtitle:"**Schematic, PCB**",text:"**Randy Alvarez** is currently a senior at the University of Central Florida and \n              will graduate with a **BSEE** in May 2022. He \n              is currently an intern in the CWEP program at Lockheed Martin in Orlando, FL doing \n              work on systems testability and improvements. He plans on continuing to work there \n              full-time, following his graduation.",projectImageUrl:"img/randy.jpg",social:{linkedin:"alvarezrandy129"}}),Object(A.jsx)(z,{name:"Parke Benjamin",subtitle:"**Schematic**",text:"**Parke Benjamin** is currently a senior at the University of Central Florida and will \n              graduate with a **BSEE** in May 2022. He is \n              currently working at Duke Energy in Orlando, FL doing work in the protections and \n              controls department. He plans on continuing to work there full-time, following his graduation.",projectImageUrl:"img/parke.jpg",social:{linkedin:"parke-benjamin-443768172"}})]})}),Object(A.jsx)(M,{videos:[{title:"Final Presentation Video",src:"https://www.youtube.com/embed/uTsx15xbbo8"},{title:"Final Demo Video",src:"https://www.youtube.com/embed/MYu3QT3-u_8"}]}),Object(A.jsx)(o.GlCards,{title:"Project Documentation",children:Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(I,{title:"Conference Paper",buttonLabel:"Download",link:{href:"docs/Conference_Paper_g41.pdf"},source:"src/Conference_Paper_g41.zip",sourcePopup:"Download LaTeX Source"}),Object(A.jsx)(I,{title:"Final Report",buttonLabel:"Download",link:{href:"docs/Final_Report_g41.pdf"},source:"src/Final_Report_g41.zip",sourcePopup:"Download LaTeX Source"}),Object(A.jsx)(I,{title:"Final Presentation",buttonLabel:"Download",link:{href:"docs/Final_Presentation_g41.pptx"}}),Object(A.jsx)(I,{title:"Schematics",buttonLabel:"Download",link:{href:"docs/Schematic_g41.pdf"}}),Object(A.jsx)(I,{title:"CDR Presentation",buttonLabel:"Download",link:{href:"docs/CDR_Presentation_g41.pptx"}}),Object(A.jsx)(I,{title:"SD1 Final Report",buttonLabel:"Download",link:{href:"docs/Senior_Design_1_Final_Report_g41.pdf"},source:"src/Senior_Design_1_Final_Report_g41.zip",sourcePopup:"Download LaTeX Source"}),Object(A.jsx)(I,{title:"Divide and Conquer (V2)",buttonLabel:"Download",link:{href:"docs/Divide_and_Conquer_v2_g41.pdf"},source:"src/Divide_and_Conquer_v2_g41.zip",sourcePopup:"Download LaTeX Source"}),Object(A.jsx)(I,{title:"Divide and Conquer (V1)",buttonLabel:"Download",link:{href:"docs/Divide_and_Conquer_v1_g41.pdf"},source:"src/Divide_and_Conquer_v1_g41.zip",sourcePopup:"Download LaTeX Source"})]})}),Object(A.jsx)(o.GlCards,{title:"Project Source",children:Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(I,{title:"Firmware",github:"ucf-aether/aether-firmware",buttonLabel:"Download",link:{href:"src/Firmware_g41.zip"}}),Object(A.jsx)(I,{title:"Web Application",github:"ucf-aether/aether-app",buttonLabel:"Download",link:{href:"src/App_g41.zip"}}),Object(A.jsx)(I,{title:"Schematics & PCB Files",github:"ucf-aether/electronics",buttonLabel:"Download",link:{href:"src/Electronics_g41.zip"}})]})})]})}Object(g.render)(Object(A.jsx)(H,{}),document.getElementById("root"))}},[[555,152,153]]]);
//# sourceMappingURL=main.7319b139.chunk.js.map