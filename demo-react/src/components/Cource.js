import React, { Component } from 'react';

class Cource extends Component {

  /**setTimeout cho setState 
   * 
  */
  constructor(props){
    super(props);
    this.state = {
        isShowOutline : false,
        data: 'Khánh Louis' 
    };
  }
  componentDidMount(){
    setTimeout(() => {
        this.setState({
          data : 'Hello Vinsofts',
        })
    }, 2000);
  }
    hendleToogleOuline = () => {
      this.setState({
          isShowOutline : !this.state.isShowOutline
      });
  }
/**end setState */


/**handing event */
  handleClick1 = () => {
    alert('hello');
  }
  handleClick2(content) {
    alert(content);
  }
  handleClick3 = () => {
    alert(this.props.name);
  }
  /**end hading event */


  /** --Refs-- */
  registerCource = () => {
    console.log(this.refs.username.value);
  }
  /**end refs */


  /**props children */
  showButtonFree() {
    const isFree = this.props.free;

    if (isFree) {
      return <div className="btn-group">
        <button type="button" onClick={this.handleClick1} className="btn btn-success">View 1</button>
        <button type="button" onClick={() => this.handleClick2("hello babe")} className="btn btn-primary">View 2</button>
        <button type="button" onClick={this.handleClick3} className="btn btn-danger">View 3</button>
      </div>

    } else {
      return (
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-info" onClick={this.registerCource} type="button">Register</button>
          </span>
          <input type="text" className="form-control" placeholder="UserName ..." ref="username" />
        </div>
      );
    }
  }

  


  render() {
    let elementOutline = null;
    if(this.state.isShowOutline){
      elementOutline =  <ul className="list-group">
                          <li className="list-group-item">Item 1</li>
                          <li className="list-group-item">Item 2</li>
                          <li className="list-group-item">Item 3</li>
                        </ul>
    }

    return (
      <div className="col-sm-4 col-md-4">
           
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.name}</h3>
          </div>
          <div className="panel-body">
            <p>{this.props.children}</p>
            
            <p><button className="btn btn-info" onClick={this.hendleToogleOuline} type="button">Toogle Outline</button></p>
              
            { elementOutline }  

            <div className="panel-footer">
              {this.showButtonFree()}
            </div>
            <div className="btn btn-success">
                  {this.state.data}
              </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Cource;
