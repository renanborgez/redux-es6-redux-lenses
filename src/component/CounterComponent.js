import { add, subtract } from '../actions/CounterActions';

class CounterComponent {
  constructor(store) {
    this.store = store;
    this.counter = document.querySelector('#counter');

    this.add = this.counter.querySelector('#add');
    this.subtract = this.counter.querySelector('#subtract');
    this.result = this.counter.querySelector('#result');
    this.lastCommand = this.counter.querySelector('#last-command');

    this.add.addEventListener('click', this.handleAdd.bind(this));
    this.subtract.addEventListener('click', this.handleSubtract.bind(this));
  }

  handleAdd() {
    this.store.dispatch(add());
  }

  handleSubtract() {
    this.store.dispatch(subtract());
  }

  handleUpdate() {
    this.store.subscribe(() => {
      const state = this.store.getState();
      this.result.innerHTML = state.result;
      this.lastCommand.innerHTML = state.lastCommand;
    });
  }

  render() {
    this.handleUpdate();
  }
}

export default CounterComponent;