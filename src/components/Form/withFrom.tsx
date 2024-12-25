import React, { ComponentType } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";

export interface FromProps<T extends FieldValues> {
  defaultValues?: Partial<T>;
  form: UseFormReturn<T>;
  errors: any;
  onSubmit: SubmitHandler<T>;
}

const withFrom = <T extends FieldValues>(
  WrappedComponent: ComponentType<FromProps<T>>
) => {
  return (  props: Omit<FromProps<T>, "form" | "errors">) => {
    const { defaultValues, onSubmit } = props;
    const from = useForm<T>(defaultValues);
    const {
      handleSubmit,
      formState: { errors },
    } = from;
    const handleFormSubmit = handleSubmit(onSubmit);

    return (
      <form onSubmit={handleFormSubmit}>
        <WrappedComponent {...props} form={from} errors={errors} />
      </form>
    );
  };
};

export default withFrom;
