// Populate Groups from Diaspora Json
// By Ryan McIntyre

	var Group = '';
	var theHTML = '';
	theHTML = "<ul class=\"nav nav-tabs nav-stacked\"><li class=\"active\">";
	var myRe = /class='aspect_selector' href='(.*)'/g;
	var matches;

	var ArrayGroup = [];
	var i = 1;

	ArrayGroup[0] = {};
	ArrayGroup[0]["GroupName"] = "All Contacts";
	ArrayGroup[0]["GroupURL"] = "/contacts";
	console.log(ArrayGroup[0]["GroupName"]);

	theHTML += "<li>";
	theHTML += "<a href=\"#\" id =\"" + ArrayGroup[0]["GroupURL"] + "\">" + ArrayGroup[0]["GroupName"] + "</a>";
	theHTML += "</li>";


	$.ajax({
		async: false,
        type: 'GET',
        url: 'https://pod.cscf.me/contacts/',
        success: function(data) {

			while ((matches = myRe.exec(data)) !== null)
			{
				console.log(matches);

			  var X = myRe.lastIndex;
			  console.log(data.indexOf("<",X));
			  var Temp = data.indexOf("<",X);
			  Group = data.substring(X+2,Temp-1);

			  console.log(Group);


			  theHTML += "<li>";
			  theHTML += "<a href=\"#\" id =\"" + matches[1] + "\">" + Group + "</a>";
			  theHTML += "</li>";

			  ArrayGroup[i] = {};
			  ArrayGroup[i]["GroupName"] = Group
			  ArrayGroup[i]["GroupURL"] = matches[1];
			  console.log(ArrayGroup[i]["GroupName"]);
			  i += 1;
			  }

			  console.log(ArrayGroup[1]["GroupName"]);
			  localStorage['StoredArrayGroups']=JSON.stringify(ArrayGroup); //Store Groups in LocalStorage

			 // var Temp = JSON.parse(localStorage.StoredArrayGroups); //How To Retrieve Groups
			 // console.log(Temp[1]["GroupName"]);

			  theHTML += "</ul>";


			document.getElementById('table2').innerHTML = theHTML;
		}

	});





