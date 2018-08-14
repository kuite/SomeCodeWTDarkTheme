using System;
using System.Collections.Generic;

namespace webapi.Model.Domain
{
    public class User
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<Fund> CreatedFunds { get; set; }
        public List<InvestingPlan> InvestedPlans { get; set; }
        public DateTimeOffset BirthDate { get; set; }
        public DateTimeOffset CreatedAt { get; set; }
    }
}