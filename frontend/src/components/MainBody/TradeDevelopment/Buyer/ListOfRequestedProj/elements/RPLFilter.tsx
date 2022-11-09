import React from "react";

export const RPLFilter: React.FC = () => {
  return (
    <form className="mb-2">
      <div className="field">
        <div className="select mr-2 is-small">
          <select>
            <option>表示順を選択</option>
            <option>With options</option>
          </select>
        </div>
        <label className="checkbox mx-2">
          <input type="checkbox" className="mr-1" />
          <span className="is-size-7">募集終了を隠す</span>
        </label>
        <label className="checkbox mx-2">
          <input type="checkbox" className="mr-1" />
          <span className="is-size-7">詳細を表示する</span>
        </label>
      </div>
    </form>
  );
};
