//Implement a Polygon class
class Polygon{

  // Constructor that take an array of integer side lengths  
    constructor(array){
      this.array =  array;
    }
       perimeter(){
           let res = 0;
           for(let i = 0; i < this.array.length; i++){
               res += this.array[i];

           } return res;
       }
    }
