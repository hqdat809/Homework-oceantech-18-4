import React from 'react';

export default class ClassComponent extends React.Component {
    constructor() {
        super()
        this.state = { show: "constructor", stateChange: "" }
        console.log("Gọi đầu tiên", this.state.show)
    }

    static getDerivedStateFromProps(props, state) {
        // this.setState({ show: "getDerivedStateFromProps", stateChange: props.stateChange })
        console.log("Constructor đầu tiên, Gọi " + state.show + " trước khi render ra HTML" + props.stateChange)
        // return { show: "getDerivedStateFromProps", stateChange: props.stateChange }
    }



    render() {
        return <p>Xin chào Reactjs, hiển thị HTML sử dụng Class Component</p>
    }
}