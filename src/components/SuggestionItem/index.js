import './index.css'

const SuggestionItem = props => {
  const {eachItem, click} = props
  const {suggestion} = eachItem

  const sugestionPlaced = () => {
    click(suggestion)
  }

  return (
    <li className="list-item-container">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="arrow"
        onClick={sugestionPlaced}
      />
    </li>
  )
}

export default SuggestionItem
