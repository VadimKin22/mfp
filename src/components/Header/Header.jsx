import React from 'react';
import { NavLink } from 'react-router-dom';
import hcss from'./Header.module.css';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  // state = {
  //   auth: this.props.auth
  // }
  // setStatus() {
  //   this.setState({
  //     auth: this.props.auth
  //   });
  // }

  render() {

    return <header className={hcss.header}>
    <img src="data:image/jpeg;base64,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" />
    <div className={hcss.loginBlock}>
      {this.props.auth ? <div> Hi {this.props.data.login} ! 
      <button onClick={()=>{this.props.logOut()}}>Log Out</button></div>
      :<NavLink to="/login">Login</NavLink>
    }
     
      </div>
    </header>
  }
}

export default Header







// const Header =(props)=>{
  
//       return <header className={hcss.header}>
//     <img src="data:image/jpeg;base64,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" />
//     <div className={hcss.loginBlock}>
//       {props.auth ? <div> Hi {props.data.login} ! 
//       <button disabled={!props.auth} onClick={()=>{props.logOut()}}>Log Out</button></div>
//       :<NavLink to="/login">Login</NavLink>
//     }
      
//       </div>
//     </header>
  
// }

// export default Header
