document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('downloadButton').addEventListener('click', function() {
        const pdfUrl = './assets/pdf/CV_Jhonatan_Cruz.pdf';  // Cambia esto con la ruta de tu archivo PDF
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.split('/').pop();  // Obtiene el nombre del archivo
        link.click();
    });
});