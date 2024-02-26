const fs = require('fs');

const getWeightData = async (x) => {
  const filePath = x;
  // Read the file synchronously
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent;
};

//for convert to kg
function convertToKg(str) {
  // Menghapus spasi dan karakter 'g' dari string
  const cleanedStr = str.trim().replace('g', '');

  // Mengubah string menjadi angka desimal
  const grams = parseFloat(cleanedStr);

  // Mengonversi gram menjadi kilogram dengan pembulatan empat desimal
  const kilograms = (grams / 1000).toFixed(2);

  // Mengembalikan nilai dalam format yang diinginkan
  return kilograms + ' kg';
}

exports.getWeight = async (req, res, next) => {
  try {
    // Read the file synchronously
    const fileContent = await getWeightData('data.txt');
    console.log('File content:', fileContent);

    res.status(200).json({ data: fileContent });
  } catch (err) {
    console.error('Error reading file:', err);
  }
};
exports.getWeight1 = async (req, res, next) => {
  try {
    // Read the file synchronously
    const fileContent = await getWeightData('data1.txt');
    console.log('File content:', fileContent);

    res.status(200).json({ data: fileContent });
  } catch (err) {
    console.error('Error reading file:', err);
  }
};
exports.getWeight2 = async (req, res, next) => {
  try {
    // Read the file synchronously
    const fileContent = await getWeightData('data2.txt');
    console.log('File content:', fileContent);

    res.status(200).json({ data: fileContent });
  } catch (err) {
    console.error('Error reading file:', err);
  }
};
