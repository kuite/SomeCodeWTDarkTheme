using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using webapi.Infrastructure;
using webapi.Model.Domain;
using webapi.Model.Domain.Challenges;
using webapi.Model.Common;
using webapi.Services;
using webapi.Services.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace webapi.Controllers
{
    [Route("/[controller]")]
    public class ChallengesController : ControllerBase
    {
        private readonly IFundService _fundService;
        private readonly IImageService _imageService;
        private readonly PagingOptions _defaultPagingOptions;

        public ChallengesController(
            IFundService fundService,
            IImageService imageService,
            IOptions<PagingOptions> defaultPagingOptionsAccessor)
        {
            _fundService = fundService;
            _imageService = imageService;
            _defaultPagingOptions = defaultPagingOptionsAccessor.Value;
        }


        [HttpGet("GetOpenChallenges")]
        [ValidateModel]
        public async Task<List<OpenChallenge>> GetAllOpenChallengesAsync(
            [FromQuery] PagingOptions pagingOptions)
        {
            pagingOptions.Offset = pagingOptions.Offset ?? _defaultPagingOptions.Offset;
            pagingOptions.Limit = pagingOptions.Limit ?? _defaultPagingOptions.Limit;

            //var challenges = await _fundService.GetFundsAsync(null, pagingOptions);
            Thread.Sleep(2000);
            var challenges = new List<OpenChallenge>
            {
                new OpenChallenge
                {
                    Category = "Other",
                    Currency = "token",
                    Reward = 100,
                    Buyin = 50,
                    Description = "test1",
                    Author = "Roman",
                    CreatedAgo = "2 hours"
                },
                new OpenChallenge
                {
                    Category = "cs:go",
                    Currency = "vip",
                    Reward = 1000,
                    Buyin = 400,
                    Description = "test 22",
                    Author = "Viper",
                    CreatedAgo = "5 hours"
                },
                new OpenChallenge
                {
                    Category = "cs:go",
                    Currency = "vip",
                    Reward = 1000,
                    Buyin = 400,
                    Description = "test 33",
                    Author = "Roman",
                    CreatedAgo = "2 days"
                },
                new OpenChallenge
                {
                    Category = "lol",
                    Currency = "token",
                    Reward = 1000,
                    Buyin = 400,
                    Description = "test4",
                    Author = "Viper",
                    CreatedAgo = "5 days"
                },
                new OpenChallenge
                {
                    Category = "lol",
                    Currency = "vip",
                    Reward = 100,
                    Buyin = 80,
                    Description = "test 5",
                    Author = "Janusz",
                    CreatedAgo = "6 days"
                },
                new OpenChallenge
                {
                    Category = "cs:go",
                    Currency = "token",
                    Reward = 200,
                    Buyin = 100,
                    Description = "test666",
                    Author = "Cooler",
                    CreatedAgo = "47 minutes"
                }
            };

            return challenges;
        }
    }
}
