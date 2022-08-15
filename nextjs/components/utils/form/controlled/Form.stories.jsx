import MyForm from "./Form";
import TextField from "./TextField";
import SubmitButton from "./SubmitButton";
import DatePicker from "./DatePicker";
import Input from '../uncontrolled/Input';
import Row from "../../Row";

import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Please enter your name'),
    date: Yup.date().required()
})

export default {
    title: 'Utils/Form/controlled',
    component: MyForm
}

const Template = args => (
    <MyForm
        validationSchema={validationSchema}
        initialValues={{ name: 'Julius', date: new Date() }}
        onSubmit={v => console.log(v)}
        title="Address"
        description="No nee to supply descriptiombdbbfb db fsbn sbb"
    >
        <Row
            col-sm="2"
            gap="1rem"
            header="Profile"
            footer="No nee to supply descriptiombdbbfb db fsbn sbb"
            sx-sm={{ p: 2 }}>
            <TextField name="name" label="Name" />
            <DatePicker name="date" label="Date of Birth" />
        </Row>
        <Row
            col-sm="2"
            gap="1rem"
            header="Profile"
            footer="No nee to supply descriptiombdbbfb db fsbn sbb"
            sx-sm={{ p: 2 }}
        >
            <Input placeholder="Hello world" label="No label today" size="medium" />
            <Input placeholder="Hello world" label="No label today" size="medium" />
            <Input placeholder="Hello world" label="No label today" size="medium" />
            <Input placeholder="Hello world" label="No label today" size="medium" />
            <Input placeholder="Hello world" label="No label today" size="medium" />
            <Input placeholder="Hello world" label="No label today" size="medium" />
            <Input placeholder="Hello world" label="No label today" size="medium" />
            <Input placeholder="Hello world" label="No label today" size="medium" />
            <Input placeholder="Hello world" label="No label today" size="medium" />
            <Input placeholder="Hello world" label="No label today" size="medium" />
            <Input placeholder="Hello world" label="No label today" size="medium" />
        </Row>
        <Row
            col-sm="2"
            gap="1rem"
            header="Profile"
            footer="No nee to supply descriptiombdbbfb db fsbn sbb"
            sx-sm={{ p: 2 }}
        >
            <Input placeholder="Hello world" />
            <Input placeholder="Hello world" />
            <Input placeholder="Hello world" />
            <Input placeholder="Hello world" />
            <Input placeholder="Hello world" />
        </Row>
        <SubmitButton>Submit</SubmitButton>
    </MyForm>
)

export const Form = Template.bind({});

Form.args = {
    placeholder: 'Hello world',
    label: 'My label'
}