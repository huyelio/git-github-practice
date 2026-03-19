// ============================================================
// BƯỚC 4: Chuyển đổi bằng feature flag
// Code mới đã có trong trunk, bật/tắt qua config - không cần deploy lại.
// ============================================================

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

class NewEmailService extends IEmailService {
  send(to, subject, body) {
    console.log(`[SendGrid] Gửi email tới ${to}: ${subject}`);
  }
}

// --- Factory quyết định dùng cái nào dựa theo flag ---
function createEmailService(useNew) {
  return useNew ? new NewEmailService() : new OldEmailService();
}

class NotificationService {
  constructor(emailService) {
    this.emailer = emailService;
  }

  notifyUser(user, message) {
    this.emailer.send(user.email, "Thông báo", message);
  }
}

// --- Giả lập config từ env hoặc file config ---
const config = {
  USE_NEW_EMAIL_SERVICE: false, // đổi thành true để bật code mới
};

const svc = new NotificationService(
  createEmailService(config.USE_NEW_EMAIL_SERVICE),
);
svc.notifyUser(
  { email: "alice@example.com" },
  "Đơn hàng của bạn đã được xác nhận.",
);

// Khi đã kiểm thử kỹ và tự tin:
// 1. Đổi flag thành true → toàn hệ thống dùng code mới
// 2. Sau khi ổn định → xóa OldEmailService và flag khỏi codebase
