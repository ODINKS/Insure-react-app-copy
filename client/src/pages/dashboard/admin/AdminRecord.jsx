import React from 'react'
import { ClaimsData } from "../../../utils/Data";
import Table from '../../../components/molecules/dashboard/Table'
import { transformData } from '../../../utils/DataTransformer'
import ActionButton from '../../../components/molecules/dashboard/ActionButton'
import Searchbar from '../../../components/molecules/dashboard/Searchbar';
import { generatePDF, generateExcel, printContent } from '../../../components/molecules/dashboard/ButtonUtils';




const AdminRecords = () => {
  

  let tableHead = {
    head1: "S/N",
    head2: "Policy No.",
    head3: "Duration",
    head4: "Premium Amt",
    head5: "Date",
    head6: "Product",
    head7: "Status",
  };


  let tabledata = transformData(ClaimsData);


  return (
    <div>
      <Searchbar />
      <div className='flex justify-between mb-4'>
        <div className='flex'>
        <ActionButton title='PDF' 
        action={generatePDF('table-container', 'document')} 
        />
          <ActionButton title='EXCEL' onClick={() => generateExcel('table-container', 'document')} />
          <ActionButton title='PRINT' onClick={() => printContent('table-container')} />
        </div>
      </div>
      
      <Table data={{tableHead, tabledata}} id="table-container" />
      {/* <div className='text-2xl text-center'>
        Your contents will appear here
      </div> */}

    </div>
  )
}

export default AdminRecords