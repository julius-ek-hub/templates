import MyResponsive from ".";

export default {
    title: 'Utils',
    component: MyResponsive
}

const Template = props => <MyResponsive {...props} />

export const Responsive = Template.bind({});

Responsive.args = {
    children: 'hello world',
    sx: {
        bgcolor: 'red'
    },
    'sx-sm': {
        bgcolor: 'blue'
    },
    'sx-md': {
        bgcolor: 'yellow'
    }
}