"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1353],{67165:function(e,t,n){n.d(t,{d:function(){return k}});var r=n(94521),o=n(17379),a=n(96271),i=n(19841),l=n(92379),s=n(14910),d=n(73746),u=n(44230),c=n(73965),f=n(651);let p=["className","size","align"],m=["onSelect","icon","className","color","size"],g=["className"],x=["onSelect","children"],v=["className"],h=["icon","children"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let w=l.forwardRef(function(e,t){let{className:n,size:r="default",align:l}=e,s=(0,o.Z)(e,p);return(0,f.jsx)(c.w5,b({ref:t,$as:a.VY,sideOffset:4,align:null!=l?l:"start",collisionPadding:10,className:(0,i.default)({"min-w-[280px]":"default"===r,"min-w-[340px]":"large"===r,"min-w-[125px]":"small"===r,"overflow-hidden":!0},n)},s))});function k(e){let{triggerButton:t,children:n,size:r="default",open:o,onOpenChange:i,contentAlign:l,side:s,sideOffset:d=0,alignOffset:u=0,contentClassName:c}=e;return(0,f.jsxs)(a.fC,{modal:!1,open:o,onOpenChange:i,children:[(0,f.jsx)(a.xz,{asChild:!0,children:t}),(0,f.jsx)(a.Uv,{children:(0,f.jsx)(w,{size:r,align:l,alignOffset:u,side:s,sideOffset:d,className:c,children:n})})]})}let _={Root:a.fC,Trigger:function(e){return(0,f.jsx)(c.J7,b(b({$as:a.xz},e),{},{onFocusCapture:t=>{var n;t.stopPropagation(),null===(n=e.onFocusCapture)||void 0===n||n.call(e,t)}}))},Portal:a.Uv,Content:w,Item:l.forwardRef(function(e,t){let{onSelect:n,icon:r,className:s,color:u,size:p="default"}=e,g=(0,o.Z)(e,m),x=(0,d.Q)(),v=x?c.yy:c.aF;return r?(0,f.jsxs)(v,b(b({$as:a.ck,ref:t,onSelect:n,className:(0,i.default)("danger"===u&&"text-token-text-error",x&&"large"===p&&"gap-3",s)},g),{},{children:[(0,f.jsx)("div",{className:(0,i.default)(x&&"flex items-center justify-center",x&&"danger"===u&&"text-token-text-error",x&&"danger"!==u&&"text-token-text-secondary",x&&"default"===p&&"h-5 w-5",x&&"large"===p&&"h-5 w-7"),children:(0,l.isValidElement)(r)?r:(0,f.jsx)(r,{className:"h-5 w-5 shrink-0"})}),g.children]})):(0,f.jsx)(v,b({$as:a.ck,ref:t,onSelect:n,className:(0,i.default)("danger"===u&&"text-token-text-error",s)},g))}),Separator:function(e){let{className:t}=e,n=(0,o.Z)(e,g);return(0,f.jsx)(a.Z0,b({className:(0,i.default)("my-1.5 h-[1px] bg-token-border-light juice:mx-5 juice:my-1",t)},n))},RadioGroup:a.Ee,RadioItem:function(e){let{onSelect:t,children:n}=e,r=(0,o.Z)(e,x);return(0,f.jsxs)(c.aF,b(b({$as:a.Rk,onSelect:t},r),{},{children:[(0,f.jsx)(a.wU,{className:"absolute",children:(0,f.jsx)(u.$As,{className:"icon-sm"})}),(0,f.jsx)("span",{className:"ml-6",children:n})]}))},Sub:a.Tr,SubContent:function(e){let{className:t}=e,n=(0,o.Z)(e,v),r=(0,d.Q)();return(0,f.jsx)(c.w5,b({$as:a.tu,className:(0,i.default)("mt-2 max-h-[calc(100vh-300px)] min-w-[100px] overflow-auto",t),sideOffset:r?8:-10,alignOffset:r?-16:-14,collisionPadding:20},n))},SubMenuTrigger:function(e){let{icon:t,children:n}=e,r=(0,o.Z)(e,h),l=(0,d.Q)(),u=l?c.yy:c.aF;return(0,f.jsxs)(u,b(b({$as:a.fF},r),{},{children:[t&&(0,f.jsx)("div",{className:(0,i.default)(l&&"text-token-text-secondary",l&&"flex h-5 w-5 items-center justify-center"),children:(0,f.jsx)(t,{className:"h-5 w-5 flex-shrink-0"})}),n,(0,f.jsx)("div",{className:"ml-auto flex items-center text-token-text-tertiary group-data-[disabled]:opacity-50",children:(0,f.jsx)(s.Yf,{className:"icon-md "})})]}))},Label:function(e){let{children:t}=e;return(0,f.jsx)(a.__,{className:"m-1.5 p-2.5 text-xs font-semibold text-token-text-secondary juice:mx-2 juice:my-0 juice:px-2",children:t})}};t.Z=_},73965:function(e,t,n){n.d(t,{J7:function(){return u},M4:function(){return m},aF:function(){return c},w5:function(){return p},yy:function(){return f}});var r,o,a,i,l,s=n(41141),d=n(74091);let u=d.Z.button(r||(r=(0,s.Z)(["\ntext-token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent\nleading-none outline-none cursor-pointer\nhover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary\nfocus-visible:bg-token-main-surface-secondary\nradix-state-active:text-token-text-secondary\nradix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent\n"]))),c=d.Z.div(o||(o=(0,s.Z)(["flex gap-2 items-center m-1.5 rounded p-2.5 text-sm cursor-pointer focus-visible:outline-0 hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative"]))),f=(0,d.Z)(c)(a||(a=(0,s.Z)(["hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5] dark:hover:bg-token-main-surface-secondary dark:focus-visible:bg-token-main-surface-secondary rounded-md my-0 px-3 mx-2 radix-state-open:bg-[#f5f5f5] dark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3"]))),p=d.Z.div(i||(i=(0,s.Z)(["\nmax-w-xs rounded-lg popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade\nborder border-token-border-light juice:rounded-2xl juice:py-2\n"]))),m=d.Z.div(l||(l=(0,s.Z)(["popover overflow-auto rounded-xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-xl"])))},20055:function(e,t,n){n.d(t,{I:function(){return a},o:function(){return i}});let r=["xlsx","pptx","docx"],o={"application/vnd.google-apps.spreadsheet":"xlsx","application/vnd.google-apps.presentation":"pptx","application/vnd.google-apps.document":"docx"};function a(e){var t;return e&&null!==(t=o[e.split(";")[0]])&&void 0!==t?t:null}function i(e){return e&&r.includes(e)?e:null}},61457:function(e,t,n){n.d(t,{AJ:function(){return i},XX:function(){return s},xA:function(){return l}});var r,o,a=n(20055);let i=((r={})[r.None=0]="None",r[r.Multimodal=1]="Multimodal",r[r.Interpreter=2]="Interpreter",r[r.Retrieval=3]="Retrieval",r[r.ContextConnector=4]="ContextConnector",r[r.ProfilePicture=5]="ProfilePicture",r);function l(e){if(e)return{contextConnector:e.context_connector,sourceUrl:e.source_url,syntheticExtension:(0,a.o)(e.synthetic_extension),type:e.type}}let s=((o={}).Uploading="uploading",o.Ready="ready",o)},58543:function(e,t,n){n.d(t,{$H:function(){return g},$p:function(){return F},Ad:function(){return S},B:function(){return P},BV:function(){return O},CO:function(){return U},Iy:function(){return p},KL:function(){return E},L8:function(){return m},O6:function(){return h},Tu:function(){return T},VF:function(){return v},Vm:function(){return N},WI:function(){return Z},YN:function(){return b},Z8:function(){return C},Zp:function(){return j},_0:function(){return _},kr:function(){return x},p0:function(){return M},s1:function(){return w},ww:function(){return y},xs:function(){return k}});var r=n(21904),o=n(85734),a=n(93223),i=n(50406),l=n(59031),s=n(92379),d=n(26123),u=n(25940),c=n(94982),f=n(61457);function p(e){return e.replace("file-service://","")}function m(e){return"file-service://"+e}function g(e){return e.startsWith("file-service://")}function x(e,t,n){switch(t){case"file_zero_bytes":return e.formatMessage(I.fileZeroBytes,n);case"file_too_large":return e.formatMessage(I.fileTooLarge,n);case"over_user_quota":return e.formatMessage(I.overUserQuota,n);case"file_not_found":case"file_expired":return e.formatMessage(I.fileNotFound,n);case"file_timed_out":return e.formatMessage(I.fileTimedOut,n);case"ace_pod_expired":return e.formatMessage(I.codeInterpreterSessionTimeout,n);case"permission_error":return e.formatMessage(I.permissionError,n);case"default_upload_error":case"file_rejected":return e.formatMessage(I.defaultCreateEntryError,n);case"default_download_link_error":return e.formatMessage(I.defaultDownloadLinkError,n);case"file_empty":return e.formatMessage(I.fileEmpty,n);case"too_many_tokens":return e.formatMessage(I.fileTooManyTokens,n);case"file_encrypted":return e.formatMessage(I.fileEncrypted,n);case"file_corrupted":return e.formatMessage(I.fileCorrupted,n);case"failed_upload_to_blobstore":return e.formatMessage(I.failedUploadToBlobStore,n);default:return e.formatMessage(I.unknownError)}}function v(){let e=(0,d.Z)();return(0,s.useCallback)((t,n)=>x(e,t,n),[e])}function h(){let{session:e}=(0,i.kP)(),t=(0,d.Z)();return async(n,o)=>{if(null==e)return c.m.danger(t.formatMessage(I.fileDownloadFailed)),!1;try{var i;let e=await a.Z.getFileDownloadLink(n);if(e.status!==r.KF.Success)throw Error("File is not ready to download: "+JSON.stringify(e));let t=null===(i=e.metadata)||void 0===i||null===(i=i.context_connector)||void 0===i?void 0:i.url;if(null!=t)window.open(t,"_blank");else{let t=e.download_url,n=document.createElement("a");n.href=t,n.download=o,n.click(),window.open(t,"_blank")}}catch(e){return c.m.danger(t.formatMessage(I.fileDownloadFailed)),!1}return!0}}function y(e,t){if((null==t?void 0:t.kind)===o.OL.GizmoInteraction||(null==t?void 0:t.kind)===o.OL.GizmoTest){var n;return null===(n=t.gizmo)||void 0===n?void 0:n.product_features}return null==e?void 0:e.product_features}function b(e,t){var n,o,a,i;let l=y(e,t);return(null==l||null===(n=l.attachments)||void 0===n?void 0:n.type)===r.Cd.CodeInterpreter?f.AJ.Interpreter:(null==l||null===(o=l.attachments)||void 0===o?void 0:o.type)===r.Cd.Multimodal?f.AJ.Multimodal:(null==l||null===(a=l.attachments)||void 0===a?void 0:a.type)===r.Cd.Retrieval?f.AJ.Retrieval:(null==l||null===(i=l.attachments)||void 0===i?void 0:i.type)===r.Cd.ContextConnector?f.AJ.ContextConnector:f.AJ.None}function w(e){var t;let n=null===(t=e.split(".").pop())||void 0===t?void 0:t.toLowerCase();return({md:"text/markdown",java:"text/x-java",py:"text/x-script.python",c:"text/x-c",cpp:"text/x-c++",h:"text/x-c++",php:"text/x-php",rb:"text/x-ruby",tex:"application/x-latext",ts:"text/x-typescript",cs:"text/x-csharp"})[null!=n?n:""]||""}function k(e,t,n,r,o){if(null==o)return e;let a=w(t);a&&(n=a),r&&(n=function(e){switch(e){case"application/vnd.google-apps.spreadsheet":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"application/vnd.google-apps.document":case"application/vnd.google-apps.presentation":return"text/plain";default:return e}}(n));let{accepted_mime_types:i,can_accept_all_mime_types:l}=o;return null!=i&&0!==i.length&&l?i.includes(n)?e:f.AJ.Interpreter:e}function _(e,t,n){var o,a,i;let l=""!==t?t:w(n),s=null==e||null===(o=e.product_features)||void 0===o?void 0:o.attachments;return null==s?void 0:null!==(a=s.accepted_mime_types)&&void 0!==a&&a.includes(l)?s.type:null!==(i=s.image_mime_types)&&void 0!==i&&i.includes(l)?r.Cd.Multimodal:r.Cd.CodeInterpreter}function j(e,t){var n,r;let o=y(e,t);return null!=o&&null!==(n=o.attachments)&&void 0!==n&&n.can_accept_all_mime_types?void 0:null==o||null===(r=o.attachments)||void 0===r?void 0:r.accepted_mime_types}function M(e,t){let n=y(e,t),{attachments:r}=null!=n?n:{};if(null!=r&&r.image_mime_types)return r.image_mime_types;if((null==r?void 0:r.type)==="multimodal"){var o;return null!==(o=r.accepted_mime_types)&&void 0!==o?o:E}return[]}let E=["image/png","image/jpeg","image/gif","image/webp"];function C(e){return(0,s.useMemo)(()=>{if(void 0===e)return{};let t={"image/jpeg":[".jpg",".jpeg"],"image/svg+xml":[".svg"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]};return{accept:e.reduce((e,n)=>(n in t?e[n]=t[n]:n.includes("/")&&(e[n]=[".".concat(n.split("/")[1])]),e),{})}},[e])}function F(e){var t;return null===(t=e.split(".").pop())||void 0===t?void 0:t.toLowerCase()}function U(e){let t=F(e);return null!=t&&["jpg","jpeg","png","gif","webp"].includes(t)}function N(e){let t=F(e);return null!=t&&["xls","xlsx","csv"].includes(t)}function O(e){let t=F(e);return null!=t&&["xls","xlsx"].includes(t)}function T(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fit";return new Promise((r,o)=>{let a=new FileReader;a.onerror=e=>{l.U.addError(Error("File reading has failed:",{cause:e})),o(Error("Failed to read the file."))},a.onload=a=>{let i=new Image;i.onerror=e=>{l.U.addError(Error("Image loading has failed:",{cause:e})),o(Error("Failed to load the image."))},i.onload=()=>{let a=document.createElement("canvas"),s,d=0,u=0;switch(n){case"fill":case"square":s=t/Math.min(i.width,i.height);break;case"fit":s=t/Math.max(i.width,i.height)}let c=i.width*s,f=i.height*s;"square"===n?(a.width=t,a.height=t,d=(t-c)/2,u=(t-f)/2):(a.width=c,a.height=f);let p=a.getContext("2d");if(null==p){l.U.addError("Canvas context creation failed. Your environment might not fully support HTML5 canvas."),o(Error("Failed to create canvas context."));return}p.drawImage(i,d,u,c,f);let m=e.type||"image/png";a.toBlob(t=>{t?r(new File([t],e.name,{type:m})):(l.U.addError("Blob creation failed. Blob is null."),o(Error("Failed to create blob from image data.")))},m)},null==a.target?(l.U.addError("Event target is null. Failed to load image."),o("Failed to load image.")):i.src=a.target.result},a.readAsDataURL(e)})}function Z(e,t){return T(e,t,"square")}function P(e){var t,n;let r=null!==(t=e.name.split("/"))&&void 0!==t?t:[];return(null!==(n=r[r.length-1])&&void 0!==n?n:"").replace(/[-_]/g," ").split(".")[0]}function S(e,t){return t?e.slice(0,-t.length-1):e}let I=(0,u.vU)({defaultCreateEntryError:{id:"fileUpload.defaultCreateEntryError",defaultMessage:"Unable to upload {fileName}"},defaultDownloadLinkError:{id:"fileUpload.defaultDownloadLinkError",defaultMessage:"Failed to get upload status for {fileName}"},unknownError:{id:"fileUpload.unknownError",defaultMessage:"Unknown error occurred"},fileZeroBytes:{id:"fileUpload.fileZeroBytes",defaultMessage:"File is empty"},fileTooLarge:{id:"fileUpload.fileTooLarge",defaultMessage:"File is too large"},overUserQuota:{id:"fileUpload.overUserQuota",defaultMessage:"User quota exceeded"},fileNotFound:{id:"fileUpload.fileNotFound",defaultMessage:"File not found"},fileTimedOut:{id:"fileUpload.fileTimedOut",defaultMessage:"File upload timed out. Please try again."},fileEmpty:{id:"fileUpload.fileEmpty",defaultMessage:"No text could be extracted from this file."},fileTooManyTokens:{id:"fileUpload.fileTooManyTokens",defaultMessage:"This file contains too much text content. Please try again with a smaller file."},fileEncrypted:{id:"fileUpload.fileEncrypted",defaultMessage:"This file is encrypted/requires a password to access. Please try again with an unencrypted file."},fileCorrupted:{id:"fileUpload.fileCorrupted",defaultMessage:"This file is corrupted. Please ensure the file is not corrupted and try again."},codeInterpreterSessionTimeout:{id:"fileUpload.codeInterpreterSessionTimeout",defaultMessage:"Code interpreter session expired"},permissionError:{id:"fileUpload.permissionError",defaultMessage:"Missing permission to access file"},fileDownloadFailed:{id:"filesModal.fileDownloadFailed",defaultMessage:"File download failed. Please try again."},failedUploadToBlobStore:{id:"fileUpload.failedUploadToBlobStore",defaultMessage:"Failed upload to files.oaiusercontent.com. Please ensure your network settings allow access to this site or contact your network administrator."}})}}]);
//# sourceMappingURL=1353-dbf3340ea3d9a355.js.map