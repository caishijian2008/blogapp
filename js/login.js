jQuery(document).ready(function($) {

	/* 自定义的验证方法 */
    jQuery.validator.addMethod("regexp",function(value, element) {
      return this.optional(element) || /^[A-Za-z0-9]+$/.test(value);
    },"Just only English and digits!");

    $('#loginform').validate({
    	submitHandler: function(form) {
    		form.submit();
    	},
    	rules: {
    		username: {
    			required: true,
    			minlength: 2,
    			regexp: true
    		},
    		password: {
    			required: true, 
    			minlength: 5
    		}
    	},
    	messages: {
    		username: {
    			required: "用户名不能为空", 
    			minlength: "用户名不能少于2位",
    			regexp: "用户名只能是英文和数字的组合"
    		},
    		password: {
    			required: "密码不能为空", 
    			minlength: "密码不能少于5位"
    		}
    	}
    });
    
	if (typeof(Storage) !== "undefined") {
		// sessionStorage.clear();
		// localStorage.clear();
		$("#signin").on("click", function () {
			var txtUsername = $('#username').val().trim();
			var txtPassword = $('#password').val().trim();
			sessionStorage.setItem("username",txtUsername);
			// alert(sessionStorage.getItem('username'));
            
			// var param = "http://localhost:8080/blogserv/loginServlet?action=login&username="+txtUsername+"&password="+txtPassword;
			var param = "http://localhost:8080/blogserv/loginServlet?action=login";
			// alert(param);
			$.ajax({
				type: "POST",
				url: param,
				dataType: "json",
				data: {
					"username": txtUsername,
                    "password": txtPassword
				},
				success: function (data) {
					if (data == false) {
						alert("用户名或密码错误！");
						$('#username').focus(); 
						return false;
					} else {
						alert("登陆成功！");
						// window.location.href = "./index.html";
						location.href = "./index.html";
					}
				},
                error: function (jqXHR) {
					alert("错误: "+jqXHR.statusText);
					// window.location.href = "./login.html";
					location.href = "./login.html";
				}
			});
		});
	} else {
		alert("你的浏览器不支持web存储！");
		console.log("你的浏览器不支持web存储！");
	}
});