import React from 'react'
import { FaHeart, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const BottomTab = () => {
	return (
		<div className="fixed left-0 bottom-0 right-0 grid grid-cols-2 z-10 bg-white py-1">
			<Link to="/">
				<div className="flex items-center justify-center cursor-pointer">
					<div className="p-2">
						<FaHome />
					</div>
					<div>
						<p>Home</p>
					</div>
				</div>
			</Link>
			<Link to="/likes">
				<div className="flex items-center justify-center cursor-pointer">
					<div className="p-2">
						<FaHeart />
					</div>
					<div>
						<p>Likes</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BottomTab
