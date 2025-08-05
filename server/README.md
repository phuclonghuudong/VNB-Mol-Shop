src/
├── models/ // Định nghĩa các model
├── repositories/ // Lớp truy cập database
├── services/ // Business logic
├── controllers/ // Xử lý HTTP request
└── routes/ // Định tuyến API

- Lớp Model (Domain Layer): Định nghĩa các entity/domain object của ứng dụng.

- Lớp Repository (Data Access Layer): Chịu trách nhiệm tương tác trực tiếp với database.

- Lớp Service (Business Logic Layer): Chứa các business logic của ứng dụng.

- Lớp Controller: Xử lý HTTP request và response.

- Lớp Route: Kết nối route với controller.

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

Status Code ---Constructor Name
400 -----------BadRequest
401 -----------Unauthorized
402 -----------PaymentRequired
403 -----------Forbidden
404 -----------NotFound
405 -----------MethodNotAllowed
406 -----------NotAcceptable
407 -----------ProxyAuthenticationRequired
408 -----------RequestTimeout
409 -----------Conflict
410 -----------Gone
411 -----------LengthRequired
412 -----------PreconditionFailed
413 -----------PayloadTooLarge
414 -----------URITooLong
415 -----------UnsupportedMediaType
416 -----------RangeNotSatisfiable
417 -----------ExpectationFailed
418 -----------ImATeapot
421 -----------MisdirectedRequest
422 -----------UnprocessableEntity
423 -----------Locked
424 -----------FailedDependency
425 -----------TooEarly
426 -----------UpgradeRequired
428 -----------PreconditionRequired
429 -----------TooManyRequests
431 -----------RequestHeaderFieldsTooLarge
451 -----------UnavailableForLegalReasons
500 -----------InternalServerError
501 -----------NotImplemented
502 -----------BadGateway
503 -----------ServiceUnavailable
504 -----------GatewayTimeout
505 -----------HTTPVersionNotSupported
506 -----------VariantAlsoNegotiates
507 -----------InsufficientStorage
508 -----------LoopDetected
509 -----------BandwidthLimitExceeded
510 -----------NotExtended
511 -----------NetworkAuthenticationRequired
