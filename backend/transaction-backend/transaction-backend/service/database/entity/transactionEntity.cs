using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace db.database.entity
{
    [Table("transactions")]
    public class transactionEntity
    {
        [Key]
        [Column("TransactionId")]
        public int TransactionId { get; set; }

        [Column("IdPerson")]
        public int IdPerson { get; set; }

        [Column("CoinType")]
        public string? CoinType { get; set; }  

        [Column("Mount")]
        public decimal Amount { get; set; }  

        [Column("CreatedDate")]
        public DateTime? CreatedDate { get; set; }

        [Column("UpdatedDate")]
        public DateTime? UpdatedDate { get; set; }

        [Column("State")]
        public int State { get; set; }

        [Column("DigitalSignature")]
        public string? DigitalSignature { get; set; }

        [Column("PersonTransactionId")]
        public int PersonTransaction { get; set; }
    }
}
