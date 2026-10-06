//     ----------------------Task5-------------------------
// Currying & Uncurrying — 5 Questions
    // Based on the currying/uncurrying examples in your notes. Pasted markdown
    // Create a curried function that accepts 3 numbers one by one and prints their sum.
    function currying(a){
        return function(b){
            return function(c){
                    console.log(a+b+c);
            }
        }
    }
    currying(10)(20)(30)
    // Create a curried function that accepts name, department, and salary and prints all three values.
    function curriedEmployee(name){
        return function(department){
            return function(salary){
                console.log(name,department,salary)
            }
        }
    }
    curriedEmployee("Mani")("Cse")(50000)
    // Create a curried function that accepts 3 numbers and prints their multiplication.
    function curriedMultplication(a){
        return function(b){
            return function(c){
                console.log(a*b*c);
            }
        }
    }
    curriedMultplication(10)(10)(10)
    // Convert a curried function that accepts a, b, and c into an uncurried function.
    function curreidanduncarried(a){
        return function(b){
            return function(c){
                    console.log(a+b+c);
            }
        }
    }
    currying(10)(20)(30)
    function convertcurriedanduncarried(a,b,c){
        console.log(a+b+c);
    }
    convertcurriedanduncarried(10,20,30)
    // Write both curried and uncurried versions of a function that adds 4 numbers.
    function add4curreidanduncarried(a){
        return function(b){
            return function(c){
                return function(f){
                    console.log(a+b+c+f);
                }  
            }
        }
    }
    add4curreidanduncarried(10,20,30,40)

    function convertadd4curriedtoUncarried(a,b,c,d){
        console.log(a+b+c+d);
    }
    convertadd4curriedtoUncarried(10,20,30,40)
// 2. Spread Operator — 7 Questions
    // Create two arrays of 5 numbers and merge them using the array spread operator.
    let arr1 = [1,2,3,4,5];
    let arr2 = [6,7,8,9,10];
    let mergearr = [...arr1,...arr2];
    console.log(mergearr);
    // Create two arrays containing student names and merge them into one array using spread.
    let arrs1 = ["Manikanta"]
    let arrs2 = ["Surya"]
    let mergearrs = [...arrs1,...arrs2]
    console.log(mergearrs)
    // Create an array and create another array containing the original values plus 3 new values using spread.
    let arr3 = [2,3,4];
    let arr4 = [2,3,4,5,6,7];
    let mergearr1 = [...arr3,...arr4]
    console.log(mergearr1)
    // Create two objects containing employee details and merge them using the object spread operator.
    const obj={
        empName :"Manikanta",
        empId : 1245,
        empsalary : 50000
    }
    const obj1={
        empName1 :"surya",
        empId1 : 1235,
        empsalary1 : 40000
    }
    let mergeobj = {...obj,...obj1}
    console.log(mergeobj)
    // Create an employee object and create a new object by copying it and adding a salary property using spread.
    const obj2 = {
        empName2 : "Varanasi",
        empId : 8527,
    }
    const obj3 = {
        empName3 : "Puspha",
        empId : 7419,
        empsalary3 : 70000
    }
    let mergeobj1 = {...obj2,...obj3,}
    console.log(mergeobj1)
    // Create two objects with different properties and combine them into one object using spread.
    const obj4 = {
        stdid : 741963,
        stdName : "Manikanta"
    }
    const obj5 = {
        stdCour : "Cse",
        stdrole : "Developer"
    }
    console.log({...obj4,...obj5})
    // Create two arrays and use spread to create one array in reverse order.
    let arr5 = [5,6,7]
    let arr6 = [8,9,10]
    let mergearr2 = [...arr6,...arr5]
    console.log(mergearr2)

// Rest Operator in Functions — 6 Questions
    // Your notes specifically use rest with function parameters. Pasted markdown
    // Create a function that accepts two fixed values and stores all remaining values using the rest operator.
    function rest(a,b,...c){
        console.log(a+b);
        console.log(c)
    }
    rest(1,2,3,5,5,6,8,7,8)
    // Create a function student(name, department, ...marks) and print the name, department, and marks.
    function student(name, department,...marks){
            console.log(`Stdent name is ${name} and that student from ${department} and that student got Marks: ${marks}`);
    }
    student("Mani","Cse",55 , 54 ,65, 75,87)
    // Create a function that accepts two numbers and any number of additional numbers using rest.
    function add(a,b,...c){
        console.log(a+b+c[5]);
        console.log(c);
    }
    add(3,4,5,8,6,5,8,7,5,6,5,7,8)
    // Create a function that prints the 5th value from the rest parameter.
    function fifth(a, b, ...c){
        console.log(c[4]);
    }
    fifth(9,8,7,6,5,4,3,2,1,0)
    // Create a function that accepts product, price, and remaining values using rest and prints them.
    function aboutprodct(product, price,...remain){
        console.log(`product : ${product} and Price is ${price} and remain quilties of a product ${remain}`)
    }
    aboutprodct("Head phones",5000,"dual connection ","110db"," Redcolour")
    // Create a function that receives 10 numbers and uses rest to store all values after the first two.
    function tenNumbers(a,b,...c){
        console.log(a, b)
        console.log(c)
    }
    tenNumbers(1,2,4,8,9,8,6,4,6,3)
// 4. Array Destructuring — 5 Questions
    // Based on the array and nested-array destructuring in your notes. Pasted markdown
    // Create an array of 4 values and extract all four values using array destructuring.
    let arr7 = [5,6,7,8]
    let j1= arr7[0]
    let j2= arr7[1]
    let j3= arr7[2]
    let j4= arr7[3]
    let [i1,i2,i3,i4] = arr7;//array distraction
    console.log(`Array distraction: ${i1}`);
    console.log(i1,i2)
    // Create an array of student details and extract the first, second, and third values using destructuring.
    let arr8 = ["1234","Manikanta","Cse","cloud","fullstack"];
    let [k1,k2,k3,k4,k5,k6] = arr8;
    console.log(k1,k2,k3)
    // Create an array of 5 numbers and extract only the first and fourth values using destructuring.
    let arr9 = [7, 8, 2, 6, 10]
    let [l1,l2,l3,l4,l5] = arr9
    console.log(l1,l4)
    // Create a nested array and extract its values using nested destructuring.
    let arr10 = [1,2,3,[4,5,[6,7,8,[9]]]]
    let [m1,m2,m3,[m4,m5,[m6,m7,m8,[m9]]]]= arr10
    console.log(m1,m2,m3,m4,m5,m6,m7,m8,m9);
    // Given a nested array containing numbers inside 3 levels, extract the required values using nested destructuring.
    let arr11 = [9,8,7,[6,5,[4]]]
    let [n1,n2,n3,[n4,n5,[n6]]] = arr11;
    console.log(n1,n2,n3,n4,n5,n6)
//  Object Destructuring — 5 Questions
    // Create an employee object with name, designation, and salary. Extract all values using object destructuring.
    let obj6 = {
        emName : "Manikanta",
        emDesigination : "Developer",
        emsalary : 70000
    }
    let {emName,emDesigination,emsalary}=obj6
    console.log(emName,emDesigination,emsalary);
    // Create a student object with name, department, and cgpa. Extract all values using destructuring.
    let stdobj = {
        stName : "Manikanta",
        stdDepartment : "Cse",
        stdAge : 23
    }
    let {stName,stdDepartment,stdAge} = stdobj;
    console.log(stName,stdDepartment,stdAge);
    // Create an object with 5 properties and extract only 3 properties using object destructuring.
    let obj7 = {
        pro1 : "speed",
        pro2 : "Distance",
        pro3 : "Displacement",
        pro4 : "height",
        pro5 : "Weight"
    }
    let{pro1,pro2,pro3,pro4,pro5} = obj7
    console.log(pro1,pro2,pro3);
    // Create a nested object containing employee and team details. Extract the employee name and team member names using nested destructuring.
    let obj8 = {
        employee : "Manikanta",
        Team : {
            m11 : "Surya",
            m21 : "manmadha",
            m31 : "Moxitha"
        }
    }
    let {employee, Team:{m11,m21,m31}} = obj8
    console.log(employee,m11,m31)
    // Create a nested object containing company → department → employee and extract the employee name using nested destructuring.
    let obj9 = {
        company:"Stackly",
        departmet :{
            role : "Developer",
            employee : {
                em1 : "Manikanta",
                em2 : "Surya"
            }
        }
    }
    let {company,departmet:{role,employee:{em1,em2}}}=obj9
    console.log(em1)
// 6. Array Manipulation — 10 Questions
    // Your latest notes cover push, pop, shift, unshift, and splice. Pasted markdown
    // Create an array of 5 fruits and add 3 more fruits at the end using push().
    let arr12 = ["Mango","orange","banana","apple","grapes"]
    console.log(arr12)
    arr12.push("pineapple","dargon fruit","papaya")
    console.log(arr12)
    // Create an array of 5 numbers and remove the last value using pop().
    let arr13 = [1,2,3,4,5]
    console.log(arr13);
    arr13.pop()
    console.log(arr13)
    // Create an array of 5 student names and remove the first student using shift().
    let arr14 = ["Manikanta","Surya","Alekya","Moxitha","Lucky","Madhuri"]
    console.log(arr14)
    arr14.shift()
    console.log(arr14)
    // Create an array of 4 numbers and add 2 numbers at the beginning using unshift().
    console.log(arr13)
    arr13.unshift(0,0.1)
    console.log(arr13)
    // Create an array [10,20,30,40,50] and replace 30 with 100 using splice().
    let arr15 = [10,20,30,40,50]
    console.log(arr15);
    arr15.splice(2,1,100)
    console.log(arr15)
    // Create an array of 6 values and remove 2 values from the middle using splice().
    let arr16 = [4,5,6,7,8,9]
    console.log(arr16);
    arr16.splice(2,2)
    console.log(arr16);
    // Create an array and add 3 new values in the middle using splice().
    let arr17 = [9,8,7,6,4]
    console.log(arr17)
    arr17.splice(2,1,7,30,40,50)
    console.log(arr17)
    // Create an array and remove 2 values and add 3 new values at the same position using splice().
    let arr18 = [55,56,57,58,59]
    console.log(arr18);
    arr18.splice(1,2,77,88,99) 
    console.log(arr18)
    // Create a student list and remove one student from the middle using splice().
    let arr19 = ["Mani","Alli","Moxitha","Surya","Madhuri"]
    console.log(arr19);
    arr19.splice(4,1)
    console.log(arr19)
    // Create a shopping cart array and perform push, pop, shift, and unshift operations on it.
    let cart = ["Headshet"]
    console.log(cart)
    cart.push("Handbag","watch","Shirt")
    cart.pop()
    cart.shift()
    cart.unshift("baggy","Cars","pants")
    console.log(cart)
// 7. Array Merge & Extraction Methods — 7 Questions
    // Based on concat, slice, and flat. Pasted markdown
    // Create two arrays and merge them using concat().
    let arr20 = [11,22,33,44,55]
    let arr21 = [66,77,88,99]
    console.log(arr20.concat(arr21,100))
    // Create three arrays and merge all three using concat().
    let arr22 = [12,13,14,15]
    console.log(arr22)
    console.log(arr20.concat(arr21,arr22))
    // Create an array of 8 values and extract values from index 2 to index 5 using slice().
    let arr23 = [1,2,3,4,5,6,7,8]
    console.log(arr23.slice(2,5))
    // Create an array of student names and extract the first 3 students using slice().
    let arr24 = ["Manikanta","Rajishakar","teju","Surya"]
    console.log(arr24.slice(0,3))
    // Create a nested array with 3 levels and convert it into a single-level array using flat().
    let arr25 = [1,2,[3,4,[5]]]
    console.log(arr25.flat(Infinity))
    // Create a nested array with 4 levels and use flat() to remove the nesting.
    let arr26 = [1,2,[3,4,[5,6,[7]]]]
    console.log(arr26.flat(Infinity))
    // Explain through code the difference between slice() and splice() by performing an operation with both.
    let arr27 = [1,2,3,4,5,6]
    console.log(`This is slice which show the value betten two indexex ${arr27.slice(1,4)}`)
    arr27.splice(2,1,3,6,8,9)
    console.log(`about splice it is add the values in middle of the index ${arr27}`)
// 8. Search & Other Array Methods — 5 Questions
    // Create an array of numbers and check whether 50 exists using includes().
    let arr28 = [10,20,30,40,50,60];
    console.log(arr28.includes(50))
    // Create an array containing duplicate values and find the first occurrence of a value using indexOf().
    let arr29 = [1,2,3,2,3,4,1]
    console.log(arr29.indexOf(3))
    // Create an array containing duplicate values and find the last occurrence using lastIndexOf().
    console.log(arr29.lastIndexOf(3))
    // Create an array of numbers and sort it using sort().
    console.log(arr29.sort())
    // Create an array of numbers and reverse its order using reverse(). Pasted markdown
    console.log(arr29.reverse());