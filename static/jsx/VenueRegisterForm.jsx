class VenueRegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.id,
      venue_name: "",
      venue_url: "",
      venue_email: "",
      venue_address: "",
      venue_city: "",
      venue_backspace: "",
      venue_capacity: "",
      venue_license: "",
      venue_type: "",
      venue_rent: "",
      monday: "No",
      tuesday: "No",
      wednesday: "No",
      thursday: "No",
      friday: "No",
      saturday: "No",
      sunday: "No",
      morning: "No",
      late_morning: "No",
      early_night: "No",
      late_night: "No"
    };                  
    this.handleVenueRegister = this.handleVenueRegister.bind(this);
    this.handleVenueInput = this.handleVenueInput.bind(this);
    this.handleVenueSelect = this.handleVenueSelect.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleVenueInput(e) { 
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleVenueSelect(e) { 
    const target = e.target;
    const value = target.checked;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleLogOut(e) {
    e.preventDefault();
    this.props.changePage("LogOut")
  }

  handleVenueRegister (e) {
    event.preventDefault();
    fetch("/register_venue", 
      {method: "POST",
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
      } 
    })
    .then(res1 => res1.json())
    .then(res2 =>{
      const VenueUpdateResponse = JSON.stringify(res2)
      this.props.changePage(
        "VenueUserPage", this.props.id
      )         
  })   
}

        
  render() {
    return(
        
      <div className ="backgroud-vp">

        <div className="container-fluid venue-update">
          
        <div className="d-flex flex-row-reverse bd-highlight">
            <div className="p-2 bd-highlight"> 
              <a className="big-letter-Lato" href="#" onClick= {this.handleLogOut}>Log Out</a>
            </div>
        </div>
              
        <div className="container col-md-8 .col-md-offset-3">
        
          <div className="big2-row-update"> </div>
              <div className="mid-letter-uv">
                Fill out the following information as completely as possible
              </div>       
                                
        <form autoComplete="off" onSubmit= {this.handleVenueRegister}>        

           <div className="form-group">
              <label>Venue Name</label>
                <input type="text" className="form-control" name="venue_name"  
                                   value={this.state.venue_name}
                                   onChange={this.handleVenueInput} 
                                   placeholder="" required />         
          </div>

          <div className="form-group">
            <label>Address</label>
                <input autoComplete="off" type="text" className="form-control" name="venue_address"  
                                   value={this.state.venue_address}
                                   onChange={this.handleVenueInput} 
                                   placeholder="" required />         
          </div>

          <div className="form-group">
            <label>City</label>
              <input type="text" className="form-control" name="venue_city" 
                                 value={this.state.venue_city}                              
                                 onChange={this.handleVenueInput} 
                                 placeholder="" required />         
          </div>

          <div className="form-group">
            <label>Email</label>
              <input type="venue_email" className="form-control" name="venue_email"
                                        value={this.state.venue_email} 
                                        onChange={this.handleVenueInput} 
                                        placeholder="" required />         
          </div>
                    
          <div className="form-group">
            <label>Website</label>
              <input type="venue_url" className="form-control" name="venue_url"  
                                      value={this.state.venue_url}                               
                                      onChange={this.handleVenueInput} 
                                      placeholder="" required />         
          </div>              

          <div className="form-group">
            <label >Type of venue</label>
            <select className="form-control" value={this.state.venue_type} 
                                                 name="venue_type"
                                                onChange={this.handleVenueInput} required >
                    <option value="" disabled ></option>
                    <option value="Bar">Bar</option>
                    <option value="Cafe">Cafe</option>
                    <option value="Hall">Hall</option>
                    <option value="Night Club">Night Club</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Special Event">Special Event</option>
                    <option value="Theater">Theater</option>
                    <option value="Other">Other</option>
              </select>
          </div>

          <div className="form-group">
            <label >Is there a backspace/dressing room:</label>
            <select className="form-control form-control" 
                                  name="venue_backspace" 
                                  value={this.state.venue_backspace}
                                  onChange={this.handleVenueInput} required >
                  <option value="" disabled ></option>                                         
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>           
            </select>
          </div>

          <div className="form-group">
            <label>Capacity</label>
            <input type="number" type="number" min="10" max="1000" className="form-control" 
                                                          name="venue_capacity"  
                                                          value={this.state.venue_capacity} 
                                                          onChange={this.handleVenueInput} required />  
          </div>                              
                   
          <div className="form-group">
            <label >Do you have a cabaret license:</label>
            <select className="form-control form-control" 
                                              name="venue_license"
                                              value={this.state.venue_license} 
                                              onChange={this.handleVenueInput} required >
                  <option value="" disabled ></option>                                  
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>           
            </select>
          </div>

          <div>
             <label>Day of the day:</label>
               </div> 

          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                                                name="monday" 
                                                value="Yes" 
                                                onChange={this.handleVenueInput}/>
            <label className="form-check-label">Monday</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                                                name="tuesday" 
                                                value="Yes" 
                                                onChange={this.handleVenueInput}/>
            <label className="form-check-label">Tuesday</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                                                name="wednesday" 
                                                value="Yes" 
                                                onChange={this.handleVenueInput}/>
            <label className="form-check-label">Wednesday</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                                                name="thursday" 
                                                value="Yes" 
                                                onChange={this.handleVenueInput}/>
            <label className="form-check-label">Thursday</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                                                name="friday" 
                                                value="Yes" 
                                                onChange={this.handleVenueInput}/>
            <label className="form-check-label">Friday</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                                                name="saturday" 
                                                value="Yes" 
                                                onChange={this.handleVenueInput}/>
            <label className="form-check-label">Saturday</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                                                name="sunday" 
                                                value="Yes" 
                                                onChange={this.handleVenueInput}/>
            <label className="form-check-label">Sunday</label>
          </div>
                          
          <div>
            <label>Time available</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                                                name="morning" 
                                                value="Yes" 
                                                onChange={this.handleVenueInput}/>
            <label className="form-check-label">Morning</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                                                name="late_morning" 
                                                value="Yes" 
                                                onChange={this.handleVenueInput}/>
            <label className="form-check-label">Late Morning</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                                                name="early_night" 
                                                value="Yes" 
                                                onChange={this.handleVenueInput}/>
            <label className="form-check-label">Early Night</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                                                name="late_night" 
                                                value="Yes" 
                                                onChange={this.handleVenueInput}/>
              <label className="form-check-label">Late Night</label>
          </div>
         
          <div className="s-as">
              <div className="form-group">
                <label >How much is the space per hour?</label>
                <select className="form-control" 
                                               name="venue_rent"
                                               value={this.state.venue_rent}
                                               onChange={this.handleVenueInput} required >
                    <option value="" disabled ></option>
                    <option value="0">Free</option>>
                    <option value="25">From $10 to $50</option>
                    <option value="60">From $51 to $100</option>
                    <option value="150">From $101 to $200</option>
                    <option value="350">From $301 to $400</option>
                    <option value="450">From $401 to $500</option>
                    <option value="550">From $501 and up</option>                    
                  </select>
              </div>
          </div>

          <div className="row justify-content-center">
              <button type="submit" className="btn btn-default big-letter-Lato">Submit</button>
          </div>
                        
          </form>               
        </div> 
       </div> 
      </div> 
                  
    )       
  }
}
