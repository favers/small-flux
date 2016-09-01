const storeCallbackList = []

module.exports = {
    register(storeCallback) {
        storeCallbackList.push(storeCallback)
    },
    dispatch(action) {
        for (let callback of storeCallbackList) {
            callback(action)
        }
    }
}
