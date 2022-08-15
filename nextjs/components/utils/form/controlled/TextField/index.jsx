import { FunctionComponent } from "react";

import { useFormikContext } from "formik";

import Input, { uncontrolledInputType } from "../../uncontrolled/Input";

/**
 * @param {typeof uncontrolledInputType & {InputComponent: FunctionComponent}} props 
 */

const TextField = (props) => {

    const { errors, touched, values, handleChange } = useFormikContext();

    const { name, InputComponent, ...rest } = props;

    const error = errors[name];
    const value = values[name];

    const hasError = Boolean(touched[name] && error);

    const Component = InputComponent || Input;

    return (
        <Component
            {...(hasError && { error: hasError })}
            value={value}
            name={name}
            placeholder={props.placeholder || props.label}
            helperText={hasError ? error : props.helperText}
            onChange={handleChange}
            {...rest}
        />
    )
}

export default TextField;