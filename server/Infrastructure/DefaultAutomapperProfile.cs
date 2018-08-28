using AutoMapper;
using webapi.Controllers;
using webapi.Model;
using webapi.Model.Common;
using webapi.Model.Domain.Account;
using webapi.Model.Database;

namespace webapi.Infrastructure
{
    public class DefaultAutomapperProfile : Profile
    {
        public DefaultAutomapperProfile()
        {
            CreateMap<RegisterUser, UserEntity>(MemberList.Source)
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email));
        }
    }
}
