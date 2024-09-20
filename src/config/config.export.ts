import { validateEnv } from "./config.validate";

export const CONFIG = validateEnv(process.env);