import React, { useState } from "react";

function DoughnutSettings() {
    const [firstName, setFirstName] = useState('');

    return (
        <div className="settings-sidebar">
            <input name="firstName" onChange={e => setFirstName(e.target.value)} />
            <div>{firstName}</div>
        </div>
    )
}

export default DoughnutSettings