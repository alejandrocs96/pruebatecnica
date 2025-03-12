using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using db.database.entity;
using dto.DTO;
using Microsoft.EntityFrameworkCore;
using service.database.context;

namespace service.service
{
    public class transactionService : ItransactionService
    {
        private dbContext DbContext;

        public transactionService(dbContext DbContext) {
               this.DbContext = DbContext;
        }

        public async Task<transactionEntity> createTransaction(transactionDTO transaction)
        {
            var entity = new transactionEntity
            {
                TransactionId = transaction.TransactionId,
                IdPerson = transaction.PersonId,
                CoinType = transaction.CoinType,
                Amount = transaction.Amount,
                CreatedDate = DateTime.UtcNow,
                UpdatedDate = DateTime.UtcNow,
                State = transaction.State,
                PersonTransaction = transaction.PersonTransaction,
                DigitalSignature = transaction.DigitalSignature
            };
            var create = await DbContext.AddAsync(entity);
            await DbContext.SaveChangesAsync();
            return entity;
        }

        public async Task<List<transactionEntity>> getAllTransactions(int idPerson)
        {
            if (idPerson <= 0)
            {
                throw new ArgumentException("El ID de la persona debe ser mayor a 0.", nameof(idPerson));
            }

            var transactions = await DbContext.transactionsEntity
                .Where(t => t.IdPerson == idPerson).ToListAsync();

            return transactions;
        }
    }
}
