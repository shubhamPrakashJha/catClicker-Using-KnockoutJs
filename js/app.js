var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.nicknames = ko.observableArray(["Tabtab","T-boe","Mr. T","Catty"]);
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

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function () {
        this.currentCat().clickCount(this.currentCat().clickCount() +1);
    };
};

ko.applyBindings(new ViewModel());