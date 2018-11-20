import React from "react";
import { ActionButton } from "office-ui-fabric-react/lib/Button";
import { navigate } from "@reach/router";
import "./versionCard.css";
import dayjs from "dayjs";

export default function Fusion(props) {
  const { header, items } = props;
  const onHistoryClick = location => {
    navigate(`/ibiza/history/${location}`);
  };

  return (
    <div className="fxs-overview-section">
      <h1>{header || "header"}</h1>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Version</th>
            <th>Release Date</th>
            <th>History</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr>
              <td>{!!item.loc ? `${item.name} (${item.loc})` : item.name}</td>
              <td>{item.version}</td>
              <td>
                {dayjs(
                  new Date(item.timeStamp).toLocaleString("en-US", {
                    timeZone: "America/New_York"
                  })
                ).format("YYYY-MM-DD HH:mm:ss")}
              </td>
              <td>
                <ActionButton
                  iconProps={{ iconName: "link" }}
                  allowDisabledFocus={true}
                  onClick={() => onHistoryClick(item.name)}
                >
                  Open
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}