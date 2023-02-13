import runSchema from "./runSchema";
import schemas from "./schemas";

const validations = {
  userValidation: runSchema(schemas.userBody),
  loginValidation: runSchema(schemas.loginBody),
};

export default validations;
