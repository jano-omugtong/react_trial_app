import { proxy } from "valtio";
import { devtools } from "valtio/utils";

interface IStore {
  selection_page: string;
  requested_proj_list_current_page: number;
  requested_proj_list_hce_isChecked: boolean;
  requested_proj_list_vd_isChecked: boolean;
  requested_proj_list_filter: string;
}

const store = proxy<IStore>({
  selection_page: "/landing",
  requested_proj_list_current_page: 0,
  requested_proj_list_hce_isChecked: false,
  requested_proj_list_vd_isChecked: true,
  requested_proj_list_filter: "default",
});

const unsub = devtools(store, { name: "store", enabled: true });

export default store;
