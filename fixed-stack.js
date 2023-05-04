
/**
 * Fixed length circular buffer.  Once full, tail returns the oldest
 * object to be inserted into the buffer.  Before buffer is full
 * tail returns an undefined quantity.
 */
class Buffer {


	constructor(length) {
		this.head = 0;
		this.length = length;
		this.data = Array.apply(null, Array(length)).map(function () {});
	}

	insert(obj) {
		this.data[this.head] = obj;
		++this.head;
		this.head = this.head % this.length;
	}

	get tail() {
		let pointer = (this.head+this.length) % this.length;

		let retVal = this.data[pointer];

		if (typeof retVal === "undefined") {
			return null;
		} else {
			return retVal;
		}
	}
}


