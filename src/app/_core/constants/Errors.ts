import  {CustomError } from "../models/Error";
import { Urls } from "./Urls";

export const UNAUTHORIZED : CustomError = {
    redirectTo: Urls.ACCESS_DENIED,
    message: "Nu aveti suficiente drepturi"
}
