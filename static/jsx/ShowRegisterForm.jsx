
class ShowRegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
      late_night: "No",
      berkeley: "No",
      burlingame: "No",
      daly_city: "No",
      dublin: "No",
      emeryville: "No",
      palo_alto: "No",
      san_francisco: "No",
      san_jose: "No",
      santa_clara: "No",
      sunnyvale: "No", 
      show_name: "",
      show_type: "",
      show_url: "",
      show_amount_people: "",
      show_dressing_room: "",
      show_length: "",
      show_ticket_price: "",
      show_rent: "",
      show_free_rent: ""
    }; 
    this.handleShowRegister = this.handleShowRegister.bind(this);
    this.handleShowInput = this.handleShowInput.bind(this);
    this.handleShowSelect = this.handleShowSelect.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleProducerPage = this.handleProducerPage.bind(this);
  }
                            
  handleShowInput(e) { 
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleShowSelect(e) { 
    const target = e.target;
    const value = target.checked;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleLogOut(e) {
    e.preventDefault();
    this.props.changePage("LogOut")
  }

  handleProducerPage(e) {
    e.preventDefault();
    this.props.changePage("ProducerPage")
  }

  handleShowRegister (e) {
    event.preventDefault();  
    fetch("/register_show", 
      {method: "POST",
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
      } 
    })
    .then(res1 => res1.json())
    .then(res2 =>{
    const showRegResponse = JSON.stringify(res2)
    this.props.changePage("ProducerPage", showRegResponse) 
    console.log("Success: showRegResponse")    
  })
}
        
render(){
  return(

    <div className="container-fluid shows-update">
      <div className="d-flex flex-row-reverse bd-highlight">

        <div className="p-2 bd-highlight"> 
          <a className="big-letter-Lato-as" href="#" onClick= {this.handleLogOut}>Log Out</a>
            </div>
        <div className="p-2 bd-highlight"> 
          <a className="big-letter-Lato-as" href="#" onClick= {this.handleProducerPage}>Home</a>
            </div>        
              </div>

    <div className="container col-md-8 .col-md-offset-3"> 
      <div className="big-row-update"> </div>         
        <div className="p-as">Fill out the following information as completely as possible</div>

                
    <form autoComplete="off" onSubmit= {this.handleShowRegister}>  

      <div className="form-group">
         <label>Name of Show / Group / Act</label>
          <input type="text" className="form-control" 
                             name="show_name" 
                             value={this.state.show_name} 
                             onChange={this.handleShowInput} required />         
      </div>

      <div className="form-group">
        <label >Type of Show</label>
          <select className="form-control" value={this.state.show_type} 
                                           name="show_type"
                                           onChange={this.handleShowInput} required >

              <option value="" disabled ></option>
              <option value="Burlesque">Burlesque</option>
              <option value="Improv">Improv</option>
              <option value="Music">Music</option>
              <option value="Play">Play</option>
              <option value="Sketch Comedy">Sketch Comedy</option>
              <option value="Spoken Word">Spoken Word</option>
              <option value="Stand up">Stand up</option>
              <option value="Ted Talk">Ted Talk</option>
          </select>
      </div>

      <div className="form-group">

      <div>
        <label>Locations preferred</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" 
                                            name="berkeley" 
                                            value="Yes"  
                                            onChange={this.handleShowInput}/>
          <label className="form-check-label">Berkeley</label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" 
                                            name="burlingame" 
                                            value="Yes"  
                                            onChange={this.handleShowInput}/>
          <label className="form-check-label">Burlingame</label>
      </div>

      <div className="form-check">
         <input className="form-check-input" type="checkbox" 
                                             name="daly_city" 
                                             value="Yes" 
                                             onChange={this.handleShowInput}/>
           <label className="form-check-label">Daly City</label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" 
                                            name="dublin" 
                                            value="Yes" 
                                            onChange={this.handleShowInput}/>
          <label className="form-check-label">Dublin</label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" 
                                            name="emeryville" 
                                            value="Yes" 
                                            onChange={this.handleShowInput}/>
          <label className="form-check-label">Emeryville</label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" 
                                            name="palo_alto" 
                                            value="Yes" 
                                            onChange={this.handleShowInput}/>
          <label className="form-check-label">Palo Alto</label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" 
                                               name="san_francisco" 
                                               value="Yes" 
                                               onChange={this.handleShowInput}/>
          <label className="form-check-label">San Francisco</label>
      </div>        

      <div className="form-check">
           <input className="form-check-input" type="checkbox" 
                                               name="san_jose" 
                                               value="Yes" 
                                               onChange={this.handleShowInput}/>
            <label className="form-check-label">San Jose</label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" 
                                               name="santa_clara" 
                                               value="Yes" 
                                               onChange={this.handleShowInput}/>      
          <label className="form-check-label">Santa Clara</label>
      </div>

     <div className="form-check">
        <input className="form-check-input" type="checkbox" 
                                               name="sunnyvale" 
                                               value="Yes" 
                                               onChange={this.handleShowInput}/>
          <label className="form-check-label">Sunnyvale</label>
      </div>
    </div>
       
      <div className="form-group">
        <label>How many performers are in the show</label>
          <input type="number" min="1" className="form-control" 
                                       name="show_amount_people" 
                                       value={this.state.show_amount_people} 
                                       onChange={this.handleShowInput} required />         
      </div>

      <div className="form-group">
        <label >Do you need a dressing-room</label>
          <select className="form-control form-control" value={this.state.show_dressing_room} 
                                                        name="show_dressing_room" 
                                                        onChange={this.handleShowInput} required >
              <option value="" disabled ></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>           
          </select>
      </div>

      <div className="form-group">
            <label >How long is the show</label>
                <select className="form-control" value={this.state.show_length} 
                                                 name="show_length" 
                                                 onChange={this.handleShowInput} required >   
              <option value="" disabled ></option>
              <option value="1">1 hour</option>
              <option value="2">2 hour</option>
              <option value="3">3 hour</option>
              <option value="4">4 hour</option>
              <option value="5">5 hour</option>
              <option value="6">6 hour</option>
        </select>
      </div>

      <div>
        <label>Which days do you preferred</label>
          </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                                              name="monday" 
                                              value="Yes" 
                                              onChange={this.handleShowInput}/>
            <label className="form-check-label">Monday</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                                              name="tuesday" 
                                              value="Yes" 
                                              onChange={this.handleShowInput}/>
            <label className="form-check-label">Tuesday</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                                              name="wednesday" 
                                              value="Yes" onChange={this.handleShowInput}/>
            <label className="form-check-label">Wednesday</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                                              name="thursday" 
                                              value="Yes" 
                                              onChange={this.handleShowInput}/>
            <label className="form-check-label">Thursday</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                                              name="friday" 
                                              value="Yes" 
                                              onChange={this.handleShowInput}/>
            <label className="form-check-label">Friday</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                                              name="saturday" 
                                              value="Yes" 
                                              onChange={this.handleShowInput}/>
            <label className="form-check-label">Saturday</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                                              name="sunday" 
                                              value="Yes" 
                                              onChange={this.handleShowInput}/>
            <label className="form-check-label">Sunday</label>
        </div>
           
        <div className="s-as">
          <label>What time do you preferred</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                                              name="morning" 
                                              value="Yes" 
                                              onChange={this.handleShowInput}/>
            <label className="form-check-label">Morning</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                                              name="late_morning" 
                                              value="Yes" 
                                              onChange={this.handleShowInput}/>
            <label className="form-check-label">Late Morning</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                                              name="early_night" 
                                              value="Yes" 
                                              onChange={this.handleShowInput}/>
            <label className="form-check-label">Early Night</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" 
                                              name="late_night" 
                                              value="Yes" 
                                              onChange={this.handleShowInput}/>
            <label className="form-check-label">Late Night</label>
        </div>

        <div className="s-as">
          <div className="form-group">
            <label >How much are your tickets?</label>
              <select className="form-control" value={this.state.show_ticket_price} 
                                               name="show_ticket_price"
                                               onChange={this.handleShowInput} required >
                <option value="" disabled ></option>
                <option value="0">Free</option>>
                <option value="5">From $1 to $10</option>
                <option value="15">From $11 to $20</option>
                <option value="25">From $21 to $30</option>
                <option value="35">From $31 to $40</option>
                <option value="55">From $50 and up</option>                    
              </select>
          </div>
        </div>

        <div>
          <div className="form-group">
            <label >How much are you looking to pay for rent?</label>
              <select className="form-control" value={this.state.show_rent} 
                                               name="show_rent"
                                               onChange={this.handleShowInput} required >
                <option value="" disabled ></option>
                <option value="0">Free</option>>
                <option value="40">From $10 to $40</option>
                <option value="100">From $50 to $100</option>
                <option value="200">From $101 to $200</option>
                <option value="300">From $201 to $300</option>
                <option value="400">From $301 to $400</option>
                <option value="500">From $401 to $500</option>
                <option value="600">$600 and up</option>                     
              </select>
          </div>
        </div>
          
        <div className="form-group">
          <label>Website</label>
            <input type="text" className="form-control" 
                               name="show_url" 
                                value={this.state.show_url} 
                                onChange={this.handleShowInput} />         
        </div>

        <div className="row justify-content-center">
          <button type="submit" className="btn btn-default big-letter-Lato-as">Submit</button>
        </div>                                            
       </form>                 
      </div>
     </div>
 
    )       
  }
}
