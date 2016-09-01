import Dispatcher from './Dispatcher'

class Actions {
    add(name) {
        let action = {
            actionType: 'add',
            name
        }
        Dispatcher.dispatch(action)
    }
}

module.exports = Actions
