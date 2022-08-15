import {
    useState,
    useImperativeHandle,
    forwardRef,
    useLayoutEffect,
} from "react";

import Button from "@mui/material/Button";

import Dialog, { DialogProps } from "../Dialogue";

const AlertRefForwarder = forwardRef(function Alert(props, ref) {
    const { children, title, action, open: opn, ...rest } = props;
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setOpen(true),
        close: () => setOpen(false)
    }));

    useLayoutEffect(() => {
        setOpen(opn);
    }, [opn]);

    return (
        <Dialog
            open={open}
            title={title ?? 'Alert'}
            action={action ?? <Button onClick={() => setOpen(false)}>OK</Button>}
            fullWidth
            {...rest}
        >
            {children}
        </Dialog>
    );
});

/**
 * Alert
 * @param {typeof DialogProps} props 
 */

const Alert = (props) => <AlertRefForwarder {...props} />;

export default Alert;