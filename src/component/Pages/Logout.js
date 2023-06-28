import { useNavigate } from 'react-router-dom'

function Logout({ setIsLoggedIn }) {
    let navigate = useNavigate()

    fetch('/api/sessions', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
    })
        .then(res => res.json())
        .then(res => setIsLoggedIn(false))
        .then(() => navigate("/About", { replace: true }))
}

export default Logout