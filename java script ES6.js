// *******************string***************

// es5
// console.log("my first name is nofal." + "my last name is basan");

// es6
// console.log(`my first name is nofal.my last name is basan`);


// let a = 30;
// let b = 20;

// es5
// console.log("fifty is " + (a+b) + "and\n not " + (2*a+b) + ".");

// es6
// console.log(`fifty is ${a+b} and
// not ${2*a+b} .`);

// es6 string method 

// let myname = "basannofal";
// let lastname = "farhan";

// console.log(`${myname}`.startsWith('b'));
// console.log(`${myname}`.endsWith('l'));
// console.log(`${myname}`.endsWith('a'));
// console.log(`${myname}`.includes('nnofal'));

// console.log(`${myname} ${lastname} \n`.repeat(10));


// const myname1 = `${myname}`;
// const lastname1 = `${lastname} ${myname}\n`;

// console.log(myname1.startsWith('b'));
// console.log(myname1.endsWith('n'));
// console.log(myname1.endsWith('b'));
// console.log(myname1.includes('asa'));

// console.log(lastname1.repeat(12));




// ****************** array *****************************


// const planguage = ['java', 'c language', 'javascript', 'python'];

//  es5

// var p1 = planguage[0];
// var p2= planguage[1];
// var p3 = planguage [2];

// console.log("my favorite programming language " + p1);


// es6

// let [p1,p2,p3,p4] = planguage;
// console.log("my facorite progrmaing language " + p1)



// **************** object *******************



// const biodata = {
//     name : "basannofal",
//     age : 18,
//     deg : "msc",
// }

// // let {name,age,deg} = biodata;

// // console.log(`my name is ${name} and i am ${age} old . my qualification is ${deg}.`);

// console.log(`my name is ${biodata.name}`)





// ***************** arrow function ************************

// es5


// var sum = function(){
//     var a = 10;
//     var b = 5;

//     return a+b;
// }

// console.log(sum());


// es6


// const sum = () => {
//     let a = 30;
//     let b = 20;

//     return a+b;
// }
// console.log(sum());


// let a = 20;
// let b = 50;

// const sum = () => {return a+b}

// console.log(sum());




// let a = 25;
// let b = 50;

// const sum = () => a+b

// console.log(sum());





// ************* default *******************************




// const mult = (a,b=2,c=3) => {
//     console.log(`the multiplication is ${a*b*c}`);
// }

// mult(8);





//*************************  spread oprater *****************************

 



// // es5 

// function sum (a,b,c){
//     console.log(a+b+c);
// }

// //sum(8,9,3);

// var array = [5,6,4];

// sum.apply(null,array);



// // es6


// function sum (a,b,c){
//     console.log(a+b+c);
// }

//sum(8,9,3);

// var array = [5,6,41];

// sum(...array);



// replace concat


// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];

//es5

// arr1 = arr1.concat(arr2);
// console.log(arr1);


//es6


// arr1 = [...arr1,...arr2,...arr3];
// console.log(arr1);


// replace copy



// let arrc1 = [1,2,3];

// let arrc3 = [7,8,9];

// es5

// let arrc2 = arrc1;
// arrc2.push(4,5);

// console.log(arrc2);

// //es 6
// let arrc2 = [...arrc1,4,5,...arrc3,9]


// console.log(arrc2);







// *********************** exponantiation oprator ************************************


// let a=5;
// let b=3;

// console.log(a**b);


//*************************** Number global method***************************************
 
// let num = 6;
// console.log(isFinite(num));

// let num2 = NaN;
// console.log(isFinite(num2));

// isNaN function 

// let num = 6;
// console.log(isNaN(num));

// let num2 = 'nofal';
// console.log(isNaN(num2));

//isinteger function

// let num = 6;
// console.log(Number.isInteger(num));

    
// let num2 = 5.9;
// console.log(Number.isInteger(num2));







// ************************* class and object in Loops ******************************




// class student{
//     constructor(name,age,cls){
//         this.myname = name ;
//         this.myage = age;
//         this.mycls = cls;
//     }
//     biodata(){
//         console.log(`hi my name is ${this.myname}. i am ${this.myage} year old. i am study in ${this.mycls}.`);
//     }
// }

// let obj1 = new student('nofal',18,'msc it','football');
// let obj2 = new student('arman',30,'msc it');
// obj1.biodata();
// obj2.biodata();





//                              new style




// class student{
//     constructor(name,age,cls){
//         this.myname = name ;
//         this.myage = age;
//         this.mycls = cls;
//     }
//     biodata(){
//         return `hi my name is ${this.myname}. i am ${this.myage} year old. i am study in ${this.mycls}.`;
//     }
// }


// class player extends student{
//     constructor(name,age,cls,game){
//         super(name,age,cls);
//         this.mygame = game;
//     }
//     play_biodata(){
//       return `${super.biodata()} my favorite game is ${this.mygame}`;
//     }
// }


// let obj1 = new player('nofal',18,'msc it','football');

// console.log(obj1.play_biodata());
