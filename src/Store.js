const EventEmitter = require('events').EventEmitter

class Store extends EventEmitter{
    constructor(){
        super()
        this._list = []
    }

    _add(item){
        this._list.push(item)
        // 触发change事件
        this.emit('change',this.list)
    }

    get list(){
        return this._list
    }
}

module.exports = Store