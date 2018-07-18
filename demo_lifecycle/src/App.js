import React from 'react';

export default class Lifecycle extends React.Component {
  constructor(props) {

    // Được gọi khi một thể hiện của component được tạo ra.
    // Có thể dùng để khởi tạo state cho component.
    // Cũng có thể dùng để "bind" các hàm của component.
    // Nếu phải cài đặt hàm này thì phải khai báo 1 tham số props cho nó và phải gọi super(props) đầu tiên.
    super(props);
    this.state = {
      count: 2,
      name: ', This is State'
    };
  }
    UNSAFE_componentWillMount() {
    // Được gọi trước khi render().
    // Dùng để đăng ký các sự kiện toàn cục.
    // Dựa vào các props để tính toán và set lại state
    console.log('1- component will mount');
  }

  render() {

    // Hàm này bắt buộc phải có trong component().
    // Trả về 1 đối tượng JSX (có thể lồng các đối tượng với nhau nhưng phải có 1 đối tượng gói tất cả các đối tượng lại) để hiển thị hoặc null / false nếu không muốn hiển thị gì.
    // Không được gọi setState() trong hàm này (cũng như trong các hàm mà hàm này gọi đến), bởi khi gọi setState() thì hàm render sẽ được gọi => gây ra lặp vô hạn.
    console.log(this.state.count + this.state.name + '- render DOM');
    return <div>{this.props.name}</div>;
  }

  componentDidMount() {
    // Ngay sau khi hàm render được gọi đến lần đầu tiên chạy xong thì hàm này sẽ được chạy.
    // Thường dùng để fetch dữ liệu từ server và sau đó setState để render dữ liệu ra.
    // Đến đây thì các phần tử đã được sinh ra rồi, và có thể tương tác với DOM bằng JS trong hàm này.
    // Phương pháp này là một nơi tốt để thiết lập bất kỳ đăng ký nào. Nếu bạn làm điều đó, đừng quên hủy đăng ký componentWillUnmount().
    console.log('3 - component did mount \r\n waiting 2s ...');
  }



  UNSAFE_componentWillReceiveProps(nextProp) {
    //Hàm này được chạy khi mà props của component đã được sinh ra có sự thay đổi.
    // Phải gọi setState() nếu muốn render lại.
    this.setState({ count: 7, name: this.state.name + ' new' });
    console.log('4- component will receive prop: ' + nextProp.name);
  }

  shouldComponentUpdate(nextProp, nextState) {
    // Được gọi trước render.
    // Trả về true / false. Nếu false thì sẽ không render lại. Mặc định là true.
    if (this.state.name !== nextState.name) {
      console.log('5- should component update: ' + nextProp.name + ' ' + nextState.name);
      return true;
    } else {
      return false;
    }

  }

  UNSAFE_componentWillUpdate(nextProp, nextState) {
    // Được gọi ngay sau shouldComponentUpdate() nếu hàm này trả về true.
    // Không gọi setState() trong hàm này bởi hàm này là để chuẩn bị update cho đối tượng chứ không phải tạo ra 1 update mới, sẽ tạo ra lặp vô hạn.
    // Hàm render sẽ được gọi ngay sau hàm này.
    console.log('6- component will update: ' + nextProp.name + ' ' + nextState.name);
  }

  componentDidUpdate(prevProps, prevState) {
    // Được gọi ngay sau render() từ lần render thứ 2 trở đi.
    // Đây cũng là 1 cơ hội để thao tác với các phần tử DOM bằng JS.
    console.log('8- OK component did update: ' + prevProps.name + ' ' + prevState.name + '\r\n waiting 4s ...');
  }



  componentWillUnmount() {
    // Được gọi khi 1 component được loại bỏ khỏi DOM.
    // Thực hiện các thao tác dọn dẹp như huỷ các timer, loại bỏ các phần tử thừa, ...
    console.log('9- component has removed');
  }


}

// Render lần đầu tiên
