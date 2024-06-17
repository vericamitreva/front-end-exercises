import PropTypes from 'prop-types'
import styles from './badgeComponent.module.css'

const BadgeComponent = ({ position="default", type="filled", content, color="blue" }) => {
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

BadgeComponent.propTypes = {
  position: PropTypes.string,
  type: PropTypes.string,
  content: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default BadgeComponent
