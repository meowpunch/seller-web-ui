import React, {useState} from "react";
import AccountDataContext, {AccountData, initialAccountData} from "./index";

type Props = {
    children: React.ReactNode
}

// type State = AccountData;

const AccountDataProvider: React.FC<Props> = (props: Props) => {

    const signIn = () => {

        /*
        try {
            const res = await fetch('/api/account/');
            const account = await res.json();
            console.log(account)

            setState({...state, account: account})
        } catch (e) {

            console.log(e);
        }
         */

        fetch('https://localhost:9000/api-seler/sign-in', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-Access-Token": "1234"
            },
        })
            .then(response => response.json())
            .then((response: any) => {
                console.log(response)
                setState({
                        ...state,
                        account: {
                            email: '',
                            isAuthenticated: true
                        }
                    })
                console.log(state.account)
            })
    }

    const initState = {
        account: initialAccountData.account,
        signIn: signIn,
    }

    const [state, setState] = useState<AccountData>(initState)

    return (
        <AccountDataContext.Provider value={state}>
            {props.children}
        </AccountDataContext.Provider>
    )
}

export default AccountDataProvider


// class component with Context API
/* class AccountDataProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...initialAccountData,
            setAccount: this.setAccount
        };
        this.setAccount = this.setAccount.bind(this);
    }

    setAccount = () => {
        fetch('http://127.0.0.1:8000/api/account', {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
  })
      .then(response => response.json())
      .then((response: Account) => {

          console.log(response)

          this.setState({account: response});
      })

    };

    render() {
        return (
            <AccountDataContext.Provider value={this.state}>
                {this.props.children}
            </AccountDataContext.Provider>
        );
    }
}

export default AccountDataProvider; */


/* try {
    const res = await fetch('/api/account/');
    const account = await res.json();
    console.log(account)

    setState({...state, account: account})
} catch (e) {

    console.log(e);
}

console.log(state.account) */