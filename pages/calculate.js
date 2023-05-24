import { useRouter } from 'next/router'
import Button from '@/components/Button'
import { ChatBubble } from '@/components/ChatBubble'
import { Dropdown } from '@/components/Dropdown'
import { LineGraph } from '@/components/LineGraph'
import { QtySkillBillRate } from '@/components/QtySkillBillrate'
import {
	disciplines,
	specialties,
	alliedSet,
	dummyChatData,
} from '@/public/utils/data'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import {
	MdChatBubble,
	MdOutlineSend,
	MdOutlineDownload,
	MdOutlineTableRows,
} from 'react-icons/md'
import { RiShareForwardFill } from 'react-icons/ri'
import { AiOutlineTable } from 'react-icons/ai'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { usePageProviderContext } from '@/components/PageContext'
import PrivateRoute from '@/components/PrivateRoute'

//To be replaced with env variable
const API_KEY = process.env.API_KEY
const deployment_id = process.env.deployment_id
// const API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://app.datarobot.com/api/v2"
const API_PRED_URL = process.env.API_PRED_URL
console.log(API_KEY)
const headers = {
	Authorization: `Bearer ${API_KEY}`,
	'Content-Type': 'application/json',
	'DataRobot-key': process.env.DATA_ROBOT_KEY,
}

const formatDate = date => {
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	const dateString = `${year}-${month}-${day}T00:00:00Z`
	return dateString
}

function getNextSaturday(date) {
	const dayOfWeek = date.getDay() // Get the day of the week (0-6, where Sunday is 0)
	if (dayOfWeek === 6) {
		// If the current date is Saturday, return the same date
		return date
	} else {
		const nextSaturday = new Date(date) // Create a new Date object with the same date value
		nextSaturday.setDate(date.getDate() + (6 - dayOfWeek + 1)) // Calculate the date of the next Saturday
		return nextSaturday
	}
}

const buildObj = (date, formData) => {
	const { discipline, specialty } = formData
	const startDate = new Date(date.getFullYear(), 0, 1)
	const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000))
	const nextSaturday = getNextSaturday(date)
	const weekNumber = Math.ceil(days / 7)
	const today = formatDate(date)
	const testObj = {
		BILLRATE_MONTHEND: null,
		BILLRATE_WEEK_NUMBER: weekNumber,
		BILLRATE_YEAR: date.getFullYear(),
		BILL_RATE_END_DATE: null,
		BILL_RATE_START_DATE: today,
		DISCIPLINE: discipline,
		FACILITY_AFFILLIATIONID: null,
		FACILITY_BEDS: null,
		FACILITY_BEST_BETSID: null,
		FACILITY_BUSINESS_RELATIONSHPID: null,
		FACILITY_CITY: null,
		FACILITY_MSP_CLIENTID: null,
		FACILITY_NAME: null,
		FACILITY_NUM_REQUIRED_REFERENCES: null,
		FACILITY_STATE: null,
		HOUSING_CATEGORY: null,
		IS_TEACHING_HOSPITAL: 'N',
		PLACEMENT_END_DATE: null,
		PLACEMENT_START_DATE: today,
		SHIFTID: null,
		SPECIALTY: specialty,
		WEEK_ENDING_DATE: formatDate(nextSaturday),
	}
	return testObj
}

const getUrl = async (formData, setTodayDate) => {
	// trigger toastify to let user know the app is generating the
	const { addNewPrediction, specialty } = formData
	const url = `${API_PRED_URL}/predictions`
	const date = new Date()
	const objs = []
	const dates = []
	for (let i = -52; i < 5; i++) {
		const nextDate = new Date(date)
		nextDate.setDate(date.getDate() + 7 * i)

		dates.push(nextDate)
		objs.push(buildObj(nextDate, formData, setTodayDate))
	}

	const res = await fetch(url, {
		method: 'POST',
		headers,
		body: JSON.stringify(objs),
	})
	const json = await res.json().catch(err => console.log(err))
	const formattedData = json.data.map((dataVal, i) => ({
		startDate: dates[i],
		rate: dataVal.prediction,
	}))

	addNewPrediction(formattedData, specialty)
	return
}

const CalculatePage = () => {
	const [specialty, setSpecialty] = useState('')
	const [discipline, setDiscipline] = useState('')
	const [predictions, setPredictions] = useState({})
	const [todayDate, setTodayDate] = useState()
	const [weeklySpend, setWeeklySpend] = useState([])
	const [, setPageTitle] = usePageProviderContext()
	const router = useRouter()

	useEffect(() => {
		setPageTitle('Bill Rate')
		const dateStr = new Date().toString()
		const formattedDate = dateStr.slice(0, 15)
		setTodayDate(formattedDate)
	}, [])

	useEffect(() => {
		getTotalWeeklySpend()
	}, [predictions])

	const addNewPrediction = (prediction, specialty) => {
		setPredictions({ ...predictions, [specialty]: prediction })
	}

	const formData = { specialty, discipline, addNewPrediction }
	const data1 = [
		{ date: '01/01/23', rate: 100, industryRate: 111 },
		{ date: '01/08/23', rate: 150, industryRate: 140 },
		{ date: '01/25/23', rate: 200, industryRate: 221 },
		{ date: '01/22/23', rate: 180, industryRate: 191 },
		{ date: '01/29/23', rate: 220, industryRate: 201 },
	]

	const relevantSpecialties = (specialties[discipline] || []).map(option => ({
		label: option,
		value: option,
	}))
	const addDisabled = !(specialty && discipline)
	// const addButtonStyle = addDisabled
	//  ? { ...buttonStyle, backgroundColor: 'gray' }
	//  : buttonStyle
	// const notify = (message, disabled) =>
	//  toast.success(message, {
	//    position: 'top-right',
	//    autoClose: disabled,
	//    hideProgressBar: false,
	//    closeOnClick: true,
	//    pauseOnHover: true,
	//    draggable: true,
	//    progress: undefined,
	//    theme: 'colored',
	//  })

	const shareBillRates = () => router.push('/share_billrate')

	const calculateWeeklySpend = () => {
		return weeklySpend.length > 0
			? weeklySpend.reduce((sum, rateCost) => sum + rateCost, 0)
			: 0
	}

	const generateBarGraph = () => {
		let data = 0
		// setWeeklySpend(prevSend => [...prevSend, data])
		// return Object.keys(predictions).map(specialty => {
		// 	data += predictions[specialty].slice(-1)[0].rate

		// 	console.log(data)
		// 	return (
		// 		<QtySkillBillRate
		// 			key={specialty}
		// 			data={predictions[specialty]}
		// 			skillSet={specialty}
		// 		/>
		// 	)
		// })
		// id: 0
		// qty: 1
		// rate: 91.8883253869
		// skillSet : "RN - LTAC"
		return weeklySpend.map(spending => {
			return (
				<QtySkillBillRate
					id={spending.id}
					key={spending.id}
					rate={spending.rate}
					data={spending.data}
					skillSet={spending.skillSet}
					weeklySpend={weeklySpend}
					setWeeklySpend={setWeeklySpend}
				/>
			)
		})
	}

	const getSkillSetText = skillSet => {
		let skillSetText = ''
		if (alliedSet.has(skillSet)) {
			skillSetText = `Allied - ${skillSet}`
		} else {
			skillSetText = `RN - ${skillSet}`
		}
		return skillSetText
	}

	const getTotalWeeklySpend = () => {
		const updatedWeeklySpend = Object.keys(predictions).map((specialty, i) => ({
			id: i,
			qty: 1,
			rate: predictions[specialty].slice(-1)[0].rate,
			skillSet: getSkillSetText(specialty),
			data: predictions[specialty],
			key: i,
		}))

		setWeeklySpend(updatedWeeklySpend)
		return 0
	}

	const getTotal = () => {
		return weeklySpend.reduce(
			(sum, cur) => (sum += cur.rate.toFixed(2) * cur.qty),
			0
		)
	}
	// console.log(getTotal())

	return (
		<motion.div
			initial={{ y: '100%' }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			// flex flex-col items-center justify-center gap-5 w-[80%] h-[80vh] m-auto
			className='flex gap-5 w-[98%]  justify-center m-auto h-[80vh] rounded-3xl'
		>
			<section className='calculate-container w-[85%] bg-white rounded-3xl flex'>
				<article className='calculate-container_left flex flex-col gap-3 w-[15%] bg-[#F0F0FB] p-4 rounded-l-3xl'>
					<Dropdown
						placeholder='Select Discipline...'
						onChange={event => setDiscipline(event.target.value)}
						elementId='disciplineDropdown'
						selectedValue={discipline}
						options={disciplines}
					/>
					<Dropdown
						placeholder='Select Specialty...'
						onChange={event => setSpecialty(event.target.value)}
						elementId='specialtyDropdown'
						selectedValue={specialty}
						options={relevantSpecialties}
					/>
					<Dropdown
						placeholder='Select Facility...'
						onChange={() => {}}
						elementId='facilityDropdown'
						selectedValue={''}
						options={[]}
					/>
					<Dropdown
						placeholder='Select State...'
						onChange={() => {}}
						elementId='stateDropdown'
						selectedValue={''}
						options={[]}
					/>
					<Button
						labelText='Add'
						disabled={addDisabled}
						handleClick={() => getUrl(formData, setTodayDate)}
						style={{
							width: '100%',
							// backgroundColor: '#003C69',
							padding: '2px',
							color: 'white',
							borderRadius: '5px',
							':hover': {
								color: '#003C69',
								backgroundColor: 'white',
							},
						}}
					/>
				</article>
				<section className='calculate-container_middle w-[85%] px-5'>
					<div className='calculate-container_middle-title flex justify-between items-center p-6'>
						<p className='font-semibold text-xl'>
							Medstar Georgetown University Medical Center
						</p>
						<p className='text-xs'>{todayDate}</p>
					</div>
					<hr className='border-2' />
					<section className='calculate-container_middle-content h-[90%] flex'>
						<article className='calculate-container_middle-chat flex flex-col justify-between w-[35%] h-full py-2'>
							<div className='flex flex-col'>
								{dummyChatData.map((chat, index) => (
									<ChatBubble
										key={index}
										user={chat.user}
										message={chat.message}
									/>
								))}
							</div>
							<div className='calculate-container_chat-input flex items-center p-4'>
								<div className='relative flex-grow'>
									<input
										type='text'
										placeholder='Type your message...'
										className='w-full py-1 px-2 pr-10 border bg-[#F0F0FB] border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
									/>
									<button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-1'>
										<MdOutlineSend />
									</button>
								</div>
							</div>
						</article>
						<article className='calculate-container_middle-barchart w-[70%] h-full p-4 flex flex-col relative'>
							<div className='calculate-container_buttons flex align-center justify-between w-full pb-5'>
								<div className='flex gap-1 align-center'>
									<button className='px-[8px] rounded-xl bg-[#019AD9]'>
										Recommended
									</button>
									<button className='px-[8px] rounded-xl bg-[#ABB2C0] '>
										Alternate
									</button>
									<BsFillPlusCircleFill className='text-[#ABB2C0] h-[22px] w-[30px]' />
								</div>
								<div className='flex gap-1 align-center'>
									<RiShareForwardFill className='text-[#ABB2C0] h-[22px] w-[30px]' />
									<MdOutlineDownload className='text-[#ABB2C0] h-[22px] w-[30px]' />
									<AiOutlineTable className='text-[#ABB2C0] h-[22px] w-[30px]' />
									<MdOutlineTableRows className='text-[#019AD9] h-[22px] w-[30px]' />
								</div>
							</div>
							<div className='flex justify-between text-gray-600'>
								<div className='flex gap-10'>
									<p>Qty</p>
									<p>Skill Set</p>
								</div>
								<p>Bill Rate</p>
							</div>
							{generateBarGraph()}
							<div className='totalspend flex flex-col w-full justify-end absolute bottom-7 right-5'>
								<p className='flex justify-end items-center'>
									Weekly Spend: $
									<span className='font-bold text-[25px]'>
										{/* {calculateWeeklySpend().toFixed(2)} */}
										{/* {getTotalWeeklySpend()} */}
										{getTotal()}
									</span>
								</p>
								<div className='flex gap-3 justify-end'>
									<Button
										labelText='Revert Changes'
										handleClick={() => {}}
										disabled={true}
										style={{
											width: '150px',
											backgroundColor: 'white',
											padding: '2px',
											color: '#003C69',
											borderRadius: '5px',
											border: '1px solid #003C69',
										}}
									/>
									<Button
										labelText='Revert Changes'
										handleClick={shareBillRates}
										disabled={false}
										style={{
											width: '150px',
											backgroundColor: '#003C69',
											padding: '2px',
											color: 'white',
											borderRadius: '5px',
											border: '1px solid #003C69',
										}}
									/>
								</div>
							</div>
						</article>
					</section>
				</section>
			</section>
			<section className='calculate-container_right w-[15%] flex flex-col gap-4'>
				<article className='bg-white rounded-lg p-3 w-full h-[25%]'>
					<LineGraph data={data1} />
				</article>
				<article className='bg-white rounded-lg p-3  h-[25%]'>
					<LineGraph data={data1} />
				</article>
				<article className='bg-white rounded-lg p-3  h-[25%]'>
					<LineGraph data={data1} />
				</article>
			</section>
		</motion.div>
	)
}

export default PrivateRoute(CalculatePage)
