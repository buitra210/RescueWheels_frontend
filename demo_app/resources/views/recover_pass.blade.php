<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('login.css')}}">
    <title>Đăng nhập</title>
</head>
<body>
    <style>
        #error-notify{
            padding: 10px 15px;
            border-radius: 10px;
            font-size: 17px;
            font-weight: 600;
            color: rgb(241, 84, 84);
        }
    </style>
    <div id="wrapper">
        <div id="content">
            
             <h1>Lấy lại mật khẩu</h1>
              <div id="login">
                  <form action="" method="POST">
                    @csrf
                    <input type="email" placeholder="Nhập E-mail để lấy lại mật khẩu" name="email" id="email">
                    <div id="button">
                        <button name="btn_reset">Lấy mật khẩu</button>
                        <a href="{{route('login')}}">Đăng nhập</a>
                    </div>
                  </form>
              </div> 
              <div id="error-notify">
                <span>{{session('error')}}</span>
            </div>
              <div id="register">
                    <div id="title">
                        <span>Bạn chưa có tài khoản?</span>
                    </div>
                    <div class="btn-bot" id="create"><a href="{{route('register')}}">Đăng ký</a></div>
                    <div class="btn-bot" id="back"><a href="{{ route('page', ['home']) }}">Quay lại trang chủ</a></div>
              </div>
        </div>
    </div>
</body>
</html>