using System;

namespace webapi.Controllers.ViewModels.Account
{
    public class RegisterUserForm
    {
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}