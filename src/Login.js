import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
   state = { clockUsername: "", clockPassword: "", clockAuth: false };

   onSubmit = (e) => {
      e.preventDefault();
      const { clockUsername, clockPassword, clockAuth } = this.state;
      localStorage.setItem(clockUsername, clockPassword);
      localStorage.setItem("clockReset", clockUsername);
      this.setState({ clockAuth: true });
      localStorage.setItem("clockAuth", clockAuth);
   };

   render() {
      return (
         <Fragment>
            <div className="form-div">
               <form onSubmit={(e) => this.onSubmit(e)}>
                  <div className="form-group">
                     <label>Email address</label>
                     <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={this.state.clockUsername}
                        onChange={(e) =>
                           this.setState({ clockUsername: e.target.value })
                        }
                        required
                     />
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={this.state.clockPassword}
                        onChange={(e) =>
                           this.setState({ clockPassword: e.target.value })
                        }
                        required
                     />
                  </div>
                  <button type="submit" className="btn btn-primary ">
                     Reset
                  </button>
                  <button type="submit" className="btn btn-primary ml-3 ">
                     <Link to="/clock" className="text-white">
                        Login
                     </Link>
                  </button>
               </form>
            </div>
         </Fragment>
      );
   }
}

export default Login;
