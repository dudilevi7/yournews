import React, {Component} from 'react';
import logo from './logo.png'
import Spinner from 'react-bootstrap/Spinner'
import { easings } from 'react-animation';
import './Home.css';

class Home extends Component {
	// constructor(props){
	// 	super(props);
	// }
	componentDidMount(){
			setTimeout(()=> {
				if (this.props.user.isSignedIn===true)
					this.props.history.push('/MyNews')
				else 
				this.props.history.push('/Login')
			},2000)
	}
	render(){
		return (
			<div id = "logo" className = 'ma4 mt0 tc br4'>
	 			<div> 
					 <img id ="logoImg" style = {{paddingTop:'5px',animation : `pop-in ${easings.easeOutExpo} 2000ms forwards`}}
	 							alt = "logo" src = {logo}/>
				</div>
				<Spinner animation="border" />
			</div>

		)
	}
}

export default Home;