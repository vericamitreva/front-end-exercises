import React, { FC } from "react"
import styles from "./badgeComponent.module.css"

interface BadgeComponentProps {
    position?: "top-left" | "top" | "top-center" | "top-right" | "bottom-right"
    type?: "filled" | "full" | "outlined"
    content: string
    color?: string
}

const BadgeComponent: FC<BadgeComponentProps> = ({ position="default", type="filled", content, color="blue" }) => {
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
