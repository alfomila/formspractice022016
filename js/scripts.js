$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var pastTenseVerbInput = $("input#pastTenseVerb").val();
    var pluralNounInput = $("input#pluralNoun").val();
    var exclamation1Input = $("input#exclamation1").val();
    var exclamation2Input = $("input#exclamation1").val();
    var noun1Input = $("input#noun1").val();
    var modeOfTransportationInput = $("input#modeOfTransportation").val();
    var noun2Input = $("input#noun2").val();

    $(".yourName").text(yourNameInput);
    $(".pastTenseVerb").text(pastTenseVerbInput);
    $(".pluralNoun").text(pluralNounInput);
    $(".exclamation1").text(exclamation1Input);
    $(".exclamation2").text(exclamation2Input);
    $(".noun1").text(noun1Input);
    $(".modeOfTransportation").text(modeOfTransportationInput);
    $(".noun2").text(noun2Input);

    $("#story").show();

    event.preventDefault();
  });
});
