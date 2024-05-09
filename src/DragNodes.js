const nodes = {
    CalV:{
        help:"Pterostigma",
        question:["Окраска тела самоцов голубоватая или синяя с металлическим отливом. Крылья почти полностью окрашены в мет. миний или голубоватый. Окраска самок зеленоватый с мет. блеском. Жилкование крыльев имеет бурый цвет.На месте птеростигмы белое пятно."],
        answer:"Calopteryx virgo",

        next: "CalS",
        child:null,
    },
    CalS:{
        help:"Pterostigma",
        question:["Окраска тела самцов голубоватая или синяя, с металлическим отливом, при этом синяя окраска есть лишь в центральной части крыла, основание и конец крыльев прозрачные. Самки зеленоватые с металлическим блеском. Жилкование крыльев имеет зеленовато-металлический цвет. На месте птеростигмы белое пятно."],
        answer:"Calopteryx splendens",

        next: null,
        child: null,
    },
    Cal:{
        help:null,
        question:["Тело метал. блестящее, зеленое или голубое. Основание крыльев широкое, нестебельчатое"],
        answer:"Calopteryx",

        next: "LesS",
        child: "CalV",
    },
    LesS:{
        help:"Pterostigma",
        question:["Птеростигма равна двум ячейкам, расположенным под ней. Грудка и брюшко сверху ясно металлически блестящие, зеленоватые, никогда не имеют ясно очерченного темного рисунка"],
        answer:"Lestes sponsa",

        next: "PlaP",
        child: null,
    },
    PlaP:{
        help:null,
        question:["Окраска тела светло голубые, у самцов. Самки имеют светлую окраску. Имеют широкую голову, втрое шире длины. А также имеют расширенные голени средних и задних конечностей."],
        answer:"Platycnemis pennipes", 

        next: "CoedaE",
        child:null,
    },
    PyrN:{
        help:null,
        question:["Брюшко у особей обоих полов имеет красную или охристо-желтую окраску с черным рисунком. Есть светлоокрашенная доплечевая полоса. Глаза самцов также красные."],
        answer:"Pyrrhosoma nymphula",

        next: "EryN",
        child:null,
    },
    EryN:{
        help:null,
        question:["Окраска тела самцов голубая, брюшко сверху бронзово-черного цвета с металлическим блеском. Глаза красные."],
        answer:"Erythromma najas",

        next: "CoeioN",
        child:null,
    },
    CoedaE:{
        help:"Pterostigma",
        question:["Птеростигма короткая, её длина равна одной ячейке, расположенной под ней"],
        answer:"Conenagrionidae",

        next: null,
        child:"PyrN",
    },
    CoeioN:{
        help:"Pterostigma",
        question:["Птеростигма на обоих крыльях одноцветная, Самцы имеют, как правило, полностью голубую окраску, самки - зелёную. Металлический отлив отсутствует."],
        answer:"Coenagrion",

        next: null,
        child:null,
    },
    Zyg:{
        help:null,
        question:["Одинаковые по форме и жилкованию, прикрепляются к туловищу на протяжении всего основани"],
        answer:"Zygoptera",

        next: null,
        child:"Cal",
    },
    Ani:{
        help:null,
        question:["неодинаковы по форме и жилкованию: задние в основании гораздо уже, чем передние. Задние прикрепляются к туловищу лишь частью основания."],
        answer:"Anisoptera",

        next: null,
        child:"OphC",
    },
    OphC:{
        help:"Eyes 1",
        question:["Глаза не соприкасаются, полностью разделены промежутком Ноги длинные, брюшко желтое, грудь светло-салатно-зеленая"],
        answer:"Ophiogomphus cecilia",

        next: "OnyF",
        child:null,
    },
    OnyF:{
        help:null,
        question:["Ноги короткие, грудь желтоватая или коричневая, брюшко чёрное, с желтыми пятнами на верхней части. У самцов анальные придатки длинные, образуют подобие трехзубых клещей"],
        answer:"Onychogomphus forcipatus",

        next: "GomV",
        child:null,
    },
    GomV:{
        help:null,
        question:["Верхняя поверхность брюшко чёрное, с продольной желтой полосой на верхней части. Брюшко на конце имеет явно булавовидную форму"],
        answer:"Gomphus vulgatissimus",

        next: "CorB",
        child:null,
    },
    CorB:{
        help:"Eyes 3",
        question:["Глаза соприкасаются только в одной точке. Окраска тела желтая с ярко-жёлтыми поперечными и косыми полосами в области брюшка и груди"],
        answer:"Cordulegaster boltonii",

        next: "AniQ1",
        child:null,
    },
    AniQ1:{
        help:"Eyes 2",
        question:["Глаза полностью соприкасаются. Тело имеет зеленый металлический оттенок."],

        next: "AniQ2",
        child: "CorA",
    },
    CorA:{
        help:null,
        question:["Лоб не имеет жёлтых пятен ни с верхней части, ни по бокам головы"],
        answer:"Cordulia aenea",

        next: "SomM",
        child:null,
    },
    SomM:{
        help:null,
        question:["Имеются жёлтые пятна по бокам головые, соединённые желтой линией"],
        answer:"Somatochlora metallica",

        next: null,
        child:null,
    },
    AniQ2:{
        help:"Eyes 2",
        question: ["Глаза полностью соприкасаются. Тело не имеет металлического оттенка"],

        next: null,
        child:"AniQ3",
    },
    AniQ3:{
        help:null,
        question: ["Крупные стрекозы, длина тела больше 6 см. Размах крыльев около 8 см"],

        next: "AniQ4",
        child: "AesG",
    },
    AesG:{
        help:null,
        question:["Крупная стрекоза, длина тела 7-8 см, тело сверху коричневое, с заметными голубоватыми пятнами у основания крыльев. Жилкование крыльев рыже-коричневое"],
        answer:"Aeshna grandis",

        next: "Aes",
        child:null,
    },
    Aes:{
        help:null,
        question:["Крупная стрекоза, 7-8 см в длину, окраска тела голубая у самцов, зелёная - у самок."],
        answer:"Aeshna",

        next: null,
        child:null,
    },
    AniQ4:{
        help:null,
        question:["Менее крупные особи, длина тела на превышает 5 см"],

        next: null,
        child: "Sym",
    },
    Sym:{
        help:null,
        question:["Длина тела обычно равна 3-4 см, отличительный признак - брюшко явно сжато с боков"],
        answer:"Sympetrum",

        next: "Lib",
        child: "SymD",
    },
    SymD:{
        help:null,
        question:["Тело желтое, с широкой черной полосой по бокам. Окраска тела взрослых самцов полностью чёрная"],
        answer:"Sympetrum danae",

        next: "SymF",
        child:null,
    },
    SymF:{
        help:null,
        question:["Оба пола легко узнаются по наличию по крупным пятнам янтарного цвета в основании задних крыльев. Окраска тела самцов рыжеватая, у самок - желтая"],
        answer:"Sympetrum flaveolum",

        next: "SymS",
        child:null,
    },
    SymS:{
        help:null,
        question:["Окраса тела самцов кроваво-красного цвета, самки имеют желтоватую окраску. Оба пола имеют черные продольные полосы вдоль брюшка"],
        answer:"Sympetrum sanguineum",

        next: null,
        child:null,
    },
    Lib:{
        help:null,
        question:["Длина тела в среднем около 5 см, отличительный признак - тело плоское, уплощено в вертикальном положении."],
        answer:"Libellula",

        next: null,
        child:"LibQ",
    },
    LibQ:{
        help:null,
        question:["Стрекоза средних размеров, 3-4 см в длину. Отличительный признак, наличие темных пятен в узлах крыльев"],
        answer:"Libellula quadrimaculata",

        next: "LibD",
        child:null,
    },
    LibD:{
        help:null,
        question:["Стрекоза размером около 3 см, отличается сильно уплощённым и широким брюшком. Самцы имеют голубую окраску брюшка, самки - жёлтую"],
        answer:"Libellula depressa",

        next: null,
        child:null,
    },

};

export default nodes;