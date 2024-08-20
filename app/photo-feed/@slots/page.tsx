import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Modal from '../../component/Modal';
import { photos } from "../../wonderPhotos";

export default function Slots() {
  console.log(photos)
  return photos.map(photo => {
    return (
      <>
      
        <Modal imgUrl={photo.imgUrl} name={photo.name} location={photo.location} >
        </Modal>
      </>
    )
  })
}