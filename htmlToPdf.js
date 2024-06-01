import React, { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const htmlContent = `
<div>
    <h1>This is a Title</h1>
    <p>This is a paragraph.</p>
    <img src="https://c8.alamy.com/comp/KWDTCW/rajwada-is-a-historical-palace-in-indore-city-india-KWDTCW.jpg" alt="Example Image" height='200' width='200'/>
</div>
`

const HTMLToPDF = () => {
    const contentRef = useRef()

    const handleGeneratePDF = async () => {
        const content = contentRef.current
        const canvas = await html2canvas(content,{useCORS: true})
        const imgData = canvas.toDataURL('image/png')

        const pdf = new jsPDF('p', 'mm', 'a4')
        const imgProps = pdf.getImageProperties(imgData)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save('document.pdf')
    }

    return (
        <div>
            <div ref={contentRef} style={{display: 'none'}} dangerouslySetInnerHTML={{ __html: htmlContent }}/>
            <button onClick={handleGeneratePDF}>Generate PDF</button>
        </div>
    );
};

export default HTMLToPDF
