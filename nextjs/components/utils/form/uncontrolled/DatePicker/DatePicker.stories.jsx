import MyDatePicker from ".";

export default {
    title: 'Utils/Form/Uncontrolled',
    component: MyDatePicker,
    argTypes: {
        type: {
            control: 'select',
            options: ['datetime', 'date', 'time']
        }
    }
}

const Template = args => <MyDatePicker {...args} />

export const DatePicker = Template.bind({});

DatePicker.args = {
    label: 'Pick a date',
    type: 'datetime'
}