import { makeAutoObservable } from "mobx";

class Control {
    text = ''

    constructor() {
        makeAutoObservable(this)
    }

    getText() {
      return (
        this.text
      )
    }

    putText(str: string) {
      this.text = str
    }
}

export default new Control()