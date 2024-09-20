import { ConfigKafka, ConfigApp } from "./config.schema";
import { validateEnv } from "./config.validate";

export const CONFIG_KAFKA = validateEnv(ConfigKafka);

export const CONFIG_APP = validateEnv(ConfigApp);