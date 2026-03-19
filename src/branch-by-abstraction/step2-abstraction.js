// --- Abstraction
class IEmailService {
  send(to, subject, body) {
    throw new Error("Chưa implement send()");
  }
}

// --- Code cũ implement abstraction ---
class OldEmailService extends IEmailService {
  send(to, subject, body) {
    console.log(`[Nodemailer] Gửi email tới ${to}: ${subject}`);
  }
}

// --- NotificationService chỉ biết IEmailService, không biết code cũ/mới ---
class NotificationService {
  constructor(emailService) {
    this.emailer = emailService; // nhận vào từ ngoài
  }

  notifyUser(user, message) {
    this.emailer.send(user.email, "Thông báo", message);
  }
}

// --- Vẫn dùng code cũ, hệ thống không đổi hành vi ---
const svc = new NotificationService(new OldEmailService());
svc.notifyUser(
  { email: "alice@example.com" },
  "Đơn hàng của bạn đã được xác nhận.",
);

// Đây là bước quan trọng nhất:
// - Chưa có tính năng mới
// - Chưa đổi logic
// - Nhưng đã "mở đường" để hoán đổi implementation bất kỳ lúc nào
