import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    handleSubmitForm = (e) => {
        // preventDefault form submission
        e.preventDefault();

        // Create a callback props from parent to show resutls of videos
        this.props.handleTermSearch(this.state.term);

    }
    handleOnChangeForm = (e) => {
        // adding the text value to class
        this.setState({term: e.target.value});
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.handleSubmitForm}>
                    <div className="field">
                        <label>Search Video</label>
                        <input type="text" value={this.state.term} onChange={this.handleOnChangeForm} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;