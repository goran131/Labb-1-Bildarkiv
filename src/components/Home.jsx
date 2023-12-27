import { Link } from 'react-router-dom'

function Home({ groups }) {
    return (
        <>
            <div>
                <h1>Bildarkiv</h1>
                <div className="headertext">
                    <p>Här kan du lägga upp dina bilder grupperade i grupper</p>
                    <button>
                        <Link to="/components/LayoutPage" state={groups}>
                            Visa bildarkiv
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home
