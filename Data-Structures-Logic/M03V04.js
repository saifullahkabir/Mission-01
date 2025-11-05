// Queue: FIFO (First In, First Out)

class Queue {
    constructor(){
        this.items = [];
    }

    //* O(1)
    enqueue(value){
        this.items.push(value);
    }

    //* O(n)
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        
        return this.items.shift();
    }

    //* O(1)
    peek() {
        if(this.isEmpty()){
            return undefined;
        }

        return this.items[0];
    }

    //* O(1)
    isEmpty(){
        return this.items.length === 0;
    }

    //* 
    print() {
        console.log('start ->',this.items.join(' -> '), '-> end');
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

queue.dequeue();
queue.print()