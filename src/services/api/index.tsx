import React, {useEffect, useState} from "react";

// TODO: not working. fix error [Invalid hook call]
export const SignIn = (accessToken: string) => {
    const [url, setUrl] = useState<string>("https://localhost:9000/api/sellers/sign-in");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await fetch(url, {
                        method: 'GET',
                        headers: {"X-Access-Token": accessToken}
                    });

                //setData(result.data);
                console.log(result)
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return setUrl;
}

export const useDataApi = (initialUrl: string, initialData: any) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await fetch(url);

                //setData(result.data);
                console.log(result)
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return [{data, isLoading, isError}, setUrl];
};