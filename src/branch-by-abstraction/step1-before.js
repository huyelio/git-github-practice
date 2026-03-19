// ============================================================
// BƯỚC 1: Code ban đầu - phụ thuộc trực tiếp vào OldEmailService
// ============================================================

class OldEmailService {
  send(to, subject, body) {
    console.log(`[Nodemailer] Gửi email tới ${to}: ${subject}`);
  }
}

class NotificationService {
  constructor() {
    this.emailer = new OldEmailService(); // gắn cứng vào code cũ
  }

  notifyUser(user, message) {
    this.emailer.send(user.email, "Thông báo", message);
  }
}

// --- Chạy thử ---
const svc = new NotificationService();
svc.notifyUser({ email: "alice@example.com" }, "Đơn hàng của bạn đã được xác nhận.");


