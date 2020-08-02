import {CognitoUserPool, ICognitoUserPoolData} from "amazon-cognito-identity-js";

const poolData: ICognitoUserPoolData = {
    UserPoolId: 'ap-northeast-2_O4ZcAAsEq',
    ClientId: '72o0bdsoe94u4lj086g7go6do'
}

export const userPool = new CognitoUserPool(poolData);