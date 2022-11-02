import { proxy } from "valtio";
import { devtools } from "valtio/utils";

interface IStore {
  selection_page: string;
}

const store = proxy<IStore>({
  selection_page: "/landing",
});

const unsub = devtools(store, { name: "store", enabled: true });

export default store;
