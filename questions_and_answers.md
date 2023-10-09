<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

-    A: `{}`
-    B: `ReferenceError: greetign is not defined`
-    C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>

<li>
Ans is option-A:{} because variable name "greetign" using let keyword and also has no assigned value.in second line we assign {} to the "greetign" variable,now it holds {} "empty object".In console.log() we pass greetign and it holds {} so this is the reason the ans is A:"{}".
</li>
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
     return a + b;
}

sum(1, "2");
```

-    A: `NaN`
-    B: `TypeError`
-    C: `"12"`
-    D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The answer is C:'"12"'.
because in this we declare a function named sum which contain 2 parameters "a" and "b".WE return a+b
and call the function with given values 1 , "2".In here 1 is a number but "2" is not a number it is a string.So a number and a string's sum never happen.thats why when this function execute ,as "2" is a string thats why it cannot participate with 1 for sum and it return as 12 in output.</i>
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

-    A: `['🍕', '🍫', '🥑', '🍔']`
-    B: `['🍝', '🍫', '🥑', '🍔']`
-    C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
-    D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The answer is A: `['🍕', '🍫', '🥑', '🍔']`
Because the food variable declares an array with four elements.and variable "info" creates an object.in this object there has a property favoriteFood as key of object and it assign a value of the first element of food array whish is 🍕.Then info.favoriteFood = "🍝";in this line we set the 
value of the favoriteFood property of the object as 🍝.When we console.log(food) we get the original array element as output.Because the change of "info" property does not affect the original array of food.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
     return `Hi there, ${name}`;
}

console.log(sayHi());
```

-    A: `Hi there,`
-    B: `Hi there, undefined`
-    C: `Hi there, null`
-    D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The ans is B: `Hi there, undefined`.
because we call the function without any argument so the name variable is undefine in the function.
we use a function named sayHi with parameter "name" then we return "hi there" as comment and ${name}
in here we to destructure parameter value and last we try to console.log() this function without giving any argument or value this is why we get "`Hi there, undefined`"  as an output .""Hi there is a comment""</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
     if (num) count += 1;
});

console.log(count);
```

-    A: 1
-    B: 2
-    C: 3
-    D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The answer is C: 3.
because the count variable is increase every time when the nums is true and nums array true for every element except 1st element.</i>
</p>
</details>
