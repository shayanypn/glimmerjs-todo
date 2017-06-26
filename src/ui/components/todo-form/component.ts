import Component, { tracked } from '@glimmer/component';

export default class TodoForm extends Component {
	onSubmit: any;

	constructor(options) {
		super(options);
		this.onSubmit = this.args.onSubmit || (() => {});
	}

	addTodo(event){

		// submit only on `enter` keypress
		if (event.keyCode !== 13) {
			return false;
		}

		const value = event.currentTarget.value.trim();
		
		this.onSubmit(value);

		event.currentTarget.value = '';
	}
};
