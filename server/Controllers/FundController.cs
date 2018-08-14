using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using webapi.Infrastructure;
using webapi.Model.Domain;
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
    public class FundController : ControllerBase
    {
        private readonly IFundService _fundService;
        private readonly IImageService _imageService;
        private readonly PagingOptions _defaultPagingOptions;

        public FundController(
            IFundService fundService,
            IImageService imageService,
            IOptions<PagingOptions> defaultPagingOptionsAccessor)
        {
            _fundService = fundService;
            _imageService = imageService;
            _defaultPagingOptions = defaultPagingOptionsAccessor.Value;
        }


        [HttpGet("GetFunds")]
        [ValidateModel]
        public async Task<IActionResult> GetFundsAsync(
            [FromQuery] PagingOptions pagingOptions)
        {
            pagingOptions.Offset = pagingOptions.Offset ?? _defaultPagingOptions.Offset;
            pagingOptions.Limit = pagingOptions.Limit ?? _defaultPagingOptions.Limit;

            var funds = await _fundService.GetFundsAsync(null, pagingOptions);

            return Ok(funds);
        }

        [HttpGet("GetFund/{fundId}")]
        [ValidateModel]
        public async Task<IActionResult> GetFundByIdAsync(string fundGuid)
        {
            if (string.IsNullOrEmpty(fundGuid)) return NotFound();

            var fund = await _fundService.GetFundAsync(fundGuid);
            return Ok(fund);
        }

        [HttpPost("SubmitFund")]
        [Authorize(Policy = "ApiUser")]
        [ValidateModel]
        public async Task<IActionResult> SubmitFundAsync([FromBody]Fund fund)
        {
            return Ok(fund);
        }

        [HttpPost("SubmitFundImages")]
        //[Authorize(Policy = "ApiUser")]
        public async Task<IActionResult> SubmitFundImages(List<IFormFile> imgs, string fundGuid)
        {
            var response = await _imageService.SaveFundImgsAsync(imgs, fundGuid);
            return Ok(response);
        }
    }
}
