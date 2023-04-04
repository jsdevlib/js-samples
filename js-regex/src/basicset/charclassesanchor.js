/* eslint-disable no-useless-escape */
const array = [
    'foo bar baz',
    'bar foo baz',
    'foo baz bar',
    'doo',
    'poo',
    'loo',
    'boo',
    'hoo',
]

export const Main = () => {
    let pattern = /^foo.*$/

    const regex = new RegExp(pattern)

    array.forEach((e) => {
        const test = regex.test(e)

        if (test) console.log(e)
    })
}
