import React, { Component } from 'react'

 class otp extends Component {

    constructor(props) {
        super(props);
        this.state = {
        random: 0
         }
         console.log(this.state.random)
        }

        handleClick = () => {
            var min = 2000;
            var max = 9000;
            var rand =Math.floor(1000 + Math.random() * 9000);
            
            this.setState ({random : rand})
              }
      
    render() {
    return (
      <div>
      <form class="form-card" style={{ 'justify-content': 'center'}}>
<h3 style={{ 'justify-content': 'center'}}>Enter Your Company mailid</h3>
                    
                
<div class="form-card" style={{ 'justify-content': 'center'}}>
    <label class="form-label" for="inputPassword">company mail_id<span class="text-danger"> *</span></label>
    <input type="email" value={this.state.Emailid}  placeholder='enter the Company mailid' onChange={this.onChangeemailid} class="form-control" name="Emailid"  id="inputPassword"  required='true'/>

                </div>

                  
     <button type="submit" class="btn btn-primary mt-2" style={{marginLeft:315}}  onClick={this.handleClick}>createEmployee</button><br/>



                   
                </form>
   {/* <button value="Click me!" onClick={this.handleClick}> Click me{this.state.random} </button> */}

      </div>
    )
  }
}

export default otp;
