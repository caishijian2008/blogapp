$(document).ready(function($) {

	/* 自定义的验证方法 */
    jQuery.validator.addMethod("regexp",function(value, element) {
      return this.optional(element) || /^[A-Za-z0-9]+$/.test(value);
    },"Just only English and digits!");

    $('#signupform').validate({
    	submitHandler: function(form) {
    		// alert("注册成功！");
    		// $(form).ajaxSubmit();
            form.submit();
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

    // 检查IndexedDB支持情况
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    if(!window.indexedDB){
        console.log("你的浏览器不支持IndexedDB");
    }

    
    $("#signup").on('click', function(event) {
        // event.preventDefault();
        
        var txtEmail = $('#email').val().trim();
        var txtUsername = $('#username').val().trim();
        var txtPassword = $('#password').val().trim();
        var txtRepassword = $('#repassword').val().trim();
        // alert(txtRepassword.length);
        // if (txtEmail.length <= 0) { return ; } 
        // if (txtUsername.length <= 0) { return ; } 
        // if (txtPassword.length <= 0) { return ; } 
        // if (txtPassword != txtRepassword ) { return ; } 
        // if (txtRepassword.length <= 0) { return ; } 

        $.ajax({
            url: 'http://localhost:8080/blogserv/getUsersServlet?action=register',
            type: 'POST',
            dataType: 'json',
            cache: false,
            data: {
                "email": txtEmail,
                "username": txtUsername,
                "password": txtPassword
            },
            success: function(data) {
                alert(data.msg);
                // window.location.href="./login.html";
                location.href="./login.html";
            },
            error: function(jqXHR) {
                alert("错误："+ jqXHR.status);
                // window.location.href="./register.html";
                location.href="./register.html";
            }
        })
        // .done(function(msg) {
        //     console.log("success: "+msg.status);
        // })
        // .fail(function(msg) {
        //     console.log("error: "+msg.status);
        // })
        // .always(function() {
        //     console.log("complete");
        // })
        ;
        
    });


    // 采用websql方式
    // // 初始化数据库
    // initDatabase();
    
    // $('#signup').on('click', function(event) {
    //     // event.preventDefault();
    //     /* Act on the event */
    //     var txtEmail = $('#email').val();
    //     var txtUsername = $('#username').val();
    //     var txtPassword = $('#password').val();
        
    //     var db = createDatabase();
    //     db.transaction(function(tx) {
    //         tx.executeSql("insert into user(email, username, password) values(?,?,?)", [txtEmail,txtUsername,txtPassword], 
    //             function(ts,data) {console.log('data: '+data)/*alert('data:'+data)*/;}, 
    //             function(ts,message) { 
    //                 alert('message:'+message);
    //             }
    //         );
    //     });

    // });
    
});