namespace dto.DTO
{
    public class responseDTO<T>
    {
        public int code {  get; set; }
        public string? message { get; set; }
        public string? data { get; set; }
    }
}
