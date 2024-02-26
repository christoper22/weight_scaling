const fs = require('fs');

const getWeightData = async (x) => {
  const filePath = x;
  // Read the file synchronously
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent;
};

function convertStringToWeightArray(str) {
  // Extract the numeric value and the unit from the string
  const [, value, unit] = str.match(/=*\s*([\d.]+)\s*(\w+)/);

  // Return the value as a float and the unit as a string
  return [parseFloat(value), unit];
}

exports.getWeight = async (req, res, next) => {
  try {
    // Read the file synchronously
    const fileContent = await getWeightData('data.txt');
    console.log('File content:', fileContent);

    res.status(200).json({ data: convertStringToWeightArray(fileContent) });
  } catch (err) {
    console.error('Error reading file:', err);
  }
};
exports.getWeight1 = async (req, res, next) => {
  try {
    // Read the file synchronously
    const fileContent = await getWeightData('data1.txt');
    console.log('File content:', fileContent);

    res.status(200).json({ data: convertStringToWeightArray(fileContent) });
  } catch (err) {
    console.error('Error reading file:', err);
  }
};
exports.getWeight2 = async (req, res, next) => {
  try {
    // Read the file synchronously
    const fileContent = await getWeightData('data2.txt');
    console.log('File content:', fileContent);

    res.status(200).json({ data: convertStringToWeightArray(fileContent) });
  } catch (err) {
    console.error('Error reading file:', err);
  }
};
