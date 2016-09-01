import Dispatcher from './Dispatcher'
import WebAPI from './WebAPI'

class Actions {
    add(name) {
        let action = {
            actionType: 'add',
            name
        }
        Dispatcher.dispatch(action)
    }
    getAll() {
        WebAPI.getAll(function(data) {
            let action = {
                actionType: 'getAll',
                list: data
            }
            Dispatcher.dispatch(action)
        })
    }
}

module.exports = Actions
