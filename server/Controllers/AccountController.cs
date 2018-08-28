using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using webapi.Infrastructure;
using webapi.Model.Domain.Account;
using webapi.Model.Common;
using webapi.Services;
using webapi.Services.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace webapi.Controllers
{
    [Route("/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("RegisterUser")]
        [ValidateModel]
        public async Task<IActionResult> RegisterUserAsync([FromBody]RegisterUserForm form)
        {
            var result = await _userService.RegisterUserAsync(form);

            if (!result.Succeeded) return new BadRequestObjectResult(new ApiError("something gone wrong"));

            return Ok(result);
        }

        [HttpPost("login")]
        [ValidateModel]
        public async Task<IActionResult> Login([FromBody]LoginForm credentials)
        {
            Thread.Sleep(2000);
            string response;
            try
            {
                response = await _userService.GetTokenAsync(credentials);
            }
            catch(Exception ex)
            {
                return new BadRequestObjectResult("Wrong login or password.");
            }

            return Ok(response);
            //expires_in in [s]
        }

        [HttpGet("login2")]
        [ValidateModel]
        public async Task<IActionResult> Login2()
        {
            return Ok("asd72hd7a72gd6gda87d26dg72dgb76adtd5sdf");
        }

        [HttpPost("login3")]
        [ValidateModel]
        public async Task<IActionResult> Login3([FromBody]string postedString)
        {
            return Ok(postedString);
        }
        
        [HttpGet("servertext")]
        [ValidateModel]
        public async Task<string> Login4()
        {
            return "zwrocony string z servera";
        }
    }
}