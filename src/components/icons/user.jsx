import React from 'react'

const UserIcon = ({fill='#686677'}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.4" cx="15" cy="6" r="3" fill={fill}/>
            <ellipse opacity="0.4" cx="16" cy="17" rx="5" ry="3" fill={fill}/>
            <circle cx="9.00098" cy="6" r="4" fill={fill}/>
            <ellipse cx="9.00098" cy="17.001" rx="7" ry="4" fill={fill}/>
        </svg>
    )
}

export default UserIcon