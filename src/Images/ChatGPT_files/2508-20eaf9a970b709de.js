"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2508],{32663:function(e,t,n){n.d(t,{M3:function(){return em},pW:function(){return es},X4:function(){return ei},CT:function(){return ec}});var r=n(27084),s=n(67165),i=n(44230),a=n(82823),o=n(87055),l=n(98890),c=n(81412),u=n(4702),d=n(27603),m=n(55371),p=n(24040),f=n(45779),x=n(96271),g=n(35226),h=n(19841),j=n(61888),b=n(92379),v=n(26123),y=n(72256),k=n(25940),w=n(50684),O=n(55775),N=n(62484),P=n(33112),C=n(58171),M=n(651);function z(e){let{menuItemComponent:t}=e,n=(0,g.NL)(),{data:r}=(0,u.rk)(),i=(0,u.t)(),{0:a,1:o}=(0,b.useState)(!1),l=(0,p.aF)();if(!i||!r)return null;let c=i.isWorkspaceAccount(),d=r.accountItems.length>1,m=r.accountItems,x=(0,j.compact)([m.find(e=>e.isPersonalAccount()),...m.filter(e=>!e.isPersonalAccount())]);if(x.sort((e,t)=>e.isPersonalAccount()?1:t.isPersonalAccount()?-1:0),!d)return c?(0,M.jsx)(S,{}):(0,M.jsx)(M.Fragment,{children:(0,M.jsx)("div",{className:"ml-3 mr-2 py-2 text-sm text-token-text-secondary",children:null==l?void 0:l.email})});let h=x.map(e=>(0,M.jsx)(t,{disabled:e.isDeactivated(),onClick:()=>{e.isDeactivated()||e.id===(null==i?void 0:i.id)||(o(!0),(0,u.nq)(n,e.id),(0,f.M)())},className:"radix-disabled:pointer-events-auto radix-disabled:hover:bg-transparent",children:e.isDeactivated()?(0,M.jsx)(D,{workspace:e,isLoading:a}):(0,M.jsx)(E,{workspace:e,isLoading:a,currentWorkspaceId:null==i?void 0:i.id})},e.id));return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Z,{}),(0,M.jsx)(s.Z.Separator,{}),h]})}function Z(){let e=(0,u.t)(),t=(0,v.Z)(),n=(0,p.aF)();return n?(0,M.jsxs)("div",{className:"flex items-center justify-between gap-2 py-2 pl-5 pr-4",children:[(0,M.jsx)("div",{className:"text-sm text-token-text-secondary",children:null==n?void 0:n.email}),(null==e?void 0:e.features.includes(d.L0.Teams))&&(0,M.jsx)(N.u,{label:t.formatMessage(T.addWorkspaceTooltip),side:"right",children:(0,M.jsx)("button",{onClick:()=>(0,P.MG)("profile menu"),children:(0,M.jsx)(i.Vz5,{className:"icon-sm text-token-text-primary"})})})]}):null}function S(){let e=(0,u.t)();return null==e?(0,M.jsx)(M.Fragment,{children:(0,M.jsx)("div",{className:"w-full px-3 py-2",children:(0,M.jsx)(w.Z,{})})}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(Z,{}),(0,M.jsx)("div",{className:"flex h-11 w-full items-center justify-start gap-3 px-3 py-1 text-sm",children:(0,M.jsx)(E,{workspace:e,isLoading:!1,currentWorkspaceId:e.id,showCheck:!1})})]})}function E(e){let{workspace:t,isLoading:n,currentWorkspaceId:s,showCheck:i=!0}=e;return(0,M.jsxs)("div",{className:"flex w-full items-center gap-2.5",children:[(0,M.jsx)("span",{className:"flex h-5 w-5 items-center justify-center",children:(0,M.jsx)(r.zf,{iconSize:"small",workspace:t,className:(0,h.default)({"flex-shrink-0":!0})})}),(0,M.jsx)("div",{className:"line-clamp-1 flex-grow text-token-text-primary",children:(0,O.CV)((0,v.Z)(),t)}),n&&(0,M.jsx)(w.Z,{}),!n&&i&&(0,M.jsx)("span",{className:"text-token-text-primary",children:t.id===s?(0,M.jsx)(c.p9,{className:"icon-sm"}):(0,M.jsx)(M.Fragment,{})})]})}function D(e){let{workspace:t,isLoading:n}=e,r=(0,v.Z)(),a=t.isOwnerOfAccount(),{0:o,1:c}=(0,b.useState)(!1),u=(0,l.p5)(t.id);return(0,b.useEffect)(()=>{null!=u&&o&&(m.vm.setPurchaseWorkspaceData({minimumSeats:Math.max(u,C.Y6),existingAccount:t}),c(!1))},[u,o,t]),(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(N.u,{className:"flex w-full flex-1 items-center gap-2.5",label:r.formatMessage(T.disabledWorkspaceTooltip),sideOffset:20,side:"right",children:[(0,M.jsx)("span",{className:"flex h-5 w-5 items-center justify-center",children:(0,M.jsx)(i.oVl,{className:"icon-sm flex-shrink-0 opacity-30"})}),(0,M.jsx)("div",{className:"truncate opacity-30",children:(0,O.CV)(r,t)})]}),n&&(0,M.jsx)(w.Z,{}),!n&&(0,M.jsxs)(s.Z.Root,{children:[(0,M.jsx)(x.xz,{className:"rounded text-center hover:bg-token-main-surface-secondary",children:(0,M.jsx)(i.nWS,{className:"icon-sm m-1"})}),(0,M.jsx)(s.Z.Portal,{children:(0,M.jsxs)(s.Z.Content,{children:[a&&(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(s.Z.Item,{onClick:()=>{null==u?c(!0):m.vm.setPurchaseWorkspaceData({minimumSeats:Math.max(u,C.Y6),existingAccount:t})},children:o?(0,M.jsx)(w.Z,{}):(0,M.jsx)(y.Z,{id:"navigation.reactivateWorkspace",defaultMessage:"Reactivate workspace"})})}),(0,M.jsx)(s.Z.Item,{onClick:()=>{m.vm.setLeaveWorkspaceData(t)},children:(0,M.jsx)(y.Z,{id:"navigation.leaveWorkspace",defaultMessage:"Leave workspace"})})]})})]})]})}let T=(0,k.vU)({addWorkspaceTooltip:{id:"navigation.addWorkspaceTooltip",defaultMessage:"Create a Team workspace"},disabledWorkspaceTooltip:{id:"navigation.disabledWorkspaceTooltip",defaultMessage:"This workspace has been deactivated"}});var I=n(99240),G=n(27860),A=n(93747),F=n(15236),W=n(43128),L=n.n(W);function _(e){let{menuItemComponent:t}=e,n=(0,u.t)(),r=(0,b.useCallback)(()=>{A.A.logEvent(F.M.clickSidebarAccountPortalMenuItem),(0,P.MG)("Sidebar account menu item")},[]);return(0,M.jsxs)(M.Fragment,{children:[(null==n?void 0:n.hasPaidSubscription())&&(0,M.jsx)(t,{onClick:r,icon:c.PQ,children:(0,M.jsx)(y.Z,{id:"popoverNavigation.myPlan",defaultMessage:"My plan"})}),(null==n?void 0:n.canInteractWithGizmos())&&(0,M.jsx)(t,{onClick:()=>{A.A.logEvent(F.M.accountMenuClickMyGPTs),L().push((0,G.L7)())},icon:c.PN,children:(0,M.jsx)(y.Z,{id:"popoverNavigation.myGpts",defaultMessage:"My GPTs"})}),(0,M.jsx)(t,{icon:i.A2w,onClick:()=>{m.vm.openModal(m.B.UserContext),A.A.logEvent(F.M.accountMenuClickCustomizeChatGPT)},children:(0,M.jsx)(y.Z,{id:"popoverNavigation.chatPreferences.1",defaultMessage:"Customize ChatGPT"})})]})}var B=n(94521);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach(function(t){(0,B.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function U(e){let{menuItemComponent:t,routedMenuItemComponent:n}=e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(n,{href:"/admin",icon:i.ZyV,children:(0,M.jsx)(y.Z,K({},V.myWorkspaceSettings))}),(0,M.jsx)(n,{href:(0,G.L7)(),onClick:()=>{A.A.logEvent(F.M.accountMenuClickMyGPTs)},icon:c.PN,children:(0,M.jsx)(y.Z,K({},V.myGpts))}),(0,M.jsx)(t,{onClick:()=>{m.vm.openModal(m.B.UserContext),A.A.logEvent(F.M.accountMenuClickCustomizeChatGPT)},icon:i.A2w,children:(0,M.jsx)(y.Z,K({},V.chatPreferences))})]})}let V=(0,k.vU)({myWorkspaceSettings:{id:"workspacePopoverNavigation.myWorkspaceSettings",defaultMessage:"Manage workspace"},chatPreferences:{id:"B4s/Jz",defaultMessage:"Customize ChatGPT"},myGpts:{id:"workspacePopoverNavigation.myGpts",defaultMessage:"My GPTs"}});var Q=n(44899),q=n(86021),X=n(12596),Y=n(98506),H=n(50406),J=n(48580),$=n(86078),ee=n.n($),et=n(5443),en=n(64638),er=n(73746);function es(e){let{children:t,clientThreadId:n,showShareButton:r,showVoiceButton:s}=e,{isUserUnauthenticated:i}=(0,X.EH)();return(0,er.Q)()?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(eo,{clientThreadId:n,showShareButton:r,showVoiceButton:s}),!i&&(0,M.jsx)(ec,{}),i&&(0,M.jsx)(ep,{})]}):(0,M.jsx)(M.Fragment,{children:t})}function ei(e){let{children:t,gizmoResource:n}=e;return(0,er.Q)()?(0,M.jsx)(eu,{gizmoResource:n}):(0,M.jsx)(M.Fragment,{children:t})}let ea=ee()(()=>Promise.all([n.e(8682),n.e(1468),n.e(6266),n.e(8284)]).then(n.bind(n,58403)).then(e=>e.VoiceModeButton),{loadableGenerated:{webpack:()=>[58403]}});function eo(e){let{showShareButton:t,showVoiceButton:n,clientThreadId:r}=e,s=(0,q.XK)(r),a=(0,v.Z)();return(0,M.jsxs)(M.Fragment,{children:[n&&(0,M.jsx)(ea,{conversationId:r}),t&&s&&(0,M.jsx)(N.u,{label:a.formatMessage({id:"CPEfES",defaultMessage:"Share chat"}),children:(0,M.jsx)(I.W,{onClick:()=>m.vm.openSharingModal(s),icon:i.aAc})})]})}function el(e){let{href:t,children:n,icon:r}=e,i=(0,W.useRouter)();return(0,M.jsx)(s.Z.Item,{icon:r,onSelect:()=>i.push(t),children:n})}function ec(){let{data:e}=(0,u.rk)(),t=(0,u.t)(),{openSettings:n}=(0,Q.F)(),a=(0,er.Q)(),l=(0,o.f6)(),{openModal:c}=(0,o.Dr)();if(!t||!e)return null;let d=e.accountItems.length>1,m=t.isWorkspaceAccount();return(0,M.jsxs)(s.d,{triggerButton:(0,M.jsx)("button",{onClick:()=>{A.A.logEvent(F.M.accountOpenProfileMenu),J.m9.logEvent("chatgpt_account_open_profile_menu")},"data-testid":"fruit-juice-profile",className:"flex h-10 w-10 items-center justify-center rounded-full hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary focus-visible:outline-0",children:(0,M.jsx)(r.zf,{iconSize:"juiceConversation"})}),children:[d&&(0,M.jsx)(z,{menuItemComponent:s.Z.Item}),!a||d?(0,M.jsx)(s.Z.Separator,{}):null,m?(0,M.jsx)(U,{menuItemComponent:s.Z.Item,routedMenuItemComponent:el}):(0,M.jsx)(_,{menuItemComponent:s.Z.Item}),(0,M.jsx)(s.Z.Item,{icon:i.SWE,onClick:()=>n(),children:(0,M.jsx)(y.Z,{defaultMessage:"Settings",id:"navigation.settings.0"})}),l&&(0,M.jsx)(ed,{openDownloadModal:c}),(0,M.jsx)(s.Z.Separator,{}),(0,M.jsx)(s.Z.Item,{onClick:()=>{A.A.logEvent(F.M.clickLogOut,{eventSource:"mouse"}),(0,H.w7)()},icon:i.iz5,children:(0,M.jsx)(y.Z,{defaultMessage:"Log out",id:"navigation.logOut.0"})})]})}function eu(e){let{gizmoResource:t}=e,n=(0,W.useRouter)(),r=(0,v.Z)(),s=(0,m.tN)(e=>e.isDesktopNavCollapsed);return s?(0,M.jsx)(M.Fragment,{children:(0,M.jsxs)("div",{className:"flex items-center",children:[(0,M.jsx)(em,{}),s&&(0,M.jsx)(N.u,{label:r.formatMessage({id:"Cvr6Bs",defaultMessage:"New chat"}),children:(0,M.jsx)(I.W,{onClick:()=>{(0,X.ni)()?(0,en.Xl)():n.push(null!=t?(0,a.m_)(t):"/",void 0,{shallow:!0})},icon:i.bl$})})]})}):null}function ed(e){let{openDownloadModal:t}=e;return(0,M.jsxs)("span",{children:[(0,M.jsx)(s.Z.Separator,{}),(0,M.jsx)(s.Z.Item,{icon:i.gFD,onClick:()=>{t(),A.A.logEvent(F.M.accountMenuClickDownloadApp)},children:(0,M.jsx)(y.Z,{id:"navigation.downloadMacApp",defaultMessage:"Download the macOS app"})})]})}function em(){let e=(0,v.Z)(),t=(0,er.Q)(),n=(0,m.tN)(e=>e.isDesktopNavCollapsed),r=(0,Y.w$)(),{isUserUnauthenticated:s}=(0,X.EH)();return t&&n&&r&&(!t||!s)?(0,M.jsx)(N.u,{label:e.formatMessage({id:"cElEQV",defaultMessage:"Open sidebar"}),children:(0,M.jsx)(I.W,{onClick:()=>m.vm.toggleDesktopNavCollapsed(),icon:i.BSo,surfaceContext:"primary"})}):null}function ep(){let{navigateToAuth:e}=(0,X.EH)();return(0,M.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,M.jsx)(et.z,{onClick:()=>{let t=e({authType:"login"});A.A.logLogInButtonClicked({location:"Chat header",provider:t})},color:"secondary",size:"small",children:(0,M.jsx)(y.Z,{id:"B1SN7b",defaultMessage:"Log in"})}),(0,M.jsx)(et.z,{color:"primary",onClick:()=>{let t=e({authType:"signup"});A.A.logSignUpButtonClicked({location:"Chat header",provider:t})},size:"small",children:(0,M.jsx)(y.Z,{id:"P6cySK",defaultMessage:"Sign up"})})]})}},5994:function(e,t,n){n.d(t,{Dd:function(){return r},L5:function(){return i},P_:function(){return o},aI:function(){return a},vi:function(){return l},zf:function(){return s}});let r="ChatGPT",s="Untitled",i=10,a=50,o=300,l=8e3},9085:function(e,t,n){n.d(t,{Vq:function(){return Q},Dy:function(){return X},xL:function(){return J},eY:function(){return V}});var r,s=n(94521),i=n(62484),a=n(83252),o=n(5994),l=n(82823),c=n(56029),u=n(16645),d=n(4702),m=n(55371),p=n(12596),f=n(27860),x=n(35226),g=n(44230),h=n(93747),j=n(15236),b=n(99331),v=n(19841),y=n(556),k=n(61888),w=n(86078),O=n.n(w),N=n(40319),P=n.n(N),C=n(92379),M=n(72256),z=n(26123),Z=n(25940),S=n(67165),E=n(73746),D=n(54591),T=n(43967),I=n(651);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function A(e){let{children:t}=e,n=(0,z.Z)(),r=(0,D.qg)(D.pm.ExploreGPTs),i=(0,D.qg)(D.pm.ExploreGPTsNewNux),{activeModals:a}=(0,m.tN)(),o=(0,m.xH)(),l=(0,d.t)(),c=r.eligible&&!r.isLoading&&!o,u=i.eligible&&!i.isLoading&&!o;return((0,C.useEffect)(()=>{c&&h.A.logEvent(j.M.storeDisplayNewNux)},[c]),(!c||a.size>0)&&null!=l&&l.hasPlusFeatures())?(0,I.jsx)(I.Fragment,{children:t}):(0,I.jsx)(T.v,{side:"right",show:u,title:n.formatMessage(F.exploreGPTsTitle),onDismiss:i.markAsViewed,sideOffset:20,theme:"bright",description:(0,I.jsx)(M.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},F.exploreGPTsDescriptionNewNux)),children:t})}let F=(0,Z.vU)({exploreGPTsTitle:{id:"gptExploreGPTs.title",defaultMessage:"Explore GPTs"},exploreGPTsDescription:{id:"gptExploreGPTs.description",defaultMessage:"Now you can discover GPTs created by the community"},exploreGPTsDescriptionNewNux:{id:"gptExploreGPTs.descriptionNewNux",defaultMessage:"Discover custom versions of ChatGPT created for specific use cases like writing, research, and coding."}});var W=n(93013),L=n(64638),_=n(38493);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let K=O()(()=>Promise.all([n.e(7957),n.e(1255),n.e(766),n.e(4823)]).then(n.bind(n,17903)).then(e=>e.GizmoKeepInSidebarMenuItem),{loadableGenerated:{webpack:()=>[17903]}}),U=((r={})[r.Keep=0]="Keep",r[r.Recents=1]="Recents",r);function V(e){let{data:{gizmos:t}={}}=(0,l.Wz)();return!!t&&t.some(t=>t.resource.gizmo.id===e)}function Q(e){let{isActive:t,isNewConversation:n}=e;return(0,I.jsx)("div",{className:"sticky left-0 right-0 top-0 z-20 bg-token-sidebar-surface-primary pt-3.5 juice:static juice:pt-0",children:(0,I.jsx)(H,{gizmo:void 0,isActive:t,onClick:e=>{(0,p.ni)()&&!n&&(e.preventDefault(),(0,L.Xl)())}})})}function q(e){let{gizmo:t,currentGizmoId:n}=e,r=(0,C.useRef)(!1),s=(0,m.tN)(),{0:i,1:a}=(0,C.useState)(!1),{itemsLeft:o,listItems:l,needsToCollapseItems:c}=function(e,t){var n,r,s,i,a,o;let l=(0,k.groupBy)(e,e=>e.flair.kind),c=[...null!==(n=null===(r=l[u.JK.FirstParty])||void 0===r?void 0:r.map(e=>{let{resource:t}=e;return{gizmo:t,section:U.Keep}}))&&void 0!==n?n:[],...null!==(s=null===(i=l[u.JK.SidebarKeep])||void 0===i?void 0:i.map(e=>{let{resource:t}=e;return{gizmo:t,section:U.Keep}}))&&void 0!==s?s:[],...null!==(a=null===(o=l[u.JK.Recent])||void 0===o?void 0:o.slice(0,2).map(e=>{let{resource:t}=e;return{gizmo:t,section:U.Recents}}))&&void 0!==a?a:[]],d=c.length>5,m=d&&!t&&c.length>4?c.slice(0,4):c;return{listItems:[...m.filter(e=>{let{section:t}=e;return t===U.Keep}),...m.filter(e=>{let{section:t}=e;return t===U.Recents})],itemsLeft:c.length-m.length,needsToCollapseItems:d}}(t,i);return(0,C.useEffect)(()=>{if(l.length>0&&!r.current){var e;null===(e=(0,b.Ef)({namespace:b.dG.ChatPageLoad}))||void 0===e||e.logTiming("render_gizmo_sidebar"),r.current=!0}},[l]),(0,I.jsxs)("div",{children:[l.map((e,t)=>{let{gizmo:r,section:s}=e;return(0,I.jsxs)(C.Fragment,{children:[t>1&&s!==l[t-1].section&&(0,I.jsx)("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),(0,I.jsx)(H,{gizmo:r,isActive:r.gizmo.id===n,section:s},r.gizmo.id)]},t)}),c?(0,I.jsxs)("button",{onClick:()=>{a(!i)},className:"flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm font-semibold text-token-text-primary hover:bg-token-sidebar-surface-secondary juice:font-normal",children:[(0,I.jsx)("div",{className:"flex h-7 w-7 flex-shrink-0 items-center justify-center juice:h-6 juice:w-6",children:(0,I.jsx)(g.nWS,{className:"icon-md text-token-text-secondary juice:hover:text-token-text-primary"})}),(0,I.jsx)("div",{className:"flex grow items-center gap-1",children:i?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(M.Z,{id:"GizmoSidebarList.showLess",defaultMessage:"See less"}),(0,I.jsx)(g.r0F,{className:"icon-xs"})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(M.Z,{id:"GizmoSidebarList.showMoreItems",defaultMessage:"{numMore} more",values:{numMore:o}}),(0,I.jsx)(g.Tg4,{className:"icon-xs"})]})})]}):null,(0,I.jsx)(A,{children:(0,I.jsx)(y.E.div,{whileTap:{scale:.98},children:(0,I.jsx)(P(),{href:(0,f.cy)(),onClick:()=>{"mobile-nav"===s.activeSidebar&&m.vm.toggleActiveSidebar("mobile-nav")},children:(0,I.jsx)(W.f,{icon:g.frp,children:(0,I.jsx)(M.Z,R({},$.exploreStoreEnabled))})},"explore")})})]})}function X(e){let{currentGizmoId:t}=e,{data:{gizmos:n}={}}=(0,l.Wz)();return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Q,{isActive:void 0===t,isNewConversation:!0}),(0,I.jsx)(_.Z,{}),null!=n?(0,I.jsx)(q,{gizmo:n,currentGizmoId:t}):null]})}function Y(e){let{gizmo:t,isOpen:n,setIsOpen:r,section:s}=e,i=(0,x.NL)();return(0,I.jsxs)(S.d,{open:n,onOpenChange:r,triggerButton:(0,I.jsx)("button",{className:(0,v.default)("flex text-token-text-tertiary juice:text-token-text-secondary juice:hover:text-token-text-primary",n?"":"invisible group-hover:visible"),children:(0,I.jsx)(g.nWS,{className:"icon-md"})}),contentAlign:"start",sideOffset:4,alignOffset:-4,size:"auto",children:[s===U.Recents&&(0,I.jsx)(S.Z.Item,{onClick:async()=>{await c.U.updateGizmoSidebar(i,t.gizmo.id,"keep")},children:(0,I.jsx)(M.Z,R({},$.keepInSidebar))}),(0,I.jsx)(K,{gizmoResource:t})]})}function H(e){var t,n;let r;let{gizmo:s,historyDisabled:c,isActive:m,section:p,onClick:f}=e,x=(0,z.Z)(),{0:h,1:j}=(0,C.useState)(!1),{0:b,1:k}=(0,C.useState)(!1),w=(0,d.t)(),O=!!(null==s||null===(t=s.gizmo.tags)||void 0===t?void 0:t.includes(u.U9.FirstParty)),N=(0,E.Q)();if(null!=s)r=s.gizmo.display.name||o.zf;else{if(null==w)return null;r=c?x.formatMessage($.clearChat):w.canInteractWithGizmos()?o.Dd:x.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return(0,I.jsx)(y.E.div,{className:"pb-0.5 last:pb-0 juice:pb-0",whileTap:{scale:.98},onMouseEnter:()=>{k(!0)},onMouseLeave:()=>{k(!1)},children:(0,I.jsx)(J,{loggingGizmoId:null!==(n=null==s?void 0:s.gizmo.id)&&void 0!==n?n:"primary",href:null!=s?(0,l.m_)(s):"/",onClick:f,icon:(0,I.jsx)(a.Z,{isFirstParty:null==s||O,src:null==s?void 0:s.gizmo.display.profile_picture_url,className:(0,v.default)(N?"h-6 w-6":"h-7 w-7","flex-shrink-0")}),isMenuOpen:h,label:r,hoverRightIcon:(0,I.jsxs)("div",{className:"flex gap-3 juice:gap-2",children:[(b||h)&&null!=s&&(0,I.jsx)("div",{className:"text-token-text-tertiary",onClick:e=>{e.preventDefault()},children:(0,I.jsx)(Y,{gizmo:s,isOpen:h,setIsOpen:j,section:p})}),(0,I.jsx)(i.u,{side:"right",label:x.formatMessage(c?$.clearChat:$.newChat),className:"flex items-center",children:(0,I.jsx)("button",{className:m&&!N?"text-token-text-primary":h?"text-token-text-tertiary":"invisible text-token-text-tertiary hover:text-token-text-secondary group-hover:visible juice:text-token-text-secondary juice:hover:text-token-text-primary",children:c?(0,I.jsx)(g.Ezi,{className:"icon-md"}):(0,I.jsx)(g.bl$,{className:"icon-md"})})})]})})})}function J(e){let{href:t,icon:n,label:r,hoverRightIcon:s,isMenuOpen:i,loggingGizmoId:a,onClick:o,target:l}=e;return(0,I.jsxs)(P(),{href:t,target:l,shallow:!0,className:(0,v.default)("group flex h-10 items-center gap-2 rounded-lg bg-token-sidebar-surface-primary px-2 font-semibold juice:gap-2.5 juice:font-normal",i?"bg-token-main-surface-primary":"hover:bg-token-sidebar-surface-secondary"),onClick:e=>{h.A.logNewChatButtonClicked({location:"Sidebar gizmo list",gizmo_id:a}),h.A.logEvent(j.M.sidebarClickGizmo,{gizmo_id:a}),null==o||o(e)},children:[n,(0,I.jsx)("div",{className:"grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary",children:r}),s]})}let $=(0,Z.vU)({exploreStoreEnabled:{id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"},keepInSidebar:{id:"gizmo.keepInSidebar",defaultMessage:"Keep in sidebar"},newChat:{id:"gizmo.newChat",defaultMessage:"New chat"},clearChat:{id:"gizmo.clearChat",defaultMessage:"Clear chat"}})},2933:function(e,t,n){n.d(t,{QT:function(){return j},Xb:function(){return y},cY:function(){return v},f8:function(){return k},y4:function(){return b}});var r,s=n(17379),i=n(94521),a=n(41141),o=n(71840),l=n(98131),c=n(19841),u=n(92379),d=n(74091),m=n(5443),p=n(62484),f=n(651);let x=["tooltip","className"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let j=d.Z.div(r||(r=(0,a.Z)(["sticky top-0 juice:p-3 mb-1.5 flex items-center justify-between z-10 h-14 p-2 font-semibold bg-token-main-surface-primary"])));function b(e){let t=(0,f.jsx)(m.z,h(h({color:"secondary",size:"small"},e),{},{className:(0,c.default)("flex items-center justify-center whitespace-nowrap",e.className)}));return null!=e.label?(0,f.jsx)(p.u,{side:"left",label:e.label,className:"h-fit w-fit",children:t}):t}let v=(0,u.forwardRef)(function(e,t){var n;let{tooltip:r,className:i}=e,a=(0,s.Z)(e,x),o=(0,f.jsx)(m.z,h(h({color:null!==(n=e.color)&&void 0!==n?n:"secondary",size:"medium"},a),{},{className:i,ref:t}));return null!=r?(0,f.jsx)(p.u,{label:r,children:o}):o});function y(e){let{label:t,disabled:n=!1,tooltipText:r,value:s}=e,i=(0,u.useId)();return(0,f.jsx)("div",{className:(0,c.default)("flex items-center gap-2",n?"opacity-50":""),children:(0,f.jsx)(p.E,{disabled:null==r,label:r,side:"right",children:(0,f.jsxs)("label",{htmlFor:i,className:"flex cursor-pointer items-center gap-1",children:[(0,f.jsx)(l.ck,{id:i,value:s,disabled:n,className:"mr-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 bg-white dark:border-gray-600 dark:bg-gray-700",children:(0,f.jsx)(l.z$,{className:"h-2 w-2 rounded-full bg-gray-950 dark:bg-white"})}),t]})})})}function k(e){return(0,f.jsx)(o.Z,h(h({},e),{},{className:(0,c.default)("!rounded border-gray-950 checked:!bg-black dark:border-gray-600 dark:bg-gray-700",e.className)}))}},38493:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(48580),s=n(86078),i=n.n(s),a=n(651);let o=i()(()=>n.e(4266).then(n.bind(n,14513)),{ssr:!1,loadableGenerated:{webpack:()=>[14513]}});function l(){return(0,r.sB)("snc").value?(0,a.jsx)(o,{}):null}},43967:function(e,t,n){n.d(t,{v:function(){return p}});var r=n(94521),s=n(3028),i=n(19841),a=n(92379),o=n(72256),l=n(25940),c=n(44230),u=n(651);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e){let{align:t,arrowPadding:n,alignOffset:r,show:l,onDismiss:d,children:p,title:x,side:g,sideOffset:h,theme:j="default",badge:b="new",description:v,dismissOnOutsideClick:y=!1}=e,k=(0,a.useRef)(null);return(0,u.jsxs)(s.fC,{open:l,onOpenChange:e=>{e||d()},children:[(0,u.jsx)(s.xz,{asChild:!0,ref:k,children:p}),(0,u.jsx)(s.h_,{children:(0,u.jsxs)(s.VY,{arrowPadding:n,alignOffset:r,align:t,side:g,sideOffset:h,onOpenAutoFocus:e=>{e.preventDefault()},onCloseAutoFocus:e=>{e.preventDefault()},onInteractOutside:e=>{var t;let n=e.target instanceof Element&&(null===(t=k.current)||void 0===t?void 0:t.contains(e.target));y||n?d():e.preventDefault()},updatePositionStrategy:"always",className:(0,i.default)("relative z-10 animate-slideLeftAndFade select-none rounded-xl p-4 text-sm shadow-sm","default"===j?"bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-700":"bg-blue-400 text-white"),children:[(0,u.jsxs)("div",{className:"flex max-w-xs flex-col gap-1",children:[(0,u.jsxs)("div",{className:"mb-0.5 flex gap-2",children:["new"===b?(0,u.jsx)("span",{className:(0,i.default)("rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase leading-normal","default"===j?"bg-green-500 text-white":"bg-white text-blue-selection"),children:(0,u.jsx)(o.Z,m({},f.new))}):(0,u.jsx)("span",{className:"rounded-full bg-blue-100 px-1.5 text-[10px] font-semibold text-blue-600",children:(0,u.jsx)(o.Z,m({},f.beta))}),(0,u.jsx)("div",{className:"grow font-semibold",children:x}),(0,u.jsx)(s.x8,{className:"-my-1 -mr-1 p-1 opacity-70 transition hover:opacity-100",children:(0,u.jsx)(c.tPq,{className:"icon-sm"})})]}),void 0!==v&&(0,u.jsx)("div",{className:"",children:v})]}),(0,u.jsx)(s.Eh,{asChild:!0,children:(0,u.jsx)("div",{className:(0,i.default)("relative top-[-6px] h-3 w-3 rotate-45 transform rounded-br-sm","default"===j?"bg-gray-900 dark:bg-gray-50":"bg-blue-400")})})]})})]})}let f=(0,l.vU)({new:{id:"announcementTooltip.new",defaultMessage:"New"},beta:{id:"announcementTooltip.beta",defaultMessage:"Beta"}})},99240:function(e,t,n){n.d(t,{W:function(){return l}});var r,s=n(41141),i=n(19841),a=n(74091),o=n(651);function l(e){let{icon:t,onClick:n,disabled:r,className:s,surfaceContext:a="primary"}=e;return(0,o.jsx)("button",{className:(0,i.default)("h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0","primary"===a?"hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary":"hover:bg-token-sidebar-surface-secondary focus-visible:bg-token-sidebar-surface-secondary",s),onClick:n,disabled:r,children:(0,o.jsx)(t,{className:"icon-xl-heavy"})})}a.Z.button(r||(r=(0,s.Z)(["rounded-lg px-2.5 py-1.5 text-token-text-secondary hover:bg-token-main-surface-secondary"])))}}]);
//# sourceMappingURL=2508-20eaf9a970b709de.js.map