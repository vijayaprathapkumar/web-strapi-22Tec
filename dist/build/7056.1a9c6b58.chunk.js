"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[7056],{7056:(G,T,t)=>{t.d(T,{ProtectedListPage:()=>ct});var s=t(74081),c=t(27279),u=t(51926),M=t(27997),C=t(73354),b=t(27875),W=t(37472),g=t(32370),i=t(48102),o=t(74758),h=t(93415),d=t(70774),f=t(38566),B=t(38101),P=t(93153),l=t(50086),D=t(73411),_=t(10989),tt=t(86967),A=t(10701),H=t(19003);const k=H.ZP.div`
  background: ${({theme:n})=>n.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:n})=>n?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:n})=>n.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:n})=>n.spaces[1]};
    top: ${({theme:n})=>n.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,st=H.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${k} {
    background: ${({theme:n})=>n.colors.success500};
  }

  &[aria-checked='true'] ${k}:before {
    transform: translateX(1rem);
  }
`,ot=c.forwardRef(({label:n,onChange:x,onLabel:p="On",offLabel:S="Off",selected:j,visibleLabels:m=!1,...I},a)=>(0,s.jsx)(st,{ref:a,role:"switch","aria-checked":j,"aria-label":n,onClick:x,visibleLabels:m,type:"button",...I,children:(0,s.jsxs)(A.k,{children:[(0,s.jsxs)(k,{children:[(0,s.jsx)("span",{children:p}),(0,s.jsx)("span",{children:S})]}),m&&(0,s.jsx)(h.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:j?"success600":"danger600",children:j?p:S})]})}));var Q=t(4987),et=t(6191),at=t(37370),v=t(15530),Z=t(36938),V=t(78665),nt=t(26784),rt=t(52448),dt=t(61020),X=t(51447),it=t(47533),J=t(43639),lt=t(1350),Ct=t(15816),bt=t(97442),Wt=t(13576),St=t(87830),Et=t(47184),Lt=t(364),Pt=t(59461),Dt=t(71563),pt=t(49204),$t=t(47853),Ot=t(74919),Bt=t(29206),At=t(40464),kt=t(98934),Zt=t(43433),It=t(75719),Rt=t(8175),Ut=t(6078),Ft=t(51943),Kt=t(55783),Nt=t(92249),zt=t(41942),Gt=t(22919),Ht=t(53915),Qt=t(75041),Vt=t(30200),Xt=t(91379),Jt=t(33299),Yt=t(33409),wt=t(63645),qt=t(7988),_t=t(7055),ts=t(26757),ss=t(58311),os=t(24840),es=t(29510),as=t(16946),ns=t(10124),rs=t(69530),ds=t(86961),is=t(51527),ls=t(19764),hs=t(42982),cs=t(26126);const ht=()=>{const[n,x]=c.useState(!1),[p,S]=c.useState(!1),[j,m]=c.useState([]),I=(0,J.j)(e=>e.admin_app.permissions.settings?.webhooks),{formatMessage:a}=(0,dt.Z)(),{_unstableFormatAPIError:$}=(0,v.So)(),y=(0,v.lm)();(0,v.go)();const{push:gt}=(0,X.k6)(),{pathname:Y}=(0,X.TH)(),{isLoading:mt,allowedActions:{canCreate:R,canUpdate:U,canDelete:w}}=(0,v.ss)(I),{notifyStatus:q}=(0,u.G)(),{isLoading:vt,webhooks:E,error:F,updateWebhook:xt,deleteManyWebhooks:ut}=(0,lt.u)();c.useEffect(()=>{if(F){y({type:"warning",message:$(F)});return}E&&q(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[E,F,y,a,q,$]);const ft=async e=>{try{const r=await xt(e);"error"in r&&y({type:"warning",message:$(r.error)})}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}},jt=async()=>{try{S(!0);const e=await ut({ids:j});if("error"in e){y({type:"warning",message:$(e.error)});return}m([])}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{S(!1),x(!1)}},yt=e=>m(e?E?.map(r=>r.id)??[]:[]),Tt=(e,r)=>m(e?z=>[...z,r]:z=>z.filter(Mt=>Mt!==r)),K=e=>()=>gt(`${Y}/${e}`),N=mt||vt,O=E?.length??0,L=j.length;return(0,s.jsxs)(M.A,{children:[(0,s.jsx)(v.SL,{name:"Webhooks"}),(0,s.jsxs)(C.o,{"aria-busy":N,children:[(0,s.jsx)(b.T,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:R&&!N&&(0,s.jsx)(at.Q,{as:it.OL,startIcon:(0,s.jsx)(Z.Z,{}),variant:"default",to:`${Y}/create`,size:"S",children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),L>0&&w&&(0,s.jsx)(W.Z,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",children:a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:L})}),(0,s.jsx)(i.z,{onClick:()=>x(!0),startIcon:(0,s.jsx)(V.Z,{}),size:"L",variant:"danger-light",children:a({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(o.D,{children:N?(0,s.jsx)(h.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(v.dO,{})}):O>0?(0,s.jsxs)(d.i,{colCount:5,rowCount:O+1,footer:(0,s.jsx)(f.c,{onClick:R?K("create"):void 0,icon:(0,s.jsx)(Z.Z,{}),children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)(B.h,{children:(0,s.jsxs)(P.Tr,{children:[(0,s.jsx)(l.Th,{children:(0,s.jsx)(D.C,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:L>0&&L<O,value:L===O,onValueChange:yt})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(l.Th,{width:"60%",children:(0,s.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(g.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(_.T,{children:a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(tt.p,{children:E?.map(e=>(0,s.jsxs)(P.Tr,{onClick:U?K(e.id):void 0,style:{cursor:U?"pointer":"default"},children:[(0,s.jsx)(l.Td,{onClick:r=>r.stopPropagation(),children:(0,s.jsx)(D.C,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:j?.includes(e.id),onValueChange:r=>Tt(r,e.id),name:"select"})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(g.Z,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(g.Z,{textColor:"neutral800",children:e.url})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(A.k,{children:(0,s.jsx)(ot,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:r=>{r.stopPropagation(),ft({...e,isEnabled:!e.isEnabled})},visibleLabels:!0})})}),(0,s.jsx)(l.Td,{children:(0,s.jsxs)(A.k,{gap:1,children:[U&&(0,s.jsx)(Q.h,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(nt.Z,{}),noBorder:!0}),w&&(0,s.jsx)(Q.h,{onClick:r=>{r.stopPropagation(),m([e.id]),x(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(V.Z,{}),noBorder:!0})]})})]},e.id))})]}):(0,s.jsx)(et.x,{icon:(0,s.jsx)(rt.Z,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(i.z,{variant:"secondary",startIcon:(0,s.jsx)(Z.Z,{}),onClick:()=>R?K("create"):{},children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(v.QH,{isOpen:n,onToggleDialog:()=>x(e=>!e),onConfirm:jt,isConfirmButtonLoading:p})]})},ct=()=>{const n=(0,J.j)(x=>x.admin_app.permissions.settings?.webhooks.main);return(0,s.jsx)(v.O4,{permissions:n,children:(0,s.jsx)(ht,{})})}},1350:(G,T,t)=>{t.d(T,{u:()=>g});var s=t(43639);const c=s.m.injectEndpoints({endpoints:i=>({getWebhooks:i.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,h,d)=>typeof d=="object"&&"id"in d?[{type:"Webhook",id:d.id}]:[...o?.map(({id:f})=>({type:"Webhook",id:f}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:i.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:i.mutation({query:({id:o,...h})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:h}),transformResponse:o=>o.data,invalidatesTags:(o,h,{id:d})=>[{type:"Webhook",id:d}]}),triggerWebhook:i.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:i.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,h,{ids:d})=>d.map(f=>({type:"Webhook",id:f}))})}),overrideExisting:!1}),{useGetWebhooksQuery:u,useCreateWebhookMutation:M,useUpdateWebhookMutation:C,useTriggerWebhookMutation:b,useDeleteManyWebhooksMutation:W}=c,g=(i=void 0,o)=>{const{data:h,isLoading:d,error:f}=u(i,o),[B]=M(),[P]=C(),[l]=b(),[D]=W();return{webhooks:h,isLoading:d,error:f,createWebhook:B,updateWebhook:P,triggerWebhook:l,deleteManyWebhooks:D}}},38566:(G,T,t)=>{t.d(T,{c:()=>i});var s=t(74081),c=t(19003),u=t(93415),M=t(84366),C=t(10701),b=t(32370);const W=(0,c.ZP)(u.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,g=(0,c.ZP)(u.x)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,i=({children:o,icon:h,...d})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(M.i,{}),(0,s.jsx)(g,{as:"button",background:"primary100",padding:5,...d,children:(0,s.jsxs)(C.k,{children:[(0,s.jsx)(W,{"aria-hidden":!0,background:"primary200",children:h}),(0,s.jsx)(u.x,{paddingLeft:3,children:(0,s.jsx)(b.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
