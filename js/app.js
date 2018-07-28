var initialCats = [
    {
        name: "Tabby",
        clickCount: 0,
        imgSrc: "img/22252709_010df3379e_z.jpg",
        nicknames: ["Tabtab","T-boe","Mr. T","Catty"]
    }, {
        name: "Appy",
        clickCount: 0,
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        nicknames: ["App"]
    }, {
        name: "Scaredy",
        clickCount: 0,
        imgSrc: "img/1413379559_412a540d29_z.jpg",
        nicknames: ["Sleepy"]
    },{
        name: "Tiger",
        clickCount: 0,
        imgSrc: "img/1413379559_412a540d29_z.jpg",
        nicknames: ["tuktuk"]
    },{
        name: "Rony",
        clickCount: 0,
        imgSrc: "img/1413379559_412a540d29_z.jpg",
        nicknames: ["Rondu"]
    }
];

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observableArray(data.nicknames);
    // this.imgAttribution = ko.observable("")

    this.levels = ko.computed(function () {
        if(this.clickCount() < 3){
            // console.log(this.clickCount());
            return "Newborn";
        } else if (this.clickCount() < 10){
            return "Infant";
        }else if(this.clickCount() <20){
            return "Teen";
        }else if(this.clickCount() <30){
            return "Adult";
        } else {
            return "Ninja";
        }
    }, this)
};


var ViewModel = function () {
    self = this;

    this.catList = ko.observableArray([]);

    self.changeCat = function (data) {
        // console.log(data);
        self.currentCat(data);
    };

    initialCats.forEach(function (catObject) {
        self.catList.push(new Cat(catObject));
    });

    self.currentCat = ko.observable(self.catList()[0]);

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() +1);
    };
};

ko.applyBindings(new ViewModel());