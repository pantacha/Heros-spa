import { z } from "zod";
import { SearchItemsFormSchema } from "../utils/heros-schema";

export type SearchItemsForm = z.infer<typeof SearchItemsFormSchema>