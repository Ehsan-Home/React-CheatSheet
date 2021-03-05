import React from "react";
import LanguageContext from "../Contexts/LanguageContext";
import Button from "./Button";
import Field from "./Field";

// const UserCreate = () => {
//     return (
//         <div className="ui form">
//             <Field />
//             <Button />
//         </div>
//     )
// }

class UserCreate extends React.Component {
    static contextType = LanguageContext
  render() {
      console.log("context",this.context)
    return (
      <div className="ui form">
        <Field />
        <Button />
      </div>
    );
  }
}

export default UserCreate;
