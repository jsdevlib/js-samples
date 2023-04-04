const array = ['fooabar', 'fooxbar', 'baryfoo', 'foobar', 'fooxybar', 'foocbar']

export const Main = () => {
    const regex = new RegExp('foo.bar')

    array.forEach((e) => {
        const test = regex.test(e)

        if (test) console.log(e)
    })
}
