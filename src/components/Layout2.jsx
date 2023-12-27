import { useState, useEffect } from 'react'
import ImageGroup from './ImageGroup'
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    Link
} from 'react-router-dom'

const Layout = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('./image-data.json')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])
    /**
    const router = createBrowserRouter([
        {
            children: [{ element: <ImageGroup />, path: './ImageGroup/:id' }]
        }
    ])
     */

    return (
        <>
            {/** <RouterProvider router={router} /> */}

            <div>
                <p>Gorros was here</p>
                <ul>
                    {data.map((group) => (
                        <li key={group.id}>
                            <Link to="./ImageGroup/{group.id}">
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

export default Layout
