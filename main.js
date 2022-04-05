// console.log("Hello world")

const person = {
    firstName: "Tori",
    lastName: "Daughton",
    age: 26,
}

// console.log(person.firstName)

// console.log(person["lastName"])

const {firstName: myName} = person

// console.log(myName)

const meal = {
    appetizer: "Pot Stickers",
    entree: "Massaman Curry",
    dessert: "Rice Pudding",
    drink: "Thai tea",
}


// Making a new variable called dessert, whose value comes from the dessert property on the meal object.
// const {dessert} = meal


// console.log(dessert)

// const{appetizer, dessert} = meal
// 
// console.log(dessert, appetizer)

// const {drink: myDrink} = meal

// console.log(myDrink)

// //Giving each value an alias
// const {drink: myDrink, entree: myCurry, dessert: myDessert, appetizer: myStarter} = meal

// // console.log(myDrink, myCurry, myDessert, myStarter)


// for(const key in person){
//     // console.log(person[key])
//     console.log(key, person, person[key])
// }


person.job = "Rad Tech";


person['pet'] = "calico"
// console.log(person)

delete person.pet

/**
 let this = {}
 */

class Dog {
    constructor(dogName, dogBreed, dogAge){
        // console.log(`Dog class`, dogName, dogBreed, dogAge,)
        this.name = dogName;
        this.breed = dogBreed;
        this.age =dogAge;

        this.toys = [];
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} year old ${this.breed}`);
    }
    addToy(toy){
        this.toys.push(toy);
    }
}


const lassie = new Dog(`Lassie`, `Collie`, 10);
const beethoven = new Dog(`Beethoven`, `St. Bernanrd`, 12)
// lassie.greeting()
// console.log(lassie)
console.log(lassie)
lassie.addToy("bone")
console.log(lassie)



class Puppy extends Dog {
    constructor(dogName, dogBreed, dogAge, puppyTrainingLevel){
        // console.log(`Puppy class`, dogName, dogBreed, dogAge, puppyTrainingLevel)
        super(dogName, dogBreed, dogAge)
        
        this.trainingLevel = puppyTrainingLevel
    }
    levelUp(num){
        this.trainingLevel += num
    }

    greeting(){
        super.greeting()
        console.log("and I am a puppy!")
    }
}

const leo = new Puppy("Leo", "Labradoodle", 1, 0)


console.log(leo)
// leo.greeting()
// leo.levelUp(2)
// console.log(leo)
