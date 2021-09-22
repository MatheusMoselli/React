class Todo {
  id: number;
  text: string;

  constructor(text: string) {
    this.id = Math.random() + new Date().getTime();
    this.text = text;
  }
}

export default Todo;
