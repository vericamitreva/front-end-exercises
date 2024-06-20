import { Card, Row } from "antd"
import styles from "./cardComponent.module.css"
import ButtonComponent from "../ButtonComponent/ButtonComponent"
import React, { FC, ReactNode, useEffect, useState } from "react"
import { DownOutlined, UpOutlined } from "@ant-design/icons"
import BadgeComponent from "./BadgeComponent/BadgeComponent"

/**
 * The CardComponent is a reusable card component that is built using the Ant Design library. It supports various customization options through props.
 * Description of the props:
 * @param {node} header - Contains the content inside the header (title). Default value is an empty string.
 * @param {node} footer - Contains the content inside the footer. Default value is an empty string.
 * @param {object} style - Object in which the style is specified. Defaul value is an empty object.
 * @param {string} className - Contains the name of the class specifying the style. Default value is an empty string.
 * @param {boolean} collapsible - Specifies if the card content should be collapsible. Default value is false.
 * @param {boolean} clickable - Specifies if the card should be clickable. Default value is false.
 * @param {function} handleClick - Function that will be executed if clickable is true and the card is clicked.
 * @param {boolean} flipOnHover - Specifies if the card should be flipped. Default value is false.
 * @param {node} backContent - Contains the content for the back side of the card. Default value is an empty string.
 * @param {boolean} liveContent - Specifies if the card's content should be refreshed on a given interval. Default value is false.
 * @param {number} refreshInterval - Specifies the interval in which the card's content should be refreshed given in number of miliseconds. Default value is 5000.
 * @param {array} badges - Array which contains strings of words, for generating the badges. Default value is an empty array.
 * @param {object} badgesStyle - Object in which the style for the badges is specified. Default value is an empty object.
 * @param {node} children - Contains the content inside the CardComponent. This prop is required.
 * @param {object} props - Contains any additional properties passed to the CardComponent.
 * @example <CardComponent 
        header="Header" 
        footer="Footer" 
        style={style} 
        className="card-component" 
        collapsible={true} 
        clickable={true} 
        flipOnHover={false}
        liveContent={true}
        refreshInterval={6000}
        badges={["New", "Hot", "Sale"]}
        badgesStyle={badgesStyle}
        onClick={handleClick}
        backContent="Back Content"
      >
        Card content
      </CardComponent>
 */

interface CardComponentProps {
    header?: ReactNode
    footer?: ReactNode
    style?: object
    className?: string
    collapsible?: boolean
    clickable?: boolean
    handleClick?: () => void
    flipOnHover?: boolean
    backContent?: ReactNode
    liveContent?: boolean
    refreshInterval?: number 
    badges?: Array<Badge>
    badgesStyle?: object
    children?: ReactNode
}   

interface Badge {
    position?: "top-left" | "top" | "top-center" | "top-right" | "bottom-right" 
    type?: "filled" | "full" | "outlined" 
    content: string
    color?: string
}

const CardComponent: FC<CardComponentProps> = ({
    header = "",
    footer = "",
    style = {},
    className = "",
    collapsible = false,
    clickable = false,
    handleClick,
    flipOnHover = false,
    backContent = "",
    liveContent = false,
    refreshInterval = 5000,
    badges = [],
    badgesStyle = {},
    children,
    ...props
}) => {
    const [isCollapsed, setIsCollapsed] = useState(false)

    function handleCollapsed(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation()
        setIsCollapsed((prev) => !prev)
    }

    useEffect(() => {
        let refreshContent:number | undefined

        if (liveContent) {
            refreshContent = setInterval(() => {
                console.log("Refreshing content...")
            }, refreshInterval)
        }

        return () => {
            if (refreshContent) {
                clearInterval(refreshContent)
            }
        }
    }, [refreshInterval])

    return (
        <div
            className={`${styles.cardContainer} ${(flipOnHover && backContent) ? styles.flip : ""} ${clickable ? styles.clickable : ""}`}
            onClick={handleClick}
        >
        <div className={styles.card}>
            <div className={styles.cardFront}>
            <Card title={header} className={className} style={style} {...props}>
                    {badges.map((badge, index) => (
                        <BadgeComponent
                            key={index}
                            position={badge.position}
                            type={badge.type}
                            content={badge.content}
                            color={badge.color}
                        />
                    ))}
                <Row className={styles.childrenContainer}>
                    {children}
                </Row>
                {isCollapsed ? (
                <Row>Card content is expanded</Row>
                ) : (
                ""
                )}
                {collapsible && (
                <ButtonComponent type="icon" onClick={handleCollapsed}>
                    {isCollapsed ? <UpOutlined /> : <DownOutlined />}
                </ButtonComponent>
                )}
                {footer && (
                <Row>
                    <div className={styles.footer}>{footer}</div>
                </Row>
                )}
            </Card>
            </div>
            {flipOnHover && (
            <div className={styles.cardBack}>
                <Card title={header} className={className} style={style} {...props}>
                {backContent}
                </Card>
            </div>
            )}
        </div>
    </div>
  )
}

export default CardComponent
