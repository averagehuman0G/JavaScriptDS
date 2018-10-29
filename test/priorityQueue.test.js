const PriorityQ = require('../priorityQueue.js');
const assert = require('assert');

let heap = new PriorityQ();
heap.insert(5);
heap.insert(32);
heap.insert(1);
heap.insert(100);


describe('Heap functionality', function() {

	describe('peek()', function() { 
		it('Should return the element at the top', function() {
			assert.equal(heap.peek(), heap._heap[0]);
		});
		it('Should still have the element at the top and it should be the greatest number', function() {
			assert.equal(heap.peek(), 100);
		});
	});

	describe('extract()', function() { 
		it('Should return the greatest element', function() {
			assert.equal(heap.extractMax(), 100); 
		});
		
		it('Should return all values in order from greatest to smallest', function() {
			let sortedArr = [];
			let shouldBe = [100, 32, 5, 1];

			//removed earlier
			heap.insert(100);

			while(!heap.isEmpty()) {
				sortedArr.push(heap.extractMax());
			}

			for(let i = 0; i < shouldBe.length; i++) {
				assert.equal(sortedArr[i], shouldBe[i]);	
			}
		});	
	});

});


