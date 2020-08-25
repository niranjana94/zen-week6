class pet {
    name: string;
    age: number;
    color: string;   
    breed: string;
    history: string;
    place :string;

    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.color = obj.color;
        this.breed = obj.breed;
        this.history = obj.history;
        this.place = obj.place;

    }
}

class petrequest {
    enquiry:object[][] =[];
    constructor() {        
    }
    enquirylist(enq : object[])
    {
        this.enquiry.push(enq);
        //console.log(this.enquiry);
    }
}

class petavailabitlity extends petrequest{
    pets: pet[] = [];

    constructor() {  
        super();      
    }

    insert(obj:pet)
    {
        this.pets.push(obj);
        //console.log(this.pets);
    }

    count(){
        let petcount = this.pets.reduce((a, v) => ( a[v.breed]  ? a[v.breed]++ : 1), 0);
        return petcount;
        //console.log(petcount);
    }

    status(){
        let res = [];
        for(let index = 0;index<5 && index<this.enquiry.length;index++)
        {
            let check = this.available(this.enquiry[index]);
            res.push(check);
        }
        return res;
        //console.log(res);
    }

    available(enquire :object[])
    {
        let pets =[]; 
        console.log(enquire);
        for(let i in enquire)
        {
        //console.log(Object.keys(enquire));
        //pets.push( this.pets.filter(ele => ele.breed === enquire[i]['breed']));
        
        this.pets.forEach(pet =>{
            let check = Object.keys(enquire).every(check => enquire[i][check] === pet[check]);
             //console.log(check);
             pets.push(pet.name);

        });
        }
        return pets;
       
      
        /*const isBelowThreshold = (currentValue) => currentValue < 40;

        const array1 = [1, 30, 39, 29, 10, 13];
        
        console.log(array1.every(isBelowThreshold));*/
    }
}


let petshop = new petavailabitlity();

let pet1 = new pet({
    name: 'Puppy1',
    age: 1,
    color: 'white',   
    breed: 'Dog',
    history: 'new born',
    place :'Bangalore'

});

let pet2 = new pet({
    name: 'Puppy2',
    age: 2,
    color: 'grey',   
    breed: 'Dog',
    history: 'None',
    place :'chennai'

});

petshop.insert(pet1);
petshop.insert(pet2);

//petshop.enquirylist([{breed:'Dog',color:'white'}]);

//petshop.count();

//petshop.status();







   
    