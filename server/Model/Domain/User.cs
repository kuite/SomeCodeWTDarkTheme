using System;
using System.Collections.Generic;

namespace webapi.Model.Domain
{
    public class User
    {
        public string Jwt { get; set; }
        public string Email { get; set; }
        public string UserName {get; set;}
    }
}