
var animalPopulation = 0;

function run(){
    var tigger = new Tiger("tigger");

    var pooh = new Bear ("pooh");

    var rarity = new Unicorn("rarity");

    var gemma = new Giraffe("gemma");

    var stinger = new Bee("stinger");

    var animals = [tigger,pooh,rarity,gemma,stinger];

    var zoebot = new Zookeeper("Zoebot");
    zoebot.feedAnimals(animals,"meat");
    Animal.getPopulation();


}


class  Animal {
    constructor(name,favFood){
        this.name = name;
        this.favFood = favFood;
        animalPopulation++;
    }
    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {


        if (food == this.favFood) {
            console.log(this.name + " eats " + food);
            console.log("YUM!! " + this.name + " wants more " + food);
        } else {
            console.log(this.name + " eats " + food);
            this.sleep();
        }
    }
    static getPopulation() {
        console.log( "Population: " + animalPopulation);
    }
}

class Tiger extends Animal {
    constructor(name) {
        super("Tiger");
        this.name = name;
        this.favFood = "meat";
    }
}

class Bear extends Animal{
    constructor(name){
        super("Bear");
        this.name = name;
        this.favFood="fish";
    }
    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal{
    constructor(name){
        super("Unicorn");
        this.name = name;
        this.favFood = "marshmallows";
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super("Giraffe");
        this.name = name;
        this.favFood = "leaves";
    }

    eat(food) {
        if (food == "leaves") {
            super.eat("leaves");
        } else {
            console.log("YUCK!! " + this.name + " will not eat " + food);
        }
    }
}

class Bee extends Animal{
    constructor(name){
        super("Bee");
        this.name = name;
        this.favFood = "pollen";
    }
    eat (food) {
        if (food == "pollen") {
            super.eat("pollen");
        } else {
            console.log("YUCK!! " + this.name + " will not eat " + food);
        }
    }
        sleep(){
            console.log(this.name + " never sleeps");
        }
}

class Zookeeper{
    constructor(name){
        this.name = name;
    }
    feedAnimals(animals,food){
        console.log(this.name + " is feeding "+ food + " to " + animals.length +" animals out of " + animalPopulation +
            " total animals");
        for (var i = 0; i < animals.length; i++){
            animals[i].eat(food);
        }
    }
}

