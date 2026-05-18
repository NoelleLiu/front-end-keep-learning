/* prac1: 2.1.2 分割字符串 */
const str1 = `
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`
let str1WithoutMarks = ''
// 仅保留英文字母和空格
for (let i = 0; i < str1.length; i++) {
    const letter = str1[i]
    const asciiCode = letter.charCodeAt()
    if (asciiCode >= 65 && asciiCode <= 90 || asciiCode >= 97 && asciiCode <= 122 || asciiCode === 32) {
        str1WithoutMarks += letter
    }
}
// 去掉大小写区分
const strwithoutUpperCase = str1WithoutMarks.toLocaleLowerCase()
// 分割字符串、
const strArray = strwithoutUpperCase.split(' ')
console.log(strArray)

/* prac1: 4.1.2 数组 */
// 数组的splice方法：增加、删除、替换
const array = [ 1, 2, 6, 7 ]
array.splice(2, 0, 3)
console.log(array)  // [1, 2, 3, 6, 7]， splice方法（操作位置下标，删除元素个数，插入元素）

// 数组的filter方法：筛选
const array2 = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
const evenNumbers = array2.filter(function(x) {
  return x % 2 == 0
})
console.log(evenNumbers)  // [2, 4, 6, 8]

// 数组的map方法：映射
const array3 = [ 1, 2, 3, 4, 5 ]

const addedArray = array3.map(function(x) {
  return x + 2
})

console.log(addedArray) //=> [3,4,5,6,7]

// 数组的reduce方法：累加，聚合
const array4 = [ 1, 2, 3, 4, 5 ]
const sum = array4.reduce((x,y) => x+y)
console.log(sum)  // 15
