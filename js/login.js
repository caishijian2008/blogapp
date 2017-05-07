jQuery(document).ready(function($) {

	/* 自定义的验证方法 */
    jQuery.validator.addMethod("regexp",function(value, element) {
      return this.optional(element) || /^[A-Za-z0-9]+$/.test(value);
    },"Just only English and digits!");

    $('#loginform').validate({
    	submitHandler: function(form) {
    		alert("登陆成功！");
    		$(form).ajaxSubmit();
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
		sessionStorage.clear();
		localStorage.clear();
		$("#signin").on("click", function () {
			var txtUsername = $('#username').val();
			var txtPassword = $('#password').val();
			sessionStorage.setItem("usrname",txtUsername);
			alert(sessionStorage.getItem('usrname'));

			$.ajax({
				type: "POST",
				url: "http://localhost:8080/blogserv/validate.jsp",
				dataType: "json",
				data: {
					username: txtUsername,
                    password: txtPassword
				},
				success: function (response) {
					
				},
                error: function (jqXHR) {}
			});
		});
	} else {
		alert("你的浏览器不支持web存储！");
		console.log("你的浏览器不支持web存储！");
	}
});