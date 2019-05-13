import React, { Component } from 'react';
import SimpleMessangerContract from '../../contracts/SimpleMessanger.json';
import getWeb3 from '../../utils/getWeb3';
import Messages from '../lists/Messages';
import MessageForm from '../forms/MessageForm';
import { Spinner, Container, Row } from 'reactstrap';

class App extends Component {
  state = {
    messages: 0, 
    web3: null,
    accounts: null,
    contract: null
  };

  getMessages = async (contract) => {
    return contract.methods.getMessages().call();
  }
  
  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleMessangerContract.networks[networkId];

      const instance = new web3.eth.Contract(
        SimpleMessangerContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      const messages = await this.getMessages(instance);
 
      this.setState({ messages, web3, accounts, contract: instance });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );

      console.error(error);
    }
  };

  runExample = async (e, message) => {
    e.preventDefault();

    const { accounts, contract } = this.state;

    await contract.methods.addMessage(message).send({ from: accounts[0] }).then(console.log);

    const messages = await this.getMessages(contract);

    this.setState({ messages });
  };

  render() {
    if (!this.state.web3) {
      return <Spinner type="grow" color="primary" />
    } 

    return (
      <Container className="mt-5">
        <Row>
          <MessageForm onSubmit={this.runExample} />
          <Messages messages={this.state.messages} />
        </Row>
      </Container>
    );
  }
}

export default App;
