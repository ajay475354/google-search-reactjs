import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSugestion = event => {
    this.setState({searchInput: event.target.value})
  }

  suggestionClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResult = suggestionsList.filter(eachSearch =>
      eachSearch.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />

        <ul className="list-items-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search"
              placeholder="Search
              Google"
              value={searchInput}
              onChange={this.onChangeSugestion}
            />
          </div>

          {searchResult.map(each => (
            <SuggestionItem
              eachItem={each}
              key={each.id}
              click={this.suggestionClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
