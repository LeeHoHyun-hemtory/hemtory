// // var partial = function () {
// //   var originalPartialArgs = arguments;
// //   var func = originalPartialArgs[0];
// //   if(typeof func !== 'function') {
// //     throw new Error('첫 번째 인자가 함수가 아닙니다.');
// //   }
// //   return function() {
// //     var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
// //     var restArgs = Array.prototype.slice.call(arguments);

// //     return func.apply(this, partialArgs.concat(restArgs));
// //   }
// // }

// // var add = function() {
// //   var result = 0;
// //   for(var i = 0; i < arguments.length; i++) {
// //     result += arguments[i];
// //   }
// //   return result;
// // }

// // var addPartial = partial(add, 1, 2, 3, 4, 5);
// // console.log(addPartial(6, 7, 8, 9, 10));

// // var dog = {
// //   name: '강아지',
// //   greet: partial(function(prefix, suffix) {
// //     return prefix + this.name + suffix;
// //   }, '왈왈, ')
// // };
// // console.log(dog.greet('입니다'))

// var debounce = function(eventName, func, wait) {
//   var timeoutId = null;
//   return function(event) {
//     var self = this;
//     console.log(eventName, 'event 발생');
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(func.bind(self, event), wait);
//   };
// };

// var moveHandler = function(e) {
//   console.log('move event 처리');
// };

// var wheelHandler = function(e) {
//   console.log('wheel event 처리');
// };
// const a = document.querySelector('.a');
// a.addEventListener('mousemove', debounce('move', moveHandler, 500));
// a.addEventListener('mousewheel', debounce('wheel', wheelHandler, 700));

// for(let i = 0; true;) {
//   console.log(++i);
//   if(i === 5) {
//     break;
//   }
// }

i = [j = 9, k = l = ((m = 8) / 2)];
console.log(i)

let n = 0;
for(;;) {
  console.log(n++);
  if(n > 5) {
    break;
  }
}