<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('admin/manage.css') }}">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <title>Dashboard</title>
</head>

<body>
    <style>
        #list-feedback .feedback_item {
            border-bottom: 1px solid #DEE2E6;
            margin-bottom: 10px;
        }

        .model-content {
            max-height: 75vh;
            overflow: scroll;
        }

        .list-active {
            color: #0388FD !important;
            font-weight: 700;
        }

        #search_result {
            max-height: 75vh;
        }

        ul.dropdown-menu {
            max-height: 75vh !important;
            overflow: scroll;
        }
    </style>

    <div id="wrapper" class="container">
        <div class="row">
            <div class="col-md-2" id="sidebar">
                <div class="">
                    <ul class="row" id="navbar">
                        <li class="col-md-12 nav-item" id="logo"><a href=""><img
                                    src="{{ asset('img/Sapo-logo (1).svg') }}" alt=""></a>
                        </li>
                        <li class="col-md-12 nav-item">
                            <a class="item-link" href="{{ route('dashboard') }}"><i
                                    class="fa-solid fa-house"></i><span>Tổng
                                    quan</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- -------------------------End sidebar----------------------------- -->
            <div class="col-md-10" id="wr-content">

                <!-- --------------------Content---------------- -->
                <div id="content" class="container">
                    <div class="row">

                        <div class="title col-md-12">
                            <h3>Danh sách yêu cầu hỗ trợ</h3>
                        </div>
                        <div class="main-content row col-md-12">

                            <ul class="status col-md-12 d-flex">
                                <li class="status-item all"><a href="" class="text-secondary ">Tất
                                        cả yêu cầu</a>
                                </li>
                            </ul>
                            <div id="status"></div>
                            <div class="custom col-md-12 row p-3">
                                <div class="custom-item first col-md-2">Tìm kiếm
                                </div>
                                <div class="search custom-item col-md-6 row">
                                    <button class="col-md-1"><i class="fa-solid fa-magnifying-glass"></i></button>
                                    <input class="col-md-11" type="text" name="search"
                                        placeholder="Tìm kiếm thông tin">
                                    <div id="countryList" class="col-md-12"><br>
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-12 mb-3">
                                <form action="" method="POST">
                                    @if (!empty($infos))
                                        <div class="table-responsive">
                                            <table class="table table-secondary">
                                                <thead>
                                                    <tr>
                                                        <th scope="col"><input type="checkbox" name="checkall"
                                                                class="check-all form-check-input">
                                                        </th>
                                                        <th scope="col">Họ và tên</th>
                                                        <th scope="col">SĐT</th>
                                                        <th scope="col">Địa chỉ</th>
                                                        <th scope="col">Sự cố</th>
                                                        <th scope="col">Số người</th>
                                                        <th scope="col">Tình trạng</th>
                                                        <th scope="col">Ghi chú</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach ($infos as $info)
                                                        <tr class="">
                                                            <td scope="row">
                                                                <div><input type="checkbox" name="list_check[]"
                                                                        value="" class="form-check-input check">
                                                                </div>
                                                            </td>
                                                            <td scope="row">
                                                                <div>
                                                                    <span>{{$info->name}}</span>
                                                                </div>
                                                            </td>
                                                            <td scope="row">
                                                                <div>
                                                                    <span>{{$info->phone}}</span>
                                                                </div>
                                                            </td>
                                                            <td scope="row">
                                                                <div>
                                                                    <span>{{$info->address}}</span>
                                                                </div>
                                                            </td>
                                                            <td scope="row">
                                                                <div>
                                                                    <span>{{$info->incident}}</span>
                                                                </div>
                                                            </td>
                                                            <td scope="row">
                                                                <div>
                                                                    <span>{{$info->num_people}}</span>
                                                                </div>
                                                            </td>
                                                            <td scope="row">
                                                                <div>
                                                                    <span>{{$info->health}}</span>
                                                                </div>
                                                            </td>
                                                            <td scope="row">
                                                                <div>
                                                                    <span>{{$info->note}}</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    @endforeach


                                                </tbody>
                                            </table>


                                        </div>
                                    @else
                                        <h3 style="color: red">Không có dữ liệu</h3>
                                    @endif


                            </div>
                            </form>

                        </div>
                    </div>
                </div>
                <!-- -----------------------End-Content------------------- -->
            </div>
        </div>



        <script src="{{ asset('js/index.js') }}"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
            integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
            integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous">
        </script>
</body>

</html>
