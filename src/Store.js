const EventEmitter = require('events').EventEmitter
const Dispatcher = require('./Dispatcher')

class Store extends EventEmitter {
    constructor() {
        super()
        this._list = []
        Dispatcher.register(action => {
            switch (action.actionType) {
                case 'add':
                    this._add(action.name)
                    break
                case 'getAll':
                    this._list = action.list
                    this.emit('change', this.list)
                    break
            }
        })
    }

    _add(item) {
        this._list.push(item)

        // 触发change事件
        this.emit('change', this.list)
    }

    get list() {
        return this._list
    }
}

module.exports = Store
