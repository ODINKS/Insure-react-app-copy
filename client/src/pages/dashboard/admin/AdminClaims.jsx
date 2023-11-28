import React from 'react'
import { ClaimsData } from '../../../utils/Data'
import Table from '../../../components/molecules/dashboard/Table'


const AdminClaims = () => {

    let tableHead={
        head1: "S/N",
        head2: "Policy No.",
        head3: "Duration",
        head4: "Claim Amt",
        head5: "Client Name",
        head6: "Product",
        head7: "Status"
      }

      console.log(ClaimsData, "claimsdata")

      function copyDataWithNewNames(ClaimsData) {
        const tabledataArray = [];
      
        for (let i = 0; i < ClaimsData.length; i++) {
          const claim = ClaimsData[i];
          const newData = {
            data1: claim.id,
            data2: claim.PolicyNo,
            data3: claim.Duration,
            data4: claim.ClaimAmt,
            data5: claim.clientName,
            data6: claim.Product,
            data7: claim.status
          };
      
          tabledataArray.push(newData);
        }
      
        return tabledataArray;
      }
      
      const tabledata= copyDataWithNewNames(ClaimsData);

    
      return (
        <div>
          
          <Table data={{tableHead, tabledata}}/>
    
        </div>
  )
}

export default AdminClaims