import Gallery from "../gallery";
import styles from "./styles.module.scss";

function Product() {
  return (
    <div className={styles.product}>
      <h2 className={styles.title}>
        We use design and technology to create brands and products that perform,
        delight, and scale.
      </h2>

      <Gallery />
    </div>
  );
}
export default Product;
