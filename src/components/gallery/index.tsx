import Pair from "./pair";
import styles from "./styles.module.scss";
import { gallery } from "./data";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <Pair pair={[gallery[0], gallery[1]]} />
      <Pair pair={[gallery[2], gallery[3]]} />
      <Pair pair={[gallery[4], gallery[5]]} />
      <Pair pair={[gallery[6], gallery[7]]} />
    </div>
  );
}
export default Gallery;
