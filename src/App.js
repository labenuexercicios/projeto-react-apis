import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Router from "./routes/Router"

const App = () => {



    
    return (
        <>
            <ChakraProvider>
                <Router />
            </ChakraProvider>
        </>
    )
}
export default App