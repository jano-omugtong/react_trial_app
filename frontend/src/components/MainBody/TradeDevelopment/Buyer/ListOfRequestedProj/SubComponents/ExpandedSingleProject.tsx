import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "../RequestedProjList.css";
import { IRPLProjectProps, RPLProject } from "../elements/RPLProject";

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

export const ExpandedSingleProject: React.FC = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [project, setProject] = useState<IRPLProjectProps | null>(null);

  useEffect(() => {
    const fetchedData = allProjArray.filter((item) => {
      return item.projId === parseInt(projectId!);
    });

    if (!fetchedData.length) {
      navigate("/trade_development/buyer/requested_project_list");
    }

    setProject(fetchedData[0]);
  }, []);

  return (
    <>
      {project ? (
        <div className="m-5 box">
          <RPLProject
            forExpandedSingleProject
            projTags={project.projTags}
            certifiedClient={project.certifiedClient}
            projName={project.projName}
            projId={project.projId}
            projDetails={project.projDetails}
            postedDate={project.postedDate}
            noOfContracts={project.noOfContracts}
            hourlyRate={project.hourlyRate}
            fieldRate={project.fieldRate}
            fieldName={project.fieldName}
            dueDate={project.dueDate}
            companyName={project.companyName}
            companyLogo={project.companyLogo}
            bookmarked={project.bookmarked}
          />
        </div>
      ) : null}
    </>
  );
};
