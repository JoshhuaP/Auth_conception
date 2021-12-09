const ControllerLogin = require("../../controler/ControllerLogin");
const RequestReaderLogin = require("../../RequestReader/RequestReaderLogin");
const RequestReaderReturn = require("../../RequestReader/returnEnumeration/RequestReaderReturn");
const FakeResponse = require("./FakeResponse");

/**
 * Simulates an authentication response.
 */
beforeAll(()=>{
  jest.spyOn(ControllerLogin.prototype, 'CheckPassword').mockImplementation(()=>{
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
    let fakeResponse = new FakeResponse();
    return requestReaderLogin.ReadRequest(request,fakeResponse).then(result=>{
      expect(result).toBe(RequestReaderReturn.RequestValid);
      expect(fakeResponse.Status).toBe(201);
      expect(fakeResponse.Boddy.token).toBe("digjdojgiodfjgodjgoidjgodj554gdg");
    })
  });

  /** Test the result of ReadRequest when the request is not compliant */
  test('IncorrectRequest -> return DataRequestInvalid', () => {
    let requestReaderLogin =new RequestReaderLogin();
    let request = {};
    request.body = {};
    request.body.user="user";
    let fakeResponse = new FakeResponse();
    return requestReaderLogin.ReadRequest(request, fakeResponse).then(result => {
        expect(result).toBe(RequestReaderReturn.DataRequestInvalid);
        expect(fakeResponse.Status).toBe(400)
        expect(fakeResponse.Boddy.message).toBe(RequestReaderReturn.DataRequestInvalid)
    })
    
  });