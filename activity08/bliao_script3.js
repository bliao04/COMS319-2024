// Define an object representing a rectangle
const rectangle = {
    type: "rectangle",
    width: 5,
    height: 10,

    set width(value) {
        if (typeof value === 'number' && value > 0) {
            this._width = value;
        } else {
            console.error("Invalid width");
        }
    },

    // Getter for width
    get width() {
        return this._width;
    },

    // Setter for height
    set height(value) {
        if (typeof value === 'number' && value > 0) {
            this._height = value;
        } else {
            console.error("Invalid height");
        }
    },

    // Getter for height
    get height() {
        return this._height;
    },

    // Function to compute the area of the rectangle
    area() {
        return this.width * this.height;
    }

};

// Define an object representing a circle
const circle = {
    type: "circle",
    _radius: 7,

    // Setter for radius
    set radius(value) {
        if (typeof value === 'number' && value > 0) {
            this._radius = value;
        } else {
            console.error("Invalid radius");
        }
    },

    // Getter for radius
    get radius() {
        return this._radius;
    },

    // Function to compute the area of the circle
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

};

console.log("Input data >");
const rectWidth = parseFloat(prompt("Enter rectangle width:"));
const rectHeight = parseFloat(prompt("Enter rectangle height:"));
console.log("Set values >");
rectangle.width = rectWidth;
rectangle.height = rectHeight;
console.log("Get values >");
console.log(`Width: ${rectangle.width}, Height: ${rectangle.height}`);
console.log("Show output >");
console.log(`The area of rectangle with Width ${rectangle.width} and Height ${rectangle.height} is ${rectangle.area()}`);


console.log("Input data >");
const circleRadius = parseFloat(prompt("Enter circle radius:"));
console.log("Set values >");
circle.radius = circleRadius;
console.log("Get values >");
console.log(`Radius: ${circle.radius}`);
console.log("Show output >");
console.log(`The area of circle with Radius ${circle.radius} is ${circle.area().toFixed(2)}`);