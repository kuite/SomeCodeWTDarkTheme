using webapi.Model.Common;
using webapi.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using AutoMapper;
using System.Threading.Tasks;
using webapi.Model.Domain;
using webapi.Auth;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using webapi.Model.Database.Access;

namespace webapi.Services
{
    public class UserService : IUserService
    {
        private readonly DatabaseContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager<UserEntity> _userManager;
        private readonly IJwtFactory _jwtFactory;
        private readonly JwtIssuerOptions _jwtOptions;

        public UserService(
            UserManager<UserEntity> userManager,
            DatabaseContext context, 
            IMapper mapper, 
            IJwtFactory jwtFactory, 
            IOptions<JwtIssuerOptions> jwtOptions)
        {
            _context = context;
            _userManager = userManager;
            _mapper = mapper;
            _jwtFactory = jwtFactory;
            _jwtOptions = jwtOptions.Value;
        }

        public async Task<string> GetTokenAsync(LoginForm credentials)
        {
            var identity = await GetClaimsIdentity(credentials.Email, credentials.Password);

            //validate indentity against null

            var jwt = await Tokens.GenerateJwt(
                identity, 
                _jwtFactory, 
                credentials.Email, 
                _jwtOptions, 
                new JsonSerializerSettings { Formatting = Formatting.Indented });

            return jwt;
        }

        public async Task<IdentityResult> RegisterUserAsync(RegisterUserForm form)
        {
            UserEntity userIdentity = _mapper.Map<UserEntity>(form);
            IdentityResult result = await _userManager.CreateAsync(userIdentity, form.Password);

            return result;
        }

        private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
        {
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
                return await Task.FromResult<ClaimsIdentity>(null);

            // get the user to verifty
            var userToVerify = await _userManager.FindByNameAsync(userName);

            if (userToVerify == null) return await Task.FromResult<ClaimsIdentity>(null);

            // check the credentials
            if (await _userManager.CheckPasswordAsync(userToVerify, password))
            {
                return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id));
            }

            // Credentials are invalid, or account doesn't exist
            return await Task.FromResult<ClaimsIdentity>(null);
        }
    }
}