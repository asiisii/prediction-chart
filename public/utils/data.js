export const disciplines = [
	{ label: 'RN', value: 'RN' },
	{ label: 'Allied', value: 'Allied' },
]

export const specialties = {
	RN: [
		'ICU',
		'LTAC',
		'MS',
		'TELE',
		'Psych',
		'PCU/Stepdown',
		'ONC',
		'PACU/Pre-Post',
		'OR',
		'EP/CATH/IR',
		'ENDO',
		'ER',
		'L&D',
		'M/B',
		'NICU',
		'CVICU',
		'Dialysis',
		'Outpatient',
		'IV Therapy',
		'Wound Care',
		'CVOR',
		'LPN',
		'Rehab',
	],
	Allied: [
		'CVOR First Assists',
		'SPTs',
		'Surg Techs',
		'CVOR Techs',
		'EP/CATH/IR Techs',
		'RRTs',
		'CT/MRI/Techs',
		'Xray Tech',
		'Echo Tech',
		'MLT (all lab spec)',
		'Vascular Tech',
		'Pharm Tech',
		'MA',
	],
}

// Hit this to check if specialty is in Allied vs RN
export const alliedSet = new Set(specialties.Allied)

export const dummyChatData = [
	{
		user: 'Rate Bot',
		message:
			'Hello Carrie. Add Skill Sets and Quantity to see forecasted rates for this facility.',
	},
	{
		user: 'Rate Bot',
		message:
			"Hello Carrie and Amanda. The market is changing. Here's some things to keep in mind.",
	},
	{
		user: 'Amanda AM',
		message:
			'Hey Carrie, take a look at the recommendations and let me know what you think.',
	},
	{
		user: 'Carrie Brown',
		message: "Great! Thanks for sending this over. I'll take a look",
	},
]
