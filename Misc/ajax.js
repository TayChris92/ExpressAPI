$.ajax(
    {type:"DELETE", 
    url: "http://127.0.0.1:3000/users/Someone123",
    crossDomain: true,
    dataType:"json",success:function(res){console.log(res)
    }
});