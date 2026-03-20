function login(user) {
  if (!user) return null;
  return user.email;
}

console.log(login({ email: "huy@gmail.com" }));
