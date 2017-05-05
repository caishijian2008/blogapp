jQuery(document).ready(function($) {

	/* 自定义的验证方法 */
    jQuery.validator.addMethod("regexp",function(value, element) {
      return this.optional(element) || /^[A-Za-z0-9]+$/.test(value);
    },"Just only English and digits!");

    $('#signupform').validate({
    	submitHandler: function(form) {
    		alert("注册成功！");
    		$(form).ajaxSubmit();
    	},
    	rules: {
    		email: {
    			required: true,
    			email: true
    		},
    		username: {
    			required: true,
    			minlength: 2,
    			regexp: true
    		},
    		password: {
    			required: true, 
    			minlength: 5
    		},
    		repassword: {
    			required: true, 
    			minlength: 5, 
                equalTo: "#password"
    		}
    	},
    	messages: {
    		email: {
    			required: "邮箱地址不能为空", 
    			email: "请输入正确的邮箱地址"
    		},
    		username: {
    			required: "用户名不能为空", 
    			minlength: "用户名不能少于2位",
    			regexp: "用户名只能是英文和数字的组合"
    		},
    		password: {
    			required: "密码不能为空", 
    			minlength: "密码不能少于5位"
    		},
    		repassword: {
    			required: "密码不能为空", 
    			minlength: "密码不能少于5位", 
                equalTo: "两次密码输入不一致" 
    		}
    	}
    });
    
});