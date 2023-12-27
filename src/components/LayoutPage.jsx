import { Link, useLocation } from 'react-router-dom'

const LayoutPage = () => {
    const location = useLocation()
    const imagegroups = location.state

    return (
        <>
            <div>
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
        </>
    )
}

export default LayoutPage
