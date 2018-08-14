using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using webapi.Model.Domain;
using webapi.Services.Interfaces;

namespace webapi.Services
{
    public class ImageService : IImageService
    {
        private IHostingEnvironment _hostingEnvironment;

        public ImageService(IHostingEnvironment hostingEnvironment)
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public Task<List<IFormFile>> GetFundImgsAsync(string fundGuid)
        {
            throw new System.NotImplementedException();
        }

        public async Task<List<ImgUploadResponse>> SaveFundImgsAsync(List<IFormFile> imgs, string fundId)
        {
            var responses = new List<ImgUploadResponse>();
            Guid fundGuid = new Guid(fundId);
            var fundDirName = fundId.Replace("-", "");
            var fundDir = Path.Combine(_hostingEnvironment.ContentRootPath, "images", fundDirName);

            Directory.CreateDirectory(fundDir);
            foreach (var img in imgs)
            {
                var response = new ImgUploadResponse();
                bool isImgValid = true;
                try
                {
                    //todo: validate if img is valid (size)
                    if (isImgValid)
                    {
                        var filePath = Path.Combine(fundDir, img.FileName);
                        using (var fileStream = new FileStream(filePath, FileMode.Create))
                        {
                            await img.CopyToAsync(fileStream);
                        }
                    }
                }
                catch(Exception ex)
                {
                    response.Message = ex.Message;
                    isImgValid = false;
                }
                finally
                {
                    response.IsSucess = isImgValid;
                    responses.Add(response);
                }

            }
            return responses;
        }
    }
}

