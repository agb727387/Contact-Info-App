import React, { Component } from 'react'

class CreateContact extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name: '',
         email: '',
         number: '',
         notes: ''
      }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.email === '' || this.state.number === '') {
          alert('Please input information in the required fields ...')
          return
        }
        this.props.createContactHandler(this.state);
        this.setState({ name: '', email: '', number: '', notes: ''})
    }

  render() {
    return (
      <div className="ui main">
        <h2>Add a contact</h2>
        <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
                <label>Name</label>
                <input type="text" placeholder="Wade Lee" value={this.state.name}
                onChange={e => this.setState({name: e.target.value})} />
            </div>
            <div className="field">
                <label>Email</label>
                <input type="text" placeholder="somerandomemail321@gmail.com" value={this.state.email}
                onChange={e => this.setState({email: e.target.value})} />
            </div>
            <div className="field">
                <label>Phone Number</label>
                <input type="text" placeholder="123-455-7899" value={this.state.number}
                onChange={e => this.setState({number: e.target.value})} />
            </div>
            <div className="field">
                <label className="labelNotes">Notes (Optional)</label>
                <input className="notesField" type="text" placeholder="Address, Hobbies, Medical Information, etc..." value={this.state.notes}
                onChange={e => this.setState({notes: e.target.value})} />
            </div>
            <button className="ui button blue">Add</button>
        </form>

      </div>
    )
  }
}

export default CreateContact