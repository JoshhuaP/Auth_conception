const { JsonWebTokenError } = require("jsonwebtoken");
const { request } = require("../../app");
const RequestReaderLogin = require("../../RequestReader/RequestReaderLogin");
const Jest = require('jest-mock/package');

test('Read correct JSON', () => {
    let requestReaderLogin =new RequestReaderLogin();
    let request = {}
    request.body = {};
    request.body.user ="user";
    request.body.pwd="BestPassword";
    let result = requestReaderLogin.ReadData(request);
    expect(result).toBe(true)
    expect(requestReaderLogin.username).toBe(request.body.user);
    expect(requestReaderLogin.password).toBe(request.body.pwd);
  });

  test('Read Username Absent JSON', () => {
    let requestReaderLogin =new RequestReaderLogin();
    let request = {}
    request.body = {};
    request.body.pwd="BestPassword";
    let result = requestReaderLogin.ReadData(request);
    expect(result).toBe(false)
  });

  test('Read Password Absent JSON', () => {
    let requestReaderLogin =new RequestReaderLogin();
    let request = {}
    request.body = {};
    request.body.user="user";
    let result = requestReaderLogin.ReadData(request);
    expect(requestReaderLogin.username).toBe(request.body.user);
    expect(result).toBe(false)
  });

