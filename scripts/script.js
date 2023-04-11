// USING jQUERY ONLY

// [1] user can add new item to the list
function newItem() {
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    let text = $("<span></span>").text(inputValue);
    li.append(text);

    if (inputValue === '') {
    alert("Hej, you must write something!");
    } else {
    let list = $('#list');
    list.append(li);
}
// [2] user can cross out an item with x
function crossOut() {
    $(this).toggleClass("strike");
  }
li.click(crossOut);
  
li.on("dblclick", function crossOut() {
          li.toggleClass("strike");
});
// [3] user can delete an item 
let crossOutButton = $("<crossOutButton>X</crossOutButton>");
li.append(crossOutButton);

crossOutButton.click(deleteListItem);

function deleteListItem(){
    li.addClass("delete");
    }
// [4] user can change the order of items in the list
$('#list').sortable();
}