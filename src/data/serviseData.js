// ========== SERVICE DATA MODULE ========== //

import { v4 as uuid4 } from 'uuid';
import tireServiceImage from '../assets/service/tire.jpg';
import bodyRepairImage from '../assets/service/body.jpg';
import paintingServicesImage from '../assets/service/paint.jpg';
import electricalServicesImage from '../assets/service/electric.jpg';
import engineRepairImage from '../assets/service/engine.jpg';
import suspensionMaintenanceImage from '../assets/service/suspension.jpg';
import regularMaintenanceImage from '../assets/service/regular.jpg';
import airConditioningSystemImage from '../assets/service/conditioning.jpg';
import transmissionAndGearboxImage from '../assets/service/transmission.jpg';
import diagnosticAndComputerTuningImage from '../assets/service/diagnostic.jpg';

const SERVICE_DATA = [
	{
		id: uuid4(),
		image: tireServiceImage,
		text: 'Tire Service',
	},
	{
		id: uuid4(),
		image: bodyRepairImage,
		text: 'Body Repair',
	},
	{
		id: uuid4(),
		image: paintingServicesImage,
		text: 'Painting Services',
	},
	{
		id: uuid4(),
		image: electricalServicesImage,
		text: 'Electrical Services',
	},
	{
		id: uuid4(),
		image: engineRepairImage,
		text: 'Engine Repair',
	},
	{
		id: uuid4(),
		image: suspensionMaintenanceImage,
		text: 'Suspension Maintenance',
	},
	{
		id: uuid4(),
		image: regularMaintenanceImage,
		text: 'Regular Maintenance',
	},
	{
		id: uuid4(),
		image: airConditioningSystemImage,
		text: 'Air Conditioning System',
	},
	{
		id: uuid4(),
		image: transmissionAndGearboxImage,
		text: 'Transmission and Gearbox',
	},
	{
		id: uuid4(),
		image: diagnosticAndComputerTuningImage,
		text: 'Diagnostic and Computer Tuning',
	},
];

export default SERVICE_DATA;
