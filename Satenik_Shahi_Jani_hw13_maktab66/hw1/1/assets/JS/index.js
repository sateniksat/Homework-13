
$("#delete-Row").click(function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
})

$("#clone-Row").click(function (event) {
    event.preventDefault();
    // let cloneRow=$(this).closest('tr')
    // console.log(cloneRow);
    // cloneRow.insertAtfter($(this).closest('tr').clone());

    $(this).closest('tr').clone(true).after($(this).closest('tr'));
})