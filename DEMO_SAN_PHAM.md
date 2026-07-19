# FoodHub - Tài liệu demo sản phẩm

## 1. Giới thiệu ngắn về dự án

FoodHub là website bán đồ ăn được xây dựng bằng HTML, CSS và JavaScript thuần. Dự án mô phỏng các chức năng cơ bản của một trang đặt món ăn online: đăng ký, đăng nhập, xem danh sách món ăn, lọc theo danh mục, tìm kiếm, sắp xếp, thêm món vào giỏ hàng và đặt đơn.

Mục tiêu của sản phẩm là giúp học sinh luyện tập các kiến thức nền tảng của frontend trước khi học framework.

## 2. Các trang chính

### Trang đăng ký

- Cho người dùng tạo tài khoản mới.
- Kiểm tra người dùng đã nhập đầy đủ thông tin hay chưa.
- Kiểm tra email có ký tự `@`.
- Kiểm tra mật khẩu tối thiểu 6 ký tự.
- Kiểm tra mật khẩu nhập lại có trùng với mật khẩu ban đầu không.
- Lưu tài khoản vào `localStorage`.
- Chuyển người dùng sang trang đăng nhập sau khi đăng ký thành công.

### Trang đăng nhập

- Lấy thông tin tài khoản đã lưu trong `localStorage`.
- So sánh tên đăng nhập và mật khẩu người dùng nhập.
- Nếu đúng thì lưu trạng thái `isLogin = true`.
- Chuyển người dùng sang dashboard sau khi đăng nhập thành công.
- Nếu sai thì hiển thị thông báo lỗi.

### Trang dashboard

- Hiển thị giao diện tổng quan của website bán đồ ăn.
- Có banner giới thiệu sản phẩm.
- Có thống kê: số món đang bán, số danh mục, điểm đánh giá trung bình.
- Hiển thị danh mục món ăn.
- Hiển thị danh sách món ăn từ mock data.
- Giả lập việc fetch API bằng `Promise` và `setTimeout`.
- Có spinner loading trong lúc đợi dữ liệu.
- Tìm kiếm món ăn theo tên hoặc mô tả.
- Lọc món ăn theo danh mục.
- Sắp xếp món ăn theo độ phổ biến, giá tăng dần, giá giảm dần, đánh giá cao.
- Thêm món vào giỏ hàng.
- Tăng/giảm số lượng món trong giỏ hàng.
- Tính tổng tiền đơn hàng.
- Cho người dùng nhập ghi chú giao hàng.
- Kiểm tra người dùng đã đăng nhập trước khi đặt món.
- Sau khi đặt món hiển thị modal thông báo đặt hàng thành công.
- Modal đơn hàng có mã đơn, tổng tiền và thời gian giao dự kiến.
- Nút header tự động hiển thị `Đăng nhập` hoặc `Đăng xuất` dựa vào trạng thái đăng nhập.

### Trang đồ ăn nhanh

- Hiển thị danh sách các món ăn nhanh.
- Thêm món vào giỏ hàng riêng của trang.
- Tính tổng tiền.
- Yêu cầu đăng nhập trước khi đặt món.
- Sau khi đặt món hiển thị UI thông báo đơn hàng đã được nhận.

### Trang đồ ăn gia đình

- Hiển thị danh sách các món ăn gia đình.
- Thêm món vào giỏ hàng riêng của trang.
- Tính tổng tiền.
- Yêu cầu đăng nhập trước khi đặt món.
- Sau khi đặt món hiển thị UI thông báo đơn hàng đã được nhận.

## 3. Các tính năng nổi bật để demo

1. Đăng ký tài khoản mới.
2. Đăng nhập bằng tài khoản vừa tạo.
3. Quan sát nút trên header đổi từ `Đăng nhập` thành `Đăng xuất`.
4. Xem danh sách món ăn trên dashboard.
5. Đổi danh mục để lọc món ăn.
6. Tìm kiếm một món, ví dụ `pizza`, `burger`, `cơm`.
7. Sắp xếp món theo giá tăng dần hoặc giảm dần.
8. Thêm nhiều món vào giỏ hàng.
9. Tăng/giảm số lượng.
10. Nhập ghi chú giao hàng.
11. Bấm đặt món và xem modal xác nhận đơn hàng.
12. Đăng xuất và thử đặt món để thấy website yêu cầu đăng nhập.

## 4. Kiến thức đã sử dụng trong dự án

### HTML

- Sử dụng cấu trúc HTML cơ bản: `html`, `head`, `body`.
- Sử dụng thẻ semantic như `header`, `main`, `section`, `aside`, `footer`, `article`, `nav`.
- Tạo form nhập liệu bằng `input`, `textarea`, `select`, `button`.
- Kết nối file CSS bằng thẻ `link`.
- Kết nối file JavaScript bằng thẻ `script`.
- Sử dụng thuộc tính `id`, `class`, `data-*` để thao tác với CSS và JavaScript.
- Sử dụng `alt` cho hình ảnh để tăng khả năng truy cập.

### CSS

- Sử dụng reset cơ bản với `box-sizing: border-box`.
- Sử dụng biến CSS trong `:root`.
- Dùng font Inter thông qua Google Fonts.
- Dùng Flexbox để sắp xếp header, nav, cart item.
- Dùng CSS Grid để tạo layout dashboard và danh sách sản phẩm.
- Dùng `position: sticky` cho header và giỏ hàng.
- Dùng `media query` để responsive trên màn hình nhỏ.
- Dùng `hover`, `transition`, `box-shadow`, `border-radius` để tạo UI hiện đại.
- Tạo spinner loading bằng `@keyframes`.
- Tạo modal xác nhận đơn hàng bằng CSS.

### JavaScript

- Khai báo biến bằng `const` và `let`.
- Sử dụng array và object để lưu danh sách món ăn.
- Sử dụng `map()` để render danh sách món ăn ra HTML.
- Sử dụng `filter()` để lọc món theo danh mục và từ khóa.
- Sử dụng `sort()` để sắp xếp món ăn.
- Sử dụng `reduce()` để tính tổng tiền và tổng số lượng.
- Sử dụng `find()` để tìm món ăn theo `id`.
- Sử dụng `addEventListener()` để bắt sự kiện click, input, change.
- Sử dụng `event.target.closest()` để xử lý click trên các nút được render động.
- Sử dụng template string để tạo HTML động.
- Sử dụng `Number()` để ép kiểu dữ liệu từ `data-id`.
- Sử dụng `Intl.NumberFormat` để định dạng tiền Việt Nam.
- Sử dụng `Promise` và `setTimeout` để giả lập fetch API.
- Sử dụng `localStorage` để lưu tài khoản và trạng thái đăng nhập.
- Sử dụng DOM API: `getElementById`, `innerHTML`, `textContent`, `classList`.

### localStorage

`localStorage` là bộ nhớ nhỏ trên trình duyệt, có thể lưu dữ liệu dạng chuỗi và vẫn còn sau khi reload trang.

Trong dự án này `localStorage` được dùng để:

- Lưu tài khoản người dùng bằng key `account`.
- Lưu trạng thái đăng nhập bằng key `isLogin`.
- Kiểm tra người dùng đã đăng nhập hay chưa trước khi cho đặt món.
- Đổi UI header thành `Đăng nhập` hoặc `Đăng xuất`.

Vì `localStorage` chỉ lưu chuỗi, nên khi lưu object cần dùng:

```js
localStorage.setItem("account", JSON.stringify(account));
```

Khi lấy ra cần dùng:

```js
const account = JSON.parse(localStorage.getItem("account"));
```

## 5. Luồng demo gợi ý

1. Mở trang đăng ký và tạo tài khoản.
2. Chuyển sang trang đăng nhập.
3. Đăng nhập bằng tài khoản vừa tạo.
4. Vào dashboard và giải thích các khu vực: header, banner, danh mục, danh sách món, giỏ hàng.
5. Thử tìm kiếm món ăn.
6. Thử lọc danh mục.
7. Thử sắp xếp theo giá.
8. Thêm món vào giỏ hàng.
9. Tăng/giảm số lượng.
10. Thêm ghi chú giao hàng.
11. Bấm đặt món và giải thích modal xác nhận đơn hàng.
12. Bấm đăng xuất và giải thích logic bảo vệ thao tác đặt món.

## 6. Câu hỏi BGK có thể hỏi và gợi ý trả lời

### Câu hỏi về tính năng

**Hỏi:** Website của em có những chức năng chính nào?

**Gợi ý trả lời:** Website có đăng ký, đăng nhập, hiển thị món ăn, tìm kiếm, lọc danh mục, sắp xếp, giỏ hàng, tính tổng tiền, đặt món và hiển thị UI xác nhận đơn hàng.

**Hỏi:** Vì sao cần đăng nhập trước khi đặt món?

**Gợi ý trả lời:** Đăng nhập giúp website biết người dùng là ai trước khi tạo đơn. Trong dự án này em dùng `localStorage.isLogin` để kiểm tra trạng thái đăng nhập.

**Hỏi:** Khi bấm đăng xuất thì website làm gì?

**Gợi ý trả lời:** Website đổi `isLogin` trong `localStorage` thành `false`, cập nhật nút trên header từ `Đăng xuất` về `Đăng nhập`, và không cho đặt món nếu chưa đăng nhập.

**Hỏi:** Giỏ hàng hoạt động như thế nào?

**Gợi ý trả lời:** Khi bấm thêm món, JavaScript tìm món theo `id`. Nếu món chưa có trong giỏ thì thêm mới, nếu đã có thì tăng số lượng. Tổng tiền được tính bằng `reduce()`.

**Hỏi:** Sau khi đặt món, website hiển thị gì?

**Gợi ý trả lời:** Dashboard hiển thị modal xác nhận gồm mã đơn, tổng tiền và thời gian giao dự kiến. Các trang danh mục hiển thị hộp thông báo đơn hàng đã được nhận.

### Câu hỏi về HTML/CSS

**Hỏi:** Em dùng thẻ semantic HTML nào?

**Gợi ý trả lời:** Em dùng `header`, `main`, `section`, `aside`, `article`, `footer`, `nav` để chia bố cục rõ ràng và đúng ý nghĩa hơn so với chỉ dùng `div`.

**Hỏi:** Flexbox và Grid khác nhau như thế nào?

**Gợi ý trả lời:** Flexbox phù hợp sắp xếp theo một chiều, ví dụ header hoặc dòng item trong giỏ hàng. Grid phù hợp bố cục hai chiều, ví dụ danh sách sản phẩm và layout dashboard.

**Hỏi:** Responsive là gì?

**Gợi ý trả lời:** Responsive là làm giao diện tự động phù hợp với nhiều kích thước màn hình. Em dùng `media query` để trên màn hình nhỏ các cột chuyển thành một cột.

**Hỏi:** Spinner loading được tạo như thế nào?

**Gợi ý trả lời:** Em tạo một vòng tròn bằng CSS border, sau đó dùng `@keyframes` và `animation` để xoay nó trong lúc giả lập tải dữ liệu.

### Câu hỏi về JavaScript

**Hỏi:** Mock data là gì?

**Gợi ý trả lời:** Mock data là dữ liệu giả lập. Trong dự án này em tạo mảng `mockFoods` để giống dữ liệu lấy từ server, giúp website chạy được khi chưa có backend.

**Hỏi:** Em giả lập fetch API như thế nào?

**Gợi ý trả lời:** Em tạo hàm `fetchFoods()` trả về `Promise`, dùng `setTimeout` để chậm lại 800ms, sau đó trả về danh sách món ăn. Cách này giúp demo loading spinner.

**Hỏi:** `map()` được dùng để làm gì?

**Gợi ý trả lời:** `map()` được dùng để biến mảng món ăn thành chuỗi HTML, sau đó gán vào `innerHTML` để hiển thị danh sách sản phẩm.

**Hỏi:** `filter()` được dùng để làm gì?

**Gợi ý trả lời:** `filter()` được dùng để lọc món ăn theo danh mục hoặc từ khóa tìm kiếm.

**Hỏi:** `reduce()` được dùng để làm gì?

**Gợi ý trả lời:** `reduce()` được dùng để tính tổng tiền và tổng số lượng món trong giỏ hàng.

**Hỏi:** Vì sao cần dùng `data-id` trên nút thêm món?

**Gợi ý trả lời:** Vì mỗi nút cần biết nó thuộc món nào. `data-id` lưu id của món, khi click JavaScript lấy id đó để tìm món trong mảng dữ liệu.

**Hỏi:** `innerHTML` và `textContent` khác nhau thế nào?

**Gợi ý trả lời:** `innerHTML` cho phép chèn cả HTML vào trang, còn `textContent` chỉ chèn nội dung text. Khi chỉ cần đổi chữ, dùng `textContent` an toàn hơn.

**Hỏi:** Vì sao cần `JSON.stringify()` và `JSON.parse()` khi dùng localStorage?

**Gợi ý trả lời:** `localStorage` chỉ lưu dữ liệu dạng chuỗi. Nếu muốn lưu object thì cần chuyển object thành chuỗi bằng `JSON.stringify()`, khi lấy ra thì chuyển lại thành object bằng `JSON.parse()`.

### Câu hỏi mở rộng

**Hỏi:** Nếu làm thật, website cần thêm gì?

**Gợi ý trả lời:** Cần backend, database, đăng nhập an toàn, mã hóa mật khẩu, API thật, thanh toán online, quản lý đơn hàng và phân quyền admin.

**Hỏi:** Vì sao không nên lưu mật khẩu thật trong localStorage?

**Gợi ý trả lời:** Vì localStorage không phải nơi an toàn để lưu mật khẩu. Trong sản phẩm thật, mật khẩu phải được gửi lên backend và mã hóa/hash trong database.

**Hỏi:** Nếu dữ liệu món ăn lấy từ API thật thì cần thay đổi gì?

**Gợi ý trả lời:** Thay hàm `fetchFoods()` giả lập bằng `fetch(url)` thật, xử lý trạng thái loading, thành công và lỗi khi API không trả về dữ liệu.

**Hỏi:** Nếu muốn lưu giỏ hàng sau khi reload trang thì làm sao?

**Gợi ý trả lời:** Có thể lưu giỏ hàng vào `localStorage` sau mỗi lần thêm/xóa/tăng/giảm số lượng, và đọc lại giỏ hàng khi trang được mở.

**Hỏi:** Nếu có nhiều người dùng thì localStorage có đủ không?

**Gợi ý trả lời:** Không. `localStorage` chỉ lưu trên một trình duyệt của một máy. Nếu có nhiều người dùng thật thì cần backend và database.

## 7. Điểm mạnh khi trình bày

- Dự án dùng HTML, CSS, JavaScript thuần nên thể hiện rõ kiến thức nền tảng.
- Có đủ luồng người dùng cơ bản: đăng ký, đăng nhập, xem món, thêm giỏ, đặt hàng.
- Có mock API và loading spinner nên gần với cách làm website thật.
- Có UI sau khi đặt đơn, giúp trải nghiệm người dùng rõ ràng hơn.
- Có logic kiểm tra đăng nhập trước khi đặt món.
- Giao diện có responsive, có danh mục, tìm kiếm và sắp xếp.

## 8. Hạn chế có thể nói thẳng khi được hỏi

- Dự án chưa có backend thật.
- Tài khoản đang được lưu trong `localStorage`, chỉ phù hợp cho demo học tập.
- Mật khẩu chưa được mã hóa vì đây là bài frontend cơ bản.
- Giỏ hàng chưa được lưu lại sau khi reload trang.
- Chưa có trang admin để quản lý món ăn và đơn hàng.

Khi trình bày, học sinh nên nói rõ đây là sản phẩm cuối khóa cho người mới học, mục tiêu là nắm vững HTML, CSS, JavaScript và tư duy xử lý logic trên giao diện.
