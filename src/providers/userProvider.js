// import React, { Component, createContext, useContext } from "react";
// import { auth, generateUserDocument } from "../firebaseConnect";


// export const UserContext = createContext({ user: null });
// export const userCurrent = useContext(UserContext);
// class userProvider extends Component {
//   state = {
//     user: null
//   };

  
  
//   componentDidMount = async () => {
//     auth.onAuthStateChanged(async userAuth => {
//       const user = await generateUserDocument(userAuth);
//       this.setState({ user });
//     });
//   };

//   render() {
//     const { user } = this.state;

//     return (
//       <UserContext.Provider value={user}>
//         {this.props.children}
//       </UserContext.Provider>
//     );
//   }
// }

// export default userProvider;
