# TheaterDeviceManager

## Giới thiệu

**TheaterDeviceManager** là một ứng dụng giúp quản lý thông tin về các thiết bị phần cứng trong rạp chiếu phim, đảm bảo việc theo dõi tình trạng và vòng đời của từng thiết bị, cũng như hỗ trợ quản lí cơ sở vật chất và luân chuyển thiết bị giữa các rạp chiếu một cách hiệu quả.

## Chức năng chính

-   **Quản lý thiết bị phần cứng**: Thêm, sửa, xóa và cập nhật thông tin thiết bị.
-   **Theo dõi vòng đời thiết bị**: Ghi nhận thời điểm mua, tình trạng hiện tại và các lần sửa chữa, bảo trì.
-   **Luân chuyển thiết bị**: Theo dõi vị trí và tình trạng thiết bị khi chuyển giao giữa các rạp.
-   **Báo cáo hỏng hóc và bảo trì**: Ghi nhận các sự cố và lên lịch bảo trì để tối ưu hoạt động.
-   **Quản lý tồn kho**: Giám sát số lượng thiết bị sẵn có và trạng thái hư hỏng.

## Công nghệ sử dụng

-   **Frontend**: ReactJS, TailwindCSS
-   **Backend**: Node.js, Express
-   **Cơ sở dữ liệu**: MongoDB với GridFS để lưu trữ hình ảnh
-   **Quản lý trạng thái**: Zustand / Redux Toolkit (tùy chọn)

## Cài đặt và chạy ứng dụng

### Yêu cầu hệ thống

-   **Node.js** >= 14.x
-   **MongoDB** >= 4.x

### Hướng dẫn cài đặt

1. **Clone repo**:

    ```bash
    git clone https://github.com/your-username/ManagementDevice.git
    cd ManagementDevice
    ```

2. **Cài đặt thư viện:**

    ```bash
    npm install
    ```

3. **Cấu hình biến môi trường: Tạo file .env trong thư mục gốc và thêm các thông tin**:

    ```bash
    MONGODB_URI=path
    PORT=5000
    ```

4. **Chạy ứng dụng**:
   Mở trình duyệt và truy cập http://localhost:5000 để bắt đầu sử dụng ứng dụng

## Cấu trúc thư mục

```
ManagementDevice/
|
├── client/                  # Thư mục Frontend
│   ├── public/              # Thư mục chứa các file tĩnh
│   └── src/                 # Source code React
├── server/                  # Thư mục Backend
│   ├── controllers/         # Chứa các controller
│   ├── models/              # Chứa các model MongoDB
│   ├── routes/              # Định nghĩa các route
│   └── services/            # Xử lý logic nghiệp vụ
└── README.md
```

## Định hướng phát triển:

-   Tích hợp biểu đồ để hiển thị số lượng thiết bị theo tình trạng.
-   Thêm tính năng phân quyền cho các tài khoản admin và nhân viên quản lý thiết bị.
