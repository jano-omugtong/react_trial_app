import React, { useState, useEffect } from "react";
import store from "../../../../../../services/store";

const ArrOptions: selectOption[] = [
  {
    value: "default",
    label: "表示順を選択",
  },
  {
    value: "projName",
    label: "プロジェクト名",
  },
  {
    value: "dueDate",
    label: "募集終了",
  },
];

export const ObjOptions = {
  default: ArrOptions[0],
  projName: ArrOptions[1],
  dueDate: ArrOptions[2],
};

interface selectOption {
  value: string;
  label: string;
}

export const RPLFilter: React.FC = () => {
  const [hce_isChecked, setHce_isChecked] = useState(
    store.requested_proj_list_hce_isChecked
  );
  const [vd_isChecked, setVd_isChecked] = useState(
    store.requested_proj_list_vd_isChecked
  );

  useEffect(() => {
    if (store.requested_proj_list_hce_isChecked !== hce_isChecked) {
      store.requested_proj_list_hce_isChecked = hce_isChecked;
    }

    if (store.requested_proj_list_vd_isChecked !== vd_isChecked) {
      store.requested_proj_list_vd_isChecked = vd_isChecked;
    }
  }, [hce_isChecked, vd_isChecked]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    store.requested_proj_list_filter = e.target.value;
  };

  return (
    <form className="mb-2">
      <div className="field">
        <div className="select mr-2 is-small">
          <select
            onChange={(e) => {
              handleSelectChange(e);
            }}
          >
            {ArrOptions.map((currentValue, index) => {
              return (
                <option key={index} value={currentValue.value}>
                  {currentValue.label}
                </option>
              );
            })}
          </select>
        </div>
        <label className="checkbox mx-2">
          <input
            type="checkbox"
            name="hide_recruitment_end"
            checked={hce_isChecked}
            className="mr-1"
            onChange={() => {
              setHce_isChecked(!hce_isChecked);
            }}
          />
          <span className="is-size-7">募集終了を隠す</span>
        </label>
        <label className="checkbox mx-2">
          <input
            type="checkbox"
            name="view_details"
            checked={vd_isChecked}
            className="mr-1"
            onChange={() => {
              setVd_isChecked(!vd_isChecked);
            }}
          />
          <span className="is-size-7">詳細を表示する</span>
        </label>
      </div>
    </form>
  );
};
