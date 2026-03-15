import { files } from './data.js';

const convertToBytes = (length, unit = 'B') => {
	const units = {
		B: 1,
		KB: 1024,
		MB: 1024 ** 2,
		GB: 1024 ** 3,
	};

	return length * (units[unit] || 1);
};

const getFileSizeInBytes = ({ size: { length, unit = 'B' } }) => {
	return convertToBytes(length, unit);
};

const getTotalSize = files => {
	return files.map(file => getFileSizeInBytes(file)).reduce((sum, value) => sum + value, 0);
};

console.log(getTotalSize(files));
