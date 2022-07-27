// Problem 5
let chooseyEndings = function(words, suffix) {
    if (!Array.isArray(words)){
        return [];
    }
    let p = words.filter(x => x.endsWith(suffix));
    return p;
};

console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]
console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]
console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]
console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]
console.log(chooseyEndings(17, 'ily'));
// [ ]

// Problem 6
let sumWithReduce = function(nums) {
    return nums.reduce(
        (previous, current) => previous + current, 0);
  };
  
  
  console.log(sumWithReduce([10, 3, 5, 2])); // 20
  console.log(sumWithReduce([])); // 0

//Problem 7
let maxWithReduce = function(nums) {
    let maxValue = nums.reduce((a,b) => Math.max(a,b));
    return maxValue;
};

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

//Problem 8
let productWithReduce = function(nums) {
    let product = nums.reduce((a,b) => a*b);
    return product;
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12

//Problem 9
function snakeToCamel(str) {
    let strArray = str.split('_');
    let snake = strArray.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase());
    return snake.join('');
}

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

//Problem 10
let yeller = function(words) {
    let yelled = words.map(x => x.toUpperCase() + '! ');
    return yelled;
};

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

//Problem 11
let hasThreeVowels = function(string) {
    let array = string.split('');
    let count = 0;
    array.forEach(function(x){
        if ('aeiou'.includes(x)){
            count++;
        }
    });
    return count > 3;
};

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

//Problem 12
let longestWord = function(sentence) {
    let word = '';
    let array = sentence.split(' ');
    array.forEach(function(x){
        if (word.length < x.length)
            word = x;
    })
    
    //word = array.reduce((a,b) => a.length < b.length ? b : a);
    
    return word;
};

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

//Problem 13
let unique = function(array) {
    let arr = [];
    array.forEach(function(x, y){
        if (array.indexOf(x) == y){
            arr[y] = x;
        }
    })
    
    //arr = array.filter((x, i) => array.indexOf(x) === i);
    return arr;
};


console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

//Problem 14
let shortestWord = function(sentence) {
    let array = sentence.split(' ');
    let word = array.reduce((a, b) => a.length < b.length ? a : b);
    let lengths = array.map(x => x.length);
    //return array[lengths.indexOf(Math.min(...lengths))];
    return word;
};

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

//Problem 15
let isPrime = function(num) {
    for (let i = 2; i < num; i++){
        if (num%i === 0){
        return false;
        }
    }
    return true;
}

let choosePrimes = function(nums) {
    let p = nums.filter(x => isPrime(x));
    return p;
}

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

//Problem 16
let removeLastVowel = function(word) {
    for (let i = word.length-1; i>= 0; i--){
        if ('aeiou'.includes(word[i])){
            return word.slice(0, i) + word.slice(i+1);
        }
    }
};

let hipsterfy = function(sentence) {
    let words = sentence.split(' ');
    let newWords = words.map(x => removeLastVowel(x));
    return newWords.join(' ');
};

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

//Problem 17
let repeatingTranslate = function(sentence) {
    return sentence.split(' ').map(x => translateWord(x)).join(' ');
};


let translateWord = function(word) {
    if (word.length < 3){
        return word;
    } else if ('aeiou'.includes(word[word.length - 1])){
        return word + word;
    } else {
        for (let i = word.length-1; i >= 0; i--){
            if ('aeiou'.includes(word[i])){
                return word + word.slice(i-1);
            }
        }
    }
};

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

//Problem 18
let twoDimensionalProduct = function(arr) {
    let prod = 1;
    for (let i = 0; i < arr.length; i++){
        let p = arr[i];
        p.forEach(x => prod *= x);
    }
    return prod;
};

let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360
let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88