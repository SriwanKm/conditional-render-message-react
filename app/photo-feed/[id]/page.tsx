import { photos } from "../../wonderPhotos"
import { notFound } from "next/navigation"

export default function PhotoId({ params }: {
    params: {
        id: string
    }
}) {

    const el = photos.find(photo => photo.id === params.id)
    if (el) {
        return (
            <div style={{ margin: "20px", textAlign: "center" }}>
                <img
                    width={600}
                    height={350}
                    src={el.imgUrl}
                    alt={el.name} />

                <div style={{ backgroundColor: "white", width: "100%", color: "black" }}>
                    <div>{el.name}</div>
                    <div>{el.location}</div>
                </div>
            </div>
        )
    } else notFound()
}