import React from 'react'
import { LeadsData } from '../../../utils/Data'
import Table from '../../../components/molecules/dashboard/Table'



const AdminLeads = () => {

  let tableHead={
    head1: "S/N",
    head2: "Occupation",
    head3: "Email",
    head4: "Phone Num",
    head5: "Client Name",
    head6: "Agent ID",
    head7: "Status"
  }

  console.log(LeadsData, "leadsData")

  // let tabledata={
  //   data1: LeadsData.id,
  //   data2: LeadsData.clientName,
  //   data3: LeadsData.occupation,
  //   data4: LeadsData.email,
  //   data5: LeadsData.phone,
  //   data6: LeadsData.AgnetId,
  //   data7: LeadsData.status
  // }


  function copyDataWithNewNames(LeadsData) {
    const tabledataArray = [];
  
    for (let i = 0; i < LeadsData.length; i++) {
      const leads = LeadsData[i];
      const newData = {
        data1: leads.id,
        data2: leads.clientName,
        data3: leads.occupation,
        data4: leads.email,
        data5: leads.phone,
        data6: leads.AgnetId,
        data7: leads.status
      };
  
      tabledataArray.push(newData);
    }
  
    return tabledataArray;
  }
  
  const tabledata= copyDataWithNewNames(LeadsData);


  return (
    <div>
      
      <Table data={{tableHead, tabledata}}/>

    </div>
  )
}

export default AdminLeads