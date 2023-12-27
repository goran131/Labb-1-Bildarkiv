import './App.css'
import Layout from './components/Layout'
import ImageGroup from './components/ImageGroup'
import {
    createBrowserRouter,
    Link,
    Outlet,
    RouterProvider,
    Routes,
    Route
} from 'react-router-dom'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="./components/Layout" element={<Layout />} />
                <Route
                    path="./components/ImageGroup"
                    element={<ImageGroup />}
                />
            </Routes>
            <div>
                <h1>Bildarkiv</h1>
                <div className="headertext">
                    <p>Här kan du lägga upp dina bilder grupperade i grupper</p>
                    <Layout />
                </div>
            </div>
        </>
    )
}

export default App
