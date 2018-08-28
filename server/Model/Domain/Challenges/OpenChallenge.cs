using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace webapi.Model.Domain.Challenges
{
    public class OpenChallenge
    {
        public string Category { get; set; }
        public string Currency{ get;set; }
        public decimal Reward{ get;set; }
        public decimal Buyin { get;set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string AuthorId{ get;set; }
        public string CreatedAgo { get; set; }
    }
}