import React from 'react';
import {changeMode} from '../../redux/actions/modeToggleAction'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import './header.css'
 class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { darkMode: 0 };
    }
    toggleMode = ()=>{
        this.setState({
            darkMode : !this.state.darkMode
        })
    }
    render() {
        return (
            <div className = "cusheader">
                <h3 className="title">Dark Mode Challange</h3>
                <i className="fas fa-moon fa-2x" onClick={this.props.changeMode}></i>
            </div>

        );
    }
}
const mapDispatchToProps = dispatch =>{
    return bindActionCreators(
        {
            changeMode
        },
        dispatch
    )
}
export default connect(null, mapDispatchToProps) (Header)
