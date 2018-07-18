import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      name: "",
      pass: "",
      mota: "",
      gioitinh: 1,
      ngonngu:"en",
      status: false
    };
    this.HandleChange = this.HandleChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  HandleChange(event){
    var target = event.target;
    console.log(event.target);
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name] : value
    });
  }
  HandleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
        
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div>{this.state.name}</div>
              <div className="panel-body">
                <form onSubmit={this.HandleSubmit}>
                  <legend>Form title</legend>
                  
                  <div className="form-group">
                    <label >Username</label>
                    <input type="text" className="form-control" name="name" onChange={this.HandleChange} />
                  </div>

                  <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" name="pass" onChange={this.HandleChange} />
                  </div>

                  <div className="form-group">
                    <label >Mo ta</label>
                    <textarea name="mota"  className="form-control" rows="3" onChange={this.HandleChange} ></textarea> 
                  </div>

                  <div className="form-group">
                    <label> abc</label>
                    <select name="gioitinh" className="form-control" value={this.state.gioitinh} onChange={this.HandleChange}>
                       <option value={0} >Nam</option>
                       <option value={1} >Nu</option>
                     </select> 
                  </div>

                  <label>ngon ngu</label>
                  <div className="radio" >
                    <label>
                      <input type="radio" name="ngonngu" value="en" checked={this.state.ngonngu === "en"} onChange={this.HandleChange}/>
                      Tieng anh
                    </label><br/>
                    <label>
                      <input type="radio" name="ngonngu" value="vi" checked={this.state.ngonngu === "vi"} onChange={this.HandleChange}/>
                      Tieng viet
                    </label>
                  </div>
                
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="status" value={true} onChange={this.HandleChange} checked={this.state.status === true}/>
                      Trang thai
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                  <button type="reset" className="btn btn-defaul">xoa trang</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
