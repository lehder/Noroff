/* const array = [1, 2, 3, 4, 5, 6];

console.log(array);

const filteredArray = array.filter((item)=> {
    // return true;
   /*  if(item>3) {
        return true;
    } else {
        return false;
    } */
//Podemos hacer esto

 /*    return item > 3;
}); 
 console.log(filteredArray);
 */
 

//Funciona 

/*  const array = [1, 2, 3, 4, 5, 6];

 console.log(array);
 
 const filteredArray = array.filter((item)=> {
    return item > 3
 });

 console.log(filteredArray);
 */
 
/* //complete the forEch to log out all the values in the array.
array.forEach((item) => {
    console.log(item); 
}); */

//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------

/* const recreating = {
    arr: [1, 2, 3, 4, 5, 6],
    forEach: function () {
       for (let i = 0; i < this.arr.length; i++) {
        console.log(this.arr[i]);
       }
    },

};

recreating.forEach((element) => {
    console.log("number: ", element);
})
 */


//-------------------------------------------------------------------------------------const recreating = {
   /*  const recreating = {
    arr: [1, 2, 3, 4, 5, 6],
    forEach: function (callback) {
       for (let i = 0; i < this.arr.length; i++) {
        callback(this.arr[i]);
       }
    },

};

recreating.forEach((element) => {
    console.log("number: ", element);
})
 */

//------------------------------------------------------------------------------------


/* const recreating = {
    arr: [1, 2, 3, 4, 5, 6],
    forEvery: (callback)=> {
        callback(2);
    } 
}

recreating.forEvery((element)=> {
   console.log(element);
});
 */
//2

//------------------------------------------------------------------------------------------

class CustomArray {
    constructor(arr) {
      this.arr = arr;
    }
    forEvery(callback) {
      for (let i = 0; i < this.arr.length; i++) {
        callback(this.arr[i]);
      }
    }
    filter(callback) {
      const newArray = [];
      for (let i = 0; i < this.arr.length; i++) {
        if (callback(this.arr[i])) {
          newArray.push(this.arr[i]);
        }
      }
      return newArray;
    }
    map(callback) {
      const newArray = [];
      for (let i = 0; i < this.arr.length; i++) {
        newArray.push(callback(this.arr[i]));
      }
      return newArray;
    }
  }
  const arr = new CustomArray([23, 42, 13, 74, 29, 32]);
  const filteredArray = arr.filter((item) => {
    return item > 40;
  });
  const doubledArray = arr.map((item) => {
    return item * 2;
  });
  const helloNumbers = arr.map((item) => {
    return "<p>" + item + "</p>";
  }); // say hello to every number
  console.log(filteredArray);
  console.log(doubledArray);
  console.log(helloNumbers);
  
  /* arr.forEvery((item) => {
    console.log(item);
  }); */