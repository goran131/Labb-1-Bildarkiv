import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'

const NewGroupPage = () => {
    const location = useLocation()
    const groups = location.state

    let [imagegroups, setImagegroups] = useState(groups)
    let newImagegroups = []

    const createNewGroup = (event) => {
        event.preventDefault()
        let name = event.target.groupName.value
        let description = event.target.description.value
        let id = imagegroups.length

        newImagegroups = [
            ...imagegroups,
            { id: id, name: name, description: description, images: [] }
        ]

        setImagegroups(newImagegroups)
        alert('Ny grupp sparad')
    }

    const uploadImage = (event) => {
        event.preventDefault()
        let imageUrl = event.target.imageFile.value
    }

    return (
        <>
            <Link to="/" state={imagegroups}>
                <h1 className="header">Bildarkiv</h1>
            </Link>
            <h3>Ny bildgrupp</h3>

            <div>
                <form onSubmit={createNewGroup}>
                    <div>
                        <label>Gruppnamn</label>
                        <input
                            type="text"
                            name="groupName"
                            className="text-input"
                        ></input>
                    </div>
                    <div>
                        <label>Beskrivning </label>
                        <input
                            type="text"
                            name="description"
                            className="text-input"
                        ></input>
                    </div>
                    <br />
                    <button type="submit">Spara bildgrupp</button>
                </form>
                {/** Fungerar inte att ladda upp bilder */}
                <form onSubmit={uploadImage} className="displayNone">
                    <div>
                        <input
                            type="text"
                            name="imageName"
                            className="text-input"
                        ></input>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="imageDescription"
                            className="text-input"
                        ></input>
                        <div></div>
                        <input type="file" name="imageFile"></input>
                    </div>
                    <button type="submit">Spara bild</button>
                </form>
            </div>
            <br />
            <div>
                <Link to="/components/LayoutPage" state={imagegroups}>
                    Tillbaka
                </Link>
            </div>
        </>
    )
}

NewGroupPage.propTypes = { imagegroups: PropTypes.array }

export default NewGroupPage
