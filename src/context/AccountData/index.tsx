import * as React from "react";

export type Account = {
    email: string,
    isAuthenticated: boolean
}

export type AccountData = {
    account: Account,
    signIn: () => void
}

export const initialAccountData = {
    account: {
      email: "",
      isAuthenticated: false
    },

    signIn: () => {}
};

const AccountDataContext = React.createContext<AccountData>(initialAccountData);

export default AccountDataContext;