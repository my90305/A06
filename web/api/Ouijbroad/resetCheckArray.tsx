const checkArrayStatus = async () => {
    await fetch(`api/OuijaBroad/reset`, {
        method: 'GET'
    })
}

const init = {
    checkArrayStatus
}

export default init;