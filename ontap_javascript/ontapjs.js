//Bai 1
    //Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

    function Vhinhcau(r) {
        let pi = 3.14;
        let V = (4 / 3) * pi * r * r * r;
        console.log(V + " " + "là thể tích khối cầu ");

//bai 2
function number(a, b) {
  sum = 0;

  for (let i = a + 1; i < b; i++) {
    sum += i;
  }
  return sum;
}

//<bài 3> Kiểm tra có phải số nguyên tố ko

function test_snt(n) {
  var test = true;

  if (n < 2) {
    test = false;
  } else if (n == 2) {
    test = true;
  } else if (n % 2 == 0) {
    test = false;
  } else {
    // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
    for (var i = 3; i < n - 1; i += 2) {
      if (n % i == 0) {
        test = false;
        break;
      }
    }
  }

  // KT biến test
  if (test == true) {
    console.log(n + " là số nguyên tố <br/>");
  } else {
    console.log(n + " ko phải là số nguyên tố <br/>");
  }
}
      
//Xử lý chuỗi...
      
      //bài 1
      //Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ:
      
//''HELLO world'' => ''Hello World''.
      function ucwords(str) {
			str = (str + "").toLowerCase();
			return str.replace(/^([a-z])|\s+([a-z])/g, function ($1) {
				return $1.toUpperCase();
			});
		}
      
//Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case.
		// Ví dụ: ''HELLO world'' => ''hello-world''.

      function sp(str) {
  var spinal = str.replace(/(?!^)([A-Z])/g, ' $1')
                .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
  return spinal 
}

//bai 3


