using AutoMapper;
using webapi.Controllers;
using webapi.Model;
using webapi.Model.Common;
using webapi.Model.Domain;
using webapi.Model.Database;

namespace webapi.Infrastructure
{
    public class DefaultAutomapperProfile : Profile
    {
        public DefaultAutomapperProfile()
        {
            CreateMap<RegisterUserForm, UserEntity>(MemberList.Source)
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.Email));
        }
    }
}
