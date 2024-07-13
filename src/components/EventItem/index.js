// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItem, getClickedList} = props
  const {id, imageUrl, name, location} = eventItem

  const getRegisterStatus = () => {
    getClickedList(id)
  }
  return (
    <li className="list-item">
      <button type="button" onClick={getRegisterStatus}>
        <img src={imageUrl} alt="event" className="event-img" />
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
