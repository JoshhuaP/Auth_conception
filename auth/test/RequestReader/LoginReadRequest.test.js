const RequestReaderLogin = require("../../RequestReader/RequestReaderLogin");
const RequestReaderReturn = require("../../RequestReader/returnEnumeration/RequestReaderReturn");

/**
 * Simulates an authentication response.
 */
beforeAll(()=>{
  jest.spyOn(RequestReaderLogin.prototype, 'askAuthentification').mockImplementation(()=>{
    let authentification = {} // get the token
    authentification.status = 201
    authentification.body = {"token": "digjdojgiodfjgodjgoidjgodj554gdg"}
    return authentification;
  } )
});

/**
 * Delethe the mock to re-establish the normal functioning of the class
 */
afterAll(() => {
  jest.restoreAllMocks();
});

/** Test the result of ReadRequest when the request is compliant */
test('CorrectRequest -> generation of token', () => {
    let requestReaderLogin =new RequestReaderLogin();
    let request = {};
    request.body = {};
    request.body.user="user";
    request.body.pwd="BestPassword";
    let result = requestReaderLogin.ReadRequest(request);
    expect(result).toBe(RequestReaderReturn.RequestValid);
    expect(requestReaderLogin.info.status).toBe(201);
    expect(requestReaderLogin.info.body.token).toBe("digjdojgiodfjgodjgoidjgodj554gdg");
  });

  /** Test the result of ReadRequest when the request is not compliant */
  test('IncorrectRequest -> return DataRequestInvalid', () => {
    let requestReaderLogin =new RequestReaderLogin();
    let request = {};
    request.body = {};
    request.body.user="user";
    let result = requestReaderLogin.ReadRequest(request);
    expect(result).toBe(RequestReaderReturn.DataRequestInvalid);
  });