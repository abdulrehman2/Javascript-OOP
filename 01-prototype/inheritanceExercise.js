function HtmlElement() {

    this.click = function () {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focused');
}


function HtmlSelectElement(newitems = []) {

    this.items = newitems;

    this.addItem = function (item) {
        this.items.push(item);
    }

    this.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index != -1) {
            this.items.splice(index, 1);
        }
    }

    // Object.defineProperty(this, 'items', {
    //     get: function () {
    //         return this.items;
    //     }
    // });

    this.render = function () {
        // let renderedString = "<select>";
        // for (let option of this.items) {
        //     renderedString += "<option>" + option + "</option> \n";
        // }
        // renderedString += "</select> \n";
        let renderedString = `<select>
         ${this.items.map(item => `<option>${item}</option> \n`).join('')} 
        </select>`;

        return renderedString;
    }


}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.consturctor = HtmlSelectElement;





function HtmlImageElement(src) {
    this.src = src;
    this.render = function () {
        let renderedString = `<img src=${this.src}/>`;
        return renderedString;
    }
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.consturctor = HtmlImageElement;

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement("myimage.com")
]

for (let element of elements) {
    console.log(element.render());
}