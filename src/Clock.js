import React, { Component, Fragment } from "react";

export default class Clock extends Component {
   state = {
      IndianTime: "",
      LondonTime: "",
      USTime: "",
      setUSTime: "",
      IndiaVsUSTime: "",
      LondonVsUSTime: "",
      clockRun: "",
   };

   componentDidMount() {
      let today = new Date();
      let ITime =
         today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      let LTime =
         today.getHours() +
         4 +
         ":" +
         (today.getMinutes() + 30) +
         ":" +
         today.getSeconds();

      let UTime =
         today.getHours() +
         9 +
         ":" +
         (today.getMinutes() + 30) +
         ":" +
         today.getSeconds();

      let IndiaVsUSTime = 9;
      let LondonVsUSTime = today.getHours() + 9 - (today.getHours() + 4);

      this.setState({
         IndianTime: ITime,
         LondonTime: LTime,
         USTime: UTime,
         IndiaVsUSTime: IndiaVsUSTime,
         LondonVsUSTime: LondonVsUSTime,
      });
   }

   onSubmit = (e) => {
      e.preventDefault();
      setTimeout(1);
      if (this.state.setUSTime) {
         let usHour = this.state.setUSTime.slice(0, 2);
         let today = new Date();
         let IndianHour = today.getHours();
         let LondonHour = today.getHours() + 1;
         let IndiaVsUSTime = usHour - IndianHour;
         let LondonVsUSTime = usHour - LondonHour;
         this.setState({
            USTime: this.state.setUSTime,
            IndiaVsUSTime: IndiaVsUSTime,
            LondonVsUSTime: LondonVsUSTime,
         });
      }
   };

   render() {
      const {
         IndianTime,
         LondonTime,
         USTime,
         setUSTime,
         IndiaVsUSTime,
         LondonVsUSTime,
      } = this.state;
      return (
         <Fragment>
            <div className="container main-div">
               <h3 style={{ textDecoration: "underline" }}>
                  Welcome to World Clock
               </h3>
               <form onSubmit={(e) => this.onSubmit(e)}>
                  <div className="container">
                     <div className="row">
                        <div className="col-sm-12 col-lg-3 col-xl-2  mt-1">
                           <label className="pl-1">
                              Set United State time:
                           </label>
                        </div>
                        <div className="col-sm-12 col-lg-2 col-xl-2  mt-1">
                           <input
                              type="time"
                              step="2"
                              value={setUSTime}
                              className="time"
                              onChange={(e) =>
                                 this.setState({ setUSTime: e.target.value })
                              }
                           />
                        </div>
                        <div className="col-sm-12 col-lg-2 col-xl-1  mt-1 ">
                           <input type="submit" className="time" />
                        </div>
                     </div>
                  </div>
               </form>

               <div class="container show-time">
                  <div class="row">
                     <div className="col-xl-3  col-lg-12 col-md-12">
                        <span className="float-md-right float-lg-left">
                           {" "}
                           United State:
                           <span
                              style={{ fontSize: "30px", fontWeight: "15px" }}
                           >
                              {USTime}
                           </span>
                        </span>
                     </div>
                     <div className="col-xl-2  col-lg-3 col-md-12 ">
                        <p className="float-lg-left float-md-right">
                           {`London: ${LondonTime}`}
                        </p>
                     </div>
                     <div className="col-xl-2 col-lg-4 col-md-12 ">
                        <p className="float-lg-right ">{`Indian: ${IndianTime}`}</p>
                     </div>
                  </div>
               </div>
               <hr className="line" />
               <div className="container">
                  <div className="row">
                     <div className="col-xl-4 col-lg-7 mt-3">
                        <span>
                           The time difference for London:{" "}
                           <input
                              type="text"
                              readOnly
                              value={LondonVsUSTime}
                              className="diff"
                           />
                        </span>
                     </div>
                     <div className="col-xl-4 col-lg-7 mt-3">
                        <span>
                           The time difference for India:{" "}
                           <input
                              type="text"
                              readOnly
                              value={IndiaVsUSTime}
                              className="diff"
                           />
                        </span>
                     </div>
                  </div>
               </div>
               <h1 style={{ visibility: "hidden" }}>Thank You</h1>
            </div>
         </Fragment>
      );
   }
}
