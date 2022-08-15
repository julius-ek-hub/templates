import MuiButton from "@mui/material/Button";

export default {
    title: 'Utils/Button',
    component: MuiButton,
    argTypes: {
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'error']
        },
        variant: {
            control: 'select',
            options: ['contained', 'outlined', 'text']
        },
        children: {
            control: 'text'
        }
    }
}


const Template = props => <MuiButton {...props} />

export const Button = Template.bind({});
Button.args = {
    color: "primary",
    children: 'Primary',
    variant: 'contained',
}