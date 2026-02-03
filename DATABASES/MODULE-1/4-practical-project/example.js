function example() {
    const father = {
      children: [],
    };
    
    const son = {};
    const daughter = {};
  
    father.children.push(son);
    father.children.push(daughter);
  
    console.log(father.children);
  
    son.name = "Ola";
    daughter.name = "Kari";
    console.log(father.children);
  
    const mother = {};
  
    father.partner = mother;
    mother.name = "Sofia";
    console.log(father);
  }