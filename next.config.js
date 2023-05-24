/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	env: {
		API_KEY:
			'NjQ2NGY3MTMwZTY5ZmFjNmMyNDUxMjJiOkRkNjkrL2pZRml4WlNnK21ZTzFSZkFIVUJ0OC9rT1hoTDBxKzBzVjBTbjg9',
		deployment_id: '64665f2ca7ccfeff51065632',
		API_PRED_URL:
			'https://amn-healthcare-services-inc.dynamic.orm.datarobot.com/predApi/v1.0/deployments/64665f2ca7ccfeff51065632',
		DATA_ROBOT_KEY: '5a86d132-5ecb-99bb-002f-1f1eb0530ef6',
	},
}

module.exports = nextConfig
