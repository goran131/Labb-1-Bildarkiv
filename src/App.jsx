import './App.css'
import Home from './components/Home'
import LayoutPage from './components/LayoutPage'
import ImageGroupPage from './components/ImageGroupPage'
import { Routes, Route } from 'react-router-dom'
/** import { useState, useEffect } from 'react' */

function App() {
    // Jag har inte fått detta att fungera, därför har jag hårdkodat datan imagegroups i denna filen
    // const [data, setData] = useState([])
    /**
    useEffect(() => {
        fetch('./image-data.json')
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])
    */
    const imagegroups = [
        {
            id: 0,
            name: 'Familj',
            description: 'Mina familjemedlemmar',
            images: [
                {
                    id: 0,
                    'image-url': './assets/father.jpg',
                    'image-description': 'Min far'
                },
                {
                    id: 1,
                    'image-url': './assets/mother.jpg',
                    'image-description': 'Min mor'
                },
                {
                    id: 2,
                    'image-url': './assets/brother.jpg',
                    'image-description': 'Min bror'
                },
                {
                    id: 3,
                    'image-url': './assets/sister.jpg',
                    'image-description': 'Min syster'
                },
                {
                    id: 4,
                    'image-url': './assets/brother-son-1.jpg',
                    'image-description': 'Min äldsta brorson'
                },
                {
                    id: 5,
                    'image-url': './assets/brother-son-2.jpg',
                    'image-description': 'Min yngsta brorson'
                },
                {
                    id: 6,
                    'image-url': './assets/sister-son.jpg',
                    'image-description': 'Min systerson'
                },
                {
                    id: 6,
                    'image-url': './assets/sister-daughter.jpg',
                    'image-description': 'Min systerdotter'
                }
            ]
        },
        {
            id: 1,
            name: 'Mina bilar',
            description: 'Mina bilar',
            images: [
                {
                    id: 0,
                    'image-url': './assets/mini.jpg',
                    'image-description':
                        'Min första bil var en Austin Mini Cooper 970S från 1965.'
                },
                {
                    id: 1,
                    'image-url': './assets/ferrari.jpg',
                    'image-description':
                        'Min andra bil var en Ferrari 308 GTS QV från 1984. Gissa vem som har kört den innan.'
                },
                {
                    id: 2,
                    'image-url': './assets/brother.jpg',
                    'image-description':
                        'Min tredje bil en Mercedes-AMG GT Coupé från 2023.'
                }
            ]
        }
    ]

    // const [imagegroups, setGroups] = useState(groups)

    return (
        <>
            <Routes>
                <Route path="/components/LayoutPage" element={<LayoutPage />} />
                <Route
                    path="/components/ImageGroupPage/:id"
                    element={<ImageGroupPage />}
                />
            </Routes>

            <Home groups={imagegroups} />
        </>
    )
}

export default App
