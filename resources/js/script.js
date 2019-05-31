$(".fa-plus").on("click", function(){
    $(".todo-input-div").slideToggle();
    $(".fa-plus").toggleClass("disabled");
    $(".fa-minus").toggleClass("disabled");
});

$(".fa-minus").on("click", function(){
    $(".todo-input-div").slideToggle();
    $(".fa-plus").toggleClass("disabled");
    $(".fa-minus").toggleClass("disabled");
});


// Delete a todo
$("ul").on("click", "span", function(e){
    $(this).parent().slideUp(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

// Cancel/Get Back to todo
$('ul').on("click", "li", function(e){
    $(this).toggleClass("cancel");
    e.stopPropagation();
});


// Add a new todo
$("#todo-item").on('keypress', function(e){
    if(e.which === 13){
        var todoText = $(this).val().trim();
        $(this).val("");
        if(todoText !== ""){
            var todoItem = "<li style='display:none'><span> <i class='far fa-trash-alt'></i> </span>" + todoText + "</li>";
            $(todoItem).appendTo("ul").slideDown(500);
        }
    }
});