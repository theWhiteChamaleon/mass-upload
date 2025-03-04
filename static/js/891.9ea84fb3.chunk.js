"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[891],{3728:(e,t,o)=>{o.d(t,{A:()=>l});var s=o(9379),a=o(45),n=(o(5043),o(4282)),r=o(579);const i=["variant","size","type","disabled","onClick","className","title","text","imageSrc"],l=e=>{let{variant:t="primary",size:o="md",type:l="button",disabled:c=!1,onClick:d,className:u="",title:h,text:p,imageSrc:m}=e,g=(0,a.A)(e,i);return(0,r.jsxs)(n.A,(0,s.A)((0,s.A)({variant:t,size:o,type:l,disabled:c,onClick:d,className:u,title:h},g),{},{children:[m&&(0,r.jsx)("img",{src:m,alt:p,style:{width:"20px",height:"20px",marginRight:"5px"}})," ",p]}))}},6713:(e,t,o)=>{o.d(t,{A:()=>a});o(5043);var s=o(579);const a=()=>(0,s.jsx)("div",{className:"loader-container",children:(0,s.jsx)("div",{className:"loader"})})},2725:(e,t,o)=>{o.d(t,{A:()=>i});var s=o(9379),a=o(45),n=o(2115);const r=["message","type","position","autoClose","hideProgressBar","closeOnClick","pauseOnHover","pauseOnFocusLoss","draggable","theme","transition"],i=()=>{const e=e=>{let{message:t,type:o="default",position:i="top-right",autoClose:l=2e3,hideProgressBar:c=!1,closeOnClick:d=!0,pauseOnHover:u=!1,pauseOnFocusLoss:h=!1,draggable:p=!0,theme:m="light",transition:g=n.br}=e,x=(0,a.A)(e,r);(n.oR[o]||n.oR)(t,(0,s.A)({position:i,autoClose:l,hideProgressBar:c,closeOnClick:d,pauseOnHover:u,draggable:p,theme:m,transition:g},x))};return{showToast:e,showSuccessToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"success"},o))},showErrorToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"error"},o))},showInfoToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"info"},o))},showWarningToast:function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e((0,s.A)({message:t,type:"warn"},o))}}}},4891:(e,t,o)=>{o.r(t),o.d(t,{default:()=>I});var s=o(5043),a=o(4391),n=(o(2342),o(9555),o(3003)),r=o(2670),i=o(2115),l=(o(8421),o(4050),o(9959),o(2327)),c=o(2691),d=o(3728),u=o(7680),h=o(579);const p=e=>{let{fileTypes:t=["JPEG","PNG","GIF","XLSX","CSV"],multiple:o=!0,onUpload:a,onReset:n}=e;const[r,i]=(0,s.useState)([]),l=()=>{i([]),a&&a([]),n&&n()};return(0,h.jsxs)("div",{className:"file-upload-container",children:[(0,h.jsx)("h2",{children:"Drag & Drop Files"}),(0,h.jsxs)("div",{className:"upload-area",children:[(0,h.jsx)(u.l,{multiple:o,handleChange:e=>{const t=o?[...e]:[e];i(t),a&&a(t)},name:"file",types:t}),(0,h.jsx)("div",{className:"file-list",children:r.length>0?r.map(((e,t)=>(0,h.jsxs)("div",{className:"mb-4",style:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)("p",{className:"me-2 mb-0",children:["\ud83d\udcc1 ",e.name]}),(0,h.jsx)("button",{onClick:l,style:{background:"none",border:"none",cursor:"pointer",color:"red"},children:"X"})]},t))):(0,h.jsx)("p",{children:"No files uploaded yet."})})]})]})};var m=o(9566),g=o(4282);const x=e=>{let{show:t,onHide:o,title:s,children:a,footerButtons:n}=e;return(0,h.jsxs)(m.A,{show:t,onHide:o,size:"lg",centered:!0,children:[(0,h.jsx)(m.A.Header,{closeButton:!0,children:(0,h.jsx)(m.A.Title,{children:s||"Modal Title"})}),(0,h.jsx)(m.A.Body,{children:a}),(0,h.jsx)(m.A.Footer,{children:n?n.map(((e,t)=>(0,h.jsx)(g.A,{variant:e.variant||"secondary",onClick:e.onClick,children:e.label},t))):(0,h.jsx)(g.A,{variant:"secondary",onClick:o,children:"Close"})})]})};var b=o(3277);var v=o(2725),f=o(1238);const j=JSON.parse('{"o":{"Physical Product":{"fileHeaders":["Type","Collaborative Space","Title","EIN Number","Description","Unit Of Measure","Ongoing Inspection Required","Item Catalog Category","MWP"],"mandatoryAttributes":["Type","Collaborative Space","EIN Number","Description","Unit Of Measure","Title"]},"Document":{"fileHeaders":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required","Agency Approval Review Required"],"mandatoryAttributes":["Document Type","Collaborative Space","Title","Document Name","Description","PDF File Required"]},"Physical Product Structure":{"fileHeaders":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"],"mandatoryAttributes":["Level","Type","EIN Number","Find Number","Release Phase","Change Controlled","Quantity","Unit Of Measure"]},"Physical Product-Document":{"fileHeaders":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"],"mandatoryAttributes":["Part Type","EIN Number","Part Revision","New/Existing Document","Document Type","Document Name","Document Description","PDF File Required","Relationship Type"]}}}');var y=o(6713),w=o(4196),C=o(6509);const A=e=>{let{errors:t}=e;return console.log("Errors in ErrorPopup:",t),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(C.A,{variant:"danger",className:"text-center text-sm-start mb-3",children:[(0,h.jsx)("strong",{children:"Note:"})," Below reports show only uploaded spreadsheet error rows. To resolve below issues, do the required changes in the spreadsheet and re-import."]}),(0,h.jsx)("div",{className:"table-responsive",children:(0,h.jsxs)(w.A,{striped:!0,bordered:!0,hover:!0,children:[(0,h.jsx)("thead",{className:"table-light",children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Row Number"}),(0,h.jsx)("th",{children:"Error Description"}),(0,h.jsx)("th",{children:"Column Name "})]})}),(0,h.jsx)("tbody",{children:t.length>0?t.map(((e,t)=>{const o=e.match(/Row (\d+):/),s=o?o[1]:"-",a=e.match(/"([^"]*)" is required/),n=a?a[1]:"-",r=o?e.split(": ")[1]:e;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:s}),(0,h.jsx)("td",{children:r}),(0,h.jsx)("td",{children:n})]},t)})):(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:2,className:"text-center",children:"No Errors Found"})})})]})})]})};var N=o(2268),S=o(6047);const k=()=>{const{showErrorToast:e}=(0,v.A)(),[t,o]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{var t,s,a,n,r,i;console.log("Fetching column mapping...");const l=await(0,N.I)();if(!l)return void e(b.rK);const c=await(0,S.ui)("GET","https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dseng/dseng:EngItem/search?%24top=1","",l);if(!c||!c.data)throw new Error("Failed to fetch metadata.");console.log("Metadata Response:",c.data);const d=null===(t=c.data)||void 0===t||null===(s=t.member)||void 0===s||null===(a=s[0])||void 0===a?void 0:a.id;if(!d)throw new Error("No object ID found in metadata.");console.log("Extracted Object ID:",d);const u=await(0,S.ui)("POST","https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/collabServices/attributes/op/read?tenant=OI000186152&xrequestedwith=xmlhttprequest",{busIDs:[d]});if(!u||!u.data)throw new Error("Failed to fetch attribute data.");const h=await u.json();console.log("Attribute Response:",h);const p=((null===(n=u.data.results)||void 0===n||null===(r=n[0])||void 0===r||null===(i=r.groupData)||void 0===i?void 0:i.filter((e=>!0===e.deploymentExtension)))||[]).map((e=>({uiLabel:e.nls,backendName:e.name})));console.log("Mapped Attributes:",p),o(p)}catch(l){console.error("Error fetching column mapping:",l),e(l.message||"Error fetching column mapping.")}})()}),[]),{mappedAttributes:t}};var P=o(9379);const T=e=>{let{data:t,handleCheckboxChange:o,checkedItems:s,handleSelectChange:a,selectedAttributes:n,mappedAttributes:r}=e;return console.log("StaticTable Data prop:",t),console.log("Mapped Attributes prop:",r),(0,h.jsxs)(w.A,{bordered:!0,className:"table-light",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{}),(0,h.jsx)("th",{children:"Column Name"}),(0,h.jsx)("th",{children:"Attribute Name"})]})}),(0,h.jsx)("tbody",{children:t.map(((e,t)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:(0,h.jsx)("input",{type:"checkbox",checked:s[t]||!1,onChange:()=>o(t)})}),(0,h.jsx)("td",{children:e.columnName}),(0,h.jsx)("td",{children:(0,h.jsxs)("select",{className:"form-select",value:n[t]||e.attributeName,onChange:e=>a(t,e.target.value),children:[(0,h.jsx)("option",{value:e.attributeName,children:e.attributeName}),r.map(((e,t)=>(0,h.jsxs)("option",{value:e.backendName,children:[e.uiLabel," "]},t)))]})})]},t)))})]})},D=["","Column Name","Attribute Name"],E=()=>{const{mappedAttributes:e}=k(),[t,o]=(0,s.useState)({}),[a,n]=(0,s.useState)({});return(0,h.jsx)(T,{columns:D,data:e,handleCheckboxChange:e=>{o((0,P.A)((0,P.A)({},t),{},{[e]:!t[e]}))},checkedItems:t,handleSelectChange:(e,t)=>{n((0,P.A)((0,P.A)({},a),{},{[e]:t}))},selectedAttributes:a,mappedAttributes:e})},F=()=>{const[e,t]=(0,s.useState)(!1),[o,a]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1),[i,u]=(0,s.useState)(!1),{showErrorToast:m,showSuccessToast:g}=(0,v.A)(),[w,C]=(0,s.useState)(!1),[N,S]=(0,s.useState)(""),[k,P]=(0,s.useState)([]);return console.log("Operation Choice:",k),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(l.A,{className:"mt-3",gap:4,children:[(0,h.jsxs)(l.A,{direction:"horizontal",children:[(0,h.jsxs)(c.A.Select,{"aria-label":"Choose Operations",style:{fontSize:"11px",width:"30%",border:"1px solid #007bff",outline:"none",borderRadius:"8px",fontWeight:"bold"},onChange:e=>S(e.target.value),children:[(0,h.jsx)("option",{value:"",children:"Choose Operations"}),(0,h.jsx)("option",{value:"1",children:"Physical Product/Raw Material"}),(0,h.jsx)("option",{value:"2",children:"Physical Product Structure"}),(0,h.jsx)("option",{value:"3",children:"Document"}),(0,h.jsx)("option",{value:"4",children:"Physical Product-Document"})]}),"\xa0",(0,h.jsx)("div",{className:"p-2 ms-auto",children:"3"===N&&(0,h.jsx)(c.A.Group,{controlId:"formFileMultiple",children:(0,h.jsx)(c.A.Control,{type:"file",multiple:!0})})}),(0,h.jsx)("div",{className:"p-2",children:(0,h.jsx)(d.A,{variant:"link ms-auto ",onClick:()=>{(e=>t=>{let o="";switch(t){case"1":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductSpreadSheetTemplate.xlsx";break;case"2":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProductStructureSpreadSheetTemplate.xlsx";break;case"3":o="https://khanfarzan17.github.io/mass-upload-testing/DocumentSpreadSheetTemplate.xlsx";break;case"4":o="https://khanfarzan17.github.io/mass-upload-testing/PhysicalProduct-DocumentSpreadSheetTemplate.xlsx";break;default:return void e(b._2)}window.open(o,"_blank")})(m)(N)},text:"Download Template"})})]}),(0,h.jsx)(p,{fileTypes:["XLSX"],multiple:!1,onUpload:e=>{var t;0!==e.length&&(C(!0),(t=e[0],new Promise(((e,o)=>{console.log("Starting file validation for:",t.name);const s=new FileReader;s.readAsBinaryString(t),s.onload=t=>{console.log("File successfully read. Parsing...");const s=f.LF(t.target.result,{type:"binary"}),a=s.SheetNames[0];console.log("Detected sheet name:",a);const n=s.Sheets[a],r=f.Wp.sheet_to_json(n,{header:1})[0];if(console.log("Extracted headers:",r),!r||0===r.length)return console.error("\u274c No headers found in the file."),void o(["The uploaded file has no content or is empty."]);const i=f.Wp.sheet_to_json(n,{defval:""});if(console.log("Extracted sheet data:",i),0===i.length)return console.error("\u274c No row data found. Only headers exist."),void o(["The uploaded file contains only headers but no data. Please add at least one row."]);const l=Object.keys(i[0]);console.log("Parsed file headers:",l);let c=null;for(const[e,o]of Object.entries(j.o))if(o.fileHeaders.every((e=>l.includes(e)))){c=e,console.log("Matched operation:",c);break}if(!c)return console.error("\u274c No matching operation found for given headers."),void o(["File headers do not match any expected template."]);const d=j.o[c].fileHeaders;console.log("Expected Headers:",d);const u=j.o[c].mandatoryAttributes;console.log("Mandatory Attributes:",u);const h=d.filter((e=>!l.includes(e)));if(h.length>0)return console.error("\u274c Missing headers:",h),void o(["Missing required headers: ".concat(h.join(", "))]);const p=[];i.forEach(((e,t)=>{u.forEach((o=>{e[o]&&""!==e[o].toString().trim()||p.push("Row ".concat(t+2,': "').concat(o,'" is required but is empty.'))}))})),p.length>0?(console.error("\u274c Validation errors found:",p),o(p)):(console.log("\u2705 File validation successful. No errors found."),e())},s.onerror=()=>{console.error("\u274c Error reading the file."),o(["File reading failed."])}}))).then((()=>{console.log("Validation successful (inside .then)"),P([]),C(!1),g(" No Error File validated successfully!")})).catch((e=>{console.log("Validation failed (inside .catch",e),P(e),C(!1),a(!0)})))},onReset:()=>{t(!1),a(!1),r(!1),u(!1),C(!1),S(""),P([]);const e=document.querySelector('select[aria-label="Choose Operations"]');e&&(e.value=""),g("Widget reset successfully!")}}),w&&(0,h.jsx)(y.A,{}),(0,h.jsxs)(l.A,{direction:"horizontal",gap:2,children:[(0,h.jsx)(c.A.Check,{type:"checkbox",label:"Background"}),(0,h.jsxs)("div",{className:"ms-auto d-flex gap-5",children:[k.length>0&&(0,h.jsx)(d.A,{variant:"danger",onClick:()=>r(!0),text:"Content Errors (".concat(k.length,")")}),(0,h.jsx)(d.A,{variant:"primary",onClick:()=>t(!0),text:"Submit"})]})]})]}),(0,h.jsx)(x,{show:n,onHide:()=>r(!1),title:"Content Errors",footerButtons:[{label:"Manage Spreadsheet Columns",variant:"info",onClick:()=>{r(!1),u(!0)}},{label:"Close",variant:"danger",onClick:()=>r(!1)}],children:(0,h.jsx)(A,{errors:k})}),(0,h.jsx)(x,{show:e,onHide:()=>t(!1),title:"Custom Modal Title",footerButtons:[{label:"Cancel",variant:"danger",onClick:()=>t(!1)},{label:"Confirm",variant:"success",onClick:()=>alert("Confirmed!")}],children:(0,h.jsx)("p",{children:"This is a reusable modal component with dynamic content."})}),(0,h.jsxs)(x,{show:i,onHide:()=>u(!1),title:"Manage Spreadshet Column",footerButtons:[{label:"Ok",variant:"primary",onClick:()=>u(!1)},{label:"Cancel",variant:"danger",onClick:()=>u(!1)}],children:[(0,h.jsx)("p",{children:"All column(s) of uploaded Spreadsheet are mapped to valid Attribute Name. All mandatory Attribute Name is mapped to uploaded Spreadsheet Column Name"}),(0,h.jsx)(E,{})]})]})};let R=null;function I(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),R||(R=a.createRoot(o)),R.render((0,h.jsxs)(n.Kq,{store:r.A,children:[(0,h.jsx)(F,{}),(0,h.jsx)(i.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}},2268:(e,t,o)=>{o.d(t,{I:()=>a});var s=o(6047);const a=async()=>{try{let e=window.widget.getValue("Credentials");const t=await(0,s.fV)();console.log("Security Context is:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",a=await new Promise(((e,s)=>{t.authenticatedRequest(o,{method:"GET",type:"json",onComplete:e,onFailure:s})})),n=a.csrf.name,r=a.csrf.value,i="SecurityContext",l=e;return{[n]:r,[i]:l}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},4050:()=>{},9555:()=>{},9959:()=>{}}]);
//# sourceMappingURL=891.9ea84fb3.chunk.js.map