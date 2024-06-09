<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('login.css') }}">
    <link rel="icon" href="{{ asset('img/personal-kpi.png') }}" type="image/x-icon">
    <title>Đăng nhập</title>
</head>

<body>
    <style>
        #error-notify {
            padding: 10px 15px;
            border-radius: 10px;
            font-size: 17px;
            font-weight: 600;
            color: rgb(241, 84, 84);
        }

        /* ----------------------Toast-------------------- */
        .wr-toast {
            position: fixed;
            top: 30px;
            right: 15px;
            display: none;
            z-index: 1000;
        }

        .toast-notify {
            display: flex;
            width: 450px;
            height: 70px;
            background-color: #FFFFFF;
            border: 1px solid #DEE2E6;
            border-left: 5px solid #4cd137;
            box-shadow: 4px 4px 4px rgb(168 168 168 / 25%);
        }

        .center {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .toast-icon {
            flex-basis: 50px;
        }

        .toast-icon span {
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background-color: #4cd137;
        }

        .toast-icon span i {
            color: #f5efef;
        }

        .toast-body {
            padding-top: 10px;
        }

        .toast-body .toast-content {
            color: #68687C;
        }

        .toast-x {
            position: absolute;
            right: 12px;
            top: 30%;
            cursor: pointer;
        }

        .toast-x span {
            color: #68687C;
        }

        .toast-x span:hover {
            color: #4c4c4c;
        }
    </style>

    <div id="wrapper">

        <div id="content">

            <h1>Đăng nhập</h1>
            <div id="login">
                <form action="" >
                    @csrf
                    <input type="email" value ="" placeholder="E-mail" name="email" id="email">

                    <input type="password" placeholder="Password" name="password" id="password">

                    <div id="button">
                        <button name="btn_login" value="login">Đăng nhập</button>
                        <a href="{{route('recover_pass')}}">Quên mật khẩu?</a>
                    </div>
                </form>
            </div>
            {{-- <div id="error-notify">
                <span>{{ session('error') }}</span>
            </div> --}}
            <div id="register">
                <div id="title">
                    <span>Bạn chưa có tài khoản?</span>
                </div>
                <div class="btn-bot" id="create"><a href="{{ route('register') }}">Đăng ký</a></div>
                <div class="btn-bot" id="back"><a href="{{ route('home') }}">Quay lại trang chủ</a></div>
            </div>
        </div>
    </div>
</body>

</html>
