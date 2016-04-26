/**
 * Created by joshua on 4/7/16.
 */

function compare(main_list, update_list, argum, update_val){

    main_list.forEach(function(d, i) {
        if (main_list[i] === argum) { update_list[i] = update_val;  }
    });
    console.log(main_list);
    console.log(update_list);
    return (update_list);
}


function update_view_array( group, gene ){
    temp = [];
    group.forEach((function(d,i){
        if (group[i] === gene[i] & group[i] === 'T'){ temp.push('T') }
        else { temp.push('F'); }
    }) );

    update_display(temp);
}


function update_display(temp){
        temp.forEach(function(d,i){
        if (temp[i] === 'T'){
            var x = "\"[index="+i+"]\"";
            d3.select('#name' + i).attr("opacity","1"); }
        else { d3.select('#name' + i).attr("opacity",".1"); }
    } );
}

function split_1(){
    var time = 1450;
    console.log("Test split 1 success!");
    d3.select("#area1").selectAll("g").transition().duration(time).style("opacity", "0");
	d3.select("#area1").selectAll("text").transition().duration(time).style("opacity", "0");
    d3.select("#area1").selectAll("path").transition().duration(time).style("opacity", "0");
	//d3.select("#area1").selectAll("rect").transition().duration(time).style("opacity", "0");
    d3.select("#area1").selectAll("circle").transition().duration(time).style("opacity", "0");

}


function split_2() {
    var time = 850;
    console.log("Test split 2 success!");
    d3.select("#area1").selectAll("g").transition().duration(time).style("opacity", "1");
    d3.select("#area1").selectAll("text").transition().duration(time).style("opacity", "1");
    d3.select("#area1").selectAll("path").transition().duration(time).style("opacity", "1");
    d3.select("#area1").selectAll("circle").transition().duration(time).style("opacity", "1");
}





/*

    // How to draw a basic circle //
    svg.append("circle")
     .attr("r", 20)
     .attr("cx", 40)
     .attr("cy", 40)
     .attr("fill", "orange")
     .attr("transform", "translate(" + 40 + "," + 40 + ")")
     .attr("id", "name40");


 */