import React from "react";
import "./quicksort.css";
import * as d3 from "d3";

class EmptyStep {
	forward() {
		
	}

	backward() {

	}
}

class ColorLowStep {
	constructor(id1, id2, ids, ref) {
		this.id1 = id1;
        this.id2 = id2;
		this.ids = ids;
		this.ref = ref;
	}

	forward() {
		var color1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill");
		var color2 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill");
		var prev1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor");
		
		if (color1 === "blue") {
			d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", prev1);
		}

		d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor", color1);

		if (color2 !== "green")
			d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill", "blue");

		d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("prevColor", color2);
	}

	backward() {
		// var color1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill");
		// var color2 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill");
		// var prev1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor");
		// var prev2 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("prevColor");
		
		// d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", prev1);
		// d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor", color1);

		// d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill", prev2);
		// d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("prevColor", color2);
	}
}

class ColorHighStep {
	constructor(id1, id2, ids, ref) {
		this.id1 = id1;
        this.id2 = id2;
		this.ids = ids;
		this.ref = ref;
	}

	forward() {
		var color1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill");
		var color2 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill");
		var prev1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor");
		var prev2 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("prevColor");
		
		if (color1 === "red") {
			d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", prev1);
		}

		d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor", color1);

		if (color2 !== "green")
			d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill", "red");

		d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("prevColor", color2);
	}

	backward() {
		// var color1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill");
		// var color2 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill");
		// var prev1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor");
		// var prev2 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("prevColor");
		
		// d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", prev1);
		// d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor", color1);

		// d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill", prev2);
		// d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("prevColor", color2);
	}
}

class ColorPivotStep {
	constructor(id1, id2, ids, ref) {
		this.id1 = id1;
        this.id2 = id2;
		this.ids = ids;
		this.ref = ref;
	}

	forward() {
		var color1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill");
		var color2 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill");
		var prev1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor");
		var prev2 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("prevColor");
		
		if (color1 === "#f1c232") {
			d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", prev1);
		}

		d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor", color1);

		d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill", "#f1c232");
		d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("prevColor", color2);
	}

	backward() {
		// var color1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill");
		// var color2 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill");
		// var prev1 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor");
		// var prev2 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("prevColor");
		
		// d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", prev1);
		// d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor", color1);

		// d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill", prev2);
		// d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").attr("prevColor", color2);
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
        // for (var i = this.id1; i <= this.id2; i++) {
        //     var newybar = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("rect").attr("y")) + 100;
        //     var newytxt = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("text").attr("y")) + 100;
        //     d3.select(this.ref).select("#" + this.ids[i]).select("rect").transition().duration(this.stepTime).attr("y", newybar);
        //     d3.select(this.ref).select("#" + this.ids[i]).select("text").transition().duration(this.stepTime).attr("y", newytxt);
        // }
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
        // d3.select(this.ref).select("#divisor").attr("visibility", "hidden");
        // d3.select(this.ref).select("#sortTxt").attr("visibility", "hidden");

        // for (var i = this.id1; i <= this.id2; i++) {
        //     var newybar = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("rect").attr("y")) - 100;
        //     var newytxt = parseInt(d3.select(this.ref).select("#" + this.ids[i]).select("text").attr("y")) - 100;
        //     d3.select(this.ref).select("#" + this.ids[i]).select("rect").transition().duration(this.stepTime).attr("y", newybar);
        //     d3.select(this.ref).select("#" + this.ids[i]).select("text").transition().duration(this.stepTime).attr("y", newytxt);
        // }
	}
}

class SortedStep {
	constructor(id1, ids, ref) {
		this.id1 = id1;
		this.ids = ids;
		this.ref = ref;
	}

	forward() {

        d3.select(this.ref).selectAll(".arrowpath").attr("visibility", "hidden");
		d3.select(this.ref).selectAll(".insertTxt").attr("visibility", "hidden");

		var prev = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill");

        d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", "green");
		d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").attr("prevColor", prev);

		for (var i = 0; i < this.ids.length; i++) {
			if (i === this.id1)
				continue;

			var color = d3.select(this.ref).select("#" + this.ids[i]).select("rect").style("fill");

			if (color !== "green") {
				d3.select(this.ref).select("#" + this.ids[i]).select("rect").attr("prevColor", color);
				console.log("" + i + " was " + color);
				d3.select(this.ref).select("#" + this.ids[i]).select("rect").style("fill", "gray");
			}
		}
	}

	backward() {
        // d3.select(this.ref).selectAll(".arrowpath").attr("visibility", "hidden");
		// d3.select(this.ref).selectAll(".insertTxt").attr("visibility", "hidden");

        // for (var i = 0; i < this.ids.length; i++) {
		// 	var color = d3.select(this.ref).select("#" + this.ids[i]).select("rect").attr("prevColor");

		// 	d3.select(this.ref).select("#" + this.ids[i]).select("rect").style("fill", color);
		// }
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

		var newColor2 = d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill");
		var newColor1 = d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill");

		d3.select(this.ref).select("#" + this.ids[this.id1]).select("rect").style("fill", newColor1);
		d3.select(this.ref).select("#" + this.ids[this.id2]).select("rect").style("fill", newColor2);
	}

	forward() {
		this.runSwap();

        d3.select(this.ref).selectAll(".arrowpath").attr("visibility", "hidden");
		d3.select(this.ref).selectAll(".insertTxt").attr("visibility", "hidden");

		// d3.select(this.ref).select("#arrowpath" + this.id2).attr("visibility", "visible");
		// d3.select(this.ref).select("#insertTxt" + this.id2).attr("visibility", "visible");
	}

	backward() {
		this.runSwap();

        d3.select(this.ref).selectAll(".arrowpath").attr("visibility", "hidden");
		d3.select(this.ref).selectAll(".insertTxt").attr("visibility", "hidden");

		// d3.select(this.ref).select("#arrowpath" + this.id1).attr("visibility", "visible");
		// d3.select(this.ref).select("#insertTxt" + this.id1).attr("visibility", "visible");
	}
}

export default class QuickSort extends React.Component {
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

	compare() {
		return true;
	}

	quickSort(low, high, arr, size, ids, steps, messages)
    {
        var split;
        if (low < high)
        {
			messages.push("<h1>Recursively calling QuickSort from index " + low + " through " + high + ".</h1>");
            steps.push(new PartitionStep(low, high, ids, this.ref.current));
             

            split = this.partition(low, high, arr, size, ids, steps, messages);

			messages.push("<h1>Returned from calling QuickSort from index " + low + " through " + high + ".</h1>");
			steps.push(new UnpartitionStep(low, high, ids, this.ref.current));            
             
            this.quickSort(low, split - 1, arr, split - low, ids, steps, messages);
            this.quickSort(split + 1, high, arr, high - split + 1, ids, steps, messages);
        }
        else
        {
            if(low > -1 && low < size)
            {
                if (low > high)
                {
                    return;
                }
                
				messages.push("<h1>Recursively calling QuickSort on index " + low + ".</h1>");
				steps.push(new PartitionStep(low, low, ids, this.ref.current));

				messages.push("<h1>Index " + low + " is a single element partition. It is already in its sorted position.</h1>");
				steps.push(new SortedStep(low, ids, this.ref.current));
                 
				messages.push("<h1>Index " + low + " is a single element partition. It is already in its sorted position.</h1>");
				steps.push(new UnpartitionStep(low, low, ids, this.ref.current));

            }    
            else if (low <= high)
            {
				messages.push("<h1>Recursively calling QuickSort on index " + high + ".</h1>");
				steps.push(new PartitionStep(high, high, ids, this.ref.current));

				messages.push("<h1>Index " + high + " is a single element partition. It is already in its sorted position.</h1>");
				steps.push(new SortedStep(high, ids, this.ref.current));

				messages.push("<h1>Index " + high + " is a single element partition. It is already in its sorted position.</h1>");
				steps.push(new UnpartitionStep(high, high, ids, this.ref.current));

            }
        }
    }

    partition(low, high, arr, size, ids, steps, messages)
    {
        var pivot = low++; 
        var pHigh = high;

        
        // Set/color the pointers
        messages.push("<h1>Index " + low + " is the Low pointer.</h1>");
		steps.push(new ColorLowStep(low, low, ids, this.ref.current));

        messages.push("<h1>Index " + high + " is the High pointer.</h1>");
		steps.push(new ColorHighStep(high, high, ids, this.ref.current));

        messages.push("<h1>Index " + pivot + " is the pivot.</h1>");
		steps.push(new ColorPivotStep(pivot, pivot, ids, this.ref.current));

        while (low <= high)
        {
            while (low <= high && arr[low] <= arr[pivot]){
                
                if (low === pHigh)
                {
                    messages.push("<h1>Low is not greater than the Pivot AND has reached the end of the array.</h1>");
					steps.push(new EmptyStep());

                    low++;
                     
                    break;

                }
                else
                {
					messages.push("<h1>Low is not greater than the Pivot, move Low to the right.</h1>");
					steps.push(new ColorLowStep(low, ++low, ids, this.ref.current));
                }
            }

            if (low <= high && arr[low] > arr[pivot])
            {
				messages.push("<h1>Low is greater than the Pivot, switch to High Pointer.</h1>");
				steps.push(new EmptyStep());                 
            }

            while (high >= low && arr[high] > arr[pivot]){
				messages.push("<h1>High is not less than the Pivot, move High to the left.</h1>");
				steps.push(new ColorHighStep(high, --high, ids, this.ref.current));                 
            }

            if (high >= low && arr[high] <= arr[pivot])
            {
                messages.push("<h1>High is less than the Pivot. Swap Low and High!</h1>");
				steps.push(new EmptyStep());
            }

            if (low < high)
            {
                [arr[low], arr[high]] = [arr[high], arr[low]];

				messages.push("<h1>High is less than the Pivot. Swap Low and High!</h1>");
				steps.push(new SwapStep(low, high, ids, this.ref.current, this.state.stepTime));

                messages.push("<h1>After swapping positions, move both pointers.</h1>");
				steps.push(new EmptyStep());

				messages.push("<h1>After swapping positions, move both pointers.</h1>");
				steps.push(new ColorLowStep(low, ++low, ids, this.ref.current));

				messages.push("<h1>After swapping positions, move both pointers.</h1>");
				steps.push(new ColorHighStep(high, --high, ids, this.ref.current));             
            }
        }
		
        // Finally we swap the pivot with the point high was pointing to
		[arr[pivot], arr[high]] = [arr[high], arr[pivot]];

		messages.push("<h1>High and Low pointers have crossed. Swap High and Pivot!</h1>");
		steps.push(new SwapStep(pivot, high, ids, this.ref.current, this.state.stepTime));
        
		messages.push("<h1>Pivot is now in its sorted spot.</h1>");
		steps.push(new SortedStep(high, ids, this.ref.current));
         
        return high;
    }

    sort(arr, ids, size)
	{
		var steps = [];
		var messages = [];

		messages.push("<h1>Beginning Quick Sort!</h1>");
		steps.push(new EmptyStep());

        this.quickSort(0, size - 1, arr, size, ids, steps, messages);

		messages.push("<h1>Finished Quick Sort!</h1>");
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
				.attr("height", height + 250);

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
					return (height + 100) - yScale(d);
				})
				.style("fill", "gray")
				.attr("prevColor", "gray");

		bars.append("text")
				.text((d) => {
					return d;
				})
				.attr("y", (height + 100) - 15)
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
				return d3.line()([[i * (barWidth + barOffset) + (barWidth / 2) + 65, height + 185], [i * (barWidth + barOffset) + (barWidth / 2) + 65, height + 135]]);
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

		bars.append("text").text("Low")
			.attr("y", height + 215)
			.attr("x", (_, i) => {
				return i * (barWidth + barOffset) + (barWidth / 2) + 65;
			})
			.attr("class", "ptrTxt")
			.attr("id", (_, i) => {
				return "lowTxt" + i;
			})
			.style("text-anchor", "middle")
			.style("font-family", "Merriweather")
			.attr("font-weight", "bold")
			.style("font-size", "26px")
			.style("fill", "white")
			.attr("visibility", "hidden");

        bars.append("text").text("High")
			.attr("y", height + 215)
			.attr("x", (_, i) => {
				return i * (barWidth + barOffset) + (barWidth / 2) + 65;
			})
			.attr("class", "ptrTxt")
			.attr("id", (_, i) => {
				return "highTxt" + i;
			})
			.style("text-anchor", "middle")
			.style("font-family", "Merriweather")
			.attr("font-weight", "bold")
			.style("font-size", "26px")
			.style("fill", "white")
			.attr("visibility", "hidden");

        bars.append("text").text("Pivot")
			.attr("y", height + 215)
			.attr("x", (_, i) => {
				return i * (barWidth + barOffset) + (barWidth / 2) + 65;
			})
			.attr("class", "ptrTxt")
			.attr("id", (_, i) => {
				return "pivTxt" + i;
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
        document.getElementById("message").innerHTML = "<h1>Welcome to Quick Sort!</h1>";
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
				<div class="center-screen" id="message-pane"><span id="message"><h1>Welcome to Quick Sort!</h1></span></div>
				<div ref={this.ref} class="center-screen"></div>
			</div>
		)
	}
}