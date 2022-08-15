import MyInput from "./Input";

export default {
    title: 'Utils/Form/Uncontrolled',
    component: MyInput
}

const Template = args => <MyInput startAdornment="H" endAdornment="End" fullWidth />

export const Input = Template.bind({});

Input.args = {
    placeholder: 'Hello world',
    label: 'My label'
}