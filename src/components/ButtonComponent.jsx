import PropTypes from "prop-types"
import { Button } from "antd"

/**
 * The ButtonComponent is a reusable button component that is built using the Ant Design library. It supports various customization options through props.
 * Description of the props:
 * @param {string} type - Specifies the type of the button ("outlined", "filled", "icon"). Default value is "default".
 * @param {string} size - Specifies size of the button ("small", "medium", "large"). Default value is "default".
 * @param {string} color - Specifies the background color of the button. Default value is "".
 * @param {boolean} disabled - Specifies if the button is disabled. Default value is false.
 * @param {boolean} loading - Specifies if the button is loading (showing the spinner inside the button). Defaults to false.
 * @param {element} icon - Contains the icon that will be included in the button next to the content.
 * @param {string} iconPosition - Specifies the position of the icon ("left", "right"). Default value is "left".
 * @param {node} children - Contains the content inside the button. This prop is required.
 * @param {Function} onClick - Function that will be called when the button is clicked.
 * @param {Object} props - Contains any additional properties passed to the ButtonComponent.
 * @example <ButtonComponent type="outlined" size="large" icon={<Icon/>} iconPosition="right" onClick={() => alert("Button clicked!")}>
 *   Click me!
 * </ButtonComponent>
 */

export default function ButtonComponent({
    type = "default",
    size = "default",
    color = "",
    disabled = false,
    loading = false,
    icon,
    iconPosition = "left",
    onClick = () => {},
    children,
    ...props
 }) {

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

    function getIconPosition(iconPosition) {
        return (iconPosition === "left" ? "start" : "end")
    }

    return (
        <Button
            type={buttonType(type)}
            size={buttonSize(size)}
            style={{ background: color }}
            iconPosition={getIconPosition(iconPosition)}
            disabled={disabled}
            loading={loading}
            onClick={onClick}
            {...props}
        >
            {icon}
            {children}
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
    children: function(props) {
        if(!props.icon && !props.children) {
            return new Error("The children prop is required!")
        }
        return null
    }
}