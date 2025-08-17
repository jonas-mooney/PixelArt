using Microsoft.AspNetCore.Mvc;

namespace PixelArt.Controllers
{
    public class MainPageController : Controller
    {
        public IActionResult Index()
        {

            return View();
        } 
    }
}