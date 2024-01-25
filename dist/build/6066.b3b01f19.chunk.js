"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[6066],{66066:(ls,F,s)=>{s.d(F,{ReviewWorkflowsCreatePage:()=>X});var t=s(74081),l=s(27279),k=s(48102),h=s(10701),N=s(77970),A=s(32370),P=s(15530),V=s(59082),c=s(71563),Z=s(61020),i=s(59461),z=s(51447),Y=s(51950),H=s(5769),o=s(23441),Q=s(43639),J=s(88108),D=s(64462),r=s(41186),O=s(47289),G=s(58661),rs=s(8217),is=s(6078),Es=s(43433),ds=s(47853),Ms=s(15816),Ps=s(97442),Ds=s(13576),Os=s(87830),gs=s(47184),vs=s(364),ms=s(49204),fs=s(74919),hs=s(29206),cs=s(40464),Ls=s(98934),Cs=s(75719),Ts=s(8175),Rs=s(51943),Ws=s(55783),As=s(92249),Is=s(41942),Bs=s(22919),Ks=s(53915),Us=s(75041),ys=s(30200),us=s(91379),ws=s(33299),js=s(33409),xs=s(63645),Ss=s(7988),ps=s(7055),Fs=s(26757),ks=s(58311),Ns=s(24840),Vs=s(29510),Zs=s(16946),zs=s(10124),Ys=s(69530),Hs=s(86961),Qs=s(51527),Js=s(19764),Gs=s(42982),Xs=s(26126),$s=s(46413);const X=()=>{const{formatMessage:a}=(0,Z.Z)(),{push:$}=(0,z.k6)(),{_unstableFormatAPIError:b,_unstableFormatValidationErrors:q}=(0,P.So)(),_=(0,i.I0)(),E=(0,P.lm)(),{collectionTypes:I,singleTypes:B,isLoading:L}=(0,H.u)(),{isLoading:g,meta:K,workflows:v,createWorkflow:ss}=(0,G.u)(),{isLoading:C,roles:U}=(0,Y.u)(),m=(0,i.v9)(o.s),ts=(0,i.v9)(o.a),n=(0,i.v9)(o.b),y=(0,i.v9)(o.c),[u,d]=l.useState(null),{isLoading:w,getFeature:os}=(0,J.u)(),[es,as]=l.useState(),[j,T]=l.useState({}),f=os("review-workflows"),x=f?.[O.C],M=f?.[O.a],S=v?.flatMap(e=>e.contentTypes),p=async()=>{T({});try{const e=await ss(n);if("error"in e){(0,Q.x)(e.error)&&e.error.name==="ValidationError"?as(q(e.error)):E({type:"warning",message:b(e.error)});return}E({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}}),$(`/settings/review-workflows/${e.data.id}`)}catch{E({type:"warning",message:{id:"Settings.review-workflows.create.page.notification.error",defaultMessage:"An error occurred"}})}},ns=async()=>{await p()},_s=()=>{T({})},R=(0,c.TA)({enableReinitialize:!0,initialErrors:es,initialValues:n,async onSubmit(){const e=n.contentTypes?.some(W=>S?.includes(W));K&&x&&K?.workflowCount>=parseInt(x,10)?d("workflow"):n.stages&&M&&n.stages.length>=parseInt(M,10)?d("stage"):e?T(W=>({...W,hasReassignedContentTypes:!0})):p()},validate(e){return(0,o.v)({values:e,formatMessage:a})}});return(0,o.u)(O.R,o.i),l.useEffect(()=>{_((0,o.r)()),!g&&v&&_((0,o.d)({workflows:v})),L||_((0,o.e)({collectionTypes:I,singleTypes:B})),C||_((0,o.f)(U)),_((0,o.g)(L||C)),_((0,o.h)({name:""}))},[I,_,L,C,g,U,B,v]),l.useEffect(()=>{!g&&!w&&n.stages&&f?.[O.a]&&M&&n.stages.length>=parseInt(M,10)&&d("stage")},[w,g,f,n.stages,M]),l.useEffect(()=>{!m&&y?.length===0&&E({blockTransition:!0,type:"warning",message:a({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[a,m,y,E]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D.D,{}),(0,t.jsx)(c.Hy,{value:R,children:(0,t.jsxs)(c.l0,{onSubmit:R.handleSubmit,children:[(0,t.jsx)(D.H,{navigationAction:(0,t.jsx)(D.B,{href:"/settings/review-workflows"}),primaryAction:(0,t.jsx)(k.z,{startIcon:(0,t.jsx)(V.Z,{}),type:"submit",size:"M",disabled:!ts,children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:a({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:n?.stages?.length??0})}),(0,t.jsx)(D.R,{children:(0,t.jsx)(h.k,{alignItems:"stretch",direction:"column",gap:7,children:m?(0,t.jsx)(N.a,{children:a({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})}):(0,t.jsxs)(h.k,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(o.W,{}),(0,t.jsx)(o.S,{stages:R.values?.stages})]})})})]})}),(0,t.jsx)(P.QH.Root,{isConfirmButtonLoading:m,isOpen:Object.keys(j).length>0,onToggleDialog:_s,onConfirm:ns,children:(0,t.jsx)(P.QH.Body,{children:(0,t.jsxs)(h.k,{direction:"column",gap:5,children:[j.hasReassignedContentTypes&&(0,t.jsx)(A.Z,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:S?.filter(e=>n.contentTypes?.includes(e)).length})}),(0,t.jsx)(A.Z,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(r.L.Root,{isOpen:u==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(r.L.Root,{isOpen:u==="stage",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
