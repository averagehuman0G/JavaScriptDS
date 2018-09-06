class PriorityQ {
    //defaults to a heap with values
    constructor(comparator = (a,b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    peek() {
        return this._heap[0];
    }
    isEmpty() {
        return this.size() === 0;
    }
    insert(val) {
        this._heap.push(val);
        this.bubbleUp(this.size() - 1);
    }
    extractMax() {
        let max = this.peek(); 
        this._swap(this.size() - 1, 0); 
        this._heap.pop();
        this.bubbleDown(0);
        return max;
    }
    //when we insert the element we then need to find its right positions
    //by bubbling it up to the right spot
    bubbleUp(index) {
        let parentIndex = this.getParent(index); 
        while(parentIndex >= 0 && this._greater(index, parentIndex)) {
            this._swap(parentIndex, index);
            this.bubbleUp(parentIndex);
        }
    }
    //In order to keep the heap properties we bubble down the element to the right place.
    //This is called when we remove the max element. Since we replace the root element
    //with the bottom right most element, it is out of place. 
    bubbleDown(index) {
        let largest = index; 
        let rightChildIndex = this.getRightChild(index);
        let leftChildIndex = this.getLeftChild(index);
        if(leftChildIndex < this.size() && this._greater(leftChildIndex, index)) {
            largest = leftChildIndex;
        }
        if(rightChildIndex < this.size() && this._greater(rightChildIndex, largest)) {
            largest = rightChildIndex;
        }
        if(largest != index) {
            this._swap(largest, index);
            this.bubbleDown(largest);
        }
    }
    getVal(index) {
        return this._heap[index];
    }
    _swap(x, y) {
        let tmp = this._heap[x]; 
        this._heap[x] = this._heap[y];
        this._heap[y] = tmp;
    }
    _greater(i, j) {
        return this._comparator(this.getVal(i), this.getVal(j));
    }
    getParent(index) {
        return Math.ceil(index / 2 - 1);
    }                   
    getLeftChild(index) {
        return index * 2 + 1;
    }
    getRightChild(index) {
        return index * 2 + 2;
    }
}

function maxQ(a,b) {
    return a[1] > b[1];
}
function minQ(a,b) {
    return a[1] < b[1];
}

//can either be max or min Priority Queue depending on the comparator function passed in 
let maxPriorityQ = new PriorityQ(minQ);


maxPriorityQ.insert([1, 10]);
maxPriorityQ.insert([2, 5]);
maxPriorityQ.insert([3, 100]);
maxPriorityQ.insert([4, 9]);
maxPriorityQ.insert([5, 0]);

while(!maxPriorityQ.isEmpty()) {
    console.log(maxPriorityQ.extractMax());
}
