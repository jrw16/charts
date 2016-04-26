var data = [];
var i = 0;
var x1 = 50; var y1= 40;
var arry_test = [];				// Testing out array for selection
var ary_cord = [];
var view_mode = false;





function summation(a, b){
	var x = a + b;
	console.log(x);
}

function randomData(){
temp = [Math.random()* (2 - (-2)) + (-2),Math.random()* (2 - (-2)) + (-2),Math.random()* (2 - (-2)) + (-2),Math.random()* (2 - (-2)) + (-2),Math.random()* (2 - (-2)) + (-2)];
return temp;
}


function rounding(pass_num){
	var temp;
	if (pass_num > 0) temp = pass_num -.5; else temp = pass_num + .5;
	var r_num = d3.round(temp, 0);
	if (pass_num >= 0) return((r_num+1)); else return((r_num-1));
}



function getGN(){
	//console.log(i);
	if(i > 0 && i < 10)
		return "000+0";
	if(i >= 10 && i < 20)
		return "00+00";
	if(i >= 20 && i < 30)
		return "0+000";
	if(i >= 30 && i < 40)
		return "+0000";
	else {
		return "++000";
	}
}

function getGeneName(){
	// console.log(i);
	if(i > 0 && i < 10)
		return "X111";
	if(i >= 10 && i < 20)
		return "Z7CV";
	if(i >= 20 && i < 30)
		return "AR120";
	if(i >= 30 && i < 40)
		return "CV";
	else {
		return "SWV11";
	}
}

function resetGraphs(){
	data = [];
	i = 0;
	x1 = 50; var y1= 40;
	arry_test = [];				// Testing out array for selection
}

function addBreak(){
	x1 = 50;
	y1 = y1 + 130;
}

function get_x1(){ return x1; }
function get_y1(){ return y1; }
function update_x1(pass){ x1=x1+pass; }
function update_y1(pass){ y1=y1+pass; }


function createRow(pass) {
	for (x = 0; x < pass; x++){
		i++;
		data = randomData();
		//create_G([30, 0, 30, 50], data, i, x1, y1, "area"+String(i) );
		//create_G([30, 0, 30, 50], data, i, x1=50, y1=40);
		x1 = x1+230;
	}
}


function fetchData() {

	d3.csv("data/clusterdata.simplify.csv", function(csv) {

		var normalized = [];
		var _t = csv[0];
		console.log(_t.sym);
		var cur_sym = _t.sym;
		var sum = [0,0,0,0,0];
		// Parsing out the data from the CSV file
		//for (var i=0; i < csv.length; i++)  {


		for (var i=0; i < 10; i++)  {
			var row = csv[i];
			var newRow = {};
			var data = [];
			if (row.sym != cur_sym){ break; }
			newRow.hr2 = +row.hr2;
			newRow.hr4 = +row.hr4;
			newRow.hr6 = +row.hr6;
			newRow.hr8 = +row.hr8;
			newRow.hr12 = +row.hr12;
			normalized.push(newRow);

			data.push(+row.hr2);
			data.push(+row.hr4);
			data.push(+row.hr6);
			data.push(+row.hr8);
			data.push(+row.hr12);

			sum[0] = sum[0] + (data[0]);
			sum[1] = sum[1] + (data[1]);
			sum[2] = sum[2] + (data[2]);
			sum[3] = sum[3] + (data[3]);
			sum[4] = sum[4] + (data[4]);

			console.log(data);
			console.log(sum);


			//create_G([30, 0, 30, 50], data, i, x1, y1, "area"+String(i) );
			x1 = x1+230;
			console.log(i % 4);
			if (i % 4 == 3){ addBreak(); }

			/*for (var y=1; y < 13; y++) {
			 if (row.CTY_CODE < "1000") continue;
			 var newRow={};
			 newRow.Year=row.year;
			 newRow.Country=row.CTYNAME;
			 newRow.Month=(y < 10) ? "0" + String(y) : String(y);
			 newRow.Imports=Number(row["I_" + String(y)]);
			 newRow.Exports=Number(row["E_" + String(y)]);
			 normalized.push(newRow);
			 }*/
			/*
			for (var y=1; y < 13; y++) {
				var newRow = {};
				newRow.Year = row.year;
				newRow.Country = row.CTYNAME;
				newRow.Month = (y < 10) ? "0" + String(y) : String(y);
				newRow.Imports = Number(row["I_" + String(y)]);
				newRow.Exports = Number(row["E_" + String(y)]);
				normalized.push(newRow);
			}
			*/

		}
		console.log(normalized);

		/*
                countriesGrouped = d3.nest()
                    .key(function(d) { return d.Year; })
                    .key(function(d) { return d.Month; })
                    .entries(normalized);

                //Sum total deficit for each month
                var totalImport=0;
                var totalExport=0;

                for (var y=0; y < countriesGrouped.length; y++) {
                    var yearGroup=countriesGrouped[y];
                    for (var m=0; m < yearGroup.values.length; m++) {
                        var monthGroup=yearGroup.values[m];
                        for (var c=0; c < monthGroup.values.length; c++) {
                            var country=monthGroup.values[c];
                            //totalImport = Number(totalImport) + Number(country.Imports)*10000000;
                            //totalExport = Number(totalExport) + Number(country.Exports)*10000000;
                            totalImport = Number(totalImport) + Number(country.Imports);
                            totalExport = Number(totalExport) + Number(country.Exports);

                        }
                        //    console.log("totalExport=" + String(totalExport));
                        monthlyExports.push(totalExport);
                        monthlyImports.push(totalImport);
                    }

                }

                //Start running
                run();
                refreshIntervalId = setInterval(run, delay);
                // run();
        */

	}); // End of D3 read data

} // End of read data function





function getSelected(){
	d3.transition().duration(2000).selectAll("#test1")//.style("fill", "red")     // remove any fill colour
		.attr("d", "M"+(180)+","+(20)+", L"+(180)+","+(90)+", L"+(370)+","+(90)+", L"+(370)+","+(20)+" Z");
	d3.transition().duration(2000).selectAll("#test1").attr("fill", "#00FF00");
}

function changeBox(){
	var nums = d3.select("#graph").select("#brdr").attr("d");
	console.log(nums);

	d3.transition().duration(1000)
		.select("#test1")//.select("path")          // attach a path
		//.attr("width",115).attr("height",65);
		.attr("transform", "translate(" + -280 + "," + -160 + ")");

	//.attr("d", "M"+(50)+","+(30)+", L"+(50)+","+(100)+", L"+(180)+","+(100)+", L"+(180)+","+(30)+" Z");

}

// Test out by drawing a shape
function testShape(w, h, xx, yy){
var shape = d3.select("#graph");
/*shape.append("rect")
	.attr("width", w)
	.attr("height", h)
	.attr("opacity", ".25")
	.attr("transform", "translate(" + (xx) + " ," + (yy) + ")")
	.attr("id","selectedRect");*/
shape.append("path")          // attach a path
	.style("stroke", "blue")  // colour the line
	.style("stroke-width", "2")
	.style("fill", "red")     // remove any fill colour
	.style("opacity", ".25")
	.attr("d", "M"+(230)+","+(140)+", L"+(230)+","+(270)+", L"+(460)+","+(270)+", L"+(460)+","+(140)+" Z")
	.attr("id","myshape");

//shape
//	.append("g")
//	.attr("transform", "translate(" + xx + "," + yy + ")");
}

function moveShape(){

	var arry_select = ["area1", "area2", "area3"];
	var x = 50, y = 40;


	arry_select.forEach(function(d, i) {
		//console.log(d + " " + i);
		var test_g_name = d3.select("#"+String(d));

		//console.log(test_g_name.attr("transform"));
		var cords = test_g_name.attr("transform");
		//console.log(cords);
		cords = "translate(" + (x) + " ," + (y) + ")";
		x = x + 230;
		//y = y + 130;
		test_g_name.transition().duration(1000)
			.attr("transform", cords );
		//	.attr("transform", "translate(" + (280) + " ," + (40) + ")" );


	});

	//["a", "b", "c"].forEach(function(d, i) { console.log(d + " " + i); });
	// Outputs:
	//a 0
	//b 1
	//c 2

	//var test_g_name = d3.select("#area1");
	//console.log(test_g_name.attr("transform"));
	//test_g_name.transition().duration(1000)
		//.attr("transform", "translate(" + (280) + " ," + (40) + ")");


	// Set nums to look at all the d attributes of the #myshapes
	//var nums = testShape.attr("d");

	//console.log(nums);
	/*for(x = 0; x < nums.length; x++){
		if(nums[x] !== ','){
			console.log(nums[x]);
		}
		//console.log(nums[x]);
	};*/

	// Set the new cords for the border path
	//nums = "M"+(230)+","+(10)+", L"+(230)+","+(140)+", L"+(460)+","+(140)+", L"+(460)+","+(10)+" Z";

	//testShape.transition().duration(1000)
		//.attr("d", nums);
		//.attr("transform", "translate(" + (230) + " ," + (10) + ")");

}




function horzShape(){
	d3.select("#reset_button").attr("class", "btn btn-primary");

	var x = 50, y = 40;
	arry_test.forEach(function(d, i) {
		if ( (d3.select("#"+String(d)).select("rect").attr("fill")) == 'blue'){

			var temp = d3.select("#"+d).attr("transform");
			ary_cord.push(temp);

			var cords = "translate(" + (x) + " ," + (y) + ")";
			x = x + 230;
			d3.select("#"+String(d)).transition().duration(2000).attr("transform", cords );

			// New test code, trying to make blue square "look" disappeared
			d3.select("#"+String(d)).select("rect").style("opacity", "0");

		} else{
			//test_g_name.select("rect").transition().duration(1000).attr("fill", "red");
			d3.select("#"+String(d)).selectAll("g").transition().duration(1800).style("opacity", "0");
			d3.select("#"+String(d)).selectAll("text").transition().duration(1800).style("opacity", "0");
			d3.select("#"+String(d)).selectAll("path").transition().duration(1800).style("opacity", "0");
			d3.select("#"+String(d)).selectAll("rect").transition().duration(1800).style("opacity", "0");
		}

	});
	view_mode = true;
}// End of horzShape() function


function vertShape(){
	d3.select("#reset_button").attr("class", "btn btn-primary");

	var x = 50, y = 40;

	arry_test.forEach(function(d, i) {
		if ( (d3.select("#"+String(d)).select("rect").attr("fill")) == 'blue'){

			var temp = d3.select("#"+d).attr("transform");
			ary_cord.push(temp);

			var cords = "translate(" + (x) + " ," + (y) + ")";
			y = y + 130;
			d3.select("#"+String(d)).transition().duration(1000).attr("transform", cords );

			d3.select("#"+String(d)).select("rect").style("opacity", "0");

		} else{
			d3.select("#"+String(d)).selectAll("g").transition().duration(500).style("opacity", "0");
			d3.select("#"+String(d)).selectAll("text").transition().duration(500).style("opacity", "0");
			d3.select("#"+String(d)).selectAll("path").transition().duration(500).style("opacity", "0");
			d3.select("#"+String(d)).selectAll("rect").transition().duration(500).style("opacity", "0");
		}
	});
	view_mode = true;
}// End of vertShape() function


function resetShapes(){

	var ind = 0;
	arry_test.forEach(function(d, i) {

		if ( (d3.select("#"+String(d)).select("rect").attr("fill")) == 'blue'){

			var spec = ary_cord[ind].split("("[0]);
			var spec_2 = spec[1].split(")"[0]);
			var spec_3 = spec_2[0].split(","[0]);

			d3.select("#"+String(d)).transition().duration(1000)
				.attr("transform", "translate(" + (+spec_3[0]) + "," + (+spec_3[1]) + ")");

			d3.select("#"+String(d)).select("rect").attr("fill", "white").style("opacity", ".01");
			ind++;
		}else {
			d3.select("#"+String(d)).selectAll("g").style("opacity", "1");
			d3.select("#"+String(d)).selectAll("text").style("opacity", "1");
			d3.select("#"+String(d)).selectAll("path").style("opacity", "1");
		}

	});
	ary_cord = [];
	view_mode = false;
	d3.select("#reset_button").attr("class", "btn btn-primary disabled");
	d3.select("#display_selected").text(" - ");

	// Testing
	lines_showing = true;
	displayLines();
	genes_selected_ary = [];

} // End of Reset Function


function addToAry(item){
	arry_test.push(item);
}


var genes_selected_ary = [];

function addToGeneSelected(item){
	genes_selected_ary.push(item);
}

function checkGeneSelection(arrays , element){
	var _i = arrays.indexOf(element);
	if ( _i === -1) { addToGeneSelected(element);
		if (checkMaxGenesSelected()==5) {addToGeneSelected(' ! MAX REACHED ! ');}
	}
	else if (_i > -1) { arrays.splice( _i , 1);
		var _i2 = arrays.indexOf(' ! MAX REACHED ! ');
		if (_i2 > -1) { arrays.splice( _i2 , 1);}
	}
}

function getGenesSelected(){ return genes_selected_ary; }

function checkMaxGenesSelected(){ return genes_selected_ary.length; }


function calcMean(pass_ary, n, percent){
	var _p = 1+"."+String(percent);
	var nums = (+_p) * (d3.deviation(pass_ary) / Math.sqrt(n) );
	var means = d3.mean(pass_ary);
	var hi = means + nums;
	var low = means - nums;
	var ary_result = [];

	ary_result.push(low);
	ary_result.push(means);
	ary_result.push(hi);

	//console.log("calcMean: ary_result =" , ary_result);

	return (ary_result);
//	return means;

}

var lines_showing = false;
function displayLines(){
	if(lines_showing){
		var on = 0;
		lines_showing = false;
	}else {
		var on = 1;
		lines_showing = true;
	}

	arry_test.forEach(function(d, i) {
			d3.select("#"+String(d)).selectAll("#data_bars").style("opacity", on);
	});
}

