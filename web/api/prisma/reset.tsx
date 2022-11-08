const completeStatus = async () => {
    await fetch(`api/database`, {
    method: 'GET',
  })
}

const init = {
    completeStatus
}
export default init;
