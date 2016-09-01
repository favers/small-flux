const storeCallbackList = []
const middlewareList = []

module.exports = {
    use(middleware) {
        middlewareList.push(middleware)
        return this
    },
    register(storeCallback) {
        storeCallbackList.push(storeCallback)
    },
    dispatch(action) {
        let index = -1
        const _this = this

        function next() {
            const middle = middlewareList[++index]
            if (middle) {
                middle(action, next)
            } else {
                _this._dispatch(action)
            }
        }
        next()
    },
    _dispatch(action) {
        for (let callback of storeCallbackList) {
            callback(action)
        }
    }
}
