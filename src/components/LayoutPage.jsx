import { useState, useEffect } from 'react'
import ImageGroupPage from './ImageGroupPage'
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    Link,
    useLocation
} from 'react-router-dom'

const LayoutPage = () => {
    // const [data, setData] = useState([])
    /**
    useEffect(() => {
        fetch('./image-data.json')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])
    */
    const location = useLocation()
    const imagegroups = location.state

    return (
        <>
            <div>
                <p>Gorros was here</p>
                <ul>
                    {imagegroups.map((group) => (
                        <li key={group.id}>
                            <Link
                                to="/components/ImageGroupPage/{group.id}"
                                state={imagegroups}
                            >
                                {group.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default LayoutPage
