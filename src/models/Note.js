export class Note {
  constructor(props) {
    this.id = props.id;
    this.description = props.description;
    this.isDone = props.isDone;
  }

  changeDone = () => (this.isDone = !this.isDone);
}
