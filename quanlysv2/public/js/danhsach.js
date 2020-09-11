
let studentId =0;
$(function () {
    $.ajax({
        method: "GET",
        url: "http://ql-hocvien.herokuapp.com/users",

    })
        .done(function (users) {
           
            let htmlString = "";
            for (let i = 0; i < users.length; i++) {
                htmlString += `<tr id="user-${users[i].id}">
                <td>${users[i].name}</td>
                <td>${users[i].email}</td>
                <td>${users[i].phone}</td>
                <td>${users[i].id}</td>
                <td>${users[i].gender}</td>
                <td>
                <a href="/edit.html?id=${users.id}" class="text-info"
                  ><i class="fa fa-edit"></i> Chỉnh sửa</a>
                |
                <a href="javascript:void(0)" class="text-danger" onclick="confirmDelete(${users.id})"
              ><i class="fa fa-trash-alt"></i> Xóa</a>
              </td>
                </tr>`;
            }
            $('#table').html(htmlString);
        });
});
function createUser(id) {
    studentId = id;
$.ajax({
    url: `http://ql-hocvien.herokuapp.com/users/${id}`,
    method: "POST",
    data: {
        name: $("#name").val(),
        birthday: $("#birthday").val(),
        phone: $("#phone").val(),
        email: $("#email").val()
    },
    dataType: "json",
        success: function (response) {
            window.location.href= "/"
        }
});
}














   