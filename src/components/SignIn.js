  // import React, {useState} from "react";
  // import { signInWithGoogle } from "../firebaseConnect";
  // import { auth } from "../firebaseConnect";
  // import { Link } from "react-router-dom";
  // import "./../css/login.css";
  // import "./../css/reset.css";

  // const SignIn = () => {

  //     const [email1, setEmail] = useState('');
  //     const [password1, setPassword] = useState('');
  //     const [error, setError] = useState(null);

  //     const signInWithEmailAndPasswordHandler = (event,email, password) => {
  //         event.preventDefault();
  //         auth.signInWithEmailAndPassword(email, password).catch(error => {
  //         setError("Error signing in with password and email!");
  //           console.error("Error signing in with password and email", error);
  //         });
  //       };
      
  //       const onChangeEmailHandler = (event) => {
  //             const {name, value} = event.currentTarget;
  //             setEmail(value);
  //       };
  //       const onChangePassHandler = (event) => {
  //         const {name, value} = event.currentTarget;
  //         setPassword(value);
  //   };
      

  //   return (
  //     <div className="container">
  //     <div className="row justify-content-center">
  //       <div className="col-xl-10 col-lg-12 col-md-9">
  //         <div className="card o-hidden border-0 shadow-lg my-5">
  //           <div className="card-body p-0">
  //             <div className="row">
  //               <div className="col-lg-6 d-none d-lg-block bg-login-image" />
  //               <div className="col-lg-6">
  //                 <div className="p-5">
  //                   <div className="text-center">
  //                     <h1 className="h4 text-gray-900 mb-4">Welcome UET !</h1>
  //                   </div>
  //                   <form className="user">
  //                     <div className="form-group">
  //                       <input
  //                         type="email"
  //                         className="form-control form-control-user"
  //                         id="userEmail"
  //                         aria-describedby="emailHelp"
  //                         placeholder="Enter Email Address..."
  //                         onChange = {(event) => onChangeEmailHandler(event)}
  //                         // onChange = {(event) => alert("hi")}
  //                       />
  //                     </div>
  //                     <div className="form-group">
  //                       <input
  //                         type="password"
  //                         className="form-control form-control-user"
  //                         id="userPassword"
  //                         placeholder="Password"
  //                         onChange = {(event) => onChangePassHandler(event)}
  //                       />
  //                     </div>
  //                     <div className="form-group">
  //                       <div className="custom-control custom-checkbox small">
  //                         <input
  //                           type="checkbox"
  //                           className="custom-control-input"
  //                           id="customCheck"
  //                         />
  //                         <label
  //                           className="custom-control-label"
  //                           htmlFor="customCheck"
  //                         >
  //                           Remember Me
  //                         </label>
  //                       </div>
  //                     </div>
  //                     <a
                        
  //                       className="btn btn-primary btn-user btn-block"
  //                       onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email1, password1)}}
  //                     >
  //                       Login
  //                     </a>
  //                     <hr />
  //                     <a
                        
  //                       className="btn btn-google btn-user btn-block"
  //                       onClick={() => {
  //                         signInWithGoogle();
  //                       }}
  //                     >
  //                       <i className="fab fa-google fa-fw" /> Login with
  //                       Google
  //                     </a>
  //                     <a
  //                       className="btn btn-facebook btn-user btn-block"
  //                       // onClick = {() => {auth.signOut()}}
  //                     >
  //                       <i className="fab fa-facebook-f fa-fw" /> Login with
  //                       Facebook
  //                     </a>
  //                   </form>
  //                   <hr />
  //                   <div className="text-center">
  //                     <Link to="/forgot-password">Forgot Password?</Link>
  //                   </div>
  //                   <div className="text-center">
  //                     <Link to="/register">Create an Account!</Link>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  //   );
  // };

  // export default SignIn;
