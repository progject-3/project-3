import React, {Component} from 'react';
class IndividualPage extends Component{
    
    render(){
        return(
            <div>
                {/* {this.state.books.length ? ()} */}
                <h1>IndividualPage</h1>
                <img src={this.props.location.state[2]} alt="picture"></img>
                <h2>{this.props.location.state[0]}</h2>
                <h2>{this.props.location.state[1]}</h2>
              
                <h2>{this.props.location.state[3]}</h2>
            
            </div>
        )
    }
}

export default IndividualPage;

