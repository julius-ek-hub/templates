import { createElement, Children, FunctionComponent } from "react";

import transform from "./transformer";

/**
 * @param {{
 * rules: Array.<{
 * startsWith: String,
 * endsWith: String,
 * Decorator: FunctionComponent<{match: String}>
 * }>
 * }} props
 */

function Documentation(props) {
    const { children, rules = [] } = props;
    const count = Children.count(children);

    if (count === 0) return children;
    if (count === 1) {
        if (typeof children === 'string') return transform(children, rules);
        if (typeof children === 'object') {
            return createElement(
                children.type,
                children.props,
                <Documentation rules={rules}>{children.props.children}</Documentation>)
        }
    }
    return Children.map(children, (child, key) => <Documentation key={key} rules={rules}>{child}</Documentation>)
}

export default Documentation;