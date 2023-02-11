// old part javascript
// var getName = {
//     name: 'nitish',
//     age: '27',
//     sayName: function () {
//         console.log(this.name);
//         var global = this;
//         function age() {
//             console.log(global.age);
//         }
//         age();

//     }
    



// }
//console.log(getName.age)
//console.log(getName.sayName());


// ES6 JS
let getName = {

    name: 'nitish',
    age: '27',
    sayName: function () {
        console.log(this.name);
        age = () => {
            console.log(this.age);
        }
        age();

    }
    
}
getName.sayName()


// higher order function
// forEach || MAP || FILTER || SORT || REDUCE
// Promises // ASYNC || AWAIT

function add(x, y) {
    return x * y;
}

// self invocked function


    var { uname, pass } = document.forms[0];