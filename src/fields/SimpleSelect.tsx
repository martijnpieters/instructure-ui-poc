import { SimpleSelect as InstSimpleSelect } from "@instructure/ui";
import { FieldRenderProps } from "react-final-form";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof InstSimpleSelect> & FieldRenderProps<any>;

const SimpleSelect = ({ input, meta, ...props }: Props) => {
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

  const handleChange = (_event: any, { value }: { value: any }) => {
    input.onChange(value);
  };

  return (
    <InstSimpleSelect
      name={input.name}
      value={input.value}
      onBlur={input.onBlur}
      onChange={handleChange}
      onFocus={input.onFocus}
      messages={messages}
      {...props}
    />
  );
};

SimpleSelect.Option = InstSimpleSelect.Option;

export default SimpleSelect;
