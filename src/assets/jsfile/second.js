	var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];
                var list5 = [];
		var list6 = [];
		var list7 = [];
                 var list8 = [];
		var list9 = [];
var list10 = [];
		var n = 1;
		var x = 0;
function myTest() {
  
			var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("inputsno").value;
    list2[x] = document.getElementById("inputdeveloper").value;
    list3[x] = document.getElementById("inputtitle").value;
    list4[x] = document.getElementById("input-date").value;
    list5[x] = document.getElementById("inputhours").value;
    list6[x] = document.getElementById("input-status").value;
    list7[x] = document.getElementById("inputassignee").value;
    list8[x] = document.getElementById("inputreporter").value;
    list9[x] = document.getElementById("inputdefects").value;
    list10[x] = document.getElementById("inputdes").value;
    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);
    var cel7 = NewRow.insertCell(6);
    var cel8 = NewRow.insertCell(7); 
    var cel9 = NewRow.insertCell(8);
    var cel10 = NewRow.insertCell(9);
   
    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x];
    cel7.innerHTML = list7[x];
    cel8.innerHTML = list8[x];
    cel9.innerHTML = list9[x];
    cel10.innerHTML = list10[x];
    n++;
    x++;
		
}

$(function() {
   
});