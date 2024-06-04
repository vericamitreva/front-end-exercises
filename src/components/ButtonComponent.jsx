import PropTypes from "prop-types"
import { Button } from "antd"

export default function ButtonComponent({ type, size, color, disabled, loading, icon, iconPosition, onClick, children, ...props }) {

    function buttonType(type) {
        switch (type) {
            case "outlined":
                return "default";
            case "filled":
                return "primary";
            case "icon":
                return "icon";
            default:
                return "default"
        }
    }

    function buttonSize(size) {
        switch (size) {
            case "small":
                return "small";
            case "medium":
                return "default";
            case "large":
                return "large";
            default:
                return "default"
        }
    }

    return (
        <Button
            type={buttonType(type)}
            size={buttonSize(size)}
            style={{ background: color }}
            disabled={disabled}
            loading={loading}
            onClick={onClick}
            {...props}
        >
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
        </Button>
    )
}

ButtonComponent.propTypes = {
    type: PropTypes.oneOf(["outlined", "filled", "icon"]),
    onClick: PropTypes.func,
    icon: PropTypes.element,
    iconPosition: PropTypes.oneOf(["left", "right"]),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.string,
    children: PropTypes.node.isRequired
}

ButtonComponent.defaultProps = {
    onClick: () => {},
    iconPosition: "left",
    disabled: false,
    loading: false,
    color: ""
}
