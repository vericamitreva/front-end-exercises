import React, { FC } from "react"
import styles from "./badgeComponent.module.css"
import { BadgeProps } from "../../../assets/types"


const BadgeComponent: FC<BadgeProps> = ({ position="default", type="filled", content, color="blue" }) => {
  return (
    <div className={`${styles.badgeContainer} ${styles[position]}`}>
        <div className={`${styles.badge}`} style={{
          backgroundColor: type === 'filled' || type === 'full' ? color : 'transparent',
          border: type === 'outlined' ? `2px solid ${color}` : 'none',
          color: type === 'filled' || type === 'full' ? "white" : color
        }}>
            {content}
         </div>
    </div>
  )
}

export default BadgeComponent
