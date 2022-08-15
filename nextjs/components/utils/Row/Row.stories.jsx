import MyRow from ".";
import Input from "../form/uncontrolled/Input";

export default {
    component: MyRow,
    title: 'Utils/Row',
    argTypes: {
        header: { control: 'text' },
        footer: { control: 'text' },
    }
}

const Template = props => (
    <MyRow {...props}>
        <Input placeholder="Testing row" />
        <Input placeholder="Testing row" />
        <Input placeholder="Testing row" />
        <Input placeholder="Testing row" />
    </MyRow>
)

export const Demo = Template.bind({});

Demo.args = {
    gap: '0',
    columnGap: '0',
    header: '',
    footer: '',
    'sx-xsm': {},
    'sx-sm': {},
    'sx-md': {},
    'sx-lg': {},
    'sx-xlg': {}
}