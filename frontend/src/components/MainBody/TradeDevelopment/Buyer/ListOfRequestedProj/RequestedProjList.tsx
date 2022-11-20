import React, { useEffect, useState } from "react";
import { sort } from "fast-sort";

import { RPLFilter, ObjOptions } from "./elements/RPLFilter";
import { RPLPagination } from "./elements/RPLPagination";
import { RPLProject, IRPLProjectProps } from "./elements/RPLProject";

import store from "../../../../../services/store";
import { subscribeKey } from "valtio/utils";

export const RequestedProjList: React.FC = () => {
  const [current_page, setCurrent_page] = useState(1);
  const [total_page, setTotal_page] = useState(0);
  const [filterSelected, setFilterSelected] = useState("default");
  const [hide_expired, setHide_expired] = useState(false);

  const [proj_array, setProj_array] = useState<IRPLProjectProps[]>([]);

  subscribeKey(store, "requested_proj_list_current_page", (newValue) => {
    setCurrent_page(newValue);
  });

  subscribeKey(store, "requested_proj_list_hce_isChecked", (newValue) => {
    setHide_expired(newValue);
    store.requested_proj_list_current_page = 1;
  });

  subscribeKey(store, "requested_proj_list_filter", (newValue) => {
    setFilterSelected(newValue);
    store.requested_proj_list_current_page = 1;
  });

  // fetch from db all initially (this will be a fetch from the db thus this should be inside use effect)
  const allProjArray: IRPLProjectProps[] = [
    {
      projId: 1,
      bookmarked: false,
      companyLogo: "Pokeball.png",
      companyName: "Poke Ball Corp",
      dueDate: "2022/11/18",
      fieldName: "Gaming",
      fieldRate: "15 Domestic",
      hourlyRate: [1000, 2000],
      noOfContracts: [5, 28],
      postedDate: "2022/11/11",
      projDetails: `> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni esse exercitationem nostrum unde sed architecto. \n Minima laborum debitis itaque maiores voluptate enim mollitia sint quam molestias? Harum neque rerum hic.`,
      projName: "Project Gonna Catch em all 1",
      certifiedClient: false,
      projTags: ["RPG", "Monster Collector", "Wifi Battle"],
    },
    {
      projId: 2,
      bookmarked: true,
      companyLogo: "Pokeball.png",
      companyName: "Poke Ball Corp",
      dueDate: "2022/11/18",
      fieldName: "Gaming",
      fieldRate: "15 Domestic",
      hourlyRate: [1000, 2000],
      noOfContracts: [5, 28],
      postedDate: "2022/11/11",
      projDetails: `> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni esse exercitationem nostrum unde sed architecto. 
      > Minima laborum debitis itaque maiores voluptate enim mollitia sint quam molestias? Harum neque rerum hic.`,
      projName: "Aroject Gonna Catch em all 2",
      certifiedClient: true,
      projTags: ["RPG", "Monster Collector", "Wifi Battle"],
    },
    {
      projId: 3,
      bookmarked: false,
      companyLogo: "Pokeball.png",
      companyName: "Poke Ball Corp",
      dueDate: "2021/11/18",
      fieldName: "Gaming",
      fieldRate: "15 Domestic",
      hourlyRate: [1000, 2000],
      noOfContracts: [5, 28],
      postedDate: "2022/11/11",
      projDetails: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni esse exercitationem nostrum unde sed architecto. Minima laborum debitis itaque maiores voluptate enim mollitia sint quam molestias? Harum neque rerum hic.`,
      projName: "Broject Gonna Catch em all 2021",
      certifiedClient: true,
      projTags: ["RPG", "Monster Collector", "Wifi Battle"],
    },
  ];

  useEffect(() => {
    const chooseIndexes = () => {
      const chosenIndex = current_page * 2;

      let filteredProjArr: IRPLProjectProps[] = [];
      if (hide_expired) {
        filteredProjArr = allProjArray.filter((item) => {
          return new Date(item.dueDate) > new Date();
        });
      } else {
        filteredProjArr = allProjArray;
      }

      if (filterSelected !== "default") {
        if (filterSelected === ObjOptions.projName.value) {
          filteredProjArr = sort(filteredProjArr).asc("projName");
        } else if (filterSelected === ObjOptions.dueDate.value) {
          filteredProjArr = sort(filteredProjArr).asc("dueDate");
        }
      }

      if (chosenIndex <= filteredProjArr.length) {
        setProj_array([
          filteredProjArr[chosenIndex - 2],
          filteredProjArr[chosenIndex - 1],
        ]);
      } else {
        setProj_array([filteredProjArr[chosenIndex - 2]]);
      }
      setTotal_page(Math.round(filteredProjArr.length / 2));
    };

    chooseIndexes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current_page, hide_expired, filterSelected]);

  return (
    <div
      className="box is-fullwidth is-fullheight"
      style={{
        margin: "30px",
      }}
    >
      <RPLFilter />
      <RPLPagination currentPage={current_page} totalPages={total_page} />
      {proj_array &&
        proj_array.map((currentValue) => {
          if (!currentValue) {
            return null;
          }
          return (
            <RPLProject
              key={currentValue.projId}
              forExpandedSingleProject={false}
              projId={currentValue.projId}
              projTags={currentValue.projTags}
              certifiedClient={currentValue.certifiedClient}
              projName={currentValue.projName}
              projDetails={currentValue.projDetails}
              postedDate={currentValue.postedDate}
              noOfContracts={currentValue.noOfContracts}
              hourlyRate={currentValue.hourlyRate}
              fieldRate={currentValue.fieldRate}
              fieldName={currentValue.fieldName}
              dueDate={currentValue.dueDate}
              companyName={currentValue.companyName}
              companyLogo={currentValue.companyLogo}
              bookmarked={currentValue.bookmarked}
            />
          );
        })}
    </div>
  );
};
