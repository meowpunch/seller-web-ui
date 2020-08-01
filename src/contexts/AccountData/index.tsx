import * as React from "react";

export type Account = {
    email: string,
    phoneNumber: string
}

export type AccountData = {
    account: Account,
    isAuthenticated: boolean,

    setAccount: (data: Account) => void
    authorize: () => void
    deauthorize: () => void
}

export const initialAccountData = {
    account: {
        email: "",
        phoneNumber: ""
    },
    isAuthenticated: false,

    setAccount: (data: Account) => {},
    authorize: () => {},
    deauthorize: () => {}
};

const AccountDataContext = React.createContext<AccountData>(initialAccountData);

export default AccountDataContext;