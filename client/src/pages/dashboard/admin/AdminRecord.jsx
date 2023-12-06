import React, { useEffect } from 'react';
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

  useEffect(() => {
    // Ensure the element is present in the DOM before generating PDF
    const tableContainer = document.getElementById('table-container');
    if (tableContainer) {
      generatePDF('table-container', 'document');
    }
  }, []);

  const handlePDFClick = () => {
    console.log('PDF button clicked');
  };

  const handleExcelClick = () => {
    console.log('Excel button clicked');
    generateExcel('table-container', 'document');
  };

  const handlePrintClick = () => {
    console.log('Print button clicked');
    printContent('table-container');
  };

  return (
    <div>
      <Searchbar />
      <div className='flex justify-between mb-4'>
        <div className='flex'>

          <ActionButton title='PDF' onClick={handlePDFClick} />
          <ActionButton title='EXCEL' onClick={handleExcelClick} />
          <ActionButton title='PRINT' onClick={handlePrintClick} />

        </div>
      </div>

      <Table data={{ tableHead, tabledata }} id="table-container" />
    </div>
  );
};

export default AdminRecords;
