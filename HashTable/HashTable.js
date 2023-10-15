class HashTable {
  constructor(size = 50) {
    this.keyMap = new Array(size);
  }
  #_hash(key) {
    const PRIME_NUMBER = 13;
    let keySlot = 0;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      keySlot = Math.abs((keySlot * PRIME_NUMBER + value) % this.keyMap.length);
    }
    return keySlot;
  }

  set(key,value){
    let index = this.#_hash(key);
    if(!this.keyMap[index]){
        this.keyMap[index] = [];
    }
    this.keyMap[index].push([key,value]);
  }

  get(key){
    let index = this.#_hash(key);
    if(this.keyMap[index]){
         for(let i =0; i< this.keyMap[index].length; i++){
            if(this.keyMap[index][i][0] == key){
                return this.keyMap[index][i];
            }
         }
    }
    return undefined;
  }

  keys(){
    let keys = [];
    for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
        for(let j=0;j<this.keyMap[i].length;j++){
            if(!keys.includes(this.keyMap[i][j][0]))
                keys.push(this.keyMap[i][j][0]);
        }
    }
    }
    return keys;
  }

  values(){
    let values = [];
    for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
        for(let j=0;j<this.keyMap[i].length;j++){
            if(!values.includes(this.keyMap[i][j][1]))
                values.push(this.keyMap[i][j][1]);
        }
    }
    }
    return values;
  }
}
let hash = new HashTable(10);
console.log(hash.set("Name","Kartik"));
console.log(hash.set("color","black"));
console.log(hash.set("color","yellow"));
console.log(hash.set("Greetings","Hello! dfg"));
console.log(hash.set("Greetings","Where were you?"));
console.log(hash.set("Greetings","God Bless you."));


console.log(hash.get("Name"));
console.log(hash.get("color"));
console.log(hash.get("color"));
console.log(hash.get("Greetings"));
console.log(hash.get("Greetings"));
console.log(hash.get("Greetings"));

console.log(hash.keys());
console.log(hash.values());
