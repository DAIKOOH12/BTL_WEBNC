$(document).ready(function () {
  //Xử lí modal
  $("#myModal").on("shown.bs.modal", function () {
    $("#myInput").trigger("focus");
  });
  $(".btn-fix").on("click", function () {
    $("#exampleModal").modal("show");
    $("#exampleModalLabel").text("Cập nhật danh mục");
  });
  $("#btn-add").on("click", function () {
    $("#exampleModal").modal("show");
    $("#exampleModalLabel").text("Thêm danh muc");
  });
  $("#btn-close").on("click", function () {
    $("#exampleModal").modal("toggle");
  });
  $("#btn-action").on("click", function () {
    // $("#exampleModal").modal("toggle");
  });
});
