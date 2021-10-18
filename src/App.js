import logo from './logo.svg'
import './App.css'
import { Link } from 'react-router-dom'

const users = [
	{
		name: 'Oscar',
		id: 1
	},
	{
		name: 'Josefin',
		id: 2
	},
	{
		name: 'Fanny',
		id: 3
	}
]

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				{users.map((user) => (
					<Link
						to={{
							pathname: `/users/${user.id}`,
							state: user
						}}
					>
						{user.name}
					</Link>
				))}
			</header>
		</div>
	)
}

export default App
