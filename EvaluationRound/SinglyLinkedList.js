class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    insert(index,val){
        if(index > this.length || index < 0) return false;
        if(this.length == index) return this.push(val);
       
        var node = new Node(val);
        if(index == 0) {
            var head = this.head;
            node.next = head;
            this.head = node;
        }
        else {
        var previousNode = this.get(index-1);
        var nextNode = previousNode.next;
        
        
        previousNode.next =node;
        node.next = nextNode;
        }
        this.length++;
        return true;
    }

    // 5,10,15,20,25
    //
   rotate(index){
        if(this.length == 0 || index > this.length) return this;
        let newHead,breakingNode;
        let currentHead = this.head;
        
        let currentNode = currentHead;
        let counter =1;
        if(index < 0){
            index = this.length + index;
            if(this.length < 0) return this;
        }
        while(counter != index && currentNode.next != null){
            currentNode = currentNode.next;    
            counter++;
        }
        if(this.length == index){
                newHead = currentNode;
        }
        else{
            newHead = currentNode.next;
        }
        
        currentNode.next = null;
        
        this.head = newHead;
        while(newHead.next !=null){
            newHead = newHead.next;
        }
        newHead.next = currentHead;
        this.tail = currentNode;
        return this;
    }
    set(index, val){
        if(this.length == 0 || index > this.length-1 || index < 0) return false;
        if(index == 0) {
            this.head.val = val;
        }
        else if(index == this.length-1){
            this.tail.val = val;
        }
        else{
            let currentNode = this.head;
            let counter = 0;
            while(counter != index){
                currentNode = currentNode.next;
                counter++;
            }
            currentNode.val = val;
        }
        return true;
    }
}
var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.set(1,9);

/*
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(3);
singlyLinkedList.head.val; // 20
singlyLinkedList.head.next.val; // 25
singlyLinkedList.head.next.next.val; // 5
singlyLinkedList.head.next.next.next.val; // 10
singlyLinkedList.head.next.next.next.next.val; // 15
singlyLinkedList.tail.val; // 15
singlyLinkedList.tail.next; // null

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(-1);
singlyLinkedList.head.val; // 25
singlyLinkedList.head.next.val; // 5
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 15
singlyLinkedList.head.next.next.next.next.val; // 20
singlyLinkedList.tail.val; // 20
singlyLinkedList.tail.next // null
var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(1000);
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.head.next.next.next.val; // 20
singlyLinkedList.head.next.next.next.next.val; // 25
singlyLinkedList.tail.val; // 25
singlyLinkedList.tail.next // null*/
