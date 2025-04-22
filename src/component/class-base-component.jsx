import { Component } from "react";

class ClassBAsedComponent extends Component {
    state = {
        showText: false,
    }
    handleClick = () => {
        this.setState({
            showText: !this.state.showText
        })
    }
    render() {
        console.log(this.state.showText)
        return (
            <div>
                {this.state.showText ? <h3>Class base Component</h3> : <h3>Toggled</h3>}

                <button onClick={this.handleClick}> Toggle Text</button>
            </div>
        )
    }
}


// class ClassBAsedComponent extends Component {

//     constructor(props) {
//         super(props)
//         this.data = {
//             showText: false,
//         }

//     }
//     render() {
//         console.log(this.data.showText)
//         return (
//             <div>
//                 <h3>Class base Component</h3>
//                 <button> Toggle Text</button>
//             </div>
//         )
//     }
// }

export default ClassBAsedComponent