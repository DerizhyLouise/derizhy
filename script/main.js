function downloadCv(type) {
    var link = document.createElement('a');
    var pdfPath = "";
    var downloadLink = "";
    
    if (type == "ats") {
        pdfPath = '../assets/pdf/atsCV.pdf';
        downloadLink = "atsCV.pdf";
    } else {
        pdfPath = '../assets/pdf/creCV.pdf';
        downloadLink = "creCV.pdf";
    }
    link.href = pdfPath;
    link.download = downloadLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}