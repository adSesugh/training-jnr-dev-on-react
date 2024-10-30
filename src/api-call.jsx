import axios from "axios"
import { useEffect, useState } from "react"
// import styles from './styles/index.module.css'
// import './styles/index.css'
import logo from './assets/react.svg'
import AdminLayout from "./components/admin-layout"

export default function ApiCall() {
    const [photos, setPhotos] = useState([])
    const API_URL = 'https://jsonplaceholder.typicode.com'

    useEffect(() => {
        getPhotos()
    }, [])

    const getPhotos = async () => {
        try {
            const res = await axios.get(`${API_URL}/photos`)
            const { data, status } = res
            if(status === 200) {
                setPhotos(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <AdminLayout>
            <div className="grid sm:grid-cols-4 gap-4">
                {photos.map(photo => (
                    <div className="flex bg-white rounded-xl shadow-sm overflow-hidden">
                        <img width={150} src={photo.url} className="object-fit" />
                        <div className="flex p-4 items-center">
                            <p>{photo.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </AdminLayout>
    )
}