const EventEmitter = require('events').EventEmitter

class Actions extends EventEmitter {
    constructor() {
        super()
    }
    add(name) {
        let action = {
            actionType: 'add',
            name
        }
        this.emit('call', action)
    }
}

module.exports = Actions
