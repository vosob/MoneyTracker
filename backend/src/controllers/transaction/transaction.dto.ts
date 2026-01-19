import { z } from "zod";

export const deleteTransactionDto = z.object({
  id: z.string().min(1),
});
