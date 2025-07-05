Khởi tạo dự án Nodejs:
B1: mkdir server -> cd server -> npm init -y
Cấu hình Prisma:
B1: npm install @prisma/client mysql2
B2: npm install -D prisma
B3: npx prisma init
B4: npx prisma migrate dev --name init

Package
express --- Framework web nhẹ và phổ biến nhất cho Node.js. Tạo server HTTP dễ dàng (API, web server).
nodemon --- Tool giúp tự động restart server khi thay đổi file. Dùng trong dev để đỡ phải node index.js thủ công.
dotenv --- Load biến môi trường từ file .env (ví dụ: DB_PASSWORD, SECRET_KEY).
cors --- Middleware để cấu hình CORS (cho phép client từ domain khác gọi API của bạn).
helmet --- Middleware giúp tăng bảo mật cho app Express (thêm HTTP headers bảo vệ).
multer --- Middleware giúp xử lý file upload (multipart/form-data), thường dùng cho upload hình ảnh.
morgan --- Middleware log request HTTP ra console (giúp debug API, thấy request/response).
mysql2 --- Driver để kết nối MySQL Database, hỗ trợ Promise API.
@prisma/client --- Prisma Client — ORM giúp query database MySQL/Postgres/... bằng JavaScript dễ hơn.
prisma --- CLI tool để generate Prisma Client, migrate schema DB, quản lý model.
luxon --- Thư viện xử lý thời gian, date-time, timezones (thay thế moment.js).
jsonwebtoken --- Tạo và xác thực JWT (JSON Web Token) — dùng cho auth, login.
bcryptjs --- Hash password (mã hoá password) để lưu vào DB và so sánh khi login.
cloudinary --- SDK client upload file lên Cloudinary (cloud image/video hosting).
