import React from 'react'
import { useLocation } from 'react-router'

export default () => {
	const { state: user } = useLocation()

	return (
		<div className='user__container'>
			<div className='user'>
				<p>{user.name}</p>
				<p>{user.id}</p>
			</div>
		</div>
	)
}
