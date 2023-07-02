import React from 'react';
class MyComponent extends React.Component {
    //key:value
    state = {
        name: 'Ronaldo',
        channel: 'Hoi dan IT',
    }
    render() {
        // let name = 'Erik';
        return (
            // React Fragment
            <>
                <div className="first">
                    Hello my component, My name is {this.state.name}
                    {/* this.state['name'] */}
                </div>
                <div className="second">
                    My youtube channel is {this.state.channel}
                </div>
            </>
        )
    }
}
export default MyComponent;