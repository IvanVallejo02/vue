(function(){"use strict";var o={942:function(o,t,a){var e=a(963),r=a(252);const s={id:"app",class:"container"},i=(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-md-12 mt-2"},[(0,r._)("h1",null,"Usuarios Clientes")])],-1),n={class:"row"},l={class:"col-md-12"};function u(o,t,a,e,u,d){const c=(0,r.up)("formulario-usuario"),m=(0,r.up)("tabla-usuarios");return(0,r.wg)(),(0,r.iD)("div",s,[i,(0,r._)("div",n,[(0,r._)("div",l,[(0,r.Wm)(c,{onCrearUsuario:d.postUsuario},null,8,["onCrearUsuario"]),(0,r.Wm)(m,{usuarios:u.usuarios,onEliminarUsuario:d.deleteUsuario,onActualizarUsuario:d.putUsuario},null,8,["usuarios","onEliminarUsuario","onActualizarUsuario"])])])])}var d=a(577);const c={id:"tabla-usuarios"},m={key:0,class:"alert alert-info",role:"alert"},p={class:"table"},h=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"Id"),(0,r._)("th",null,"Nombre"),(0,r._)("th",null,"Email"),(0,r._)("th",null,"Ciudad"),(0,r._)("th",null,"Teléfono"),(0,r._)("th",null,"Panel Gestión")])],-1),f={key:0},v=["onUpdate:modelValue"],y={key:1},_={key:2},w=["onUpdate:modelValue"],g={key:3},b={key:4},U=["onUpdate:modelValue"],E={key:5},k={key:6},C=["onUpdate:modelValue"],D={key:7},O={key:8},j=["onClick"],x=["onClick"],V={key:9},F=["onClick"],I=["onClick"];function T(o,t,a,s,i,n){return(0,r.wg)(),(0,r.iD)("div",c,[a.usuarios.length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",m," No existen usuarios ")),(0,r._)("table",p,[h,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.usuarios,(t=>((0,r.wg)(),(0,r.iD)("tr",{key:t.id},[(0,r._)("td",null,(0,d.zw)(t.id),1),i.editando===t.id?((0,r.wg)(),(0,r.iD)("td",f,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o=>t.name=o},null,8,v),[[e.nr,t.name]])])):((0,r.wg)(),(0,r.iD)("td",y,(0,d.zw)(t.name),1)),i.editando===t.id?((0,r.wg)(),(0,r.iD)("td",_,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o=>t.email=o},null,8,w),[[e.nr,t.email]])])):((0,r.wg)(),(0,r.iD)("td",g,(0,d.zw)(t.email),1)),i.editando===t.id?((0,r.wg)(),(0,r.iD)("td",b,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o=>t.city=o},null,8,U),[[e.nr,t.city]])])):((0,r.wg)(),(0,r.iD)("td",E,(0,d.zw)(t.city),1)),i.editando===t.id?((0,r.wg)(),(0,r.iD)("td",k,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o=>t.phone=o},null,8,C),[[e.nr,t.phone]])])):((0,r.wg)(),(0,r.iD)("td",D,(0,d.zw)(t.phone),1)),i.editando===t.id?((0,r.wg)(),(0,r.iD)("td",O,[(0,r._)("button",{class:"btn btn-success ml-2",onClick:o=>n.guardarUsuario(t)},"💽 Guardar",8,j),(0,r._)("button",{class:"btn btn-secondary ml-2",onClick:o=>n.cancelarEdicion(t)},"❌ Cancelar",8,x)])):((0,r.wg)(),(0,r.iD)("td",V,[(0,r._)("button",{class:"btn btn-info",onClick:o=>n.editarUsuario(t)},"✏ Editar",8,F),(0,r._)("button",{class:"btn btn-danger ml-2",onClick:a=>o.$emit("eliminar-usuario",t)},"🗑️ Eliminar",8,I)]))])))),128))])])])}var z={name:"tabla-usuarios",props:{usuarios:Array},data(){return{editando:null}},methods:{editarUsuario(o){this.usuarioEditado=Object.assign({},o),this.editando=o.id},guardarUsuario(o){o.name.length&&o.email.length&&o.phone.length&&o.city.length&&(this.$emit("actualizar-usuario",o),this.editando=null)},cancelarEdicion(o){Object.assign(o,this.usuarioEditado),this.editando=null}}},$=a(744);const K=(0,$.Z)(z,[["render",T]]);var N=K;const P={id:"formulario-usuario"},A={class:"container"},S={class:"row"},q={class:"col-md-3"},Z={class:"form-group"},G=(0,r._)("label",null,"Nombre",-1),J={class:"col-md-3"},W={class:"form-group"},H=(0,r._)("label",null,"Email",-1),L={class:"col-md-3"},M={class:"form-group"},Y=(0,r._)("label",null,"Ciudad",-1),B={class:"col-md-3"},Q={class:"form-group"},R=(0,r._)("label",null,"Teléfono",-1),X=(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-md-12"},[(0,r._)("div",{class:"form-group"},[(0,r._)("button",{class:"btn btn-primary"},"Alta Usuario")])])],-1),oo={class:"container"},to={class:"row"},ao={class:"col-md-12"},eo={key:0,class:"alert alert-danger",role:"alert"},ro={key:1,class:"alert alert-success",role:"alert"};function so(o,t,a,s,i,n){return(0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("form",{onSubmit:t[12]||(t[12]=(0,e.iM)(((...o)=>n.enviarFormulario&&n.enviarFormulario(...o)),["prevent"]))},[(0,r._)("div",A,[(0,r._)("div",S,[(0,r._)("div",q,[(0,r._)("div",Z,[G,(0,r.wy)((0,r._)("input",{ref:"name","onUpdate:modelValue":t[0]||(t[0]=o=>i.usuario.name=o),type:"text",class:(0,d.C_)(["form-control",{"is-invalid":i.procesando&&n.nameInvalido}]),onFocus:t[1]||(t[1]=(...o)=>n.resetEstado&&n.resetEstado(...o)),onKeypress:t[2]||(t[2]=(...o)=>n.resetEstado&&n.resetEstado(...o))},null,34),[[e.nr,i.usuario.name]])])]),(0,r._)("div",J,[(0,r._)("div",W,[H,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>i.usuario.email=o),type:"email",class:(0,d.C_)(["form-control",{"is-invalid":i.procesando&&n.emailInvalido}]),onFocus:t[4]||(t[4]=(...o)=>n.resetEstado&&n.resetEstado(...o)),onKeypress:t[5]||(t[5]=(...o)=>n.resetEstado&&n.resetEstado(...o))},null,34),[[e.nr,i.usuario.email]])])]),(0,r._)("div",L,[(0,r._)("div",M,[Y,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>i.usuario.city=o),type:"text",class:(0,d.C_)(["form-control",{"is-invalid":i.procesando}]),onFocus:t[7]||(t[7]=(...o)=>n.resetEstado&&n.resetEstado(...o)),onKeypress:t[8]||(t[8]=(...o)=>n.resetEstado&&n.resetEstado(...o))},null,34),[[e.nr,i.usuario.city]])])]),(0,r._)("div",B,[(0,r._)("div",Q,[R,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[9]||(t[9]=o=>i.usuario.phone=o),type:"text",class:(0,d.C_)(["form-control",{"is-invalid":i.procesando&&n.phoneInvalido}]),onFocus:t[10]||(t[10]=(...o)=>n.resetEstado&&n.resetEstado(...o)),onKeypress:t[11]||(t[11]=(...o)=>n.resetEstado&&n.resetEstado(...o))},null,34),[[e.nr,i.usuario.phone]])])])]),X]),(0,r._)("div",oo,[(0,r._)("div",to,[(0,r._)("div",ao,[i.error&&i.procesando?((0,r.wg)(),(0,r.iD)("div",eo," Debes cubrir todos los campos ")):(0,r.kq)("",!0),o.correct?((0,r.wg)(),(0,r.iD)("div",ro," Usuario dado de alta correctamente ")):(0,r.kq)("",!0)])])])],32)])}var io={name:"formulario-usuario",data(){return{procesando:!1,correcto:!1,error:!1,usuario:{name:"",email:"",phone:"",city:""}}},methods:{enviarFormulario(){this.procesando=!0,this.resetEstado(),this.nameInvalido||this.emailInvalido||this.phoneInvalido?this.error=!0:(this.$emit("crear-usuario",this.usuario),this.$refs.name.focus(),this.error=!1,this.correcto=!0,this.procesando=!1,this.usuario={name:"",email:"",phone:"",city:""})},resetEstado(){this.correcto=!1,this.error=!1}},computed:{nameInvalido(){return this.usuario.name.length<1},emailInvalido(){return this.usuario.email.length<1},phoneInvalido(){return this.usuario.phone.length<1}}};const no=(0,$.Z)(io,[["render",so]]);var lo=no,uo={name:"app",components:{TablaUsuarios:N,FormularioUsuario:lo},data(){return{usuarios:[]}},methods:{async getUsuarios(){try{const o=await fetch("http://localhost:3000/usuarios");this.usuarios=await o.json()}catch(o){console.log(o)}},async deleteUsuario(o){try{await fetch(`http://localhost:3000/usuarios/${o.id}`,{method:"DELETE"}),this.usuarios=this.usuarios.filter((t=>t.id!==o.id))}catch(t){console.error(t)}},async putUsuario(o){try{const t=await fetch(`http://localhost:3000/usuarios/${o.id}`,{method:"PUT",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8"}}),a=await t.json();this.usuarios=this.usuarios.map((t=>t.id===o.id?a:t))}catch(t){console.error(t)}},async postUsuario(o){try{const t=await fetch("http://localhost:3000/usuarios",{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8"}}),a=await t.json();this.usuarios=[...this.usuarios,a]}catch(t){console.error(t)}}},mounted(){this.getUsuarios()}};const co=(0,$.Z)(uo,[["render",u]]);var mo=co;(0,e.ri)(mo).mount("#app")}},t={};function a(e){var r=t[e];if(void 0!==r)return r.exports;var s=t[e]={exports:{}};return o[e](s,s.exports,a),s.exports}a.m=o,function(){var o=[];a.O=function(t,e,r,s){if(!e){var i=1/0;for(d=0;d<o.length;d++){e=o[d][0],r=o[d][1],s=o[d][2];for(var n=!0,l=0;l<e.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(o){return a.O[o](e[l])}))?e.splice(l--,1):(n=!1,s<i&&(i=s));if(n){o.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=o.length;d>0&&o[d-1][2]>s;d--)o[d]=o[d-1];o[d]=[e,r,s]}}(),function(){a.d=function(o,t){for(var e in t)a.o(t,e)&&!a.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){a.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={143:0};a.O.j=function(t){return 0===o[t]};var t=function(t,e){var r,s,i=e[0],n=e[1],l=e[2],u=0;if(i.some((function(t){return 0!==o[t]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(l)var d=l(a)}for(t&&t(e);u<i.length;u++)s=i[u],a.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return a.O(d)},e=self["webpackChunkvue_json"]=self["webpackChunkvue_json"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(942)}));e=a.O(e)})();
//# sourceMappingURL=app.6769bad5.js.map