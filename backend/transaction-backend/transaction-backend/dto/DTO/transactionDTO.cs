namespace dto.DTO
{
    public class transactionDTO
    {
        public int TransactionId { get; set; }
        public int PersonId { get; set; }  
        public string? CoinType { get; set; }  
        public decimal Amount { get; set; }  
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public int State { get; set; }
        public int PersonTransaction { get; set; }
        public string? DigitalSignature { get; set; }
    }
}
