import React, {FC} from 'react';

export interface ButtonVMProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary: boolean;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * ButtonVM contents
     */
    label: string;

    styleColorBtn:
        "secondary" | "secondary-gray" |
        "primary" | "primary-blue" |
        "danger" | "danger-darkred" |
        "success" | "success-green" |
        "violet" | "violet-primary";
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const ButtonVM: FC<ButtonVMProps> = (buttonVMProps) => {

    const {primary = false, size = 'medium', styleColorBtn, label, ...props} = buttonVMProps

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
     * */
    const mode = primary ? `--vm-btn--${styleColorBtn}` : '--vm-btn--secondary';
    return (
        <button
            type="button"
            className={['--vm-btn', `--vm-btn--${size}`, mode].join(' ')}
            {...props}
        >
            {label}
        </button>
    );
};
export default ButtonVM
