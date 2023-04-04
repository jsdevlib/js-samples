/* eslint-disable no-useless-escape */
const array = [
    'xxx.yy',
    'xx.yyyy',
    'x.yy',
    'xy',
    'xxyy',
    'yy&xx',
    'y#x',
    'yxxx',
]

export const Main = () => {
    let pattern = /x[&#\^]*/

    const regex = new RegExp(pattern)

    array.forEach((e) => {
        const test = regex.test(e)

        if (test) console.log(e)
    })
}
