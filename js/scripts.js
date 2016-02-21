$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var pluralNounInput = $("input#pluralNoun").val();
    var exclamation1Input = $("input#exclamation1").val();
    var exclamation2Input = $("input#exclamation1").val();
    var noun1Input = $("input#noun1").val();
    var placeInput = $("input#place").val();
    var modeOfTransportationInput = $("input#modeOfTransportation").val();
    var typeOfFoodInput = $("input#typeOfFoodInput").val();
    var noun2Input = $("input#noun2").val();
    var amountInput = $("input#amount").val();
    var noun3Input = $("input#noun3").val();

    $(".yourName").text(yourNameInput);
    $(".pluralNoun").text(pluralNounInput);
    $(".exclamation1").text(exclamation1Input);
    $(".exclamation2").text(exclamation2Input);
    $(".noun1").text(noun1Input);
    $(".place").text(placeInput);
    $(".modeOfTransportation").text(modeOfTransportationInput);
    $(".noun2").text(noun2Input);
    $(".amount").text(amountInput);
    $(".noun3").text(noun3Input);

    $("#story").show();

    event.preventDefault();
  });
});
