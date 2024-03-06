import { useEffect, useState } from "react";

export const useOnlineStatus = () =>{
    const [internetStaus, setInternetStaus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setInternetStaus(false);
        })

        window.addEventListener("online", () => {
            setInternetStaus(true);
        })
    }, [])

    return internetStaus;
}