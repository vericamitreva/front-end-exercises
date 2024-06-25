import { ReactElement, ReactNode } from "react"

interface ButtonProps {
    type?: "outlined" | "filled" | "icon"
    size?: sizes
    color?: string
    disabled?: boolean
    loading?: boolean
    icon?: ReactElement,
    iconPosition?: "left" | "right"
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    children?: ReactNode
    [key: string]: any
}

interface BadgeProps {
    position?: "top-left" | "top" | "top-center" | "top-right" | "bottom-right"
    type?: "filled" | "full" | "outlined"
    content: string
    color?: string
}

type sizes = "small" | "medium" | "large"

type position = "left" | "center" | "right"

export {ButtonProps, BadgeProps, sizes, position}