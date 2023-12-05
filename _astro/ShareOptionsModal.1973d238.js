import{c as $}from"./createLucideIcon.3c9fdece.js";import{j as e}from"./jsx-runtime.6940b965.js";import{r as x}from"./index.070054a4.js";import{u as O}from"./use-toast.dbd347db.js";import{c as w}from"./classname.21c42087.js";import{a as z,b as G}from"./http.968dc426.js";import{g as ie}from"./jwt.5556697d.js";import{u as Q}from"./use-copy-text.77785bb1.js";import{U as ce}from"./user-plus-2.3dc41da8.js";import{C as X,F as de,L as oe}from"./linkedin.3fa0858c.js";import{C as Z}from"./copy.2caf0f52.js";import{U as E}from"./users-2.dc7091e7.js";import{U as ee}from"./users.9673a18c.js";import{C as me}from"./check-circle.2db17dbd.js";import{M as W}from"./Modal.de5462bb.js";import{L as q}from"./loader-2.7ee93c0d.js";const he=$("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]),se=$("Globe2",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),te=$("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),_e=$("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]),xe=$("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);function ae(m){const{user:s,onClick:r,isSelected:t}=m;return e.jsxs("button",{className:w("relative flex w-full items-center gap-2.5 rounded-lg border p-2.5",t&&"border-gray-500 bg-gray-300 text-black"),onClick:r,children:[e.jsx("img",{src:s.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${s.avatar}`:"/images/default-avatar.png",alt:s.name||"",className:"relative top-[1px] h-10 w-10 shrink-0 rounded-full"}),e.jsxs("div",{className:"inline-grid w-full",children:[e.jsx("h3",{className:"truncate text-left font-semibold",children:s.name}),e.jsx("p",{className:w("truncate text-left text-sm text-gray-500",t&&"text-gray-700"),children:s.email})]})]})}function ge(m){const s=ie()?.id,{setFriends:r,friends:t,sharedFriendIds:c,setSharedFriendIds:d}=m,l=O(),{isCopied:i,copyText:b}=Q(),[g,p]=x.useState(!0),[o,a]=x.useState(!1);async function n(){if(t.length>0)return;p(!0);const{response:h,error:j}=await z("https://api.roadmap.sh/v1-list-friends");if(j||!h){l.error(j?.message||"Something went wrong");return}r(h.filter(N=>N.status==="accepted"))}x.useEffect(()=>{n().finally(()=>{p(!1)})},[]);const u=g&&e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-1.5",children:[...Array(3)].map((h,j)=>e.jsxs("li",{className:"flex animate-pulse items-center gap-2.5 rounded-md border p-2",children:[e.jsx("div",{className:"relative top-[1px] h-10 w-10 shrink-0 rounded-full bg-gray-200"}),e.jsxs("div",{className:"inline-grid w-full",children:[e.jsx("div",{className:"h-5 w-2/4 rounded bg-gray-200"}),e.jsx("div",{className:"mt-1 h-5 w-3/4 rounded bg-gray-200"})]})]},j))}),I=`https://roadmap.sh/befriend?u=${s}`;return e.jsxs(e.Fragment,{children:[(t.length>0||g)&&e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm",children:"Select Friends to share the roadmap with"}),e.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[e.jsx("input",{type:"checkbox",checked:c.length===t.length,onChange:h=>{h.target.checked?d(t.map(j=>j.userId)):d([])}}),e.jsx("span",{className:"text-sm",children:"Select all"})]})]}),u,t.length>0&&!g&&e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-1.5",children:t.map(h=>{const j=c?.includes(h.userId);return e.jsx("li",{children:e.jsx(ae,{user:{name:h.name,avatar:h.avatar,email:h.email},isSelected:j,onClick:()=>{d(j?c.filter(N=>N!==h.userId):[...c,h.userId])}})},h.userId)})}),!o&&e.jsxs("p",{className:"mt-6 text-sm text-gray-600",children:["Don't see a Friend?"," ",e.jsx("button",{onClick:()=>{a(!0)},className:"font-semibold text-gray-900 underline",children:"Add them"})]}),o&&e.jsxs("div",{className:"-mx-4 -mb-4 mt-6 border-t bg-gray-50 px-4 py-4",children:[e.jsxs("p",{className:"mb-1.5 flex items-center gap-1 text-sm text-gray-800",children:[e.jsx(ce,{className:"text-gray-500",size:"20px"}),"Share the link below with your friends to invite them"]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{readOnly:!0,type:"text",value:I,onClick:h=>{h.preventDefault(),h.target.select(),b(I)},className:w("w-full rounded-md border px-2 py-2 text-sm focus:shadow-none focus:outline-0",{"border-green-400 bg-green-50":i})}),e.jsx("button",{onClick:()=>b(I),className:"absolute bottom-0 right-0 top-0 flex items-center px-2.5",children:i?e.jsxs("span",{className:"flex items-center gap-1 text-sm font-medium text-green-600",children:[e.jsx(X,{className:"text-green-600",size:"18px"})," Copied"]}):e.jsx(Z,{className:"text-gray-400",size:"18px"})})]})]})]}),t.length===0&&!g&&e.jsxs("div",{className:"flex h-full flex-grow flex-col items-center justify-center rounded-md border bg-gray-50 text-center",children:[e.jsx(E,{className:"mb-3 h-10 w-10 text-gray-300"}),e.jsxs("p",{className:"font-semibold text-gray-500",children:["You do not have any friends yet. ",e.jsx("br",{})," ",e.jsx("a",{target:"_blank",className:"underline underline-offset-2",href:"/account/friends",children:"Invite your friends to share roadmaps with."})]})]})]})}function ue(m){const{teams:s,setTeams:r,selectedTeamId:t,setSelectedTeamId:c,isTeamMembersLoading:d,setIsTeamMembersLoading:l,onTeamChange:i}=m,b=O(),[g,p]=x.useState(!0);async function o(){if(s.length>0)return;const{response:n,error:u}=await z("https://api.roadmap.sh/v1-get-user-teams");if(u||!n){b.error(u?.message||"Something went wrong");return}r(n.filter(v=>["admin","manager"].includes(v.role)))}x.useEffect(()=>{o().finally(()=>p(!1))},[]);const a=g&&e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-1.5",children:[...Array(3)].map((n,u)=>e.jsx("li",{children:e.jsxs("div",{className:"relative flex w-full items-center gap-2 rounded-md border p-2",children:[e.jsx("div",{className:"h-6 w-6 shrink-0 animate-pulse rounded-full bg-gray-200"}),e.jsx("div",{className:"inline-grid w-full",children:e.jsx("div",{className:"h-4 animate-pulse rounded bg-gray-200"})})]})},u))});return e.jsxs(e.Fragment,{children:[(s.length>0||g)&&e.jsx("p",{className:"text-sm",children:"Select a team to transfer this roadmap to"}),a,s.length>0&&!g&&e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-1.5",children:s.map(n=>{const u=n._id===t;return e.jsx("li",{children:e.jsxs("button",{className:w("relative flex w-full items-center gap-2.5 rounded-lg border p-2.5 disabled:cursor-not-allowed disabled:opacity-70",u&&"border-gray-500 bg-gray-100 text-black"),disabled:d,onClick:()=>{c(u?null:n._id),i(n._id)},children:[e.jsx("img",{src:n.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${n.avatar}`:"/images/default-avatar.png",alt:n.name||"",className:"h-6 w-6 shrink-0 rounded-full"}),e.jsx("div",{className:"inline-grid w-full",children:e.jsx("h3",{className:"truncate text-left font-normal",children:n.name})})]})},n._id)})}),s.length===0&&!g&&e.jsxs("div",{className:"flex grow flex-col items-center justify-center gap-2",children:[e.jsx(E,{className:"h-12 w-12 text-gray-500"}),e.jsx("p",{className:"text-gray-500",children:"You are not a member of any team."})]})]})}const pe=[{id:"me",label:"Only me",long:"Only visible to me",icon:te},{id:"public",label:"Public",long:"Anyone can view",icon:se},{id:"friends",label:"Only friends",long:"Only friends can view",icon:ee},{id:"team",label:"Only Members",long:"Visible to team members",icon:E}];function fe(m){const{visibility:s,setVisibility:r,teamId:t,onChange:c}=m,d=l=>{r(l),c(l)};return e.jsxs("div",{className:"flex justify-between",children:[e.jsx("ul",{className:"flex w-full items-center gap-1.5",children:pe.map(l=>{if(l.id==="friends"&&t)return null;if(l.id==="team"&&!t)return null;const i=l.id===s;return e.jsx("li",{children:e.jsx(B,{label:l.label,isActive:i,icon:l.icon,onClick:()=>{d(l.id)}})},l.id)})}),!t&&e.jsx("div",{className:"grow",children:e.jsx(B,{label:"Transfer to team",icon:he,isActive:s==="team",onClick:()=>{d("team")},className:'border-red-300 text-red-600 hover:border-red-200 hover:bg-red-50 data-[active="true"]:border-red-600 data-[active="true"]:bg-red-600 data-[active="true"]:text-white'})})]})}function B(m){const{label:s,isActive:r,onClick:t,icon:c,className:d}=m;return e.jsxs("button",{className:w("flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm text-black hover:border-gray-300 hover:bg-gray-100",'data-[active="true"]:border-gray-500 data-[active="true"]:bg-gray-200 data-[active="true"]:text-black',d),"data-active":r,disabled:r,onClick:t,children:[!r&&e.jsx(c,{className:"h-4 w-4"}),r&&e.jsx(X,{className:"h-4 w-4"}),e.jsx("span",{className:"whitespace-nowrap",children:s})]})}function J(m){const{teamId:s,title:r="Select Members",sharedTeamMemberIds:t,setSharedTeamMemberIds:c,membersCache:d,isTeamMembersLoading:l,setIsTeamMembersLoading:i}=m,b=O();async function g(){if(d.has(s))return;i(!0);const{response:a,error:n}=await z(`https://api.roadmap.sh/v1-get-team-member-list/${s}`);if(n||!a){b.error(n?.message||"Something went wrong");return}const u=a?.filter(v=>v.status==="joined")||[];d.set(s,u)}x.useEffect(()=>{g().finally(()=>{i(!1)})},[s]);const p=l&&e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-2.5",children:[...Array(3)].map((a,n)=>e.jsxs("li",{className:"flex min-h-[66px] animate-pulse items-center gap-2 rounded-md border p-2",children:[e.jsx("div",{className:"h-8 w-8 shrink-0 rounded-full bg-gray-200"}),e.jsxs("div",{className:"inline-grid w-full",children:[e.jsx("div",{className:"h-5 w-2/4 rounded bg-gray-200"}),e.jsx("div",{className:"mt-1 h-5 w-3/4 rounded bg-gray-200"})]})]},n))}),o=d.get(s)||[];return e.jsxs(e.Fragment,{children:[(o.length>0||l)&&e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm",children:r}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:t.length===o.length,onChange:a=>{a.target.checked?c(o.map(n=>n._id)):c([])}}),e.jsx("span",{className:"text-sm",children:"Select all"})]})]}),p,o?.length>0&&!l&&e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-2.5",children:o?.map(a=>{const n=t?.includes(a._id?.toString());return e.jsx("li",{children:e.jsx(ae,{user:{name:a.name,avatar:a.avatar,email:a.invitedEmail},isSelected:n,onClick:()=>{c(n?t.filter(u=>u!==a._id?.toString()):[...t,a._id?.toString()])}})},a.userId)})}),o.length===0&&!l&&e.jsxs("div",{className:"flex grow flex-col items-center justify-center gap-2",children:[e.jsx(ee,{className:"h-12 w-12 text-gray-500"}),e.jsx("p",{className:"text-gray-500",children:"No members have been added yet."})]})]})}function be(m){const{roadmapId:s,onClose:r,description:t,visibility:c,isSharingWithOthers:d=!1}=m,l="https://roadmap.sh",i=`${l}/r?id=${s}`,{copyText:b,isCopied:g}=Q(),p=[{title:"Twitter",href:`https://twitter.com/intent/tweet?text=${t}&url=${i}`,icon:xe},{title:"Facebook",href:`https://www.facebook.com/sharer/sharer.php?quote=${t}&u=${i}`,icon:de},{title:"Linkedin",href:`https://www.linkedin.com/sharing/share-offsite/?url=${i}`,icon:oe}],o=`<iframe src="${l}/r/embed?id=${s}" width="100%" height="500px" frameBorder="0"
></iframe>`;return e.jsxs("div",{className:"flex grow flex-col justify-center",children:[e.jsxs("div",{className:"mt-5 flex grow flex-col items-center justify-center gap-1.5",children:[e.jsx(me,{className:"h-14 w-14 text-green-500"}),d?e.jsx("h3",{className:"text-xl font-medium",children:"Sharing with Others"}):e.jsx("h3",{className:"text-xl font-medium",children:"Sharing Settings Updated"})]}),e.jsx("input",{type:"text",className:"mt-6 w-full rounded-md border bg-gray-50 p-2 px-2.5 text-gray-700 focus:outline-none",value:i,readOnly:!0,onClick:a=>{a.currentTarget.select(),b(i)}}),d?e.jsx("p",{className:"mt-1 text-sm text-gray-400",children:"You can share the above link with anyone"}):e.jsx("p",{className:"mt-1 text-sm text-gray-400",children:"You can share the above link with anyone who has access"}),e.jsxs("div",{className:"mt-2 border-t pt-2",children:[e.jsx("p",{className:"text-sm text-gray-400",children:"You can also embed this roadmap on your website."}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{onClick:a=>{a.currentTarget.select(),b(o)},readOnly:!0,className:"w-full resize-none rounded-md border bg-gray-50 p-2 text-sm",value:o})})]}),c==="public"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"-mx-4 mt-4 flex items-center gap-1.5",children:[e.jsx("span",{className:"h-px grow bg-gray-300"}),e.jsx("span",{className:"px-2 text-xs uppercase text-gray-400",children:"Or"}),e.jsx("span",{className:"h-px grow bg-gray-300"})]}),e.jsxs("div",{className:"mt-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Share with others on"}),e.jsx("ul",{className:"flex items-center gap-1.5",children:p.map(a=>e.jsx("li",{children:e.jsx("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",className:"flex h-8 w-8 items-center justify-center gap-1.5 rounded-md border bg-gray-50 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none",children:e.jsx(a.icon,{className:"h-4 w-4"})})},a.title))})]})]}),e.jsxs("div",{className:"mt-4 flex flex-col items-center justify-end gap-2",children:[e.jsxs("button",{className:w("flex w-full items-center justify-center gap-1.5 rounded bg-black px-4 py-2.5 text-sm font-medium text-white hover:opacity-80",g&&"bg-green-300 text-green-800"),disabled:g,onClick:()=>{b(i)},children:[e.jsx(Z,{className:"h-3.5 w-3.5 stroke-[2.5]"}),g?"Copied":"Copy URL"]}),e.jsx("button",{className:w("flex w-full items-center justify-center gap-1.5 rounded border border-black px-4 py-2 text-sm font-medium hover:bg-gray-100"),onClick:r,children:"Close"})]})]})}function De(m){const{roadmapId:s,onClose:r,isDiscoverable:t=!1,visibility:c,sharedTeamMemberIds:d=[],sharedFriendIds:l=[],teamId:i,onShareSettingsUpdate:b,description:g}=m,p=O(),[o,a]=x.useState(!1),[n,u]=x.useState(!1),[v,I]=x.useState([]),[h,j]=x.useState([]),[N,_]=x.useState(!1),P=x.useMemo(()=>new Map,[]),[f,re]=x.useState(c),[T,Y]=x.useState(t),[k,S]=x.useState(d),[D,M]=x.useState(l),[L,R]=x.useState(null),U=f==="team"&&!i;let F=!1;(f==="friends"&&D.length===0||U&&!L||f==="team"&&i&&k.length===0)&&(F=!0);const ne=async({sharedFriendIds:y,visibility:C,sharedTeamMemberIds:A})=>{if(a(!0),C==="friends"&&y.length===0){p.error("Please select at least one friend");return}else if(C==="team"&&i&&A.length===0){p.error("Please select at least one member");return}const{response:V,error:H}=await G(`https://api.roadmap.sh/v1-update-roadmap-visibility/${s}`,{visibility:C,sharedFriendIds:y,sharedTeamMemberIds:A,isDiscoverable:T});if(H){p.error(H?.message||"Something went wrong, please try again");return}a(!1),u(!0),b({isDiscoverable:T,sharedFriendIds:y,visibility:C,sharedTeamMemberIds:A})},le=x.useCallback(async(y,C)=>{if(!s)return;a(!0);const{response:A,error:V}=await G(`https://api.roadmap.sh/v1-transfer-roadmap/${s}`,{teamId:y,sharedTeamMemberIds:C,isDiscoverable:T});if(V){a(!1),p.error(V?.message||"Something went wrong, please try again");return}window.location.reload()},[s]);return n?e.jsx(W,{onClose:r,wrapperClassName:"max-w-lg",bodyClassName:"p-4 flex flex-col",children:e.jsx(be,{visibility:f,roadmapId:s,description:g,onClose:r})}):e.jsxs(W,{onClose:()=>{o||r()},wrapperClassName:"max-w-3xl",bodyClassName:"p-4 flex flex-col min-h-[440px]",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"mb-1 text-xl font-semibold",children:"Update Sharing Settings"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Pick and modify who can access this roadmap."})]}),e.jsx(fe,{visibility:f,setVisibility:re,teamId:i,onChange:y=>{R(null),["me","public"].includes(y)?(S([]),M([])):y==="friends"?M(l.length>0?l:[]):y==="team"&&i?(S(d?.length>0?d:[]),M([])):(M([]),S([])),Y(y==="public")}}),e.jsxs("div",{className:"mt-4 flex grow flex-col",children:[f==="public"&&e.jsxs("div",{className:"flex h-full flex-grow flex-col items-center justify-center rounded-md border bg-gray-50 text-center",children:[e.jsx(se,{className:"mb-3 h-10 w-10 text-gray-300"}),e.jsx("p",{className:"font-medium text-gray-500",children:"Anyone with the link can access."})]}),f==="me"&&e.jsxs("div",{className:"flex h-full flex-grow flex-col items-center justify-center rounded-md border bg-gray-50 text-center",children:[e.jsx(te,{className:"mb-3 h-10 w-10 text-gray-300"}),e.jsx("p",{className:"font-medium text-gray-500",children:"Only you will be able to access."})]}),f==="friends"&&e.jsx(ge,{friends:v,setFriends:I,sharedFriendIds:D,setSharedFriendIds:M}),f==="team"&&i&&e.jsx(J,{teamId:i,sharedTeamMemberIds:k,setSharedTeamMemberIds:S,membersCache:P,isTeamMembersLoading:N,setIsTeamMembersLoading:_}),U&&e.jsxs(e.Fragment,{children:[e.jsx(ue,{teams:h,setTeams:j,selectedTeamId:L,setSelectedTeamId:R,isTeamMembersLoading:N,setIsTeamMembersLoading:_,onTeamChange:()=>{S([])}}),L&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{className:"-mx-4 my-4"}),e.jsx("div",{className:"mb-4",children:e.jsx(J,{title:"Select who can access this roadmap. You can change this later.",teamId:L,sharedTeamMemberIds:k,setSharedTeamMemberIds:S,membersCache:P,isTeamMembersLoading:N,setIsTeamMembersLoading:_})})]})]})]}),f!=="me"&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{className:"-mx-4 my-4"}),e.jsx("div",{className:"mb-2",children:e.jsx(je,{isDiscoverable:T,setIsDiscoverable:Y})})]}),e.jsxs("div",{className:"mt-2 flex items-center justify-between gap-1.5",children:[e.jsx("button",{className:"flex items-center justify-center gap-1.5 rounded-md border px-3.5 py-1.5 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-75",disabled:o,onClick:r,children:"Close"}),U&&e.jsxs(K,{disabled:F||o||k.length===0,onClick:()=>{le(L,k).then(()=>null)},children:[o&&e.jsx(q,{className:"h-4 w-4 animate-spin"}),"Transfer"]}),!U&&e.jsxs(K,{disabled:F||o,onClick:()=>{ne({isDiscoverable:T,visibility:f,sharedTeamMemberIds:f==="team"?k:[],sharedFriendIds:f==="friends"?D:[]})},children:[o&&e.jsx(q,{className:"h-4 w-4 animate-spin"}),"Update Sharing Settings"]})]})]})}function K(m){const{onClick:s,disabled:r,children:t,className:c}=m;return e.jsx("button",{className:w("flex min-w-[120px] items-center justify-center gap-1.5 rounded-md border border-gray-900 bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-75",r&&"border-gray-700 bg-gray-700 text-white hover:bg-gray-700",c),disabled:r,onClick:s,children:t})}function je(m){const{isDiscoverable:s,setIsDiscoverable:r}=m;return e.jsxs("label",{className:"group flex items-center gap-1.5",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:t=>r(t.target.checked)}),e.jsx("span",{className:"text-sm text-gray-500 group-hover:text-gray-700",children:"Include on discovery page (when launched)"})]})}export{te as L,_e as M,De as S,be as a};
