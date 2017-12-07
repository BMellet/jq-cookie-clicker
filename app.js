var nb = 1;
var txt = ["arrette et vas dehors !"," vas faire tes devoirs!","achete une vie serieux"];



function compteur ()
{

	$('.cake').click(function()
		{
			var alea = 0 + Math.floor(Math.random() * 2);
			nb++;
			$('span').html(nb);

			if((nb%20)==0)
			{
				alert(txt[alea]);
			}

		});

	

}



$(document).ready(function(){

	compteur();


});