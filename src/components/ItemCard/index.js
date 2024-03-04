import './index.css'

const ItemCard = props => {
  const {eachItemDetails} = props
  const {id, Name, DOB, Role} = eachItemDetails

  return (
    <li className="app-item">
      <p className="app-name">
        Emp Id: <span className="app-Id">{id}</span>
      </p>
      <p className="app-name">
        Name: <span className="app-Id">{Name}</span>
      </p>
      <p className="app-name">
        DOB: <span className="app-DOB">{DOB}</span>
      </p>
      <p className="app-name">
        Role:<span className="app-Role">{Role}</span>
      </p>
    </li>
  )
}

export default ItemCard
