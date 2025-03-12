using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace db.database.entity
{
    [Table("person")]
    class userEntity
    {
        [Key]
        [Column("Id")]
        public int UserId { get; set; }

        [Column("Name")]
        public string Name { get; set; }

        [Column("LastName")]
        public string LastName { get; set; }

        [Column("Identification")]
        public string Identification { get; set; }

        [Column("Email")]
        public string Email { get; set; }
    }
}
