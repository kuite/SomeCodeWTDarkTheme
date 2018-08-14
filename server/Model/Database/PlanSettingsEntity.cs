using System;
using webapi.Model.Common;

namespace webapi.Model.Database
{
    public class PlanSettingsEntity
    {
        public int DurationDays { get; set; }
        public decimal MinimumBtc { get; set; }
        public decimal ROI { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public PlanType PlanType { get; set; }
    }
}