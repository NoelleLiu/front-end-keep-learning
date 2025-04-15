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

/* prac1: 2.1.2 分割字符串 */