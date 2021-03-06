fun.Router = Backbone.Router.extend({

    /*
     Seed routes
    */
    routes: {
        "": "home",
        "home": "home",
        "landing": "landing",
        "signup": "signup",
        "login": "login",

        "dashboard": "dashboard",        
        "dashboard/a:account": "dashboard",
        "dashboard/a:account/o:org": "dashboard",

        "vaping-guide": "vapingGuide",
        "industry-research": "industryResearch",
        "filling-tank": "fillingTank",
        "filling-cartomizers":"fillingCartomizers",
        "about-rebuildables": "aboutRebuildables",
        "coil-building": "coilBuilding",
        "rda-w-cotton-agi":"rdaWcottonAgi",
        "building-rba-kayfun":"buildingRbaKayfun",
        "dual-helios": "dualHelios",

        "box-mods": "boxMods",
        "import-mods": "importMods",
        "highend": "highend",
        "ecigars": "ecigars",
        "starter-kits": "starterKits",
        "batteries": "batteries",
        "atomizers": "atomizers",
        "dripping": "dripping",
        "tanks": "tanks",

        "andirondack": "andirondack",
        "ism": "ism",
        "kingcloud": "kingcloud",
        "fogsbrew": "fogsbrew",
        "jetfuel": "jetfuel",
        "coils": "coils",
        "dryherb": "dryherb",
        "waxcdb": "waxcdb",
        "novelty": "novelty",

        "reports": "reports",
        "reports/p:page": "reports",

        "settings": "settings",
        "logout": "logout"
    },
 
    initialize: function(options){
        //this.appView = options.appView;
    
        // navigation bar
        fun.instances.navbar = new fun.views.navbar({
            el:"#fun-navbar"
        });

        // sub header
        fun.instances.subheader = new fun.views.subheader({
            el:"#fun-subheader"
        });

        // landing
        fun.instances.landing = new fun.views.landing({
            el:"#fun-landing"
        });

        // login
        fun.instances.login = new fun.views.login({
            el:"#fun-login"
        });

        // dashboard
        fun.instances.dashboard = new fun.views.dashboard({
            el:"#fun-dashboard"
        });

        // reports
        fun.instances.reports = new fun.views.reports({
            el:"#fun-reports"
        });

        // signup
        fun.instances.signup = new fun.views.signup({
            el:"#fun-signup"
        });
        
        // settings
        fun.instances.settings = new fun.views.settings({
            el:"#fun-settings"
        });

        // vaping guide
        fun.instances.vapingGuide = new fun.views.vapingGuide({
            el:"#fun-vaping-guide"
        });

        // industry research
        fun.instances.industryResearch = new fun.views.industryResearch({
            el:"#fun-industry-research"
        });

        // filling-tank
        fun.instances.fillingTank = new fun.views.fillingTank({
            el:"#fun-filling-tank"
        });

        // filling-cartomizers
        fun.instances.fillingCartomizers = new fun.views.fillingCartomizers({
            el:"#fun-filling-cartomizers"
        });

        // about-rebuildables
        fun.instances.aboutRebuildables = new fun.views.aboutRebuildables({
            el:"#fun-about-rebuildables"
        });

        // coil-building 
        fun.instances.coilBuilding = new fun.views.coilBuilding({
            el:"#fun-coil-building"
        });

        // rda-w-cotton-agi 
        fun.instances.rdaWcottonAgi = new fun.views.rdaWcottonAgi({
            el:"#fun-rda-w-cotton-agi"
        });

        // building-rba-kayfun
        fun.instances.buildingRbaKayfun = new fun.views.buildingRbaKayfun({
            el:"#fun-building-rba-kayfun"
        });

        // dual-helios
        fun.instances.dualHelios = new fun.views.dualHelios({
            el:"#fun-dual-helios"
        });

        // box-mods
        fun.instances.boxMods = new fun.views.boxMods({
            el:"#fun-box-mods"
        });

        // import mods
        fun.instances.importMods = new fun.views.importMods({
            el:"#fun-import-mods"
        });

        // highend
        fun.instances.highend = new fun.views.highend({
            el:"#fun-highend"
        });

        // ecigars
        fun.instances.ecigars = new fun.views.ecigars({
            el:"#fun-ecigars"
        });

        // starter-kits
        fun.instances.starterKits = new fun.views.starterKits({
            el:"#fun-starter-kits"
        });

        // batteries
        fun.instances.batteries = new fun.views.batteries({
            el:"#fun-batteries"
        });

        // atomizers
        fun.instances.atomizers = new fun.views.atomizers({
            el:"#fun-atomizers"
        });

        // dripping
        fun.instances.dripping = new fun.views.dripping({
            el:"#fun-dripping"
        });

        //tanks
        fun.instances.tanks = new fun.views.tanks({
            el:"#fun-tanks"
        });

        //andirondack
        fun.instances.andirondack = new fun.views.andirondack({
            el:"#fun-andirondack"
        });

        //ism
        fun.instances.ism = new fun.views.ism({
            el:"#fun-ism"
        });

        //kingcloud
        fun.instances.kingcloud = new fun.views.kingcloud({
            el:"#fun-kingcloud"
        });

        //fogsbrew
        fun.instances.fogsbrew = new fun.views.fogsbrew({
            el:"#fun-fogsbrew"
        });

        //jetfuel
        fun.instances.jetfuel = new fun.views.jetfuel({
            el:"#fun-jetfuel"
        });

        //coils
        fun.instances.coils = new fun.views.coils({
            el:"#fun-coils"
        });

        //dryherb
        fun.instances.dryherb = new fun.views.dryherb({
            el:"#fun-dryherb"
        });

        //waxcdb
        fun.instances.waxcdb = new fun.views.waxcdb({
            el:"#fun-waxcdb"
        });

        //novelty
        fun.instances.novelty = new fun.views.novelty({
            el:"#fun-novelty"
        });

        // footer
        fun.instances.footer = new fun.views.footer({
            el:"#fun-footer"
        });
    },

    home: function(){
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.redirect(fun.conf.hash.landing);
        }
    },
    
    landing: function(){
        fun.utils.hideAll();
        fun.utils.showLanding();
        //fun.instances.navbar.render();
        //fun.instances.landing.render();
        fun.instances.footer.render();
    },

    vapingGuide: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.vapingGuide.render();
        fun.instances.footer.render();
    },

    industryResearch: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.industryResearch.render();
        fun.instances.footer.render();
    },

    fillingTank: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.fillingTank.render();
        fun.instances.footer.render();
    },

    fillingCartomizers: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.fillingCartomizers.render();
        fun.instances.footer.render();
    },

    aboutRebuildables: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.aboutRebuildables.render();
        fun.instances.footer.render();
    },

    coilBuilding: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.coilBuilding.render();
        fun.instances.footer.render();
    },

    rdaWcottonAgi: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.rdaWcottonAgi.render();
        fun.instances.footer.render();
    },

    buildingRbaKayfun: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.buildingRbaKayfun.render();
        fun.instances.footer.render();
    },

    dualHelios: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.dualHelios.render();
        fun.instances.footer.render();
    },

    boxMods: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.boxMods.render();
        fun.instances.footer.render();
    },

    importMods: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.importMods.render();
        fun.instances.footer.render();
    },

    highend: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.highend.render();
        fun.instances.footer.render();
    },

    ecigars: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.ecigars.render();
        fun.instances.footer.render();
    },

    starterKits: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.starterKits.render();
        fun.instances.footer.render();
    },

    batteries: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.batteries.render();
        fun.instances.footer.render();
    },

    atomizers: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.atomizers.render();
        fun.instances.footer.render();
    },

    dripping: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.dripping.render();
        fun.instances.footer.render();
    },

    tanks: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.tanks.render();
        fun.instances.footer.render();
    },

    andirondack: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.andirondack.render();
        fun.instances.footer.render();
    },

    ism: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.ism.render();
        fun.instances.footer.render();
    },

    kingcloud: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.kingcloud.render();
        fun.instances.footer.render();
    },

    fogsbrew: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.fogsbrew.render();
        fun.instances.footer.render();
    },

    jetfuel: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.jetfuel.render();
        fun.instances.footer.render();
    },

    coils: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.coils.render();
        fun.instances.footer.render();
    },

    dryherb: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.dryherb.render();
        fun.instances.footer.render();
    },

    waxcdb: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.waxcdb.render();
        fun.instances.footer.render();
    },

    novelty: function(){
        fun.utils.hideAll();
        fun.utils.hideLanding();
        fun.instances.novelty.render();
        fun.instances.footer.render();
    },

    dashboard: function(){
        fun.utils.hideAll();
        fun.utils.showLanding();
        //fun.instances.navbar.render();
        //fun.instances.landing.render();
        fun.instances.footer.render();
    },

    signup: function(){
        var signup = translate('signup');
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.hideAll();
            fun.instances.navbar.render();
            fun.instances.subheader.render('Signup');
            fun.instances.signup.render();
        }
        //fun.instances.footer.render();
    },
    
    login: function(){
        var login = translate('login');
        if(fun.utils.loggedIn()){
            fun.utils.redirect(fun.conf.hash.dashboard);
        } else {
            fun.utils.hideAll();
            fun.instances.navbar.render();
            //fun.instances.subheader.render(login);
            fun.instances.login.render();
        }
        //fun.instances.footer.render();
    },

    reports: function(page){
        'use strict';
        if(fun.utils.loggedIn()){

            fun.utils.hideAll();

            fun.instances.navbar.render();

            fun.instances.reports.render();
        } else {
            fun.utils.redirect(fun.conf.hash.login);
        }
        
        //fun.instances.footer.render();
    },

    settings: function(){
        var settings = translate('settings');
        fun.utils.hideAll();
        fun.instances.navbar.render();
        fun.instances.subheader.render(settings);
        fun.instances.settings.render();
        //fun.instances.footer.render();
    },

    logout: function(){
        var goodBye = translate('goodBye');
        fun.utils.logout();
        fun.utils.hideAll();
        fun.instances.navbar.render()
        fun.instances.subheader.render(goodBye);      
        fun.instances.login.render();
        //fun.instances.footer.render();
    }

});

// init the shit out of this
$(function(){
    fun.instances.router = new fun.Router();
    Backbone.history.start();
});