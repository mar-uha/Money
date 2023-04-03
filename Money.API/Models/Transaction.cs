using System.ComponentModel.DataAnnotations;

namespace Money.API.Models
{
    public class Transaction
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string? Description { get; set; }

        [Required]
        public DateOnly Date { get; set; }

        public int CategoryId { get; set; }

        [Required]
        public virtual Category Category { get; set; }

        [Required]
        public decimal Debit { get; set; }

        [Required]
        public decimal Credit { get; set; }
    }
}