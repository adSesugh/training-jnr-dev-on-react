import { useState } from "react"

export default function Counter() {
    const [value, setValue] = useState(0)

    const increment = async () => setValue(prev => prev + 1)
    const decrement = async () => setValue(prev => {
        if(prev <= 0) {
            return 0
        }
        return prev - 1
    })
    return (
        <div>
            <div>
                <button disabled={value === 0 ? true : false} onClick={decrement}>-</button>
                <span>{value}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}