using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Money.API.Models
{
    public class Category
    {
        public Category()
        {
            Transactions = new HashSet<Transaction>();
        }

        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string? Name { get; set; }

        public decimal? Budget { get; set; }

        public int? ParentId { get; set; }

        [JsonIgnore]
        public virtual Category Parent{ get; set; }
        public virtual ICollection<Category> Children { get; set; }
        [JsonIgnore]
        public virtual ICollection<Transaction> Transactions { get; set; }
    }
}