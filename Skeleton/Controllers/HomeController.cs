using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Skeleton.Models;

namespace Skeleton.Controllers
{
    public class HomeController: Controller
    {

        [Route("/")]
        [Route("/arms")]
        [Route("/head")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("/login")]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost("/customer/login")]
        public JsonResult LoginUser(string user, string password)
        {
            JsonResponse response = null;
            
            if (string.IsNullOrWhiteSpace(user) || string.IsNullOrWhiteSpace(password))
            {
                response = JsonResponse.BadRequestResponse;
            }
            else
            {
                response = JsonResponse.OKResponse;
            }

            return Json(response);
        }
    }
}
