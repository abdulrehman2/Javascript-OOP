const _elements = new WeakMap();

class Stack {
    constructor() {
        _elements.set(this, []);
    }

    push(item) {
        _elements.get(this).push(item);
    }

    pop() {
        var lastIndex = _elements.get(this).length - 1;
        var item = _elements.get(this)[lastIndex];
        _elements.get(this).splice(lastIndex, 1);
        return item;
    }

    peek() {
        if (_elements.get(this).length == 0) throw new Error('No elements availble in stack');
        return _elements.get(this)[_elements.get(this).length - 1];

    }

    get count() {
        return _elements.get(this).length;
    }
}

const s = new Stack();