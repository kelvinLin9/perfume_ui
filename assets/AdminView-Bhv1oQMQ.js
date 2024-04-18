import{r as f,w as U,o as b,c as _,a as e,b as y,d as i,v as r,e as $,f as v,_ as x,p as k,g as P,F as w,h as C,i as g,t as m}from"./index-C46kUIAo.js";const q={class:"modal fade",id:"editMyCourseModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true","data-bs-backdrop":"static"},E={class:"modal-dialog"},S={class:"modal-content"},I=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"editPerfumeModalLabel"},"编辑香水"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),D={class:"modal-body"},F={class:"mb-3"},L=e("label",{for:"title",class:"form-label"},"名稱",-1),B={class:"mb-3"},A=e("label",{for:"category",class:"form-label"},"類別",-1),N={class:"mb-3"},j=e("label",{for:"price",class:"form-label"},"價格",-1),O={class:"mb-3"},T=e("label",{for:"unit",class:"form-label"},"容量",-1),z={class:"mb-3"},G=e("label",{for:"image",class:"form-label"},"圖片連結",-1),H={class:"mb-3 form-check"},J=e("label",{for:"isEnabled",class:"form-check-label"},"啟用",-1),K={__name:"EditPerfumeModal",props:{product:Object},emits:["update"],setup(d,{emit:u}){const a=d,p=u,s=f({});U(()=>a.product,t=>{s.value={...t}},{deep:!0,immediate:!0});const c=async()=>{console.log(s.value);try{const t=await v.patch(`https://perfume-express.onrender.com/perfumes/${s.value._id}`,s.value);s.value=t.data,console.log(s.value),p("update")}catch(t){console.error(t)}};return(t,o)=>(b(),_("div",q,[e("div",E,[e("div",S,[I,e("div",D,[e("form",{onSubmit:o[6]||(o[6]=y((...l)=>t.submitForm&&t.submitForm(...l),["prevent"]))},[e("div",F,[L,i(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[0]||(o[0]=l=>s.value.title=l),required:""},null,512),[[r,s.value.title]])]),e("div",B,[A,i(e("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":o[1]||(o[1]=l=>s.value.category=l),required:""},null,512),[[r,s.value.category]])]),e("div",N,[j,i(e("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":o[2]||(o[2]=l=>s.value.price=l),required:""},null,512),[[r,s.value.price,void 0,{number:!0}]])]),e("div",O,[T,i(e("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":o[3]||(o[3]=l=>s.value.unit=l),required:""},null,512),[[r,s.value.unit]])]),e("div",z,[G,i(e("input",{type:"url",class:"form-control",id:"image","onUpdate:modelValue":o[4]||(o[4]=l=>s.value.image=l),required:""},null,512),[[r,s.value.image]])]),e("div",H,[i(e("input",{type:"checkbox",class:"form-check-input",id:"isEnabled","onUpdate:modelValue":o[5]||(o[5]=l=>s.value.isEnabled=l)},null,512),[[$,s.value.isEnabled]]),J]),e("button",{type:"submit",class:"btn btn-primary","aria-label":"Close","data-bs-dismiss":"modal",onClick:c}," 保存 ")],32)])])])]))}},n=d=>(k("data-v-19e2707f"),d=d(),P(),d),Q={class:"modal fade",id:"createPerfumeModal",tabindex:"-1","aria-labelledby":"createPerfumeModalLabel","aria-hidden":"true","data-bs-backdrop":"static"},R={class:"modal-dialog"},W={class:"modal-content"},X=n(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"createPerfumeModalLabel"},"新增香水"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),Y={class:"modal-body"},Z={class:"mb-3"},ee=n(()=>e("label",{for:"title",class:"form-label"},"名稱",-1)),te={class:"mb-3"},oe=n(()=>e("label",{for:"category",class:"form-label"},"類別",-1)),se={class:"mb-3"},le=n(()=>e("label",{for:"price",class:"form-label"},"售價",-1)),ae={class:"mb-3"},ie=n(()=>e("label",{for:"originPrice",class:"form-label"},"原價",-1)),de={class:"mb-3"},re=n(()=>e("label",{for:"unit",class:"form-label"},"庫存單位",-1)),ne={class:"mb-3"},ce=n(()=>e("label",{for:"image",class:"form-label"},"圖片連結",-1)),ue={class:"mb-3 form-check"},me=n(()=>e("label",{for:"isEnabled",class:"form-check-label"},"啟用",-1)),pe=n(()=>e("button",{type:"submit",class:"btn btn-primary","aria-label":"Close","data-bs-dismiss":"modal"}," 保存 ",-1)),be={__name:"CreatePerfumeModal",emits:["update"],setup(d,{emit:u}){const a=f({title:"",category:"",price:0,unit:"",image:""}),p=u,s=async()=>{try{const c=await v.post("https://perfume-express.onrender.com/perfumes",a.value);console.log(c.data),a.value={title:"",category:"",price:0,unit:"",image:""},p("update")}catch(c){console.log("Failed to create perfume:",c)}};return(c,t)=>(b(),_("div",Q,[e("div",R,[e("div",W,[X,e("div",Y,[e("form",{onSubmit:y(s,["prevent"])},[e("div",Z,[ee,i(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=o=>a.value.title=o),required:""},null,512),[[r,a.value.title]])]),e("div",te,[oe,i(e("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[1]||(t[1]=o=>a.value.category=o),required:""},null,512),[[r,a.value.category]])]),e("div",se,[le,i(e("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[2]||(t[2]=o=>a.value.price=o),required:""},null,512),[[r,a.value.price,void 0,{number:!0}]])]),e("div",ae,[ie,i(e("input",{type:"number",class:"form-control",id:"originPrice","onUpdate:modelValue":t[3]||(t[3]=o=>a.value.originPrice=o),required:""},null,512),[[r,a.value.originPrice,void 0,{number:!0}]])]),e("div",de,[re,i(e("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":t[4]||(t[4]=o=>a.value.unit=o),required:""},null,512),[[r,a.value.unit]])]),e("div",ne,[ce,i(e("input",{type:"url",class:"form-control",id:"image","onUpdate:modelValue":t[5]||(t[5]=o=>a.value.image=o),required:""},null,512),[[r,a.value.image]])]),e("div",ue,[i(e("input",{type:"checkbox",class:"form-check-input",id:"isEnabled","onUpdate:modelValue":t[6]||(t[6]=o=>a.value.isEnabled=o)},null,512),[[$,a.value.isEnabled]]),me]),pe],32)])])])]))}},_e=x(be,[["__scopeId","data-v-19e2707f"]]),h=d=>(k("data-v-b870db4e"),d=d(),P(),d),fe={class:"container mt-5"},ve=h(()=>e("h1",{class:"mb-4"},"香水電商後台管理",-1)),he=h(()=>e("button",{class:"btn btn-primary mb-3","data-bs-toggle":"modal","data-bs-target":"#createPerfumeModal"}," 新增產品 ",-1)),ge={class:"table table-striped"},ye=h(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"圖片"),e("th",{scope:"col"},"名稱"),e("th",{scope:"col"},"類別"),e("th",{scope:"col"},"價格"),e("th",{scope:"col"},"容量"),e("th",{scope:"col"},"啟用"),e("th",{scope:"col"},"操作")])],-1)),$e={scope:"row"},xe=["src"],ke=["onClick"],Pe=["onClick"],Ve={__name:"AdminView",setup(d){const u=f([]),a=f(null);function p(t){a.value=t}const s=async()=>{try{const t=await v.get("https://perfume-express.onrender.com/perfumes");u.value=t.data,console.log(u.value)}catch(t){console.log(t)}};s();const c=async t=>{console.log(t);try{const o=await v.delete(`https://perfume-express.onrender.com/perfumes/${t}`);console.log(o.data),s()}catch(o){console.log(o)}};return(t,o)=>(b(),_("div",null,[e("div",fe,[ve,he,e("table",ge,[ye,e("tbody",null,[(b(!0),_(w,null,C(u.value,(l,V)=>(b(),_("tr",{key:l._id},[e("th",$e,m(V+1),1),e("td",null,[e("img",{src:l.image,alt:"product image",class:"img-thumbnail",style:{width:"100px"}},null,8,xe)]),e("td",null,m(l.title),1),e("td",null,m(l.category),1),e("td",null,"$"+m(l.price),1),e("td",null,m(l.unit),1),e("td",null,m(l.isEnabled),1),e("td",null,[e("button",{class:"btn btn-primary btn-sm me-8","data-bs-toggle":"modal","data-bs-target":"#editMyCourseModal",onClick:M=>p(l)}," 編輯 ",8,ke),e("button",{class:"btn btn-danger btn-sm",onClick:M=>c(l._id)},"刪除",8,Pe)])]))),128))])])]),g(K,{product:a.value,onUpdate:s},null,8,["product"]),g(_e,{onUpdate:s})]))}},Ue=x(Ve,[["__scopeId","data-v-b870db4e"]]);export{Ue as default};