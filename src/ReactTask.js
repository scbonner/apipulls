import * as React from 'react'

export default function App() {
    const name = 'Kelly'
    const x = true

    return (
        <div className='container'>
            <h1>Hi From React</h1>
            <h2>Hello {x ? 'Yes' : 'No'}</h2>
        </div>
    )
}