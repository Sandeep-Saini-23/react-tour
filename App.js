import Header from "./src/components/Header"
import { Outlet } from "react-router-dom"
import { useNetworkStatus } from "./src/utils/hooks/useNetworkStatus"


//code spliting
//dynamic rendering
//lazy loading

function App() {
    const {isOnline} = useNetworkStatus()
    return (
        <div className='mainContainer'>
            <Header />
            {isOnline ? <Outlet/>: <h1>Your are not connected to internet, please make sure your internet is working</h1>}
        </div>
    )
}

export default App
