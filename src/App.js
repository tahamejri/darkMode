import './App.css';
import Header from './components/header/header'
import {Form}  from './components/body/form/Form'
import{TextBody} from './components/body/text/textBody'
import {connect} from "react-redux"


const  App = (props) =>{
  return (
    <div className={!props.mode ? "App" : 'night'} >
      <div className="container">
      <Header/>
      <TextBody/>
      
      <Form/>
    </div>
    </div>
  );
}
const mapStateToProps = (state) => {  
  return {      
     mode: state.mode  
  };
} 
export default connect(mapStateToProps) (App);
