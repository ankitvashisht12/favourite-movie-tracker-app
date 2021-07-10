import React from 'react'
import { FaHeart, FaHome } from 'react-icons/fa'

const BottomTab = () => {
	return (
		<div className="fixed left-0 bottom-0 right-0 grid grid-cols-2">
			<div className="flex items-center justify-center">
				<div className="p-2">
					<FaHome />
				</div>
				<div>
					<p>Home</p>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<div className="p-2">
					<FaHeart />
				</div>
				<div>
					<p>Likes</p>
				</div>
			</div>
		</div>
	)
}

export default BottomTab
