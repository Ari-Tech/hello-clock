import React from 'react';
import ReactDOM from 'react-dom';

class Vggg extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "dateobj": new Date() }
    }
    componentDidMount() {
        this.timerId = '';
        setInterval(() => { this.ticker() }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    ticker() {
        this.setState(
            { "dateobj": new Date() }
        )
    }
    render() {

        return (
            <h1> Time is {this.state.dateobj.toLocaleTimeString()} </h1>
        )
    }
}
ReactDOM.render(
    <Vggg />,
    document.getElementById('root')
);
