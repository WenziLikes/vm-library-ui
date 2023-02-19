import React, {FC} from 'react';
import "./ButtonVM.css"

export interface ButtonVMProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary: string | boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * ButtonVM contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const ButtonVM: FC<ButtonVMProps> = (buttonVMProps) => {

    const {primary, size = 'medium', backgroundColor, label, ...props} = buttonVMProps


    /** Info Classes
     *  --secondary
     *  --secondary-gray
     *
     *  --primary
     *  --primary-blue
     *
     *  --danger
     *  --danger-darkred
     *
     *  --success
     *  --success-green
     *
     *  --violet
     *  --violet-primary
     *
     * */
    const colors = [
        "secondary-gray",
        "primary",
        "primary-blue",
        "danger",
        "danger-darkred",
        "success",
        "success-green",
        "violet",
        "violet-primary",
    ];

    const colorsFilter = colors.filter((color) => {
        if (color === primary) {
            return primary
        }
    })
    console.log(colorsFilter)
    const mode = primary ? `--vm-btn--${colorsFilter}` : '--vm-btn--secondary';
    return (
        <button
            type="button"
            className={['--vm-btn', `--vm-btn--${size}`, mode].join(' ')}
            style={{backgroundColor}}
            {...props}
        >
            {label}
        </button>
    );
};
export default ButtonVM
