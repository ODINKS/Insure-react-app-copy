
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

export const generatePDF = async (containerId, fileName) => {
  try {
    const input = document.getElementById(containerId);
    const canvas = await html2canvas(input);

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');

    pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

    pdf.save(`${fileName}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

export const generateExcel = (containerId, fileName) => {
  try {
    const input = document.getElementById(containerId);
    const wb = XLSX.utils.table_to_book(input);
    const blob = XLSX.write(wb, { bookType: 'xlsx', type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.xlsx`;
    link.click();
  } catch (error) {
    console.error('Error generating Excel:', error);
  }
};

export const printContent = (containerId) => {
  const content = document.getElementById(containerId);
  const printWindow = window.open('', '_blank');
  printWindow.document.write(content.innerHTML);
  printWindow.document.close();
  printWindow.print();
};
