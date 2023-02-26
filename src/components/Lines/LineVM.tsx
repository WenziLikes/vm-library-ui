import React, {FC} from 'react';

export interface LineVMProps {
    width: string;
    height: string;
    backgroundColor?: string;
    position?: "start" | "center" | "end";
}

const LineVM: FC<LineVMProps> = (lineVMProps) => {
    const {backgroundColor, width, height, position = "center", ...props} = lineVMProps

    return (
        <div  className={[`--flex-vm--${position}`].join(" ")}>
            <div
                style={{backgroundColor,width,height}}
                {...props}
            />
        </div>

    );
};

export default LineVM;
