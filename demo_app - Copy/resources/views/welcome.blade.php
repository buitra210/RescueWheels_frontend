<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('style.css') }}">
    <title>Cuuho</title>
</head>

<body>
    <div id="wrapper">
        <div id="header">
            <div id="info">
                <span class="app-name">Cứu hộ giao thông</span>
                <span class="center phone"><i class="fa-solid fa-phone"></i> 0911577985</span>
            </div>
            <div id="nav">
                <div class="nav-item nav-active" data-item="home"><span>Trang chủ</span></div>
                <div class="nav-item" data-item="service"><span>Dịch vụ</span></div>
                <div class="nav-item" data-item="list-img"><span>Hình ảnh</span></div>
                <div class="nav-item" data-item="intro"><span>Giới thiệu</span></div>
                <div class="nav-item" data-item="contact"><span>Liên hệ</span></div>
            </div>
            <div id="login">
                <div class="btn-item btn-login center"><a href="{{ route('login') }}">Đăng nhập</a></div>
                <div class="btn-item btn-register center"><a href="{{ route('register') }}">Đăng ký</a></div>
            </div>
        </div>
        <div id="content">
            <div class="content-item home" id="content-intro">
                <div class="content-intro-left content-intro-item">
                    <h1>Cứu hộ giao thông</h1>
                    <h3>CỨU HỘ Ô TÔ UY TÍN TẠI HÀ NỘI</h3>
                    <p>Cứu hộ giao thông, cứu hộ xe ô tô chuyên nghiệp. Phạm vi hoạt động toàn khu vực miền bắc nói
                        chung và Hà Nội nói riêng. Dịch vụ nhanh chóng, hỗ trợ 24/24. Hỗ trợ sửa chữa chuyên nghiệp. Hỗ
                        trợ thủ tục bảo hiểm.</p>
                    <div class="btn-hotline">
                        <div class="btn-holine-content">
                            <span>Gọi ngay: <b>0911577985</b></span>
                        </div>
                    </div>
                </div>
                <div class="content-intro-right content-intro-item">
                    <div class="app-intro-img">
                        <img src="https://cuuho117.com/images/anh-cuu-ho.png" alt="">
                    </div>
                </div>
            </div>
            <div id="form-help" class="center">

                <form action="{{ route('create') }}" method="POST">
                    @csrf
                    <div id="title-form" class="center">
                        <span>Nhập thông tin cứu hộ khẩn cấp</span>
                    </div>
                    <div class="group-input">
                        <label for="name">Họ và tên</label>
                        <input type="text" id="name" placeholder="Nhập họ và tên" name="name"
                            value="{{ old('name') }}">
                        @error('name')
                            <small style="color:red">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="group-input">
                        <label for="">Số điện thoại</label>
                        <input type="text" placeholder="Nhập số điện thoại" name="phone"
                            value="{{ old('phone') }}">
                        @error('phone')
                            <small style="color:red">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="group-input">
                        <label for="">Địa chỉ hiện tại</label>
                        <input type="text" placeholder="Nhập địa chỉ hiện tại" name="address"
                            value="{{ old('address') }}">
                        @error('address')
                            <small style="color:red">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="group-input">
                        <label for="">Loại sự cố</label>
                        <select id="" name="incident">
                            <option value="">Chọn loại sự cố</option>
                            <option value="accident">Tai nạn</option>
                            <option value="fire">Hỏa hoạn</option>
                            <option value="flood">Lũ lụt</option>
                            <option value="other">Khác</option>
                        </select>
                        @error('incident')
                            <small style="color:red">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="group-input">
                        <label for="">Số người cần cứu hộ</label>
                        <input type="number" min="1" name="num_people" value="{{ old('num_people') }}"
                            placeholder="Nhập số người cần cứu hộ">
                        @error('num_people')
                            <small style="color:red">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="group-input">
                        <label for="">Tình trạng sức khỏe</label>
                        <input type="text" name="health" value="{{ old('health') }}"
                            placeholder="Nhập tình trạng sức khỏe">
                        @error('health')
                            <small style="color:red">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="group-input">
                        <label for="">Ghi chú</label>
                        <textarea id="" name="note" cols="30" rows="10" placeholder="Nhập ghi chú của bạn">{{ old('note') }} </textarea>
                        @error('note')
                            <small style="color:red">{{ $message }}</small>
                        @enderror
                    </div>
                    <div id="btn-send" class="group-input center">
                        <button>Gửi thông tin</button>
                    </div>
                </form>
            </div>
            <div class="service">
                <div class="service-top">
                    <h2>CỨU HỘ GIAO THÔNG CHUYÊN NGHIỆP</h2>
                    <span class="service-desc">Chúng tôi tự tin khẳng định là đơn vị <b>cứu hộ giao thông</b> uy tín
                        chuyên
                        nghiệp số 1 tại Hà Nội. Khi gặp sự cố hãy liên hệ với chúng tôi ngay để được <b>cứu hộ</b> nhanh
                        chóng
                        an toàn với chi phí tốt nhất. Hãy gọi ngay: <b>0947 117 117</b></span>
                </div>
                <div class="service-bot">
                    <div class="service-bot-item">
                        <div class="service-bot-item-img center">
                            <img src="https://cuuho117.com/images/dich-vu1.png" alt="">
                        </div>
                        <div class="service-bot-item-title center">
                            <span>Cứu hộ giao thông</span>
                        </div>
                        <div class="service-bot-item-content center">
                            <span>Đơn vị đã trên 10 năm kinh nghiệm cứu hộ giao thông. </span>
                        </div>
                    </div>
                    <div class="service-bot-item">
                        <div class="service-bot-item-img center">
                            <img src="https://cuuho117.com/images/dich-vu2.png" alt="">
                        </div>
                        <div class="service-bot-item-title center">
                            <span>Cứu hộ ôtô Hà Nội</span>
                        </div>
                        <div class="service-bot-item-content center">
                            <span>Phong cách phục vụ nhanh chóng kịp thời, uy tín chuyên nghiệp.</span>
                        </div>
                    </div>
                    <div class="service-bot-item">
                        <div class="service-bot-item-img center">
                            <img src="https://cuuho117.com/images/dich-vu3.png" alt="">
                        </div>
                        <div class="service-bot-item-title center">
                            <span>Cứu hộ giao thông Hà Nội</span>
                        </div>
                        <div class="service-bot-item-content center">
                            <span>Đã hơn 3000 khách hàng đã được cứu hộ bởi chúng tôi.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-img">
                <div class="list-img-top">
                    <h2>HÌNH ẢNH CỨU HỘ GIAO THÔNG</h2>
                    <span class="list-img-desc">Công ty cổ phần cứu hộ giao thông 117 được trang bị các thiết bị cẩu
                        kéo, tối tân nhất, có khả năng tiếp cận các khu vực khó khăn, với đội ngũ nhân viên được đào tạo
                        bài bản.</span>
                    <div class="center"><span class="list-img-hotline">Gọi Ngay: 0947 117 117</span></div>
                </div>
                <div class="list-img-bot">
                    <div class="list-img-nav">
                        <div class="img-nav-item active">Tất cả</div>
                        <div class="img-nav-item">Website</div>
                        <div class="img-nav-item">Hình ảnh</div>
                        <div class="img-nav-item">Hình ảnh khác</div>
                    </div>
                    <div class="list-img-content">
                        <div class="img-item">
                            <img src="https://cuuho117.com/images/cuu-ho-giao-thong-10.jpg" alt="">
                            <span>Cứu hộ giao thông Cầu Giấy</span>
                        </div>
                        <div class="img-item">
                            <img src="https://cuuho117.com/images/cuu-ho-giao-thong-1.jpg" alt="">
                            <span>Cứu hộ ô tô Khuất Duy Tiến</span>
                        </div>
                        <div class="img-item">
                            <img src="https://cuuho117.com/images/cuu-ho-giao-thong-2.jpg" alt="">
                            <span>Cứu hộ giao thông giải phóng</span>
                        </div>
                        <div class="img-item">
                            <img src="https://cuuho117.com/images/cuu-ho-giao-thong-3.jpg" alt="">
                            <span>Cứu hộ giao thông Lê Văn Lương</span>
                        </div>
                        <div class="img-item">
                            <img src="https://cuuho117.com/images/cuu-ho-giao-thong-4.jpg" alt="">
                            <span>Cứu hộ giao thông Đường Láng</span>
                        </div>
                        <div class="img-item">
                            <img src="https://cuuho117.com/images/cuu-ho-giao-thong-5.jpg" alt="">
                            <span>Cứu hộ giao thông Pháp Vân</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="intro">
                <div class="intro-top">
                    <h2>CỨU HỘ 117 LÀ AI?</h2>
                    <span class="list-img-desc">Là đơn vị đầu tiên tại Hà Nội hoạt động về dịch vụ cứu hộ giao thông uy
                        tín, chuyên nghiệp!</span>
                </div>
                <div class="intro-bot">
                    <div class="intro-list-img">
                        <div class="intro-img-item">
                            <img src="https://cuuho117.com/images/xe-cuu-ho-2.jpg" alt="">
                            <span class="">Xe cứu hộ hiện đại</span>
                        </div>
                        <div class="intro-img-item">
                            <img src="https://cuuho117.com/images/xe-cuu-ho.jpg" alt="">
                            <span class="">Các loại xe cứu hộ</span>
                        </div>
                        <div class="intro-img-item">
                            <img src="https://cuuho117.com/images/xe-cuu-ho-gt.jpg" alt="">
                            <span class="">Đội ngũ nhân viên chuyên nghiệp</span>
                        </div>
                    </div>
                    <div class="intro-detail">
                        <h2>GIỚI THIỆU VỀ CHÚNG TÔI</h2>
                        <span>Cứu hộ 117 chính thức được sở kế hoạch đầu tư thành phố Hà Nội cấp giấy phép hoạt động năm
                            2007 với chức năng ngành nghề chủ yếu là cứu hộ giao thông, chuyên cẩu kéo các loại xe từ 4
                            chỗ đến 50 tấn.Dịch vụ cứu hộ các loại xe ô tô hỏng, tai nạn trên đường giao thông công
                            cộng, hoa tiêu dẫn đường.
                            Nhằm góp phần chống ách tắc giao thông, đẩy lùi tai nạn, hạn chế thiệt hại cho chủ xe khi
                            phương tiện gặp sự cố. Dịch vụ tư vấn sửa chữa giúp quý khách có thể khôi phục lại chiếc xe
                            của mình nhanh chóng và với chi phí tiết kiệm nhất. Đối với những xe hư hỏng nhẹ, chúng tôi
                            có chính sách hỗ trợ khách hàng sửa chữa tại chỗ.</span>
                    </div>
                    <div class="intro-rate">
                        <h2>Đánh giá chất lượng</h2>
                        <div class="intro-rate-left">
                            <div class="intro-rate-left-item">
                                <span>Dịch vụ cứu hộ</span>
                            </div>
                            <div class="intro-rate-left-item">
                                <span>Đội ngũ nhân viên</span>
                            </div>
                            <div class="intro-rate-left-item">
                                <span>Có mặt tại hiện trường</span>
                            </div>
                            <div class="intro-rate-left-item">
                                <span>Phong cách phục vụ</span>
                            </div>
                        </div>
                        <div class="intro-rate-right">
                            <h2>CỨU HỘ GIAO THÔNG 117</h2>
                            <p>Cứu hộ 117 chính thức được sở kế hoạch đầu tư thành phố Hà Nội cấp giấy phép hoạt động
                                năm 2007 với chức năng ngành nghề chủ yếu là cứu hộ giao thông, chuyên cẩu kéo các loại
                                xe từ 4 chỗ đến 50 tấn.Dịch vụ cứu hộ các loại xe ô tô hỏng, tai nạn trên đường giao
                                thông công cộng, hoa tiêu dẫn đường.....</p>
                            <div class="intro-hotline">
                                <span>Gọi ngay: 0947 117 117</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact">
                <div class="contact-top">
                    <h2>LIÊN HỆ VỚI CỨU HỘ 117</h2>
                    <span>Dịch vụ cứu hộ giao thông toàn quốc giá rẻ nhất, phục vụ 24/7, tốt nhất trong lĩnh vực cứu hộ
                        giao thông khẩn cấp, quy mô, chất lượng, thực hiện bảo hiểm tài sản cho chủ xe, phương tiện đắt
                        tiền.</span>
                </div>
                <div class="contact-bot">
                    <div class="contact-address">
                        <span>Số 1187 Giải Phóng, Hoàng Mai, Hà Nội</span>
                        <span>Số 9 đường Lê Quang Đạo, Mỹ Đình, Hà Nội</span>
                        <span>Số 30 đường Phi Trường, Long Biên, Hà Nội</span>
                        <div class="contact-phone"><span>0947 117 117</span></div>
                        <span>sinhcuuho@gmail.com</span>
                    </div>
                    <div class="contact-with-me">
                        <div class="contact-title">
                            <span>Kết nối với chúng tôi</span>
                        </div>
                        <div class="contact-icon">
                            <div class="contact-icon-item">
                                <span><i class="fa-brands fa-facebook-f"></i></span>
                            </div>
                            <div class="contact-icon-item">
                                <span><i class="fa-brands fa-twitter"></i></span>
                            </div>
                            <div class="contact-icon-item">
                                <span><i class="fa-brands fa-instagram"></i></span>
                            </div>
                            <div class="contact-icon-item">
                                <span><i class="fa-brands fa-pinterest-p"></i></span>
                            </div>
                            <div class="contact-icon-item">
                                <span><i class="fa-brands fa-youtube"></i></span>
                            </div>
                            <div class="contact-icon-item">
                                <span><i class="fa-brands fa-google"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer" class="center">
            <span>© 2015 <b>Cuuho117.com</b> All Rights Reserved.</span>
        </div>
        <div class="center" id="hotline">
            <span class=""><i class="fa-solid fa-phone-volume"></i>Gọi ngay: 0911577985</span>
        </div>
    </div>
    <div></div>
    <div></div>
</body>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="{{ asset('index.js') }}"></script>

</html>
