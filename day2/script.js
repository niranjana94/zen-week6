var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var pet = /** @class */ (function () {
    function pet(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.color = obj.color;
        this.breed = obj.breed;
        this.history = obj.history;
        this.place = obj.place;
    }
    return pet;
}());
var petrequest = /** @class */ (function () {
    function petrequest() {
        this.enquiry = [];
    }
    petrequest.prototype.enquirylist = function (enq) {
        this.enquiry.push(enq);
        //console.log(this.enquiry);
    };
    return petrequest;
}());
var petavailabitlity = /** @class */ (function (_super) {
    __extends(petavailabitlity, _super);
    function petavailabitlity() {
        var _this = _super.call(this) || this;
        _this.pets = [];
        return _this;
    }
    petavailabitlity.prototype.insert = function (obj) {
        this.pets.push(obj);
        //console.log(this.pets);
    };
    petavailabitlity.prototype.count = function () {
        var petcount = this.pets.reduce(function (a, v) { return (a[v.breed] ? a[v.breed]++ : 1); }, 0);
        return petcount;
        //console.log(petcount);
    };
    petavailabitlity.prototype.status = function () {
        var res = [];
        for (var index = 0; index < 5 && index < this.enquiry.length; index++) {
            var check = this.available(this.enquiry[index]);
            res.push(check);
        }
        return res;
        //console.log(res);
    };
    petavailabitlity.prototype.available = function (enquire) {
        var pets = [];
        console.log(enquire);
        var _loop_1 = function (i) {
            //console.log(Object.keys(enquire));
            //pets.push( this.pets.filter(ele => ele.breed === enquire[i]['breed']));
            this_1.pets.forEach(function (pet) {
                var check = Object.keys(enquire).every(function (check) { return enquire[i][check] === pet[check]; });
                //console.log(check);
                pets.push(pet.name);
            });
        };
        var this_1 = this;
        for (var i in enquire) {
            _loop_1(i);
        }
        return pets;
        /*const isBelowThreshold = (currentValue) => currentValue < 40;

        const array1 = [1, 30, 39, 29, 10, 13];
        
        console.log(array1.every(isBelowThreshold));*/
    };
    return petavailabitlity;
}(petrequest));
var petshop = new petavailabitlity();
var pet1 = new pet({
    name: 'Puppy1',
    age: 1,
    color: 'white',
    breed: 'Dog',
    history: 'new born',
    place: 'Bangalore'
});
var pet2 = new pet({
    name: 'Puppy2',
    age: 2,
    color: 'grey',
    breed: 'Dog',
    history: 'None',
    place: 'chennai'
});
petshop.insert(pet1);
petshop.insert(pet2);
//petshop.enquirylist([{breed:'Dog',color:'white'}]);
//petshop.count();
//petshop.status();
