import React, { createContext, useState } from "react";
import app from "../firbase/firebase.config";

const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  return <div>AuthProvider</div>;
};

export default AuthProvider;
