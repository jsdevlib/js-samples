/* eslint-disable no-useless-escape */
const array = ['foo', 'joo', 'boo', 'koo', 'woo', 'loo', 'coo', 'moo']

export const Main = () => {
    let pattern = /[j-m]oo/

    const regex = new RegExp(pattern)

    array.forEach((e) => {
        const test = regex.test(e)

        if (test) console.log(e)
    })
}
