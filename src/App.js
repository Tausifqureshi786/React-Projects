import React, {Component} from "react";
import "./style.css";

// import Random from '.Random';


 class  App extends Component {
  

     state = {
     num: 0,
     res: 0
   };
  


  componentDidMount() {
   this.setState({num: this.state.num})
  }

heyu = (e) => {
  this.setState({num: e.target.value} )
}
randomNo = (no) => {

 
  return  Math.floor ( Math.random()) * Math.floor(no)  
};

randomNum = () => {

  var cNum = ' ';

  var val2 = ' '; 

  val2 = this.state.num ; 

  // eval(val2);
  cNum = Math.floor ( Math.random() * val2  ) ;

  this.setState({ res: (eval(cNum) ) })  ;
 


} 

  clearFn = () => {

    this.setState({ res: null });
    this.state.num = " "; 
  }

  render() {

    return (
    <div>
      <h1>Random Number Generator</h1>
      <div>
        <p>{ this.state.res} </p>
      </div>
    
    <div>
      <p>Enter the upper limit: </p>
    </div>
      

      <div>
       <input type="number" name="number" value={this.state.num} onChange={this.heyu}/>

       <input type="submit" name="Generate Random Number" value="Generate Random Number" 
       onClick={this.randomNum}/> 

        <br></br>
        <input type="submit" value="Clear" onClick={this.clearFn}/>
       </div>

    </div>
    );
  }
}

export default App;