// Write your code here
import {Component} from 'react'

import './index.css'

const registrationStatus = {
  initial: 'INITIAL',
  yet_to_register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  register_closed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  onInititalStatus = () => (
    <div className="initial-status-con">
      <p className="initial-status">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  onYettoRegisterStatus = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-register-img"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance
      </p>

      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  onRegisterStatus = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="ticked-img"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  onRegisterClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-register-img"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  render() {
    const {clickedItem} = this.props

    switch (clickedItem) {
      case registrationStatus.initial:
        return this.onInititalStatus()
      case registrationStatus.yet_to_register:
        return this.onYettoRegisterStatus()
      case registrationStatus.registered:
        return this.onRegisterStatus()
      case registrationStatus.register_closed:
        return this.onRegisterClosed()
      default:
        return null
    }
  }
}
export default ActiveEventRegistrationDetails
