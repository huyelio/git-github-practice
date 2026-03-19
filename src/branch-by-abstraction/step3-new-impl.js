// BƯỚC 3: Viết implementation mới phía sau abstraction


class IEmailService {
  send(to, subject, body) {
    throw new Error("Chưa implement send()");
  }
}

class OldEmailService extends IEmailService {
  send(to, subject, body) {
    console.log(`[Nodemailer] Gửi email tới ${to}: ${subject}`);
  }
}

// --- Implementation mới viết song song, chưa được dùng ---
class NewEmailService extends IEmailService {
  send(to, subject, body) {
    console.log(`[SendGrid] Gửi email tới ${to}: ${subject}`);
  }
}

class NotificationService {
  constructor(emailService) {
    this.emailer = emailService;
  }

  notifyUser(user, message) {
    this.emailer.send(user.email, "Thông báo", message);
  }
}

// --- Trunk vẫn chạy bình thường với code cũ ---
const svc = new NotificationService(new OldEmailService());
svc.notifyUser({ email: "alice@example.com" }, "Đơn hàng của bạn đã được xác nhận.");
