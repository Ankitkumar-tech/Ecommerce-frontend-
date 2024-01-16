import React, { useState } from 'react'

const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    return (
        <div>

            <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input type="text" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
        </div>
    )
}

export default LoginPage
