import './form-input.styles.scss';

export const FormInput = ({ label, ...otherProps }) => {

    const displayLabel = label.charAt(0).toUpperCase() + label.slice(1);

    return (
        <div className="group">
            <input className="form-input" {...otherProps}/>
            {label &&
                <label htmlFor={label}
                    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {displayLabel}
                </label>
            }
        </div>
    );
};
