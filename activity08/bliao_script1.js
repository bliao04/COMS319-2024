function maxOfTwo(x, y)
{
    if(x < y)
        return y;
    else
        return x;
}
let n1 = 9;
let n2 = 19;
console.log(`The max between ${n1} and ${n2} is :`, maxOfTwo(n1,n2));

function maxOfArray(array)
{
    let max = 0;
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] > max)
            max = array[i];
    }
    return max;
}
let array = [9,11,14,47,2,221];
console.log(maxOfArray(array));

function showProperties(movie)
{
    console.log("List of Keys: ");
    for (let key in movie)
    {
        console.log(key);
    }
    console.log("List of Values: ");
    for (let key in movie)
    {
        console.log(movie[key]);
    }
}
const movie = {
    title : 'Some movie',
    releaseYear: 2009,
    rating: 4.5,
    director: 'Michael Bay'
};
showProperties(movie);

const circle = {
    radius: 2,
    area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area());

const circle2 = {
    radius: 2,
    get radiusValue() {
        return this.radius;
    },
    set radiusValue(newRadius) {
        this.radius = newRadius;
    },
    area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(`Area with ${circle2.radiusValue} :`,circle2.area());
circle2.radiusValue = 3;
console.log(`Area with ${circle2.radiusValue} :`,circle2.area());

const circle3 = {
    radius: 2,
    getRadiusValue : function() {
        return this.radius;
    },
    setRadiusValue : function(newRadius) {
        this.radius = newRadius;
    },
    area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(`Area with ${circle3.getRadiusValue()} :`,circle3.area());
circle3.setRadiusValue(3);
console.log(`Area with ${circle3.getRadiusValue()} :`,circle3.area());