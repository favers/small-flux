const EventEmitter = require('events').EventEmitter

class Store extends EventEmitter {
    constructor(actions) {
        super()
        this._list = []
        actions.on('call', action => {
            switch (action.actionType) {
                case 'add':
                    this._add(action.name)
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
