import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import DashboardPage from './pages/dashboard.page'
import TaskPage from './pages/task.page'

const router = createBrowserRouter([
	{
		path: '/',
		element: <DashboardPage />,
	},
	{
		path: '/task/:id',
		element: <TaskPage />,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
