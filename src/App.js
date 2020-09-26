import React, { Fragment } from "react";

import "./App.css";

class App extends React.Component {
   state = { username: "", password: "" };

   render() {
      return (
         <Fragment>
            <div className="form-div">
               <form>
                  <div class="form-group">
                     <label for="exampleInputEmail1">Email address</label>
                     <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                     />
                  </div>
                  <div class="form-group">
                     <label for="exampleInputPassword1">Password</label>
                     <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                     />
                  </div>
                  <button type="submit" class="btn btn-primary ">
                     Reset
                  </button>
                  <button type="submit" class="btn btn-primary ml-3">
                     Login
                  </button>
               </form>
            </div>
         </Fragment>
      );
   }
}

export default App;
