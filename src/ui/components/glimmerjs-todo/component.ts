import Component, { tracked } from "@glimmer/component";

export default class GlimmerjsTodo extends Component {
	@tracked items: { id: number, text: string, isDone: boolean }[];

	constructor(options) {
		super(options);

		this.items = [
			{
				id: 1,
				text: "Learn TypeScript",
				isDone: false,
			},
			{
				id: 2,
				text: "Try Glimmer",
				isDone: false,
			},
			{
				id: 3,
				text: "Build example todo app",
				isDone: false,
			}
		];
	}


	addItem( task ){
		let last_id = 0;

		this.items.forEach( item =>{
			if ( item.id > last_id ) {
				last_id = item.id;
			}
		});

		this.items = [
			{
				id: last_id + 1,
				text: task,
				isDone: false
			},
			...this.items
		]
	}

	taskComplete( task ){

		let items = [];
		this.items.forEach( item => {
			if ( item.id === task.id ) {
				item.isDone = !task.isDone;
				items.push( item );
			}else{
				items.push( item );				
			}
		});
		this.items = items;
	}


	removeTask( task ){
		let items = [];
		this.items.forEach( item => {
			if ( item.id !== task.id ) {
				items.push( item );
			}
		});
		this.items = items;
	}

}
