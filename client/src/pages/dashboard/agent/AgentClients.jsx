import React from 'react'
import { ClaimsData } from "../../../utils/Data";
import Table from '../../../components/molecules/dashboard/Table'
import { transformData } from '../../../utils/DataTransformer'
import ActionButton from '../../../components/molecules/dashboard/ActionButton'



const AgentClients = () => {
  

  let tableHead = {
    head1: "S/N",
    head2: "Policy No.",
    head3: "Duration",
    head4: "Premium Amt",
    head5: "Client Name",
    head6: "Product",
    head7: "Status",
  };


  let tabledata = transformData(ClaimsData);


  return (
    <div>
      <div className='flex justify-between mb-4'>
        <div className='flex'>
          <ActionButton title='PDF'/>
          <ActionButton title='EXCEL'/>
          <ActionButton title='PRINT'/>
        </div>
      </div>
      
      <Table data={{tableHead, tabledata}}/>

    </div>
  )
}

export default AgentClients