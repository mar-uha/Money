using Microsoft.EntityFrameworkCore;
using Money.API.Models;

namespace Money.API.Data
{
    public class ApiDbContext: DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options)
      : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Transaction>(entity =>
            {
                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Transactions)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Transaction_Category");

                modelBuilder.Entity<Category>()
                    .HasOne(s => s.Parent)
                    .WithMany(m => m.Children)
                    .HasForeignKey(e => e.ParentId)
                    .IsRequired(false);
            });
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Transaction> Transactions { get; set; }
    }
}
