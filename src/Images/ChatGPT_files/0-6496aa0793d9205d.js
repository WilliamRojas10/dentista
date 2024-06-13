"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{1e4:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(94521),a=r(62484),i=r(50045),s=r(19841),l=r(556),o=r(92379),c=r(72256),d=r(25940),u=r(55371),f=r(98506),m=r(65034),p=r(51022),h=r(73746),g=r(651);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function v(e){let{isDesktopNavCollapsed:t}=e;return(0,g.jsx)(l.E.div,{initial:!1,transition:{duration:.165},animate:{x:t?"0":"260px"},style:{rotate:t?180:0,y:"-50%"},className:(0,s.default)("fixed left-0 top-1/2 z-40"),children:(0,g.jsx)("button",{onClick:u.vm.toggleDesktopNavCollapsed,children:(0,g.jsxs)(a.u,{side:"right",label:t?(0,g.jsx)(c.Z,b({},y.openSidebar)):(0,g.jsx)(c.Z,b({},y.closeSidebar)),sideOffset:4,children:[(0,g.jsx)(l.E.div,{className:"flex h-[72px] w-8 items-center justify-center",variants:{rest:{},hover:{}},initial:!1,whileHover:["hover","arrow"],animate:["rest",t?"arrow":"line"],children:(0,g.jsxs)(l.E.div,{className:"flex h-6 w-6 flex-col items-center",children:[(0,g.jsx)(l.E.div,{className:"h-3 w-1 rounded-full",variants:{line:{rotate:"0deg",y:".15rem"},arrow:{rotate:"15deg",y:".15rem"},rest:{background:"var(--text-quaternary)"},hover:{background:"var(--text-primary)"}}}),(0,g.jsx)(l.E.div,{className:"h-3 w-1 rounded-full",variants:{line:{rotate:"0deg",y:"-.15rem"},arrow:{rotate:"-15deg",y:"-.15rem"},rest:{background:"var(--text-quaternary)"},hover:{background:"var(--text-primary)"}}})]})}),(0,g.jsx)(i.T,{children:t?(0,g.jsx)(c.Z,b({},y.openSidebar)):(0,g.jsx)(c.Z,b({},y.closeSidebar))})]})})})}function j(e){let{children:t,hideNavigation:r=!1,mobileHeaderContent:n,mobileHeaderRightContent:a,mobileHeaderBottomContent:i,sidebar:l,forceOpenDesktopSidebar:c=!1}=e,d=(0,f.w$)(),x=(0,u.xH)(),b=(0,h.Q)(),y=[],w=null;o.Children.forEach(t,e=>{o.isValidElement(e)&&(e.type===j.Sidebars?w=e:y.push(e))});let O=d&&!r&&null!=l;return(0,g.jsxs)("div",{className:"relative z-0 flex h-full w-full overflow-hidden",children:[O?(0,g.jsx)(m.Z,{children:(0,g.jsx)(p.l6,{forceOpenDesktopSidebar:c,children:(0,g.jsx)("div",{className:(0,s.default)("flex h-full min-h-0 flex-col"),children:l})})}):null,(0,g.jsxs)("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[!d&&!r&&(0,g.jsxs)(m.Z,{children:[(0,g.jsx)(p.Vs,{onClickOpenSidebar:()=>u.vm.toggleActiveSidebar("mobile-nav"),rightContent:a,bottomContent:i,children:n}),(0,g.jsx)(p.PU,{children:l})]}),(0,g.jsxs)("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:[(0,g.jsx)(m.Z,{children:O&&!b&&(0,g.jsx)(v,{isDesktopNavCollapsed:x})}),y]})]}),w]})}j.Sidebars=function(e){let{children:t}=e;return(0,g.jsx)(g.Fragment,{children:t})};let y=(0,d.vU)({closeSidebar:{id:"Stage.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"Stage.openSidebar",defaultMessage:"Open sidebar"}})},51022:function(e,t,r){r.d(t,{MP:function(){return C},Nz:function(){return N},PU:function(){return _},Vs:function(){return E},l6:function(){return T}});var n=r(94521),a=r(17379),i=r(5443),s=r(44230),l=r(12596),o=r(79931),c=r(93747),d=r(19841),u=r(556),f=r(43128),m=r(92379),p=r(26123),h=r(72256),g=r(25940),x=r(55371);r(98506);var b=r(62484),v=r(73746),j=r(92187),y=r(32145),w=r(651);let O=["onClick","className"],k=["onClick"];function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function C(e){let{onClick:t,className:r}=e,n=(0,a.Z)(e,O);return(0,w.jsx)(j.zV,P({onClick:t,className:(0,d.default)(r,"flex-grow overflow-hidden")},n))}function N(e){let{historyDisabled:t,onNewChatButtonClick:r}=e,n=(0,p.Z)(),{isUserUnauthenticated:a,isLoading:i}=(0,l.EH)(),o=(0,v.Q)();return i?null:a?(0,w.jsx)(Z,{}):(0,w.jsx)(b.u,{label:t?n.formatMessage({id:"/CxV1V",defaultMessage:"Clear chat"}):n.formatMessage({id:"Cvr6Bs",defaultMessage:"New chat"}),className:"h-6",sideOffset:4,children:(0,w.jsx)(S,{onClick:()=>{c.A.logNewChatButtonClicked({location:"Mobile header"}),r()},children:t?(0,w.jsx)(s.Ezi,{className:(0,d.default)(o&&"mx-2.5","icon-lg juice:text-token-text-secondary")}):(0,w.jsx)(s.bl$,{className:(0,d.default)(o&&"mx-2.5","icon-lg juice:text-token-text-secondary")})})})}function S(e){let{onClick:t}=e,r=(0,a.Z)(e,k);return(0,w.jsx)("button",P({type:"button",className:"px-3",onClick:t},r))}function Z(){let{navigateToAuth:e}=(0,l.EH)();return(0,w.jsx)(i.z,{as:"button",size:"small",color:"primary",className:"mr-3 juice:mr-6",onClick:()=>{let t=e({authType:"signup"});c.A.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:t})},children:(0,w.jsx)(h.Z,P({},I.signUpButtonText))})}let _=e=>{let{children:t}=e,r=(0,x.tN)(e=>e.activeSidebar),{isUserUnauthenticated:n}=(0,l.EH)(),a=(0,v.Q)()&&n?(0,w.jsx)(y.E,{}):t;return(0,w.jsx)(o.fC,{open:"mobile-nav"===r,onOpenChange:e=>{e||x.vm.setActiveSidebar(!1)},children:(0,w.jsxs)(o.h_,{children:[(0,w.jsx)(o.aV,{className:"fixed inset-0 bg-black/50 radix-state-open:animate-show"}),(0,w.jsx)(o.VY,{className:"fixed left-0 top-0 h-full max-w-xs bg-token-sidebar-surface-primary focus:outline-none radix-state-open:animate-sidebarShow",children:a})]})})},E=e=>{let{onClickOpenSidebar:t,children:r,rightContent:n,bottomContent:a}=e,i=(0,x.tN)(e=>e.activeSidebar),l=(0,f.useRouter)().asPath;return(0,m.useEffect)(()=>{"mobile-nav"===i&&x.vm.setActiveSidebar(!1)},[l]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"sticky top-0 z-10 flex min-h-[40px] items-center justify-center border-b border-token-border-medium bg-token-main-surface-primary pl-1 juice:min-h-[60px] juice:border-transparent juice:pl-0 md:hidden",children:[(0,w.jsxs)("button",{type:"button",className:"absolute bottom-0 left-0 top-0 inline-flex items-center justify-center rounded-md px-3 hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:t,children:[(0,w.jsx)("span",{className:"sr-only",children:(0,w.jsx)(h.Z,P({},I.openSidebar))}),(0,w.jsx)(s.Oqj,{className:"icon-lg juice:mx-2.5 juice:text-token-text-secondary"})]}),r,null!=n&&(0,w.jsx)("div",{className:"absolute bottom-0 right-0 top-0 inline-flex items-center juice:justify-center",children:n})]}),a&&(0,w.jsx)("div",{className:"flex w-full items-center justify-center bg-token-main-surface-primary",children:a})]})};function T(e){let{forceOpenDesktopSidebar:t,children:r}=e,n=(0,m.useRef)(null),a=(0,x.xH)()&&!t;return(0,w.jsx)(u.E.div,{className:"flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary",ref:n,initial:!1,animate:{width:a?0:"260px",transition:{duration:.165,ease:"easeOut"}},onAnimationStart:()=>{n.current&&(n.current.style.visibility="visible")},onAnimationComplete:()=>{n.current&&a&&(n.current.style.visibility="hidden")},children:(0,w.jsx)("div",{className:"h-full w-[260px]",children:(0,w.jsx)("div",{className:"flex h-full min-h-0 flex-col",children:r})})})}let I=(0,g.vU)({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}})},99373:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(55371),a=r(91530),i=r.n(a),s=r(26123),l=r(25940),o=r(49217),c=r(97126),d=r(651);function u(e){let{workspace:t}=e,r=(0,s.Z)(),a=(0,n.EV)(n.B.InviteUsersToWorkspace);return(0,d.jsx)(o.Z,{size:"custom",className:"max-w-lg text-sm",isOpen:a,onClose:i(),type:"success",title:null!=t.data.name?r.formatMessage(f.inviteMemberModalTitle,{workspaceName:t.data.name}):r.formatMessage(f.inviteMemberModalTitleUntitledWorkspace),description:r.formatMessage(f.inviteMemberModalDescription),children:(0,d.jsx)(c.Z,{workspace:t,canResendInviteEmails:!0,onCancel:()=>n.vm.closeModal(n.B.InviteUsersToWorkspace),onSuccess:()=>n.vm.closeModal(n.B.InviteUsersToWorkspace),cancelButtonText:r.formatMessage(f.inviteMemberInviteCancelButton)})})}let f=(0,l.vU)({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}})},93598:function(e,t,r){r.d(t,{C:function(){return d}});var n=r(94521),a=r(91530),i=r.n(a),s=r(68810);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let c={showReferralInviteModal:!1},d=(0,s.Ue)()(e=>o(o({},c),{},{setShowReferralInviteModal:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i();e({showReferralInviteModal:t}),null==r||r()}}))},92187:function(e,t,r){r.d(t,{R:function(){return f},Vq:function(){return m},ZB:function(){return d},zV:function(){return u}});var n,a,i,s,l,o=r(41141);r(40319);var c=r(74091);r(651),c.Z.a(n||(n=(0,o.Z)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"])));let d=c.Z.a(a||(a=(0,o.Z)(["flex gap-2 rounded p-2.5 text-sm cursor-pointer focus:ring-0 hover:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group items-center"]))),u=(0,c.Z)(d)(i||(i=(0,o.Z)(["border dark:border-white/20 min-h-0 hover:bg-gray-500/10 h-10 rounded-lg border-[rgba(0,0,0,0.1)]"]))),f=c.Z.div(s||(s=(0,o.Z)(["h-px bg-token-border-light my-1.5"]))),m=(0,c.Z)(d)(l||(l=(0,o.Z)(["",""])),e=>e.$active?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary")},59585:function(e,t,r){r.d(t,{LE:function(){return ef},ZP:function(){return ed}});var n,a,i=r(41141),s=r(94521),l=r(38923),o=r(4702),c=r(55371),d=r(12596),u=r(50045),f=r(93747),m=r(27033),p=r(48580),h=r(19841),g=r(92379),x=r(26123),b=r(72256),v=r(25940),j=r(74091),y=r(5443),w=r(80179);r(62484);var O=r(44230),k=r(44899),M=r(99373),P=r(93223),C=r(27603),N=r(15236),S=r(43128),Z=r(50684),_=r(68810);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let T={showFreeTrialLoadingPayment:!1,showConfirmDismissFreeTrial:!1,didCloseFreeTrial:!1},I=(0,_.Ue)()(()=>(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e})({},T));function D(e){I.setState({showFreeTrialLoadingPayment:e})}var F=r(94982),A=r(556),B=r(98302),U=r(14816),L=r(651);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function q(e){let{showFreeTrialLoadingPayment:t,handleGetPaymentLink:r}=e,n=(0,x.Z)(),{data:a,isLoading:i,isSuccess:s}=(0,U.a)({queryKey:["claimedReferralInvite"],queryFn:()=>P.Z.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),l=null==a?void 0:a.invite_code,{0:o,1:c}=(0,g.useState)(!1);if((0,g.useEffect)(()=>{l&&!o&&s&&(c(!0),p.m9.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),f.A.logEvent(N.M.chatgptReferralShowClaimedSidebartMenuPromo))},[l,c,o,s]),!l||i||!s)return null;let d=l.invite_metadata.invite_data,u=null!=d&&d.referral_trial_duration_months?(null==d?void 0:d.referral_trial_duration_months)>1?n.formatMessage(H.monthsOfBenefit,{referralTrialDurationMonths:null==d?void 0:d.referral_trial_duration_months}):n.formatMessage(H.daysOfBenefit,{referralTrialDurationDays:null==d?void 0:d.referral_trial_duration_days}):null;return(0,L.jsx)(A.E.div,{className:(0,h.default)("relative",{"cursor-progress opacity-50":t}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:(0,L.jsxs)(z,{className:(0,h.default)(t&&"opacity-75"),onClick:()=>{t||(D(!0),r())},children:[(0,L.jsxs)("div",{className:"flex w-full flex-row items-center justify-start gap-3 ",children:[(0,L.jsx)(B.E33,{className:"icon-sm shrink-0"}),(0,L.jsx)(b.Z,W(W({},H.freeTrialCta),{},{values:{duration:u}}))]}),!t&&(0,L.jsx)(O.tPq,{onClick:e=>{e.stopPropagation(),I.setState({showConfirmDismissFreeTrial:!0}),I.setState({didCloseFreeTrial:!0})},className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),(0,L.jsx)("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}let z=j.Z.a(n||(n=(0,i.Z)(["group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]))),H=(0,v.vU)({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}});var V=r(92187),G=r(33112),Q=r(93598);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function X(){var e,t,r,n,a,i,s;let l=(0,S.useRouter)(),c=(0,x.Z)(),d=(0,o.hz)(),u=(0,o.t)(),m=!u,h=null!==(e=null==u?void 0:u.hasPaidSubscription())&&void 0!==e&&e,b=null!==(t=null==u?void 0:u.hasClaimedFreeTrial())&&void 0!==t&&t,v=(0,g.useMemo)(()=>null==u?void 0:u.subscriptionAnalyticsParams,[u]),j=async()=>{D(!0),f.A.logEvent(N.M.clickAccountPaymentCheckout,v);try{let e=await P.Z.getCheckoutLink(d);l.push(e.url)}catch(e){F.m.warning(c.formatMessage(et.paymentErrorWarning),{hasCloseButton:!0}),D(!1)}finally{}},y=I(e=>e.didCloseFreeTrial),w=I(e=>e.showFreeTrialLoadingPayment),O=!y&&b,k=null!==(r=null==u?void 0:u.wasPaidCustomer())&&void 0!==r&&r,M=null!==(n=null==u?void 0:u.isWorkspaceAccount())&&void 0!==n&&n,Z=null!==(a=null==u?void 0:u.isPlus())&&void 0!==a&&a,_=!m&&!M&&(!1===Z||null!==(i=null==d?void 0:d.includes(C.L0.Teams))&&void 0!==i&&i),{setShowReferralInviteModal:E}=(0,Q.C)(e=>({setShowReferralInviteModal:e.setShowReferralInviteModal})),T=(0,g.useCallback)(()=>{p.m9.logEvent("chatgpt_referral_invite_sidebar_clicked"),f.A.logEvent(N.M.chatgptReferralInviteSidebarClicked,v),E(!0,()=>{f.A.logEvent(N.M.clickSidebarAccountPaymentMenuItem,v)})},[v,E]),A=null!==(s=null==u?void 0:u.isTeam())&&void 0!==s&&s;return(0,L.jsxs)(L.Fragment,{children:[((null==d?void 0:d.includes(C.a3))||h)&&(0,L.jsx)(ee,{analyticsParams:v,handleReferralInvite:T}),!h&&O&&(0,L.jsx)(q,{showFreeTrialLoadingPayment:w,handleGetPaymentLink:j}),A&&(0,L.jsx)(J,{}),_&&(0,L.jsx)(V.Vq,{onClick:O?()=>{w||(D(!0),j())}:()=>{f.A.logEvent(N.M.clickSidebarAccountPaymentMenuItem,v),(0,G.MG)("Sidebar account payment menu item")},className:"m-0 rounded-lg px-2",children:(0,L.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,L.jsx)("div",{className:"flex items-center gap-2",children:(0,L.jsx)(Y,{wasPaidCustomer:k,showFreeTrialLoadingPayment:w,hasPlusSubscription:Z})})})})]})}let Y=e=>{let{wasPaidCustomer:t,showFreeTrialLoadingPayment:r,hasPlusSubscription:n}=e;return r?(0,L.jsx)(Z.Z,{className:"icon-sm shrink-0"}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,L.jsx)(O.X72,{className:"icon-sm shrink-0"})}),(0,L.jsx)("div",{className:"flex flex-col",children:t?(0,L.jsx)(b.Z,K({},et.renewPlus)):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("span",{children:n?(0,L.jsx)(b.Z,K({},et.createATeamWorkspace)):(0,L.jsx)(b.Z,K({},et.upgradePlan))}),(0,L.jsx)("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:n?(0,L.jsx)(b.Z,K({},et.upgradeToTeamUpsell)):(0,L.jsx)(b.Z,K({},et.upgradeToPlusUpsell))})]})})]})},J=()=>{let e=(0,o.t)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(V.Vq,{onClick:()=>{c.vm.openModal(c.B.InviteUsersToWorkspace)},className:"rounded-lg",children:(0,L.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,L.jsxs)("span",{className:"flex items-center gap-2",children:[(0,L.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,L.jsx)(O.pF9,{className:"icon-sm shrink-0"})}),(0,L.jsx)(b.Z,K({},et.inviteMembers))]})})}),null!=e?(0,L.jsx)(M.Z,{workspace:e}):null]})},ee=e=>{var t;let{analyticsParams:r,handleReferralInvite:n}=e,a=(0,o.hz)(),i=null!==(t=null==a?void 0:a.includes(C.a3))&&void 0!==t&&t,s=(0,o.t)(),{data:l}=(0,U.a)({queryKey:["referralInvites"],queryFn:()=>P.Z.getEligibleReferralInvites(),enabled:i}),c=s&&!s.isOrWasPaidCustomer()&&!s.hasPlusFeatures(),d=(null==l?void 0:l.invites_remaining)&&(null==l?void 0:l.invites_remaining)>0,u=c&&d,{0:m,1:h}=(0,g.useState)(!1);return((0,g.useEffect)(()=>{u&&!m&&(h(!0),p.m9.logEvent("chatgpt_referral_show_sidebar_menu_item"),f.A.logEvent(N.M.chatgptReferralShowSidebarMenuItem,r))},[u,h,m,r]),u)?(0,L.jsx)(V.Vq,{onClick:n,className:"rounded-lg",children:(0,L.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,L.jsxs)("span",{className:"flex items-center gap-2",children:[(0,L.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,L.jsx)(O.pF9,{className:"icon-sm shrink-0"})}),(0,L.jsx)(b.Z,K({},et.inviteReferral))]})})}):null},et=(0,v.vU)({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"Get GPT-4, DALL\xb7E, and more"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});var er=r(98506),en=r(35226),ea=r(96053);let ei=()=>(0,U.a)({queryKey:["userSurvey"],queryFn:async()=>P.Z.getActiveUserSurvey()}),es=()=>{let e=(0,en.NL)();return(0,ea.D)({mutationFn:async e=>{let{surveyId:t,reason:r}=e;return P.Z.completeUserSurvey(t,r)},onSuccess:async()=>{e.invalidateQueries({queryKey:["userSurvey"]})}})};function el(){var e;let t=(0,x.Z)(),r=(0,er.w$)(),{0:n,1:a}=(0,g.useState)(!1),i=null===(e=ei().data)||void 0===e?void 0:e.survey,s=es(),l=e=>{a(!0),null!=i&&s.mutate({surveyId:i.id,reason:e})};return n||null==i?null:(0,L.jsx)("div",{className:"mx-1 mb-1 rounded-sm bg-brand-blue-800",children:(0,L.jsxs)("div",{className:"flex flex-col items-center justify-stretch gap-3 p-3 text-sm text-white",children:[(0,L.jsxs)("div",{className:"flex w-full items-start",children:[(0,L.jsxs)("div",{className:"flex flex-grow flex-col gap-1",children:[(0,L.jsx)("div",{className:"font-bold",children:(0,L.jsx)(b.Z,{id:"navigation.survey.title",defaultMessage:"We are asking a small group of people for their opinion"})}),(0,L.jsx)("div",{children:(0,L.jsx)(b.Z,{id:"navigation.survey.description",defaultMessage:"Could you spare few minutes to take a short survey?"})})]}),(0,L.jsx)("button",{className:"text-white/25 hover:text-white/40",onClick:()=>l("dismissed"),"aria-label":t.formatMessage({id:"navigation.survey.dismiss",defaultMessage:"Dismiss survey"}),children:(0,L.jsx)(O.tPq,{width:r?"20px":"24px",height:r?"20px":"24px"})})]}),(0,L.jsxs)("a",{href:i.link,target:"_blank",className:"flex w-full flex-row items-center justify-center gap-2 rounded bg-white/25 p-2 hover:bg-white/40",rel:"noreferrer",onClick:()=>l("link_clicked"),children:[(0,L.jsx)(O.Pfi,{className:"icon-sm"}),(0,L.jsx)(b.Z,{id:"navigation.survey.takeSurvey",defaultMessage:"Take survey"})]})]})})}function eo(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ec(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eo(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eo(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ed(e){let{navHeader:t,children:r,className:n}=e,a=(0,x.Z)(),i=(0,g.useRef)(null),s=(0,w.V_)(),{openSettings:l}=(0,k.F)(),{isUserUnauthenticated:o}=(0,d.EH)();return(0,g.useEffect)(()=>{w._P.getModifiedSettings()&&l()},[]),(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)("div",{className:"relative h-full w-full flex-1 items-start border-white/20",children:[(0,L.jsx)(u.f,{asChild:!0,children:(0,L.jsx)("h2",{children:(0,L.jsx)(b.Z,ec({},ep.chatHistoryLabel))})}),(0,L.jsxs)("nav",{className:(0,h.default)("flex h-full w-full flex-col px-3 pb-3.5 juice:pb-0",n),"aria-label":a.formatMessage(ep.chatHistoryLabel),children:[t,(0,L.jsx)(em,{ref:i,$disableScroll:s&&!o,children:r}),(0,L.jsx)(eu,{})]})]})})}function eu(){let{0:e}=(0,g.useState)(()=>{let e=m.bX.getCookie(m.cn.Workspace);return"string"==typeof e&&e!==l.b}),t=(0,o.t)(),r=(null==t?void 0:t.data)==null,{isUserUnauthenticated:n}=(0,d.EH)();return e&&r||!t?null:n?(0,L.jsx)(ef,{}):(0,L.jsxs)("div",{className:"flex flex-col pt-2 empty:hidden juice:py-2 dark:border-white/20",children:[(0,L.jsx)(el,{}),(0,L.jsx)(X,{})]})}let ef=()=>{let{navigateToAuth:e}=(0,d.EH)();return(0,L.jsxs)("div",{className:"juice:p-2",children:[(0,L.jsxs)("div",{className:"mb-4 mt-2",children:[(0,L.jsx)("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:(0,L.jsx)(b.Z,ec({},ep.signUpOrLogIn))}),(0,L.jsx)("p",{className:"text-sm text-token-text-secondary",children:(0,L.jsx)(b.Z,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),(0,L.jsxs)("div",{className:"flex flex-col space-y-2 juice:flex-row juice:items-start juice:gap-2 juice:space-y-0",children:[(0,L.jsx)(y.z,{as:"button",size:"medium",color:"primary",onClick:()=>{let t=e({authType:"signup"});f.A.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:t}),p.m9.logEvent("chatgpt_sidebar_signup_button_clicked")},children:(0,L.jsx)(b.Z,ec({},ep.unauthSignupCta))}),(0,L.jsx)(y.z,{as:"button",size:"medium",color:"secondary","data-testid":"login-button",onClick:()=>{let t=e({authType:"login"});f.A.logLogInButtonClicked({location:"Sidebar bottom unit",provider:t}),p.m9.logEvent("chatgpt_sidebar_login_button_clicked")},children:(0,L.jsx)(b.Z,ec({},ep.unauthLoginCta))})]})]})},em=j.Z.div(a||(a=(0,i.Z)(["flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2\n  ",""])),e=>{let{$disableScroll:t}=e;return t?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}),ep=(0,v.vU)({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}})},32145:function(e,t,r){r.d(t,{E:function(){return h}});var n=r(55371),a=r(48580),i=r(72256),s=r(67165),l=r(44230),o=r(73746),c=r(64638),d=r(44899),u=r(59585),f=r(44894),m=r(93013),p=r(651);let h=()=>{var e,t;let{openSettings:r}=(0,d.F)(),h=null===(e=(0,a.sB)("conversations_are_reportable"))||void 0===e?void 0:e.value,g=null===(t=(0,a.sB)("chatgpt-conversation-report-flow"))||void 0===t?void 0:t.value,x=(0,o.Q)();return(0,p.jsxs)("div",{className:"flex h-full flex-col gap-2 p-3",children:[(0,p.jsx)(m.f,{icon:l.bl$,onClick:()=>{(0,c.Xl)(),n.vm.closeActiveSidebar()},children:(0,p.jsx)(i.Z,{id:"0FupYP",defaultMessage:"New chat"})}),(0,p.jsx)("div",{className:"flex grow items-end justify-center juice:items-center",children:(0,p.jsx)(u.LE,{})}),x&&(0,p.jsxs)(s.d,{contentClassName:"w-[298px]",triggerButton:(0,p.jsx)(m.f,{icon:l.voc,children:(0,p.jsx)(i.Z,{id:"y4Lkp7",defaultMessage:"Settings and more"})}),children:[(0,p.jsx)(s.Z.Item,{onClick:()=>r(),icon:l.SWE,children:(0,p.jsx)(i.Z,{id:"HrRLkZ",defaultMessage:"Settings"})}),h&&g&&(0,p.jsx)(s.Z.Item,{icon:l.U65,onClick:()=>{n.vm.openModal(n.B.ReportConversation)},children:(0,p.jsx)(i.Z,{id:"thread.report.0",defaultMessage:"Report illegal content"})}),(0,p.jsx)(s.Z.Separator,{}),(0,p.jsx)(f.E,{})]})]})}},44894:function(e,t,r){r.d(t,{E:function(){return c}});var n=r(93747),a=r(15236),i=r(72256),s=r(67165),l=r(44230),o=r(651);function c(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z.Item,{icon:l.Pfi,children:(0,o.jsx)("a",{href:"https://help.openai.com/en/collections/3742473-chatgpt",target:"_blank",onClick:()=>{n.A.logEvent(a.M.clickFaqLink)},children:(0,o.jsx)(i.Z,{id:"thread.helpAndFaq",defaultMessage:"Help & FAQ"})})}),(0,o.jsx)(s.Z.Item,{icon:l.Pfi,children:(0,o.jsx)("a",{href:"https://help.openai.com/en/articles/6825453-chatgpt-release-notes",target:"_blank",children:(0,o.jsx)(i.Z,{id:"thread.releaseNotes",defaultMessage:"Release notes"})})}),(0,o.jsx)(s.Z.Item,{icon:l.Pfi,children:(0,o.jsx)("a",{href:"https://openai.com/policies",target:"_blank",onClick:()=>{n.A.logEvent(a.M.clickPrivacyPolicy)},children:(0,o.jsx)(i.Z,{id:"thread.termsAndPolicies",defaultMessage:"Terms & policies"})})})]})}},93013:function(e,t,r){r.d(t,{f:function(){return g}});var n,a=r(94521),i=r(17379),s=r(41141),l=r(19841),o=r(92379),c=r(74091),d=r(73746),u=r(651);let f=["icon","children"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let h=c.Z.button(n||(n=(0,s.Z)(["flex h-10 w-full items-center gap-2 rounded-lg px-2 font-medium text-token-text-primary hover:bg-token-sidebar-surface-secondary juice:gap-2.5 juice:font-normal"]))),g=(0,o.forwardRef)(function(e,t){let{icon:r,children:n}=e,a=(0,i.Z)(e,f),s=(0,d.Q)();return(0,u.jsxs)(h,p(p({ref:t},a),{},{children:[(0,u.jsx)("div",{className:(0,l.default)("flex items-center justify-center text-token-text-secondary",s?"h-6 w-6":"h-7 w-7"),children:(0,u.jsx)(r,{className:"icon-md"})}),(0,u.jsx)("span",{className:"text-sm",children:n})]}))})},64638:function(e,t,r){r.d(t,{Xl:function(){return x},yE:function(){return b}});var n=r(55371),a=r(12596),i=r(93747),s=r(15236),l=r(17927),o=r(48580),c=r(43128),d=r.n(c),u=r(92379),f=r(26123),m=r(72256),p=r(5443),h=r(49217),g=r(651);function x(){!0===l.m.getItem(l.F.HasSeenNewChatModal)?d().push("/"):(l.m.setItem(l.F.HasSeenNewChatModal,!0),n.vm.openModal(n.B.NoAuthNewChat))}function b(){return(0,n.EV)(n.B.NoAuthNewChat)?(0,g.jsx)(v,{onClose:()=>{n.vm.closeModal(n.B.NoAuthNewChat)}}):null}function v(e){let{onClose:t}=e,r=(0,f.Z)(),{navigateToAuth:n}=(0,a.EH)();return(0,u.useEffect)(()=>{o.m9.logEvent("chatgpt_new_chat_modal_shown"),i.A.logEvent(s.M.newChatModalShown)},[]),(0,g.jsxs)(h.Z,{isOpen:!0,title:r.formatMessage({id:"NewChatModal.title",defaultMessage:"New chat?"}),type:"success",onClose:t,children:[(0,g.jsx)("p",{className:"mb-6",children:(0,g.jsx)(m.Z,{id:"gV6y+5",defaultMessage:"Your current chat will no longer be accessible. <signup>Sign up</signup> or <login>log in</login> to save chats.",values:{signup:e=>(0,g.jsx)("a",{href:"#",className:"text-token-text-primary underline",onClick:e=>{e.preventDefault();let t=n({authType:"signup"});o.m9.logEvent("chatgpt_new_chat_modal_sign_up_link_clicked"),i.A.logSignUpButtonClicked({location:"New chat modal",provider:t})},children:e}),login:e=>(0,g.jsx)("a",{href:"#",className:"text-token-text-primary underline",onClick:e=>{e.preventDefault();let t=n({authType:"login"});o.m9.logEvent("chatgpt_new_chat_modal_log_in_link_clicked"),i.A.logLogInButtonClicked({location:"New chat modal",provider:t})},children:e})}})}),(0,g.jsxs)("div",{className:"flex flex-row justify-end space-x-2",children:[(0,g.jsx)(p.z,{onClick:()=>{o.m9.logEvent("chatgpt_new_chat_modal_cancel_button_clicked"),i.A.logEvent(s.M.newChatModalCancelButtonClicked),t()},color:"secondary",children:(0,g.jsx)(m.Z,{id:"NewChatModal.cancel",defaultMessage:"Cancel"})}),(0,g.jsx)(p.z,{onClick:()=>{o.m9.logEvent("chatgpt_new_chat_modal_new_chat_button_clicked"),i.A.logNewChatButtonClicked({location:"New Chat Modal New Chat Button"}),d().push("/"),t()},children:(0,g.jsx)(m.Z,{id:"NewChatModal.confirm",defaultMessage:"New chat"})})]})]})}}}]);
//# sourceMappingURL=0-6496aa0793d9205d.js.map