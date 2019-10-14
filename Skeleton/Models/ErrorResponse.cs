namespace Skeleton.Models
{
    public class ErrorResponse
    {
        public int ErrorCode { get; set; }
        
        public string ErrorMessage { get; set; }
        
        public string Source { get; set; }
        
        public string MethodName { get; set; }
        
        public string StackTrace { get; set; }
    }
}
