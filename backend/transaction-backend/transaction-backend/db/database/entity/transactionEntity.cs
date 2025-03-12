using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace db.database.entity
{
    [Table ("users")]
    public class transactionEntity
    {
        [Key]
        [Column("TransactionId")]
        public int TransactionId { get; set; }

        [Column("IdPerson")]
        public int IdPerson { get; set; }

        [Column("CoinType")]
        public string? CointType { get; set; }

        [Column("Mount")]
        public decimal Mount { get; set; }

        [Column("CreatedDate")]
        public DateTime? CreatedDate { get; set; }

        [Column("UpdatedDate")]
        public DateTime? UpdatedDate { get; set; }

        [Column("State")]
        public int State { get; set; }

        [Column("DigitalSignature")]
        public string? DigitalSignature { get; set; }

        [ForeignKey("IdPerson")]
        public virtual required userEntity IdPersonTransfer { get; set; }
    }
}
