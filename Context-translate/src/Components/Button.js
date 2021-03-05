import React from "react";
import ColorContext from "../Contexts/ColorContext";
import LanguageContext from "../Contexts/LanguageContext";

const Button = () => {
  const renderSubmit = (value) => {
      return value === "english" ? "Submit" : "Voorleggen";
  }


    return (
      <ColorContext.Consumer>
      {(color) => {
        return (
          <button className={`ui button ${color}`}>
            {
              <LanguageContext.Consumer>
                {(value) => renderSubmit(value)}
              </LanguageContext.Consumer>
            }
          </button> )
      }}
      </ColorContext.Consumer>
        
    )
}

// class Button extends React.Component {
//   static contextType = LanguageContext;
//   renderSubmit(value) {
//     return value === "english" ? "Submit" : "Voorleggen";
//   }

//   render() {
//     // const text = this.context === "english" ? "Submit" : "Voorleggen";
//     return (
//       <ColorContext.Consumer>
//         {(color) => {
//           return (
//             <button className={`ui button ${color}`}>
//               {
//                 <LanguageContext.Consumer>
//                   {(value) => this.renderSubmit(value)}
//                 </LanguageContext.Consumer>
//               }
//             </button>
//           );
//         }}
//       </ColorContext.Consumer>
//     );
//   }
// }

export default Button;
