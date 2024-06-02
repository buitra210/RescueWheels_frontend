<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('login.css')}}">
    <title>Đăng ký</title>
</head>
<body>
    <div id="wrapper">
        <div id="content">
            <h1>Đăng ký tài khoản</h1>
            <div id="login">
                <form action="">
                   
                    <input type="text" name="fullname" value="" placeholder="Họ và Tên">
                    
                    <input type="text" name="phone" placeholder="Số điện thoại" value="">
                    
                    <input type="email" name="email" placeholder="E-mail" id="email"
                        value="">
                    
                    <input type="password" name="password" placeholder="Password" id="password">
                   
                    <input type="text" name="address" placeholder="Địa chỉ" id="address" value ="">
                  
                    <select name="gender" id="gender">
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                    </select>
                    <div id="button">
                        <button name="btn_register" value="register">Đăng ký</button>
                    </div>
                </form>
            </div>
            <div id="bottom">
                <div id="title">
                    <span>Bạn đã có tài khoản?</span>
                </div>
                <div class="btn-bot"><a href="{{route('login')}}">Đăng nhập</a></div>
                <div class="btn-bot"><a href="{{ route('home') }}">Quay lại trang chủ</a></div>
            </div>
        </div>
    </div>
</body>
</html>