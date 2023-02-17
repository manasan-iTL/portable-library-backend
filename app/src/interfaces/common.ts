import { Query } from "express-serve-static-core"
import { Request } from "express"

export interface TypedRequestBody <T> extends Request {
    body: T
}

export interface TypedRequestQuery <T extends Query> extends Request {
    request: T
}