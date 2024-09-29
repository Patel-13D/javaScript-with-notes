// const tinderUser = new Object()      //singleton object
const tinderUser = {}                   // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {               //object na undr object
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{}->target ,obj1,obj2,obj3->source   //source object n target ma merg krva mate-> Object.assign(target,source)  

const obj3 = {...obj1, ...obj2}     //spread operator 90% time aa j use krva ma avse
 console.log(obj3);


const users = [                     // Array of object
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));              //Array ma output avse(loop lagavi skiye)
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));          //.hasOwnProoerty('je property joiye enu naam')->je joiye e property che k ny e check krse

//destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "me"
}

// course.courseInstructor

const {courseInstructor: instructor} = course              // object ne destructure krvu

// console.log(courseInstructor);
console.log(instructor);


// JSON ->Java Script Object Notation(key ane eni value bdhu string hovu joiye)
// JSON formatter no use krvano for study API in simple way
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//API using Array
[
    {},
    {},
    {}
]

