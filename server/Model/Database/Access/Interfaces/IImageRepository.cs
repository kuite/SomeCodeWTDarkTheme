using System;
using System.Threading;
using System.Threading.Tasks;
using webapi.Model.Domain;
using webapi.Model.Common;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace webapi.Model.Database.Access.Interfaces
{
    public interface IImageRepository
    {
        Task SaveImgsAsync(List<IFormFile> imgs, string dirPath);
    }
}