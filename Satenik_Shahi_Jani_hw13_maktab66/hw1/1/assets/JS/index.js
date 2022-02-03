function rowCounter() {
  let count = document.querySelectorAll("tr").length - 1;
  $(document).ready(function () {
    $("#rowscount").text(count);
  });
}
function unConfirmed() {
  let count = document.querySelectorAll(".unconfirmed").length - 1;
  $(document).ready(function () {
    $("#unconfirmedcount").text(count);
  });
}
rowCounter();
unConfirmed();

$(document).on("click", ".delete-Row", function () {
  $(this).closest("tr").remove();
  rowCounter();
  unConfirmed();
});

$(document).on("click", "input.confirmed", function () {
  $(this)
    .parents("tr")
    .toggleClass("unconfirmed")
    .find(".form-control")
    .prop("disabled", true);
  //   $(this).parents("tr").toggleClass("unconfirmed");
  unConfirmed();
});

$(document).on("click", "input.progess", function () {
  $(this)
    .parents("tr")
    .toggleClass("unconfirmed")
    .find(".form-control")
    .removeAttr("disabled");
  unConfirmed();
});
let cloneNum = 0;
$(document).on("click", ".clone-Row", function () {
  cloneNum++;
  let idRdaio = 1;
  let cloneRow = $(this).closest("tr").clone();
  $(cloneRow)
    .find(".form-check-input")
    .each(function () {
      $(this).prop("name", `optradio-cloned${cloneNum}`);
      $(this).prop("id", `radio${idRdaio++}-c-${cloneNum}`);
    });
  $(this).closest("tr").after(cloneRow);
  rowCounter();
  unConfirmed();
});
$(document).ready(function () {
  let idNum = 0;
  $("#add").click(function () {
    idNum++;
    $("tbody").prepend(
      `  <tr class="unconfirmed">
            <td scope="row">
              <button  type="button" class="btn btn-danger delete-Row">
                <span
                  class="iconify me-2"
                  data-icon="fa-solid:trash"
                  style="color: white"
                  data-width="24"
                  data-height="24"
                ></span
                >Delete
              </button>
              <button type="button" class="btn btn-primary clone-Row">
                <span
                class="iconify me-2"
                data-icon="fa-solid:clone"
                style="color: white"
                data-width="24"
                data-height="24"
              ></span
              >Clone</button>
            </td>
            <td>
              <input
                type="number"
                class="form-control"
                id="exampleInputNumber${idNum}"
              />
            </td>
            <td>
              <input type="text" class="form-control" id="exampleInputText${idNum}" />
            </td>
            <td class="d-flex flex-row align-items-center">
              <div class="form-check me-2">
                <input
                  type="radio"
                  class="form-check-input new"
                  id="radio1-${idNum}"
                  name="optradio${idNum}"
                  value="option1"
                  checked
                />New
                <label class="form-check-label" for="radio1"></label>
              </div>
              <div class="form-check me-2">
                <input
                  type="radio"
                  class="form-check-input progess"
                  id="radio2-${idNum}"
                  name="optradio${idNum}"
                  value="option2"
                />In progess
                <label class="form-check-label" for="radio2"></label>
              </div>
              <div class="form-check me-2">
                <input
                  type="radio"
                  class="form-check-input confirmed"
                  id="radio3-${idNum}"
                  name="optradio${idNum}"
                  value="option3"
                />Confirmed
                <label class="form-check-label"></label>
              </div>
            </td>
          </tr> `
    );
    rowCounter();
    unConfirmed();
  });
});
