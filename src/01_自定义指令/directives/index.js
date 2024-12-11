import directiveFocus from "./focus";
import directiveUint from "./unit";
import directiveFtime from "./ftime";
export default function directives(app) {
  directiveFocus(app)
  directiveUint(app)
  directiveFtime(app)
}