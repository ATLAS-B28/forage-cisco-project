import React , {useEffect,useState} from 'react'
const Display = ({url})=>{
    const [ipAddres,setIpAddress] = useState(null)
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => setIpAddress(data.ip))
    },[url])
    return <span className="ip-address">{ipAddres}</span>
}
export default Display