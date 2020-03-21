$(function() {
    

    $(".data_input").click(function(){
        default_val = $(this).val();
        if( $(this).val() == default_val)
            $(this).val("");

        $(".data_input").mouseleave(function(){
            if( $(this).val() == "")
                $(this).val(default_val);
            
        });
        
    });

    var table_item = new Array();
    table_item[0] = 0;

    $("#submit_button").click(function(){

        table_item[0] += 1;
        table_item[1] = $("#name_input").val();
        table_item[2] = $("#age_input").val();
        
        var row_item = $("<tr></tr>");

        var col_items = [$("<td></td>").html(table_item[0]), 
                        $("<td></td>").html(table_item[1]), 
                        $("<td></td>").html(table_item[2])];
     

    row_item.append(col_items);
   

    $("#data_table").append(row_item);
        

    });
    
    
  
    $("#top_line").html("Welcome! More Features Coming Soon!");
  


});

function watch(){
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	if(minutes < 10) minutes = "0" + minutes;
	if(seconds < 10) seconds = "0" + seconds;
	if(hours < 10 || hours == 11){
		if(hours < 10){
			hours = "0" + hours;
		}
		document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " AM";
	}
	if(hours > 12 && hours <=23){
		hours -= 12;
		if(hours < 10) hours = "0" + hours;
	document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " PM";
	}
	setTimeout("watch()",1000);
}
watch();
