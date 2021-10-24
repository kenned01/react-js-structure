import { ERRORS } from "./Error";
import { PRIVATE_VIEWS } from "./Private";
import { PUBLIC_VIEWS } from "./Public";

const VIEWS = [
  ...PUBLIC_VIEWS,
  ...PRIVATE_VIEWS,
  ...ERRORS
]

export {
  VIEWS
}