import MyText from ".";

export default {
    title: 'Utils',
    component: MyText,
    argTypes: {
        color: {
            control: 'text'
        }
    }
}


const Template = props => <MyText {...props} />

export const Text = Template.bind({});
Text.args = {
    children: 'Hello World',
    color: 'error'
}