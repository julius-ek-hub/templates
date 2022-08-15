import MyDocumentation from ".";


export default {
    title: 'Utils',
    component: MyDocumentation
}

const Template = props => <MyDocumentation {...props} />

export const Documentation = Template.bind({});

Documentation.args = {
    children: 'Hello bro,yesterday _I was moving from roles to play _to making the things a',
    rules: [
        {
            startsWith: '_',
            endsWith: '_',
            Decorator: ({ match }) => <code>{match}</code>,
        },
    ]
}