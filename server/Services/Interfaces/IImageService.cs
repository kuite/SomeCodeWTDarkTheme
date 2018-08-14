using System;
using System.Threading;
using System.Threading.Tasks;
using webapi.Model.Domain;
using webapi.Model.Common;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace webapi.Services.Interfaces
{
    public interface IImageService
    {
        Task<List<IFormFile>> GetFundImgsAsync(string fundGuid);
        Task<List<ImgUploadResponse>> SaveFundImgsAsync(List<IFormFile> imgs, string fundGuid);
    }
}
