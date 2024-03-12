
import styles from "./page.module.css";
import Header from "@/components/header/Header"
import AllCameras from "@/components/allCameras/AllCameras"
import Camera from "@/components/allCameras/camera/Camera";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.camera}>
        <Camera />
      </div>
    </main>
  );
}
