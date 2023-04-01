import { LoginModel } from "../models/LoginModel"
import { RegisterModel } from "../models/RegisterModel"

export default class ComputePayloadHelper {
  public static dummyMethod(anyParametersYouNeed: any){
    return{
      payloadField: anyParametersYouNeed
    }
  }
  public static registerPayload(email: String, username: String, password: String) : RegisterModel{
    return{
      email: email,
      username: username,
      password: password
    }
  }

  public static loginPayload(username: String, password: String) : LoginModel{
    return{
      username: username,
      password: password
    }
  }
}
