$(document).ready(function () {
    $('a.login-window').click(function () {
        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var loginBox = $(this).attr('href');

        //cho hiện hộp đăng nhập trong 300ms
        $(loginBox).fadeIn(700);

        // thêm phần tử id="over" vào sau body
        $('body').append('<div id="over">');
        $('#over').fadeIn(700);

        return false;
    });

    // khi click đóng hộp thoại
    $(document).on('click', "a.close, #over", function () {
        $('#over, .login').fadeOut(500, function () {
            $('#over').remove();
        });
        return false;
    });
});
// Hàm kiểm tra định dạng Email:
function isEmail(emailStr) {
    var emailPat = /^(.+)@(.+)$/
    var specialChars = "\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
    var validChars = "\[^\\s" + specialChars + "\]"
    var quotedUser = "(\"[^\"]*\")"
    var ipDomainPat = /^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
    var atom = validChars + '+'
    var word = "(" + atom + "|" + quotedUser + ")"
    var userPat = new RegExp("^" + word + "(\\." + word + ")*$")
    var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$")
    var matchArray = emailStr.match(emailPat)
    if (matchArray == null) {
        return false
    }
    var user = matchArray[1]
    var domain = matchArray[2]

    // See if "user" is valid
    if (user.match(userPat) == null) {
        return false
    }
    var IPArray = domain.match(ipDomainPat)
    if (IPArray != null) {
        // this is an IP address
        for (var i = 1; i <= 4; i++) {
            if (IPArray[i] > 255) {
                return false
            }
        }
        return true
    }
    var domainArray = domain.match(domainPat)
    if (domainArray == null) {
        return false
    }

    var atomPat = new RegExp(atom, "g")
    var domArr = domain.match(atomPat)
    var len = domArr.length

    if (domArr[domArr.length - 1].length < 2 ||
        domArr[domArr.length - 1].length > 3) {
        return false
    }

    if (len < 2) {
        return false
    }

    return true;
}


// lấy dữ liệu từ form
$(document).ready(function () {
    $("#form-register").submit(function () {
        //B1 lấy dữ liệu từ form

        var username = $.strim($('#username').val());
        var password = $.strim($('#password').val());
       

        //B2: validdate dữ liệu
        // Biến cờ hiệu
        var flag = true;
        if (username == "" || username.length <= 6) {
            $('#username_error').text('Tên đăng nhập phải lớn hơn 6kys tự');
            flag = false;
        }
        else {
            $('#username').text('');
        }
        //pass word
        if (password.length <= 0) {
            $('#password_error').text('Bạn phải nhập lại mật khẩu');
            flag = false;
        }
        else {
            $('#password_error').text('');
        }
    
        return flag;
    })
})

