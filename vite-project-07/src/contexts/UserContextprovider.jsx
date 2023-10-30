import React from "react";
import userContext from "./userContext";

const UserContextprovider = ({ childern }) => {
  const [user, setuser] = React.useState(null);
  return;
  <userContext.Provider value={(user, setuser)}>
    {childern}
  </userContext.Provider>;
};

export default UserContextprovider;
