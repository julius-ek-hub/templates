import { ReactNode } from 'react';
import { TextField, InputAdornment, TextFieldProps } from '@mui/material';

/**
 * @type {{
 * startAdornment: ReactNode,
 * endAdornment: ReactNode,
 * } & TextFieldProps} 
 */
export let uncontrolledInputType;

/**
 * @param {typeof uncontrolledInputType} props 
 */

function Input(props) {

    const { startAdornment, endAdornment, InputProps, ...rest } = props;
    return (
        <TextField
            InputProps={{
                ...(startAdornment && { startAdornment: (<InputAdornment position='start'>{startAdornment}</InputAdornment>) }),
                ...(endAdornment && { endAdornment: (<InputAdornment position='end'>{endAdornment}</InputAdornment>) }),
                ...InputProps
            }}
            {...rest} />
    );
}

export default Input;