using Microsoft.AspNetCore.Mvc;

namespace Skeleton.Areas.Legs.Controllers
{
    [Area("Legs")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}