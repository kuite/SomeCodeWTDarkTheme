using System;
using System.Threading;
using System.Threading.Tasks;
using webapi.Model.Domain;
using webapi.Model.Common;

namespace webapi.Services.Interfaces
{
    public interface IFundService
    {
        Task<Fund> GetFundAsync(string fundGuid);

        Task<Page<Fund>> GetFundsAsync(
            string fundGuid,
            PagingOptions pagingOptions);
    }
}
