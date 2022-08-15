import Row, { RowProps } from "../../Row";

/**
 * @param {typeof RowProps} props 
 */

const Group = (props) => <Row gap="1rem" col-md={4} col-sm={3} {...props} />;

export default Group;