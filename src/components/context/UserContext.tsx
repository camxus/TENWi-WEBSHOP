import React, { useState, useEffect, ReactNode } from "react";
interface IUserProvider {
  children?: ReactNode;
}

export const UserContext = React.createContext([{}, () => {}]);

export const UserProvider = (props: IUserProvider) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    let data = localStorage.getItem("user-info");
    data = data ? JSON.parse(data) : "";
    setUser(data);
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
