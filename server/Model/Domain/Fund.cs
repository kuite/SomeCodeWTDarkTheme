using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace webapi.Model.Domain
{
    public class Fund
    {
        public string AuthorId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal BtcGoal { get; set; }
        public decimal BtcDonated { get; set; }
        //public List<Transactions> SupportersList 
        public List<IFormFile> RelatedImages { get; set; }
        public DateTimeOffset StartDate { get; set; }
        public DateTimeOffset EndDate { get; set; }
    }
}