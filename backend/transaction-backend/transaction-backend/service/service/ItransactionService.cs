using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using db.database.entity;
using dto.DTO;


namespace service.service
{
    public interface ItransactionService
    {

       Task<List<transactionEntity>> getAllTransactions(int idPerson);
       Task<transactionEntity> createTransaction(transactionDTO transaction);

    }
}
