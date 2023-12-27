/** import { useState, useEffect } from 'react' */
import { useParams, useLocation } from 'react-router-dom'

function ImageGroupPage() {
    const { id } = useParams()
    const location = useLocation()
    const imagegroups = location.state

    return (
        <>
            <p>Imagegroup with id={id}</p>
        </>
    )
}

export default ImageGroupPage
