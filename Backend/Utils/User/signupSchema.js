const z = require("zod");
const signupSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  phoneNo: z.string().min(13).max(13),
  gender: z.string(),
});

module.exports = signupSchema;
