import { useState } from 'react'

import Home from './views/Home'
import Modal from './components/Modal'
import { UserContext } from './utils/Context'

function App() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="app">
            <Home />
            {showModal && <Modal />}
        </div>
    )
}

export default App
