export const sortMyStuff = (sortMe, prop) => {
    let sortedArray = sortMe.sort((a, b) => {
        if (a[prop] > b[prop]) {return 1}
        if (a[prop] < b[prop]) {return -1}
        else {return 0}
    })
    return sortedArray
}