import React from "react";
import "./insertionsort.css";
import * as d3 from "d3";

class EmptyStep {
	forward() {
		
	}

	backward() {

	}
}

class PartitionStep {
	constructor(id1, id2, ids, ref) {
		this.id1 = id1;
        this.id2 = id2;
		this.ids = ids;
		this.ref = ref;
	}

	forward() {
        for (var i = this.id1; i <= this.id2; i++) {
            var newybar = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("rect").attr("y")) - 100;
            var newytxt = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("text").attr("y")) - 100;
            d3.select(this.ref).select("#" + this.ids[i]).select("rect").transition().duration(this.stepTime).attr("y", newybar);
            d3.select(this.ref).select("#" + this.ids[i]).select("text").transition().duration(this.stepTime).attr("y", newytxt);
        }
	}

	backward() {
        for (var i = this.id1; i <= this.id2; i++) {
            var newybar = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("rect").attr("y")) + 100;
            var newytxt = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("text").attr("y")) + 100;
            d3.select(this.ref).select("#" + this.ids[i]).select("rect").transition().duration(this.stepTime).attr("y", newybar);
            d3.select(this.ref).select("#" + this.ids[i]).select("text").transition().duration(this.stepTime).attr("y", newytxt);
        }
	}
}

class UnpartitionStep {
	constructor(id1, id2, ids, ref) {
		this.id1 = id1;
        this.id2 = id2;
		this.ids = ids;
		this.ref = ref;
	}

    forward() {
        if (this.id2 !== this.ids.length - 1) {
            d3.select(this.ref).select("#divisor").attr("visibility", "visible");
            d3.select(this.ref).select("#sortTxt").attr("visibility", "visible");
        }

        for (var i = this.id1; i <= this.id2; i++) {
            var newybar = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("rect").attr("y")) + 100;
            var newytxt = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("text").attr("y")) + 100;
            d3.select(this.ref).select("#" + this.ids[i]).select("rect").transition().duration(this.stepTime).attr("y", newybar);
            d3.select(this.ref).select("#" + this.ids[i]).select("text").transition().duration(this.stepTime).attr("y", newytxt);
        }
	}

	backward() {
        d3.select(this.ref).select("#divisor").attr("visibility", "hidden");
        d3.select(this.ref).select("#sortTxt").attr("visibility", "hidden");

        for (var i = this.id1; i <= this.id2; i++) {
            var newybar = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("rect").attr("y")) - 100;
            var newytxt = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("text").attr("y")) - 100;
            d3.select(this.ref).select("#" + this.ids[i]).select("rect").transition().duration(this.stepTime).attr("y", newybar);
            d3.select(this.ref).select("#" + this.ids[i]).select("text").transition().duration(this.stepTime).attr("y", newytxt);
        }
	}
}

class PartSortedStep {
	constructor(id1, id2, ids, ref) {
		this.id1 = id1;
		this.id2 = id2;
		this.ids = ids;
		this.ref = ref;
	}

	forward() {
		var barWidth = 70;
		var barOffset = 30;
        var height = 700;
		var sorty = 150;
		var sortx = parseInt(d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("x"));

		if (this.id2 === 0) {
            d3.select(this.ref).select("svg").append("line")
				.style("stroke", "white")
				.style("stroke-width", 7)
				.attr("x1", barWidth + (barOffset / 2) + 65)
				.attr("y1", 100)
				.attr("x2", barWidth + (barOffset / 2) + 65)
				.attr("y2", height + 50)
				.attr("id", "divisor");

			d3.select(this.ref).select("svg").append("text").text("Sorted")
				.attr("y", sorty)
				.attr("x", sortx)
				.attr("id", "sortTxt")
				.style("text-anchor", "middle")
				.style("font-family", "Merriweather")
				.attr("font-weight", "bold")
				.style("font-size", "32px")
				.style("fill", "white");
		}
		else if (this.id1 === this.ids.length - 1) {
            d3.select(this.ref).select("#divisor").attr("visibility", "hidden");
			d3.select(this.ref).select("#sortTxt").attr("visibility", "hidden");
		}

        d3.select(this.ref).selectAll(".arrowpath").attr("visibility", "hidden");
		d3.select(this.ref).selectAll(".insertTxt").attr("visibility", "hidden");

        for (var i = this.id1; i <= this.id2; i++)
		    d3.select(this.ref).select("#" + this.ids[i]).select("rect").style("fill", "green");
	}

	backward() {
		if (this.id2 === 0) {
            d3.select(this.ref).select("#divisor").remove();
			d3.select(this.ref).select("#sortTxt").remove();
		}

		for (var i = this.id1 + 1; i < this.id2; i++) {
			d3.select(this.ref).select("#" + this.ids[i]).select("rect").style("fill", "grey");
		}

		d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill", "red");

		if (this.id1 === 0) {
			d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", "grey");
		}
	}
}

class SortedStep {
	constructor(id1, id2, ids, ref) {
		this.id1 = id1;
		this.id2 = id2;
		this.ids = ids;
		this.ref = ref;
	}

	forward() {
		var barWidth = 70;
		var barOffset = 30;
        var height = 700;
		var sorty = 150;
		var sortx = parseInt(d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("x"));

		if (this.id2 === 0) {
            d3.select(this.ref).select("svg").append("line")
				.style("stroke", "white")
				.style("stroke-width", 7)
				.attr("x1", barWidth + (barOffset / 2) + 65)
				.attr("y1", 100)
				.attr("x2", barWidth + (barOffset / 2) + 65)
				.attr("y2", height + 50)
				.attr("id", "divisor");

			d3.select(this.ref).select("svg").append("text").text("Sorted")
				.attr("y", sorty)
				.attr("x", sortx)
				.attr("id", "sortTxt")
				.style("text-anchor", "middle")
				.style("font-family", "Merriweather")
				.attr("font-weight", "bold")
				.style("font-size", "32px")
				.style("fill", "white");
		}
		else if (this.id1 === this.ids.length - 1) {
            d3.select(this.ref).select("#divisor").attr("visibility", "hidden");
			d3.select(this.ref).select("#sortTxt").attr("visibility", "hidden");
		}
		else {
			console.log("AFTER " + this.id2);
			var newDivx = parseInt(d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("x")) + barWidth + (barOffset / 2);
			var newSortx = (parseInt(d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("x")) + barOffset) / 2;

			d3.select(this.ref).select("#divisor")
				.transition()
				.duration(this.stepTime)
					.attr("x1", newDivx)
					.attr("x2", newDivx);

			d3.select(this.ref).select("#sortTxt")
				.transition()
				.duration(this.stepTime)
					.attr("x", newSortx);
		}

        d3.select(this.ref).selectAll(".arrowpath").attr("visibility", "hidden");
		d3.select(this.ref).selectAll(".insertTxt").attr("visibility", "hidden");

        for (var i = this.id1; i <= this.id2; i++)
		    d3.select(this.ref).select("#" + this.ids[i]).select("rect").style("fill", "green");
	}

	backward() {
		var barOffset = 30;

		if (this.id2 === 0) {
            d3.select(this.ref).select("#divisor").remove();
			d3.select(this.ref).select("#sortTxt").remove();
		}
		else {
			console.log("BEFORE " + this.id2);
			var newDivx = parseInt(d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("x")) - (barOffset / 2);
			var newSortx = (parseInt(d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("x")) - barOffset) / 2;

			if (this.id2 === 1) {
				newSortx = parseInt(d3.select(this.ref).select("#" + this.ids[0]).select("rect").attr("x"));
			}

			d3.select(this.ref).select("#divisor")
				.transition()
				.duration(this.stepTime)
					.attr("x1", newDivx)
					.attr("x2", newDivx);

			d3.select(this.ref).select("#sortTxt")
				.transition()
				.duration(this.stepTime)
					.attr("x", newSortx);
		}

        d3.select(this.ref).selectAll(".arrowpath").attr("visibility", "hidden");
		d3.select(this.ref).selectAll(".insertTxt").attr("visibility", "hidden");

        if (this.id2 != 0) {
            d3.select(this.ref).select("#arrowpath" + this.id1).attr("visibility", "visible");
		    d3.select(this.ref).select("#insertTxt" + this.id1).attr("visibility", "visible");
			d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", "red");
        }

		for (var i = this.id1 + 1; i <= this.id2; i++)
		    	d3.select(this.ref).select("#" + this.ids[i]).select("rect").style("fill", "grey");

		if (this.id2 === 0) {
			d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", "grey");
		}
	}
}

class InsertSwapStep {
	constructor(id1, ids, ref) {
		this.id1 = id1;
		this.ids = ids;
		this.ref = ref;
	}

	forward() {
        d3.select(this.ref).select("#divisor").attr("visibility", "hidden");
		d3.select(this.ref).select("#sortTxt").attr("visibility", "hidden");
		d3.select(this.ref).selectAll(".arrowpath").attr("visibility", "hidden");
		d3.select(this.ref).selectAll(".insertTxt").attr("visibility", "hidden");        

		d3.select(this.ref).select("#arrowpath" + this.id1).attr("visibility", "visible");
		d3.select(this.ref).select("#insertTxt" + this.id1).attr("visibility", "visible");
        
        for (var i = 0; i < this.id1; i++) {
            d3.select(this.ref).select("#" + this.ids[i]).select("rect").style("fill", "gray");
        }

		d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", "red");
	}

	backward() {
        d3.select(this.ref).select("#divisor").attr("visibility", "visible");
		d3.select(this.ref).select("#sortTxt").attr("visibility", "visible");
		d3.select(this.ref).selectAll(".arrowpath").attr("visibility", "hidden");
		d3.select(this.ref).selectAll(".insertTxt").attr("visibility", "hidden");

		for (var i = 0; i < this.id1; i++) {
            d3.select(this.ref).select("#" + this.ids[i]).select("rect").style("fill", "green");
        }

		d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", "gray");
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

		if (this.id1 === this.id2) {
			return;
		}

		var newxbar1 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("x");
		var newxbar2 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("x");

		var newxtxt1 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("text").attr("x");
		var newxtxt2 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("text").attr("x");

		console.log("SWAPPING.");

		d3.select(this.ref)
			.select("#" + this.ids[this.id1])
			.select("rect")
				.transition()
				.duration(this.stepTime)
				.attr("x", newxbar1);

		d3.select(this.ref)
			.select("#" + this.ids[this.id1])
			.select("text")
				.transition()
				.duration(this.stepTime)
				.attr("x", newxtxt1);

		d3.select(this.ref)
			.select("#" + this.ids[this.id2])
			.select("rect")
				.transition()
				.duration(this.stepTime)
				.attr("x", newxbar2)

		d3.select(this.ref)
			.select("#" + this.ids[this.id2])
			.select("text")
				.transition()
				.duration(this.stepTime)
				.attr("x", newxtxt2);

		var bar1 = d3.select(this.ref).select("#" + this.ids[this.id1]);

			bar1.attr("id", null);

		var bar2 = d3.select(this.ref).select("#" + this.ids[this.id2]);

			bar2.attr("id", null);

			bar1.attr("id", this.ids[this.id2]);
			bar2.attr("id", this.ids[this.id1]);
	}

	forward() {
		this.runSwap();

        d3.select(this.ref).selectAll(".arrowpath").attr("visibility", "hidden");
		d3.select(this.ref).selectAll(".insertTxt").attr("visibility", "hidden");

		d3.select(this.ref).select("#arrowpath" + this.id2).attr("visibility", "visible");
		d3.select(this.ref).select("#insertTxt" + this.id2).attr("visibility", "visible");
	}

	backward() {
		this.runSwap();

        d3.select(this.ref).selectAll(".arrowpath").attr("visibility", "hidden");
		d3.select(this.ref).selectAll(".insertTxt").attr("visibility", "hidden");

		d3.select(this.ref).select("#arrowpath" + this.id1).attr("visibility", "visible");
		d3.select(this.ref).select("#insertTxt" + this.id1).attr("visibility", "visible");
	}
}

export default class InsertionSort extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			arr: [],
			size: 10,
			steps: [],
			ids: [],
			messages: [],
			running: false,
			stepId: 0,
			stepTime: 300,
			waitTime: (9 * 2000) / 8
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
		var steps = [];
		var messages = [];
        var i, j;

		messages.push("<h1>Beginning Insertion Sort!</h1>");
		steps.push(new EmptyStep());

        messages.push("<h1>Index 0 is a one element array, and is therefore sorted.</h1>");
		steps.push(new SortedStep(0, 0, ids, this.ref.current));
        
        for(i = 1; i < size; i++)
        {
            messages.push("<h1>Selecting our next insertion index.</h1>");
		    steps.push(new InsertSwapStep(i, ids, this.ref.current));

            messages.push("<h1>Pull elements out of our " + (i+1) + " index array and sort them (left to right).</h1>");
		    steps.push(new PartitionStep(0, i, ids, this.ref.current));
            
            for(j = i-1; j >= 0; j--)
            {
                if(arr[j] > arr[j+1])
                {
                    messages.push("<h1>" + arr[j] + " > " + arr[j+1] + ". Scooch " + arr[j] + " to the right.</h1>");
                    steps.push(new SwapStep(j+1, j, ids, this.ref.current, this.state.stepTime));
                    [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                }
                else
                {
                    messages.push("<h1>" + arr[j] + " < " + arr[j+1] + ". Insert is in its sorted spot.</h1>");
		            steps.push(new PartSortedStep(0, j + 1, ids, this.ref.current));

                    break;
                }
            }
            messages.push("<h1>Indices 0 through " + i + " are in sorted order.</h1>");
		    steps.push(new SortedStep(j + 1, i, ids, this.ref.current));

            messages.push("<h1>Indices 0 through " + i + " are in sorted order.</h1>");
		    steps.push(new UnpartitionStep(0, i, ids, this.ref.current));
        }

		messages.push("<h1>Finished Insertion Sort!</h1>");
		steps.push(new EmptyStep());

		this.setState({arr: arr});
		this.setState({steps: steps});
		this.setState({messages: messages});

		console.log(steps);
		console.log(messages);
	}

	initialize() {
		var arr = [];

		// fills arr with random numbers [15, 70]
		for (let i = 0; i < this.state.size; i++)
		{
			arr[i] = 15 + Math.floor(Math.random() * 56);
		}

		this.setState({arr: arr});

		console.log("Unsorted");
		this.printArray(arr, this.state.size);

		const barWidth = 70;
		const barOffset = 30;
		const height = 500;

		let yScale = d3.scaleLinear()
			.domain([0, d3.max(arr)])
			.range([0, height]);

		var svg = d3.select(this.ref.current)
			.append("svg")
				.attr("width", (this.state.size * (barWidth + barOffset)) + 100)
				.attr("height", height + 350);

		var bars = svg.selectAll(".bar")
					.data(arr)
					.enter().append("g")
					.attr("class", "bar")
					.attr("id", function (_, i) {
						return "g" + i;
					});
		
		bars.append("rect")
				.attr("width", barWidth)
				.attr("height", (d) => {
					return yScale(d);
				})
				.attr("x", (_, i) => {
					return (i * (barWidth + barOffset)) + 65;
				})
				.attr("y", (d) => {
					return (height + 200) - yScale(d);
				})
				.style("fill", "gray");

		bars.append("text")
				.text((d) => {
					console.log("BAR " + d);
					return d;
				})
				.attr("y", (height + 200) - 15)
				.attr("x", (_, i) => {
					return i * (barWidth + barOffset) + (barWidth / 2) + 65;
				})
				.style("text-anchor", "middle")
				.style("font-size", "28px")
				.style("fill", "white");

		bars.append("defs")
			.append("marker")
				.attr("id", "arrow")
				.attr("viewBox", [0, 0, 50, 50])
				.attr("refX", 25)
				.attr("refY", 25)
				.attr("markerWidth", 50)
				.attr("markerHeight", 50)
				.attr("orient", "auto-start-reverse")
			.append("path")
				.attr("d", d3.line()([[0, 0], [0, 50], [50, 25]]))
				.attr("fill", "white");

		bars.append("path")
			.attr("d", (_, i) => {
				return d3.line()([[i * (barWidth + barOffset) + (barWidth / 2) + 65, height + 285], [i * (barWidth + barOffset) + (barWidth / 2) + 65, height + 235]]);
			})
			.attr("stroke-width", 1)
			.attr("stroke", "white")
			.attr("marker-end", "url(#arrow)")
			.attr("fill", "white")
			.attr("class", "arrowpath")
			.attr("id", (_, i) => {
				return "arrowpath" + i;
			})
			.attr("visibility", "hidden");

		bars.append("text").text("Insert")
			.attr("y", height + 315)
			.attr("x", (_, i) => {
				return i * (barWidth + barOffset) + (barWidth / 2) + 65;
			})
			.attr("class", "insertTxt")
			.attr("id", (_, i) => {
				return "insertTxt" + i;
			})
			.style("text-anchor", "middle")
			.style("font-family", "Merriweather")
			.attr("font-weight", "bold")
			.style("font-size", "26px")
			.style("fill", "white")
			.attr("visibility", "hidden");

		var ids = [];

		for (let i = 0; i < this.state.size; i++)
		{
			ids.push("g" + i);
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
        console.log(this.state.steps[stepId]);
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
        this.setState({running: false, arr: [], steps: [], ids: [], messages: [], stepId: 0});

        d3.select(this.ref.current).select("svg").remove();
        document.getElementById("message").innerHTML = "<h1>Welcome to Insertion Sort!</h1>";
	}

	componentDidMount() {
		this.initialize();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.arr.length > prevState.arr.length) {
			this.sort(this.state.arr, this.state.ids, this.state.size);

			console.log("Sorted");
			this.printArray(this.state.arr, this.state.size);
		}
		else if (this.state.running !== prevState.running)
		{
			this.run();
			console.log("We ran");
		}
        else if (this.state.steps.length !== prevState.steps.length && this.state.steps.length === 0) {
			console.log("Steps changed");
			this.initialize();
		}
	}

	render() {
		return (
			<div>
				<div class="center-screen" id="banner">
					<button onClick={this.play}>Play</button>
					<button onClick={this.pause}>Pause</button>
					<button onClick={this.restart}>Restart</button>
					<button onClick={this.backward}>&lt;</button>
					<button onClick={this.forward}>&gt;</button>
				</div>
				<div class="center-screen" id="message-pane"><span id="message"><h1>Welcome to Insertion Sort!</h1></span></div>
				<div ref={this.ref} class="center-screen"></div>
			</div>
		)
	}
}