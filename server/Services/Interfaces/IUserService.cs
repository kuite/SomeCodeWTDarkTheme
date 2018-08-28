using System;
using System.Threading;
using System.Threading.Tasks;
using webapi.Model.Domain.Account;
using webapi.Model.Common;
using Microsoft.AspNetCore.Identity;

namespace webapi.Services.Interfaces
{
    public interface IUserService
    {
        Task<IdentityResult> RegisterUserAsync(RegisterUser form);
        Task<User> LoginAsync(Login credentials);
    }
}
