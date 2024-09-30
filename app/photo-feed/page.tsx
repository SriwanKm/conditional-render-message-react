import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Modal from '../component/Modal';
import { photos } from "../wonderPhotos";

export default function PhotoFeed() {

  return (
    <div style={{ textAlign: "center" }}>

      <h2 style={{backgroundColor: "pink"}}> Wonders of the World</h2>
      <div>
        {photos.map(photo => 
           (
            <div key={photo.id} style={{ padding: "10px" }}>
                <Link href={`/photo-feed/${photo.id}`}>
                <Modal imgUrl={photo.imgUrl} name={photo.name} location={photo.location} />
            </Link>
              </div>
          )
        )}
      </div>
    </div>
  )

}