/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const request = context.switchToHttp().getRequest();
    // using basic auth for simplicity  with username as 'admin' and password as 'password'
    const authHeader = request.headers["authorization"];
    if (authHeader) {
      const [type, credentials] = authHeader.split(" ");
      if (type === "Basic") {
        const decoded = Buffer.from(credentials, "base64").toString("utf-8");
        const [username, password] = decoded.split(":");

        
        
        if (username === "admin" && password === "password") {
          return true;
        }
      }
    }
       

    throw new UnauthorizedException("Invalid or missing token");

  }
}
