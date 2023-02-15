import './button.styles.scss';

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
};

export const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <>
            <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}>
                {children}
            </button>
        </>
    );
};
