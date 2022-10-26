import React from "react";

export const ConciergeBlock = () => {
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
                      <p>Jano Omugtong</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Advanced World Solutions</p>
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
                src="favicon.ico"
                alt="Profile Pic"
              />
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
