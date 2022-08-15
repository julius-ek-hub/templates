import MyAlert from ".";

export default {
    title: 'Utils/Dialog',
    component: MyAlert,
}


const Template = props => <MyAlert  {...props} />

export const Alert = Template.bind({});
Alert.args = {
    open: false,
    title: 'Hello',
    children: 'Hi there, I missed you',
}