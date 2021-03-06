using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using webapi.Infrastructure;
using webapi.Services;
using webapi.Services.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using webapi.Controllers.ViewModels.Account;
using AutoMapper;
using webapi.Model.Domain.Account;

namespace webapi.Controllers
{
    [Route("/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public AccountController(IMapper mapper, IUserService userService)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpPost("RegisterUser")]
        [ValidateModel]
        public async Task<IActionResult> RegisterUserAsync([FromBody]RegisterUserForm form)
        {
            var data = _mapper.Map<RegisterUser>(form);
            var result = await _userService.RegisterUserAsync(data);

            if (!result.Succeeded) return new BadRequestObjectResult(new ApiError("something gone wrong"));

            return Ok(result);
        }

        [HttpPost("login")]
        [ValidateModel]
        public async Task<ActionResult<UserData>> Login([FromBody]LoginForm credentials)
        {
            Thread.Sleep(2000);
            UserData response;
            try
            {
                var data = _mapper.Map<Login>(credentials);
                var user = await _userService.LoginAsync(data);
                response = new UserData
                {
                    UserName = user.UserName,
                    Id = "asd2df", //user.Jwt.Id
                };
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult(new ApiError("Wrong login or password."));
            }

            return Ok(response);
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