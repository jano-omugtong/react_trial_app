import React from "react";

interface IConciergeBlock {
  userName: string;
  companyName: string;
  imgSrc: string;
  isOnline: boolean;
}

export const ConciergeBlock: React.FC<IConciergeBlock> = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>{props.userName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>{props.companyName}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td
              rowSpan={2}
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <img
                style={{
                  verticalAlign: "middle",
                  width: "2.15rem",
                  height: "2.15rem",
                  margin: "10px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src={props.imgSrc}
                alt="Profile Pic"
              />
              {props.isOnline ? (
                <span
                  style={{
                    width: "1rem",
                    height: "1rem",
                    background: "#99CC00",
                    border: "2px solid white",
                    position: "absolute",
                    bottom: "7%",
                    right: "7%",
                    borderRadius: "100%",
                  }}
                ></span>
              ) : null}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
