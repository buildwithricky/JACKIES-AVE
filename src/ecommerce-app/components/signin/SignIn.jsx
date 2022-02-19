import React from "react"
import CustomButton from "../custombutton/CustomButton";
import FormInput from "../form-input-component/FormInput";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils"
import "./sign.scss"
class SignIn extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'' 
        }
    }
    handleSubmit = async (e)=>{
        e.preventDefault();
        const {email,password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }
        catch(error){
            console.log(error)
        }
        
        
    }
    
    handleChange = (e) =>{
        const  {value,name} = e.target;
        
        this.setState ({[name]:value})
        
    }
    
    render(){
        return(
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form autofill="false" onSubmit={this.handleSubmit} autoComplete="new-password">
                    <FormInput name="email"
                     type="email"
                      value={this.state.email} 
                      required
                      label="Email"
                      onChange={this.handleChange}
                      
                      />
                  
                    <FormInput name="password" type="password"
                    value={this.state.password} 
                    required 
                    label="password" 
                    onChange={this.handleChange}/>
                
 
 <div className="buttons">
 <CustomButton type="submit" >SIGN IN</CustomButton>
<CustomButton isGoogleSignIn onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
 </div>
            </form>
            </div>
        )
    }
}

export default SignIn;