
var underTwo = "Based on your score, a Will may be sufficient for you and your family. Also, consider the recommendation(s) provided above based on your answers in Section 1 (if any), as your specific circumstances might make a Trust more appropriate. To learn more about Wills and Trusts, please Contact our office for an appointment.";
var twoUnderThree = "Based on your score, you would be a good candidate for either a Will or a Trust, and would likely be happy with either option.  Also, consider the recommendation(s) provided above based on your answers in Section 1 (if any), as your specific circumstances might make a Trust more appropriate.  To learn more about Wills and Trusts, please Contact our office for an appointment.";
var threeUnderFive = "Based on your score, you would value the benefits of a Trust.  Also, please consider any additionaly recommendations provided based on your answers in Section 1 (if any).  To learn more about Wills and Trusts, please Contact our office for an appointment.";

function customerMessage(score){
	if(score <= 2){
		$("#custResultDialog").html(underTwo);
		$("#custResultDialog").dialog("open");
		// alert("option one: " + underTwo);
	}
	else if(score >= 2 && score <= 3){
		$("#custResultDialog").html(twoUnderThree);
		$("#custResultDialog").dialog("open");
		// alert("option two: " + twoUnderThree);
	}
	else if(score >=3 && score <=5){
		$("#custResultDialog").html(threeUnderFive);
		$("#custResultDialog").dialog("open");
		// alert("option three: " + threeUnderFive);
	}
}

$('select').change(function(){
    var sum = 0;
    $('select :selected').each(function() {
        sum += Number($(this).val());
    });
     $("#sum").html(sum);
     
     calculateScore();
});

function calculateScore(){
	var questionTotals = 0;
	var questionsNotAnswered = $('select option:selected[value="0"]').length;
	questionTotals =  17 - questionsNotAnswered;
	var score = 0;
	var sum = parseInt($("#sum").html());
	score = sum / questionTotals;
	$("#score").html(Math.round(score * 100) / 100);
}

$("#custResultDialog").dialog({
	autoOpen: false,
	draggable: true,
	minWidth: 400,
	title: "Trust Calculator",
	buttons: [
		{
			text: "Learn More",
			click: function(){
				alert("This will open a mail form");
				$(this).dialog("close");
			}
		},
		{
			text: "Close",
			click: function(){
				$(this).dialog("close");
			}
		}
	]
})
