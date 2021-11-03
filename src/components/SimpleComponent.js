// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component {
    state = { mood: 'happy' }

    handleClick = () => {
        this.setState(prevState => ({
            mood: prevState.mood === 'happy' ? 'sad' : 'happy'
        }))
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent;