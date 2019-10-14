using System.Net;

namespace Skeleton.Models
{
    public class JsonResponse
    {
        public int Code;
        public bool Success;
        public int Error;
        public string Message = string.Empty;
        public object Result = null;

        public static JsonResponse UnauthorizedResponse
        {
            get
            {
                JsonResponse unauthorizedJsonResponse = new JsonResponse()
                {
                    Code = (int)HttpStatusCode.Unauthorized,
                    Success = false,
                    Error = (int)HttpStatusCode.Unauthorized,
                    Message = "User is not Authorized"
                };
                return unauthorizedJsonResponse;
            }
        }
        public static JsonResponse BadRequestResponse
        {
            get
            {
                JsonResponse badRequestJsonResponse = new JsonResponse()
                {
                    Code = (int)HttpStatusCode.BadRequest,
                    Success = false,
                    Error = (int)HttpStatusCode.BadRequest,
                    Message = string.Empty
                };
                return badRequestJsonResponse;
            }
        }
        public static JsonResponse NotFoundResponse
        {
            get
            {
                JsonResponse notFoundJsonResponse = new JsonResponse()
                {
                    Code = (int)HttpStatusCode.NotFound,
                    Success = false,
                    Error = (int)HttpStatusCode.NotFound,
                    Message = string.Empty
                };
                return notFoundJsonResponse;
            }
        }

        public static JsonResponse EmptyErrorResponse
        {
            get
            {
                JsonResponse errorJsonResponse = new JsonResponse()
                {
                    Code = (int)HttpStatusCode.InternalServerError,
                    Success = false,
                    Error = (int)HttpStatusCode.InternalServerError,
                    Message = string.Empty
                };
                return errorJsonResponse;
            }
        }

        public static JsonResponse ErrorResponse(ErrorResponse errorResponse)
        {
            JsonResponse errorJsonResponse = new JsonResponse()
            {
                Code = (int)HttpStatusCode.InternalServerError,
                Success = false,
                Error = errorResponse.ErrorCode,
                Message = errorResponse.ErrorMessage
            };
            return errorJsonResponse;
        }

        public static JsonResponse OKResponse
        {
            get
            {
                JsonResponse okJsonResponse = new JsonResponse()
                {
                    Code = (int)HttpStatusCode.OK,
                    Success = true,
                    Error = 0,
                    Message = "Success"
                };
                return okJsonResponse;
            }
        }
    }
}