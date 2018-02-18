import React, { Component } from 'react';
class Reactform extends Component{

constructor(props){
super(props);
this.state={value:'gh'};
this.handleChange=this.handleChange;
this.handleSubmit=this.handleSubmit;



}
handleChange(event){
this.setState({value:event.target.value});


};
handleSubmit(event){
	alert('a name was submitted'+this.state.value);
};
render(){
return(
<form onSubmit={this.handleSubmit}>
<label>
name:
<input type="text"  value={this.state.value} onChange={this.handleChange}/>
</label>
<input type="submit" value="Submit"/>
</form>
	);


}
}  
export default Reactform;