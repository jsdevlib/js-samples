/* eslint-disable no-useless-escape */
const array = [834, 519, 4874, 5, 89, 45687, 25, 645]

export const Main = () => {
    let pattern = /[^mh]oo/

    const regex = new RegExp(pattern)

    array.forEach((e) => {
        const test = regex.test(e)

        if (test) console.log(e)
    })
}
