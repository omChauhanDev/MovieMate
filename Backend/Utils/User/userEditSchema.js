const z = require("zod");
const userEditSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  bio: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  phoneNo: z.string().min(13).max(13).optional(),
  age: z.number().optional(),
  gender: z.string().optional(),
  location: z
    .object({
      country: z.string().optional(),
      city: z.string().optional(),
    })
    .optional(),
});
module.exports = userEditSchema;
