import styles from "./QuantityBlock.module.css";
import styles1 from "../../../pages/main.module.css";
import cn from "classnames";
import { QuantityCard } from "../../QuantityCard/QuantityCard";

export const QuantityBlock = () => {
  return (
    <div className={cn(styles.quantity_block, styles1.container)}>
        <QuantityCard icon="work">Люблю свое дело</QuantityCard>
        <QuantityCard icon="honest">Ответственный за настроение</QuantityCard>
        <QuantityCard icon="education">Быстро обучаюсь</QuantityCard>
      </div>
  );
};
