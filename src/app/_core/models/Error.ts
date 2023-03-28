import { Urls } from "../constants/Urls"

export interface CustomError{
    redirectTo: Urls,
    message?: string
}