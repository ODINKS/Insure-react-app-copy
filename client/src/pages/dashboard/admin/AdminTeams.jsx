import React, { useState, useEffect } from "react";
import { TeamData } from "../../../utils/Data";
import Table from "../../../components/molecules/dashboard/Table";
import { transformData } from "../../../utils/DataTransformer";
import ActionButton from "../../../components/molecules/dashboard/ActionButton";
import Searchbar from "../../../components/molecules/dashboard/Searchbar";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Axios from "axios";

const AdminTeams = () => {
  const [filteredData, setFilteredData] = useState(transformData(TeamData));
  const [agentDataList, setAgentDataList] = useState("")
console.log(transformData(agentDataList),"1234")
const newAgentList = agentDataList.map(data=>{
  return {
    fullName:`${data.firstName} ${data.lastName}`,
    agentID:`${formData.user.companyProfile.companyName.Slice(0,3).toUpperCase()}/${data.id}`,
    role:"Agent",
    email:`${data.email}`,
    dateAdded:`${data.createdAt}`
  }
})


  const location = useLocation();
  const formData = location.state?.formData || {};
  const companyId =formData.user.companyProfile.id;

  const baseURL = process.env.REACT_APP_BASE_URL;
  const agentDataURL = `${baseURL}/company/allcompanyagent/${companyId}`;
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const agentData = await fetchAgentData();
        // console.log(agentData);
        setAgentDataList(agentData)
        // Now you can use agentData as an array
      } catch (error) {
        console.error("Error fetching agent data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(agentDataList, "newList")
  useEffect(()=>{
    // const renderData
  },[])

  const fetchAgentData = async () => {
    try {
      const res = await Axios.get(agentDataURL);
      return res?.data?.data.rows || [];
    } catch (error) {
      console.error("Error fetching agent data:", error);
      return []; // Return an empty array in case of an error
    }
  };


  const updateFilteredData = (newData) => {
    setFilteredData(transformData(newData));
  };

  let tableHead = {
    head1: "S/N",
    head2: "Name",
    head3: "Agent ID",
    head4: "Role",
    head5: "Email",
    head6: "Date Added",
    head7: "Status",
  };

 
  
  const handleButtonClick = () => {
    //go to invite page with useNavigate
    navigate("/auth/admin/team-invite", { state: { formData } } )
  }
  


  return (
    <div>
      <Searchbar data={TeamData} keyword="Name" onUpdateData={updateFilteredData} />
      <div className="flex justify-between mb-4">
        {/* <div className="flex">
          <ActionButton title="PDF" />
          <ActionButton title="EXCEL" />
          <ActionButton title="PRINT" />
        </div> */}
      </div>

      <ActionButton title="Invite Agent" onClick={handleButtonClick} />

      <Table data={{ tableHead, tabledata:filteredData }} />
    </div>
  );
};

export default AdminTeams;
