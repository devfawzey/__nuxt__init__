import { DELAY_TIME } from "./constants";

export default async (TDELAY = DELAY_TIME) => {
 return await new Promise(resolve => setTimeout(resolve, TDELAY))
}