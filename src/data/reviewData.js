// ========== REVIEW DATA MODULE ========== //

import { v4 as uuid4 } from 'uuid';

const REVIEW_DATA = [
	{
		id: uuid4(),
		text: '	Professional and fast repair! Thanks.\nMy Ford Mustang feels like new.',
		name: 'John Smith',
		car: 'Ford Mustang',
	},
	{
		id: uuid4(),
		text: '	Excellent service!\nMy Chevrolet Silverado is back on the road.',
		name: 'Maria Johnson',
		car: 'Chevrolet Silverado',
	},
	{
		id: uuid4(),
		text: 'Reliable auto service.\nMy Dodge Ram appreciates the attention to detail.',
		name: 'Peter Brown',
		car: 'Dodge Ram',
	},
];

export default REVIEW_DATA;
