const z = require("zod");
const emailSchema = z.object({
  email: z.string().email(),
});
module.exports = emailSchema;
