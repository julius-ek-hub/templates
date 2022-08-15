import MyGroup from ".";
import Input from "../uncontrolled/Input";

export default {
    title: 'Utils/Form/Group',
    component: MyGroup,
}

const Template = props => (
    <MyGroup {...props}>
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
        <Input placeholder="Hello world" />
    </MyGroup>
);

export const Group = Template.bind({});

Group.args = {
    header: "Hello world",
    footer: 'No thehjefdmn df n bndb bns dbns nbsd',
    'col-sm': 2,
    'col-md': 2
}