import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button 
    className={`${isGoogleSignIn ? "google-sign-in " : ""}custom-button`} 
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton;