import {TechnologyProps} from "./PortfolioBlock.props";
import {motion} from "framer-motion";

export const TechnologyBlock = ({duration,children}:TechnologyProps) => {
    return (
        <motion.div
        initial={{opacity: 0, x: 0, y: 10}}
        whileInView={{opacity: 1, x: 0, y: 0}}
        transition={{duration}}
        viewport={{once: true}}
    >
        {children}
    </motion.div>
    )
}
