
/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

if (fileName.endsWith('.pdf') || fileName.endsWith('.docx') || fileName.startsWith('#')) {
    console.log('Store');
}
else {
    console.log('Delete');
}