class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SL{
    constructor(){
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    push(val){
        var node = new Node(val);
        if(this.length <= 0){
            this.head = node;
            this.tail = this.head;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length == 0) return this;
       var currentNode = this.head;
        var prevNode = currentNode;
        while(currentNode.next){
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = null;
        this.tail = prevNode;
        this.length--;
        if(this.length ==0){
            this.head = null;
            this.tail = this.head;
        }
        return this;
    }

    shift(){
        if(this.length == 0 ) return this;
        var removedNode = this.head;
        var nextNode = removedNode.next;
        this.head = nextNode;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }

    unShift(val){
        if(this.length == 0) return this.push(val);
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index){
        if(index > this.length || this.length <=0) return null;
        if(index == 0) return this.head;

        let counter = 0;
        let currentNode = this.head;
        while(index != counter){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
        
    }


    insert(index, val){
        if(this.length == 0 || index <= 0 || index > this.length) return null;
        if(index == 0) return this.unShift(val);
        if(index == this.length-1) return this.push(val);
        var newNode = new Node(val);
        var prevNode = this.get(index-1);
        var nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode=nextNode;
        this.length++;
        return this;
    }

    reverse(){
        if(this.length == 0) return this;
        var tempNode = this.head;
        this.head = this.tail;
        this.tail = tempNode;
        var prev = null;
        var next ;
        for(var i =0; i<this.length; i++){
            next = tempNode.next;
            tempNode.next = prev;
            prev= tempNode;
            tempNode = next;
        }
        this.currentList();
    }
    
    currentList(){
        return this;
    }
}

var sl = new SL();
sl.push(2).push(3).push(4).push(5);
sl.pop();
