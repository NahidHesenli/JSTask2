let login = prompt("Login daxil edin:");
let password;
login === "admin" && (password = prompt("Şifrə daxil edin"));
login === "admin" && password === "12345" && alert("Admin panelə giriş edildi");
login === "admin" && password !== "12345" && alert("Şifrə yanlışdır");
login !== "admin" && alert("Belə istifadəçi yoxdur");
