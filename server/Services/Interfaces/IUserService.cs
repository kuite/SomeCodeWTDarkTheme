using System;
using System.Threading;
using System.Threading.Tasks;
using webapi.Model.Domain;
using webapi.Model.Common;
using Microsoft.AspNetCore.Identity;

namespace webapi.Services.Interfaces
{
    public interface IUserService
    {
        Task<IdentityResult> RegisterUserAsync(RegisterUserForm form);
        Task<string> GetTokenAsync(LoginForm credentials);
    }
}
