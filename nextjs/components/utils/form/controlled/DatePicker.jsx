import UncontrolledDatePicker, { datePickerProps } from '../uncontrolled/DatePicker';

import { useFormikContext } from 'formik';

/**
 * @param {typeof datePickerProps & {name: String}} props 
 */

const DatePicker = (props) => {
    const { errors, touched, values, handleChange } = useFormikContext();

    const { name, InputProps, ...rest } = props;

    const error = errors[name];
    const value = values[name];

    const hasError = Boolean(touched[name] && error);

    const onChange = (date) => handleChange({ target: { value: date?.$d, name } });

    return (
        <UncontrolledDatePicker
            value={value}
            onChange={onChange}
            InputProps={{
                error: hasError,
                name,
                ...InputProps
            }}
            {...rest}
        />
    )
}

export default DatePicker;