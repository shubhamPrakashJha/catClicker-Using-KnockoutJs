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
    this.currentCat = ko.observable(new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        nicknames: ["Tabtab","T-boe","Mr. T","Catty"]
    }));

    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() +1);
    };
};

ko.applyBindings(new ViewModel());