import React from "react";
import "./selectionsort.css";
import * as d3 from "d3";

class EmptyStep {
	forward() {
		
	}

	backward() {

	}
}

class UncolorStep {
	constructor(id1, ids, ref) {
		this.id1 = id1;
		this.ids = ids;
		this.ref = ref;
	}

	forward() {
		d3.select(this.ref).select("#" + this.ids[this.id1]).style("fill", "gray");
	}

	backward() {
		d3.select(this.ref).select("#" + this.ids[this.id1]).style("fill", "red");
	}
}

class SortedStep {
	constructor(id1, ids, ref) {
		this.id1 = id1;
		this.ids = ids;
		this.ref = ref;
	}

	forward() {
		d3.select(this.ref).select("#" + this.ids[this.id1]).style("fill", "green");
	}

	backward() {
		d3.select(this.ref).select("#" + this.ids[this.id1]).style("fill", "red");
	}
}

class ColorSwapStep {
	constructor(id1, id2, ids, ref) {
		this.id1 = id1;
		this.id2 = id2;
		this.ids = ids;
		this.ref = ref;
	}

	forward() {
		d3.select(this.ref).select("#" + this.ids[this.id1]).style("fill", "gray");
		d3.select(this.ref).select("#" + this.ids[this.id2]).style("fill", "red");
	}

	backward() {
		d3.select(this.ref).select("#" + this.ids[this.id1]).style("fill", "red");
		d3.select(this.ref).select("#" + this.ids[this.id2]).style("fill", "gray");
	}
}

class SwapStep {
	constructor(id1, id2, ids, ref, stepTime) {
		this.id1 = id1;
		this.id2 = id2;
		this.ids = ids;
		this.ref = ref;
		this.stepTime = stepTime;
	}

	runSwap() {
		var newx1 = d3.select(this.ref).select("#" + this.ids[this.id2]).attr("x");
		var newx2 = d3.select(this.ref).select("#" + this.ids[this.id1]).attr("x");

		console.log(d3.select(this.ref).select("#" + this.ids[this.id1]));

		d3.select(this.ref)
			.select("#" + this.ids[this.id1])
				.transition()
				.duration(this.stepTime)
				.attr("x", newx1)
				.attr("id", this.ids[this.id2]);
		d3.select(this.ref)
			.select("#" + this.ids[this.id2])
				.transition()
				.duration(this.stepTime)
				.attr("x", newx2)
				.attr("id", this.ids[this.id1]);

		console.log(d3.select(this.ref).select("#" + this.ids[this.id1]));
	}

	forward() {
		this.runSwap();
	}

	backward() {
		this.runSwap();
	}
}

export default class SelectionSort extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			arr: [],
			size: 5,
			steps: [],
			ids: [],
			messages: [],
			running: false,
			stepId: 0,
			stepTime: 100,
			waitTime: (9 * 100) / 8
		};

		this.ref = React.createRef();

		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		this.restart = this.restart.bind(this);
		this.backward = this.backward.bind(this);
		this.forward = this.forward.bind(this);
		this.turnOffRunning = this.turnOffRunning.bind(this);
		this.run = this.run.bind(this);
	}

	printArray(arr, size) {
		for (let i = 0; i < size; i++)
		{
			console.log(arr[i]);
		}
	}

	sort(arr, ids, size)
	{
		var smallest;
		var i, j;
		var steps = [];
		var messages = [];

		messages.push("<h1>Beginning Selection Sort!</h1>");
		steps.push(new EmptyStep());

		for (i = 0; i < size-1; i++)
		{
			steps.push(new ColorSwapStep(i, i, ids, this.ref.current));
			smallest = i;

			messages.push("<h1>" + arr[smallest] + " is the current smallest</h1>");

			for (j = i+1; j < size; j++)
			{
				steps.push(new ColorSwapStep(j, j, ids, this.ref.current));
				messages.push("<h1>Move Search forward and check the next element</h1>");

				if(arr[j] < arr[smallest])
				{
					if (smallest !== i)
					{
						steps.push(new ColorSwapStep(smallest, j, ids, this.ref.current));
						messages.push("<h1>" + arr[j] + " is the new smallest element</h1>");
					}

					smallest = j;
					messages.push("<h1>" + arr[smallest] + " is the new smallest element</h1>");
					steps.push(new EmptyStep());
				}
				else
				{
					messages.push("<h1>" + arr[j] + " is greater than our current smallest. Keep our current smallest.</h1>");
					steps.push(new UncolorStep(j, ids, this.ref.current));
				}

			}

			messages.push("<h1>Reached the end of the array. " + arr[smallest] + " is the smallest element.</h1>");
			steps.push(new SwapStep(smallest, i, ids, this.ref.current, this.state.stepTime));
			[arr[smallest], arr[i]] = [arr[i], arr[smallest]];
						
			messages.push("<h1>Swap our smallest element into index " + i + "</h1>");

			steps.push(new UncolorStep(smallest, ids, this.ref.current));
			steps.push(new SortedStep(i, ids, this.ref.current));
			messages.push("<h1>Index " + i + " has been sorted</h1>");
		}

		steps.push(new SortedStep(i, ids, this.ref.current));
		messages.push("<h1>There is only one index left so it is sorted</h1>");

		messages.push("<h1>Finished Selection Sort!</h1>");
		steps.push(new EmptyStep());

		this.setState({arr: arr});
		this.setState({steps: steps});
		this.setState({messages: messages});

		console.log(steps);
		console.log(messages);
	}

	initialize() {
		var arr = [];

		// fills arr with random numbers [5, 100]
		for (let i = 0; i < this.state.size; i++)
		{
			arr[i] = 5 + Math.floor(Math.random() * 96);
		}

		this.setState({arr: arr});

		console.log("Unsorted");
		this.printArray(arr, this.state.size);

		const barWidth = 50;
		const barOffset = 5;
		const height = 600;

		let yScale = d3.scaleLinear()
			.domain([0, d3.max(arr)])
			.range([0, height]);

		d3.select(this.ref.current)
			.append("svg")
				.attr("width", this.state.size * (barWidth + barOffset))
				.attr("height", height)
			.selectAll("rect")
				.data(arr)
				.enter()
				.append("rect")
					.attr("id", function (_, i) {
					return "rect" + i;
					})
					.attr("width", barWidth)
					.attr("height", (d) => {
						return yScale(d);
					})
					.attr("x", (_, i) => {
						return i * (barWidth + barOffset);
					})
					.attr("y", (d) => {
						return height - yScale(d);
					})
					.style("fill", "gray");

					var ids = [];

		for (let i = 0; i < this.state.size; i++)
		{
			ids.push("rect" + i);
		}

		this.setState({ids: ids});
	}

	turnOffRunning() {
		this.setState({running: false});
	}

	forward() {
		console.log("FORWARD CLICKED");
		if (this.state.running) return;
		if (this.state.stepId === this.state.steps.length) return;
		
		this.state.steps[this.state.stepId].forward();
		console.log(this.state.steps[this.state.stepId]);
		document.getElementById("message").innerHTML = this.state.messages[this.state.stepId];
		this.setState({stepId: this.state.stepId + 1});

		d3.timeout(this.turnOffRunning, this.state.waitTime);
	}

	backward() {
		console.log("BACKWARD CLICKED");
		if (this.state.running) return;
		if (this.state.stepId - 1 < 0) return;

		var stepId = this.state.stepId;

		this.state.steps[--stepId].backward();
		document.getElementById("message").innerHTML = this.state.messages[stepId];
		this.setState({stepId: stepId});
		d3.timeout(this.turnOffRunning, this.state.waitTime);
	}

	run() {
		if (!this.state.running) return;
		if (this.state.stepId === this.state.steps.length) {
			this.setState({running: false});
			return;
		}
		this.state.steps[this.state.stepId].forward();
		document.getElementById("message").innerHTML = this.state.messages[this.state.stepId];
		this.setState({stepId: this.state.stepId + 1});
		d3.timeout(this.run, this.state.waitTime);
	}

	play() {
		console.log("PLAY CLICKED");
		if (this.state.running) return;
		this.setState({running: true});
		this.run();
	}

	pause() {
		console.log("PAUSE CLICKED");
		this.setState({running: false});
	}

	restart() {
		console.log("RESTART CLICKED");
		if (this.state.stepId - 1 < 0) return;

		var stepId = this.state.stepId;

		while (stepId - 1 >= 0) {
			this.state.steps[--stepId].backward();
			d3.timeout(this.turnOffRunning, this.state.waitTime);
		}

		document.getElementById("message").innerHTML = "";
		this.setState({running: false});
		this.setState({stepId: 0});
	}

	componentDidMount() {
		this.initialize();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.size !== prevState.size) {
			console.log("SIZE CHANGED");
			this.initialize();
		}
		else if (this.state.arr.length > prevState.arr.length) {
			this.sort(this.state.arr, this.state.ids, this.state.size);

			console.log("Sorted");
			this.printArray(this.state.arr, this.state.size);
		}
		else if (this.state.running !== prevState.running)
		{
			this.run();
			console.log("We ran");
		}
	}

	render() {
		return (
			<div>
				<div class="center-screen">
					<button onClick={this.play}>Play</button>
					<button onClick={this.pause}>Pause</button>
					<button onClick={this.restart}>Restart</button>
					<button onClick={this.backward}>&lt;</button>
					<button onClick={this.forward}>&gt;</button>
				</div>
				<div class="center-screen"><span id="message"></span></div>
				<div ref={this.ref} class="center-screen"></div>
			</div>
		)
	}
}