import { useState } from "react";
import { Form, Field } from "react-final-form";
import { Button, View } from "@instructure/ui";
import SimpleSelect from "./fields/SimpleSelect";
import TextInput from "./fields/TextInput";

const TestForm = () => {
  const [formState, setFormState] = useState();
  const handleValidate = (values: any) => {
    const errors: {
      firstName?: string;
      action?: string;
    } = {};

    if (!values.firstName) {
      errors.firstName = "Required!";
    }

    if (!values.action) {
      errors.action = "Required!";
    }

    return errors;
  };

  return (
    <>
      <Form
        onSubmit={setFormState}
        validate={handleValidate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <View as="div" margin="medium 0">
              <Field
                name="firstName"
                component={TextInput}
                renderLabel="What is your first name?"
              />
            </View>
            <View as="div" margin="medium 0">
              <Field name="action" component={SimpleSelect} renderLabel="What do you want to do?">
                <SimpleSelect.Option id="1" value="demo-this">
                  Demo this
                </SimpleSelect.Option>
                <SimpleSelect.Option id="2" value="develop-further">
                  Develop further
                </SimpleSelect.Option>
              </Field>
            </View>
            <View as="div" margin="medium 0">
              <Button color="primary" type="submit">
                Save
              </Button>
            </View>
          </form>
        )}
      />
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  );
};

export default TestForm;
