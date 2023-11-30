import React from "react";
import { TeamData } from "../../../utils/Data";
import Table from "../../../components/molecules/dashboard/Table";
import { transformData } from "../../../utils/DataTransformer";
import ActionButton from "../../../components/molecules/dashboard/ActionButton";
import Searchbar from "../../../components/molecules/dashboard/Searchbar";

const AdminTeams = () => {
  let tableHead = {
    head1: "S/N",
    head2: "Name",
    head3: "Staff ID",
    head4: "Role",
    head5: "Email",
    head6: "Portfolio",
    head7: "Status",
  };

  let tabledata = transformData(TeamData);

  return (
    <div>
      <Searchbar />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <ActionButton title="PDF" />
          <ActionButton title="EXCEL" />
          <ActionButton title="PRINT" />
        </div>
      </div>

      <Table data={{ tableHead, tabledata }} />
    </div>
  );
};

export default AdminTeams;
