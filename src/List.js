import React from 'react'
import Store from './Store'

const store = new Store()

export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    add() {
        // 测试代码
        store._add(this.refs.nameInput.value)
        this.refs.nameInput.value = ''
    }
    componentDidMount() {
        store.on('change', list => {
            this.setState({ list })
        })
    }
    render() {
        return (
            <ul>
                {this.state.list.map((item,idx)=><li key={idx}>{item}</li>)}
                <li>
                    <input type="text" ref="nameInput"/>
                    <button onClick={this.add.bind(this)}>Add</button>
                </li>
            </ul>
        )
    }
}
