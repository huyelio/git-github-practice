function login(user) {
  if (!user) return null;
  return user.name;
}

console.log(login({ name: "Huy" }));
