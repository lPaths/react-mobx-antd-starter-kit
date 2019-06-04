import { observable, action } from 'mobx'

class AppState {
  @observable count = 0

  @action
  plus () {
    this.count = this.count + 1
  }

  @action
  minus () {
    this.count = this.count - 1
  }
}

export default AppState