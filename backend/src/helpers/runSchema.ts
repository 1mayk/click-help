import { ValidationError } from "@hapi/joi";

const runSchema = (schema: any) => (unknown: unknown) => {
  const { error } = schema.validate(unknown);
  if (error) throw new ValidationError(error.message, error.details, error._original)
};

export default runSchema;