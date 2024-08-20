import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Modal from './component/Modal';
import { photos } from "./wonderPhotos";

export default function Home(): React.ReactNode {
  return (
    <div>
      <div>
        <h2>Welcome to Homepage</h2>
      </div>
      <div>
        <Link href="/photo-feed">
          <h4 style={{color:"blue"}}>Continue</h4>
        </Link>
      </div>
    </div>
  )

}