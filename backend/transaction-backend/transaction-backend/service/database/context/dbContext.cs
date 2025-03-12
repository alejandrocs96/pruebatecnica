using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using db.database.entity;  

namespace service.database.context
{
    public class dbContext : DbContext  
    {
        private readonly IConfiguration _configuration;

        #region DbSets
        public DbSet<transactionEntity> transactionsEntity { get; set; }
        #endregion

        public dbContext() { }

        public dbContext(DbContextOptions<dbContext> options, IConfiguration configuration)
            : base(options)
        {
            _configuration = configuration;
        }

        public dbContext(DbContextOptions<dbContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured) 
            {
                optionsBuilder.UseSqlServer(_configuration?.GetConnectionString("ConnectionString"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
