import React, { useState } from 'react';
import AgentSidebar from '../../../components/molecules/dashboard/AgentSidebar';

function AgentRecord() {
  const bodyStyle = {
    backgroundColor: '#DFE7FA',
    fontFamily: 'Lato, sans-serif',
  };

  const buttonStyle = 'bg-orange-500 text-white py-2 px-9 rounded mr-4 relative';
  const tableStyle = 'bg-white text-black text-sm border-collapse w-[100%] lg:w-[80%] lg:h-[80%] mt-16 rounded-lg overflow-hidden relative';
  const tableHeadingStyle = 'border-b-2 p-2 font-semi-bold text-lg border-b-2 border-gray-500 ';
  const tableRowStyle = ' p-2 border-t-2 border-gray-500';

  const paginationContainerStyle = 'absolute bottom-0 right-0 mb-[-5px]';
  const paginationStyle = 'cursor-pointer text-black text-sm px-2 py-1 hover:bg-orange-500 hover:text-white';


  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const renderActionButton = (rowIndex) => {
    return (
      <td className={tableRowStyle}>
        <button className={buttonStyle} onClick={handleDropdownToggle}>
          Actions <span className="ml-2">&#9662;</span>
          {isDropdownOpen && rowIndex === 4 && (
            <div className="absolute bg-white shadow-md mt-2 p-4">
              {}
              <div>Action 1</div>
              <div>Action 2</div>
            </div>
          )}
        </button>
      </td>
    );
  };

  return (
<>
    <AgentSidebar />
    <div style={bodyStyle} className=" h-screen">
    <div className={`mx-auto ml-11`} style={{ marginLeft: '20rem' }}>
      
        <button className={buttonStyle}>PDF</button>
        <button className={buttonStyle}>Excel</button>
        <button className={buttonStyle}>Print</button>

        <button className={buttonStyle}>PDF</button>
        <button className={buttonStyle}>Excel</button>
        <button className={buttonStyle}>Print</button>

        <table className = {tableStyle}>
          <thead>
            <tr>
              <th className={tableHeadingStyle}>SN</th>
              <th className={tableHeadingStyle}>Policy No</th>
              <th className={tableHeadingStyle}>Duration</th>
              <th className={tableHeadingStyle}>Premium Amt</th>
              <th className={tableHeadingStyle}>Agent ID</th>
              <th className={tableHeadingStyle}>Product</th>
              <th className={tableHeadingStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={tableRowStyle}>1</td>
              <td className={tableRowStyle}>ACE/098</td>
              <td className={tableRowStyle}>2 years</td>
              <td className={tableRowStyle}>100,000</td>
              <td className={tableRowStyle}>CAD/AGT/009</td>
              <td className={tableRowStyle}>PIP</td>
              {renderActionButton(0)}
            </tr>
            <tr>
              <td className={tableRowStyle}>2</td>
              <td className={tableRowStyle}>ACE/098</td>
              <td className={tableRowStyle}>2 years</td>
              <td className={tableRowStyle}>100,000</td>
              <td className={tableRowStyle}>CAD/AGT/009</td>
              <td className={tableRowStyle}>PIP</td>
              {renderActionButton(0)}
            </tr>
            <tr>
              <td className={tableRowStyle}>3</td>
              <td className={tableRowStyle}>ACE/098</td>
              <td className={tableRowStyle}>2 years</td>
              <td className={tableRowStyle}>100,000</td>
              <td className={tableRowStyle}>CAD/AGT/009</td>
              <td className={tableRowStyle}>PIP</td>
              {renderActionButton(0)}
            </tr>
            <tr>
              <td className={tableRowStyle}>4</td>
              <td className={tableRowStyle}>ACE/098</td>
              <td className={tableRowStyle}>2 years</td>
              <td className={tableRowStyle}>100,000</td>
              <td className={tableRowStyle}>CAD/AGT/009</td>
              <td className={tableRowStyle}>PIP</td>
              {renderActionButton(0)}
            </tr>
            <tr>
              <td className={tableRowStyle}>5</td>
              <td className={tableRowStyle}>ACE/098</td>
              <td className={tableRowStyle}>2 years</td>
              <td className={tableRowStyle}>100,000</td>
              <td className={tableRowStyle}>CAD/AGT/009</td>
              <td className={tableRowStyle}>PIP</td>
              {renderActionButton(0)}
            </tr>
          </tbody>
          <tfoot>
  <tr>
    <td colSpan="7" className={tableRowStyle}>
      <div className={`${paginationContainerStyle}`}>
        <span className={paginationStyle}>Previous</span>
        <span className={paginationStyle}>1</span>
        <span className={paginationStyle}>2</span>
        <span className={paginationStyle}>3</span>
        <span className={paginationStyle}>4</span>
        <span className={paginationStyle}>Next</span>
      </div>
    </td>
  </tr>
</tfoot>


        </table>
        
      </div>
    </div>
    </>
  );
}

export default AgentRecord;
