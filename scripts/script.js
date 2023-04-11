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

// [3] user can delete an item 

// [4] user can change the order of items in the list
