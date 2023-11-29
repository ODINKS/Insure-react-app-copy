import React from 'react'
import { LeadsData } from '../../../utils/Data'
import Table from '../../../components/molecules/dashboard/Table'
import { transformData } from '../../../utils/DataTransformer'
import ActionButton from '../../../components/molecules/dashboard/ActionButton'



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

  let tabledata = transformData(LeadsData);


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

export default AdminLeads