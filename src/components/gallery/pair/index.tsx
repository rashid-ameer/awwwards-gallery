import { useRef } from "react";
import styles from "./styles.module.scss";

type PairProps = {
  pair: {
    src: string;
    title: string;
    description: string;
    time: string;
  }[];
};

function Pair({ pair }: PairProps) {
  const [item1, item2] = pair;

  const firstItem = useRef<HTMLDivElement>(null);
  const secondItem = useRef<HTMLDivElement>(null);
  let mXPos = 0;
  let currentXPos = 0;
  const speed = 0.1;
  let requestAnimationFrameId: undefined | number = undefined;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    mXPos = ((e.clientX - left) / width) * 100;

    if (!requestAnimationFrameId) {
      animate();
    }
  };

  const animate = () => {
    const deltaXPercent = mXPos - currentXPos;

    currentXPos += deltaXPercent * speed;
    console.log(deltaXPercent, currentXPos, mXPos);

    // minimum of 33.33% and maximmum of 66.66%
    firstItem.current!.style.width = `${66.66 - currentXPos * 0.33}%`;
    secondItem.current!.style.width = `${33.33 + currentXPos * 0.33}%`;

    if (Math.round(currentXPos) !== Math.round(mXPos)) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId!);
      requestAnimationFrameId = undefined;
    }
  };

  const handleMouseOut = () => {
    if (requestAnimationFrameId) {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = undefined;
    }
  };

  return (
    <div
      className={styles.pair}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}>
      {/* first item */}
      <div
        className={styles.item}
        ref={firstItem}>
        <img src={`/images/${item1.src}`} />
        <div className={styles.body}>
          <h3>{item1.title}</h3>
          <p>{item1.description}</p>
          <time>{item1.time}</time>
        </div>
      </div>

      {/* second item */}
      <div
        className={styles.item}
        ref={secondItem}>
        <img src={`/images/${item2.src}`} />
        <div className={styles.body}>
          <h3>{item2.title}</h3>
          <p>{item2.description}</p>
          <time>{item2.time}</time>
        </div>
      </div>
    </div>
  );
}
export default Pair;
