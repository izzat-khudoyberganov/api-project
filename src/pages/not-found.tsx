import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <h2>Not found</h2>
        <Link to={'/'} className="text-red-500">Home</Link>
    </div>
  )
}

export default NotFound