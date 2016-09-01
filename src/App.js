import List from './List'
import React from 'react'
import ReactDOM from 'react-dom'

import Dispatcher from './Dispatcher'
Dispatcher.use(function log(action, next) {
    setTimeout(function() {
        console.log('---Log---', action.actionType)
        next()
    }, 1000)
}).use(function test(action, next) {
    setTimeout(function() {
        console.log('---Test---', action.actionType)
        next()
    }, 1000)
})

ReactDOM.render(<List/>, document.getElementById('app'))
