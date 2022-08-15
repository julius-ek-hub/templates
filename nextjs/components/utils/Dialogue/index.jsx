import {
    Dialog as MuiDialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    DialogContentText,
    Zoom
} from "@mui/material";
import { forwardRef } from "react";

import { DialogProps } from "./types";

const Transition = forwardRef(function Transition({ Component: TC = Zoom, ...props }, ref) {
    return <TC ref={ref} {...props} />;
});

/**
 * Customized Dialog base component
 * @arg {typeof DialogProps} props
 */

function Dialog(props) {
    const { children, title, action, ...rest } = props;
    return (
        <MuiDialog
            TransitionComponent={rest.TransitionComponent || Transition}
            {...rest}>
            {title && <DialogTitle>{title}</DialogTitle>}
            <DialogContent>
                {typeof children === 'string' ?
                    (<DialogContentText>{children}</DialogContentText>) :
                    children
                }
            </DialogContent>
            {action && <DialogActions>{action}</DialogActions>}
        </MuiDialog>
    );
}

export { DialogProps };

export default Dialog;