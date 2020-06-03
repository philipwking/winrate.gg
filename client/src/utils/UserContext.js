import React from "react";

const UserContext = React.createContext({
  username: "",
  userId: "",
  gameId: ""
});

export default UserContext;
