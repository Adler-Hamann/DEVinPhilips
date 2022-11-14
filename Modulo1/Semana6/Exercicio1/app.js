function sleep (value) {
    return new Promise((resolve) => {
        setTimeout (resolve, 3000)
    })
    .then(() => console.log(value))
}
sleep('teste')