console.log("main is")

$("#get-all-tickets").on("click", function(e){
  $.ajax({
    type: "GET",
    url: "/tickets"
  }).done(function(data){
    console.log(data)
    renderAll(data)
  })
})


function renderAll(data){
  data.forEach(function(e){
    var template = $("#itemtemplate").html()
    var rendered = Mustache.render(template, e)
    $("#main").append(rendered)
  })
}