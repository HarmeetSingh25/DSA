const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()+-])(?!.*(.)\1).{8,}$/;
console.log(regex.test("Ab1@xyz9")); // true   