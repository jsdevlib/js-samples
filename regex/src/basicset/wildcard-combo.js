const array = [
    'foobar',
    'barfoo',
    'fooabcbar',
    'foobxcbar',
    'barcbyfoo',
    'foozbar',
    'barafoo',
    'barabfoo',
]

export const Main = () => {
    const regex = new RegExp('foo.*bar')

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
