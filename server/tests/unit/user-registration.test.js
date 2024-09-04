const userService = require("../../services/userRegistration");

const sampleUser = {
  nic: "123423234",
  fullName: "TestDevUser",
  email: "test@dev.to",
  gender: "male",
};

test("Should register and return the generated userId", () => {
  registeredUser = userService.registerUser(sampleUser);
  expect(registeredUser.userId).toBe(1);
});
