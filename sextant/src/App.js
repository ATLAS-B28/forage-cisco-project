
import './App.css';
import Banner from './Banner';
import Card from './Card';
import Display from "./GetIP"
import Connector from './Connector';
function App(props) {
  return (
    <div className="App">
      <Banner head="Banner"/>
      <Card name="Public IPv4 Address">
        <Display url="https://api.ipify.org?format=json"/>
      </Card>
      <Card name="Public IPv6 Address">
        <Display url="https://api.ipify.org?format=json"/>
      </Card>
      <Card name="Pylon Packet Latency">
        <Connector/>
      </Card>
    </div>
  );
}

export default App;
