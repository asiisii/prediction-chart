import { FaUserMd } from 'react-icons/fa'
import { SiProbot } from 'react-icons/si'
import { FcOnlineSupport } from 'react-icons/fc'
import { GiNurseFemale } from 'react-icons/gi'

export const ChatBubble = ({ user, message }) => {
	const isClient = user === 'Carrie Brown'
	const isRateBot = user === 'Rate Bot'
	const isManager = user === 'Amanda AM'

	let userIcon
	if (isClient) {
		userIcon = <GiNurseFemale className='mr-2 text-5xl text-gray-600' />
	} else if (isRateBot) {
		userIcon = <SiProbot className='mr-2 text-6xl' />
	} else if (isManager) {
		userIcon = <FcOnlineSupport className='mr-2 text-6xl ' />
	}

	const bubbleColor = isClient ? 'bg-[#8473FC] text-white' : 'bg-[#F0F0FB]'

	return (
		<div className={`flex items-start ${isClient ? 'justify-end' : ''} mb-5 `}>
			<div
				className={`flex items-center ${
					isClient ? 'justify-end' : 'justify-start'
				} w-[250px] h-full`}
			>
				{!isClient && userIcon}
				<div
					className={`p-2 rounded-${isClient ? 'tl' : 'tr'}-xl rounded-${
						isClient ? 'br' : 'bl'
					}-xl ${bubbleColor} mr-1`}
				>
					<p className='font-semibold'>{user}</p>
					<p className='text-xs'>{message}</p>
				</div>
				{isClient && userIcon}
			</div>
		</div>
	)
}
