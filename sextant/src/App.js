
import './App.css';
import Banner from './Banner';
import Card from './Card';
import Display from "./GetIP"
import Connector from './Connector';
function App(props) {
  return (
    <div className="App">
      <Banner head="Sextant"/>
      <p>Sextant's purpose is to brings ease and verstality at your finger tips and allows developers, network engineers to get the IP 
        addresses of client's servers and get the latency of the servers .It aids in better opertionality for clients and ease for 
        maintainence teams. Build by using React.JS</p>
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
