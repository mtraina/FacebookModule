// create table view data object
var data = [
	{title:'Facebook', hasChild:true, test:'../examples/facebook.js'}
];

//add iphone specific tests
if (Titanium.Platform.name == 'iPhone OS')
{
	data.push({title:'RSS', hasChild:true, test:'../examples/rss.js', barColor:'#b40000'});
}
 
data.push({title:'SOAP', hasChild:true, test:'../examples/soap.js'});

// create table view
var tableview = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableview.addEventListener('click', function(e)
{
	if (e.rowData.test)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.test,
			title:e.rowData.title
		});
		if (e.rowData.barColor)
		{
			win.barColor = e.rowData.barColor;
		}
		if (e.rowData.title_image)
		{
			win.titleImage = e.rowData.title_image;
		}
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
