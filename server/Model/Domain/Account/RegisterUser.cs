using System;

namespace webapi.Model.Domain.Account
{
    public class RegisterUser
    {
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}