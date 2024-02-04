const z = require("zod");
const signinSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
module.exports = signinSchema;
