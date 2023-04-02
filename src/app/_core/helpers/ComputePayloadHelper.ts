import { ExecuteModel } from "../models/ExecuteModel."
import { LoginModel } from "../models/LoginModel"
import { ProjectReqModel } from "../models/ProjectReqModel"
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

  public static projectPayload(title: String, description: String) : ProjectReqModel{
    return{
      title: title,
      description: description
    }
  }
  public static executePayload(script:string,language:string,versionIndex:string) : ExecuteModel{
    return{
      script: script,
      language: language,
      versionIndex:versionIndex
    }
  }

  public static updateExpPayload(exp:Number){
    return {
      exp_amount : exp
    }
  }

  public static createTaskPayload(name:string,description:string,projectid:Number){
    return {
      name:name,
      description : description,
      type:0,
      resultCode:'',
      projectId:projectid
    }
  }
  
}
