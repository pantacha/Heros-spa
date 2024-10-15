import { z } from "zod";

export const SearchItemsFormSchema = z.object({
    hero: z.string(),
})