import runSchema from "./runSchema";
import schemas from "./schemas";

const validations = {
  userValidation: runSchema(schemas.userBody),
};

export default validations;
