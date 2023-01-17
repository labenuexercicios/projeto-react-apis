import { BrowserRouter, Routes, Route } from "react-router-dom"
import Desktop1 from "../pages/desktop1"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Desktop1 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
