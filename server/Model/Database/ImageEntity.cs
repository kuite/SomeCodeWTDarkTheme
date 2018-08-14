using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using webapi.Model.Common;

namespace webapi.Model.Database
{
    public class ImageEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public Guid RelatedFundId { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public string FilePath { get; set; }
    }
}