/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
  className?: string;
} & TFormConfig;

const QuickForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
  className,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const method = useForm(formConfig);

  const { handleSubmit, reset } = method;

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(submit)} className={cn(className)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default QuickForm;
