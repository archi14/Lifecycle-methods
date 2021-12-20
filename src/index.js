import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props)
    {
        super(props);
        console.log('Constructor is called');
    }
    state = {latitude:null}
   
    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
            this.setState({latitude:position.coords.latitude})
            },
            (err)=> {
            this.setState({errorMessage:err.message})
            })
        console.log('Component did mount is called');
    }
    componentDidUpdate(){
    
        console.log('ComponentDidUpdate called');
    }
   
    render()
    {
        console.log('render is called');
        return <div>{this.state.latitude}</div>
    }

    // Uncomment to stop Component Update
    // shouldComponentUpdate()
    // {
    //     return false;
    // }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);