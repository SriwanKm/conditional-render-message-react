import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Modal from '../../../../component/Modal';
import { photos } from "../../../../wonderPhotos";
import { notFound } from "next/navigation";

export default function InterceptPhoto({ params }: { params: { id: string } }) {
  const el = photos.find(photo => photo.id === params.id);

  if (el) {
    return (
      <>
        <Modal imgUrl={el.imgUrl} name={el.name} location={el.location} />
      </>
    );
  } else {
    return notFound();
  }
}