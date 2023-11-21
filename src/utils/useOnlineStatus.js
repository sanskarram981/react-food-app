import { useEffect ,useState} from "react";



const useOnlineStatus = () => {
    const[onlineStatus,setOnlineStatus] = useState(true);
    useEffect(()=>{
        console.log("useOnlineStatus-useEffect()");
        window.addEventListener("online",()=>{
            console.log("setting online");
            setOnlineStatus(true);
        })

        window.addEventListener("offline",()=>{
            console.log("setting offline");
            setOnlineStatus(false);
        })
    },[]);

    return onlineStatus;
};

export default useOnlineStatus;