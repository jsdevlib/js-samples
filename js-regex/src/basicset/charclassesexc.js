/* eslint-disable no-useless-escape */
const array = ['foo', 'moo', 'coo', 'doo', 'poo', 'loo', 'boo', 'hoo']

export const Main = () => {
    let pattern = /[^mh]oo/

    const regex = new RegExp(pattern)

    array.forEach((e) => {
        const test = regex.test(e)

        if (test) console.log(e)
    })
}
