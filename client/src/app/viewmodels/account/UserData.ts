export class UserData {
    Id: string;
    UserName: string;
    auth_token: string;

    constructor(dataSource: string) {
        let parsed = JSON.parse(dataSource);

        //this.Id = parsed.Jwt.Id;
        this.UserName = parsed.UserName;
    }
}