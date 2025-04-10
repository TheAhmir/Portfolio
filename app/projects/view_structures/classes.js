// node structure should work for all structures
class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor(data) {
    this.length = 0
    this.head = null
    this.tail = null

    
    this.buildLinkedList(data)
  }

  buildLinkedList(data) {
    data.forEach(item => {
      this.append(item)
    })
  }

  prepend() {
    
  }

  append(value) {
    this.length++
    
    const node = new Node(value)
    
    if (!this.tail) {
      this.head = this.tail = node
      return 
    }

    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }

  removeAt(index) {
    
  }

  get() {
    
  }
}

export {LinkedList }
