const dataMock = [
	{
		title: 'backlog',
		issues: [
			{
				id: '12345',
				name: 'Sprint bugfix',
				description: 'Fix all the bugs'
			},
			{
				id: '329786054548905',
				name: 'Add Unit tests',
				description: 'Cover application with Unit tests'
			},
			{
				id: '37302620983060905',
				name: 'Fix Save to collection icon',
				description: 'Icon in "Save to collection" component is broken now, we need to fix it'
			}
		]
	},
	{
		title: 'ready',
		issues: [
			{
				id: '8996234665258984',
				name: 'Add user section to settings',
				description: 'There should be a user section in setting where users can edit their profile data: name, phone, email, etc.'
			}
		]
	},
	{
		title: 'inProgress',
		issues: [
			{
				id: '15694889400239302',
				name: 'Update API routes',
				description: 'Update API routes to use the newest versions'
			}
		]
	},
	{
		title: 'finished',
		issues: [
			{
				id: '45652229644291793',
				name: 'Implement loader',
				description: 'Fetching data from server takes some time. We need to implement a loader so user can see that data fetching is in progress.'
			}
		]
	},
]

export default dataMock;