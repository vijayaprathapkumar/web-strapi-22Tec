"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[1213],{91213:(x,f,t)=>{t.d(f,{ProtectedListView:()=>rt});var s=t(74081),l=t(27279),U=t(73354),I=t(27875),d=t(83),D=t(74758),o=t(15530),E=t(36938),a=t(29206),M=t(61020),e=t(51447),B=t(43639),W=t(10271),C=t(93118),K=t(45209),u=t(15816),$=t(97442),F=t(13576),Q=t(87830),V=t(47184),G=t(364),p=t(59461),J=t(71563),Y=t(49204),H=t(47853),z=t(74919),n=t(40464),r=t(98934),P=t(43433),O=t(75719),m=t(8175),T=t(6078),i=t(51943),v=t(55783),c=t(92249),y=t(41942),X=t(22919),w=t(53915),b=t(75041),q=t(30200),tt=t(91379),_=t(33299),st=t(33409),S=t(63645),Ot=t(7988),mt=t(7055),ct=t(26757),ft=t(58311),At=t(24840),Lt=t(29510),gt=t(16946),Ct=t(10124),vt=t(69530),ht=t(86961),Rt=t(51527),Ut=t(19764),It=t(42982),Bt=t(26126);const _t=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],ot=()=>{(0,o.go)();const{formatMessage:A}=(0,M.Z)(),h=(0,o.lm)(),dt=(0,B.j)(g=>g.admin_app.permissions.settings?.["transfer-tokens"]),{isLoading:Et,allowedActions:{canCreate:k,canDelete:it,canUpdate:lt,canRead:R}}=(0,o.ss)(dt),{push:at}=(0,e.k6)(),{trackUsage:j}=(0,o.rS)(),{_unstableFormatAPIError:Z}=(0,o.So)();l.useEffect(()=>{at({search:a.stringify({sort:"name:ASC"},{encode:!1})})},[at]),(0,B.b)(()=>{j("willAccessTokenList",{tokenType:C.T})});const Mt=_t.map(g=>({...g,metadatas:{...g.metadatas,label:A(g.metadatas.label)}})),{data:L=[],isLoading:Tt,error:N}=(0,W.c)(void 0,{skip:!R});l.useEffect(()=>{L&&j("didAccessTokenList",{number:L.length,tokenType:C.T})},[j,L]),l.useEffect(()=>{N&&h({type:"warning",message:Z(N)})},[N,Z,h]);const[Dt]=(0,W.d)(),Pt=async g=>{try{const nt=await Dt(g);"error"in nt&&h({type:"warning",message:Z(nt.error)})}catch{h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},et=Tt||Et;return(0,s.jsxs)(U.o,{"aria-busy":et,children:[(0,s.jsx)(o.SL,{name:"Transfer Tokens"}),(0,s.jsx)(I.T,{title:A({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:A({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:k?(0,s.jsx)(d.Q,{"data-testid":"create-transfer-token-button",startIcon:(0,s.jsx)(E.Z,{}),size:"S",onClick:()=>j("willAddTokenFromList",{tokenType:C.T}),to:"/settings/transfer-tokens/create",children:A({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})}):void 0}),(0,s.jsxs)(D.D,{children:[!R&&(0,s.jsx)(o.ZF,{}),R&&L.length>0&&(0,s.jsx)(K.T,{permissions:{canRead:R,canDelete:it,canUpdate:lt},headers:Mt,contentType:"trasfer-tokens",isLoading:et,onConfirmDelete:Pt,tokens:L,tokenType:C.T}),R&&k&&L.length===0&&(0,s.jsx)(o.dJ,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:(0,s.jsx)(d.Q,{variant:"secondary",startIcon:(0,s.jsx)(E.Z,{}),to:"/settings/transfer-tokens/create",children:A({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"})})}),R&&!k&&L.length===0&&(0,s.jsx)(o.dJ,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},rt=()=>{const A=(0,B.j)(h=>h.admin_app.permissions.settings?.["transfer-tokens"].main);return(0,s.jsx)(o.O4,{permissions:A,children:(0,s.jsx)(ot,{})})}},45209:(x,f,t)=>{t.d(f,{T:()=>Q});var s=t(74081),l=t(27279),U=t(86967),I=t(93153),d=t(50086),D=t(32370),o=t(10701),E=t(93415),a=t(4987),M=t(79213),e=t(15530),B=t(78665),W=t(98264),C=t(26784),K=t(61020),u=t(51447),$=t(47533),F=t(19003);const Q=({permissions:n,headers:r=[],contentType:P,isLoading:O=!1,tokens:m=[],onConfirmDelete:T,tokenType:i})=>{const{canDelete:v,canUpdate:c,canRead:y}=n;return(0,s.jsx)(e.tM,{headers:r,contentType:P,rows:m,withBulkActions:v||c||y,isLoading:O,onConfirmDelete:T,children:(0,s.jsx)(V,{tokenType:i,permissions:n,onConfirmDelete:T})})},V=({tokenType:n,permissions:r,rows:P=[],withBulkActions:O,onConfirmDelete:m})=>{const{canDelete:T,canUpdate:i,canRead:v}=r,[{query:c}]=(0,e.Kx)(),{formatMessage:y}=(0,K.Z)(),[,X]=c&&c.sort?c.sort.split(":"):[void 0,"ASC"],{push:w,location:{pathname:b}}=(0,u.k6)(),{trackUsage:q}=(0,e.rS)(),tt=[...P].sort((_,st)=>{const S=_.name.localeCompare(st.name);return X==="DESC"?-S:S});return(0,s.jsx)(U.p,{children:tt.map(_=>(0,s.jsxs)(I.Tr,{...(0,e.X7)({fn(){q("willEditTokenFromList",{tokenType:n}),w(`${b}/${_.id}`)},condition:i}),children:[(0,s.jsx)(d.Td,{maxWidth:(0,e.Q1)(250),children:(0,s.jsx)(D.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,s.jsx)(d.Td,{maxWidth:(0,e.Q1)(250),children:(0,s.jsx)(D.Z,{textColor:"neutral800",ellipsis:!0,children:_.description})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(D.Z,{textColor:"neutral800",children:(0,s.jsx)(e.ij,{timestamp:new Date(_.createdAt)})})}),(0,s.jsx)(d.Td,{children:_.lastUsedAt&&(0,s.jsx)(D.Z,{textColor:"neutral800",children:(0,s.jsx)(e.ij,{timestamp:new Date(_.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),O&&(0,s.jsx)(d.Td,{children:(0,s.jsxs)(o.k,{justifyContent:"end",children:[i&&(0,s.jsx)(z,{tokenName:_.name,tokenId:_.id}),!i&&v&&(0,s.jsx)(H,{tokenName:_.name,tokenId:_.id}),T&&(0,s.jsx)(Y,{tokenName:_.name,onClickDelete:()=>m?.(_.id),tokenType:n})]})})]},_.id))})},G={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},p=({tokenName:n,tokenId:r,buttonType:P="edit",children:O})=>{const{formatMessage:m}=(0,K.Z)(),{location:{pathname:T}}=(0,u.k6)();return(0,s.jsx)(J,{forwardedAs:$.OL,to:`${T}/${r}`,title:m(G[P],{target:n}),children:O})},J=(0,F.ZP)(M.r)`
  svg {
    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,Y=({tokenName:n,onClickDelete:r,tokenType:P})=>{const{formatMessage:O}=(0,K.Z)(),{trackUsage:m}=(0,e.rS)(),[T,i]=l.useState(!1),v=()=>{i(!1),m("willDeleteToken",{tokenType:P}),r()};return(0,s.jsxs)(E.x,{paddingLeft:1,onClick:c=>c.stopPropagation(),children:[(0,s.jsx)(a.h,{onClick:()=>{i(!0)},label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",borderWidth:0,icon:(0,s.jsx)(B.Z,{})}),(0,s.jsx)(e.QH,{onToggleDialog:()=>i(!1),onConfirm:v,isOpen:T})]})},H=({tokenName:n,tokenId:r})=>(0,s.jsx)(p,{tokenName:n,tokenId:r,buttonType:"read",children:(0,s.jsx)(W.Z,{})}),z=({tokenName:n,tokenId:r})=>(0,s.jsx)(p,{tokenName:n,tokenId:r,children:(0,s.jsx)(C.Z,{width:12})})},93118:(x,f,t)=>{t.d(f,{A:()=>s,T:()=>l});const s="api-token",l="transfer-token"},10271:(x,f,t)=>{t.d(f,{a:()=>d,b:()=>o,c:()=>U,d:()=>D,u:()=>I});var s=t(43639);const l=s.m.injectEndpoints({endpoints:E=>({getTransferTokens:E.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:a=>a.data,providesTags:(a,M)=>[...a?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:E.query({query:a=>`/admin/transfer/tokens/${a}`,transformResponse:a=>a.data,providesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:E.mutation({query:a=>({url:"/admin/transfer/tokens",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:E.mutation({query:a=>({url:`/admin/transfer/tokens/${a}`,method:"DELETE"}),transformResponse:a=>a.data,invalidatesTags:(a,M,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:E.mutation({query:({id:a,...M})=>({url:`/admin/transfer/tokens/${a}`,method:"PUT",data:M}),transformResponse:a=>a.data,invalidatesTags:(a,M,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:U,useGetTransferTokenQuery:I,useCreateTransferTokenMutation:d,useDeleteTransferTokenMutation:D,useUpdateTransferTokenMutation:o}=l}}]);
