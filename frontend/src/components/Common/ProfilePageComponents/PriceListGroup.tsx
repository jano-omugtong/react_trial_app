import React from "react";
import { PriceListCard, IPriceListCardProps } from "../PriceListCard";

import "./ProfilePageComponents.css";

interface IPriceListGroupProps {
  arrPriceListCard: IPriceListCardProps[];
}

export const PriceListGroup: React.FC<IPriceListGroupProps> = (props) => {
  return (
    <div className="mt-5 profile-page-margin-x">
      <p className="title is-5">料金表</p>
      <div>
        <div className="columns">
          {props.arrPriceListCard.map((currentValue, index) => {
            return (
              <div key={index} className="column is-3">
                <PriceListCard
                  imgSrc={currentValue.imgSrc}
                  imgAlt={currentValue.imgAlt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
