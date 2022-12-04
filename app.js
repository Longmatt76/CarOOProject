class Vehicle{
constructor(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}
honk(){
    return "Beep";
};
toString(){
   return `make ${this.make},model ${this.model},year ${this.year}`;
}

};

class Car extends Vehicle{
    constructor(make,model,year){
    super(make,model,year);
    this.numWheels = 4;
    };
};

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!";
    }
};

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    };
    add(newVehicle){
        if(!newVehicle instanceof Vehicle){
            return "Only vehicles allowed here buddy!"
        }
         if(this.vehicles.length >= this.capacity){
        return "Sorry, were full"
    };        
      this.vehicles.push(newVehicle);  
           return "Vehicle added!"
        };
    }
