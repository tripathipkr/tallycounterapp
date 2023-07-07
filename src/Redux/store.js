import {legacy_createStore as Store} from "redux"
import { reducer } from "./reducer";
const store=Store(reducer)

export { store };

