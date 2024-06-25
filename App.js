import Header from "./src/components/Header"
import { Outlet } from "react-router-dom"
import { useNetworkStatus } from "./src/utils/hooks/useNetworkStatus"
import { useContext, useEffect, useState } from "react"
import { ResContext } from "./src/context/ResContext"
import { Provider } from "react-redux"
import AppStore from "./src/store/AppStore"
// import HTMLToPDF from "./htmlToPdf"


//code spliting
//dynamic rendering
//lazy loading

//lifting state up  ==> update state from child
//controlled & uncontrolled components

//props drilling

//useMemo
//useCallback
//useRef

function App() {
    const { isOnline } = useNetworkStatus()
    const [user, setUser] = useState('')
    const { userName } = useContext(ResContext)

    useEffect(() => {
        setUser('John')
    }, [])

    return (
        <Provider store={AppStore}>
            <ResContext.Provider value={{ userName: user, setUser }}>
                <div className='mainContainer'>
                    <ResContext.Provider value={{ userName }}>
                        <Header />
                    </ResContext.Provider>
                    {isOnline ? <Outlet /> : <h1>Your are not connected to internet, please make sure your internet is working</h1>}
                </div>
            </ResContext.Provider>
        </Provider>
        // <HTMLToPDF/>
    )
}

export default App
