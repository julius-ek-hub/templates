import {
    Box,
    BoxProps,
    SxProps,
} from "@mui/material";

import useDimension from "../../../hooks/useDimensions";

/**
 * @type { BoxProps & {
 * 'sx-xsm': SxProps,
 * 'sx-sm': SxProps,
 * 'sx-md': SxProps,
 * 'sx-lg': SxProps,
 * 'sx-xlg': SxProps
 * }
 * }
 */

export let RowProps;

/**
 * @param {typeof RowProps} props 
 */

function Responsive(props) {
    const { sx: _sx, ...rest } = props;

    const { up } = useDimension();
    let sx = _sx;

    Object.keys(up).forEach(size => up[size] && (rest[`sx-${size}`] && (sx = rest[`sx-${size}`])));

    return <Box {...rest} sx={sx} />
}

export default Responsive;