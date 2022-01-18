import { TextInput as InstTextInput } from "@instructure/ui";
import { FieldRenderProps } from "react-final-form";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InstTextInput> & FieldRenderProps<any>;

const TextInput = ({ input, meta, ...props }: Props) => {
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;
  const messages = showError
    ? [
        {
          text: meta.error || meta.submitError,
          type: "error" as const,
        },
      ]
    : undefined;

  return (
    <InstTextInput
      name={input.name}
      value={input.value}
      onBlur={input.onBlur}
      onChange={input.onChange}
      onFocus={input.onFocus}
      messages={messages}
      {...props}
    />
  );
};

export default TextInput;
