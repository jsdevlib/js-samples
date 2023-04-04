/* eslint-disable no-useless-escape */
const array = [
    'fooxxxbar',
    'foo   bar',
    'fooxbar',
    'fooxxbar',
    'foo bar',
    'foo      bar',
    'foobar',
    'fooyybar',
]

export const Main = () => {
    let pattern = /foo\s*bar/

    const regex = new RegExp(pattern)

    array.forEach((e) => {
        const test = regex.test(e)

        if (test) console.log(e)
    })
}

/** should return for patterns '.*'
fooabar
fooabcbar
foobxcbar
foozbar
 * 
 */
