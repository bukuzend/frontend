(function(){"use strict";var e={5924:function(e,n,s){var t=s(5130),a=s(6768);function i(e,n,s,t,i,r){const o=(0,a.g2)("Background"),l=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(o,{class:"back"}),(0,a.bF)(l)],64)}var r=s(8355);const o={id:"background-wrap"},l=(0,a.Fv)('<div class="x1" data-v-5815846d><div class="cloud" data-v-5815846d></div></div><div class="x2" data-v-5815846d><div class="cloud" data-v-5815846d></div></div><div class="x3" data-v-5815846d><div class="cloud" data-v-5815846d></div></div><div class="x4" data-v-5815846d><div class="cloud" data-v-5815846d></div></div><div class="x5" data-v-5815846d><div class="cloud" data-v-5815846d></div></div>',5),u=[l];function c(e,n,s,t,i,r){return(0,a.uX)(),(0,a.CE)("div",o,u)}var d={},h=s(1241);const p=(0,h.A)(d,[["render",c],["__scopeId","data-v-5815846d"]]);var g=p;r.A.create({withCredentials:!0});var m={components:{Background:g},data(){return{selected:!0}}};const v=(0,h.A)(m,[["render",i]]);var f=v,k=s(4458);(0,k.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var w=s(1387),b=s(4232);const y={class:"container"},L={class:"field"},C={class:"inputInf"},_={class:"login inField"},q={key:0,class:"error"},F={class:"password inField"},E={key:0,class:"error"},A={class:"email inField"},x={key:0,class:"error"},S={class:"fname inField"},Q={key:0,class:"error"},O={class:"sname inField"},$={key:0,class:"error"},X={class:"btn"};function P(e,n,s,i,r,o){const l=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",y,[(0,a.Lk)("div",L,[(0,a.Lk)("div",C,[(0,a.Lk)("div",_,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>r.login=e),placeholder:"Логин"},null,512),[[t.Jo,r.login]]),r.errorLogin?((0,a.uX)(),(0,a.CE)("p",q,(0,b.v_)(r.errorMessage[0]),1)):(0,a.Q3)("",!0)]),(0,a.Lk)("div",F,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>r.password=e),placeholder:"Пароль"},null,512),[[t.Jo,r.password]]),r.errorPassword?((0,a.uX)(),(0,a.CE)("p",E,(0,b.v_)(r.errorMessage[1]),1)):(0,a.Q3)("",!0)]),(0,a.Lk)("div",A,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":n[2]||(n[2]=e=>r.email=e),placeholder:"Email"},null,512),[[t.Jo,r.email]]),r.errorEmail?((0,a.uX)(),(0,a.CE)("p",x,(0,b.v_)(r.errorMessage[2]),1)):(0,a.Q3)("",!0)]),(0,a.Lk)("div",S,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":n[3]||(n[3]=e=>r.fname=e),placeholder:"Имя"},null,512),[[t.Jo,r.fname]]),r.errorFname?((0,a.uX)(),(0,a.CE)("p",Q,(0,b.v_)(r.errorMessage[3]),1)):(0,a.Q3)("",!0)]),(0,a.Lk)("div",O,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":n[4]||(n[4]=e=>r.sname=e),placeholder:"Фамилия"},null,512),[[t.Jo,r.sname]]),r.errorSname?((0,a.uX)(),(0,a.CE)("p",$,(0,b.v_)(r.errorMessage[4]),1)):(0,a.Q3)("",!0)])]),(0,a.Lk)("div",X,[(0,a.Lk)("button",{onClick:n[5]||(n[5]=(...e)=>o.clkReg&&o.clkReg(...e)),class:"btnIn"},"Зарегистрироваться"),(0,a.bF)(l,{to:"/login",class:"link"},{default:(0,a.k6)((()=>[(0,a.eW)("Войти")])),_:1})])])])}s(4114);var M="https://collector35.ru";const N=r.A.create({withCredentials:!0});var I={data(){return{login:"",password:"",email:"",fname:"",sname:"",errorLogin:!1,errorPassword:!1,errorEmail:!1,errorFname:!1,errorSname:!1,errorMessage:["Заполните поле","Заполните поле","Заполните поле","Заполните поле","Заполните поле"],url:M}},beforeCreate(){N.post(`${this.url}/api/auth/login`).catch((e=>{try{300===e.response.status&&"authed"===e.response.data&&this.$router.push({path:"/profile"})}catch{}}))},methods:{async clkReg(){""===this.login&&(this.errorLogin=!0),""===this.email&&(this.errorEmail=!0),""===this.password&&(this.errorPassword=!0),""===this.fname&&(this.errorFname=!0),""===this.sname&&(this.errorSname=!0),""!==(this.login&&this.email&&this.password&&this.fname&&this.sname)?(this.errorLogin=!1,this.errorEmail=!1,this.errorPassword=!1,this.errorFname=!1,this.errorSname=!1,N.post(`${this.url}/api/auth/register`,{login:this.login,password:this.password,email:this.email,fname:this.fname,sname:this.sname}).then((e=>{console.log(e),this.$router.push({path:"/login"})})).catch((e=>{this.errorLogin=!0,this.errorMessage[0]="Пользователь существует",console.log(e)}))):(""===this.login&&(this.errorMessage[0]="Заполните поле"),""!==this.login&&(this.errorLogin=!1),""!==this.email&&(this.errorEmail=!1),""!==this.password&&(this.errorPassword=!1),""!==this.fname&&(this.errorFname=!1),""!==this.sname&&(this.errorSname=!1))}}};const B=(0,h.A)(I,[["render",P]]);var j=B;const V={class:"container"},T={class:"field"},W={class:"inputInf"},D={key:0,class:"error"},U={class:"btn"};function J(e,n,s,i,r,o){const l=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",V,[(0,a.Lk)("div",T,[(0,a.Lk)("div",W,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>r.login=e),placeholder:"Логин"},null,512),[[t.Jo,r.login]]),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>r.password=e),placeholder:"Пароль"},null,512),[[t.Jo,r.password]]),r.error?((0,a.uX)(),(0,a.CE)("p",D,(0,b.v_)(r.errorMessage),1)):(0,a.Q3)("",!0)]),(0,a.Lk)("div",U,[(0,a.Lk)("button",{onClick:n[2]||(n[2]=(...e)=>o.clkAuht&&o.clkAuht(...e)),class:"btnIn"},"Войти"),(0,a.bF)(l,{to:"/reg",class:"link"},{default:(0,a.k6)((()=>[(0,a.eW)("Регистрация")])),_:1})])])])}const G=r.A.create({withCredentials:!0});var R={data(){return{login:"",password:"",error:!1,errorMessage:"Неверный логин или пароль.",url:M}},beforeCreate(){G.post(`${M}/api/auth/login`).catch((e=>{try{300===e.response.status&&"authed"===e.response.data&&this.$router.push({path:"/profile"})}catch{}}))},methods:{async clkAuht(){G.post(`${this.url}/api/auth/login`,{login:this.login,password:this.password}).then((e=>{this.$router.push({path:"/profile"})})).catch((e=>{console.log(e),this.error=!0}))}}};const K=(0,h.A)(R,[["render",J],["__scopeId","data-v-6d5be8c8"]]);var Z=K;const z=e=>((0,a.Qi)("data-v-7f4ac998"),e=e(),(0,a.jt)(),e),H={class:"conteiner"},Y={class:"profileInf"},ee={class:"profileIcon"},ne=["src"],se={class:"profileName"},te=z((()=>(0,a.Lk)("div",{class:"profileAchivemnets"},null,-1))),ae={class:"exit"};function ie(e,n,s,t,i,r){const o=(0,a.g2)("BugerNav");return(0,a.uX)(),(0,a.CE)("div",H,[(0,a.bF)(o,{class:"burgerNav"}),(0,a.Lk)("div",Y,[(0,a.Lk)("div",ee,[(0,a.Lk)("img",{src:"https://collector35.ru/api/profile/icon",class:"image"},null,8,ne)]),(0,a.Lk)("div",se,[(0,a.Lk)("p",null,(0,b.v_)(i.fname)+" "+(0,b.v_)(i.sname),1),(0,a.Lk)("p",null," Lvl: "+(0,b.v_)(i.lvl)+" "+(0,b.v_)(i.emoji),1)])]),te,(0,a.Lk)("div",ae,[(0,a.Lk)("button",{class:"exitBtn",onClick:n[0]||(n[0]=(...e)=>r.Exit&&r.Exit(...e))},"Выход")])])}var re=s.p+"img/ham_menu.bbc4b050.svg";const oe=e=>((0,a.Qi)("data-v-bf2442c8"),e=e(),(0,a.jt)(),e),le={class:"conteinerBurg"},ue=oe((()=>(0,a.Lk)("img",{src:re},null,-1))),ce=[ue],de={key:0,class:"nav"},he={class:"firstLine"},pe={class:"secondLine"};function ge(e,n,s,t,i,r){const o=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",le,[(0,a.Lk)("div",{class:"iconBurg",onClick:n[0]||(n[0]=e=>i.menu=!i.menu)},ce),i.menu?((0,a.uX)(),(0,a.CE)("div",de,[(0,a.Lk)("div",he,[(0,a.bF)(o,{class:"link",to:"/profile"},{default:(0,a.k6)((()=>[(0,a.eW)("Профиль")])),_:1}),(0,a.bF)(o,{class:"link",to:"/profile/catched"},{default:(0,a.k6)((()=>[(0,a.eW)("Коллекция")])),_:1})]),(0,a.Lk)("div",pe,[(0,a.bF)(o,{class:"link",to:"/profile/post"},{default:(0,a.k6)((()=>[(0,a.eW)("Добавить")])),_:1}),(0,a.bF)(o,{class:"link",to:"/library"},{default:(0,a.k6)((()=>[(0,a.eW)("Библиотека")])),_:1})])])):(0,a.Q3)("",!0)])}var me={data(){return{menu:!1}}};const ve=(0,h.A)(me,[["render",ge],["__scopeId","data-v-bf2442c8"]]);var fe=ve;const ke=r.A.create({withCredentials:!0});var we={components:{BugerNav:fe},data(){return{fname:"",sname:"",lvl:null,emoji:"",url:M}},async beforeCreate(){const e=await ke.get(`${M}/api/profile`).catch((e=>{console.log(e),this.$router.push("/login")}));this.fname=e.data[0].fname,this.sname=e.data[0].sname,this.lvl=e.data[0].lvl,console.log(e)},methods:{Exit(){ke.get(`${this.url}/api/profile/unauth`).then((e=>{console.log(e),this.$router.push("/login")})).catch((e=>console.log(e.message))),console.log(document.cookie.search("aToken"))}}};const be=(0,h.A)(we,[["render",ie],["__scopeId","data-v-7f4ac998"]]);var ye=be,Le=s.p+"img/Logo.a1dbcae2.svg";const Ce=e=>((0,a.Qi)("data-v-6f825528"),e=e(),(0,a.jt)(),e),_e={class:"conteiner"},qe={class:"main"},Fe=Ce((()=>(0,a.Lk)("div",{class:"image"},[(0,a.Lk)("img",{src:Le,alt:"",class:"logo"})],-1))),Ee={class:"toLogin"},Ae={class:"button"};function xe(e,n,s,t,i,r){const o=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",_e,[(0,a.Lk)("div",qe,[Fe,(0,a.Lk)("div",Ee,[(0,a.Lk)("div",Ae,[(0,a.bF)(o,{to:"/login",class:"start"},{default:(0,a.k6)((()=>[(0,a.eW)("Начать")])),_:1})])])])])}var Se={};const Qe=(0,h.A)(Se,[["render",xe],["__scopeId","data-v-6f825528"]]);var Oe=Qe;const $e={class:"conteiner"},Xe={class:"search"},Pe={class:"dragonflys"};function Me(e,n,s,i,r,o){const l=(0,a.g2)("BugerNav"),u=(0,a.g2)("Dragonfly"),c=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",$e,[(0,a.bF)(l,{class:"burgerNav"}),(0,a.Lk)("div",Xe,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>r.search=e),placeholder:"Поиск"},null,512),[[t.Jo,r.search]])]),(0,a.Lk)("div",Pe,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.itemsFil,(e=>((0,a.uX)(),(0,a.CE)("div",{class:"dragon",key:e.name},[(0,a.bF)(c,{class:"link",to:{path:`/library/${e.name}`}},{default:(0,a.k6)((()=>[(0,a.bF)(u,{item:e.name},null,8,["item"])])),_:2},1032,["to"])])))),128))])])}const Ne={class:"dragonComp"},Ie={class:"imag"},Be=["src"],je={class:"name"};function Ve(e,n,s,t,i,r){return(0,a.uX)(),(0,a.CE)("div",Ne,[(0,a.Lk)("div",Ie,[(0,a.Lk)("img",{src:r.getPath()},null,8,Be)]),(0,a.Lk)("div",je,[(0,a.Lk)("p",null,(0,b.v_)(s.item),1)])])}var Te={props:{item:{type:String,reqired:!0}},methods:{getPath(){return`https://collector35.ru/api/lib/${this.item}/download`}}};const We=(0,h.A)(Te,[["render",Ve],["__scopeId","data-v-79e5e1ae"]]);var De=We;const Ue=r.A.create({withCredentials:!0});var Je={components:{BugerNav:fe,Dragonfly:De},async beforeCreate(){Ue.get(`${M}/api/lib`).then((e=>(this.items=e.data,this.items))).catch((e=>{console.log(e),this.$router.push("/login")}))},data(){return{search:"",items:[],url:M}},computed:{itemsFil(){const e=this.items.filter((e=>e.name.toLowerCase().includes(this.search.toLowerCase())));return null===this.search?this.items:e}}};const Ge=(0,h.A)(Je,[["render",Me],["__scopeId","data-v-2331424c"]]);var Re=Ge;const Ke={class:"conteiner"},Ze={class:"dragonfly"},ze=["src"],He={class:"dragonDesc"};function Ye(e,n,s,t,i,r){const o=(0,a.g2)("BugerNav");return(0,a.uX)(),(0,a.CE)("div",Ke,[(0,a.bF)(o,{class:"burgerNav"}),(0,a.Lk)("div",Ze,[(0,a.Lk)("img",{src:`https://collector35.ru/api/lib/${i.param}/download`},null,8,ze),(0,a.Lk)("p",null,(0,b.v_)(i.item.name),1)]),(0,a.Lk)("div",He,[(0,a.Lk)("p",null,(0,b.v_)(i.item.description),1)])])}const en=r.A.create({withCredentials:!0});var nn={components:{BugerNav:fe},async beforeCreate(){const e=await en.get(`${M}/api/lib/${this.$route.params.name}`);this.item=e.data},data(){return{item:"",param:this.$route.params.name,url:M}}};const sn=(0,h.A)(nn,[["render",Ye],["__scopeId","data-v-3afaa3cc"]]);var tn=sn;const an={class:"container"},rn={class:"camera"},on={class:"picture",for:"image",tabIndex:"0"},ln={key:0,class:"picture__image"},un=["src","alt"],cn={class:"questions"},dn={key:0,class:"end"},hn={key:1,class:"backFin"};function pn(e,n,s,t,i,r){const o=(0,a.g2)("BugerNav"),l=(0,a.g2)("QuestionsVue"),u=(0,a.g2)("FinalPageVue");return(0,a.uX)(),(0,a.CE)("div",an,[(0,a.bF)(o,{class:"burgerNav"}),(0,a.Lk)("div",rn,[(0,a.Lk)("label",on,[i.show?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("span",ln," Сделайте фото ")),i.show?((0,a.uX)(),(0,a.CE)("img",{key:1,src:i.img,alt:i.img,class:"openedPic"},null,8,un)):(0,a.Q3)("",!0)]),(0,a.Lk)("input",{class:"input",ref:"file",type:"file",name:"image",id:"image",capture:"user",accept:"image/*",onInput:n[0]||(n[0]=(...e)=>r.pickFile&&r.pickFile(...e)),multiple:""},null,544)]),(0,a.Lk)("div",cn,[i.show?((0,a.uX)(),(0,a.Wv)(l,{key:0,question:i.question,answerOne:i.answerOne,answerTwo:i.answerTwo,onAnsQuest:r.ansQuest},null,8,["question","answerOne","answerTwo","onAnsQuest"])):(0,a.Q3)("",!0)]),i.end?((0,a.uX)(),(0,a.CE)("div",dn,[(0,a.bF)(u,{final:i.final,finMessage:i.finMessage,onFinSend:r.finSend},null,8,["final","finMessage","onFinSend"])])):(0,a.Q3)("",!0),i.end?((0,a.uX)(),(0,a.CE)("div",hn)):(0,a.Q3)("",!0)])}s(4603),s(7566),s(8721);const gn={class:"containerModule"},mn={class:"questionOne"};function vn(e,n,s,t,i,r){return(0,a.uX)(),(0,a.CE)("div",gn,[(0,a.Lk)("div",mn,(0,b.v_)(s.question),1),(0,a.Lk)("div",{class:"answerOne",onClick:n[0]||(n[0]=e=>r.ansQuest(!0))},(0,b.v_)(s.answerOne),1),(0,a.Lk)("div",{class:"answerTwo",onClick:n[1]||(n[1]=e=>r.ansQuest(!1))},(0,b.v_)(s.answerTwo),1)])}var fn={props:{question:{type:String,required:!0,default:"error"},answerOne:{type:String,required:!0,default:"error"},answerTwo:{type:String,required:!0,default:"error"}},methods:{ansQuest(e){this.$emit("ansQuest",e)}}};const kn=(0,h.A)(fn,[["render",vn],["__scopeId","data-v-3d55838c"]]);var wn=kn;const bn={CalV:{help:"Pterostigma",question:["Окраска тела самоцов голубоватая или синяя с металлическим отливом. Крылья почти полностью окрашены в мет. миний или голубоватый. Окраска самок зеленоватый с мет. блеском. Жилкование крыльев имеет бурый цвет.На месте птеростигмы белое пятно."],answer:"Calopteryx virgo",next:"CalS",child:null},CalS:{help:"Pterostigma",question:["Окраска тела самцов голубоватая или синяя, с металлическим отливом, при этом синяя окраска есть лишь в центральной части крыла, основание и конец крыльев прозрачные. Самки зеленоватые с металлическим блеском. Жилкование крыльев имеет зеленовато-металлический цвет. На месте птеростигмы белое пятно."],answer:"Calopteryx splendens",next:null,child:null},Cal:{help:null,question:["Тело метал. блестящее, зеленое или голубое. Основание крыльев широкое, нестебельчатое"],answer:"Calopteryx",next:"LesS",child:"CalV"},LesS:{help:"Pterostigma",question:["Птеростигма равна двум ячейкам, расположенным под ней. Грудка и брюшко сверху ясно металлически блестящие, зеленоватые, никогда не имеют ясно очерченного темного рисунка"],answer:"Lestes sponsa",next:"PlaP",child:null},PlaP:{help:null,question:["Окраска тела светло голубые, у самцов. Самки имеют светлую окраску. Имеют широкую голову, втрое шире длины. А также имеют расширенные голени средних и задних конечностей."],answer:"Platycnemis pennipes",next:"CoedaE",child:null},PyrN:{help:null,question:["Брюшко у особей обоих полов имеет красную или охристо-желтую окраску с черным рисунком. Есть светлоокрашенная доплечевая полоса. Глаза самцов также красные."],answer:"Pyrrhosoma nymphyla",next:"EryN",child:null},EryN:{help:null,question:["Окраска тела самцов голубая, брюшко сверху бронзово-черного цвета с металлическим блеском. Глаза красные."],answer:"Erythromma najas",next:"CoeioN",child:null},CoedaE:{help:"Pterostigma",question:["Птеростигма короткая, её длина равна одной ячейке, расположенной под ней"],answer:"Conenagrionidae",next:null,child:"PyrN"},CoeioN:{help:"Pterostigma",question:["Птеростигма на обоих крыльях одноцветная, Самцы имеют, как правило, полностью голубую окраску, самки - зелёную. Металлический отлив отсутствует."],answer:"Conenagrion",next:null,child:null},Zyg:{help:null,question:["Одинаковые по форме и жилкованию, прикрепляются к туловищу на протяжении всего основани"],answer:"Zygoptera",next:null,child:"Cal"},Ani:{help:null,question:["неодинаковы по форме и жилкованию: задние в основании гораздо уже, чем передние. Задние прикрепляются к туловищу лишь частью основания."],answer:"Anisoptera",next:null,child:"OphC"},OphC:{help:"Eyes 1",question:["Глаза не соприкасаются, полностью разделены промежутком Ноги длинные, брюшко желтое, грудь светло-салатно-зеленая"],answer:"Ophiogomphus cecilia",next:"OnyF",child:null},OnyF:{help:null,question:["Ноги короткие, грудь желтоватая или коричневая, брюшко чёрное, с желтыми пятнами на верхней части. У самцов анальные придатки длинные, образуют подобие трехзубых клещей"],answer:"Onychogomphus forcipatus",next:"GomV",child:null},GomV:{help:null,question:["Верхняя поверхность брюшко чёрное, с продольной желтой полосой на верхней части. Брюшко на конце имеет явно булавовидную форму"],answer:"Gomphus vulgatissimus",next:"CorB",child:null},CorB:{help:"Eyes 3",question:["Глаза соприкасаются только в одной точке. Окраска тела желтая с ярко-жёлтыми поперечными и косыми полосами в области брюшка и груди"],answer:"Cordulegaster boltonii",next:"AniQ1",child:null},AniQ1:{help:"Eyes 2",question:["Глаза полностью соприкасаются. Тело имеет зеленый металлический оттенок."],next:"AniQ2",child:"CorA"},CorA:{help:null,question:["Лоб не имеет жёлтых пятен ни с верхней части, ни по бокам головы"],answer:"Cordulia aenea",next:"SomM",child:null},SomM:{help:null,question:["Имеются жёлтые пятна по бокам головые, соединённые желтой линией"],answer:"Somatichlora metallica",next:null,child:null},AniQ2:{help:"Eyes 2",question:["Глаза полностью соприкасаются. Тело не имеет металлического оттенка"],next:null,child:"AniQ3"},AniQ3:{help:null,question:["Крупные стрекозы, длина тела больше 6 см. Размах крыльев около 8 см"],next:"AniQ4",child:"AesG"},AesG:{help:null,question:["Крупная стрекоза, длина тела 7-8 см, тело сверху коричневое, с заметными голубоватыми пятнами у основания крыльев. Жилкование крыльев рыже-коричневое"],answer:"Aeshna grandis",next:"Aes",child:null},Aes:{help:null,question:["Крупная стрекоза, 7-8 см в длину, окраска тела голубая у самцов, зелёная - у самок."],answer:"Aeshna",next:null,child:null},AniQ4:{help:null,question:["Менее крупные особи, длина тела на превышает 5 см"],next:null,child:"Sym"},Sym:{help:null,question:["Длина тела обычно равна 3-4 см, отличительный признак - брюшко явно сжато с боков"],answer:"Sympetrum",next:"Lib",child:"SymD"},SymD:{help:null,question:["Тело желтое, с широкой черной полосой по бокам. Окраска тела взрослых самцов полностью чёрная"],answer:"Sympetrum danae",next:"SymF",child:null},SymF:{help:null,question:["Оба пола легко узнаются по наличию по крупным пятнам янтарного цвета в основании задних крыльев. Окраска тела самцов рыжеватая, у самок - желтая"],answer:"Sympetrum flayeolum",next:"SymS",child:null},SymS:{help:null,question:["Окраса тела самцов кроваво-красного цвета, самки имеют желтоватую окраску. Оба пола имеют черные продольные полосы вдоль брюшка"],answer:"Sympetrum sanguineum",next:null,child:null},Lib:{help:null,question:["Длина тела в среднем около 5 см, отличительный признак - тело плоское, уплощено в вертикальном положении."],answer:"Libellula",next:null,child:"LibQ"},LibQ:{help:null,question:["Стрекоза средних размеров, 3-4 см в длину. Отличительный признак, наличие темных пятен в узлах крыльев"],answer:"Libellula quadrimaculata",next:"LibD",child:null},LibD:{help:null,question:["Стрекоза размером около 3 см, отличается сильно уплощённым и широким брюшком. Самцы имеют голубую окраску брюшка, самки - жёлтую"],answer:"Libellula depressa",next:null,child:null}};var yn=bn;const Ln=e=>((0,a.Qi)("data-v-59eab524"),e=e(),(0,a.jt)(),e),Cn={class:"final"},_n={class:"finM"},qn={class:"fin"},Fn=Ln((()=>(0,a.Lk)("br",null,null,-1))),En={class:"result"};function An(e,n,s,t,i,r){return(0,a.uX)(),(0,a.CE)("div",Cn,[(0,a.Lk)("span",_n,(0,b.v_)(s.finMessage),1),(0,a.Lk)("span",qn,[(0,a.eW)("Ваш результат: "),Fn,(0,a.Lk)("span",En,(0,b.v_)(s.final),1)]),(0,a.Lk)("button",{onClick:n[0]||(n[0]=e=>r.finSend(s.final)),class:"butFin"}," Отправить ")])}var xn={props:{final:{type:String,required:!0,default:"error"},finMessage:{type:String,required:!0,default:"error"}},methods:{finSend(e){this.$emit("finSend",e)}}};const Sn=(0,h.A)(xn,[["render",An],["__scopeId","data-v-59eab524"]]);var Qn=Sn;const On=r.A.create({withCredentials:!0});var $n={data(){return{first:!0,show:!1,img:null,question:"Передние и задние крылья",answerOne:yn["Zyg"].question[0],answerTwo:yn["Ani"].question[0],node:null,final:null,finMessage:null,end:!1,latitude:null,longitude:null,url:M}},components:{BugerNav:fe,QuestionsVue:wn,FinalPageVue:Qn},async beforeCreate(){await On.get(`${M}/api/profile`).catch((e=>{console.log(e),this.$router.push("/login")}))},methods:{ansQuest(e){this.first?(this.first=!1,e?(this.question=yn["Cal"].question[0],this.answerOne="Да",this.answerTwo="Нет",this.node=yn["Cal"]):(this.question=yn["OphC"].question[0],this.answerOne="Да",this.answerTwo="Нет",this.node=yn["OphC"])):e?this.node.child?(this.node=yn[this.node.child],this.question=this.node.question[0]):(this.finMessage="Поздравляем!",this.final=this.node.answer,this.end=!0):this.node.next?(this.node=yn[this.node.next],this.question=this.node.question[0]):(this.finMessage="Отправьте результат",this.final="Не удалось определить",this.end=!0)},pickFile(e){this.question="Передние и задние крылья",this.answerOne=yn["Zyg"].question[0],this.answerTwo=yn["Ani"].question[0],this.final=null,this.finMessage=null,this.first=!0,this.end=!1,navigator.geolocation.getCurrentPosition((n=>{this.latitude=n.coords.latitude,this.longitude=n.coords.longitude;try{const n=URL.createObjectURL(e.target.files[0]);this.img=n,this.show=!0}catch(s){console.log(s)}}),(e=>{alert("Включите на устройстве геолокаицю")}))},async finSend(e){const n=document.querySelector(".input").files[0],s=new FormData;s.append("image",n),s.append("location",`${this.latitude} ${this.longitude}`),s.append("dragon","NameDrag1"),await On.post(`${this.url}/api/profile/send`,s).catch((e=>console.log(e.message))),this.$router.push({path:"/profile"})}}};const Xn=(0,h.A)($n,[["render",pn],["__scopeId","data-v-15486f14"]]);var Pn=Xn;const Mn={class:"conteiner"},Nn={class:"search"},In={class:"dragonflys"};function Bn(e,n,s,i,r,o){const l=(0,a.g2)("BugerNav"),u=(0,a.g2)("Dragonfly"),c=(0,a.g2)("router-link"),d=(0,a.g2)("DragonCompWait");return(0,a.uX)(),(0,a.CE)("div",Mn,[(0,a.bF)(l,{class:"burgerNav"}),(0,a.Lk)("div",Nn,[(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>r.search=e),placeholder:"Поиск"},null,512),[[t.Jo,r.search]])]),(0,a.Lk)("div",In,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.itemsFil,(e=>((0,a.uX)(),(0,a.CE)("div",{class:"dragon",key:e.dragon},[(0,a.bF)(c,{class:"link",to:{path:`/library/${e.dragon}`}},{default:(0,a.k6)((()=>[(0,a.bF)(u,{item:e.dragon},null,8,["item"])])),_:2},1032,["to"])])))),128)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.itemsW,(e=>((0,a.uX)(),(0,a.CE)("div",{class:"waiting",key:e.name},[(0,a.bF)(c,{class:"link",to:{path:`/library/${e.name}`}},{default:(0,a.k6)((()=>[(0,a.bF)(d,{item:e},null,8,["item"])])),_:2},1032,["to"])])))),128))])])}const jn={class:"dragonComp"},Vn={class:"imag"},Tn=["src"],Wn={class:"name"};function Dn(e,n,s,t,i,r){return(0,a.uX)(),(0,a.CE)("div",jn,[(0,a.Lk)("div",Vn,[(0,a.Lk)("img",{src:r.getPath()},null,8,Tn)]),(0,a.Lk)("div",Wn,[(0,a.Lk)("p",null,(0,b.v_)(s.item.name),1)])])}var Un={props:{item:{type:Object,reqired:!0}},methods:{getPath(){return`https://collector35.ru/api/profile/waiting/${this.item.image}`}}};const Jn=(0,h.A)(Un,[["render",Dn],["__scopeId","data-v-7b0fc55a"]]);var Gn=Jn;const Rn=r.A.create({withCredentials:!0});var Kn={components:{BugerNav:fe,Dragonfly:De,DragonCompWait:Gn},async beforeCreate(){await Rn.get(`${M}/api/profile/catched`).then((e=>{this.items=e.data})),await Rn.get(`${M}/api/profile/waiting`).then((e=>{this.itemsW=e.data}))},data(){return{search:"",items:[],itemsW:[],url:M}},computed:{itemsFil(){const e=this.items.filter((e=>e.dragon.toLowerCase().includes(this.search.toLowerCase())));return null===this.search?this.items:e}}};const Zn=(0,h.A)(Kn,[["render",Bn],["__scopeId","data-v-65af05f2"]]);var zn=Zn,Hn=(0,w.aE)({history:(0,w.Bt)(),routes:[{path:"/",component:Oe},{path:"/login",component:Z},{path:"/reg",component:j},{path:"/profile",component:ye},{path:"/profile/post",component:Pn},{path:"/profile/catched",component:zn},{path:"/library",component:Re},{path:"/library/:name",component:tn}]});(0,t.Ef)(f).use(Hn).mount("#app")}},n={};function s(t){var a=n[t];if(void 0!==a)return a.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(n,t,a,i){if(!t){var r=1/0;for(c=0;c<e.length;c++){t=e[c][0],a=e[c][1],i=e[c][2];for(var o=!0,l=0;l<t.length;l++)(!1&i||r>=i)&&Object.keys(s.O).every((function(e){return s.O[e](t[l])}))?t.splice(l--,1):(o=!1,i<r&&(r=i));if(o){e.splice(c--,1);var u=a();void 0!==u&&(n=u)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,a,i]}}(),function(){s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,{a:n}),n}}(),function(){s.d=function(e,n){for(var t in n)s.o(n,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e={524:0};s.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,i,r=t[0],o=t[1],l=t[2],u=0;if(r.some((function(n){return 0!==e[n]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(l)var c=l(s)}for(n&&n(t);u<r.length;u++)i=r[u],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(c)},t=self["webpackChunkdragonfly"]=self["webpackChunkdragonfly"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=s.O(void 0,[504],(function(){return s(5924)}));t=s.O(t)})();
//# sourceMappingURL=app.2ad0777d.js.map