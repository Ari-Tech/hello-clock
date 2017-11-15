import React from 'react';
import ReactDOM from 'react-dom';

class MyClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "date": new Date() }
    }
    componentIdMounted() {
        this.timerId = '';
        setInterval(() => { this.tick() }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    tick() {
        setState(
            { "date": new Date() }
        )
    }
    render() {

        return (
            <h1> Time is {this.state.date.toLocaleTimeString()} </h1>
        )
    }
}
ReactDOM.render(
    <MyClock />,
    document.getElementById('root')
);
