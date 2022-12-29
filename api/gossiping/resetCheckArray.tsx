const checkArrayStatus = async () => {
    await fetch(`api/gossiping/reset`, {
        method: 'GET'
    })
}

const init = {
    checkArrayStatus
}

export default init;