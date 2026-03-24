module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // bắt buộc type đúng list
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"],
    ],

    // type phải viết thường
    "type-case": [2, "always", "lower-case"],

    // không được để trống subject
    "subject-empty": [2, "never"],

    // không viết hoa đầu
    "subject-case": [2, "never", ["start-case", "pascal-case"]],

    // giới hạn độ dài commit
    "subject-max-length": [2, "always", 72],

    // header max
    "header-max-length": [2, "always", 100],

    // scope nếu dùng thì phải hợp lệ, ví dụ feat(auth): add login -> đúng || feat(payment): add payment -> sai
    "scope-enum": [2, "always", ["auth", "user", "product", "ui", "api"]],
  },
};
