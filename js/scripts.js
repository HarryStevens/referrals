function dataTable(){
	//Permits operations from DataTables jQuery plugin
	$('#referrals').DataTable();
}

function getData(){
	//console.log('get data');
	$.getJSON('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20*%20FROM%201X2USqkQV3lJVp3pPV9EeS3LFjngREiq60JVVPnBS&key=AIzaSyAWDQpvw_CFvB4SJEHD7sSuIQNcGwuHMjw', function (data){
		a=data.rows;
		
		console.log(a);
		
		$.each(a, function(idx, elem){
			console.log(elem[0]);
			$('table#referrals TBODY').append('<tr><td>'+elem[0]+'</td><td>'+elem[1] +'</td><td>'+elem[2] +'</td><td>'+elem[3] +'</td></tr>');
		});
		
		dataTable();
	});
}

$(document).ready(function(){
	//console.log('document ready');
	//Fetches the data and plugs it into the table
	getData();	
}
);
